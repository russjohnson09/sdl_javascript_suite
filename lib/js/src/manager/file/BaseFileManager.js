import { RpcRequest } from './../../rpc/RpcRequest.js';
import { RpcType } from './../../rpc/enums/RpcType.js';
import { BaseSubManager } from '../BaseSubManager.js';
import { PutFile } from '../../rpc/messages/PutFile.js';
import { FileUtils } from './../../util/FileUtils.js';
import { CompletionListener } from '../CompletionListener.js';

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
    start (completionListener = null) {
        this._retrieveRemoteFiles();
        super.start(completionListener);
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
        // return list (this is synchronous at this point)
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
    deleteRemoteFileWithName (fileName, onComplete = null) {
        const rpcRequest = new RpcRequest(
            {
                functionName: 'DeleteFile',
                parameters: {
                    syncFileName: fileName,
                },
                rpcType: RpcType.REQUEST,
            }
        );

        (async () => {
            const rpcResponse = await this._internalInterface.sendRPC(rpcRequest);
            if (rpcResponse.getSuccess()) {
                console.log(this._remoteFiles, this._uploadedEphemeralFileNames);
                console.log(this._bytesAvailable,rpcResponse.getSpaceAvailable());
                this._bytesAvailable = rpcResponse.getSpaceAvailable() ? rpcResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;
                this._remoteFiles.splice(this._remoteFiles.indexOf(fileName), 1);
                this._uploadedEphemeralFileNames.splice(this._remoteFiles.indexOf(fileName), 1);
                console.log(this._remoteFiles, this._uploadedEphemeralFileNames);
            }
            if (onComplete !== null) {
                onComplete(rpcResponse.getSuccess());
            }
        })();
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


    createPutFile (file) {
        const putFile = new PutFile();

        putFile.setFileName(file.getName());


        if (typeof file.getFilePath() === 'string') {
            let data = FileUtils.getFileData(file.getFilePath());

            if (data !== null) {
                putFile.setFileData(data);
            } else {
                throw new Error('File at path was empty');
            }
        } else if (file.getFileData() !== null) {
            putFile.setFileData(file.getFileData());
        } else {
            throw new Error('The SdlFile to upload does ' +
            'not specify its resourceId, Uri, or file data');
        }

        putFile.setFileType(file.getType());

        putFile.setPersistentFile(file.isPersistent());

        return putFile;
    }


    uploadArtwork (sdlArtwork, listener) {
        return this.uploadFile(sdlArtwork, listener);
    }

    uploadFile (file, listener) {
        if (file.isStaticIcon()) {
            // Static icons don't need to be uploaded
            listener.onComplete(true);
            return;
        }
        const putFile = this.createPutFile(file);

        (async () => {
            const putFileResponse = await this._internalInterface.sendRPC(putFile);
            if (putFileResponse.getSuccess()) {
                this._bytesAvailable = putFileResponse.getSpaceAvailable() !== null ? putFileResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;
                this._remoteFiles.push(file.getName());
                this._uploadedEphemeralFileNames.push(file.getName());
            }
            if (listener !== null) {
                listener.onComplete(putFileResponse.getSuccess());
            }
        })();
    }
}

const SPACE_AVAILABLE_MAX_VALUE = BaseFileManager.SPACE_AVAILABLE_MAX_VALUE = 2000000000;

export { BaseFileManager };