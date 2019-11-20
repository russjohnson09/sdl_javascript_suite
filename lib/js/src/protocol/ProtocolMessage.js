/*
* Copyright (c) 2019, Livio, Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without
* modification, are permitted provided that the following conditions are met:
*
* Redistributions of source code must retain the above copyright notice, this
* list of conditions and the following disclaimer.
*
* Redistributions in binary form must reproduce the above copyright notice,
* this list of conditions and the following
* disclaimer in the documentation and/or other materials provided with the
* distribution.
*
* Neither the name of the Livio Inc. nor the names of its contributors
* may be used to endorse or promote products derived from this software
* without specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
* LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
* CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
* SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
* INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
* CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
* ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
* POSSIBILITY OF SUCH DAMAGE.
*/


import { RpcMessage } from '../rpc/RpcMessage';
// import * as sdl_javascript_suite from 'sdl_javascript_suite';
import { SdlPacket } from '../protocol/SdlPacket';
import { FunctionID } from '../rpc/enums/FunctionID';
import { FrameType } from '../protocol/enums/FrameType';
import { BitConverter } from '../util/BitConverter';
import { BinaryFrameHeader } from '../protocol/BinaryFrameHeader';
import { SdlPsm } from './../transport/SdlPsm';

import { JsonRpcMarshaller } from '../util/JsonRpcMarshaller.js'

class ProtocolMessage {



    //TODO is rpcmessage generic enough?

    /**
     *
     * @param {RpcMessage} message
     * @param sessionId
     * @param messageId
     * @param correlationId
     */
    constructor({rpcMessage,sessionId,messageId,mtu,version},packetCallback)
    {
        this._message = rpcMessage;
        this._sessionId = sessionId;
        this._messageId = messageId;
        // this._correlationId = message._correlationId;

        this._bitConverter = new BitConverter();

        //TODO set this to version 1's mtu.
        //TODO required
        this.mtu = mtu || 1000;

        this.verifyRequests = false;
        // this.verifyRequests = true;

        // this._version = version || 1;

        if (!version) {
            throw 'Version must be specified.';
        }
        //send message using version 2.
        // 2 - 5 number
        this._version = version;

        this._packetCallback = packetCallback;

    }



    static constructInitRequest({protocolVersion}) { //major version only
        // let { version, serviceType, frameInfo, sessionId, messageId, frameType, payload } = packetObj;

        //requested protocol version.
        if (!protocolVersion) {
            protocolVersion = '5.1.3';
        }

        let protocolMajorVersion = +protocolVersion.split('.')[0];
        let version = protocolMajorVersion;

        let sendBson = false;
        let payload = [];

        //https://smartdevicelink.com/en/guides/sdl-overview-guides/protocol-spec/#4212-version-5-negotiation
 

        //message version should be 1 for the initial request.
        // let version = +(protocolVersion.split('.')[0]);

        //expressed as a bit
        // let encryption = 0;
        let encryptionBit = 0;

        // serviceType: 7,
        // version: 1,
        // frameType: 0,
        // controlFrameInfo: 1,
        let frameType = 0;
        let serviceType = 7;
        let frameInfo = 1;

        //TODO will nulls mess things up or undefineds?
        let sessionId = 0;



        let messageId = 0;

        let dataSize = payload.length;


        let encryption = false;

        if (protocolMajorVersion > 4) {
            version = 1;
        }

        let sdlPacket = new SdlPacket(version, encryption, frameType, serviceType, frameInfo, sessionId);
        if (protocolMajorVersion > 4) {
            let jsonObj = {protocolVersion};
            const BSON = require('bson');
            const buffer = BSON.serialize(jsonObj);
            payload = buffer

            sdlPacket.putTag(`protocolVersion`,protocolVersion);
        }



        let result = sdlPacket.constructPacket();
        return result;

    }

