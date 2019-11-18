(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('bson')) :
    typeof define === 'function' && define.amd ? define(['bson'], factory) :
    (global = global || self, global.SDL = factory(global.BSON));
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
            // BsonBundle,
            // BsonESM,
            Enum,
            JsonRpcMarshaller,
            Version
        }
    };

    return SDL;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0RMLmpzIiwic291cmNlcyI6WyIuLi9zcmMvbWFuYWdlci9saWZlY3ljbGUvTGlmZWN5Y2xlTWFuYWdlci5qcyIsIi4uL3NyYy91dGlsL0JpdENvbnZlcnRlci5qcyIsIi4uL3NyYy9wcm90b2NvbC9CaW5hcnlGcmFtZUhlYWRlci5qcyIsIi4uL3NyYy9wcm90b2NvbC9NZXNzYWdlRnJhbWVBc3NlbWJsZXIuanMiLCIuLi9zcmMvdXRpbC9FbnVtLmpzIiwiLi4vc3JjL3Byb3RvY29sL2VudW1zL0ZyYW1lVHlwZS5qcyIsIi4uL3NyYy9wcm90b2NvbC9TZGxQYWNrZXQuanMiLCIuLi9zcmMvcnBjL1JwY1N0cnVjdC5qcyIsIi4uL3NyYy9ycGMvUnBjTWVzc2FnZS5qcyIsIi4uL3NyYy9wcm90b2NvbC9lbnVtcy9TZXJ2aWNlVHlwZS5qcyIsIi4uL3NyYy9wcm90b2NvbC9TZGxQcm90b2NvbExpc3RlbmVyLmpzIiwiLi4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRMaXN0ZW5lci5qcyIsIi4uL3NyYy90cmFuc3BvcnQvVHJhbnNwb3J0Q29uZmlnQmFzZS5qcyIsIi4uL3NyYy91dGlsL1ZlcnNpb24uanMiLCIuLi9zcmMvcHJvdG9jb2wvU2RsUHJvdG9jb2xCYXNlLmpzIiwiLi4vc3JjL3Byb3RvY29sL2VudW1zL0NvbnRyb2xGcmFtZVRhZ3MuanMiLCIuLi9zcmMvcnBjL2VudW1zL1JwY1R5cGUuanMiLCIuLi9zcmMvcnBjL1JwY05vdGlmaWNhdGlvbi5qcyIsIi4uL3NyYy9ycGMvUnBjUmVxdWVzdC5qcyIsIi4uL3NyYy9ycGMvZW51bXMvUmVzdWx0LmpzIiwiLi4vc3JjL3JwYy9ScGNSZXNwb25zZS5qcyIsIi4uL3NyYy9ycGMvZW51bXMvRnVuY3Rpb25JRC5qcyIsIi4uL3NyYy9ycGMvZW51bXMvSW1hZ2VUeXBlLmpzIiwiLi4vc3JjL3JwYy9lbnVtcy9MYW5ndWFnZS5qcyIsIi4uL3NyYy9ycGMvc3RydWN0cy9JbWFnZS5qcyIsIi4uL3NyYy9ycGMvc3RydWN0cy9NZW51UGFyYW1zLmpzIiwiLi4vc3JjL3JwYy9tZXNzYWdlcy9BZGRDb21tYW5kLmpzIiwiLi4vc3JjL3JwYy9tZXNzYWdlcy9BZGRDb21tYW5kUmVzcG9uc2UuanMiLCIuLi9zcmMvcnBjL21lc3NhZ2VzL09uTGFuZ3VhZ2VDaGFuZ2UuanMiLCIuLi9zcmMvc2Vzc2lvbi9TZGxTZXNzaW9uTGlzdGVuZXIuanMiLCIuLi9zcmMvc2Vzc2lvbi9TZGxTZXNzaW9uLmpzIiwiLi4vc3JjL3RyYW5zcG9ydC9TZGxQc20uanMiLCIuLi9zcmMvdHJhbnNwb3J0L1RyYW5zcG9ydEJhc2UuanMiLCIuLi9zcmMvdHJhbnNwb3J0L1RyYW5zcG9ydE1hbmFnZXJCYXNlLmpzIiwiLi4vc3JjL3RyYW5zcG9ydC9lbnVtcy9UcmFuc3BvcnRUeXBlLmpzIiwiLi4vc3JjL3V0aWwvQnNvbi5qcyIsIi4uL3NyYy91dGlsL0pzb25ScGNNYXJzaGFsbGVyLmpzIiwiLi4vYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jbGFzcyBMaWZlY3ljbGVNYW5hZ2VyIHtcblxufVxuXG5leHBvcnQgeyBMaWZlY3ljbGVNYW5hZ2VyIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmNsYXNzIEJpdENvbnZlcnRlciB7XG5cbiAgICAvKipcblx0ICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnl0ZXMgLSBieXRlIGFycmF5IHRoYXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gaGV4XG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgLSBpbnQgb3B0aW9uYWwsIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IHRvIGJlZ2luIGNvbnZlcnNpb24gYXRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIGludCBvcHRpb25hbCwgcmVwcmVzZW50aW5nIG51bWJlciBvZiBieXRlcyBpbiBhcnJheSB0byBjb252ZXJ0XG5cdCAqIEByZXR1cm4ge1N0cmluZ30gdGhlIFN0cmluZyBjb250YWluaW5nIGNvbnZlcnRlZCBoZXggdmFsdWVzIG9yIG51bGwgaWYgYnl0ZSBhcnJheSBpcyBudWxsXG5cdCAqL1xuICAgIGFycmF5QnVmZmVyVG9IZXgoYnl0ZXMsIG9mZnNldCA9IDAsIGxlbmd0aCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgLyoqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBoZXhTdHJpbmcgLSB0aGUgU3RyaW5nIGNvbnRhaW5pbmcgY29udmVydGVkIGhleCB2YWx1ZXNcblx0ICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IGJ5dGUgYXJyYXkgY29udmVydGVkIGZyb20gaW5wdXQgU3RyaW5nIG9yIG51bGwgaWYgU3RyaW5nIGlzIG51bGxcblx0ICovXG4gICAgaGV4VG9BcnJheUJ1ZmZlcihoZXhTdHJpbmcpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgIH1cblxuICAgIC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBidWZmZXIgLSBidWZmZXIgdGhhdCB3aWxsIGJlIGNvbnZlcnRlZCB0byBpbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IC0gaW50IG9wdGlvbmFsLCB0aGUgb2Zmc2V0IHNoaWZ0XG5cdCAqIEByZXR1cm4ge051bWJlcn0gaW50IGNvbnZlcnRlZCBmcm9tIGJ1ZmZlciBvciAtMSBpZiBidWZmZXIgaXMgbnVsbFxuXHQgKi9cbiAgICBhcnJheUJ1ZmZlclRvSW50MzIoYnVmZmVyLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgaWYoIWJ1ZmZlcikgcmV0dXJuIC0xO1xuICAgICAgICBsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICByZXR1cm4gdmlldy5nZXRVaW50MzIob2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKipcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIC0gdGhlIGludGVnZXIgdG8gYmUgY29udmVydGVkXG5cdCAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBidWZmZXIgY29udmVydGVkIGZyb20gaW5wdXQgdmFsdWVcblx0ICovXG4gICAgaW50MzJUb0FycmF5QnVmZmVyKHZhbHVlKSB7XG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7IC8vIEludDMyIGhhcyA0IGJ5dGVzXG4gICAgICAgIGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDAsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IEJpdENvbnZlcnRlciB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBCaXRDb252ZXJ0ZXIgfSBmcm9tICcuLi91dGlsL0JpdENvbnZlcnRlci5qcyc7XG5cbmNsYXNzIEJpbmFyeUZyYW1lSGVhZGVyIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKiBAcGFyYW0ge1JwY1R5cGV9IHJwY1R5cGUgLSBBbiBSUEMgRW51bSAgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG9mIFJQQyBiZWluZyBkZXNjcmliZWQgKFJlcXVlc3QsIFJlc3BvbnNlLCBOb3RpZmljYXRpb24pXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9uSUR9IGZ1bmN0aW9uSWQgLSBBIEZ1bmN0aW9uSUQgRW51bSByZXByZXNlbnRpbmcgdGhlIFJQQyBmdW5jdGlvbiB0aGF0IGlzIGJlaW5nIGRlc2NyaWJlZFxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvcnJlbGF0aW9uSWQgLSBBIG51bWJlciByZXByZXNlbnRpbmcgYW4gSUQgdG8gY29ycmVsYXRlIGEgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcGFpclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGpzb25TaXplIC0gQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBzaXplIG9mIGEgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJwY1R5cGUsIGZ1bmN0aW9uSWQsIGNvcnJlbGF0aW9uSWQsIGpzb25TaXplKSB7XG4gICAgICAgIHRoaXMuX3JwY1R5cGUgPSBycGNUeXBlO1xuICAgICAgICB0aGlzLl9mdW5jdGlvbklkID0gZnVuY3Rpb25JZDtcbiAgICAgICAgdGhpcy5fY29ycmVsYXRpb25JZCA9IGNvcnJlbGF0aW9uSWQ7XG4gICAgICAgIHRoaXMuX2pzb25TaXplID0ganNvblNpemU7XG5cbiAgICAgICAgLy8gVE9ET1xuICAgICAgICB0aGlzLl9qc29uRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2J1bGtEYXRhID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICogVGFrZXMgaW4gYSBieXRlIGFycmF5IGFuZCB0cmFuc2Zvcm1zIGl0IHRvIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYmluSGVhZGVyXG4gICAgKiBAcmV0dXJuIHtCaW5hcnlGcmFtZUhlYWRlcn0gYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIHBhcnNpbmcgdGhlIHN1cHBsaWVkIFVpbnQ4QXJyYXkgXG4gICAgKi9cbiAgICBmcm9tQmluYXJ5SGVhZGVyKGJpbkhlYWRlcikge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBVc2VzIHRoZSBwcml2YXRlIG1lbWJlcnMgb2YgdGhpcyBjbGFzcyB0byBjb25zdHJ1Y3QgYSBieXRlIGFycmF5IGhlYWRlclxuICAgICogQHJldHVybiB7VWludDhBcnJheX0gLSBBIGJ5dGUgYXJyYXlcbiAgICAqL1xuICAgIGFzc2VtYmxlSGVhZGVyQnl0ZXMoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7UnBjVHlwZX0gcnBjVHlwZSAtIEFuIFJQQyBFbnVtICByZXByZXNlbnRpbmcgdGhlIHR5cGUgb2YgUlBDIGJlaW5nIGRlc2NyaWJlZCAoUmVxdWVzdCwgUmVzcG9uc2UsIE5vdGlmaWNhdGlvbilcbiAgICAqL1xuICAgIHNldFJQQ1R5cGUodHlwZSkge1xuICAgICAgICB0aGlzLl9ycGNUeXBlID0gdHlwZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtScGNUeXBlfSBycGNUeXBlIC0gQW4gUlBDIEVudW0gIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiBSUEMgYmVpbmcgZGVzY3JpYmVkIChSZXF1ZXN0LCBSZXNwb25zZSwgTm90aWZpY2F0aW9uKVxuICAgICovXG4gICAgZ2V0UlBDVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JwY1R5cGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbklEfSBmdW5jdGlvbklkIC0gQSBGdW5jdGlvbklEIEVudW0gcmVwcmVzZW50aW5nIHRoZSBSUEMgZnVuY3Rpb24gdGhhdCBpcyBiZWluZyBkZXNjcmliZWRcblxuICAgICovXG4gICAgc2V0RnVuY3Rpb25JZChpZCkge1xuICAgICAgICB0aGlzLl9mdW5jdGlvbklkID0gaWQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHJldHVybiB7RnVuY3Rpb25JRH0gZnVuY3Rpb25JZCAtIEEgRnVuY3Rpb25JRCBFbnVtIHJlcHJlc2VudGluZyB0aGUgUlBDIGZ1bmN0aW9uIHRoYXQgaXMgYmVpbmcgZGVzY3JpYmVkXG4gICAgKi9cbiAgICBnZXRGdW5jdGlvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25JZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gY29ycmVsYXRpb25JZCAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyBhbiBJRCB0byBjb3JyZWxhdGUgYSByZXF1ZXN0IGFuZCByZXNwb25zZSBwYWlyXG4gICAgKi9cbiAgICBzZXRDb3JyZWxhdGlvbklkKGlkKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlbGF0aW9uSWQgPSBpZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGNvcnJlbGF0aW9uSWQgLSBBIG51bWJlciByZXByZXNlbnRpbmcgYW4gSUQgdG8gY29ycmVsYXRlIGEgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcGFpclxuXG4gICAgKi9cbiAgICBnZXRDb3JyZWxhdGlvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ycmVsYXRpb25JZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgc2l6ZSBvZiBhIEpTT04gb2JqZWN0XG4gICAgKi9cbiAgICBzZXRKU09OU2l6ZShzaXplKSB7XG4gICAgICAgIHRoaXMuX2pzb25TaXplID0gc2l6ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBzaXplIG9mIGEgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIGdldEpTT05TaXplKCkge1xuICAgICAgICByZXR1cm4gX2pzb25TaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEgLSBBIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIEpTT04gZGF0YVxuICAgICovXG4gICAgc2V0SlNPTkRhdGEoZGF0YSkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHJldHVybiB7VWludDhBcnJheX0gLSBBIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIEpTT04gZGF0YVxuICAgICovXG4gICAgZ2V0SlNPTkRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9qc29uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gZGF0YSAtIEEgYnl0ZSBhcnJheSByZXByZXNlbnRpbmcgYnVsayBkYXRhXG4gICAgKi9cbiAgICBzZXRCdWxrRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2J1bGtEYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IC0gQSBieXRlIGFycmF5IHJlcHJlc2VudGluZyBidWxrIGRhdGFcbiAgICAqL1xuICAgIGdldEJ1bGtEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVsa0RhdGE7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IEJpbmFyeUZyYW1lSGVhZGVyIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuLyoqXG4gKiBUaGlzIGNsYXNzIHdpbGwgYXNzZW1ibGUgdGhlIGRpZmZlcmVudCB0eXBlcyBvZiBtZXNzYWdlc1xuICovXG5jbGFzcyBNZXNzYWdlRnJhbWVBc3NlbWJsZXJ7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGhlYWRlclNpemVcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihoZWFkZXJTaXplPTgsIGNhbGxiYWNrKXtcbiAgICAgICAgaWYoY2FsbGJhY2sgPT0gbnVsbCl7XG4gICAgICAgICAgICB0aHJvdyBcIkNhbGxiYWNrIGNhbid0IGJlIG51bGwgZm9yIE1lc3NhZ2VGcmFtZUFzc2VtYmxlclwiO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9hY2N1bXVsYXRvciA9IG51bGw7IC8vVE9ETyBieXRlIGFycmF5IG91dHB1dCBzdHJlYW1cbiAgICAgICAgdGhpcy5faGVhZGVyc2l6ZSA9IGhlYWRlclNpemU7XG4gICAgICAgIHRoaXMuX3RvdGFsU2l6ZSA9IDA7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldFxuICAgICovXG4gICAgaGFuZGxlRnJhbWUoc2RsUGFja2V0KXtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldFxuICAgICovXG4gICAgaGFuZGxlTXVsdGlGcmFtZU1lc3NhZ2VGcmFtZShzZGxQYWNrZXQpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgKi9cbiAgICBoYW5kbGVGaXJzdERhdGFGcmFtZShzZGxQYWNrZXQpe1xuXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldFxuICAgICovXG4gICAgaGFuZGxlUmVtYWluaW5nRnJhbWUoc2RsUGFja2V0KXtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBNZXNzYWdlRnJhbWVBc3NlbWJsZXIgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuY2xhc3MgRW51bSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGludGVudGlvbmFsbHkgZW1wdHlcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgYSBnaXZlbiB2YWx1ZSBpZiB0aGUgdmFsdWUgaXMgZm91bmQgd2l0aGluIHRoZSBrZXk6dmFsdWUgbWFwXG4gICAgKiBAcGFyYW0gdmFsdWUgLSBBIHByaW1pdGl2ZSB2YWx1ZSB0byBmaW5kIGluIHRoZSBtYXBcbiAgICAqIEBwYXJhbSBtYXAge09iamVjdH0gLSBBbiBtYXAgb2Ygc3RyaW5nIHByb3BlcnRpZXMgdG8gcHJpbWl0aXZlIHZhbHVlcyBcbiAgICAqIEByZXR1cm4ge251bGx8U3RyaW5nfSAtIFJldHVybnMgbnVsbCBpZiBub3QgZm91bmRcbiAgICAqL1xuICAgIHN0YXRpYyBrZXlGb3JWYWx1ZUludGVybmFsKHZhbHVlLCBtYXApIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG1hcCkge1xuICAgICAgICAgICAgaWYgKG1hcFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGdpdmVuIHZhbHVlIGlmIHRoZSB2YWx1ZSBpcyBmb3VuZCB3aXRoaW4gdGhlIGtleTp2YWx1ZSBtYXBcbiAgICAqIEBwYXJhbSB2YWx1ZSAtIEEgcHJpbWl0aXZlIHZhbHVlIHRvIGZpbmQgaW4gdGhlIG1hcFxuICAgICogQHBhcmFtIG1hcCB7T2JqZWN0fSAtIEFuIG1hcCBvZiBzdHJpbmcgcHJvcGVydGllcyB0byBwcmltaXRpdmUgdmFsdWVzIFxuICAgICogQHJldHVybiB7Kn0gLSBSZXR1cm5zIGEgdmFsdWUgaWYgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gICAgKi9cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgbWFwKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBtYXApIHtcbiAgICAgICAgICAgIGlmIChtYXBba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFwW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEEgbWV0aG9kIGZvciBzdWJjbGFzc2VzIHRvIGltcGxlbWVudCB0aGF0IGRvZXMgd2hhdCBrZXlGb3JWYWx1ZUludGVybmFsIGRvZXNcbiAgICAqIEBwYXJhbSB2YWx1ZSAtIEEgcHJpbWl0aXZlIHZhbHVlIHRvIGZpbmQgaW4gdGhlIG1hcCBvZiB0aGUgc3ViY2xhc3NcbiAgICAqIEByZXR1cm4geyp9IC0gUmV0dXJucyBhIHZhbHVlIGlmIGZvdW5kLCBvciBudWxsIGlmIG5vdCBmb3VuZFxuICAgICovXG4gICAgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgXCJtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuXCI7XG4gICAgfVxufVxuXG5leHBvcnQgeyBFbnVtIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi8uLi91dGlsL0VudW0uanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFbnVtfSBGcmFtZVR5cGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgRnJhbWVUeXBlIGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IENPTlRST0woKSB7XG4gICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQLkNPTlRST0w7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IEZJUlNUKCkge1xuICAgICAgICByZXR1cm4gRnJhbWVUeXBlLk1BUC5GSVJTVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgQ09OU0VDVVRJVkUoKSB7XG4gICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQLkNPTlNFQ1VUSVZFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBTSU5HTEUoKSB7XG4gICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQLlNJTkdMRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbmZpcm1zIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpbiBleGlzdHMgaW4gdGhlIEVudW1zIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxOdW1iZXJ9IC0gUmV0dXJucyBudWxsIGlmIHRoZSBlbnVtIHZhbHVlIGRvZXNuJ3QgZXhpc3RcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gRnJhbWVUeXBlLk1BUCkge1xuICAgICAgICAgICAgaWYgKEZyYW1lVHlwZS5NQVBba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gRnJhbWVUeXBlLk1BUFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5GcmFtZVR5cGUuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICdDT05UUk9MJzogMHgwMCxcbiAgJ0ZJUlNUJzogMHgwMixcbiAgJ0NPTlNFQ1VUSVZFJzogMHgwMyxcbiAgJ1NJTkdMRSc6IDB4MDEsXG59KTtcblxuZXhwb3J0IHsgRnJhbWVUeXBlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRnJhbWVUeXBlIH0gZnJvbSAnLi9lbnVtcy9GcmFtZVR5cGUuanMnO1xuXG4vL1RPRE8gYWRkIG1vcmUgcHJvcGVydGllc1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNkbFBhY2tldFxuICogQHByb3BlcnR5IHtudW1iZXJ9IEVYVFJBX1BBUkNFTF9EQVRBX0xFTkdUSFxuICogQHByb3BlcnR5IHtudW1iZXJ9IEhFQURFUl9TSVpFXG4gKiBAcHJvcGVydHkge251bWJlcn0gSEVBREVSX1NJWkVfVjFcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBFTkNSWVBUSU9OX01BU0tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTRVJWSUNFX1RZUEVfQ09OVFJPTFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNFUlZJQ0VfVFlQRV9SUENcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTRVJWSUNFX1RZUEVfUENNXG4gKiBAcHJvcGVydHkge251bWJlcn0gU0VSVklDRV9UWVBFX1ZJREVPXG4gKiBAcHJvcGVydHkge251bWJlcn0gU0VSVklDRV9UWVBFX0JVTEtfREFUQVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fSEVBUlRfQkVBVFxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fU1RBUlRfU0VSVklDRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fU1RBUlRfU0VSVklDRV9BQ0tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX1NUQVJUX1NFUlZJQ0VfTkFLXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19FTkRfU0VSVklDRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fRU5EX1NFUlZJQ0VfQUNLXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19FTkRfU0VSVklDRV9OQUtcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlRfQUNLXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19SRUdJU1RFUl9TRUNPTkRBUllfVFJBTlNQT1JUX05BS1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fVFJBTlNQT1JUX0VWRU5UX1VQREFURVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fU0VSVklDRV9EQVRBX0FDS1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fSEVBUlRfQkVBVF9BQ0tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX0ZJTkFMX0NPTk5FU0NVVElWRV9GUkFNRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fUkVTRVJWRURcblxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0VmVyc2lvblxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0RW5jcnlwdGlvblxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0U2VydmljZVR5cGVcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldEZyYW1lSW5mb1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0U2Vzc2lvbklEXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRNZXNzYWdlSURcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldERhdGFTaXplXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRQYXlsb2FkXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRQYXlsb2FkXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRFbmNyeXB0aW9uQml0XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRGcmFtZVR5cGVcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHRvVWludDhBcnJheVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gdG9TdHJpbmdcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGNvbnN0cnVjdFBhY2tldFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gcHV0VGFnXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRUYWdcbiAqL1xuXG5jbGFzcyBTZGxQYWNrZXQge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIC0gUHJvdG9jb2wgdmVyc2lvbiB0byB1c2VcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5jcnlwdGlvbiAtIFdoZXRoZXIgb3Igbm90IHRoZSBwYXlsb2FkIGluIHRoaXMgcGFja2V0IGlzIGVuY3J5cHRlZFxuICAgICogQHBhcmFtIHtGcmFtZVR5cGV9IGZyYW1lVHlwZSAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgcGFja2V0IGZyYW1lIHR5cGVcbiAgICAqIEBwYXJhbSB7U2VydmljZVR5cGV9IHNlcnZpY2VUeXBlIC0gVGhlIHNlcnZpY2UgdGhhdCB0aGlzIHBhY2tldCBpcyBhc3NvY2lhdGVkIHdpdGhcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcmFtZUluZm8gLSBTcGVjaWZpYyBmcmFtZSBpbmZvIHJlbGF0ZWQgdG8gdGhpcyBwYWNrZXRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBzZXNzaW9uSUQgLSBJRCB0aGlzIHBhY2tldCBpcyBhc3NvY2lhdGVkIHdpdGhcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhU2l6ZSAtIFNpemUgb2YgdGhlIHBheWxvYWQgdGhhdCB3aWxsIGJlIGFkZGVkXG4gICAgKiBAcGFyYW0ge051bWJlcn0gbWVzc2FnZUlEIC0gSUQgb2YgdGhpcyBzcGVjaWZpYyBwYWNrZXRcbiAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gcGF5bG9hZCAtIFJhdyBkYXRhIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgcGFja2V0IChSUEMgbWVzc2FnZSwgcmF3IGJ5dGVzLCBldGMpXG4gICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0XG4gICAgKiBAcGFyYW0ge051bWJlcn0gYnl0ZXNUb1dyaXRlXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih2ZXJzaW9uID0gMSwgZW5jcnlwdGlvbiA9IGZhbHNlLCBmcmFtZVR5cGUgPSAtMSwgc2VydmljZVR5cGUgPSAtMSwgZnJhbWVJbmZvID0gLTEsIHNlc3Npb25JRCA9IDAsIGRhdGFTaXplID0gMCwgbWVzc2FnZUlEID0gMCwgcGF5bG9hZCA9IG51bGwsIG9mZnNldCA9IDAsIGJ5dGVzVG9Xcml0ZSA9IDApIHtcbiAgICAgICAgdGhpcy5fdmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMuX2VuY3J5cHRpb24gPSBlbmNyeXB0aW9uO1xuICAgICAgICB0aGlzLl9mcmFtZVR5cGUgPSBmcmFtZVR5cGU7XG4gICAgICAgIHRoaXMuX3NlcnZpY2VUeXBlID0gc2VydmljZVR5cGU7XG4gICAgICAgIHRoaXMuX2ZyYW1lSW5mbyA9IGZyYW1lSW5mbztcbiAgICAgICAgdGhpcy5fc2Vzc2lvbklEID0gc2Vzc2lvbklEO1xuICAgICAgICB0aGlzLl9kYXRhU2l6ZSA9IGRhdGFTaXplO1xuICAgICAgICB0aGlzLl9tZXNzYWdlSUQgPSBtZXNzYWdlSUQ7XG4gICAgICAgIHRoaXMuX3BheWxvYWQgPSBwYXlsb2FkO1xuICAgICAgICB0aGlzLl9vZmZzZXQgPSBvZmZzZXQ7XG4gICAgICAgIHRoaXMuX2J5dGVzVG9Xcml0ZSA9IGJ5dGVzVG9Xcml0ZTtcblxuICAgICAgICB0aGlzLl9ic29uUGF5bG9hZCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAocGF5bG9hZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fcGF5bG9hZCA9IG5ldyBVaW50OEFycmF5KGJ5dGVzVG9Xcml0ZSk7XG4gICAgICAgICAgICB0aGlzLl9wYXlsb2FkID0gdGhpcy5fcGF5bG9hZC5zbGljZShvZmZzZXQsIGJ5dGVzVG9Xcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIFByb3RvY29sIHZlcnNpb24gdXNlZCBieSB0aGlzIHBhY2tldFxuICAgICovXG4gICAgZ2V0VmVyc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnNpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtCb29sZWFufSAtIFdoZXRoZXIgb3Igbm90IHRoZSBwYXlsb2FkIGluIHRoaXMgcGFja2V0IGlzIGVuY3J5cHRlZFxuICAgICovXG4gICAgZ2V0RW5jcnlwdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtTZXJ2aWNlVHlwZX0gLSBUaGUgc2VydmljZSB0aGF0IHRoaXMgcGFja2V0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgICovXG4gICAgZ2V0U2VydmljZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlVHlwZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn0gLSBTcGVjaWZpYyBmcmFtZSBpbmZvIHJlbGF0ZWQgdG8gdGhpcyBwYWNrZXRcbiAgICAqL1xuICAgIGdldEZyYW1lSW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZyYW1lSW5mbztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn0gLSBJRCB0aGlzIHBhY2tldCBpcyBhc3NvY2lhdGVkIHdpdGhcbiAgICAqL1xuICAgIGdldFNlc3Npb25JRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nlc3Npb25JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn0gLSBJRCBvZiB0aGlzIHNwZWNpZmljIHBhY2tldFxuICAgICovXG4gICAgZ2V0TWVzc2FnZUlEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUlEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIFNpemUgb2YgdGhlIHBheWxvYWQgdGhhdCB3aWxsIGJlIGFkZGVkXG4gICAgKi9cbiAgICBnZXREYXRhU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFTaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7VWludDhBcnJheX0gcGF5bG9hZCAtIFJhdyBkYXRhIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgcGFja2V0IChSUEMgbWVzc2FnZSwgcmF3IGJ5dGVzLCBldGMpXG4gICAgKi9cbiAgICBzZXRQYXlsb2FkKHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5fcGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fSAtIFJhdyBkYXRhIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgcGFja2V0IChSUEMgbWVzc2FnZSwgcmF3IGJ5dGVzLCBldGMpXG4gICAgKi9cbiAgICBnZXRQYXlsb2FkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF5bG9hZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn0gLSBSZXR1cm5zIGEgbnVtYmVyIHJlcHJlc2VudGluZyBhIGJ5dGUgbWFzayBkZXBlbmRpbmcgb24gdGhlIGJvb2xlYW4gdmFsdWVcbiAgICAqL1xuICAgIGdldEVuY3J5cHRpb25CaXQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbmNyeXB0aW9uID8gU2RsUGFja2V0LkVOQ1JZUFRJT05fTUFTSyA6IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtGcmFtZVR5cGV9IC0gQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBwYWNrZXQgZnJhbWUgdHlwZVxuICAgICovXG4gICAgZ2V0RnJhbWVUeXBlKCkge1xuICAgICAgICBpZiAoRnJhbWVUeXBlLnZhbHVlRm9yU3RyaW5nKHRoaXMuX2ZyYW1lVHlwZSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9mcmFtZVR5cGU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRnJhbWVUeXBlLlNJTkdMRTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7VWludDhBcnJheX0gLSBSYXcgZGF0YSB0aGF0IHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlIHBhY2tldCAoUlBDIG1lc3NhZ2UsIHJhdyBieXRlcywgZXRjKVxuICAgICovXG4gICAgdG9VaW50OEFycmF5KCkge1xuICAgICAgICByZXR1cm4gY29uc3RydWN0UGFja2V0KHRoaXMuX3ZlcnNpb24sIHRoaXMuX2VuY3J5cHRpb24sIHRoaXMuX2ZyYW1lVHlwZSwgdGhpcy5fc2VydmljZVR5cGUsIHRoaXMuX2ZyYW1lSW5mbywgdGhpcy5fc2Vzc2lvbklELCB0aGlzLl9kYXRhU2l6ZSwgdGhpcy5fbWVzc2FnZUlELCB0aGlzLl9wYXlsb2FkKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7U3RyaW5nfSAtIFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgcGFja2V0XG4gICAgKi9cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IFwiKioqKiogU2RsIFBhY2tldCAqKioqKlwiO1xuICAgICAgICBvdXRwdXQgKz0gYFxcblZlcnNpb246ICR7dGhpcy5fdmVyc2lvbn1gO1xuICAgICAgICBvdXRwdXQgKz0gYFxcbkVuY3J5cHRpb246ICR7dGhpcy5fZW5jcnlwdGlvbn1gO1xuICAgICAgICBvdXRwdXQgKz0gYFxcbkZyYW1lVHlwZTogJHt0aGlzLl9mcmFtZVR5cGV9YDtcbiAgICAgICAgb3V0cHV0ICs9IGBcXG5TZXJ2aWNlVHlwZTogJHt0aGlzLl9zZXJ2aWNlVHlwZX1gO1xuICAgICAgICBvdXRwdXQgKz0gYFxcbkZyYW1lSW5mbzogJHt0aGlzLl9mcmFtZUluZm99YDtcbiAgICAgICAgb3V0cHV0ICs9IGBcXG5TZXNzaW9uSUQ6ICR7dGhpcy5fc2Vzc2lvbklEfWA7XG4gICAgICAgIG91dHB1dCArPSBgXFxuRGF0YVNpemU6ICR7dGhpcy5fZGF0YVNpemV9YDtcblxuICAgICAgICBpZih0aGlzLl92ZXJzaW9uID4gMSl7XG4gICAgICAgICAgICBvdXRwdXQgKz0gYFxcbk1lc3NhZ2VJRDogJHt0aGlzLl9tZXNzYWdlSUR9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dCArPSBcIlxcbioqKioqIFNkbCBQYWNrZXQgRW5kICoqKioqXCI7XG5cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG5cbiAgICAvKipcblx0ICogVGhpcyBtZXRob2QgdGFrZXMgaW4gdGhlIHZhcmlvdXMgY29tcG9uZW50cyB0byB0aGUgU0RMIHBhY2tldCBzdHJ1Y3R1cmUgYW5kIGNyZWF0ZXMgYSBuZXcgYnl0ZSBhcnJheSB0aGF0IGNhbiBiZSBzZW50IHZpYSB0aGUgdHJhbnNwb3J0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gLSBQcm90b2NvbCB2ZXJzaW9uIHRvIHVzZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZW5jcnlwdGlvbiAtIFdoZXRoZXIgb3Igbm90IHRoZSBwYXlsb2FkIGluIHRoaXMgcGFja2V0IGlzIGVuY3J5cHRlZFxuICAgICAqIEBwYXJhbSB7RnJhbWVUeXBlfSBmcmFtZVR5cGUgLSBBIG51bWJlciByZXByZXNlbnRpbmcgdGhlIHBhY2tldCBmcmFtZSB0eXBlXG4gICAgICogQHBhcmFtIHtTZXJ2aWNlVHlwZX0gc2VydmljZVR5cGUgLSBUaGUgc2VydmljZSB0aGF0IHRoaXMgcGFja2V0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb250cm9sRnJhbWVJbmZvIC0gU3BlY2lmaWMgZnJhbWUgaW5mbyByZWxhdGVkIHRvIHRoaXMgcGFja2V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHNlc3Npb25JRCAtIElEIHRoaXMgcGFja2V0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhU2l6ZSAtIFNpemUgb2YgdGhlIHBheWxvYWQgdGhhdCB3aWxsIGJlIGFkZGVkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG1lc3NhZ2VJRCAtIElEIG9mIHRoaXMgc3BlY2lmaWMgcGFja2V0XG4gICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwYXlsb2FkIC0gUmF3IGRhdGEgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBwYWNrZXQgKFJQQyBtZXNzYWdlLCByYXcgYnl0ZXMsIGV0Yylcblx0ICogQHJldHVybiB7VWludDhBcnJheX0gLSBBIGJ5dGVbXSByZXByZXNlbnRhdGlvbiBvZiBhbiBTZGxQYWNrZXQgYnVpbHQgdXNpbmcgdGhlIHN1cHBsaWVkIHBhcmFtc1xuXHQgKi9cbiAgICBzdGF0aWMgY29uc3RydWN0UGFja2V0KHZlcnNpb24sIGVuY3J5cHRpb24sIGZyYW1lVHlwZSwgc2VydmljZVR5cGUsIGNvbnRyb2xGcmFtZUluZm8sIHNlc3Npb25JRCwgZGF0YVNpemUsIG1lc3NhZ2VJRCwgcGF5bG9hZCkge1xuICAgICAgICBsZXQgZGF0YVZpZXcgPSBudWxsO1xuICAgICAgICBsZXQgZGF0YVZpZXdJbmRleCA9IDA7XG5cbiAgICAgICAgc3dpdGNoICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgZGF0YVZpZXcgPSBuZXcgVWludDhBcnJheShTZGxQYWNrZXQuSEVBREVSX1NJWkVfVjEgKyBkYXRhU2l6ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGRhdGFWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoU2RsUGFja2V0LkhFQURFUl9TSVpFICsgZGF0YVNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IHZlcnNpb248PDQgKyBnZXRFbmNyeXB0aW9uQml0KGVuY3J5cHRpb24pICsgZnJhbWVUeXBlO1xuICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gc2VydmljZVR5cGU7XG4gICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBjb250cm9sRnJhbWVJbmZvO1xuICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gc2Vzc2lvbklEO1xuICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gZGF0YVNpemUmMHhGRjAwMDAwMCA+PiAyNDtcbiAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IGRhdGFTaXplJjB4MDBGRjAwMDAgPj4gMTY7XG4gICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBkYXRhU2l6ZSYweDAwMDBGRjAwID4+IDg7XG4gICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBkYXRhU2l6ZSYweDAwMDAwMEZGO1xuXG4gICAgICAgIGlmICh2ZXJzaW9uID4gMSkge1xuICAgICAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IG1lc3NhZ2VJRCYweEZGMDAwMDAwID4+IDI0O1xuICAgICAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IG1lc3NhZ2VJRCYweDAwRkYwMDAwID4+IDE2O1xuICAgICAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IG1lc3NhZ2VJRCYweDAwMDBGRjAwID4+IDg7XG4gICAgICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gbWVzc2FnZUlEJjB4MDAwMDAwRkY7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGF5bG9hZCAhPT0gbnVsbCAmJiBwYXlsb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRhdGFWaWV3LnNldChwYXlsb2FkLCBkYXRhVmlld0luZGV4KyspO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFWaWV3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB0YWcgLSBTdHJpbmcga2V5IHRvIGFkZCBhcyBhIHByb3BlcnR5IHRvIHRoZSBCU09OIG1hcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIC0gT2JqZWN0IHRvIGFkZCBhcyBhIHZhbHVlIHRvIHRoZSBCU09OIG1hcFxuICAgICAqL1xuICAgIHB1dFRhZyh0YWcsIGRhdGEpIHtcbiAgICAgICAgLy8gVE9ETyBic29uXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRhZyAtIFN0cmluZyBrZXkgdG8gYWRkIGFzIGEgcHJvcGVydHkgdG8gdGhlIEJTT04gbWFwXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBkYXRhIC0gT2JqZWN0IGFzIGEgdmFsdWUgZm91bmQgZnJvbSB0aGUgdGhlIEJTT04gbWFwXG4gICAgICovXG4gICAgZ2V0VGFnKHRhZykge1xuICAgICAgICAvLyBUT0RPIGJzb25cbiAgICB9XG5cbn1cblxuU2RsUGFja2V0LkVYVFJBX1BBUkNFTF9EQVRBX0xFTkdUSCAgICAgICAgICAgICAgICAgICAgICA9IDI0O1xuU2RsUGFja2V0LkhFQURFUl9TSVpFICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDEyO1xuU2RsUGFja2V0LkhFQURFUl9TSVpFX1YxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDg7XG5TZGxQYWNrZXQuRU5DUllQVElPTl9NQVNLICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwODtcblxuLyoqXG4gKiBTZXJ2aWNlIFR5cGVcbiAqL1xuU2RsUGFja2V0LlNFUlZJQ0VfVFlQRV9DT05UUk9MICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDA7XG4vL1JFU0VSVkVEIDB4MDEgLSAweDA2XG5TZGxQYWNrZXQuU0VSVklDRV9UWVBFX1JQQyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwNztcbi8vUkVTRVJWRUQgMHgwOCAtIDB4MDlcblNkbFBhY2tldC5TRVJWSUNFX1RZUEVfUENNICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDBBO1xuU2RsUGFja2V0LlNFUlZJQ0VfVFlQRV9WSURFTyAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MEI7XG4vL1JFU0VSVkVEIDB4MEMgLSAweDBFXG5TZGxQYWNrZXQuU0VSVklDRV9UWVBFX0JVTEtfREFUQSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwRjtcbi8vUkVTRVJWRUQgMHgxMCAtIDB4RkZcblxuLyoqXG4gKiBGcmFtZSBJbmZvXG4gKi9cblNkbFBhY2tldC5GUkFNRV9JTkZPX0hFQVJUX0JFQVQgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDAwO1xuU2RsUGFja2V0LkZSQU1FX0lORk9fU1RBUlRfU0VSVklDRSAgICAgICAgICAgICAgICAgICAgICA9IDB4MDE7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19TVEFSVF9TRVJWSUNFX0FDSyAgICAgICAgICAgICAgICAgID0gMHgwMjtcblNkbFBhY2tldC5GUkFNRV9JTkZPX1NUQVJUX1NFUlZJQ0VfTkFLICAgICAgICAgICAgICAgICAgPSAweDAzO1xuU2RsUGFja2V0LkZSQU1FX0lORk9fRU5EX1NFUlZJQ0UgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDQ7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19FTkRfU0VSVklDRV9BQ0sgICAgICAgICAgICAgICAgICAgID0gMHgwNTtcblNkbFBhY2tldC5GUkFNRV9JTkZPX0VORF9TRVJWSUNFX05BSyAgICAgICAgICAgICAgICAgICAgPSAweDA2O1xuU2RsUGFja2V0LkZSQU1FX0lORk9fUkVHSVNURVJfU0VDT05EQVJZX1RSQU5TUE9SVCAgICAgICA9IDB4MDc7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19SRUdJU1RFUl9TRUNPTkRBUllfVFJBTlNQT1JUX0FDSyAgID0gMHgwODtcblNkbFBhY2tldC5GUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlRfTkFLICAgPSAweDA5O1xuLy8weDBBLTB4RkMgYXJlIHJlc2VydmVkXG5TZGxQYWNrZXQuRlJBTUVfSU5GT19UUkFOU1BPUlRfRVZFTlRfVVBEQVRFICAgICAgICAgICAgID0gMHhGRDtcblNkbFBhY2tldC5GUkFNRV9JTkZPX1NFUlZJQ0VfREFUQV9BQ0sgICAgICAgICAgICAgICAgICAgPSAweEZFO1xuU2RsUGFja2V0LkZSQU1FX0lORk9fSEVBUlRfQkVBVF9BQ0sgICAgICAgICAgICAgICAgICAgICA9IDB4RkY7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19GSU5BTF9DT05ORVNDVVRJVkVfRlJBTUUgICAgICAgICAgID0gMHgwMDtcblNkbFBhY2tldC5GUkFNRV9JTkZPX1JFU0VSVkVEICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDAwO1xuXG5leHBvcnQgeyBTZGxQYWNrZXQgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vdXRpbC9FbnVtLmpzJztcblxuY2xhc3MgUnBjU3RydWN0IHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihwYXJhbWV0ZXJzID0ge30pIHtcbiAgICAgICAgdGhpcy5faXNGb3JtYXRSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcnBjU3BlY1ZlcnNpb24gPSBudWxsO1xuICAgICAgICB0aGlzLl9wYXJhbWV0ZXJzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShwYXJhbWV0ZXJzIHx8IHt9KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgKi9cbiAgICBnZXRQYXJhbWV0ZXJzKCkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLl9wYXJhbWV0ZXJzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgKiBAcmV0dXJuIHsqfVxuICAgICovXG4gICAgZ2V0UGFyYW1ldGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFyYW1ldGVyc1trZXldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICogQHJldHVybiB7UnBjU3RydWN0fVxuICAgICovXG4gICAgc2V0UGFyYW1ldGVyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fcGFyYW1ldGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fcGFyYW1ldGVyc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHRDbGFzc1xuICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICovXG4gICAgZ2V0T2JqZWN0KHRDbGFzcywga2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1hdE9iamVjdCh0Q2xhc3MsIHRoaXMuZ2V0UGFyYW1ldGVyKGtleSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdENsYXNzXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgKiBAcmV0dXJuIHtudWxsfE9iamVjdH1cbiAgICAqL1xuICAgIGZvcm1hdE9iamVjdCh0Q2xhc3MsIG9iaikge1xuICAgICAgICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT09IHRDbGFzcykge1xuICAgICAgICAgICAgLy8gaWYgdENsYXNzIGlzIFN0cmluZyBhbmQgb2JqIGlzIGEgU3RyaW5nLCB0aGlzIHNob3VsZCBleGVjdXRlXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nKSB7XG4gICAgICAgICAgICBpZiAodENsYXNzIGluc3RhbmNlb2YgRW51bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0Q2xhc3MudmFsdWVGb3JTdHJpbmcob2JqKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodENsYXNzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBtYXkgYmUgcmVkdW5kYW50XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICBpZiAodENsYXNzIGluc3RhbmNlb2YgUnBjU3RydWN0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0Q2xhc3Mob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGVuc3VyZSBjb21wbGV0ZW5lc3NcbiAgICAgICAgICAgIGlmIChvYmoubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCBvdXRBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAoaXRlbSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0QXJyYXkucHVzaCh0aGlzLmZvcm1hdE9iamVjdCh0Y2xhc3MsIGl0ZW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dEFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdENsYXNzXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgKi9cbiAgICB2YWxpZGF0ZVR5cGUodENsYXNzLCBvYmopIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgKHRDbGFzcyBpbnN0YW5jZW9mIEVudW0gJiYgdENsYXNzLnZhbHVlRm9yU3RyaW5nKG9iaikgPT09IG51bGwpXG4gICAgICAgICAgICB8fCAob2JqICE9PSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPT0gdENsYXNzKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHRocm93IGAke29iai5uYW1lfSBtdXN0IGJlIG9mIHR5cGUgJHt0Q2xhc3MubmFtZX1gO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFJwY1N0cnVjdCB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBScGNTdHJ1Y3QgfSBmcm9tICcuL1JwY1N0cnVjdC5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUnBjTWVzc2FnZVxuICogQHByb3BlcnR5IHtScGNUeXBlfSBycGNUeXBlXG4gKi9cbmNsYXNzIFJwY01lc3NhZ2UgZXh0ZW5kcyBScGNTdHJ1Y3Qge1xuXG4gICAgLypcbiAgICB7XG4gICAgICAgIFwicnBjVHlwZVwiOiBcIlJlcXVlc3RcIixcbiAgICAgICAgXCJmdW5jdGlvbk5hbWVcIjogXCJSZWdpc3RlckFwcEludGVyZmFjZVwiLFxuICAgICAgICBcImNvb3JlbGF0aW9uSURcIjogXCIzMjA5NDhcIixcbiAgICAgICAgXCJpc0VuY3J5cHRlZFwiOiBmYWxzZSxcbiAgICAgICAgXCJwYXJhbWV0ZXJzXCI6IHtcbiAgICAgICAgICAgIFwiYXBwTmFtZVwiOiBcIkhlbGxvXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJidWxrRGF0YVwiOiBcIi4uLlwiLFxuICAgIH1cbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlID0ge30pIHtcbiAgICAgICAgc3VwZXIoc3RvcmUucGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuX2lzRW5jcnlwdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JwY1R5cGUgPSBzdG9yZS5ycGNUeXBlO1xuICAgICAgICB0aGlzLl9mdW5jdGlvbk5hbWUgPSBzdG9yZS5mdW5jdGlvbk5hbWU7XG4gICAgICAgIHRoaXMuX2NvcnJlbGF0aW9uSUQgPSBzdG9yZS5jb3JyZWxhdGlvbklEO1xuICAgICAgICB0aGlzLl9idWxrRGF0YSA9IHRoaXMuc2V0QnVsa0RhdGEoc3RvcmUuYnVsa0RhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7UnBjVHlwZX1cbiAgICAqL1xuICAgIGdldFJQQ1R5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ycGNUeXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtScGNUeXBlfSB0eXBlXG4gICAgKiBAcmV0dXJuIHtScGNNZXNzYWdlfVxuICAgICovXG4gICAgc2V0UlBDVHlwZSh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3JwY1R5cGUgPSB0eXBlO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7U3RyaW5nfSB0eXBlXG4gICAgKi9cbiAgICBnZXRGdW5jdGlvbk5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mdW5jdGlvbk5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICogQHJldHVybiB7UnBjTWVzc2FnZX1cbiAgICAqL1xuICAgIHNldEZ1bmN0aW9uTmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IG5hbWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fSBkYXRhXG4gICAgKi9cbiAgICBnZXRCdWxrRGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2J1bGtEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtVSW50OEFycmF5fSBkYXRhXG4gICAgKiBAcmV0dXJuIHtScGNNZXNzYWdlfVxuICAgICovXG4gICAgc2V0QnVsa0RhdGEoZGF0YSA9IG51bGwpIHtcbiAgICAgICAgaWYgKGRhdGEgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2J1bGtEYXRhID0gZGF0YS5zbGljZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2J1bGtEYXRhID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAqL1xuICAgIGdldElzRW5jcnlwdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNFbmNyeXB0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge0Jvb2xlYW59IGJvb2xcbiAgICAqIEByZXR1cm4ge1JwY01lc3NhZ2V9XG4gICAgKi9cbiAgICBzZXRJc0VuY3J5cHRlZChib29sKSB7XG4gICAgICAgIHRoaXMuX2lzRW5jcnlwdGVkID0gYm9vbDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgUnBjTWVzc2FnZSB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi8uLi91dGlsL0VudW0uanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFbnVtfSBTZXJ2aWNlVHlwZVxuICogQHByb3BlcnR5IHtPYmplY3R9IE1BUFxuICovXG5jbGFzcyBTZXJ2aWNlVHlwZSBleHRlbmRzIEVudW0ge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBDT05UUk9MKCkge1xuICAgICAgICByZXR1cm4gU2VydmljZVR5cGUuTUFQLkNPTlRST0w7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJQQygpIHtcbiAgICAgICAgcmV0dXJuIFNlcnZpY2VUeXBlLk1BUC5SUEM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IEFVRElPKCkge1xuICAgICAgICByZXR1cm4gU2VydmljZVR5cGUuTUFQLkFVRElPO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBWSURFTygpIHtcbiAgICAgICAgcmV0dXJuIFNlcnZpY2VUeXBlLk1BUC5WSURFTztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgSFlCUklEKCkge1xuICAgICAgICByZXR1cm4gU2VydmljZVR5cGUuTUFQLkhZQlJJRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbmZpcm1zIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpbiBleGlzdHMgaW4gdGhlIEVudW1zIG9mIHRoaXMgY2xhc3NcbiAgICAqIEByZXR1cm4ge251bGx8TnVtYmVyfSAtIFJldHVybnMgbnVsbCBpZiB0aGUgZW51bSB2YWx1ZSBkb2Vzbid0IGV4aXN0XG4gICAgKi9cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIFNlcnZpY2VUeXBlLk1BUCkge1xuICAgICAgICAgICAgaWYgKFNlcnZpY2VUeXBlLk1BUFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBTZXJ2aWNlVHlwZS5NQVBba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuU2VydmljZVR5cGUuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgJ0NPTlRST0wnOiAweDAwLFxuICAgICdSUEMnOiAweDA3LFxuICAgICdBVURJTyc6IDB4MEEsXG4gICAgJ1ZJREVPJzogMHgwQixcbiAgICAnSFlCUklEJzoweDBGLFxufSk7XG5cbmV4cG9ydCB7IFNlcnZpY2VUeXBlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgUnBjTWVzc2FnZSB9IGZyb20gJy4uL3JwYy9ScGNNZXNzYWdlLmpzJ1xuaW1wb3J0IHsgU2RsUGFja2V0IH0gZnJvbSAnLi9TZGxQYWNrZXQuanMnXG5pbXBvcnQgeyBTZXJ2aWNlVHlwZSB9IGZyb20gJy4vZW51bXMvU2VydmljZVR5cGUuanMnO1xuXG5cbi8vVE9ETyBjaGVjayBob3cgdG8gaGFuZGxlIHRoZSBwcm9wZXJ0eS9mdW5jdGlvbiBleHBvc3VyZVxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZGxQcm90b2NvbExpc3RlbmVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRPblJwY01lc3NhZ2VSZWNlaXZlZExpc3RlbmVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXRPbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldE9uRGVjcnlwdFJlcXVlc3RMaXN0ZW5lclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25ScGNNZXNzYWdlUmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uU3RhcnRTZXJ2aWNlQUNLUmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uU3RhcnRTZXJ2aWNlTkFLUmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uRW5kU2VydmljZUFDS1JlY2VpdmVkXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvbkVuZFNlcnZpY2VOQUtSZWNlaXZlZFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25TZXJ2aWNlRW5jcnlwdGlvblN0YXJ0ZWRcbiAqL1xuY2xhc3MgU2RsUHJvdG9jb2xMaXN0ZW5lciB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3IgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX29uUnBjTWVzc2FnZVJlY2VpdmVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fb25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgXG4gICAgICovXG4gICAgc2V0T25ScGNNZXNzYWdlUmVjZWl2ZWRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9vblJwY01lc3NhZ2VSZWNlaXZlZCA9IGxpc3RlbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFxuICAgICAqL1xuICAgIHNldE9uQ29udHJvbFNlcnZpY2VNZXNzYWdlUmVjZWl2ZWRMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9vbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkID0gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgXG4gICAgICovXG4gICAgc2V0T25EZWNyeXB0UmVxdWVzdExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uRGVjcnlwdFJlcXVlc3RMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICAgIH1cblxuICAgIC8vVE9ETyBhZGQgdGhlIHNldHRlcnMgZm9yIHRoZSBhZGRlZCBmdW5jdGlvbnNcblxuICAgIC8qXG4gICAgKiBMaXN0ZW5lciBtZXRob2RzIHRvIGJlIGNhbGxlZFxuICAgICpcbiAgICAqL1xuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqL1xuICAgIG9uQ29udHJvbFNlcnZpY2VNZXNzYWdlUmVjZWl2ZWQoc2RsUGFja2V0KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fb25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtScGNNZXNzYWdlfSBycGNNZXNzYWdlIFxuICAgICAqL1xuICAgIG9uUnBjTWVzc2FnZVJlY2VpdmVkKHJwY01lc3NhZ2Upe1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uUnBjTWVzc2FnZVJlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9vblJwY01lc3NhZ2VSZWNlaXZlZChycGNNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKi9cbiAgICBvblN0YXJ0U2VydmljZUFDS1JlY2VpdmVkKHNkbFBhY2tldCl7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25TdGFydFNlcnZpY2VBQ0tSZWNlaXZlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydFNlcnZpY2VBQ0tSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKi9cbiAgICBvblN0YXJ0U2VydmljZU5BS1JlY2VpdmVkKHNkbFBhY2tldCl7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25TdGFydFNlcnZpY2VOQUtSZWNlaXZlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydFNlcnZpY2VOQUtSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKi9cbiAgICBvbkVuZFNlcnZpY2VBQ0tSZWNlaXZlZChzZGxQYWNrZXQpe1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uRW5kU2VydmljZUFDS1JlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkVuZFNlcnZpY2VBQ0tSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKi9cbiAgICBvbkVuZFNlcnZpY2VOQUtSZWNlaXZlZChzZGxQYWNrZXQpe1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uRW5kU2VydmljZU5BS1JlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkVuZFNlcnZpY2VOQUtSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZXJ2aWNlVHlwZX0gc2VydmljZVR5cGUgXG4gICAgICovXG4gICAgb25TZXJ2aWNlRW5jcnlwdGlvblN0YXJ0ZWQoc2VydmljZVR5cGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uU2VydmljZUVuY3J5cHRpb25TdGFydGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9uU2VydmljZUVuY3J5cHRpb25TdGFydGVkKHNlcnZpY2VUeXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbmV4cG9ydCB7IFNkbFByb3RvY29sTGlzdGVuZXIgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgU2RsUGFja2V0IH0gZnJvbSAnLi4vcHJvdG9jb2wvU2RsUGFja2V0LmpzJztcblxuY2xhc3MgVHJhbnNwb3J0TGlzdGVuZXIge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX29uVHJhbnNwb3J0Q29ubmVjdGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5fb25UcmFuc3BvcnREaXNjb25uZWN0ZWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9vbkVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5fb25QYWNrZXRSZWNlaXZlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm4ge1RyYW5zcG9ydExpc3RlbmVyfVxuICAgICAqL1xuICAgIHNldE9uVHJhbnNwb3J0Q29ubmVjdGVkKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fb25UcmFuc3BvcnRDb25uZWN0ZWQgPSBmdW5jO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAgICAgKiBAcmV0dXJuIHtUcmFuc3BvcnRMaXN0ZW5lcn1cbiAgICAgKi9cbiAgICBzZXRPblRyYW5zcG9ydERpc2Nvbm5lY3RlZChmdW5jKSB7XG4gICAgICAgIHRoaXMuX29uVHJhbnNwb3J0RGlzY29ubmVjdGVkID0gZnVuYztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybiB7VHJhbnNwb3J0TGlzdGVuZXJ9XG4gICAgICovXG4gICAgc2V0T25FcnJvcihmdW5jKSB7XG4gICAgICAgIHRoaXMuX29uRXJyb3IgPSBmdW5jO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAgICAgKiBAcmV0dXJuIHtUcmFuc3BvcnRMaXN0ZW5lcn1cbiAgICAgKi9cbiAgICBzZXRPblBhY2tldFJlY2VpdmVkKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fb25QYWNrZXRSZWNlaXZlZCA9IGZ1bmM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgXG4gICAgb25UcmFuc3BvcnRDb25uZWN0ZWQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25UcmFuc3BvcnRDb25uZWN0ZWQgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICB0aGlzLl9vblRyYW5zcG9ydENvbm5lY3RlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UcmFuc3BvcnREaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25UcmFuc3BvcnREaXNjb25uZWN0ZWQgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICB0aGlzLl9vblRyYW5zcG9ydERpc2Nvbm5lY3RlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FcnJvcigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgdGhpcy5fb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYWNrZXRSZWNlaXZlZChzZGxQYWNrZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vblBhY2tldFJlY2VpdmVkID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgdGhpcy5fb25QYWNrZXRSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFRyYW5zcG9ydExpc3RlbmVyIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmFuc3BvcnRDb25maWdCYXNlXG4gKiBAcHJvcGVydHkge1RyYW5zcG9ydFR5cGV9IF90cmFuc3BvcnRUeXBlXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBnZXRUcmFuc3BvcnRUeXBlXG4gKi9cbmNsYXNzIFRyYW5zcG9ydENvbmZpZ0Jhc2Uge1xuXG5cdC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7VHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0VHlwZSAtIGVudW1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0cmFuc3BvcnRUeXBlKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydFR5cGUgPSB0cmFuc3BvcnRUeXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1RyYW5zcG9ydFR5cGV9XG4gICAgICovXG4gICAgZ2V0VHJhbnNwb3J0VHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zcG9ydFR5cGU7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUcmFuc3BvcnRDb25maWdCYXNlIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmNsYXNzIFZlcnNpb24ge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1ham9yLCBtaW5vciwgcGF0Y2gpIHtcbiAgICAgICAgdGhpcy5zZXRNYWpvcihtYWpvcik7XG4gICAgICAgIHRoaXMuc2V0TWlub3IobWlub3IpO1xuICAgICAgICB0aGlzLnNldFBhdGNoKHBhdGNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBtYWpvclxuICAgICogQHJldHVybiB7VmVyc2lvbn1cbiAgICAqL1xuICAgIHNldE1ham9yKG1ham9yKSB7XG4gICAgICAgIHRoaXMuX21ham9yID0gcGFyc2VJbnQobWFqb3IpIHx8IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRNYWpvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21ham9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IG1pbm9yXG4gICAgKiBAcmV0dXJuIHtWZXJzaW9ufVxuICAgICovXG4gICAgc2V0TWlub3IobWlub3IpIHtcbiAgICAgICAgdGhpcy5fbWlub3IgPSBwYXJzZUludChtaW5vcikgfHwgMDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldE1pbm9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWlub3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gcGF0Y2hcbiAgICAqIEByZXR1cm4ge1ZlcnNpb259XG4gICAgKi9cbiAgICBzZXRQYXRjaChwYXRjaCkge1xuICAgICAgICB0aGlzLl9wYXRjaCA9IHBhcnNlSW50KHBhdGNoKSB8fCAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgZ2V0UGF0Y2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXRjaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB2ZXJzaW9uIC0gUGFyc2UgdGhpcyBzdHJpbmcgdG8gYSBWZXJzaW9uIG9iamVjdFxuICAgICogQHJldHVybiB7VmVyc2lvbn1cbiAgICAqL1xuICAgIGZyb21TdHJpbmcodmVyc2lvbikge1xuICAgICAgICBsZXQgdmVyc2lvbnMgPSB2ZXJzaW9uLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgaWYgKHZlcnNpb25zLmxlbmd0aCAhPSAzKSB0aHJvdyBcIkluY29ycmVjdCB2ZXJzaW9uIHN0cmluZyBmb3JtYXRcIjtcbiAgICAgICAgdGhpcy5zZXRNYWpvcih2ZXJzaW9uc1swXSk7XG4gICAgICAgIHRoaXMuc2V0TWlub3IodmVyc2lvbnNbMV0pO1xuICAgICAgICB0aGlzLnNldFBhdGNoKHZlcnNpb25zWzJdKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYCR7dGhpcy5nZXRNYWpvcigpfS4ke3RoaXMuZ2V0TWlub3IoKX0uJHt0aGlzLmdldFBhdGNoKCl9YDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIE1ldGhvZCB0byB0ZXN0IGlmIHRoaXMgaW5zdGFuY2Ugb2YgVmVyc2lvbiBpcyBuZXdlciB0aGFuIHRoZSBzdXBwbGllZCBvbmUuXG4gICAgKiBAcGFyYW0gdmVyc2lvbiAtIHRoZSB2ZXJzaW9uIHRvIGNoZWNrIGFnYWluc3RcbiAgICAqIEByZXR1cm4ge051bWJlcn0gLSAxIGlmIHRoaXMgaW5zdGFuY2UgaXMgbmV3ZXIsIC0xIGlmIHN1cHBsaWVkIHZlcnNpb24gaXMgbmV3ZXIsIGFuZCAwIGlmIHRoZXkgYXJlIGVxdWFsXG4gICAgKi9cbiAgICBpc05ld2VyVGhhbih2ZXJzaW9uKSB7XG4gICAgICAgIGlmKHRoaXMuZ2V0TWFqb3IoKSA+IHZlcnNpb24uZ2V0TWFqb3IoKSl7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5nZXRNYWpvcigpID09IHZlcnNpb24uZ2V0TWFqb3IoKSl7XG4gICAgICAgICAgICBpZih0aGlzLmdldE1pbm9yKCkgPiB2ZXJzaW9uLmdldE1pbm9yKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuZ2V0TWlub3IoKSA9PSB2ZXJzaW9uLmdldE1pbm9yKCkpe1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2V0UGF0Y2goKSA+IHZlcnNpb24uZ2V0UGF0Y2goKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuZ2V0UGF0Y2goKSA9PSB2ZXJzaW9uLmdldFBhdGNoKCkpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgVmVyc2lvbiB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBTZGxQcm90b2NvbExpc3RlbmVyIH0gZnJvbSAnLi9TZGxQcm90b2NvbExpc3RlbmVyLmpzJztcbmltcG9ydCB7IFRyYW5zcG9ydExpc3RlbmVyIH0gZnJvbSAnLi4vdHJhbnNwb3J0L1RyYW5zcG9ydExpc3RlbmVyLmpzJ1xuaW1wb3J0IHsgVHJhbnNwb3J0Q29uZmlnQmFzZSB9IGZyb20gJy4uL3RyYW5zcG9ydC9UcmFuc3BvcnRDb25maWdCYXNlLmpzJ1xuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4uL3V0aWwvVmVyc2lvbi5qcydcbmltcG9ydCB7IFNlcnZpY2VUeXBlIH0gZnJvbSAnLi9lbnVtcy9TZXJ2aWNlVHlwZS5qcydcbmltcG9ydCB7IEZyYW1lVHlwZSB9IGZyb20gJy4vZW51bXMvRnJhbWVUeXBlLmpzJ1xuaW1wb3J0IHsgTWVzc2FnZUZyYW1lQXNzZW1ibGVyIH0gZnJvbSAnLi9NZXNzYWdlRnJhbWVBc3NlbWJsZXIuanMnXG5pbXBvcnQgeyBTZGxQYWNrZXQgfSBmcm9tICcuL1NkbFBhY2tldC5qcyc7XG5cbmNsYXNzIFNkbFByb3RvY29sQmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyBUcmFuc3BvcnRDb25maWdCYXNlIH0gYmFzZVRyYW5zcG9ydENvbmZpZ1xuICAgICAqIEBwYXJhbSB7IFNkbFByb3RvY29sTGlzdGVuZXIgfSBzZGxQcm90b2NvbExpc3RlbmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYmFzZVRyYW5zcG9ydENvbmZpZywgc2RsUHJvdG9jb2xMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRDb25maWcgPSBiYXNlVHJhbnNwb3J0Q29uZmlnO1xuICAgICAgICB0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyID0gc2RsUHJvdG9jb2xMaXN0ZW5lcjtcbiAgICAgICAgcmVzZXQoKTtcblxuICAgICAgICBfY3JlYXRlVHJhbnNwb3J0TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TWFuYWdlciA9IG51bGw7IC8vVGhlIHRyYW5zcG9ydCBtYW5hZ2VyIHNob3VsZCBiZSBjcmVhdGVkXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW5zIGZvciB0cmFuc3BvcnQtcmVsYXRlZCBldmVudHMgYW5kIGhhbmRsZXMgdGhlbSBoZXJlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfY3JlYXRlVHJhbnNwb3J0TGlzdGVuZXIoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyID0gbmV3IFRyYW5zcG9ydExpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLnNldE9uVHJhbnNwb3J0Q29ubmVjdGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vVHJhbnNwb3J0IGNvbm5lY3RlZFxuICAgICAgICAgICAgLy9TdGFydCBSUEMgc2Vzc2lvblxuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lci5zZXRPblRyYW5zcG9ydERpc2Nvbm5lY3RlZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL1RyYW5zcG9ydCBkaXNjb25uZWN0ZWRcbiAgICAgICAgICAgIC8vU2h1dCBldmVyeXRoaW5nIGRvd25cblxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TGlzdGVuZXIuc2V0T25QYWNrZXRSZWNlaXZlZChmdW5jdGlvbiAoc2RsUGFja2V0KSB7XG4gICAgICAgICAgICAvL1NkbFBhY2tldCByZWNlaXZlZFxuICAgICAgICAgICAgdGhpcy5faGFuZGxlUGFja2V0UmVjZWl2ZWQoc2RsUGFja2V0KTsgLy9Db3VsZCBqdXN0IHBhc3MgaW4gdGhpcyBmdW5jaXRvbiBpbnN0ZWFkIG9mIGNyZWF0aW5nIGFuIGFub255bW91c2UgZnVuY2l0b24gdG8gY2FsbCBpdFxuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lci5zZXRPbkVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vSGFuZGxlIGVycm9yP1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnRzIHVwIHRoZSBTREwgcHJvdG9jb2wgY2xhc3MuIEl0IHdpbGwga2ljayBvZmYgdGhlIHRyYW5zcG9ydCBtYW5hZ2VyIGFuZCB1bmRlcmx5aW5nIHRyYW5zcG9ydC5cbiAgICAgKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zcG9ydE1hbmFnZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgXCJ0cmFuc3BvcnQgbWFuYWdlciB3YXMgbnVsbCwgdW5hYmxlIHRvIHN0YXJ0IFNETCBQcm90b2NvbFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TWFuYWdlci5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2VydmljZVR5cGV9IHNlcnZpY2VUeXBlIFxuICAgICAqIEByZXR1cm4ge051bWJlcn0gbWF4IHRyYW5zcG9ydCB1bml0IGZvciB0aGUgZ2l2ZSBzZXJ2aWNlIHR5cGVcbiAgICAgKi9cbiAgICBnZXRNdHUoc2VydmljZVR5cGUpIHtcbiAgICAgICAgbGV0IHJldFZhbCA9IHRoaXMuX210dXMuZ2V0KHNlcnZpY2VUeXBlKTtcbiAgICAgICAgaWYgKHJldFZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmV0VmFsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTZGxQcm90b2NvbEJhc2UuVjFfVjJfTVRVX1NJWkU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn0gaXNDb25uZWN0ZWRcbiAgICAgKi9cbiAgICBpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zcG9ydE1hbmFnZXIgIT0gbnVsbCAmJiB0aGlzLl90cmFuc3BvcnRNYW5hZ2VyLmlzQ29ubmVjdGVkKG51bGwsIG51bGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgaW50ZXJuYWwgY2xhc3MgbWVtYmVycyB0byBkZWZhdWx0IHZhbHVlc1xuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9wcm90b2NvbF92ZXJzaW9uID0gbmV3IFZlcnNpb24oMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydENvbmZpZyA9IGJhc2VUcmFuc3BvcnRDb25maWc7XG4gICAgICAgIHRoaXMuX2hlYWRlclNpemUgPSBTZGxQcm90b2NvbEJhc2UuVjFfSEVBREVSX1NJWkU7XG4gICAgICAgIHRoaXMuc2VydmljZVN0YXR1cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlU3RhdHVzW1NlcnZpY2VUeXBlLkNPTlRST0xdID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbXR1cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fbXR1c1tTZXJ2aWNlVHlwZS5SUENdID0gU2RsUHJvdG9jb2xCYXNlLlYxX1YyX01UVV9TSVpFIC0gdGhpcy5faGVhZGVyU2l6ZTtcbiAgICAgICAgdGhpcy5faGFzaElEID0gMDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZUlEID0gMDtcbiAgICAgICAgdGhpcy5fbWVzc2FnZUZyYW1lQXNzZW1ibGVycyA9IG5ldyBNYXAoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtWZXJzaW9ufSBwcm90b2NvbF92ZXJzaW9uXG4gICAgICovXG4gICAgZ2V0UHJvdG9jb2xWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvdG9jb2xfdmVyc2lvbjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgc2V0IHRoZSBtYWpvciBwcm90b2NvbCB2ZXJzaW9uIHRoYXQgd2Ugc2hvdWxkIHVzZS4gSXQgd2lsbCBhbHNvIHNldCB0aGUgZGVmYXVsdCBNVFUgYmFzZWQgb24gdmVyc2lvbi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiAtIG1ham9yIHZlcnNpb24gdG8gdXNlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfc2V0VmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgICAgIGlmICh2ZXJzaW9uID4gNSkge1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbFZlcnNpb24gPSBuZXcgVmVyc2lvbihcIjUuMS4wXCIpOyAvL3Byb3RlY3QgZm9yIGZ1dHVyZSwgcHJveHkgb25seSBzdXBwb3J0cyB2NSBvciBsb3dlclxuICAgICAgICAgICAgaGVhZGVyU2l6ZSA9IFNkbFByb3RvY29sQmFzZS5WMl9IRUFERVJfU0laRTtcbiAgICAgICAgICAgIG10dXNbU2VydmljZVR5cGUuUlBDXSA9IFNkbFByb3RvY29sQmFzZS5WM19WNF9NVFVfU0laRTtcbiAgICAgICAgfSBlbHNlIGlmICh2ZXJzaW9uID09IDUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2xWZXJzaW9uID0gbmV3IFZlcnNpb24oXCI1LjAuMFwiKTtcbiAgICAgICAgICAgIGhlYWRlclNpemUgPSBTZGxQcm90b2NvbEJhc2UuVjJfSEVBREVSX1NJWkU7XG4gICAgICAgICAgICBtdHVzW1NlcnZpY2VUeXBlLlJQQ10gPSBTZGxQcm90b2NvbEJhc2UuVjNfVjRfTVRVX1NJWkU7XG4gICAgICAgIH0gZWxzZSBpZiAodmVyc2lvbiA9PSA0KSB7XG4gICAgICAgICAgICB0aGlzLnByb3RvY29sVmVyc2lvbiA9IG5ldyBWZXJzaW9uKFwiNC4wLjBcIik7XG4gICAgICAgICAgICBoZWFkZXJTaXplID0gU2RsUHJvdG9jb2xCYXNlLlYyX0hFQURFUl9TSVpFO1xuICAgICAgICAgICAgbXR1c1tTZXJ2aWNlVHlwZS5SUENdID0gU2RsUHJvdG9jb2xCYXNlLlYzX1Y0X01UVV9TSVpFOyAvL3ZlcnNpb25zIDQgc3VwcG9ydHMgMTI4ayBNVFVcbiAgICAgICAgfSBlbHNlIGlmICh2ZXJzaW9uID09IDMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2xWZXJzaW9uID0gbmV3IFZlcnNpb24oXCIzLjAuMFwiKTtcbiAgICAgICAgICAgIGhlYWRlclNpemUgPSBTZGxQcm90b2NvbEJhc2UuVjJfSEVBREVSX1NJWkU7XG4gICAgICAgICAgICBtdHVzW1NlcnZpY2VUeXBlLlJQQ10gPSBTZGxQcm90b2NvbEJhc2UuVjNfVjRfTVRVX1NJWkU7IC8vdmVyc2lvbnMgMyBzdXBwb3J0cyAxMjhrIE1UVVxuICAgICAgICB9IGVsc2UgaWYgKHZlcnNpb24gPT0gMikge1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbFZlcnNpb24gPSBuZXcgVmVyc2lvbihcIjIuMC4wXCIpO1xuICAgICAgICAgICAgaGVhZGVyU2l6ZSA9IFNkbFByb3RvY29sQmFzZS5WMl9IRUFERVJfU0laRTtcbiAgICAgICAgICAgIG10dXNbU2VydmljZVR5cGUuUlBDXSA9IFNkbFByb3RvY29sQmFzZS5WMV9WMl9NVFVfU0laRSAtIGhlYWRlclNpemU7XG4gICAgICAgIH0gZWxzZSBpZiAodmVyc2lvbiA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnByb3RvY29sVmVyc2lvbiA9IG5ldyBWZXJzaW9uKFwiMS4wLjBcIik7XG4gICAgICAgICAgICBoZWFkZXJTaXplID0gU2RsUHJvdG9jb2xCYXNlLlYxX0hFQURFUl9TSVpFO1xuICAgICAgICAgICAgbXR1c1tTZXJ2aWNlVHlwZS5SUENdID0gU2RsUHJvdG9jb2xCYXNlLlYxX1YyX01UVV9TSVpFIC0gaGVhZGVyU2l6ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXRcbiAgICAgKi9cbiAgICBzZW5kUGFja2V0KHNkbFBhY2tldCkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNwb3J0TWFuYWdlciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl90cmFuc3BvcnRNYW5hZ2VyLnNlbmRQYWNrZXQoc2RsUGFja2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UnBjTWVzc2FnZX0gcnBjTWVzc2FnZSBcbiAgICAgKi9cbiAgICBzZW5kUnBjKHJwY01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHJwY01lc3NhZ2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8odmVyc2lvbiA9IDEsIGVuY3J5cHRpb24gPSBmYWxzZSwgZnJhbWVUeXBlID0gLTEsIHNlcnZpY2VUeXBlID0gLTEsIGZyYW1lSW5mbyA9IC0xLCBzZXNzaW9uSUQgPSAwLCBkYXRhU2l6ZSA9IDAsIG1lc3NhZ2VJRCA9IDAsIHBheWxvYWQgPSBudWxsLCBvZmZzZXQgPSAwLCBieXRlc1RvV3JpdGUgPSAwKSB7XG5cbiAgICAgICAgICAgIGxldCBwYXJhbUJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkocnBjTWVzc2FnZS5nZXRQYXJhbWV0ZXJzKCkpO1xuICAgICAgICAgICAgbGV0IHNkbFBhY2tldCA9IG5ldyBTZGxQYWNrZXQodGhpcy5fcHJvdG9jb2xfdmVyc2lvbi5nZXRNYWpvcigpLCBmYWxzZSk7XG4gICAgICAgICAgICAvL1RPRE86IHNkbFBhY2tldC5zZXRcblxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNlbmRNZXNzYWdlKHByb3RvY29sTWVzc2FnZSkge1xuICAgICAgICAvL1RPRE8gXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIG1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIHRoZSBidWlsZGluZyBvZiBzZGwgcGFja2V0cyB0aGF0IGdldCBzZW50IFxuICAgICAgICAvLyBpbiB0aGUgamF2YSBzdWl0ZSBsaWIuIFdlIHdhbnQgdG8gYXZvaWQgdXNpbmcgcHJvdG9jb2wgbWVzc2FnZSBoZXJlIGFzIGFuIGV4dHJhIFxuICAgICAgICAvLyBjbGFzcyB0aGF0IGRvZXNuJ3QgbWFrZSBtdWNoIHNlbnNlLiBJIGJlbGlldmUgd2Ugc2hvdWxkIHByb2JhYmx5IGFsdGVyIFNkbFBhY2tldFxuICAgICAgICAvLyB0byBoYW5kbGUgdGhlIHNpdHVhdGlvbiBwcm90b2NvbCBtZXNzYWdlIHVzZWQgdG9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW4gU2RsUGFja2V0IGRlcGVuZGluZyBvbiBpdHMgRnJhbWVUeXBlXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVQYWNrZXRSZWNlaXZlZChzZGxQYWNrZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Byb3RvY29sX3ZlcnNpb24gPT0gbnVsbCB8fCB0aGlzLl9wcm90b2NvbF92ZXJzaW9uLmdldE1ham9yKCkgPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fc2V0VmVyc2lvbihwYWNrZXQudmVyc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNkbFBhY2tldC5nZXRGcmFtZVR5cGUoKSA9PSBGcmFtZVR5cGUuRklSU1QgfHwgc2RsUGFja2V0LmdldEZyYW1lVHlwZSgpID09IEZyYW1lVHlwZS5DT05TRUNVVElWRSkge1xuICAgICAgICAgICAgbWVzc2FnZUZyYW1lQXNzZW1ibGVyID0gX2dldE1lc3NhZ2VGcmFtZUFzc2VtYmxlcihzZGxQYWNrZXQpO1xuICAgICAgICAgICAgbWVzc2FnZUZyYW1lQXNzZW1ibGVyLmhhbmRsZUZyYW1lKHNkbFBhY2tldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL1BhY2tldCBjYW4gYmUgaGFuZGxlZCBhcyBpc1xuICAgICAgICAgICAgc3dpdGNoIChzZGxQYWNrZXQuZ2V0RnJhbWVUeXBlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEZyYW1lVHlwZS5DT05UUk9MOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVDb250cm9sUGFja2V0KHNkbFBhY2tldCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgRnJhbWVUeXBlLlNJTkdMRTpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzZGxQYWNrZXQuZ2V0U2VydmljZVR5cGUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTZXJ2aWNlVHlwZS5SUEM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlUlBDUGFja2V0KHNkbFBhY2tldClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXRNZXNzYWdlRnJhbWVBc3NlbWJsZXIoc2RsUGFja2V0KSB7XG4gICAgICAgIGxldCBtZXNzYWdlRnJhbWVBc3NlbWJsZXIgPSB0aGlzLl9tZXNzYWdlRnJhbWVBc3NlbWJsZXJzW3NkbFBhY2tldC5nZXRNZXNzYWdlSUQoKV07XG4gICAgICAgIGlmIChtZXNzYWdlRnJhbWVBc3NlbWJsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbWVzc2FnZUZyYW1lQXNzZW1ibGVyID0gTWVzc2FnZUZyYW1lQXNzZW1ibGVyKHRoaXMuX2hlYWRlclNpemUsIG5ldyBmdW5jdGlvbiAoc2RsUGFja2V0KSB7XG4gICAgICAgICAgICAgICAgLy9UT0RPXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIHdhbnQgdG8gcGFzcyBiYWNrIGFuIFNETCBQYWNrZXQuIFxuXG4gICAgICAgICAgICAgICAgdGhpcy5fbWVzc2FnZUZyYW1lQXNzZW1ibGVyc1tzZGxQYWNrZXQuZ2V0TWVzc2FnZUlEKCldID0gbnVsbDsgLy9SZW1vdmUgdGhlIG1hcHBpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fbWVzc2FnZUZyYW1lQXNzZW1ibGVyc1tzZGxQYWNrZXQuZ2V0TWVzc2FnZUlEKCldID0gbWVzc2FnZUZyYW1lQXNzZW1ibGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lc3NhZ2VGcmFtZUFzc2VtYmxlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGhhbmRsZSBjb250cm9sIHBhY2tldHMgZm9yIGFsbCBzZXJ2aWNlIHR5cGVzXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVDb250cm9sUGFja2V0KHNkbFBhY2tldCkge1xuICAgICAgICBsZXQgc2VydmljZVR5cGUgPSBzZGxQYWNrZXQuZ2V0U2VydmljZVR5cGUoKTtcbiAgICAgICAgbGV0IGZyYW1lSW5mbyA9IHNkbFBhY2tldC5nZXRGcmFtZUluZm8oKTtcbiAgICAgICAgbGV0IHBheWxvYWQgPSBzZGxQYWNrZXQuZ2V0UGF5bG9hZCgpO1xuXG4gICAgICAgIHN3aXRjaCAoZnJhbWVJbmZvKSB7XG4gICAgICAgICAgICBjYXNlIHNkbFBhY2tldC5GUkFNRV9JTkZPX1NUQVJUX1NFUlZJQ0VfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVN0YXJ0U2VydmljZUFDSyhzZGxQYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzZGxQYWNrZXQuRlJBTUVfSU5GT19TVEFSVF9TRVJWSUNFX05BSzpcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVTdGFydFNlcnZpY2VOQUsoc2RsUGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc2RsUGFja2V0LkZSQU1FX0lORk9fRU5EX1NFUlZJQ0VfQUNLOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVuZFNlcnZpY2VBQ0soc2RsUGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2Ugc2RsUGFja2V0LkZSQU1FX0lORk9fRU5EX1NFUlZJQ0VfTkFLOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVuZFNlcnZpY2VBQ0soc2RsUGFja2V0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVTdGFydFNlcnZpY2VBQ0soc2RsUGFja2V0KSB7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICAvL0hhbmRsZSB0aGluZ3MgaW50ZXJuYWxseSBmaXJzdFxuICAgICAgICBzd2l0Y2ggKHNlcnZpY2VUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFNlcnZpY2VUeXBlLlJQQzpcbiAgICAgICAgICAgIGNhc2UgU2VydmljZVR5cGUuQ09OVFJPTDpcbiAgICAgICAgICAgIGNhc2UgU2VydmljZVR5cGUuSFlCUklEOlxuICAgICAgICAgICAgY2FzZSBTZXJ2aWNlVHlwZS5BVURJTzpcbiAgICAgICAgICAgIGNhc2UgU2VydmljZVR5cGUuVklERU86XG4gICAgICAgIH1cblxuICAgICAgICAvL1RoZW4gY2FsbCB0aGUgbGlzdGVuZXIgKHNob3VsZCBiZSBTZGxTZXNzaW9uKVxuICAgICAgICBpZiAodGhpcy5fc2RsUHJvdG9jb2xsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyLm9uU3RhcnRTZXJ2aWNlQUNLUmVjZWl2ZWQoc2RsUGFja2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXQgXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlU3RhcnRTZXJ2aWNlTkFLKHNkbFBhY2tldCkge1xuICAgICAgICAvL1RPRE9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2hhbmRsZUVuZFNlcnZpY2VBQ0soc2RsUGFja2V0KSB7XG4gICAgICAgIC8vVE9ET1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXQgXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlRW5kU2VydmljZU5BSyhzZGxQYWNrZXQpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2hhbmRsZUNvbnRyb2xTZXJ2aWNlUGFja2V0KHNkbFBhY2tldCkge1xuICAgICAgICBpZiAodGhpcy5fc2RsUHJvdG9jb2xsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyLm9uQ29udHJvbFNlcnZpY2VNZXNzYWdlUmVjZWl2ZWQoc2RsUGFja2V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXQgXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlUlBDUGFja2V0KHNkbFBhY2tldCkge1xuICAgICAgICBsZXQgcGF5bG9hZCA9IHNkbFBhY2tldC5nZXRQYXlsb2FkKCk7XG4gICAgICAgIC8vIFRPRE8gcG9zc2libHkgYWRkIGVycm9yIGNoZWNraW5nIHRoYXQgZW5zdXJlcyB0aGlzIGlzIGFuIFJQQyBwYWNrZXRcbiAgICAgICAgbGV0IHJwY01lc3NhZ2UgPSBudWxsO1xuICAgICAgICBpZiAodGhpcy5fcHJvdG9jb2xfdmVyc2lvbi5nZXRNYWpvcigpID09IDEpIHtcbiAgICAgICAgICAgIC8vVGhlcmUgaXMgbm8gYmluYXJ5IGZyYW1lIGhlYWRlclxuXG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPIGFjdHVhbGx5IGNyZWF0ZSB0aGUgUlBDIG1lc3NhZ2VcblxuICAgICAgICBpZiAodGhpcy5fc2RsUHJvdG9jb2xsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyLm9uUnBjTWVzc2FnZVJlY2VpdmVkKHJwY01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8vTm90IHN1cmUgaWYgd2UgbmVlZFxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsqfSBzZXNzaW9uSUQgXG4gICAgICogQHBhcmFtIHsqfSBfaGFzaElEIFxuICAgICAqL1xuICAgIGVuZFNlc3Npb24oc2Vzc2lvbklELCBfaGFzaElEKSB7IH07XG5cbn1cblxuLyoqXG4gKiBPcmlnaW5hbCBoZWFkZXIgc2l6ZSBiYXNlZCBvbiB2ZXJzaW9uIDEuMC4wIG9ubHlcbiAqL1xuU2RsUHJvdG9jb2xCYXNlLlYxX0hFQURFUl9TSVpFICAgICAgICAgICAgICA9IDg7XG4vKipcbiAqIExhcmdlciBoZWFkZXIgc2l6ZSB0aGF0IGlzIHVzZWQgYnkgdmVyc2lvbnMgMi4wLjAgYW5kIHVwXG4gKi9cblNkbFByb3RvY29sQmFzZS5WMl9IRUFERVJfU0laRSAgICAgICAgICAgICAgPSAxMjtcblNkbFByb3RvY29sQmFzZS5WMV9WMl9NVFVfU0laRSAgICAgICAgICAgICAgPSAxNTAwO1xuU2RsUHJvdG9jb2xCYXNlLlYzX1Y0X01UVV9TSVpFICAgICAgICAgICAgICA9IDEzMTA3Mjtcbi8qKlxuICogTWF4IHN1cHBvcnRlZCBwcm90b2NvbCB2ZXJzaW9uIGluIHRoaXMgcmVsZWFzZSBvZiB0aGUgbGlicmFyeVxuKi9cblNkbFByb3RvY29sQmFzZS5NQVhfUFJPVE9DT0xfVkVSU0lPTiAgICAgICAgPSBuZXcgVmVyc2lvbig1LCAyLCAwKTtcblxuZXhwb3J0IHsgU2RsUHJvdG9jb2xCYXNlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuY2xhc3MgQ29udHJvbEZyYW1lVGFncyB7XG59XG5cbi8vIGhpZGRlbiBpbm5lciBvYmplY3RzXG5cbmNvbnN0IFN0YXJ0U2VydmljZUFDS0Jhc2UgPSB7XG4gICAgTVRVOiBcIm10dVwiLFxufTtcblxuY29uc3QgTkFLQmFzZSA9IHtcbiAgICBSRUpFQ1RFRF9QQVJBTVM6IFwicmVqZWN0ZWRQYXJhbXNcIixcbn07XG5cbmNvbnN0IFN0YXJ0U2VydmljZVByb3RvY29sVmVyc2lvbiA9IHtcbiAgICAvKiogVGhlIG5lZ290aWF0ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdG9jb2wuIE11c3QgYmUgaW4gdGhlIGZvcm1hdCBcIk1ham9yLk1pbm9yLlBhdGNoXCIqL1xuICAgIFBST1RPQ09MX1ZFUlNJT046IFwicHJvdG9jb2xWZXJzaW9uXCIsXG59O1xuXG5jb25zdCBTdGFydFNlcnZpY2VIYXNoSWQgPSB7XG4gICAgLyoqIEhhc2ggSUQgdG8gaWRlbnRpZnkgdGhpcyBzZXJ2aWNlIGFuZCB1c2VkIHdoZW4gc2VuZGluZyBhbiBFbmRTZXJ2aWNlIGNvbnRyb2wgZnJhbWUqL1xuICAgIEhBU0hfSUQ6IFwiaGFzaElkXCIsXG59O1xuXG5jb25zdCBTdGFydFNlcnZpY2VEaW1lbnNpb25zID0ge1xuICAgIEhFSUdIVDogXCJoZWlnaHRcIixcbiAgICBXSURUSDogXCJ3aWR0aFwiLFxufTtcblxuLy9zdGF0aWMgbWVtYmVycyBcblxuQ29udHJvbEZyYW1lVGFncy5SUEMgPSBPYmplY3QuZnJlZXplKHtcbiAgICBTdGFydFNlcnZpY2U6IFN0YXJ0U2VydmljZVByb3RvY29sVmVyc2lvbixcblxuICAgIFN0YXJ0U2VydmljZUFDSzogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIC8qKiBIVSBhbGxvd2VkIHRyYW5zcG9ydCBmb3Igc2Vjb25kYXJ5IGNvbm5lY3Rpb24gKi9cbiAgICAgICAgU0VDT05EQVJZX1RSQU5TUE9SVFM6IFwic2Vjb25kYXJ5VHJhbnNwb3J0c1wiLFxuICAgICAgICAvKiogSFUgYWxsb3dlZCB0cmFuc3BvcnRzIGZvciBhdWRpbyBhbmQgdmlkZW8gc2VydmljZXMgKDEgPT0gUHJpbWFyeSwgMiA9PSBTZWNvbmRhcnkpICovXG4gICAgICAgIEFVRElPX1NFUlZJQ0VfVFJBTlNQT1JUUzogXCJhdWRpb1NlcnZpY2VUcmFuc3BvcnRzXCIsXG4gICAgICAgIFZJREVPX1NFUlZJQ0VfVFJBTlNQT1JUUzogXCJ2aWRlb1NlcnZpY2VUcmFuc3BvcnRzXCIsXG4gICAgICAgIC8qKiBBdXRoIHRva2VuIHRvIGJlIHVzZWQgZm9yIGxvZyBpbiBpbnRvIHNlcnZpY2VzICoqL1xuICAgICAgICBBVVRIX1RPS0VOOiBcImF1dGhUb2tlblwiLFxuICAgIH0sIFN0YXJ0U2VydmljZUFDS0Jhc2UsIFN0YXJ0U2VydmljZVByb3RvY29sVmVyc2lvbiwgU3RhcnRTZXJ2aWNlSGFzaElkKSxcblxuICAgIFN0YXJ0U2VydmljZU5BSzogTkFLQmFzZSxcblxuICAgIEVuZFNlcnZpY2U6IFN0YXJ0U2VydmljZUhhc2hJZCxcblxuICAgIEVuZFNlcnZpY2VBQ0s6IHt9LFxuXG4gICAgRW5kU2VydmljZU5BSzogTkFLQmFzZSxcblxuICAgIFRyYW5zcG9ydEV2ZW50VXBkYXRlOiB7XG4gICAgICAgIFRDUF9JUF9BRERSRVNTOiBcInRjcElwQWRkcmVzc1wiLFxuICAgICAgICBUQ1BfUE9SVDogXCJ0Y3BQb3J0XCIsXG4gICAgfSxcblxuICAgIFJlZ2lzdGVyU2Vjb25kYXJ5VHJhbnNwb3J0OiB7fSxcblxuICAgIFJlZ2lzdGVyU2Vjb25kYXJ5VHJhbnNwb3J0QUNLOiB7fSxcblxuICAgIFJlZ2lzdGVyU2Vjb25kYXJ5VHJhbnNwb3J0TkFLOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgUkVBU09OOiBcInJlYXNvblwiLFxuICAgIH0sIE5BS0Jhc2UpLFxufSk7XG5cbkNvbnRyb2xGcmFtZVRhZ3MuQXVkaW8gPSBPYmplY3QuZnJlZXplKHtcbiAgICBTdGFydFNlcnZpY2U6IHt9LFxuXG4gICAgU3RhcnRTZXJ2aWNlQUNLOiBTdGFydFNlcnZpY2VBQ0tCYXNlLFxuXG4gICAgU3RhcnRTZXJ2aWNlTkFLOiBOQUtCYXNlLFxuXG4gICAgRW5kU2VydmljZToge30sXG5cbiAgICBFbmRTZXJ2aWNlQUNLOiB7fSxcblxuICAgIEVuZFNlcnZpY2VOQUs6IE5BS0Jhc2UsXG59KTtcblxuQ29udHJvbEZyYW1lVGFncy5WaWRlbyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFN0YXJ0U2VydmljZTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIFZJREVPX1BST1RPQ09MOiBcInZpZGVvUHJvdG9jb2xcIixcbiAgICAgICAgVklERU9fQ09ERUM6IFwidmlkZW9Db2RlY1wiLFxuICAgIH0sIFN0YXJ0U2VydmljZURpbWVuc2lvbnMpLFxuXG4gICAgU3RhcnRTZXJ2aWNlQUNLOiBPYmplY3QuYXNzaWduKHt9LCBTdGFydFNlcnZpY2VBQ0tCYXNlLCBTdGFydFNlcnZpY2VEaW1lbnNpb25zKSxcbn0pO1xuXG5leHBvcnQgeyBDb250cm9sRnJhbWVUYWdzIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi8uLi91dGlsL0VudW0uanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFbnVtfSBScGNUeXBlXG4gKiBAcHJvcGVydHkge09iamVjdH0gTUFQXG4gKi9cbmNsYXNzIFJwY1R5cGUgZXh0ZW5kcyBFbnVtIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTk9USUZJQ0FUSU9OKCkge1xuICAgICAgICByZXR1cm4gUnBjVHlwZS5NQVAuTk9USUZJQ0FUSU9OO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBSRVNQT05TRSgpIHtcbiAgICAgICAgcmV0dXJuIFJwY1R5cGUuTUFQLlJFU1BPTlNFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBSRVFVRVNUKCkge1xuICAgICAgICByZXR1cm4gUnBjVHlwZS5NQVAuUkVRVUVTVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbmZpcm1zIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpbiBleGlzdHMgaW4gdGhlIEVudW1zIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxOdW1iZXJ9IC0gUmV0dXJucyBudWxsIGlmIHRoZSBlbnVtIHZhbHVlIGRvZXNuJ3QgZXhpc3RcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUnBjVHlwZS52YWx1ZUZvclN0cmluZ0ludGVybmFsKHZhbHVlLCBScGNUeXBlLk1BUCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBrZXkgb2YgdGhlIG1hcCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlXG4gICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAqIEByZXR1cm4ge251bGx8U3RyaW5nfSAtIFJldHVybnMgbnVsbCBpZiBub3QgZm91bmRcbiAgICAqL1xuICAgIHN0YXRpYyBrZXlGb3JWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUnBjVHlwZS5rZXlGb3JWYWx1ZUludGVybmFsKHZhbHVlLCBScGNUeXBlLk1BUCk7XG4gICAgfVxufVxuXG5ScGNUeXBlLk1BUCA9IE9iamVjdC5mcmVlemUoe1xuICAgICdOT1RJRklDQVRJT04nOiAweDIsXG4gICAgJ1JFU1BPTlNFJzogMHgxLFxuICAgICdSRVFVRVNUJzogMHgwLFxufSk7XG5cbmV4cG9ydCB7IFJwY1R5cGUgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBScGNNZXNzYWdlIH0gZnJvbSAnLi9ScGNNZXNzYWdlLmpzJztcbmltcG9ydCB7IFJwY1R5cGUgfSBmcm9tICcuL2VudW1zL1JwY1R5cGUuanMnO1xuXG5jbGFzcyBScGNOb3RpZmljYXRpb24gZXh0ZW5kcyBScGNNZXNzYWdlIHtcblxuXHQvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoc3RvcmUpO1xuICAgICAgICB0aGlzLnNldFJQQ1R5cGUoUnBjVHlwZS5OT1RJRklDQVRJT04pO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBScGNOb3RpZmljYXRpb24gfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuXG5pbXBvcnQgeyBScGNNZXNzYWdlIH0gZnJvbSAnLi9ScGNNZXNzYWdlLmpzJztcbmltcG9ydCB7IFJwY1R5cGUgfSBmcm9tICcuL2VudW1zL1JwY1R5cGUuanMnO1xuXG5jbGFzcyBScGNSZXF1ZXN0IGV4dGVuZHMgUnBjTWVzc2FnZSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoc3RvcmUpO1xuICAgICAgICB0aGlzLnNldFJQQ1R5cGUoUnBjVHlwZS5SRVFVRVNUKTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRDb3JyZWxhdGlvbklEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ycmVsYXRpb25JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZFxuICAgICogQHJldHVybiB7UnBjTWVzc2FnZX1cbiAgICAqL1xuICAgIHNldENvcnJlbGF0aW9uSUQoaWQpIHtcbiAgICAgICAgdGhpcy5fY29ycmVsYXRpb25JRCA9IGlkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAqL1xuICAgIGdldE9uUlBDUmVzcG9uc2VQcm9taXNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlXG4gICAgKiBAcmV0dXJuIHtScGNNZXNzYWdlfVxuICAgICovXG4gICAgc2V0T25SUENSZXNwb25zZVByb21pc2UocHJvbWlzZSl7XG4gICAgICAgIHRoaXMudmFsaWRhdGVUeXBlKFByb21pc2UsIHByb21pc2UpO1xuXG4gICAgICAgIHRoaXMuX3Byb21pc2UgPSBwcm9taXNlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgUnBjUmVxdWVzdCB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbC9FbnVtLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7RW51bX0gUmVzdWx0XG4gKiBAcHJvcGVydHkge09iamVjdH0gTUFQXG4gKi9cbmNsYXNzIFJlc3VsdCBleHRlbmRzIEVudW0ge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFNVQ0NFU1MoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlNVQ0NFU1M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFVOU1VQUE9SVEVEX1JFUVVFU1QoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlVOU1VQUE9SVEVEX1JFUVVFU1Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFVOU1VQUE9SVEVEX1JFU09VUkNFKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5VTlNVUFBPUlRFRF9SRVFVRVNUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBESVNBTExPV0VEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5ESVNBTExPV0VEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBSRUpFQ1RFRCgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuUkVKRUNURUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEFCT1JURUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkFCT1JURUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IElHTk9SRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLklHTk9SRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJFVFJZKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5SRVRSWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgSU5fVVNFKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5JTl9VU0U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFZFSElDTEVfREFUQV9OT1RfQVZBSUxBQkxFKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5WRUhJQ0xFX0RBVEFfTk9UX0FWQUlMQUJMRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVElNRURfT1VUKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5USU1FRF9PVVQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IElOVkFMSURfREFUQSgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuSU5WQUxJRF9EQVRBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBDSEFSX0xJTUlUX0VYQ0VFREVEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5DSEFSX0xJTUlUX0VYQ0VFREVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBJTlZBTElEX0lEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5JTlZBTElEX0lEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBEVVBMSUNBVEVfTkFNRSgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuRFVQTElDQVRFX05BTUU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEFQUExJQ0FUSU9OX05PVF9SRUdJU1RFUkVEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5BUFBMSUNBVElPTl9OT1RfUkVHSVNURVJFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgV1JPTkdfTEFOR1VBR0UoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLldST05HX0xBTkdVQUdFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBPVVRfT0ZfTUVNT1JZKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5PVVRfT0ZfTUVNT1JZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBUT09fTUFOWV9QRU5ESU5HX1JFUVVFU1RTKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5UT09fTUFOWV9QRU5ESU5HX1JFUVVFU1RTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBUT09fTUFOWV9BUFBMSUNBVElPTlMoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlRPT19NQU5ZX0FQUExJQ0FUSU9OUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgQVBQTElDQVRJT05fUkVHSVNURVJFRF9BTFJFQURZKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5BUFBMSUNBVElPTl9SRUdJU1RFUkVEX0FMUkVBRFk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFdBUk5JTkdTKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5XQVJOSU5HUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgR0VORVJJQ19FUlJPUigpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuR0VORVJJQ19FUlJPUjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVVNFUl9ESVNBTExPV0VEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5VU0VSX0RJU0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFRSVU5DQVRFRF9EQVRBKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5UUlVOQ0FURURfREFUQTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVU5TVVBQT1JURURfVkVSU0lPTigpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuVU5TVVBQT1JURURfVkVSU0lPTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVkVISUNMRV9EQVRBX05PVF9BTExPV0VEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5WRUhJQ0xFX0RBVEFfTk9UX0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEZJTEVfTk9UX0ZPVU5EKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5GSUxFX05PVF9GT1VORDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgQ0FOQ0VMX1JPVVRFKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5DQU5DRUxfUk9VVEU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFNBVkVEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5TQVZFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgSU5WQUxJRF9DRVJUKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5JTlZBTElEX0NFUlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVYUElSRURfQ0VSVCgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuRVhQSVJFRF9DRVJUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBSRVNVTUVfRkFJTEVEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5SRVNVTUVfRkFJTEVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBEQVRBX05PVF9BVkFJTEFCTEUoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkRBVEFfTk9UX0FWQUlMQUJMRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgUkVBRF9PTkxZKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5SRUFEX09OTFk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IENPUlJVUFRFRF9EQVRBKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5DT1JSVVBURURfREFUQTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbmZpcm1zIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpbiBleGlzdHMgaW4gdGhlIEVudW1zIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxTdHJpbmd9IC0gUmV0dXJucyBudWxsIGlmIHRoZSBlbnVtIHZhbHVlIGRvZXNuJ3QgZXhpc3RcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUmVzdWx0LnZhbHVlRm9yU3RyaW5nSW50ZXJuYWwodmFsdWUsIFJlc3VsdC5NQVApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUga2V5IG9mIHRoZSBtYXAgd2l0aCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZVxuICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfFN0cmluZ30gLSBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kXG4gICAgKi9cbiAgICBzdGF0aWMga2V5Rm9yVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5rZXlGb3JWYWx1ZUludGVybmFsKHZhbHVlLCBSZXN1bHQuTUFQKTtcbiAgICB9XG5cbn1cblxuUmVzdWx0Lk1BUCA9IE9iamVjdC5mcmVlemUoe1xuICAgICdTVUNDRVNTJzogJ1NVQ0NFU1MnLFxuICAgICdVTlNVUFBPUlRFRF9SRVFVRVNUJzogJ1VOU1VQUE9SVEVEX1JFUVVFU1QnLFxuICAgICdVTlNVUFBPUlRFRF9SRVNPVVJDRSc6ICdVTlNVUFBPUlRFRF9SRVNPVVJDRScsXG4gICAgJ0RJU0FMTE9XRUQnOiAnRElTQUxMT1dFRCcsXG4gICAgJ1JFSkVDVEVEJzogJ1JFSkVDVEVEJyxcbiAgICAnQUJPUlRFRCc6ICdBQk9SVEVEJyxcbiAgICAnSUdOT1JFRCc6ICdJR05PUkVEJyxcbiAgICAnUkVUUlknOiAnUkVUUlknLFxuICAgICdJTl9VU0UnOiAnSU5fVVNFJyxcbiAgICAnVkVISUNMRV9EQVRBX05PVF9BVkFJTEFCTEUnOiAnVkVISUNMRV9EQVRBX05PVF9BVkFJTEFCTEUnLFxuICAgICdUSU1FRF9PVVQnOiAnVElNRURfT1VUJyxcbiAgICAnSU5WQUxJRF9EQVRBJzogJ0lOVkFMSURfREFUQScsXG4gICAgJ0NIQVJfTElNSVRfRVhDRUVERUQnOiAnQ0hBUl9MSU1JVF9FWENFRURFRCcsXG4gICAgJ0lOVkFMSURfSUQnOiAnSU5WQUxJRF9JRCcsXG4gICAgJ0RVUExJQ0FURV9OQU1FJzogJ0RVUExJQ0FURV9OQU1FJyxcbiAgICAnQVBQTElDQVRJT05fTk9UX1JFR0lTVEVSRUQnOiAnQVBQTElDQVRJT05fTk9UX1JFR0lTVEVSRUQnLFxuICAgICdXUk9OR19MQU5HVUFHRSc6ICdXUk9OR19MQU5HVUFHRScsXG4gICAgJ09VVF9PRl9NRU1PUlknOiAnT1VUX09GX01FTU9SWScsXG4gICAgJ1RPT19NQU5ZX1BFTkRJTkdfUkVRVUVTVFMnOiAnVE9PX01BTllfUEVORElOR19SRVFVRVNUUycsXG4gICAgJ1RPT19NQU5ZX0FQUExJQ0FUSU9OUyc6ICdUT09fTUFOWV9BUFBMSUNBVElPTlMnLFxuICAgICdBUFBMSUNBVElPTl9SRUdJU1RFUkVEX0FMUkVBRFknOiAnQVBQTElDQVRJT05fUkVHSVNURVJFRF9BTFJFQURZJyxcbiAgICAnV0FSTklOR1MnOiAnV0FSTklOR1MnLFxuICAgICdHRU5FUklDX0VSUk9SJzogJ0dFTkVSSUNfRVJST1InLFxuICAgICdVU0VSX0RJU0FMTE9XRUQnOiAnVVNFUl9ESVNBTExPV0VEJyxcbiAgICAnVFJVTkNBVEVEX0RBVEEnOiAnVFJVTkNBVEVEX0RBVEEnLFxuICAgICdVTlNVUFBPUlRFRF9WRVJTSU9OJzogJ1VOU1VQUE9SVEVEX1ZFUlNJT04nLFxuICAgICdWRUhJQ0xFX0RBVEFfTk9UX0FMTE9XRUQnOiAnVkVISUNMRV9EQVRBX05PVF9BTExPV0VEJyxcbiAgICAnRklMRV9OT1RfRk9VTkQnOiAnRklMRV9OT1RfRk9VTkQnLFxuICAgICdDQU5DRUxfUk9VVEUnOiAnQ0FOQ0VMX1JPVVRFJyxcbiAgICAnU0FWRUQnOiAnU0FWRUQnLFxuICAgICdJTlZBTElEX0NFUlQnOiAnSU5WQUxJRF9DRVJUJyxcbiAgICAnRVhQSVJFRF9DRVJUJzogJ0VYUElSRURfQ0VSVCcsXG4gICAgJ1JFU1VNRV9GQUlMRUQnOiAnUkVTVU1FX0ZBSUxFRCcsXG4gICAgJ0RBVEFfTk9UX0FWQUlMQUJMRSc6ICdEQVRBX05PVF9BVkFJTEFCTEUnLFxuICAgICdSRUFEX09OTFknOiAnUkVBRF9PTkxZJyxcbiAgICAnQ09SUlVQVEVEX0RBVEEnOiAnQ09SUlVQVEVEX0RBVEEnLFxufSk7XG5cbmV4cG9ydCB7IFJlc3VsdCB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY01lc3NhZ2UgfSBmcm9tICcuL1JwY01lc3NhZ2UuanMnO1xuaW1wb3J0IHsgUnBjVHlwZSB9IGZyb20gJy4vZW51bXMvUnBjVHlwZS5qcyc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL2VudW1zL1Jlc3VsdC5qcyc7XG5cbmNsYXNzIFJwY1Jlc3BvbnNlIGV4dGVuZHMgUnBjTWVzc2FnZSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoc3RvcmUpO1xuICAgICAgICB0aGlzLnNldFJQQ1R5cGUoUnBjVHlwZS5SRVNQT05TRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRDb3JyZWxhdGlvbklEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ycmVsYXRpb25JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZFxuICAgICogQHJldHVybiB7UnBjUmVzcG9uc2V9XG4gICAgKi9cbiAgICBzZXRDb3JyZWxhdGlvbklEKGlkKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlbGF0aW9uSUQgPSBpZDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgKi9cbiAgICBnZXRTdWNjZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIoS0VZX1NVQ0NFU1MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7UnBjUmVzcG9uc2V9XG4gICAgKi9cbiAgICBzZXRTdWNjZXNzKHN1Y2Nlc3MpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoS0VZX1NVQ0NFU1MsIHN1Y2Nlc3MpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAqL1xuICAgIGdldEluZm8oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlcihLRVlfSU5GTyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtScGNSZXNwb25zZX1cbiAgICAqL1xuICAgIHNldEluZm8oaW5mbykge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihLRVlfSU5GTywgaW5mbyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7UmVzdWx0fVxuICAgICovXG4gICAgZ2V0UmVzdWx0Q29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0KFJlc3VsdCwgS0VZX1JFU1VMVF9DT0RFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1JwY1Jlc3BvbnNlfVxuICAgICovXG4gICAgc2V0UmVzdWx0Q29kZShyZXN1bHRDb2RlKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVUeXBlKFJlc3VsdCwgcmVzdWx0Q29kZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoS0VZX1JFU1VMVF9DT0RFLCByZXN1bHRDb2RlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuXG5ScGNSZXNwb25zZS5LRVlfU1VDQ0VTUyAgICAgPSAnc3VjY2Vzcyc7XG5ScGNSZXNwb25zZS5LRVlfSU5GTyAgICAgICAgPSAnaW5mbyc7XG5ScGNSZXNwb25zZS5LRVlfUkVTVUxUX0NPREUgPSAncmVzdWx0Q29kZSc7XG5cbmV4cG9ydCB7IFJwY1Jlc3BvbnNlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0VudW19IEZ1bmN0aW9uSURcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgRnVuY3Rpb25JRCBleHRlbmRzIEVudW0ge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yIFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBBRERfQ09NTUFORCgpe1xuICAgICAgICByZXR1cm4gRnVuY3Rpb25JRC5NQVAuQWRkQ29tbWFuZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgT05fTEFOR1VBR0VfQ0hBTkdFKCl7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbklELk1BUC5Pbkxhbmd1YWdlQ2hhbmdlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfE51bWJlcn0gLSBSZXR1cm5zIG51bGwgaWYgdGhlIGVudW0gdmFsdWUgZG9lc24ndCBleGlzdFxuICAgICovXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbklELnZhbHVlRm9yU3RyaW5nSW50ZXJuYWwodmFsdWUsIEZ1bmN0aW9uSUQuTUFQKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGtleSBvZiB0aGUgbWFwIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxTdHJpbmd9IC0gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZFxuICAgICovXG4gICAgc3RhdGljIGtleUZvclZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbklELmtleUZvclZhbHVlSW50ZXJuYWwodmFsdWUsIEZ1bmN0aW9uSUQuTUFQKTtcbiAgICB9XG59XG5cbkZ1bmN0aW9uSUQuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgJ0FkZENvbW1hbmQnOiAweDA1LFxuICAgICdPbkxhbmd1YWdlQ2hhbmdlJzogMHg4MDBBLFxuICAgIC8vVE9ETyB0aGlzIG5lZWRzIHRvIGJlIGNvbXBsZXRlbHkgZmlsbGVkIG91dCBzdGlsbFxufSk7XG5cbmV4cG9ydCB7IEZ1bmN0aW9uSUQgfSIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbC9FbnVtLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7RW51bX0gSW1hZ2VUeXBlXG4gKiBAcHJvcGVydHkge09iamVjdH0gTUFQXG4gKi9cbmNsYXNzIEltYWdlVHlwZSBleHRlbmRzIEVudW0ge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBTVEFUSUMoKSB7XG4gICAgICAgIHJldHVybiBJbWFnZVR5cGUuTUFQLlNUQVRJQztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRFlOQU1JQygpIHtcbiAgICAgICAgcmV0dXJuIEltYWdlVHlwZS5NQVAuRFlOQU1JQztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbmZpcm1zIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpbiBleGlzdHMgaW4gdGhlIEVudW1zIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxTdHJpbmd9IC0gUmV0dXJucyBudWxsIGlmIHRoZSBlbnVtIHZhbHVlIGRvZXNuJ3QgZXhpc3RcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gSW1hZ2VUeXBlLnZhbHVlRm9yU3RyaW5nSW50ZXJuYWwodmFsdWUsIEltYWdlVHlwZS5NQVApO1xuICAgIH1cbn1cblxuSW1hZ2VUeXBlLk1BUCA9IE9iamVjdC5mcmVlemUoe1xuICAgICdTVEFUSUMnOiAnU1RBVElDJyxcbiAgICAnRFlOQU1JQyc6ICdEWU5BTUlDJyxcbn0pO1xuXG5leHBvcnQgeyBJbWFnZVR5cGUgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0VudW19IExhbmd1YWdlXG4gKiBAcHJvcGVydHkge09iamVjdH0gTUFQXG4gKi9cbmNsYXNzIExhbmd1YWdlIGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3IgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVOX1NBKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkVOX1NBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBIRV9JTCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5IRV9JTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgUk9fUk8oKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuUk9fUk87XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFVLX1VBKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlVLX1VBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBJRF9JRCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5JRF9JRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVklfVk4oKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuVklfVk47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IE1TX01ZKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLk1TX01ZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBISV9JTigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5ISV9JTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTkxfQkUoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuTkxfQkU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVMX0dSKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkVMX0dSO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBIVV9IVSgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5IVV9IVTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRklfRkkoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRklfRkk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFNLX1NLKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlNLX1NLO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBFTl9VUygpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5FTl9VUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRVNfTVgoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRVNfTVg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEZSX0NBKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkZSX0NBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBERV9ERSgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5ERV9ERTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRVNfRVMoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRVNfRVM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVOX0dCKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkVOX0dCO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBSVV9SVSgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5SVV9SVTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVFJfVFIoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuVFJfVFI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFBMX1BMKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlBMX1BMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBGUl9GUigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5GUl9GUjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgSVRfSVQoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuSVRfSVQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFNWX1NFKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlNWX1NFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBQVF9QVCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5QVF9QVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTkxfTkwoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuTkxfTkw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVOX0FVKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkVOX0FVO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBaSF9DTigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5aSF9DTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgWkhfVFcoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuWkhfVFc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEpBX0pQKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkpBX0pQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBBUl9TQSgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5BUl9TQTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgS09fS1IoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuS09fS1I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFBUX0JSKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlBUX0JSO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBDU19DWigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5DU19DWjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgREFfREsoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuREFfREs7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IE5PX05PKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLk5PX05PO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBFTl9JTigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5FTl9JTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVEhfVEgoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuVEhfVEg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDb25maXJtcyB3aGV0aGVyIHRoZSB2YWx1ZSBwYXNzZWQgaW4gZXhpc3RzIGluIHRoZSBFbnVtcyBvZiB0aGlzIGNsYXNzXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAqIEByZXR1cm4ge251bGx8U3RyaW5nfSAtIFJldHVybnMgbnVsbCBpZiB0aGUgZW51bSB2YWx1ZSBkb2Vzbid0IGV4aXN0XG4gICAgKi9cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIExhbmd1YWdlLk1BUCkge1xuICAgICAgICAgICAgaWYgKExhbmd1YWdlLk1BUFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVBba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuTGFuZ3VhZ2UuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgJ0VOX1NBJzogJ0VOLVNBJyxcbiAgICAnSEVfSUwnOiAnSEUtSUwnLFxuICAgICdST19STyc6ICdSTy1STycsXG4gICAgJ1VLX1VBJzogJ1VLLVVBJyxcbiAgICAnSURfSUQnOiAnSUQtSUQnLFxuICAgICdWSV9WTic6ICdWSS1WTicsXG4gICAgJ01TX01ZJzogJ01TLU1ZJyxcbiAgICAnSElfSU4nOiAnSEktSU4nLFxuICAgICdOTF9CRSc6ICdOTC1CRScsXG4gICAgJ0VMX0dSJzogJ0VMLUdSJyxcbiAgICAnSFVfSFUnOiAnSFUtSFUnLFxuICAgICdGSV9GSSc6ICdGSS1GSScsXG4gICAgJ1NLX1NLJzogJ1NLLVNLJyxcbiAgICAnRU5fVVMnOiAnRU4tVVMnLFxuICAgICdFU19NWCc6ICdFUy1NWCcsXG4gICAgJ0ZSX0NBJzogJ0ZSLUNBJyxcbiAgICAnREVfREUnOiAnREUtREUnLFxuICAgICdFU19FUyc6ICdFUy1FUycsXG4gICAgJ0VOX0dCJzogJ0VOLUdCJyxcbiAgICAnUlVfUlUnOiAnUlUtUlUnLFxuICAgICdUUl9UUic6ICdUUi1UUicsXG4gICAgJ1BMX1BMJzogJ1BMLVBMJyxcbiAgICAnRlJfRlInOiAnRlItRlInLFxuICAgICdJVF9JVCc6ICdJVC1JVCcsXG4gICAgJ1NWX1NFJzogJ1NWLVNFJyxcbiAgICAnUFRfUFQnOiAnUFQtUFQnLFxuICAgICdOTF9OTCc6ICdOTC1OTCcsXG4gICAgJ0VOX0FVJzogJ0VOLUFVJyxcbiAgICAnWkhfQ04nOiAnWkgtQ04nLFxuICAgICdaSF9UVyc6ICdaSC1UVycsXG4gICAgJ0pBX0pQJzogJ0pBLUpQJyxcbiAgICAnQVJfU0EnOiAnQVItU0EnLFxuICAgICdLT19LUic6ICdLTy1LUicsXG4gICAgJ1BUX0JSJzogJ1BULUJSJyxcbiAgICAnQ1NfQ1onOiAnQ1MtQ1onLFxuICAgICdEQV9ESyc6ICdEQS1ESycsXG4gICAgJ05PX05PJzogJ05PLU5PJyxcbiAgICAnRU5fSU4nOiAnRU4tSU4nLFxuICAgICdUSF9USCc6ICdUSC1USCcsXG59KTtcblxuXG5leHBvcnQgeyBMYW5ndWFnZSB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBScGNTdHJ1Y3QgfSBmcm9tICcuLi9ScGNTdHJ1Y3QuanMnO1xuaW1wb3J0IHsgSW1hZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvSW1hZ2VUeXBlLmpzJztcblxuY2xhc3MgSW1hZ2UgZXh0ZW5kcyBScGNTdHJ1Y3Qge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAqIEByZXR1cm4ge0ltYWdlfVxuICAgICovXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoSW1hZ2UuS0VZX1ZBTFVFLCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgZ2V0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlcihJbWFnZS5LRVlfVkFMVUUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtJbWFnZVR5cGV9IHR5cGVcbiAgICAqIEByZXR1cm4ge0ltYWdlfVxuICAgICovXG4gICAgc2V0SW1hZ2VUeXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVR5cGUoSW1hZ2VUeXBlLCB0eXBlKTtcblxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihJbWFnZS5LRVlfSU1BR0VfVFlQRSwgdHlwZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7SW1hZ2VUeXBlfVxuICAgICovXG4gICAgZ2V0SW1hZ2VUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoSW1hZ2UsIEltYWdlLktFWV9JTUFHRV9UWVBFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaXNUZW1wbGF0ZVxuICAgICogQHJldHVybiB7SW1hZ2V9XG4gICAgKi9cbiAgICBzZXRJc1RlbXBsYXRlKGlzVGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoSW1hZ2UuS0VZX0lTX1RFTVBMQVRFLCBpc1RlbXBsYXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICovXG4gICAgZ2V0SXNUZW1wbGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKEltYWdlLktFWV9JU19URU1QTEFURSk7XG4gICAgfVxuXG59XG5cbkltYWdlLktFWV9WQUxVRSA9ICd2YWx1ZSc7XG5JbWFnZS5LRVlfSU1BR0VfVFlQRSA9ICdpbWFnZVR5cGUnO1xuSW1hZ2UuS0VZX0lTX1RFTVBMQVRFID0gJ2lzVGVtcGxhdGUnO1xuXG5leHBvcnQgeyBJbWFnZSB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY1N0cnVjdCB9IGZyb20gJy4uL1JwY1N0cnVjdC5qcyc7XG5cbmNsYXNzIE1lbnVQYXJhbXMgZXh0ZW5kcyBScGNTdHJ1Y3Qge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMpIHtcbiAgICAgICAgc3VwZXIocGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gaWRcbiAgICAqIEByZXR1cm4ge01lbnVQYXJhbXN9XG4gICAgKi9cbiAgICBzZXRQYXJlbnRJRChpZCkge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihNZW51UGFyYW1zLktFWV9QQVJFTlRfSUQsIGlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRQYXJlbnRJRCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKE1lbnVQYXJhbXMuS0VZX1BBUkVOVF9JRCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb25cbiAgICAqIEByZXR1cm4ge01lbnVQYXJhbXN9XG4gICAgKi9cbiAgICBzZXRQb3NpdGlvbihwb3NpdGlvbikge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihNZW51UGFyYW1zLktFWV9QT1NJVElPTiwgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldFBvc2l0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIoTWVudVBhcmFtcy5LRVlfUE9TSVRJT04pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IG1lbnVOYW1lXG4gICAgKiBAcmV0dXJuIHtNZW51UGFyYW1zfVxuICAgICovXG4gICAgc2V0TWVudU5hbWUobWVudU5hbWUpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoTWVudVBhcmFtcy5LRVlfTUVOVV9OQU1FLCBtZW51TmFtZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTdHJpbmd9XG4gICAgKi9cbiAgICBnZXRNZW51TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKE1lbnVQYXJhbXMuS0VZX01FTlVfTkFNRSk7XG4gICAgfVxuXG59XG5cbk1lbnVQYXJhbXMuS0VZX1BBUkVOVF9JRCA9ICdwYXJlbnRJRCc7XG5NZW51UGFyYW1zLktFWV9QT1NJVElPTiAgPSAncG9zaXRpb24nO1xuTWVudVBhcmFtcy5LRVlfTUVOVV9OQU1FID0gJ21lbnVOYW1lJztcblxuZXhwb3J0IHsgTWVudVBhcmFtcyB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY1JlcXVlc3QgfSBmcm9tICcuLi9ScGNSZXF1ZXN0LmpzJztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vc3RydWN0cy9JbWFnZS5qcyc7XG5pbXBvcnQgeyBNZW51UGFyYW1zIH0gZnJvbSAnLi4vc3RydWN0cy9NZW51UGFyYW1zLmpzJztcbmltcG9ydCB7IEZ1bmN0aW9uSUQgfSBmcm9tICcuLi9lbnVtcy9GdW5jdGlvbklELmpzJztcblxuY2xhc3MgQWRkQ29tbWFuZCBleHRlbmRzIFJwY1JlcXVlc3Qge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlKSB7XG4gICAgICAgIHN1cGVyKHN0b3JlKTtcbiAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk5hbWUoRnVuY3Rpb25JRC5BRERfQ09NTUFORCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZFxuICAgICogQHJldHVybiB7QWRkQ29tbWFuZH1cbiAgICAqL1xuICAgIHNldENtZElEKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKEFkZENvbW1hbmQuS0VZX0NNRF9JRCwgaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldENtZElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIoQWRkQ29tbWFuZC5LRVlfQ01EX0lEKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TWVudVBhcmFtc30gbWVudVBhcmFtc1xuICAgICogQHJldHVybiB7QWRkQ29tbWFuZH1cbiAgICAqL1xuICAgIHNldE1lbnVQYXJhbXMobWVudVBhcmFtcykge1xuICAgICAgICB0aGlzLnZhbGlkYXRlVHlwZShNZW51UGFyYW1zLCBtZW51UGFyYW1zKTtcblxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihBZGRDb21tYW5kLktFWV9NRU5VX1BBUkFNUywgbWVudVBhcmFtcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgZ2V0TWVudVBhcmFtcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0KE1lbnVQYXJhbXMsIEFkZENvbW1hbmQuS0VZX01FTlVfUEFSQU1TKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7QXJyYXk8U3RyaW5nPn0gdnJDb21tYW5kc1xuICAgICogQHJldHVybiB7QWRkQ29tbWFuZH1cbiAgICAqL1xuICAgIHNldFZyQ29tbWFuZHModnJDb21tYW5kcykge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihBZGRDb21tYW5kLktFWV9WUl9DT01NQU5EUywgdnJDb21tYW5kcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7QXJyYXk8U3RyaW5nPn1cbiAgICAqL1xuICAgIGdldFZyQ29tbWFuZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlcihBZGRDb21tYW5kLktFWV9WUl9DT01NQU5EUyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge0ltYWdlfSBpY29uXG4gICAgKiBAcmV0dXJuIHtBZGRDb21tYW5kfVxuICAgICovXG4gICAgc2V0Q21kSWNvbihpY29uKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVUeXBlKEltYWdlLCBpY29uKTtcblxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihBZGRDb21tYW5kLktFWV9DTURfSUNPTiwgaWNvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7SW1hZ2V9XG4gICAgKi9cbiAgICBnZXRDbWRJY29uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoSW1hZ2UsIEFkZENvbW1hbmQuS0VZX0NNRF9JQ09OKTtcbiAgICB9XG5cbn1cblxuQWRkQ29tbWFuZC5LRVlfQ01EX0lDT04gPSAnY21kSWNvbic7XG5BZGRDb21tYW5kLktFWV9NRU5VX1BBUkFNUyA9ICdtZW51UGFyYW1zJztcbkFkZENvbW1hbmQuS0VZX0NNRF9JRCA9ICdjbWRJRCc7XG5BZGRDb21tYW5kLktFWV9WUl9DT01NQU5EUyA9ICd2ckNvbW1hbmRzJztcblxuZXhwb3J0IHsgQWRkQ29tbWFuZCB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY1Jlc3BvbnNlIH0gZnJvbSAnLi4vUnBjUmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgRnVuY3Rpb25JRCB9IGZyb20gJy4uL2VudW1zL0Z1bmN0aW9uSUQuanMnO1xuXG5jbGFzcyBBZGRDb21tYW5kUmVzcG9uc2UgZXh0ZW5kcyBScGNSZXNwb25zZSB7XG5cblx0LyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlKSB7XG4gICAgICAgIHN1cGVyKHN0b3JlKTtcbiAgICAgICAgdGhpcy5zZXRGdW5jdGlvbk5hbWUoRnVuY3Rpb25JRC5BRERfQ09NTUFORCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IEFkZENvbW1hbmRSZXNwb25zZSB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL1JwY05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uL2VudW1zL0xhbmd1YWdlLmpzJztcbmltcG9ydCB7IEZ1bmN0aW9uSUQgfSBmcm9tICcuLi9lbnVtcy9GdW5jdGlvbklELmpzJztcblxuY2xhc3MgT25MYW5ndWFnZUNoYW5nZSBleHRlbmRzIFJwY05vdGlmaWNhdGlvbiB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoc3RvcmUpO1xuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTmFtZShGdW5jdGlvbklELk9OX0xBTkdVQUdFX0NIQU5HRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge0xhbmd1YWdlfSBsYW5nYXVnZVxuICAgICogQHJldHVybiB7T25MYW5ndWFnZUNoYW5nZX1cbiAgICAqL1xuICAgIHNldExhbmd1YWdlKGxhbmdhdWdlKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVUeXBlKExhbmd1YWdlLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoT25MYW5ndWFnZUNoYW5nZS5LRVlfTEFOR1VBR0UsIGxhbmd1YWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtMYW5ndWFnZX1cbiAgICAqL1xuICAgIGdldExhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoTGFuZ3VhZ2UsIE9uTGFuZ3VhZ2VDaGFuZ2UuS0VZX0xBTkdVQUdFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TGFuZ3VhZ2V9IGxhbmdhdWdlXG4gICAgKiBAcmV0dXJuIHtPbkxhbmd1YWdlQ2hhbmdlfVxuICAgICovXG4gICAgc2V0SE1JRGlzcGxheUxhbmd1YWdlKGxhbmd1YWdlKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVUeXBlKExhbmd1YWdlLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoT25MYW5ndWFnZUNoYW5nZS5LRVlfSE1JX0RJU1BMQVlfTEFOR1VBR0UsIGxhbmd1YWdlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtMYW5ndWFnZX1cbiAgICAqL1xuICAgIGdldEhNSURpc3BsYXlMYW5ndWFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0KExhbmd1YWdlLCBPbkxhbmd1YWdlQ2hhbmdlLktFWV9ITUlfRElTUExBWV9MQU5HVUFHRSk7XG4gICAgfVxufVxuXG5Pbkxhbmd1YWdlQ2hhbmdlLktFWV9MQU5HVUFHRSA9ICdsYW5ndWFnZSc7XG5Pbkxhbmd1YWdlQ2hhbmdlLktFWV9ITUlfRElTUExBWV9MQU5HVUFHRSA9ICdobWlEaXNwbGF5TGFuZ3VhZ2UnO1xuXG5leHBvcnQgeyBPbkxhbmd1YWdlQ2hhbmdlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZGxTZXNzaW9uTGlzdGVuZXJcbiAqL1xuY2xhc3MgU2RsU2Vzc2lvbkxpc3RlbmVyIHtcblxuXHQvKipcblx0ICogQGNvbnN0cnVjdG9yXG5cdCAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL1RPRE8gYWRkIGFsbCBjYWxsYmFja3NcbiAgICB9XG5cbiAgICBcblxufVxuXG5leHBvcnQgeyBTZGxTZXNzaW9uTGlzdGVuZXIgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgU2RsU2Vzc2lvbkxpc3RlbmVyIH0gZnJvbSBcIi4vU2RsU2Vzc2lvbkxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgeyBTZGxQcm90b2NvbExpc3RlbmVyIH0gZnJvbSBcIi4uL3Byb3RvY29sL1NkbFByb3RvY29sTGlzdGVuZXIuanNcIjtcbmltcG9ydCB7IFNkbFByb3RvY29sQmFzZSB9IGZyb20gXCIuLi9wcm90b2NvbC9TZGxQcm90b2NvbEJhc2UuanNcIjtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZGxTZXNzaW9uXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBfc2V0dXBTZGxQcm90b2NvbExpc3RlbmVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzdGFydFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZW5kU2Vzc2lvblxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYWRkU2VydmljZUxpc3RlbmVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSByZW1vdmVTZXJ2aWNlTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNlbmRScGNcbiAqL1xuY2xhc3MgU2RsU2Vzc2lvbiB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RyYW5zcG9ydENvbmZpZ0Jhc2V9IGJhc2VUcmFuc3BvcnRDb25maWcgXG4gICAgICogQHBhcmFtIHtTZGxTZXNzaW9uTGlzdGVuZXJ9IHNkbFNlc3Npb25MaXN0ZW5lciBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihiYXNlVHJhbnNwb3J0Q29uZmlnLCBzZGxTZXNzaW9uTGlzdGVuZXIpIHtcblxuICAgICAgICB0aGlzLl9zZXJ2aWNlTGlzdGVuZXJzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5fc2RsU2Vzc2lvbkxpc3RlbmVyID0gc2RsU2Vzc2lvbkxpc3RlbmVyO1xuICAgICAgICBsZXQgc2RsUHJvdG9jb2xMaXN0ZW5lciA9IF9zZXR1cFNkbFByb3RvY29sTGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLl9zZGxQcm90b2NvbCA9IG5ldyBTZGxQcm90b2NvbEJhc2Uoc2RsUHJvdG9jb2xMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U2RsUHJvdG9jb2xMaXN0ZW5lcn0gXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfc2V0dXBTZGxQcm90b2NvbExpc3RlbmVyKCkge1xuICAgICAgICBsZXQgc2RsUHJvdG9jb2xMaXN0ZW5lciA9IG5ldyBTZGxQcm90b2NvbExpc3RlbmVyKCk7XG5cbiAgICAgICAgLy9UT0RPIGNyZWF0ZSBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgc2V0IGZvciB0aGlzIGxpc3RlbmVyXG5cbiAgICAgICAgcmV0dXJuIHNkbFByb3RvY29sTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZGxQcm90b2NvbCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZGxQcm90b2NvbC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kU2Vzc2lvbigpIHtcbiAgICAgICAgLy9UT0RPIGhhbmRsZSBpbnRlcm5hbCBpdGVtc1xuICAgICAgICBpZiAodGhpcy5fc2RsUHJvdG9jb2wgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc2RsUHJvdG9jb2wuZW5kU2Vzc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxTZXNzaW9uTGlzdGVuZXJ9IHNlcnZpY2VMaXN0ZW5lciBcbiAgICAgKi9cbiAgICBhZGRTZXJ2aWNlTGlzdGVuZXIoc2VydmljZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2VMaXN0ZW5lcnMucHVzaChzZXJ2aWNlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsU2Vzc2lvbkxpc3RlbmVyfSBzZXJ2aWNlTGlzdGVuZXIgXG4gICAgICovXG4gICAgcmVtb3ZlU2VydmljZUxpc3RlbmVyKHNlcnZpY2VMaXN0ZW5lcikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9zZXJ2aWNlTGlzdGVuZXJzLmluZGV4T2Yoc2VydmljZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2VMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UnBjTWVzc2FnZX0gcnBjTWVzc2FnZSBcbiAgICAgKi9cbiAgICBzZW5kUnBjKHJwY01lc3NhZ2UpIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBTZGxTZXNzaW9uIH07IiwiLypcbiAqIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4gKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiAqIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuICogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4gKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiAqIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiAqIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiAqIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4gKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiAqIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4gKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuICogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiAqIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbmltcG9ydCB7IEZyYW1lVHlwZSB9IGZyb20gJy4uL3Byb3RvY29sL2VudW1zL0ZyYW1lVHlwZS5qcyc7XG5pbXBvcnQgeyBTZGxQYWNrZXQgfSBmcm9tICcuLi9wcm90b2NvbC9TZGxQYWNrZXQuanMnO1xuaW1wb3J0IHsgU2RsUHJvdG9jb2xCYXNlIH0gZnJvbSAnLi4vcHJvdG9jb2wvU2RsUHJvdG9jb2xCYXNlLmpzJztcblxuXG5jbGFzcyBTZGxQc20ge1x0XHRcdFx0XHRcdFx0Ly9UT0RPIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGJldHRlciB0byB1c2UgJz09JyBvciAnPT09J1xuXHRcblx0LyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIGFsbCBpbnRlcm5hbCBtZW1iZXJzIHRvIGRlZmF1bHRcbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBTZGxQc20uU1RBUlRfU1RBVEU7XG4gICAgICAgIHRoaXMuX3ZlcnNpb24gPSAwO1xuICAgICAgICB0aGlzLl9lbmNyeXB0aW9uID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2ZyYW1lVHlwZSA9IEZyYW1lVHlwZS5TSU5HTEU7XG4gICAgICAgIHRoaXMuX3NlcnZpY2VUeXBlID0gMDtcbiAgICAgICAgdGhpcy5fY29udHJvbEZyYW1lSW5mbyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3Nlc3Npb25JRCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2R1bXBTaXplID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGF0YUxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VJRCA9IDA7XG4gICAgICAgIHRoaXMuX3BheWxvYWQgPSBudWxsO1xuXHR9XG5cblx0LyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSAtIFN0YXRlIHJlcHJlc2VudGVkIGJ5IGEgTnVtYmVyXG4gICAgICovXG4gICAgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTZGxQYWNrZXR9IC0gUmV0dXJucyBudWxsIGlmIG5vdCBjb21wbGV0ZVxuICAgICAqL1xuICAgIGdldEZvcm1lZFBhY2tldCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09IFNkbFBzbS5GSU5JU0hFRF9TVEFURSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZGxQYWNrZXQodGhpcy5fdmVyc2lvbiwgdGhpcy5fZW5jcnlwdGlvbiwgdGhpcy5fZnJhbWVUeXBlLCB0aGlzLl9zZXJ2aWNlVHlwZSwgdGhpcy5fY29udHJvbEZyYW1lSW5mbywgdGhpcy5fc2Vzc2lvbklELCB0aGlzLl9kYXRhTGVuZ3RoLCB0aGlzLl9tZXNzYWdlSUQsIHRoaXMuX3BheWxvYWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YSAtIFJlcHJlc2VudHMgYSBieXRlXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYW5kbGVCeXRlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLl90cmFuc2l0aW9uT25JbnB1dChkYXRhLCB0aGlzLl9zdGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09IFNkbFBzbS5FUlJPUl9TVEFURSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmF3Qnl0ZSAtIFJlcHJlc2VudHMgYSBieXRlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0YXRlXG4gICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF90cmFuc2l0aW9uT25JbnB1dChyYXdCeXRlLCBzdGF0ZSkge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFNkbFBzbS5TVEFSVF9TVEFURTpcblxuICAgICAgICAgICAgICAgIHRoaXMuX3ZlcnNpb24gPSAocmF3Qnl0ZSAmIFNkbFBzbS5WRVJTSU9OX01BU0spPj40O1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3ZlcnNpb24gPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9lbmNyeXB0aW9uID0gKDEgPT0gKHJhd0J5dGUgJiBTZGxQc20uRU5DUllQVElPTl9NQVNLKT4+Myk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9mcmFtZVR5cGUgPSByYXdCeXRlICYgU2RsUHNtLkZSQU1FX1RZUEVfTUFTSztcblxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5fdmVyc2lvbiA8IDEgfHwgdGhpcy5fdmVyc2lvbiA+IDUpXG4gICAgICAgICAgICAgICAgICAgICYmIHRoaXMuX2ZyYW1lVHlwZSAhPSBTZGxQYWNrZXQuRlJBTUVfVFlQRV9DT05UUk9MKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZyYW1lVHlwZSA8IFNkbFBhY2tldC5GUkFNRV9UWVBFX0NPTlRST0wgfHwgdGhpcy5fZnJhbWVUeXBlID4gU2RsUGFja2V0LkZSQU1FX1RZUEVfQ09OU0VDVVRJVkUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNkbFBzbS5FUlJPUl9TVEFURTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gU2RsUHNtLlNFUlZJQ0VfVFlQRV9TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uU0VSVklDRV9UWVBFX1NUQVRFOlxuXG5cdFx0dGhpcy5fc2VydmljZVR5cGUgPSByYXdCeXRlICYgMHhGRjtcblx0XHRyZXR1cm4gU2RsUHNtLkNPTlRST0xfRlJBTUVfSU5GT19TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uQ09OVFJPTF9GUkFNRV9JTkZPX1NUQVRFOlxuXHRcdFx0XHRcblx0XHR0aGlzLl9jb250cm9sRnJhbWVJbmZvID0gcmF3Qnl0ZSAmIDB4RkY7XG5cdFx0XHRcdHN3aXRjaCh0aGlzLl9mcmFtZVR5cGUpe1xuXHRcdFx0XHRcdGNhc2UgU2RsUGFja2V0LkZSQU1FX1RZUEVfQ09OVFJPTDpcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgU2RsUGFja2V0LkZSQU1FX1RZUEVfU0lOR0xFOlxuXHRcdFx0XHRcdGNhc2UgU2RsUGFja2V0LkZSQU1FX1RZUEVfRklSU1Q6XG5cdFx0XHRcdFx0XHRpZih0aGlzLl9jb250cm9sRnJhbWVJbmZvICE9IDB4MDApe1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBTZGxQYWNrZXQuRlJBTUVfVFlQRV9DT05TRUNVVElWRTpcblx0XHRcdFx0XHRcdC8vSXQgbWlnaHQgYmUgYSBnb29kIGlkZWEgdG8gY2hlY2sgcGFja2V0IHNlcXVlbmNlIG51bWJlcnMgaGVyZVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XHRcdFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFNkbFBzbS5TRVNTSU9OX0lEX1NUQVRFO1xuXG4gICAgICAgICAgICBjYXNlIFNkbFBzbS5TRVNTSU9OX0lEX1NUQVRFOlxuXHRcdFx0XHRcblx0XHR0aGlzLl9zZXNzaW9uSUQgPSByYXdCeXRlICYgMHhGRjtcblx0XHRcdFx0cmV0dXJuIFNkbFBzbS5EQVRBX1NJWkVfMV9TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uREFUQV9TSVpFXzFfU1RBVEU6XG5cdFx0XHRcdFxuXHRcdHRoaXMuX2RhdGFMZW5ndGggKz0gKHJhd0J5dGUgJiAweEZGKSA8PCAyNDsgLy9TaGlmdCAzIGJ5dGVzIHggOCBiaXRzXG5cdFx0XHRcdHJldHVybiBTZGxQc20uREFUQV9TSVpFXzJfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkRBVEFfU0laRV8yX1NUQVRFOlxuXHRcdFx0XHRcblx0XHR0aGlzLl9kYXRhTGVuZ3RoICs9IChyYXdCeXRlICYgMHhGRikgPDwgMTY7IC8vU2lmdCAyIGJ5dGVzIHggOCBiaXRzXG5cdFx0XHRcdHJldHVybiBEQVRBX1NJWkVfM19TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uREFUQV9TSVpFXzNfU1RBVEU6XG5cdFx0XHRcdFxuXHRcdHRoaXMuX2RhdGFMZW5ndGggKz0gKHJhd0J5dGUgJiAweEZGKSA8PCA4OyAvL1NpZnQgMSBieXRlIHggOCBiaXRzXG5cdFx0XHRcdHJldHVybiBEQVRBX1NJWkVfNF9TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uREFUQV9TSVpFXzRfU1RBVEU6XG5cdFx0XHRcdFxuXHRcdHRoaXMuX2RhdGFMZW5ndGggKz0gKHJhd0J5dGUgJiAweEZGKVxuXHRcdFx0XHRcblx0XHRcdFx0Ly9XZSBzaG91bGQgaGF2ZSBkYXRhIGxlbmd0aCBub3cgZm9yIHRoZSBwdW1wIHN0YXRlXG5cdFx0c3dpdGNoICh0aGlzLl9mcmFtZVR5cGUpIHsgLy9JZiBhbGwgaXMgY29ycmVjdCB3ZSBzaG91bGQgYnJlYWsgb3V0IG9mIHRoaXMgc3dpdGNoIHN0YXRlbWVudFxuXHRcdFx0XHRcdGNhc2UgU2RsUGFja2V0LkZSQU1FX1RZUEVfU0lOR0xFOlxuXHRcdFx0XHRcdGNhc2UgU2RsUGFja2V0LkZSQU1FX1RZUEVfQ09OU0VDVVRJVkU6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX0NPTlRST0w6XG5cdFx0XHRcdFx0XHQvL09rLCB3ZWxsIGhlcmUncyBzb21lIGludGVyZXN0aW5nIGJpdCBvZiBrbm93bGVkZ2UuIEJlY2F1c2UgdGhlIHN0YXJ0IHNlc3Npb24gcmVxdWVzdCBpcyBmcm9tIHRoZSBwaG9uZSB3aXRoIG5vIGtub3dsZWRnZSBvZiB2ZXJzaW9uIGl0IHNlbmRzIG91dFxuXHRcdFx0XHRcdFx0Ly9hIHYxIHBhY2tldC4gVEhFUkVGT1JFIHRoZXJlIGlzIG5vIG1lc3NhZ2UgaWQgZmllbGQuICoqKiogTm93IHlvdSBrbm93IGFuZCBrbm93aW5nIGlzIGhhbGYgdGhlIGJhdHRsZSAqKioqXG5cdFx0XHRcdGlmICh0aGlzLl92ZXJzaW9uID09IDEgJiYgdGhpcy5fY29udHJvbEZyYW1lSW5mbyA9PSBTZGxQYWNrZXQuRlJBTUVfSU5GT19TVEFSVF9TRVJWSUNFKSB7XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fZGF0YUxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5GSU5JU0hFRF9TVEFURTsgLy9XZSBhcmUgZG9uZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBwYXlsb2FkXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLl9kYXRhTGVuZ3RoIDw9IFNkbFByb3RvY29sQmFzZS5WMV9WMl9NVFVfU0laRSAtIFNkbFByb3RvY29sQmFzZS5WMV9IRUFERVJfU0laRSkgeyAvLyBzaXplcyBmcm9tIHByb3RvY29sL1NkbFByb3RvY29sLmpzXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5fcGF5bG9hZCA9IG5ldyBieXRlW3RoaXMuX2RhdGFMZW5ndGhdO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHR0aGlzLl9kdW1wU2l6ZSA9IHRoaXMuX2RhdGFMZW5ndGg7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBTZGxQc20uREFUQV9QVU1QX1NUQVRFO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7IFxuXHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX0ZJUlNUOlxuXHRcdFx0XHRcdFx0aWYgKGRhdGFMZW5ndGggPT0gU2RsUHNtLkZJUlNUX0ZSQU1FX0RBVEFfU0laRSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGhpcy5fdmVyc2lvbiA9PSAxKSB7IC8vVmVyc2lvbiAxIHBhY2tldHMgd2lsbCBub3QgaGF2ZSBtZXNzYWdlIGlkJ3Ncblx0XHRcdFx0XHRpZiAodGhpcy5fZGF0YUxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkZJTklTSEVEX1NUQVRFOyAvL1dlIGFyZSBkb25lIGlmIHdlIGRvbid0IGhhdmUgYW55IHBheWxvYWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RhdGFMZW5ndGggPD0gU2RsUHJvdG9jb2xCYXNlLlYxX1YyX01UVV9TSVpFIC0gU2RsUHJvdG9jb2xCYXNlLlYxX0hFQURFUl9TSVpFKSB7IC8vIHNpemVzIGZyb20gcHJvdG9jb2wvU2RsUHJvdG9jb2wuamF2YVxuXHRcdFx0XHRcdFx0dGhpcy5fcGF5bG9hZCA9IG5ldyBVaW50OEFycmF5KHRoaXMuX2RhdGFMZW5ndGgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9kdW1wU2l6ZSA9IHRoaXMuX2RhdGFMZW5ndGg7XG5cdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5EQVRBX1BVTVBfU1RBVEU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5NRVNTQUdFXzFfU1RBVEU7XG5cdFx0XHRcdH1cblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uTUVTU0FHRV8xX1NUQVRFOlxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5fbWVzc2FnZUlEICs9IChyYXdCeXRlICYgMHhGRikgPDwgMjQ7IC8vIFNoaWZ0IDMgYnl0ZXMgeCA4IGJpdHNcblx0XHRcdFx0cmV0dXJuIFNkbFBzbS5NRVNTQUdFXzJfU1RBVEU7XG5cdFx0XHRcdFxuICAgICAgICAgICAgY2FzZSBTZGxQc20uTUVTU0FHRV8yX1NUQVRFOlxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5fbWVzc2FnZUlEICs9IChyYXdCeXRlICYgMHhGRikgPDwgMTY7IC8vIFNoaWZ0IDIgYnl0ZXMgeCA4IGJpdHNcblx0XHRcdFx0cmV0dXJuIFNkbFBzbS5NRVNTQUdFXzNfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLk1FU1NBR0VfM19TVEFURTpcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuX21lc3NhZ2VJRCArPSAocmF3Qnl0ZSAmIDB4RkYpIDw8IDg7IC8vIFNoaWZ0IDEgYnl0ZSB4IDggYml0c1xuXHRcdFx0XHRyZXR1cm4gU2RsUHNtLk1FU1NBR0VfNF9TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uTUVTU0FHRV80X1NUQVRFOlxuXHRcdFx0XHRcblx0XHRcdFx0dGhpcy5fbWVzc2FnZUlEICs9IChyYXdCeXRlICYgMHhGRik7XG5cdFx0XHRcdGlmICh0aGlzLl9kYXRhTGVuZ3RoID09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkZJTklTSEVEX1NUQVRFOyAvL1dlIGFyZSBkb25lIGlmIHdlIGRvbid0IGhhdmUgYW55IHBheWxvYWRcblx0XHRcdFx0fVxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuX3BheWxvYWQgPSBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhTGVuZ3RoKTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHsgLy9Qb3NzaWJsZSBPdXQgb2YgTWVtb3J5IGVycm9yIGlmIGRhdGEgbGVuZ3RoIGlzIGludmFsaWRcblx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGR1bXBTaXplID0gZGF0YUxlbmd0aDtcblx0XHRcdFx0cmV0dXJuIFNkbFBzbS5EQVRBX1BVTVBfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkRBVEFfUFVNUF9TVEFURTpcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuX3BheWxvYWRbdGhpcy5fZGF0YUxlbmd0aCAtIHRoaXMuX2R1bXBTaXplXSA9IHJhd0J5dGU7XG5cdFx0XHRcdHRoaXMuX2R1bXBTaXplLS07XG5cdFx0XHRcdC8vRG8gd2UgaGF2ZSBhbnkgbW9yZSBieXRlcyB0byByZWFkIGluP1xuXHRcdFx0XHRpZih0aGlzLl9kdW1wU2l6ZSA+IDApe1xuXHRcdFx0XHRcdHJldHVybiBTZGxQc20uREFUQV9QVU1QX1NUQVRFO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX2R1bXBTaXplID09IDApIHtcblx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkZJTklTSEVEX1NUQVRFO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XG5cdFx0XHRcdH1cblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uRklOSVNIRURfU1RBVEU6XG4gICAgICAgICAgICBkZWZhdWx0OlxuXHRcdFx0XHQvL1Nob3VsZCBub3QgYmUgaGFuZGxpbmcgYW55IG90aGVyIGJ5dGVzIHdoaWxlIGluIHRoZSBmaW5pc2hlZCBzdGF0ZVxuICAgICAgICAgICAgICAgIHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XG4gICAgICAgIH1cbiAgICB9ICAgIFxufVxuXG5TZGxQc20uU1RBUlRfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDtcblNkbFBzbS5TRVJWSUNFX1RZUEVfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgID0gMHgwMjtcblNkbFBzbS5DT05UUk9MX0ZSQU1FX0lORk9fU1RBVEUgICAgICAgICAgICAgICAgID0gMHgwMztcblNkbFBzbS5TRVNTSU9OX0lEX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwNDtcblNkbFBzbS5EQVRBX1NJWkVfMV9TVEFURSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwNTtcblNkbFBzbS5EQVRBX1NJWkVfMl9TVEFURSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwNjtcblNkbFBzbS5EQVRBX1NJWkVfM19TVEFURSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwNztcblNkbFBzbS5EQVRBX1NJWkVfNF9TVEFURSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwODtcblNkbFBzbS5NRVNTQUdFXzFfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwOTtcblNkbFBzbS5NRVNTQUdFXzJfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwQTtcblNkbFBzbS5NRVNTQUdFXzNfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwQjtcblNkbFBzbS5NRVNTQUdFXzRfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwQztcblNkbFBzbS5EQVRBX1BVTVBfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwRDtcblNkbFBzbS5GSU5JU0hFRF9TVEFURSAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHhGRjtcblNkbFBzbS5FUlJPUl9TVEFURSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gLTE7XG5cblNkbFBzbS5GSVJTVF9GUkFNRV9EQVRBX1NJWkUgICAgICAgICAgICAgICAgICAgID0gMHgwODtcblNkbFBzbS5WRVJTSU9OX01BU0sgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHhGMDsgLy80IGhpZ2hlc3QgYml0c1xuU2RsUHNtLkVOQ1JZUFRJT05fTUFTSyAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDA4OyAvLzR0aCBsb3dlc3QgYml0XG5TZGxQc20uRlJBTUVfVFlQRV9NQVNLICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDc7IC8vMyBsb3dlc3QgYml0c1xuXG5leHBvcnQgeyBTZGxQc20gfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBTZGxQc20gfSBmcm9tICcuL1NkbFBzbS5qcyc7XG5cbmNsYXNzIFRyYW5zcG9ydEJhc2Uge1xuICAgIFxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBwYXJhbSB7QmFzZVRyYW5zcG9ydENvbmZpZ30gYmFzZVRyYW5zcG9ydENvbmZpZ1xuICAgICAqIEBwYXJhbSB7VHJhbnNwb3J0TGlzdGVuZXJ9IHRyYW5zcG9ydExpc3RlbmVyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYmFzZVRyYW5zcG9ydENvbmZpZywgdHJhbnNwb3J0TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fc2RsUHNtID0gbmV3IFNkbFBzbSgpO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lciA9IHRyYW5zcG9ydExpc3RlbmVyO1xuXG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRocm93IFwic3RhcnQgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlblwiO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRocm93IFwic3RvcCBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuXCI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldFxuICAgICAqL1xuICAgIHNlbmRQYWNrZXQoc2RsUGFja2V0KSB7XG4gICAgICAgIHRocm93IFwic2VuZFBhY2tldCBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuXCI7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUcmFuc3BvcnRCYXNlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuY2xhc3MgVHJhbnNwb3J0TWFuYWdlckJhc2Uge1xuXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtCYXNlVHJhbnNwb3J0Q29uZmlnfSBiYXNlVHJhbnNwb3J0Q29uZmlnXG4gICAgICogQHBhcmFtIHtUcmFuc3BvcnRMaXN0ZW5lcn0gdHJhbnNwb3J0TGlzdGVuZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihiYXNlVHJhbnNwb3J0Q29uZmlnLCB0cmFuc3BvcnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRDb25maWcgPSBiYXNlVHJhbnNwb3J0Q29uZmlnO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lciA9IHRyYW5zcG9ydExpc3RlbmVyO1xuICAgIH1cblxuICAgIG9uVHJhbnNwb3J0Q29ubmVjdGVkKCkge1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lci5vblRyYW5zcG9ydENvbm5lY3RlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAgICAgKi9cbiAgICBvblRyYW5zcG9ydERpc2Nvbm5lY3RlZChmdW5jKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLm9uVHJhbnNwb3J0RGlzY29ubmVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqL1xuICAgIG9uRXJyb3IoZnVuYykge1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lci5vbkVycm9yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldFxuICAgICAqL1xuICAgIG9uUGFja2V0UmVjZWl2ZWQoc2RsUGFja2V0KSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLm9uUGFja2V0UmVjZWl2ZWQoc2RsUGFja2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgICovXG4gICAgc2VuZFBhY2tldChzZGxQYWNrZXQpIHtcbiAgICAgICAgdGhyb3cgXCJzZW5kUGFja2V0IG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhyb3cgXCJzdGFydCBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuXCI7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhyb3cgXCJzdG9wIG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RyYW5zcG9ydFR5cGV9IHRyYW5zcG9ydFR5cGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzc1xuICAgICAqL1xuICAgIGlzQ29ubmVjdGVkKHRyYW5zcG9ydFR5cGUsIGFkZHJlc3MpIHtcbiAgICAgICAgdGhyb3cgXCJpc0Nvbm5lY3RlZCBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuXCI7XG4gICAgfVxufVxuXG5leHBvcnQgeyBUcmFuc3BvcnRNYW5hZ2VyQmFzZSB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbC9FbnVtLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7RW51bX0gVHJhbnNwb3J0VHlwZVxuICogQHByb3BlcnR5IHtPYmplY3R9IE1BUFxuICovXG5jbGFzcyBUcmFuc3BvcnRUeXBlIGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ31cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgV0VCU09DS0VUX1NFUlZFUigpIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zcG9ydFR5cGUuTUFQLldFQlNPQ0tFVF9TRVJWRVI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ31cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgV0VCU09DS0VUX0NMSUVOVCgpIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zcG9ydFR5cGUuTUFQLldFQlNPQ0tFVF9DTElFTlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDb25maXJtcyB3aGV0aGVyIHRoZSB2YWx1ZSBwYXNzZWQgaW4gZXhpc3RzIGluIHRoZSBFbnVtcyBvZiB0aGlzIGNsYXNzXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAqIEByZXR1cm4ge251bGx8U3RyaW5nfSAtIFJldHVybnMgbnVsbCBpZiB0aGUgZW51bSB2YWx1ZSBkb2Vzbid0IGV4aXN0XG4gICAgKi9cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFRyYW5zcG9ydFR5cGUudmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgVHJhbnNwb3J0VHlwZS5NQVApO1xuICAgIH1cbn1cblxuVHJhbnNwb3J0VHlwZS5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgICBcIldFQlNPQ0tFVF9TRVJWRVJcIjogXCJXRUJTT0NLRVRfU0VSVkVSXCIsXG4gICAgXCJXRUJTT0NLRVRfQ0xJRU5UXCI6IFwiV0VCU09DS0VUX0NMSUVOVFwiLFxuICAgIFwiQ1VTVE9NXCI6IFwiQ1VTVE9NXCIsXG59KTtcblxuZXhwb3J0IHsgVHJhbnNwb3J0VHlwZSB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vLyBpbXBvcnQgICogYXMgQlNPTiAgZnJvbSAnLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYnNvbi9kaXN0L2Jzb24uYnVuZGxlLmpzJztcbmltcG9ydCAgQlNPTiBmcm9tICdic29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnNvbiB7XG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplIGEgSmF2YXNjcmlwdCBvYmplY3QuXG4gICAgICogXG4gICAgICogQHBhcmFtIG9iamVjdCBUaGUgSmF2YXNjcmlwdCBvYmplY3QgdG8gc2VyaWFsaXplLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIFNlcmlhbGl6ZSBvcHRpb25zLlxuICAgICAqIEByZXR1cm4gVGhlIEJ1ZmZlciBvYmplY3QgY29udGFpbmluZyB0aGUgc2VyaWFsaXplZCBvYmplY3QuXG4gICAgICovXG4gICAgc3RhdGljIHNlcmlhbGl6ZSAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEJTT04pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGApYCk7XG4gICAgICAgIC8vIHJldHVybiBCU09OLnNlcmlhbGl6ZShvYmplY3QsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlc2VyaWFsaXplIGRhdGEgYXMgQlNPTi5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gYnVmZmVyIFRoZSBidWZmZXIgY29udGFpbmluZyB0aGUgc2VyaWFsaXplZCBzZXQgb2YgQlNPTiBkb2N1bWVudHMuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgRGVzZXJpYWxpemUgb3B0aW9ucy5cbiAgICAgKiBAcmV0dXJucyBUaGUgZGVzZXJpYWxpemVkIEphdmFzY3JpcHQgT2JqZWN0LlxuICAgICAqL1xuICAgIHN0YXRpYyBkZXNlcmlhbGl6ZSAob2JqZWN0LCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKEJTT04pO1xuICAgICAgICAvLyByZXR1cm4gQlNPTi5kZXNlcmlhbGl6ZShvYmplY3QsIG9wdGlvbnMpO1xuICAgIH1cbn1cblxuLy8gMzQ6IGltcG9ydCAgeyBCc29uIH0gZnJvbSAnLi8uLi91dGlsL0Jzb24uanMnO1xuLy8gZXZlcnkgY2xhc3MgdXNlZCBieSB0aGUgYXBwIG11c3QgZXhwb3J0IGEgdmVyc2lvbiBvZiBpdHNlbGYgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBmaWxlLlxuZXhwb3J0IHsgQnNvbiB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jbGFzcyBKc29uUnBjTWFyc2hhbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICAvKlxubGV0IHRlc3RNYXAgPSB7XCJycGNUeXBlXCI6XCJSZXF1ZXN0XCIsIFwiZnVuY3Rpb25OYW1lXCI6XCJSQUlcIn1cbnVuZGVmaW5lZFxubGV0IHN0cmluZ2VkID0gSlNPTi5zdHJpbmdpZnkodGVzdE1hcClcbnVuZGVmaW5lZFxuc3RyaW5nZWRcblwie1wicnBjVHlwZVwiOlwiUmVxdWVzdFwiLFwiZnVuY3Rpb25OYW1lXCI6XCJSQUlcIn1cIlxubGV0IGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoc3RyaW5nZWQpXG51bmRlZmluZWRcbmFycmF5XG5VaW50OEFycmF5wqBbXWJ1ZmZlcjogKC4uLilieXRlTGVuZ3RoOiAoLi4uKWJ5dGVPZmZzZXQ6ICguLi4pbGVuZ3RoOiAoLi4uKVN5bWJvbChTeW1ib2wudG9TdHJpbmdUYWcpOiAoLi4uKV9fcHJvdG9fXzogVHlwZWRBcnJheVxudmFyIGVuYyA9IG5ldyBUZXh0RW5jb2RlcigpOyAvLyBhbHdheXMgdXRmLThcblxudW5kZWZpbmVkXG5hcnJheSA9IGVuYy5lbmNvZGUoc3RyaW5nZWQpXG5VaW50OEFycmF5KDQyKcKgWzEyMywgMzQsIDExNCwgMTEyLCA5OSwgODQsIDEyMSwgMTEyLCAxMDEsIDM0LCA1OCwgMzQsIDgyLCAxMDEsIDExMywgMTE3LCAxMDEsIDExNSwgMTE2LCAzNCwgNDQsIDM0LCAxMDIsIDExNywgMTEwLCA5OSwgMTE2LCAxMDUsIDExMSwgMTEwLCA3OCwgOTcsIDEwOSwgMTAxLCAzNCwgNTgsIDM0LCA4MiwgNjUsIDczLCAzNCwgMTI1XTA6IDEyMzE6IDM0MjogMTE0MzogMTEyNDogOTk1OiA4NDY6IDEyMTc6IDExMjg6IDEwMTk6IDM0MTA6IDU4MTE6IDM0MTI6IDgyMTM6IDEwMTE0OiAxMTMxNTogMTE3MTY6IDEwMTE3OiAxMTUxODogMTE2MTk6IDM0MjA6IDQ0MjE6IDM0MjI6IDEwMjIzOiAxMTcyNDogMTEwMjU6IDk5MjY6IDExNjI3OiAxMDUyODogMTExMjk6IDExMDMwOiA3ODMxOiA5NzMyOiAxMDkzMzogMTAxMzQ6IDM0MzU6IDU4MzY6IDM0Mzc6IDgyMzg6IDY1Mzk6IDczNDA6IDM0NDE6IDEyNWJ1ZmZlcjogKC4uLilieXRlTGVuZ3RoOiAoLi4uKWJ5dGVPZmZzZXQ6ICguLi4pbGVuZ3RoOiAoLi4uKVN5bWJvbChTeW1ib2wudG9TdHJpbmdUYWcpOiAoLi4uKV9fcHJvdG9fXzogVHlwZWRBcnJheVxudmFyIGVuYyA9IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIpO1xuXG51bmRlZmluZWRcbmxldCBzdGVwMiA9IGVuYy5kZWNvZGUoYXJyYXkpXG51bmRlZmluZWRcbnN0ZXAyXG5cIntcInJwY1R5cGVcIjpcIlJlcXVlc3RcIixcImZ1bmN0aW9uTmFtZVwiOlwiUkFJXCJ9XCJcbmxldCBuZXdKc29uID0gSlNPTi5wYXJzZShzdGVwMilcbnVuZGVmaW5lZFxubmV3SnNvblxue3JwY1R5cGU6IFwiUmVxdWVzdFwiLCBmdW5jdGlvbk5hbWU6IFwiUkFJXCJ9XG5cblxuXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UnBjTWVzc2FnZX0gcnBjTWVzc2FnZSBcbiAgICAgKi9cbiAgICBzdGF0aWMgbWFyc2hhbGwocnBjTWVzc2FnZSkge1xuICAgICAgICAvL1JldHVybnMgVWludDhBcnJheSBcbiAgICAgICAgbGV0IGpzb25CeXRlcyA9IG51bGw7XG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGxldCBqc29uT2JqZWN0ID0gcnBjTWVzc2FnZS5nZXRQYXJhbWV0ZXJzKCk7XG4gICAgICAgICAgICAvL1RPRE8gZG8gd2UgbmVlZCB0byBnbyB0aHJvdWdoIGVhY2ggcGFyYW0gYW5kIGRvIHRoaXM/XG4gICAgICAgICAgICBsZXQgc3RyaW5nVmVyc2lvbiA9IEpTT04uc3RyaW5naWZ5KGpzb25PYmplY3QpO1xuICAgICAgICAgICAgbGV0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBlbmNvZGVyLmVuY29kZShzdHJpbmdWZXJzaW9uKTtcblxuICAgICAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgICAgICAgIC8vVE9ETyBwcmludCBleGNlcHRpb25cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgSnNvblJwY01hcnNoYWxsZXIgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgTGlmZWN5Y2xlTWFuYWdlciB9IGZyb20gJy4vc3JjL21hbmFnZXIvbGlmZWN5Y2xlL0xpZmVjeWNsZU1hbmFnZXIuanMnO1xuaW1wb3J0IHsgQmluYXJ5RnJhbWVIZWFkZXIgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9CaW5hcnlGcmFtZUhlYWRlci5qcyc7XG5pbXBvcnQgeyBNZXNzYWdlRnJhbWVBc3NlbWJsZXIgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9NZXNzYWdlRnJhbWVBc3NlbWJsZXIuanMnO1xuaW1wb3J0IHsgU2RsUGFja2V0IH0gZnJvbSAnLi9zcmMvcHJvdG9jb2wvU2RsUGFja2V0LmpzJztcbmltcG9ydCB7IFNkbFByb3RvY29sQmFzZSB9IGZyb20gJy4vc3JjL3Byb3RvY29sL1NkbFByb3RvY29sQmFzZS5qcyc7XG5pbXBvcnQgeyBTZGxQcm90b2NvbExpc3RlbmVyIH0gZnJvbSAnLi9zcmMvcHJvdG9jb2wvU2RsUHJvdG9jb2xMaXN0ZW5lci5qcyc7XG5pbXBvcnQgeyBDb250cm9sRnJhbWVUYWdzIH0gZnJvbSAnLi9zcmMvcHJvdG9jb2wvZW51bXMvQ29udHJvbEZyYW1lVGFncy5qcyc7XG5pbXBvcnQgeyBGcmFtZVR5cGUgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9lbnVtcy9GcmFtZVR5cGUuanMnO1xuaW1wb3J0IHsgU2VydmljZVR5cGUgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9lbnVtcy9TZXJ2aWNlVHlwZS5qcyc7XG5pbXBvcnQgeyBScGNNZXNzYWdlIH0gZnJvbSAnLi9zcmMvcnBjL1JwY01lc3NhZ2UuanMnO1xuaW1wb3J0IHsgUnBjTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9zcmMvcnBjL1JwY05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgeyBScGNSZXF1ZXN0IH0gZnJvbSAnLi9zcmMvcnBjL1JwY1JlcXVlc3QuanMnO1xuaW1wb3J0IHsgUnBjUmVzcG9uc2UgfSBmcm9tICcuL3NyYy9ycGMvUnBjUmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgUnBjU3RydWN0IH0gZnJvbSAnLi9zcmMvcnBjL1JwY1N0cnVjdC5qcyc7XG5pbXBvcnQgeyBGdW5jdGlvbklEIH0gZnJvbSAnLi9zcmMvcnBjL2VudW1zL0Z1bmN0aW9uSUQuanMnO1xuaW1wb3J0IHsgSW1hZ2VUeXBlIH0gZnJvbSAnLi9zcmMvcnBjL2VudW1zL0ltYWdlVHlwZS5qcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4vc3JjL3JwYy9lbnVtcy9MYW5ndWFnZS5qcyc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL3NyYy9ycGMvZW51bXMvUmVzdWx0LmpzJztcbmltcG9ydCB7IFJwY1R5cGUgfSBmcm9tICcuL3NyYy9ycGMvZW51bXMvUnBjVHlwZS5qcyc7XG5pbXBvcnQgeyBBZGRDb21tYW5kIH0gZnJvbSAnLi9zcmMvcnBjL21lc3NhZ2VzL0FkZENvbW1hbmQuanMnO1xuaW1wb3J0IHsgQWRkQ29tbWFuZFJlc3BvbnNlIH0gZnJvbSAnLi9zcmMvcnBjL21lc3NhZ2VzL0FkZENvbW1hbmRSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBPbkxhbmd1YWdlQ2hhbmdlIH0gZnJvbSAnLi9zcmMvcnBjL21lc3NhZ2VzL09uTGFuZ3VhZ2VDaGFuZ2UuanMnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuL3NyYy9ycGMvc3RydWN0cy9JbWFnZS5qcyc7XG5pbXBvcnQgeyBNZW51UGFyYW1zIH0gZnJvbSAnLi9zcmMvcnBjL3N0cnVjdHMvTWVudVBhcmFtcy5qcyc7XG5pbXBvcnQgeyBTZGxTZXNzaW9uIH0gZnJvbSAnLi9zcmMvc2Vzc2lvbi9TZGxTZXNzaW9uLmpzJztcbmltcG9ydCB7IFNkbFNlc3Npb25MaXN0ZW5lciB9IGZyb20gJy4vc3JjL3Nlc3Npb24vU2RsU2Vzc2lvbkxpc3RlbmVyLmpzJztcbmltcG9ydCB7IFNkbFBzbSB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9TZGxQc20uanMnO1xuaW1wb3J0IHsgVHJhbnNwb3J0QmFzZSB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRCYXNlLmpzJztcbmltcG9ydCB7IFRyYW5zcG9ydENvbmZpZ0Jhc2UgfSBmcm9tICcuL3NyYy90cmFuc3BvcnQvVHJhbnNwb3J0Q29uZmlnQmFzZS5qcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRMaXN0ZW5lciB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRMaXN0ZW5lci5qcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRNYW5hZ2VyQmFzZSB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRNYW5hZ2VyQmFzZS5qcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRUeXBlIH0gZnJvbSAnLi9zcmMvdHJhbnNwb3J0L2VudW1zL1RyYW5zcG9ydFR5cGUuanMnO1xuaW1wb3J0IHsgQml0Q29udmVydGVyIH0gZnJvbSAnLi9zcmMvdXRpbC9CaXRDb252ZXJ0ZXIuanMnO1xuaW1wb3J0IHsgQnNvbiB9IGZyb20gJy4vc3JjL3V0aWwvQnNvbi5qcyc7XG4vLyBpbXBvcnQgeyBCc29uQnVuZGxlIH0gZnJvbSAnLi9zcmMvdXRpbC9Cc29uQnVuZGxlLmpzJztcbi8vIGltcG9ydCB7IEJzb25FU00gfSBmcm9tICcuL3NyYy91dGlsL0Jzb25FU00uanMnO1xuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4vc3JjL3V0aWwvRW51bS5qcyc7XG5pbXBvcnQgeyBKc29uUnBjTWFyc2hhbGxlciB9IGZyb20gJy4vc3JjL3V0aWwvSnNvblJwY01hcnNoYWxsZXIuanMnO1xuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vc3JjL3V0aWwvVmVyc2lvbi5qcyc7XG5cbmNvbnN0IFNETCA9IHtcbiAgICBtYW5hZ2VyOiB7XG4gICAgICAgIGxpZmVjeWNsZToge1xuICAgICAgICAgICAgTGlmZWN5Y2xlTWFuYWdlclxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm90b2NvbDoge1xuICAgICAgICBCaW5hcnlGcmFtZUhlYWRlcixcbiAgICAgICAgTWVzc2FnZUZyYW1lQXNzZW1ibGVyLFxuICAgICAgICBTZGxQYWNrZXQsXG4gICAgICAgIFNkbFByb3RvY29sQmFzZSxcbiAgICAgICAgU2RsUHJvdG9jb2xMaXN0ZW5lcixcbiAgICAgICAgZW51bXM6IHtcbiAgICAgICAgICAgIENvbnRyb2xGcmFtZVRhZ3MsXG4gICAgICAgICAgICBGcmFtZVR5cGUsXG4gICAgICAgICAgICBTZXJ2aWNlVHlwZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBycGM6IHtcbiAgICAgICAgUnBjTWVzc2FnZSxcbiAgICAgICAgUnBjTm90aWZpY2F0aW9uLFxuICAgICAgICBScGNSZXF1ZXN0LFxuICAgICAgICBScGNSZXNwb25zZSxcbiAgICAgICAgUnBjU3RydWN0LFxuICAgICAgICBlbnVtczoge1xuICAgICAgICAgICAgRnVuY3Rpb25JRCxcbiAgICAgICAgICAgIEltYWdlVHlwZSxcbiAgICAgICAgICAgIExhbmd1YWdlLFxuICAgICAgICAgICAgUmVzdWx0LFxuICAgICAgICAgICAgUnBjVHlwZVxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgQWRkQ29tbWFuZCxcbiAgICAgICAgICAgIEFkZENvbW1hbmRSZXNwb25zZSxcbiAgICAgICAgICAgIE9uTGFuZ3VhZ2VDaGFuZ2VcbiAgICAgICAgfSxcbiAgICAgICAgc3RydWN0czoge1xuICAgICAgICAgICAgSW1hZ2UsXG4gICAgICAgICAgICBNZW51UGFyYW1zXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlc3Npb246IHtcbiAgICAgICAgU2RsU2Vzc2lvbixcbiAgICAgICAgU2RsU2Vzc2lvbkxpc3RlbmVyXG4gICAgfSxcbiAgICB0cmFuc3BvcnQ6IHtcbiAgICAgICAgU2RsUHNtLFxuICAgICAgICBUcmFuc3BvcnRCYXNlLFxuICAgICAgICBUcmFuc3BvcnRDb25maWdCYXNlLFxuICAgICAgICBUcmFuc3BvcnRMaXN0ZW5lcixcbiAgICAgICAgVHJhbnNwb3J0TWFuYWdlckJhc2UsXG4gICAgICAgIGVudW1zOiB7XG4gICAgICAgICAgICBUcmFuc3BvcnRUeXBlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHV0aWw6IHtcbiAgICAgICAgQml0Q29udmVydGVyLFxuICAgICAgICBCc29uLFxuICAgICAgICAvLyBCc29uQnVuZGxlLFxuICAgICAgICAvLyBCc29uRVNNLFxuICAgICAgICBFbnVtLFxuICAgICAgICBKc29uUnBjTWFyc2hhbGxlcixcbiAgICAgICAgVmVyc2lvblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU0RMOyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLE1BQU0sZ0JBQWdCLENBQUM7O0lBRXZCLENBQUM7O0lDbENEO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBOztJQUVBLE1BQU0sWUFBWSxDQUFDOztJQUVuQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLGdCQUFnQixDQUFDLEtBQUssRUFBRSxNQUFNLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRTtJQUNoRDtJQUNBLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRTtJQUNoQztJQUNBLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQUksa0JBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDM0M7SUFDQSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM5QixRQUFRLElBQUksSUFB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Q0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDcEIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBRTNDLFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFFBQVEsR0FBRztJQUNmLFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDcEIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBRTNDLFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFFBQVEsR0FBRztJQUNmLFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDcEIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O0lBRTNDLFFBQVEsT0FBTyxJQUFJLENBQUM7SUFDcEIsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFFBQVEsR0FBRztJQUNmLFFBQVEsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzNCLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0E7SUFDQSxJQUFJLFVBQVUsQ0FBQyxPQUFPLEVBQUU7SUFDeEIsUUFBUSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcs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QUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJQUNBO0lBQ0E7SUFDQSxJQUFJLFdBQVcsS0FBSyxHQUFHO0lBQ3ZCLFFBQVEsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNsQyxLQUFLOztJQUVMO0lBQ0E7SUFDQTtJQUNBLElBQUksV0FBVyxLQUFLLEdBQUc7SUFDdkIsUUFBUSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0lBQ2xDLEtBQUs7O0lBRUw7SUFDQTtJQUNBO0lBQ0EsSUFBSSxXQUFXLEtBQUssR0FBRztJQUN2QixRQUFRLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7SUFDbEMsS0FBSzs7SUFFTDtJ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
