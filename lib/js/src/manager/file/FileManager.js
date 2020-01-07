// /*
//  * Copyright (c) 2019 Livio, Inc.
//  * All rights reserved.
//  *
//  * Redistribution and use in source and binary forms, with or without
//  * modification, are permitted provided that the following conditions are met:
//  *
//  * Redistributions of source code must retain the above copyright notice, this
//  * list of conditions and the following disclaimer.
//  *
//  * Redistributions in binary form must reproduce the above copyright notice,
//  * this list of conditions and the following
//  * disclaimer in the documentation and/or other materials provided with the
//  * distribution.
//  *
//  * Neither the name of the Livio Inc. nor the names of its contributors
//  * may be used to endorse or promote products derived from this software
//  * without specific prior written permission.
//  *
//  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
//  * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
//  * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
//  * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
//  * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
//  * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
//  * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
//  * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
//  * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
//  * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
//  * POSSIBILITY OF SUCH DAMAGE.
//  */

// package com.smartdevicelink.managers.file;


// import android.support.annotation.NonNull;
// import android.util.Log;

// import com.smartdevicelink.managers.BaseSubManager;
// import com.smartdevicelink.managers.CompletionListener;
// import com.smartdevicelink.managers.file.filetypes.SdlArtwork;
// import com.smartdevicelink.managers.file.filetypes.SdlFile;
// import com.smartdevicelink.proxy.RPCRequest;
// import com.smartdevicelink.proxy.RPCResponse;
// import com.smartdevicelink.proxy.interfaces.ISdl;
// import com.smartdevicelink.proxy.rpc.DeleteFile;
// import com.smartdevicelink.proxy.rpc.DeleteFileResponse;
// import com.smartdevicelink.proxy.rpc.ListFiles;
// import com.smartdevicelink.proxy.rpc.ListFilesResponse;
// import com.smartdevicelink.proxy.rpc.PutFile;
// import com.smartdevicelink.proxy.rpc.PutFileResponse;
// import com.smartdevicelink.proxy.rpc.enums.Result;
// import com.smartdevicelink.proxy.rpc.listeners.OnMultipleRequestListener;
// import com.smartdevicelink.proxy.rpc.listeners.OnRPCResponseListener;
// import com.smartdevicelink.util.DebugTool;

// import java.io.ByteArrayOutputStream;
// import java.io.IOException;
// import java.io.InputStream;
// import java.util.ArrayList;
// import java.util.HashMap;
// import java.util.List;
// import java.util.Map;

// /**
//  * <strong>FileManager</strong> <br>
//  *
//  * Note: This class must be accessed through the SdlManager. Do not instantiate it by itself. <br>
//  *
//  * The SDLFileManager uploads files and keeps track of all the uploaded files names during a session. <br>
//  *
//  * We need to add the following struct: SDLFile<br>
//  *
//  * It is broken down to these areas: <br>
//  *
//  * 1. Getters <br>
//  * 2. Deletion methods <br>
//  * 3. Uploading Files / Artwork
//  */

import { RpcRequest } from './../../rpc/RpcRequest.js';
import { RpcType } from './../../rpc/enums/RpcType.js';
import { BaseSubManager } from '../BaseSubManager.js';
import { PutFile } from '../../rpc/messages/PutFile.js';

import { FileUtils } from './../../util/FileUtils.js';

class FileManager extends BaseSubManager {
    /**
     * @param {} sdlSession
     */
    constructor (sdlSession) {
        super(sdlSession);
        // console.log('create FileManager',{sdlSession});
        this._internalInterface = sdlSession;
        this._bytesAvailable = FileManager.SPACE_AVAILABLE_MAX_VALUE;

        this._uploadedEphemeralFileNames = [];
        this._remoteFiles = [];
    }

    start (completionListener = null) {
        this._completionListener = completionListener;
        this._retrieveRemoteFiles();
    }