    //default hearbeat is set to 7 seconds. 
    //HeartBeatTimeout = 7000
    static constructHeartBeatAck({version,sessionId,messageId}) {

        let encryptionBit = 0;

        let frameType = 0;
        let serviceType = SdlPacket.SERVICE_TYPE_CONTROL; //RPC end all
        let frameInfo = SdlPacket.FRAME_INFO_HEART_BEAT_ACK;
        // let messageId = 0;
        // let sessionId = 0;

        let payload = [];

        let bytes = this._constructPacketStatic({version,encryptionBit,frameType,serviceType,frameInfo,sessionId,messageId,payload});

        return bytes;
    }

    static constructEndAllServices({hashId,sessionId,version}) {

        let encryptionBit = 0;
        let frameType = 0;
        let serviceType = 7; //RPC end all

        //SdlPacket.FRAME_INFO_END_SERVICE = 0x04;
        let frameInfo = 4;
        let messageId = 0;

        let payload = [];
        let hashCheck;

        if (version > 4) {
            let jsonObj = {hashId};
            const BSON = require('bson');
            const buffer = BSON.serialize(jsonObj);
            payload = buffer;
        }
        else {
            payload = new Uint8Array(BitConverter.intToByteArray(hashId));

        }



        // let hashCheck = BitConverter.arrayBufferToInt32(new ArrayBuffer(payload));


        console.log(`constructEndAllServices`,{version,encryptionBit,frameType,serviceType,frameInfo,sessionId,messageId,payload,hashId,hashCheck})
        //does version actually matter here?
        let bytes = this._constructPacketStatic({version,encryptionBit,frameType,serviceType,frameInfo,sessionId,messageId,payload});

        let sdlPsm = new SdlPsm();

        sdlPsm.readChunk(bytes);

        console.log(`constructEndAllServices`,{version,encryptionBit,frameType,serviceType,frameInfo,sessionId,messageId,payload,hashId,hashCheck,sdlPsm})

        return bytes;
    }

    static _constructPacketStatic(packetObject) {
        let rpcMessage = null;
        let {sessionId,messageId,version} = packetObject;

        //TODO mtu
        let mtu = 100000;

        let obj = new this({rpcMessage,sessionId,messageId,mtu,version});

        return obj._constructPacket(packetObject);
    }


    //TODO use SdlPacket.
    //Error: buffer length 32 must === bson size 33
    //slight difference in size?
    _constructPacket(packetObj)
    {
        let { version, serviceType, frameInfo, sessionId, messageId, frameType, payload, encryption } = packetObj;

        encryption = false;

        console.log(`SdlPacket`,{version, serviceType, frameInfo, sessionId, messageId, frameType, payload, encryption});
        let dataSize = payload.length;
        let offset = 0;
        let bytesToWrite = dataSize;
        let sdlPacket = new SdlPacket(version, encryption, frameType, serviceType, frameInfo, sessionId, dataSize, messageId, payload, offset, bytesToWrite);

        let result = sdlPacket.constructPacket();
        let verify = this.verifyRequests;

        if (verify) {
            let sdl = new SdlPsm();
            sdl.readChunk(result);
            sdl._initData();

            console.log(`ProtocolMessage verify`,sdl);
        }

        return result;
    }

    /**
     * 
     * baseAndroid/src/main/java/com/smartdevicelink/protocol/SdlProtocolBase.java -> sendMessage.
     * 
     * @param {*} params 
     * @param {*} functionId 
     * @param {*} rpcType 
     * @param {*} correlationId 
     * @param {*} bufferExtra - bulk data
     */
    _buildRPCMainBuffer(params,functionId, rpcType, correlationId,bufferExtra)
    {
        console.log(`_buildRPRCMainBuffer`);
        let message = {
            getParameters: () => params
        };

        let json_buffer = JsonRpcMarshaller.marshall(message);
        let json_size = json_buffer.length;

        //TODO move this to BinaryFrameHeader.
        let bfh = new BinaryFrameHeader(rpcType, functionId, correlationId);

		bfh.setJsonData(json_buffer);
        bfh.setJsonSize(json_size);
        bfh.setBulkData(bufferExtra);
        let headerSize = 12;
        let jsonSize = bfh.getJsonSize();
        let bulkData = bfh.getBulkData();
        let bulkDataSize = 0;
        if (bulkData) {
            bulkDataSize = bulkData.length;
        }
        let totalMessageSize = headerSize + jsonSize + bulkDataSize;
        //header size + json size + bulk data length.
        let data = new Uint8Array(totalMessageSize);
        // return bfh.assembleHeaderBytes();
        data.set(bfh.assembleHeaderBytes(),0);
        data.set(json_buffer,headerSize);
        if (bulkData) {
            data.set(bulkData,headerSize + jsonSize);
        }
        return data;
    }


