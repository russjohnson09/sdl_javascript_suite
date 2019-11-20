/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Enum; });
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



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlPacket; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_FrameType_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_Bson_js__ = __webpack_require__(15);
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
    constructor (version = 1, encryption = false, frameType = -1, serviceType = -1, frameInfo = -1, sessionID = 0, dataSize = 0, messageID = 0, payload = null, offset = 0, bytesToWrite = 0) {
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
            this._payload = new Uint8Array(payload.slice(offset, bytesToWrite + offset));
        }

        return this;

    }

    /**
    * @return {Number} - Protocol version used by this packet
    */
    getVersion () {
        return this._version;
    }

    /**
    * @return {Boolean} - Whether or not the payload in this packet is encrypted
    */
    getEncryption () {
        return this._encryption;
    }

    /**
    * @return {ServiceType} - The service that this packet is associated with
    */
    getServiceType () {
        return this._serviceType;
    }

    /**
    * @return {Number} - Specific frame info related to this packet
    */
    getFrameInfo () {
        return this._frameInfo;
    }

    /**
    * @return {Number} - ID this packet is associated with
    */
    getSessionID () {
        return this._sessionID;
    }

    /**
    * @return {Number} - ID of this specific packet
    */
    getMessageID () {
        return this._messageID;
    }

    /**
    * @return {Number} - Size of the payload that will be added
    */
    getDataSize () {
        return this._dataSize;
    }

    /**
    * @return {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
    */
    setPayload (payload) {
        this._payload = payload;
    }

    /**
    * @return {Uint8Array} - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
    */
    getPayload () {
        return this._payload;
    }

    /**
    * @return {Number} - Returns a number representing a byte mask depending on the boolean value
    */
    getEncryptionBit () {
        return SdlPacket.getEncryptionBit(this._encryption);
    }

    /**
     * 
     * @param {Boolean} encryption 
     * @return {Number} - Returns a number representing a byte mask depending on the boolean value
     */
    static getEncryptionBit (encryption) {
        return encryption ? SdlPacket.ENCRYPTION_MASK : 0;

    }

    /**
    * @return {FrameType} - A number representing the packet frame type
    */
    getFrameType () {
        return this._frameType;
    }

    /**
    * @return {String} - String representation of the packet
    */
    toString () {
        let output = '***** Sdl Packet *****';
        output += `\nVersion: ${this._version}`;
        output += `\nEncryption: ${this._encryption}`;
        output += `\nFrameType: ${this._frameType}`;
        output += `\nServiceType: ${this._serviceType}`;
        output += `\nFrameInfo: ${this._frameInfo}`;
        output += `\nSessionID: ${this._sessionID}`;
        output += `\nDataSize: ${this._dataSize}`;

        if (this._version > 1) {
            output += `\nMessageID: ${this._messageID}`;
        }

        output += '\n***** Sdl Packet End *****';

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
    static constructPacket (version, encryption, frameType, serviceType, controlFrameInfo, sessionID, dataSize, messageID, payload) {
        let dataView = null;
        let dataViewIndex = 0;

        if (version > 1) {
            dataView = new Uint8Array(SdlPacket.HEADER_SIZE + dataSize);
        } else {
            dataView = new Uint8Array(SdlPacket.HEADER_SIZE_V1 + dataSize);
        }

        dataView[dataViewIndex++] = (version << 4) + this.getEncryptionBit(encryption) + frameType;
        dataView[dataViewIndex++] = serviceType;
        dataView[dataViewIndex++] = controlFrameInfo;
        dataView[dataViewIndex++] = sessionID;
        dataView[dataViewIndex++] = (dataSize & 0xFF000000) >> 24;
        dataView[dataViewIndex++] = (dataSize & 0x00FF0000) >> 16;
        dataView[dataViewIndex++] = (dataSize & 0x0000FF00) >> 8;
        dataView[dataViewIndex++] = dataSize & 0x000000FF;

        if (version > 1) {
            dataView[dataViewIndex++] = (messageID & 0xFF000000) >> 24;
            dataView[dataViewIndex++] = (messageID & 0x00FF0000) >> 16;
            dataView[dataViewIndex++] = (messageID & 0x0000FF00) >> 8;
            dataView[dataViewIndex++] = messageID & 0x000000FF;
        }

        if (payload !== null && payload.length > 0) {
            dataView.set(payload, dataViewIndex);
        }

        return dataView;
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
    constructPacket () {
        if (this._bsonPayload) {
            this._payload = __WEBPACK_IMPORTED_MODULE_1__util_Bson_js__["a" /* Bson */].serialize(this._bsonPayload);
            this._dataSize = this._payload.length;
        }

        return this.constructor.constructPacket(this._version, this._encryption, this._frameType, this._serviceType, this._frameInfo, this._sessionID, this._dataSize, this._messageID, this._payload);
    }

    /**
     * @param {String} tag - String key to add as a property to the BSON map
     * @param {Object} data - Object to add as a value to the BSON map
     */
    putTag (tag, data) {
        if (!this._bsonPayload) {
            this._bsonPayload = {};
        }
        this._bsonPayload[tag] = data;
    }

    /**
     * @param {String} tag - String key to add as a property to the BSON map
     * @return {Object} data - Object as a value found from the the BSON map
     */

    getTag (tag) {
        if (!this._bsonPayload) {
            if (!this._payload || this._payload.length === 0) {
                return null;
            }
            this._bsonPayload = __WEBPACK_IMPORTED_MODULE_1__util_Bson_js__["a" /* Bson */].deserialize(this._payload);
            return this._bsonPayload[tag];
        } else {
            return this._bsonPayload[tag];
        }
    }
}

SdlPacket.EXTRA_PARCEL_DATA_LENGTH                      = 24;
SdlPacket.HEADER_SIZE                                   = 12;
SdlPacket.HEADER_SIZE_V1                                = 8;

SdlPacket.ENCRYPTION_MASK                               = 0x08;

SdlPacket.FRAME_TYPE_CONTROL 					        = 0x00;
SdlPacket.FRAME_TYPE_SINGLE 					        = 0x01;
SdlPacket.FRAME_TYPE_FIRST 					            = 0x02;
SdlPacket.FRAME_TYPE_CONSECUTIVE				        = 0x03;

/**
 * Service Type
 */
SdlPacket.SERVICE_TYPE_CONTROL                          = 0x00;
// RESERVED 0x01 - 0x06
SdlPacket.SERVICE_TYPE_RPC                              = 0x07;
// RESERVED 0x08 - 0x09
SdlPacket.SERVICE_TYPE_PCM                              = 0x0A;
SdlPacket.SERVICE_TYPE_VIDEO                            = 0x0B;
// RESERVED 0x0C - 0x0E
SdlPacket.SERVICE_TYPE_BULK_DATA                        = 0x0F;
// RESERVED 0x10 - 0xFF

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
// 0x0A-0xFC are reserved
SdlPacket.FRAME_INFO_TRANSPORT_EVENT_UPDATE             = 0xFD;
SdlPacket.FRAME_INFO_SERVICE_DATA_ACK                   = 0xFE;
SdlPacket.FRAME_INFO_HEART_BEAT_ACK                     = 0xFF;
SdlPacket.FRAME_INFO_FINAL_CONNESCUTIVE_FRAME           = 0x00;
SdlPacket.FRAME_INFO_RESERVED                           = 0x00;




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrameType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class FrameType extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {
    /**
    * @constructor
    */
    constructor () {
        super();
    }

    /**
    * @return {Number}
    */
    static get CONTROL () {
        return FrameType.MAP.CONTROL;
    }

    /**
    * @return {Number}
    */
    static get FIRST () {
        return FrameType.MAP.FIRST;
    }

    /**
    * @return {Number}
    */
    static get CONSECUTIVE () {
        return FrameType.MAP.CONSECUTIVE;
    }

    /**
    * @return {Number}
    */
    static get SINGLE () {
        return FrameType.MAP.SINGLE;
    }

    /**
    * Confirms whether the value passed in exists in the Enums of this class
    * @param {Number} value
    * @return {null|Number} - Returns null if the enum value doesn't exist
    */
    static valueForString (value) {
        for (const key in FrameType.MAP) {
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





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionID; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class FunctionID extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpcMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcStruct_js__ = __webpack_require__(7);
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
class RpcMessage extends __WEBPACK_IMPORTED_MODULE_0__RpcStruct_js__["a" /* RpcStruct */] {

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




/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpcType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class RpcType extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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




/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlPsm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__protocol_enums_FrameType_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__ = __webpack_require__(1);
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
 * Parses incoming bytes according to the protocol spec.
 */
class SdlPsm {
    /**
     * @constructor
     */
    constructor () {
        this.reset();
    }

    /**
     * Changes all internal members to default
     */
    reset () {
        this._state = SdlPsm.START_STATE;
        this._version = 0;
        this._encryption = false;
        this._frameType = __WEBPACK_IMPORTED_MODULE_0__protocol_enums_FrameType_js__["a" /* FrameType */].SINGLE;
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
    getState () {
        return this._state;
    }

    /**
     * @return {SdlPacket} - Returns null if not complete
     */

    getFormedPacket () {
        if (this._state === SdlPsm.FINISHED_STATE) {
            return new __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */](this._version, this._encryption, this._frameType, this._serviceType, this._controlFrameInfo, this._sessionID, this._dataLength, this._messageID, this._payload, 0, this._dataLength);
        } else {
            return null;
        }
    }

    /**
     * Handles the next byte in the stream of data.
     * @param {Number} data - Represents a byte
     * @return {Boolean} - True if successful, false otherwise
     */
    handleByte (data) {
        this._state = this._transitionOnInput(data, this._state);
        if (this._state === SdlPsm.ERROR_STATE) {
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
    _transitionOnInput (rawByte, state) {
        const self = this;
        if (state === SdlPsm.START_STATE) { // byte 1
            this._version = (rawByte & SdlPsm.VERSION_MASK) >> 4;
            if (self._version === 0) {
                return SdlPsm.ERROR_STATE;
            }

            self._encryption = (1 === ((rawByte & SdlPsm.ENCRYPTION_MASK) >> 3));
            self._frameType = rawByte & SdlPsm.FRAME_TYPE_MASK;

            if ((self._version < 1 || self._version > 5) && self._frameType !== __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONTROL) {
                return SdlPsm.ERROR_STATE;
            }

            if (self._frameType < __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONTROL || self._frameType > __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONSECUTIVE) {
                return SdlPsm.ERROR_STATE;
            }
            return SdlPsm.SERVICE_TYPE_STATE;
        } else if (state === SdlPsm.SERVICE_TYPE_STATE) { // byte 2
            self._serviceType = (rawByte & 0xFF);

            return SdlPsm.CONTROL_FRAME_INFO_STATE;
        } else if (state === SdlPsm.CONTROL_FRAME_INFO_STATE) { // byte 3
            self._controlFrameInfo = rawByte & 0xFF;

            switch (self._frameType) {
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONTROL:
                break;
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_SINGLE: // Fall through since they are both the same
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_FIRST:
                if (self._controlFrameInfo !== 0x00) {
                    return SdlPsm.ERROR_STATE;
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONSECUTIVE:
                break;

            default:
                return SdlPsm.ERROR_STATE;
            }
            return SdlPsm.SESSION_ID_STATE;
        } else if (state === SdlPsm.SESSION_ID_STATE) { // byte 4
            self._sessionID = (rawByte & 0xFF);
            return SdlPsm.DATA_SIZE_1_STATE;
        } else if (state === SdlPsm.DATA_SIZE_1_STATE) { // byte 5
            self._dataLength += (rawByte & 0xFF) << 24;
            return SdlPsm.DATA_SIZE_2_STATE;
        } else if (state === SdlPsm.DATA_SIZE_2_STATE) { // byte 6
            self._dataLength += (rawByte & 0xFF) << 16; // # 2 bytes x 8 bits
            return SdlPsm.DATA_SIZE_3_STATE;
        } else if (state === SdlPsm.DATA_SIZE_3_STATE) { // byte 7
            self._dataLength += (rawByte & 0xFF) << 8; // #  1 byte x 8 bits
            return SdlPsm.DATA_SIZE_4_STATE;
        } else if (state === SdlPsm.DATA_SIZE_4_STATE) { // byte 8
            self._dataLength += (rawByte & 0xFF); // # 2 bytes x 8 bits

            switch (self._frameType) { // If all is correct we should break out of this switch statement
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_SINGLE:
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONSECUTIVE:
                break;
            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_CONTROL:
                // Ok, well here's some interesting bit of knowledge. Because the start session request is from the phone with no knowledge of version it sends out
                // a v1 packet. THEREFORE there is no message id field. **** Now you know and knowing is half the battle ****
                if (self._version === 1 && self._controlFrameInfo === __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_INFO_START_SERVICE) {
                    if (self._dataLength === 0) {
                        return SdlPsm.FINISHED_STATE; // We are done if we don't have any payload
                    }
                    if (self._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) {
                        self._payload = new Uint8Array(self._dataLength);
                    } else {
                        return SdlPsm.ERROR_STATE;
                    }
                    self._dumpSize = self._dataLength;
                    return SdlPsm.DATA_PUMP_STATE;
                }
                break;

            case __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket_js__["a" /* SdlPacket */].FRAME_TYPE_FIRST:
                if (self._dataLength !== SdlPsm.FIRST_FRAME_DATA_SIZE) {
                    return SdlPsm.ERROR_STATE;
                }
                break;
            default:
                return SdlPsm.ERROR_STATE;
            }

            if (self._version === 1) { // Version 1 packets will not have message id's
                if (self._dataLength === 0) {
                    return SdlPsm.FINISHED_STATE; // We are done if we don't have any payload
                }
                if (self._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) {
                    self._payload = new Uint8Array(self._dataLength);
                } else {
                    return SdlPsm.ERROR_STATE;
                }
                self._dumpSize = self._dataLength;
                return SdlPsm.DATA_PUMP_STATE;
            } else {
                return SdlPsm.MESSAGE_1_STATE;
            }
        } else if (state === SdlPsm.MESSAGE_1_STATE) { //byte 9, bytes 9-12 available in version 2+.
            self._messageID += (rawByte & 0xFF) << 24;
            return SdlPsm.MESSAGE_2_STATE;
        } else if (state === SdlPsm.MESSAGE_2_STATE) { // byte 10
            self._messageID += (rawByte & 0xFF) << 16;
            return SdlPsm.MESSAGE_3_STATE;
        } else if (state === SdlPsm.MESSAGE_3_STATE) { // byte 11
            self._messageID += (rawByte & 0xFF) << 8;
            return SdlPsm.MESSAGE_4_STATE;
        } else if (state === SdlPsm.MESSAGE_4_STATE) { // byte 12
            self._messageID += (rawByte & 0xFF);
            if (self._dataLength === 0) {
                return SdlPsm.FINISHED_STATE;
            }
            self._dumpSize = self._dataLength;
            self._payload = new Uint8Array(self._dataLength);
            return SdlPsm.DATA_PUMP_STATE;
        } else if (state === SdlPsm.DATA_PUMP_STATE) { // byte 13
            if (!this._dataStart) {
                this._dataStart = this.byteCount;
            }
            self._payload[self._dataLength - self._dumpSize] = rawByte;
            self._dumpSize -= 1;            
            // Do we have any more bytes to read in?
            if (self._dumpSize > 0) {
                return SdlPsm.DATA_PUMP_STATE;
            } else if (self._dumpSize === 0) {
                return SdlPsm.FINISHED_STATE;
            } else {
                return SdlPsm.ERROR_STATE;
            }
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
SdlPsm.VERSION_MASK                             = 0xF0; // 4 highest bits
SdlPsm.ENCRYPTION_MASK                          = 0x08; // 4th lowest bit
SdlPsm.FRAME_TYPE_MASK                          = 0x07; // 3 lowest bits



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpcStruct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
            if (tClass instanceof __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */]) {
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
            (tClass instanceof __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] && tClass.valueForString(obj) === null)
            || (obj !== null && obj.constructor !== tClass)
        ) {
            throw `${obj.name} must be of type ${tClass.name}`;
        }
    }

}



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class ServiceType extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BitConverter; });
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



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageFrameAssembler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_FrameType_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SdlPacket_js__ = __webpack_require__(1);
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
 * Callback for finished packet.
 * @callback cb
 * @param {string} error - If there is an error that cannot be recovered from it will be returned.
 * @param {SdlPacket} sdlPacket - Finished sdl packet.
 */

/**
 * Assembles sdl packets which may come in seperate chunks if the data exceeds the
 * max transport unit allowed by sdl core.
 * 
 * @private {cb} _callback - Callback for combined packet.
 * @private {number} _totalConsecutiveFrames - Total consecutive frames expected for a multiframe packet.
 * @private {number} _consecutiveFramesDataLength - Expected data length of finished multiframe packet.
 * @private {number} _consecutiveFramesHandledCount - Running total of consecutive frames received and handled.
 * @private {array} _accumulator Combines incoming bytes from consecutive frames.
 */
class MessageFrameAssembler {
    /**
    * @constructor
    * @param {cb} callback
    */
    constructor (callback) {
        if (typeof callback !== 'function') {
            throw 'Callback can\'t be null for MessageFrameAssembler';
        }

        this._callback = callback;

        this._accumulator = [];
        this._totalConsecutiveFrames = 0;
        this._consecutiveFramesHandledCount = 0;
        this._consecutiveFramesDataLength = 0;
    }

    /**
     * Accepts a single frame or multiframe packet. The callback is used when the packet
     * is completely read. For a single frame this is immediately. For a multi frame packet
     * @param {SdlPacket} sdlPacket - Incoming sdl packet to be read.
    */
    handleFrame (sdlPacket) {
        const frameType = sdlPacket.getFrameType();
        // If the sdl packet is a single frame nothing needs to be assembled and this can be returned immediately.
        if (frameType !== __WEBPACK_IMPORTED_MODULE_0__enums_FrameType_js__["a" /* FrameType */].FIRST && frameType !== __WEBPACK_IMPORTED_MODULE_0__enums_FrameType_js__["a" /* FrameType */].CONSECUTIVE) {
            return this._callback(null, sdlPacket);
        }
        return this._handleMultiFrameMessage(sdlPacket);
    }

    /**
     * Handles the first data frame. Sets the expected frame count and data length.
     * @param {SdlPacket} sdlPacket 
     * @private
     */
    _handleFirstDataFrame (sdlPacket) {
        /** @type {array} Array of uint8 */
        const payload = sdlPacket.getPayload();

        if (payload.length !== 8) {
            throw 'Error handling first frame. Payload is an invalid length should be length 8.';
        }
        for (const byte in payload) {
            if (byte < 0x00 || byte > 0xFF) {
                throw 'Invlaid payload. Must be an array of unit8 bytes.';
            }
        }

        // first 4 8-bit integers contain the data length.
        let dataLength = (payload[0] & 0x0F) << 24; // 8-bit x 3
        dataLength += (payload[1] & 0xFF) << 16; // 8 x 2
        dataLength += (payload[2] & 0xFF) << 8; // 8 x 1
        dataLength += payload[3] & 0xFF; // 8 x 0

        let frameCount = (payload[4] & 0xFF) << 24;
        frameCount += (payload[5] & 0xFF) << 16;
        frameCount += (payload[6] & 0xFF) << 8;
        frameCount += payload[7] & 0xFF;

        this._totalConsecutiveFrames = frameCount;
        this._consecutiveFramesDataLength = dataLength;
    }

    /**
     * First frame should be read in before this is called. Once the last
     * frame is read, callback is used.
     * @param {SdlPacket} sdlPacket 
     */
    _handleConsecutiveFrame (sdlPacket) {
        this._consecutiveFramesHandledCount++;

        const frameType = sdlPacket.getFrameType();
        /**
         * frameSequence nth frame, or 0 for last frame,
         * 8 bits are used to store this info so the count reverts to 1 after 255
         * This doesn't affect reading the packet but it is notable if frame sequence is relied on.
         */
        const frameSequence = sdlPacket.getFrameInfo();

        const payload = sdlPacket.getPayload();

        for (const byte of payload) {
            this._accumulator.push(byte);
        }

        // This is the last frame, finish things up and use callback.
        if (frameSequence === 0) {
            if (this._consecutiveFramesHandledCount !== this._totalConsecutiveFrames) {
                console.warn(`Total frames expected ${this._totalConsecutiveFrames} does not match total frames received ${this._consecutiveFramesHandledCount}`);
            }

            if (this._consecutiveFramesDataLength !== this._accumulator.length) {
                console.warn(`Total data expected ${this._consecutiveFramesDataLength} does not match total data received ${this._accumulator.length}`);
            }

            const finishedSdlPacket = new __WEBPACK_IMPORTED_MODULE_1__SdlPacket_js__["a" /* SdlPacket */](
                sdlPacket.getVersion(),
                sdlPacket.getEncryption(),
                frameType,
                sdlPacket.getServiceType(),
                frameSequence,
                sdlPacket.getSessionID(),
                this._accumulator.length,
                sdlPacket.getMessageID(),
                this._accumulator,
                0, // no offset
                this._accumulator.length // read the entire buffer
            );

            this._callback(null, finishedSdlPacket);
        }
    }

    /**
     * Handle the sdl packet based on its frame type, FIRST or CONSECUTIVE.
     * Callback is used when final packet is read.
     * @param {SdlPacket} sdlPacket - Sdl packet to be read.
     */
    _handleMultiFrameMessage (sdlPacket) {
        const frameType = sdlPacket.getFrameType();
        if (frameType === __WEBPACK_IMPORTED_MODULE_0__enums_FrameType_js__["a" /* FrameType */].FIRST) {
            return this._handleFirstDataFrame(sdlPacket);
        } else { // FrameType.Consecutive
            return this._handleConsecutiveFrame(sdlPacket);
        }
    }
}





/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BinaryFrameHeader; });
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
 * Contains the raw json data and bulk data for an RPC request/response along with the basic header info
 * rpc type, function id, and correlation id.
 * 
 * This class can parse incoming data from sdl core and assemble a binary header to send to sdl core.
 * 
 * 
 *  @private {number} _rpcType - Request = 0, Response = 1, Notification = 2.
 *  @private {number} _functionId - Matches a function Id in the mobile api spec https://github.com/smartdevicelink/rpc_spec/blob/master/MOBILE_API.xml
 *  @private {number} _correlationId - For a request this id is provided and the matching response will have this same id.
 *  @private {number} _jsonSize - Size of json.
 *  @private {Uint8Array} _jsonData - Raw json data. This can be parsed using the JsonRpcMarshaller.
 *  @private {Uint8Array} _bulkData - Bulk data (optional). If something cannot be expressed as a json object it will be in the bulk data (eg PutFile/GetFile has the full file in bulk data.)
 */
class BinaryFrameHeader {
    /**
     * 
     * @param {number} rpcType 
     * @param {number} functionId 
     * @param {number} correlationId 
     * @param {number} jsonSize 
     * @constructor
     */
    constructor (rpcType, functionId, correlationId, jsonSize) {
        this._rpcType = rpcType;
        this._functionId = functionId;
        this._correlationId = correlationId;
        this._jsonSize = jsonSize;
    }

    /**
     * Given a byte array with uint8 values, a BinaryFrameHeader instance is created.
     * @param {array} binaryFrameHeaderData - Byte array containing basic information on the frames type, length, and related ids.
     * @returns {BinaryFrameHeader}
     */
    static fromBinaryHeader (binaryFrameHeaderData) {
        const rpcType = binaryFrameHeaderData[0] >> 4;

        let functionId = (binaryFrameHeaderData[0] & 0x0F) << 24;
        functionId += (binaryFrameHeaderData[1] & 0xFF) << 16;
        functionId += (binaryFrameHeaderData[2] & 0xFF) << 8;
        functionId += binaryFrameHeaderData[3] & 0xFF;

        let correlationId = (binaryFrameHeaderData[4] & 0xFF) << 24;
        correlationId += (binaryFrameHeaderData[5] & 0xFF) << 16;
        correlationId += (binaryFrameHeaderData[6] & 0xFF) << 8;
        correlationId += binaryFrameHeaderData[7] & 0xFF;
                    
        let jsonSize = (binaryFrameHeaderData[8] & 0xFF) << 24;
        jsonSize += (binaryFrameHeaderData[9] & 0xFF) << 16;
        jsonSize += (binaryFrameHeaderData[10] & 0xFF) << 8;
        jsonSize += binaryFrameHeaderData[11] & 0xFF;

        const binaryFrameHeader = new BinaryFrameHeader(rpcType, functionId, correlationId, jsonSize);

        const jsonDataStart = this.HEADER_SIZE;
        const jsonDataEnd = this.HEADER_SIZE + jsonSize;

        binaryFrameHeader.setJsonData(binaryFrameHeaderData.slice(jsonDataStart, jsonDataEnd));

        // any data after the JSON data is the bulk data (eg PutFile contains the file after the main json)
        if (binaryFrameHeaderData.length > jsonDataEnd) {
            const bulkData = binaryFrameHeaderData.slice(jsonDataEnd);
            binaryFrameHeader.setBulkData(bulkData);
        }
        return binaryFrameHeader;
    }


    /**
     * Assembles binary header data. 
     * @returns {array}
     */
    assembleHeaderBytes () {
        const buffer = [];
        const functionId = this._functionId;
        const correlationId = this._correlationId;
        const rpcType = this._rpcType;

        buffer.push((functionId & 0x0F000000) >> 24) + (rpcType << 4);
        buffer.push((functionId & 0x00FF0000) >> 16);
        buffer.push((functionId & 0x0000FF00) >> 8);
        buffer.push(functionId & 0x000000FF);

        buffer.push((correlationId & 0xFF000000) >> 24);
        buffer.push((correlationId & 0x00FF0000) >> 16);
        buffer.push((correlationId & 0x0000FF00) >> 8);
        buffer.push(correlationId & 0x000000FF);

        const jsonSize = this._jsonSize;
        buffer.push((jsonSize & 0xFF000000) >> 24);
        buffer.push((jsonSize & 0x00FF0000) >> 16);
        buffer.push((jsonSize & 0x0000FF00) >> 8);
        buffer.push(jsonSize & 0x000000FF);

        return buffer;
    }

    /**
     * Sets the rpc type of the binary header.
     * @param {number} type 
     */
    setRpcType (type) {
        this._rpcType = type;
    }

    /**
     * Gets the rpc type of the binary header
     * @returns {number}
     */
    getRpcType () {
        return this._rpcType;
    }

    /**
     * Sets the function id of the binary header.
     * @param {number} id 
     */
    setFunctionId (id) {
        this._functionId = id;
    }

    /**
     * Gets the function Id of the binary header.
     * @returns {number}
     */
    getFunctionId () {
        return this._functionId;
    }

    /**
     * Sets the correlation Id of the binary header.
     * @param {number} id 
     */
    setCorrelationId (id) {
        this._correlationId = id;
    }

    /**
     * Gets the correlation Id of the binary header.
     */
    getCorrelationId () {
        return this._correlationId;
    }

    /**
     * Sets the json size of the binary header.
     * @param {number} size 
     */
    setJsonSize (size) {
        this._jsonSize = size;
    }

    /**
     * Gest the json size of the binary header.
     * @returns {number}
     */
    getJsonSize () {
        return this._jsonSize;
    }

    /**
     * Returns the json data as a byte array.
     * @returns {array} - Byte array of json data.
     */
    getJsonData () {
        return this._jsonData;
    }

    /**
     * Sets the json data of the binary header.
     * @param {array} data - Byte array of json data
     */
    setJsonData (data) {
        this._jsonData = data;
    }

    /**
     * Sets the bulk data of the binary header.
     * Supported by protcol 2 and up.
     * @param {array} data - Byte array of bulk data 
     */
    setBulkData (data) {
        this._bulkData = data;
    }

    /**
     * Gets the bulk data of the binary header.
     * Supported by protcol 2 and up.
     * @returns {array} - Byte array of bulk data
     */
    getBulkData () {
        return this._bulkData;
    }
}

BinaryFrameHeader.HEADER_SIZE = 12;






/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonRpcMarshaller; });
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
        //Returns Uint8Array 
        let jsonBytes = null;
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



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlProtocolListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rpc_RpcMessage_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SdlPacket_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_ServiceType_js__ = __webpack_require__(8);
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



/***/ }),
/* 14 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bson; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__third_party_bson_common_js__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__third_party_bson_common_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__third_party_bson_common_js__);
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



const bson = __WEBPACK_IMPORTED_MODULE_0__third_party_bson_common_js___default.a.bson;

class Bson {
    /**
     * Serialize a Javascript object.
     * 
     * @param object The Javascript object to serialize.
     * @param options Serialize options.
     * @return The Buffer object containing the serialized object.
     */
    static serialize (object, options) {
        return bson.serialize(object, options);
    }

    /**
     * Deserialize data as BSON.
     * 
     * @param buffer The buffer containing the serialized set of BSON documents.
     * @param options Deserialize options.
     * @returns The deserialized Javascript Object.
     */
    static deserialize (object, options) {
        return bson.deserialize(object, options);
    }
}



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rpc_RpcMessage__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rpc_enums_FunctionID__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_enums_FrameType__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_BitConverter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__protocol_BinaryFrameHeader__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transport_SdlPsm__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_JsonRpcMarshaller_js__ = __webpack_require__(12);
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



// import * as sdl_javascript_suite from 'sdl_javascript_suite';









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

        this._bitConverter = new __WEBPACK_IMPORTED_MODULE_4__util_BitConverter__["a" /* BitConverter */]();

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

        let sdlPacket = new __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket__["a" /* SdlPacket */](version, encryption, frameType, serviceType, frameInfo, sessionId);
        if (protocolMajorVersion > 4) {
            let jsonObj = {protocolVersion};
            const BSON = __webpack_require__(17);
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
        let serviceType = __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket__["a" /* SdlPacket */].SERVICE_TYPE_CONTROL; //RPC end all
        let frameInfo = __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket__["a" /* SdlPacket */].FRAME_INFO_HEART_BEAT_ACK;
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
            const BSON = __webpack_require__(17);
            const buffer = BSON.serialize(jsonObj);
            payload = buffer;
        }
        else {
            payload = new Uint8Array(__WEBPACK_IMPORTED_MODULE_4__util_BitConverter__["a" /* BitConverter */].intToByteArray(hashId));

        }



        // let hashCheck = BitConverter.arrayBufferToInt32(new ArrayBuffer(payload));


        console.log(`constructEndAllServices`,{version,encryptionBit,frameType,serviceType,frameInfo,sessionId,messageId,payload,hashId,hashCheck})
        //does version actually matter here?
        let bytes = this._constructPacketStatic({version,encryptionBit,frameType,serviceType,frameInfo,sessionId,messageId,payload});

        let sdlPsm = new __WEBPACK_IMPORTED_MODULE_6__transport_SdlPsm__["a" /* SdlPsm */]();

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
        let sdlPacket = new __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket__["a" /* SdlPacket */](version, encryption, frameType, serviceType, frameInfo, sessionId, dataSize, messageId, payload, offset, bytesToWrite);

        let result = sdlPacket.constructPacket();
        let verify = this.verifyRequests;

        if (verify) {
            let sdl = new __WEBPACK_IMPORTED_MODULE_6__transport_SdlPsm__["a" /* SdlPsm */]();
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

        let json_buffer = __WEBPACK_IMPORTED_MODULE_7__util_JsonRpcMarshaller_js__["a" /* JsonRpcMarshaller */].marshall(message);
        let json_size = json_buffer.length;

        //TODO move this to BinaryFrameHeader.
        let bfh = new __WEBPACK_IMPORTED_MODULE_5__protocol_BinaryFrameHeader__["a" /* BinaryFrameHeader */](rpcType, functionId, correlationId);

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
                                      frameType: __WEBPACK_IMPORTED_MODULE_3__protocol_enums_FrameType__["a" /* FrameType */].CONSECUTIVE,
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
        let frameType = __WEBPACK_IMPORTED_MODULE_3__protocol_enums_FrameType__["a" /* FrameType */].SINGLE;

        let serviceType = __WEBPACK_IMPORTED_MODULE_1__protocol_SdlPacket__["a" /* SdlPacket */].SERVICE_TYPE_RPC;
        let rpcType =  this._message.getRPCType();
        let sessionId = this._sessionId;
        let messageId = this._messageId;

        let functionName = this._message.getFunctionName();
        let functionId = __WEBPACK_IMPORTED_MODULE_2__rpc_enums_FunctionID__["a" /* FunctionID */].getIdFromName(functionName);

        if (!functionId)
        {
            console.log(`failed to find function ${functionName}`);
            throw new Error(`failed to find function ${functionName}`);
        }

        let mainBuffer = this._buildRPCMainBuffer(this._message.getParameters(), functionId, rpcType, this._message.getCorrelationId(), this._message.getBulkData());

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
                                      frameType: __WEBPACK_IMPORTED_MODULE_3__protocol_enums_FrameType__["a" /* FrameType */].FIRST,
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




/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT32_MAX", function() { return bson_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT32_MIN", function() { return bson_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT64_MAX", function() { return bson_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_INT64_MIN", function() { return bson_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JS_INT_MAX", function() { return bson_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JS_INT_MIN", function() { return bson_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_NUMBER", function() { return bson_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_STRING", function() { return bson_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_OBJECT", function() { return bson_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_ARRAY", function() { return bson_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_BINARY", function() { return bson_11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_UNDEFINED", function() { return bson_12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_OID", function() { return bson_13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_BOOLEAN", function() { return bson_14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_DATE", function() { return bson_15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_NULL", function() { return bson_16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_REGEXP", function() { return bson_17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_DBPOINTER", function() { return bson_18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_CODE", function() { return bson_19; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_SYMBOL", function() { return bson_20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_CODE_W_SCOPE", function() { return bson_21; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_INT", function() { return bson_22; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_TIMESTAMP", function() { return bson_23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_LONG", function() { return bson_24; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_DECIMAL128", function() { return bson_25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_MIN_KEY", function() { return bson_26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_DATA_MAX_KEY", function() { return bson_27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_DEFAULT", function() { return bson_28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_FUNCTION", function() { return bson_29; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_BYTE_ARRAY", function() { return bson_30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_UUID", function() { return bson_31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_MD5", function() { return bson_32; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSON_BINARY_SUBTYPE_USER_DEFINED", function() { return bson_33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return bson_34; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSONSymbol", function() { return bson_35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBRef", function() { return bson_36; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binary", function() { return bson_37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectId", function() { return bson_38; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Long", function() { return bson_39; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timestamp", function() { return bson_40; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Double", function() { return bson_41; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Int32", function() { return bson_42; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinKey", function() { return bson_43; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxKey", function() { return bson_44; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BSONRegExp", function() { return bson_45; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decimal128", function() { return bson_46; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serialize", function() { return bson_47; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeWithBufferAndIndex", function() { return bson_48; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserialize", function() { return bson_49; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateObjectSize", function() { return bson_50; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deserializeStream", function() { return bson_51; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInternalBufferSize", function() { return bson_52; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectID", function() { return bson_53; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EJSON", function() { return bson_54; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_long__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_long___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_long__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buffer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_buffer__);



var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var map = createCommonjsModule(function (module) {

  if (typeof commonjsGlobal.Map !== 'undefined') {
    module.exports = commonjsGlobal.Map;
    module.exports.Map = commonjsGlobal.Map;
  } else {
    // We will return a polyfill
    var Map = function Map(array) {
      this._keys = [];
      this._values = {};

      for (var i = 0; i < array.length; i++) {
        if (array[i] == null) continue; // skip null and undefined

        var entry = array[i];
        var key = entry[0];
        var value = entry[1]; // Add the key to the list of keys in order

        this._keys.push(key); // Add the key and value to the values dictionary with a point
        // to the location in the ordered keys list


        this._values[key] = {
          v: value,
          i: this._keys.length - 1
        };
      }
    };

    Map.prototype.clear = function () {
      this._keys = [];
      this._values = {};
    };

    Map.prototype.delete = function (key) {
      var value = this._values[key];
      if (value == null) return false; // Delete entry

      delete this._values[key]; // Remove the key from the ordered keys list

      this._keys.splice(value.i, 1);

      return true;
    };

    Map.prototype.entries = function () {
      var self = this;
      var index = 0;
      return {
        next: function next() {
          var key = self._keys[index++];
          return {
            value: key !== undefined ? [key, self._values[key].v] : undefined,
            done: key !== undefined ? false : true
          };
        }
      };
    };

    Map.prototype.forEach = function (callback, self) {
      self = self || this;

      for (var i = 0; i < this._keys.length; i++) {
        var key = this._keys[i]; // Call the forEach callback

        callback.call(self, this._values[key].v, key, self);
      }
    };

    Map.prototype.get = function (key) {
      return this._values[key] ? this._values[key].v : undefined;
    };

    Map.prototype.has = function (key) {
      return this._values[key] != null;
    };

    Map.prototype.keys = function () {
      var self = this;
      var index = 0;
      return {
        next: function next() {
          var key = self._keys[index++];
          return {
            value: key !== undefined ? key : undefined,
            done: key !== undefined ? false : true
          };
        }
      };
    };

    Map.prototype.set = function (key, value) {
      if (this._values[key]) {
        this._values[key].v = value;
        return this;
      } // Add the key to the list of keys in order


      this._keys.push(key); // Add the key and value to the values dictionary with a point
      // to the location in the ordered keys list


      this._values[key] = {
        v: value,
        i: this._keys.length - 1
      };
      return this;
    };

    Map.prototype.values = function () {
      var self = this;
      var index = 0;
      return {
        next: function next() {
          var key = self._keys[index++];
          return {
            value: key !== undefined ? self._values[key].v : undefined,
            done: key !== undefined ? false : true
          };
        }
      };
    }; // Last ismaster


    Object.defineProperty(Map.prototype, 'size', {
      enumerable: true,
      get: function get() {
        return this._keys.length;
      }
    });
    module.exports = Map;
  }
});
var map_1 = map.Map;

/**
 * @ignore
 */


__WEBPACK_IMPORTED_MODULE_0_long___default.a.prototype.toExtendedJSON = function (options) {
  if (options && options.relaxed) return this.toNumber();
  return {
    $numberLong: this.toString()
  };
};
/**
 * @ignore
 */


__WEBPACK_IMPORTED_MODULE_0_long___default.a.fromExtendedJSON = function (doc, options) {
  var result = __WEBPACK_IMPORTED_MODULE_0_long___default.a.fromString(doc.$numberLong);
  return options && options.relaxed ? result.toNumber() : result;
};

Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_long___default.a.prototype, '_bsontype', {
  value: 'Long'
});
var long_1 = __WEBPACK_IMPORTED_MODULE_0_long___default.a;

/**
 * A class representation of the BSON Double type.
 */

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Double =
/*#__PURE__*/
function () {
  /**
   * Create a Double type
   *
   * @param {number} value the number we want to represent as a double.
   * @return {Double}
   */
  function Double(value) {
    _classCallCheck(this, Double);

    this.value = value;
  }
  /**
   * Access the number value.
   *
   * @method
   * @return {number} returns the wrapped double number.
   */


  _createClass(Double, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed && isFinite(this.value)) return this.value;
      return {
        $numberDouble: this.value.toString()
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseFloat(doc.$numberDouble) : new Double(parseFloat(doc.$numberDouble));
    }
  }]);

  return Double;
}();

Object.defineProperty(Double.prototype, '_bsontype', {
  value: 'Double'
});
var double_1 = Double;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/**
 * @class
 * @param {number} low  the low (signed) 32 bits of the Timestamp.
 * @param {number} high the high (signed) 32 bits of the Timestamp.
 * @return {Timestamp}
 */


var Timestamp =
/*#__PURE__*/
function (_Long) {
  _inherits(Timestamp, _Long);

  function Timestamp(low, high) {
    var _this;

    _classCallCheck$1(this, Timestamp);

    if (long_1.isLong(low)) {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low.low, low.high));
    } else {
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low, high));
    }

    return _possibleConstructorReturn(_this);
  }
  /**
   * Return the JSON value.
   *
   * @method
   * @return {String} the JSON representation.
   */


  _createClass$1(Timestamp, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        $timestamp: this.toString()
      };
    }
    /**
     * Returns a Timestamp represented by the given (32-bit) integer value.
     *
     * @method
     * @param {number} value the 32-bit integer in question.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "toExtendedJSON",

    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      return {
        $timestamp: {
          t: this.high,
          i: this.low
        }
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromInt",
    value: function fromInt(value) {
      return new Timestamp(long_1.fromInt(value));
    }
    /**
     * Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.
     *
     * @method
     * @param {number} value the number in question.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "fromNumber",
    value: function fromNumber(value) {
      return new Timestamp(long_1.fromNumber(value));
    }
    /**
     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
     *
     * @method
     * @param {number} lowBits the low 32-bits.
     * @param {number} highBits the high 32-bits.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "fromBits",
    value: function fromBits(lowBits, highBits) {
      return new Timestamp(lowBits, highBits);
    }
    /**
     * Returns a Timestamp from the given string, optionally using the given radix.
     *
     * @method
     * @param {String} str the textual representation of the Timestamp.
     * @param {number} [opt_radix] the radix in which the text is written.
     * @return {Timestamp} the timestamp.
     */

  }, {
    key: "fromString",
    value: function fromString(str, opt_radix) {
      return new Timestamp(long_1.fromString(str, opt_radix));
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Timestamp(doc.$timestamp.i, doc.$timestamp.t);
    }
  }]);

  return Timestamp;
}(long_1);

Object.defineProperty(Timestamp.prototype, '_bsontype', {
  value: 'Timestamp'
});
var timestamp = Timestamp;

var require$$0 = {};

/* global window */

/**
 * Normalizes our expected stringified form of a function across versions of node
 * @param {Function} fn The function to stringify
 */


function normalizedFunctionString(fn) {
  return fn.toString().replace('function(', 'function (');
}

function insecureRandomBytes(size) {
  var result = new Uint8Array(size);

  for (var i = 0; i < size; ++i) {
    result[i] = Math.floor(Math.random() * 256);
  }

  return result;
}

var randomBytes = insecureRandomBytes;

if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
  randomBytes = function randomBytes(size) {
    return window.crypto.getRandomValues(new Uint8Array(size));
  };
} else {
  try {
    randomBytes = require$$0.randomBytes;
  } catch (e) {} // keep the fallback
  // NOTE: in transpiled cases the above require might return null/undefined


  if (randomBytes == null) {
    randomBytes = insecureRandomBytes;
  }
}

var utils = {
  normalizedFunctionString: normalizedFunctionString,
  randomBytes: randomBytes
};

// shim for using process in browser
// based off https://github.com/defunctzombie/node-process/blob/master/browser.js
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;

if (typeof global.setTimeout === 'function') {
  cachedSetTimeout = setTimeout;
}

if (typeof global.clearTimeout === 'function') {
  cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

function nextTick(fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
} // v8 likes predictible objects

function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

var title = 'browser';
var platform = 'browser';
var browser = true;
var env = {};
var argv = [];
var version = ''; // empty string to avoid regexp issues

var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;
function binding(name) {
  throw new Error('process.binding is not supported');
}
function cwd() {
  return '/';
}
function chdir(dir) {
  throw new Error('process.chdir is not supported');
}
function umask() {
  return 0;
} // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

var performance = global.performance || {};

var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
  return new Date().getTime();
}; // generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime


function hrtime(previousTimestamp) {
  var clocktime = performanceNow.call(performance) * 1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor(clocktime % 1 * 1e9);

  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];

    if (nanoseconds < 0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }

  return [seconds, nanoseconds];
}
var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}
var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: env,
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

var inherits;

if (typeof Object.create === 'function') {
  inherits = function inherits(ctor, superCtor) {
    // implementation from standard node.js 'util' module
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  inherits = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;

    var TempCtor = function TempCtor() {};

    TempCtor.prototype = superCtor.prototype;
    ctor.prototype = new TempCtor();
    ctor.prototype.constructor = ctor;
  };
}

var inherits$1 = inherits;

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
var formatRegExp = /%[sdj%]/g;
function format(f) {
  if (!isString(f)) {
    var objects = [];

    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }

    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;

    switch (x) {
      case '%s':
        return String(args[i++]);

      case '%d':
        return Number(args[i++]);

      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }

      default:
        return x;
    }
  });

  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }

  return str;
}
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.

function deprecate(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function () {
      return deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;

  function deprecated() {
    if (!warned) {
      {
        console.error(msg);
      }

      warned = true;
    }

    return fn.apply(this, arguments);
  }

  return deprecated;
}
var debugs = {};
var debugEnviron;
function debuglog(set) {
  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();

  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = 0;

      debugs[set] = function () {
        var msg = format.apply(null, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }

  return debugs[set];
}
/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */

/* legacy: obj, showHidden, depth, colors*/

function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  }; // legacy...

  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];

  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    _extend(ctx, opts);
  } // set default options


  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
} // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
}; // Don't use 'blue' not visible on cmd.exe

inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};

function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}

function stylizeNoColor(str, styleType) {
  return str;
}

function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);

    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }

    return ret;
  } // Primitive types cannot have properties


  var primitive = formatPrimitive(ctx, value);

  if (primitive) {
    return primitive;
  } // Look up the keys of the object.


  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  } // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  } // Some type of object without properties can be shortcutted.


  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }

    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }

    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }

    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '',
      array = false,
      braces = ['{', '}']; // Make Array say that they are Array

  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  } // Make functions say that they are functions


  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  } // Make RegExps say that they are RegExps


  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  } // Make dates with properties first say the date


  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  } // Make error with message first say the error


  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);
  var output;

  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }

  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

  if (isNull(value)) return ctx.stylize('null', 'null');
}

function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];

  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }

  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || {
    value: value[key]
  };

  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }

  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }

  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }

      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }

  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }

    name = JSON.stringify('' + key);

    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
  var length = output.reduce(function (prev, cur) {
    if (cur.indexOf('\n') >= 0) ;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
} // NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.


function isArray(ar) {
  return Array.isArray(ar);
}
function isBoolean(arg) {
  return typeof arg === 'boolean';
}
function isNull(arg) {
  return arg === null;
}
function isNullOrUndefined(arg) {
  return arg == null;
}
function isNumber(arg) {
  return typeof arg === 'number';
}
function isString(arg) {
  return typeof arg === 'string';
}
function isSymbol(arg) {
  return _typeof$1(arg) === 'symbol';
}
function isUndefined(arg) {
  return arg === void 0;
}
function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
function isObject(arg) {
  return _typeof$1(arg) === 'object' && arg !== null;
}
function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
function isFunction(arg) {
  return typeof arg === 'function';
}
function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof$1(arg) === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
function isBuffer(maybeBuf) {
  return Buffer.isBuffer(maybeBuf);
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

function timestamp$1() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
} // log is just a thin wrapper to console.log that prepends a timestamp


function log() {
  console.log('%s - %s', timestamp$1(), format.apply(null, arguments));
}
function _extend(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;

  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }

  return origin;
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var util = {
  inherits: inherits$1,
  _extend: _extend,
  log: log,
  isBuffer: isBuffer,
  isPrimitive: isPrimitive,
  isFunction: isFunction,
  isError: isError,
  isDate: isDate,
  isObject: isObject,
  isRegExp: isRegExp,
  isUndefined: isUndefined,
  isSymbol: isSymbol,
  isString: isString,
  isNumber: isNumber,
  isNullOrUndefined: isNullOrUndefined,
  isNull: isNull,
  isBoolean: isBoolean,
  isArray: isArray,
  inspect: inspect,
  deprecate: deprecate,
  format: format,
  debuglog: debuglog
};

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

var Buffer$1 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
var randomBytes$1 = utils.randomBytes;
var deprecate$1 = util.deprecate; // constants

var PROCESS_UNIQUE = randomBytes$1(5); // Regular expression that checks for hex value

var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
var hasBufferType = false; // Check if buffer exists

try {
  if (Buffer$1 && Buffer$1.from) hasBufferType = true;
} catch (err) {
  hasBufferType = false;
} // Precomputed hex table enables speedy hex string conversion


var hexTable = [];

for (var _i = 0; _i < 256; _i++) {
  hexTable[_i] = (_i <= 15 ? '0' : '') + _i.toString(16);
} // Lookup tables


var decodeLookup = [];
var i = 0;

while (i < 10) {
  decodeLookup[0x30 + i] = i++;
}

while (i < 16) {
  decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
}

var _Buffer = Buffer$1;

function convertToHex(bytes) {
  return bytes.toString('hex');
}

function makeObjectIdError(invalidString, index) {
  var invalidCharacter = invalidString[index];
  return new TypeError("ObjectId string \"".concat(invalidString, "\" contains invalid character \"").concat(invalidCharacter, "\" with character code (").concat(invalidString.charCodeAt(index), "). All character codes for a non-hex string must be less than 256."));
}
/**
 * A class representation of the BSON ObjectId type.
 */


var ObjectId =
/*#__PURE__*/
function () {
  /**
   * Create an ObjectId type
   *
   * @param {(string|Buffer|number)} id Can be a 24 byte hex string, 12 byte binary Buffer, or a Number.
   * @property {number} generationTime The generation time of this ObjectId instance
   * @return {ObjectId} instance of ObjectId.
   */
  function ObjectId(id) {
    _classCallCheck$2(this, ObjectId);

    // Duck-typing to support ObjectId from different npm packages
    if (id instanceof ObjectId) return id; // The most common usecase (blank id, new objectId instance)

    if (id == null || typeof id === 'number') {
      // Generate a new id
      this.id = ObjectId.generate(id); // If we are caching the hex string

      if (ObjectId.cacheHexString) this.__id = this.toString('hex'); // Return the object

      return;
    } // Check if the passed in id is valid


    var valid = ObjectId.isValid(id); // Throw an error if it's not a valid setup

    if (!valid && id != null) {
      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    } else if (valid && typeof id === 'string' && id.length === 24 && hasBufferType) {
      return new ObjectId(Buffer$1.from(id, 'hex'));
    } else if (valid && typeof id === 'string' && id.length === 24) {
      return ObjectId.createFromHexString(id);
    } else if (id != null && id.length === 12) {
      // assume 12 byte string
      this.id = id;
    } else if (id != null && id.toHexString) {
      // Duck-typing to support ObjectId from different npm packages
      return ObjectId.createFromHexString(id.toHexString());
    } else {
      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    }

    if (ObjectId.cacheHexString) this.__id = this.toString('hex');
  }
  /**
   * Return the ObjectId id as a 24 byte hex string representation
   *
   * @method
   * @return {string} return the 24 byte hex string representation.
   */


  _createClass$2(ObjectId, [{
    key: "toHexString",
    value: function toHexString() {
      if (ObjectId.cacheHexString && this.__id) return this.__id;
      var hexString = '';

      if (!this.id || !this.id.length) {
        throw new TypeError('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
      }

      if (this.id instanceof _Buffer) {
        hexString = convertToHex(this.id);
        if (ObjectId.cacheHexString) this.__id = hexString;
        return hexString;
      }

      for (var _i2 = 0; _i2 < this.id.length; _i2++) {
        var hexChar = hexTable[this.id.charCodeAt(_i2)];

        if (typeof hexChar !== 'string') {
          throw makeObjectIdError(this.id, _i2);
        }

        hexString += hexChar;
      }

      if (ObjectId.cacheHexString) this.__id = hexString;
      return hexString;
    }
    /**
     * Update the ObjectId index used in generating new ObjectId's on the driver
     *
     * @method
     * @return {number} returns next index value.
     * @ignore
     */

  }, {
    key: "toString",

    /**
     * Converts the id into a 24 byte hex string for printing
     *
     * @param {String} format The Buffer toString format parameter.
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */
    value: function toString(format) {
      // Is the id a buffer then use the buffer toString method to return the format
      if (this.id && this.id.copy) {
        return this.id.toString(typeof format === 'string' ? format : 'hex');
      }

      return this.toHexString();
    }
    /**
     * Converts to its JSON representation.
     *
     * @return {String} return the 24 byte hex string representation.
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toHexString();
    }
    /**
     * Compares the equality of this ObjectId with `otherID`.
     *
     * @method
     * @param {object} otherId ObjectId instance to compare against.
     * @return {boolean} the result of comparing two ObjectId's
     */

  }, {
    key: "equals",
    value: function equals(otherId) {
      if (otherId instanceof ObjectId) {
        return this.toString() === otherId.toString();
      }

      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12 && this.id instanceof _Buffer) {
        return otherId === this.id.toString('binary');
      }

      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 24) {
        return otherId.toLowerCase() === this.toHexString();
      }

      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12) {
        return otherId === this.id;
      }

      if (otherId != null && (otherId instanceof ObjectId || otherId.toHexString)) {
        return otherId.toHexString() === this.toHexString();
      }

      return false;
    }
    /**
     * Returns the generation date (accurate up to the second) that this ID was generated.
     *
     * @method
     * @return {Date} the generation date
     */

  }, {
    key: "getTimestamp",
    value: function getTimestamp() {
      var timestamp = new Date();
      var time = this.id.readUInt32BE(0);
      timestamp.setTime(Math.floor(time) * 1000);
      return timestamp;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",

    /**
     * @ignore
     */
    value: function toExtendedJSON() {
      if (this.toHexString) return {
        $oid: this.toHexString()
      };
      return {
        $oid: this.toString('hex')
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "getInc",
    value: function getInc() {
      return ObjectId.index = (ObjectId.index + 1) % 0xffffff;
    }
    /**
     * Generate a 12 byte id buffer used in ObjectId's
     *
     * @method
     * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
     * @return {Buffer} return the 12 byte id buffer string.
     */

  }, {
    key: "generate",
    value: function generate(time) {
      if ('number' !== typeof time) {
        time = ~~(Date.now() / 1000);
      }

      var inc = ObjectId.getInc();
      var buffer$$1 = Buffer$1.alloc(12); // 4-byte timestamp

      buffer$$1[3] = time & 0xff;
      buffer$$1[2] = time >> 8 & 0xff;
      buffer$$1[1] = time >> 16 & 0xff;
      buffer$$1[0] = time >> 24 & 0xff; // 5-byte process unique

      buffer$$1[4] = PROCESS_UNIQUE[0];
      buffer$$1[5] = PROCESS_UNIQUE[1];
      buffer$$1[6] = PROCESS_UNIQUE[2];
      buffer$$1[7] = PROCESS_UNIQUE[3];
      buffer$$1[8] = PROCESS_UNIQUE[4]; // 3-byte counter

      buffer$$1[11] = inc & 0xff;
      buffer$$1[10] = inc >> 8 & 0xff;
      buffer$$1[9] = inc >> 16 & 0xff;
      return buffer$$1;
    }
  }, {
    key: "createPk",
    value: function createPk() {
      return new ObjectId();
    }
    /**
     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
     *
     * @method
     * @param {number} time an integer number representing a number of seconds.
     * @return {ObjectId} return the created ObjectId
     */

  }, {
    key: "createFromTime",
    value: function createFromTime(time) {
      var buffer$$1 = Buffer$1.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Encode time into first 4 bytes

      buffer$$1[3] = time & 0xff;
      buffer$$1[2] = time >> 8 & 0xff;
      buffer$$1[1] = time >> 16 & 0xff;
      buffer$$1[0] = time >> 24 & 0xff; // Return the new objectId

      return new ObjectId(buffer$$1);
    }
    /**
     * Creates an ObjectId from a hex string representation of an ObjectId.
     *
     * @method
     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
     * @return {ObjectId} return the created ObjectId
     */

  }, {
    key: "createFromHexString",
    value: function createFromHexString(string) {
      // Throw an error if it's not a valid setup
      if (typeof string === 'undefined' || string != null && string.length !== 24) {
        throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
      } // Use Buffer.from method if available


      if (hasBufferType) return new ObjectId(Buffer$1.from(string, 'hex')); // Calculate lengths

      var array = new _Buffer(12);
      var n = 0;
      var i = 0;

      while (i < 24) {
        array[n++] = decodeLookup[string.charCodeAt(i++)] << 4 | decodeLookup[string.charCodeAt(i++)];
      }

      return new ObjectId(array);
    }
    /**
     * Checks if a value is a valid bson ObjectId
     *
     * @method
     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
     */

  }, {
    key: "isValid",
    value: function isValid(id) {
      if (id == null) return false;

      if (typeof id === 'number') {
        return true;
      }

      if (typeof id === 'string') {
        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
      }

      if (id instanceof ObjectId) {
        return true;
      }

      if (id instanceof _Buffer && id.length === 12) {
        return true;
      } // Duck-Typing detection of ObjectId like objects


      if (id.toHexString) {
        return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
      }

      return false;
    }
  }, {
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new ObjectId(doc.$oid);
    }
  }]);

  return ObjectId;
}(); // Deprecated methods


ObjectId.get_inc = deprecate$1(function () {
  return ObjectId.getInc();
}, 'Please use the static `ObjectId.getInc()` instead');
ObjectId.prototype.get_inc = deprecate$1(function () {
  return ObjectId.getInc();
}, 'Please use the static `ObjectId.getInc()` instead');
ObjectId.prototype.getInc = deprecate$1(function () {
  return ObjectId.getInc();
}, 'Please use the static `ObjectId.getInc()` instead');
ObjectId.prototype.generate = deprecate$1(function (time) {
  return ObjectId.generate(time);
}, 'Please use the static `ObjectId.generate(time)` instead');
/**
 * @ignore
 */

Object.defineProperty(ObjectId.prototype, 'generationTime', {
  enumerable: true,
  get: function get() {
    return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
  },
  set: function set(value) {
    // Encode time into first 4 bytes
    this.id[3] = value & 0xff;
    this.id[2] = value >> 8 & 0xff;
    this.id[1] = value >> 16 & 0xff;
    this.id[0] = value >> 24 & 0xff;
  }
});
/**
 * Converts to a string representation of this Id.
 *
 * @return {String} return the 24 byte hex string representation.
 * @ignore
 */

ObjectId.prototype[util.inspect.custom || 'inspect'] = ObjectId.prototype.toString;
/**
 * @ignore
 */

ObjectId.index = ~~(Math.random() * 0xffffff); // In 4.0.0 and 4.0.1, this property name was changed to ObjectId to match the class name.
// This caused interoperability problems with previous versions of the library, so in
// later builds we changed it back to ObjectID (capital D) to match legacy implementations.

Object.defineProperty(ObjectId.prototype, '_bsontype', {
  value: 'ObjectID'
});
var objectid = ObjectId;

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

function alphabetize(str) {
  return str.split('').sort().join('');
}
/**
 * A class representation of the BSON RegExp type.
 */


var BSONRegExp =
/*#__PURE__*/
function () {
  /**
   * Create a RegExp type
   *
   * @param {string} pattern The regular expression pattern to match
   * @param {string} options The regular expression options
   */
  function BSONRegExp(pattern, options) {
    _classCallCheck$3(this, BSONRegExp);

    // Execute
    this.pattern = pattern || '';
    this.options = options ? alphabetize(options) : ''; // Validate options

    for (var i = 0; i < this.options.length; i++) {
      if (!(this.options[i] === 'i' || this.options[i] === 'm' || this.options[i] === 'x' || this.options[i] === 'l' || this.options[i] === 's' || this.options[i] === 'u')) {
        throw new Error("The regular expression option [".concat(this.options[i], "] is not supported"));
      }
    }
  }
  /**
   * @ignore
   */


  _createClass$3(BSONRegExp, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $regularExpression: {
          pattern: this.pattern,
          options: this.options
        }
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONRegExp(doc.$regularExpression.pattern, doc.$regularExpression.options.split('').sort().join(''));
    }
  }]);

  return BSONRegExp;
}();

Object.defineProperty(BSONRegExp.prototype, '_bsontype', {
  value: 'BSONRegExp'
});
var regexp = BSONRegExp;

/**
 * A class representation of the BSON Symbol type.
 */

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

var BSONSymbol =
/*#__PURE__*/
function () {
  /**
   * Create a Symbol type
   *
   * @param {string} value the string representing the symbol.
   */
  function BSONSymbol(value) {
    _classCallCheck$4(this, BSONSymbol);

    this.value = value;
  }
  /**
   * Access the wrapped string value.
   *
   * @method
   * @return {String} returns the wrapped string.
   */


  _createClass$4(BSONSymbol, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "inspect",
    value: function inspect() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $symbol: this.value
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new BSONSymbol(doc.$symbol);
    }
  }]);

  return BSONSymbol;
}();

Object.defineProperty(BSONSymbol.prototype, '_bsontype', {
  value: 'Symbol'
});
var symbol = BSONSymbol;

/**
 * A class representation of a BSON Int32 type.
 */

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

var Int32 =
/*#__PURE__*/
function () {
  /**
   * Create an Int32 type
   *
   * @param {number} value the number we want to represent as an int32.
   * @return {Int32}
   */
  function Int32(value) {
    _classCallCheck$5(this, Int32);

    this.value = value;
  }
  /**
   * Access the number value.
   *
   * @method
   * @return {number} returns the wrapped int32 number.
   */


  _createClass$5(Int32, [{
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.value;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON(options) {
      if (options && options.relaxed) return this.value;
      return {
        $numberInt: this.value.toString()
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc, options) {
      return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
    }
  }]);

  return Int32;
}();

Object.defineProperty(Int32.prototype, '_bsontype', {
  value: 'Int32'
});
var int_32 = Int32;

/**
 * A class representation of the BSON Code type.
 */

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

var Code =
/*#__PURE__*/
function () {
  /**
   * Create a Code type
   *
   * @param {(string|function)} code a string or function.
   * @param {Object} [scope] an optional scope for the function.
   * @return {Code}
   */
  function Code(code, scope) {
    _classCallCheck$6(this, Code);

    this.code = code;
    this.scope = scope;
  }
  /**
   * @ignore
   */


  _createClass$6(Code, [{
    key: "toJSON",
    value: function toJSON() {
      return {
        scope: this.scope,
        code: this.code
      };
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      if (this.scope) {
        return {
          $code: this.code,
          $scope: this.scope
        };
      }

      return {
        $code: this.code
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      return new Code(doc.$code, doc.$scope);
    }
  }]);

  return Code;
}();

Object.defineProperty(Code.prototype, '_bsontype', {
  value: 'Code'
});
var code = Code;

var Buffer$2 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
var EXPONENT_MAX = 6111;
var EXPONENT_MIN = -6176;
var EXPONENT_BIAS = 6176;
var MAX_DIGITS = 34; // Nan value bits as 32 bit values (due to lack of longs)

var NAN_BUFFER = [0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse(); // Infinity value bits 32 bit values (due to lack of longs)

var INF_NEGATIVE_BUFFER = [0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
var INF_POSITIVE_BUFFER = [0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
var EXPONENT_REGEX = /^([-+])?(\d+)?$/; // Detect if the value is a digit

function isDigit(value) {
  return !isNaN(parseInt(value, 10));
} // Divide two uint128 values


function divideu128(value) {
  var DIVISOR = long_1.fromNumber(1000 * 1000 * 1000);

  var _rem = long_1.fromNumber(0);

  if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
    return {
      quotient: value,
      rem: _rem
    };
  }

  for (var i = 0; i <= 3; i++) {
    // Adjust remainder to match value of next dividend
    _rem = _rem.shiftLeft(32); // Add the divided to _rem

    _rem = _rem.add(new long_1(value.parts[i], 0));
    value.parts[i] = _rem.div(DIVISOR).low;
    _rem = _rem.modulo(DIVISOR);
  }

  return {
    quotient: value,
    rem: _rem
  };
} // Multiply two Long values and return the 128 bit value


function multiply64x2(left, right) {
  if (!left && !right) {
    return {
      high: long_1.fromNumber(0),
      low: long_1.fromNumber(0)
    };
  }

  var leftHigh = left.shiftRightUnsigned(32);
  var leftLow = new long_1(left.getLowBits(), 0);
  var rightHigh = right.shiftRightUnsigned(32);
  var rightLow = new long_1(right.getLowBits(), 0);
  var productHigh = leftHigh.multiply(rightHigh);
  var productMid = leftHigh.multiply(rightLow);
  var productMid2 = leftLow.multiply(rightHigh);
  var productLow = leftLow.multiply(rightLow);
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productMid = new long_1(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productLow = productMid.shiftLeft(32).add(new long_1(productLow.getLowBits(), 0)); // Return the 128 bit result

  return {
    high: productHigh,
    low: productLow
  };
}

function lessThan(left, right) {
  // Make values unsigned
  var uhleft = left.high >>> 0;
  var uhright = right.high >>> 0; // Compare high bits first

  if (uhleft < uhright) {
    return true;
  } else if (uhleft === uhright) {
    var ulleft = left.low >>> 0;
    var ulright = right.low >>> 0;
    if (ulleft < ulright) return true;
  }

  return false;
}

function invalidErr(string, message) {
  throw new TypeError("\"".concat(string, "\" is not a valid Decimal128 string - ").concat(message));
}
/**
 * A class representation of the BSON Decimal128 type.
 *
 * @class
 * @param {Buffer} bytes a buffer containing the raw Decimal128 bytes.
 * @return {Double}
 */


function Decimal128(bytes) {
  this.bytes = bytes;
}
/**
 * Create a Decimal128 instance from a string representation
 *
 * @method
 * @param {string} string a numeric string representation.
 * @return {Decimal128} returns a Decimal128 instance.
 */


Decimal128.fromString = function (string) {
  // Parse state tracking
  var isNegative = false;
  var sawRadix = false;
  var foundNonZero = false; // Total number of significant digits (no leading or trailing zero)

  var significantDigits = 0; // Total number of significand digits read

  var nDigitsRead = 0; // Total number of digits (no leading zeros)

  var nDigits = 0; // The number of the digits after radix

  var radixPosition = 0; // The index of the first non-zero in *str*

  var firstNonZero = 0; // Digits Array

  var digits = [0]; // The number of digits in digits

  var nDigitsStored = 0; // Insertion pointer for digits

  var digitsInsert = 0; // The index of the first non-zero digit

  var firstDigit = 0; // The index of the last digit

  var lastDigit = 0; // Exponent

  var exponent = 0; // loop index over array

  var i = 0; // The high 17 digits of the significand

  var significandHigh = [0, 0]; // The low 17 digits of the significand

  var significandLow = [0, 0]; // The biased exponent

  var biasedExponent = 0; // Read index

  var index = 0; // Naively prevent against REDOS attacks.
  // TODO: implementing a custom parsing for this, or refactoring the regex would yield
  //       further gains.

  if (string.length >= 7000) {
    throw new TypeError('' + string + ' not a valid Decimal128 string');
  } // Results


  var stringMatch = string.match(PARSE_STRING_REGEXP);
  var infMatch = string.match(PARSE_INF_REGEXP);
  var nanMatch = string.match(PARSE_NAN_REGEXP); // Validate the string

  if (!stringMatch && !infMatch && !nanMatch || string.length === 0) {
    throw new TypeError('' + string + ' not a valid Decimal128 string');
  }

  if (stringMatch) {
    // full_match = stringMatch[0]
    // sign = stringMatch[1]
    var unsignedNumber = stringMatch[2]; // stringMatch[3] is undefined if a whole number (ex "1", 12")
    // but defined if a number w/ decimal in it (ex "1.0, 12.2")

    var e = stringMatch[4];
    var expSign = stringMatch[5];
    var expNumber = stringMatch[6]; // they provided e, but didn't give an exponent number. for ex "1e"

    if (e && expNumber === undefined) invalidErr(string, 'missing exponent power'); // they provided e, but didn't give a number before it. for ex "e1"

    if (e && unsignedNumber === undefined) invalidErr(string, 'missing exponent base');

    if (e === undefined && (expSign || expNumber)) {
      invalidErr(string, 'missing e before exponent');
    }
  } // Get the negative or positive sign


  if (string[index] === '+' || string[index] === '-') {
    isNegative = string[index++] === '-';
  } // Check if user passed Infinity or NaN


  if (!isDigit(string[index]) && string[index] !== '.') {
    if (string[index] === 'i' || string[index] === 'I') {
      return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
    } else if (string[index] === 'N') {
      return new Decimal128(Buffer$2.from(NAN_BUFFER));
    }
  } // Read all the digits


  while (isDigit(string[index]) || string[index] === '.') {
    if (string[index] === '.') {
      if (sawRadix) invalidErr(string, 'contains multiple periods');
      sawRadix = true;
      index = index + 1;
      continue;
    }

    if (nDigitsStored < 34) {
      if (string[index] !== '0' || foundNonZero) {
        if (!foundNonZero) {
          firstNonZero = nDigitsRead;
        }

        foundNonZero = true; // Only store 34 digits

        digits[digitsInsert++] = parseInt(string[index], 10);
        nDigitsStored = nDigitsStored + 1;
      }
    }

    if (foundNonZero) nDigits = nDigits + 1;
    if (sawRadix) radixPosition = radixPosition + 1;
    nDigitsRead = nDigitsRead + 1;
    index = index + 1;
  }

  if (sawRadix && !nDigitsRead) throw new TypeError('' + string + ' not a valid Decimal128 string'); // Read exponent if exists

  if (string[index] === 'e' || string[index] === 'E') {
    // Read exponent digits
    var match = string.substr(++index).match(EXPONENT_REGEX); // No digits read

    if (!match || !match[2]) return new Decimal128(Buffer$2.from(NAN_BUFFER)); // Get exponent

    exponent = parseInt(match[0], 10); // Adjust the index

    index = index + match[0].length;
  } // Return not a number


  if (string[index]) return new Decimal128(Buffer$2.from(NAN_BUFFER)); // Done reading input
  // Find first non-zero digit in digits

  firstDigit = 0;

  if (!nDigitsStored) {
    firstDigit = 0;
    lastDigit = 0;
    digits[0] = 0;
    nDigits = 1;
    nDigitsStored = 1;
    significantDigits = 0;
  } else {
    lastDigit = nDigitsStored - 1;
    significantDigits = nDigits;

    if (significantDigits !== 1) {
      while (string[firstNonZero + significantDigits - 1] === '0') {
        significantDigits = significantDigits - 1;
      }
    }
  } // Normalization of exponent
  // Correct exponent based on radix position, and shift significand as needed
  // to represent user input
  // Overflow prevention


  if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
    exponent = EXPONENT_MIN;
  } else {
    exponent = exponent - radixPosition;
  } // Attempt to normalize the exponent


  while (exponent > EXPONENT_MAX) {
    // Shift exponent to significand and decrease
    lastDigit = lastDigit + 1;

    if (lastDigit - firstDigit > MAX_DIGITS) {
      // Check if we have a zero then just hard clamp, otherwise fail
      var digitsString = digits.join('');

      if (digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX;
        break;
      }

      invalidErr(string, 'overflow');
    }

    exponent = exponent - 1;
  }

  while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
    // Shift last digit. can only do this if < significant digits than # stored.
    if (lastDigit === 0 && significantDigits < nDigitsStored) {
      exponent = EXPONENT_MIN;
      significantDigits = 0;
      break;
    }

    if (nDigitsStored < nDigits) {
      // adjust to match digits not stored
      nDigits = nDigits - 1;
    } else {
      // adjust to round
      lastDigit = lastDigit - 1;
    }

    if (exponent < EXPONENT_MAX) {
      exponent = exponent + 1;
    } else {
      // Check if we have a zero then just hard clamp, otherwise fail
      var _digitsString = digits.join('');

      if (_digitsString.match(/^0+$/)) {
        exponent = EXPONENT_MAX;
        break;
      }

      invalidErr(string, 'overflow');
    }
  } // Round
  // We've normalized the exponent, but might still need to round.


  if (lastDigit - firstDigit + 1 < significantDigits) {
    var endOfString = nDigitsRead; // If we have seen a radix point, 'string' is 1 longer than we have
    // documented with ndigits_read, so inc the position of the first nonzero
    // digit and the position that digits are read to.

    if (sawRadix) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    } // if negative, we need to increment again to account for - sign at start.


    if (isNegative) {
      firstNonZero = firstNonZero + 1;
      endOfString = endOfString + 1;
    }

    var roundDigit = parseInt(string[firstNonZero + lastDigit + 1], 10);
    var roundBit = 0;

    if (roundDigit >= 5) {
      roundBit = 1;

      if (roundDigit === 5) {
        roundBit = digits[lastDigit] % 2 === 1;

        for (i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
          if (parseInt(string[i], 10)) {
            roundBit = 1;
            break;
          }
        }
      }
    }

    if (roundBit) {
      var dIdx = lastDigit;

      for (; dIdx >= 0; dIdx--) {
        if (++digits[dIdx] > 9) {
          digits[dIdx] = 0; // overflowed most significant digit

          if (dIdx === 0) {
            if (exponent < EXPONENT_MAX) {
              exponent = exponent + 1;
              digits[dIdx] = 1;
            } else {
              return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
            }
          }
        }
      }
    }
  } // Encode significand
  // The high 17 digits of the significand


  significandHigh = long_1.fromNumber(0); // The low 17 digits of the significand

  significandLow = long_1.fromNumber(0); // read a zero

  if (significantDigits === 0) {
    significandHigh = long_1.fromNumber(0);
    significandLow = long_1.fromNumber(0);
  } else if (lastDigit - firstDigit < 17) {
    var _dIdx = firstDigit;
    significandLow = long_1.fromNumber(digits[_dIdx++]);
    significandHigh = new long_1(0, 0);

    for (; _dIdx <= lastDigit; _dIdx++) {
      significandLow = significandLow.multiply(long_1.fromNumber(10));
      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx]));
    }
  } else {
    var _dIdx2 = firstDigit;
    significandHigh = long_1.fromNumber(digits[_dIdx2++]);

    for (; _dIdx2 <= lastDigit - 17; _dIdx2++) {
      significandHigh = significandHigh.multiply(long_1.fromNumber(10));
      significandHigh = significandHigh.add(long_1.fromNumber(digits[_dIdx2]));
    }

    significandLow = long_1.fromNumber(digits[_dIdx2++]);

    for (; _dIdx2 <= lastDigit; _dIdx2++) {
      significandLow = significandLow.multiply(long_1.fromNumber(10));
      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx2]));
    }
  }

  var significand = multiply64x2(significandHigh, long_1.fromString('100000000000000000'));
  significand.low = significand.low.add(significandLow);

  if (lessThan(significand.low, significandLow)) {
    significand.high = significand.high.add(long_1.fromNumber(1));
  } // Biased exponent


  biasedExponent = exponent + EXPONENT_BIAS;
  var dec = {
    low: long_1.fromNumber(0),
    high: long_1.fromNumber(0)
  }; // Encode combination, exponent, and significand.

  if (significand.high.shiftRightUnsigned(49).and(long_1.fromNumber(1)).equals(long_1.fromNumber(1))) {
    // Encode '11' into bits 1 to 3
    dec.high = dec.high.or(long_1.fromNumber(0x3).shiftLeft(61));
    dec.high = dec.high.or(long_1.fromNumber(biasedExponent).and(long_1.fromNumber(0x3fff).shiftLeft(47)));
    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x7fffffffffff)));
  } else {
    dec.high = dec.high.or(long_1.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x1ffffffffffff)));
  }

  dec.low = significand.low; // Encode sign

  if (isNegative) {
    dec.high = dec.high.or(long_1.fromString('9223372036854775808'));
  } // Encode into a buffer


  var buffer$$1 = Buffer$2.alloc(16);
  index = 0; // Encode the low 64 bits of the decimal
  // Encode low bits

  buffer$$1[index++] = dec.low.low & 0xff;
  buffer$$1[index++] = dec.low.low >> 8 & 0xff;
  buffer$$1[index++] = dec.low.low >> 16 & 0xff;
  buffer$$1[index++] = dec.low.low >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = dec.low.high & 0xff;
  buffer$$1[index++] = dec.low.high >> 8 & 0xff;
  buffer$$1[index++] = dec.low.high >> 16 & 0xff;
  buffer$$1[index++] = dec.low.high >> 24 & 0xff; // Encode the high 64 bits of the decimal
  // Encode low bits

  buffer$$1[index++] = dec.high.low & 0xff;
  buffer$$1[index++] = dec.high.low >> 8 & 0xff;
  buffer$$1[index++] = dec.high.low >> 16 & 0xff;
  buffer$$1[index++] = dec.high.low >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = dec.high.high & 0xff;
  buffer$$1[index++] = dec.high.high >> 8 & 0xff;
  buffer$$1[index++] = dec.high.high >> 16 & 0xff;
  buffer$$1[index++] = dec.high.high >> 24 & 0xff; // Return the new Decimal128

  return new Decimal128(buffer$$1);
}; // Extract least significant 5 bits


var COMBINATION_MASK = 0x1f; // Extract least significant 14 bits

var EXPONENT_MASK = 0x3fff; // Value of combination field for Inf

var COMBINATION_INFINITY = 30; // Value of combination field for NaN

var COMBINATION_NAN = 31;
/**
 * Create a string representation of the raw Decimal128 value
 *
 * @method
 * @return {string} returns a Decimal128 string representation.
 */

Decimal128.prototype.toString = function () {
  // Note: bits in this routine are referred to starting at 0,
  // from the sign bit, towards the coefficient.
  // bits 0 - 31
  var high; // bits 32 - 63

  var midh; // bits 64 - 95

  var midl; // bits 96 - 127

  var low; // bits 1 - 5

  var combination; // decoded biased exponent (14 bits)

  var biased_exponent; // the number of significand digits

  var significand_digits = 0; // the base-10 digits in the significand

  var significand = new Array(36);

  for (var i = 0; i < significand.length; i++) {
    significand[i] = 0;
  } // read pointer into significand


  var index = 0; // unbiased exponent

  var exponent; // the exponent if scientific notation is used

  var scientific_exponent; // true if the number is zero

  var is_zero = false; // the most signifcant significand bits (50-46)

  var significand_msb; // temporary storage for significand decoding

  var significand128 = {
    parts: new Array(4)
  }; // indexing variables

  var j, k; // Output string

  var string = []; // Unpack index

  index = 0; // Buffer reference

  var buffer$$1 = this.bytes; // Unpack the low 64bits into a long

  low = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  midl = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack the high 64bits into a long

  midh = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
  high = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack index

  index = 0; // Create the state of the decimal

  var dec = {
    low: new long_1(low, midl),
    high: new long_1(midh, high)
  };

  if (dec.high.lessThan(long_1.ZERO)) {
    string.push('-');
  } // Decode combination field and exponent


  combination = high >> 26 & COMBINATION_MASK;

  if (combination >> 3 === 3) {
    // Check for 'special' values
    if (combination === COMBINATION_INFINITY) {
      return string.join('') + 'Infinity';
    } else if (combination === COMBINATION_NAN) {
      return 'NaN';
    } else {
      biased_exponent = high >> 15 & EXPONENT_MASK;
      significand_msb = 0x08 + (high >> 14 & 0x01);
    }
  } else {
    significand_msb = high >> 14 & 0x07;
    biased_exponent = high >> 17 & EXPONENT_MASK;
  }

  exponent = biased_exponent - EXPONENT_BIAS; // Create string of significand digits
  // Convert the 114-bit binary number represented by
  // (significand_high, significand_low) to at most 34 decimal
  // digits through modulo and division.

  significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
  significand128.parts[1] = midh;
  significand128.parts[2] = midl;
  significand128.parts[3] = low;

  if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
    is_zero = true;
  } else {
    for (k = 3; k >= 0; k--) {
      var least_digits = 0; // Peform the divide

      var result = divideu128(significand128);
      significand128 = result.quotient;
      least_digits = result.rem.low; // We now have the 9 least significant digits (in base 2).
      // Convert and output to string.

      if (!least_digits) continue;

      for (j = 8; j >= 0; j--) {
        // significand[k * 9 + j] = Math.round(least_digits % 10);
        significand[k * 9 + j] = least_digits % 10; // least_digits = Math.round(least_digits / 10);

        least_digits = Math.floor(least_digits / 10);
      }
    }
  } // Output format options:
  // Scientific - [-]d.dddE(+/-)dd or [-]dE(+/-)dd
  // Regular    - ddd.ddd


  if (is_zero) {
    significand_digits = 1;
    significand[index] = 0;
  } else {
    significand_digits = 36;

    while (!significand[index]) {
      significand_digits = significand_digits - 1;
      index = index + 1;
    }
  }

  scientific_exponent = significand_digits - 1 + exponent; // The scientific exponent checks are dictated by the string conversion
  // specification and are somewhat arbitrary cutoffs.
  //
  // We must check exponent > 0, because if this is the case, the number
  // has trailing zeros.  However, we *cannot* output these trailing zeros,
  // because doing so would change the precision of the value, and would
  // change stored data if the string converted number is round tripped.

  if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
    // Scientific format
    // if there are too many significant digits, we should just be treating numbers
    // as + or - 0 and using the non-scientific exponent (this is for the "invalid
    // representation should be treated as 0/-0" spec cases in decimal128-1.json)
    if (significand_digits > 34) {
      string.push(0);
      if (exponent > 0) string.push('E+' + exponent);else if (exponent < 0) string.push('E' + exponent);
      return string.join('');
    }

    string.push(significand[index++]);
    significand_digits = significand_digits - 1;

    if (significand_digits) {
      string.push('.');
    }

    for (var _i = 0; _i < significand_digits; _i++) {
      string.push(significand[index++]);
    } // Exponent


    string.push('E');

    if (scientific_exponent > 0) {
      string.push('+' + scientific_exponent);
    } else {
      string.push(scientific_exponent);
    }
  } else {
    // Regular format with no decimal place
    if (exponent >= 0) {
      for (var _i2 = 0; _i2 < significand_digits; _i2++) {
        string.push(significand[index++]);
      }
    } else {
      var radix_position = significand_digits + exponent; // non-zero digits before radix

      if (radix_position > 0) {
        for (var _i3 = 0; _i3 < radix_position; _i3++) {
          string.push(significand[index++]);
        }
      } else {
        string.push('0');
      }

      string.push('.'); // add leading zeros after radix

      while (radix_position++ < 0) {
        string.push('0');
      }

      for (var _i4 = 0; _i4 < significand_digits - Math.max(radix_position - 1, 0); _i4++) {
        string.push(significand[index++]);
      }
    }
  }

  return string.join('');
};

Decimal128.prototype.toJSON = function () {
  return {
    $numberDecimal: this.toString()
  };
};
/**
 * @ignore
 */


Decimal128.prototype.toExtendedJSON = function () {
  return {
    $numberDecimal: this.toString()
  };
};
/**
 * @ignore
 */


Decimal128.fromExtendedJSON = function (doc) {
  return Decimal128.fromString(doc.$numberDecimal);
};

Object.defineProperty(Decimal128.prototype, '_bsontype', {
  value: 'Decimal128'
});
var decimal128 = Decimal128;

/**
 * A class representation of the BSON MinKey type.
 */

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

var MinKey =
/*#__PURE__*/
function () {
  /**
   * Create a MinKey type
   *
   * @return {MinKey} A MinKey instance
   */
  function MinKey() {
    _classCallCheck$7(this, MinKey);
  }
  /**
   * @ignore
   */


  _createClass$7(MinKey, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $minKey: 1
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MinKey();
    }
  }]);

  return MinKey;
}();

Object.defineProperty(MinKey.prototype, '_bsontype', {
  value: 'MinKey'
});
var min_key = MinKey;

/**
 * A class representation of the BSON MaxKey type.
 */

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

var MaxKey =
/*#__PURE__*/
function () {
  /**
   * Create a MaxKey type
   *
   * @return {MaxKey} A MaxKey instance
   */
  function MaxKey() {
    _classCallCheck$8(this, MaxKey);
  }
  /**
   * @ignore
   */


  _createClass$8(MaxKey, [{
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      return {
        $maxKey: 1
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON() {
      return new MaxKey();
    }
  }]);

  return MaxKey;
}();

Object.defineProperty(MaxKey.prototype, '_bsontype', {
  value: 'MaxKey'
});
var max_key = MaxKey;

/**
 * A class representation of the BSON DBRef type.
 */

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

var DBRef =
/*#__PURE__*/
function () {
  /**
   * Create a DBRef type
   *
   * @param {string} collection the collection name.
   * @param {ObjectId} oid the reference ObjectId.
   * @param {string} [db] optional db name, if omitted the reference is local to the current db.
   * @return {DBRef}
   */
  function DBRef(collection, oid, db, fields) {
    _classCallCheck$9(this, DBRef);

    // check if namespace has been provided
    var parts = collection.split('.');

    if (parts.length === 2) {
      db = parts.shift();
      collection = parts.shift();
    }

    this.collection = collection;
    this.oid = oid;
    this.db = db;
    this.fields = fields || {};
  }
  /**
   * @ignore
   * @api private
   */


  _createClass$9(DBRef, [{
    key: "toJSON",
    value: function toJSON() {
      var o = Object.assign({
        $ref: this.collection,
        $id: this.oid
      }, this.fields);
      if (this.db != null) o.$db = this.db;
      return o;
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var o = {
        $ref: this.collection,
        $id: this.oid
      };
      if (this.db) o.$db = this.db;
      o = Object.assign(o, this.fields);
      return o;
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var copy = Object.assign({}, doc);
      ['$ref', '$id', '$db'].forEach(function (k) {
        return delete copy[k];
      });
      return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
    }
  }]);

  return DBRef;
}();

Object.defineProperty(DBRef.prototype, '_bsontype', {
  value: 'DBRef'
}); // the 1.x parser used a "namespace" property, while 4.x uses "collection". To ensure backwards
// compatibility, let's expose "namespace"

Object.defineProperty(DBRef.prototype, 'namespace', {
  get: function get() {
    return this.collection;
  },
  set: function set(val) {
    this.collection = val;
  },
  configurable: false
});
var db_ref = DBRef;

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

var Buffer$3 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
/**
 * A class representation of the BSON Binary type.
 */

var Binary =
/*#__PURE__*/
function () {
  /**
   * Create a Binary type
   *
   * Sub types
   *  - **BSON.BSON_BINARY_SUBTYPE_DEFAULT**, default BSON type.
   *  - **BSON.BSON_BINARY_SUBTYPE_FUNCTION**, BSON function type.
   *  - **BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY**, BSON byte array type.
   *  - **BSON.BSON_BINARY_SUBTYPE_UUID**, BSON uuid type.
   *  - **BSON.BSON_BINARY_SUBTYPE_MD5**, BSON md5 type.
   *  - **BSON.BSON_BINARY_SUBTYPE_USER_DEFINED**, BSON user defined type.
   *
   * @param {Buffer} buffer a buffer object containing the binary data.
   * @param {Number} [subType] the option binary type.
   * @return {Binary}
   */
  function Binary(buffer$$1, subType) {
    _classCallCheck$a(this, Binary);

    if (buffer$$1 != null && !(typeof buffer$$1 === 'string') && !Buffer$3.isBuffer(buffer$$1) && !(buffer$$1 instanceof Uint8Array) && !Array.isArray(buffer$$1)) {
      throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
    }

    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT : subType;
    this.position = 0;

    if (buffer$$1 != null && !(buffer$$1 instanceof Number)) {
      // Only accept Buffer, Uint8Array or Arrays
      if (typeof buffer$$1 === 'string') {
        // Different ways of writing the length of the string for the different types
        if (typeof Buffer$3 !== 'undefined') {
          this.buffer = Buffer$3.from(buffer$$1);
        } else if (typeof Uint8Array !== 'undefined' || Array.isArray(buffer$$1)) {
          this.buffer = writeStringToArray(buffer$$1);
        } else {
          throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
        }
      } else {
        this.buffer = buffer$$1;
      }

      this.position = buffer$$1.length;
    } else {
      if (typeof Buffer$3 !== 'undefined') {
        this.buffer = Buffer$3.alloc(Binary.BUFFER_SIZE);
      } else if (typeof Uint8Array !== 'undefined') {
        this.buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE));
      } else {
        this.buffer = new Array(Binary.BUFFER_SIZE);
      }
    }
  }
  /**
   * Updates this binary with byte_value.
   *
   * @method
   * @param {string} byte_value a single byte we wish to write.
   */


  _createClass$a(Binary, [{
    key: "put",
    value: function put(byte_value) {
      // If it's a string and a has more than one character throw an error
      if (byte_value['length'] != null && typeof byte_value !== 'number' && byte_value.length !== 1) throw new TypeError('only accepts single character String, Uint8Array or Array');
      if (typeof byte_value !== 'number' && byte_value < 0 || byte_value > 255) throw new TypeError('only accepts number in a valid unsigned byte range 0-255'); // Decode the byte value once

      var decoded_byte = null;

      if (typeof byte_value === 'string') {
        decoded_byte = byte_value.charCodeAt(0);
      } else if (byte_value['length'] != null) {
        decoded_byte = byte_value[0];
      } else {
        decoded_byte = byte_value;
      }

      if (this.buffer.length > this.position) {
        this.buffer[this.position++] = decoded_byte;
      } else {
        if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
          // Create additional overflow buffer
          var buffer$$1 = Buffer$3.alloc(Binary.BUFFER_SIZE + this.buffer.length); // Combine the two buffers together

          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
          this.buffer = buffer$$1;
          this.buffer[this.position++] = decoded_byte;
        } else {
          var _buffer = null; // Create a new buffer (typed or normal array)

          if (isUint8Array(this.buffer)) {
            _buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE + this.buffer.length));
          } else {
            _buffer = new Array(Binary.BUFFER_SIZE + this.buffer.length);
          } // We need to copy all the content to the new array


          for (var i = 0; i < this.buffer.length; i++) {
            _buffer[i] = this.buffer[i];
          } // Reassign the buffer


          this.buffer = _buffer; // Write the byte

          this.buffer[this.position++] = decoded_byte;
        }
      }
    }
    /**
     * Writes a buffer or string to the binary.
     *
     * @method
     * @param {(Buffer|string)} string a string or buffer to be written to the Binary BSON object.
     * @param {number} offset specify the binary of where to write the content.
     * @return {null}
     */

  }, {
    key: "write",
    value: function write(string, offset) {
      offset = typeof offset === 'number' ? offset : this.position; // If the buffer is to small let's extend the buffer

      if (this.buffer.length < offset + string.length) {
        var buffer$$1 = null; // If we are in node.js

        if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
          buffer$$1 = Buffer$3.alloc(this.buffer.length + string.length);
          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
        } else if (isUint8Array(this.buffer)) {
          // Create a new buffer
          buffer$$1 = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length)); // Copy the content

          for (var i = 0; i < this.position; i++) {
            buffer$$1[i] = this.buffer[i];
          }
        } // Assign the new buffer


        this.buffer = buffer$$1;
      }

      if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(string) && Buffer$3.isBuffer(this.buffer)) {
        string.copy(this.buffer, offset, 0, string.length);
        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length
      } else if (typeof Buffer$3 !== 'undefined' && typeof string === 'string' && Buffer$3.isBuffer(this.buffer)) {
        this.buffer.write(string, offset, 'binary');
        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length;
      } else if (isUint8Array(string) || Array.isArray(string) && typeof string !== 'string') {
        for (var _i = 0; _i < string.length; _i++) {
          this.buffer[offset++] = string[_i];
        }

        this.position = offset > this.position ? offset : this.position;
      } else if (typeof string === 'string') {
        for (var _i2 = 0; _i2 < string.length; _i2++) {
          this.buffer[offset++] = string.charCodeAt(_i2);
        }

        this.position = offset > this.position ? offset : this.position;
      }
    }
    /**
     * Reads **length** bytes starting at **position**.
     *
     * @method
     * @param {number} position read from the given position in the Binary.
     * @param {number} length the number of bytes to read.
     * @return {Buffer}
     */

  }, {
    key: "read",
    value: function read(position, length) {
      length = length && length > 0 ? length : this.position; // Let's return the data based on the type we have

      if (this.buffer['slice']) {
        return this.buffer.slice(position, position + length);
      } // Create a buffer to keep the result


      var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);

      for (var i = 0; i < length; i++) {
        buffer$$1[i] = this.buffer[position++];
      } // Return the buffer


      return buffer$$1;
    }
    /**
     * Returns the value of this binary as a string.
     *
     * @method
     * @return {string}
     */

  }, {
    key: "value",
    value: function value(asRaw) {
      asRaw = asRaw == null ? false : asRaw; // Optimize to serialize for the situation where the data == size of buffer

      if (asRaw && typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer) && this.buffer.length === this.position) return this.buffer; // If it's a node.js buffer object

      if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
        return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString('binary', 0, this.position);
      } else {
        if (asRaw) {
          // we support the slice command use it
          if (this.buffer['slice'] != null) {
            return this.buffer.slice(0, this.position);
          } else {
            // Create a new buffer to copy content to
            var newBuffer = isUint8Array(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position); // Copy content

            for (var i = 0; i < this.position; i++) {
              newBuffer[i] = this.buffer[i];
            } // Return the buffer


            return newBuffer;
          }
        } else {
          return convertArraytoUtf8BinaryString(this.buffer, 0, this.position);
        }
      }
    }
    /**
     * Length.
     *
     * @method
     * @return {number} the length of the binary.
     */

  }, {
    key: "length",
    value: function length() {
      return this.position;
    }
    /**
     * @ignore
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.buffer != null ? this.buffer.toString('base64') : '';
    }
    /**
     * @ignore
     */

  }, {
    key: "toString",
    value: function toString(format) {
      return this.buffer != null ? this.buffer.slice(0, this.position).toString(format) : '';
    }
    /**
     * @ignore
     */

  }, {
    key: "toExtendedJSON",
    value: function toExtendedJSON() {
      var base64String = Buffer$3.isBuffer(this.buffer) ? this.buffer.toString('base64') : Buffer$3.from(this.buffer).toString('base64');
      var subType = Number(this.sub_type).toString(16);
      return {
        $binary: {
          base64: base64String,
          subType: subType.length === 1 ? '0' + subType : subType
        }
      };
    }
    /**
     * @ignore
     */

  }], [{
    key: "fromExtendedJSON",
    value: function fromExtendedJSON(doc) {
      var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
      var data = Buffer$3.from(doc.$binary.base64, 'base64');
      return new Binary(data, type);
    }
  }]);

  return Binary;
}();
/**
 * Binary default subtype
 * @ignore
 */


var BSON_BINARY_SUBTYPE_DEFAULT = 0;

function isUint8Array(obj) {
  return Object.prototype.toString.call(obj) === '[object Uint8Array]';
}
/**
 * @ignore
 */


function writeStringToArray(data) {
  // Create a buffer
  var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length); // Write the content to the buffer

  for (var i = 0; i < data.length; i++) {
    buffer$$1[i] = data.charCodeAt(i);
  } // Write the string to the buffer


  return buffer$$1;
}
/**
 * Convert Array ot Uint8Array to Binary String
 *
 * @ignore
 */


function convertArraytoUtf8BinaryString(byteArray, startIndex, endIndex) {
  var result = '';

  for (var i = startIndex; i < endIndex; i++) {
    result = result + String.fromCharCode(byteArray[i]);
  }

  return result;
}

Binary.BUFFER_SIZE = 256;
/**
 * Default BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_DEFAULT = 0;
/**
 * Function BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_FUNCTION = 1;
/**
 * Byte Array BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_BYTE_ARRAY = 2;
/**
 * OLD UUID BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_UUID_OLD = 3;
/**
 * UUID BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_UUID = 4;
/**
 * MD5 BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_MD5 = 5;
/**
 * User BSON type
 *
 * @classconstant SUBTYPE_DEFAULT
 **/

Binary.SUBTYPE_USER_DEFINED = 128;
Object.defineProperty(Binary.prototype, '_bsontype', {
  value: 'Binary'
});
var binary = Binary;

var constants = {
  // BSON MAX VALUES
  BSON_INT32_MAX: 0x7fffffff,
  BSON_INT32_MIN: -0x80000000,
  BSON_INT64_MAX: Math.pow(2, 63) - 1,
  BSON_INT64_MIN: -Math.pow(2, 63),
  // JS MAX PRECISE VALUES
  JS_INT_MAX: 0x20000000000000,
  // Any integer up to 2^53 can be precisely represented by a double.
  JS_INT_MIN: -0x20000000000000,
  // Any integer down to -2^53 can be precisely represented by a double.

  /**
   * Number BSON Type
   *
   * @classconstant BSON_DATA_NUMBER
   **/
  BSON_DATA_NUMBER: 1,

  /**
   * String BSON Type
   *
   * @classconstant BSON_DATA_STRING
   **/
  BSON_DATA_STRING: 2,

  /**
   * Object BSON Type
   *
   * @classconstant BSON_DATA_OBJECT
   **/
  BSON_DATA_OBJECT: 3,

  /**
   * Array BSON Type
   *
   * @classconstant BSON_DATA_ARRAY
   **/
  BSON_DATA_ARRAY: 4,

  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_BINARY
   **/
  BSON_DATA_BINARY: 5,

  /**
   * Binary BSON Type
   *
   * @classconstant BSON_DATA_UNDEFINED
   **/
  BSON_DATA_UNDEFINED: 6,

  /**
   * ObjectId BSON Type
   *
   * @classconstant BSON_DATA_OID
   **/
  BSON_DATA_OID: 7,

  /**
   * Boolean BSON Type
   *
   * @classconstant BSON_DATA_BOOLEAN
   **/
  BSON_DATA_BOOLEAN: 8,

  /**
   * Date BSON Type
   *
   * @classconstant BSON_DATA_DATE
   **/
  BSON_DATA_DATE: 9,

  /**
   * null BSON Type
   *
   * @classconstant BSON_DATA_NULL
   **/
  BSON_DATA_NULL: 10,

  /**
   * RegExp BSON Type
   *
   * @classconstant BSON_DATA_REGEXP
   **/
  BSON_DATA_REGEXP: 11,

  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_DBPOINTER
   **/
  BSON_DATA_DBPOINTER: 12,

  /**
   * Code BSON Type
   *
   * @classconstant BSON_DATA_CODE
   **/
  BSON_DATA_CODE: 13,

  /**
   * Symbol BSON Type
   *
   * @classconstant BSON_DATA_SYMBOL
   **/
  BSON_DATA_SYMBOL: 14,

  /**
   * Code with Scope BSON Type
   *
   * @classconstant BSON_DATA_CODE_W_SCOPE
   **/
  BSON_DATA_CODE_W_SCOPE: 15,

  /**
   * 32 bit Integer BSON Type
   *
   * @classconstant BSON_DATA_INT
   **/
  BSON_DATA_INT: 16,

  /**
   * Timestamp BSON Type
   *
   * @classconstant BSON_DATA_TIMESTAMP
   **/
  BSON_DATA_TIMESTAMP: 17,

  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_LONG
   **/
  BSON_DATA_LONG: 18,

  /**
   * Long BSON Type
   *
   * @classconstant BSON_DATA_DECIMAL128
   **/
  BSON_DATA_DECIMAL128: 19,

  /**
   * MinKey BSON Type
   *
   * @classconstant BSON_DATA_MIN_KEY
   **/
  BSON_DATA_MIN_KEY: 0xff,

  /**
   * MaxKey BSON Type
   *
   * @classconstant BSON_DATA_MAX_KEY
   **/
  BSON_DATA_MAX_KEY: 0x7f,

  /**
   * Binary Default Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_DEFAULT
   **/
  BSON_BINARY_SUBTYPE_DEFAULT: 0,

  /**
   * Binary Function Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_FUNCTION
   **/
  BSON_BINARY_SUBTYPE_FUNCTION: 1,

  /**
   * Binary Byte Array Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_BYTE_ARRAY
   **/
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,

  /**
   * Binary UUID Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_UUID
   **/
  BSON_BINARY_SUBTYPE_UUID: 3,

  /**
   * Binary MD5 Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_MD5
   **/
  BSON_BINARY_SUBTYPE_MD5: 4,

  /**
   * Binary User Defined Type
   *
   * @classconstant BSON_BINARY_SUBTYPE_USER_DEFINED
   **/
  BSON_BINARY_SUBTYPE_USER_DEFINED: 128
};

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
// const Map = require('./map');

/**
 * @namespace EJSON
 */
// all the types where we don't need to do any special processing and can just pass the EJSON
//straight to type.fromExtendedJSON


var keysToCodecs = {
  $oid: objectid,
  $binary: binary,
  $symbol: symbol,
  $numberInt: int_32,
  $numberDecimal: decimal128,
  $numberDouble: double_1,
  $numberLong: long_1,
  $minKey: min_key,
  $maxKey: max_key,
  $regularExpression: regexp,
  $timestamp: timestamp
};

function deserializeValue(self, key, value, options) {
  if (typeof value === 'number') {
    if (options.relaxed) {
      return value;
    } // if it's an integer, should interpret as smallest BSON integer
    // that can represent it exactly. (if out of range, interpret as double.)


    if (Math.floor(value) === value) {
      if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) return new int_32(value);
      if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) return new long_1.fromNumber(value);
    } // If the number is a non-integer or out of integer range, should interpret as BSON Double.


    return new double_1(value);
  } // from here on out we're looking for bson types, so bail if its not an object


  if (value == null || _typeof$2(value) !== 'object') return value; // upgrade deprecated undefined to null

  if (value.$undefined) return null;
  var keys = Object.keys(value).filter(function (k) {
    return k.startsWith('$') && value[k] != null;
  });

  for (var i = 0; i < keys.length; i++) {
    var c = keysToCodecs[keys[i]];
    if (c) return c.fromExtendedJSON(value, options);
  }

  if (value.$date != null) {
    var d = value.$date;
    var date = new Date();
    if (typeof d === 'string') date.setTime(Date.parse(d));else if (long_1.isLong(d)) date.setTime(d.toNumber());else if (typeof d === 'number' && options.relaxed) date.setTime(d);
    return date;
  }

  if (value.$code != null) {
    var copy = Object.assign({}, value);

    if (value.$scope) {
      copy.$scope = deserializeValue(self, null, value.$scope);
    }

    return code.fromExtendedJSON(value);
  }

  if (value.$ref != null || value.$dbPointer != null) {
    var v = value.$ref ? value : value.$dbPointer; // we run into this in a "degenerate EJSON" case (with $id and $ref order flipped)
    // because of the order JSON.parse goes through the document

    if (v instanceof db_ref) return v;
    var dollarKeys = Object.keys(v).filter(function (k) {
      return k.startsWith('$');
    });
    var valid = true;
    dollarKeys.forEach(function (k) {
      if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
    }); // only make DBRef if $ keys are all valid

    if (valid) return db_ref.fromExtendedJSON(v);
  }

  return value;
}
/**
 * Parse an Extended JSON string, constructing the JavaScript value or object described by that
 * string.
 *
 * @memberof EJSON
 * @param {string} text
 * @param {object} [options] Optional settings
 * @param {boolean} [options.relaxed=true] Attempt to return native JS types where possible, rather than BSON types (if true)
 * @return {object}
 *
 * @example
 * const { EJSON } = require('bson');
 * const text = '{ "int32": { "$numberInt": "10" } }';
 *
 * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
 * console.log(EJSON.parse(text, { relaxed: false }));
 *
 * // prints { int32: 10 }
 * console.log(EJSON.parse(text));
 */


function parse(text, options) {
  var _this = this;

  options = Object.assign({}, {
    relaxed: true
  }, options); // relaxed implies not strict

  if (typeof options.relaxed === 'boolean') options.strict = !options.relaxed;
  if (typeof options.strict === 'boolean') options.relaxed = !options.strict;
  return JSON.parse(text, function (key, value) {
    return deserializeValue(_this, key, value, options);
  });
} //
// Serializer
//
// MAX INT32 boundaries


var BSON_INT32_MAX = 0x7fffffff,
    BSON_INT32_MIN = -0x80000000,
    BSON_INT64_MAX = 0x7fffffffffffffff,
    BSON_INT64_MIN = -0x8000000000000000;
/**
 * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
 * function is specified or optionally including only the specified properties if a replacer array
 * is specified.
 *
 * @memberof EJSON
 * @param {object} value The value to convert to extended JSON
 * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
 * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
 * @param {object} [options] Optional settings
 * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
 * @returns {string}
 *
 * @example
 * const { EJSON } = require('bson');
 * const Int32 = require('mongodb').Int32;
 * const doc = { int32: new Int32(10) };
 *
 * // prints '{"int32":{"$numberInt":"10"}}'
 * console.log(EJSON.stringify(doc, { relaxed: false }));
 *
 * // prints '{"int32":10}'
 * console.log(EJSON.stringify(doc));
 */

function stringify(value, replacer, space, options) {
  if (space != null && _typeof$2(space) === 'object') {
    options = space;
    space = 0;
  }

  if (replacer != null && _typeof$2(replacer) === 'object' && !Array.isArray(replacer)) {
    options = replacer;
    replacer = null;
    space = 0;
  }

  options = Object.assign({}, {
    relaxed: true
  }, options);
  var doc = Array.isArray(value) ? serializeArray(value, options) : serializeDocument(value, options);
  return JSON.stringify(doc, replacer, space);
}
/**
 * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
 *
 * @memberof EJSON
 * @param {object} bson The object to serialize
 * @param {object} [options] Optional settings passed to the `stringify` function
 * @return {object}
 */


function serialize(bson, options) {
  options = options || {};
  return JSON.parse(stringify(bson, options));
}
/**
 * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
 *
 * @memberof EJSON
 * @param {object} ejson The Extended JSON object to deserialize
 * @param {object} [options] Optional settings passed to the parse method
 * @return {object}
 */


function deserialize(ejson, options) {
  options = options || {};
  return parse(JSON.stringify(ejson), options);
}

function serializeArray(array, options) {
  return array.map(function (v) {
    return serializeValue(v, options);
  });
}

function getISOString(date) {
  var isoStr = date.toISOString(); // we should only show milliseconds in timestamp if they're non-zero

  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
}

function serializeValue(value, options) {
  if (Array.isArray(value)) return serializeArray(value, options);
  if (value === undefined) return null;

  if (value instanceof Date) {
    var dateNum = value.getTime(),
        // is it in year range 1970-9999?
    inRange = dateNum > -1 && dateNum < 253402318800000;
    return options.relaxed && inRange ? {
      $date: getISOString(value)
    } : {
      $date: {
        $numberLong: value.getTime().toString()
      }
    };
  }

  if (typeof value === 'number' && !options.relaxed) {
    // it's an integer
    if (Math.floor(value) === value) {
      var int32Range = value >= BSON_INT32_MIN && value <= BSON_INT32_MAX,
          int64Range = value >= BSON_INT64_MIN && value <= BSON_INT64_MAX; // interpret as being of the smallest BSON integer type that can represent the number exactly

      if (int32Range) return {
        $numberInt: value.toString()
      };
      if (int64Range) return {
        $numberLong: value.toString()
      };
    }

    return {
      $numberDouble: value.toString()
    };
  }

  if (value instanceof RegExp) {
    var flags = value.flags;

    if (flags === undefined) {
      flags = value.toString().match(/[gimuy]*$/)[0];
    }

    var rx = new regexp(value.source, flags);
    return rx.toExtendedJSON();
  }

  if (value != null && _typeof$2(value) === 'object') return serializeDocument(value, options);
  return value;
}

var BSON_TYPE_MAPPINGS = {
  Binary: function Binary(o) {
    return new binary(o.value(), o.subtype);
  },
  Code: function Code(o) {
    return new code(o.code, o.scope);
  },
  DBRef: function DBRef(o) {
    return new db_ref(o.collection || o.namespace, o.oid, o.db, o.fields);
  },
  // "namespace" for 1.x library backwards compat
  Decimal128: function Decimal128(o) {
    return new decimal128(o.bytes);
  },
  Double: function Double(o) {
    return new double_1(o.value);
  },
  Int32: function Int32(o) {
    return new int_32(o.value);
  },
  Long: function Long(o) {
    return long_1.fromBits( // underscore variants for 1.x backwards compatibility
    o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_);
  },
  MaxKey: function MaxKey() {
    return new max_key();
  },
  MinKey: function MinKey() {
    return new min_key();
  },
  ObjectID: function ObjectID(o) {
    return new objectid(o);
  },
  ObjectId: function ObjectId(o) {
    return new objectid(o);
  },
  // support 4.0.0/4.0.1 before _bsontype was reverted back to ObjectID
  BSONRegExp: function BSONRegExp(o) {
    return new regexp(o.pattern, o.options);
  },
  Symbol: function Symbol(o) {
    return new symbol(o.value);
  },
  Timestamp: function Timestamp(o) {
    return timestamp.fromBits(o.low, o.high);
  }
};

function serializeDocument(doc, options) {
  if (doc == null || _typeof$2(doc) !== 'object') throw new Error('not an object instance');
  var bsontype = doc._bsontype;

  if (typeof bsontype === 'undefined') {
    // It's a regular object. Recursively serialize its property values.
    var _doc = {};

    for (var name in doc) {
      _doc[name] = serializeValue(doc[name], options);
    }

    return _doc;
  } else if (typeof bsontype === 'string') {
    // the "document" is really just a BSON type object
    var _doc2 = doc;

    if (typeof _doc2.toExtendedJSON !== 'function') {
      // There's no EJSON serialization function on the object. It's probably an
      // object created by a previous version of this library (or another library)
      // that's duck-typing objects to look like they were generated by this library).
      // Copy the object into this library's version of that type.
      var mapper = BSON_TYPE_MAPPINGS[bsontype];

      if (!mapper) {
        throw new TypeError('Unrecognized or invalid _bsontype: ' + bsontype);
      }

      _doc2 = mapper(_doc2);
    } // Two BSON types may have nested objects that may need to be serialized too


    if (bsontype === 'Code' && _doc2.scope) {
      _doc2 = new code(_doc2.code, serializeValue(_doc2.scope, options));
    } else if (bsontype === 'DBRef' && _doc2.oid) {
      _doc2 = new db_ref(_doc2.collection, serializeValue(_doc2.oid, options), _doc2.db, _doc2.fields);
    }

    return _doc2.toExtendedJSON(options);
  } else {
    throw new Error('_bsontype must be a string, but was: ' + _typeof$2(bsontype));
  }
}

var extended_json = {
  parse: parse,
  deserialize: deserialize,
  serialize: serialize,
  stringify: stringify
};

var FIRST_BIT = 0x80;
var FIRST_TWO_BITS = 0xc0;
var FIRST_THREE_BITS = 0xe0;
var FIRST_FOUR_BITS = 0xf0;
var FIRST_FIVE_BITS = 0xf8;
var TWO_BIT_CHAR = 0xc0;
var THREE_BIT_CHAR = 0xe0;
var FOUR_BIT_CHAR = 0xf0;
var CONTINUING_CHAR = 0x80;
/**
 * Determines if the passed in bytes are valid utf8
 * @param {Buffer|Uint8Array} bytes An array of 8-bit bytes. Must be indexable and have length property
 * @param {Number} start The index to start validating
 * @param {Number} end The index to end validating
 * @returns {boolean} True if valid utf8
 */

function validateUtf8(bytes, start, end) {
  var continuation = 0;

  for (var i = start; i < end; i += 1) {
    var byte = bytes[i];

    if (continuation) {
      if ((byte & FIRST_TWO_BITS) !== CONTINUING_CHAR) {
        return false;
      }

      continuation -= 1;
    } else if (byte & FIRST_BIT) {
      if ((byte & FIRST_THREE_BITS) === TWO_BIT_CHAR) {
        continuation = 1;
      } else if ((byte & FIRST_FOUR_BITS) === THREE_BIT_CHAR) {
        continuation = 2;
      } else if ((byte & FIRST_FIVE_BITS) === FOUR_BIT_CHAR) {
        continuation = 3;
      } else {
        return false;
      }
    }
  }

  return !continuation;
}

var validateUtf8_1 = validateUtf8;
var validate_utf8 = {
  validateUtf8: validateUtf8_1
};

var Buffer$4 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
var validateUtf8$1 = validate_utf8.validateUtf8; // Internal long versions

var JS_INT_MAX_LONG = long_1.fromNumber(constants.JS_INT_MAX);
var JS_INT_MIN_LONG = long_1.fromNumber(constants.JS_INT_MIN);
var functionCache = {};

function deserialize$1(buffer$$1, options, isArray) {
  options = options == null ? {} : options;
  var index = options && options.index ? options.index : 0; // Read the document size

  var size = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

  if (size < 5) {
    throw new Error("bson size must be >= 5, is ".concat(size));
  }

  if (options.allowObjectSmallerThanBufferSize && buffer$$1.length < size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must be >= bson size ").concat(size));
  }

  if (!options.allowObjectSmallerThanBufferSize && buffer$$1.length !== size) {
    throw new Error("buffer length ".concat(buffer$$1.length, " must === bson size ").concat(size));
  }

  if (size + index > buffer$$1.length) {
    throw new Error("(bson size ".concat(size, " + options.index ").concat(index, " must be <= buffer length ").concat(Buffer$4.byteLength(buffer$$1), ")"));
  } // Illegal end value


  if (buffer$$1[index + size - 1] !== 0) {
    throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
  } // Start deserializtion


  return deserializeObject(buffer$$1, index, options, isArray);
}

function deserializeObject(buffer$$1, index, options, isArray) {
  var evalFunctions = options['evalFunctions'] == null ? false : options['evalFunctions'];
  var cacheFunctions = options['cacheFunctions'] == null ? false : options['cacheFunctions'];
  var cacheFunctionsCrc32 = options['cacheFunctionsCrc32'] == null ? false : options['cacheFunctionsCrc32'];
  if (!cacheFunctionsCrc32) var crc32 = null;
  var fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw']; // Return raw bson buffer instead of parsing it

  var raw = options['raw'] == null ? false : options['raw']; // Return BSONRegExp objects instead of native regular expressions

  var bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false; // Controls the promotion of values vs wrapper classes

  var promoteBuffers = options['promoteBuffers'] == null ? false : options['promoteBuffers'];
  var promoteLongs = options['promoteLongs'] == null ? true : options['promoteLongs'];
  var promoteValues = options['promoteValues'] == null ? true : options['promoteValues']; // Set the start index

  var startIndex = index; // Validate that we have at least 4 bytes of buffer

  if (buffer$$1.length < 5) throw new Error('corrupt bson message < 5 bytes long'); // Read the document size

  var size = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Ensure buffer is valid size

  if (size < 5 || size > buffer$$1.length) throw new Error('corrupt bson message'); // Create holding object

  var object = isArray ? [] : {}; // Used for arrays to skip having to perform utf8 decoding

  var arrayIndex = 0;
  var done = false; // While we have more left data left keep parsing

  while (!done) {
    // Read the type
    var elementType = buffer$$1[index++]; // If we get a zero it's the last byte, exit

    if (elementType === 0) break; // Get the start search index

    var i = index; // Locate the end of the c string

    while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
      i++;
    } // If are at the end of the buffer there is a problem with the document


    if (i >= Buffer$4.byteLength(buffer$$1)) throw new Error('Bad BSON Document: illegal CString');
    var name = isArray ? arrayIndex++ : buffer$$1.toString('utf8', index, i);
    index = i + 1;

    if (elementType === constants.BSON_DATA_STRING) {
      var stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      if (stringSize <= 0 || stringSize > buffer$$1.length - index || buffer$$1[index + stringSize - 1] !== 0) throw new Error('bad string length in bson');

      if (!validateUtf8$1(buffer$$1, index, index + stringSize - 1)) {
        throw new Error('Invalid UTF-8 string in BSON document');
      }

      var s = buffer$$1.toString('utf8', index, index + stringSize - 1);
      object[name] = s;
      index = index + stringSize;
    } else if (elementType === constants.BSON_DATA_OID) {
      var oid = Buffer$4.alloc(12);
      buffer$$1.copy(oid, 0, index, index + 12);
      object[name] = new objectid(oid);
      index = index + 12;
    } else if (elementType === constants.BSON_DATA_INT && promoteValues === false) {
      object[name] = new int_32(buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24);
    } else if (elementType === constants.BSON_DATA_INT) {
      object[name] = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    } else if (elementType === constants.BSON_DATA_NUMBER && promoteValues === false) {
      object[name] = new double_1(buffer$$1.readDoubleLE(index));
      index = index + 8;
    } else if (elementType === constants.BSON_DATA_NUMBER) {
      object[name] = buffer$$1.readDoubleLE(index);
      index = index + 8;
    } else if (elementType === constants.BSON_DATA_DATE) {
      var lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      object[name] = new Date(new long_1(lowBits, highBits).toNumber());
    } else if (elementType === constants.BSON_DATA_BOOLEAN) {
      if (buffer$$1[index] !== 0 && buffer$$1[index] !== 1) throw new Error('illegal boolean type value');
      object[name] = buffer$$1[index++] === 1;
    } else if (elementType === constants.BSON_DATA_OBJECT) {
      var _index = index;
      var objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
      if (objectSize <= 0 || objectSize > buffer$$1.length - index) throw new Error('bad embedded document length in bson'); // We have a raw value

      if (raw) {
        object[name] = buffer$$1.slice(index, index + objectSize);
      } else {
        object[name] = deserializeObject(buffer$$1, _index, options, false);
      }

      index = index + objectSize;
    } else if (elementType === constants.BSON_DATA_ARRAY) {
      var _index2 = index;

      var _objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

      var arrayOptions = options; // Stop index

      var stopIndex = index + _objectSize; // All elements of array to be returned as raw bson

      if (fieldsAsRaw && fieldsAsRaw[name]) {
        arrayOptions = {};

        for (var n in options) {
          arrayOptions[n] = options[n];
        }

        arrayOptions['raw'] = true;
      }

      object[name] = deserializeObject(buffer$$1, _index2, arrayOptions, true);
      index = index + _objectSize;
      if (buffer$$1[index - 1] !== 0) throw new Error('invalid array terminator byte');
      if (index !== stopIndex) throw new Error('corrupted array bson');
    } else if (elementType === constants.BSON_DATA_UNDEFINED) {
      object[name] = undefined;
    } else if (elementType === constants.BSON_DATA_NULL) {
      object[name] = null;
    } else if (elementType === constants.BSON_DATA_LONG) {
      // Unpack the low and high bits
      var _lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      var _highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      var long$$1 = new long_1(_lowBits, _highBits); // Promote the long if possible

      if (promoteLongs && promoteValues === true) {
        object[name] = long$$1.lessThanOrEqual(JS_INT_MAX_LONG) && long$$1.greaterThanOrEqual(JS_INT_MIN_LONG) ? long$$1.toNumber() : long$$1;
      } else {
        object[name] = long$$1;
      }
    } else if (elementType === constants.BSON_DATA_DECIMAL128) {
      // Buffer to contain the decimal bytes
      var bytes = Buffer$4.alloc(16); // Copy the next 16 bytes into the bytes buffer

      buffer$$1.copy(bytes, 0, index, index + 16); // Update index

      index = index + 16; // Assign the new Decimal128 value

      var decimal128$$1 = new decimal128(bytes); // If we have an alternative mapper use that

      object[name] = decimal128$$1.toObject ? decimal128$$1.toObject() : decimal128$$1;
    } else if (elementType === constants.BSON_DATA_BINARY) {
      var binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
      var totalBinarySize = binarySize;
      var subType = buffer$$1[index++]; // Did we have a negative binary size, throw

      if (binarySize < 0) throw new Error('Negative binary type element size found'); // Is the length longer than the document

      if (binarySize > Buffer$4.byteLength(buffer$$1)) throw new Error('Binary type size larger than document size'); // Decode as raw Buffer object if options specifies it

      if (buffer$$1['slice'] != null) {
        // If we have subtype 2 skip the 4 bytes for the size
        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
        }

        if (promoteBuffers && promoteValues) {
          object[name] = buffer$$1.slice(index, index + binarySize);
        } else {
          object[name] = new binary(buffer$$1.slice(index, index + binarySize), subType);
        }
      } else {
        var _buffer = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize); // If we have subtype 2 skip the 4 bytes for the size


        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
        } // Copy the data


        for (i = 0; i < binarySize; i++) {
          _buffer[i] = buffer$$1[index + i];
        }

        if (promoteBuffers && promoteValues) {
          object[name] = _buffer;
        } else {
          object[name] = new binary(_buffer, subType);
        }
      } // Update the index


      index = index + binarySize;
    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === false) {
      // Get the start search index
      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var source = buffer$$1.toString('utf8', index, i); // Create the regexp

      index = i + 1; // Get the start search index

      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var regExpOptions = buffer$$1.toString('utf8', index, i);
      index = i + 1; // For each option add the corresponding one for javascript

      var optionsArray = new Array(regExpOptions.length); // Parse options

      for (i = 0; i < regExpOptions.length; i++) {
        switch (regExpOptions[i]) {
          case 'm':
            optionsArray[i] = 'm';
            break;

          case 's':
            optionsArray[i] = 'g';
            break;

          case 'i':
            optionsArray[i] = 'i';
            break;
        }
      }

      object[name] = new RegExp(source, optionsArray.join(''));
    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === true) {
      // Get the start search index
      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var _source = buffer$$1.toString('utf8', index, i);

      index = i + 1; // Get the start search index

      i = index; // Locate the end of the c string

      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
        i++;
      } // If are at the end of the buffer there is a problem with the document


      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

      var _regExpOptions = buffer$$1.toString('utf8', index, i);

      index = i + 1; // Set the object

      object[name] = new regexp(_source, _regExpOptions);
    } else if (elementType === constants.BSON_DATA_SYMBOL) {
      var _stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      if (_stringSize <= 0 || _stringSize > buffer$$1.length - index || buffer$$1[index + _stringSize - 1] !== 0) throw new Error('bad string length in bson'); // symbol is deprecated - upgrade to string.

      object[name] = buffer$$1.toString('utf8', index, index + _stringSize - 1);
      index = index + _stringSize;
    } else if (elementType === constants.BSON_DATA_TIMESTAMP) {
      var _lowBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      var _highBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      object[name] = new timestamp(_lowBits2, _highBits2);
    } else if (elementType === constants.BSON_DATA_MIN_KEY) {
      object[name] = new min_key();
    } else if (elementType === constants.BSON_DATA_MAX_KEY) {
      object[name] = new max_key();
    } else if (elementType === constants.BSON_DATA_CODE) {
      var _stringSize2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

      if (_stringSize2 <= 0 || _stringSize2 > buffer$$1.length - index || buffer$$1[index + _stringSize2 - 1] !== 0) throw new Error('bad string length in bson');
      var functionString = buffer$$1.toString('utf8', index, index + _stringSize2 - 1); // If we are evaluating the functions

      if (evalFunctions) {
        // If we have cache enabled let's look for the md5 of the function in the cache
        if (cacheFunctions) {
          var hash = cacheFunctionsCrc32 ? crc32(functionString) : functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval

          object[name] = isolateEvalWithHash(functionCache, hash, functionString, object);
        } else {
          object[name] = isolateEval(functionString);
        }
      } else {
        object[name] = new code(functionString);
      } // Update parse index position


      index = index + _stringSize2;
    } else if (elementType === constants.BSON_DATA_CODE_W_SCOPE) {
      var totalSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Element cannot be shorter than totalSize + stringSize + documentSize + terminator

      if (totalSize < 4 + 4 + 4 + 1) {
        throw new Error('code_w_scope total size shorter minimum expected length');
      } // Get the code string size


      var _stringSize3 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


      if (_stringSize3 <= 0 || _stringSize3 > buffer$$1.length - index || buffer$$1[index + _stringSize3 - 1] !== 0) throw new Error('bad string length in bson'); // Javascript function

      var _functionString = buffer$$1.toString('utf8', index, index + _stringSize3 - 1); // Update parse index position


      index = index + _stringSize3; // Parse the element

      var _index3 = index; // Decode the size of the object document

      var _objectSize2 = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24; // Decode the scope object


      var scopeObject = deserializeObject(buffer$$1, _index3, options, false); // Adjust the index

      index = index + _objectSize2; // Check if field length is to short

      if (totalSize < 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error('code_w_scope total size is to short, truncating scope');
      } // Check if totalSize field is to long


      if (totalSize > 4 + 4 + _objectSize2 + _stringSize3) {
        throw new Error('code_w_scope total size is to long, clips outer document');
      } // If we are evaluating the functions


      if (evalFunctions) {
        // If we have cache enabled let's look for the md5 of the function in the cache
        if (cacheFunctions) {
          var _hash = cacheFunctionsCrc32 ? crc32(_functionString) : _functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval


          object[name] = isolateEvalWithHash(functionCache, _hash, _functionString, object);
        } else {
          object[name] = isolateEval(_functionString);
        }

        object[name].scope = scopeObject;
      } else {
        object[name] = new code(_functionString, scopeObject);
      }
    } else if (elementType === constants.BSON_DATA_DBPOINTER) {
      // Get the code string size
      var _stringSize4 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


      if (_stringSize4 <= 0 || _stringSize4 > buffer$$1.length - index || buffer$$1[index + _stringSize4 - 1] !== 0) throw new Error('bad string length in bson'); // Namespace

      if (!validateUtf8$1(buffer$$1, index, index + _stringSize4 - 1)) {
        throw new Error('Invalid UTF-8 string in BSON document');
      }

      var namespace = buffer$$1.toString('utf8', index, index + _stringSize4 - 1); // Update parse index position

      index = index + _stringSize4; // Read the oid

      var oidBuffer = Buffer$4.alloc(12);
      buffer$$1.copy(oidBuffer, 0, index, index + 12);

      var _oid = new objectid(oidBuffer); // Update the index


      index = index + 12; // Upgrade to DBRef type

      object[name] = new db_ref(namespace, _oid);
    } else {
      throw new Error('Detected unknown BSON type ' + elementType.toString(16) + ' for fieldname "' + name + '", are you using the latest BSON parser?');
    }
  } // Check if the deserialization was against a valid array/object


  if (size !== index - startIndex) {
    if (isArray) throw new Error('corrupt array bson');
    throw new Error('corrupt object bson');
  } // check if object's $ keys are those of a DBRef


  var dollarKeys = Object.keys(object).filter(function (k) {
    return k.startsWith('$');
  });
  var valid = true;
  dollarKeys.forEach(function (k) {
    if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
  }); // if a $key not in "$ref", "$id", "$db", don't make a DBRef

  if (!valid) return object;

  if (object['$id'] != null && object['$ref'] != null) {
    var copy = Object.assign({}, object);
    delete copy.$ref;
    delete copy.$id;
    delete copy.$db;
    return new db_ref(object.$ref, object.$id, object.$db || null, copy);
  }

  return object;
}
/**
 * Ensure eval is isolated.
 *
 * @ignore
 * @api private
 */


function isolateEvalWithHash(functionCache, hash, functionString, object) {
  // Contains the value we are going to set
  var value = null; // Check for cache hit, eval if missing and return cached function

  if (functionCache[hash] == null) {
    eval('value = ' + functionString);
    functionCache[hash] = value;
  } // Set the object


  return functionCache[hash].bind(object);
}
/**
 * Ensure eval is isolated.
 *
 * @ignore
 * @api private
 */


function isolateEval(functionString) {
  // Contains the value we are going to set
  var value = null; // Eval the function

  eval('value = ' + functionString);
  return value;
}

var deserializer = deserialize$1;

// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//  * Redistributions of source code must retain the above copyright notice,
//    this list of conditions and the following disclaimer.
//
//  * Redistributions in binary form must reproduce the above copyright notice,
//    this list of conditions and the following disclaimer in the documentation
//    and/or other materials provided with the distribution.
//
//  * Neither the name of Fair Oaks Labs, Inc. nor the names of its contributors
//    may be used to endorse or promote products derived from this software
//    without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
//
// Modifications to writeIEEE754 to support negative zeroes made by Brian White

function readIEEE754(buffer$$1, offset, endian, mLen, nBytes) {
  var e,
      m,
      bBE = endian === 'big',
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = bBE ? 0 : nBytes - 1,
      d = bBE ? 1 : -1,
      s = buffer$$1[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
  }

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
  }

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}

function writeIEEE754(buffer$$1, value, offset, endian, mLen, nBytes) {
  var e,
      m,
      c,
      bBE = endian === 'big',
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      i = bBE ? nBytes - 1 : 0,
      d = bBE ? -1 : 1,
      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  if (isNaN(value)) m = 0;

  while (mLen >= 8) {
    buffer$$1[offset + i] = m & 0xff;
    i += d;
    m /= 256;
    mLen -= 8;
  }

  e = e << mLen | m;
  if (isNaN(value)) e += 8;
  eLen += mLen;

  while (eLen > 0) {
    buffer$$1[offset + i] = e & 0xff;
    i += d;
    e /= 256;
    eLen -= 8;
  }

  buffer$$1[offset + i - d] |= s * 128;
}

var float_parser = {
  readIEEE754: readIEEE754,
  writeIEEE754: writeIEEE754
};

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

var Buffer$5 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
var writeIEEE754$1 = float_parser.writeIEEE754;
var normalizedFunctionString$1 = utils.normalizedFunctionString;
var regexp$1 = /\x00/; // eslint-disable-line no-control-regex

var ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']); // To ensure that 0.4 of node works correctly

var isDate$1 = function isDate(d) {
  return _typeof$3(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
};

var isRegExp$1 = function isRegExp(d) {
  return Object.prototype.toString.call(d) === '[object RegExp]';
};

function serializeString(buffer$$1, key, value, index, isArray) {
  // Encode String type
  buffer$$1[index++] = constants.BSON_DATA_STRING; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes + 1;
  buffer$$1[index - 1] = 0; // Write the string

  var size = buffer$$1.write(value, index + 4, 'utf8'); // Write the size of the string to buffer

  buffer$$1[index + 3] = size + 1 >> 24 & 0xff;
  buffer$$1[index + 2] = size + 1 >> 16 & 0xff;
  buffer$$1[index + 1] = size + 1 >> 8 & 0xff;
  buffer$$1[index] = size + 1 & 0xff; // Update index

  index = index + 4 + size; // Write zero

  buffer$$1[index++] = 0;
  return index;
}

function serializeNumber(buffer$$1, key, value, index, isArray) {
  // We have an integer value
  if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
    // If the value fits in 32 bits encode as int, if it fits in a double
    // encode it as a double, otherwise long
    if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
      // Set int type 32 bits or less
      buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

      var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

      index = index + numberOfWrittenBytes;
      buffer$$1[index++] = 0; // Write the int value

      buffer$$1[index++] = value & 0xff;
      buffer$$1[index++] = value >> 8 & 0xff;
      buffer$$1[index++] = value >> 16 & 0xff;
      buffer$$1[index++] = value >> 24 & 0xff;
    } else if (value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
      // Encode as double
      buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

      var _numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


      index = index + _numberOfWrittenBytes;
      buffer$$1[index++] = 0; // Write float

      writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

      index = index + 8;
    } else {
      // Set long type
      buffer$$1[index++] = constants.BSON_DATA_LONG; // Number of written bytes

      var _numberOfWrittenBytes2 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


      index = index + _numberOfWrittenBytes2;
      buffer$$1[index++] = 0;
      var longVal = long_1.fromNumber(value);
      var lowBits = longVal.getLowBits();
      var highBits = longVal.getHighBits(); // Encode low bits

      buffer$$1[index++] = lowBits & 0xff;
      buffer$$1[index++] = lowBits >> 8 & 0xff;
      buffer$$1[index++] = lowBits >> 16 & 0xff;
      buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

      buffer$$1[index++] = highBits & 0xff;
      buffer$$1[index++] = highBits >> 8 & 0xff;
      buffer$$1[index++] = highBits >> 16 & 0xff;
      buffer$$1[index++] = highBits >> 24 & 0xff;
    }
  } else {
    // Encode as double
    buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

    var _numberOfWrittenBytes3 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    index = index + _numberOfWrittenBytes3;
    buffer$$1[index++] = 0; // Write float

    writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

    index = index + 8;
  }

  return index;
}

function serializeNull(buffer$$1, key, value, index, isArray) {
  // Set long type
  buffer$$1[index++] = constants.BSON_DATA_NULL; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}

function serializeBoolean(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_BOOLEAN; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Encode the boolean value

  buffer$$1[index++] = value ? 1 : 0;
  return index;
}

function serializeDate(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_DATE; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the date

  var dateInMilis = long_1.fromNumber(value.getTime());
  var lowBits = dateInMilis.getLowBits();
  var highBits = dateInMilis.getHighBits(); // Encode low bits

  buffer$$1[index++] = lowBits & 0xff;
  buffer$$1[index++] = lowBits >> 8 & 0xff;
  buffer$$1[index++] = lowBits >> 16 & 0xff;
  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = highBits & 0xff;
  buffer$$1[index++] = highBits >> 8 & 0xff;
  buffer$$1[index++] = highBits >> 16 & 0xff;
  buffer$$1[index++] = highBits >> 24 & 0xff;
  return index;
}

function serializeRegExp(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;

  if (value.source && value.source.match(regexp$1) != null) {
    throw Error('value ' + value.source + ' must not contain null bytes');
  } // Adjust the index


  index = index + buffer$$1.write(value.source, index, 'utf8'); // Write zero

  buffer$$1[index++] = 0x00; // Write the parameters

  if (value.ignoreCase) buffer$$1[index++] = 0x69; // i

  if (value.global) buffer$$1[index++] = 0x73; // s

  if (value.multiline) buffer$$1[index++] = 0x6d; // m
  // Add ending zero

  buffer$$1[index++] = 0x00;
  return index;
}

function serializeBSONRegExp(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Check the pattern for 0 bytes

  if (value.pattern.match(regexp$1) != null) {
    // The BSON spec doesn't allow keys with null bytes because keys are
    // null-terminated.
    throw Error('pattern ' + value.pattern + ' must not contain null bytes');
  } // Adjust the index


  index = index + buffer$$1.write(value.pattern, index, 'utf8'); // Write zero

  buffer$$1[index++] = 0x00; // Write the options

  index = index + buffer$$1.write(value.options.split('').sort().join(''), index, 'utf8'); // Add ending zero

  buffer$$1[index++] = 0x00;
  return index;
}

function serializeMinMax(buffer$$1, key, value, index, isArray) {
  // Write the type of either min or max key
  if (value === null) {
    buffer$$1[index++] = constants.BSON_DATA_NULL;
  } else if (value._bsontype === 'MinKey') {
    buffer$$1[index++] = constants.BSON_DATA_MIN_KEY;
  } else {
    buffer$$1[index++] = constants.BSON_DATA_MAX_KEY;
  } // Number of written bytes


  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  return index;
}

function serializeObjectId(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_OID; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the objectId into the shared buffer

  if (typeof value.id === 'string') {
    buffer$$1.write(value.id, index, 'binary');
  } else if (value.id && value.id.copy) {
    value.id.copy(buffer$$1, index, 0, 12);
  } else {
    throw new TypeError('object [' + JSON.stringify(value) + '] is not a valid ObjectId');
  } // Ajust index


  return index + 12;
}

function serializeBuffer(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Get size of the buffer (current write point)

  var size = value.length; // Write the size of the string to buffer

  buffer$$1[index++] = size & 0xff;
  buffer$$1[index++] = size >> 8 & 0xff;
  buffer$$1[index++] = size >> 16 & 0xff;
  buffer$$1[index++] = size >> 24 & 0xff; // Write the default subtype

  buffer$$1[index++] = constants.BSON_BINARY_SUBTYPE_DEFAULT; // Copy the content form the binary field to the buffer

  value.copy(buffer$$1, index, 0, size); // Adjust the index

  index = index + size;
  return index;
}

function serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray, path) {
  for (var i = 0; i < path.length; i++) {
    if (path[i] === value) throw new Error('cyclic dependency detected');
  } // Push value to stack


  path.push(value); // Write the type

  buffer$$1[index++] = Array.isArray(value) ? constants.BSON_DATA_ARRAY : constants.BSON_DATA_OBJECT; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var endIndex = serializeInto(buffer$$1, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path); // Pop stack

  path.pop();
  return endIndex;
}

function serializeDecimal128(buffer$$1, key, value, index, isArray) {
  buffer$$1[index++] = constants.BSON_DATA_DECIMAL128; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the data from the value

  value.bytes.copy(buffer$$1, index, 0, 16);
  return index + 16;
}

function serializeLong(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = value._bsontype === 'Long' ? constants.BSON_DATA_LONG : constants.BSON_DATA_TIMESTAMP; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the date

  var lowBits = value.getLowBits();
  var highBits = value.getHighBits(); // Encode low bits

  buffer$$1[index++] = lowBits & 0xff;
  buffer$$1[index++] = lowBits >> 8 & 0xff;
  buffer$$1[index++] = lowBits >> 16 & 0xff;
  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

  buffer$$1[index++] = highBits & 0xff;
  buffer$$1[index++] = highBits >> 8 & 0xff;
  buffer$$1[index++] = highBits >> 16 & 0xff;
  buffer$$1[index++] = highBits >> 24 & 0xff;
  return index;
}

function serializeInt32(buffer$$1, key, value, index, isArray) {
  // Set int type 32 bits or less
  buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the int value

  buffer$$1[index++] = value & 0xff;
  buffer$$1[index++] = value >> 8 & 0xff;
  buffer$$1[index++] = value >> 16 & 0xff;
  buffer$$1[index++] = value >> 24 & 0xff;
  return index;
}

function serializeDouble(buffer$$1, key, value, index, isArray) {
  // Encode as double
  buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write float

  writeIEEE754$1(buffer$$1, value.value, index, 'little', 52, 8); // Adjust index

  index = index + 8;
  return index;
}

function serializeFunction(buffer$$1, key, value, index, checkKeys, depth, isArray) {
  buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Function string

  var functionString = normalizedFunctionString$1(value); // Write the string

  var size = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

  buffer$$1[index] = size & 0xff;
  buffer$$1[index + 1] = size >> 8 & 0xff;
  buffer$$1[index + 2] = size >> 16 & 0xff;
  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

  index = index + 4 + size - 1; // Write zero

  buffer$$1[index++] = 0;
  return index;
}

function serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray) {
  if (value.scope && _typeof$3(value.scope) === 'object') {
    // Write the type
    buffer$$1[index++] = constants.BSON_DATA_CODE_W_SCOPE; // Number of written bytes

    var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    index = index + numberOfWrittenBytes;
    buffer$$1[index++] = 0; // Starting index

    var startIndex = index; // Serialize the function
    // Get the function string

    var functionString = typeof value.code === 'string' ? value.code : value.code.toString(); // Index adjustment

    index = index + 4; // Write string into buffer

    var codeSize = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    buffer$$1[index] = codeSize & 0xff;
    buffer$$1[index + 1] = codeSize >> 8 & 0xff;
    buffer$$1[index + 2] = codeSize >> 16 & 0xff;
    buffer$$1[index + 3] = codeSize >> 24 & 0xff; // Write end 0

    buffer$$1[index + 4 + codeSize - 1] = 0; // Write the

    index = index + codeSize + 4; //
    // Serialize the scope value

    var endIndex = serializeInto(buffer$$1, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
    index = endIndex - 1; // Writ the total

    var totalSize = endIndex - startIndex; // Write the total size of the object

    buffer$$1[startIndex++] = totalSize & 0xff;
    buffer$$1[startIndex++] = totalSize >> 8 & 0xff;
    buffer$$1[startIndex++] = totalSize >> 16 & 0xff;
    buffer$$1[startIndex++] = totalSize >> 24 & 0xff; // Write trailing zero

    buffer$$1[index++] = 0;
  } else {
    buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

    var _numberOfWrittenBytes4 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    index = index + _numberOfWrittenBytes4;
    buffer$$1[index++] = 0; // Function string

    var _functionString = value.code.toString(); // Write the string


    var size = buffer$$1.write(_functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    buffer$$1[index] = size & 0xff;
    buffer$$1[index + 1] = size >> 8 & 0xff;
    buffer$$1[index + 2] = size >> 16 & 0xff;
    buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

    index = index + 4 + size - 1; // Write zero

    buffer$$1[index++] = 0;
  }

  return index;
}

function serializeBinary(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Extract the buffer

  var data = value.value(true); // Calculate size

  var size = value.position; // Add the deprecated 02 type 4 bytes of size to total

  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) size = size + 4; // Write the size of the string to buffer

  buffer$$1[index++] = size & 0xff;
  buffer$$1[index++] = size >> 8 & 0xff;
  buffer$$1[index++] = size >> 16 & 0xff;
  buffer$$1[index++] = size >> 24 & 0xff; // Write the subtype to the buffer

  buffer$$1[index++] = value.sub_type; // If we have binary type 2 the 4 first bytes are the size

  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
    size = size - 4;
    buffer$$1[index++] = size & 0xff;
    buffer$$1[index++] = size >> 8 & 0xff;
    buffer$$1[index++] = size >> 16 & 0xff;
    buffer$$1[index++] = size >> 24 & 0xff;
  } // Write the data to the object


  data.copy(buffer$$1, index, 0, value.position); // Adjust the index

  index = index + value.position;
  return index;
}

function serializeSymbol(buffer$$1, key, value, index, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_SYMBOL; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0; // Write the string

  var size = buffer$$1.write(value.value, index + 4, 'utf8') + 1; // Write the size of the string to buffer

  buffer$$1[index] = size & 0xff;
  buffer$$1[index + 1] = size >> 8 & 0xff;
  buffer$$1[index + 2] = size >> 16 & 0xff;
  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

  index = index + 4 + size - 1; // Write zero

  buffer$$1[index++] = 0x00;
  return index;
}

function serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, isArray) {
  // Write the type
  buffer$$1[index++] = constants.BSON_DATA_OBJECT; // Number of written bytes

  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

  index = index + numberOfWrittenBytes;
  buffer$$1[index++] = 0;
  var startIndex = index;
  var endIndex;
  var output = {
    $ref: value.collection || value.namespace,
    // "namespace" was what library 1.x called "collection"
    $id: value.oid
  };
  if (value.db != null) output.$db = value.db;
  output = Object.assign(output, value.fields);
  endIndex = serializeInto(buffer$$1, output, false, index, depth + 1, serializeFunctions); // Calculate object size

  var size = endIndex - startIndex; // Write the size

  buffer$$1[startIndex++] = size & 0xff;
  buffer$$1[startIndex++] = size >> 8 & 0xff;
  buffer$$1[startIndex++] = size >> 16 & 0xff;
  buffer$$1[startIndex++] = size >> 24 & 0xff; // Set index

  return endIndex;
}

function serializeInto(buffer$$1, object, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
  startingIndex = startingIndex || 0;
  path = path || []; // Push the object to the path

  path.push(object); // Start place to serialize into

  var index = startingIndex + 4; // Special case isArray

  if (Array.isArray(object)) {
    // Get object keys
    for (var i = 0; i < object.length; i++) {
      var key = '' + i;
      var value = object[i]; // Is there an override value

      if (value && value.toBSON) {
        if (typeof value.toBSON !== 'function') throw new TypeError('toBSON is not a function');
        value = value.toBSON();
      }

      var type = _typeof$3(value);

      if (type === 'string') {
        index = serializeString(buffer$$1, key, value, index, true);
      } else if (type === 'number') {
        index = serializeNumber(buffer$$1, key, value, index, true);
      } else if (type === 'boolean') {
        index = serializeBoolean(buffer$$1, key, value, index, true);
      } else if (value instanceof Date || isDate$1(value)) {
        index = serializeDate(buffer$$1, key, value, index, true);
      } else if (value === undefined) {
        index = serializeNull(buffer$$1, key, value, index, true);
      } else if (value === null) {
        index = serializeNull(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
        index = serializeObjectId(buffer$$1, key, value, index, true);
      } else if (Buffer$5.isBuffer(value)) {
        index = serializeBuffer(buffer$$1, key, value, index, true);
      } else if (value instanceof RegExp || isRegExp$1(value)) {
        index = serializeRegExp(buffer$$1, key, value, index, true);
      } else if (type === 'object' && value['_bsontype'] == null) {
        index = serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
      } else if (type === 'object' && value['_bsontype'] === 'Decimal128') {
        index = serializeDecimal128(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
        index = serializeLong(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Double') {
        index = serializeDouble(buffer$$1, key, value, index, true);
      } else if (typeof value === 'function' && serializeFunctions) {
        index = serializeFunction(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, true);
      } else if (value['_bsontype'] === 'Code') {
        index = serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
      } else if (value['_bsontype'] === 'Binary') {
        index = serializeBinary(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Symbol') {
        index = serializeSymbol(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'DBRef') {
        index = serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, true);
      } else if (value['_bsontype'] === 'BSONRegExp') {
        index = serializeBSONRegExp(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'Int32') {
        index = serializeInt32(buffer$$1, key, value, index, true);
      } else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
        index = serializeMinMax(buffer$$1, key, value, index, true);
      } else if (typeof value['_bsontype'] !== 'undefined') {
        throw new TypeError('Unrecognized or invalid _bsontype: ' + value['_bsontype']);
      }
    }
  } else if (object instanceof map) {
    var iterator = object.entries();
    var done = false;

    while (!done) {
      // Unpack the next entry
      var entry = iterator.next();
      done = entry.done; // Are we done, then skip and terminate

      if (done) continue; // Get the entry values

      var _key = entry.value[0];
      var _value = entry.value[1]; // Check the type of the value

      var _type = _typeof$3(_value); // Check the key and throw error if it's illegal


      if (typeof _key === 'string' && !ignoreKeys.has(_key)) {
        if (_key.match(regexp$1) != null) {
          // The BSON spec doesn't allow keys with null bytes because keys are
          // null-terminated.
          throw Error('key ' + _key + ' must not contain null bytes');
        }

        if (checkKeys) {
          if ('$' === _key[0]) {
            throw Error('key ' + _key + " must not start with '$'");
          } else if (~_key.indexOf('.')) {
            throw Error('key ' + _key + " must not contain '.'");
          }
        }
      }

      if (_type === 'string') {
        index = serializeString(buffer$$1, _key, _value, index);
      } else if (_type === 'number') {
        index = serializeNumber(buffer$$1, _key, _value, index);
      } else if (_type === 'boolean') {
        index = serializeBoolean(buffer$$1, _key, _value, index);
      } else if (_value instanceof Date || isDate$1(_value)) {
        index = serializeDate(buffer$$1, _key, _value, index);
      } else if (_value === null || _value === undefined && ignoreUndefined === false) {
        index = serializeNull(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'ObjectId' || _value['_bsontype'] === 'ObjectID') {
        index = serializeObjectId(buffer$$1, _key, _value, index);
      } else if (Buffer$5.isBuffer(_value)) {
        index = serializeBuffer(buffer$$1, _key, _value, index);
      } else if (_value instanceof RegExp || isRegExp$1(_value)) {
        index = serializeRegExp(buffer$$1, _key, _value, index);
      } else if (_type === 'object' && _value['_bsontype'] == null) {
        index = serializeObject(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type === 'object' && _value['_bsontype'] === 'Decimal128') {
        index = serializeDecimal128(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Long' || _value['_bsontype'] === 'Timestamp') {
        index = serializeLong(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Double') {
        index = serializeDouble(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Code') {
        index = serializeCode(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value === 'function' && serializeFunctions) {
        index = serializeFunction(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions);
      } else if (_value['_bsontype'] === 'Binary') {
        index = serializeBinary(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Symbol') {
        index = serializeSymbol(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'DBRef') {
        index = serializeDBRef(buffer$$1, _key, _value, index, depth, serializeFunctions);
      } else if (_value['_bsontype'] === 'BSONRegExp') {
        index = serializeBSONRegExp(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'Int32') {
        index = serializeInt32(buffer$$1, _key, _value, index);
      } else if (_value['_bsontype'] === 'MinKey' || _value['_bsontype'] === 'MaxKey') {
        index = serializeMinMax(buffer$$1, _key, _value, index);
      } else if (typeof _value['_bsontype'] !== 'undefined') {
        throw new TypeError('Unrecognized or invalid _bsontype: ' + _value['_bsontype']);
      }
    }
  } else {
    // Did we provide a custom serialization method
    if (object.toBSON) {
      if (typeof object.toBSON !== 'function') throw new TypeError('toBSON is not a function');
      object = object.toBSON();
      if (object != null && _typeof$3(object) !== 'object') throw new TypeError('toBSON function did not return an object');
    } // Iterate over all the keys


    for (var _key2 in object) {
      var _value2 = object[_key2]; // Is there an override value

      if (_value2 && _value2.toBSON) {
        if (typeof _value2.toBSON !== 'function') throw new TypeError('toBSON is not a function');
        _value2 = _value2.toBSON();
      } // Check the type of the value


      var _type2 = _typeof$3(_value2); // Check the key and throw error if it's illegal


      if (typeof _key2 === 'string' && !ignoreKeys.has(_key2)) {
        if (_key2.match(regexp$1) != null) {
          // The BSON spec doesn't allow keys with null bytes because keys are
          // null-terminated.
          throw Error('key ' + _key2 + ' must not contain null bytes');
        }

        if (checkKeys) {
          if ('$' === _key2[0]) {
            throw Error('key ' + _key2 + " must not start with '$'");
          } else if (~_key2.indexOf('.')) {
            throw Error('key ' + _key2 + " must not contain '.'");
          }
        }
      }

      if (_type2 === 'string') {
        index = serializeString(buffer$$1, _key2, _value2, index);
      } else if (_type2 === 'number') {
        index = serializeNumber(buffer$$1, _key2, _value2, index);
      } else if (_type2 === 'boolean') {
        index = serializeBoolean(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof Date || isDate$1(_value2)) {
        index = serializeDate(buffer$$1, _key2, _value2, index);
      } else if (_value2 === undefined) {
        if (ignoreUndefined === false) index = serializeNull(buffer$$1, _key2, _value2, index);
      } else if (_value2 === null) {
        index = serializeNull(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'ObjectId' || _value2['_bsontype'] === 'ObjectID') {
        index = serializeObjectId(buffer$$1, _key2, _value2, index);
      } else if (Buffer$5.isBuffer(_value2)) {
        index = serializeBuffer(buffer$$1, _key2, _value2, index);
      } else if (_value2 instanceof RegExp || isRegExp$1(_value2)) {
        index = serializeRegExp(buffer$$1, _key2, _value2, index);
      } else if (_type2 === 'object' && _value2['_bsontype'] == null) {
        index = serializeObject(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
      } else if (_type2 === 'object' && _value2['_bsontype'] === 'Decimal128') {
        index = serializeDecimal128(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Long' || _value2['_bsontype'] === 'Timestamp') {
        index = serializeLong(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Double') {
        index = serializeDouble(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Code') {
        index = serializeCode(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
      } else if (typeof _value2 === 'function' && serializeFunctions) {
        index = serializeFunction(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions);
      } else if (_value2['_bsontype'] === 'Binary') {
        index = serializeBinary(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Symbol') {
        index = serializeSymbol(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'DBRef') {
        index = serializeDBRef(buffer$$1, _key2, _value2, index, depth, serializeFunctions);
      } else if (_value2['_bsontype'] === 'BSONRegExp') {
        index = serializeBSONRegExp(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'Int32') {
        index = serializeInt32(buffer$$1, _key2, _value2, index);
      } else if (_value2['_bsontype'] === 'MinKey' || _value2['_bsontype'] === 'MaxKey') {
        index = serializeMinMax(buffer$$1, _key2, _value2, index);
      } else if (typeof _value2['_bsontype'] !== 'undefined') {
        throw new TypeError('Unrecognized or invalid _bsontype: ' + _value2['_bsontype']);
      }
    }
  } // Remove the path


  path.pop(); // Final padding byte for object

  buffer$$1[index++] = 0x00; // Final size

  var size = index - startingIndex; // Write the size of the object

  buffer$$1[startingIndex++] = size & 0xff;
  buffer$$1[startingIndex++] = size >> 8 & 0xff;
  buffer$$1[startingIndex++] = size >> 16 & 0xff;
  buffer$$1[startingIndex++] = size >> 24 & 0xff;
  return index;
}

var serializer = serializeInto;

function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

var Buffer$6 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
var normalizedFunctionString$2 = utils.normalizedFunctionString; // To ensure that 0.4 of node works correctly

function isDate$2(d) {
  return _typeof$4(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
}

function calculateObjectSize(object, serializeFunctions, ignoreUndefined) {
  var totalLength = 4 + 1;

  if (Array.isArray(object)) {
    for (var i = 0; i < object.length; i++) {
      totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
    }
  } else {
    // If we have toBSON defined, override the current object
    if (object.toBSON) {
      object = object.toBSON();
    } // Calculate size


    for (var key in object) {
      totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
    }
  }

  return totalLength;
}
/**
 * @ignore
 * @api private
 */


function calculateElement(name, value, serializeFunctions, isArray, ignoreUndefined) {
  // If we have toBSON defined, override the current object
  if (value && value.toBSON) {
    value = value.toBSON();
  }

  switch (_typeof$4(value)) {
    case 'string':
      return 1 + Buffer$6.byteLength(name, 'utf8') + 1 + 4 + Buffer$6.byteLength(value, 'utf8') + 1;

    case 'number':
      if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
        if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
          // 32 bit
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (4 + 1);
        } else {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
        }
      } else {
        // 64 bit
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
      }

    case 'undefined':
      if (isArray || !ignoreUndefined) return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1;
      return 0;

    case 'boolean':
      return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (1 + 1);

    case 'object':
      if (value == null || value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1;
      } else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (12 + 1);
      } else if (value instanceof Date || isDate$2(value)) {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
      } else if (typeof Buffer$6 !== 'undefined' && Buffer$6.isBuffer(value)) {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (1 + 4 + 1) + value.length;
      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Double' || value['_bsontype'] === 'Timestamp') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
      } else if (value['_bsontype'] === 'Decimal128') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (16 + 1);
      } else if (value['_bsontype'] === 'Code') {
        // Calculate size depending on the availability of a scope
        if (value.scope != null && Object.keys(value.scope).length > 0) {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(value.code.toString(), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
        } else {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$6.byteLength(value.code.toString(), 'utf8') + 1;
        }
      } else if (value['_bsontype'] === 'Binary') {
        // Check what kind of subtype we have
        if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1 + 4);
        } else {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1);
        }
      } else if (value['_bsontype'] === 'Symbol') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + Buffer$6.byteLength(value.value, 'utf8') + 4 + 1 + 1;
      } else if (value['_bsontype'] === 'DBRef') {
        // Set up correct object for serialization
        var ordered_values = Object.assign({
          $ref: value.collection,
          $id: value.oid
        }, value.fields); // Add db reference if it exists

        if (value.db != null) {
          ordered_values['$db'] = value.db;
        }

        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + calculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined);
      } else if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
      } else if (value['_bsontype'] === 'BSONRegExp') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.pattern, 'utf8') + 1 + Buffer$6.byteLength(value.options, 'utf8') + 1;
      } else {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + calculateObjectSize(value, serializeFunctions, ignoreUndefined) + 1;
      }

    case 'function':
      // WTF for 0.4.X where typeof /someregexp/ === 'function'
      if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]' || String.call(value) === '[object RegExp]') {
        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
      } else {
        if (serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
        } else if (serializeFunctions) {
          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value), 'utf8') + 1;
        }
      }

  }

  return 0;
}

var calculate_size = calculateObjectSize;

var Buffer$7 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer;
/**
 * Makes sure that, if a Uint8Array is passed in, it is wrapped in a Buffer.
 *
 * @param {Buffer|Uint8Array} potentialBuffer The potential buffer
 * @returns {Buffer} the input if potentialBuffer is a buffer, or a buffer that
 * wraps a passed in Uint8Array
 * @throws {TypeError} If anything other than a Buffer or Uint8Array is passed in
 */

var ensure_buffer = function ensureBuffer(potentialBuffer) {
  if (potentialBuffer instanceof Buffer$7) {
    return potentialBuffer;
  }

  if (potentialBuffer instanceof Uint8Array) {
    return Buffer$7.from(potentialBuffer.buffer);
  }

  throw new TypeError('Must use either Buffer or Uint8Array');
};

var Buffer$8 = __WEBPACK_IMPORTED_MODULE_1_buffer___default.a.Buffer; // Parts of the parser

/**
 * @ignore
 */
// Default Max Size

var MAXSIZE = 1024 * 1024 * 17; // Current Internal Temporary Serialization Buffer

var buffer$1 = Buffer$8.alloc(MAXSIZE);
/**
 * Sets the size of the internal serialization buffer.
 *
 * @method
 * @param {number} size The desired size for the internal serialization buffer
 */

function setInternalBufferSize(size) {
  // Resize the internal serialization buffer if needed
  if (buffer$1.length < size) {
    buffer$1 = Buffer$8.alloc(size);
  }
}
/**
 * Serialize a Javascript object.
 *
 * @param {Object} object the Javascript object to serialize.
 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
 * @return {Buffer} returns the Buffer object containing the serialized object.
 */


function serialize$1(object, options) {
  options = options || {}; // Unpack the options

  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
  var minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE; // Resize the internal serialization buffer if needed

  if (buffer$1.length < minInternalBufferSize) {
    buffer$1 = Buffer$8.alloc(minInternalBufferSize);
  } // Attempt to serialize


  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []); // Create the final buffer

  var finishedBuffer = Buffer$8.alloc(serializationIndex); // Copy into the finished buffer

  buffer$1.copy(finishedBuffer, 0, 0, finishedBuffer.length); // Return the buffer

  return finishedBuffer;
}
/**
 * Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.
 *
 * @param {Object} object the Javascript object to serialize.
 * @param {Buffer} buffer the Buffer you pre-allocated to store the serialized BSON object.
 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
 * @param {Number} [options.index] the index in the buffer where we wish to start serializing into.
 * @return {Number} returns the index pointing to the last written byte in the buffer.
 */


function serializeWithBufferAndIndex(object, finalBuffer, options) {
  options = options || {}; // Unpack the options

  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
  var startIndex = typeof options.index === 'number' ? options.index : 0; // Attempt to serialize

  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
  buffer$1.copy(finalBuffer, startIndex, 0, serializationIndex); // Return the index

  return startIndex + serializationIndex - 1;
}
/**
 * Deserialize data as BSON.
 *
 * @param {Buffer} buffer the buffer containing the serialized set of BSON documents.
 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
 * @param {boolean} [options.allowObjectSmallerThanBufferSize=false] allows the buffer to be larger than the parsed BSON object
 * @return {Object} returns the deserialized Javascript Object.
 */


function deserialize$2(buffer$$1, options) {
  buffer$$1 = ensure_buffer(buffer$$1);
  return deserializer(buffer$$1, options);
}
/**
 * Calculate the bson size for a passed in Javascript object.
 *
 * @param {Object} object the Javascript object to calculate the BSON byte size for.
 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
 * @return {Number} returns the number of bytes the BSON object will take up.
 */


function calculateObjectSize$1(object, options) {
  options = options || {};
  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
  return calculate_size(object, serializeFunctions, ignoreUndefined);
}
/**
 * Deserialize stream data as BSON documents.
 *
 * @param {Buffer} data the buffer containing the serialized set of BSON documents.
 * @param {Number} startIndex the start index in the data Buffer where the deserialization is to start.
 * @param {Number} numberOfDocuments number of documents to deserialize.
 * @param {Array} documents an array where to store the deserialized documents.
 * @param {Number} docStartIndex the index in the documents array from where to start inserting documents.
 * @param {Object} [options] additional options used for the deserialization.
 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
 * @return {Number} returns the next index in the buffer after deserialization **x** numbers of documents.
 */


function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
  options = Object.assign({
    allowObjectSmallerThanBufferSize: true
  }, options);
  data = ensure_buffer(data);
  var index = startIndex; // Loop over all documents

  for (var i = 0; i < numberOfDocuments; i++) {
    // Find size of the document
    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24; // Update options with index

    options.index = index; // Parse the document at this point

    documents[docStartIndex + i] = deserializer(data, options); // Adjust index by the document size

    index = index + size;
  } // Return object containing end index of parsing and list of documents


  return index;
}

var bson = {
  // constants
  // NOTE: this is done this way because rollup can't resolve an `Object.assign`ed export
  BSON_INT32_MAX: constants.BSON_INT32_MAX,
  BSON_INT32_MIN: constants.BSON_INT32_MIN,
  BSON_INT64_MAX: constants.BSON_INT64_MAX,
  BSON_INT64_MIN: constants.BSON_INT64_MIN,
  JS_INT_MAX: constants.JS_INT_MAX,
  JS_INT_MIN: constants.JS_INT_MIN,
  BSON_DATA_NUMBER: constants.BSON_DATA_NUMBER,
  BSON_DATA_STRING: constants.BSON_DATA_STRING,
  BSON_DATA_OBJECT: constants.BSON_DATA_OBJECT,
  BSON_DATA_ARRAY: constants.BSON_DATA_ARRAY,
  BSON_DATA_BINARY: constants.BSON_DATA_BINARY,
  BSON_DATA_UNDEFINED: constants.BSON_DATA_UNDEFINED,
  BSON_DATA_OID: constants.BSON_DATA_OID,
  BSON_DATA_BOOLEAN: constants.BSON_DATA_BOOLEAN,
  BSON_DATA_DATE: constants.BSON_DATA_DATE,
  BSON_DATA_NULL: constants.BSON_DATA_NULL,
  BSON_DATA_REGEXP: constants.BSON_DATA_REGEXP,
  BSON_DATA_DBPOINTER: constants.BSON_DATA_DBPOINTER,
  BSON_DATA_CODE: constants.BSON_DATA_CODE,
  BSON_DATA_SYMBOL: constants.BSON_DATA_SYMBOL,
  BSON_DATA_CODE_W_SCOPE: constants.BSON_DATA_CODE_W_SCOPE,
  BSON_DATA_INT: constants.BSON_DATA_INT,
  BSON_DATA_TIMESTAMP: constants.BSON_DATA_TIMESTAMP,
  BSON_DATA_LONG: constants.BSON_DATA_LONG,
  BSON_DATA_DECIMAL128: constants.BSON_DATA_DECIMAL128,
  BSON_DATA_MIN_KEY: constants.BSON_DATA_MIN_KEY,
  BSON_DATA_MAX_KEY: constants.BSON_DATA_MAX_KEY,
  BSON_BINARY_SUBTYPE_DEFAULT: constants.BSON_BINARY_SUBTYPE_DEFAULT,
  BSON_BINARY_SUBTYPE_FUNCTION: constants.BSON_BINARY_SUBTYPE_FUNCTION,
  BSON_BINARY_SUBTYPE_BYTE_ARRAY: constants.BSON_BINARY_SUBTYPE_BYTE_ARRAY,
  BSON_BINARY_SUBTYPE_UUID: constants.BSON_BINARY_SUBTYPE_UUID,
  BSON_BINARY_SUBTYPE_MD5: constants.BSON_BINARY_SUBTYPE_MD5,
  BSON_BINARY_SUBTYPE_USER_DEFINED: constants.BSON_BINARY_SUBTYPE_USER_DEFINED,
  // wrapped types
  Code: code,
  Map: map,
  BSONSymbol: symbol,
  DBRef: db_ref,
  Binary: binary,
  ObjectId: objectid,
  Long: long_1,
  Timestamp: timestamp,
  Double: double_1,
  Int32: int_32,
  MinKey: min_key,
  MaxKey: max_key,
  BSONRegExp: regexp,
  Decimal128: decimal128,
  // methods
  serialize: serialize$1,
  serializeWithBufferAndIndex: serializeWithBufferAndIndex,
  deserialize: deserialize$2,
  calculateObjectSize: calculateObjectSize$1,
  deserializeStream: deserializeStream,
  setInternalBufferSize: setInternalBufferSize,
  // legacy support
  ObjectID: objectid,
  // Extended JSON
  EJSON: extended_json
};
var bson_1 = bson.BSON_INT32_MAX;
var bson_2 = bson.BSON_INT32_MIN;
var bson_3 = bson.BSON_INT64_MAX;
var bson_4 = bson.BSON_INT64_MIN;
var bson_5 = bson.JS_INT_MAX;
var bson_6 = bson.JS_INT_MIN;
var bson_7 = bson.BSON_DATA_NUMBER;
var bson_8 = bson.BSON_DATA_STRING;
var bson_9 = bson.BSON_DATA_OBJECT;
var bson_10 = bson.BSON_DATA_ARRAY;
var bson_11 = bson.BSON_DATA_BINARY;
var bson_12 = bson.BSON_DATA_UNDEFINED;
var bson_13 = bson.BSON_DATA_OID;
var bson_14 = bson.BSON_DATA_BOOLEAN;
var bson_15 = bson.BSON_DATA_DATE;
var bson_16 = bson.BSON_DATA_NULL;
var bson_17 = bson.BSON_DATA_REGEXP;
var bson_18 = bson.BSON_DATA_DBPOINTER;
var bson_19 = bson.BSON_DATA_CODE;
var bson_20 = bson.BSON_DATA_SYMBOL;
var bson_21 = bson.BSON_DATA_CODE_W_SCOPE;
var bson_22 = bson.BSON_DATA_INT;
var bson_23 = bson.BSON_DATA_TIMESTAMP;
var bson_24 = bson.BSON_DATA_LONG;
var bson_25 = bson.BSON_DATA_DECIMAL128;
var bson_26 = bson.BSON_DATA_MIN_KEY;
var bson_27 = bson.BSON_DATA_MAX_KEY;
var bson_28 = bson.BSON_BINARY_SUBTYPE_DEFAULT;
var bson_29 = bson.BSON_BINARY_SUBTYPE_FUNCTION;
var bson_30 = bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
var bson_31 = bson.BSON_BINARY_SUBTYPE_UUID;
var bson_32 = bson.BSON_BINARY_SUBTYPE_MD5;
var bson_33 = bson.BSON_BINARY_SUBTYPE_USER_DEFINED;
var bson_34 = bson.Code;
var bson_35 = bson.BSONSymbol;
var bson_36 = bson.DBRef;
var bson_37 = bson.Binary;
var bson_38 = bson.ObjectId;
var bson_39 = bson.Long;
var bson_40 = bson.Timestamp;
var bson_41 = bson.Double;
var bson_42 = bson.Int32;
var bson_43 = bson.MinKey;
var bson_44 = bson.MaxKey;
var bson_45 = bson.BSONRegExp;
var bson_46 = bson.Decimal128;
var bson_47 = bson.serialize;
var bson_48 = bson.serializeWithBufferAndIndex;
var bson_49 = bson.deserialize;
var bson_50 = bson.calculateObjectSize;
var bson_51 = bson.deserializeStream;
var bson_52 = bson.setInternalBufferSize;
var bson_53 = bson.ObjectID;
var bson_54 = bson.EJSON;

/* harmony default export */ __webpack_exports__["default"] = (bson);


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18), __webpack_require__(19).Buffer))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(36)
var ieee754 = __webpack_require__(37)
var isArray = __webpack_require__(38)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlProtocolBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SdlProtocolListener_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport_TransportListener_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transport_TransportConfigBase_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_Version_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_FrameType_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__MessageFrameAssembler_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SdlPacket_js__ = __webpack_require__(1);
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
        this.reset();

        this._createTransportListener();
        this._transportManager = null; //The transport manager should be created

    }

    /**
     * Listens for transport-related events and handles them here
     * @private
     */
    _createTransportListener() {
        this._transportListener = new __WEBPACK_IMPORTED_MODULE_1__transport_TransportListener_js__["a" /* TransportListener */]();
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
        this._protocol_version = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */](1, 0, 0);
        this._headerSize = SdlProtocolBase.V1_HEADER_SIZE;
        this.serviceStatus = new Map();
        this.serviceStatus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].CONTROL] = true;
        this._mtus = new Map();
        this._mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - this._headerSize;
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
            this.protocolVersion = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */]("5.1.0"); //protect for future, proxy only supports v5 or lower
            headerSize = SdlProtocolBase.V2_HEADER_SIZE;
            mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V3_V4_MTU_SIZE;
        } else if (version == 5) {
            this.protocolVersion = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */]("5.0.0");
            headerSize = SdlProtocolBase.V2_HEADER_SIZE;
            mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V3_V4_MTU_SIZE;
        } else if (version == 4) {
            this.protocolVersion = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */]("4.0.0");
            headerSize = SdlProtocolBase.V2_HEADER_SIZE;
            mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V3_V4_MTU_SIZE; //versions 4 supports 128k MTU
        } else if (version == 3) {
            this.protocolVersion = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */]("3.0.0");
            headerSize = SdlProtocolBase.V2_HEADER_SIZE;
            mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V3_V4_MTU_SIZE; //versions 3 supports 128k MTU
        } else if (version == 2) {
            this.protocolVersion = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */]("2.0.0");
            headerSize = SdlProtocolBase.V2_HEADER_SIZE;
            mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - headerSize;
        } else if (version == 1) {
            this.protocolVersion = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */]("1.0.0");
            headerSize = SdlProtocolBase.V1_HEADER_SIZE;
            mtus[__WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - headerSize;
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
            let sdlPacket = new __WEBPACK_IMPORTED_MODULE_7__SdlPacket_js__["a" /* SdlPacket */](this._protocol_version.getMajor(), false);
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
        if (sdlPacket.getFrameType() == __WEBPACK_IMPORTED_MODULE_5__enums_FrameType_js__["a" /* FrameType */].FIRST || sdlPacket.getFrameType() == __WEBPACK_IMPORTED_MODULE_5__enums_FrameType_js__["a" /* FrameType */].CONSECUTIVE) {
            messageFrameAssembler = _getMessageFrameAssembler(sdlPacket);
            messageFrameAssembler.handleFrame(sdlPacket);
        } else {
            //Packet can be handled as is
            switch (sdlPacket.getFrameType()) {
                case __WEBPACK_IMPORTED_MODULE_5__enums_FrameType_js__["a" /* FrameType */].CONTROL:
                    this._handleControlPacket(sdlPacket);
                    break;
                case __WEBPACK_IMPORTED_MODULE_5__enums_FrameType_js__["a" /* FrameType */].SINGLE:
                    switch (sdlPacket.getServiceType()) {
                        case __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC:
                            this._handleRPCPacket(sdlPacket)
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
            messageFrameAssembler = Object(__WEBPACK_IMPORTED_MODULE_6__MessageFrameAssembler_js__["a" /* MessageFrameAssembler */])(this._headerSize, new function (sdlPacket) {
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
            case __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].RPC:
            case __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].CONTROL:
            case __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].HYBRID:
            case __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].AUDIO:
            case __WEBPACK_IMPORTED_MODULE_4__enums_ServiceType_js__["a" /* ServiceType */].VIDEO:
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
        if (this._protocol_version.getMajor() == 1) {
            //There is no binary frame header

        }
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
SdlProtocolBase.MAX_PROTOCOL_VERSION        = new __WEBPACK_IMPORTED_MODULE_3__util_Version_js__["a" /* Version */](5, 2, 0);




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportListener; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__protocol_SdlPacket_js__ = __webpack_require__(1);
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
    constructor () {
        this._onTransportConnected = null;
        this._onTransportDisconnected = null;
        this._onError = null;
        this._onPacketReceived = null;
    }

    /**
     * @param {Function} func
     * @return {TransportListener}
     */
    setOnTransportConnected (func) {
        this._onTransportConnected = func;

        return this;
    }

    /**
     * @param {Function} func
     * @return {TransportListener}
     */
    setOnTransportDisconnected (func) {
        this._onTransportDisconnected = func;

        return this;
    }

    /**
     * @param {Function} func
     * @return {TransportListener}
     */
    setOnError (func) {
        this._onError = func;

        return this;
    }

    /**
     * @param {Function} func
     * @return {TransportListener}
     */
    setOnPacketReceived (func) {
        this._onPacketReceived = func;

        return this;
    }


    onTransportConnected () {
        if (typeof this._onTransportConnected === 'function') {
            this._onTransportConnected();
        }
    }

    onTransportDisconnected () {
        if (typeof this._onTransportDisconnected === 'function') {
            this._onTransportDisconnected();
        }
    }

    onError (error = null) {
        if (typeof this._onError === 'function') {
            this._onError(error);
        }
    }

    onPacketReceived (sdlPacket) {
        if (typeof this._onPacketReceived === 'function') {
            this._onPacketReceived(sdlPacket);
        }
    }
}




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportConfigBase; });
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



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Version; });
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



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpcNotification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcMessage_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_RpcType_js__ = __webpack_require__(5);
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




class RpcNotification extends __WEBPACK_IMPORTED_MODULE_0__RpcMessage_js__["a" /* RpcMessage */] {

	/**
    * @constructor
    */
    constructor(store) {
        super(store);
        this.setRPCType(__WEBPACK_IMPORTED_MODULE_1__enums_RpcType_js__["a" /* RpcType */].NOTIFICATION);
    }

}



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpcRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcMessage_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_RpcType_js__ = __webpack_require__(5);
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





class RpcRequest extends __WEBPACK_IMPORTED_MODULE_0__RpcMessage_js__["a" /* RpcMessage */] {

    /**
    * @constructor
    */
    constructor(store) {
        super(store);
        this.setRPCType(__WEBPACK_IMPORTED_MODULE_1__enums_RpcType_js__["a" /* RpcType */].REQUEST);
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



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RpcResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcMessage_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_RpcType_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_Result_js__ = __webpack_require__(27);
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





class RpcResponse extends __WEBPACK_IMPORTED_MODULE_0__RpcMessage_js__["a" /* RpcMessage */] {

    /**
    * @constructor
    */
    constructor(store) {
        super(store);
        this.setRPCType(__WEBPACK_IMPORTED_MODULE_1__enums_RpcType_js__["a" /* RpcType */].RESPONSE);
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
        return this.getObject(__WEBPACK_IMPORTED_MODULE_2__enums_Result_js__["a" /* Result */], KEY_RESULT_CODE);
    }

    /**
    * @return {RpcResponse}
    */
    setResultCode(resultCode) {
        this.validateType(__WEBPACK_IMPORTED_MODULE_2__enums_Result_js__["a" /* Result */], resultCode);

        this.setParameter(KEY_RESULT_CODE, resultCode);
        return this;
    }
}

RpcResponse.KEY_SUCCESS     = 'success';
RpcResponse.KEY_INFO        = 'info';
RpcResponse.KEY_RESULT_CODE = 'resultCode';




/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Result; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class Result extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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




/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class ImageType extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class Language extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Image; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcStruct_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_ImageType_js__ = __webpack_require__(28);
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




class Image extends __WEBPACK_IMPORTED_MODULE_0__RpcStruct_js__["a" /* RpcStruct */] {

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
        this.validateType(__WEBPACK_IMPORTED_MODULE_1__enums_ImageType_js__["a" /* ImageType */], type);

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




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuParams; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcStruct_js__ = __webpack_require__(7);
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



class MenuParams extends __WEBPACK_IMPORTED_MODULE_0__RpcStruct_js__["a" /* RpcStruct */] {

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




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlSessionListener; });
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
    constructor () {
    
    }

    /**
     * @param {String} info 
     * @param {Boolean} availablePrimary 
     * @param {TransportConfigBase} transportConfig 
     */
    onTransportDisconnected (info, availablePrimary, transportConfig) {
        throw 'onTransportDisconnected method must be overridden';
    }

    /**
     * @param {String} info 
     * @param {Error} e 
     */
    onTransportError (info, e) {
        throw 'onTransportError method must be overridden';
    }
	
    /**
     * @param {ProtocolMessage} msg 
     */
    onProtocolMessageReceived (msg) {
        throw 'onProtocolMessageReceived method must be overridden';
    }
	
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {Number} version - represents a byte 
     * @param {String} correlationID
     * @param {Array<String>} rejectedParams
     */
    onProtocolSessionStartedNACKed (serviceType, sessionID, version, correlationID, rejectedParams) {
        throw 'onProtocolSessionStartedNACKed method must be overridden';
    }
	
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {Number} version - represents a byte 
     * @param {String} correlationID
     * @param {Number} hashID
     * @param {Boolean} isEncrypted
     */
    onProtocolSessionStarted (serviceType, sessionID, version, correlationID, hashID, isEncrypted) {
        throw 'onProtocolSessionStarted method must be overridden';
    }
	
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {String} correlationID
     */
    onProtocolSessionEnded (serviceType, sessionID, correlationID) {
        throw 'onProtocolSessionEnded method must be overridden';
    }
	
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {String} correlationID
     */
    onProtocolSessionEndedNACKed (serviceType, sessionID, correlationID) {
        throw 'onProtocolSessionEndedNACKed method must be overridden';
    }
	
    /**
     * @param {String} info 
     * @param {Error} e 
     */
    onProtocolError (info, e) {
        throw 'onProtocolError method must be overridden';
    }

    /**
     * @param {ServiceType} serviceType 
     * @param {Number} dataSize
     * @param {Number} sessionID - represents a byte 
     */
    onProtocolServiceDataACK (serviceType, dataSize, sessionID) {
        throw 'onProtocolServiceDataACK method must be overridden';
    }

    /**
     * @param {String} authToken
     * @param {Number} sessionID - represents a byte 
     */
    onAuthTokenReceived (authToken, sessionID) {
        throw 'onAuthTokenReceived method must be overridden';
    }
}



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_manager_SdlManager_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_manager_lifecycle_LifecycleManager_js__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_protocol_BinaryFrameHeader_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_protocol_MessageFrameAssembler_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_protocol_ProtocolMessage_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_protocol_SdlPacket_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_protocol_SdlProtocolBase_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_protocol_SdlProtocolListener_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_protocol_enums_ControlFrameTags_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_protocol_enums_FrameType_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_protocol_enums_ServiceType_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rpc_RpcMessage_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_rpc_RpcNotification_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_rpc_RpcRequest_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_rpc_RpcResponse_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_rpc_RpcStruct_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_rpc_enums_FunctionID_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_rpc_enums_ImageType_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_rpc_enums_Language_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_rpc_enums_Result_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_rpc_enums_RpcType_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_rpc_messages_AddCommand_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_rpc_messages_AddCommandResponse_js__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_rpc_messages_OnLanguageChange_js__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_rpc_structs_Image_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_rpc_structs_MenuParams_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_session_SdlSession_js__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_session_SdlSessionListener_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_transport_SdlPsm_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_transport_SslConfig_js__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_transport_TransportBase_js__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_transport_TransportConfigBase_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_transport_TransportListener_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_transport_TransportManagerBase_js__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_transport_WsConnection_js__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_transport_enums_TransportType_js__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_util_BitConverter_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_util_Bson_js__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_util_Enum_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_util_JsonRpcMarshaller_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_util_Version_js__ = __webpack_require__(23);
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
        SdlManager: __WEBPACK_IMPORTED_MODULE_0__src_manager_SdlManager_js__["a" /* SdlManager */],
        lifecycle: {
            LifecycleManager: __WEBPACK_IMPORTED_MODULE_1__src_manager_lifecycle_LifecycleManager_js__["a" /* LifecycleManager */]
        }
    },
    protocol: {
        BinaryFrameHeader: __WEBPACK_IMPORTED_MODULE_2__src_protocol_BinaryFrameHeader_js__["a" /* BinaryFrameHeader */],
        MessageFrameAssembler: __WEBPACK_IMPORTED_MODULE_3__src_protocol_MessageFrameAssembler_js__["a" /* MessageFrameAssembler */],
        ProtocolMessage: __WEBPACK_IMPORTED_MODULE_4__src_protocol_ProtocolMessage_js__["a" /* ProtocolMessage */],
        SdlPacket: __WEBPACK_IMPORTED_MODULE_5__src_protocol_SdlPacket_js__["a" /* SdlPacket */],
        SdlProtocolBase: __WEBPACK_IMPORTED_MODULE_6__src_protocol_SdlProtocolBase_js__["a" /* SdlProtocolBase */],
        SdlProtocolListener: __WEBPACK_IMPORTED_MODULE_7__src_protocol_SdlProtocolListener_js__["a" /* SdlProtocolListener */],
        enums: {
            ControlFrameTags: __WEBPACK_IMPORTED_MODULE_8__src_protocol_enums_ControlFrameTags_js__["a" /* ControlFrameTags */],
            FrameType: __WEBPACK_IMPORTED_MODULE_9__src_protocol_enums_FrameType_js__["a" /* FrameType */],
            ServiceType: __WEBPACK_IMPORTED_MODULE_10__src_protocol_enums_ServiceType_js__["a" /* ServiceType */]
        }
    },
    rpc: {
        RpcMessage: __WEBPACK_IMPORTED_MODULE_11__src_rpc_RpcMessage_js__["a" /* RpcMessage */],
        RpcNotification: __WEBPACK_IMPORTED_MODULE_12__src_rpc_RpcNotification_js__["a" /* RpcNotification */],
        RpcRequest: __WEBPACK_IMPORTED_MODULE_13__src_rpc_RpcRequest_js__["a" /* RpcRequest */],
        RpcResponse: __WEBPACK_IMPORTED_MODULE_14__src_rpc_RpcResponse_js__["a" /* RpcResponse */],
        RpcStruct: __WEBPACK_IMPORTED_MODULE_15__src_rpc_RpcStruct_js__["a" /* RpcStruct */],
        enums: {
            FunctionID: __WEBPACK_IMPORTED_MODULE_16__src_rpc_enums_FunctionID_js__["a" /* FunctionID */],
            ImageType: __WEBPACK_IMPORTED_MODULE_17__src_rpc_enums_ImageType_js__["a" /* ImageType */],
            Language: __WEBPACK_IMPORTED_MODULE_18__src_rpc_enums_Language_js__["a" /* Language */],
            Result: __WEBPACK_IMPORTED_MODULE_19__src_rpc_enums_Result_js__["a" /* Result */],
            RpcType: __WEBPACK_IMPORTED_MODULE_20__src_rpc_enums_RpcType_js__["a" /* RpcType */]
        },
        messages: {
            AddCommand: __WEBPACK_IMPORTED_MODULE_21__src_rpc_messages_AddCommand_js__["a" /* AddCommand */],
            AddCommandResponse: __WEBPACK_IMPORTED_MODULE_22__src_rpc_messages_AddCommandResponse_js__["a" /* AddCommandResponse */],
            OnLanguageChange: __WEBPACK_IMPORTED_MODULE_23__src_rpc_messages_OnLanguageChange_js__["a" /* OnLanguageChange */]
        },
        structs: {
            Image: __WEBPACK_IMPORTED_MODULE_24__src_rpc_structs_Image_js__["a" /* Image */],
            MenuParams: __WEBPACK_IMPORTED_MODULE_25__src_rpc_structs_MenuParams_js__["a" /* MenuParams */]
        }
    },
    session: {
        SdlSession: __WEBPACK_IMPORTED_MODULE_26__src_session_SdlSession_js__["a" /* SdlSession */],
        SdlSessionListener: __WEBPACK_IMPORTED_MODULE_27__src_session_SdlSessionListener_js__["a" /* SdlSessionListener */]
    },
    transport: {
        SdlPsm: __WEBPACK_IMPORTED_MODULE_28__src_transport_SdlPsm_js__["a" /* SdlPsm */],
        SslConfig: __WEBPACK_IMPORTED_MODULE_29__src_transport_SslConfig_js__["a" /* SslConfig */],
        TransportBase: __WEBPACK_IMPORTED_MODULE_30__src_transport_TransportBase_js__["a" /* TransportBase */],
        TransportConfigBase: __WEBPACK_IMPORTED_MODULE_31__src_transport_TransportConfigBase_js__["a" /* TransportConfigBase */],
        TransportListener: __WEBPACK_IMPORTED_MODULE_32__src_transport_TransportListener_js__["a" /* TransportListener */],
        TransportManagerBase: __WEBPACK_IMPORTED_MODULE_33__src_transport_TransportManagerBase_js__["a" /* TransportManagerBase */],
        WsConnection: __WEBPACK_IMPORTED_MODULE_34__src_transport_WsConnection_js__["a" /* WsConnection */],
        enums: {
            TransportType: __WEBPACK_IMPORTED_MODULE_35__src_transport_enums_TransportType_js__["a" /* TransportType */]
        }
    },
    util: {
        BitConverter: __WEBPACK_IMPORTED_MODULE_36__src_util_BitConverter_js__["a" /* BitConverter */],
        Bson: __WEBPACK_IMPORTED_MODULE_37__src_util_Bson_js__["a" /* Bson */],
        Enum: __WEBPACK_IMPORTED_MODULE_38__src_util_Enum_js__["a" /* Enum */],
        JsonRpcMarshaller: __WEBPACK_IMPORTED_MODULE_39__src_util_JsonRpcMarshaller_js__["a" /* JsonRpcMarshaller */],
        Version: __WEBPACK_IMPORTED_MODULE_40__src_util_Version_js__["a" /* Version */]
    }
}

/* harmony default export */ __webpack_exports__["default"] = (SDL);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_BitConverter__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transport_SdlPsm__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rpc_enums_FunctionID__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rpc_enums_RpcType__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__protocol_MessageFrameAssembler__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__protocol_BinaryFrameHeader__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__protocol_SdlPacket__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_JsonRpcMarshaller__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__protocol_ProtocolMessage__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_events__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_events___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_events__);
const EVENTS = {
    RPC_RESPONSE: `RPC_RESPONSE`, //clients using wsappmanager should be able to use the async function call sendRPCJson instead of listening for a response.

    RPC_NOTIFICATION: `RPC_NOTIFICATION`,
    // RPC_SEND: `RPC_SEND`,

    // The app probably only needs to listen on APP_REGISTERED which means that the session is created.
    // The app can listen to SESSION_CREATED to get mtu, hashId, sessionId immediately or just request them from the manager.
    APP_REGISTERED: `APP_REGISTERED`,
    SESSION_CREATED: `SESSION_CREATED`,

    // These two are informational. The client does not need to manage these directly.
    START_SERVICE_ACK: `START_SERVICE_ACK`,
    END_SERVICE_ACK: `END_SERVICE_ACK`,

};














class SdlManager extends __WEBPACK_IMPORTED_MODULE_9_events___default.a {

    constructor ({appConfig, sdlConnectionPrimary, sdlConnectionSecondary}) {
        super();
        this.sdlConnectionPrimary = sdlConnectionPrimary;

        this.sdlConnectionPrimary.addListener(this);


        this.app = appConfig;

        this.mtu = 1000;

        this.maxMessageId = 1;
        this.maxCorrelationId = 1;

        this.sessionId = null;

        this.hashId = null;

        this.rpcTimeout = 1000 * 100;

        this.messageFrameAssemblerByMessageId = {};
        this.currentSdlPsm = null;

        this.dataChunksSentToCoreCount = 0;
        this.sdlPsm = new __WEBPACK_IMPORTED_MODULE_1__transport_SdlPsm__["a" /* SdlPsm */]();
    }

    static async create(opts) {
        let obj = new this(opts);

        await obj._init();

        return obj;
    }

    async startApp() {
        return this._initApp();
    }

    async _init() {

        let self = this;

        await this._initEventsHandler();

    }



    /**
     * HMI issue caused non-response from core when registering the app.
     * 
     * Core will not respond to app registration until hmi is good.
     */
    async _initApp() {
        await this._sendInitRequest();
        await this._registerAppInterface();
    }


    async sendRPCJson(
        { method, params, bulkData }
    ) {

        let id = ++this.maxCorrelationId;

        let rpcMessage = new RpcMessage(
            {
                functionName: method,
                parameters: params,
                rpcType: __WEBPACK_IMPORTED_MODULE_3__rpc_enums_RpcType__["a" /* RpcType */].REQUEST,
                correlationId: id, //
            }
        );

        if (bulkData) {
            rpcMessage.setBulkData(bulkData);
        }

        let result = await this.sendRPC(rpcMessage);

        return result;
    }


    async sendRPC(rpcMessage, timeout = this.rpcTimeout) {
        let self = this;
        let constructor = self.constructor;
        //TODO get these right.
        let sessionId = self.sessionId;
        let requestMessageID = this.maxMessageId++;

        console.log(`sendRPC`,{
            // rpcMessage, //should have the correlationId set already.
            // sessionId,
            // requestMessageID,
            mtu: this.mtu, //mtu may be unkown for register app.
            rpcMessage,
            sessionId,
            messageId: requestMessageID,
            version: this.version
            // mtu
        })

        let correlationId = rpcMessage.getCorrelationId();


        let timeoutHandler;
        return new Promise(async function(resolve, reject) {
            let onRPCResponse = function(data) {
                console.log(`rpc response`,data);
                let {id} = data;
                if (id === correlationId)
                {
                    self.removeListener(EVENTS.RPC_RESPONSE, onRPCResponse);
                    clearTimeout(timeoutHandler);
                    return resolve(data);
                }
                else {
                    console.log(`correlationId mismatch ${id} ${correlationId}`)
                }

            };

            self.on(EVENTS.RPC_RESPONSE, onRPCResponse);

            timeoutHandler = setTimeout(function() {
                console.log(`Timeout for request`);
                self.removeListener(EVENTS.RPC_RESPONSE, onRPCResponse);
                return reject(`Timeout for request`);
            }, timeout);

            console.log(`Sending request ${rpcMessage.getFunctionName()}`);

            let pm = __WEBPACK_IMPORTED_MODULE_8__protocol_ProtocolMessage__["a" /* ProtocolMessage */].buildRPC({
                mtu: self.mtu, //mtu may be unkown for register app.
                rpcMessage,
                sessionId,
                messageId: requestMessageID,
                version: self.version
            }, function(dataChunk) {
                    if (!dataChunk) {
                        console.log(`finished`);
                        return;
                    }
                    console.log(`WsAppManager got data chunk`,dataChunk);
                    self.sendDataToCore(dataChunk);
                }
            );
            // self.emit(EVENTS.RPC_SEND, { rpcMessage, pm });

        });
    }

    _doEmit(event,data) {
        console.log(`_doEmit`,event,data);
        if (!event) {
            throw new Error(`event must be defined`);
        }
        this.emit(event,data);
    }

    _sendDataToCore(data) {
        this.sdlConnectionPrimary.send(data);
    }


    async _sendInitRequest() {
        let self = this;
        let constructor = this.constructor;

        let app = this.app;

        let {syncMsgVersion} = app;

        let protocolVersion = '' + syncMsgVersion.majorVersion 
        + '.' + (syncMsgVersion.minorVersion ? syncMsgVersion.minorVersion : '0')
        + '.' +  (syncMsgVersion.patchVersion ? syncMsgVersion.patchVersion : '0');

        let connectionRequest = __WEBPACK_IMPORTED_MODULE_8__protocol_ProtocolMessage__["a" /* ProtocolMessage */].constructInitRequest({ protocolVersion });

        return new Promise(function (resolve) {
            self._sendDataToCore(connectionRequest);
            self.once(EVENTS.START_SERVICE_ACK, async function () {
                resolve();
            });
        });
    }


    async _registerAppInterface() {


        let app = this.app;

        console.log(`_registerAppInterface`,{app: this.app})
        // If omitted, then the previous state of an app's commands, etc. will not be restored.
        //         When sending hashID, all RegisterAppInterface parameters should still be provided (e.g. ttsName, etc.).
        let rpcResponse = await this.sendRPCJson(
            {
                method: 'RegisterAppInterface',
                params: app,
            }
        );

        this._doEmit(EVENTS.APP_REGISTERED,rpcResponse);
    }

    async _initEventsHandler() {
        let self = this;
        let constructor = self.constructor;

        // listen for own emitted event and handle it.
        self.on(EVENTS.RPC_RESPONSE + `.OnSystemRequest`, (data) => {
            this._handleOnSystemRequest(data);
        });
    }

    async _handleOnSystemRequest(data) {
        console.log(`WsAppManager`,`handleOnSystemRequest`,data);
        let { method, params, bulkData } = data;

        let { fileType, requestType, url } = params;

        if (url && bulkData && requestType === 'PROPRIETARY') {
            return this._handlePolicyTableUpdate(data);
        }
    }

    async _handlePolicyTableUpdate(data)
    {
        return;
    }


    onByte(byte) {
        let self = this;
        let sdlPsm = self.sdlPsm;

        if (!self.psmTimeout) {
            self.psmTimeout = setTimeout(function () {
                console.error(`failed sdlPsm timeout`, sdlPsm, sdlPsm.getState(), `failed sdlPsm`);
            }, self.rpcTimeout);
        }

        let success = sdlPsm.handleByte(byte);
        if (!success) {
            console.error(`failed`,sdlPsm);
            process.exit(1);
        }
        let isFinished = sdlPsm.getState() === __WEBPACK_IMPORTED_MODULE_1__transport_SdlPsm__["a" /* SdlPsm */].FINISHED_STATE;

        if (isFinished) {
            clearTimeout(self.psmTimeout);
            self.psmTimeout = null;
            const packet = sdlPsm.getFormedPacket();
            sdlPsm.reset();
            self.handlePacketReceived(packet);
        }
    }

}


SdlManager.EVENTS = EVENTS;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(14)))

/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports["bson"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(3)
var ieee754 = __webpack_require__(4)
var isArray = __webpack_require__(5)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function (global, factory) {
	 true ? factory(exports, __webpack_require__(6), __webpack_require__(1)) :
	typeof define === 'function' && define.amd ? define(['exports', 'long', 'buffer'], factory) :
	(factory((global.BSON = {}),global.long,global.Buffer));
}(this, (function (exports,long,buffer) { 'use strict';

	long = long && long.hasOwnProperty('default') ? long['default'] : long;
	buffer = buffer && buffer.hasOwnProperty('default') ? buffer['default'] : buffer;

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	function getCjsExportFromNamespace (n) {
		return n && n.default || n;
	}

	var map = createCommonjsModule(function (module) {

	  if (typeof commonjsGlobal.Map !== 'undefined') {
	    module.exports = commonjsGlobal.Map;
	    module.exports.Map = commonjsGlobal.Map;
	  } else {
	    // We will return a polyfill
	    var Map = function Map(array) {
	      this._keys = [];
	      this._values = {};

	      for (var i = 0; i < array.length; i++) {
	        if (array[i] == null) continue; // skip null and undefined

	        var entry = array[i];
	        var key = entry[0];
	        var value = entry[1]; // Add the key to the list of keys in order

	        this._keys.push(key); // Add the key and value to the values dictionary with a point
	        // to the location in the ordered keys list


	        this._values[key] = {
	          v: value,
	          i: this._keys.length - 1
	        };
	      }
	    };

	    Map.prototype.clear = function () {
	      this._keys = [];
	      this._values = {};
	    };

	    Map.prototype.delete = function (key) {
	      var value = this._values[key];
	      if (value == null) return false; // Delete entry

	      delete this._values[key]; // Remove the key from the ordered keys list

	      this._keys.splice(value.i, 1);

	      return true;
	    };

	    Map.prototype.entries = function () {
	      var self = this;
	      var index = 0;
	      return {
	        next: function next() {
	          var key = self._keys[index++];
	          return {
	            value: key !== undefined ? [key, self._values[key].v] : undefined,
	            done: key !== undefined ? false : true
	          };
	        }
	      };
	    };

	    Map.prototype.forEach = function (callback, self) {
	      self = self || this;

	      for (var i = 0; i < this._keys.length; i++) {
	        var key = this._keys[i]; // Call the forEach callback

	        callback.call(self, this._values[key].v, key, self);
	      }
	    };

	    Map.prototype.get = function (key) {
	      return this._values[key] ? this._values[key].v : undefined;
	    };

	    Map.prototype.has = function (key) {
	      return this._values[key] != null;
	    };

	    Map.prototype.keys = function () {
	      var self = this;
	      var index = 0;
	      return {
	        next: function next() {
	          var key = self._keys[index++];
	          return {
	            value: key !== undefined ? key : undefined,
	            done: key !== undefined ? false : true
	          };
	        }
	      };
	    };

	    Map.prototype.set = function (key, value) {
	      if (this._values[key]) {
	        this._values[key].v = value;
	        return this;
	      } // Add the key to the list of keys in order


	      this._keys.push(key); // Add the key and value to the values dictionary with a point
	      // to the location in the ordered keys list


	      this._values[key] = {
	        v: value,
	        i: this._keys.length - 1
	      };
	      return this;
	    };

	    Map.prototype.values = function () {
	      var self = this;
	      var index = 0;
	      return {
	        next: function next() {
	          var key = self._keys[index++];
	          return {
	            value: key !== undefined ? self._values[key].v : undefined,
	            done: key !== undefined ? false : true
	          };
	        }
	      };
	    }; // Last ismaster


	    Object.defineProperty(Map.prototype, 'size', {
	      enumerable: true,
	      get: function get() {
	        return this._keys.length;
	      }
	    });
	    module.exports = Map;
	  }
	});
	var map_1 = map.Map;

	/**
	 * @ignore
	 */


	long.prototype.toExtendedJSON = function (options) {
	  if (options && options.relaxed) return this.toNumber();
	  return {
	    $numberLong: this.toString()
	  };
	};
	/**
	 * @ignore
	 */


	long.fromExtendedJSON = function (doc, options) {
	  var result = long.fromString(doc.$numberLong);
	  return options && options.relaxed ? result.toNumber() : result;
	};

	Object.defineProperty(long.prototype, '_bsontype', {
	  value: 'Long'
	});
	var long_1 = long;

	/**
	 * A class representation of the BSON Double type.
	 */

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

	var Double =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a Double type
	   *
	   * @param {number} value the number we want to represent as a double.
	   * @return {Double}
	   */
	  function Double(value) {
	    _classCallCheck(this, Double);

	    this.value = value;
	  }
	  /**
	   * Access the number value.
	   *
	   * @method
	   * @return {number} returns the wrapped double number.
	   */


	  _createClass(Double, [{
	    key: "valueOf",
	    value: function valueOf() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",
	    value: function toExtendedJSON(options) {
	      if (options && options.relaxed && isFinite(this.value)) return this.value;
	      return {
	        $numberDouble: this.value.toString()
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc, options) {
	      return options && options.relaxed ? parseFloat(doc.$numberDouble) : new Double(parseFloat(doc.$numberDouble));
	    }
	  }]);

	  return Double;
	}();

	Object.defineProperty(Double.prototype, '_bsontype', {
	  value: 'Double'
	});
	var double_1 = Double;

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	/**
	 * @class
	 * @param {number} low  the low (signed) 32 bits of the Timestamp.
	 * @param {number} high the high (signed) 32 bits of the Timestamp.
	 * @return {Timestamp}
	 */


	var Timestamp =
	/*#__PURE__*/
	function (_Long) {
	  _inherits(Timestamp, _Long);

	  function Timestamp(low, high) {
	    var _this;

	    _classCallCheck$1(this, Timestamp);

	    if (long_1.isLong(low)) {
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low.low, low.high));
	    } else {
	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low, high));
	    }

	    return _possibleConstructorReturn(_this);
	  }
	  /**
	   * Return the JSON value.
	   *
	   * @method
	   * @return {String} the JSON representation.
	   */


	  _createClass$1(Timestamp, [{
	    key: "toJSON",
	    value: function toJSON() {
	      return {
	        $timestamp: this.toString()
	      };
	    }
	    /**
	     * Returns a Timestamp represented by the given (32-bit) integer value.
	     *
	     * @method
	     * @param {number} value the 32-bit integer in question.
	     * @return {Timestamp} the timestamp.
	     */

	  }, {
	    key: "toExtendedJSON",

	    /**
	     * @ignore
	     */
	    value: function toExtendedJSON() {
	      return {
	        $timestamp: {
	          t: this.high,
	          i: this.low
	        }
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromInt",
	    value: function fromInt(value) {
	      return new Timestamp(long_1.fromInt(value));
	    }
	    /**
	     * Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.
	     *
	     * @method
	     * @param {number} value the number in question.
	     * @return {Timestamp} the timestamp.
	     */

	  }, {
	    key: "fromNumber",
	    value: function fromNumber(value) {
	      return new Timestamp(long_1.fromNumber(value));
	    }
	    /**
	     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
	     *
	     * @method
	     * @param {number} lowBits the low 32-bits.
	     * @param {number} highBits the high 32-bits.
	     * @return {Timestamp} the timestamp.
	     */

	  }, {
	    key: "fromBits",
	    value: function fromBits(lowBits, highBits) {
	      return new Timestamp(lowBits, highBits);
	    }
	    /**
	     * Returns a Timestamp from the given string, optionally using the given radix.
	     *
	     * @method
	     * @param {String} str the textual representation of the Timestamp.
	     * @param {number} [opt_radix] the radix in which the text is written.
	     * @return {Timestamp} the timestamp.
	     */

	  }, {
	    key: "fromString",
	    value: function fromString(str, opt_radix) {
	      return new Timestamp(long_1.fromString(str, opt_radix));
	    }
	  }, {
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      return new Timestamp(doc.$timestamp.i, doc.$timestamp.t);
	    }
	  }]);

	  return Timestamp;
	}(long_1);

	Object.defineProperty(Timestamp.prototype, '_bsontype', {
	  value: 'Timestamp'
	});
	var timestamp = Timestamp;

	var empty = {};

	var empty$1 = /*#__PURE__*/Object.freeze({
		default: empty
	});

	var require$$0 = getCjsExportFromNamespace(empty$1);

	/* global window */

	/**
	 * Normalizes our expected stringified form of a function across versions of node
	 * @param {Function} fn The function to stringify
	 */


	function normalizedFunctionString(fn) {
	  return fn.toString().replace('function(', 'function (');
	}

	function insecureRandomBytes(size) {
	  var result = new Uint8Array(size);

	  for (var i = 0; i < size; ++i) {
	    result[i] = Math.floor(Math.random() * 256);
	  }

	  return result;
	}

	var randomBytes = insecureRandomBytes;

	if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
	  randomBytes = function randomBytes(size) {
	    return window.crypto.getRandomValues(new Uint8Array(size));
	  };
	} else {
	  try {
	    randomBytes = require$$0.randomBytes;
	  } catch (e) {} // keep the fallback
	  // NOTE: in transpiled cases the above require might return null/undefined


	  if (randomBytes == null) {
	    randomBytes = insecureRandomBytes;
	  }
	}

	var utils = {
	  normalizedFunctionString: normalizedFunctionString,
	  randomBytes: randomBytes
	};

	// shim for using process in browser
	// based off https://github.com/defunctzombie/node-process/blob/master/browser.js
	function defaultSetTimout() {
	  throw new Error('setTimeout has not been defined');
	}

	function defaultClearTimeout() {
	  throw new Error('clearTimeout has not been defined');
	}

	var cachedSetTimeout = defaultSetTimout;
	var cachedClearTimeout = defaultClearTimeout;

	if (typeof global.setTimeout === 'function') {
	  cachedSetTimeout = setTimeout;
	}

	if (typeof global.clearTimeout === 'function') {
	  cachedClearTimeout = clearTimeout;
	}

	function runTimeout(fun) {
	  if (cachedSetTimeout === setTimeout) {
	    //normal enviroments in sane situations
	    return setTimeout(fun, 0);
	  } // if setTimeout wasn't available but was latter defined


	  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	    cachedSetTimeout = setTimeout;
	    return setTimeout(fun, 0);
	  }

	  try {
	    // when when somebody has screwed with setTimeout but no I.E. maddness
	    return cachedSetTimeout(fun, 0);
	  } catch (e) {
	    try {
	      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	      return cachedSetTimeout.call(null, fun, 0);
	    } catch (e) {
	      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	      return cachedSetTimeout.call(this, fun, 0);
	    }
	  }
	}

	function runClearTimeout(marker) {
	  if (cachedClearTimeout === clearTimeout) {
	    //normal enviroments in sane situations
	    return clearTimeout(marker);
	  } // if clearTimeout wasn't available but was latter defined


	  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	    cachedClearTimeout = clearTimeout;
	    return clearTimeout(marker);
	  }

	  try {
	    // when when somebody has screwed with setTimeout but no I.E. maddness
	    return cachedClearTimeout(marker);
	  } catch (e) {
	    try {
	      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	      return cachedClearTimeout.call(null, marker);
	    } catch (e) {
	      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	      return cachedClearTimeout.call(this, marker);
	    }
	  }
	}

	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	  if (!draining || !currentQueue) {
	    return;
	  }

	  draining = false;

	  if (currentQueue.length) {
	    queue = currentQueue.concat(queue);
	  } else {
	    queueIndex = -1;
	  }

	  if (queue.length) {
	    drainQueue();
	  }
	}

	function drainQueue() {
	  if (draining) {
	    return;
	  }

	  var timeout = runTimeout(cleanUpNextTick);
	  draining = true;
	  var len = queue.length;

	  while (len) {
	    currentQueue = queue;
	    queue = [];

	    while (++queueIndex < len) {
	      if (currentQueue) {
	        currentQueue[queueIndex].run();
	      }
	    }

	    queueIndex = -1;
	    len = queue.length;
	  }

	  currentQueue = null;
	  draining = false;
	  runClearTimeout(timeout);
	}

	function nextTick(fun) {
	  var args = new Array(arguments.length - 1);

	  if (arguments.length > 1) {
	    for (var i = 1; i < arguments.length; i++) {
	      args[i - 1] = arguments[i];
	    }
	  }

	  queue.push(new Item(fun, args));

	  if (queue.length === 1 && !draining) {
	    runTimeout(drainQueue);
	  }
	} // v8 likes predictible objects

	function Item(fun, array) {
	  this.fun = fun;
	  this.array = array;
	}

	Item.prototype.run = function () {
	  this.fun.apply(null, this.array);
	};

	var title = 'browser';
	var platform = 'browser';
	var browser = true;
	var env = {};
	var argv = [];
	var version = ''; // empty string to avoid regexp issues

	var versions = {};
	var release = {};
	var config = {};

	function noop() {}

	var on = noop;
	var addListener = noop;
	var once = noop;
	var off = noop;
	var removeListener = noop;
	var removeAllListeners = noop;
	var emit = noop;
	function binding(name) {
	  throw new Error('process.binding is not supported');
	}
	function cwd() {
	  return '/';
	}
	function chdir(dir) {
	  throw new Error('process.chdir is not supported');
	}
	function umask() {
	  return 0;
	} // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js

	var performance = global.performance || {};

	var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
	  return new Date().getTime();
	}; // generate timestamp or delta
	// see http://nodejs.org/api/process.html#process_process_hrtime


	function hrtime(previousTimestamp) {
	  var clocktime = performanceNow.call(performance) * 1e-3;
	  var seconds = Math.floor(clocktime);
	  var nanoseconds = Math.floor(clocktime % 1 * 1e9);

	  if (previousTimestamp) {
	    seconds = seconds - previousTimestamp[0];
	    nanoseconds = nanoseconds - previousTimestamp[1];

	    if (nanoseconds < 0) {
	      seconds--;
	      nanoseconds += 1e9;
	    }
	  }

	  return [seconds, nanoseconds];
	}
	var startTime = new Date();
	function uptime() {
	  var currentTime = new Date();
	  var dif = currentTime - startTime;
	  return dif / 1000;
	}
	var process = {
	  nextTick: nextTick,
	  title: title,
	  browser: browser,
	  env: env,
	  argv: argv,
	  version: version,
	  versions: versions,
	  on: on,
	  addListener: addListener,
	  once: once,
	  off: off,
	  removeListener: removeListener,
	  removeAllListeners: removeAllListeners,
	  emit: emit,
	  binding: binding,
	  cwd: cwd,
	  chdir: chdir,
	  umask: umask,
	  hrtime: hrtime,
	  platform: platform,
	  release: release,
	  config: config,
	  uptime: uptime
	};

	var inherits;

	if (typeof Object.create === 'function') {
	  inherits = function inherits(ctor, superCtor) {
	    // implementation from standard node.js 'util' module
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  inherits = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;

	    var TempCtor = function TempCtor() {};

	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}

	var inherits$1 = inherits;

	function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
	var formatRegExp = /%[sdj%]/g;
	function format(f) {
	  if (!isString(f)) {
	    var objects = [];

	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }

	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function (x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;

	    switch (x) {
	      case '%s':
	        return String(args[i++]);

	      case '%d':
	        return Number(args[i++]);

	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }

	      default:
	        return x;
	    }
	  });

	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }

	  return str;
	}
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.

	function deprecate(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function () {
	      return deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  var warned = false;

	  function deprecated() {
	    if (!warned) {
	      {
	        console.error(msg);
	      }

	      warned = true;
	    }

	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	}
	var debugs = {};
	var debugEnviron;
	function debuglog(set) {
	  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();

	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = 0;

	      debugs[set] = function () {
	        var msg = format.apply(null, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function () {};
	    }
	  }

	  return debugs[set];
	}
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */

	/* legacy: obj, showHidden, depth, colors*/

	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  }; // legacy...

	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];

	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    _extend(ctx, opts);
	  } // set default options


	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	} // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

	inspect.colors = {
	  'bold': [1, 22],
	  'italic': [3, 23],
	  'underline': [4, 24],
	  'inverse': [7, 27],
	  'white': [37, 39],
	  'grey': [90, 39],
	  'black': [30, 39],
	  'blue': [34, 39],
	  'cyan': [36, 39],
	  'green': [32, 39],
	  'magenta': [35, 39],
	  'red': [31, 39],
	  'yellow': [33, 39]
	}; // Don't use 'blue' not visible on cmd.exe

	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};

	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}

	function stylizeNoColor(str, styleType) {
	  return str;
	}

	function arrayToHash(array) {
	  var hash = {};
	  array.forEach(function (val, idx) {
	    hash[val] = true;
	  });
	  return hash;
	}

	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
	  value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
	  !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);

	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }

	    return ret;
	  } // Primitive types cannot have properties


	  var primitive = formatPrimitive(ctx, value);

	  if (primitive) {
	    return primitive;
	  } // Look up the keys of the object.


	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  } // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


	  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  } // Some type of object without properties can be shortcutted.


	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }

	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }

	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }

	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '',
	      array = false,
	      braces = ['{', '}']; // Make Array say that they are Array

	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  } // Make functions say that they are functions


	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  } // Make RegExps say that they are RegExps


	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  } // Make dates with properties first say the date


	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  } // Make error with message first say the error


	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);
	  var output;

	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function (key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();
	  return reduceToSingleString(output, base, braces);
	}

	function formatPrimitive(ctx, value) {
	  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }

	  if (isNumber(value)) return ctx.stylize('' + value, 'number');
	  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

	  if (isNull(value)) return ctx.stylize('null', 'null');
	}

	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}

	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];

	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
	    } else {
	      output.push('');
	    }
	  }

	  keys.forEach(function (key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
	    }
	  });
	  return output;
	}

	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || {
	    value: value[key]
	  };

	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }

	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }

	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }

	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function (line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function (line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }

	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }

	    name = JSON.stringify('' + key);

	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}

	function reduceToSingleString(output, base, braces) {
	  var length = output.reduce(function (prev, cur) {
	    if (cur.indexOf('\n') >= 0) ;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	} // NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.


	function isArray(ar) {
	  return Array.isArray(ar);
	}
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	function isString(arg) {
	  return typeof arg === 'string';
	}
	function isSymbol(arg) {
	  return _typeof$1(arg) === 'symbol';
	}
	function isUndefined(arg) {
	  return arg === void 0;
	}
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	function isObject(arg) {
	  return _typeof$1(arg) === 'object' && arg !== null;
	}
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	function isError(e) {
	  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	function isPrimitive(arg) {
	  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof$1(arg) === 'symbol' || // ES6 symbol
	  typeof arg === 'undefined';
	}
	function isBuffer(maybeBuf) {
	  return Buffer.isBuffer(maybeBuf);
	}

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}

	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

	function timestamp$1() {
	  var d = new Date();
	  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	} // log is just a thin wrapper to console.log that prepends a timestamp


	function log() {
	  console.log('%s - %s', timestamp$1(), format.apply(null, arguments));
	}
	function _extend(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	  var keys = Object.keys(add);
	  var i = keys.length;

	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }

	  return origin;
	}

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var util = {
	  inherits: inherits$1,
	  _extend: _extend,
	  log: log,
	  isBuffer: isBuffer,
	  isPrimitive: isPrimitive,
	  isFunction: isFunction,
	  isError: isError,
	  isDate: isDate,
	  isObject: isObject,
	  isRegExp: isRegExp,
	  isUndefined: isUndefined,
	  isSymbol: isSymbol,
	  isString: isString,
	  isNumber: isNumber,
	  isNullOrUndefined: isNullOrUndefined,
	  isNull: isNull,
	  isBoolean: isBoolean,
	  isArray: isArray,
	  inspect: inspect,
	  deprecate: deprecate,
	  format: format,
	  debuglog: debuglog
	};

	var util$1 = /*#__PURE__*/Object.freeze({
		format: format,
		deprecate: deprecate,
		debuglog: debuglog,
		inspect: inspect,
		isArray: isArray,
		isBoolean: isBoolean,
		isNull: isNull,
		isNullOrUndefined: isNullOrUndefined,
		isNumber: isNumber,
		isString: isString,
		isSymbol: isSymbol,
		isUndefined: isUndefined,
		isRegExp: isRegExp,
		isObject: isObject,
		isDate: isDate,
		isError: isError,
		isFunction: isFunction,
		isPrimitive: isPrimitive,
		isBuffer: isBuffer,
		log: log,
		inherits: inherits$1,
		_extend: _extend,
		default: util
	});

	var util$2 = getCjsExportFromNamespace(util$1);

	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

	var Buffer$1 = buffer.Buffer;
	var randomBytes$1 = utils.randomBytes;
	var deprecate$1 = util$2.deprecate; // constants

	var PROCESS_UNIQUE = randomBytes$1(5); // Regular expression that checks for hex value

	var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
	var hasBufferType = false; // Check if buffer exists

	try {
	  if (Buffer$1 && Buffer$1.from) hasBufferType = true;
	} catch (err) {
	  hasBufferType = false;
	} // Precomputed hex table enables speedy hex string conversion


	var hexTable = [];

	for (var _i = 0; _i < 256; _i++) {
	  hexTable[_i] = (_i <= 15 ? '0' : '') + _i.toString(16);
	} // Lookup tables


	var decodeLookup = [];
	var i = 0;

	while (i < 10) {
	  decodeLookup[0x30 + i] = i++;
	}

	while (i < 16) {
	  decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
	}

	var _Buffer = Buffer$1;

	function convertToHex(bytes) {
	  return bytes.toString('hex');
	}

	function makeObjectIdError(invalidString, index) {
	  var invalidCharacter = invalidString[index];
	  return new TypeError("ObjectId string \"".concat(invalidString, "\" contains invalid character \"").concat(invalidCharacter, "\" with character code (").concat(invalidString.charCodeAt(index), "). All character codes for a non-hex string must be less than 256."));
	}
	/**
	 * A class representation of the BSON ObjectId type.
	 */


	var ObjectId =
	/*#__PURE__*/
	function () {
	  /**
	   * Create an ObjectId type
	   *
	   * @param {(string|Buffer|number)} id Can be a 24 byte hex string, 12 byte binary Buffer, or a Number.
	   * @property {number} generationTime The generation time of this ObjectId instance
	   * @return {ObjectId} instance of ObjectId.
	   */
	  function ObjectId(id) {
	    _classCallCheck$2(this, ObjectId);

	    // Duck-typing to support ObjectId from different npm packages
	    if (id instanceof ObjectId) return id; // The most common usecase (blank id, new objectId instance)

	    if (id == null || typeof id === 'number') {
	      // Generate a new id
	      this.id = ObjectId.generate(id); // If we are caching the hex string

	      if (ObjectId.cacheHexString) this.__id = this.toString('hex'); // Return the object

	      return;
	    } // Check if the passed in id is valid


	    var valid = ObjectId.isValid(id); // Throw an error if it's not a valid setup

	    if (!valid && id != null) {
	      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
	    } else if (valid && typeof id === 'string' && id.length === 24 && hasBufferType) {
	      return new ObjectId(Buffer$1.from(id, 'hex'));
	    } else if (valid && typeof id === 'string' && id.length === 24) {
	      return ObjectId.createFromHexString(id);
	    } else if (id != null && id.length === 12) {
	      // assume 12 byte string
	      this.id = id;
	    } else if (id != null && id.toHexString) {
	      // Duck-typing to support ObjectId from different npm packages
	      return ObjectId.createFromHexString(id.toHexString());
	    } else {
	      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
	    }

	    if (ObjectId.cacheHexString) this.__id = this.toString('hex');
	  }
	  /**
	   * Return the ObjectId id as a 24 byte hex string representation
	   *
	   * @method
	   * @return {string} return the 24 byte hex string representation.
	   */


	  _createClass$2(ObjectId, [{
	    key: "toHexString",
	    value: function toHexString() {
	      if (ObjectId.cacheHexString && this.__id) return this.__id;
	      var hexString = '';

	      if (!this.id || !this.id.length) {
	        throw new TypeError('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
	      }

	      if (this.id instanceof _Buffer) {
	        hexString = convertToHex(this.id);
	        if (ObjectId.cacheHexString) this.__id = hexString;
	        return hexString;
	      }

	      for (var _i2 = 0; _i2 < this.id.length; _i2++) {
	        var hexChar = hexTable[this.id.charCodeAt(_i2)];

	        if (typeof hexChar !== 'string') {
	          throw makeObjectIdError(this.id, _i2);
	        }

	        hexString += hexChar;
	      }

	      if (ObjectId.cacheHexString) this.__id = hexString;
	      return hexString;
	    }
	    /**
	     * Update the ObjectId index used in generating new ObjectId's on the driver
	     *
	     * @method
	     * @return {number} returns next index value.
	     * @ignore
	     */

	  }, {
	    key: "toString",

	    /**
	     * Converts the id into a 24 byte hex string for printing
	     *
	     * @param {String} format The Buffer toString format parameter.
	     * @return {String} return the 24 byte hex string representation.
	     * @ignore
	     */
	    value: function toString(format) {
	      // Is the id a buffer then use the buffer toString method to return the format
	      if (this.id && this.id.copy) {
	        return this.id.toString(typeof format === 'string' ? format : 'hex');
	      }

	      return this.toHexString();
	    }
	    /**
	     * Converts to its JSON representation.
	     *
	     * @return {String} return the 24 byte hex string representation.
	     * @ignore
	     */

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.toHexString();
	    }
	    /**
	     * Compares the equality of this ObjectId with `otherID`.
	     *
	     * @method
	     * @param {object} otherId ObjectId instance to compare against.
	     * @return {boolean} the result of comparing two ObjectId's
	     */

	  }, {
	    key: "equals",
	    value: function equals(otherId) {
	      if (otherId instanceof ObjectId) {
	        return this.toString() === otherId.toString();
	      }

	      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12 && this.id instanceof _Buffer) {
	        return otherId === this.id.toString('binary');
	      }

	      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 24) {
	        return otherId.toLowerCase() === this.toHexString();
	      }

	      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12) {
	        return otherId === this.id;
	      }

	      if (otherId != null && (otherId instanceof ObjectId || otherId.toHexString)) {
	        return otherId.toHexString() === this.toHexString();
	      }

	      return false;
	    }
	    /**
	     * Returns the generation date (accurate up to the second) that this ID was generated.
	     *
	     * @method
	     * @return {Date} the generation date
	     */

	  }, {
	    key: "getTimestamp",
	    value: function getTimestamp() {
	      var timestamp = new Date();
	      var time = this.id.readUInt32BE(0);
	      timestamp.setTime(Math.floor(time) * 1000);
	      return timestamp;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",

	    /**
	     * @ignore
	     */
	    value: function toExtendedJSON() {
	      if (this.toHexString) return {
	        $oid: this.toHexString()
	      };
	      return {
	        $oid: this.toString('hex')
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "getInc",
	    value: function getInc() {
	      return ObjectId.index = (ObjectId.index + 1) % 0xffffff;
	    }
	    /**
	     * Generate a 12 byte id buffer used in ObjectId's
	     *
	     * @method
	     * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
	     * @return {Buffer} return the 12 byte id buffer string.
	     */

	  }, {
	    key: "generate",
	    value: function generate(time) {
	      if ('number' !== typeof time) {
	        time = ~~(Date.now() / 1000);
	      }

	      var inc = ObjectId.getInc();
	      var buffer$$1 = Buffer$1.alloc(12); // 4-byte timestamp

	      buffer$$1[3] = time & 0xff;
	      buffer$$1[2] = time >> 8 & 0xff;
	      buffer$$1[1] = time >> 16 & 0xff;
	      buffer$$1[0] = time >> 24 & 0xff; // 5-byte process unique

	      buffer$$1[4] = PROCESS_UNIQUE[0];
	      buffer$$1[5] = PROCESS_UNIQUE[1];
	      buffer$$1[6] = PROCESS_UNIQUE[2];
	      buffer$$1[7] = PROCESS_UNIQUE[3];
	      buffer$$1[8] = PROCESS_UNIQUE[4]; // 3-byte counter

	      buffer$$1[11] = inc & 0xff;
	      buffer$$1[10] = inc >> 8 & 0xff;
	      buffer$$1[9] = inc >> 16 & 0xff;
	      return buffer$$1;
	    }
	  }, {
	    key: "createPk",
	    value: function createPk() {
	      return new ObjectId();
	    }
	    /**
	     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
	     *
	     * @method
	     * @param {number} time an integer number representing a number of seconds.
	     * @return {ObjectId} return the created ObjectId
	     */

	  }, {
	    key: "createFromTime",
	    value: function createFromTime(time) {
	      var buffer$$1 = Buffer$1.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Encode time into first 4 bytes

	      buffer$$1[3] = time & 0xff;
	      buffer$$1[2] = time >> 8 & 0xff;
	      buffer$$1[1] = time >> 16 & 0xff;
	      buffer$$1[0] = time >> 24 & 0xff; // Return the new objectId

	      return new ObjectId(buffer$$1);
	    }
	    /**
	     * Creates an ObjectId from a hex string representation of an ObjectId.
	     *
	     * @method
	     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
	     * @return {ObjectId} return the created ObjectId
	     */

	  }, {
	    key: "createFromHexString",
	    value: function createFromHexString(string) {
	      // Throw an error if it's not a valid setup
	      if (typeof string === 'undefined' || string != null && string.length !== 24) {
	        throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
	      } // Use Buffer.from method if available


	      if (hasBufferType) return new ObjectId(Buffer$1.from(string, 'hex')); // Calculate lengths

	      var array = new _Buffer(12);
	      var n = 0;
	      var i = 0;

	      while (i < 24) {
	        array[n++] = decodeLookup[string.charCodeAt(i++)] << 4 | decodeLookup[string.charCodeAt(i++)];
	      }

	      return new ObjectId(array);
	    }
	    /**
	     * Checks if a value is a valid bson ObjectId
	     *
	     * @method
	     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
	     */

	  }, {
	    key: "isValid",
	    value: function isValid(id) {
	      if (id == null) return false;

	      if (typeof id === 'number') {
	        return true;
	      }

	      if (typeof id === 'string') {
	        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
	      }

	      if (id instanceof ObjectId) {
	        return true;
	      }

	      if (id instanceof _Buffer && id.length === 12) {
	        return true;
	      } // Duck-Typing detection of ObjectId like objects


	      if (id.toHexString) {
	        return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
	      }

	      return false;
	    }
	  }, {
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      return new ObjectId(doc.$oid);
	    }
	  }]);

	  return ObjectId;
	}(); // Deprecated methods


	ObjectId.get_inc = deprecate$1(function () {
	  return ObjectId.getInc();
	}, 'Please use the static `ObjectId.getInc()` instead');
	ObjectId.prototype.get_inc = deprecate$1(function () {
	  return ObjectId.getInc();
	}, 'Please use the static `ObjectId.getInc()` instead');
	ObjectId.prototype.getInc = deprecate$1(function () {
	  return ObjectId.getInc();
	}, 'Please use the static `ObjectId.getInc()` instead');
	ObjectId.prototype.generate = deprecate$1(function (time) {
	  return ObjectId.generate(time);
	}, 'Please use the static `ObjectId.generate(time)` instead');
	/**
	 * @ignore
	 */

	Object.defineProperty(ObjectId.prototype, 'generationTime', {
	  enumerable: true,
	  get: function get() {
	    return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
	  },
	  set: function set(value) {
	    // Encode time into first 4 bytes
	    this.id[3] = value & 0xff;
	    this.id[2] = value >> 8 & 0xff;
	    this.id[1] = value >> 16 & 0xff;
	    this.id[0] = value >> 24 & 0xff;
	  }
	});
	/**
	 * Converts to a string representation of this Id.
	 *
	 * @return {String} return the 24 byte hex string representation.
	 * @ignore
	 */

	ObjectId.prototype[util$2.inspect.custom || 'inspect'] = ObjectId.prototype.toString;
	/**
	 * @ignore
	 */

	ObjectId.index = ~~(Math.random() * 0xffffff); // In 4.0.0 and 4.0.1, this property name was changed to ObjectId to match the class name.
	// This caused interoperability problems with previous versions of the library, so in
	// later builds we changed it back to ObjectID (capital D) to match legacy implementations.

	Object.defineProperty(ObjectId.prototype, '_bsontype', {
	  value: 'ObjectID'
	});
	var objectid = ObjectId;

	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

	function alphabetize(str) {
	  return str.split('').sort().join('');
	}
	/**
	 * A class representation of the BSON RegExp type.
	 */


	var BSONRegExp =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a RegExp type
	   *
	   * @param {string} pattern The regular expression pattern to match
	   * @param {string} options The regular expression options
	   */
	  function BSONRegExp(pattern, options) {
	    _classCallCheck$3(this, BSONRegExp);

	    // Execute
	    this.pattern = pattern || '';
	    this.options = options ? alphabetize(options) : ''; // Validate options

	    for (var i = 0; i < this.options.length; i++) {
	      if (!(this.options[i] === 'i' || this.options[i] === 'm' || this.options[i] === 'x' || this.options[i] === 'l' || this.options[i] === 's' || this.options[i] === 'u')) {
	        throw new Error("The regular expression option [".concat(this.options[i], "] is not supported"));
	      }
	    }
	  }
	  /**
	   * @ignore
	   */


	  _createClass$3(BSONRegExp, [{
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      return {
	        $regularExpression: {
	          pattern: this.pattern,
	          options: this.options
	        }
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      return new BSONRegExp(doc.$regularExpression.pattern, doc.$regularExpression.options.split('').sort().join(''));
	    }
	  }]);

	  return BSONRegExp;
	}();

	Object.defineProperty(BSONRegExp.prototype, '_bsontype', {
	  value: 'BSONRegExp'
	});
	var regexp = BSONRegExp;

	/**
	 * A class representation of the BSON Symbol type.
	 */

	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

	var BSONSymbol =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a Symbol type
	   *
	   * @param {string} value the string representing the symbol.
	   */
	  function BSONSymbol(value) {
	    _classCallCheck$4(this, BSONSymbol);

	    this.value = value;
	  }
	  /**
	   * Access the wrapped string value.
	   *
	   * @method
	   * @return {String} returns the wrapped string.
	   */


	  _createClass$4(BSONSymbol, [{
	    key: "valueOf",
	    value: function valueOf() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toString",
	    value: function toString() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "inspect",
	    value: function inspect() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      return {
	        $symbol: this.value
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      return new BSONSymbol(doc.$symbol);
	    }
	  }]);

	  return BSONSymbol;
	}();

	Object.defineProperty(BSONSymbol.prototype, '_bsontype', {
	  value: 'Symbol'
	});
	var symbol = BSONSymbol;

	/**
	 * A class representation of a BSON Int32 type.
	 */

	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

	var Int32 =
	/*#__PURE__*/
	function () {
	  /**
	   * Create an Int32 type
	   *
	   * @param {number} value the number we want to represent as an int32.
	   * @return {Int32}
	   */
	  function Int32(value) {
	    _classCallCheck$5(this, Int32);

	    this.value = value;
	  }
	  /**
	   * Access the number value.
	   *
	   * @method
	   * @return {number} returns the wrapped int32 number.
	   */


	  _createClass$5(Int32, [{
	    key: "valueOf",
	    value: function valueOf() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.value;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",
	    value: function toExtendedJSON(options) {
	      if (options && options.relaxed) return this.value;
	      return {
	        $numberInt: this.value.toString()
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc, options) {
	      return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
	    }
	  }]);

	  return Int32;
	}();

	Object.defineProperty(Int32.prototype, '_bsontype', {
	  value: 'Int32'
	});
	var int_32 = Int32;

	/**
	 * A class representation of the BSON Code type.
	 */

	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

	var Code =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a Code type
	   *
	   * @param {(string|function)} code a string or function.
	   * @param {Object} [scope] an optional scope for the function.
	   * @return {Code}
	   */
	  function Code(code, scope) {
	    _classCallCheck$6(this, Code);

	    this.code = code;
	    this.scope = scope;
	  }
	  /**
	   * @ignore
	   */


	  _createClass$6(Code, [{
	    key: "toJSON",
	    value: function toJSON() {
	      return {
	        scope: this.scope,
	        code: this.code
	      };
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      if (this.scope) {
	        return {
	          $code: this.code,
	          $scope: this.scope
	        };
	      }

	      return {
	        $code: this.code
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      return new Code(doc.$code, doc.$scope);
	    }
	  }]);

	  return Code;
	}();

	Object.defineProperty(Code.prototype, '_bsontype', {
	  value: 'Code'
	});
	var code = Code;

	var Buffer$2 = buffer.Buffer;
	var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
	var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
	var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
	var EXPONENT_MAX = 6111;
	var EXPONENT_MIN = -6176;
	var EXPONENT_BIAS = 6176;
	var MAX_DIGITS = 34; // Nan value bits as 32 bit values (due to lack of longs)

	var NAN_BUFFER = [0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse(); // Infinity value bits 32 bit values (due to lack of longs)

	var INF_NEGATIVE_BUFFER = [0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
	var INF_POSITIVE_BUFFER = [0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
	var EXPONENT_REGEX = /^([-+])?(\d+)?$/; // Detect if the value is a digit

	function isDigit(value) {
	  return !isNaN(parseInt(value, 10));
	} // Divide two uint128 values


	function divideu128(value) {
	  var DIVISOR = long_1.fromNumber(1000 * 1000 * 1000);

	  var _rem = long_1.fromNumber(0);

	  if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
	    return {
	      quotient: value,
	      rem: _rem
	    };
	  }

	  for (var i = 0; i <= 3; i++) {
	    // Adjust remainder to match value of next dividend
	    _rem = _rem.shiftLeft(32); // Add the divided to _rem

	    _rem = _rem.add(new long_1(value.parts[i], 0));
	    value.parts[i] = _rem.div(DIVISOR).low;
	    _rem = _rem.modulo(DIVISOR);
	  }

	  return {
	    quotient: value,
	    rem: _rem
	  };
	} // Multiply two Long values and return the 128 bit value


	function multiply64x2(left, right) {
	  if (!left && !right) {
	    return {
	      high: long_1.fromNumber(0),
	      low: long_1.fromNumber(0)
	    };
	  }

	  var leftHigh = left.shiftRightUnsigned(32);
	  var leftLow = new long_1(left.getLowBits(), 0);
	  var rightHigh = right.shiftRightUnsigned(32);
	  var rightLow = new long_1(right.getLowBits(), 0);
	  var productHigh = leftHigh.multiply(rightHigh);
	  var productMid = leftHigh.multiply(rightLow);
	  var productMid2 = leftLow.multiply(rightHigh);
	  var productLow = leftLow.multiply(rightLow);
	  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
	  productMid = new long_1(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
	  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
	  productLow = productMid.shiftLeft(32).add(new long_1(productLow.getLowBits(), 0)); // Return the 128 bit result

	  return {
	    high: productHigh,
	    low: productLow
	  };
	}

	function lessThan(left, right) {
	  // Make values unsigned
	  var uhleft = left.high >>> 0;
	  var uhright = right.high >>> 0; // Compare high bits first

	  if (uhleft < uhright) {
	    return true;
	  } else if (uhleft === uhright) {
	    var ulleft = left.low >>> 0;
	    var ulright = right.low >>> 0;
	    if (ulleft < ulright) return true;
	  }

	  return false;
	}

	function invalidErr(string, message) {
	  throw new TypeError("\"".concat(string, "\" is not a valid Decimal128 string - ").concat(message));
	}
	/**
	 * A class representation of the BSON Decimal128 type.
	 *
	 * @class
	 * @param {Buffer} bytes a buffer containing the raw Decimal128 bytes.
	 * @return {Double}
	 */


	function Decimal128(bytes) {
	  this.bytes = bytes;
	}
	/**
	 * Create a Decimal128 instance from a string representation
	 *
	 * @method
	 * @param {string} string a numeric string representation.
	 * @return {Decimal128} returns a Decimal128 instance.
	 */


	Decimal128.fromString = function (string) {
	  // Parse state tracking
	  var isNegative = false;
	  var sawRadix = false;
	  var foundNonZero = false; // Total number of significant digits (no leading or trailing zero)

	  var significantDigits = 0; // Total number of significand digits read

	  var nDigitsRead = 0; // Total number of digits (no leading zeros)

	  var nDigits = 0; // The number of the digits after radix

	  var radixPosition = 0; // The index of the first non-zero in *str*

	  var firstNonZero = 0; // Digits Array

	  var digits = [0]; // The number of digits in digits

	  var nDigitsStored = 0; // Insertion pointer for digits

	  var digitsInsert = 0; // The index of the first non-zero digit

	  var firstDigit = 0; // The index of the last digit

	  var lastDigit = 0; // Exponent

	  var exponent = 0; // loop index over array

	  var i = 0; // The high 17 digits of the significand

	  var significandHigh = [0, 0]; // The low 17 digits of the significand

	  var significandLow = [0, 0]; // The biased exponent

	  var biasedExponent = 0; // Read index

	  var index = 0; // Naively prevent against REDOS attacks.
	  // TODO: implementing a custom parsing for this, or refactoring the regex would yield
	  //       further gains.

	  if (string.length >= 7000) {
	    throw new TypeError('' + string + ' not a valid Decimal128 string');
	  } // Results


	  var stringMatch = string.match(PARSE_STRING_REGEXP);
	  var infMatch = string.match(PARSE_INF_REGEXP);
	  var nanMatch = string.match(PARSE_NAN_REGEXP); // Validate the string

	  if (!stringMatch && !infMatch && !nanMatch || string.length === 0) {
	    throw new TypeError('' + string + ' not a valid Decimal128 string');
	  }

	  if (stringMatch) {
	    // full_match = stringMatch[0]
	    // sign = stringMatch[1]
	    var unsignedNumber = stringMatch[2]; // stringMatch[3] is undefined if a whole number (ex "1", 12")
	    // but defined if a number w/ decimal in it (ex "1.0, 12.2")

	    var e = stringMatch[4];
	    var expSign = stringMatch[5];
	    var expNumber = stringMatch[6]; // they provided e, but didn't give an exponent number. for ex "1e"

	    if (e && expNumber === undefined) invalidErr(string, 'missing exponent power'); // they provided e, but didn't give a number before it. for ex "e1"

	    if (e && unsignedNumber === undefined) invalidErr(string, 'missing exponent base');

	    if (e === undefined && (expSign || expNumber)) {
	      invalidErr(string, 'missing e before exponent');
	    }
	  } // Get the negative or positive sign


	  if (string[index] === '+' || string[index] === '-') {
	    isNegative = string[index++] === '-';
	  } // Check if user passed Infinity or NaN


	  if (!isDigit(string[index]) && string[index] !== '.') {
	    if (string[index] === 'i' || string[index] === 'I') {
	      return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
	    } else if (string[index] === 'N') {
	      return new Decimal128(Buffer$2.from(NAN_BUFFER));
	    }
	  } // Read all the digits


	  while (isDigit(string[index]) || string[index] === '.') {
	    if (string[index] === '.') {
	      if (sawRadix) invalidErr(string, 'contains multiple periods');
	      sawRadix = true;
	      index = index + 1;
	      continue;
	    }

	    if (nDigitsStored < 34) {
	      if (string[index] !== '0' || foundNonZero) {
	        if (!foundNonZero) {
	          firstNonZero = nDigitsRead;
	        }

	        foundNonZero = true; // Only store 34 digits

	        digits[digitsInsert++] = parseInt(string[index], 10);
	        nDigitsStored = nDigitsStored + 1;
	      }
	    }

	    if (foundNonZero) nDigits = nDigits + 1;
	    if (sawRadix) radixPosition = radixPosition + 1;
	    nDigitsRead = nDigitsRead + 1;
	    index = index + 1;
	  }

	  if (sawRadix && !nDigitsRead) throw new TypeError('' + string + ' not a valid Decimal128 string'); // Read exponent if exists

	  if (string[index] === 'e' || string[index] === 'E') {
	    // Read exponent digits
	    var match = string.substr(++index).match(EXPONENT_REGEX); // No digits read

	    if (!match || !match[2]) return new Decimal128(Buffer$2.from(NAN_BUFFER)); // Get exponent

	    exponent = parseInt(match[0], 10); // Adjust the index

	    index = index + match[0].length;
	  } // Return not a number


	  if (string[index]) return new Decimal128(Buffer$2.from(NAN_BUFFER)); // Done reading input
	  // Find first non-zero digit in digits

	  firstDigit = 0;

	  if (!nDigitsStored) {
	    firstDigit = 0;
	    lastDigit = 0;
	    digits[0] = 0;
	    nDigits = 1;
	    nDigitsStored = 1;
	    significantDigits = 0;
	  } else {
	    lastDigit = nDigitsStored - 1;
	    significantDigits = nDigits;

	    if (significantDigits !== 1) {
	      while (string[firstNonZero + significantDigits - 1] === '0') {
	        significantDigits = significantDigits - 1;
	      }
	    }
	  } // Normalization of exponent
	  // Correct exponent based on radix position, and shift significand as needed
	  // to represent user input
	  // Overflow prevention


	  if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
	    exponent = EXPONENT_MIN;
	  } else {
	    exponent = exponent - radixPosition;
	  } // Attempt to normalize the exponent


	  while (exponent > EXPONENT_MAX) {
	    // Shift exponent to significand and decrease
	    lastDigit = lastDigit + 1;

	    if (lastDigit - firstDigit > MAX_DIGITS) {
	      // Check if we have a zero then just hard clamp, otherwise fail
	      var digitsString = digits.join('');

	      if (digitsString.match(/^0+$/)) {
	        exponent = EXPONENT_MAX;
	        break;
	      }

	      invalidErr(string, 'overflow');
	    }

	    exponent = exponent - 1;
	  }

	  while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
	    // Shift last digit. can only do this if < significant digits than # stored.
	    if (lastDigit === 0 && significantDigits < nDigitsStored) {
	      exponent = EXPONENT_MIN;
	      significantDigits = 0;
	      break;
	    }

	    if (nDigitsStored < nDigits) {
	      // adjust to match digits not stored
	      nDigits = nDigits - 1;
	    } else {
	      // adjust to round
	      lastDigit = lastDigit - 1;
	    }

	    if (exponent < EXPONENT_MAX) {
	      exponent = exponent + 1;
	    } else {
	      // Check if we have a zero then just hard clamp, otherwise fail
	      var _digitsString = digits.join('');

	      if (_digitsString.match(/^0+$/)) {
	        exponent = EXPONENT_MAX;
	        break;
	      }

	      invalidErr(string, 'overflow');
	    }
	  } // Round
	  // We've normalized the exponent, but might still need to round.


	  if (lastDigit - firstDigit + 1 < significantDigits) {
	    var endOfString = nDigitsRead; // If we have seen a radix point, 'string' is 1 longer than we have
	    // documented with ndigits_read, so inc the position of the first nonzero
	    // digit and the position that digits are read to.

	    if (sawRadix) {
	      firstNonZero = firstNonZero + 1;
	      endOfString = endOfString + 1;
	    } // if negative, we need to increment again to account for - sign at start.


	    if (isNegative) {
	      firstNonZero = firstNonZero + 1;
	      endOfString = endOfString + 1;
	    }

	    var roundDigit = parseInt(string[firstNonZero + lastDigit + 1], 10);
	    var roundBit = 0;

	    if (roundDigit >= 5) {
	      roundBit = 1;

	      if (roundDigit === 5) {
	        roundBit = digits[lastDigit] % 2 === 1;

	        for (i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
	          if (parseInt(string[i], 10)) {
	            roundBit = 1;
	            break;
	          }
	        }
	      }
	    }

	    if (roundBit) {
	      var dIdx = lastDigit;

	      for (; dIdx >= 0; dIdx--) {
	        if (++digits[dIdx] > 9) {
	          digits[dIdx] = 0; // overflowed most significant digit

	          if (dIdx === 0) {
	            if (exponent < EXPONENT_MAX) {
	              exponent = exponent + 1;
	              digits[dIdx] = 1;
	            } else {
	              return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
	            }
	          }
	        }
	      }
	    }
	  } // Encode significand
	  // The high 17 digits of the significand


	  significandHigh = long_1.fromNumber(0); // The low 17 digits of the significand

	  significandLow = long_1.fromNumber(0); // read a zero

	  if (significantDigits === 0) {
	    significandHigh = long_1.fromNumber(0);
	    significandLow = long_1.fromNumber(0);
	  } else if (lastDigit - firstDigit < 17) {
	    var _dIdx = firstDigit;
	    significandLow = long_1.fromNumber(digits[_dIdx++]);
	    significandHigh = new long_1(0, 0);

	    for (; _dIdx <= lastDigit; _dIdx++) {
	      significandLow = significandLow.multiply(long_1.fromNumber(10));
	      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx]));
	    }
	  } else {
	    var _dIdx2 = firstDigit;
	    significandHigh = long_1.fromNumber(digits[_dIdx2++]);

	    for (; _dIdx2 <= lastDigit - 17; _dIdx2++) {
	      significandHigh = significandHigh.multiply(long_1.fromNumber(10));
	      significandHigh = significandHigh.add(long_1.fromNumber(digits[_dIdx2]));
	    }

	    significandLow = long_1.fromNumber(digits[_dIdx2++]);

	    for (; _dIdx2 <= lastDigit; _dIdx2++) {
	      significandLow = significandLow.multiply(long_1.fromNumber(10));
	      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx2]));
	    }
	  }

	  var significand = multiply64x2(significandHigh, long_1.fromString('100000000000000000'));
	  significand.low = significand.low.add(significandLow);

	  if (lessThan(significand.low, significandLow)) {
	    significand.high = significand.high.add(long_1.fromNumber(1));
	  } // Biased exponent


	  biasedExponent = exponent + EXPONENT_BIAS;
	  var dec = {
	    low: long_1.fromNumber(0),
	    high: long_1.fromNumber(0)
	  }; // Encode combination, exponent, and significand.

	  if (significand.high.shiftRightUnsigned(49).and(long_1.fromNumber(1)).equals(long_1.fromNumber(1))) {
	    // Encode '11' into bits 1 to 3
	    dec.high = dec.high.or(long_1.fromNumber(0x3).shiftLeft(61));
	    dec.high = dec.high.or(long_1.fromNumber(biasedExponent).and(long_1.fromNumber(0x3fff).shiftLeft(47)));
	    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x7fffffffffff)));
	  } else {
	    dec.high = dec.high.or(long_1.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
	    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x1ffffffffffff)));
	  }

	  dec.low = significand.low; // Encode sign

	  if (isNegative) {
	    dec.high = dec.high.or(long_1.fromString('9223372036854775808'));
	  } // Encode into a buffer


	  var buffer$$1 = Buffer$2.alloc(16);
	  index = 0; // Encode the low 64 bits of the decimal
	  // Encode low bits

	  buffer$$1[index++] = dec.low.low & 0xff;
	  buffer$$1[index++] = dec.low.low >> 8 & 0xff;
	  buffer$$1[index++] = dec.low.low >> 16 & 0xff;
	  buffer$$1[index++] = dec.low.low >> 24 & 0xff; // Encode high bits

	  buffer$$1[index++] = dec.low.high & 0xff;
	  buffer$$1[index++] = dec.low.high >> 8 & 0xff;
	  buffer$$1[index++] = dec.low.high >> 16 & 0xff;
	  buffer$$1[index++] = dec.low.high >> 24 & 0xff; // Encode the high 64 bits of the decimal
	  // Encode low bits

	  buffer$$1[index++] = dec.high.low & 0xff;
	  buffer$$1[index++] = dec.high.low >> 8 & 0xff;
	  buffer$$1[index++] = dec.high.low >> 16 & 0xff;
	  buffer$$1[index++] = dec.high.low >> 24 & 0xff; // Encode high bits

	  buffer$$1[index++] = dec.high.high & 0xff;
	  buffer$$1[index++] = dec.high.high >> 8 & 0xff;
	  buffer$$1[index++] = dec.high.high >> 16 & 0xff;
	  buffer$$1[index++] = dec.high.high >> 24 & 0xff; // Return the new Decimal128

	  return new Decimal128(buffer$$1);
	}; // Extract least significant 5 bits


	var COMBINATION_MASK = 0x1f; // Extract least significant 14 bits

	var EXPONENT_MASK = 0x3fff; // Value of combination field for Inf

	var COMBINATION_INFINITY = 30; // Value of combination field for NaN

	var COMBINATION_NAN = 31;
	/**
	 * Create a string representation of the raw Decimal128 value
	 *
	 * @method
	 * @return {string} returns a Decimal128 string representation.
	 */

	Decimal128.prototype.toString = function () {
	  // Note: bits in this routine are referred to starting at 0,
	  // from the sign bit, towards the coefficient.
	  // bits 0 - 31
	  var high; // bits 32 - 63

	  var midh; // bits 64 - 95

	  var midl; // bits 96 - 127

	  var low; // bits 1 - 5

	  var combination; // decoded biased exponent (14 bits)

	  var biased_exponent; // the number of significand digits

	  var significand_digits = 0; // the base-10 digits in the significand

	  var significand = new Array(36);

	  for (var i = 0; i < significand.length; i++) {
	    significand[i] = 0;
	  } // read pointer into significand


	  var index = 0; // unbiased exponent

	  var exponent; // the exponent if scientific notation is used

	  var scientific_exponent; // true if the number is zero

	  var is_zero = false; // the most signifcant significand bits (50-46)

	  var significand_msb; // temporary storage for significand decoding

	  var significand128 = {
	    parts: new Array(4)
	  }; // indexing variables

	  var j, k; // Output string

	  var string = []; // Unpack index

	  index = 0; // Buffer reference

	  var buffer$$1 = this.bytes; // Unpack the low 64bits into a long

	  low = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	  midl = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack the high 64bits into a long

	  midh = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	  high = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack index

	  index = 0; // Create the state of the decimal

	  var dec = {
	    low: new long_1(low, midl),
	    high: new long_1(midh, high)
	  };

	  if (dec.high.lessThan(long_1.ZERO)) {
	    string.push('-');
	  } // Decode combination field and exponent


	  combination = high >> 26 & COMBINATION_MASK;

	  if (combination >> 3 === 3) {
	    // Check for 'special' values
	    if (combination === COMBINATION_INFINITY) {
	      return string.join('') + 'Infinity';
	    } else if (combination === COMBINATION_NAN) {
	      return 'NaN';
	    } else {
	      biased_exponent = high >> 15 & EXPONENT_MASK;
	      significand_msb = 0x08 + (high >> 14 & 0x01);
	    }
	  } else {
	    significand_msb = high >> 14 & 0x07;
	    biased_exponent = high >> 17 & EXPONENT_MASK;
	  }

	  exponent = biased_exponent - EXPONENT_BIAS; // Create string of significand digits
	  // Convert the 114-bit binary number represented by
	  // (significand_high, significand_low) to at most 34 decimal
	  // digits through modulo and division.

	  significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
	  significand128.parts[1] = midh;
	  significand128.parts[2] = midl;
	  significand128.parts[3] = low;

	  if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
	    is_zero = true;
	  } else {
	    for (k = 3; k >= 0; k--) {
	      var least_digits = 0; // Peform the divide

	      var result = divideu128(significand128);
	      significand128 = result.quotient;
	      least_digits = result.rem.low; // We now have the 9 least significant digits (in base 2).
	      // Convert and output to string.

	      if (!least_digits) continue;

	      for (j = 8; j >= 0; j--) {
	        // significand[k * 9 + j] = Math.round(least_digits % 10);
	        significand[k * 9 + j] = least_digits % 10; // least_digits = Math.round(least_digits / 10);

	        least_digits = Math.floor(least_digits / 10);
	      }
	    }
	  } // Output format options:
	  // Scientific - [-]d.dddE(+/-)dd or [-]dE(+/-)dd
	  // Regular    - ddd.ddd


	  if (is_zero) {
	    significand_digits = 1;
	    significand[index] = 0;
	  } else {
	    significand_digits = 36;

	    while (!significand[index]) {
	      significand_digits = significand_digits - 1;
	      index = index + 1;
	    }
	  }

	  scientific_exponent = significand_digits - 1 + exponent; // The scientific exponent checks are dictated by the string conversion
	  // specification and are somewhat arbitrary cutoffs.
	  //
	  // We must check exponent > 0, because if this is the case, the number
	  // has trailing zeros.  However, we *cannot* output these trailing zeros,
	  // because doing so would change the precision of the value, and would
	  // change stored data if the string converted number is round tripped.

	  if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
	    // Scientific format
	    // if there are too many significant digits, we should just be treating numbers
	    // as + or - 0 and using the non-scientific exponent (this is for the "invalid
	    // representation should be treated as 0/-0" spec cases in decimal128-1.json)
	    if (significand_digits > 34) {
	      string.push(0);
	      if (exponent > 0) string.push('E+' + exponent);else if (exponent < 0) string.push('E' + exponent);
	      return string.join('');
	    }

	    string.push(significand[index++]);
	    significand_digits = significand_digits - 1;

	    if (significand_digits) {
	      string.push('.');
	    }

	    for (var _i = 0; _i < significand_digits; _i++) {
	      string.push(significand[index++]);
	    } // Exponent


	    string.push('E');

	    if (scientific_exponent > 0) {
	      string.push('+' + scientific_exponent);
	    } else {
	      string.push(scientific_exponent);
	    }
	  } else {
	    // Regular format with no decimal place
	    if (exponent >= 0) {
	      for (var _i2 = 0; _i2 < significand_digits; _i2++) {
	        string.push(significand[index++]);
	      }
	    } else {
	      var radix_position = significand_digits + exponent; // non-zero digits before radix

	      if (radix_position > 0) {
	        for (var _i3 = 0; _i3 < radix_position; _i3++) {
	          string.push(significand[index++]);
	        }
	      } else {
	        string.push('0');
	      }

	      string.push('.'); // add leading zeros after radix

	      while (radix_position++ < 0) {
	        string.push('0');
	      }

	      for (var _i4 = 0; _i4 < significand_digits - Math.max(radix_position - 1, 0); _i4++) {
	        string.push(significand[index++]);
	      }
	    }
	  }

	  return string.join('');
	};

	Decimal128.prototype.toJSON = function () {
	  return {
	    $numberDecimal: this.toString()
	  };
	};
	/**
	 * @ignore
	 */


	Decimal128.prototype.toExtendedJSON = function () {
	  return {
	    $numberDecimal: this.toString()
	  };
	};
	/**
	 * @ignore
	 */


	Decimal128.fromExtendedJSON = function (doc) {
	  return Decimal128.fromString(doc.$numberDecimal);
	};

	Object.defineProperty(Decimal128.prototype, '_bsontype', {
	  value: 'Decimal128'
	});
	var decimal128 = Decimal128;

	/**
	 * A class representation of the BSON MinKey type.
	 */

	function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

	var MinKey =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a MinKey type
	   *
	   * @return {MinKey} A MinKey instance
	   */
	  function MinKey() {
	    _classCallCheck$7(this, MinKey);
	  }
	  /**
	   * @ignore
	   */


	  _createClass$7(MinKey, [{
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      return {
	        $minKey: 1
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON() {
	      return new MinKey();
	    }
	  }]);

	  return MinKey;
	}();

	Object.defineProperty(MinKey.prototype, '_bsontype', {
	  value: 'MinKey'
	});
	var min_key = MinKey;

	/**
	 * A class representation of the BSON MaxKey type.
	 */

	function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

	var MaxKey =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a MaxKey type
	   *
	   * @return {MaxKey} A MaxKey instance
	   */
	  function MaxKey() {
	    _classCallCheck$8(this, MaxKey);
	  }
	  /**
	   * @ignore
	   */


	  _createClass$8(MaxKey, [{
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      return {
	        $maxKey: 1
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON() {
	      return new MaxKey();
	    }
	  }]);

	  return MaxKey;
	}();

	Object.defineProperty(MaxKey.prototype, '_bsontype', {
	  value: 'MaxKey'
	});
	var max_key = MaxKey;

	/**
	 * A class representation of the BSON DBRef type.
	 */

	function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

	var DBRef =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a DBRef type
	   *
	   * @param {string} collection the collection name.
	   * @param {ObjectId} oid the reference ObjectId.
	   * @param {string} [db] optional db name, if omitted the reference is local to the current db.
	   * @return {DBRef}
	   */
	  function DBRef(collection, oid, db, fields) {
	    _classCallCheck$9(this, DBRef);

	    // check if namespace has been provided
	    var parts = collection.split('.');

	    if (parts.length === 2) {
	      db = parts.shift();
	      collection = parts.shift();
	    }

	    this.collection = collection;
	    this.oid = oid;
	    this.db = db;
	    this.fields = fields || {};
	  }
	  /**
	   * @ignore
	   * @api private
	   */


	  _createClass$9(DBRef, [{
	    key: "toJSON",
	    value: function toJSON() {
	      var o = Object.assign({
	        $ref: this.collection,
	        $id: this.oid
	      }, this.fields);
	      if (this.db != null) o.$db = this.db;
	      return o;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      var o = {
	        $ref: this.collection,
	        $id: this.oid
	      };
	      if (this.db) o.$db = this.db;
	      o = Object.assign(o, this.fields);
	      return o;
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      var copy = Object.assign({}, doc);
	      ['$ref', '$id', '$db'].forEach(function (k) {
	        return delete copy[k];
	      });
	      return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
	    }
	  }]);

	  return DBRef;
	}();

	Object.defineProperty(DBRef.prototype, '_bsontype', {
	  value: 'DBRef'
	}); // the 1.x parser used a "namespace" property, while 4.x uses "collection". To ensure backwards
	// compatibility, let's expose "namespace"

	Object.defineProperty(DBRef.prototype, 'namespace', {
	  get: function get() {
	    return this.collection;
	  },
	  set: function set(val) {
	    this.collection = val;
	  },
	  configurable: false
	});
	var db_ref = DBRef;

	function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

	function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

	var Buffer$3 = buffer.Buffer;
	/**
	 * A class representation of the BSON Binary type.
	 */

	var Binary =
	/*#__PURE__*/
	function () {
	  /**
	   * Create a Binary type
	   *
	   * Sub types
	   *  - **BSON.BSON_BINARY_SUBTYPE_DEFAULT**, default BSON type.
	   *  - **BSON.BSON_BINARY_SUBTYPE_FUNCTION**, BSON function type.
	   *  - **BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY**, BSON byte array type.
	   *  - **BSON.BSON_BINARY_SUBTYPE_UUID**, BSON uuid type.
	   *  - **BSON.BSON_BINARY_SUBTYPE_MD5**, BSON md5 type.
	   *  - **BSON.BSON_BINARY_SUBTYPE_USER_DEFINED**, BSON user defined type.
	   *
	   * @param {Buffer} buffer a buffer object containing the binary data.
	   * @param {Number} [subType] the option binary type.
	   * @return {Binary}
	   */
	  function Binary(buffer$$1, subType) {
	    _classCallCheck$a(this, Binary);

	    if (buffer$$1 != null && !(typeof buffer$$1 === 'string') && !Buffer$3.isBuffer(buffer$$1) && !(buffer$$1 instanceof Uint8Array) && !Array.isArray(buffer$$1)) {
	      throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
	    }

	    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT : subType;
	    this.position = 0;

	    if (buffer$$1 != null && !(buffer$$1 instanceof Number)) {
	      // Only accept Buffer, Uint8Array or Arrays
	      if (typeof buffer$$1 === 'string') {
	        // Different ways of writing the length of the string for the different types
	        if (typeof Buffer$3 !== 'undefined') {
	          this.buffer = Buffer$3.from(buffer$$1);
	        } else if (typeof Uint8Array !== 'undefined' || Array.isArray(buffer$$1)) {
	          this.buffer = writeStringToArray(buffer$$1);
	        } else {
	          throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
	        }
	      } else {
	        this.buffer = buffer$$1;
	      }

	      this.position = buffer$$1.length;
	    } else {
	      if (typeof Buffer$3 !== 'undefined') {
	        this.buffer = Buffer$3.alloc(Binary.BUFFER_SIZE);
	      } else if (typeof Uint8Array !== 'undefined') {
	        this.buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE));
	      } else {
	        this.buffer = new Array(Binary.BUFFER_SIZE);
	      }
	    }
	  }
	  /**
	   * Updates this binary with byte_value.
	   *
	   * @method
	   * @param {string} byte_value a single byte we wish to write.
	   */


	  _createClass$a(Binary, [{
	    key: "put",
	    value: function put(byte_value) {
	      // If it's a string and a has more than one character throw an error
	      if (byte_value['length'] != null && typeof byte_value !== 'number' && byte_value.length !== 1) throw new TypeError('only accepts single character String, Uint8Array or Array');
	      if (typeof byte_value !== 'number' && byte_value < 0 || byte_value > 255) throw new TypeError('only accepts number in a valid unsigned byte range 0-255'); // Decode the byte value once

	      var decoded_byte = null;

	      if (typeof byte_value === 'string') {
	        decoded_byte = byte_value.charCodeAt(0);
	      } else if (byte_value['length'] != null) {
	        decoded_byte = byte_value[0];
	      } else {
	        decoded_byte = byte_value;
	      }

	      if (this.buffer.length > this.position) {
	        this.buffer[this.position++] = decoded_byte;
	      } else {
	        if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
	          // Create additional overflow buffer
	          var buffer$$1 = Buffer$3.alloc(Binary.BUFFER_SIZE + this.buffer.length); // Combine the two buffers together

	          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
	          this.buffer = buffer$$1;
	          this.buffer[this.position++] = decoded_byte;
	        } else {
	          var _buffer = null; // Create a new buffer (typed or normal array)

	          if (isUint8Array(this.buffer)) {
	            _buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE + this.buffer.length));
	          } else {
	            _buffer = new Array(Binary.BUFFER_SIZE + this.buffer.length);
	          } // We need to copy all the content to the new array


	          for (var i = 0; i < this.buffer.length; i++) {
	            _buffer[i] = this.buffer[i];
	          } // Reassign the buffer


	          this.buffer = _buffer; // Write the byte

	          this.buffer[this.position++] = decoded_byte;
	        }
	      }
	    }
	    /**
	     * Writes a buffer or string to the binary.
	     *
	     * @method
	     * @param {(Buffer|string)} string a string or buffer to be written to the Binary BSON object.
	     * @param {number} offset specify the binary of where to write the content.
	     * @return {null}
	     */

	  }, {
	    key: "write",
	    value: function write(string, offset) {
	      offset = typeof offset === 'number' ? offset : this.position; // If the buffer is to small let's extend the buffer

	      if (this.buffer.length < offset + string.length) {
	        var buffer$$1 = null; // If we are in node.js

	        if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
	          buffer$$1 = Buffer$3.alloc(this.buffer.length + string.length);
	          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
	        } else if (isUint8Array(this.buffer)) {
	          // Create a new buffer
	          buffer$$1 = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length)); // Copy the content

	          for (var i = 0; i < this.position; i++) {
	            buffer$$1[i] = this.buffer[i];
	          }
	        } // Assign the new buffer


	        this.buffer = buffer$$1;
	      }

	      if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(string) && Buffer$3.isBuffer(this.buffer)) {
	        string.copy(this.buffer, offset, 0, string.length);
	        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length
	      } else if (typeof Buffer$3 !== 'undefined' && typeof string === 'string' && Buffer$3.isBuffer(this.buffer)) {
	        this.buffer.write(string, offset, 'binary');
	        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length;
	      } else if (isUint8Array(string) || Array.isArray(string) && typeof string !== 'string') {
	        for (var _i = 0; _i < string.length; _i++) {
	          this.buffer[offset++] = string[_i];
	        }

	        this.position = offset > this.position ? offset : this.position;
	      } else if (typeof string === 'string') {
	        for (var _i2 = 0; _i2 < string.length; _i2++) {
	          this.buffer[offset++] = string.charCodeAt(_i2);
	        }

	        this.position = offset > this.position ? offset : this.position;
	      }
	    }
	    /**
	     * Reads **length** bytes starting at **position**.
	     *
	     * @method
	     * @param {number} position read from the given position in the Binary.
	     * @param {number} length the number of bytes to read.
	     * @return {Buffer}
	     */

	  }, {
	    key: "read",
	    value: function read(position, length) {
	      length = length && length > 0 ? length : this.position; // Let's return the data based on the type we have

	      if (this.buffer['slice']) {
	        return this.buffer.slice(position, position + length);
	      } // Create a buffer to keep the result


	      var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);

	      for (var i = 0; i < length; i++) {
	        buffer$$1[i] = this.buffer[position++];
	      } // Return the buffer


	      return buffer$$1;
	    }
	    /**
	     * Returns the value of this binary as a string.
	     *
	     * @method
	     * @return {string}
	     */

	  }, {
	    key: "value",
	    value: function value(asRaw) {
	      asRaw = asRaw == null ? false : asRaw; // Optimize to serialize for the situation where the data == size of buffer

	      if (asRaw && typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer) && this.buffer.length === this.position) return this.buffer; // If it's a node.js buffer object

	      if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
	        return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString('binary', 0, this.position);
	      } else {
	        if (asRaw) {
	          // we support the slice command use it
	          if (this.buffer['slice'] != null) {
	            return this.buffer.slice(0, this.position);
	          } else {
	            // Create a new buffer to copy content to
	            var newBuffer = isUint8Array(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position); // Copy content

	            for (var i = 0; i < this.position; i++) {
	              newBuffer[i] = this.buffer[i];
	            } // Return the buffer


	            return newBuffer;
	          }
	        } else {
	          return convertArraytoUtf8BinaryString(this.buffer, 0, this.position);
	        }
	      }
	    }
	    /**
	     * Length.
	     *
	     * @method
	     * @return {number} the length of the binary.
	     */

	  }, {
	    key: "length",
	    value: function length() {
	      return this.position;
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toJSON",
	    value: function toJSON() {
	      return this.buffer != null ? this.buffer.toString('base64') : '';
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toString",
	    value: function toString(format) {
	      return this.buffer != null ? this.buffer.slice(0, this.position).toString(format) : '';
	    }
	    /**
	     * @ignore
	     */

	  }, {
	    key: "toExtendedJSON",
	    value: function toExtendedJSON() {
	      var base64String = Buffer$3.isBuffer(this.buffer) ? this.buffer.toString('base64') : Buffer$3.from(this.buffer).toString('base64');
	      var subType = Number(this.sub_type).toString(16);
	      return {
	        $binary: {
	          base64: base64String,
	          subType: subType.length === 1 ? '0' + subType : subType
	        }
	      };
	    }
	    /**
	     * @ignore
	     */

	  }], [{
	    key: "fromExtendedJSON",
	    value: function fromExtendedJSON(doc) {
	      var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
	      var data = Buffer$3.from(doc.$binary.base64, 'base64');
	      return new Binary(data, type);
	    }
	  }]);

	  return Binary;
	}();
	/**
	 * Binary default subtype
	 * @ignore
	 */


	var BSON_BINARY_SUBTYPE_DEFAULT = 0;

	function isUint8Array(obj) {
	  return Object.prototype.toString.call(obj) === '[object Uint8Array]';
	}
	/**
	 * @ignore
	 */


	function writeStringToArray(data) {
	  // Create a buffer
	  var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length); // Write the content to the buffer

	  for (var i = 0; i < data.length; i++) {
	    buffer$$1[i] = data.charCodeAt(i);
	  } // Write the string to the buffer


	  return buffer$$1;
	}
	/**
	 * Convert Array ot Uint8Array to Binary String
	 *
	 * @ignore
	 */


	function convertArraytoUtf8BinaryString(byteArray, startIndex, endIndex) {
	  var result = '';

	  for (var i = startIndex; i < endIndex; i++) {
	    result = result + String.fromCharCode(byteArray[i]);
	  }

	  return result;
	}

	Binary.BUFFER_SIZE = 256;
	/**
	 * Default BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_DEFAULT = 0;
	/**
	 * Function BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_FUNCTION = 1;
	/**
	 * Byte Array BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_BYTE_ARRAY = 2;
	/**
	 * OLD UUID BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_UUID_OLD = 3;
	/**
	 * UUID BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_UUID = 4;
	/**
	 * MD5 BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_MD5 = 5;
	/**
	 * User BSON type
	 *
	 * @classconstant SUBTYPE_DEFAULT
	 **/

	Binary.SUBTYPE_USER_DEFINED = 128;
	Object.defineProperty(Binary.prototype, '_bsontype', {
	  value: 'Binary'
	});
	var binary = Binary;

	var constants = {
	  // BSON MAX VALUES
	  BSON_INT32_MAX: 0x7fffffff,
	  BSON_INT32_MIN: -0x80000000,
	  BSON_INT64_MAX: Math.pow(2, 63) - 1,
	  BSON_INT64_MIN: -Math.pow(2, 63),
	  // JS MAX PRECISE VALUES
	  JS_INT_MAX: 0x20000000000000,
	  // Any integer up to 2^53 can be precisely represented by a double.
	  JS_INT_MIN: -0x20000000000000,
	  // Any integer down to -2^53 can be precisely represented by a double.

	  /**
	   * Number BSON Type
	   *
	   * @classconstant BSON_DATA_NUMBER
	   **/
	  BSON_DATA_NUMBER: 1,

	  /**
	   * String BSON Type
	   *
	   * @classconstant BSON_DATA_STRING
	   **/
	  BSON_DATA_STRING: 2,

	  /**
	   * Object BSON Type
	   *
	   * @classconstant BSON_DATA_OBJECT
	   **/
	  BSON_DATA_OBJECT: 3,

	  /**
	   * Array BSON Type
	   *
	   * @classconstant BSON_DATA_ARRAY
	   **/
	  BSON_DATA_ARRAY: 4,

	  /**
	   * Binary BSON Type
	   *
	   * @classconstant BSON_DATA_BINARY
	   **/
	  BSON_DATA_BINARY: 5,

	  /**
	   * Binary BSON Type
	   *
	   * @classconstant BSON_DATA_UNDEFINED
	   **/
	  BSON_DATA_UNDEFINED: 6,

	  /**
	   * ObjectId BSON Type
	   *
	   * @classconstant BSON_DATA_OID
	   **/
	  BSON_DATA_OID: 7,

	  /**
	   * Boolean BSON Type
	   *
	   * @classconstant BSON_DATA_BOOLEAN
	   **/
	  BSON_DATA_BOOLEAN: 8,

	  /**
	   * Date BSON Type
	   *
	   * @classconstant BSON_DATA_DATE
	   **/
	  BSON_DATA_DATE: 9,

	  /**
	   * null BSON Type
	   *
	   * @classconstant BSON_DATA_NULL
	   **/
	  BSON_DATA_NULL: 10,

	  /**
	   * RegExp BSON Type
	   *
	   * @classconstant BSON_DATA_REGEXP
	   **/
	  BSON_DATA_REGEXP: 11,

	  /**
	   * Code BSON Type
	   *
	   * @classconstant BSON_DATA_DBPOINTER
	   **/
	  BSON_DATA_DBPOINTER: 12,

	  /**
	   * Code BSON Type
	   *
	   * @classconstant BSON_DATA_CODE
	   **/
	  BSON_DATA_CODE: 13,

	  /**
	   * Symbol BSON Type
	   *
	   * @classconstant BSON_DATA_SYMBOL
	   **/
	  BSON_DATA_SYMBOL: 14,

	  /**
	   * Code with Scope BSON Type
	   *
	   * @classconstant BSON_DATA_CODE_W_SCOPE
	   **/
	  BSON_DATA_CODE_W_SCOPE: 15,

	  /**
	   * 32 bit Integer BSON Type
	   *
	   * @classconstant BSON_DATA_INT
	   **/
	  BSON_DATA_INT: 16,

	  /**
	   * Timestamp BSON Type
	   *
	   * @classconstant BSON_DATA_TIMESTAMP
	   **/
	  BSON_DATA_TIMESTAMP: 17,

	  /**
	   * Long BSON Type
	   *
	   * @classconstant BSON_DATA_LONG
	   **/
	  BSON_DATA_LONG: 18,

	  /**
	   * Long BSON Type
	   *
	   * @classconstant BSON_DATA_DECIMAL128
	   **/
	  BSON_DATA_DECIMAL128: 19,

	  /**
	   * MinKey BSON Type
	   *
	   * @classconstant BSON_DATA_MIN_KEY
	   **/
	  BSON_DATA_MIN_KEY: 0xff,

	  /**
	   * MaxKey BSON Type
	   *
	   * @classconstant BSON_DATA_MAX_KEY
	   **/
	  BSON_DATA_MAX_KEY: 0x7f,

	  /**
	   * Binary Default Type
	   *
	   * @classconstant BSON_BINARY_SUBTYPE_DEFAULT
	   **/
	  BSON_BINARY_SUBTYPE_DEFAULT: 0,

	  /**
	   * Binary Function Type
	   *
	   * @classconstant BSON_BINARY_SUBTYPE_FUNCTION
	   **/
	  BSON_BINARY_SUBTYPE_FUNCTION: 1,

	  /**
	   * Binary Byte Array Type
	   *
	   * @classconstant BSON_BINARY_SUBTYPE_BYTE_ARRAY
	   **/
	  BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,

	  /**
	   * Binary UUID Type
	   *
	   * @classconstant BSON_BINARY_SUBTYPE_UUID
	   **/
	  BSON_BINARY_SUBTYPE_UUID: 3,

	  /**
	   * Binary MD5 Type
	   *
	   * @classconstant BSON_BINARY_SUBTYPE_MD5
	   **/
	  BSON_BINARY_SUBTYPE_MD5: 4,

	  /**
	   * Binary User Defined Type
	   *
	   * @classconstant BSON_BINARY_SUBTYPE_USER_DEFINED
	   **/
	  BSON_BINARY_SUBTYPE_USER_DEFINED: 128
	};

	function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
	// const Map = require('./map');

	/**
	 * @namespace EJSON
	 */
	// all the types where we don't need to do any special processing and can just pass the EJSON
	//straight to type.fromExtendedJSON


	var keysToCodecs = {
	  $oid: objectid,
	  $binary: binary,
	  $symbol: symbol,
	  $numberInt: int_32,
	  $numberDecimal: decimal128,
	  $numberDouble: double_1,
	  $numberLong: long_1,
	  $minKey: min_key,
	  $maxKey: max_key,
	  $regularExpression: regexp,
	  $timestamp: timestamp
	};

	function deserializeValue(self, key, value, options) {
	  if (typeof value === 'number') {
	    if (options.relaxed) {
	      return value;
	    } // if it's an integer, should interpret as smallest BSON integer
	    // that can represent it exactly. (if out of range, interpret as double.)


	    if (Math.floor(value) === value) {
	      if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) return new int_32(value);
	      if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) return new long_1.fromNumber(value);
	    } // If the number is a non-integer or out of integer range, should interpret as BSON Double.


	    return new double_1(value);
	  } // from here on out we're looking for bson types, so bail if its not an object


	  if (value == null || _typeof$2(value) !== 'object') return value; // upgrade deprecated undefined to null

	  if (value.$undefined) return null;
	  var keys = Object.keys(value).filter(function (k) {
	    return k.startsWith('$') && value[k] != null;
	  });

	  for (var i = 0; i < keys.length; i++) {
	    var c = keysToCodecs[keys[i]];
	    if (c) return c.fromExtendedJSON(value, options);
	  }

	  if (value.$date != null) {
	    var d = value.$date;
	    var date = new Date();
	    if (typeof d === 'string') date.setTime(Date.parse(d));else if (long_1.isLong(d)) date.setTime(d.toNumber());else if (typeof d === 'number' && options.relaxed) date.setTime(d);
	    return date;
	  }

	  if (value.$code != null) {
	    var copy = Object.assign({}, value);

	    if (value.$scope) {
	      copy.$scope = deserializeValue(self, null, value.$scope);
	    }

	    return code.fromExtendedJSON(value);
	  }

	  if (value.$ref != null || value.$dbPointer != null) {
	    var v = value.$ref ? value : value.$dbPointer; // we run into this in a "degenerate EJSON" case (with $id and $ref order flipped)
	    // because of the order JSON.parse goes through the document

	    if (v instanceof db_ref) return v;
	    var dollarKeys = Object.keys(v).filter(function (k) {
	      return k.startsWith('$');
	    });
	    var valid = true;
	    dollarKeys.forEach(function (k) {
	      if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
	    }); // only make DBRef if $ keys are all valid

	    if (valid) return db_ref.fromExtendedJSON(v);
	  }

	  return value;
	}
	/**
	 * Parse an Extended JSON string, constructing the JavaScript value or object described by that
	 * string.
	 *
	 * @memberof EJSON
	 * @param {string} text
	 * @param {object} [options] Optional settings
	 * @param {boolean} [options.relaxed=true] Attempt to return native JS types where possible, rather than BSON types (if true)
	 * @return {object}
	 *
	 * @example
	 * const { EJSON } = require('bson');
	 * const text = '{ "int32": { "$numberInt": "10" } }';
	 *
	 * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
	 * console.log(EJSON.parse(text, { relaxed: false }));
	 *
	 * // prints { int32: 10 }
	 * console.log(EJSON.parse(text));
	 */


	function parse(text, options) {
	  var _this = this;

	  options = Object.assign({}, {
	    relaxed: true
	  }, options); // relaxed implies not strict

	  if (typeof options.relaxed === 'boolean') options.strict = !options.relaxed;
	  if (typeof options.strict === 'boolean') options.relaxed = !options.strict;
	  return JSON.parse(text, function (key, value) {
	    return deserializeValue(_this, key, value, options);
	  });
	} //
	// Serializer
	//
	// MAX INT32 boundaries


	var BSON_INT32_MAX = 0x7fffffff,
	    BSON_INT32_MIN = -0x80000000,
	    BSON_INT64_MAX = 0x7fffffffffffffff,
	    BSON_INT64_MIN = -0x8000000000000000;
	/**
	 * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
	 * function is specified or optionally including only the specified properties if a replacer array
	 * is specified.
	 *
	 * @memberof EJSON
	 * @param {object} value The value to convert to extended JSON
	 * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
	 * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
	 * @param {object} [options] Optional settings
	 * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
	 * @returns {string}
	 *
	 * @example
	 * const { EJSON } = require('bson');
	 * const Int32 = require('mongodb').Int32;
	 * const doc = { int32: new Int32(10) };
	 *
	 * // prints '{"int32":{"$numberInt":"10"}}'
	 * console.log(EJSON.stringify(doc, { relaxed: false }));
	 *
	 * // prints '{"int32":10}'
	 * console.log(EJSON.stringify(doc));
	 */

	function stringify(value, replacer, space, options) {
	  if (space != null && _typeof$2(space) === 'object') {
	    options = space;
	    space = 0;
	  }

	  if (replacer != null && _typeof$2(replacer) === 'object' && !Array.isArray(replacer)) {
	    options = replacer;
	    replacer = null;
	    space = 0;
	  }

	  options = Object.assign({}, {
	    relaxed: true
	  }, options);
	  var doc = Array.isArray(value) ? serializeArray(value, options) : serializeDocument(value, options);
	  return JSON.stringify(doc, replacer, space);
	}
	/**
	 * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
	 *
	 * @memberof EJSON
	 * @param {object} bson The object to serialize
	 * @param {object} [options] Optional settings passed to the `stringify` function
	 * @return {object}
	 */


	function serialize(bson, options) {
	  options = options || {};
	  return JSON.parse(stringify(bson, options));
	}
	/**
	 * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
	 *
	 * @memberof EJSON
	 * @param {object} ejson The Extended JSON object to deserialize
	 * @param {object} [options] Optional settings passed to the parse method
	 * @return {object}
	 */


	function deserialize(ejson, options) {
	  options = options || {};
	  return parse(JSON.stringify(ejson), options);
	}

	function serializeArray(array, options) {
	  return array.map(function (v) {
	    return serializeValue(v, options);
	  });
	}

	function getISOString(date) {
	  var isoStr = date.toISOString(); // we should only show milliseconds in timestamp if they're non-zero

	  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
	}

	function serializeValue(value, options) {
	  if (Array.isArray(value)) return serializeArray(value, options);
	  if (value === undefined) return null;

	  if (value instanceof Date) {
	    var dateNum = value.getTime(),
	        // is it in year range 1970-9999?
	    inRange = dateNum > -1 && dateNum < 253402318800000;
	    return options.relaxed && inRange ? {
	      $date: getISOString(value)
	    } : {
	      $date: {
	        $numberLong: value.getTime().toString()
	      }
	    };
	  }

	  if (typeof value === 'number' && !options.relaxed) {
	    // it's an integer
	    if (Math.floor(value) === value) {
	      var int32Range = value >= BSON_INT32_MIN && value <= BSON_INT32_MAX,
	          int64Range = value >= BSON_INT64_MIN && value <= BSON_INT64_MAX; // interpret as being of the smallest BSON integer type that can represent the number exactly

	      if (int32Range) return {
	        $numberInt: value.toString()
	      };
	      if (int64Range) return {
	        $numberLong: value.toString()
	      };
	    }

	    return {
	      $numberDouble: value.toString()
	    };
	  }

	  if (value instanceof RegExp) {
	    var flags = value.flags;

	    if (flags === undefined) {
	      flags = value.toString().match(/[gimuy]*$/)[0];
	    }

	    var rx = new regexp(value.source, flags);
	    return rx.toExtendedJSON();
	  }

	  if (value != null && _typeof$2(value) === 'object') return serializeDocument(value, options);
	  return value;
	}

	var BSON_TYPE_MAPPINGS = {
	  Binary: function Binary(o) {
	    return new binary(o.value(), o.subtype);
	  },
	  Code: function Code(o) {
	    return new code(o.code, o.scope);
	  },
	  DBRef: function DBRef(o) {
	    return new db_ref(o.collection || o.namespace, o.oid, o.db, o.fields);
	  },
	  // "namespace" for 1.x library backwards compat
	  Decimal128: function Decimal128(o) {
	    return new decimal128(o.bytes);
	  },
	  Double: function Double(o) {
	    return new double_1(o.value);
	  },
	  Int32: function Int32(o) {
	    return new int_32(o.value);
	  },
	  Long: function Long(o) {
	    return long_1.fromBits( // underscore variants for 1.x backwards compatibility
	    o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_);
	  },
	  MaxKey: function MaxKey() {
	    return new max_key();
	  },
	  MinKey: function MinKey() {
	    return new min_key();
	  },
	  ObjectID: function ObjectID(o) {
	    return new objectid(o);
	  },
	  ObjectId: function ObjectId(o) {
	    return new objectid(o);
	  },
	  // support 4.0.0/4.0.1 before _bsontype was reverted back to ObjectID
	  BSONRegExp: function BSONRegExp(o) {
	    return new regexp(o.pattern, o.options);
	  },
	  Symbol: function Symbol(o) {
	    return new symbol(o.value);
	  },
	  Timestamp: function Timestamp(o) {
	    return timestamp.fromBits(o.low, o.high);
	  }
	};

	function serializeDocument(doc, options) {
	  if (doc == null || _typeof$2(doc) !== 'object') throw new Error('not an object instance');
	  var bsontype = doc._bsontype;

	  if (typeof bsontype === 'undefined') {
	    // It's a regular object. Recursively serialize its property values.
	    var _doc = {};

	    for (var name in doc) {
	      _doc[name] = serializeValue(doc[name], options);
	    }

	    return _doc;
	  } else if (typeof bsontype === 'string') {
	    // the "document" is really just a BSON type object
	    var _doc2 = doc;

	    if (typeof _doc2.toExtendedJSON !== 'function') {
	      // There's no EJSON serialization function on the object. It's probably an
	      // object created by a previous version of this library (or another library)
	      // that's duck-typing objects to look like they were generated by this library).
	      // Copy the object into this library's version of that type.
	      var mapper = BSON_TYPE_MAPPINGS[bsontype];

	      if (!mapper) {
	        throw new TypeError('Unrecognized or invalid _bsontype: ' + bsontype);
	      }

	      _doc2 = mapper(_doc2);
	    } // Two BSON types may have nested objects that may need to be serialized too


	    if (bsontype === 'Code' && _doc2.scope) {
	      _doc2 = new code(_doc2.code, serializeValue(_doc2.scope, options));
	    } else if (bsontype === 'DBRef' && _doc2.oid) {
	      _doc2 = new db_ref(_doc2.collection, serializeValue(_doc2.oid, options), _doc2.db, _doc2.fields);
	    }

	    return _doc2.toExtendedJSON(options);
	  } else {
	    throw new Error('_bsontype must be a string, but was: ' + _typeof$2(bsontype));
	  }
	}

	var extended_json = {
	  parse: parse,
	  deserialize: deserialize,
	  serialize: serialize,
	  stringify: stringify
	};

	var FIRST_BIT = 0x80;
	var FIRST_TWO_BITS = 0xc0;
	var FIRST_THREE_BITS = 0xe0;
	var FIRST_FOUR_BITS = 0xf0;
	var FIRST_FIVE_BITS = 0xf8;
	var TWO_BIT_CHAR = 0xc0;
	var THREE_BIT_CHAR = 0xe0;
	var FOUR_BIT_CHAR = 0xf0;
	var CONTINUING_CHAR = 0x80;
	/**
	 * Determines if the passed in bytes are valid utf8
	 * @param {Buffer|Uint8Array} bytes An array of 8-bit bytes. Must be indexable and have length property
	 * @param {Number} start The index to start validating
	 * @param {Number} end The index to end validating
	 * @returns {boolean} True if valid utf8
	 */

	function validateUtf8(bytes, start, end) {
	  var continuation = 0;

	  for (var i = start; i < end; i += 1) {
	    var byte = bytes[i];

	    if (continuation) {
	      if ((byte & FIRST_TWO_BITS) !== CONTINUING_CHAR) {
	        return false;
	      }

	      continuation -= 1;
	    } else if (byte & FIRST_BIT) {
	      if ((byte & FIRST_THREE_BITS) === TWO_BIT_CHAR) {
	        continuation = 1;
	      } else if ((byte & FIRST_FOUR_BITS) === THREE_BIT_CHAR) {
	        continuation = 2;
	      } else if ((byte & FIRST_FIVE_BITS) === FOUR_BIT_CHAR) {
	        continuation = 3;
	      } else {
	        return false;
	      }
	    }
	  }

	  return !continuation;
	}

	var validateUtf8_1 = validateUtf8;
	var validate_utf8 = {
	  validateUtf8: validateUtf8_1
	};

	var Buffer$4 = buffer.Buffer;
	var validateUtf8$1 = validate_utf8.validateUtf8; // Internal long versions

	var JS_INT_MAX_LONG = long_1.fromNumber(constants.JS_INT_MAX);
	var JS_INT_MIN_LONG = long_1.fromNumber(constants.JS_INT_MIN);
	var functionCache = {};

	function deserialize$1(buffer$$1, options, isArray) {
	  options = options == null ? {} : options;
	  var index = options && options.index ? options.index : 0; // Read the document size

	  var size = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

	  if (size < 5) {
	    throw new Error("bson size must be >= 5, is ".concat(size));
	  }

	  if (options.allowObjectSmallerThanBufferSize && buffer$$1.length < size) {
	    throw new Error("buffer length ".concat(buffer$$1.length, " must be >= bson size ").concat(size));
	  }

	  if (!options.allowObjectSmallerThanBufferSize && buffer$$1.length !== size) {
	    throw new Error("buffer length ".concat(buffer$$1.length, " must === bson size ").concat(size));
	  }

	  if (size + index > buffer$$1.length) {
	    throw new Error("(bson size ".concat(size, " + options.index ").concat(index, " must be <= buffer length ").concat(Buffer$4.byteLength(buffer$$1), ")"));
	  } // Illegal end value


	  if (buffer$$1[index + size - 1] !== 0) {
	    throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
	  } // Start deserializtion


	  return deserializeObject(buffer$$1, index, options, isArray);
	}

	function deserializeObject(buffer$$1, index, options, isArray) {
	  var evalFunctions = options['evalFunctions'] == null ? false : options['evalFunctions'];
	  var cacheFunctions = options['cacheFunctions'] == null ? false : options['cacheFunctions'];
	  var cacheFunctionsCrc32 = options['cacheFunctionsCrc32'] == null ? false : options['cacheFunctionsCrc32'];
	  if (!cacheFunctionsCrc32) var crc32 = null;
	  var fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw']; // Return raw bson buffer instead of parsing it

	  var raw = options['raw'] == null ? false : options['raw']; // Return BSONRegExp objects instead of native regular expressions

	  var bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false; // Controls the promotion of values vs wrapper classes

	  var promoteBuffers = options['promoteBuffers'] == null ? false : options['promoteBuffers'];
	  var promoteLongs = options['promoteLongs'] == null ? true : options['promoteLongs'];
	  var promoteValues = options['promoteValues'] == null ? true : options['promoteValues']; // Set the start index

	  var startIndex = index; // Validate that we have at least 4 bytes of buffer

	  if (buffer$$1.length < 5) throw new Error('corrupt bson message < 5 bytes long'); // Read the document size

	  var size = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Ensure buffer is valid size

	  if (size < 5 || size > buffer$$1.length) throw new Error('corrupt bson message'); // Create holding object

	  var object = isArray ? [] : {}; // Used for arrays to skip having to perform utf8 decoding

	  var arrayIndex = 0;
	  var done = false; // While we have more left data left keep parsing

	  while (!done) {
	    // Read the type
	    var elementType = buffer$$1[index++]; // If we get a zero it's the last byte, exit

	    if (elementType === 0) break; // Get the start search index

	    var i = index; // Locate the end of the c string

	    while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
	      i++;
	    } // If are at the end of the buffer there is a problem with the document


	    if (i >= Buffer$4.byteLength(buffer$$1)) throw new Error('Bad BSON Document: illegal CString');
	    var name = isArray ? arrayIndex++ : buffer$$1.toString('utf8', index, i);
	    index = i + 1;

	    if (elementType === constants.BSON_DATA_STRING) {
	      var stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	      if (stringSize <= 0 || stringSize > buffer$$1.length - index || buffer$$1[index + stringSize - 1] !== 0) throw new Error('bad string length in bson');

	      if (!validateUtf8$1(buffer$$1, index, index + stringSize - 1)) {
	        throw new Error('Invalid UTF-8 string in BSON document');
	      }

	      var s = buffer$$1.toString('utf8', index, index + stringSize - 1);
	      object[name] = s;
	      index = index + stringSize;
	    } else if (elementType === constants.BSON_DATA_OID) {
	      var oid = Buffer$4.alloc(12);
	      buffer$$1.copy(oid, 0, index, index + 12);
	      object[name] = new objectid(oid);
	      index = index + 12;
	    } else if (elementType === constants.BSON_DATA_INT && promoteValues === false) {
	      object[name] = new int_32(buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24);
	    } else if (elementType === constants.BSON_DATA_INT) {
	      object[name] = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	    } else if (elementType === constants.BSON_DATA_NUMBER && promoteValues === false) {
	      object[name] = new double_1(buffer$$1.readDoubleLE(index));
	      index = index + 8;
	    } else if (elementType === constants.BSON_DATA_NUMBER) {
	      object[name] = buffer$$1.readDoubleLE(index);
	      index = index + 8;
	    } else if (elementType === constants.BSON_DATA_DATE) {
	      var lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	      var highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	      object[name] = new Date(new long_1(lowBits, highBits).toNumber());
	    } else if (elementType === constants.BSON_DATA_BOOLEAN) {
	      if (buffer$$1[index] !== 0 && buffer$$1[index] !== 1) throw new Error('illegal boolean type value');
	      object[name] = buffer$$1[index++] === 1;
	    } else if (elementType === constants.BSON_DATA_OBJECT) {
	      var _index = index;
	      var objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
	      if (objectSize <= 0 || objectSize > buffer$$1.length - index) throw new Error('bad embedded document length in bson'); // We have a raw value

	      if (raw) {
	        object[name] = buffer$$1.slice(index, index + objectSize);
	      } else {
	        object[name] = deserializeObject(buffer$$1, _index, options, false);
	      }

	      index = index + objectSize;
	    } else if (elementType === constants.BSON_DATA_ARRAY) {
	      var _index2 = index;

	      var _objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

	      var arrayOptions = options; // Stop index

	      var stopIndex = index + _objectSize; // All elements of array to be returned as raw bson

	      if (fieldsAsRaw && fieldsAsRaw[name]) {
	        arrayOptions = {};

	        for (var n in options) {
	          arrayOptions[n] = options[n];
	        }

	        arrayOptions['raw'] = true;
	      }

	      object[name] = deserializeObject(buffer$$1, _index2, arrayOptions, true);
	      index = index + _objectSize;
	      if (buffer$$1[index - 1] !== 0) throw new Error('invalid array terminator byte');
	      if (index !== stopIndex) throw new Error('corrupted array bson');
	    } else if (elementType === constants.BSON_DATA_UNDEFINED) {
	      object[name] = undefined;
	    } else if (elementType === constants.BSON_DATA_NULL) {
	      object[name] = null;
	    } else if (elementType === constants.BSON_DATA_LONG) {
	      // Unpack the low and high bits
	      var _lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

	      var _highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

	      var long$$1 = new long_1(_lowBits, _highBits); // Promote the long if possible

	      if (promoteLongs && promoteValues === true) {
	        object[name] = long$$1.lessThanOrEqual(JS_INT_MAX_LONG) && long$$1.greaterThanOrEqual(JS_INT_MIN_LONG) ? long$$1.toNumber() : long$$1;
	      } else {
	        object[name] = long$$1;
	      }
	    } else if (elementType === constants.BSON_DATA_DECIMAL128) {
	      // Buffer to contain the decimal bytes
	      var bytes = Buffer$4.alloc(16); // Copy the next 16 bytes into the bytes buffer

	      buffer$$1.copy(bytes, 0, index, index + 16); // Update index

	      index = index + 16; // Assign the new Decimal128 value

	      var decimal128$$1 = new decimal128(bytes); // If we have an alternative mapper use that

	      object[name] = decimal128$$1.toObject ? decimal128$$1.toObject() : decimal128$$1;
	    } else if (elementType === constants.BSON_DATA_BINARY) {
	      var binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	      var totalBinarySize = binarySize;
	      var subType = buffer$$1[index++]; // Did we have a negative binary size, throw

	      if (binarySize < 0) throw new Error('Negative binary type element size found'); // Is the length longer than the document

	      if (binarySize > Buffer$4.byteLength(buffer$$1)) throw new Error('Binary type size larger than document size'); // Decode as raw Buffer object if options specifies it

	      if (buffer$$1['slice'] != null) {
	        // If we have subtype 2 skip the 4 bytes for the size
	        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
	          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
	          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
	          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
	        }

	        if (promoteBuffers && promoteValues) {
	          object[name] = buffer$$1.slice(index, index + binarySize);
	        } else {
	          object[name] = new binary(buffer$$1.slice(index, index + binarySize), subType);
	        }
	      } else {
	        var _buffer = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize); // If we have subtype 2 skip the 4 bytes for the size


	        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
	          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
	          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
	          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
	          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
	        } // Copy the data


	        for (i = 0; i < binarySize; i++) {
	          _buffer[i] = buffer$$1[index + i];
	        }

	        if (promoteBuffers && promoteValues) {
	          object[name] = _buffer;
	        } else {
	          object[name] = new binary(_buffer, subType);
	        }
	      } // Update the index


	      index = index + binarySize;
	    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === false) {
	      // Get the start search index
	      i = index; // Locate the end of the c string

	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
	        i++;
	      } // If are at the end of the buffer there is a problem with the document


	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

	      var source = buffer$$1.toString('utf8', index, i); // Create the regexp

	      index = i + 1; // Get the start search index

	      i = index; // Locate the end of the c string

	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
	        i++;
	      } // If are at the end of the buffer there is a problem with the document


	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

	      var regExpOptions = buffer$$1.toString('utf8', index, i);
	      index = i + 1; // For each option add the corresponding one for javascript

	      var optionsArray = new Array(regExpOptions.length); // Parse options

	      for (i = 0; i < regExpOptions.length; i++) {
	        switch (regExpOptions[i]) {
	          case 'm':
	            optionsArray[i] = 'm';
	            break;

	          case 's':
	            optionsArray[i] = 'g';
	            break;

	          case 'i':
	            optionsArray[i] = 'i';
	            break;
	        }
	      }

	      object[name] = new RegExp(source, optionsArray.join(''));
	    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === true) {
	      // Get the start search index
	      i = index; // Locate the end of the c string

	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
	        i++;
	      } // If are at the end of the buffer there is a problem with the document


	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

	      var _source = buffer$$1.toString('utf8', index, i);

	      index = i + 1; // Get the start search index

	      i = index; // Locate the end of the c string

	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
	        i++;
	      } // If are at the end of the buffer there is a problem with the document


	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

	      var _regExpOptions = buffer$$1.toString('utf8', index, i);

	      index = i + 1; // Set the object

	      object[name] = new regexp(_source, _regExpOptions);
	    } else if (elementType === constants.BSON_DATA_SYMBOL) {
	      var _stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

	      if (_stringSize <= 0 || _stringSize > buffer$$1.length - index || buffer$$1[index + _stringSize - 1] !== 0) throw new Error('bad string length in bson'); // symbol is deprecated - upgrade to string.

	      object[name] = buffer$$1.toString('utf8', index, index + _stringSize - 1);
	      index = index + _stringSize;
	    } else if (elementType === constants.BSON_DATA_TIMESTAMP) {
	      var _lowBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

	      var _highBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

	      object[name] = new timestamp(_lowBits2, _highBits2);
	    } else if (elementType === constants.BSON_DATA_MIN_KEY) {
	      object[name] = new min_key();
	    } else if (elementType === constants.BSON_DATA_MAX_KEY) {
	      object[name] = new max_key();
	    } else if (elementType === constants.BSON_DATA_CODE) {
	      var _stringSize2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

	      if (_stringSize2 <= 0 || _stringSize2 > buffer$$1.length - index || buffer$$1[index + _stringSize2 - 1] !== 0) throw new Error('bad string length in bson');
	      var functionString = buffer$$1.toString('utf8', index, index + _stringSize2 - 1); // If we are evaluating the functions

	      if (evalFunctions) {
	        // If we have cache enabled let's look for the md5 of the function in the cache
	        if (cacheFunctions) {
	          var hash = cacheFunctionsCrc32 ? crc32(functionString) : functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval

	          object[name] = isolateEvalWithHash(functionCache, hash, functionString, object);
	        } else {
	          object[name] = isolateEval(functionString);
	        }
	      } else {
	        object[name] = new code(functionString);
	      } // Update parse index position


	      index = index + _stringSize2;
	    } else if (elementType === constants.BSON_DATA_CODE_W_SCOPE) {
	      var totalSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Element cannot be shorter than totalSize + stringSize + documentSize + terminator

	      if (totalSize < 4 + 4 + 4 + 1) {
	        throw new Error('code_w_scope total size shorter minimum expected length');
	      } // Get the code string size


	      var _stringSize3 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


	      if (_stringSize3 <= 0 || _stringSize3 > buffer$$1.length - index || buffer$$1[index + _stringSize3 - 1] !== 0) throw new Error('bad string length in bson'); // Javascript function

	      var _functionString = buffer$$1.toString('utf8', index, index + _stringSize3 - 1); // Update parse index position


	      index = index + _stringSize3; // Parse the element

	      var _index3 = index; // Decode the size of the object document

	      var _objectSize2 = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24; // Decode the scope object


	      var scopeObject = deserializeObject(buffer$$1, _index3, options, false); // Adjust the index

	      index = index + _objectSize2; // Check if field length is to short

	      if (totalSize < 4 + 4 + _objectSize2 + _stringSize3) {
	        throw new Error('code_w_scope total size is to short, truncating scope');
	      } // Check if totalSize field is to long


	      if (totalSize > 4 + 4 + _objectSize2 + _stringSize3) {
	        throw new Error('code_w_scope total size is to long, clips outer document');
	      } // If we are evaluating the functions


	      if (evalFunctions) {
	        // If we have cache enabled let's look for the md5 of the function in the cache
	        if (cacheFunctions) {
	          var _hash = cacheFunctionsCrc32 ? crc32(_functionString) : _functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval


	          object[name] = isolateEvalWithHash(functionCache, _hash, _functionString, object);
	        } else {
	          object[name] = isolateEval(_functionString);
	        }

	        object[name].scope = scopeObject;
	      } else {
	        object[name] = new code(_functionString, scopeObject);
	      }
	    } else if (elementType === constants.BSON_DATA_DBPOINTER) {
	      // Get the code string size
	      var _stringSize4 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


	      if (_stringSize4 <= 0 || _stringSize4 > buffer$$1.length - index || buffer$$1[index + _stringSize4 - 1] !== 0) throw new Error('bad string length in bson'); // Namespace

	      if (!validateUtf8$1(buffer$$1, index, index + _stringSize4 - 1)) {
	        throw new Error('Invalid UTF-8 string in BSON document');
	      }

	      var namespace = buffer$$1.toString('utf8', index, index + _stringSize4 - 1); // Update parse index position

	      index = index + _stringSize4; // Read the oid

	      var oidBuffer = Buffer$4.alloc(12);
	      buffer$$1.copy(oidBuffer, 0, index, index + 12);

	      var _oid = new objectid(oidBuffer); // Update the index


	      index = index + 12; // Upgrade to DBRef type

	      object[name] = new db_ref(namespace, _oid);
	    } else {
	      throw new Error('Detected unknown BSON type ' + elementType.toString(16) + ' for fieldname "' + name + '", are you using the latest BSON parser?');
	    }
	  } // Check if the deserialization was against a valid array/object


	  if (size !== index - startIndex) {
	    if (isArray) throw new Error('corrupt array bson');
	    throw new Error('corrupt object bson');
	  } // check if object's $ keys are those of a DBRef


	  var dollarKeys = Object.keys(object).filter(function (k) {
	    return k.startsWith('$');
	  });
	  var valid = true;
	  dollarKeys.forEach(function (k) {
	    if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
	  }); // if a $key not in "$ref", "$id", "$db", don't make a DBRef

	  if (!valid) return object;

	  if (object['$id'] != null && object['$ref'] != null) {
	    var copy = Object.assign({}, object);
	    delete copy.$ref;
	    delete copy.$id;
	    delete copy.$db;
	    return new db_ref(object.$ref, object.$id, object.$db || null, copy);
	  }

	  return object;
	}
	/**
	 * Ensure eval is isolated.
	 *
	 * @ignore
	 * @api private
	 */


	function isolateEvalWithHash(functionCache, hash, functionString, object) {
	  // Contains the value we are going to set
	  var value = null; // Check for cache hit, eval if missing and return cached function

	  if (functionCache[hash] == null) {
	    eval('value = ' + functionString);
	    functionCache[hash] = value;
	  } // Set the object


	  return functionCache[hash].bind(object);
	}
	/**
	 * Ensure eval is isolated.
	 *
	 * @ignore
	 * @api private
	 */


	function isolateEval(functionString) {
	  // Contains the value we are going to set
	  var value = null; // Eval the function

	  eval('value = ' + functionString);
	  return value;
	}

	var deserializer = deserialize$1;

	// All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions are met:
	//
	//  * Redistributions of source code must retain the above copyright notice,
	//    this list of conditions and the following disclaimer.
	//
	//  * Redistributions in binary form must reproduce the above copyright notice,
	//    this list of conditions and the following disclaimer in the documentation
	//    and/or other materials provided with the distribution.
	//
	//  * Neither the name of Fair Oaks Labs, Inc. nor the names of its contributors
	//    may be used to endorse or promote products derived from this software
	//    without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
	// ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
	// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
	// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
	// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
	// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
	// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
	// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
	// POSSIBILITY OF SUCH DAMAGE.
	//
	//
	// Modifications to writeIEEE754 to support negative zeroes made by Brian White

	function readIEEE754(buffer$$1, offset, endian, mLen, nBytes) {
	  var e,
	      m,
	      bBE = endian === 'big',
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      nBits = -7,
	      i = bBE ? 0 : nBytes - 1,
	      d = bBE ? 1 : -1,
	      s = buffer$$1[offset + i];
	  i += d;
	  e = s & (1 << -nBits) - 1;
	  s >>= -nBits;
	  nBits += eLen;

	  for (; nBits > 0; e = e * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
	  }

	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;

	  for (; nBits > 0; m = m * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
	  }

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : (s ? -1 : 1) * Infinity;
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }

	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
	}

	function writeIEEE754(buffer$$1, value, offset, endian, mLen, nBytes) {
	  var e,
	      m,
	      c,
	      bBE = endian === 'big',
	      eLen = nBytes * 8 - mLen - 1,
	      eMax = (1 << eLen) - 1,
	      eBias = eMax >> 1,
	      rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
	      i = bBE ? nBytes - 1 : 0,
	      d = bBE ? -1 : 1,
	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);

	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }

	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }

	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  if (isNaN(value)) m = 0;

	  while (mLen >= 8) {
	    buffer$$1[offset + i] = m & 0xff;
	    i += d;
	    m /= 256;
	    mLen -= 8;
	  }

	  e = e << mLen | m;
	  if (isNaN(value)) e += 8;
	  eLen += mLen;

	  while (eLen > 0) {
	    buffer$$1[offset + i] = e & 0xff;
	    i += d;
	    e /= 256;
	    eLen -= 8;
	  }

	  buffer$$1[offset + i - d] |= s * 128;
	}

	var float_parser = {
	  readIEEE754: readIEEE754,
	  writeIEEE754: writeIEEE754
	};

	function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

	var Buffer$5 = buffer.Buffer;
	var writeIEEE754$1 = float_parser.writeIEEE754;
	var normalizedFunctionString$1 = utils.normalizedFunctionString;
	var regexp$1 = /\x00/; // eslint-disable-line no-control-regex

	var ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']); // To ensure that 0.4 of node works correctly

	var isDate$1 = function isDate(d) {
	  return _typeof$3(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
	};

	var isRegExp$1 = function isRegExp(d) {
	  return Object.prototype.toString.call(d) === '[object RegExp]';
	};

	function serializeString(buffer$$1, key, value, index, isArray) {
	  // Encode String type
	  buffer$$1[index++] = constants.BSON_DATA_STRING; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes + 1;
	  buffer$$1[index - 1] = 0; // Write the string

	  var size = buffer$$1.write(value, index + 4, 'utf8'); // Write the size of the string to buffer

	  buffer$$1[index + 3] = size + 1 >> 24 & 0xff;
	  buffer$$1[index + 2] = size + 1 >> 16 & 0xff;
	  buffer$$1[index + 1] = size + 1 >> 8 & 0xff;
	  buffer$$1[index] = size + 1 & 0xff; // Update index

	  index = index + 4 + size; // Write zero

	  buffer$$1[index++] = 0;
	  return index;
	}

	function serializeNumber(buffer$$1, key, value, index, isArray) {
	  // We have an integer value
	  if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
	    // If the value fits in 32 bits encode as int, if it fits in a double
	    // encode it as a double, otherwise long
	    if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
	      // Set int type 32 bits or less
	      buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

	      var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	      index = index + numberOfWrittenBytes;
	      buffer$$1[index++] = 0; // Write the int value

	      buffer$$1[index++] = value & 0xff;
	      buffer$$1[index++] = value >> 8 & 0xff;
	      buffer$$1[index++] = value >> 16 & 0xff;
	      buffer$$1[index++] = value >> 24 & 0xff;
	    } else if (value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
	      // Encode as double
	      buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

	      var _numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


	      index = index + _numberOfWrittenBytes;
	      buffer$$1[index++] = 0; // Write float

	      writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

	      index = index + 8;
	    } else {
	      // Set long type
	      buffer$$1[index++] = constants.BSON_DATA_LONG; // Number of written bytes

	      var _numberOfWrittenBytes2 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


	      index = index + _numberOfWrittenBytes2;
	      buffer$$1[index++] = 0;
	      var longVal = long_1.fromNumber(value);
	      var lowBits = longVal.getLowBits();
	      var highBits = longVal.getHighBits(); // Encode low bits

	      buffer$$1[index++] = lowBits & 0xff;
	      buffer$$1[index++] = lowBits >> 8 & 0xff;
	      buffer$$1[index++] = lowBits >> 16 & 0xff;
	      buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

	      buffer$$1[index++] = highBits & 0xff;
	      buffer$$1[index++] = highBits >> 8 & 0xff;
	      buffer$$1[index++] = highBits >> 16 & 0xff;
	      buffer$$1[index++] = highBits >> 24 & 0xff;
	    }
	  } else {
	    // Encode as double
	    buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

	    var _numberOfWrittenBytes3 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


	    index = index + _numberOfWrittenBytes3;
	    buffer$$1[index++] = 0; // Write float

	    writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

	    index = index + 8;
	  }

	  return index;
	}

	function serializeNull(buffer$$1, key, value, index, isArray) {
	  // Set long type
	  buffer$$1[index++] = constants.BSON_DATA_NULL; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0;
	  return index;
	}

	function serializeBoolean(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_BOOLEAN; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Encode the boolean value

	  buffer$$1[index++] = value ? 1 : 0;
	  return index;
	}

	function serializeDate(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_DATE; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write the date

	  var dateInMilis = long_1.fromNumber(value.getTime());
	  var lowBits = dateInMilis.getLowBits();
	  var highBits = dateInMilis.getHighBits(); // Encode low bits

	  buffer$$1[index++] = lowBits & 0xff;
	  buffer$$1[index++] = lowBits >> 8 & 0xff;
	  buffer$$1[index++] = lowBits >> 16 & 0xff;
	  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

	  buffer$$1[index++] = highBits & 0xff;
	  buffer$$1[index++] = highBits >> 8 & 0xff;
	  buffer$$1[index++] = highBits >> 16 & 0xff;
	  buffer$$1[index++] = highBits >> 24 & 0xff;
	  return index;
	}

	function serializeRegExp(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0;

	  if (value.source && value.source.match(regexp$1) != null) {
	    throw Error('value ' + value.source + ' must not contain null bytes');
	  } // Adjust the index


	  index = index + buffer$$1.write(value.source, index, 'utf8'); // Write zero

	  buffer$$1[index++] = 0x00; // Write the parameters

	  if (value.ignoreCase) buffer$$1[index++] = 0x69; // i

	  if (value.global) buffer$$1[index++] = 0x73; // s

	  if (value.multiline) buffer$$1[index++] = 0x6d; // m
	  // Add ending zero

	  buffer$$1[index++] = 0x00;
	  return index;
	}

	function serializeBSONRegExp(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Check the pattern for 0 bytes

	  if (value.pattern.match(regexp$1) != null) {
	    // The BSON spec doesn't allow keys with null bytes because keys are
	    // null-terminated.
	    throw Error('pattern ' + value.pattern + ' must not contain null bytes');
	  } // Adjust the index


	  index = index + buffer$$1.write(value.pattern, index, 'utf8'); // Write zero

	  buffer$$1[index++] = 0x00; // Write the options

	  index = index + buffer$$1.write(value.options.split('').sort().join(''), index, 'utf8'); // Add ending zero

	  buffer$$1[index++] = 0x00;
	  return index;
	}

	function serializeMinMax(buffer$$1, key, value, index, isArray) {
	  // Write the type of either min or max key
	  if (value === null) {
	    buffer$$1[index++] = constants.BSON_DATA_NULL;
	  } else if (value._bsontype === 'MinKey') {
	    buffer$$1[index++] = constants.BSON_DATA_MIN_KEY;
	  } else {
	    buffer$$1[index++] = constants.BSON_DATA_MAX_KEY;
	  } // Number of written bytes


	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0;
	  return index;
	}

	function serializeObjectId(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_OID; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write the objectId into the shared buffer

	  if (typeof value.id === 'string') {
	    buffer$$1.write(value.id, index, 'binary');
	  } else if (value.id && value.id.copy) {
	    value.id.copy(buffer$$1, index, 0, 12);
	  } else {
	    throw new TypeError('object [' + JSON.stringify(value) + '] is not a valid ObjectId');
	  } // Ajust index


	  return index + 12;
	}

	function serializeBuffer(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Get size of the buffer (current write point)

	  var size = value.length; // Write the size of the string to buffer

	  buffer$$1[index++] = size & 0xff;
	  buffer$$1[index++] = size >> 8 & 0xff;
	  buffer$$1[index++] = size >> 16 & 0xff;
	  buffer$$1[index++] = size >> 24 & 0xff; // Write the default subtype

	  buffer$$1[index++] = constants.BSON_BINARY_SUBTYPE_DEFAULT; // Copy the content form the binary field to the buffer

	  value.copy(buffer$$1, index, 0, size); // Adjust the index

	  index = index + size;
	  return index;
	}

	function serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray, path) {
	  for (var i = 0; i < path.length; i++) {
	    if (path[i] === value) throw new Error('cyclic dependency detected');
	  } // Push value to stack


	  path.push(value); // Write the type

	  buffer$$1[index++] = Array.isArray(value) ? constants.BSON_DATA_ARRAY : constants.BSON_DATA_OBJECT; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0;
	  var endIndex = serializeInto(buffer$$1, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path); // Pop stack

	  path.pop();
	  return endIndex;
	}

	function serializeDecimal128(buffer$$1, key, value, index, isArray) {
	  buffer$$1[index++] = constants.BSON_DATA_DECIMAL128; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write the data from the value

	  value.bytes.copy(buffer$$1, index, 0, 16);
	  return index + 16;
	}

	function serializeLong(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = value._bsontype === 'Long' ? constants.BSON_DATA_LONG : constants.BSON_DATA_TIMESTAMP; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write the date

	  var lowBits = value.getLowBits();
	  var highBits = value.getHighBits(); // Encode low bits

	  buffer$$1[index++] = lowBits & 0xff;
	  buffer$$1[index++] = lowBits >> 8 & 0xff;
	  buffer$$1[index++] = lowBits >> 16 & 0xff;
	  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

	  buffer$$1[index++] = highBits & 0xff;
	  buffer$$1[index++] = highBits >> 8 & 0xff;
	  buffer$$1[index++] = highBits >> 16 & 0xff;
	  buffer$$1[index++] = highBits >> 24 & 0xff;
	  return index;
	}

	function serializeInt32(buffer$$1, key, value, index, isArray) {
	  // Set int type 32 bits or less
	  buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write the int value

	  buffer$$1[index++] = value & 0xff;
	  buffer$$1[index++] = value >> 8 & 0xff;
	  buffer$$1[index++] = value >> 16 & 0xff;
	  buffer$$1[index++] = value >> 24 & 0xff;
	  return index;
	}

	function serializeDouble(buffer$$1, key, value, index, isArray) {
	  // Encode as double
	  buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write float

	  writeIEEE754$1(buffer$$1, value.value, index, 'little', 52, 8); // Adjust index

	  index = index + 8;
	  return index;
	}

	function serializeFunction(buffer$$1, key, value, index, checkKeys, depth, isArray) {
	  buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Function string

	  var functionString = normalizedFunctionString$1(value); // Write the string

	  var size = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

	  buffer$$1[index] = size & 0xff;
	  buffer$$1[index + 1] = size >> 8 & 0xff;
	  buffer$$1[index + 2] = size >> 16 & 0xff;
	  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

	  index = index + 4 + size - 1; // Write zero

	  buffer$$1[index++] = 0;
	  return index;
	}

	function serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray) {
	  if (value.scope && _typeof$3(value.scope) === 'object') {
	    // Write the type
	    buffer$$1[index++] = constants.BSON_DATA_CODE_W_SCOPE; // Number of written bytes

	    var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	    index = index + numberOfWrittenBytes;
	    buffer$$1[index++] = 0; // Starting index

	    var startIndex = index; // Serialize the function
	    // Get the function string

	    var functionString = typeof value.code === 'string' ? value.code : value.code.toString(); // Index adjustment

	    index = index + 4; // Write string into buffer

	    var codeSize = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

	    buffer$$1[index] = codeSize & 0xff;
	    buffer$$1[index + 1] = codeSize >> 8 & 0xff;
	    buffer$$1[index + 2] = codeSize >> 16 & 0xff;
	    buffer$$1[index + 3] = codeSize >> 24 & 0xff; // Write end 0

	    buffer$$1[index + 4 + codeSize - 1] = 0; // Write the

	    index = index + codeSize + 4; //
	    // Serialize the scope value

	    var endIndex = serializeInto(buffer$$1, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
	    index = endIndex - 1; // Writ the total

	    var totalSize = endIndex - startIndex; // Write the total size of the object

	    buffer$$1[startIndex++] = totalSize & 0xff;
	    buffer$$1[startIndex++] = totalSize >> 8 & 0xff;
	    buffer$$1[startIndex++] = totalSize >> 16 & 0xff;
	    buffer$$1[startIndex++] = totalSize >> 24 & 0xff; // Write trailing zero

	    buffer$$1[index++] = 0;
	  } else {
	    buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

	    var _numberOfWrittenBytes4 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


	    index = index + _numberOfWrittenBytes4;
	    buffer$$1[index++] = 0; // Function string

	    var _functionString = value.code.toString(); // Write the string


	    var size = buffer$$1.write(_functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

	    buffer$$1[index] = size & 0xff;
	    buffer$$1[index + 1] = size >> 8 & 0xff;
	    buffer$$1[index + 2] = size >> 16 & 0xff;
	    buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

	    index = index + 4 + size - 1; // Write zero

	    buffer$$1[index++] = 0;
	  }

	  return index;
	}

	function serializeBinary(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Extract the buffer

	  var data = value.value(true); // Calculate size

	  var size = value.position; // Add the deprecated 02 type 4 bytes of size to total

	  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) size = size + 4; // Write the size of the string to buffer

	  buffer$$1[index++] = size & 0xff;
	  buffer$$1[index++] = size >> 8 & 0xff;
	  buffer$$1[index++] = size >> 16 & 0xff;
	  buffer$$1[index++] = size >> 24 & 0xff; // Write the subtype to the buffer

	  buffer$$1[index++] = value.sub_type; // If we have binary type 2 the 4 first bytes are the size

	  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
	    size = size - 4;
	    buffer$$1[index++] = size & 0xff;
	    buffer$$1[index++] = size >> 8 & 0xff;
	    buffer$$1[index++] = size >> 16 & 0xff;
	    buffer$$1[index++] = size >> 24 & 0xff;
	  } // Write the data to the object


	  data.copy(buffer$$1, index, 0, value.position); // Adjust the index

	  index = index + value.position;
	  return index;
	}

	function serializeSymbol(buffer$$1, key, value, index, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_SYMBOL; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0; // Write the string

	  var size = buffer$$1.write(value.value, index + 4, 'utf8') + 1; // Write the size of the string to buffer

	  buffer$$1[index] = size & 0xff;
	  buffer$$1[index + 1] = size >> 8 & 0xff;
	  buffer$$1[index + 2] = size >> 16 & 0xff;
	  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

	  index = index + 4 + size - 1; // Write zero

	  buffer$$1[index++] = 0x00;
	  return index;
	}

	function serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, isArray) {
	  // Write the type
	  buffer$$1[index++] = constants.BSON_DATA_OBJECT; // Number of written bytes

	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

	  index = index + numberOfWrittenBytes;
	  buffer$$1[index++] = 0;
	  var startIndex = index;
	  var endIndex;
	  var output = {
	    $ref: value.collection || value.namespace,
	    // "namespace" was what library 1.x called "collection"
	    $id: value.oid
	  };
	  if (value.db != null) output.$db = value.db;
	  output = Object.assign(output, value.fields);
	  endIndex = serializeInto(buffer$$1, output, false, index, depth + 1, serializeFunctions); // Calculate object size

	  var size = endIndex - startIndex; // Write the size

	  buffer$$1[startIndex++] = size & 0xff;
	  buffer$$1[startIndex++] = size >> 8 & 0xff;
	  buffer$$1[startIndex++] = size >> 16 & 0xff;
	  buffer$$1[startIndex++] = size >> 24 & 0xff; // Set index

	  return endIndex;
	}

	function serializeInto(buffer$$1, object, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
	  startingIndex = startingIndex || 0;
	  path = path || []; // Push the object to the path

	  path.push(object); // Start place to serialize into

	  var index = startingIndex + 4; // Special case isArray

	  if (Array.isArray(object)) {
	    // Get object keys
	    for (var i = 0; i < object.length; i++) {
	      var key = '' + i;
	      var value = object[i]; // Is there an override value

	      if (value && value.toBSON) {
	        if (typeof value.toBSON !== 'function') throw new TypeError('toBSON is not a function');
	        value = value.toBSON();
	      }

	      var type = _typeof$3(value);

	      if (type === 'string') {
	        index = serializeString(buffer$$1, key, value, index, true);
	      } else if (type === 'number') {
	        index = serializeNumber(buffer$$1, key, value, index, true);
	      } else if (type === 'boolean') {
	        index = serializeBoolean(buffer$$1, key, value, index, true);
	      } else if (value instanceof Date || isDate$1(value)) {
	        index = serializeDate(buffer$$1, key, value, index, true);
	      } else if (value === undefined) {
	        index = serializeNull(buffer$$1, key, value, index, true);
	      } else if (value === null) {
	        index = serializeNull(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
	        index = serializeObjectId(buffer$$1, key, value, index, true);
	      } else if (Buffer$5.isBuffer(value)) {
	        index = serializeBuffer(buffer$$1, key, value, index, true);
	      } else if (value instanceof RegExp || isRegExp$1(value)) {
	        index = serializeRegExp(buffer$$1, key, value, index, true);
	      } else if (type === 'object' && value['_bsontype'] == null) {
	        index = serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
	      } else if (type === 'object' && value['_bsontype'] === 'Decimal128') {
	        index = serializeDecimal128(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
	        index = serializeLong(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'Double') {
	        index = serializeDouble(buffer$$1, key, value, index, true);
	      } else if (typeof value === 'function' && serializeFunctions) {
	        index = serializeFunction(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, true);
	      } else if (value['_bsontype'] === 'Code') {
	        index = serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
	      } else if (value['_bsontype'] === 'Binary') {
	        index = serializeBinary(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'Symbol') {
	        index = serializeSymbol(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'DBRef') {
	        index = serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, true);
	      } else if (value['_bsontype'] === 'BSONRegExp') {
	        index = serializeBSONRegExp(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'Int32') {
	        index = serializeInt32(buffer$$1, key, value, index, true);
	      } else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
	        index = serializeMinMax(buffer$$1, key, value, index, true);
	      } else if (typeof value['_bsontype'] !== 'undefined') {
	        throw new TypeError('Unrecognized or invalid _bsontype: ' + value['_bsontype']);
	      }
	    }
	  } else if (object instanceof map) {
	    var iterator = object.entries();
	    var done = false;

	    while (!done) {
	      // Unpack the next entry
	      var entry = iterator.next();
	      done = entry.done; // Are we done, then skip and terminate

	      if (done) continue; // Get the entry values

	      var _key = entry.value[0];
	      var _value = entry.value[1]; // Check the type of the value

	      var _type = _typeof$3(_value); // Check the key and throw error if it's illegal


	      if (typeof _key === 'string' && !ignoreKeys.has(_key)) {
	        if (_key.match(regexp$1) != null) {
	          // The BSON spec doesn't allow keys with null bytes because keys are
	          // null-terminated.
	          throw Error('key ' + _key + ' must not contain null bytes');
	        }

	        if (checkKeys) {
	          if ('$' === _key[0]) {
	            throw Error('key ' + _key + " must not start with '$'");
	          } else if (~_key.indexOf('.')) {
	            throw Error('key ' + _key + " must not contain '.'");
	          }
	        }
	      }

	      if (_type === 'string') {
	        index = serializeString(buffer$$1, _key, _value, index);
	      } else if (_type === 'number') {
	        index = serializeNumber(buffer$$1, _key, _value, index);
	      } else if (_type === 'boolean') {
	        index = serializeBoolean(buffer$$1, _key, _value, index);
	      } else if (_value instanceof Date || isDate$1(_value)) {
	        index = serializeDate(buffer$$1, _key, _value, index);
	      } else if (_value === null || _value === undefined && ignoreUndefined === false) {
	        index = serializeNull(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'ObjectId' || _value['_bsontype'] === 'ObjectID') {
	        index = serializeObjectId(buffer$$1, _key, _value, index);
	      } else if (Buffer$5.isBuffer(_value)) {
	        index = serializeBuffer(buffer$$1, _key, _value, index);
	      } else if (_value instanceof RegExp || isRegExp$1(_value)) {
	        index = serializeRegExp(buffer$$1, _key, _value, index);
	      } else if (_type === 'object' && _value['_bsontype'] == null) {
	        index = serializeObject(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
	      } else if (_type === 'object' && _value['_bsontype'] === 'Decimal128') {
	        index = serializeDecimal128(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'Long' || _value['_bsontype'] === 'Timestamp') {
	        index = serializeLong(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'Double') {
	        index = serializeDouble(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'Code') {
	        index = serializeCode(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
	      } else if (typeof _value === 'function' && serializeFunctions) {
	        index = serializeFunction(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions);
	      } else if (_value['_bsontype'] === 'Binary') {
	        index = serializeBinary(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'Symbol') {
	        index = serializeSymbol(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'DBRef') {
	        index = serializeDBRef(buffer$$1, _key, _value, index, depth, serializeFunctions);
	      } else if (_value['_bsontype'] === 'BSONRegExp') {
	        index = serializeBSONRegExp(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'Int32') {
	        index = serializeInt32(buffer$$1, _key, _value, index);
	      } else if (_value['_bsontype'] === 'MinKey' || _value['_bsontype'] === 'MaxKey') {
	        index = serializeMinMax(buffer$$1, _key, _value, index);
	      } else if (typeof _value['_bsontype'] !== 'undefined') {
	        throw new TypeError('Unrecognized or invalid _bsontype: ' + _value['_bsontype']);
	      }
	    }
	  } else {
	    // Did we provide a custom serialization method
	    if (object.toBSON) {
	      if (typeof object.toBSON !== 'function') throw new TypeError('toBSON is not a function');
	      object = object.toBSON();
	      if (object != null && _typeof$3(object) !== 'object') throw new TypeError('toBSON function did not return an object');
	    } // Iterate over all the keys


	    for (var _key2 in object) {
	      var _value2 = object[_key2]; // Is there an override value

	      if (_value2 && _value2.toBSON) {
	        if (typeof _value2.toBSON !== 'function') throw new TypeError('toBSON is not a function');
	        _value2 = _value2.toBSON();
	      } // Check the type of the value


	      var _type2 = _typeof$3(_value2); // Check the key and throw error if it's illegal


	      if (typeof _key2 === 'string' && !ignoreKeys.has(_key2)) {
	        if (_key2.match(regexp$1) != null) {
	          // The BSON spec doesn't allow keys with null bytes because keys are
	          // null-terminated.
	          throw Error('key ' + _key2 + ' must not contain null bytes');
	        }

	        if (checkKeys) {
	          if ('$' === _key2[0]) {
	            throw Error('key ' + _key2 + " must not start with '$'");
	          } else if (~_key2.indexOf('.')) {
	            throw Error('key ' + _key2 + " must not contain '.'");
	          }
	        }
	      }

	      if (_type2 === 'string') {
	        index = serializeString(buffer$$1, _key2, _value2, index);
	      } else if (_type2 === 'number') {
	        index = serializeNumber(buffer$$1, _key2, _value2, index);
	      } else if (_type2 === 'boolean') {
	        index = serializeBoolean(buffer$$1, _key2, _value2, index);
	      } else if (_value2 instanceof Date || isDate$1(_value2)) {
	        index = serializeDate(buffer$$1, _key2, _value2, index);
	      } else if (_value2 === undefined) {
	        if (ignoreUndefined === false) index = serializeNull(buffer$$1, _key2, _value2, index);
	      } else if (_value2 === null) {
	        index = serializeNull(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'ObjectId' || _value2['_bsontype'] === 'ObjectID') {
	        index = serializeObjectId(buffer$$1, _key2, _value2, index);
	      } else if (Buffer$5.isBuffer(_value2)) {
	        index = serializeBuffer(buffer$$1, _key2, _value2, index);
	      } else if (_value2 instanceof RegExp || isRegExp$1(_value2)) {
	        index = serializeRegExp(buffer$$1, _key2, _value2, index);
	      } else if (_type2 === 'object' && _value2['_bsontype'] == null) {
	        index = serializeObject(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
	      } else if (_type2 === 'object' && _value2['_bsontype'] === 'Decimal128') {
	        index = serializeDecimal128(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'Long' || _value2['_bsontype'] === 'Timestamp') {
	        index = serializeLong(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'Double') {
	        index = serializeDouble(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'Code') {
	        index = serializeCode(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
	      } else if (typeof _value2 === 'function' && serializeFunctions) {
	        index = serializeFunction(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions);
	      } else if (_value2['_bsontype'] === 'Binary') {
	        index = serializeBinary(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'Symbol') {
	        index = serializeSymbol(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'DBRef') {
	        index = serializeDBRef(buffer$$1, _key2, _value2, index, depth, serializeFunctions);
	      } else if (_value2['_bsontype'] === 'BSONRegExp') {
	        index = serializeBSONRegExp(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'Int32') {
	        index = serializeInt32(buffer$$1, _key2, _value2, index);
	      } else if (_value2['_bsontype'] === 'MinKey' || _value2['_bsontype'] === 'MaxKey') {
	        index = serializeMinMax(buffer$$1, _key2, _value2, index);
	      } else if (typeof _value2['_bsontype'] !== 'undefined') {
	        throw new TypeError('Unrecognized or invalid _bsontype: ' + _value2['_bsontype']);
	      }
	    }
	  } // Remove the path


	  path.pop(); // Final padding byte for object

	  buffer$$1[index++] = 0x00; // Final size

	  var size = index - startingIndex; // Write the size of the object

	  buffer$$1[startingIndex++] = size & 0xff;
	  buffer$$1[startingIndex++] = size >> 8 & 0xff;
	  buffer$$1[startingIndex++] = size >> 16 & 0xff;
	  buffer$$1[startingIndex++] = size >> 24 & 0xff;
	  return index;
	}

	var serializer = serializeInto;

	function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

	var Buffer$6 = buffer.Buffer;
	var normalizedFunctionString$2 = utils.normalizedFunctionString; // To ensure that 0.4 of node works correctly

	function isDate$2(d) {
	  return _typeof$4(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
	}

	function calculateObjectSize(object, serializeFunctions, ignoreUndefined) {
	  var totalLength = 4 + 1;

	  if (Array.isArray(object)) {
	    for (var i = 0; i < object.length; i++) {
	      totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
	    }
	  } else {
	    // If we have toBSON defined, override the current object
	    if (object.toBSON) {
	      object = object.toBSON();
	    } // Calculate size


	    for (var key in object) {
	      totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
	    }
	  }

	  return totalLength;
	}
	/**
	 * @ignore
	 * @api private
	 */


	function calculateElement(name, value, serializeFunctions, isArray, ignoreUndefined) {
	  // If we have toBSON defined, override the current object
	  if (value && value.toBSON) {
	    value = value.toBSON();
	  }

	  switch (_typeof$4(value)) {
	    case 'string':
	      return 1 + Buffer$6.byteLength(name, 'utf8') + 1 + 4 + Buffer$6.byteLength(value, 'utf8') + 1;

	    case 'number':
	      if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
	        if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
	          // 32 bit
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (4 + 1);
	        } else {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
	        }
	      } else {
	        // 64 bit
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
	      }

	    case 'undefined':
	      if (isArray || !ignoreUndefined) return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1;
	      return 0;

	    case 'boolean':
	      return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (1 + 1);

	    case 'object':
	      if (value == null || value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1;
	      } else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (12 + 1);
	      } else if (value instanceof Date || isDate$2(value)) {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
	      } else if (typeof Buffer$6 !== 'undefined' && Buffer$6.isBuffer(value)) {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (1 + 4 + 1) + value.length;
	      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Double' || value['_bsontype'] === 'Timestamp') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
	      } else if (value['_bsontype'] === 'Decimal128') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (16 + 1);
	      } else if (value['_bsontype'] === 'Code') {
	        // Calculate size depending on the availability of a scope
	        if (value.scope != null && Object.keys(value.scope).length > 0) {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(value.code.toString(), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
	        } else {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$6.byteLength(value.code.toString(), 'utf8') + 1;
	        }
	      } else if (value['_bsontype'] === 'Binary') {
	        // Check what kind of subtype we have
	        if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1 + 4);
	        } else {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1);
	        }
	      } else if (value['_bsontype'] === 'Symbol') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + Buffer$6.byteLength(value.value, 'utf8') + 4 + 1 + 1;
	      } else if (value['_bsontype'] === 'DBRef') {
	        // Set up correct object for serialization
	        var ordered_values = Object.assign({
	          $ref: value.collection,
	          $id: value.oid
	        }, value.fields); // Add db reference if it exists

	        if (value.db != null) {
	          ordered_values['$db'] = value.db;
	        }

	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + calculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined);
	      } else if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
	      } else if (value['_bsontype'] === 'BSONRegExp') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.pattern, 'utf8') + 1 + Buffer$6.byteLength(value.options, 'utf8') + 1;
	      } else {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + calculateObjectSize(value, serializeFunctions, ignoreUndefined) + 1;
	      }

	    case 'function':
	      // WTF for 0.4.X where typeof /someregexp/ === 'function'
	      if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]' || String.call(value) === '[object RegExp]') {
	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
	      } else {
	        if (serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
	        } else if (serializeFunctions) {
	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value), 'utf8') + 1;
	        }
	      }

	  }

	  return 0;
	}

	var calculate_size = calculateObjectSize;

	var Buffer$7 = buffer.Buffer;
	/**
	 * Makes sure that, if a Uint8Array is passed in, it is wrapped in a Buffer.
	 *
	 * @param {Buffer|Uint8Array} potentialBuffer The potential buffer
	 * @returns {Buffer} the input if potentialBuffer is a buffer, or a buffer that
	 * wraps a passed in Uint8Array
	 * @throws {TypeError} If anything other than a Buffer or Uint8Array is passed in
	 */

	var ensure_buffer = function ensureBuffer(potentialBuffer) {
	  if (potentialBuffer instanceof Buffer$7) {
	    return potentialBuffer;
	  }

	  if (potentialBuffer instanceof Uint8Array) {
	    return Buffer$7.from(potentialBuffer.buffer);
	  }

	  throw new TypeError('Must use either Buffer or Uint8Array');
	};

	var Buffer$8 = buffer.Buffer; // Parts of the parser

	/**
	 * @ignore
	 */
	// Default Max Size

	var MAXSIZE = 1024 * 1024 * 17; // Current Internal Temporary Serialization Buffer

	var buffer$1 = Buffer$8.alloc(MAXSIZE);
	/**
	 * Sets the size of the internal serialization buffer.
	 *
	 * @method
	 * @param {number} size The desired size for the internal serialization buffer
	 */

	function setInternalBufferSize(size) {
	  // Resize the internal serialization buffer if needed
	  if (buffer$1.length < size) {
	    buffer$1 = Buffer$8.alloc(size);
	  }
	}
	/**
	 * Serialize a Javascript object.
	 *
	 * @param {Object} object the Javascript object to serialize.
	 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
	 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
	 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
	 * @return {Buffer} returns the Buffer object containing the serialized object.
	 */


	function serialize$1(object, options) {
	  options = options || {}; // Unpack the options

	  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
	  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
	  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
	  var minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE; // Resize the internal serialization buffer if needed

	  if (buffer$1.length < minInternalBufferSize) {
	    buffer$1 = Buffer$8.alloc(minInternalBufferSize);
	  } // Attempt to serialize


	  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []); // Create the final buffer

	  var finishedBuffer = Buffer$8.alloc(serializationIndex); // Copy into the finished buffer

	  buffer$1.copy(finishedBuffer, 0, 0, finishedBuffer.length); // Return the buffer

	  return finishedBuffer;
	}
	/**
	 * Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.
	 *
	 * @param {Object} object the Javascript object to serialize.
	 * @param {Buffer} buffer the Buffer you pre-allocated to store the serialized BSON object.
	 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
	 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
	 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
	 * @param {Number} [options.index] the index in the buffer where we wish to start serializing into.
	 * @return {Number} returns the index pointing to the last written byte in the buffer.
	 */


	function serializeWithBufferAndIndex(object, finalBuffer, options) {
	  options = options || {}; // Unpack the options

	  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
	  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
	  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
	  var startIndex = typeof options.index === 'number' ? options.index : 0; // Attempt to serialize

	  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
	  buffer$1.copy(finalBuffer, startIndex, 0, serializationIndex); // Return the index

	  return startIndex + serializationIndex - 1;
	}
	/**
	 * Deserialize data as BSON.
	 *
	 * @param {Buffer} buffer the buffer containing the serialized set of BSON documents.
	 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
	 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
	 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
	 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
	 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
	 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
	 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
	 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
	 * @param {boolean} [options.allowObjectSmallerThanBufferSize=false] allows the buffer to be larger than the parsed BSON object
	 * @return {Object} returns the deserialized Javascript Object.
	 */


	function deserialize$2(buffer$$1, options) {
	  buffer$$1 = ensure_buffer(buffer$$1);
	  return deserializer(buffer$$1, options);
	}
	/**
	 * Calculate the bson size for a passed in Javascript object.
	 *
	 * @param {Object} object the Javascript object to calculate the BSON byte size for.
	 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
	 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
	 * @return {Number} returns the number of bytes the BSON object will take up.
	 */


	function calculateObjectSize$1(object, options) {
	  options = options || {};
	  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
	  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
	  return calculate_size(object, serializeFunctions, ignoreUndefined);
	}
	/**
	 * Deserialize stream data as BSON documents.
	 *
	 * @param {Buffer} data the buffer containing the serialized set of BSON documents.
	 * @param {Number} startIndex the start index in the data Buffer where the deserialization is to start.
	 * @param {Number} numberOfDocuments number of documents to deserialize.
	 * @param {Array} documents an array where to store the deserialized documents.
	 * @param {Number} docStartIndex the index in the documents array from where to start inserting documents.
	 * @param {Object} [options] additional options used for the deserialization.
	 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
	 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
	 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
	 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
	 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
	 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
	 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
	 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
	 * @return {Number} returns the next index in the buffer after deserialization **x** numbers of documents.
	 */


	function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
	  options = Object.assign({
	    allowObjectSmallerThanBufferSize: true
	  }, options);
	  data = ensure_buffer(data);
	  var index = startIndex; // Loop over all documents

	  for (var i = 0; i < numberOfDocuments; i++) {
	    // Find size of the document
	    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24; // Update options with index

	    options.index = index; // Parse the document at this point

	    documents[docStartIndex + i] = deserializer(data, options); // Adjust index by the document size

	    index = index + size;
	  } // Return object containing end index of parsing and list of documents


	  return index;
	}

	var bson = {
	  // constants
	  // NOTE: this is done this way because rollup can't resolve an `Object.assign`ed export
	  BSON_INT32_MAX: constants.BSON_INT32_MAX,
	  BSON_INT32_MIN: constants.BSON_INT32_MIN,
	  BSON_INT64_MAX: constants.BSON_INT64_MAX,
	  BSON_INT64_MIN: constants.BSON_INT64_MIN,
	  JS_INT_MAX: constants.JS_INT_MAX,
	  JS_INT_MIN: constants.JS_INT_MIN,
	  BSON_DATA_NUMBER: constants.BSON_DATA_NUMBER,
	  BSON_DATA_STRING: constants.BSON_DATA_STRING,
	  BSON_DATA_OBJECT: constants.BSON_DATA_OBJECT,
	  BSON_DATA_ARRAY: constants.BSON_DATA_ARRAY,
	  BSON_DATA_BINARY: constants.BSON_DATA_BINARY,
	  BSON_DATA_UNDEFINED: constants.BSON_DATA_UNDEFINED,
	  BSON_DATA_OID: constants.BSON_DATA_OID,
	  BSON_DATA_BOOLEAN: constants.BSON_DATA_BOOLEAN,
	  BSON_DATA_DATE: constants.BSON_DATA_DATE,
	  BSON_DATA_NULL: constants.BSON_DATA_NULL,
	  BSON_DATA_REGEXP: constants.BSON_DATA_REGEXP,
	  BSON_DATA_DBPOINTER: constants.BSON_DATA_DBPOINTER,
	  BSON_DATA_CODE: constants.BSON_DATA_CODE,
	  BSON_DATA_SYMBOL: constants.BSON_DATA_SYMBOL,
	  BSON_DATA_CODE_W_SCOPE: constants.BSON_DATA_CODE_W_SCOPE,
	  BSON_DATA_INT: constants.BSON_DATA_INT,
	  BSON_DATA_TIMESTAMP: constants.BSON_DATA_TIMESTAMP,
	  BSON_DATA_LONG: constants.BSON_DATA_LONG,
	  BSON_DATA_DECIMAL128: constants.BSON_DATA_DECIMAL128,
	  BSON_DATA_MIN_KEY: constants.BSON_DATA_MIN_KEY,
	  BSON_DATA_MAX_KEY: constants.BSON_DATA_MAX_KEY,
	  BSON_BINARY_SUBTYPE_DEFAULT: constants.BSON_BINARY_SUBTYPE_DEFAULT,
	  BSON_BINARY_SUBTYPE_FUNCTION: constants.BSON_BINARY_SUBTYPE_FUNCTION,
	  BSON_BINARY_SUBTYPE_BYTE_ARRAY: constants.BSON_BINARY_SUBTYPE_BYTE_ARRAY,
	  BSON_BINARY_SUBTYPE_UUID: constants.BSON_BINARY_SUBTYPE_UUID,
	  BSON_BINARY_SUBTYPE_MD5: constants.BSON_BINARY_SUBTYPE_MD5,
	  BSON_BINARY_SUBTYPE_USER_DEFINED: constants.BSON_BINARY_SUBTYPE_USER_DEFINED,
	  // wrapped types
	  Code: code,
	  Map: map,
	  BSONSymbol: symbol,
	  DBRef: db_ref,
	  Binary: binary,
	  ObjectId: objectid,
	  Long: long_1,
	  Timestamp: timestamp,
	  Double: double_1,
	  Int32: int_32,
	  MinKey: min_key,
	  MaxKey: max_key,
	  BSONRegExp: regexp,
	  Decimal128: decimal128,
	  // methods
	  serialize: serialize$1,
	  serializeWithBufferAndIndex: serializeWithBufferAndIndex,
	  deserialize: deserialize$2,
	  calculateObjectSize: calculateObjectSize$1,
	  deserializeStream: deserializeStream,
	  setInternalBufferSize: setInternalBufferSize,
	  // legacy support
	  ObjectID: objectid,
	  // Extended JSON
	  EJSON: extended_json
	};
	var bson_1 = bson.BSON_INT32_MAX;
	var bson_2 = bson.BSON_INT32_MIN;
	var bson_3 = bson.BSON_INT64_MAX;
	var bson_4 = bson.BSON_INT64_MIN;
	var bson_5 = bson.JS_INT_MAX;
	var bson_6 = bson.JS_INT_MIN;
	var bson_7 = bson.BSON_DATA_NUMBER;
	var bson_8 = bson.BSON_DATA_STRING;
	var bson_9 = bson.BSON_DATA_OBJECT;
	var bson_10 = bson.BSON_DATA_ARRAY;
	var bson_11 = bson.BSON_DATA_BINARY;
	var bson_12 = bson.BSON_DATA_UNDEFINED;
	var bson_13 = bson.BSON_DATA_OID;
	var bson_14 = bson.BSON_DATA_BOOLEAN;
	var bson_15 = bson.BSON_DATA_DATE;
	var bson_16 = bson.BSON_DATA_NULL;
	var bson_17 = bson.BSON_DATA_REGEXP;
	var bson_18 = bson.BSON_DATA_DBPOINTER;
	var bson_19 = bson.BSON_DATA_CODE;
	var bson_20 = bson.BSON_DATA_SYMBOL;
	var bson_21 = bson.BSON_DATA_CODE_W_SCOPE;
	var bson_22 = bson.BSON_DATA_INT;
	var bson_23 = bson.BSON_DATA_TIMESTAMP;
	var bson_24 = bson.BSON_DATA_LONG;
	var bson_25 = bson.BSON_DATA_DECIMAL128;
	var bson_26 = bson.BSON_DATA_MIN_KEY;
	var bson_27 = bson.BSON_DATA_MAX_KEY;
	var bson_28 = bson.BSON_BINARY_SUBTYPE_DEFAULT;
	var bson_29 = bson.BSON_BINARY_SUBTYPE_FUNCTION;
	var bson_30 = bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
	var bson_31 = bson.BSON_BINARY_SUBTYPE_UUID;
	var bson_32 = bson.BSON_BINARY_SUBTYPE_MD5;
	var bson_33 = bson.BSON_BINARY_SUBTYPE_USER_DEFINED;
	var bson_34 = bson.Code;
	var bson_35 = bson.BSONSymbol;
	var bson_36 = bson.DBRef;
	var bson_37 = bson.Binary;
	var bson_38 = bson.ObjectId;
	var bson_39 = bson.Long;
	var bson_40 = bson.Timestamp;
	var bson_41 = bson.Double;
	var bson_42 = bson.Int32;
	var bson_43 = bson.MinKey;
	var bson_44 = bson.MaxKey;
	var bson_45 = bson.BSONRegExp;
	var bson_46 = bson.Decimal128;
	var bson_47 = bson.serialize;
	var bson_48 = bson.serializeWithBufferAndIndex;
	var bson_49 = bson.deserialize;
	var bson_50 = bson.calculateObjectSize;
	var bson_51 = bson.deserializeStream;
	var bson_52 = bson.setInternalBufferSize;
	var bson_53 = bson.ObjectID;
	var bson_54 = bson.EJSON;

	exports.default = bson;
	exports.BSON_INT32_MAX = bson_1;
	exports.BSON_INT32_MIN = bson_2;
	exports.BSON_INT64_MAX = bson_3;
	exports.BSON_INT64_MIN = bson_4;
	exports.JS_INT_MAX = bson_5;
	exports.JS_INT_MIN = bson_6;
	exports.BSON_DATA_NUMBER = bson_7;
	exports.BSON_DATA_STRING = bson_8;
	exports.BSON_DATA_OBJECT = bson_9;
	exports.BSON_DATA_ARRAY = bson_10;
	exports.BSON_DATA_BINARY = bson_11;
	exports.BSON_DATA_UNDEFINED = bson_12;
	exports.BSON_DATA_OID = bson_13;
	exports.BSON_DATA_BOOLEAN = bson_14;
	exports.BSON_DATA_DATE = bson_15;
	exports.BSON_DATA_NULL = bson_16;
	exports.BSON_DATA_REGEXP = bson_17;
	exports.BSON_DATA_DBPOINTER = bson_18;
	exports.BSON_DATA_CODE = bson_19;
	exports.BSON_DATA_SYMBOL = bson_20;
	exports.BSON_DATA_CODE_W_SCOPE = bson_21;
	exports.BSON_DATA_INT = bson_22;
	exports.BSON_DATA_TIMESTAMP = bson_23;
	exports.BSON_DATA_LONG = bson_24;
	exports.BSON_DATA_DECIMAL128 = bson_25;
	exports.BSON_DATA_MIN_KEY = bson_26;
	exports.BSON_DATA_MAX_KEY = bson_27;
	exports.BSON_BINARY_SUBTYPE_DEFAULT = bson_28;
	exports.BSON_BINARY_SUBTYPE_FUNCTION = bson_29;
	exports.BSON_BINARY_SUBTYPE_BYTE_ARRAY = bson_30;
	exports.BSON_BINARY_SUBTYPE_UUID = bson_31;
	exports.BSON_BINARY_SUBTYPE_MD5 = bson_32;
	exports.BSON_BINARY_SUBTYPE_USER_DEFINED = bson_33;
	exports.Code = bson_34;
	exports.BSONSymbol = bson_35;
	exports.DBRef = bson_36;
	exports.Binary = bson_37;
	exports.ObjectId = bson_38;
	exports.Long = bson_39;
	exports.Timestamp = bson_40;
	exports.Double = bson_41;
	exports.Int32 = bson_42;
	exports.MinKey = bson_43;
	exports.MaxKey = bson_44;
	exports.BSONRegExp = bson_45;
	exports.Decimal128 = bson_46;
	exports.serialize = bson_47;
	exports.serializeWithBufferAndIndex = bson_48;
	exports.deserialize = bson_49;
	exports.calculateObjectSize = bson_50;
	exports.deserializeStream = bson_51;
	exports.setInternalBufferSize = bson_52;
	exports.ObjectID = bson_53;
	exports.EJSON = bson_54;

	Object.defineProperty(exports, '__esModule', { value: true });

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1).Buffer))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ })
/******/ ]);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 37 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = Long;

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;

try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
  ])), {}).exports;
} catch (e) {
  // no wasm support :(
}

/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {

    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;

    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;

    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}

// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.

/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;

Object.defineProperty(Long.prototype, "__isLong__", { value: true });

/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}

/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
Long.isLong = isLong;

/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};

/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}

/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromInt = fromInt;

/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    } else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return fromNumber(-value, unsigned).neg();
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}

/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromNumber = fromNumber;

/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}

/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
Long.fromBits = fromBits;

/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
        unsigned = false;
    } else {
        unsigned = !! unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');

    var p;
    if ((p = str.indexOf('-')) > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
    }

    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));

    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
            value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
        } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}

/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
Long.fromString = fromString;

/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}

/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
Long.fromValue = fromValue;

// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);

/**
 * Signed zero.
 * @type {!Long}
 */
Long.ZERO = ZERO;

/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);

/**
 * Unsigned zero.
 * @type {!Long}
 */
Long.UZERO = UZERO;

/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);

/**
 * Signed one.
 * @type {!Long}
 */
Long.ONE = ONE;

/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);

/**
 * Unsigned one.
 * @type {!Long}
 */
Long.UONE = UONE;

/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);

/**
 * Signed negative one.
 * @type {!Long}
 */
Long.NEG_ONE = NEG_ONE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

/**
 * Maximum signed value.
 * @type {!Long}
 */
Long.MAX_VALUE = MAX_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

/**
 * Maximum unsigned value.
 * @type {!Long}
 */
Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000|0, false);

/**
 * Minimum signed value.
 * @type {!Long}
 */
Long.MIN_VALUE = MIN_VALUE;

/**
 * @alias Long.prototype
 * @inner
 */
var LongPrototype = Long.prototype;

/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @returns {number}
 */
LongPrototype.toInt = function toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
};

/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @returns {number}
 */
LongPrototype.toNumber = function toNumber() {
    if (this.unsigned)
        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
};

/**
 * Converts the Long to a string written in the specified radix.
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
LongPrototype.toString = function toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (this.isZero())
        return '0';
    if (this.isNegative()) { // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix),
                div = this.div(radixLong),
                rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
        } else
            return '-' + this.neg().toString(radix);
    }

    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
    var result = '';
    while (true) {
        var remDiv = rem.div(radixToPower),
            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
            digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero())
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
};

/**
 * Gets the high 32 bits as a signed integer.
 * @returns {number} Signed high bits
 */
LongPrototype.getHighBits = function getHighBits() {
    return this.high;
};

/**
 * Gets the high 32 bits as an unsigned integer.
 * @returns {number} Unsigned high bits
 */
LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
    return this.high >>> 0;
};

/**
 * Gets the low 32 bits as a signed integer.
 * @returns {number} Signed low bits
 */
LongPrototype.getLowBits = function getLowBits() {
    return this.low;
};

/**
 * Gets the low 32 bits as an unsigned integer.
 * @returns {number} Unsigned low bits
 */
LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
    return this.low >>> 0;
};

/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @returns {number}
 */
LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
    if (this.isNegative()) // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    var val = this.high != 0 ? this.high : this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return this.high != 0 ? bit + 33 : bit + 1;
};

/**
 * Tests if this Long's value equals zero.
 * @returns {boolean}
 */
LongPrototype.isZero = function isZero() {
    return this.high === 0 && this.low === 0;
};

/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
LongPrototype.eqz = LongPrototype.isZero;

/**
 * Tests if this Long's value is negative.
 * @returns {boolean}
 */
LongPrototype.isNegative = function isNegative() {
    return !this.unsigned && this.high < 0;
};

/**
 * Tests if this Long's value is positive.
 * @returns {boolean}
 */
LongPrototype.isPositive = function isPositive() {
    return this.unsigned || this.high >= 0;
};

/**
 * Tests if this Long's value is odd.
 * @returns {boolean}
 */
LongPrototype.isOdd = function isOdd() {
    return (this.low & 1) === 1;
};

/**
 * Tests if this Long's value is even.
 * @returns {boolean}
 */
LongPrototype.isEven = function isEven() {
    return (this.low & 1) === 0;
};

/**
 * Tests if this Long's value equals the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.equals = function equals(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return this.high === other.high && this.low === other.low;
};

/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.eq = LongPrototype.equals;

/**
 * Tests if this Long's value differs from the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.notEquals = function notEquals(other) {
    return !this.eq(/* validates */ other);
};

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.neq = LongPrototype.notEquals;

/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ne = LongPrototype.notEquals;

/**
 * Tests if this Long's value is less than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThan = function lessThan(other) {
    return this.comp(/* validates */ other) < 0;
};

/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lt = LongPrototype.lessThan;

/**
 * Tests if this Long's value is less than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
    return this.comp(/* validates */ other) <= 0;
};

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.lte = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.le = LongPrototype.lessThanOrEqual;

/**
 * Tests if this Long's value is greater than the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThan = function greaterThan(other) {
    return this.comp(/* validates */ other) > 0;
};

/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gt = LongPrototype.greaterThan;

/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
    return this.comp(/* validates */ other) >= 0;
};

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.gte = LongPrototype.greaterThanOrEqual;

/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
LongPrototype.ge = LongPrototype.greaterThanOrEqual;

/**
 * Compares this Long's value with the specified's.
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.compare = function compare(other) {
    if (!isLong(other))
        other = fromValue(other);
    if (this.eq(other))
        return 0;
    var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!this.unsigned)
        return this.sub(other).isNegative() ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
};

/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
LongPrototype.comp = LongPrototype.compare;

/**
 * Negates this Long's value.
 * @returns {!Long} Negated Long
 */
LongPrototype.negate = function negate() {
    if (!this.unsigned && this.eq(MIN_VALUE))
        return MIN_VALUE;
    return this.not().add(ONE);
};

/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
LongPrototype.neg = LongPrototype.negate;

/**
 * Returns the sum of this and the specified Long.
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
LongPrototype.add = function add(addend) {
    if (!isLong(addend))
        addend = fromValue(addend);

    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the difference of this and the specified Long.
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.subtract = function subtract(subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return this.add(subtrahend.neg());
};

/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
LongPrototype.sub = LongPrototype.subtract;

/**
 * Returns the product of this and the specified Long.
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.multiply = function multiply(multiplier) {
    if (this.isZero())
        return ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);

    // use wasm support if present
    if (wasm) {
        var low = wasm.mul(this.low,
                           this.high,
                           multiplier.low,
                           multiplier.high);
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (multiplier.isZero())
        return ZERO;
    if (this.eq(MIN_VALUE))
        return multiplier.isOdd() ? MIN_VALUE : ZERO;
    if (multiplier.eq(MIN_VALUE))
        return this.isOdd() ? MIN_VALUE : ZERO;

    if (this.isNegative()) {
        if (multiplier.isNegative())
            return this.neg().mul(multiplier.neg());
        else
            return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

    // If both longs are small, use float multiplication
    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.

    var a48 = this.high >>> 16;
    var a32 = this.high & 0xFFFF;
    var a16 = this.low >>> 16;
    var a00 = this.low & 0xFFFF;

    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;

    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
};

/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
LongPrototype.mul = LongPrototype.multiply;

/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.divide = function divide(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (divisor.isZero())
        throw Error('division by zero');

    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!this.unsigned &&
            this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return this;
        }
        var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    if (this.isZero())
        return this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
            else if (divisor.eq(MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = this.shr(1);
                approx = halfThis.div(divisor).shl(1);
                if (approx.eq(ZERO)) {
                    return divisor.isNegative() ? ONE : NEG_ONE;
                } else {
                    rem = this.sub(divisor.mul(approx));
                    res = approx.add(rem.div(divisor));
                    return res;
                }
            }
        } else if (divisor.eq(MIN_VALUE))
            return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
            if (divisor.isNegative())
                return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
        } else if (divisor.isNegative())
            return this.div(divisor.neg()).neg();
        res = ZERO;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = divisor.toUnsigned();
        if (divisor.gt(this))
            return UZERO;
        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }

    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = this;
    while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx),
            approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero())
            approxRes = ONE;

        res = res.add(approxRes);
        rem = rem.sub(approxRem);
    }
    return res;
};

/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
LongPrototype.div = LongPrototype.divide;

/**
 * Returns this Long modulo the specified.
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.modulo = function modulo(divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);

    // use wasm support if present
    if (wasm) {
        var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
            this.low,
            this.high,
            divisor.low,
            divisor.high
        );
        return fromBits(low, wasm.get_high(), this.unsigned);
    }

    return this.sub(this.div(divisor).mul(divisor));
};

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.mod = LongPrototype.modulo;

/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
LongPrototype.rem = LongPrototype.modulo;

/**
 * Returns the bitwise NOT of this Long.
 * @returns {!Long}
 */
LongPrototype.not = function not() {
    return fromBits(~this.low, ~this.high, this.unsigned);
};

/**
 * Returns the bitwise AND of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.and = function and(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
};

/**
 * Returns the bitwise OR of this Long and the specified.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.or = function or(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
};

/**
 * Returns the bitwise XOR of this Long and the given one.
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
LongPrototype.xor = function xor(other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftLeft = function shiftLeft(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
    else
        return fromBits(0, this.low << (numBits - 32), this.unsigned);
};

/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shl = LongPrototype.shiftLeft;

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRight = function shiftRight(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    else if (numBits < 32)
        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
    else
        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
};

/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr = LongPrototype.shiftRight;

/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
    if (isLong(numBits))
        numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
        return this;
    else {
        var high = this.high;
        if (numBits < 32) {
            var low = this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
        } else if (numBits === 32)
            return fromBits(high, 0, this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, this.unsigned);
    }
};

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shru = LongPrototype.shiftRightUnsigned;

/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

/**
 * Converts this Long to signed.
 * @returns {!Long} Signed long
 */
LongPrototype.toSigned = function toSigned() {
    if (!this.unsigned)
        return this;
    return fromBits(this.low, this.high, false);
};

/**
 * Converts this Long to unsigned.
 * @returns {!Long} Unsigned long
 */
LongPrototype.toUnsigned = function toUnsigned() {
    if (this.unsigned)
        return this;
    return fromBits(this.low, this.high, true);
};

/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {!Array.<number>} Byte representation
 */
LongPrototype.toBytes = function toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
};

/**
 * Converts this Long to its little endian byte representation.
 * @returns {!Array.<number>} Little endian byte representation
 */
LongPrototype.toBytesLE = function toBytesLE() {
    var hi = this.high,
        lo = this.low;
    return [
        lo        & 0xff,
        lo >>>  8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24       ,
        hi        & 0xff,
        hi >>>  8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
};

/**
 * Converts this Long to its big endian byte representation.
 * @returns {!Array.<number>} Big endian byte representation
 */
LongPrototype.toBytesBE = function toBytesBE() {
    var hi = this.high,
        lo = this.low;
    return [
        hi >>> 24       ,
        hi >>> 16 & 0xff,
        hi >>>  8 & 0xff,
        hi        & 0xff,
        lo >>> 24       ,
        lo >>> 16 & 0xff,
        lo >>>  8 & 0xff,
        lo        & 0xff
    ];
};

/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
Long.fromBytes = function fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
};

/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
    return new Long(
        bytes[0]       |
        bytes[1] <<  8 |
        bytes[2] << 16 |
        bytes[3] << 24,
        bytes[4]       |
        bytes[5] <<  8 |
        bytes[6] << 16 |
        bytes[7] << 24,
        unsigned
    );
};

/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
    return new Long(
        bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] <<  8 |
        bytes[7],
        bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] <<  8 |
        bytes[3],
        unsigned
    );
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function') {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifecycleManager; });
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



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlFrameTags; });
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



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommand; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcRequest_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__structs_Image_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__structs_MenuParams_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_FunctionID_js__ = __webpack_require__(3);
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






class AddCommand extends __WEBPACK_IMPORTED_MODULE_0__RpcRequest_js__["a" /* RpcRequest */] {

    /**
    * @constructor
    */
    constructor(store) {
        super(store);
        this.setFunctionName(__WEBPACK_IMPORTED_MODULE_3__enums_FunctionID_js__["a" /* FunctionID */].ADD_COMMAND);
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
        this.validateType(__WEBPACK_IMPORTED_MODULE_2__structs_MenuParams_js__["a" /* MenuParams */], menuParams);

        this.setParameter(AddCommand.KEY_MENU_PARAMS, menuParams);
        return this;
    }

    /**
    * @return {Number}
    */
    getMenuParams() {
        return this.getObject(__WEBPACK_IMPORTED_MODULE_2__structs_MenuParams_js__["a" /* MenuParams */], AddCommand.KEY_MENU_PARAMS);
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
        this.validateType(__WEBPACK_IMPORTED_MODULE_1__structs_Image_js__["a" /* Image */], icon);

        this.setParameter(AddCommand.KEY_CMD_ICON, icon);
        return this;
    }

    /**
    * @return {Image}
    */
    getCmdIcon() {
        return this.getObject(__WEBPACK_IMPORTED_MODULE_1__structs_Image_js__["a" /* Image */], AddCommand.KEY_CMD_ICON);
    }

}

AddCommand.KEY_CMD_ICON = 'cmdIcon';
AddCommand.KEY_MENU_PARAMS = 'menuParams';
AddCommand.KEY_CMD_ID = 'cmdID';
AddCommand.KEY_VR_COMMANDS = 'vrCommands';




/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommandResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcResponse_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_FunctionID_js__ = __webpack_require__(3);
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




class AddCommandResponse extends __WEBPACK_IMPORTED_MODULE_0__RpcResponse_js__["a" /* RpcResponse */] {

	/**
    * @constructor
    */
    constructor(store) {
        super(store);
        this.setFunctionName(__WEBPACK_IMPORTED_MODULE_1__enums_FunctionID_js__["a" /* FunctionID */].ADD_COMMAND);
    }

}




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnLanguageChange; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RpcNotification_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_Language_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__enums_FunctionID_js__ = __webpack_require__(3);
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





class OnLanguageChange extends __WEBPACK_IMPORTED_MODULE_0__RpcNotification_js__["a" /* RpcNotification */] {

    /**
    * @constructor
    */
    constructor(store) {
        super(store);
        this.setFunctionName(__WEBPACK_IMPORTED_MODULE_2__enums_FunctionID_js__["a" /* FunctionID */].ON_LANGUAGE_CHANGE);
    }

    /**
    * @param {Language} langauge
    * @return {OnLanguageChange}
    */
    setLanguage(langauge) {
        this.validateType(__WEBPACK_IMPORTED_MODULE_1__enums_Language_js__["a" /* Language */], language);

        this.setParameter(OnLanguageChange.KEY_LANGUAGE, language);
        return this;
    }

    /**
    * @return {Language}
    */
    getLanguage() {
        return this.getObject(__WEBPACK_IMPORTED_MODULE_1__enums_Language_js__["a" /* Language */], OnLanguageChange.KEY_LANGUAGE);
    }

    /**
    * @param {Language} langauge
    * @return {OnLanguageChange}
    */
    setHMIDisplayLanguage(language) {
        this.validateType(__WEBPACK_IMPORTED_MODULE_1__enums_Language_js__["a" /* Language */], language);

        this.setParameter(OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE, language);
        return this;
    }

    /**
    * @return {Language}
    */
    getHMIDisplayLanguage() {
        return this.getObject(__WEBPACK_IMPORTED_MODULE_1__enums_Language_js__["a" /* Language */], OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE);
    }
}

OnLanguageChange.KEY_LANGUAGE = 'language';
OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE = 'hmiDisplayLanguage';




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SdlSession; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SdlSessionListener_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__protocol_SdlProtocolListener_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protocol_SdlProtocolBase_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__protocol_enums_ServiceType_js__ = __webpack_require__(8);
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
class SdlSession extends __WEBPACK_IMPORTED_MODULE_0__SdlSessionListener_js__["a" /* SdlSessionListener */] {
    /**
     * @param {TransportConfigBase} baseTransportConfig 
     * @param {SdlSessionListener} sdlSessionListener 
     */
    constructor (baseTransportConfig, sdlSessionListener) {
        super();

        this._serviceListeners = [];

        this._sdlSessionListener = sdlSessionListener;
        const sdlProtocolListener = this._setupSdlProtocolListener();

        this._sdlProtocol = new __WEBPACK_IMPORTED_MODULE_2__protocol_SdlProtocolBase_js__["a" /* SdlProtocolBase */](baseTransportConfig, sdlProtocolListener);
    }

    /**
     * @return {SdlProtocolListener} 
     * @private
     */
    _setupSdlProtocolListener () {
        const sdlProtocolListener = new __WEBPACK_IMPORTED_MODULE_1__protocol_SdlProtocolListener_js__["a" /* SdlProtocolListener */]();

        // TODO create all the functions that will be set for this listener

        return sdlProtocolListener;
    }

    start () {
        this._sdlProtocol.start();
    }

    endSession () {
        // TODO handle internal items
        this._sdlProtocol.endSession();
    }

    /**
     * @param {SdlSessionListener} serviceListener 
     */
    addServiceListener (serviceListener) {
        this._serviceListeners.push(serviceListener);
    }

    /**
     * @param {SdlSessionListener} serviceListener 
     */
    removeServiceListener (serviceListener) {
        const index = this._serviceListeners.indexOf(serviceListener);
        if (index >= 0) {
            this._serviceListeners.splice(index, 1);
        }
    }

    /**
     * @param {RpcMessage} rpcMessage 
     */
    sendRpc (rpcMessage) {
        this._sdlProtocol.sendRpc(rpcMessage);
    }

    /**
     * @param {ServiceType} serviceType 
     * @return {Number} max transport unit for the given service type
     */
    getMtu (serviceType) {
        this._sdlProtocol.getMtu(rpcMessage);
    }

    /**
     * Ends the current session
     */
    close () {
        
    }

    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @return {Boolean} isEncrypted
     */
    startService (serviceType, sessionID, isEncrypted) {

    }

    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     */
    endService (serviceType, sessionID) {

    }

    /**
     * Starts up the SDL protocol class. It will kick off the transport manager and underlying transport.
     */
    startSession () {

    }

    /**
     * To be determined if needed to send to the SdlProtocolBase's sendMessage method 
     * @param {ProtocolMessage} msg 
     */
    sendMessage (msg) {

    }

    /**
     * @return {TransportType}  
     */
    getCurrentTransportType () {

    }

    /**
     * @return {Boolean} isConnected
     */
    getIsConnected () {

    }

    /**
     * TODO: remove in favor of onTransportDisconnected?
     * Informs the session listener that a disconnection happened
     * @param {String} info 
     */
    shutdown (info) {
        
    }

    /**
     * Informs the session listener that a disconnection happened
     * @param {String} info 
     * @param {Boolean} altTransportAvailable 
     * @param {TransportConfigBase} transportConfig 
     */
    onTransportDisconnected (info, altTransportAvailable, transportConfig) {
        
    }

    /**
     * @return {Version}  
     */
    getProtocolVersion () {

    }

    /**
     * @return {TransportConfigBase}  
     */
    getTransportConfig () {

    }

    /**
     * @return {Number}  
     */
    getSessionHashId () {

    }

    /**
     * @return {Number}  - represents a byte 
     */
    getSessionId () {

    }

    /**
     * TODO: remove if no security stuff will be added
     * @param {SdlSecurityBase} info 
     */
    setSdlSecurity (security) {

    }

    /**
     * @return {SdlSecurityBase}
     */
    getSdlSecurity () {

    }

    /**
     * @param {ProtocolMessage} msg 
     */
    processControlService (msg) {

    }

    /**
     * @param {ServiceType} sType 
     * @return {Boolean}
     */
    isServiceProtected (sType) {

    }

    /**
     * TODO: SdlServiceListener doesnt exist
     * @param {ServiceType} serviceType 
     * @param {SdlServiceListener} sdlServiceListener 
     */
    addServiceListener (serviceType, sdlServiceListener) {

    } 

    /**
     * TODO: SdlServiceListener doesnt exist
     * @param {ServiceType} serviceType 
     * @param {SdlServiceListener} sdlServiceListener 
     * @return {Boolean}
     */
    removeServiceListener (serviceType, sdlServiceListener) {

    } 

    /**
     * TODO: what type is _serviceListeners?
     * @return {}
     */
    getServiceListeners () {

    }

    /**
     * TODO: VideoStreamingParameters doesn't exist
     * @param {VideoStreamingParameters} params 
     */
    setDesiredVideoParams (params) {

    }

    /**
     * TODO: VideoStreamingParameters doesn't exist
     * @return {VideoStreamingParameters} 
     */
    getDesiredVideoParams () {

    }

    /**
     * TODO: VideoStreamingParameters doesn't exist
     * @param {VideoStreamingParameters} params 
     */
    setAcceptedVideoParams (params) {

    }

    /**
     * TODO: VideoStreamingParameters doesn't exist
     * @return {VideoStreamingParameters} 
     */
    getAcceptedVideoParams () {

    }

    // required methods to implement from ISdlProtocol. doesn't exist
    // TODO: can these be removed?
    // public void onProtocolMessageBytesToSend
    // public void onProtocolSessionNACKed
    // public void onProtocolHeartbeat
    // public void onProtocolHeartbeatACK
    // public void onResetOutgoingHeartbeat
    // public void onResetIncomingHeartbeat

    // required methods to implement from ISecurityInitializedListener. doesn't exist
    // TODO: can these be removed?
    // public void onSecurityInitialized
    // public void stopStream
    // public boolean isTransportForServiceAvailable
    // public void clearConnection

    // required methods to implement from SdlSessionListener

    /**
     * @param {String} info 
     * @param {Boolean} availablePrimary 
     * @param {TransportConfigBase} transportConfig 
     */
    onTransportDisconnected (info, availablePrimary, transportConfig) {

    }

    /**
     * @param {String} info 
     * @param {Error} e 
     */
    onTransportError (info, e) {

    }
    
    /**
     * @param {ProtocolMessage} msg 
     */
    onProtocolMessageReceived (msg) {

    }
    
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {Number} version - represents a byte 
     * @param {String} correlationID
     * @param {Array<String>} rejectedParams
     */
    onProtocolSessionStartedNACKed (serviceType, sessionID, version, correlationID, rejectedParams) {

    }
    
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {Number} version - represents a byte 
     * @param {String} correlationID
     * @param {Number} hashID
     * @param {Boolean} isEncrypted
     */
    onProtocolSessionStarted (serviceType, sessionID, version, correlationID, hashID, isEncrypted) {

    }
    
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {String} correlationID
     */
    onProtocolSessionEnded (serviceType, sessionID, correlationID) {

    }
    
    /**
     * @param {ServiceType} serviceType 
     * @param {Number} sessionID - represents a byte 
     * @param {String} correlationID
     */
    onProtocolSessionEndedNACKed (serviceType, sessionID, correlationID) {

    }
    
    /**
     * @param {String} info 
     * @param {Error} e 
     */
    onProtocolError (info, e) {

    }

    /**
     * @param {ServiceType} serviceType 
     * @param {Number} dataSize
     * @param {Number} sessionID - represents a byte 
     */
    onProtocolServiceDataACK (serviceType, dataSize, sessionID) {

    }

    /**
     * @param {String} authToken
     * @param {Number} sessionID - represents a byte 
     */
    onAuthTokenReceived (authToken, sessionID) {
        this._sdlSessionListener.onAuthTokenReceived(authToken, sessionId);
    }
}



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SslConfig; });
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

class SslConfig {
    constructor (pemCertificate = null, privateKey = null, password = null) {
        this._pemCertificate = pemCertificate;
        this._privateKey = privateKey;
        this._password = password;
    }

    /**
    * Returns the PEM Certificate
    * @return {string}
    */
    getPemCertificate () {
        return this._pemCertificate;
    }

    /**
    * Returns the Private Key
    * @return {string}
    */
    getPrivateKey () {
        return this._privateKey;
    }

    /**
    * Returns the password
    * @return {string}
    */
    getPassword () {
        return this._password;
    }
}




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportBase; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SdlPsm_js__ = __webpack_require__(6);
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
     * @param {BaseTransportConfig} transportConfig
     * @param {TransportListener} transportListener
     */
    constructor (transportConfig, transportListener) {
        this._sdlPsm = new __WEBPACK_IMPORTED_MODULE_0__SdlPsm_js__["a" /* SdlPsm */]();
        this._transportConfig = transportConfig;
        this._transportListener = transportListener;
    }

    start () {
        throw 'start method must be overridden';
    }

    stop () {
        throw 'stop method must be overridden';
    }

    /**
     * @param {SdlPacket} sdlPacket
     */
    sendPacket (sdlPacket) {
        throw 'sendPacket method must be overridden';
    }
}




/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportManagerBase; });
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



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsConnection; });
class WsConnection {
    constructor (connection) {
        this._connection = connection;

        this._listeners = [];
        this._init();
    }

    addListener(listener) {
        this._listeners.push(listener); // listen for onByte
    }

    _init () {
        const self = this;
        // message from core

        self._connection.addEventListener('message', (data) => {
            self._handleIncoming(data);
        });
    }

    async _handleIncoming (data) {
        let arrayBuffer = await new Response(data.data).arrayBuffer();   //: ArrayBuffer
        let uint8 = new Uint8Array(arrayBuffer);
        for (let byte of uint8) {
            self._onByte(byte);
        }
    }

    _onByte(byte) {
        for (let listener of this._listneres) {
            listener.onByte();
        }
    }

    send (data) {
        self.connection.send(data);
    }
}




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__ = __webpack_require__(0);
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
class TransportType extends __WEBPACK_IMPORTED_MODULE_0__util_Enum_js__["a" /* Enum */] {

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



/***/ })
/******/ ]);