    /**
	 * Check if an SdlFile has been uploaded to core
	 * @param {SdlFile} file SdlFile
	 * @return boolean that tells whether file has been uploaded to core (true) or not (false)
	 */
    hasUploadedFile (file) {
        console.log('hasUploadedFile',this._remoteFiles, this._uploadedEphemeralFileNames);
        if (file.isPersistent() && this._remoteFiles !== null && this._remoteFiles.indexOf(file.getName() !== -1)) {
            return true;
        } else if (!file.isPersistent() && this._remoteFiles !== null && this._remoteFiles.indexOf(file.getName()) !== -1
            && this._uploadedEphemeralFileNames.indexOf(file.getName()) !== -1) {
            return true;
        }
        return false;
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

        // if (typeof file.getType() === 'string') {
        // }
        putFile.setFileType(file.getType());

        putFile.setPersistentFile(file.isPersistent());

        return putFile;
    }


    uploadArtwork (sdlArtwork, listener) {
        return this.uploadFile(sdlArtwork, listener);
    }

    uploadFile (file, listener) {
        // console.log('uploadFile',file);
        if (file.isStaticIcon()) {
            console.log('Static icons don\'t need to be uploaded');
            // Static icons don't need to be uploaded
            listener.onComplete(true);
            return;
        }
        const putFile = this.createPutFile(file);

        (async () => {
            const putFileResponse = await this._internalInterface.sendRPC(putFile);

            console.log('putFileResponse',putFileResponse);

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




    // _transitionToState (state) {
    //     console.log('transition to state', state);
    // }


    async _retrieveRemoteFiles () {
        this._remoteFiles = [];

        // let listFiles = new ListFiles();


        const rpcRequest = new RpcRequest(
            {
                functionName: 'ListFiles',
                parameters: {},
                rpcType: RpcType.REQUEST,
            }
        );

        // rpcRequest.setOnRPCResponseListener({
        //     onResponse: (correlationId, response) => {
        //         console.log('onResponse');
        //     },
        // });
        // internalInterface.sendRPC(listFiles);
        console.log('sendRPC');
        const rpcResponse = await this._internalInterface.sendRPC(rpcRequest);
        console.log('FileManager rpcResponse',{rpcResponse});
        if (rpcResponse.getSuccess()) {
            console.log('success');
            this._bytesAvailable = rpcResponse.getSpaceAvailable() ? rpcResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;
            if (Array.isArray(rpcResponse.getFilenames())) {
                console.log('adding remote files');
                //
                this._remoteFiles = rpcResponse.getFilenames();
                // this._remoteFiles.concat(rpcResponse.getFilenames());
                // this._remoteFiles.addAll(rpcResponse.getFilenames());
            }
            // on callback set manager to ready state
            return this._transitionToState(FileManager.READY);
        } else {
            console.log('failed', {rpcResponse},rpcResponse.getSuccess());
            this._bytesAvailable = SPACE_AVAILABLE_MAX_VALUE;
            return this._transitionToState(FileManager.READY);
        }

    }



}

FileManager.TAG = 'FileManager';
const SPACE_AVAILABLE_MAX_VALUE = FileManager.SPACE_AVAILABLE_MAX_VALUE = 2000000000;


export { FileManager };

// abstract class BaseFileManager extends BaseSubManager 

// 	// GETTERS

// 	/**
// 	 * Returns a list of file names currently residing on core
// 	 * @return List<String> of remote file names
// 	 */
// 	public List<String> getRemoteFileNames() {
// 		if (getState() != BaseSubManager.READY){
// 			// error and dont return list
// 			throw new IllegalArgumentException("FileManager is not READY");
// 		}
// 		// return list (this is synchronous at this point)
// 		return remoteFiles;
// 	}

// 	/**
// 	 * Get the number of bytes still available for files for this app.
// 	 * @return int value representing The number of bytes still available
// 	 */
// 	public int getBytesAvailable(){
// 		return bytesAvailable;
// 	}


// 	// DELETION

// 	/**
// 	 * Attempts to delete the desired file from core, calls listener with indication of success/failure
// 	 * @param fileName name of file to be deleted
// 	 * @param listener callback that is called on response from core
// 	 */
// 	public void deleteRemoteFileWithName(@NonNull final String fileName, final CompletionListener listener){
// 		DeleteFile deleteFile = new DeleteFile();
// 		deleteFile.setSdlFileName(fileName);
// 		deleteFile.setOnRPCResponseListener(new OnRPCResponseListener() {
// 			@Override
// 			public void onResponse(int correlationId, RPCResponse response) {
// 				DeleteFileResponse deleteFileResponse = (DeleteFileResponse) response;
// 				if(deleteFileResponse.getSuccess()){
// 					bytesAvailable = deleteFileResponse.getSpaceAvailable() != null ? deleteFileResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;

// 					remoteFiles.remove(fileName);
// 					uploadedEphemeralFileNames.remove(fileName);
// 				}
// 				if(listener != null){
// 					listener.onComplete(deleteFileResponse.getSuccess());
// 				}
// 			}
// 		});
// 		internalInterface.sendRPC(deleteFile);
// 	}

// 	/**
// 	 * Attempts to delete a list of files from core, calls listener with indication of success/failure
// 	 * @param fileNames list of file names to be deleted
// 	 * @param listener callback that is called once core responds to all deletion requests
// 	 */
// 	public void deleteRemoteFilesWithNames(@NonNull List<String> fileNames, final MultipleFileCompletionListener listener){
// 		if(fileNames.isEmpty()){
// 			return;
// 		}
// 		final List<DeleteFile> deleteFileRequests = new ArrayList<>();
// 		for(String fileName : fileNames){
// 			DeleteFile deleteFile = new DeleteFile();
// 			deleteFile.setSdlFileName(fileName);
// 			deleteFileRequests.add(deleteFile);
// 		}
// 		sendMultipleFileOperations(deleteFileRequests, listener);
// 	}

// 	// UPLOAD FILES / ARTWORK

// 	/**
// 	 * Creates and returns a PutFile request that would upload a given SdlFile
// 	 * @param file SdlFile with fileName and one of A) fileData, B) Uri, or C) resourceID set
// 	 * @return a valid PutFile request if SdlFile contained a fileName and sufficient data
// 	 */
// 	abstract PutFile createPutFile(@NonNull final SdlFile file);

// 	/**
// 	 * Sends list of provided requests (strictly PutFile or DeleteFile) asynchronously through internalInterface,
// 	 * calls listener on conclusion of sending requests.
// 	 * @param requests Non-empty list of PutFile or DeleteFile requests
// 	 * @param listener MultipleFileCompletionListener that is called upon conclusion of sending requests
// 	 */
// 	private void sendMultipleFileOperations(final List<? extends RPCRequest> requests, final MultipleFileCompletionListener listener){
// 		final Map<String, String> errors = new HashMap<>();
// 		final HashMap<Integer,String> fileNameMap = new HashMap<>();
// 		final boolean deletionOperation;
// 		if(requests.get(0) instanceof PutFile){
// 			deletionOperation = false;
// 		}else if(requests.get(0) instanceof DeleteFile){
// 			deletionOperation = true;
// 		}else{
// 			return; // requests are not DeleteFile or PutFile
// 		}
// 		internalInterface.sendRequests(requests, new OnMultipleRequestListener() {
// 			int fileNum = 0;

// 			@Override
// 			public void addCorrelationId(int correlationid) {
// 				super.addCorrelationId(correlationid);
// 				if(deletionOperation){
// 					fileNameMap.put(correlationid, ((DeleteFile) requests.get(fileNum++)).getSdlFileName());
// 				}else{
// 					fileNameMap.put(correlationid, ((PutFile) requests.get(fileNum++)).getSdlFileName());
// 				}
// 			}

// 			@Override
// 			public void onUpdate(int remainingRequests) {}

// 			@Override
// 			public void onFinished() {
// 				if(listener != null) {
// 					if (errors.isEmpty()) {
// 						listener.onComplete(null);
// 					} else {
// 						listener.onComplete(errors);
// 					}
// 				}
// 			}

// 			@Override
// 			public void onError(int correlationId, Result resultCode, String info) {
// 				if(fileNameMap != null && fileNameMap.get(correlationId) != null){
// 					errors.put(fileNameMap.get(correlationId), buildErrorString(resultCode, info));
// 				}// else no fileName for given correlation ID
// 			}

// 			@Override
// 			public void onResponse(int correlationId, RPCResponse response) {
// 				PutFileResponse putFileResponse = (PutFileResponse) response;
// 				if(putFileResponse.getSuccess()){
// 					bytesAvailable = putFileResponse.getSpaceAvailable() != null ? putFileResponse.getSpaceAvailable() : SPACE_AVAILABLE_MAX_VALUE;

// 					if(fileNameMap.get(correlationId) != null){
// 						if(deletionOperation){
// 							remoteFiles.remove(fileNameMap.get(correlationId));
// 							uploadedEphemeralFileNames.remove(fileNameMap.get(correlationId));
// 						}else{
// 							remoteFiles.add(fileNameMap.get(correlationId));
// 							uploadedEphemeralFileNames.add(fileNameMap.get(correlationId));
// 						}
// 					}
// 				}
// 			}
// 		});
// 	}



// 	/**
// 	 * Attempts to upload a list of SdlFiles to core
// 	 * @param files list of SdlFiles with file name and one of A) fileData, B) Uri, or C) resourceID set
// 	 * @param listener callback that is called once core responds to all upload requests
// 	 */
// 	public void uploadFiles(@NonNull List<? extends SdlFile> files, final MultipleFileCompletionListener listener){
// 		if(files.isEmpty()){
// 			return;
// 		}
// 		final List<PutFile> putFileRequests = new ArrayList<>();
// 		for(SdlFile file : files){
// 			putFileRequests.add(createPutFile(file));
// 		}
// 		sendMultipleFileOperations(putFileRequests, listener);
// 	}

// 	/**
// 	 * Attempts to upload a SdlArtwork to core
// 	 * @param file SdlArtwork with file name and one of A) fileData, B) Uri, or C) resourceID set
// 	 * @param listener called when core responds to the attempt to upload the file
// 	 */
// 	public void uploadArtwork(final SdlArtwork file, final CompletionListener listener){
// 		uploadFile(file, listener);
// 	}

// 	/**
// 	 * Attempts to upload a list of SdlArtworks to core
// 	 * @param files list of SdlArtworks with file name and one of A) fileData, B) Uri, or C) resourceID set
// 	 * @param listener callback that is called once core responds to all upload requests
// 	 */
// 	public void uploadArtworks(List<SdlArtwork> files, final MultipleFileCompletionListener listener){
// 		uploadFiles(files, listener);
// 	}

// 	/**
// 	 * Check if an SdlFile has been uploaded to core
// 	 * @param file SdlFile
// 	 * @return boolean that tells whether file has been uploaded to core (true) or not (false)
// 	 */
// 	public boolean hasUploadedFile(@NonNull SdlFile file){
// 		if(file.isPersistent() && remoteFiles != null && remoteFiles.contains(file.getName())){
// 			return true;
// 		}else if(!file.isPersistent() && remoteFiles != null && remoteFiles.contains(file.getName())
// 				&& uploadedEphemeralFileNames.contains(file.getName())){
// 			return true;
// 		}
// 		return false;
// 	}

// 	// HELPERS

// 	/**
// 	 * Builds an error string for a given Result and info string
// 	 * @param resultCode Result
// 	 * @param info String returned from OnRPCRequestListener.onError()
// 	 * @return Error string
// 	 */
// 	static public String buildErrorString(Result resultCode, String info){
// 		return resultCode.toString() + " : " + info;
// 	}

// 	/**
// 	 * Helper method to take InputStream and turn it into byte array
// 	 * @param is valid InputStream
// 	 * @return Resulting byte array
// 	 */
// 	byte[] contentsOfInputStream(InputStream is){
// 		if(is == null){
// 			return null;
// 		}
// 		try{
// 			ByteArrayOutputStream os = new ByteArrayOutputStream();
// 			final int bufferSize = 4096;
// 			final byte[] buffer = new byte[bufferSize];
// 			int available;
// 			while ((available = is.read(buffer)) >= 0) {
// 				os.write(buffer, 0, available);
// 			}
// 			return os.toByteArray();
// 		} catch (IOException e){
// 			Log.e(TAG, "Can't read from InputStream", e);
// 			return null;
// 		}
// 	}

// }