    //TODO priority
    _initConsecutiveFrames({version,serviceType,sessionId,messageId,buffer,length})
    {

        //Values 0x01 - 0xFF are used incrementally as each consecutive frame is created and sent in the sequence. eg The first consecutive packet in the sequence will have the value 0x01, the next consecutive frame that contains the next chunk of data in the sequence will have the value 0x02.
        //when reaching 256 reset to 0 or 1?

        //0xFF = 255

        let frameSequenceNumber;
        let count = 0;

        let offset = 0;


        //success
//         TcpProxyOnly got message from app <Buffer 52 07 00 01 00 00 00 00 00 00 00 0e 00 00 c7 e9 00 00 00 05>
// TcpProxyOnly got message from app <Buffer 53 07 01 01 00 00 30 39 00 00 00 0e 00 00 00 20 00 00 00 0f 00 00 00 50 7b 22 73 79 6e 63 46 69 6c 65 4e 61 6d 65 22 3a 22 31 35 37 33 38 34 34 31 30 ... >
// TcpProxyOnly got message from app <Buffer 53 07 02 01 00 00 30 39 00 00 00 0e 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 ... >
// TcpProxyOnly got message from app <Buffer 53 07 03 01 00 00 30 39 00 00 00 0e 1b 38 98 d9 41 a6 c4 24 52 1b e5 ab fc bf 9e f2 cf 97 6d ff 00 67 5b 76 b5 fb 71 ac 69 46 a1 5f ff d4 23 38 6a c5 ... >
// TcpProxyOnly got message from app <Buffer 53 07 04 01 00 00 30 39 00 00 00 0e b6 9d f8 9b f9 9c 1c 45 09 7f b0 88 89 43 9e da 57 52 e7 7c 0b 19 22 9e 59 5f 0d a9 73 b2 38 2b 94 85 37 f6 3f 63 ... >
// TcpProxyOnly got message from app <Buffer 53 07 00 01 00 00 07 05 00 00 00 0e ef 78 35 b8 db b6 9a 84 d0 a3 24 de a5 b2 48 26 84 2c 47 36 c3 59 04 34 e5 b7 0f f2 83 e1 e1 c4 e8 b3 d2 66 84 77 ... >

//fail, first frame missing data?
// TcpProxyOnly got message from app <Buffer 52 07 00 02 00 00 00 00 00 00 00 02>
// TcpProxyOnly got message from app <Buffer 53 07 01 02 00 00 30 39 00 00 00 02 00 00 00 20 00 00 00 03 00 00 00 50 7b 22 73 79 6e 63 46 69 6c 65 4e 61 6d 65 22 3a 22 31 35 37 33 38 34 34 32 33 ... >
// TcpProxyOnly got message from app <Buffer 53 07 02 02 00 00 30 39 00 00 00 02 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 ... >
// TcpProxyOnly got message from app <Buffer 53 07 03 02 00 00 30 39 00 00 00 02 1b 38 98 d9 41 a6 c4 24 52 1b e5 ab fc bf 9e f2 cf 97 6d ff 00 67 5b 76 b5 fb 71 ac 69 46 a1 5f ff d4 23 38 6a c5 ... >
// TcpProxyOnly got message from app <Buffer 53 07 04 02 00 00 30 39 00 00 00 02 b6 9d f8 9b f9 9c 1c 45 09 7f b0 88 89 43 9e da 57 52 e7 7c 0b 19 22 9e 59 5f 0d a9 73 b2 38 2b 94 85 37 f6 3f 63 ... >
// TcpProxyOnly got message from app <Buffer 53 07 00 02 00 00 07 05 00 00 00 02 ef 78 35 b8 db b6 9a 84 d0 a3 24 de a5 b2 48 26 84 2c 47 36 c3 59 04 34 e5 b7 0f f2 83 e1 e1 c4 e8 b3 d2 66 84 77 ... >

        while(true) {
            if (offset + length >= buffer.length) {
                frameSequenceNumber = 0; //last frame
            }
            else {
                frameSequenceNumber = (count % 255) + 1; //1,2,3,...,255,1
            }

            let header            =
            this._constructPacket({
                                      version,
                                      serviceType,
                                      frameInfo: frameSequenceNumber,
                                      sessionId,
                                      messageId,
                                      frameType: FrameType.CONSECUTIVE,
                                      payload: buffer.slice(offset,offset + length)
                                  });

            this._packetCallback(header);

            if (frameSequenceNumber === 0)
            {
                break;
            }

            // frameSequenceNumber++;
            count++;
            offset += length;
        }
    }

