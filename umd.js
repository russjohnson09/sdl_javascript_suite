(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('bson')) :
    typeof define === 'function' && define.amd ? define(['bson'], factory) :
    (global = global || self, global['sdl-js'] = factory(global.BSON));
}(this, function (BSON) { 'use strict';

    BSON = BSON && BSON.hasOwnProperty('default') ? BSON['default'] : BSON;

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

    class LifecycleManager {

    }

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

    class BitConverter {

        /**
    	 * @param {ArrayBuffer} bytes - byte array that will be converted to hex
    	 * @param {Number} offset - int optional, representing the offset to begin conversion at
    	 * @param {Number} length - int optional, representing number of bytes in array to convert
    	 * @return {String} the String containing converted hex values or null if byte array is null
    	 */
        arrayBufferToHex(bytes, offset = 0, length) {
            // TODO
        }

        /**
    	 * @param {String} hexString - the String containing converted hex values
    	 * @return {ArrayBuffer} byte array converted from input String or null if String is null
    	 */
        hexToArrayBuffer(hexString) {
            // TODO
        }

        /**
    	 * @param {ArrayBuffer} buffer - buffer that will be converted to int
         * @param {Number} offset - int optional, the offset shift
    	 * @return {Number} int converted from buffer or -1 if buffer is null
    	 */
        arrayBufferToInt32(buffer, offset = 0) {
            // TODO
            if(!buffer) return -1;
            let view = new DataView(buffer);
            return view.getUint32(offset);
        }

        /**
    	 * @param {Number} value - the integer to be converted
    	 * @return {ArrayBuffer} buffer converted from input value
    	 */
        int32ToArrayBuffer(value) {
            let buffer = new ArrayBuffer(4); // Int32 has 4 bytes
            let view = new DataView(buffer);
            view.setUint32(0, value, false);
            return buffer;
        }

    }

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

    class BinaryFrameHeader {

        /**
        * @constructor
        * @param {RpcType} rpcType - An RPC Enum  representing the type of RPC being described (Request, Response, Notification)
        * @param {FunctionID} functionId - A FunctionID Enum representing the RPC function that is being described
        * @param {Number} correlationId - A number representing an ID to correlate a request and response pair
        * @param {Number} jsonSize - A number representing the size of a JSON object
        */
        constructor(rpcType, functionId, correlationId, jsonSize) {
            this._rpcType = rpcType;
            this._functionId = functionId;
            this._correlationId = correlationId;
            this._jsonSize = jsonSize;

            // TODO
            this._jsonData = null;
            this._bulkData = null;

            return this;

        }

        /**
        * Takes in a byte array and transforms it to an instance of this class
        * @param {Uint8Array} binHeader
        * @return {BinaryFrameHeader} an instance of this class from parsing the supplied Uint8Array 
        */
        fromBinaryHeader(binHeader) {
            // TODO
        }

        /**
        * Uses the private members of this class to construct a byte array header
        * @return {Uint8Array} - A byte array
        */
        assembleHeaderBytes() {
            // TODO
        }

        /**
        * @param {RpcType} rpcType - An RPC Enum  representing the type of RPC being described (Request, Response, Notification)
        */
        setRPCType(type) {
            this._rpcType = type;
        }
        
        /**
        * @return {RpcType} rpcType - An RPC Enum  representing the type of RPC being described (Request, Response, Notification)
        */
        getRPCType() {
            return this._rpcType;
        }
        
        /**
        * @param {FunctionID} functionId - A FunctionID Enum representing the RPC function that is being described

        */
        setFunctionId(id) {
            this._functionId = id;
        }
        
        /**
        * @return {FunctionID} functionId - A FunctionID Enum representing the RPC function that is being described
        */
        getFunctionId() {
            return this._functionId;
        }
        
        /**
        * @param {Number} correlationId - A number representing an ID to correlate a request and response pair
        */
        setCorrelationId(id) {
            this._correlationId = id;
        }
        
        /**
        * @return {Number} correlationId - A number representing an ID to correlate a request and response pair

        */
        getCorrelationId() {
            return this._correlationId;
        }
        
        /**
        * @param {Number} size - A number representing the size of a JSON object
        */
        setJSONSize(size) {
            this._jsonSize = size;
        }
        
        /**
        * @return {Number} - A number representing the size of a JSON object
        */
        getJSONSize() {
            return _jsonSize;
        }

        /**
        * @param {Number} data - A byte array representing JSON data
        */
        setJSONData(data) {
            // TODO
        }
        
        /**
        * @return {Uint8Array} - A byte array representing JSON data
        */
        getJSONData() {
            return this._jsonData;
        }

        /**
        * @param {Uint8Array} data - A byte array representing bulk data
        */
        setBulkData(data) {
            this._bulkData = data;
        }

        /**
        * @return {Uint8Array} - A byte array representing bulk data
        */
        getBulkData() {
            return this._bulkData;
        }

    }

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

    /**
     * This class will assemble the different types of messages
     */
    class MessageFrameAssembler{

        /**
        * @constructor
        * @param {Number} headerSize
        * @param {Function} callback
        */
        constructor(headerSize=8, callback){
            if(callback == null){
                throw "Callback can't be null for MessageFrameAssembler";
            }
            
            this._accumulator = null; //TODO byte array output stream
            this._headersize = headerSize;
            this._totalSize = 0;
            this._callback = callback;
        }
        
        /**
        * @param {SdlPacket} sdlPacket
        */
        handleFrame(sdlPacket){

        }

        /**
        * @param {SdlPacket} sdlPacket
        */
        handleMultiFrameMessageFrame(sdlPacket){

        }

        /**
        * @param {SdlPacket} sdlPacket
        */
        handleFirstDataFrame(sdlPacket){

        }
        
        /**
        * @param {SdlPacket} sdlPacket
        */
        handleRemainingFrame(sdlPacket){

        }

    }

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

    class Enum {

        /**
        * @constructor
        */
        constructor() {
            // intentionally empty
        }

        /**
        * Returns the key for a given value if the value is found within the key:value map
        * @param value - A primitive value to find in the map
        * @param map {Object} - An map of string properties to primitive values 
        * @return {null|String} - Returns null if not found
        */
        static keyForValueInternal(value, map) {
            for (let key in map) {
                if (map[key] === value) {
                    return key;
                }
            }

            return null;
        }

        /**
        * Returns the given value if the value is found within the key:value map
        * @param value - A primitive value to find in the map
        * @param map {Object} - An map of string properties to primitive values 
        * @return {*} - Returns a value if found, or null if not found
        */
        static valueForStringInternal(value, map) {
            for (let key in map) {
                if (map[key] === value) {
                    return map[key];
                }
            }

            return null;
        }

        /**
        * A method for subclasses to implement that does what keyForValueInternal does
        * @param value - A primitive value to find in the map of the subclass
        * @return {*} - Returns a value if found, or null if not found
        */
        valueForString(value) {
            throw "method must be overridden";
        }
    }

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

    /**
     * @typedef {Enum} FrameType
     * @property {Object} MAP
     */
    class FrameType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
        * @return {Number}
        */
        static get CONTROL() {
            return FrameType.MAP.CONTROL;
        }

        /**
        * @return {Number}
        */
        static get FIRST() {
            return FrameType.MAP.FIRST;
        }

        /**
        * @return {Number}
        */
        static get CONSECUTIVE() {
            return FrameType.MAP.CONSECUTIVE;
        }

        /**
        * @return {Number}
        */
        static get SINGLE() {
            return FrameType.MAP.SINGLE;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            for (let key in FrameType.MAP) {
                if (FrameType.MAP[key] === value) {
                    return FrameType.MAP[key];
                }
            }

            return null;
        }
    }

    FrameType.MAP = Object.freeze({
      'CONTROL': 0x00,
      'FIRST': 0x02,
      'CONSECUTIVE': 0x03,
      'SINGLE': 0x01,
    });

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

    //TODO add more properties

    /**
     * @typedef {Object} SdlPacket
     * @property {number} EXTRA_PARCEL_DATA_LENGTH
     * @property {number} HEADER_SIZE
     * @property {number} HEADER_SIZE_V1
     * @property {number} ENCRYPTION_MASK
     * @property {number} SERVICE_TYPE_CONTROL
     * @property {number} SERVICE_TYPE_RPC
     * @property {number} SERVICE_TYPE_PCM
     * @property {number} SERVICE_TYPE_VIDEO
     * @property {number} SERVICE_TYPE_BULK_DATA
     * @property {number} FRAME_INFO_HEART_BEAT
     * @property {number} FRAME_INFO_START_SERVICE
     * @property {number} FRAME_INFO_START_SERVICE_ACK
     * @property {number} FRAME_INFO_START_SERVICE_NAK
     * @property {number} FRAME_INFO_END_SERVICE
     * @property {number} FRAME_INFO_END_SERVICE_ACK
     * @property {number} FRAME_INFO_END_SERVICE_NAK
     * @property {number} FRAME_INFO_REGISTER_SECONDARY_TRANSPORT
     * @property {number} FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_ACK
     * @property {number} FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_NAK
     * @property {number} FRAME_INFO_TRANSPORT_EVENT_UPDATE
     * @property {number} FRAME_INFO_SERVICE_DATA_ACK
     * @property {number} FRAME_INFO_HEART_BEAT_ACK
     * @property {number} FRAME_INFO_FINAL_CONNESCUTIVE_FRAME
     * @property {number} FRAME_INFO_RESERVED

     * @property {function} getVersion
     * @property {function} getEncryption
     * @property {function} getServiceType
     * @property {function} getFrameInfo
     * @property {function} getSessionID
     * @property {function} getMessageID
     * @property {function} getDataSize
     * @property {function} setPayload
     * @property {function} getPayload
     * @property {function} getEncryptionBit
     * @property {function} getFrameType
     * @property {function} toUint8Array
     * @property {function} toString
     * @property {function} constructPacket
     * @property {function} putTag
     * @property {function} getTag
     */

    class SdlPacket {

        /**
        * @constructor
        * @param {Number} version - Protocol version to use
        * @param {Boolean} encryption - Whether or not the payload in this packet is encrypted
        * @param {FrameType} frameType - A number representing the packet frame type
        * @param {ServiceType} serviceType - The service that this packet is associated with
        * @param {Number} frameInfo - Specific frame info related to this packet
        * @param {Number} sessionID - ID this packet is associated with
        * @param {Number} dataSize - Size of the payload that will be added
        * @param {Number} messageID - ID of this specific packet
        * @param {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        * @param {Number} offset
        * @param {Number} bytesToWrite
        */
        constructor(version = 1, encryption = false, frameType = -1, serviceType = -1, frameInfo = -1, sessionID = 0, dataSize = 0, messageID = 0, payload = null, offset = 0, bytesToWrite = 0) {
            this._version = version;
            this._encryption = encryption;
            this._frameType = frameType;
            this._serviceType = serviceType;
            this._frameInfo = frameInfo;
            this._sessionID = sessionID;
            this._dataSize = dataSize;
            this._messageID = messageID;
            this._payload = payload;
            this._offset = offset;
            this._bytesToWrite = bytesToWrite;

            this._bsonPayload = undefined;

            if (payload !== null) {
                this._payload = new Uint8Array(bytesToWrite);
                this._payload = this._payload.slice(offset, bytesToWrite);
            }

            return this;

        }

        /**
        * @return {Number} - Protocol version used by this packet
        */
        getVersion() {
            return this._version;
        }

        /**
        * @return {Boolean} - Whether or not the payload in this packet is encrypted
        */
        getEncryption() {
            return this._encryption;
        }

        /**
        * @return {ServiceType} - The service that this packet is associated with
        */
        getServiceType() {
            return this._serviceType;
        }

        /**
        * @return {Number} - Specific frame info related to this packet
        */
        getFrameInfo() {
            return this._frameInfo;
        }

        /**
        * @return {Number} - ID this packet is associated with
        */
        getSessionID() {
            return this._sessionID;
        }

        /**
        * @return {Number} - ID of this specific packet
        */
        getMessageID() {
            return this._messageID;
        }

        /**
        * @return {Number} - Size of the payload that will be added
        */
        getDataSize() {
            return this._dataSize;
        }

        /**
        * @return {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */
        setPayload(payload) {
            this._payload = payload;
        }

        /**
        * @return {Uint8Array} - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */
        getPayload() {
            return this._payload;
        }

        /**
        * @return {Number} - Returns a number representing a byte mask depending on the boolean value
        */
        getEncryptionBit() {
            return this._encryption ? SdlPacket.ENCRYPTION_MASK : 0;
        }

        /**
        * @return {FrameType} - A number representing the packet frame type
        */
        getFrameType() {
            if (FrameType.valueForString(this._frameType) !== null) {
                return this._frameType;
            } else {
                return FrameType.SINGLE;
            }
        }

        /**
        * @return {Uint8Array} - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */
        toUint8Array() {
            return constructPacket(this._version, this._encryption, this._frameType, this._serviceType, this._frameInfo, this._sessionID, this._dataSize, this._messageID, this._payload);
        }


        /**
        * @return {String} - String representation of the packet
        */
        toString() {
            let output = "***** Sdl Packet *****";
            output += `\nVersion: ${this._version}`;
            output += `\nEncryption: ${this._encryption}`;
            output += `\nFrameType: ${this._frameType}`;
            output += `\nServiceType: ${this._serviceType}`;
            output += `\nFrameInfo: ${this._frameInfo}`;
            output += `\nSessionID: ${this._sessionID}`;
            output += `\nDataSize: ${this._dataSize}`;

            if(this._version > 1){
                output += `\nMessageID: ${this._messageID}`;
            }

            output += "\n***** Sdl Packet End *****";

            return output;
        }

        /**
    	 * This method takes in the various components to the SDL packet structure and creates a new byte array that can be sent via the transport
         * @param {Number} version - Protocol version to use
         * @param {Boolean} encryption - Whether or not the payload in this packet is encrypted
         * @param {FrameType} frameType - A number representing the packet frame type
         * @param {ServiceType} serviceType - The service that this packet is associated with
         * @param {Number} controlFrameInfo - Specific frame info related to this packet
         * @param {Number} sessionID - ID this packet is associated with
         * @param {Number} dataSize - Size of the payload that will be added
         * @param {Number} messageID - ID of this specific packet
         * @param {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
    	 * @return {Uint8Array} - A byte[] representation of an SdlPacket built using the supplied params
    	 */
        static constructPacket(version, encryption, frameType, serviceType, controlFrameInfo, sessionID, dataSize, messageID, payload) {
            let dataView = null;
            let dataViewIndex = 0;

            switch (version) {
                case 1:
                    dataView = new Uint8Array(SdlPacket.HEADER_SIZE_V1 + dataSize);
                    break;
                default:
                    dataView = new Uint8Array(SdlPacket.HEADER_SIZE + dataSize);
            }

            dataView[dataViewIndex++] = version<<4 + getEncryptionBit(encryption) + frameType;
            dataView[dataViewIndex++] = serviceType;
            dataView[dataViewIndex++] = controlFrameInfo;
            dataView[dataViewIndex++] = sessionID;
            dataView[dataViewIndex++] = dataSize&0xFF000000 >> 24;
            dataView[dataViewIndex++] = dataSize&0x00FF0000 >> 16;
            dataView[dataViewIndex++] = dataSize&0x0000FF00 >> 8;
            dataView[dataViewIndex++] = dataSize&0x000000FF;

            if (version > 1) {
                dataView[dataViewIndex++] = messageID&0xFF000000 >> 24;
                dataView[dataViewIndex++] = messageID&0x00FF0000 >> 16;
                dataView[dataViewIndex++] = messageID&0x0000FF00 >> 8;
                dataView[dataViewIndex++] = messageID&0x000000FF;
            }

            if (payload !== null && payload.length > 0) {
                dataView.set(payload, dataViewIndex++);
            }

            return dataView;
        }

        /**
         * @param {String} tag - String key to add as a property to the BSON map
         * @param {Object} data - Object to add as a value to the BSON map
         */
        putTag(tag, data) {
            // TODO bson
        }

        /**
         * @param {String} tag - String key to add as a property to the BSON map
         * @return {Object} data - Object as a value found from the the BSON map
         */
        getTag(tag) {
            // TODO bson
        }

    }

    SdlPacket.EXTRA_PARCEL_DATA_LENGTH                      = 24;
    SdlPacket.HEADER_SIZE                                   = 12;
    SdlPacket.HEADER_SIZE_V1                                = 8;
    SdlPacket.ENCRYPTION_MASK                               = 0x08;

    /**
     * Service Type
     */
    SdlPacket.SERVICE_TYPE_CONTROL                          = 0x00;
    //RESERVED 0x01 - 0x06
    SdlPacket.SERVICE_TYPE_RPC                              = 0x07;
    //RESERVED 0x08 - 0x09
    SdlPacket.SERVICE_TYPE_PCM                              = 0x0A;
    SdlPacket.SERVICE_TYPE_VIDEO                            = 0x0B;
    //RESERVED 0x0C - 0x0E
    SdlPacket.SERVICE_TYPE_BULK_DATA                        = 0x0F;
    //RESERVED 0x10 - 0xFF

    /**
     * Frame Info
     */
    SdlPacket.FRAME_INFO_HEART_BEAT                         = 0x00;
    SdlPacket.FRAME_INFO_START_SERVICE                      = 0x01;
    SdlPacket.FRAME_INFO_START_SERVICE_ACK                  = 0x02;
    SdlPacket.FRAME_INFO_START_SERVICE_NAK                  = 0x03;
    SdlPacket.FRAME_INFO_END_SERVICE                        = 0x04;
    SdlPacket.FRAME_INFO_END_SERVICE_ACK                    = 0x05;
    SdlPacket.FRAME_INFO_END_SERVICE_NAK                    = 0x06;
    SdlPacket.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT       = 0x07;
    SdlPacket.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_ACK   = 0x08;
    SdlPacket.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_NAK   = 0x09;
    //0x0A-0xFC are reserved
    SdlPacket.FRAME_INFO_TRANSPORT_EVENT_UPDATE             = 0xFD;
    SdlPacket.FRAME_INFO_SERVICE_DATA_ACK                   = 0xFE;
    SdlPacket.FRAME_INFO_HEART_BEAT_ACK                     = 0xFF;
    SdlPacket.FRAME_INFO_FINAL_CONNESCUTIVE_FRAME           = 0x00;
    SdlPacket.FRAME_INFO_RESERVED                           = 0x00;

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

    class RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters = {}) {
            this._isFormatRequested = false;
            this._rpcSpecVersion = null;
            this._parameters = JSON.parse(JSON.stringify(parameters || {}));
        }

        /**
        * @return {Object}
        */
        getParameters() {
            return JSON.parse(JSON.stringify(this._parameters));
        }

        /**
        * @param {String} key
        * @return {*}
        */
        getParameter(key) {
            return this._parameters[key];
        }

        /**
        * @param {String} key
        * @param {*} value
        * @return {RpcStruct}
        */
        setParameter(key, value) {
            if (value === null) {
                delete this._parameters[key];
            } else {
                this._parameters[key] = value;
            }

            return this;
        }

        /**
        * @param {Function} tClass
        * @param {String} key
        * @return {Object}
        */
        getObject(tClass, key) {
            return this.formatObject(tClass, this.getParameter(key));
        }

        /**
        * @param {Function} tClass
        * @param {Object} obj
        * @return {null|Object}
        */
        formatObject(tClass, obj) {
            if (obj === null) {
                return null;
            } else if (obj.constructor === tClass) {
                // if tClass is String and obj is a String, this should execute
                return obj;
            } else if (obj.constructor === String) {
                if (tClass instanceof Enum) {
                    return tClass.valueForString(obj);
                } else if (tClass instanceof String) {
                    // this may be redundant
                    return obj;
                }
                return null;
            } else if (obj.constructor === Object) {
                if (tClass instanceof RpcStruct) {
                    return new tClass(obj);
                }
                return null;
            } else if (obj.constructor === Array) {
                // TODO: ensure completeness
                if (obj.length > 0) {
                    let outArray = [];
                    for (item in obj) {
                        outArray.push(this.formatObject(tclass, item));
                    }
                    return outArray;
                }
            }
            return null;
        }

        /**
        * @param {Function} tClass
        * @param {Object} obj
        */
        validateType(tClass, obj) {
            if (
                (tClass instanceof Enum && tClass.valueForString(obj) === null)
                || (obj !== null && obj.constructor !== tClass)
            ) {
                throw `${obj.name} must be of type ${tClass.name}`;
            }
        }

    }

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

    /**
     * @typedef {Object} RpcMessage
     * @property {RpcType} rpcType
     */
    class RpcMessage extends RpcStruct {

        /*
        {
            "rpcType": "Request",
            "functionName": "RegisterAppInterface",
            "coorelationID": "320948",
            "isEncrypted": false,
            "parameters": {
                "appName": "Hello"
            },
            "bulkData": "...",
        }
        */

        /**
        * @constructor
        */
        constructor(store = {}) {
            super(store.parameters);
            this._isEncrypted = false;
            this._rpcType = store.rpcType;
            this._functionName = store.functionName;
            this._correlationID = store.correlationID;
            this._bulkData = this.setBulkData(store.bulkData);
        }

        /**
        * @return {RpcType}
        */
        getRPCType() {
            return this._rpcType;
        }

        /**
        * @param {RpcType} type
        * @return {RpcMessage}
        */
        setRPCType(type) {
            this._rpcType = type;

            return this;
        }

        /**
        * @return {String} type
        */
        getFunctionName() {
            return this._functionName;
        }

        /**
        * @param {String} name
        * @return {RpcMessage}
        */
        setFunctionName(name) {
            this._functionName = name;

            return this;
        }

        /**
        * @return {Uint8Array} data
        */
        getBulkData() {
            return this._bulkData;
        }

        /**
        * @param {UInt8Array} data
        * @return {RpcMessage}
        */
        setBulkData(data = null) {
            if (data !== null) {
                this._bulkData = data.slice(0);
            } else {
                this._bulkData = null;
            }

            return this;
        }

        /**
        * @return {Boolean}
        */
        getIsEncrypted() {
            return this._isEncrypted;
        }

        /**
        * @param {Boolean} bool
        * @return {RpcMessage}
        */
        setIsEncrypted(bool) {
            this._isEncrypted = bool;

            return this;
        }

    }

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

    /**
     * @typedef {Enum} ServiceType
     * @property {Object} MAP
     */
    class ServiceType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
        * @return {Number}
        */
        static get CONTROL() {
            return ServiceType.MAP.CONTROL;
        }

        /**
        * @return {Number}
        */
        static get RPC() {
            return ServiceType.MAP.RPC;
        }

        /**
        * @return {Number}
        */
        static get AUDIO() {
            return ServiceType.MAP.AUDIO;
        }

        /**
        * @return {Number}
        */
        static get VIDEO() {
            return ServiceType.MAP.VIDEO;
        }

        /**
        * @return {Number}
        */
        static get HYBRID() {
            return ServiceType.MAP.HYBRID;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            for (let key in ServiceType.MAP) {
                if (ServiceType.MAP[key] === value) {
                    return ServiceType.MAP[key];
                }
            }

            return null;
        }
    }

    ServiceType.MAP = Object.freeze({
        'CONTROL': 0x00,
        'RPC': 0x07,
        'AUDIO': 0x0A,
        'VIDEO': 0x0B,
        'HYBRID':0x0F,
    });

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


    //TODO check how to handle the property/function exposure
    /**
     * @typedef {Object} SdlProtocolListener
     * @property {function} setOnRpcMessageReceivedListener
     * @property {function} setOnControlServiceMessageReceivedListener
     * @property {function} setOnDecryptRequestListener
     * @property {function} onControlServiceMessageReceived
     * @property {function} onRpcMessageReceived
     * @property {function} onStartServiceACKReceived
     * @property {function} onStartServiceNAKReceived
     * @property {function} onEndServiceACKReceived
     * @property {function} onEndServiceNAKReceived
     * @property {function} onServiceEncryptionStarted
     */
    class SdlProtocolListener {

        /**
         * @constructor 
         */
        constructor() {
            this._onRpcMessageReceived = null;
            this._onControlServiceMessageReceived = null;
        }

        /**
         * @param {function} listener 
         */
        setOnRpcMessageReceivedListener(listener) {
            this._onRpcMessageReceived = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnControlServiceMessageReceivedListener(listener) {
            this._onControlServiceMessageReceived = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnDecryptRequestListener(listener) {
            this._onDecryptRequestListener = listener;
        }

        //TODO add the setters for the added functions

        /*
        * Listener methods to be called
        *
        */


        /**
         * @param {SdlPacket} sdlPacket 
         */
        onControlServiceMessageReceived(sdlPacket) {
            if (typeof this._onControlServiceMessageReceived === 'function') {
                this._onControlServiceMessageReceived(sdlPacket);
            }
        }

        /**
         * @param {RpcMessage} rpcMessage 
         */
        onRpcMessageReceived(rpcMessage){
            if (typeof this._onRpcMessageReceived === 'function') {
                this._onRpcMessageReceived(rpcMessage);
            }
        }


        /**
         * @param {SdlPacket} sdlPacket 
         */
        onStartServiceACKReceived(sdlPacket){
            if (typeof this._onStartServiceACKReceived === 'function') {
                this._onStartServiceACKReceived(sdlPacket);
            }
        }

        /**
         * @param {SdlPacket} sdlPacket 
         */
        onStartServiceNAKReceived(sdlPacket){
            if (typeof this._onStartServiceNAKReceived === 'function') {
                this._onStartServiceNAKReceived(sdlPacket);
            }
        }

        /**
         * @param {SdlPacket} sdlPacket 
         */
        onEndServiceACKReceived(sdlPacket){
            if (typeof this._onEndServiceACKReceived === 'function') {
                this._onEndServiceACKReceived(sdlPacket);
            }
        }

        /**
         * @param {SdlPacket} sdlPacket 
         */
        onEndServiceNAKReceived(sdlPacket){
            if (typeof this._onEndServiceNAKReceived === 'function') {
                this._onEndServiceNAKReceived(sdlPacket);
            }
        }

        /**
         * @param {ServiceType} serviceType 
         */
        onServiceEncryptionStarted(serviceType) {
            if (typeof this.onServiceEncryptionStarted === 'function') {
                this.onServiceEncryptionStarted(serviceType);
            }
        }


    }

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

    class TransportListener {

        /**
         * @constructor
         */
        constructor() {
            this._onTransportConnected = null;
            this._onTransportDisconnected = null;
            this._onError = null;
            this._onPacketReceived = null;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnTransportConnected(func) {
            this._onTransportConnected = func;

            return this;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnTransportDisconnected(func) {
            this._onTransportDisconnected = func;

            return this;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnError(func) {
            this._onError = func;

            return this;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnPacketReceived(func) {
            this._onPacketReceived = func;

            return this;
        }

        
        onTransportConnected() {
            if (typeof this._onTransportConnected === 'function' ) {
                this._onTransportConnected();
            }
        }

        onTransportDisconnected() {
            if (typeof this._onTransportDisconnected === 'function' ) {
                this._onTransportDisconnected();
            }
        }

        onError() {
            if (typeof this._onError === 'function' ) {
                this._onError();
            }
        }

        onPacketReceived(sdlPacket) {
            if (typeof this._onPacketReceived === 'function' ) {
                this._onPacketReceived(sdlPacket);
            }
        }

    }

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

    /**
     * @typedef {Object} TransportConfigBase
     * @property {TransportType} _transportType
     * @property {Function} getTransportType
     */
    class TransportConfigBase {

    	/**
         * @constructor
         * @param {TransportType} transportType - enum
         */
        constructor(transportType) {
            this._transportType = transportType;
        }

        /**
         * @return {TransportType}
         */
        getTransportType() {
            return this._transportType;
        }
    }

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

    class Version {

        /**
        * @constructor
        */
        constructor(major, minor, patch) {
            this.setMajor(major);
            this.setMinor(minor);
            this.setPatch(patch);
        }

        /**
        * @param {Number} major
        * @return {Version}
        */
        setMajor(major) {
            this._major = parseInt(major) || 0;

            return this;
        }

        /**
        * @return {Number}
        */
        getMajor() {
            return this._major;
        }

        /**
        * @param {Number} minor
        * @return {Version}
        */
        setMinor(minor) {
            this._minor = parseInt(minor) || 0;

            return this;
        }

        /**
        * @return {Number}
        */
        getMinor() {
            return this._minor;
        }

        /**
        * @param {Number} patch
        * @return {Version}
        */
        setPatch(patch) {
            this._patch = parseInt(patch) || 0;

            return this;
        }

        /**
        * @return {Number}
        */
        getPatch() {
            return this._patch;
        }

        /**
        * @param {String} version - Parse this string to a Version object
        * @return {Version}
        */
        fromString(version) {
            let versions = version.split(".");
            if (versions.length != 3) throw "Incorrect version string format";
            this.setMajor(versions[0]);
            this.setMinor(versions[1]);
            this.setPatch(versions[2]);

            return this;
        }

        /**
        * @return {String}
        */
        toString() {
            return `${this.getMajor()}.${this.getMinor()}.${this.getPatch()}`;
        }

        /**
        * Method to test if this instance of Version is newer than the supplied one.
        * @param version - the version to check against
        * @return {Number} - 1 if this instance is newer, -1 if supplied version is newer, and 0 if they are equal
        */
        isNewerThan(version) {
            if(this.getMajor() > version.getMajor()){
                return 1;
            }else if(this.getMajor() == version.getMajor()){
                if(this.getMinor() > version.getMinor()){
                    return 1;
                } else if(this.getMinor() == version.getMinor()){
                    if(this.getPatch() > version.getPatch()){
                        return 1;
                    }else if(this.getPatch() == version.getPatch()){
                        return 0;
                    }
                }
            }
            return -1;
        }
    }

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

    class SdlProtocolBase {

        /**
         * 
         * @param { TransportConfigBase } baseTransportConfig
         * @param { SdlProtocolListener } sdlProtocolListener
         */
        constructor(baseTransportConfig, sdlProtocolListener) {
            this._transportConfig = baseTransportConfig;
            this._sdlProtocollistener = sdlProtocolListener;
            reset();

            _createTransportListener();
            this._transportManager = null; //The transport manager should be created

        }

        /**
         * Listens for transport-related events and handles them here
         * @private
         */
        _createTransportListener() {
            this._transportListener = new TransportListener();
            this._transportListener.setOnTransportConnected(function () {
                //Transport connected
                //Start RPC session

            });
            this._transportListener.setOnTransportDisconnected(function () {
                //Transport disconnected
                //Shut everything down

            });
            this._transportListener.setOnPacketReceived(function (sdlPacket) {
                //SdlPacket received
                this._handlePacketReceived(sdlPacket); //Could just pass in this funciton instead of creating an anonymouse funciton to call it

            });
            this._transportListener.setOnError(function () {
                //Handle error?

            });

        }

        /**
         * Starts up the SDL protocol class. It will kick off the transport manager and underlying transport.
         */
        start() {
            if (this._transportManager == null) {
                throw "transport manager was null, unable to start SDL Protocol";
            }

            this._transportManager.start();

            return this;
        }

        /**
         * @param {ServiceType} serviceType 
         * @return {Number} max transport unit for the give service type
         */
        getMtu(serviceType) {
            let retVal = this._mtus.get(serviceType);
            if (retVal != null) {
                return retVal;
            }
            return SdlProtocolBase.V1_V2_MTU_SIZE;
        }

        /**
         * @return {Boolean} isConnected
         */
        isConnected() {
            return this._transportManager != null && this._transportManager.isConnected(null, null);
        }

        /**
         * Sets internal class members to default values
         */
        reset() {
            this._protocol_version = new Version(1, 0, 0);
            this._transportConfig = baseTransportConfig;
            this._headerSize = SdlProtocolBase.V1_HEADER_SIZE;
            this.serviceStatus = new Map();
            this.serviceStatus[ServiceType.CONTROL] = true;
            this._mtus = new Map();
            this._mtus[ServiceType.RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - this._headerSize;
            this._hashID = 0;
            this._messageID = 0;
            this._messageFrameAssemblers = new Map();
        }

        /**
         * @return {Version} protocol_version
         */
        getProtocolVersion() {
            return this._protocol_version;
        }


        /**
         * This method will set the major protocol version that we should use. It will also set the default MTU based on version.
         * @param {Number} version - major version to use
         * @private
         */
        _setVersion(version) {
            if (version > 5) {
                this.protocolVersion = new Version("5.1.0"); //protect for future, proxy only supports v5 or lower
                headerSize = SdlProtocolBase.V2_HEADER_SIZE;
                mtus[ServiceType.RPC] = SdlProtocolBase.V3_V4_MTU_SIZE;
            } else if (version == 5) {
                this.protocolVersion = new Version("5.0.0");
                headerSize = SdlProtocolBase.V2_HEADER_SIZE;
                mtus[ServiceType.RPC] = SdlProtocolBase.V3_V4_MTU_SIZE;
            } else if (version == 4) {
                this.protocolVersion = new Version("4.0.0");
                headerSize = SdlProtocolBase.V2_HEADER_SIZE;
                mtus[ServiceType.RPC] = SdlProtocolBase.V3_V4_MTU_SIZE; //versions 4 supports 128k MTU
            } else if (version == 3) {
                this.protocolVersion = new Version("3.0.0");
                headerSize = SdlProtocolBase.V2_HEADER_SIZE;
                mtus[ServiceType.RPC] = SdlProtocolBase.V3_V4_MTU_SIZE; //versions 3 supports 128k MTU
            } else if (version == 2) {
                this.protocolVersion = new Version("2.0.0");
                headerSize = SdlProtocolBase.V2_HEADER_SIZE;
                mtus[ServiceType.RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - headerSize;
            } else if (version == 1) {
                this.protocolVersion = new Version("1.0.0");
                headerSize = SdlProtocolBase.V1_HEADER_SIZE;
                mtus[ServiceType.RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - headerSize;
            }
        }

        /**
         * @param {SdlPacket} sdlPacket
         */
        sendPacket(sdlPacket) {
            if (this._transportManager != null) {
                this._transportManager.sendPacket(sdlPacket);
            }
        }

        /**
         * @param {RpcMessage} rpcMessage 
         */
        sendRpc(rpcMessage) {
            if (rpcMessage != null) {
                //(version = 1, encryption = false, frameType = -1, serviceType = -1, frameInfo = -1, sessionID = 0, dataSize = 0, messageID = 0, payload = null, offset = 0, bytesToWrite = 0) {

                let paramBytes = new Uint8Array(rpcMessage.getParameters());
                let sdlPacket = new SdlPacket(this._protocol_version.getMajor(), false);
                //TODO: sdlPacket.set


            }

        }

        sendMessage(protocolMessage) {
            //TODO 
            // This is the method that handles all the building of sdl packets that get sent 
            // in the java suite lib. We want to avoid using protocol message here as an extra 
            // class that doesn't make much sense. I believe we should probably alter SdlPacket
            // to handle the situation protocol message used to
        }

        /**
         * Handle an SdlPacket depending on its FrameType
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handlePacketReceived(sdlPacket) {
            if (this._protocol_version == null || this._protocol_version.getMajor() == 1) {
                this._setVersion(packet.version);
            }
            if (sdlPacket.getFrameType() == FrameType.FIRST || sdlPacket.getFrameType() == FrameType.CONSECUTIVE) {
                messageFrameAssembler = _getMessageFrameAssembler(sdlPacket);
                messageFrameAssembler.handleFrame(sdlPacket);
            } else {
                //Packet can be handled as is
                switch (sdlPacket.getFrameType()) {
                    case FrameType.CONTROL:
                        this._handleControlPacket(sdlPacket);
                        break;
                    case FrameType.SINGLE:
                        switch (sdlPacket.getServiceType()) {
                            case ServiceType.RPC:
                                this._handleRPCPacket(sdlPacket);
                                break;

                        }
                }
            }


        }

        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _getMessageFrameAssembler(sdlPacket) {
            let messageFrameAssembler = this._messageFrameAssemblers[sdlPacket.getMessageID()];
            if (messageFrameAssembler == null) {
                messageFrameAssembler = MessageFrameAssembler(this._headerSize, new function (sdlPacket) {
                    //TODO
                    // Make sure we want to pass back an SDL Packet. 

                    this._messageFrameAssemblers[sdlPacket.getMessageID()] = null; //Remove the mapping
                });
                this._messageFrameAssemblers[sdlPacket.getMessageID()] = messageFrameAssembler;
            }

            return messageFrameAssembler;
        }

        /**
         * This method will handle control packets for all service types
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleControlPacket(sdlPacket) {
            let serviceType = sdlPacket.getServiceType();
            let frameInfo = sdlPacket.getFrameInfo();
            let payload = sdlPacket.getPayload();

            switch (frameInfo) {
                case sdlPacket.FRAME_INFO_START_SERVICE_ACK:
                    this._handleStartServiceACK(sdlPacket);
                    break;
                case sdlPacket.FRAME_INFO_START_SERVICE_NAK:
                    this._handleStartServiceNAK(sdlPacket);
                    break;
                case sdlPacket.FRAME_INFO_END_SERVICE_ACK:
                    this._handleEndServiceACK(sdlPacket);
                    break;
                case sdlPacket.FRAME_INFO_END_SERVICE_NAK:
                    this._handleEndServiceACK(sdlPacket);
                    break;
            }

        }

        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleStartServiceACK(sdlPacket) {
            //TODO
            //Handle things internally first
            switch (serviceType) {
                case ServiceType.RPC:
                case ServiceType.CONTROL:
                case ServiceType.HYBRID:
                case ServiceType.AUDIO:
                case ServiceType.VIDEO:
            }

            //Then call the listener (should be SdlSession)
            if (this._sdlProtocollistener != null) {
                this._sdlProtocollistener.onStartServiceACKReceived(sdlPacket);
            }
        }

        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleStartServiceNAK(sdlPacket) {
            //TODO
        }

        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleEndServiceACK(sdlPacket) {
            //TODO
        }

        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleEndServiceNAK(sdlPacket) {
            //TODO
        }


        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleControlServicePacket(sdlPacket) {
            if (this._sdlProtocollistener != null) {
                this._sdlProtocollistener.onControlServiceMessageReceived(sdlPacket);
            }
        }

        /**
         * @param {SdlPacket} sdlPacket 
         * @private
         */
        _handleRPCPacket(sdlPacket) {
            let payload = sdlPacket.getPayload();
            // TODO possibly add error checking that ensures this is an RPC packet
            let rpcMessage = null;
            if (this._protocol_version.getMajor() == 1) ;
            //TODO actually create the RPC message

            if (this._sdlProtocollistener != null) {
                this._sdlProtocollistener.onRpcMessageReceived(rpcMessage);
            }

        }


        //Not sure if we need

        /**
         * @param {*} sessionID 
         * @param {*} _hashID 
         */
        endSession(sessionID, _hashID) { };

    }

    /**
     * Original header size based on version 1.0.0 only
     */
    SdlProtocolBase.V1_HEADER_SIZE              = 8;
    /**
     * Larger header size that is used by versions 2.0.0 and up
     */
    SdlProtocolBase.V2_HEADER_SIZE              = 12;
    SdlProtocolBase.V1_V2_MTU_SIZE              = 1500;
    SdlProtocolBase.V3_V4_MTU_SIZE              = 131072;
    /**
     * Max supported protocol version in this release of the library
    */
    SdlProtocolBase.MAX_PROTOCOL_VERSION        = new Version(5, 2, 0);

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

    class ControlFrameTags {
    }

    // hidden inner objects

    const StartServiceACKBase = {
        MTU: "mtu",
    };

    const NAKBase = {
        REJECTED_PARAMS: "rejectedParams",
    };

    const StartServiceProtocolVersion = {
        /** The negotiated version of the protocol. Must be in the format "Major.Minor.Patch"*/
        PROTOCOL_VERSION: "protocolVersion",
    };

    const StartServiceHashId = {
        /** Hash ID to identify this service and used when sending an EndService control frame*/
        HASH_ID: "hashId",
    };

    const StartServiceDimensions = {
        HEIGHT: "height",
        WIDTH: "width",
    };

    //static members 

    ControlFrameTags.RPC = Object.freeze({
        StartService: StartServiceProtocolVersion,

        StartServiceACK: Object.assign({
            /** HU allowed transport for secondary connection */
            SECONDARY_TRANSPORTS: "secondaryTransports",
            /** HU allowed transports for audio and video services (1 == Primary, 2 == Secondary) */
            AUDIO_SERVICE_TRANSPORTS: "audioServiceTransports",
            VIDEO_SERVICE_TRANSPORTS: "videoServiceTransports",
            /** Auth token to be used for log in into services **/
            AUTH_TOKEN: "authToken",
        }, StartServiceACKBase, StartServiceProtocolVersion, StartServiceHashId),

        StartServiceNAK: NAKBase,

        EndService: StartServiceHashId,

        EndServiceACK: {},

        EndServiceNAK: NAKBase,

        TransportEventUpdate: {
            TCP_IP_ADDRESS: "tcpIpAddress",
            TCP_PORT: "tcpPort",
        },

        RegisterSecondaryTransport: {},

        RegisterSecondaryTransportACK: {},

        RegisterSecondaryTransportNAK: Object.assign({
            REASON: "reason",
        }, NAKBase),
    });

    ControlFrameTags.Audio = Object.freeze({
        StartService: {},

        StartServiceACK: StartServiceACKBase,

        StartServiceNAK: NAKBase,

        EndService: {},

        EndServiceACK: {},

        EndServiceNAK: NAKBase,
    });

    ControlFrameTags.Video = Object.freeze({
        StartService: Object.assign({
            VIDEO_PROTOCOL: "videoProtocol",
            VIDEO_CODEC: "videoCodec",
        }, StartServiceDimensions),

        StartServiceACK: Object.assign({}, StartServiceACKBase, StartServiceDimensions),
    });

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

    /**
     * @typedef {Enum} RpcType
     * @property {Object} MAP
     */
    class RpcType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
         * @return {Number} 
         */
        static get NOTIFICATION() {
            return RpcType.MAP.NOTIFICATION;
        }

        /**
         * @return {Number} 
         */
        static get RESPONSE() {
            return RpcType.MAP.RESPONSE;
        }

        /**
         * @return {Number} 
         */
        static get REQUEST() {
            return RpcType.MAP.REQUEST;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return RpcType.valueForStringInternal(value, RpcType.MAP);
        }

        /**
        * Returns the key of the map with the corresponding value
        * @param {Number} value
        * @return {null|String} - Returns null if not found
        */
        static keyForValue(value) {
            return RpcType.keyForValueInternal(value, RpcType.MAP);
        }
    }

    RpcType.MAP = Object.freeze({
        'NOTIFICATION': 0x2,
        'RESPONSE': 0x1,
        'REQUEST': 0x0,
    });

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

    class RpcNotification extends RpcMessage {

    	/**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setRPCType(RpcType.NOTIFICATION);
        }

    }

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

    class RpcRequest extends RpcMessage {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setRPCType(RpcType.REQUEST);
            this._promise = null;
        }

        /**
        * @return {Number}
        */
        getCorrelationID() {
            return this._correlationID;
        }

        /**
        * @param {Number} id
        * @return {RpcMessage}
        */
        setCorrelationID(id) {
            this._correlationID = id;

            return this;
        }

        /**
        * @return {Promise}
        */
        getOnRPCResponsePromise(){
            return this._promise;
        }

        /**
        * @param {Promise} promise
        * @return {RpcMessage}
        */
        setOnRPCResponsePromise(promise){
            this.validateType(Promise, promise);

            this._promise = promise;
            return this;
        }

    }

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

    /**
     * @typedef {Enum} Result
     * @property {Object} MAP
     */
    class Result extends Enum {

        /**
         * @constructor
         */
        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get SUCCESS() {
            return Result.MAP.SUCCESS;
        }

        /**
         * @return {String} 
         */
        static get UNSUPPORTED_REQUEST() {
            return Result.MAP.UNSUPPORTED_REQUEST;
        }

        /**
         * @return {String} 
         */
        static get UNSUPPORTED_RESOURCE() {
            return Result.MAP.UNSUPPORTED_REQUEST;
        }

        /**
         * @return {String} 
         */
        static get DISALLOWED() {
            return Result.MAP.DISALLOWED;
        }

        /**
         * @return {String} 
         */
        static get REJECTED() {
            return Result.MAP.REJECTED;
        }

        /**
         * @return {String} 
         */
        static get ABORTED() {
            return Result.MAP.ABORTED;
        }

        /**
         * @return {String} 
         */
        static get IGNORED() {
            return Result.MAP.IGNORED;
        }

        /**
         * @return {String} 
         */
        static get RETRY() {
            return Result.MAP.RETRY;
        }

        /**
         * @return {String} 
         */
        static get IN_USE() {
            return Result.MAP.IN_USE;
        }

        /**
         * @return {String} 
         */
        static get VEHICLE_DATA_NOT_AVAILABLE() {
            return Result.MAP.VEHICLE_DATA_NOT_AVAILABLE;
        }

        /**
         * @return {String} 
         */
        static get TIMED_OUT() {
            return Result.MAP.TIMED_OUT;
        }

        /**
         * @return {String} 
         */
        static get INVALID_DATA() {
            return Result.MAP.INVALID_DATA;
        }

        /**
         * @return {String} 
         */
        static get CHAR_LIMIT_EXCEEDED() {
            return Result.MAP.CHAR_LIMIT_EXCEEDED;
        }

        /**
         * @return {String} 
         */
        static get INVALID_ID() {
            return Result.MAP.INVALID_ID;
        }

        /**
         * @return {String} 
         */
        static get DUPLICATE_NAME() {
            return Result.MAP.DUPLICATE_NAME;
        }

        /**
         * @return {String} 
         */
        static get APPLICATION_NOT_REGISTERED() {
            return Result.MAP.APPLICATION_NOT_REGISTERED;
        }

        /**
         * @return {String} 
         */
        static get WRONG_LANGUAGE() {
            return Result.MAP.WRONG_LANGUAGE;
        }

        /**
         * @return {String} 
         */
        static get OUT_OF_MEMORY() {
            return Result.MAP.OUT_OF_MEMORY;
        }

        /**
         * @return {String} 
         */
        static get TOO_MANY_PENDING_REQUESTS() {
            return Result.MAP.TOO_MANY_PENDING_REQUESTS;
        }

        /**
         * @return {String} 
         */
        static get TOO_MANY_APPLICATIONS() {
            return Result.MAP.TOO_MANY_APPLICATIONS;
        }

        /**
         * @return {String} 
         */
        static get APPLICATION_REGISTERED_ALREADY() {
            return Result.MAP.APPLICATION_REGISTERED_ALREADY;
        }

        /**
         * @return {String} 
         */
        static get WARNINGS() {
            return Result.MAP.WARNINGS;
        }

        /**
         * @return {String} 
         */
        static get GENERIC_ERROR() {
            return Result.MAP.GENERIC_ERROR;
        }

        /**
         * @return {String} 
         */
        static get USER_DISALLOWED() {
            return Result.MAP.USER_DISALLOWED;
        }

        /**
         * @return {String} 
         */
        static get TRUNCATED_DATA() {
            return Result.MAP.TRUNCATED_DATA;
        }

        /**
         * @return {String} 
         */
        static get UNSUPPORTED_VERSION() {
            return Result.MAP.UNSUPPORTED_VERSION;
        }

        /**
         * @return {String} 
         */
        static get VEHICLE_DATA_NOT_ALLOWED() {
            return Result.MAP.VEHICLE_DATA_NOT_ALLOWED;
        }

        /**
         * @return {String} 
         */
        static get FILE_NOT_FOUND() {
            return Result.MAP.FILE_NOT_FOUND;
        }

        /**
         * @return {String} 
         */
        static get CANCEL_ROUTE() {
            return Result.MAP.CANCEL_ROUTE;
        }

        /**
         * @return {String} 
         */
        static get SAVED() {
            return Result.MAP.SAVED;
        }

        /**
         * @return {String} 
         */
        static get INVALID_CERT() {
            return Result.MAP.INVALID_CERT;
        }

        /**
         * @return {String} 
         */
        static get EXPIRED_CERT() {
            return Result.MAP.EXPIRED_CERT;
        }

        /**
         * @return {String} 
         */
        static get RESUME_FAILED() {
            return Result.MAP.RESUME_FAILED;
        }

        /**
         * @return {String} 
         */
        static get DATA_NOT_AVAILABLE() {
            return Result.MAP.DATA_NOT_AVAILABLE;
        }

        /**
         * @return {String} 
         */
        static get READ_ONLY() {
            return Result.MAP.READ_ONLY;
        }

        /**
         * @return {String} 
         */
        static get CORRUPTED_DATA() {
            return Result.MAP.CORRUPTED_DATA;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return Result.valueForStringInternal(value, Result.MAP);
        }

        /**
        * Returns the key of the map with the corresponding value
        * @param {String} value
        * @return {null|String} - Returns null if not found
        */
        static keyForValue(value) {
            return Result.keyForValueInternal(value, Result.MAP);
        }

    }

    Result.MAP = Object.freeze({
        'SUCCESS': 'SUCCESS',
        'UNSUPPORTED_REQUEST': 'UNSUPPORTED_REQUEST',
        'UNSUPPORTED_RESOURCE': 'UNSUPPORTED_RESOURCE',
        'DISALLOWED': 'DISALLOWED',
        'REJECTED': 'REJECTED',
        'ABORTED': 'ABORTED',
        'IGNORED': 'IGNORED',
        'RETRY': 'RETRY',
        'IN_USE': 'IN_USE',
        'VEHICLE_DATA_NOT_AVAILABLE': 'VEHICLE_DATA_NOT_AVAILABLE',
        'TIMED_OUT': 'TIMED_OUT',
        'INVALID_DATA': 'INVALID_DATA',
        'CHAR_LIMIT_EXCEEDED': 'CHAR_LIMIT_EXCEEDED',
        'INVALID_ID': 'INVALID_ID',
        'DUPLICATE_NAME': 'DUPLICATE_NAME',
        'APPLICATION_NOT_REGISTERED': 'APPLICATION_NOT_REGISTERED',
        'WRONG_LANGUAGE': 'WRONG_LANGUAGE',
        'OUT_OF_MEMORY': 'OUT_OF_MEMORY',
        'TOO_MANY_PENDING_REQUESTS': 'TOO_MANY_PENDING_REQUESTS',
        'TOO_MANY_APPLICATIONS': 'TOO_MANY_APPLICATIONS',
        'APPLICATION_REGISTERED_ALREADY': 'APPLICATION_REGISTERED_ALREADY',
        'WARNINGS': 'WARNINGS',
        'GENERIC_ERROR': 'GENERIC_ERROR',
        'USER_DISALLOWED': 'USER_DISALLOWED',
        'TRUNCATED_DATA': 'TRUNCATED_DATA',
        'UNSUPPORTED_VERSION': 'UNSUPPORTED_VERSION',
        'VEHICLE_DATA_NOT_ALLOWED': 'VEHICLE_DATA_NOT_ALLOWED',
        'FILE_NOT_FOUND': 'FILE_NOT_FOUND',
        'CANCEL_ROUTE': 'CANCEL_ROUTE',
        'SAVED': 'SAVED',
        'INVALID_CERT': 'INVALID_CERT',
        'EXPIRED_CERT': 'EXPIRED_CERT',
        'RESUME_FAILED': 'RESUME_FAILED',
        'DATA_NOT_AVAILABLE': 'DATA_NOT_AVAILABLE',
        'READ_ONLY': 'READ_ONLY',
        'CORRUPTED_DATA': 'CORRUPTED_DATA',
    });

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

    class RpcResponse extends RpcMessage {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setRPCType(RpcType.RESPONSE);
        }

        /**
        * @return {Number}
        */
        getCorrelationID() {
            return this._correlationID;
        }

        /**
        * @param {Number} id
        * @return {RpcResponse}
        */
        setCorrelationID(id) {
            this._correlationID = id;

            return this;
        }

        /**
        * @return {Boolean}
        */
        getSuccess() {
            return this.getParameter(KEY_SUCCESS);
        }

        /**
        * @return {RpcResponse}
        */
        setSuccess(success) {
            this.setParameter(KEY_SUCCESS, success);
            return this;
        }

        /**
        * @return {String}
        */
        getInfo() {
            return this.getParameter(KEY_INFO);
        }

        /**
        * @return {RpcResponse}
        */
        setInfo(info) {
            this.setParameter(KEY_INFO, info);
            return this;
        }

        /**
        * @return {Result}
        */
        getResultCode() {
            return this.getObject(Result, KEY_RESULT_CODE);
        }

        /**
        * @return {RpcResponse}
        */
        setResultCode(resultCode) {
            this.validateType(Result, resultCode);

            this.setParameter(KEY_RESULT_CODE, resultCode);
            return this;
        }
    }

    RpcResponse.KEY_SUCCESS     = 'success';
    RpcResponse.KEY_INFO        = 'info';
    RpcResponse.KEY_RESULT_CODE = 'resultCode';

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

    /**
     * @typedef {Enum} FunctionID
     * @property {Object} MAP
     */
    class FunctionID extends Enum {

        /**
         * @constructor 
         */
        constructor() {
            super();
        }

        /**
        * @return {Number}
        */
        static get ADD_COMMAND(){
            return FunctionID.MAP.AddCommand;
        }

        /**
        * @return {Number}
        */
        static get ON_LANGUAGE_CHANGE(){
            return FunctionID.MAP.OnLanguageChange;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return FunctionID.valueForStringInternal(value, FunctionID.MAP);
        }

        /**
        * Returns the key of the map with the corresponding value
        * @param {Number} value
        * @return {null|String} - Returns null if not found
        */
        static keyForValue(value) {
            return FunctionID.keyForValueInternal(value, FunctionID.MAP);
        }
    }

    FunctionID.MAP = Object.freeze({
        'AddCommand': 0x05,
        'OnLanguageChange': 0x800A,
        //TODO this needs to be completely filled out still
    });

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

    /**
     * @typedef {Enum} ImageType
     * @property {Object} MAP
     */
    class ImageType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get STATIC() {
            return ImageType.MAP.STATIC;
        }

        /**
         * @return {String} 
         */
        static get DYNAMIC() {
            return ImageType.MAP.DYNAMIC;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return ImageType.valueForStringInternal(value, ImageType.MAP);
        }
    }

    ImageType.MAP = Object.freeze({
        'STATIC': 'STATIC',
        'DYNAMIC': 'DYNAMIC',
    });

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

    /**
     * @typedef {Enum} Language
     * @property {Object} MAP
     */
    class Language extends Enum {

        /**
         * @constructor 
         */
        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get EN_SA() {
            return Language.MAP.EN_SA;
        }

        /**
         * @return {String} 
         */
        static get HE_IL() {
            return Language.MAP.HE_IL;
        }

        /**
         * @return {String} 
         */
        static get RO_RO() {
            return Language.MAP.RO_RO;
        }

        /**
         * @return {String} 
         */
        static get UK_UA() {
            return Language.MAP.UK_UA;
        }

        /**
         * @return {String} 
         */
        static get ID_ID() {
            return Language.MAP.ID_ID;
        }

        /**
         * @return {String} 
         */
        static get VI_VN() {
            return Language.MAP.VI_VN;
        }

        /**
         * @return {String} 
         */
        static get MS_MY() {
            return Language.MAP.MS_MY;
        }

        /**
         * @return {String} 
         */
        static get HI_IN() {
            return Language.MAP.HI_IN;
        }

        /**
         * @return {String} 
         */
        static get NL_BE() {
            return Language.MAP.NL_BE;
        }

        /**
         * @return {String} 
         */
        static get EL_GR() {
            return Language.MAP.EL_GR;
        }

        /**
         * @return {String} 
         */
        static get HU_HU() {
            return Language.MAP.HU_HU;
        }

        /**
         * @return {String} 
         */
        static get FI_FI() {
            return Language.MAP.FI_FI;
        }

        /**
         * @return {String} 
         */
        static get SK_SK() {
            return Language.MAP.SK_SK;
        }

        /**
         * @return {String} 
         */
        static get EN_US() {
            return Language.MAP.EN_US;
        }

        /**
         * @return {String} 
         */
        static get ES_MX() {
            return Language.MAP.ES_MX;
        }

        /**
         * @return {String} 
         */
        static get FR_CA() {
            return Language.MAP.FR_CA;
        }

        /**
         * @return {String} 
         */
        static get DE_DE() {
            return Language.MAP.DE_DE;
        }

        /**
         * @return {String} 
         */
        static get ES_ES() {
            return Language.MAP.ES_ES;
        }

        /**
         * @return {String} 
         */
        static get EN_GB() {
            return Language.MAP.EN_GB;
        }

        /**
         * @return {String} 
         */
        static get RU_RU() {
            return Language.MAP.RU_RU;
        }

        /**
         * @return {String} 
         */
        static get TR_TR() {
            return Language.MAP.TR_TR;
        }

        /**
         * @return {String} 
         */
        static get PL_PL() {
            return Language.MAP.PL_PL;
        }

        /**
         * @return {String} 
         */
        static get FR_FR() {
            return Language.MAP.FR_FR;
        }

        /**
         * @return {String} 
         */
        static get IT_IT() {
            return Language.MAP.IT_IT;
        }

        /**
         * @return {String} 
         */
        static get SV_SE() {
            return Language.MAP.SV_SE;
        }

        /**
         * @return {String} 
         */
        static get PT_PT() {
            return Language.MAP.PT_PT;
        }

        /**
         * @return {String} 
         */
        static get NL_NL() {
            return Language.MAP.NL_NL;
        }

        /**
         * @return {String} 
         */
        static get EN_AU() {
            return Language.MAP.EN_AU;
        }

        /**
         * @return {String} 
         */
        static get ZH_CN() {
            return Language.MAP.ZH_CN;
        }

        /**
         * @return {String} 
         */
        static get ZH_TW() {
            return Language.MAP.ZH_TW;
        }

        /**
         * @return {String} 
         */
        static get JA_JP() {
            return Language.MAP.JA_JP;
        }

        /**
         * @return {String} 
         */
        static get AR_SA() {
            return Language.MAP.AR_SA;
        }

        /**
         * @return {String} 
         */
        static get KO_KR() {
            return Language.MAP.KO_KR;
        }

        /**
         * @return {String} 
         */
        static get PT_BR() {
            return Language.MAP.PT_BR;
        }

        /**
         * @return {String} 
         */
        static get CS_CZ() {
            return Language.MAP.CS_CZ;
        }

        /**
         * @return {String} 
         */
        static get DA_DK() {
            return Language.MAP.DA_DK;
        }

        /**
         * @return {String} 
         */
        static get NO_NO() {
            return Language.MAP.NO_NO;
        }

        /**
         * @return {String} 
         */
        static get EN_IN() {
            return Language.MAP.EN_IN;
        }

        /**
         * @return {String} 
         */
        static get TH_TH() {
            return Language.MAP.TH_TH;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            for (let key in Language.MAP) {
                if (Language.MAP[key] === value) {
                    return Language.MAP[key];
                }
            }

            return null;
        }
    }

    Language.MAP = Object.freeze({
        'EN_SA': 'EN-SA',
        'HE_IL': 'HE-IL',
        'RO_RO': 'RO-RO',
        'UK_UA': 'UK-UA',
        'ID_ID': 'ID-ID',
        'VI_VN': 'VI-VN',
        'MS_MY': 'MS-MY',
        'HI_IN': 'HI-IN',
        'NL_BE': 'NL-BE',
        'EL_GR': 'EL-GR',
        'HU_HU': 'HU-HU',
        'FI_FI': 'FI-FI',
        'SK_SK': 'SK-SK',
        'EN_US': 'EN-US',
        'ES_MX': 'ES-MX',
        'FR_CA': 'FR-CA',
        'DE_DE': 'DE-DE',
        'ES_ES': 'ES-ES',
        'EN_GB': 'EN-GB',
        'RU_RU': 'RU-RU',
        'TR_TR': 'TR-TR',
        'PL_PL': 'PL-PL',
        'FR_FR': 'FR-FR',
        'IT_IT': 'IT-IT',
        'SV_SE': 'SV-SE',
        'PT_PT': 'PT-PT',
        'NL_NL': 'NL-NL',
        'EN_AU': 'EN-AU',
        'ZH_CN': 'ZH-CN',
        'ZH_TW': 'ZH-TW',
        'JA_JP': 'JA-JP',
        'AR_SA': 'AR-SA',
        'KO_KR': 'KO-KR',
        'PT_BR': 'PT-BR',
        'CS_CZ': 'CS-CZ',
        'DA_DK': 'DA-DK',
        'NO_NO': 'NO-NO',
        'EN_IN': 'EN-IN',
        'TH_TH': 'TH-TH',
    });

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

    class Image extends RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} value
        * @return {Image}
        */
        setValue(value) {
            this.setParameter(Image.KEY_VALUE, value);
            return this;
        }

        /**
        * @return {Number}
        */
        getValue() {
            return this.getParameter(Image.KEY_VALUE);
        }

        /**
        * @param {ImageType} type
        * @return {Image}
        */
        setImageType(type) {
            this.validateType(ImageType, type);

            this.setParameter(Image.KEY_IMAGE_TYPE, type);
            return this;
        }

        /**
        * @return {ImageType}
        */
        getImageType() {
            return this.getObject(Image, Image.KEY_IMAGE_TYPE);
        }

        /**
        * @param {Boolean} isTemplate
        * @return {Image}
        */
        setIsTemplate(isTemplate) {
            this.setParameter(Image.KEY_IS_TEMPLATE, isTemplate);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getIsTemplate() {
            return this.getParameter(Image.KEY_IS_TEMPLATE);
        }

    }

    Image.KEY_VALUE = 'value';
    Image.KEY_IMAGE_TYPE = 'imageType';
    Image.KEY_IS_TEMPLATE = 'isTemplate';

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

    class MenuParams extends RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Number} id
        * @return {MenuParams}
        */
        setParentID(id) {
            this.setParameter(MenuParams.KEY_PARENT_ID, id);
            return this;
        }

        /**
        * @return {Number}
        */
        getParentID() {
            return this.getParameter(MenuParams.KEY_PARENT_ID);
        }

        /**
        * @param {Number} position
        * @return {MenuParams}
        */
        setPosition(position) {
            this.setParameter(MenuParams.KEY_POSITION, position);
            return this;
        }

        /**
        * @return {Number}
        */
        getPosition() {
            return this.getParameter(MenuParams.KEY_POSITION);
        }

        /**
        * @param {String} menuName
        * @return {MenuParams}
        */
        setMenuName(menuName) {
            this.setParameter(MenuParams.KEY_MENU_NAME, menuName);
            return this;
        }

        /**
        * @param {String}
        */
        getMenuName() {
            return this.getParameter(MenuParams.KEY_MENU_NAME);
        }

    }

    MenuParams.KEY_PARENT_ID = 'parentID';
    MenuParams.KEY_POSITION  = 'position';
    MenuParams.KEY_MENU_NAME = 'menuName';

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

    class AddCommand extends RpcRequest {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.ADD_COMMAND);
        }


        /**
        * @param {Number} id
        * @return {AddCommand}
        */
        setCmdID(id) {
            this.setParameter(AddCommand.KEY_CMD_ID, id);
            return this;
        }

        /**
        * @return {Number}
        */
        getCmdID() {
            return this.getParameter(AddCommand.KEY_CMD_ID);
        }

        /**
        * @param {MenuParams} menuParams
        * @return {AddCommand}
        */
        setMenuParams(menuParams) {
            this.validateType(MenuParams, menuParams);

            this.setParameter(AddCommand.KEY_MENU_PARAMS, menuParams);
            return this;
        }

        /**
        * @return {Number}
        */
        getMenuParams() {
            return this.getObject(MenuParams, AddCommand.KEY_MENU_PARAMS);
        }

        /**
        * @param {Array<String>} vrCommands
        * @return {AddCommand}
        */
        setVrCommands(vrCommands) {
            this.setParameter(AddCommand.KEY_VR_COMMANDS, vrCommands);
            return this;
        }

        /**
        * @return {Array<String>}
        */
        getVrCommands() {
            return this.getParameter(AddCommand.KEY_VR_COMMANDS);
        }

        /**
        * @param {Image} icon
        * @return {AddCommand}
        */
        setCmdIcon(icon) {
            this.validateType(Image, icon);

            this.setParameter(AddCommand.KEY_CMD_ICON, icon);
            return this;
        }

        /**
        * @return {Image}
        */
        getCmdIcon() {
            return this.getObject(Image, AddCommand.KEY_CMD_ICON);
        }

    }

    AddCommand.KEY_CMD_ICON = 'cmdIcon';
    AddCommand.KEY_MENU_PARAMS = 'menuParams';
    AddCommand.KEY_CMD_ID = 'cmdID';
    AddCommand.KEY_VR_COMMANDS = 'vrCommands';

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

    class AddCommandResponse extends RpcResponse {

    	/**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.ADD_COMMAND);
        }

    }

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

    class OnLanguageChange extends RpcNotification {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.ON_LANGUAGE_CHANGE);
        }

        /**
        * @param {Language} langauge
        * @return {OnLanguageChange}
        */
        setLanguage(langauge) {
            this.validateType(Language, language);

            this.setParameter(OnLanguageChange.KEY_LANGUAGE, language);
            return this;
        }

        /**
        * @return {Language}
        */
        getLanguage() {
            return this.getObject(Language, OnLanguageChange.KEY_LANGUAGE);
        }

        /**
        * @param {Language} langauge
        * @return {OnLanguageChange}
        */
        setHMIDisplayLanguage(language) {
            this.validateType(Language, language);

            this.setParameter(OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE, language);
            return this;
        }

        /**
        * @return {Language}
        */
        getHMIDisplayLanguage() {
            return this.getObject(Language, OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE);
        }
    }

    OnLanguageChange.KEY_LANGUAGE = 'language';
    OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE = 'hmiDisplayLanguage';

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

    /**
     * @typedef {Object} SdlSessionListener
     */
    class SdlSessionListener {

    	/**
    	 * @constructor
    	 */
        constructor() {
            //TODO add all callbacks
        }

        

    }

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

    /**
     * @typedef {Object} SdlSession
     * @property {Function} _setupSdlProtocolListener
     * @property {Function} start
     * @property {Function} endSession
     * @property {Function} addServiceListener
     * @property {Function} removeServiceListener
     * @property {Function} sendRpc
     */
    class SdlSession {

        /**
         * @param {TransportConfigBase} baseTransportConfig 
         * @param {SdlSessionListener} sdlSessionListener 
         */
        constructor(baseTransportConfig, sdlSessionListener) {

            this._serviceListeners = new Array();

            this._sdlSessionListener = sdlSessionListener;
            let sdlProtocolListener = _setupSdlProtocolListener();

            this._sdlProtocol = new SdlProtocolBase(sdlProtocolListener);
        }

        /**
         * @return {SdlProtocolListener} 
         * @private
         */
        _setupSdlProtocolListener() {
            let sdlProtocolListener = new SdlProtocolListener();

            //TODO create all the functions that will be set for this listener

            return sdlProtocolListener;
        }

        start() {
            if (this._sdlProtocol != null) {
                this._sdlProtocol.start();
            }
        }

        endSession() {
            //TODO handle internal items
            if (this._sdlProtocol != null) {
                this._sdlProtocol.endSession();
            }
        }

        /**
         * @param {SdlSessionListener} serviceListener 
         */
        addServiceListener(serviceListener) {
            this._serviceListeners.push(serviceListener);
        }

        /**
         * @param {SdlSessionListener} serviceListener 
         */
        removeServiceListener(serviceListener) {
            let index = this._serviceListeners.indexOf(serviceListener);
            if (index >= 0) {
                this._serviceListeners.splice(index, 1);
            }
        }

        /**
         * @param {RpcMessage} rpcMessage 
         */
        sendRpc(rpcMessage) {

        }

    }

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


    class SdlPsm {							//TODO check to see if it's better to use '==' or '==='
    	
    	/**
         * @constructor
         */
        constructor() {
            this.reset();
        }

        /**
         * Changes all internal members to default
         */
        reset() {
            this._state = SdlPsm.START_STATE;
            this._version = 0;
            this._encryption = false;
            this._frameType = FrameType.SINGLE;
            this._serviceType = 0;
            this._controlFrameInfo = null;
            this._sessionID = null;
            this._dumpSize = null;
            this._dataLength = 0;
            this._messageID = 0;
            this._payload = null;
    	}

    	/**
         * @return {Number} - State represented by a Number
         */
        getState() {
            return this._state;
        }

        /**
         * @return {SdlPacket} - Returns null if not complete
         */
        getFormedPacket() {
            if (this._state == SdlPsm.FINISHED_STATE) {
                return new SdlPacket(this._version, this._encryption, this._frameType, this._serviceType, this._controlFrameInfo, this._sessionID, this._dataLength, this._messageID, this._payload);
            } else {
                return null;
            }
        }

        /**
         * @param {Number} data - Represents a byte
         * @return {Boolean}
         */
        handleByte(data) {
            this._state = this._transitionOnInput(data, this._state);

            if (this._state == SdlPsm.ERROR_STATE) {
                return false;
            }

            return true;
    	}

    	/**
         * @param {Number} rawByte - Represents a byte
         * @param {Number} state
         * @return {Boolean}
         * @private
         */
        _transitionOnInput(rawByte, state) {
            switch (state) {
                case SdlPsm.START_STATE:

                    this._version = (rawByte & SdlPsm.VERSION_MASK)>>4;

                    if (this._version == 0) {
                        return SdlPsm.ERROR_STATE;
                    }
                    this._encryption = (1 == (rawByte & SdlPsm.ENCRYPTION_MASK)>>3);

                    this._frameType = rawByte & SdlPsm.FRAME_TYPE_MASK;

                    if ((this._version < 1 || this._version > 5)
                        && this._frameType != SdlPacket.FRAME_TYPE_CONTROL) {
                        return SdlPsm.ERROR_STATE;
                    }

                    if (this._frameType < SdlPacket.FRAME_TYPE_CONTROL || this._frameType > SdlPacket.FRAME_TYPE_CONSECUTIVE) {
                        return SdlPsm.ERROR_STATE;
                    }

                    return SdlPsm.SERVICE_TYPE_STATE;

                case SdlPsm.SERVICE_TYPE_STATE:

    		this._serviceType = rawByte & 0xFF;
    		return SdlPsm.CONTROL_FRAME_INFO_STATE;

                case SdlPsm.CONTROL_FRAME_INFO_STATE:
    				
    		this._controlFrameInfo = rawByte & 0xFF;
    				switch(this._frameType){
    					case SdlPacket.FRAME_TYPE_CONTROL:
    						break;
    					case SdlPacket.FRAME_TYPE_SINGLE:
    					case SdlPacket.FRAME_TYPE_FIRST:
    						if(this._controlFrameInfo != 0x00){
    							return SdlPsm.ERROR_STATE;
    						}
    						break;
    					case SdlPacket.FRAME_TYPE_CONSECUTIVE:
    						//It might be a good idea to check packet sequence numbers here
    						break;
    					default:
    						return SdlPsm.ERROR_STATE;		
    				}

    				return SdlPsm.SESSION_ID_STATE;

                case SdlPsm.SESSION_ID_STATE:
    				
    		this._sessionID = rawByte & 0xFF;
    				return SdlPsm.DATA_SIZE_1_STATE;

                case SdlPsm.DATA_SIZE_1_STATE:
    				
    		this._dataLength += (rawByte & 0xFF) << 24; //Shift 3 bytes x 8 bits
    				return SdlPsm.DATA_SIZE_2_STATE;

                case SdlPsm.DATA_SIZE_2_STATE:
    				
    		this._dataLength += (rawByte & 0xFF) << 16; //Sift 2 bytes x 8 bits
    				return DATA_SIZE_3_STATE;

                case SdlPsm.DATA_SIZE_3_STATE:
    				
    		this._dataLength += (rawByte & 0xFF) << 8; //Sift 1 byte x 8 bits
    				return DATA_SIZE_4_STATE;

                case SdlPsm.DATA_SIZE_4_STATE:
    				
    		this._dataLength += (rawByte & 0xFF);
    				
    				//We should have data length now for the pump state
    		switch (this._frameType) { //If all is correct we should break out of this switch statement
    					case SdlPacket.FRAME_TYPE_SINGLE:
    					case SdlPacket.FRAME_TYPE_CONSECUTIVE:
    						break;
    					case SdlPacket.FRAME_TYPE_CONTROL:
    						//Ok, well here's some interesting bit of knowledge. Because the start session request is from the phone with no knowledge of version it sends out
    						//a v1 packet. THEREFORE there is no message id field. **** Now you know and knowing is half the battle ****
    				if (this._version == 1 && this._controlFrameInfo == SdlPacket.FRAME_INFO_START_SERVICE) {
    							
    							if (this._dataLength == 0) {
    								return SdlPsm.FINISHED_STATE; //We are done if we don't have any payload
    							}
    							
    							if (this._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) { // sizes from protocol/SdlProtocol.js
    								this._payload = new byte[this._dataLength];
    							} else {
    								return SdlPsm.ERROR_STATE;
    							}

    							this._dumpSize = this._dataLength;
    							return SdlPsm.DATA_PUMP_STATE;
    						}
    						break; 
    				
    					case SdlPacket.FRAME_TYPE_FIRST:
    						if (dataLength == SdlPsm.FIRST_FRAME_DATA_SIZE) {
    							break;
    					}
    					default:
    						return SdlPsm.ERROR_STATE;
    				}

    				if (this._version == 1) { //Version 1 packets will not have message id's
    					if (this._dataLength == 0) {
    						return SdlPsm.FINISHED_STATE; //We are done if we don't have any payload
    					}
    					if (this._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) { // sizes from protocol/SdlProtocol.java
    						this._payload = new Uint8Array(this._dataLength);
    					} else {
    						return SdlPsm.ERROR_STATE;
    					}
    					this._dumpSize = this._dataLength;
    					return SdlPsm.DATA_PUMP_STATE;
    				} else {
    					return SdlPsm.MESSAGE_1_STATE;
    				}

                case SdlPsm.MESSAGE_1_STATE:
    				
    				this._messageID += (rawByte & 0xFF) << 24; // Shift 3 bytes x 8 bits
    				return SdlPsm.MESSAGE_2_STATE;
    				
                case SdlPsm.MESSAGE_2_STATE:
    				
    				this._messageID += (rawByte & 0xFF) << 16; // Shift 2 bytes x 8 bits
    				return SdlPsm.MESSAGE_3_STATE;

                case SdlPsm.MESSAGE_3_STATE:
    				
    				this._messageID += (rawByte & 0xFF) << 8; // Shift 1 byte x 8 bits
    				return SdlPsm.MESSAGE_4_STATE;

                case SdlPsm.MESSAGE_4_STATE:
    				
    				this._messageID += (rawByte & 0xFF);
    				if (this._dataLength == 0) {
    					return SdlPsm.FINISHED_STATE; //We are done if we don't have any payload
    				}
    				try {
    					this._payload = new Uint8Array(this._dataLength);
    				} catch (error) { //Possible Out of Memory error if data length is invalid
    					return SdlPsm.ERROR_STATE;
    				}
    				dumpSize = dataLength;
    				return SdlPsm.DATA_PUMP_STATE;

                case SdlPsm.DATA_PUMP_STATE:
    				
    				this._payload[this._dataLength - this._dumpSize] = rawByte;
    				this._dumpSize--;
    				//Do we have any more bytes to read in?
    				if(this._dumpSize > 0){
    					return SdlPsm.DATA_PUMP_STATE;
    				} else if (this._dumpSize == 0) {
    					return SdlPsm.FINISHED_STATE;
    				} else {
    					return SdlPsm.ERROR_STATE;
    				}

                case SdlPsm.FINISHED_STATE:
                default:
    				//Should not be handling any other bytes while in the finished state
                    return SdlPsm.ERROR_STATE;
            }
        }    
    }

    SdlPsm.START_STATE                              = 0x0;
    SdlPsm.SERVICE_TYPE_STATE                       = 0x02;
    SdlPsm.CONTROL_FRAME_INFO_STATE                 = 0x03;
    SdlPsm.SESSION_ID_STATE                         = 0x04;
    SdlPsm.DATA_SIZE_1_STATE                        = 0x05;
    SdlPsm.DATA_SIZE_2_STATE                        = 0x06;
    SdlPsm.DATA_SIZE_3_STATE                        = 0x07;
    SdlPsm.DATA_SIZE_4_STATE                        = 0x08;
    SdlPsm.MESSAGE_1_STATE                          = 0x09;
    SdlPsm.MESSAGE_2_STATE                          = 0x0A;
    SdlPsm.MESSAGE_3_STATE                          = 0x0B;
    SdlPsm.MESSAGE_4_STATE                          = 0x0C;
    SdlPsm.DATA_PUMP_STATE                          = 0x0D;
    SdlPsm.FINISHED_STATE                           = 0xFF;
    SdlPsm.ERROR_STATE                              = -1;

    SdlPsm.FIRST_FRAME_DATA_SIZE                    = 0x08;
    SdlPsm.VERSION_MASK                             = 0xF0; //4 highest bits
    SdlPsm.ENCRYPTION_MASK                          = 0x08; //4th lowest bit
    SdlPsm.FRAME_TYPE_MASK                          = 0x07; //3 lowest bits

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

    class TransportBase {
        
        /**
         * @constructor
         * @param {BaseTransportConfig} baseTransportConfig
         * @param {TransportListener} transportListener
         */
        constructor(baseTransportConfig, transportListener) {
            this._sdlPsm = new SdlPsm();
            this._transportListener = transportListener;

        }

        start() {
            throw "start method must be overridden";
        }

        stop() {
            throw "stop method must be overridden";
        }

        /**
         * @param {SdlPacket} sdlPacket
         */
        sendPacket(sdlPacket) {
            throw "sendPacket method must be overridden";
        }
    }

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

    class TransportManagerBase {

        /**
         * @constructor
         * @param {BaseTransportConfig} baseTransportConfig
         * @param {TransportListener} transportListener
         */
        constructor(baseTransportConfig, transportListener) {
            this._transportConfig = baseTransportConfig;
            this._transportListener = transportListener;
        }

        onTransportConnected() {
            this._transportListener.onTransportConnected();
        }

        /**
         * @param {Function} func
         */
        onTransportDisconnected(func) {
            this._transportListener.onTransportDisconnected();
        }

        /**
         * @param {Function} func
         */
        onError(func) {
            this._transportListener.onError();
        }

        /**
         * @param {SdlPacket} sdlPacket
         */
        onPacketReceived(sdlPacket) {
            this._transportListener.onPacketReceived(sdlPacket);
        }

        /**
         * @param {SdlPacket} sdlPacket
         */
        sendPacket(sdlPacket) {
            throw "sendPacket method must be overridden";
        }

        start() {
            throw "start method must be overridden";
        }

        stop() {
            throw "stop method must be overridden";
        }

        /**
         * @param {TransportType} transportType
         * @param {String} address
         */
        isConnected(transportType, address) {
            throw "isConnected method must be overridden";
        }
    }

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

    /**
     * @typedef {Enum} TransportType
     * @property {Object} MAP
     */
    class TransportType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
        * @param {String}
        */
        static get WEBSOCKET_SERVER() {
            return TransportType.MAP.WEBSOCKET_SERVER;
        }

        /**
        * @param {String}
        */
        static get WEBSOCKET_CLIENT() {
            return TransportType.MAP.WEBSOCKET_CLIENT;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return TransportType.valueForStringInternal(value, TransportType.MAP);
        }
    }

    TransportType.MAP = Object.freeze({
        "WEBSOCKET_SERVER": "WEBSOCKET_SERVER",
        "WEBSOCKET_CLIENT": "WEBSOCKET_CLIENT",
        "CUSTOM": "CUSTOM",
    });

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

    class Bson {
        /**
         * Serialize a Javascript object.
         * 
         * @param object The Javascript object to serialize.
         * @param options Serialize options.
         * @return The Buffer object containing the serialized object.
         */
        static serialize (object, options) {
            console.log(BSON);

            // console.log(`)`);
            // return BSON.serialize(object, options);
        }

        /**
         * Deserialize data as BSON.
         * 
         * @param buffer The buffer containing the serialized set of BSON documents.
         * @param options Deserialize options.
         * @returns The deserialized Javascript Object.
         */
        static deserialize (object, options) {
            console.log(BSON);
            // return BSON.deserialize(object, options);
        }
    }

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

    class JsonRpcMarshaller {

        constructor() {
        }

        /*
    let testMap = {"rpcType":"Request", "functionName":"RAI"}
    undefined
    let stringed = JSON.stringify(testMap)
    undefined
    stringed
    "{"rpcType":"Request","functionName":"RAI"}"
    let array = new Uint8Array(stringed)
    undefined
    array
    Uint8Array []buffer: (...)byteLength: (...)byteOffset: (...)length: (...)Symbol(Symbol.toStringTag): (...)__proto__: TypedArray
    var enc = new TextEncoder(); // always utf-8

    undefined
    array = enc.encode(stringed)
    Uint8Array(42) [123, 34, 114, 112, 99, 84, 121, 112, 101, 34, 58, 34, 82, 101, 113, 117, 101, 115, 116, 34, 44, 34, 102, 117, 110, 99, 116, 105, 111, 110, 78, 97, 109, 101, 34, 58, 34, 82, 65, 73, 34, 125]0: 1231: 342: 1143: 1124: 995: 846: 1217: 1128: 1019: 3410: 5811: 3412: 8213: 10114: 11315: 11716: 10117: 11518: 11619: 3420: 4421: 3422: 10223: 11724: 11025: 9926: 11627: 10528: 11129: 11030: 7831: 9732: 10933: 10134: 3435: 5836: 3437: 8238: 6539: 7340: 3441: 125buffer: (...)byteLength: (...)byteOffset: (...)length: (...)Symbol(Symbol.toStringTag): (...)__proto__: TypedArray
    var enc = new TextDecoder("utf-8");

    undefined
    let step2 = enc.decode(array)
    undefined
    step2
    "{"rpcType":"Request","functionName":"RAI"}"
    let newJson = JSON.parse(step2)
    undefined
    newJson
    {rpcType: "Request", functionName: "RAI"}



        */

        /**
         * 
         * @param {RpcMessage} rpcMessage 
         */
        static marshall(rpcMessage) {
            try {

                let jsonObject = rpcMessage.getParameters();
                //TODO do we need to go through each param and do this?
                let stringVersion = JSON.stringify(jsonObject);
                let encoder = new TextEncoder();
                return encoder.encode(stringVersion);

            } catch (exception) {
                //TODO print exception
            }
            return null;
        }

    }

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

    const SDL = {
        manager: {
            lifecycle: {
                LifecycleManager
            }
        },
        protocol: {
            BinaryFrameHeader,
            MessageFrameAssembler,
            SdlPacket,
            SdlProtocolBase,
            SdlProtocolListener,
            enums: {
                ControlFrameTags,
                FrameType,
                ServiceType
            }
        },
        rpc: {
            RpcMessage,
            RpcNotification,
            RpcRequest,
            RpcResponse,
            RpcStruct,
            enums: {
                FunctionID,
                ImageType,
                Language,
                Result,
                RpcType
            },
            messages: {
                AddCommand,
                AddCommandResponse,
                OnLanguageChange
            },
            structs: {
                Image,
                MenuParams
            }
        },
        session: {
            SdlSession,
            SdlSessionListener
        },
        transport: {
            SdlPsm,
            TransportBase,
            TransportConfigBase,
            TransportListener,
            TransportManagerBase,
            enums: {
                TransportType
            }
        },
        util: {
            BitConverter,
            Bson,
            BsonBundle,
            BsonESM,
            Enum,
            JsonRpcMarshaller,
            Version
        }
    };

    return SDL;

}));
