import { RpcRequest } from './../../rpc/RpcRequest.js';
import { RpcType } from './../../rpc/enums/RpcType.js';
import { BaseFileManager } from './BaseFileManager.js';
import { PutFile } from '../../rpc/messages/PutFile.js';
import { FileUtils } from './../../util/FileUtils.js';

class FileManager extends BaseFileManager {

}

FileManager.TAG = 'FileManager';


export { FileManager };