    _doRequest()
    {
        let version = this._version;

        let frameInfo = 0;
        let frameType = FrameType.SINGLE;

        let serviceType = SdlPacket.SERVICE_TYPE_RPC;
        let rpcType =  this._message.getRPCType();
        let sessionId = this._sessionId;
        let messageId = this._messageId;

        let functionName = this._message.getFunctionName();
        let functionId = FunctionID.getIdFromName(functionName);

        if (!functionId)
        {
            console.log(`failed to find function ${functionName}`);
            throw new Error(`failed to find function ${functionName}`);
        }

        let mainBuffer = this._buildRPCMainBuffer(this._message.getParameters(), functionId, rpcType, this._message.getCorrelationID(), this._message.getBulkData());

        let mtu = this.mtu;

        if (!mtu) {
            console.log(`mtu must be defined`);
            process.exit(1)
        }

        let frameCount = Math.ceil(mainBuffer.length / mtu);

        console.log(`ProtocolMessage frameCount`,{frameCount})

        if (frameCount <= 1 
            ) {
            let fullPacket = this._constructPacket({
                                      version,
                                      serviceType,
                                      frameInfo,
                                      sessionId,
                                      messageId,
                                      frameType,
                                      payload: mainBuffer,
                                      length: mtu,
                                  });

            this._packetCallback(fullPacket);

        }
        else {
            let buffer = new ArrayBuffer(8); // Int32 has 8 bytes
            let view = new DataView(buffer);
            view.setUint32(0, mainBuffer.length, false);
            view.setUint32(4,frameCount, false);

            // payload = new Uint8Array(BitConverter.intToByteArray(hashId));
            
            let payload = new Uint8Array(buffer);

            let firstHeader =
            this._constructPacket({
                                      version,
                                      serviceType,
                                      frameInfo,
                                      sessionId,
                                      messageId,
                                      frameType: FrameType.FIRST,
                                      payload
                                  });
            this._packetCallback(firstHeader);

            this._initConsecutiveFrames({
                version,
                serviceType,
                frameInfo,
                sessionId,
                messageId,
                buffer: mainBuffer,
                length: mtu
            });

        }


    }

    /**
     *
     * @param {RpcMessage} message
     * @param sessionId
     * @returns {Uint8Array}
     */
    static buildRPC({rpcMessage,sessionId,messageId,mtu,version},cb) {
        let obj = new ProtocolMessage({rpcMessage,sessionId,messageId,mtu,version},cb);
        obj._doRequest();
        return obj;

    }


}


export { ProtocolMessage };
