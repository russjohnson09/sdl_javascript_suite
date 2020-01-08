import { RpcRequest } from './../../rpc/RpcRequest.js';
import { RpcType } from './../../rpc/enums/RpcType.js';
import { BaseSubManager } from '../BaseSubManager.js';
import { PutFile } from '../../rpc/messages/PutFile.js';
import { FileUtils } from './../../util/FileUtils.js';

class BaseFileManager extends BaseSubManager {
    /**
     * @param {*} sdlSession
     */
    constructor (sdlSession) {
        super(sdlSession);
        this._bytesAvailable = SPACE_AVAILABLE_MAX_VALUE;
        this._remoteFiles = [];
        this._uploadedEphemeralFileNames = [];
    }

    /**
     * @param {CompletionListener} completionListener - Listener is called once the manager's state is READY, LIMITED, or ERROR
     */
    start (onComplete) {
        this._retrieveRemoteFiles();
        super.start(onComplete);
    }

    /**
	 * Returns a list of file names currently residing on core
	 * @return Array<String> - List of remote file names
	 */
    getRemoteFileNames () {
        if (this.getState() !== BaseSubManager.READY) {
            // error and dont return list
            throw new Error('FileManager is not READY');
        }
        return this._remoteFiles;
    }

    /**
	 * Get the number of bytes still available for files for this app.
	 * @return Number - Number of bytes still available
	 */
    getBytesAvailable () {
        return this._bytesAvailable;
    }

    /**
     * Retrieve any persistent files on startup.
     * File Manager is ready once the initial ListFiles request is complete.
     */
    async _retrieveRemoteFiles () {
        this._remoteFiles = [];

        const rpcRequest = new RpcRequest(
            {
                functionName: 'ListFiles',
                parameters: {},
                rpcType: RpcType.REQUEST,
            }
        );

        const rpcResponse = await this._internalInterface.sendRPC(rpcRequest);
        if (rpcResponse.getSuccess()) {
            this._bytesAvailable = rpcResponse.getSpaceAvailable() ? rpcResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;
            const filenames = rpcResponse.getFilenames();
            if (Array.isArray(filenames)) {
                this._remoteFiles = filenames;
            }
            // on callback set manager to ready state
            return this._transitionToState(BaseSubManager.READY);
        } else {
            this._bytesAvailable = SPACE_AVAILABLE_MAX_VALUE;
            return this._transitionToState(BaseSubManager.READY);
        }
    }

    /**
	 * Attempts to delete the desired file from core, calls listener with indication of success/failure
	 * @param {String} fileName name of file to be deleted
	 * @param {CompletionListener} listener callback that is called on response from core
	 */
    async deleteRemoteFileWithName (fileName, onComplete = null) {
        const rpcRequest = new RpcRequest(
            {
                functionName: 'DeleteFile',
                parameters: {
                    syncFileName: fileName,
                },
                rpcType: RpcType.REQUEST,
            }
        );

        const rpcResponse = await this._internalInterface.sendRPC(rpcRequest);
        const isSuccess = rpcResponse.getSuccess();
        if (isSuccess) {
            this._bytesAvailable = rpcResponse.getSpaceAvailable() ? rpcResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;
            this._remoteFiles.splice(this._remoteFiles.indexOf(fileName), 1);
            this._uploadedEphemeralFileNames.splice(this._remoteFiles.indexOf(fileName), 1);
        }
        if (onComplete !== null) {
            onComplete(isSuccess);
        }
        return isSuccess;
    }


    /**
	 * Attempts to delete a list of files from core, calls listener with indication of success/failure
	 * @param fileNames list of file names to be deleted
	 * @param listener callback that is called once core responds to all deletion requests
	 */
    async deleteRemoteFilesWithNames (fileNames, onComplete = null) {
        const results = [];

        if (fileNames.length > 0) {
            for (const filename of fileNames) {
                results.push(this.deleteRemoteFileWithName(filename));
            }
            // console.log('deleteRemoteFilesWithNames',{results});

            for (const idx in results) {
                results[idx] = await Promise.resolve(results[idx]);
            }
            // console.log('deleteRemoteFilesWithNames',{results});
        }

        if (onComplete !== null) {
            onComplete(results);
        }
        return results;
    }

    async uploadFile (file, onComplete = null) {
        if (file.isStaticIcon()) {
            // Static icons don't need to be uploaded
            onComplete(true);
            return;
        }
        const putFile = this.createPutFile(file);

        const putFileResponse = await this._internalInterface.sendRPC(putFile);
        if (putFileResponse.getSuccess()) {
            this._bytesAvailable = putFileResponse.getSpaceAvailable() !== null ? putFileResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;
            this._remoteFiles.push(file.getName());
            this._uploadedEphemeralFileNames.push(file.getName());
        }
        if (onComplete !== null) {
            onComplete(putFileResponse.getSuccess());
        }

        return putFileResponse.getSuccess();
    }

    /**
	 * Attempts to upload a list of SdlFiles to core
	 * @param files list of SdlFiles with file name and one of A) fileData, B) Uri, or C) resourceID set
	 * @param listener callback that is called once core responds to all upload requests
	 */
    async uploadFiles (files, onComplete = null) {
        const results = [];
        if (files.length > 0) {
            for (const file of files) {
                results.push(this.uploadFile(file));
            }
            for (const idx in results) {
                results[idx] = await Promise.resolve(results[idx]);
            }
        }

        if (onComplete !== null) {
            onComplete(results);
        }
        return results;
    }


    uploadArtwork (sdlArtwork, listener) {
        return this.uploadFile(sdlArtwork, listener);
    }


    uploadArtworks (sdlArtworks, listener) {
        return this.uploadFiles(sdlArtworks, listener);
    }

    /**
	 * Check if an SdlFile has been uploaded to core
	 * @param {SdlFile} file SdlFile
	 * @return boolean that tells whether file has been uploaded to core (true) or not (false)
	 */
    hasUploadedFile (file) {
        const filename = file.getName();
        const isPersistent = file.isPersistent();
        const remoteFiles = this._remoteFiles;
        const ephemeralFiles = this._uploadedEphemeralFileNames;
        const isInRemoteFiles = remoteFiles.indexOf(filename) !== -1;
        const isInEphemeralFiles = ephemeralFiles.indexOf(filename) !== -1;

        if (isPersistent) {
            return isInRemoteFiles;
        } else { // if it is not persistent it must be listed in both remote and ephemeral files.
            return isInRemoteFiles && isInEphemeralFiles;
        }
    }
}

const SPACE_AVAILABLE_MAX_VALUE = BaseFileManager.SPACE_AVAILABLE_MAX_VALUE = 2000000000;

export { BaseFileManager };