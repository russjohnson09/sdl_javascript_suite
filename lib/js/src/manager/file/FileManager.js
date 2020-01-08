import { RpcRequest } from './../../rpc/RpcRequest.js';
import { RpcType } from './../../rpc/enums/RpcType.js';
import { BaseFileManager } from './BaseFileManager.js';
import { PutFile } from '../../rpc/messages/PutFile.js';
import { FileUtils } from './../../util/FileUtils.js';

class FileManager extends BaseFileManager {


    /**
     * @param {*} sdlSession
     */
    constructor (sdlSession) {
        super(sdlSession);
    }

    createPutFile (file) {
        const putFile = new PutFile();
        putFile.setFileName(file.getName());
        if (typeof file.getFilePath() === 'string') {
            const data = FileUtils.getFileData(file.getFilePath());

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
}


export { FileManager };
