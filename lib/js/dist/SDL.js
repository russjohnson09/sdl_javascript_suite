(function(e,_){"object"==typeof exports&&"undefined"!=typeof module?module.exports=_(require("bson")):"function"==typeof define&&define.amd?define(["bson"],_):(e=e||self,e.SDL=_(e.BSON))})(this,function(e){'use strict';e=e&&e.hasOwnProperty("default")?e["default"]:e;/*
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
    */ /**
     * This class will assemble the different types of messages
     */class _{/**
        * @constructor
        * @param {Number} headerSize
        * @param {Function} callback
        */constructor(e=8,_){if(null==_)throw"Callback can't be null for MessageFrameAssembler";//TODO byte array output stream
this._accumulator=null,this._headersize=e,this._totalSize=0,this._callback=_}/**
        * @param {SdlPacket} sdlPacket
        */handleFrame(e){}/**
        * @param {SdlPacket} sdlPacket
        */handleMultiFrameMessageFrame(e){}/**
        * @param {SdlPacket} sdlPacket
        */handleFirstDataFrame(e){}/**
        * @param {SdlPacket} sdlPacket
        */handleRemainingFrame(e){}}/*
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
    */class E{/**
        * @constructor
        */constructor(){}// intentionally empty
/**
        * Returns the key for a given value if the value is found within the key:value map
        * @param value - A primitive value to find in the map
        * @param map {Object} - An map of string properties to primitive values 
        * @return {null|String} - Returns null if not found
        */static keyForValueInternal(e,_){for(let E in _)if(_[E]===e)return E;return null}/**
        * Returns the given value if the value is found within the key:value map
        * @param value - A primitive value to find in the map
        * @param map {Object} - An map of string properties to primitive values 
        * @return {*} - Returns a value if found, or null if not found
        */static valueForStringInternal(e,_){for(let E in _)if(_[E]===e)return _[E];return null}/**
        * A method for subclasses to implement that does what keyForValueInternal does
        * @param value - A primitive value to find in the map of the subclass
        * @return {*} - Returns a value if found, or null if not found
        */valueForString(e){throw"method must be overridden"}}/*
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
    */ /**
     * @typedef {Enum} FrameType
     * @property {Object} MAP
     */class n extends E{/**
        * @constructor
        */constructor(){super()}/**
        * @return {Number}
        */static get CONTROL(){return n.MAP.CONTROL}/**
        * @return {Number}
        */static get FIRST(){return n.MAP.FIRST}/**
        * @return {Number}
        */static get CONSECUTIVE(){return n.MAP.CONSECUTIVE}/**
        * @return {Number}
        */static get SINGLE(){return n.MAP.SINGLE}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */static valueForString(e){for(let _ in n.MAP)if(n.MAP[_]===e)return n.MAP[_];return null}}n.MAP=Object.freeze({CONTROL:0,FIRST:2,CONSECUTIVE:3,SINGLE:1});/*
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
    */ //TODO add more properties
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
     */class A{/**
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
        */constructor(e=1,_=!1,E=-1,n=-1,A=-1,r=0,t=0,T=0,a=null,S=0,o=0){return this._version=e,this._encryption=_,this._frameType=E,this._serviceType=n,this._frameInfo=A,this._sessionID=r,this._dataSize=t,this._messageID=T,this._payload=a,this._offset=S,this._bytesToWrite=o,this._bsonPayload=void 0,null!==a&&(this._payload=new Uint8Array(o),this._payload=this._payload.slice(S,o)),this}/**
        * @return {Number} - Protocol version used by this packet
        */getVersion(){return this._version}/**
        * @return {Boolean} - Whether or not the payload in this packet is encrypted
        */getEncryption(){return this._encryption}/**
        * @return {ServiceType} - The service that this packet is associated with
        */getServiceType(){return this._serviceType}/**
        * @return {Number} - Specific frame info related to this packet
        */getFrameInfo(){return this._frameInfo}/**
        * @return {Number} - ID this packet is associated with
        */getSessionID(){return this._sessionID}/**
        * @return {Number} - ID of this specific packet
        */getMessageID(){return this._messageID}/**
        * @return {Number} - Size of the payload that will be added
        */getDataSize(){return this._dataSize}/**
        * @return {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */setPayload(e){this._payload=e}/**
        * @return {Uint8Array} - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */getPayload(){return this._payload}/**
        * @return {Number} - Returns a number representing a byte mask depending on the boolean value
        */getEncryptionBit(){return this._encryption?A.ENCRYPTION_MASK:0}/**
        * @return {FrameType} - A number representing the packet frame type
        */getFrameType(){return null===n.valueForString(this._frameType)?n.SINGLE:this._frameType}/**
        * @return {Uint8Array} - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */toUint8Array(){return constructPacket(this._version,this._encryption,this._frameType,this._serviceType,this._frameInfo,this._sessionID,this._dataSize,this._messageID,this._payload)}/**
        * @return {String} - String representation of the packet
        */toString(){let e="***** Sdl Packet *****";return e+=`\nVersion: ${this._version}`,e+=`\nEncryption: ${this._encryption}`,e+=`\nFrameType: ${this._frameType}`,e+=`\nServiceType: ${this._serviceType}`,e+=`\nFrameInfo: ${this._frameInfo}`,e+=`\nSessionID: ${this._sessionID}`,e+=`\nDataSize: ${this._dataSize}`,1<this._version&&(e+=`\nMessageID: ${this._messageID}`),e+="\n***** Sdl Packet End *****",e}/**
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
    	 */static constructPacket(e,_,E,n,r,t,T,a,S){let o=null,R=0;return o=1===e?new Uint8Array(A.HEADER_SIZE_V1+T):new Uint8Array(A.HEADER_SIZE+T),o[R++]=e<<4+getEncryptionBit(_)+E,o[R++]=n,o[R++]=r,o[R++]=t,o[R++]=-1&T,o[R++]=255&T,o[R++]=255&T,o[R++]=255&T,1<e&&(o[R++]=-1&a,o[R++]=255&a,o[R++]=255&a,o[R++]=255&a),null!==S&&0<S.length&&o.set(S,R++),o}/**
         * @param {String} tag - String key to add as a property to the BSON map
         * @param {Object} data - Object to add as a value to the BSON map
         */putTag(e,_){}// TODO bson
/**
         * @param {String} tag - String key to add as a property to the BSON map
         * @return {Object} data - Object as a value found from the the BSON map
         */getTag(e){// TODO bson
}}A.EXTRA_PARCEL_DATA_LENGTH=24,A.HEADER_SIZE=12,A.HEADER_SIZE_V1=8,A.ENCRYPTION_MASK=8,A.SERVICE_TYPE_CONTROL=0,A.SERVICE_TYPE_RPC=7,A.SERVICE_TYPE_PCM=10,A.SERVICE_TYPE_VIDEO=11,A.SERVICE_TYPE_BULK_DATA=15,A.FRAME_INFO_HEART_BEAT=0,A.FRAME_INFO_START_SERVICE=1,A.FRAME_INFO_START_SERVICE_ACK=2,A.FRAME_INFO_START_SERVICE_NAK=3,A.FRAME_INFO_END_SERVICE=4,A.FRAME_INFO_END_SERVICE_ACK=5,A.FRAME_INFO_END_SERVICE_NAK=6,A.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT=7,A.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_ACK=8,A.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_NAK=9,A.FRAME_INFO_TRANSPORT_EVENT_UPDATE=253,A.FRAME_INFO_SERVICE_DATA_ACK=254,A.FRAME_INFO_HEART_BEAT_ACK=255,A.FRAME_INFO_FINAL_CONNESCUTIVE_FRAME=0,A.FRAME_INFO_RESERVED=0;/*
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
    */class r{/**
        * @constructor
        */constructor(e={}){this._isFormatRequested=!1,this._rpcSpecVersion=null,this._parameters=JSON.parse(JSON.stringify(e||{}))}/**
        * @return {Object}
        */getParameters(){return JSON.parse(JSON.stringify(this._parameters))}/**
        * @param {String} key
        * @return {*}
        */getParameter(e){return this._parameters[e]}/**
        * @param {String} key
        * @param {*} value
        * @return {RpcStruct}
        */setParameter(e,_){return null===_?delete this._parameters[e]:this._parameters[e]=_,this}/**
        * @param {Function} tClass
        * @param {String} key
        * @return {Object}
        */getObject(e,_){return this.formatObject(e,this.getParameter(_))}/**
        * @param {Function} tClass
        * @param {Object} obj
        * @return {null|Object}
        */formatObject(e,_){if(null===_)return null;if(_.constructor===e)// if tClass is String and obj is a String, this should execute
return _;if(_.constructor===String)return e instanceof E?e.valueForString(_):e instanceof String?_:null;if(_.constructor===Object)return e instanceof r?new e(_):null;if(_.constructor===Array&&0<_.length)// TODO: ensure completeness
{let e=[];for(item in _)e.push(this.formatObject(tclass,item));return e}return null}/**
        * @param {Function} tClass
        * @param {Object} obj
        */validateType(e,_){if(e instanceof E&&null===e.valueForString(_)||null!==_&&_.constructor!==e)throw`${_.name} must be of type ${e.name}`}}/*
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
    */ /**
     * @typedef {Object} RpcMessage
     * @property {RpcType} rpcType
     */class t extends r{/*
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
        */ /**
        * @constructor
        */constructor(e={}){super(e.parameters),this._isEncrypted=!1,this._rpcType=e.rpcType,this._functionName=e.functionName,this._correlationID=e.correlationID,this._bulkData=this.setBulkData(e.bulkData)}/**
        * @return {RpcType}
        */getRPCType(){return this._rpcType}/**
        * @param {RpcType} type
        * @return {RpcMessage}
        */setRPCType(e){return this._rpcType=e,this}/**
        * @return {String} type
        */getFunctionName(){return this._functionName}/**
        * @param {String} name
        * @return {RpcMessage}
        */setFunctionName(e){return this._functionName=e,this}/**
        * @return {Uint8Array} data
        */getBulkData(){return this._bulkData}/**
        * @param {UInt8Array} data
        * @return {RpcMessage}
        */setBulkData(e=null){return this._bulkData=null===e?null:e.slice(0),this}/**
        * @return {Boolean}
        */getIsEncrypted(){return this._isEncrypted}/**
        * @param {Boolean} bool
        * @return {RpcMessage}
        */setIsEncrypted(e){return this._isEncrypted=e,this}}/*
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
    */ /**
     * @typedef {Enum} ServiceType
     * @property {Object} MAP
     */class T extends E{/**
        * @constructor
        */constructor(){super()}/**
        * @return {Number}
        */static get CONTROL(){return T.MAP.CONTROL}/**
        * @return {Number}
        */static get RPC(){return T.MAP.RPC}/**
        * @return {Number}
        */static get AUDIO(){return T.MAP.AUDIO}/**
        * @return {Number}
        */static get VIDEO(){return T.MAP.VIDEO}/**
        * @return {Number}
        */static get HYBRID(){return T.MAP.HYBRID}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */static valueForString(e){for(let _ in T.MAP)if(T.MAP[_]===e)return T.MAP[_];return null}}T.MAP=Object.freeze({CONTROL:0,RPC:7,AUDIO:10,VIDEO:11,HYBRID:15});/*
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
    */ //TODO check how to handle the property/function exposure
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
     */class a{/**
         * @constructor 
         */constructor(){this._onRpcMessageReceived=null,this._onControlServiceMessageReceived=null}/**
         * @param {function} listener 
         */setOnRpcMessageReceivedListener(e){this._onRpcMessageReceived=e}/**
         * @param {function} listener 
         */setOnControlServiceMessageReceivedListener(e){this._onControlServiceMessageReceived=e}/**
         * @param {function} listener 
         */setOnDecryptRequestListener(e){this._onDecryptRequestListener=e}//TODO add the setters for the added functions
/*
        * Listener methods to be called
        *
        */ /**
         * @param {SdlPacket} sdlPacket 
         */onControlServiceMessageReceived(e){"function"==typeof this._onControlServiceMessageReceived&&this._onControlServiceMessageReceived(e)}/**
         * @param {RpcMessage} rpcMessage 
         */onRpcMessageReceived(e){"function"==typeof this._onRpcMessageReceived&&this._onRpcMessageReceived(e)}/**
         * @param {SdlPacket} sdlPacket 
         */onStartServiceACKReceived(e){"function"==typeof this._onStartServiceACKReceived&&this._onStartServiceACKReceived(e)}/**
         * @param {SdlPacket} sdlPacket 
         */onStartServiceNAKReceived(e){"function"==typeof this._onStartServiceNAKReceived&&this._onStartServiceNAKReceived(e)}/**
         * @param {SdlPacket} sdlPacket 
         */onEndServiceACKReceived(e){"function"==typeof this._onEndServiceACKReceived&&this._onEndServiceACKReceived(e)}/**
         * @param {SdlPacket} sdlPacket 
         */onEndServiceNAKReceived(e){"function"==typeof this._onEndServiceNAKReceived&&this._onEndServiceNAKReceived(e)}/**
         * @param {ServiceType} serviceType 
         */onServiceEncryptionStarted(e){"function"==typeof this.onServiceEncryptionStarted&&this.onServiceEncryptionStarted(e)}}/*
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
    */class S{/**
         * @constructor
         */constructor(){this._onTransportConnected=null,this._onTransportDisconnected=null,this._onError=null,this._onPacketReceived=null}/**
         * @param {Function} func
         * @return {TransportListener}
         */setOnTransportConnected(e){return this._onTransportConnected=e,this}/**
         * @param {Function} func
         * @return {TransportListener}
         */setOnTransportDisconnected(e){return this._onTransportDisconnected=e,this}/**
         * @param {Function} func
         * @return {TransportListener}
         */setOnError(e){return this._onError=e,this}/**
         * @param {Function} func
         * @return {TransportListener}
         */setOnPacketReceived(e){return this._onPacketReceived=e,this}onTransportConnected(){"function"==typeof this._onTransportConnected&&this._onTransportConnected()}onTransportDisconnected(){"function"==typeof this._onTransportDisconnected&&this._onTransportDisconnected()}onError(){"function"==typeof this._onError&&this._onError()}onPacketReceived(e){"function"==typeof this._onPacketReceived&&this._onPacketReceived(e)}}/*
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
    */ /**
     * @typedef {Object} TransportConfigBase
     * @property {TransportType} _transportType
     * @property {Function} getTransportType
     */ /*
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
    */class o{/**
        * @constructor
        */constructor(e,_,E){this.setMajor(e),this.setMinor(_),this.setPatch(E)}/**
        * @param {Number} major
        * @return {Version}
        */setMajor(e){return this._major=parseInt(e)||0,this}/**
        * @return {Number}
        */getMajor(){return this._major}/**
        * @param {Number} minor
        * @return {Version}
        */setMinor(e){return this._minor=parseInt(e)||0,this}/**
        * @return {Number}
        */getMinor(){return this._minor}/**
        * @param {Number} patch
        * @return {Version}
        */setPatch(e){return this._patch=parseInt(e)||0,this}/**
        * @return {Number}
        */getPatch(){return this._patch}/**
        * @param {String} version - Parse this string to a Version object
        * @return {Version}
        */fromString(e){let _=e.split(".");if(3!=_.length)throw"Incorrect version string format";return this.setMajor(_[0]),this.setMinor(_[1]),this.setPatch(_[2]),this}/**
        * @return {String}
        */toString(){return`${this.getMajor()}.${this.getMinor()}.${this.getPatch()}`}/**
        * Method to test if this instance of Version is newer than the supplied one.
        * @param version - the version to check against
        * @return {Number} - 1 if this instance is newer, -1 if supplied version is newer, and 0 if they are equal
        */isNewerThan(e){if(this.getMajor()>e.getMajor())return 1;if(this.getMajor()==e.getMajor()){if(this.getMinor()>e.getMinor())return 1;if(this.getMinor()==e.getMinor()){if(this.getPatch()>e.getPatch())return 1;if(this.getPatch()==e.getPatch())return 0}}return-1}}/*
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
    */class R{/**
         * 
         * @param { TransportConfigBase } baseTransportConfig
         * @param { SdlProtocolListener } sdlProtocolListener
         */constructor(e,_){this._transportConfig=e,this._sdlProtocollistener=_,reset(),_createTransportListener(),this._transportManager=null}/**
         * Listens for transport-related events and handles them here
         * @private
         */_createTransportListener(){this._transportListener=new S,this._transportListener.setOnTransportConnected(function(){//Transport connected
//Start RPC session
}),this._transportListener.setOnTransportDisconnected(function(){//Transport disconnected
//Shut everything down
}),this._transportListener.setOnPacketReceived(function(e){//SdlPacket received
this._handlePacketReceived(e)}),this._transportListener.setOnError(function(){//Handle error?
})}/**
         * Starts up the SDL protocol class. It will kick off the transport manager and underlying transport.
         */start(){if(null==this._transportManager)throw"transport manager was null, unable to start SDL Protocol";return this._transportManager.start(),this}/**
         * @param {ServiceType} serviceType 
         * @return {Number} max transport unit for the give service type
         */getMtu(e){let _=this._mtus.get(e);return null==_?R.V1_V2_MTU_SIZE:_}/**
         * @return {Boolean} isConnected
         */isConnected(){return null!=this._transportManager&&this._transportManager.isConnected(null,null)}/**
         * Sets internal class members to default values
         */reset(){this._protocol_version=new o(1,0,0),this._transportConfig=baseTransportConfig,this._headerSize=R.V1_HEADER_SIZE,this.serviceStatus=new Map,this.serviceStatus[T.CONTROL]=!0,this._mtus=new Map,this._mtus[T.RPC]=R.V1_V2_MTU_SIZE-this._headerSize,this._hashID=0,this._messageID=0,this._messageFrameAssemblers=new Map}/**
         * @return {Version} protocol_version
         */getProtocolVersion(){return this._protocol_version}/**
         * This method will set the major protocol version that we should use. It will also set the default MTU based on version.
         * @param {Number} version - major version to use
         * @private
         */_setVersion(e){5<e?(this.protocolVersion=new o("5.1.0"),headerSize=R.V2_HEADER_SIZE,mtus[T.RPC]=R.V3_V4_MTU_SIZE):5==e?(this.protocolVersion=new o("5.0.0"),headerSize=R.V2_HEADER_SIZE,mtus[T.RPC]=R.V3_V4_MTU_SIZE):4==e?(this.protocolVersion=new o("4.0.0"),headerSize=R.V2_HEADER_SIZE,mtus[T.RPC]=R.V3_V4_MTU_SIZE):3==e?(this.protocolVersion=new o("3.0.0"),headerSize=R.V2_HEADER_SIZE,mtus[T.RPC]=R.V3_V4_MTU_SIZE):2==e?(this.protocolVersion=new o("2.0.0"),headerSize=R.V2_HEADER_SIZE,mtus[T.RPC]=R.V1_V2_MTU_SIZE-headerSize):1==e&&(this.protocolVersion=new o("1.0.0"),headerSize=R.V1_HEADER_SIZE,mtus[T.RPC]=R.V1_V2_MTU_SIZE-headerSize)}/**
         * @param {SdlPacket} sdlPacket
         */sendPacket(e){null!=this._transportManager&&this._transportManager.sendPacket(e)}/**
         * @param {RpcMessage} rpcMessage 
         */sendRpc(e){if(null!=e){//(version = 1, encryption = false, frameType = -1, serviceType = -1, frameInfo = -1, sessionID = 0, dataSize = 0, messageID = 0, payload = null, offset = 0, bytesToWrite = 0) {
let _=new Uint8Array(e.getParameters()),E=new A(this._protocol_version.getMajor(),!1);//TODO: sdlPacket.set
}}sendMessage(e){}//TODO 
// This is the method that handles all the building of sdl packets that get sent 
// in the java suite lib. We want to avoid using protocol message here as an extra 
// class that doesn't make much sense. I believe we should probably alter SdlPacket
// to handle the situation protocol message used to
/**
         * Handle an SdlPacket depending on its FrameType
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handlePacketReceived(e){if((null==this._protocol_version||1==this._protocol_version.getMajor())&&this._setVersion(packet.version),e.getFrameType()==n.FIRST||e.getFrameType()==n.CONSECUTIVE)messageFrameAssembler=_getMessageFrameAssembler(e),messageFrameAssembler.handleFrame(e);else//Packet can be handled as is
switch(e.getFrameType()){case n.CONTROL:this._handleControlPacket(e);break;case n.SINGLE:switch(e.getServiceType()){case T.RPC:this._handleRPCPacket(e);}}}/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_getMessageFrameAssembler(e){let E=this._messageFrameAssemblers[e.getMessageID()];return null==E&&(E=_(this._headerSize,new function(e){this._messageFrameAssemblers[e.getMessageID()]=null}),this._messageFrameAssemblers[e.getMessageID()]=E),E}/**
         * This method will handle control packets for all service types
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleControlPacket(e){let _=e.getServiceType(),E=e.getFrameInfo(),n=e.getPayload();E===e.FRAME_INFO_START_SERVICE_ACK?this._handleStartServiceACK(e):E===e.FRAME_INFO_START_SERVICE_NAK?this._handleStartServiceNAK(e):E===e.FRAME_INFO_END_SERVICE_ACK?this._handleEndServiceACK(e):E===e.FRAME_INFO_END_SERVICE_NAK?this._handleEndServiceACK(e):void 0}/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleStartServiceACK(e){//TODO
//Handle things internally first
switch(serviceType){case T.RPC:case T.CONTROL:case T.HYBRID:case T.AUDIO:case T.VIDEO:}//Then call the listener (should be SdlSession)
null!=this._sdlProtocollistener&&this._sdlProtocollistener.onStartServiceACKReceived(e)}/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleStartServiceNAK(e){}//TODO
/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleEndServiceACK(e){}//TODO
/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleEndServiceNAK(e){}//TODO
/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleControlServicePacket(e){null!=this._sdlProtocollistener&&this._sdlProtocollistener.onControlServiceMessageReceived(e)}/**
         * @param {SdlPacket} sdlPacket 
         * @private
         */_handleRPCPacket(e){let _=e.getPayload();// TODO possibly add error checking that ensures this is an RPC packet
if(1==this._protocol_version.getMajor());//TODO actually create the RPC message
null!=this._sdlProtocollistener&&this._sdlProtocollistener.onRpcMessageReceived(null)}//Not sure if we need
/**
         * @param {*} sessionID 
         * @param {*} _hashID 
         */endSession(e,_){}}/**
     * Original header size based on version 1.0.0 only
     */R.V1_HEADER_SIZE=8,R.V2_HEADER_SIZE=12,R.V1_V2_MTU_SIZE=1500,R.V3_V4_MTU_SIZE=131072,R.MAX_PROTOCOL_VERSION=new o(5,2,0);/*
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
    */class s{}// hidden inner objects
const I={MTU:"mtu"},i={REJECTED_PARAMS:"rejectedParams"},P={/** The negotiated version of the protocol. Must be in the format "Major.Minor.Patch"*/PROTOCOL_VERSION:"protocolVersion"},d={/** Hash ID to identify this service and used when sending an EndService control frame*/HASH_ID:"hashId"},M={HEIGHT:"height",WIDTH:"width"};s.RPC=Object.freeze({StartService:P,StartServiceACK:Object.assign({/** HU allowed transport for secondary connection */SECONDARY_TRANSPORTS:"secondaryTransports",/** HU allowed transports for audio and video services (1 == Primary, 2 == Secondary) */AUDIO_SERVICE_TRANSPORTS:"audioServiceTransports",VIDEO_SERVICE_TRANSPORTS:"videoServiceTransports",/** Auth token to be used for log in into services **/AUTH_TOKEN:"authToken"},I,P,d),StartServiceNAK:i,EndService:d,EndServiceACK:{},EndServiceNAK:i,TransportEventUpdate:{TCP_IP_ADDRESS:"tcpIpAddress",TCP_PORT:"tcpPort"},RegisterSecondaryTransport:{},RegisterSecondaryTransportACK:{},RegisterSecondaryTransportNAK:Object.assign({REASON:"reason"},i)}),s.Audio=Object.freeze({StartService:{},StartServiceACK:I,StartServiceNAK:i,EndService:{},EndServiceACK:{},EndServiceNAK:i}),s.Video=Object.freeze({StartService:Object.assign({VIDEO_PROTOCOL:"videoProtocol",VIDEO_CODEC:"videoCodec"},M),StartServiceACK:Object.assign({},I,M)});/*
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
    */ /**
     * @typedef {Enum} RpcType
     * @property {Object} MAP
     */class N extends E{/**
        * @constructor
        */constructor(){super()}/**
         * @return {Number} 
         */static get NOTIFICATION(){return N.MAP.NOTIFICATION}/**
         * @return {Number} 
         */static get RESPONSE(){return N.MAP.RESPONSE}/**
         * @return {Number} 
         */static get REQUEST(){return N.MAP.REQUEST}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */static valueForString(e){return N.valueForStringInternal(e,N.MAP)}/**
        * Returns the key of the map with the corresponding value
        * @param {Number} value
        * @return {null|String} - Returns null if not found
        */static keyForValue(e){return N.keyForValueInternal(e,N.MAP)}}N.MAP=Object.freeze({NOTIFICATION:2,RESPONSE:1,REQUEST:0});/*
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
    */class D extends t{/**
        * @constructor
        */constructor(e){super(e),this.setRPCType(N.NOTIFICATION)}}/*
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
    */class O extends t{/**
        * @constructor
        */constructor(e){super(e),this.setRPCType(N.REQUEST),this._promise=null}/**
        * @return {Number}
        */getCorrelationID(){return this._correlationID}/**
        * @param {Number} id
        * @return {RpcMessage}
        */setCorrelationID(e){return this._correlationID=e,this}/**
        * @return {Promise}
        */getOnRPCResponsePromise(){return this._promise}/**
        * @param {Promise} promise
        * @return {RpcMessage}
        */setOnRPCResponsePromise(e){return this.validateType(Promise,e),this._promise=e,this}}/*
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
    */ /**
     * @typedef {Enum} Result
     * @property {Object} MAP
     */class c extends E{/**
         * @constructor
         */constructor(){super()}/**
         * @return {String} 
         */static get SUCCESS(){return c.MAP.SUCCESS}/**
         * @return {String} 
         */static get UNSUPPORTED_REQUEST(){return c.MAP.UNSUPPORTED_REQUEST}/**
         * @return {String} 
         */static get UNSUPPORTED_RESOURCE(){return c.MAP.UNSUPPORTED_REQUEST}/**
         * @return {String} 
         */static get DISALLOWED(){return c.MAP.DISALLOWED}/**
         * @return {String} 
         */static get REJECTED(){return c.MAP.REJECTED}/**
         * @return {String} 
         */static get ABORTED(){return c.MAP.ABORTED}/**
         * @return {String} 
         */static get IGNORED(){return c.MAP.IGNORED}/**
         * @return {String} 
         */static get RETRY(){return c.MAP.RETRY}/**
         * @return {String} 
         */static get IN_USE(){return c.MAP.IN_USE}/**
         * @return {String} 
         */static get VEHICLE_DATA_NOT_AVAILABLE(){return c.MAP.VEHICLE_DATA_NOT_AVAILABLE}/**
         * @return {String} 
         */static get TIMED_OUT(){return c.MAP.TIMED_OUT}/**
         * @return {String} 
         */static get INVALID_DATA(){return c.MAP.INVALID_DATA}/**
         * @return {String} 
         */static get CHAR_LIMIT_EXCEEDED(){return c.MAP.CHAR_LIMIT_EXCEEDED}/**
         * @return {String} 
         */static get INVALID_ID(){return c.MAP.INVALID_ID}/**
         * @return {String} 
         */static get DUPLICATE_NAME(){return c.MAP.DUPLICATE_NAME}/**
         * @return {String} 
         */static get APPLICATION_NOT_REGISTERED(){return c.MAP.APPLICATION_NOT_REGISTERED}/**
         * @return {String} 
         */static get WRONG_LANGUAGE(){return c.MAP.WRONG_LANGUAGE}/**
         * @return {String} 
         */static get OUT_OF_MEMORY(){return c.MAP.OUT_OF_MEMORY}/**
         * @return {String} 
         */static get TOO_MANY_PENDING_REQUESTS(){return c.MAP.TOO_MANY_PENDING_REQUESTS}/**
         * @return {String} 
         */static get TOO_MANY_APPLICATIONS(){return c.MAP.TOO_MANY_APPLICATIONS}/**
         * @return {String} 
         */static get APPLICATION_REGISTERED_ALREADY(){return c.MAP.APPLICATION_REGISTERED_ALREADY}/**
         * @return {String} 
         */static get WARNINGS(){return c.MAP.WARNINGS}/**
         * @return {String} 
         */static get GENERIC_ERROR(){return c.MAP.GENERIC_ERROR}/**
         * @return {String} 
         */static get USER_DISALLOWED(){return c.MAP.USER_DISALLOWED}/**
         * @return {String} 
         */static get TRUNCATED_DATA(){return c.MAP.TRUNCATED_DATA}/**
         * @return {String} 
         */static get UNSUPPORTED_VERSION(){return c.MAP.UNSUPPORTED_VERSION}/**
         * @return {String} 
         */static get VEHICLE_DATA_NOT_ALLOWED(){return c.MAP.VEHICLE_DATA_NOT_ALLOWED}/**
         * @return {String} 
         */static get FILE_NOT_FOUND(){return c.MAP.FILE_NOT_FOUND}/**
         * @return {String} 
         */static get CANCEL_ROUTE(){return c.MAP.CANCEL_ROUTE}/**
         * @return {String} 
         */static get SAVED(){return c.MAP.SAVED}/**
         * @return {String} 
         */static get INVALID_CERT(){return c.MAP.INVALID_CERT}/**
         * @return {String} 
         */static get EXPIRED_CERT(){return c.MAP.EXPIRED_CERT}/**
         * @return {String} 
         */static get RESUME_FAILED(){return c.MAP.RESUME_FAILED}/**
         * @return {String} 
         */static get DATA_NOT_AVAILABLE(){return c.MAP.DATA_NOT_AVAILABLE}/**
         * @return {String} 
         */static get READ_ONLY(){return c.MAP.READ_ONLY}/**
         * @return {String} 
         */static get CORRUPTED_DATA(){return c.MAP.CORRUPTED_DATA}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */static valueForString(e){return c.valueForStringInternal(e,c.MAP)}/**
        * Returns the key of the map with the corresponding value
        * @param {String} value
        * @return {null|String} - Returns null if not found
        */static keyForValue(e){return c.keyForValueInternal(e,c.MAP)}}c.MAP=Object.freeze({SUCCESS:"SUCCESS",UNSUPPORTED_REQUEST:"UNSUPPORTED_REQUEST",UNSUPPORTED_RESOURCE:"UNSUPPORTED_RESOURCE",DISALLOWED:"DISALLOWED",REJECTED:"REJECTED",ABORTED:"ABORTED",IGNORED:"IGNORED",RETRY:"RETRY",IN_USE:"IN_USE",VEHICLE_DATA_NOT_AVAILABLE:"VEHICLE_DATA_NOT_AVAILABLE",TIMED_OUT:"TIMED_OUT",INVALID_DATA:"INVALID_DATA",CHAR_LIMIT_EXCEEDED:"CHAR_LIMIT_EXCEEDED",INVALID_ID:"INVALID_ID",DUPLICATE_NAME:"DUPLICATE_NAME",APPLICATION_NOT_REGISTERED:"APPLICATION_NOT_REGISTERED",WRONG_LANGUAGE:"WRONG_LANGUAGE",OUT_OF_MEMORY:"OUT_OF_MEMORY",TOO_MANY_PENDING_REQUESTS:"TOO_MANY_PENDING_REQUESTS",TOO_MANY_APPLICATIONS:"TOO_MANY_APPLICATIONS",APPLICATION_REGISTERED_ALREADY:"APPLICATION_REGISTERED_ALREADY",WARNINGS:"WARNINGS",GENERIC_ERROR:"GENERIC_ERROR",USER_DISALLOWED:"USER_DISALLOWED",TRUNCATED_DATA:"TRUNCATED_DATA",UNSUPPORTED_VERSION:"UNSUPPORTED_VERSION",VEHICLE_DATA_NOT_ALLOWED:"VEHICLE_DATA_NOT_ALLOWED",FILE_NOT_FOUND:"FILE_NOT_FOUND",CANCEL_ROUTE:"CANCEL_ROUTE",SAVED:"SAVED",INVALID_CERT:"INVALID_CERT",EXPIRED_CERT:"EXPIRED_CERT",RESUME_FAILED:"RESUME_FAILED",DATA_NOT_AVAILABLE:"DATA_NOT_AVAILABLE",READ_ONLY:"READ_ONLY",CORRUPTED_DATA:"CORRUPTED_DATA"});/*
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
    */class C extends t{/**
        * @constructor
        */constructor(e){super(e),this.setRPCType(N.RESPONSE)}/**
        * @return {Number}
        */getCorrelationID(){return this._correlationID}/**
        * @param {Number} id
        * @return {RpcResponse}
        */setCorrelationID(e){return this._correlationID=e,this}/**
        * @return {Boolean}
        */getSuccess(){return this.getParameter(KEY_SUCCESS)}/**
        * @return {RpcResponse}
        */setSuccess(e){return this.setParameter(KEY_SUCCESS,e),this}/**
        * @return {String}
        */getInfo(){return this.getParameter(KEY_INFO)}/**
        * @return {RpcResponse}
        */setInfo(e){return this.setParameter(KEY_INFO,e),this}/**
        * @return {Result}
        */getResultCode(){return this.getObject(c,KEY_RESULT_CODE)}/**
        * @return {RpcResponse}
        */setResultCode(e){return this.validateType(c,e),this.setParameter(KEY_RESULT_CODE,e),this}}C.KEY_SUCCESS="success",C.KEY_INFO="info",C.KEY_RESULT_CODE="resultCode";/*
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
    */ /**
     * @typedef {Enum} FunctionID
     * @property {Object} MAP
     */class p extends E{/**
         * @constructor 
         */constructor(){super()}/**
        * @return {Number}
        */static get ADD_COMMAND(){return p.MAP.AddCommand}/**
        * @return {Number}
        */static get ON_LANGUAGE_CHANGE(){return p.MAP.OnLanguageChange}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */static valueForString(e){return p.valueForStringInternal(e,p.MAP)}/**
        * Returns the key of the map with the corresponding value
        * @param {Number} value
        * @return {null|String} - Returns null if not found
        */static keyForValue(e){return p.keyForValueInternal(e,p.MAP)}}p.MAP=Object.freeze({AddCommand:5,OnLanguageChange:32778//TODO this needs to be completely filled out still
});/*
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
    */ /**
     * @typedef {Enum} ImageType
     * @property {Object} MAP
     */class L extends E{/**
        * @constructor
        */constructor(){super()}/**
         * @return {String} 
         */static get STATIC(){return L.MAP.STATIC}/**
         * @return {String} 
         */static get DYNAMIC(){return L.MAP.DYNAMIC}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */static valueForString(e){return L.valueForStringInternal(e,L.MAP)}}L.MAP=Object.freeze({STATIC:"STATIC",DYNAMIC:"DYNAMIC"});/*
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
    */ /**
     * @typedef {Enum} Language
     * @property {Object} MAP
     */class l extends E{/**
         * @constructor 
         */constructor(){super()}/**
         * @return {String} 
         */static get EN_SA(){return l.MAP.EN_SA}/**
         * @return {String} 
         */static get HE_IL(){return l.MAP.HE_IL}/**
         * @return {String} 
         */static get RO_RO(){return l.MAP.RO_RO}/**
         * @return {String} 
         */static get UK_UA(){return l.MAP.UK_UA}/**
         * @return {String} 
         */static get ID_ID(){return l.MAP.ID_ID}/**
         * @return {String} 
         */static get VI_VN(){return l.MAP.VI_VN}/**
         * @return {String} 
         */static get MS_MY(){return l.MAP.MS_MY}/**
         * @return {String} 
         */static get HI_IN(){return l.MAP.HI_IN}/**
         * @return {String} 
         */static get NL_BE(){return l.MAP.NL_BE}/**
         * @return {String} 
         */static get EL_GR(){return l.MAP.EL_GR}/**
         * @return {String} 
         */static get HU_HU(){return l.MAP.HU_HU}/**
         * @return {String} 
         */static get FI_FI(){return l.MAP.FI_FI}/**
         * @return {String} 
         */static get SK_SK(){return l.MAP.SK_SK}/**
         * @return {String} 
         */static get EN_US(){return l.MAP.EN_US}/**
         * @return {String} 
         */static get ES_MX(){return l.MAP.ES_MX}/**
         * @return {String} 
         */static get FR_CA(){return l.MAP.FR_CA}/**
         * @return {String} 
         */static get DE_DE(){return l.MAP.DE_DE}/**
         * @return {String} 
         */static get ES_ES(){return l.MAP.ES_ES}/**
         * @return {String} 
         */static get EN_GB(){return l.MAP.EN_GB}/**
         * @return {String} 
         */static get RU_RU(){return l.MAP.RU_RU}/**
         * @return {String} 
         */static get TR_TR(){return l.MAP.TR_TR}/**
         * @return {String} 
         */static get PL_PL(){return l.MAP.PL_PL}/**
         * @return {String} 
         */static get FR_FR(){return l.MAP.FR_FR}/**
         * @return {String} 
         */static get IT_IT(){return l.MAP.IT_IT}/**
         * @return {String} 
         */static get SV_SE(){return l.MAP.SV_SE}/**
         * @return {String} 
         */static get PT_PT(){return l.MAP.PT_PT}/**
         * @return {String} 
         */static get NL_NL(){return l.MAP.NL_NL}/**
         * @return {String} 
         */static get EN_AU(){return l.MAP.EN_AU}/**
         * @return {String} 
         */static get ZH_CN(){return l.MAP.ZH_CN}/**
         * @return {String} 
         */static get ZH_TW(){return l.MAP.ZH_TW}/**
         * @return {String} 
         */static get JA_JP(){return l.MAP.JA_JP}/**
         * @return {String} 
         */static get AR_SA(){return l.MAP.AR_SA}/**
         * @return {String} 
         */static get KO_KR(){return l.MAP.KO_KR}/**
         * @return {String} 
         */static get PT_BR(){return l.MAP.PT_BR}/**
         * @return {String} 
         */static get CS_CZ(){return l.MAP.CS_CZ}/**
         * @return {String} 
         */static get DA_DK(){return l.MAP.DA_DK}/**
         * @return {String} 
         */static get NO_NO(){return l.MAP.NO_NO}/**
         * @return {String} 
         */static get EN_IN(){return l.MAP.EN_IN}/**
         * @return {String} 
         */static get TH_TH(){return l.MAP.TH_TH}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */static valueForString(e){for(let _ in l.MAP)if(l.MAP[_]===e)return l.MAP[_];return null}}l.MAP=Object.freeze({EN_SA:"EN-SA",HE_IL:"HE-IL",RO_RO:"RO-RO",UK_UA:"UK-UA",ID_ID:"ID-ID",VI_VN:"VI-VN",MS_MY:"MS-MY",HI_IN:"HI-IN",NL_BE:"NL-BE",EL_GR:"EL-GR",HU_HU:"HU-HU",FI_FI:"FI-FI",SK_SK:"SK-SK",EN_US:"EN-US",ES_MX:"ES-MX",FR_CA:"FR-CA",DE_DE:"DE-DE",ES_ES:"ES-ES",EN_GB:"EN-GB",RU_RU:"RU-RU",TR_TR:"TR-TR",PL_PL:"PL-PL",FR_FR:"FR-FR",IT_IT:"IT-IT",SV_SE:"SV-SE",PT_PT:"PT-PT",NL_NL:"NL-NL",EN_AU:"EN-AU",ZH_CN:"ZH-CN",ZH_TW:"ZH-TW",JA_JP:"JA-JP",AR_SA:"AR-SA",KO_KR:"KO-KR",PT_BR:"PT-BR",CS_CZ:"CS-CZ",DA_DK:"DA-DK",NO_NO:"NO-NO",EN_IN:"EN-IN",TH_TH:"TH-TH"});/*
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
    */class m extends r{/**
        * @constructor
        */constructor(e){super(e)}/**
        * @param {String} value
        * @return {Image}
        */setValue(e){return this.setParameter(m.KEY_VALUE,e),this}/**
        * @return {Number}
        */getValue(){return this.getParameter(m.KEY_VALUE)}/**
        * @param {ImageType} type
        * @return {Image}
        */setImageType(e){return this.validateType(L,e),this.setParameter(m.KEY_IMAGE_TYPE,e),this}/**
        * @return {ImageType}
        */getImageType(){return this.getObject(m,m.KEY_IMAGE_TYPE)}/**
        * @param {Boolean} isTemplate
        * @return {Image}
        */setIsTemplate(e){return this.setParameter(m.KEY_IS_TEMPLATE,e),this}/**
        * @return {Boolean}
        */getIsTemplate(){return this.getParameter(m.KEY_IS_TEMPLATE)}}m.KEY_VALUE="value",m.KEY_IMAGE_TYPE="imageType",m.KEY_IS_TEMPLATE="isTemplate";/*
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
    */class u extends r{/**
        * @constructor
        */constructor(e){super(e)}/**
        * @param {Number} id
        * @return {MenuParams}
        */setParentID(e){return this.setParameter(u.KEY_PARENT_ID,e),this}/**
        * @return {Number}
        */getParentID(){return this.getParameter(u.KEY_PARENT_ID)}/**
        * @param {Number} position
        * @return {MenuParams}
        */setPosition(e){return this.setParameter(u.KEY_POSITION,e),this}/**
        * @return {Number}
        */getPosition(){return this.getParameter(u.KEY_POSITION)}/**
        * @param {String} menuName
        * @return {MenuParams}
        */setMenuName(e){return this.setParameter(u.KEY_MENU_NAME,e),this}/**
        * @param {String}
        */getMenuName(){return this.getParameter(u.KEY_MENU_NAME)}}u.KEY_PARENT_ID="parentID",u.KEY_POSITION="position",u.KEY_MENU_NAME="menuName";/*
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
    */class g extends O{/**
        * @constructor
        */constructor(e){super(e),this.setFunctionName(p.ADD_COMMAND)}/**
        * @param {Number} id
        * @return {AddCommand}
        */setCmdID(e){return this.setParameter(g.KEY_CMD_ID,e),this}/**
        * @return {Number}
        */getCmdID(){return this.getParameter(g.KEY_CMD_ID)}/**
        * @param {MenuParams} menuParams
        * @return {AddCommand}
        */setMenuParams(e){return this.validateType(u,e),this.setParameter(g.KEY_MENU_PARAMS,e),this}/**
        * @return {Number}
        */getMenuParams(){return this.getObject(u,g.KEY_MENU_PARAMS)}/**
        * @param {Array<String>} vrCommands
        * @return {AddCommand}
        */setVrCommands(e){return this.setParameter(g.KEY_VR_COMMANDS,e),this}/**
        * @return {Array<String>}
        */getVrCommands(){return this.getParameter(g.KEY_VR_COMMANDS)}/**
        * @param {Image} icon
        * @return {AddCommand}
        */setCmdIcon(e){return this.validateType(m,e),this.setParameter(g.KEY_CMD_ICON,e),this}/**
        * @return {Image}
        */getCmdIcon(){return this.getObject(m,g.KEY_CMD_ICON)}}g.KEY_CMD_ICON="cmdIcon",g.KEY_MENU_PARAMS="menuParams",g.KEY_CMD_ID="cmdID",g.KEY_VR_COMMANDS="vrCommands";/*
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
    */class U extends D{/**
        * @constructor
        */constructor(e){super(e),this.setFunctionName(p.ON_LANGUAGE_CHANGE)}/**
        * @param {Language} langauge
        * @return {OnLanguageChange}
        */setLanguage(e){return this.validateType(l,language),this.setParameter(U.KEY_LANGUAGE,language),this}/**
        * @return {Language}
        */getLanguage(){return this.getObject(l,U.KEY_LANGUAGE)}/**
        * @param {Language} langauge
        * @return {OnLanguageChange}
        */setHMIDisplayLanguage(e){return this.validateType(l,e),this.setParameter(U.KEY_HMI_DISPLAY_LANGUAGE,e),this}/**
        * @return {Language}
        */getHMIDisplayLanguage(){return this.getObject(l,U.KEY_HMI_DISPLAY_LANGUAGE)}}U.KEY_LANGUAGE="language",U.KEY_HMI_DISPLAY_LANGUAGE="hmiDisplayLanguage";/*
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
     */class f{//TODO check to see if it's better to use '==' or '==='
/**
         * @constructor
         */constructor(){this.reset()}/**
         * Changes all internal members to default
         */reset(){this._state=f.START_STATE,this._version=0,this._encryption=!1,this._frameType=n.SINGLE,this._serviceType=0,this._controlFrameInfo=null,this._sessionID=null,this._dumpSize=null,this._dataLength=0,this._messageID=0,this._payload=null}/**
         * @return {Number} - State represented by a Number
         */getState(){return this._state}/**
         * @return {SdlPacket} - Returns null if not complete
         */getFormedPacket(){return this._state==f.FINISHED_STATE?new A(this._version,this._encryption,this._frameType,this._serviceType,this._controlFrameInfo,this._sessionID,this._dataLength,this._messageID,this._payload):null}/**
         * @param {Number} data - Represents a byte
         * @return {Boolean}
         */handleByte(e){return this._state=this._transitionOnInput(e,this._state),this._state!=f.ERROR_STATE}/**
         * @param {Number} rawByte - Represents a byte
         * @param {Number} state
         * @return {Boolean}
         * @private
         */_transitionOnInput(e,_){switch(_){case f.START_STATE:return(this._version=(e&f.VERSION_MASK)>>4,0==this._version)?f.ERROR_STATE:(this._encryption=1==(e&f.ENCRYPTION_MASK)>>3,this._frameType=e&f.FRAME_TYPE_MASK,(1>this._version||5<this._version)&&this._frameType!=A.FRAME_TYPE_CONTROL?f.ERROR_STATE:this._frameType<A.FRAME_TYPE_CONTROL||this._frameType>A.FRAME_TYPE_CONSECUTIVE?f.ERROR_STATE:f.SERVICE_TYPE_STATE);case f.SERVICE_TYPE_STATE:return this._serviceType=255&e,f.CONTROL_FRAME_INFO_STATE;case f.CONTROL_FRAME_INFO_STATE:switch(this._controlFrameInfo=255&e,this._frameType){case A.FRAME_TYPE_CONTROL:break;case A.FRAME_TYPE_SINGLE:case A.FRAME_TYPE_FIRST:if(0!=this._controlFrameInfo)return f.ERROR_STATE;break;case A.FRAME_TYPE_CONSECUTIVE://It might be a good idea to check packet sequence numbers here
break;default:return f.ERROR_STATE;}return f.SESSION_ID_STATE;case f.SESSION_ID_STATE:return this._sessionID=255&e,f.DATA_SIZE_1_STATE;case f.DATA_SIZE_1_STATE://Shift 3 bytes x 8 bits
return this._dataLength+=(255&e)<<24,f.DATA_SIZE_2_STATE;case f.DATA_SIZE_2_STATE://Sift 2 bytes x 8 bits
return this._dataLength+=(255&e)<<16,DATA_SIZE_3_STATE;case f.DATA_SIZE_3_STATE://Sift 1 byte x 8 bits
return this._dataLength+=(255&e)<<8,DATA_SIZE_4_STATE;case f.DATA_SIZE_4_STATE://We should have data length now for the pump state
switch(this._dataLength+=255&e,this._frameType){//If all is correct we should break out of this switch statement
case A.FRAME_TYPE_SINGLE:case A.FRAME_TYPE_CONSECUTIVE:break;case A.FRAME_TYPE_CONTROL://Ok, well here's some interesting bit of knowledge. Because the start session request is from the phone with no knowledge of version it sends out
//a v1 packet. THEREFORE there is no message id field. **** Now you know and knowing is half the battle ****
if(1==this._version&&this._controlFrameInfo==A.FRAME_INFO_START_SERVICE){if(0==this._dataLength)return f.FINISHED_STATE;//We are done if we don't have any payload
if(this._dataLength<=R.V1_V2_MTU_SIZE-R.V1_HEADER_SIZE)this._payload=new byte[this._dataLength];else return f.ERROR_STATE;return this._dumpSize=this._dataLength,f.DATA_PUMP_STATE}break;case A.FRAME_TYPE_FIRST:if(dataLength==f.FIRST_FRAME_DATA_SIZE)break;default:return f.ERROR_STATE;}if(1==this._version){//Version 1 packets will not have message id's
if(0==this._dataLength)return f.FINISHED_STATE;//We are done if we don't have any payload
if(this._dataLength<=R.V1_V2_MTU_SIZE-R.V1_HEADER_SIZE)this._payload=new Uint8Array(this._dataLength);else return f.ERROR_STATE;return this._dumpSize=this._dataLength,f.DATA_PUMP_STATE}return f.MESSAGE_1_STATE;case f.MESSAGE_1_STATE:// Shift 3 bytes x 8 bits
return this._messageID+=(255&e)<<24,f.MESSAGE_2_STATE;case f.MESSAGE_2_STATE:// Shift 2 bytes x 8 bits
return this._messageID+=(255&e)<<16,f.MESSAGE_3_STATE;case f.MESSAGE_3_STATE:// Shift 1 byte x 8 bits
return this._messageID+=(255&e)<<8,f.MESSAGE_4_STATE;case f.MESSAGE_4_STATE:if(this._messageID+=255&e,0==this._dataLength)return f.FINISHED_STATE;//We are done if we don't have any payload
try{this._payload=new Uint8Array(this._dataLength)}catch(e){//Possible Out of Memory error if data length is invalid
return f.ERROR_STATE}return dumpSize=dataLength,f.DATA_PUMP_STATE;case f.DATA_PUMP_STATE://Do we have any more bytes to read in?
return this._payload[this._dataLength-this._dumpSize]=e,this._dumpSize--,0<this._dumpSize?f.DATA_PUMP_STATE:0==this._dumpSize?f.FINISHED_STATE:f.ERROR_STATE;case f.FINISHED_STATE:default://Should not be handling any other bytes while in the finished state
return f.ERROR_STATE;}}}f.START_STATE=0,f.SERVICE_TYPE_STATE=2,f.CONTROL_FRAME_INFO_STATE=3,f.SESSION_ID_STATE=4,f.DATA_SIZE_1_STATE=5,f.DATA_SIZE_2_STATE=6,f.DATA_SIZE_3_STATE=7,f.DATA_SIZE_4_STATE=8,f.MESSAGE_1_STATE=9,f.MESSAGE_2_STATE=10,f.MESSAGE_3_STATE=11,f.MESSAGE_4_STATE=12,f.DATA_PUMP_STATE=13,f.FINISHED_STATE=255,f.ERROR_STATE=-1,f.FIRST_FRAME_DATA_SIZE=8,f.VERSION_MASK=240,f.ENCRYPTION_MASK=8,f.FRAME_TYPE_MASK=7;/*
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
    */ /**
     * @typedef {Enum} TransportType
     * @property {Object} MAP
     */class F extends E{/**
        * @constructor
        */constructor(){super()}/**
        * @param {String}
        */static get WEBSOCKET_SERVER(){return F.MAP.WEBSOCKET_SERVER}/**
        * @param {String}
        */static get WEBSOCKET_CLIENT(){return F.MAP.WEBSOCKET_CLIENT}/**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */static valueForString(e){return F.valueForStringInternal(e,F.MAP)}}F.MAP=Object.freeze({WEBSOCKET_SERVER:"WEBSOCKET_SERVER",WEBSOCKET_CLIENT:"WEBSOCKET_CLIENT",CUSTOM:"CUSTOM"});return{manager:{lifecycle:{LifecycleManager:/*
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
    */class{}/*
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
    */}},protocol:{BinaryFrameHeader:/*
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
    */class{/**
        * @constructor
        * @param {RpcType} rpcType - An RPC Enum  representing the type of RPC being described (Request, Response, Notification)
        * @param {FunctionID} functionId - A FunctionID Enum representing the RPC function that is being described
        * @param {Number} correlationId - A number representing an ID to correlate a request and response pair
        * @param {Number} jsonSize - A number representing the size of a JSON object
        */constructor(e,_,E,n){return this._rpcType=e,this._functionId=_,this._correlationId=E,this._jsonSize=n,this._jsonData=null,this._bulkData=null,this}/**
        * Takes in a byte array and transforms it to an instance of this class
        * @param {Uint8Array} binHeader
        * @return {BinaryFrameHeader} an instance of this class from parsing the supplied Uint8Array 
        */fromBinaryHeader(e){}// TODO
/**
        * Uses the private members of this class to construct a byte array header
        * @return {Uint8Array} - A byte array
        */assembleHeaderBytes(){}// TODO
/**
        * @param {RpcType} rpcType - An RPC Enum  representing the type of RPC being described (Request, Response, Notification)
        */setRPCType(e){this._rpcType=e}/**
        * @return {RpcType} rpcType - An RPC Enum  representing the type of RPC being described (Request, Response, Notification)
        */getRPCType(){return this._rpcType}/**
        * @param {FunctionID} functionId - A FunctionID Enum representing the RPC function that is being described

        */setFunctionId(e){this._functionId=e}/**
        * @return {FunctionID} functionId - A FunctionID Enum representing the RPC function that is being described
        */getFunctionId(){return this._functionId}/**
        * @param {Number} correlationId - A number representing an ID to correlate a request and response pair
        */setCorrelationId(e){this._correlationId=e}/**
        * @return {Number} correlationId - A number representing an ID to correlate a request and response pair

        */getCorrelationId(){return this._correlationId}/**
        * @param {Number} size - A number representing the size of a JSON object
        */setJSONSize(e){this._jsonSize=e}/**
        * @return {Number} - A number representing the size of a JSON object
        */getJSONSize(){return _jsonSize}/**
        * @param {Number} data - A byte array representing JSON data
        */setJSONData(e){}// TODO
/**
        * @return {Uint8Array} - A byte array representing JSON data
        */getJSONData(){return this._jsonData}/**
        * @param {Uint8Array} data - A byte array representing bulk data
        */setBulkData(e){this._bulkData=e}/**
        * @return {Uint8Array} - A byte array representing bulk data
        */getBulkData(){return this._bulkData}},MessageFrameAssembler:_,SdlPacket:A,SdlProtocolBase:R,SdlProtocolListener:a,enums:{ControlFrameTags:s,FrameType:n,ServiceType:T}},rpc:{RpcMessage:t,RpcNotification:D,RpcRequest:O,RpcResponse:C,RpcStruct:r,enums:{FunctionID:p,ImageType:L,Language:l,Result:c,RpcType:N},messages:{AddCommand:g,AddCommandResponse:/*
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
    */class extends C{/**
        * @constructor
        */constructor(e){super(e),this.setFunctionName(p.ADD_COMMAND)}},OnLanguageChange:U},structs:{Image:m,MenuParams:u}},session:{SdlSession:/*
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
    */ /**
     * @typedef {Object} SdlSession
     * @property {Function} _setupSdlProtocolListener
     * @property {Function} start
     * @property {Function} endSession
     * @property {Function} addServiceListener
     * @property {Function} removeServiceListener
     * @property {Function} sendRpc
     */class{/**
         * @param {TransportConfigBase} baseTransportConfig 
         * @param {SdlSessionListener} sdlSessionListener 
         */constructor(e,_){this._serviceListeners=[],this._sdlSessionListener=_;let E=_setupSdlProtocolListener();this._sdlProtocol=new R(E)}/**
         * @return {SdlProtocolListener} 
         * @private
         */_setupSdlProtocolListener(){let e=new a;//TODO create all the functions that will be set for this listener
return e}start(){null!=this._sdlProtocol&&this._sdlProtocol.start()}endSession(){null!=this._sdlProtocol&&this._sdlProtocol.endSession()}/**
         * @param {SdlSessionListener} serviceListener 
         */addServiceListener(e){this._serviceListeners.push(e)}/**
         * @param {SdlSessionListener} serviceListener 
         */removeServiceListener(e){let _=this._serviceListeners.indexOf(e);0<=_&&this._serviceListeners.splice(_,1)}/**
         * @param {RpcMessage} rpcMessage 
         */sendRpc(e){}},SdlSessionListener:/*
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
    */ /**
     * @typedef {Object} SdlSessionListener
     */class{/**
    	 * @constructor
    	 */constructor(){//TODO add all callbacks
}}},transport:{SdlPsm:f,TransportBase://3 lowest bits
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
    */class{/**
         * @constructor
         * @param {BaseTransportConfig} baseTransportConfig
         * @param {TransportListener} transportListener
         */constructor(e,_){this._sdlPsm=new f,this._transportListener=_}start(){throw"start method must be overridden"}stop(){throw"stop method must be overridden"}/**
         * @param {SdlPacket} sdlPacket
         */sendPacket(e){throw"sendPacket method must be overridden"}}/*
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
    */,TransportConfigBase:class{/**
         * @constructor
         * @param {TransportType} transportType - enum
         */constructor(e){this._transportType=e}/**
         * @return {TransportType}
         */getTransportType(){return this._transportType}},TransportListener:S,TransportManagerBase:class{/**
         * @constructor
         * @param {BaseTransportConfig} baseTransportConfig
         * @param {TransportListener} transportListener
         */constructor(e,_){this._transportConfig=e,this._transportListener=_}onTransportConnected(){this._transportListener.onTransportConnected()}/**
         * @param {Function} func
         */onTransportDisconnected(e){this._transportListener.onTransportDisconnected()}/**
         * @param {Function} func
         */onError(e){this._transportListener.onError()}/**
         * @param {SdlPacket} sdlPacket
         */onPacketReceived(e){this._transportListener.onPacketReceived(e)}/**
         * @param {SdlPacket} sdlPacket
         */sendPacket(e){throw"sendPacket method must be overridden"}start(){throw"start method must be overridden"}stop(){throw"stop method must be overridden"}/**
         * @param {TransportType} transportType
         * @param {String} address
         */isConnected(e,_){throw"isConnected method must be overridden"}},enums:{TransportType:F}},util:{BitConverter:class{/**
    	 * @param {ArrayBuffer} bytes - byte array that will be converted to hex
    	 * @param {Number} offset - int optional, representing the offset to begin conversion at
    	 * @param {Number} length - int optional, representing number of bytes in array to convert
    	 * @return {String} the String containing converted hex values or null if byte array is null
    	 */arrayBufferToHex(e,_=0,E){}// TODO
/**
    	 * @param {String} hexString - the String containing converted hex values
    	 * @return {ArrayBuffer} byte array converted from input String or null if String is null
    	 */hexToArrayBuffer(e){}// TODO
/**
    	 * @param {ArrayBuffer} buffer - buffer that will be converted to int
         * @param {Number} offset - int optional, the offset shift
    	 * @return {Number} int converted from buffer or -1 if buffer is null
    	 */arrayBufferToInt32(e,_=0){// TODO
if(!e)return-1;let E=new DataView(e);return E.getUint32(_)}/**
    	 * @param {Number} value - the integer to be converted
    	 * @return {ArrayBuffer} buffer converted from input value
    	 */int32ToArrayBuffer(e){let _=new ArrayBuffer(4),E=new DataView(_);// Int32 has 4 bytes
return E.setUint32(0,e,!1),_}},Bson:/*
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
    */class{/**
         * Serialize a Javascript object.
         * 
         * @param object The Javascript object to serialize.
         * @param options Serialize options.
         * @return The Buffer object containing the serialized object.
         */static serialize(_,E){// console.log(`)`);
return console.log(e),e.serialize(_,E)}/**
         * Deserialize data as BSON.
         * 
         * @param buffer The buffer containing the serialized set of BSON documents.
         * @param options Deserialize options.
         * @returns The deserialized Javascript Object.
         */static deserialize(_,E){return console.log(e),e.deserialize(_,E)}}/*
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
    */,// BsonBundle,
// BsonESM,
Enum:E,JsonRpcMarshaller:class{constructor(){}/*
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



        */ /**
         * 
         * @param {RpcMessage} rpcMessage 
         */static marshall(e){try{let _=e.getParameters(),E=JSON.stringify(_),n=new TextEncoder;//TODO do we need to go through each param and do this?
return n.encode(E)}catch(e){//TODO print exception
}return null}}/*
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
    */,Version:o}}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0RMLmpzIiwic291cmNlcyI6WyIuLi9zcmMvcHJvdG9jb2wvTWVzc2FnZUZyYW1lQXNzZW1ibGVyLmpzIiwiLi4vc3JjL3V0aWwvRW51bS5qcyIsIi4uL3NyYy9wcm90b2NvbC9lbnVtcy9GcmFtZVR5cGUuanMiLCIuLi9zcmMvcHJvdG9jb2wvU2RsUGFja2V0LmpzIiwiLi4vc3JjL3JwYy9ScGNTdHJ1Y3QuanMiLCIuLi9zcmMvcnBjL1JwY01lc3NhZ2UuanMiLCIuLi9zcmMvcHJvdG9jb2wvZW51bXMvU2VydmljZVR5cGUuanMiLCIuLi9zcmMvcHJvdG9jb2wvU2RsUHJvdG9jb2xMaXN0ZW5lci5qcyIsIi4uL3NyYy90cmFuc3BvcnQvVHJhbnNwb3J0TGlzdGVuZXIuanMiLCIuLi9zcmMvdHJhbnNwb3J0L1RyYW5zcG9ydENvbmZpZ0Jhc2UuanMiLCIuLi9zcmMvdXRpbC9WZXJzaW9uLmpzIiwiLi4vc3JjL3Byb3RvY29sL1NkbFByb3RvY29sQmFzZS5qcyIsIi4uL3NyYy9wcm90b2NvbC9lbnVtcy9Db250cm9sRnJhbWVUYWdzLmpzIiwiLi4vc3JjL3JwYy9lbnVtcy9ScGNUeXBlLmpzIiwiLi4vc3JjL3JwYy9ScGNOb3RpZmljYXRpb24uanMiLCIuLi9zcmMvcnBjL1JwY1JlcXVlc3QuanMiLCIuLi9zcmMvcnBjL2VudW1zL1Jlc3VsdC5qcyIsIi4uL3NyYy9ycGMvUnBjUmVzcG9uc2UuanMiLCIuLi9zcmMvcnBjL2VudW1zL0Z1bmN0aW9uSUQuanMiLCIuLi9zcmMvcnBjL2VudW1zL0ltYWdlVHlwZS5qcyIsIi4uL3NyYy9ycGMvZW51bXMvTGFuZ3VhZ2UuanMiLCIuLi9zcmMvcnBjL3N0cnVjdHMvSW1hZ2UuanMiLCIuLi9zcmMvcnBjL3N0cnVjdHMvTWVudVBhcmFtcy5qcyIsIi4uL3NyYy9ycGMvbWVzc2FnZXMvQWRkQ29tbWFuZC5qcyIsIi4uL3NyYy9ycGMvbWVzc2FnZXMvT25MYW5ndWFnZUNoYW5nZS5qcyIsIi4uL3NyYy90cmFuc3BvcnQvU2RsUHNtLmpzIiwiLi4vc3JjL3RyYW5zcG9ydC9lbnVtcy9UcmFuc3BvcnRUeXBlLmpzIiwiLi4vYXBwLmpzIiwiLi4vc3JjL21hbmFnZXIvbGlmZWN5Y2xlL0xpZmVjeWNsZU1hbmFnZXIuanMiLCIuLi9zcmMvdXRpbC9CaXRDb252ZXJ0ZXIuanMiLCIuLi9zcmMvcHJvdG9jb2wvQmluYXJ5RnJhbWVIZWFkZXIuanMiLCIuLi9zcmMvcnBjL21lc3NhZ2VzL0FkZENvbW1hbmRSZXNwb25zZS5qcyIsIi4uL3NyYy9zZXNzaW9uL1NkbFNlc3Npb24uanMiLCIuLi9zcmMvc2Vzc2lvbi9TZGxTZXNzaW9uTGlzdGVuZXIuanMiLCIuLi9zcmMvdHJhbnNwb3J0L1RyYW5zcG9ydEJhc2UuanMiLCIuLi9zcmMvdHJhbnNwb3J0L1RyYW5zcG9ydE1hbmFnZXJCYXNlLmpzIiwiLi4vc3JjL3V0aWwvQnNvbi5qcyIsIi4uL3NyYy91dGlsL0pzb25ScGNNYXJzaGFsbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vKipcbiAqIFRoaXMgY2xhc3Mgd2lsbCBhc3NlbWJsZSB0aGUgZGlmZmVyZW50IHR5cGVzIG9mIG1lc3NhZ2VzXG4gKi9cbmNsYXNzIE1lc3NhZ2VGcmFtZUFzc2VtYmxlcntcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKiBAcGFyYW0ge051bWJlcn0gaGVhZGVyU2l6ZVxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGhlYWRlclNpemU9OCwgY2FsbGJhY2spe1xuICAgICAgICBpZihjYWxsYmFjayA9PSBudWxsKXtcbiAgICAgICAgICAgIHRocm93IFwiQ2FsbGJhY2sgY2FuJ3QgYmUgbnVsbCBmb3IgTWVzc2FnZUZyYW1lQXNzZW1ibGVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FjY3VtdWxhdG9yID0gbnVsbDsgLy9UT0RPIGJ5dGUgYXJyYXkgb3V0cHV0IHN0cmVhbVxuICAgICAgICB0aGlzLl9oZWFkZXJzaXplID0gaGVhZGVyU2l6ZTtcbiAgICAgICAgdGhpcy5fdG90YWxTaXplID0gMDtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgKi9cbiAgICBoYW5kbGVGcmFtZShzZGxQYWNrZXQpe1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgKi9cbiAgICBoYW5kbGVNdWx0aUZyYW1lTWVzc2FnZUZyYW1lKHNkbFBhY2tldCl7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXRcbiAgICAqL1xuICAgIGhhbmRsZUZpcnN0RGF0YUZyYW1lKHNkbFBhY2tldCl7XG5cbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgKi9cbiAgICBoYW5kbGVSZW1haW5pbmdGcmFtZShzZGxQYWNrZXQpe1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IE1lc3NhZ2VGcmFtZUFzc2VtYmxlciB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jbGFzcyBFbnVtIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy8gaW50ZW50aW9uYWxseSBlbXB0eVxuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUga2V5IGZvciBhIGdpdmVuIHZhbHVlIGlmIHRoZSB2YWx1ZSBpcyBmb3VuZCB3aXRoaW4gdGhlIGtleTp2YWx1ZSBtYXBcbiAgICAqIEBwYXJhbSB2YWx1ZSAtIEEgcHJpbWl0aXZlIHZhbHVlIHRvIGZpbmQgaW4gdGhlIG1hcFxuICAgICogQHBhcmFtIG1hcCB7T2JqZWN0fSAtIEFuIG1hcCBvZiBzdHJpbmcgcHJvcGVydGllcyB0byBwcmltaXRpdmUgdmFsdWVzIFxuICAgICogQHJldHVybiB7bnVsbHxTdHJpbmd9IC0gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZFxuICAgICovXG4gICAgc3RhdGljIGtleUZvclZhbHVlSW50ZXJuYWwodmFsdWUsIG1hcCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gbWFwKSB7XG4gICAgICAgICAgICBpZiAobWFwW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gdmFsdWUgaWYgdGhlIHZhbHVlIGlzIGZvdW5kIHdpdGhpbiB0aGUga2V5OnZhbHVlIG1hcFxuICAgICogQHBhcmFtIHZhbHVlIC0gQSBwcmltaXRpdmUgdmFsdWUgdG8gZmluZCBpbiB0aGUgbWFwXG4gICAgKiBAcGFyYW0gbWFwIHtPYmplY3R9IC0gQW4gbWFwIG9mIHN0cmluZyBwcm9wZXJ0aWVzIHRvIHByaW1pdGl2ZSB2YWx1ZXMgXG4gICAgKiBAcmV0dXJuIHsqfSAtIFJldHVybnMgYSB2YWx1ZSBpZiBmb3VuZCwgb3IgbnVsbCBpZiBub3QgZm91bmRcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZ0ludGVybmFsKHZhbHVlLCBtYXApIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIG1hcCkge1xuICAgICAgICAgICAgaWYgKG1hcFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXBba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQSBtZXRob2QgZm9yIHN1YmNsYXNzZXMgdG8gaW1wbGVtZW50IHRoYXQgZG9lcyB3aGF0IGtleUZvclZhbHVlSW50ZXJuYWwgZG9lc1xuICAgICogQHBhcmFtIHZhbHVlIC0gQSBwcmltaXRpdmUgdmFsdWUgdG8gZmluZCBpbiB0aGUgbWFwIG9mIHRoZSBzdWJjbGFzc1xuICAgICogQHJldHVybiB7Kn0gLSBSZXR1cm5zIGEgdmFsdWUgaWYgZm91bmQsIG9yIG51bGwgaWYgbm90IGZvdW5kXG4gICAgKi9cbiAgICB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICB0aHJvdyBcIm1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEVudW0gfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0VudW19IEZyYW1lVHlwZVxuICogQHByb3BlcnR5IHtPYmplY3R9IE1BUFxuICovXG5jbGFzcyBGcmFtZVR5cGUgZXh0ZW5kcyBFbnVtIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgQ09OVFJPTCgpIHtcbiAgICAgICAgcmV0dXJuIEZyYW1lVHlwZS5NQVAuQ09OVFJPTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgRklSU1QoKSB7XG4gICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQLkZJUlNUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBDT05TRUNVVElWRSgpIHtcbiAgICAgICAgcmV0dXJuIEZyYW1lVHlwZS5NQVAuQ09OU0VDVVRJVkU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IFNJTkdMRSgpIHtcbiAgICAgICAgcmV0dXJuIEZyYW1lVHlwZS5NQVAuU0lOR0xFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfE51bWJlcn0gLSBSZXR1cm5zIG51bGwgaWYgdGhlIGVudW0gdmFsdWUgZG9lc24ndCBleGlzdFxuICAgICovXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBGcmFtZVR5cGUuTUFQKSB7XG4gICAgICAgICAgICBpZiAoRnJhbWVUeXBlLk1BUFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBGcmFtZVR5cGUuTUFQW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbkZyYW1lVHlwZS5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgJ0NPTlRST0wnOiAweDAwLFxuICAnRklSU1QnOiAweDAyLFxuICAnQ09OU0VDVVRJVkUnOiAweDAzLFxuICAnU0lOR0xFJzogMHgwMSxcbn0pO1xuXG5leHBvcnQgeyBGcmFtZVR5cGUgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBGcmFtZVR5cGUgfSBmcm9tICcuL2VudW1zL0ZyYW1lVHlwZS5qcyc7XG5cbi8vVE9ETyBhZGQgbW9yZSBwcm9wZXJ0aWVzXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2RsUGFja2V0XG4gKiBAcHJvcGVydHkge251bWJlcn0gRVhUUkFfUEFSQ0VMX0RBVEFfTEVOR1RIXG4gKiBAcHJvcGVydHkge251bWJlcn0gSEVBREVSX1NJWkVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBIRUFERVJfU0laRV9WMVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEVOQ1JZUFRJT05fTUFTS1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFNFUlZJQ0VfVFlQRV9DT05UUk9MXG4gKiBAcHJvcGVydHkge251bWJlcn0gU0VSVklDRV9UWVBFX1JQQ1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFNFUlZJQ0VfVFlQRV9QQ01cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTRVJWSUNFX1RZUEVfVklERU9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTRVJWSUNFX1RZUEVfQlVMS19EQVRBXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19IRUFSVF9CRUFUXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19TVEFSVF9TRVJWSUNFXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19TVEFSVF9TRVJWSUNFX0FDS1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fU1RBUlRfU0VSVklDRV9OQUtcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX0VORF9TRVJWSUNFXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19FTkRfU0VSVklDRV9BQ0tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX0VORF9TRVJWSUNFX05BS1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fUkVHSVNURVJfU0VDT05EQVJZX1RSQU5TUE9SVFxuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fUkVHSVNURVJfU0VDT05EQVJZX1RSQU5TUE9SVF9BQ0tcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlRfTkFLXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19UUkFOU1BPUlRfRVZFTlRfVVBEQVRFXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19TRVJWSUNFX0RBVEFfQUNLXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19IRUFSVF9CRUFUX0FDS1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEZSQU1FX0lORk9fRklOQUxfQ09OTkVTQ1VUSVZFX0ZSQU1FXG4gKiBAcHJvcGVydHkge251bWJlcn0gRlJBTUVfSU5GT19SRVNFUlZFRFxuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRWZXJzaW9uXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRFbmNyeXB0aW9uXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTZXJ2aWNlVHlwZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0RnJhbWVJbmZvXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXRTZXNzaW9uSURcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldE1lc3NhZ2VJRFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0RGF0YVNpemVcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldFBheWxvYWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFBheWxvYWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldEVuY3J5cHRpb25CaXRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldEZyYW1lVHlwZVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gdG9VaW50OEFycmF5XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSB0b1N0cmluZ1xuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gY29uc3RydWN0UGFja2V0XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBwdXRUYWdcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldFRhZ1xuICovXG5cbmNsYXNzIFNkbFBhY2tldCB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gLSBQcm90b2NvbCB2ZXJzaW9uIHRvIHVzZVxuICAgICogQHBhcmFtIHtCb29sZWFufSBlbmNyeXB0aW9uIC0gV2hldGhlciBvciBub3QgdGhlIHBheWxvYWQgaW4gdGhpcyBwYWNrZXQgaXMgZW5jcnlwdGVkXG4gICAgKiBAcGFyYW0ge0ZyYW1lVHlwZX0gZnJhbWVUeXBlIC0gQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBwYWNrZXQgZnJhbWUgdHlwZVxuICAgICogQHBhcmFtIHtTZXJ2aWNlVHlwZX0gc2VydmljZVR5cGUgLSBUaGUgc2VydmljZSB0aGF0IHRoaXMgcGFja2V0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyYW1lSW5mbyAtIFNwZWNpZmljIGZyYW1lIGluZm8gcmVsYXRlZCB0byB0aGlzIHBhY2tldFxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHNlc3Npb25JRCAtIElEIHRoaXMgcGFja2V0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGFTaXplIC0gU2l6ZSBvZiB0aGUgcGF5bG9hZCB0aGF0IHdpbGwgYmUgYWRkZWRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBtZXNzYWdlSUQgLSBJRCBvZiB0aGlzIHNwZWNpZmljIHBhY2tldFxuICAgICogQHBhcmFtIHtVaW50OEFycmF5fSBwYXlsb2FkIC0gUmF3IGRhdGEgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBwYWNrZXQgKFJQQyBtZXNzYWdlLCByYXcgYnl0ZXMsIGV0YylcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXRcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBieXRlc1RvV3JpdGVcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHZlcnNpb24gPSAxLCBlbmNyeXB0aW9uID0gZmFsc2UsIGZyYW1lVHlwZSA9IC0xLCBzZXJ2aWNlVHlwZSA9IC0xLCBmcmFtZUluZm8gPSAtMSwgc2Vzc2lvbklEID0gMCwgZGF0YVNpemUgPSAwLCBtZXNzYWdlSUQgPSAwLCBwYXlsb2FkID0gbnVsbCwgb2Zmc2V0ID0gMCwgYnl0ZXNUb1dyaXRlID0gMCkge1xuICAgICAgICB0aGlzLl92ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5fZW5jcnlwdGlvbiA9IGVuY3J5cHRpb247XG4gICAgICAgIHRoaXMuX2ZyYW1lVHlwZSA9IGZyYW1lVHlwZTtcbiAgICAgICAgdGhpcy5fc2VydmljZVR5cGUgPSBzZXJ2aWNlVHlwZTtcbiAgICAgICAgdGhpcy5fZnJhbWVJbmZvID0gZnJhbWVJbmZvO1xuICAgICAgICB0aGlzLl9zZXNzaW9uSUQgPSBzZXNzaW9uSUQ7XG4gICAgICAgIHRoaXMuX2RhdGFTaXplID0gZGF0YVNpemU7XG4gICAgICAgIHRoaXMuX21lc3NhZ2VJRCA9IG1lc3NhZ2VJRDtcbiAgICAgICAgdGhpcy5fcGF5bG9hZCA9IHBheWxvYWQ7XG4gICAgICAgIHRoaXMuX29mZnNldCA9IG9mZnNldDtcbiAgICAgICAgdGhpcy5fYnl0ZXNUb1dyaXRlID0gYnl0ZXNUb1dyaXRlO1xuXG4gICAgICAgIHRoaXMuX2Jzb25QYXlsb2FkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChwYXlsb2FkICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9wYXlsb2FkID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZXNUb1dyaXRlKTtcbiAgICAgICAgICAgIHRoaXMuX3BheWxvYWQgPSB0aGlzLl9wYXlsb2FkLnNsaWNlKG9mZnNldCwgYnl0ZXNUb1dyaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gUHJvdG9jb2wgdmVyc2lvbiB1c2VkIGJ5IHRoaXMgcGFja2V0XG4gICAgKi9cbiAgICBnZXRWZXJzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmVyc2lvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59IC0gV2hldGhlciBvciBub3QgdGhlIHBheWxvYWQgaW4gdGhpcyBwYWNrZXQgaXMgZW5jcnlwdGVkXG4gICAgKi9cbiAgICBnZXRFbmNyeXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZW5jcnlwdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1NlcnZpY2VUeXBlfSAtIFRoZSBzZXJ2aWNlIHRoYXQgdGhpcyBwYWNrZXQgaXMgYXNzb2NpYXRlZCB3aXRoXG4gICAgKi9cbiAgICBnZXRTZXJ2aWNlVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZpY2VUeXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIFNwZWNpZmljIGZyYW1lIGluZm8gcmVsYXRlZCB0byB0aGlzIHBhY2tldFxuICAgICovXG4gICAgZ2V0RnJhbWVJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnJhbWVJbmZvO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIElEIHRoaXMgcGFja2V0IGlzIGFzc29jaWF0ZWQgd2l0aFxuICAgICovXG4gICAgZ2V0U2Vzc2lvbklEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2Vzc2lvbklEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIElEIG9mIHRoaXMgc3BlY2lmaWMgcGFja2V0XG4gICAgKi9cbiAgICBnZXRNZXNzYWdlSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9tZXNzYWdlSUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gU2l6ZSBvZiB0aGUgcGF5bG9hZCB0aGF0IHdpbGwgYmUgYWRkZWRcbiAgICAqL1xuICAgIGdldERhdGFTaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YVNpemU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fSBwYXlsb2FkIC0gUmF3IGRhdGEgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBwYWNrZXQgKFJQQyBtZXNzYWdlLCByYXcgYnl0ZXMsIGV0YylcbiAgICAqL1xuICAgIHNldFBheWxvYWQocGF5bG9hZCkge1xuICAgICAgICB0aGlzLl9wYXlsb2FkID0gcGF5bG9hZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IC0gUmF3IGRhdGEgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBwYWNrZXQgKFJQQyBtZXNzYWdlLCByYXcgYnl0ZXMsIGV0YylcbiAgICAqL1xuICAgIGdldFBheWxvYWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXlsb2FkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIFJldHVybnMgYSBudW1iZXIgcmVwcmVzZW50aW5nIGEgYnl0ZSBtYXNrIGRlcGVuZGluZyBvbiB0aGUgYm9vbGVhbiB2YWx1ZVxuICAgICovXG4gICAgZ2V0RW5jcnlwdGlvbkJpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VuY3J5cHRpb24gPyBTZGxQYWNrZXQuRU5DUllQVElPTl9NQVNLIDogMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge0ZyYW1lVHlwZX0gLSBBIG51bWJlciByZXByZXNlbnRpbmcgdGhlIHBhY2tldCBmcmFtZSB0eXBlXG4gICAgKi9cbiAgICBnZXRGcmFtZVR5cGUoKSB7XG4gICAgICAgIGlmIChGcmFtZVR5cGUudmFsdWVGb3JTdHJpbmcodGhpcy5fZnJhbWVUeXBlKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZyYW1lVHlwZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBGcmFtZVR5cGUuU0lOR0xFO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fSAtIFJhdyBkYXRhIHRoYXQgd2lsbCBiZSBhdHRhY2hlZCB0byB0aGUgcGFja2V0IChSUEMgbWVzc2FnZSwgcmF3IGJ5dGVzLCBldGMpXG4gICAgKi9cbiAgICB0b1VpbnQ4QXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RQYWNrZXQodGhpcy5fdmVyc2lvbiwgdGhpcy5fZW5jcnlwdGlvbiwgdGhpcy5fZnJhbWVUeXBlLCB0aGlzLl9zZXJ2aWNlVHlwZSwgdGhpcy5fZnJhbWVJbmZvLCB0aGlzLl9zZXNzaW9uSUQsIHRoaXMuX2RhdGFTaXplLCB0aGlzLl9tZXNzYWdlSUQsIHRoaXMuX3BheWxvYWQpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IC0gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBwYWNrZXRcbiAgICAqL1xuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBsZXQgb3V0cHV0ID0gXCIqKioqKiBTZGwgUGFja2V0ICoqKioqXCI7XG4gICAgICAgIG91dHB1dCArPSBgXFxuVmVyc2lvbjogJHt0aGlzLl92ZXJzaW9ufWA7XG4gICAgICAgIG91dHB1dCArPSBgXFxuRW5jcnlwdGlvbjogJHt0aGlzLl9lbmNyeXB0aW9ufWA7XG4gICAgICAgIG91dHB1dCArPSBgXFxuRnJhbWVUeXBlOiAke3RoaXMuX2ZyYW1lVHlwZX1gO1xuICAgICAgICBvdXRwdXQgKz0gYFxcblNlcnZpY2VUeXBlOiAke3RoaXMuX3NlcnZpY2VUeXBlfWA7XG4gICAgICAgIG91dHB1dCArPSBgXFxuRnJhbWVJbmZvOiAke3RoaXMuX2ZyYW1lSW5mb31gO1xuICAgICAgICBvdXRwdXQgKz0gYFxcblNlc3Npb25JRDogJHt0aGlzLl9zZXNzaW9uSUR9YDtcbiAgICAgICAgb3V0cHV0ICs9IGBcXG5EYXRhU2l6ZTogJHt0aGlzLl9kYXRhU2l6ZX1gO1xuXG4gICAgICAgIGlmKHRoaXMuX3ZlcnNpb24gPiAxKXtcbiAgICAgICAgICAgIG91dHB1dCArPSBgXFxuTWVzc2FnZUlEOiAke3RoaXMuX21lc3NhZ2VJRH1gO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0ICs9IFwiXFxuKioqKiogU2RsIFBhY2tldCBFbmQgKioqKipcIjtcblxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIC8qKlxuXHQgKiBUaGlzIG1ldGhvZCB0YWtlcyBpbiB0aGUgdmFyaW91cyBjb21wb25lbnRzIHRvIHRoZSBTREwgcGFja2V0IHN0cnVjdHVyZSBhbmQgY3JlYXRlcyBhIG5ldyBieXRlIGFycmF5IHRoYXQgY2FuIGJlIHNlbnQgdmlhIHRoZSB0cmFuc3BvcnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmVyc2lvbiAtIFByb3RvY29sIHZlcnNpb24gdG8gdXNlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBlbmNyeXB0aW9uIC0gV2hldGhlciBvciBub3QgdGhlIHBheWxvYWQgaW4gdGhpcyBwYWNrZXQgaXMgZW5jcnlwdGVkXG4gICAgICogQHBhcmFtIHtGcmFtZVR5cGV9IGZyYW1lVHlwZSAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgcGFja2V0IGZyYW1lIHR5cGVcbiAgICAgKiBAcGFyYW0ge1NlcnZpY2VUeXBlfSBzZXJ2aWNlVHlwZSAtIFRoZSBzZXJ2aWNlIHRoYXQgdGhpcyBwYWNrZXQgaXMgYXNzb2NpYXRlZCB3aXRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbnRyb2xGcmFtZUluZm8gLSBTcGVjaWZpYyBmcmFtZSBpbmZvIHJlbGF0ZWQgdG8gdGhpcyBwYWNrZXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc2Vzc2lvbklEIC0gSUQgdGhpcyBwYWNrZXQgaXMgYXNzb2NpYXRlZCB3aXRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGFTaXplIC0gU2l6ZSBvZiB0aGUgcGF5bG9hZCB0aGF0IHdpbGwgYmUgYWRkZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbWVzc2FnZUlEIC0gSUQgb2YgdGhpcyBzcGVjaWZpYyBwYWNrZXRcbiAgICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IHBheWxvYWQgLSBSYXcgZGF0YSB0aGF0IHdpbGwgYmUgYXR0YWNoZWQgdG8gdGhlIHBhY2tldCAoUlBDIG1lc3NhZ2UsIHJhdyBieXRlcywgZXRjKVxuXHQgKiBAcmV0dXJuIHtVaW50OEFycmF5fSAtIEEgYnl0ZVtdIHJlcHJlc2VudGF0aW9uIG9mIGFuIFNkbFBhY2tldCBidWlsdCB1c2luZyB0aGUgc3VwcGxpZWQgcGFyYW1zXG5cdCAqL1xuICAgIHN0YXRpYyBjb25zdHJ1Y3RQYWNrZXQodmVyc2lvbiwgZW5jcnlwdGlvbiwgZnJhbWVUeXBlLCBzZXJ2aWNlVHlwZSwgY29udHJvbEZyYW1lSW5mbywgc2Vzc2lvbklELCBkYXRhU2l6ZSwgbWVzc2FnZUlELCBwYXlsb2FkKSB7XG4gICAgICAgIGxldCBkYXRhVmlldyA9IG51bGw7XG4gICAgICAgIGxldCBkYXRhVmlld0luZGV4ID0gMDtcblxuICAgICAgICBzd2l0Y2ggKHZlcnNpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICBkYXRhVmlldyA9IG5ldyBVaW50OEFycmF5KFNkbFBhY2tldC5IRUFERVJfU0laRV9WMSArIGRhdGFTaXplKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZGF0YVZpZXcgPSBuZXcgVWludDhBcnJheShTZGxQYWNrZXQuSEVBREVSX1NJWkUgKyBkYXRhU2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gdmVyc2lvbjw8NCArIGdldEVuY3J5cHRpb25CaXQoZW5jcnlwdGlvbikgKyBmcmFtZVR5cGU7XG4gICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBzZXJ2aWNlVHlwZTtcbiAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IGNvbnRyb2xGcmFtZUluZm87XG4gICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBzZXNzaW9uSUQ7XG4gICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBkYXRhU2l6ZSYweEZGMDAwMDAwID4+IDI0O1xuICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gZGF0YVNpemUmMHgwMEZGMDAwMCA+PiAxNjtcbiAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IGRhdGFTaXplJjB4MDAwMEZGMDAgPj4gODtcbiAgICAgICAgZGF0YVZpZXdbZGF0YVZpZXdJbmRleCsrXSA9IGRhdGFTaXplJjB4MDAwMDAwRkY7XG5cbiAgICAgICAgaWYgKHZlcnNpb24gPiAxKSB7XG4gICAgICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gbWVzc2FnZUlEJjB4RkYwMDAwMDAgPj4gMjQ7XG4gICAgICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gbWVzc2FnZUlEJjB4MDBGRjAwMDAgPj4gMTY7XG4gICAgICAgICAgICBkYXRhVmlld1tkYXRhVmlld0luZGV4KytdID0gbWVzc2FnZUlEJjB4MDAwMEZGMDAgPj4gODtcbiAgICAgICAgICAgIGRhdGFWaWV3W2RhdGFWaWV3SW5kZXgrK10gPSBtZXNzYWdlSUQmMHgwMDAwMDBGRjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXlsb2FkICE9PSBudWxsICYmIHBheWxvYWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGF0YVZpZXcuc2V0KHBheWxvYWQsIGRhdGFWaWV3SW5kZXgrKyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YVZpZXc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHRhZyAtIFN0cmluZyBrZXkgdG8gYWRkIGFzIGEgcHJvcGVydHkgdG8gdGhlIEJTT04gbWFwXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgdG8gYWRkIGFzIGEgdmFsdWUgdG8gdGhlIEJTT04gbWFwXG4gICAgICovXG4gICAgcHV0VGFnKHRhZywgZGF0YSkge1xuICAgICAgICAvLyBUT0RPIGJzb25cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdGFnIC0gU3RyaW5nIGtleSB0byBhZGQgYXMgYSBwcm9wZXJ0eSB0byB0aGUgQlNPTiBtYXBcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgYXMgYSB2YWx1ZSBmb3VuZCBmcm9tIHRoZSB0aGUgQlNPTiBtYXBcbiAgICAgKi9cbiAgICBnZXRUYWcodGFnKSB7XG4gICAgICAgIC8vIFRPRE8gYnNvblxuICAgIH1cblxufVxuXG5TZGxQYWNrZXQuRVhUUkFfUEFSQ0VMX0RBVEFfTEVOR1RIICAgICAgICAgICAgICAgICAgICAgID0gMjQ7XG5TZGxQYWNrZXQuSEVBREVSX1NJWkUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMTI7XG5TZGxQYWNrZXQuSEVBREVSX1NJWkVfVjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gODtcblNkbFBhY2tldC5FTkNSWVBUSU9OX01BU0sgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDA4O1xuXG4vKipcbiAqIFNlcnZpY2UgVHlwZVxuICovXG5TZGxQYWNrZXQuU0VSVklDRV9UWVBFX0NPTlRST0wgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwMDtcbi8vUkVTRVJWRUQgMHgwMSAtIDB4MDZcblNkbFBhY2tldC5TRVJWSUNFX1RZUEVfUlBDICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDA3O1xuLy9SRVNFUlZFRCAweDA4IC0gMHgwOVxuU2RsUGFja2V0LlNFUlZJQ0VfVFlQRV9QQ00gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MEE7XG5TZGxQYWNrZXQuU0VSVklDRV9UWVBFX1ZJREVPICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwQjtcbi8vUkVTRVJWRUQgMHgwQyAtIDB4MEVcblNkbFBhY2tldC5TRVJWSUNFX1RZUEVfQlVMS19EQVRBICAgICAgICAgICAgICAgICAgICAgICAgPSAweDBGO1xuLy9SRVNFUlZFRCAweDEwIC0gMHhGRlxuXG4vKipcbiAqIEZyYW1lIEluZm9cbiAqL1xuU2RsUGFja2V0LkZSQU1FX0lORk9fSEVBUlRfQkVBVCAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDA7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19TVEFSVF9TRVJWSUNFICAgICAgICAgICAgICAgICAgICAgID0gMHgwMTtcblNkbFBhY2tldC5GUkFNRV9JTkZPX1NUQVJUX1NFUlZJQ0VfQUNLICAgICAgICAgICAgICAgICAgPSAweDAyO1xuU2RsUGFja2V0LkZSQU1FX0lORk9fU1RBUlRfU0VSVklDRV9OQUsgICAgICAgICAgICAgICAgICA9IDB4MDM7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19FTkRfU0VSVklDRSAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwNDtcblNkbFBhY2tldC5GUkFNRV9JTkZPX0VORF9TRVJWSUNFX0FDSyAgICAgICAgICAgICAgICAgICAgPSAweDA1O1xuU2RsUGFja2V0LkZSQU1FX0lORk9fRU5EX1NFUlZJQ0VfTkFLICAgICAgICAgICAgICAgICAgICA9IDB4MDY7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19SRUdJU1RFUl9TRUNPTkRBUllfVFJBTlNQT1JUICAgICAgID0gMHgwNztcblNkbFBhY2tldC5GUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlRfQUNLICAgPSAweDA4O1xuU2RsUGFja2V0LkZSQU1FX0lORk9fUkVHSVNURVJfU0VDT05EQVJZX1RSQU5TUE9SVF9OQUsgICA9IDB4MDk7XG4vLzB4MEEtMHhGQyBhcmUgcmVzZXJ2ZWRcblNkbFBhY2tldC5GUkFNRV9JTkZPX1RSQU5TUE9SVF9FVkVOVF9VUERBVEUgICAgICAgICAgICAgPSAweEZEO1xuU2RsUGFja2V0LkZSQU1FX0lORk9fU0VSVklDRV9EQVRBX0FDSyAgICAgICAgICAgICAgICAgICA9IDB4RkU7XG5TZGxQYWNrZXQuRlJBTUVfSU5GT19IRUFSVF9CRUFUX0FDSyAgICAgICAgICAgICAgICAgICAgID0gMHhGRjtcblNkbFBhY2tldC5GUkFNRV9JTkZPX0ZJTkFMX0NPTk5FU0NVVElWRV9GUkFNRSAgICAgICAgICAgPSAweDAwO1xuU2RsUGFja2V0LkZSQU1FX0lORk9fUkVTRVJWRUQgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDA7XG5cbmV4cG9ydCB7IFNkbFBhY2tldCB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi91dGlsL0VudW0uanMnO1xuXG5jbGFzcyBScGNTdHJ1Y3Qge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICB0aGlzLl9pc0Zvcm1hdFJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9ycGNTcGVjVmVyc2lvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhcmFtZXRlcnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHBhcmFtZXRlcnMgfHwge30pKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAqL1xuICAgIGdldFBhcmFtZXRlcnMoKSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX3BhcmFtZXRlcnMpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAqIEByZXR1cm4geyp9XG4gICAgKi9cbiAgICBnZXRQYXJhbWV0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXJhbWV0ZXJzW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtScGNTdHJ1Y3R9XG4gICAgKi9cbiAgICBzZXRQYXJhbWV0ZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wYXJhbWV0ZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdENsYXNzXG4gICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgKi9cbiAgICBnZXRPYmplY3QodENsYXNzLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0T2JqZWN0KHRDbGFzcywgdGhpcy5nZXRQYXJhbWV0ZXIoa2V5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0Q2xhc3NcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAqIEByZXR1cm4ge251bGx8T2JqZWN0fVxuICAgICovXG4gICAgZm9ybWF0T2JqZWN0KHRDbGFzcywgb2JqKSB7XG4gICAgICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKG9iai5jb25zdHJ1Y3RvciA9PT0gdENsYXNzKSB7XG4gICAgICAgICAgICAvLyBpZiB0Q2xhc3MgaXMgU3RyaW5nIGFuZCBvYmogaXMgYSBTdHJpbmcsIHRoaXMgc2hvdWxkIGV4ZWN1dGVcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpIHtcbiAgICAgICAgICAgIGlmICh0Q2xhc3MgaW5zdGFuY2VvZiBFbnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRDbGFzcy52YWx1ZUZvclN0cmluZyhvYmopO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0Q2xhc3MgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIG1heSBiZSByZWR1bmRhbnRcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICh0Q2xhc3MgaW5zdGFuY2VvZiBScGNTdHJ1Y3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRDbGFzcyhvYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgLy8gVE9ETzogZW5zdXJlIGNvbXBsZXRlbmVzc1xuICAgICAgICAgICAgaWYgKG9iai5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IG91dEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChpdGVtIGluIG9iaikge1xuICAgICAgICAgICAgICAgICAgICBvdXRBcnJheS5wdXNoKHRoaXMuZm9ybWF0T2JqZWN0KHRjbGFzcywgaXRlbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0QXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0Q2xhc3NcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAqL1xuICAgIHZhbGlkYXRlVHlwZSh0Q2xhc3MsIG9iaikge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAodENsYXNzIGluc3RhbmNlb2YgRW51bSAmJiB0Q2xhc3MudmFsdWVGb3JTdHJpbmcob2JqKSA9PT0gbnVsbClcbiAgICAgICAgICAgIHx8IChvYmogIT09IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9PSB0Q2xhc3MpXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhyb3cgYCR7b2JqLm5hbWV9IG11c3QgYmUgb2YgdHlwZSAke3RDbGFzcy5uYW1lfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgUnBjU3RydWN0IH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY1N0cnVjdCB9IGZyb20gJy4vUnBjU3RydWN0LmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBScGNNZXNzYWdlXG4gKiBAcHJvcGVydHkge1JwY1R5cGV9IHJwY1R5cGVcbiAqL1xuY2xhc3MgUnBjTWVzc2FnZSBleHRlbmRzIFJwY1N0cnVjdCB7XG5cbiAgICAvKlxuICAgIHtcbiAgICAgICAgXCJycGNUeXBlXCI6IFwiUmVxdWVzdFwiLFxuICAgICAgICBcImZ1bmN0aW9uTmFtZVwiOiBcIlJlZ2lzdGVyQXBwSW50ZXJmYWNlXCIsXG4gICAgICAgIFwiY29vcmVsYXRpb25JRFwiOiBcIjMyMDk0OFwiLFxuICAgICAgICBcImlzRW5jcnlwdGVkXCI6IGZhbHNlLFxuICAgICAgICBcInBhcmFtZXRlcnNcIjoge1xuICAgICAgICAgICAgXCJhcHBOYW1lXCI6IFwiSGVsbG9cIlxuICAgICAgICB9LFxuICAgICAgICBcImJ1bGtEYXRhXCI6IFwiLi4uXCIsXG4gICAgfVxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUgPSB7fSkge1xuICAgICAgICBzdXBlcihzdG9yZS5wYXJhbWV0ZXJzKTtcbiAgICAgICAgdGhpcy5faXNFbmNyeXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fcnBjVHlwZSA9IHN0b3JlLnJwY1R5cGU7XG4gICAgICAgIHRoaXMuX2Z1bmN0aW9uTmFtZSA9IHN0b3JlLmZ1bmN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5fY29ycmVsYXRpb25JRCA9IHN0b3JlLmNvcnJlbGF0aW9uSUQ7XG4gICAgICAgIHRoaXMuX2J1bGtEYXRhID0gdGhpcy5zZXRCdWxrRGF0YShzdG9yZS5idWxrRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtScGNUeXBlfVxuICAgICovXG4gICAgZ2V0UlBDVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JwY1R5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1JwY1R5cGV9IHR5cGVcbiAgICAqIEByZXR1cm4ge1JwY01lc3NhZ2V9XG4gICAgKi9cbiAgICBzZXRSUENUeXBlKHR5cGUpIHtcbiAgICAgICAgdGhpcy5fcnBjVHlwZSA9IHR5cGU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtTdHJpbmd9IHR5cGVcbiAgICAqL1xuICAgIGdldEZ1bmN0aW9uTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Z1bmN0aW9uTmFtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgKiBAcmV0dXJuIHtScGNNZXNzYWdlfVxuICAgICovXG4gICAgc2V0RnVuY3Rpb25OYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fZnVuY3Rpb25OYW1lID0gbmFtZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IGRhdGFcbiAgICAqL1xuICAgIGdldEJ1bGtEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVsa0RhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1VJbnQ4QXJyYXl9IGRhdGFcbiAgICAqIEByZXR1cm4ge1JwY01lc3NhZ2V9XG4gICAgKi9cbiAgICBzZXRCdWxrRGF0YShkYXRhID0gbnVsbCkge1xuICAgICAgICBpZiAoZGF0YSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fYnVsa0RhdGEgPSBkYXRhLnNsaWNlKDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fYnVsa0RhdGEgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgICovXG4gICAgZ2V0SXNFbmNyeXB0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0VuY3J5cHRlZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYm9vbFxuICAgICogQHJldHVybiB7UnBjTWVzc2FnZX1cbiAgICAqL1xuICAgIHNldElzRW5jcnlwdGVkKGJvb2wpIHtcbiAgICAgICAgdGhpcy5faXNFbmNyeXB0ZWQgPSBib29sO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBScGNNZXNzYWdlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0VudW19IFNlcnZpY2VUeXBlXG4gKiBAcHJvcGVydHkge09iamVjdH0gTUFQXG4gKi9cbmNsYXNzIFNlcnZpY2VUeXBlIGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IENPTlRST0woKSB7XG4gICAgICAgIHJldHVybiBTZXJ2aWNlVHlwZS5NQVAuQ09OVFJPTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgUlBDKCkge1xuICAgICAgICByZXR1cm4gU2VydmljZVR5cGUuTUFQLlJQQztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIHN0YXRpYyBnZXQgQVVESU8oKSB7XG4gICAgICAgIHJldHVybiBTZXJ2aWNlVHlwZS5NQVAuQVVESU87XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IFZJREVPKCkge1xuICAgICAgICByZXR1cm4gU2VydmljZVR5cGUuTUFQLlZJREVPO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBIWUJSSUQoKSB7XG4gICAgICAgIHJldHVybiBTZXJ2aWNlVHlwZS5NQVAuSFlCUklEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHJldHVybiB7bnVsbHxOdW1iZXJ9IC0gUmV0dXJucyBudWxsIGlmIHRoZSBlbnVtIHZhbHVlIGRvZXNuJ3QgZXhpc3RcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gU2VydmljZVR5cGUuTUFQKSB7XG4gICAgICAgICAgICBpZiAoU2VydmljZVR5cGUuTUFQW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNlcnZpY2VUeXBlLk1BUFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5TZXJ2aWNlVHlwZS5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgICAnQ09OVFJPTCc6IDB4MDAsXG4gICAgJ1JQQyc6IDB4MDcsXG4gICAgJ0FVRElPJzogMHgwQSxcbiAgICAnVklERU8nOiAweDBCLFxuICAgICdIWUJSSUQnOjB4MEYsXG59KTtcblxuZXhwb3J0IHsgU2VydmljZVR5cGUgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBScGNNZXNzYWdlIH0gZnJvbSAnLi4vcnBjL1JwY01lc3NhZ2UuanMnXG5pbXBvcnQgeyBTZGxQYWNrZXQgfSBmcm9tICcuL1NkbFBhY2tldC5qcydcbmltcG9ydCB7IFNlcnZpY2VUeXBlIH0gZnJvbSAnLi9lbnVtcy9TZXJ2aWNlVHlwZS5qcyc7XG5cblxuLy9UT0RPIGNoZWNrIGhvdyB0byBoYW5kbGUgdGhlIHByb3BlcnR5L2Z1bmN0aW9uIGV4cG9zdXJlXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNkbFByb3RvY29sTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldE9uUnBjTWVzc2FnZVJlY2VpdmVkTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldE9uQ29udHJvbFNlcnZpY2VNZXNzYWdlUmVjZWl2ZWRMaXN0ZW5lclxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0T25EZWNyeXB0UmVxdWVzdExpc3RlbmVyXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvblJwY01lc3NhZ2VSZWNlaXZlZFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25TdGFydFNlcnZpY2VBQ0tSZWNlaXZlZFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25TdGFydFNlcnZpY2VOQUtSZWNlaXZlZFxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gb25FbmRTZXJ2aWNlQUNLUmVjZWl2ZWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uRW5kU2VydmljZU5BS1JlY2VpdmVkXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBvblNlcnZpY2VFbmNyeXB0aW9uU3RhcnRlZFxuICovXG5jbGFzcyBTZGxQcm90b2NvbExpc3RlbmVyIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvciBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb25ScGNNZXNzYWdlUmVjZWl2ZWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9vbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBcbiAgICAgKi9cbiAgICBzZXRPblJwY01lc3NhZ2VSZWNlaXZlZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uUnBjTWVzc2FnZVJlY2VpdmVkID0gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgXG4gICAgICovXG4gICAgc2V0T25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX29uQ29udHJvbFNlcnZpY2VNZXNzYWdlUmVjZWl2ZWQgPSBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBcbiAgICAgKi9cbiAgICBzZXRPbkRlY3J5cHRSZXF1ZXN0TGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5fb25EZWNyeXB0UmVxdWVzdExpc3RlbmVyID0gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgLy9UT0RPIGFkZCB0aGUgc2V0dGVycyBmb3IgdGhlIGFkZGVkIGZ1bmN0aW9uc1xuXG4gICAgLypcbiAgICAqIExpc3RlbmVyIG1ldGhvZHMgdG8gYmUgY2FsbGVkXG4gICAgKlxuICAgICovXG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXQgXG4gICAgICovXG4gICAgb25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZChzZGxQYWNrZXQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkKHNkbFBhY2tldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1JwY01lc3NhZ2V9IHJwY01lc3NhZ2UgXG4gICAgICovXG4gICAgb25ScGNNZXNzYWdlUmVjZWl2ZWQocnBjTWVzc2FnZSl7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25ScGNNZXNzYWdlUmVjZWl2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX29uUnBjTWVzc2FnZVJlY2VpdmVkKHJwY01lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqL1xuICAgIG9uU3RhcnRTZXJ2aWNlQUNLUmVjZWl2ZWQoc2RsUGFja2V0KXtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vblN0YXJ0U2VydmljZUFDS1JlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0U2VydmljZUFDS1JlY2VpdmVkKHNkbFBhY2tldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqL1xuICAgIG9uU3RhcnRTZXJ2aWNlTkFLUmVjZWl2ZWQoc2RsUGFja2V0KXtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vblN0YXJ0U2VydmljZU5BS1JlY2VpdmVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0U2VydmljZU5BS1JlY2VpdmVkKHNkbFBhY2tldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqL1xuICAgIG9uRW5kU2VydmljZUFDS1JlY2VpdmVkKHNkbFBhY2tldCl7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25FbmRTZXJ2aWNlQUNLUmVjZWl2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRW5kU2VydmljZUFDS1JlY2VpdmVkKHNkbFBhY2tldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqL1xuICAgIG9uRW5kU2VydmljZU5BS1JlY2VpdmVkKHNkbFBhY2tldCl7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fb25FbmRTZXJ2aWNlTkFLUmVjZWl2ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMuX29uRW5kU2VydmljZU5BS1JlY2VpdmVkKHNkbFBhY2tldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NlcnZpY2VUeXBlfSBzZXJ2aWNlVHlwZSBcbiAgICAgKi9cbiAgICBvblNlcnZpY2VFbmNyeXB0aW9uU3RhcnRlZChzZXJ2aWNlVHlwZSkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub25TZXJ2aWNlRW5jcnlwdGlvblN0YXJ0ZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoaXMub25TZXJ2aWNlRW5jcnlwdGlvblN0YXJ0ZWQoc2VydmljZVR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHsgU2RsUHJvdG9jb2xMaXN0ZW5lciB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBTZGxQYWNrZXQgfSBmcm9tICcuLi9wcm90b2NvbC9TZGxQYWNrZXQuanMnO1xuXG5jbGFzcyBUcmFuc3BvcnRMaXN0ZW5lciB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fb25UcmFuc3BvcnRDb25uZWN0ZWQgPSBudWxsO1xuICAgICAgICB0aGlzLl9vblRyYW5zcG9ydERpc2Nvbm5lY3RlZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX29uRXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLl9vblBhY2tldFJlY2VpdmVkID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAgICogQHJldHVybiB7VHJhbnNwb3J0TGlzdGVuZXJ9XG4gICAgICovXG4gICAgc2V0T25UcmFuc3BvcnRDb25uZWN0ZWQoZnVuYykge1xuICAgICAgICB0aGlzLl9vblRyYW5zcG9ydENvbm5lY3RlZCA9IGZ1bmM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm4ge1RyYW5zcG9ydExpc3RlbmVyfVxuICAgICAqL1xuICAgIHNldE9uVHJhbnNwb3J0RGlzY29ubmVjdGVkKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fb25UcmFuc3BvcnREaXNjb25uZWN0ZWQgPSBmdW5jO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmNcbiAgICAgKiBAcmV0dXJuIHtUcmFuc3BvcnRMaXN0ZW5lcn1cbiAgICAgKi9cbiAgICBzZXRPbkVycm9yKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fb25FcnJvciA9IGZ1bmM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqIEByZXR1cm4ge1RyYW5zcG9ydExpc3RlbmVyfVxuICAgICAqL1xuICAgIHNldE9uUGFja2V0UmVjZWl2ZWQoZnVuYykge1xuICAgICAgICB0aGlzLl9vblBhY2tldFJlY2VpdmVkID0gZnVuYztcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBcbiAgICBvblRyYW5zcG9ydENvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vblRyYW5zcG9ydENvbm5lY3RlZCA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgIHRoaXMuX29uVHJhbnNwb3J0Q29ubmVjdGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblRyYW5zcG9ydERpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9vblRyYW5zcG9ydERpc2Nvbm5lY3RlZCA9PT0gJ2Z1bmN0aW9uJyApIHtcbiAgICAgICAgICAgIHRoaXMuX29uVHJhbnNwb3J0RGlzY29ubmVjdGVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkVycm9yKCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uRXJyb3IgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICB0aGlzLl9vbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBhY2tldFJlY2VpdmVkKHNkbFBhY2tldCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX29uUGFja2V0UmVjZWl2ZWQgPT09ICdmdW5jdGlvbicgKSB7XG4gICAgICAgICAgICB0aGlzLl9vblBhY2tldFJlY2VpdmVkKHNkbFBhY2tldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgVHJhbnNwb3J0TGlzdGVuZXIgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFRyYW5zcG9ydENvbmZpZ0Jhc2VcbiAqIEBwcm9wZXJ0eSB7VHJhbnNwb3J0VHlwZX0gX3RyYW5zcG9ydFR5cGVcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGdldFRyYW5zcG9ydFR5cGVcbiAqL1xuY2xhc3MgVHJhbnNwb3J0Q29uZmlnQmFzZSB7XG5cblx0LyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtUcmFuc3BvcnRUeXBlfSB0cmFuc3BvcnRUeXBlIC0gZW51bVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHRyYW5zcG9ydFR5cGUpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0VHlwZSA9IHRyYW5zcG9ydFR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7VHJhbnNwb3J0VHlwZX1cbiAgICAgKi9cbiAgICBnZXRUcmFuc3BvcnRUeXBlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNwb3J0VHlwZTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRyYW5zcG9ydENvbmZpZ0Jhc2UgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuY2xhc3MgVmVyc2lvbiB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IobWFqb3IsIG1pbm9yLCBwYXRjaCkge1xuICAgICAgICB0aGlzLnNldE1ham9yKG1ham9yKTtcbiAgICAgICAgdGhpcy5zZXRNaW5vcihtaW5vcik7XG4gICAgICAgIHRoaXMuc2V0UGF0Y2gocGF0Y2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IG1ham9yXG4gICAgKiBAcmV0dXJuIHtWZXJzaW9ufVxuICAgICovXG4gICAgc2V0TWFqb3IobWFqb3IpIHtcbiAgICAgICAgdGhpcy5fbWFqb3IgPSBwYXJzZUludChtYWpvcikgfHwgMDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldE1ham9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWFqb3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gbWlub3JcbiAgICAqIEByZXR1cm4ge1ZlcnNpb259XG4gICAgKi9cbiAgICBzZXRNaW5vcihtaW5vcikge1xuICAgICAgICB0aGlzLl9taW5vciA9IHBhcnNlSW50KG1pbm9yKSB8fCAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgZ2V0TWlub3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9taW5vcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBwYXRjaFxuICAgICogQHJldHVybiB7VmVyc2lvbn1cbiAgICAqL1xuICAgIHNldFBhdGNoKHBhdGNoKSB7XG4gICAgICAgIHRoaXMuX3BhdGNoID0gcGFyc2VJbnQocGF0Y2gpIHx8IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRQYXRjaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdGNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHZlcnNpb24gLSBQYXJzZSB0aGlzIHN0cmluZyB0byBhIFZlcnNpb24gb2JqZWN0XG4gICAgKiBAcmV0dXJuIHtWZXJzaW9ufVxuICAgICovXG4gICAgZnJvbVN0cmluZyh2ZXJzaW9uKSB7XG4gICAgICAgIGxldCB2ZXJzaW9ucyA9IHZlcnNpb24uc3BsaXQoXCIuXCIpO1xuICAgICAgICBpZiAodmVyc2lvbnMubGVuZ3RoICE9IDMpIHRocm93IFwiSW5jb3JyZWN0IHZlcnNpb24gc3RyaW5nIGZvcm1hdFwiO1xuICAgICAgICB0aGlzLnNldE1ham9yKHZlcnNpb25zWzBdKTtcbiAgICAgICAgdGhpcy5zZXRNaW5vcih2ZXJzaW9uc1sxXSk7XG4gICAgICAgIHRoaXMuc2V0UGF0Y2godmVyc2lvbnNbMl0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmdldE1ham9yKCl9LiR7dGhpcy5nZXRNaW5vcigpfS4ke3RoaXMuZ2V0UGF0Y2goKX1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogTWV0aG9kIHRvIHRlc3QgaWYgdGhpcyBpbnN0YW5jZSBvZiBWZXJzaW9uIGlzIG5ld2VyIHRoYW4gdGhlIHN1cHBsaWVkIG9uZS5cbiAgICAqIEBwYXJhbSB2ZXJzaW9uIC0gdGhlIHZlcnNpb24gdG8gY2hlY2sgYWdhaW5zdFxuICAgICogQHJldHVybiB7TnVtYmVyfSAtIDEgaWYgdGhpcyBpbnN0YW5jZSBpcyBuZXdlciwgLTEgaWYgc3VwcGxpZWQgdmVyc2lvbiBpcyBuZXdlciwgYW5kIDAgaWYgdGhleSBhcmUgZXF1YWxcbiAgICAqL1xuICAgIGlzTmV3ZXJUaGFuKHZlcnNpb24pIHtcbiAgICAgICAgaWYodGhpcy5nZXRNYWpvcigpID4gdmVyc2lvbi5nZXRNYWpvcigpKXtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLmdldE1ham9yKCkgPT0gdmVyc2lvbi5nZXRNYWpvcigpKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0TWlub3IoKSA+IHZlcnNpb24uZ2V0TWlub3IoKSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5nZXRNaW5vcigpID09IHZlcnNpb24uZ2V0TWlub3IoKSl7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5nZXRQYXRjaCgpID4gdmVyc2lvbi5nZXRQYXRjaCgpKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5nZXRQYXRjaCgpID09IHZlcnNpb24uZ2V0UGF0Y2goKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxufVxuXG5leHBvcnQgeyBWZXJzaW9uIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFNkbFByb3RvY29sTGlzdGVuZXIgfSBmcm9tICcuL1NkbFByb3RvY29sTGlzdGVuZXIuanMnO1xuaW1wb3J0IHsgVHJhbnNwb3J0TGlzdGVuZXIgfSBmcm9tICcuLi90cmFuc3BvcnQvVHJhbnNwb3J0TGlzdGVuZXIuanMnXG5pbXBvcnQgeyBUcmFuc3BvcnRDb25maWdCYXNlIH0gZnJvbSAnLi4vdHJhbnNwb3J0L1RyYW5zcG9ydENvbmZpZ0Jhc2UuanMnXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi4vdXRpbC9WZXJzaW9uLmpzJ1xuaW1wb3J0IHsgU2VydmljZVR5cGUgfSBmcm9tICcuL2VudW1zL1NlcnZpY2VUeXBlLmpzJ1xuaW1wb3J0IHsgRnJhbWVUeXBlIH0gZnJvbSAnLi9lbnVtcy9GcmFtZVR5cGUuanMnXG5pbXBvcnQgeyBNZXNzYWdlRnJhbWVBc3NlbWJsZXIgfSBmcm9tICcuL01lc3NhZ2VGcmFtZUFzc2VtYmxlci5qcydcbmltcG9ydCB7IFNkbFBhY2tldCB9IGZyb20gJy4vU2RsUGFja2V0LmpzJztcblxuY2xhc3MgU2RsUHJvdG9jb2xCYXNlIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7IFRyYW5zcG9ydENvbmZpZ0Jhc2UgfSBiYXNlVHJhbnNwb3J0Q29uZmlnXG4gICAgICogQHBhcmFtIHsgU2RsUHJvdG9jb2xMaXN0ZW5lciB9IHNkbFByb3RvY29sTGlzdGVuZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihiYXNlVHJhbnNwb3J0Q29uZmlnLCBzZGxQcm90b2NvbExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydENvbmZpZyA9IGJhc2VUcmFuc3BvcnRDb25maWc7XG4gICAgICAgIHRoaXMuX3NkbFByb3RvY29sbGlzdGVuZXIgPSBzZGxQcm90b2NvbExpc3RlbmVyO1xuICAgICAgICByZXNldCgpO1xuXG4gICAgICAgIF9jcmVhdGVUcmFuc3BvcnRMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRNYW5hZ2VyID0gbnVsbDsgLy9UaGUgdHJhbnNwb3J0IG1hbmFnZXIgc2hvdWxkIGJlIGNyZWF0ZWRcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbnMgZm9yIHRyYW5zcG9ydC1yZWxhdGVkIGV2ZW50cyBhbmQgaGFuZGxlcyB0aGVtIGhlcmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9jcmVhdGVUcmFuc3BvcnRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TGlzdGVuZXIgPSBuZXcgVHJhbnNwb3J0TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TGlzdGVuZXIuc2V0T25UcmFuc3BvcnRDb25uZWN0ZWQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9UcmFuc3BvcnQgY29ubmVjdGVkXG4gICAgICAgICAgICAvL1N0YXJ0IFJQQyBzZXNzaW9uXG5cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLnNldE9uVHJhbnNwb3J0RGlzY29ubmVjdGVkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vVHJhbnNwb3J0IGRpc2Nvbm5lY3RlZFxuICAgICAgICAgICAgLy9TaHV0IGV2ZXJ5dGhpbmcgZG93blxuXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl90cmFuc3BvcnRMaXN0ZW5lci5zZXRPblBhY2tldFJlY2VpdmVkKGZ1bmN0aW9uIChzZGxQYWNrZXQpIHtcbiAgICAgICAgICAgIC8vU2RsUGFja2V0IHJlY2VpdmVkXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVQYWNrZXRSZWNlaXZlZChzZGxQYWNrZXQpOyAvL0NvdWxkIGp1c3QgcGFzcyBpbiB0aGlzIGZ1bmNpdG9uIGluc3RlYWQgb2YgY3JlYXRpbmcgYW4gYW5vbnltb3VzZSBmdW5jaXRvbiB0byBjYWxsIGl0XG5cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLnNldE9uRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9IYW5kbGUgZXJyb3I/XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdXAgdGhlIFNETCBwcm90b2NvbCBjbGFzcy4gSXQgd2lsbCBraWNrIG9mZiB0aGUgdHJhbnNwb3J0IG1hbmFnZXIgYW5kIHVuZGVybHlpbmcgdHJhbnNwb3J0LlxuICAgICAqL1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNwb3J0TWFuYWdlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBcInRyYW5zcG9ydCBtYW5hZ2VyIHdhcyBudWxsLCB1bmFibGUgdG8gc3RhcnQgU0RMIFByb3RvY29sXCI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl90cmFuc3BvcnRNYW5hZ2VyLnN0YXJ0KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZXJ2aWNlVHlwZX0gc2VydmljZVR5cGUgXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBtYXggdHJhbnNwb3J0IHVuaXQgZm9yIHRoZSBnaXZlIHNlcnZpY2UgdHlwZVxuICAgICAqL1xuICAgIGdldE10dShzZXJ2aWNlVHlwZSkge1xuICAgICAgICBsZXQgcmV0VmFsID0gdGhpcy5fbXR1cy5nZXQoc2VydmljZVR5cGUpO1xuICAgICAgICBpZiAocmV0VmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiByZXRWYWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNkbFByb3RvY29sQmFzZS5WMV9WMl9NVFVfU0laRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBpc0Nvbm5lY3RlZFxuICAgICAqL1xuICAgIGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNwb3J0TWFuYWdlciAhPSBudWxsICYmIHRoaXMuX3RyYW5zcG9ydE1hbmFnZXIuaXNDb25uZWN0ZWQobnVsbCwgbnVsbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyBpbnRlcm5hbCBjbGFzcyBtZW1iZXJzIHRvIGRlZmF1bHQgdmFsdWVzXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3Byb3RvY29sX3ZlcnNpb24gPSBuZXcgVmVyc2lvbigxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0Q29uZmlnID0gYmFzZVRyYW5zcG9ydENvbmZpZztcbiAgICAgICAgdGhpcy5faGVhZGVyU2l6ZSA9IFNkbFByb3RvY29sQmFzZS5WMV9IRUFERVJfU0laRTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlU3RhdHVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnNlcnZpY2VTdGF0dXNbU2VydmljZVR5cGUuQ09OVFJPTF0gPSB0cnVlO1xuICAgICAgICB0aGlzLl9tdHVzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9tdHVzW1NlcnZpY2VUeXBlLlJQQ10gPSBTZGxQcm90b2NvbEJhc2UuVjFfVjJfTVRVX1NJWkUgLSB0aGlzLl9oZWFkZXJTaXplO1xuICAgICAgICB0aGlzLl9oYXNoSUQgPSAwO1xuICAgICAgICB0aGlzLl9tZXNzYWdlSUQgPSAwO1xuICAgICAgICB0aGlzLl9tZXNzYWdlRnJhbWVBc3NlbWJsZXJzID0gbmV3IE1hcCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1ZlcnNpb259IHByb3RvY29sX3ZlcnNpb25cbiAgICAgKi9cbiAgICBnZXRQcm90b2NvbFZlcnNpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm90b2NvbF92ZXJzaW9uO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBzZXQgdGhlIG1ham9yIHByb3RvY29sIHZlcnNpb24gdGhhdCB3ZSBzaG91bGQgdXNlLiBJdCB3aWxsIGFsc28gc2V0IHRoZSBkZWZhdWx0IE1UVSBiYXNlZCBvbiB2ZXJzaW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2ZXJzaW9uIC0gbWFqb3IgdmVyc2lvbiB0byB1c2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9zZXRWZXJzaW9uKHZlcnNpb24pIHtcbiAgICAgICAgaWYgKHZlcnNpb24gPiA1KSB7XG4gICAgICAgICAgICB0aGlzLnByb3RvY29sVmVyc2lvbiA9IG5ldyBWZXJzaW9uKFwiNS4xLjBcIik7IC8vcHJvdGVjdCBmb3IgZnV0dXJlLCBwcm94eSBvbmx5IHN1cHBvcnRzIHY1IG9yIGxvd2VyXG4gICAgICAgICAgICBoZWFkZXJTaXplID0gU2RsUHJvdG9jb2xCYXNlLlYyX0hFQURFUl9TSVpFO1xuICAgICAgICAgICAgbXR1c1tTZXJ2aWNlVHlwZS5SUENdID0gU2RsUHJvdG9jb2xCYXNlLlYzX1Y0X01UVV9TSVpFO1xuICAgICAgICB9IGVsc2UgaWYgKHZlcnNpb24gPT0gNSkge1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbFZlcnNpb24gPSBuZXcgVmVyc2lvbihcIjUuMC4wXCIpO1xuICAgICAgICAgICAgaGVhZGVyU2l6ZSA9IFNkbFByb3RvY29sQmFzZS5WMl9IRUFERVJfU0laRTtcbiAgICAgICAgICAgIG10dXNbU2VydmljZVR5cGUuUlBDXSA9IFNkbFByb3RvY29sQmFzZS5WM19WNF9NVFVfU0laRTtcbiAgICAgICAgfSBlbHNlIGlmICh2ZXJzaW9uID09IDQpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2xWZXJzaW9uID0gbmV3IFZlcnNpb24oXCI0LjAuMFwiKTtcbiAgICAgICAgICAgIGhlYWRlclNpemUgPSBTZGxQcm90b2NvbEJhc2UuVjJfSEVBREVSX1NJWkU7XG4gICAgICAgICAgICBtdHVzW1NlcnZpY2VUeXBlLlJQQ10gPSBTZGxQcm90b2NvbEJhc2UuVjNfVjRfTVRVX1NJWkU7IC8vdmVyc2lvbnMgNCBzdXBwb3J0cyAxMjhrIE1UVVxuICAgICAgICB9IGVsc2UgaWYgKHZlcnNpb24gPT0gMykge1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbFZlcnNpb24gPSBuZXcgVmVyc2lvbihcIjMuMC4wXCIpO1xuICAgICAgICAgICAgaGVhZGVyU2l6ZSA9IFNkbFByb3RvY29sQmFzZS5WMl9IRUFERVJfU0laRTtcbiAgICAgICAgICAgIG10dXNbU2VydmljZVR5cGUuUlBDXSA9IFNkbFByb3RvY29sQmFzZS5WM19WNF9NVFVfU0laRTsgLy92ZXJzaW9ucyAzIHN1cHBvcnRzIDEyOGsgTVRVXG4gICAgICAgIH0gZWxzZSBpZiAodmVyc2lvbiA9PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnByb3RvY29sVmVyc2lvbiA9IG5ldyBWZXJzaW9uKFwiMi4wLjBcIik7XG4gICAgICAgICAgICBoZWFkZXJTaXplID0gU2RsUHJvdG9jb2xCYXNlLlYyX0hFQURFUl9TSVpFO1xuICAgICAgICAgICAgbXR1c1tTZXJ2aWNlVHlwZS5SUENdID0gU2RsUHJvdG9jb2xCYXNlLlYxX1YyX01UVV9TSVpFIC0gaGVhZGVyU2l6ZTtcbiAgICAgICAgfSBlbHNlIGlmICh2ZXJzaW9uID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2xWZXJzaW9uID0gbmV3IFZlcnNpb24oXCIxLjAuMFwiKTtcbiAgICAgICAgICAgIGhlYWRlclNpemUgPSBTZGxQcm90b2NvbEJhc2UuVjFfSEVBREVSX1NJWkU7XG4gICAgICAgICAgICBtdHVzW1NlcnZpY2VUeXBlLlJQQ10gPSBTZGxQcm90b2NvbEJhc2UuVjFfVjJfTVRVX1NJWkUgLSBoZWFkZXJTaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldFxuICAgICAqL1xuICAgIHNlbmRQYWNrZXQoc2RsUGFja2V0KSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc3BvcnRNYW5hZ2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zcG9ydE1hbmFnZXIuc2VuZFBhY2tldChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtScGNNZXNzYWdlfSBycGNNZXNzYWdlIFxuICAgICAqL1xuICAgIHNlbmRScGMocnBjTWVzc2FnZSkge1xuICAgICAgICBpZiAocnBjTWVzc2FnZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyh2ZXJzaW9uID0gMSwgZW5jcnlwdGlvbiA9IGZhbHNlLCBmcmFtZVR5cGUgPSAtMSwgc2VydmljZVR5cGUgPSAtMSwgZnJhbWVJbmZvID0gLTEsIHNlc3Npb25JRCA9IDAsIGRhdGFTaXplID0gMCwgbWVzc2FnZUlEID0gMCwgcGF5bG9hZCA9IG51bGwsIG9mZnNldCA9IDAsIGJ5dGVzVG9Xcml0ZSA9IDApIHtcblxuICAgICAgICAgICAgbGV0IHBhcmFtQnl0ZXMgPSBuZXcgVWludDhBcnJheShycGNNZXNzYWdlLmdldFBhcmFtZXRlcnMoKSk7XG4gICAgICAgICAgICBsZXQgc2RsUGFja2V0ID0gbmV3IFNkbFBhY2tldCh0aGlzLl9wcm90b2NvbF92ZXJzaW9uLmdldE1ham9yKCksIGZhbHNlKTtcbiAgICAgICAgICAgIC8vVE9ETzogc2RsUGFja2V0LnNldFxuXG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UocHJvdG9jb2xNZXNzYWdlKSB7XG4gICAgICAgIC8vVE9ETyBcbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgbWV0aG9kIHRoYXQgaGFuZGxlcyBhbGwgdGhlIGJ1aWxkaW5nIG9mIHNkbCBwYWNrZXRzIHRoYXQgZ2V0IHNlbnQgXG4gICAgICAgIC8vIGluIHRoZSBqYXZhIHN1aXRlIGxpYi4gV2Ugd2FudCB0byBhdm9pZCB1c2luZyBwcm90b2NvbCBtZXNzYWdlIGhlcmUgYXMgYW4gZXh0cmEgXG4gICAgICAgIC8vIGNsYXNzIHRoYXQgZG9lc24ndCBtYWtlIG11Y2ggc2Vuc2UuIEkgYmVsaWV2ZSB3ZSBzaG91bGQgcHJvYmFibHkgYWx0ZXIgU2RsUGFja2V0XG4gICAgICAgIC8vIHRvIGhhbmRsZSB0aGUgc2l0dWF0aW9uIHByb3RvY29sIG1lc3NhZ2UgdXNlZCB0b1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbiBTZGxQYWNrZXQgZGVwZW5kaW5nIG9uIGl0cyBGcmFtZVR5cGVcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2hhbmRsZVBhY2tldFJlY2VpdmVkKHNkbFBhY2tldCkge1xuICAgICAgICBpZiAodGhpcy5fcHJvdG9jb2xfdmVyc2lvbiA9PSBudWxsIHx8IHRoaXMuX3Byb3RvY29sX3ZlcnNpb24uZ2V0TWFqb3IoKSA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRWZXJzaW9uKHBhY2tldC52ZXJzaW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2RsUGFja2V0LmdldEZyYW1lVHlwZSgpID09IEZyYW1lVHlwZS5GSVJTVCB8fCBzZGxQYWNrZXQuZ2V0RnJhbWVUeXBlKCkgPT0gRnJhbWVUeXBlLkNPTlNFQ1VUSVZFKSB7XG4gICAgICAgICAgICBtZXNzYWdlRnJhbWVBc3NlbWJsZXIgPSBfZ2V0TWVzc2FnZUZyYW1lQXNzZW1ibGVyKHNkbFBhY2tldCk7XG4gICAgICAgICAgICBtZXNzYWdlRnJhbWVBc3NlbWJsZXIuaGFuZGxlRnJhbWUoc2RsUGFja2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vUGFja2V0IGNhbiBiZSBoYW5kbGVkIGFzIGlzXG4gICAgICAgICAgICBzd2l0Y2ggKHNkbFBhY2tldC5nZXRGcmFtZVR5cGUoKSkge1xuICAgICAgICAgICAgICAgIGNhc2UgRnJhbWVUeXBlLkNPTlRST0w6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUNvbnRyb2xQYWNrZXQoc2RsUGFja2V0KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBGcmFtZVR5cGUuU0lOR0xFOlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNkbFBhY2tldC5nZXRTZXJ2aWNlVHlwZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNlcnZpY2VUeXBlLlJQQzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVSUENQYWNrZXQoc2RsUGFja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldE1lc3NhZ2VGcmFtZUFzc2VtYmxlcihzZGxQYWNrZXQpIHtcbiAgICAgICAgbGV0IG1lc3NhZ2VGcmFtZUFzc2VtYmxlciA9IHRoaXMuX21lc3NhZ2VGcmFtZUFzc2VtYmxlcnNbc2RsUGFja2V0LmdldE1lc3NhZ2VJRCgpXTtcbiAgICAgICAgaWYgKG1lc3NhZ2VGcmFtZUFzc2VtYmxlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBtZXNzYWdlRnJhbWVBc3NlbWJsZXIgPSBNZXNzYWdlRnJhbWVBc3NlbWJsZXIodGhpcy5faGVhZGVyU2l6ZSwgbmV3IGZ1bmN0aW9uIChzZGxQYWNrZXQpIHtcbiAgICAgICAgICAgICAgICAvL1RPRE9cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2Ugd2FudCB0byBwYXNzIGJhY2sgYW4gU0RMIFBhY2tldC4gXG5cbiAgICAgICAgICAgICAgICB0aGlzLl9tZXNzYWdlRnJhbWVBc3NlbWJsZXJzW3NkbFBhY2tldC5nZXRNZXNzYWdlSUQoKV0gPSBudWxsOyAvL1JlbW92ZSB0aGUgbWFwcGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9tZXNzYWdlRnJhbWVBc3NlbWJsZXJzW3NkbFBhY2tldC5nZXRNZXNzYWdlSUQoKV0gPSBtZXNzYWdlRnJhbWVBc3NlbWJsZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWVzc2FnZUZyYW1lQXNzZW1ibGVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgaGFuZGxlIGNvbnRyb2wgcGFja2V0cyBmb3IgYWxsIHNlcnZpY2UgdHlwZXNcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2hhbmRsZUNvbnRyb2xQYWNrZXQoc2RsUGFja2V0KSB7XG4gICAgICAgIGxldCBzZXJ2aWNlVHlwZSA9IHNkbFBhY2tldC5nZXRTZXJ2aWNlVHlwZSgpO1xuICAgICAgICBsZXQgZnJhbWVJbmZvID0gc2RsUGFja2V0LmdldEZyYW1lSW5mbygpO1xuICAgICAgICBsZXQgcGF5bG9hZCA9IHNkbFBhY2tldC5nZXRQYXlsb2FkKCk7XG5cbiAgICAgICAgc3dpdGNoIChmcmFtZUluZm8pIHtcbiAgICAgICAgICAgIGNhc2Ugc2RsUGFja2V0LkZSQU1FX0lORk9fU1RBUlRfU0VSVklDRV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlU3RhcnRTZXJ2aWNlQUNLKHNkbFBhY2tldCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIHNkbFBhY2tldC5GUkFNRV9JTkZPX1NUQVJUX1NFUlZJQ0VfTkFLOlxuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVN0YXJ0U2VydmljZU5BSyhzZGxQYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzZGxQYWNrZXQuRlJBTUVfSU5GT19FTkRfU0VSVklDRV9BQ0s6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRW5kU2VydmljZUFDSyhzZGxQYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBzZGxQYWNrZXQuRlJBTUVfSU5GT19FTkRfU0VSVklDRV9OQUs6XG4gICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRW5kU2VydmljZUFDSyhzZGxQYWNrZXQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0IFxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2hhbmRsZVN0YXJ0U2VydmljZUFDSyhzZGxQYWNrZXQpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgICAgIC8vSGFuZGxlIHRoaW5ncyBpbnRlcm5hbGx5IGZpcnN0XG4gICAgICAgIHN3aXRjaCAoc2VydmljZVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgU2VydmljZVR5cGUuUlBDOlxuICAgICAgICAgICAgY2FzZSBTZXJ2aWNlVHlwZS5DT05UUk9MOlxuICAgICAgICAgICAgY2FzZSBTZXJ2aWNlVHlwZS5IWUJSSUQ6XG4gICAgICAgICAgICBjYXNlIFNlcnZpY2VUeXBlLkFVRElPOlxuICAgICAgICAgICAgY2FzZSBTZXJ2aWNlVHlwZS5WSURFTzpcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVGhlbiBjYWxsIHRoZSBsaXN0ZW5lciAoc2hvdWxkIGJlIFNkbFNlc3Npb24pXG4gICAgICAgIGlmICh0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NkbFByb3RvY29sbGlzdGVuZXIub25TdGFydFNlcnZpY2VBQ0tSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVTdGFydFNlcnZpY2VOQUsoc2RsUGFja2V0KSB7XG4gICAgICAgIC8vVE9ET1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXQgXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlRW5kU2VydmljZUFDSyhzZGxQYWNrZXQpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVFbmRTZXJ2aWNlTkFLKHNkbFBhY2tldCkge1xuICAgICAgICAvL1RPRE9cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXQgXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfaGFuZGxlQ29udHJvbFNlcnZpY2VQYWNrZXQoc2RsUGFja2V0KSB7XG4gICAgICAgIGlmICh0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NkbFByb3RvY29sbGlzdGVuZXIub25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxQYWNrZXR9IHNkbFBhY2tldCBcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9oYW5kbGVSUENQYWNrZXQoc2RsUGFja2V0KSB7XG4gICAgICAgIGxldCBwYXlsb2FkID0gc2RsUGFja2V0LmdldFBheWxvYWQoKTtcbiAgICAgICAgLy8gVE9ETyBwb3NzaWJseSBhZGQgZXJyb3IgY2hlY2tpbmcgdGhhdCBlbnN1cmVzIHRoaXMgaXMgYW4gUlBDIHBhY2tldFxuICAgICAgICBsZXQgcnBjTWVzc2FnZSA9IG51bGw7XG4gICAgICAgIGlmICh0aGlzLl9wcm90b2NvbF92ZXJzaW9uLmdldE1ham9yKCkgPT0gMSkge1xuICAgICAgICAgICAgLy9UaGVyZSBpcyBubyBiaW5hcnkgZnJhbWUgaGVhZGVyXG5cbiAgICAgICAgfVxuICAgICAgICAvL1RPRE8gYWN0dWFsbHkgY3JlYXRlIHRoZSBSUEMgbWVzc2FnZVxuXG4gICAgICAgIGlmICh0aGlzLl9zZGxQcm90b2NvbGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NkbFByb3RvY29sbGlzdGVuZXIub25ScGNNZXNzYWdlUmVjZWl2ZWQocnBjTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLy9Ob3Qgc3VyZSBpZiB3ZSBuZWVkXG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyp9IHNlc3Npb25JRCBcbiAgICAgKiBAcGFyYW0geyp9IF9oYXNoSUQgXG4gICAgICovXG4gICAgZW5kU2Vzc2lvbihzZXNzaW9uSUQsIF9oYXNoSUQpIHsgfTtcblxufVxuXG4vKipcbiAqIE9yaWdpbmFsIGhlYWRlciBzaXplIGJhc2VkIG9uIHZlcnNpb24gMS4wLjAgb25seVxuICovXG5TZGxQcm90b2NvbEJhc2UuVjFfSEVBREVSX1NJWkUgICAgICAgICAgICAgID0gODtcbi8qKlxuICogTGFyZ2VyIGhlYWRlciBzaXplIHRoYXQgaXMgdXNlZCBieSB2ZXJzaW9ucyAyLjAuMCBhbmQgdXBcbiAqL1xuU2RsUHJvdG9jb2xCYXNlLlYyX0hFQURFUl9TSVpFICAgICAgICAgICAgICA9IDEyO1xuU2RsUHJvdG9jb2xCYXNlLlYxX1YyX01UVV9TSVpFICAgICAgICAgICAgICA9IDE1MDA7XG5TZGxQcm90b2NvbEJhc2UuVjNfVjRfTVRVX1NJWkUgICAgICAgICAgICAgID0gMTMxMDcyO1xuLyoqXG4gKiBNYXggc3VwcG9ydGVkIHByb3RvY29sIHZlcnNpb24gaW4gdGhpcyByZWxlYXNlIG9mIHRoZSBsaWJyYXJ5XG4qL1xuU2RsUHJvdG9jb2xCYXNlLk1BWF9QUk9UT0NPTF9WRVJTSU9OICAgICAgICA9IG5ldyBWZXJzaW9uKDUsIDIsIDApO1xuXG5leHBvcnQgeyBTZGxQcm90b2NvbEJhc2UgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jbGFzcyBDb250cm9sRnJhbWVUYWdzIHtcbn1cblxuLy8gaGlkZGVuIGlubmVyIG9iamVjdHNcblxuY29uc3QgU3RhcnRTZXJ2aWNlQUNLQmFzZSA9IHtcbiAgICBNVFU6IFwibXR1XCIsXG59O1xuXG5jb25zdCBOQUtCYXNlID0ge1xuICAgIFJFSkVDVEVEX1BBUkFNUzogXCJyZWplY3RlZFBhcmFtc1wiLFxufTtcblxuY29uc3QgU3RhcnRTZXJ2aWNlUHJvdG9jb2xWZXJzaW9uID0ge1xuICAgIC8qKiBUaGUgbmVnb3RpYXRlZCB2ZXJzaW9uIG9mIHRoZSBwcm90b2NvbC4gTXVzdCBiZSBpbiB0aGUgZm9ybWF0IFwiTWFqb3IuTWlub3IuUGF0Y2hcIiovXG4gICAgUFJPVE9DT0xfVkVSU0lPTjogXCJwcm90b2NvbFZlcnNpb25cIixcbn07XG5cbmNvbnN0IFN0YXJ0U2VydmljZUhhc2hJZCA9IHtcbiAgICAvKiogSGFzaCBJRCB0byBpZGVudGlmeSB0aGlzIHNlcnZpY2UgYW5kIHVzZWQgd2hlbiBzZW5kaW5nIGFuIEVuZFNlcnZpY2UgY29udHJvbCBmcmFtZSovXG4gICAgSEFTSF9JRDogXCJoYXNoSWRcIixcbn07XG5cbmNvbnN0IFN0YXJ0U2VydmljZURpbWVuc2lvbnMgPSB7XG4gICAgSEVJR0hUOiBcImhlaWdodFwiLFxuICAgIFdJRFRIOiBcIndpZHRoXCIsXG59O1xuXG4vL3N0YXRpYyBtZW1iZXJzIFxuXG5Db250cm9sRnJhbWVUYWdzLlJQQyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFN0YXJ0U2VydmljZTogU3RhcnRTZXJ2aWNlUHJvdG9jb2xWZXJzaW9uLFxuXG4gICAgU3RhcnRTZXJ2aWNlQUNLOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgLyoqIEhVIGFsbG93ZWQgdHJhbnNwb3J0IGZvciBzZWNvbmRhcnkgY29ubmVjdGlvbiAqL1xuICAgICAgICBTRUNPTkRBUllfVFJBTlNQT1JUUzogXCJzZWNvbmRhcnlUcmFuc3BvcnRzXCIsXG4gICAgICAgIC8qKiBIVSBhbGxvd2VkIHRyYW5zcG9ydHMgZm9yIGF1ZGlvIGFuZCB2aWRlbyBzZXJ2aWNlcyAoMSA9PSBQcmltYXJ5LCAyID09IFNlY29uZGFyeSkgKi9cbiAgICAgICAgQVVESU9fU0VSVklDRV9UUkFOU1BPUlRTOiBcImF1ZGlvU2VydmljZVRyYW5zcG9ydHNcIixcbiAgICAgICAgVklERU9fU0VSVklDRV9UUkFOU1BPUlRTOiBcInZpZGVvU2VydmljZVRyYW5zcG9ydHNcIixcbiAgICAgICAgLyoqIEF1dGggdG9rZW4gdG8gYmUgdXNlZCBmb3IgbG9nIGluIGludG8gc2VydmljZXMgKiovXG4gICAgICAgIEFVVEhfVE9LRU46IFwiYXV0aFRva2VuXCIsXG4gICAgfSwgU3RhcnRTZXJ2aWNlQUNLQmFzZSwgU3RhcnRTZXJ2aWNlUHJvdG9jb2xWZXJzaW9uLCBTdGFydFNlcnZpY2VIYXNoSWQpLFxuXG4gICAgU3RhcnRTZXJ2aWNlTkFLOiBOQUtCYXNlLFxuXG4gICAgRW5kU2VydmljZTogU3RhcnRTZXJ2aWNlSGFzaElkLFxuXG4gICAgRW5kU2VydmljZUFDSzoge30sXG5cbiAgICBFbmRTZXJ2aWNlTkFLOiBOQUtCYXNlLFxuXG4gICAgVHJhbnNwb3J0RXZlbnRVcGRhdGU6IHtcbiAgICAgICAgVENQX0lQX0FERFJFU1M6IFwidGNwSXBBZGRyZXNzXCIsXG4gICAgICAgIFRDUF9QT1JUOiBcInRjcFBvcnRcIixcbiAgICB9LFxuXG4gICAgUmVnaXN0ZXJTZWNvbmRhcnlUcmFuc3BvcnQ6IHt9LFxuXG4gICAgUmVnaXN0ZXJTZWNvbmRhcnlUcmFuc3BvcnRBQ0s6IHt9LFxuXG4gICAgUmVnaXN0ZXJTZWNvbmRhcnlUcmFuc3BvcnROQUs6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBSRUFTT046IFwicmVhc29uXCIsXG4gICAgfSwgTkFLQmFzZSksXG59KTtcblxuQ29udHJvbEZyYW1lVGFncy5BdWRpbyA9IE9iamVjdC5mcmVlemUoe1xuICAgIFN0YXJ0U2VydmljZToge30sXG5cbiAgICBTdGFydFNlcnZpY2VBQ0s6IFN0YXJ0U2VydmljZUFDS0Jhc2UsXG5cbiAgICBTdGFydFNlcnZpY2VOQUs6IE5BS0Jhc2UsXG5cbiAgICBFbmRTZXJ2aWNlOiB7fSxcblxuICAgIEVuZFNlcnZpY2VBQ0s6IHt9LFxuXG4gICAgRW5kU2VydmljZU5BSzogTkFLQmFzZSxcbn0pO1xuXG5Db250cm9sRnJhbWVUYWdzLlZpZGVvID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgU3RhcnRTZXJ2aWNlOiBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgVklERU9fUFJPVE9DT0w6IFwidmlkZW9Qcm90b2NvbFwiLFxuICAgICAgICBWSURFT19DT0RFQzogXCJ2aWRlb0NvZGVjXCIsXG4gICAgfSwgU3RhcnRTZXJ2aWNlRGltZW5zaW9ucyksXG5cbiAgICBTdGFydFNlcnZpY2VBQ0s6IE9iamVjdC5hc3NpZ24oe30sIFN0YXJ0U2VydmljZUFDS0Jhc2UsIFN0YXJ0U2VydmljZURpbWVuc2lvbnMpLFxufSk7XG5cbmV4cG9ydCB7IENvbnRyb2xGcmFtZVRhZ3MgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0VudW19IFJwY1R5cGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgUnBjVHlwZSBleHRlbmRzIEVudW0ge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBOT1RJRklDQVRJT04oKSB7XG4gICAgICAgIHJldHVybiBScGNUeXBlLk1BUC5OT1RJRklDQVRJT047XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJFU1BPTlNFKCkge1xuICAgICAgICByZXR1cm4gUnBjVHlwZS5NQVAuUkVTUE9OU0U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJFUVVFU1QoKSB7XG4gICAgICAgIHJldHVybiBScGNUeXBlLk1BUC5SRVFVRVNUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfE51bWJlcn0gLSBSZXR1cm5zIG51bGwgaWYgdGhlIGVudW0gdmFsdWUgZG9lc24ndCBleGlzdFxuICAgICovXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBScGNUeXBlLnZhbHVlRm9yU3RyaW5nSW50ZXJuYWwodmFsdWUsIFJwY1R5cGUuTUFQKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJldHVybnMgdGhlIGtleSBvZiB0aGUgbWFwIHdpdGggdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWVcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxTdHJpbmd9IC0gUmV0dXJucyBudWxsIGlmIG5vdCBmb3VuZFxuICAgICovXG4gICAgc3RhdGljIGtleUZvclZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBScGNUeXBlLmtleUZvclZhbHVlSW50ZXJuYWwodmFsdWUsIFJwY1R5cGUuTUFQKTtcbiAgICB9XG59XG5cblJwY1R5cGUuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgJ05PVElGSUNBVElPTic6IDB4MixcbiAgICAnUkVTUE9OU0UnOiAweDEsXG4gICAgJ1JFUVVFU1QnOiAweDAsXG59KTtcblxuZXhwb3J0IHsgUnBjVHlwZSB9O1xuIiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY01lc3NhZ2UgfSBmcm9tICcuL1JwY01lc3NhZ2UuanMnO1xuaW1wb3J0IHsgUnBjVHlwZSB9IGZyb20gJy4vZW51bXMvUnBjVHlwZS5qcyc7XG5cbmNsYXNzIFJwY05vdGlmaWNhdGlvbiBleHRlbmRzIFJwY01lc3NhZ2Uge1xuXG5cdC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMuc2V0UlBDVHlwZShScGNUeXBlLk5PVElGSUNBVElPTik7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IFJwY05vdGlmaWNhdGlvbiB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5cbmltcG9ydCB7IFJwY01lc3NhZ2UgfSBmcm9tICcuL1JwY01lc3NhZ2UuanMnO1xuaW1wb3J0IHsgUnBjVHlwZSB9IGZyb20gJy4vZW51bXMvUnBjVHlwZS5qcyc7XG5cbmNsYXNzIFJwY1JlcXVlc3QgZXh0ZW5kcyBScGNNZXNzYWdlIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMuc2V0UlBDVHlwZShScGNUeXBlLlJFUVVFU1QpO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldENvcnJlbGF0aW9uSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JyZWxhdGlvbklEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkXG4gICAgKiBAcmV0dXJuIHtScGNNZXNzYWdlfVxuICAgICovXG4gICAgc2V0Q29ycmVsYXRpb25JRChpZCkge1xuICAgICAgICB0aGlzLl9jb3JyZWxhdGlvbklEID0gaWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgICovXG4gICAgZ2V0T25SUENSZXNwb25zZVByb21pc2UoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1Byb21pc2V9IHByb21pc2VcbiAgICAqIEByZXR1cm4ge1JwY01lc3NhZ2V9XG4gICAgKi9cbiAgICBzZXRPblJQQ1Jlc3BvbnNlUHJvbWlzZShwcm9taXNlKXtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVR5cGUoUHJvbWlzZSwgcHJvbWlzZSk7XG5cbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBScGNSZXF1ZXN0IH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi8uLi91dGlsL0VudW0uanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFbnVtfSBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgUmVzdWx0IGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgU1VDQ0VTUygpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuU1VDQ0VTUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVU5TVVBQT1JURURfUkVRVUVTVCgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuVU5TVVBQT1JURURfUkVRVUVTVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVU5TVVBQT1JURURfUkVTT1VSQ0UoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlVOU1VQUE9SVEVEX1JFUVVFU1Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IERJU0FMTE9XRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkRJU0FMTE9XRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJFSkVDVEVEKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5SRUpFQ1RFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgQUJPUlRFRCgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuQUJPUlRFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgSUdOT1JFRCgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuSUdOT1JFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgUkVUUlkoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlJFVFJZO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBJTl9VU0UoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLklOX1VTRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVkVISUNMRV9EQVRBX05PVF9BVkFJTEFCTEUoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlZFSElDTEVfREFUQV9OT1RfQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBUSU1FRF9PVVQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlRJTUVEX09VVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgSU5WQUxJRF9EQVRBKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5JTlZBTElEX0RBVEE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IENIQVJfTElNSVRfRVhDRUVERUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkNIQVJfTElNSVRfRVhDRUVERUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IElOVkFMSURfSUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLklOVkFMSURfSUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IERVUExJQ0FURV9OQU1FKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5EVVBMSUNBVEVfTkFNRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgQVBQTElDQVRJT05fTk9UX1JFR0lTVEVSRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkFQUExJQ0FUSU9OX05PVF9SRUdJU1RFUkVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBXUk9OR19MQU5HVUFHRSgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuV1JPTkdfTEFOR1VBR0U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IE9VVF9PRl9NRU1PUlkoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLk9VVF9PRl9NRU1PUlk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFRPT19NQU5ZX1BFTkRJTkdfUkVRVUVTVFMoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlRPT19NQU5ZX1BFTkRJTkdfUkVRVUVTVFM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFRPT19NQU5ZX0FQUExJQ0FUSU9OUygpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuVE9PX01BTllfQVBQTElDQVRJT05TO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBBUFBMSUNBVElPTl9SRUdJU1RFUkVEX0FMUkVBRFkoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkFQUExJQ0FUSU9OX1JFR0lTVEVSRURfQUxSRUFEWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgV0FSTklOR1MoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLldBUk5JTkdTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBHRU5FUklDX0VSUk9SKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5HRU5FUklDX0VSUk9SO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBVU0VSX0RJU0FMTE9XRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlVTRVJfRElTQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVFJVTkNBVEVEX0RBVEEoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlRSVU5DQVRFRF9EQVRBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBVTlNVUFBPUlRFRF9WRVJTSU9OKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5VTlNVUFBPUlRFRF9WRVJTSU9OO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBWRUhJQ0xFX0RBVEFfTk9UX0FMTE9XRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlZFSElDTEVfREFUQV9OT1RfQUxMT1dFRDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRklMRV9OT1RfRk9VTkQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkZJTEVfTk9UX0ZPVU5EO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBDQU5DRUxfUk9VVEUoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkNBTkNFTF9ST1VURTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgU0FWRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlNBVkVEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBJTlZBTElEX0NFUlQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLklOVkFMSURfQ0VSVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRVhQSVJFRF9DRVJUKCkge1xuICAgICAgICByZXR1cm4gUmVzdWx0Lk1BUC5FWFBJUkVEX0NFUlQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJFU1VNRV9GQUlMRUQoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlJFU1VNRV9GQUlMRUQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IERBVEFfTk9UX0FWQUlMQUJMRSgpIHtcbiAgICAgICAgcmV0dXJuIFJlc3VsdC5NQVAuREFUQV9OT1RfQVZBSUxBQkxFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBSRUFEX09OTFkoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLlJFQURfT05MWTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgQ09SUlVQVEVEX0RBVEEoKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQuTUFQLkNPUlJVUFRFRF9EQVRBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfFN0cmluZ30gLSBSZXR1cm5zIG51bGwgaWYgdGhlIGVudW0gdmFsdWUgZG9lc24ndCBleGlzdFxuICAgICovXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBSZXN1bHQudmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgUmVzdWx0Lk1BUCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIHRoZSBrZXkgb2YgdGhlIG1hcCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAqIEByZXR1cm4ge251bGx8U3RyaW5nfSAtIFJldHVybnMgbnVsbCBpZiBub3QgZm91bmRcbiAgICAqL1xuICAgIHN0YXRpYyBrZXlGb3JWYWx1ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gUmVzdWx0LmtleUZvclZhbHVlSW50ZXJuYWwodmFsdWUsIFJlc3VsdC5NQVApO1xuICAgIH1cblxufVxuXG5SZXN1bHQuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgJ1NVQ0NFU1MnOiAnU1VDQ0VTUycsXG4gICAgJ1VOU1VQUE9SVEVEX1JFUVVFU1QnOiAnVU5TVVBQT1JURURfUkVRVUVTVCcsXG4gICAgJ1VOU1VQUE9SVEVEX1JFU09VUkNFJzogJ1VOU1VQUE9SVEVEX1JFU09VUkNFJyxcbiAgICAnRElTQUxMT1dFRCc6ICdESVNBTExPV0VEJyxcbiAgICAnUkVKRUNURUQnOiAnUkVKRUNURUQnLFxuICAgICdBQk9SVEVEJzogJ0FCT1JURUQnLFxuICAgICdJR05PUkVEJzogJ0lHTk9SRUQnLFxuICAgICdSRVRSWSc6ICdSRVRSWScsXG4gICAgJ0lOX1VTRSc6ICdJTl9VU0UnLFxuICAgICdWRUhJQ0xFX0RBVEFfTk9UX0FWQUlMQUJMRSc6ICdWRUhJQ0xFX0RBVEFfTk9UX0FWQUlMQUJMRScsXG4gICAgJ1RJTUVEX09VVCc6ICdUSU1FRF9PVVQnLFxuICAgICdJTlZBTElEX0RBVEEnOiAnSU5WQUxJRF9EQVRBJyxcbiAgICAnQ0hBUl9MSU1JVF9FWENFRURFRCc6ICdDSEFSX0xJTUlUX0VYQ0VFREVEJyxcbiAgICAnSU5WQUxJRF9JRCc6ICdJTlZBTElEX0lEJyxcbiAgICAnRFVQTElDQVRFX05BTUUnOiAnRFVQTElDQVRFX05BTUUnLFxuICAgICdBUFBMSUNBVElPTl9OT1RfUkVHSVNURVJFRCc6ICdBUFBMSUNBVElPTl9OT1RfUkVHSVNURVJFRCcsXG4gICAgJ1dST05HX0xBTkdVQUdFJzogJ1dST05HX0xBTkdVQUdFJyxcbiAgICAnT1VUX09GX01FTU9SWSc6ICdPVVRfT0ZfTUVNT1JZJyxcbiAgICAnVE9PX01BTllfUEVORElOR19SRVFVRVNUUyc6ICdUT09fTUFOWV9QRU5ESU5HX1JFUVVFU1RTJyxcbiAgICAnVE9PX01BTllfQVBQTElDQVRJT05TJzogJ1RPT19NQU5ZX0FQUExJQ0FUSU9OUycsXG4gICAgJ0FQUExJQ0FUSU9OX1JFR0lTVEVSRURfQUxSRUFEWSc6ICdBUFBMSUNBVElPTl9SRUdJU1RFUkVEX0FMUkVBRFknLFxuICAgICdXQVJOSU5HUyc6ICdXQVJOSU5HUycsXG4gICAgJ0dFTkVSSUNfRVJST1InOiAnR0VORVJJQ19FUlJPUicsXG4gICAgJ1VTRVJfRElTQUxMT1dFRCc6ICdVU0VSX0RJU0FMTE9XRUQnLFxuICAgICdUUlVOQ0FURURfREFUQSc6ICdUUlVOQ0FURURfREFUQScsXG4gICAgJ1VOU1VQUE9SVEVEX1ZFUlNJT04nOiAnVU5TVVBQT1JURURfVkVSU0lPTicsXG4gICAgJ1ZFSElDTEVfREFUQV9OT1RfQUxMT1dFRCc6ICdWRUhJQ0xFX0RBVEFfTk9UX0FMTE9XRUQnLFxuICAgICdGSUxFX05PVF9GT1VORCc6ICdGSUxFX05PVF9GT1VORCcsXG4gICAgJ0NBTkNFTF9ST1VURSc6ICdDQU5DRUxfUk9VVEUnLFxuICAgICdTQVZFRCc6ICdTQVZFRCcsXG4gICAgJ0lOVkFMSURfQ0VSVCc6ICdJTlZBTElEX0NFUlQnLFxuICAgICdFWFBJUkVEX0NFUlQnOiAnRVhQSVJFRF9DRVJUJyxcbiAgICAnUkVTVU1FX0ZBSUxFRCc6ICdSRVNVTUVfRkFJTEVEJyxcbiAgICAnREFUQV9OT1RfQVZBSUxBQkxFJzogJ0RBVEFfTk9UX0FWQUlMQUJMRScsXG4gICAgJ1JFQURfT05MWSc6ICdSRUFEX09OTFknLFxuICAgICdDT1JSVVBURURfREFUQSc6ICdDT1JSVVBURURfREFUQScsXG59KTtcblxuZXhwb3J0IHsgUmVzdWx0IH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgUnBjTWVzc2FnZSB9IGZyb20gJy4vUnBjTWVzc2FnZS5qcyc7XG5pbXBvcnQgeyBScGNUeXBlIH0gZnJvbSAnLi9lbnVtcy9ScGNUeXBlLmpzJztcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gJy4vZW51bXMvUmVzdWx0LmpzJztcblxuY2xhc3MgUnBjUmVzcG9uc2UgZXh0ZW5kcyBScGNNZXNzYWdlIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMuc2V0UlBDVHlwZShScGNUeXBlLlJFU1BPTlNFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldENvcnJlbGF0aW9uSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JyZWxhdGlvbklEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkXG4gICAgKiBAcmV0dXJuIHtScGNSZXNwb25zZX1cbiAgICAqL1xuICAgIHNldENvcnJlbGF0aW9uSUQoaWQpIHtcbiAgICAgICAgdGhpcy5fY29ycmVsYXRpb25JRCA9IGlkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAqL1xuICAgIGdldFN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlcihLRVlfU1VDQ0VTUyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtScGNSZXNwb25zZX1cbiAgICAqL1xuICAgIHNldFN1Y2Nlc3Moc3VjY2Vzcykge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihLRVlfU1VDQ0VTUywgc3VjY2Vzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICovXG4gICAgZ2V0SW5mbygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKEtFWV9JTkZPKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1JwY1Jlc3BvbnNlfVxuICAgICovXG4gICAgc2V0SW5mbyhpbmZvKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKEtFWV9JTkZPLCBpbmZvKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtSZXN1bHR9XG4gICAgKi9cbiAgICBnZXRSZXN1bHRDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoUmVzdWx0LCBLRVlfUkVTVUxUX0NPREUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7UnBjUmVzcG9uc2V9XG4gICAgKi9cbiAgICBzZXRSZXN1bHRDb2RlKHJlc3VsdENvZGUpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVR5cGUoUmVzdWx0LCByZXN1bHRDb2RlKTtcblxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihLRVlfUkVTVUxUX0NPREUsIHJlc3VsdENvZGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cblJwY1Jlc3BvbnNlLktFWV9TVUNDRVNTICAgICA9ICdzdWNjZXNzJztcblJwY1Jlc3BvbnNlLktFWV9JTkZPICAgICAgICA9ICdpbmZvJztcblJwY1Jlc3BvbnNlLktFWV9SRVNVTFRfQ09ERSA9ICdyZXN1bHRDb2RlJztcblxuZXhwb3J0IHsgUnBjUmVzcG9uc2UgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbC9FbnVtLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7RW51bX0gRnVuY3Rpb25JRFxuICogQHByb3BlcnR5IHtPYmplY3R9IE1BUFxuICovXG5jbGFzcyBGdW5jdGlvbklEIGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3IgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IEFERF9DT01NQU5EKCl7XG4gICAgICAgIHJldHVybiBGdW5jdGlvbklELk1BUC5BZGRDb21tYW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgc3RhdGljIGdldCBPTl9MQU5HVUFHRV9DSEFOR0UoKXtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uSUQuTUFQLk9uTGFuZ3VhZ2VDaGFuZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDb25maXJtcyB3aGV0aGVyIHRoZSB2YWx1ZSBwYXNzZWQgaW4gZXhpc3RzIGluIHRoZSBFbnVtcyBvZiB0aGlzIGNsYXNzXG4gICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAqIEByZXR1cm4ge251bGx8TnVtYmVyfSAtIFJldHVybnMgbnVsbCBpZiB0aGUgZW51bSB2YWx1ZSBkb2Vzbid0IGV4aXN0XG4gICAgKi9cbiAgICBzdGF0aWMgdmFsdWVGb3JTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uSUQudmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgRnVuY3Rpb25JRC5NQVApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmV0dXJucyB0aGUga2V5IG9mIHRoZSBtYXAgd2l0aCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZVxuICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfFN0cmluZ30gLSBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kXG4gICAgKi9cbiAgICBzdGF0aWMga2V5Rm9yVmFsdWUodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEZ1bmN0aW9uSUQua2V5Rm9yVmFsdWVJbnRlcm5hbCh2YWx1ZSwgRnVuY3Rpb25JRC5NQVApO1xuICAgIH1cbn1cblxuRnVuY3Rpb25JRC5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgICAnQWRkQ29tbWFuZCc6IDB4MDUsXG4gICAgJ09uTGFuZ3VhZ2VDaGFuZ2UnOiAweDgwMEEsXG4gICAgLy9UT0RPIHRoaXMgbmVlZHMgdG8gYmUgY29tcGxldGVseSBmaWxsZWQgb3V0IHN0aWxsXG59KTtcblxuZXhwb3J0IHsgRnVuY3Rpb25JRCB9IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IEVudW0gfSBmcm9tICcuLi8uLi91dGlsL0VudW0uanMnO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFbnVtfSBJbWFnZVR5cGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgSW1hZ2VUeXBlIGV4dGVuZHMgRW51bSB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFNUQVRJQygpIHtcbiAgICAgICAgcmV0dXJuIEltYWdlVHlwZS5NQVAuU1RBVElDO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBEWU5BTUlDKCkge1xuICAgICAgICByZXR1cm4gSW1hZ2VUeXBlLk1BUC5EWU5BTUlDO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfFN0cmluZ30gLSBSZXR1cm5zIG51bGwgaWYgdGhlIGVudW0gdmFsdWUgZG9lc24ndCBleGlzdFxuICAgICovXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBJbWFnZVR5cGUudmFsdWVGb3JTdHJpbmdJbnRlcm5hbCh2YWx1ZSwgSW1hZ2VUeXBlLk1BUCk7XG4gICAgfVxufVxuXG5JbWFnZVR5cGUuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgJ1NUQVRJQyc6ICdTVEFUSUMnLFxuICAgICdEWU5BTUlDJzogJ0RZTkFNSUMnLFxufSk7XG5cbmV4cG9ydCB7IEltYWdlVHlwZSB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBFbnVtIH0gZnJvbSAnLi4vLi4vdXRpbC9FbnVtLmpzJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7RW51bX0gTGFuZ3VhZ2VcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgTGFuZ3VhZ2UgZXh0ZW5kcyBFbnVtIHtcblxuICAgIC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvciBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRU5fU0EoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRU5fU0E7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEhFX0lMKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkhFX0lMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBST19STygpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5ST19STztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgVUtfVUEoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuVUtfVUE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IElEX0lEKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLklEX0lEO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBWSV9WTigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5WSV9WTjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTVNfTVkoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuTVNfTVk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEhJX0lOKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkhJX0lOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBOTF9CRSgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5OTF9CRTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRUxfR1IoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRUxfR1I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEhVX0hVKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkhVX0hVO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBGSV9GSSgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5GSV9GSTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgU0tfU0soKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuU0tfU0s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVOX1VTKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkVOX1VTO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBFU19NWCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5FU19NWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRlJfQ0EoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRlJfQ0E7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IERFX0RFKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkRFX0RFO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBFU19FUygpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5FU19FUztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRU5fR0IoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRU5fR0I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFJVX1JVKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlJVX1JVO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBUUl9UUigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5UUl9UUjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgUExfUEwoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuUExfUEw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEZSX0ZSKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkZSX0ZSO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBJVF9JVCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5JVF9JVDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgU1ZfU0UoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuU1ZfU0U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFBUX1BUKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlBUX1BUO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBOTF9OTCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5OTF9OTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgRU5fQVUoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuRU5fQVU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IFpIX0NOKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLlpIX0NOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBaSF9UVygpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5aSF9UVztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgSkFfSlAoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuSkFfSlA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEFSX1NBKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkFSX1NBO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBLT19LUigpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5LT19LUjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgUFRfQlIoKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuUFRfQlI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IENTX0NaKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkNTX0NaO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBEQV9ESygpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5EQV9ESztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtTdHJpbmd9IFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgTk9fTk8oKSB7XG4gICAgICAgIHJldHVybiBMYW5ndWFnZS5NQVAuTk9fTk87XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U3RyaW5nfSBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IEVOX0lOKCkge1xuICAgICAgICByZXR1cm4gTGFuZ3VhZ2UuTUFQLkVOX0lOO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm4ge1N0cmluZ30gXG4gICAgICovXG4gICAgc3RhdGljIGdldCBUSF9USCgpIHtcbiAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUC5USF9USDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENvbmZpcm1zIHdoZXRoZXIgdGhlIHZhbHVlIHBhc3NlZCBpbiBleGlzdHMgaW4gdGhlIEVudW1zIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICogQHJldHVybiB7bnVsbHxTdHJpbmd9IC0gUmV0dXJucyBudWxsIGlmIHRoZSBlbnVtIHZhbHVlIGRvZXNuJ3QgZXhpc3RcbiAgICAqL1xuICAgIHN0YXRpYyB2YWx1ZUZvclN0cmluZyh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gTGFuZ3VhZ2UuTUFQKSB7XG4gICAgICAgICAgICBpZiAoTGFuZ3VhZ2UuTUFQW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIExhbmd1YWdlLk1BUFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5MYW5ndWFnZS5NQVAgPSBPYmplY3QuZnJlZXplKHtcbiAgICAnRU5fU0EnOiAnRU4tU0EnLFxuICAgICdIRV9JTCc6ICdIRS1JTCcsXG4gICAgJ1JPX1JPJzogJ1JPLVJPJyxcbiAgICAnVUtfVUEnOiAnVUstVUEnLFxuICAgICdJRF9JRCc6ICdJRC1JRCcsXG4gICAgJ1ZJX1ZOJzogJ1ZJLVZOJyxcbiAgICAnTVNfTVknOiAnTVMtTVknLFxuICAgICdISV9JTic6ICdISS1JTicsXG4gICAgJ05MX0JFJzogJ05MLUJFJyxcbiAgICAnRUxfR1InOiAnRUwtR1InLFxuICAgICdIVV9IVSc6ICdIVS1IVScsXG4gICAgJ0ZJX0ZJJzogJ0ZJLUZJJyxcbiAgICAnU0tfU0snOiAnU0stU0snLFxuICAgICdFTl9VUyc6ICdFTi1VUycsXG4gICAgJ0VTX01YJzogJ0VTLU1YJyxcbiAgICAnRlJfQ0EnOiAnRlItQ0EnLFxuICAgICdERV9ERSc6ICdERS1ERScsXG4gICAgJ0VTX0VTJzogJ0VTLUVTJyxcbiAgICAnRU5fR0InOiAnRU4tR0InLFxuICAgICdSVV9SVSc6ICdSVS1SVScsXG4gICAgJ1RSX1RSJzogJ1RSLVRSJyxcbiAgICAnUExfUEwnOiAnUEwtUEwnLFxuICAgICdGUl9GUic6ICdGUi1GUicsXG4gICAgJ0lUX0lUJzogJ0lULUlUJyxcbiAgICAnU1ZfU0UnOiAnU1YtU0UnLFxuICAgICdQVF9QVCc6ICdQVC1QVCcsXG4gICAgJ05MX05MJzogJ05MLU5MJyxcbiAgICAnRU5fQVUnOiAnRU4tQVUnLFxuICAgICdaSF9DTic6ICdaSC1DTicsXG4gICAgJ1pIX1RXJzogJ1pILVRXJyxcbiAgICAnSkFfSlAnOiAnSkEtSlAnLFxuICAgICdBUl9TQSc6ICdBUi1TQScsXG4gICAgJ0tPX0tSJzogJ0tPLUtSJyxcbiAgICAnUFRfQlInOiAnUFQtQlInLFxuICAgICdDU19DWic6ICdDUy1DWicsXG4gICAgJ0RBX0RLJzogJ0RBLURLJyxcbiAgICAnTk9fTk8nOiAnTk8tTk8nLFxuICAgICdFTl9JTic6ICdFTi1JTicsXG4gICAgJ1RIX1RIJzogJ1RILVRIJyxcbn0pO1xuXG5cbmV4cG9ydCB7IExhbmd1YWdlIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFJwY1N0cnVjdCB9IGZyb20gJy4uL1JwY1N0cnVjdC5qcyc7XG5pbXBvcnQgeyBJbWFnZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9JbWFnZVR5cGUuanMnO1xuXG5jbGFzcyBJbWFnZSBleHRlbmRzIFJwY1N0cnVjdCB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycykge1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICogQHJldHVybiB7SW1hZ2V9XG4gICAgKi9cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihJbWFnZS5LRVlfVkFMVUUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKEltYWdlLktFWV9WQUxVRSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge0ltYWdlVHlwZX0gdHlwZVxuICAgICogQHJldHVybiB7SW1hZ2V9XG4gICAgKi9cbiAgICBzZXRJbWFnZVR5cGUodHlwZSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRlVHlwZShJbWFnZVR5cGUsIHR5cGUpO1xuXG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKEltYWdlLktFWV9JTUFHRV9UWVBFLCB0eXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtJbWFnZVR5cGV9XG4gICAgKi9cbiAgICBnZXRJbWFnZVR5cGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdChJbWFnZSwgSW1hZ2UuS0VZX0lNQUdFX1RZUEUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtCb29sZWFufSBpc1RlbXBsYXRlXG4gICAgKiBAcmV0dXJuIHtJbWFnZX1cbiAgICAqL1xuICAgIHNldElzVGVtcGxhdGUoaXNUZW1wbGF0ZSkge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihJbWFnZS5LRVlfSVNfVEVNUExBVEUsIGlzVGVtcGxhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgKi9cbiAgICBnZXRJc1RlbXBsYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIoSW1hZ2UuS0VZX0lTX1RFTVBMQVRFKTtcbiAgICB9XG5cbn1cblxuSW1hZ2UuS0VZX1ZBTFVFID0gJ3ZhbHVlJztcbkltYWdlLktFWV9JTUFHRV9UWVBFID0gJ2ltYWdlVHlwZSc7XG5JbWFnZS5LRVlfSVNfVEVNUExBVEUgPSAnaXNUZW1wbGF0ZSc7XG5cbmV4cG9ydCB7IEltYWdlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgUnBjU3RydWN0IH0gZnJvbSAnLi4vUnBjU3RydWN0LmpzJztcblxuY2xhc3MgTWVudVBhcmFtcyBleHRlbmRzIFJwY1N0cnVjdCB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3IocGFyYW1ldGVycykge1xuICAgICAgICBzdXBlcihwYXJhbWV0ZXJzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBpZFxuICAgICogQHJldHVybiB7TWVudVBhcmFtc31cbiAgICAqL1xuICAgIHNldFBhcmVudElEKGlkKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKE1lbnVQYXJhbXMuS0VZX1BBUkVOVF9JRCwgaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge051bWJlcn1cbiAgICAqL1xuICAgIGdldFBhcmVudElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIoTWVudVBhcmFtcy5LRVlfUEFSRU5UX0lEKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvblxuICAgICogQHJldHVybiB7TWVudVBhcmFtc31cbiAgICAqL1xuICAgIHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKE1lbnVQYXJhbXMuS0VZX1BPU0lUSU9OLCBwb3NpdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgZ2V0UG9zaXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlcihNZW51UGFyYW1zLktFWV9QT1NJVElPTik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gbWVudU5hbWVcbiAgICAqIEByZXR1cm4ge01lbnVQYXJhbXN9XG4gICAgKi9cbiAgICBzZXRNZW51TmFtZShtZW51TmFtZSkge1xuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihNZW51UGFyYW1zLktFWV9NRU5VX05BTUUsIG1lbnVOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge1N0cmluZ31cbiAgICAqL1xuICAgIGdldE1lbnVOYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIoTWVudVBhcmFtcy5LRVlfTUVOVV9OQU1FKTtcbiAgICB9XG5cbn1cblxuTWVudVBhcmFtcy5LRVlfUEFSRU5UX0lEID0gJ3BhcmVudElEJztcbk1lbnVQYXJhbXMuS0VZX1BPU0lUSU9OICA9ICdwb3NpdGlvbic7XG5NZW51UGFyYW1zLktFWV9NRU5VX05BTUUgPSAnbWVudU5hbWUnO1xuXG5leHBvcnQgeyBNZW51UGFyYW1zIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgUnBjUmVxdWVzdCB9IGZyb20gJy4uL1JwY1JlcXVlc3QuanMnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi9zdHJ1Y3RzL0ltYWdlLmpzJztcbmltcG9ydCB7IE1lbnVQYXJhbXMgfSBmcm9tICcuLi9zdHJ1Y3RzL01lbnVQYXJhbXMuanMnO1xuaW1wb3J0IHsgRnVuY3Rpb25JRCB9IGZyb20gJy4uL2VudW1zL0Z1bmN0aW9uSUQuanMnO1xuXG5jbGFzcyBBZGRDb21tYW5kIGV4dGVuZHMgUnBjUmVxdWVzdCB7XG5cbiAgICAvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoc3RvcmUpO1xuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTmFtZShGdW5jdGlvbklELkFERF9DT01NQU5EKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGlkXG4gICAgKiBAcmV0dXJuIHtBZGRDb21tYW5kfVxuICAgICovXG4gICAgc2V0Q21kSUQoaWQpIHtcbiAgICAgICAgdGhpcy5zZXRQYXJhbWV0ZXIoQWRkQ29tbWFuZC5LRVlfQ01EX0lELCBpZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICovXG4gICAgZ2V0Q21kSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBhcmFtZXRlcihBZGRDb21tYW5kLktFWV9DTURfSUQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtNZW51UGFyYW1zfSBtZW51UGFyYW1zXG4gICAgKiBAcmV0dXJuIHtBZGRDb21tYW5kfVxuICAgICovXG4gICAgc2V0TWVudVBhcmFtcyhtZW51UGFyYW1zKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVUeXBlKE1lbnVQYXJhbXMsIG1lbnVQYXJhbXMpO1xuXG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKEFkZENvbW1hbmQuS0VZX01FTlVfUEFSQU1TLCBtZW51UGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgKi9cbiAgICBnZXRNZW51UGFyYW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoTWVudVBhcmFtcywgQWRkQ29tbWFuZC5LRVlfTUVOVV9QQVJBTVMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtBcnJheTxTdHJpbmc+fSB2ckNvbW1hbmRzXG4gICAgKiBAcmV0dXJuIHtBZGRDb21tYW5kfVxuICAgICovXG4gICAgc2V0VnJDb21tYW5kcyh2ckNvbW1hbmRzKSB7XG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKEFkZENvbW1hbmQuS0VZX1ZSX0NPTU1BTkRTLCB2ckNvbW1hbmRzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtBcnJheTxTdHJpbmc+fVxuICAgICovXG4gICAgZ2V0VnJDb21tYW5kcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKEFkZENvbW1hbmQuS0VZX1ZSX0NPTU1BTkRTKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7SW1hZ2V9IGljb25cbiAgICAqIEByZXR1cm4ge0FkZENvbW1hbmR9XG4gICAgKi9cbiAgICBzZXRDbWRJY29uKGljb24pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVR5cGUoSW1hZ2UsIGljb24pO1xuXG4gICAgICAgIHRoaXMuc2V0UGFyYW1ldGVyKEFkZENvbW1hbmQuS0VZX0NNRF9JQ09OLCBpY29uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtJbWFnZX1cbiAgICAqL1xuICAgIGdldENtZEljb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdChJbWFnZSwgQWRkQ29tbWFuZC5LRVlfQ01EX0lDT04pO1xuICAgIH1cblxufVxuXG5BZGRDb21tYW5kLktFWV9DTURfSUNPTiA9ICdjbWRJY29uJztcbkFkZENvbW1hbmQuS0VZX01FTlVfUEFSQU1TID0gJ21lbnVQYXJhbXMnO1xuQWRkQ29tbWFuZC5LRVlfQ01EX0lEID0gJ2NtZElEJztcbkFkZENvbW1hbmQuS0VZX1ZSX0NPTU1BTkRTID0gJ3ZyQ29tbWFuZHMnO1xuXG5leHBvcnQgeyBBZGRDb21tYW5kIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgUnBjTm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vUnBjTm90aWZpY2F0aW9uLmpzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vZW51bXMvTGFuZ3VhZ2UuanMnO1xuaW1wb3J0IHsgRnVuY3Rpb25JRCB9IGZyb20gJy4uL2VudW1zL0Z1bmN0aW9uSUQuanMnO1xuXG5jbGFzcyBPbkxhbmd1YWdlQ2hhbmdlIGV4dGVuZHMgUnBjTm90aWZpY2F0aW9uIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzdG9yZSkge1xuICAgICAgICBzdXBlcihzdG9yZSk7XG4gICAgICAgIHRoaXMuc2V0RnVuY3Rpb25OYW1lKEZ1bmN0aW9uSUQuT05fTEFOR1VBR0VfQ0hBTkdFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7TGFuZ3VhZ2V9IGxhbmdhdWdlXG4gICAgKiBAcmV0dXJuIHtPbkxhbmd1YWdlQ2hhbmdlfVxuICAgICovXG4gICAgc2V0TGFuZ3VhZ2UobGFuZ2F1Z2UpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVR5cGUoTGFuZ3VhZ2UsIGxhbmd1YWdlKTtcblxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihPbkxhbmd1YWdlQ2hhbmdlLktFWV9MQU5HVUFHRSwgbGFuZ3VhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge0xhbmd1YWdlfVxuICAgICovXG4gICAgZ2V0TGFuZ3VhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdChMYW5ndWFnZSwgT25MYW5ndWFnZUNoYW5nZS5LRVlfTEFOR1VBR0UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtMYW5ndWFnZX0gbGFuZ2F1Z2VcbiAgICAqIEByZXR1cm4ge09uTGFuZ3VhZ2VDaGFuZ2V9XG4gICAgKi9cbiAgICBzZXRITUlEaXNwbGF5TGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVR5cGUoTGFuZ3VhZ2UsIGxhbmd1YWdlKTtcblxuICAgICAgICB0aGlzLnNldFBhcmFtZXRlcihPbkxhbmd1YWdlQ2hhbmdlLktFWV9ITUlfRElTUExBWV9MQU5HVUFHRSwgbGFuZ3VhZ2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge0xhbmd1YWdlfVxuICAgICovXG4gICAgZ2V0SE1JRGlzcGxheUxhbmd1YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3QoTGFuZ3VhZ2UsIE9uTGFuZ3VhZ2VDaGFuZ2UuS0VZX0hNSV9ESVNQTEFZX0xBTkdVQUdFKTtcbiAgICB9XG59XG5cbk9uTGFuZ3VhZ2VDaGFuZ2UuS0VZX0xBTkdVQUdFID0gJ2xhbmd1YWdlJztcbk9uTGFuZ3VhZ2VDaGFuZ2UuS0VZX0hNSV9ESVNQTEFZX0xBTkdVQUdFID0gJ2htaURpc3BsYXlMYW5ndWFnZSc7XG5cbmV4cG9ydCB7IE9uTGFuZ3VhZ2VDaGFuZ2UgfTtcbiIsIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuICogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4gKiBkaXN0cmlidXRpb24uXG4gKlxuICogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiAqIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuICogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4gKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4gKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4gKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuICogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4gKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuICogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG5pbXBvcnQgeyBGcmFtZVR5cGUgfSBmcm9tICcuLi9wcm90b2NvbC9lbnVtcy9GcmFtZVR5cGUuanMnO1xuaW1wb3J0IHsgU2RsUGFja2V0IH0gZnJvbSAnLi4vcHJvdG9jb2wvU2RsUGFja2V0LmpzJztcbmltcG9ydCB7IFNkbFByb3RvY29sQmFzZSB9IGZyb20gJy4uL3Byb3RvY29sL1NkbFByb3RvY29sQmFzZS5qcyc7XG5cblxuY2xhc3MgU2RsUHNtIHtcdFx0XHRcdFx0XHRcdC8vVE9ETyBjaGVjayB0byBzZWUgaWYgaXQncyBiZXR0ZXIgdG8gdXNlICc9PScgb3IgJz09PSdcblx0XG5cdC8qKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyBhbGwgaW50ZXJuYWwgbWVtYmVycyB0byBkZWZhdWx0XG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gU2RsUHNtLlNUQVJUX1NUQVRFO1xuICAgICAgICB0aGlzLl92ZXJzaW9uID0gMDtcbiAgICAgICAgdGhpcy5fZW5jcnlwdGlvbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mcmFtZVR5cGUgPSBGcmFtZVR5cGUuU0lOR0xFO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlVHlwZSA9IDA7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xGcmFtZUluZm8gPSBudWxsO1xuICAgICAgICB0aGlzLl9zZXNzaW9uSUQgPSBudWxsO1xuICAgICAgICB0aGlzLl9kdW1wU2l6ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2RhdGFMZW5ndGggPSAwO1xuICAgICAgICB0aGlzLl9tZXNzYWdlSUQgPSAwO1xuICAgICAgICB0aGlzLl9wYXlsb2FkID0gbnVsbDtcblx0fVxuXG5cdC8qKlxuICAgICAqIEByZXR1cm4ge051bWJlcn0gLSBTdGF0ZSByZXByZXNlbnRlZCBieSBhIE51bWJlclxuICAgICAqL1xuICAgIGdldFN0YXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U2RsUGFja2V0fSAtIFJldHVybnMgbnVsbCBpZiBub3QgY29tcGxldGVcbiAgICAgKi9cbiAgICBnZXRGb3JtZWRQYWNrZXQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBTZGxQc20uRklOSVNIRURfU1RBVEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU2RsUGFja2V0KHRoaXMuX3ZlcnNpb24sIHRoaXMuX2VuY3J5cHRpb24sIHRoaXMuX2ZyYW1lVHlwZSwgdGhpcy5fc2VydmljZVR5cGUsIHRoaXMuX2NvbnRyb2xGcmFtZUluZm8sIHRoaXMuX3Nlc3Npb25JRCwgdGhpcy5fZGF0YUxlbmd0aCwgdGhpcy5fbWVzc2FnZUlELCB0aGlzLl9wYXlsb2FkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEgLSBSZXByZXNlbnRzIGEgYnl0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFuZGxlQnl0ZShkYXRhKSB7XG4gICAgICAgIHRoaXMuX3N0YXRlID0gdGhpcy5fdHJhbnNpdGlvbk9uSW5wdXQoZGF0YSwgdGhpcy5fc3RhdGUpO1xuXG4gICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PSBTZGxQc20uRVJST1JfU1RBVEUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJhd0J5dGUgLSBSZXByZXNlbnRzIGEgYnl0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0ZVxuICAgICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdHJhbnNpdGlvbk9uSW5wdXQocmF3Qnl0ZSwgc3RhdGUpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBTZGxQc20uU1RBUlRfU1RBVEU6XG5cbiAgICAgICAgICAgICAgICB0aGlzLl92ZXJzaW9uID0gKHJhd0J5dGUgJiBTZGxQc20uVkVSU0lPTl9NQVNLKT4+NDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl92ZXJzaW9uID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNkbFBzbS5FUlJPUl9TVEFURTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZW5jcnlwdGlvbiA9ICgxID09IChyYXdCeXRlICYgU2RsUHNtLkVOQ1JZUFRJT05fTUFTSyk+PjMpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fZnJhbWVUeXBlID0gcmF3Qnl0ZSAmIFNkbFBzbS5GUkFNRV9UWVBFX01BU0s7XG5cbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuX3ZlcnNpb24gPCAxIHx8IHRoaXMuX3ZlcnNpb24gPiA1KVxuICAgICAgICAgICAgICAgICAgICAmJiB0aGlzLl9mcmFtZVR5cGUgIT0gU2RsUGFja2V0LkZSQU1FX1RZUEVfQ09OVFJPTCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9mcmFtZVR5cGUgPCBTZGxQYWNrZXQuRlJBTUVfVFlQRV9DT05UUk9MIHx8IHRoaXMuX2ZyYW1lVHlwZSA+IFNkbFBhY2tldC5GUkFNRV9UWVBFX0NPTlNFQ1VUSVZFKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBTZGxQc20uRVJST1JfU1RBVEU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFNkbFBzbS5TRVJWSUNFX1RZUEVfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLlNFUlZJQ0VfVFlQRV9TVEFURTpcblxuXHRcdHRoaXMuX3NlcnZpY2VUeXBlID0gcmF3Qnl0ZSAmIDB4RkY7XG5cdFx0cmV0dXJuIFNkbFBzbS5DT05UUk9MX0ZSQU1FX0lORk9fU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkNPTlRST0xfRlJBTUVfSU5GT19TVEFURTpcblx0XHRcdFx0XG5cdFx0dGhpcy5fY29udHJvbEZyYW1lSW5mbyA9IHJhd0J5dGUgJiAweEZGO1xuXHRcdFx0XHRzd2l0Y2godGhpcy5fZnJhbWVUeXBlKXtcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX0NPTlRST0w6XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX1NJTkdMRTpcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX0ZJUlNUOlxuXHRcdFx0XHRcdFx0aWYodGhpcy5fY29udHJvbEZyYW1lSW5mbyAhPSAweDAwKXtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5FUlJPUl9TVEFURTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgU2RsUGFja2V0LkZSQU1FX1RZUEVfQ09OU0VDVVRJVkU6XG5cdFx0XHRcdFx0XHQvL0l0IG1pZ2h0IGJlIGEgZ29vZCBpZGVhIHRvIGNoZWNrIHBhY2tldCBzZXF1ZW5jZSBudW1iZXJzIGhlcmVcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1x0XHRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBTZGxQc20uU0VTU0lPTl9JRF9TVEFURTtcblxuICAgICAgICAgICAgY2FzZSBTZGxQc20uU0VTU0lPTl9JRF9TVEFURTpcblx0XHRcdFx0XG5cdFx0dGhpcy5fc2Vzc2lvbklEID0gcmF3Qnl0ZSAmIDB4RkY7XG5cdFx0XHRcdHJldHVybiBTZGxQc20uREFUQV9TSVpFXzFfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkRBVEFfU0laRV8xX1NUQVRFOlxuXHRcdFx0XHRcblx0XHR0aGlzLl9kYXRhTGVuZ3RoICs9IChyYXdCeXRlICYgMHhGRikgPDwgMjQ7IC8vU2hpZnQgMyBieXRlcyB4IDggYml0c1xuXHRcdFx0XHRyZXR1cm4gU2RsUHNtLkRBVEFfU0laRV8yX1NUQVRFO1xuXG4gICAgICAgICAgICBjYXNlIFNkbFBzbS5EQVRBX1NJWkVfMl9TVEFURTpcblx0XHRcdFx0XG5cdFx0dGhpcy5fZGF0YUxlbmd0aCArPSAocmF3Qnl0ZSAmIDB4RkYpIDw8IDE2OyAvL1NpZnQgMiBieXRlcyB4IDggYml0c1xuXHRcdFx0XHRyZXR1cm4gREFUQV9TSVpFXzNfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkRBVEFfU0laRV8zX1NUQVRFOlxuXHRcdFx0XHRcblx0XHR0aGlzLl9kYXRhTGVuZ3RoICs9IChyYXdCeXRlICYgMHhGRikgPDwgODsgLy9TaWZ0IDEgYnl0ZSB4IDggYml0c1xuXHRcdFx0XHRyZXR1cm4gREFUQV9TSVpFXzRfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkRBVEFfU0laRV80X1NUQVRFOlxuXHRcdFx0XHRcblx0XHR0aGlzLl9kYXRhTGVuZ3RoICs9IChyYXdCeXRlICYgMHhGRilcblx0XHRcdFx0XG5cdFx0XHRcdC8vV2Ugc2hvdWxkIGhhdmUgZGF0YSBsZW5ndGggbm93IGZvciB0aGUgcHVtcCBzdGF0ZVxuXHRcdHN3aXRjaCAodGhpcy5fZnJhbWVUeXBlKSB7IC8vSWYgYWxsIGlzIGNvcnJlY3Qgd2Ugc2hvdWxkIGJyZWFrIG91dCBvZiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnRcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX1NJTkdMRTpcblx0XHRcdFx0XHRjYXNlIFNkbFBhY2tldC5GUkFNRV9UWVBFX0NPTlNFQ1VUSVZFOlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBTZGxQYWNrZXQuRlJBTUVfVFlQRV9DT05UUk9MOlxuXHRcdFx0XHRcdFx0Ly9Paywgd2VsbCBoZXJlJ3Mgc29tZSBpbnRlcmVzdGluZyBiaXQgb2Yga25vd2xlZGdlLiBCZWNhdXNlIHRoZSBzdGFydCBzZXNzaW9uIHJlcXVlc3QgaXMgZnJvbSB0aGUgcGhvbmUgd2l0aCBubyBrbm93bGVkZ2Ugb2YgdmVyc2lvbiBpdCBzZW5kcyBvdXRcblx0XHRcdFx0XHRcdC8vYSB2MSBwYWNrZXQuIFRIRVJFRk9SRSB0aGVyZSBpcyBubyBtZXNzYWdlIGlkIGZpZWxkLiAqKioqIE5vdyB5b3Uga25vdyBhbmQga25vd2luZyBpcyBoYWxmIHRoZSBiYXR0bGUgKioqKlxuXHRcdFx0XHRpZiAodGhpcy5fdmVyc2lvbiA9PSAxICYmIHRoaXMuX2NvbnRyb2xGcmFtZUluZm8gPT0gU2RsUGFja2V0LkZSQU1FX0lORk9fU1RBUlRfU0VSVklDRSkge1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuX2RhdGFMZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBTZGxQc20uRklOSVNIRURfU1RBVEU7IC8vV2UgYXJlIGRvbmUgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgcGF5bG9hZFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5fZGF0YUxlbmd0aCA8PSBTZGxQcm90b2NvbEJhc2UuVjFfVjJfTVRVX1NJWkUgLSBTZGxQcm90b2NvbEJhc2UuVjFfSEVBREVSX1NJWkUpIHsgLy8gc2l6ZXMgZnJvbSBwcm90b2NvbC9TZGxQcm90b2NvbC5qc1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuX3BheWxvYWQgPSBuZXcgYnl0ZVt0aGlzLl9kYXRhTGVuZ3RoXTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0dGhpcy5fZHVtcFNpemUgPSB0aGlzLl9kYXRhTGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkRBVEFfUFVNUF9TVEFURTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrOyBcblx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FzZSBTZGxQYWNrZXQuRlJBTUVfVFlQRV9GSVJTVDpcblx0XHRcdFx0XHRcdGlmIChkYXRhTGVuZ3RoID09IFNkbFBzbS5GSVJTVF9GUkFNRV9EQVRBX1NJWkUpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRoaXMuX3ZlcnNpb24gPT0gMSkgeyAvL1ZlcnNpb24gMSBwYWNrZXRzIHdpbGwgbm90IGhhdmUgbWVzc2FnZSBpZCdzXG5cdFx0XHRcdFx0aWYgKHRoaXMuX2RhdGFMZW5ndGggPT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5GSU5JU0hFRF9TVEFURTsgLy9XZSBhcmUgZG9uZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBwYXlsb2FkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0aGlzLl9kYXRhTGVuZ3RoIDw9IFNkbFByb3RvY29sQmFzZS5WMV9WMl9NVFVfU0laRSAtIFNkbFByb3RvY29sQmFzZS5WMV9IRUFERVJfU0laRSkgeyAvLyBzaXplcyBmcm9tIHByb3RvY29sL1NkbFByb3RvY29sLmphdmFcblx0XHRcdFx0XHRcdHRoaXMuX3BheWxvYWQgPSBuZXcgVWludDhBcnJheSh0aGlzLl9kYXRhTGVuZ3RoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5FUlJPUl9TVEFURTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5fZHVtcFNpemUgPSB0aGlzLl9kYXRhTGVuZ3RoO1xuXHRcdFx0XHRcdHJldHVybiBTZGxQc20uREFUQV9QVU1QX1NUQVRFO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBTZGxQc20uTUVTU0FHRV8xX1NUQVRFO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLk1FU1NBR0VfMV9TVEFURTpcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuX21lc3NhZ2VJRCArPSAocmF3Qnl0ZSAmIDB4RkYpIDw8IDI0OyAvLyBTaGlmdCAzIGJ5dGVzIHggOCBiaXRzXG5cdFx0XHRcdHJldHVybiBTZGxQc20uTUVTU0FHRV8yX1NUQVRFO1xuXHRcdFx0XHRcbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLk1FU1NBR0VfMl9TVEFURTpcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuX21lc3NhZ2VJRCArPSAocmF3Qnl0ZSAmIDB4RkYpIDw8IDE2OyAvLyBTaGlmdCAyIGJ5dGVzIHggOCBiaXRzXG5cdFx0XHRcdHJldHVybiBTZGxQc20uTUVTU0FHRV8zX1NUQVRFO1xuXG4gICAgICAgICAgICBjYXNlIFNkbFBzbS5NRVNTQUdFXzNfU1RBVEU6XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLl9tZXNzYWdlSUQgKz0gKHJhd0J5dGUgJiAweEZGKSA8PCA4OyAvLyBTaGlmdCAxIGJ5dGUgeCA4IGJpdHNcblx0XHRcdFx0cmV0dXJuIFNkbFBzbS5NRVNTQUdFXzRfU1RBVEU7XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLk1FU1NBR0VfNF9TVEFURTpcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuX21lc3NhZ2VJRCArPSAocmF3Qnl0ZSAmIDB4RkYpO1xuXHRcdFx0XHRpZiAodGhpcy5fZGF0YUxlbmd0aCA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5GSU5JU0hFRF9TVEFURTsgLy9XZSBhcmUgZG9uZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBwYXlsb2FkXG5cdFx0XHRcdH1cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLl9wYXlsb2FkID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5fZGF0YUxlbmd0aCk7XG5cdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7IC8vUG9zc2libGUgT3V0IG9mIE1lbW9yeSBlcnJvciBpZiBkYXRhIGxlbmd0aCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5FUlJPUl9TVEFURTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkdW1wU2l6ZSA9IGRhdGFMZW5ndGg7XG5cdFx0XHRcdHJldHVybiBTZGxQc20uREFUQV9QVU1QX1NUQVRFO1xuXG4gICAgICAgICAgICBjYXNlIFNkbFBzbS5EQVRBX1BVTVBfU1RBVEU6XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLl9wYXlsb2FkW3RoaXMuX2RhdGFMZW5ndGggLSB0aGlzLl9kdW1wU2l6ZV0gPSByYXdCeXRlO1xuXHRcdFx0XHR0aGlzLl9kdW1wU2l6ZS0tO1xuXHRcdFx0XHQvL0RvIHdlIGhhdmUgYW55IG1vcmUgYnl0ZXMgdG8gcmVhZCBpbj9cblx0XHRcdFx0aWYodGhpcy5fZHVtcFNpemUgPiAwKXtcblx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkRBVEFfUFVNUF9TVEFURTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLl9kdW1wU2l6ZSA9PSAwKSB7XG5cdFx0XHRcdFx0cmV0dXJuIFNkbFBzbS5GSU5JU0hFRF9TVEFURTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgICAgIGNhc2UgU2RsUHNtLkZJTklTSEVEX1NUQVRFOlxuICAgICAgICAgICAgZGVmYXVsdDpcblx0XHRcdFx0Ly9TaG91bGQgbm90IGJlIGhhbmRsaW5nIGFueSBvdGhlciBieXRlcyB3aGlsZSBpbiB0aGUgZmluaXNoZWQgc3RhdGVcbiAgICAgICAgICAgICAgICByZXR1cm4gU2RsUHNtLkVSUk9SX1NUQVRFO1xuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuU2RsUHNtLlNUQVJUX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDA7XG5TZGxQc20uU0VSVklDRV9UWVBFX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDI7XG5TZGxQc20uQ09OVFJPTF9GUkFNRV9JTkZPX1NUQVRFICAgICAgICAgICAgICAgICA9IDB4MDM7XG5TZGxQc20uU0VTU0lPTl9JRF9TVEFURSAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDQ7XG5TZGxQc20uREFUQV9TSVpFXzFfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDU7XG5TZGxQc20uREFUQV9TSVpFXzJfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDY7XG5TZGxQc20uREFUQV9TSVpFXzNfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDc7XG5TZGxQc20uREFUQV9TSVpFXzRfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDg7XG5TZGxQc20uTUVTU0FHRV8xX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MDk7XG5TZGxQc20uTUVTU0FHRV8yX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MEE7XG5TZGxQc20uTUVTU0FHRV8zX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MEI7XG5TZGxQc20uTUVTU0FHRV80X1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MEM7XG5TZGxQc20uREFUQV9QVU1QX1NUQVRFICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4MEQ7XG5TZGxQc20uRklOSVNIRURfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4RkY7XG5TZGxQc20uRVJST1JfU1RBVEUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IC0xO1xuXG5TZGxQc20uRklSU1RfRlJBTUVfREFUQV9TSVpFICAgICAgICAgICAgICAgICAgICA9IDB4MDg7XG5TZGxQc20uVkVSU0lPTl9NQVNLICAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IDB4RjA7IC8vNCBoaWdoZXN0IGJpdHNcblNkbFBzbS5FTkNSWVBUSU9OX01BU0sgICAgICAgICAgICAgICAgICAgICAgICAgID0gMHgwODsgLy80dGggbG93ZXN0IGJpdFxuU2RsUHNtLkZSQU1FX1RZUEVfTUFTSyAgICAgICAgICAgICAgICAgICAgICAgICAgPSAweDA3OyAvLzMgbG93ZXN0IGJpdHNcblxuZXhwb3J0IHsgU2RsUHNtIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4uLy4uL3V0aWwvRW51bS5qcyc7XG5cbi8qKlxuICogQHR5cGVkZWYge0VudW19IFRyYW5zcG9ydFR5cGVcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBNQVBcbiAqL1xuY2xhc3MgVHJhbnNwb3J0VHlwZSBleHRlbmRzIEVudW0ge1xuXG4gICAgLyoqXG4gICAgKiBAY29uc3RydWN0b3JcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTdHJpbmd9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IFdFQlNPQ0tFVF9TRVJWRVIoKSB7XG4gICAgICAgIHJldHVybiBUcmFuc3BvcnRUeXBlLk1BUC5XRUJTT0NLRVRfU0VSVkVSO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtTdHJpbmd9XG4gICAgKi9cbiAgICBzdGF0aWMgZ2V0IFdFQlNPQ0tFVF9DTElFTlQoKSB7XG4gICAgICAgIHJldHVybiBUcmFuc3BvcnRUeXBlLk1BUC5XRUJTT0NLRVRfQ0xJRU5UO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ29uZmlybXMgd2hldGhlciB0aGUgdmFsdWUgcGFzc2VkIGluIGV4aXN0cyBpbiB0aGUgRW51bXMgb2YgdGhpcyBjbGFzc1xuICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgKiBAcmV0dXJuIHtudWxsfFN0cmluZ30gLSBSZXR1cm5zIG51bGwgaWYgdGhlIGVudW0gdmFsdWUgZG9lc24ndCBleGlzdFxuICAgICovXG4gICAgc3RhdGljIHZhbHVlRm9yU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBUcmFuc3BvcnRUeXBlLnZhbHVlRm9yU3RyaW5nSW50ZXJuYWwodmFsdWUsIFRyYW5zcG9ydFR5cGUuTUFQKTtcbiAgICB9XG59XG5cblRyYW5zcG9ydFR5cGUuTUFQID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgXCJXRUJTT0NLRVRfU0VSVkVSXCI6IFwiV0VCU09DS0VUX1NFUlZFUlwiLFxuICAgIFwiV0VCU09DS0VUX0NMSUVOVFwiOiBcIldFQlNPQ0tFVF9DTElFTlRcIixcbiAgICBcIkNVU1RPTVwiOiBcIkNVU1RPTVwiLFxufSk7XG5cbmV4cG9ydCB7IFRyYW5zcG9ydFR5cGUgfTsiLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgTGlmZWN5Y2xlTWFuYWdlciB9IGZyb20gJy4vc3JjL21hbmFnZXIvbGlmZWN5Y2xlL0xpZmVjeWNsZU1hbmFnZXIuanMnO1xuaW1wb3J0IHsgQmluYXJ5RnJhbWVIZWFkZXIgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9CaW5hcnlGcmFtZUhlYWRlci5qcyc7XG5pbXBvcnQgeyBNZXNzYWdlRnJhbWVBc3NlbWJsZXIgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9NZXNzYWdlRnJhbWVBc3NlbWJsZXIuanMnO1xuaW1wb3J0IHsgU2RsUGFja2V0IH0gZnJvbSAnLi9zcmMvcHJvdG9jb2wvU2RsUGFja2V0LmpzJztcbmltcG9ydCB7IFNkbFByb3RvY29sQmFzZSB9IGZyb20gJy4vc3JjL3Byb3RvY29sL1NkbFByb3RvY29sQmFzZS5qcyc7XG5pbXBvcnQgeyBTZGxQcm90b2NvbExpc3RlbmVyIH0gZnJvbSAnLi9zcmMvcHJvdG9jb2wvU2RsUHJvdG9jb2xMaXN0ZW5lci5qcyc7XG5pbXBvcnQgeyBDb250cm9sRnJhbWVUYWdzIH0gZnJvbSAnLi9zcmMvcHJvdG9jb2wvZW51bXMvQ29udHJvbEZyYW1lVGFncy5qcyc7XG5pbXBvcnQgeyBGcmFtZVR5cGUgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9lbnVtcy9GcmFtZVR5cGUuanMnO1xuaW1wb3J0IHsgU2VydmljZVR5cGUgfSBmcm9tICcuL3NyYy9wcm90b2NvbC9lbnVtcy9TZXJ2aWNlVHlwZS5qcyc7XG5pbXBvcnQgeyBScGNNZXNzYWdlIH0gZnJvbSAnLi9zcmMvcnBjL1JwY01lc3NhZ2UuanMnO1xuaW1wb3J0IHsgUnBjTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9zcmMvcnBjL1JwY05vdGlmaWNhdGlvbi5qcyc7XG5pbXBvcnQgeyBScGNSZXF1ZXN0IH0gZnJvbSAnLi9zcmMvcnBjL1JwY1JlcXVlc3QuanMnO1xuaW1wb3J0IHsgUnBjUmVzcG9uc2UgfSBmcm9tICcuL3NyYy9ycGMvUnBjUmVzcG9uc2UuanMnO1xuaW1wb3J0IHsgUnBjU3RydWN0IH0gZnJvbSAnLi9zcmMvcnBjL1JwY1N0cnVjdC5qcyc7XG5pbXBvcnQgeyBGdW5jdGlvbklEIH0gZnJvbSAnLi9zcmMvcnBjL2VudW1zL0Z1bmN0aW9uSUQuanMnO1xuaW1wb3J0IHsgSW1hZ2VUeXBlIH0gZnJvbSAnLi9zcmMvcnBjL2VudW1zL0ltYWdlVHlwZS5qcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4vc3JjL3JwYy9lbnVtcy9MYW5ndWFnZS5qcyc7XG5pbXBvcnQgeyBSZXN1bHQgfSBmcm9tICcuL3NyYy9ycGMvZW51bXMvUmVzdWx0LmpzJztcbmltcG9ydCB7IFJwY1R5cGUgfSBmcm9tICcuL3NyYy9ycGMvZW51bXMvUnBjVHlwZS5qcyc7XG5pbXBvcnQgeyBBZGRDb21tYW5kIH0gZnJvbSAnLi9zcmMvcnBjL21lc3NhZ2VzL0FkZENvbW1hbmQuanMnO1xuaW1wb3J0IHsgQWRkQ29tbWFuZFJlc3BvbnNlIH0gZnJvbSAnLi9zcmMvcnBjL21lc3NhZ2VzL0FkZENvbW1hbmRSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBPbkxhbmd1YWdlQ2hhbmdlIH0gZnJvbSAnLi9zcmMvcnBjL21lc3NhZ2VzL09uTGFuZ3VhZ2VDaGFuZ2UuanMnO1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuL3NyYy9ycGMvc3RydWN0cy9JbWFnZS5qcyc7XG5pbXBvcnQgeyBNZW51UGFyYW1zIH0gZnJvbSAnLi9zcmMvcnBjL3N0cnVjdHMvTWVudVBhcmFtcy5qcyc7XG5pbXBvcnQgeyBTZGxTZXNzaW9uIH0gZnJvbSAnLi9zcmMvc2Vzc2lvbi9TZGxTZXNzaW9uLmpzJztcbmltcG9ydCB7IFNkbFNlc3Npb25MaXN0ZW5lciB9IGZyb20gJy4vc3JjL3Nlc3Npb24vU2RsU2Vzc2lvbkxpc3RlbmVyLmpzJztcbmltcG9ydCB7IFNkbFBzbSB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9TZGxQc20uanMnO1xuaW1wb3J0IHsgVHJhbnNwb3J0QmFzZSB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRCYXNlLmpzJztcbmltcG9ydCB7IFRyYW5zcG9ydENvbmZpZ0Jhc2UgfSBmcm9tICcuL3NyYy90cmFuc3BvcnQvVHJhbnNwb3J0Q29uZmlnQmFzZS5qcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRMaXN0ZW5lciB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRMaXN0ZW5lci5qcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRNYW5hZ2VyQmFzZSB9IGZyb20gJy4vc3JjL3RyYW5zcG9ydC9UcmFuc3BvcnRNYW5hZ2VyQmFzZS5qcyc7XG5pbXBvcnQgeyBUcmFuc3BvcnRUeXBlIH0gZnJvbSAnLi9zcmMvdHJhbnNwb3J0L2VudW1zL1RyYW5zcG9ydFR5cGUuanMnO1xuaW1wb3J0IHsgQml0Q29udmVydGVyIH0gZnJvbSAnLi9zcmMvdXRpbC9CaXRDb252ZXJ0ZXIuanMnO1xuaW1wb3J0IHsgQnNvbiB9IGZyb20gJy4vc3JjL3V0aWwvQnNvbi5qcyc7XG4vLyBpbXBvcnQgeyBCc29uQnVuZGxlIH0gZnJvbSAnLi9zcmMvdXRpbC9Cc29uQnVuZGxlLmpzJztcbi8vIGltcG9ydCB7IEJzb25FU00gfSBmcm9tICcuL3NyYy91dGlsL0Jzb25FU00uanMnO1xuaW1wb3J0IHsgRW51bSB9IGZyb20gJy4vc3JjL3V0aWwvRW51bS5qcyc7XG5pbXBvcnQgeyBKc29uUnBjTWFyc2hhbGxlciB9IGZyb20gJy4vc3JjL3V0aWwvSnNvblJwY01hcnNoYWxsZXIuanMnO1xuaW1wb3J0IHsgVmVyc2lvbiB9IGZyb20gJy4vc3JjL3V0aWwvVmVyc2lvbi5qcyc7XG5cbmNvbnN0IFNETCA9IHtcbiAgICBtYW5hZ2VyOiB7XG4gICAgICAgIGxpZmVjeWNsZToge1xuICAgICAgICAgICAgTGlmZWN5Y2xlTWFuYWdlclxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm90b2NvbDoge1xuICAgICAgICBCaW5hcnlGcmFtZUhlYWRlcixcbiAgICAgICAgTWVzc2FnZUZyYW1lQXNzZW1ibGVyLFxuICAgICAgICBTZGxQYWNrZXQsXG4gICAgICAgIFNkbFByb3RvY29sQmFzZSxcbiAgICAgICAgU2RsUHJvdG9jb2xMaXN0ZW5lcixcbiAgICAgICAgZW51bXM6IHtcbiAgICAgICAgICAgIENvbnRyb2xGcmFtZVRhZ3MsXG4gICAgICAgICAgICBGcmFtZVR5cGUsXG4gICAgICAgICAgICBTZXJ2aWNlVHlwZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBycGM6IHtcbiAgICAgICAgUnBjTWVzc2FnZSxcbiAgICAgICAgUnBjTm90aWZpY2F0aW9uLFxuICAgICAgICBScGNSZXF1ZXN0LFxuICAgICAgICBScGNSZXNwb25zZSxcbiAgICAgICAgUnBjU3RydWN0LFxuICAgICAgICBlbnVtczoge1xuICAgICAgICAgICAgRnVuY3Rpb25JRCxcbiAgICAgICAgICAgIEltYWdlVHlwZSxcbiAgICAgICAgICAgIExhbmd1YWdlLFxuICAgICAgICAgICAgUmVzdWx0LFxuICAgICAgICAgICAgUnBjVHlwZVxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgQWRkQ29tbWFuZCxcbiAgICAgICAgICAgIEFkZENvbW1hbmRSZXNwb25zZSxcbiAgICAgICAgICAgIE9uTGFuZ3VhZ2VDaGFuZ2VcbiAgICAgICAgfSxcbiAgICAgICAgc3RydWN0czoge1xuICAgICAgICAgICAgSW1hZ2UsXG4gICAgICAgICAgICBNZW51UGFyYW1zXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlc3Npb246IHtcbiAgICAgICAgU2RsU2Vzc2lvbixcbiAgICAgICAgU2RsU2Vzc2lvbkxpc3RlbmVyXG4gICAgfSxcbiAgICB0cmFuc3BvcnQ6IHtcbiAgICAgICAgU2RsUHNtLFxuICAgICAgICBUcmFuc3BvcnRCYXNlLFxuICAgICAgICBUcmFuc3BvcnRDb25maWdCYXNlLFxuICAgICAgICBUcmFuc3BvcnRMaXN0ZW5lcixcbiAgICAgICAgVHJhbnNwb3J0TWFuYWdlckJhc2UsXG4gICAgICAgIGVudW1zOiB7XG4gICAgICAgICAgICBUcmFuc3BvcnRUeXBlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHV0aWw6IHtcbiAgICAgICAgQml0Q29udmVydGVyLFxuICAgICAgICBCc29uLFxuICAgICAgICAvLyBCc29uQnVuZGxlLFxuICAgICAgICAvLyBCc29uRVNNLFxuICAgICAgICBFbnVtLFxuICAgICAgICBKc29uUnBjTWFyc2hhbGxlcixcbiAgICAgICAgVmVyc2lvblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU0RMOyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jbGFzcyBMaWZlY3ljbGVNYW5hZ2VyIHtcblxufVxuXG5leHBvcnQgeyBMaWZlY3ljbGVNYW5hZ2VyIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmNsYXNzIEJpdENvbnZlcnRlciB7XG5cbiAgICAvKipcblx0ICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYnl0ZXMgLSBieXRlIGFycmF5IHRoYXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gaGV4XG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXQgLSBpbnQgb3B0aW9uYWwsIHJlcHJlc2VudGluZyB0aGUgb2Zmc2V0IHRvIGJlZ2luIGNvbnZlcnNpb24gYXRcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCAtIGludCBvcHRpb25hbCwgcmVwcmVzZW50aW5nIG51bWJlciBvZiBieXRlcyBpbiBhcnJheSB0byBjb252ZXJ0XG5cdCAqIEByZXR1cm4ge1N0cmluZ30gdGhlIFN0cmluZyBjb250YWluaW5nIGNvbnZlcnRlZCBoZXggdmFsdWVzIG9yIG51bGwgaWYgYnl0ZSBhcnJheSBpcyBudWxsXG5cdCAqL1xuICAgIGFycmF5QnVmZmVyVG9IZXgoYnl0ZXMsIG9mZnNldCA9IDAsIGxlbmd0aCkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgLyoqXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBoZXhTdHJpbmcgLSB0aGUgU3RyaW5nIGNvbnRhaW5pbmcgY29udmVydGVkIGhleCB2YWx1ZXNcblx0ICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IGJ5dGUgYXJyYXkgY29udmVydGVkIGZyb20gaW5wdXQgU3RyaW5nIG9yIG51bGwgaWYgU3RyaW5nIGlzIG51bGxcblx0ICovXG4gICAgaGV4VG9BcnJheUJ1ZmZlcihoZXhTdHJpbmcpIHtcbiAgICAgICAgLy8gVE9ET1xuICAgIH1cblxuICAgIC8qKlxuXHQgKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBidWZmZXIgLSBidWZmZXIgdGhhdCB3aWxsIGJlIGNvbnZlcnRlZCB0byBpbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IC0gaW50IG9wdGlvbmFsLCB0aGUgb2Zmc2V0IHNoaWZ0XG5cdCAqIEByZXR1cm4ge051bWJlcn0gaW50IGNvbnZlcnRlZCBmcm9tIGJ1ZmZlciBvciAtMSBpZiBidWZmZXIgaXMgbnVsbFxuXHQgKi9cbiAgICBhcnJheUJ1ZmZlclRvSW50MzIoYnVmZmVyLCBvZmZzZXQgPSAwKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICAgICAgaWYoIWJ1ZmZlcikgcmV0dXJuIC0xO1xuICAgICAgICBsZXQgdmlldyA9IG5ldyBEYXRhVmlldyhidWZmZXIpO1xuICAgICAgICByZXR1cm4gdmlldy5nZXRVaW50MzIob2Zmc2V0KTtcbiAgICB9XG5cbiAgICAvKipcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIC0gdGhlIGludGVnZXIgdG8gYmUgY29udmVydGVkXG5cdCAqIEByZXR1cm4ge0FycmF5QnVmZmVyfSBidWZmZXIgY29udmVydGVkIGZyb20gaW5wdXQgdmFsdWVcblx0ICovXG4gICAgaW50MzJUb0FycmF5QnVmZmVyKHZhbHVlKSB7XG4gICAgICAgIGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoNCk7IC8vIEludDMyIGhhcyA0IGJ5dGVzXG4gICAgICAgIGxldCB2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICAgIHZpZXcuc2V0VWludDMyKDAsIHZhbHVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IEJpdENvbnZlcnRlciB9OyIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5pbXBvcnQgeyBCaXRDb252ZXJ0ZXIgfSBmcm9tICcuLi91dGlsL0JpdENvbnZlcnRlci5qcyc7XG5cbmNsYXNzIEJpbmFyeUZyYW1lSGVhZGVyIHtcblxuICAgIC8qKlxuICAgICogQGNvbnN0cnVjdG9yXG4gICAgKiBAcGFyYW0ge1JwY1R5cGV9IHJwY1R5cGUgLSBBbiBSUEMgRW51bSAgcmVwcmVzZW50aW5nIHRoZSB0eXBlIG9mIFJQQyBiZWluZyBkZXNjcmliZWQgKFJlcXVlc3QsIFJlc3BvbnNlLCBOb3RpZmljYXRpb24pXG4gICAgKiBAcGFyYW0ge0Z1bmN0aW9uSUR9IGZ1bmN0aW9uSWQgLSBBIEZ1bmN0aW9uSUQgRW51bSByZXByZXNlbnRpbmcgdGhlIFJQQyBmdW5jdGlvbiB0aGF0IGlzIGJlaW5nIGRlc2NyaWJlZFxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvcnJlbGF0aW9uSWQgLSBBIG51bWJlciByZXByZXNlbnRpbmcgYW4gSUQgdG8gY29ycmVsYXRlIGEgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcGFpclxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGpzb25TaXplIC0gQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBzaXplIG9mIGEgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHJwY1R5cGUsIGZ1bmN0aW9uSWQsIGNvcnJlbGF0aW9uSWQsIGpzb25TaXplKSB7XG4gICAgICAgIHRoaXMuX3JwY1R5cGUgPSBycGNUeXBlO1xuICAgICAgICB0aGlzLl9mdW5jdGlvbklkID0gZnVuY3Rpb25JZDtcbiAgICAgICAgdGhpcy5fY29ycmVsYXRpb25JZCA9IGNvcnJlbGF0aW9uSWQ7XG4gICAgICAgIHRoaXMuX2pzb25TaXplID0ganNvblNpemU7XG5cbiAgICAgICAgLy8gVE9ET1xuICAgICAgICB0aGlzLl9qc29uRGF0YSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2J1bGtEYXRhID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICogVGFrZXMgaW4gYSBieXRlIGFycmF5IGFuZCB0cmFuc2Zvcm1zIGl0IHRvIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3NcbiAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gYmluSGVhZGVyXG4gICAgKiBAcmV0dXJuIHtCaW5hcnlGcmFtZUhlYWRlcn0gYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIHBhcnNpbmcgdGhlIHN1cHBsaWVkIFVpbnQ4QXJyYXkgXG4gICAgKi9cbiAgICBmcm9tQmluYXJ5SGVhZGVyKGJpbkhlYWRlcikge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBVc2VzIHRoZSBwcml2YXRlIG1lbWJlcnMgb2YgdGhpcyBjbGFzcyB0byBjb25zdHJ1Y3QgYSBieXRlIGFycmF5IGhlYWRlclxuICAgICogQHJldHVybiB7VWludDhBcnJheX0gLSBBIGJ5dGUgYXJyYXlcbiAgICAqL1xuICAgIGFzc2VtYmxlSGVhZGVyQnl0ZXMoKSB7XG4gICAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7UnBjVHlwZX0gcnBjVHlwZSAtIEFuIFJQQyBFbnVtICByZXByZXNlbnRpbmcgdGhlIHR5cGUgb2YgUlBDIGJlaW5nIGRlc2NyaWJlZCAoUmVxdWVzdCwgUmVzcG9uc2UsIE5vdGlmaWNhdGlvbilcbiAgICAqL1xuICAgIHNldFJQQ1R5cGUodHlwZSkge1xuICAgICAgICB0aGlzLl9ycGNUeXBlID0gdHlwZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtScGNUeXBlfSBycGNUeXBlIC0gQW4gUlBDIEVudW0gIHJlcHJlc2VudGluZyB0aGUgdHlwZSBvZiBSUEMgYmVpbmcgZGVzY3JpYmVkIChSZXF1ZXN0LCBSZXNwb25zZSwgTm90aWZpY2F0aW9uKVxuICAgICovXG4gICAgZ2V0UlBDVHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JwY1R5cGU7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHBhcmFtIHtGdW5jdGlvbklEfSBmdW5jdGlvbklkIC0gQSBGdW5jdGlvbklEIEVudW0gcmVwcmVzZW50aW5nIHRoZSBSUEMgZnVuY3Rpb24gdGhhdCBpcyBiZWluZyBkZXNjcmliZWRcblxuICAgICovXG4gICAgc2V0RnVuY3Rpb25JZChpZCkge1xuICAgICAgICB0aGlzLl9mdW5jdGlvbklkID0gaWQ7XG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHJldHVybiB7RnVuY3Rpb25JRH0gZnVuY3Rpb25JZCAtIEEgRnVuY3Rpb25JRCBFbnVtIHJlcHJlc2VudGluZyB0aGUgUlBDIGZ1bmN0aW9uIHRoYXQgaXMgYmVpbmcgZGVzY3JpYmVkXG4gICAgKi9cbiAgICBnZXRGdW5jdGlvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZnVuY3Rpb25JZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gY29ycmVsYXRpb25JZCAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyBhbiBJRCB0byBjb3JyZWxhdGUgYSByZXF1ZXN0IGFuZCByZXNwb25zZSBwYWlyXG4gICAgKi9cbiAgICBzZXRDb3JyZWxhdGlvbklkKGlkKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlbGF0aW9uSWQgPSBpZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9IGNvcnJlbGF0aW9uSWQgLSBBIG51bWJlciByZXByZXNlbnRpbmcgYW4gSUQgdG8gY29ycmVsYXRlIGEgcmVxdWVzdCBhbmQgcmVzcG9uc2UgcGFpclxuXG4gICAgKi9cbiAgICBnZXRDb3JyZWxhdGlvbklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29ycmVsYXRpb25JZDtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcGFyYW0ge051bWJlcn0gc2l6ZSAtIEEgbnVtYmVyIHJlcHJlc2VudGluZyB0aGUgc2l6ZSBvZiBhIEpTT04gb2JqZWN0XG4gICAgKi9cbiAgICBzZXRKU09OU2l6ZShzaXplKSB7XG4gICAgICAgIHRoaXMuX2pzb25TaXplID0gc2l6ZTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gQSBudW1iZXIgcmVwcmVzZW50aW5nIHRoZSBzaXplIG9mIGEgSlNPTiBvYmplY3RcbiAgICAqL1xuICAgIGdldEpTT05TaXplKCkge1xuICAgICAgICByZXR1cm4gX2pzb25TaXplO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQHBhcmFtIHtOdW1iZXJ9IGRhdGEgLSBBIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIEpTT04gZGF0YVxuICAgICovXG4gICAgc2V0SlNPTkRhdGEoZGF0YSkge1xuICAgICAgICAvLyBUT0RPXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICogQHJldHVybiB7VWludDhBcnJheX0gLSBBIGJ5dGUgYXJyYXkgcmVwcmVzZW50aW5nIEpTT04gZGF0YVxuICAgICovXG4gICAgZ2V0SlNPTkRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9qc29uRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEBwYXJhbSB7VWludDhBcnJheX0gZGF0YSAtIEEgYnl0ZSBhcnJheSByZXByZXNlbnRpbmcgYnVsayBkYXRhXG4gICAgKi9cbiAgICBzZXRCdWxrRGF0YShkYXRhKSB7XG4gICAgICAgIHRoaXMuX2J1bGtEYXRhID0gZGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEByZXR1cm4ge1VpbnQ4QXJyYXl9IC0gQSBieXRlIGFycmF5IHJlcHJlc2VudGluZyBidWxrIGRhdGFcbiAgICAqL1xuICAgIGdldEJ1bGtEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnVsa0RhdGE7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7IEJpbmFyeUZyYW1lSGVhZGVyIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgUnBjUmVzcG9uc2UgfSBmcm9tICcuLi9ScGNSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBGdW5jdGlvbklEIH0gZnJvbSAnLi4vZW51bXMvRnVuY3Rpb25JRC5qcyc7XG5cbmNsYXNzIEFkZENvbW1hbmRSZXNwb25zZSBleHRlbmRzIFJwY1Jlc3BvbnNlIHtcblxuXHQvKipcbiAgICAqIEBjb25zdHJ1Y3RvclxuICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoc3RvcmUpO1xuICAgICAgICB0aGlzLnNldEZ1bmN0aW9uTmFtZShGdW5jdGlvbklELkFERF9DT01NQU5EKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHsgQWRkQ29tbWFuZFJlc3BvbnNlIH07XG4iLCIvKlxuKiBDb3B5cmlnaHQgKGMpIDIwMTksIExpdmlvLCBJbmMuXG4qIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbipcbiogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4qIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4qIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nXG4qIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZVxuKiBkaXN0cmlidXRpb24uXG4qXG4qIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIExpdmlvIEluYy4gbm9yIHRoZSBuYW1lcyBvZiBpdHMgY29udHJpYnV0b3JzXG4qIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxuKiB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbipcbiogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuKiBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4qIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1JcbiogQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0ZcbiogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4qIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLCBXSEVUSEVSIElOXG4qIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXG4qIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4qIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuKi9cblxuaW1wb3J0IHsgU2RsU2Vzc2lvbkxpc3RlbmVyIH0gZnJvbSBcIi4vU2RsU2Vzc2lvbkxpc3RlbmVyLmpzXCI7XG5pbXBvcnQgeyBTZGxQcm90b2NvbExpc3RlbmVyIH0gZnJvbSBcIi4uL3Byb3RvY29sL1NkbFByb3RvY29sTGlzdGVuZXIuanNcIjtcbmltcG9ydCB7IFNkbFByb3RvY29sQmFzZSB9IGZyb20gXCIuLi9wcm90b2NvbC9TZGxQcm90b2NvbEJhc2UuanNcIjtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTZGxTZXNzaW9uXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBfc2V0dXBTZGxQcm90b2NvbExpc3RlbmVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBzdGFydFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZW5kU2Vzc2lvblxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYWRkU2VydmljZUxpc3RlbmVyXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSByZW1vdmVTZXJ2aWNlTGlzdGVuZXJcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHNlbmRScGNcbiAqL1xuY2xhc3MgU2RsU2Vzc2lvbiB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1RyYW5zcG9ydENvbmZpZ0Jhc2V9IGJhc2VUcmFuc3BvcnRDb25maWcgXG4gICAgICogQHBhcmFtIHtTZGxTZXNzaW9uTGlzdGVuZXJ9IHNkbFNlc3Npb25MaXN0ZW5lciBcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihiYXNlVHJhbnNwb3J0Q29uZmlnLCBzZGxTZXNzaW9uTGlzdGVuZXIpIHtcblxuICAgICAgICB0aGlzLl9zZXJ2aWNlTGlzdGVuZXJzID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdGhpcy5fc2RsU2Vzc2lvbkxpc3RlbmVyID0gc2RsU2Vzc2lvbkxpc3RlbmVyO1xuICAgICAgICBsZXQgc2RsUHJvdG9jb2xMaXN0ZW5lciA9IF9zZXR1cFNkbFByb3RvY29sTGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLl9zZGxQcm90b2NvbCA9IG5ldyBTZGxQcm90b2NvbEJhc2Uoc2RsUHJvdG9jb2xMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybiB7U2RsUHJvdG9jb2xMaXN0ZW5lcn0gXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfc2V0dXBTZGxQcm90b2NvbExpc3RlbmVyKCkge1xuICAgICAgICBsZXQgc2RsUHJvdG9jb2xMaXN0ZW5lciA9IG5ldyBTZGxQcm90b2NvbExpc3RlbmVyKCk7XG5cbiAgICAgICAgLy9UT0RPIGNyZWF0ZSBhbGwgdGhlIGZ1bmN0aW9ucyB0aGF0IHdpbGwgYmUgc2V0IGZvciB0aGlzIGxpc3RlbmVyXG5cbiAgICAgICAgcmV0dXJuIHNkbFByb3RvY29sTGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zZGxQcm90b2NvbCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zZGxQcm90b2NvbC5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kU2Vzc2lvbigpIHtcbiAgICAgICAgLy9UT0RPIGhhbmRsZSBpbnRlcm5hbCBpdGVtc1xuICAgICAgICBpZiAodGhpcy5fc2RsUHJvdG9jb2wgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc2RsUHJvdG9jb2wuZW5kU2Vzc2lvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTZGxTZXNzaW9uTGlzdGVuZXJ9IHNlcnZpY2VMaXN0ZW5lciBcbiAgICAgKi9cbiAgICBhZGRTZXJ2aWNlTGlzdGVuZXIoc2VydmljZUxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX3NlcnZpY2VMaXN0ZW5lcnMucHVzaChzZXJ2aWNlTGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsU2Vzc2lvbkxpc3RlbmVyfSBzZXJ2aWNlTGlzdGVuZXIgXG4gICAgICovXG4gICAgcmVtb3ZlU2VydmljZUxpc3RlbmVyKHNlcnZpY2VMaXN0ZW5lcikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9zZXJ2aWNlTGlzdGVuZXJzLmluZGV4T2Yoc2VydmljZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3NlcnZpY2VMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UnBjTWVzc2FnZX0gcnBjTWVzc2FnZSBcbiAgICAgKi9cbiAgICBzZW5kUnBjKHJwY01lc3NhZ2UpIHtcblxuICAgIH1cblxufVxuXG5leHBvcnQgeyBTZGxTZXNzaW9uIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2RsU2Vzc2lvbkxpc3RlbmVyXG4gKi9cbmNsYXNzIFNkbFNlc3Npb25MaXN0ZW5lciB7XG5cblx0LyoqXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9UT0RPIGFkZCBhbGwgY2FsbGJhY2tzXG4gICAgfVxuXG4gICAgXG5cbn1cblxuZXhwb3J0IHsgU2RsU2Vzc2lvbkxpc3RlbmVyIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmltcG9ydCB7IFNkbFBzbSB9IGZyb20gJy4vU2RsUHNtLmpzJztcblxuY2xhc3MgVHJhbnNwb3J0QmFzZSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQHBhcmFtIHtCYXNlVHJhbnNwb3J0Q29uZmlnfSBiYXNlVHJhbnNwb3J0Q29uZmlnXG4gICAgICogQHBhcmFtIHtUcmFuc3BvcnRMaXN0ZW5lcn0gdHJhbnNwb3J0TGlzdGVuZXJcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihiYXNlVHJhbnNwb3J0Q29uZmlnLCB0cmFuc3BvcnRMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLl9zZGxQc20gPSBuZXcgU2RsUHNtKCk7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyID0gdHJhbnNwb3J0TGlzdGVuZXI7XG5cbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhyb3cgXCJzdGFydCBtZXRob2QgbXVzdCBiZSBvdmVycmlkZGVuXCI7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgdGhyb3cgXCJzdG9wIG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgICovXG4gICAgc2VuZFBhY2tldChzZGxQYWNrZXQpIHtcbiAgICAgICAgdGhyb3cgXCJzZW5kUGFja2V0IG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRyYW5zcG9ydEJhc2UgfTtcbiIsIi8qXG4qIENvcHlyaWdodCAoYykgMjAxOSwgTGl2aW8sIEluYy5cbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4qIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuKlxuKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiogbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiogZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlXG4qIGRpc3RyaWJ1dGlvbi5cbipcbiogTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgTGl2aW8gSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnNcbiogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXG4qIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxuKlxuKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4qIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4qIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkVcbiogTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUlxuKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuKiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1NcbiogSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU5cbiogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiogQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcbiogUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4qL1xuXG5jbGFzcyBUcmFuc3BvcnRNYW5hZ2VyQmFzZSB7XG5cbiAgICAvKipcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKiBAcGFyYW0ge0Jhc2VUcmFuc3BvcnRDb25maWd9IGJhc2VUcmFuc3BvcnRDb25maWdcbiAgICAgKiBAcGFyYW0ge1RyYW5zcG9ydExpc3RlbmVyfSB0cmFuc3BvcnRMaXN0ZW5lclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJhc2VUcmFuc3BvcnRDb25maWcsIHRyYW5zcG9ydExpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydENvbmZpZyA9IGJhc2VUcmFuc3BvcnRDb25maWc7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyID0gdHJhbnNwb3J0TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgb25UcmFuc3BvcnRDb25uZWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLm9uVHJhbnNwb3J0Q29ubmVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuY1xuICAgICAqL1xuICAgIG9uVHJhbnNwb3J0RGlzY29ubmVjdGVkKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TGlzdGVuZXIub25UcmFuc3BvcnREaXNjb25uZWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jXG4gICAgICovXG4gICAgb25FcnJvcihmdW5jKSB7XG4gICAgICAgIHRoaXMuX3RyYW5zcG9ydExpc3RlbmVyLm9uRXJyb3IoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1NkbFBhY2tldH0gc2RsUGFja2V0XG4gICAgICovXG4gICAgb25QYWNrZXRSZWNlaXZlZChzZGxQYWNrZXQpIHtcbiAgICAgICAgdGhpcy5fdHJhbnNwb3J0TGlzdGVuZXIub25QYWNrZXRSZWNlaXZlZChzZGxQYWNrZXQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U2RsUGFja2V0fSBzZGxQYWNrZXRcbiAgICAgKi9cbiAgICBzZW5kUGFja2V0KHNkbFBhY2tldCkge1xuICAgICAgICB0aHJvdyBcInNlbmRQYWNrZXQgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlblwiO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aHJvdyBcInN0YXJ0IG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICB0aHJvdyBcInN0b3AgbWV0aG9kIG11c3QgYmUgb3ZlcnJpZGRlblwiO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7VHJhbnNwb3J0VHlwZX0gdHJhbnNwb3J0VHlwZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzXG4gICAgICovXG4gICAgaXNDb25uZWN0ZWQodHJhbnNwb3J0VHlwZSwgYWRkcmVzcykge1xuICAgICAgICB0aHJvdyBcImlzQ29ubmVjdGVkIG1ldGhvZCBtdXN0IGJlIG92ZXJyaWRkZW5cIjtcbiAgICB9XG59XG5cbmV4cG9ydCB7IFRyYW5zcG9ydE1hbmFnZXJCYXNlIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbi8vIGltcG9ydCAgKiBhcyBCU09OICBmcm9tICcuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ic29uL2Rpc3QvYnNvbi5idW5kbGUuanMnO1xuaW1wb3J0ICBCU09OIGZyb20gJ2Jzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCc29uIHtcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgYSBKYXZhc2NyaXB0IG9iamVjdC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gb2JqZWN0IFRoZSBKYXZhc2NyaXB0IG9iamVjdCB0byBzZXJpYWxpemUuXG4gICAgICogQHBhcmFtIG9wdGlvbnMgU2VyaWFsaXplIG9wdGlvbnMuXG4gICAgICogQHJldHVybiBUaGUgQnVmZmVyIG9iamVjdCBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIG9iamVjdC5cbiAgICAgKi9cbiAgICBzdGF0aWMgc2VyaWFsaXplIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coQlNPTik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coYClgKTtcbiAgICAgICAgcmV0dXJuIEJTT04uc2VyaWFsaXplKG9iamVjdCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzZXJpYWxpemUgZGF0YSBhcyBCU09OLlxuICAgICAqIFxuICAgICAqIEBwYXJhbSBidWZmZXIgVGhlIGJ1ZmZlciBjb250YWluaW5nIHRoZSBzZXJpYWxpemVkIHNldCBvZiBCU09OIGRvY3VtZW50cy5cbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBEZXNlcmlhbGl6ZSBvcHRpb25zLlxuICAgICAqIEByZXR1cm5zIFRoZSBkZXNlcmlhbGl6ZWQgSmF2YXNjcmlwdCBPYmplY3QuXG4gICAgICovXG4gICAgc3RhdGljIGRlc2VyaWFsaXplIChvYmplY3QsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc29sZS5sb2coQlNPTik7XG4gICAgICAgIHJldHVybiBCU09OLmRlc2VyaWFsaXplKG9iamVjdCwgb3B0aW9ucyk7XG4gICAgfVxufVxuXG4vLyAzNDogaW1wb3J0ICB7IEJzb24gfSBmcm9tICcuLy4uL3V0aWwvQnNvbi5qcyc7XG4vLyBldmVyeSBjbGFzcyB1c2VkIGJ5IHRoZSBhcHAgbXVzdCBleHBvcnQgYSB2ZXJzaW9uIG9mIGl0c2VsZiB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGZpbGUuXG5leHBvcnQgeyBCc29uIH07IiwiLypcbiogQ29weXJpZ2h0IChjKSAyMDE5LCBMaXZpbywgSW5jLlxuKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKlxuKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4qXG4qIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xuKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbipcbiogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZ1xuKiBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGVcbiogZGlzdHJpYnV0aW9uLlxuKlxuKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBMaXZpbyBJbmMuIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuKiBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcbiogd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4qXG4qIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4qIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0VcbiogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRVxuKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4qIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GXG4qIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTU1xuKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuKiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxuKiBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxuKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiovXG5cbmNsYXNzIEpzb25ScGNNYXJzaGFsbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8qXG5sZXQgdGVzdE1hcCA9IHtcInJwY1R5cGVcIjpcIlJlcXVlc3RcIiwgXCJmdW5jdGlvbk5hbWVcIjpcIlJBSVwifVxudW5kZWZpbmVkXG5sZXQgc3RyaW5nZWQgPSBKU09OLnN0cmluZ2lmeSh0ZXN0TWFwKVxudW5kZWZpbmVkXG5zdHJpbmdlZFxuXCJ7XCJycGNUeXBlXCI6XCJSZXF1ZXN0XCIsXCJmdW5jdGlvbk5hbWVcIjpcIlJBSVwifVwiXG5sZXQgYXJyYXkgPSBuZXcgVWludDhBcnJheShzdHJpbmdlZClcbnVuZGVmaW5lZFxuYXJyYXlcblVpbnQ4QXJyYXnCoFtdYnVmZmVyOiAoLi4uKWJ5dGVMZW5ndGg6ICguLi4pYnl0ZU9mZnNldDogKC4uLilsZW5ndGg6ICguLi4pU3ltYm9sKFN5bWJvbC50b1N0cmluZ1RhZyk6ICguLi4pX19wcm90b19fOiBUeXBlZEFycmF5XG52YXIgZW5jID0gbmV3IFRleHRFbmNvZGVyKCk7IC8vIGFsd2F5cyB1dGYtOFxuXG51bmRlZmluZWRcbmFycmF5ID0gZW5jLmVuY29kZShzdHJpbmdlZClcblVpbnQ4QXJyYXkoNDIpwqBbMTIzLCAzNCwgMTE0LCAxMTIsIDk5LCA4NCwgMTIxLCAxMTIsIDEwMSwgMzQsIDU4LCAzNCwgODIsIDEwMSwgMTEzLCAxMTcsIDEwMSwgMTE1LCAxMTYsIDM0LCA0NCwgMzQsIDEwMiwgMTE3LCAxMTAsIDk5LCAxMTYsIDEwNSwgMTExLCAxMTAsIDc4LCA5NywgMTA5LCAxMDEsIDM0LCA1OCwgMzQsIDgyLCA2NSwgNzMsIDM0LCAxMjVdMDogMTIzMTogMzQyOiAxMTQzOiAxMTI0OiA5OTU6IDg0NjogMTIxNzogMTEyODogMTAxOTogMzQxMDogNTgxMTogMzQxMjogODIxMzogMTAxMTQ6IDExMzE1OiAxMTcxNjogMTAxMTc6IDExNTE4OiAxMTYxOTogMzQyMDogNDQyMTogMzQyMjogMTAyMjM6IDExNzI0OiAxMTAyNTogOTkyNjogMTE2Mjc6IDEwNTI4OiAxMTEyOTogMTEwMzA6IDc4MzE6IDk3MzI6IDEwOTMzOiAxMDEzNDogMzQzNTogNTgzNjogMzQzNzogODIzODogNjUzOTogNzM0MDogMzQ0MTogMTI1YnVmZmVyOiAoLi4uKWJ5dGVMZW5ndGg6ICguLi4pYnl0ZU9mZnNldDogKC4uLilsZW5ndGg6ICguLi4pU3ltYm9sKFN5bWJvbC50b1N0cmluZ1RhZyk6ICguLi4pX19wcm90b19fOiBUeXBlZEFycmF5XG52YXIgZW5jID0gbmV3IFRleHREZWNvZGVyKFwidXRmLThcIik7XG5cbnVuZGVmaW5lZFxubGV0IHN0ZXAyID0gZW5jLmRlY29kZShhcnJheSlcbnVuZGVmaW5lZFxuc3RlcDJcblwie1wicnBjVHlwZVwiOlwiUmVxdWVzdFwiLFwiZnVuY3Rpb25OYW1lXCI6XCJSQUlcIn1cIlxubGV0IG5ld0pzb24gPSBKU09OLnBhcnNlKHN0ZXAyKVxudW5kZWZpbmVkXG5uZXdKc29uXG57cnBjVHlwZTogXCJSZXF1ZXN0XCIsIGZ1bmN0aW9uTmFtZTogXCJSQUlcIn1cblxuXG5cbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtScGNNZXNzYWdlfSBycGNNZXNzYWdlIFxuICAgICAqL1xuICAgIHN0YXRpYyBtYXJzaGFsbChycGNNZXNzYWdlKSB7XG4gICAgICAgIC8vUmV0dXJucyBVaW50OEFycmF5IFxuICAgICAgICBsZXQganNvbkJ5dGVzID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgbGV0IGpzb25PYmplY3QgPSBycGNNZXNzYWdlLmdldFBhcmFtZXRlcnMoKTtcbiAgICAgICAgICAgIC8vVE9ETyBkbyB3ZSBuZWVkIHRvIGdvIHRocm91Z2ggZWFjaCBwYXJhbSBhbmQgZG8gdGhpcz9cbiAgICAgICAgICAgIGxldCBzdHJpbmdWZXJzaW9uID0gSlNPTi5zdHJpbmdpZnkoanNvbk9iamVjdCk7XG4gICAgICAgICAgICBsZXQgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuICAgICAgICAgICAgcmV0dXJuIGVuY29kZXIuZW5jb2RlKHN0cmluZ1ZlcnNpb24pO1xuXG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgICAgLy9UT0RPIHByaW50IGV4Y2VwdGlvblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxufVxuXG5leHBvcnQgeyBKc29uUnBjTWFyc2hhbGxlciB9OyJdLCJuYW1lcyI6WyJNZXNzYWdlRnJhbWVBc3NlbWJsZXIiLCJjb25zdHJ1Y3RvciIsImhlYWRlclNpemUiLCJjYWxsYmFjayIsIl9hY2N1bXVsYXRvciIsIl9oZWFkZXJzaXplIiwiX3RvdGFsU2l6ZSIsIl9jYWxsYmFjayIsImhhbmRsZUZyYW1lIiwic2RsUGFja2V0IiwiaGFuZGxlTXVsdGlGcmFtZU1lc3NhZ2VGcmFtZSIsImhhbmRsZUZpcnN0RGF0YUZyYW1lIiwiaGFuZGxlUmVtYWluaW5nRnJhbWUiLCJFbnVtIiwia2V5Rm9yVmFsdWVJbnRlcm5hbCIsInZhbHVlIiwibWFwIiwia2V5IiwidmFsdWVGb3JTdHJpbmdJbnRlcm5hbCIsInZhbHVlRm9yU3RyaW5nIiwiRnJhbWVUeXBlIiwiQ09OVFJPTCIsIk1BUCIsIkZJUlNUIiwiQ09OU0VDVVRJVkUiLCJTSU5HTEUiLCJPYmplY3QiLCJmcmVlemUiLCJTZGxQYWNrZXQiLCJ2ZXJzaW9uIiwiZW5jcnlwdGlvbiIsImZyYW1lVHlwZSIsInNlcnZpY2VUeXBlIiwiZnJhbWVJbmZvIiwic2Vzc2lvbklEIiwiZGF0YVNpemUiLCJtZXNzYWdlSUQiLCJwYXlsb2FkIiwib2Zmc2V0IiwiYnl0ZXNUb1dyaXRlIiwiX3ZlcnNpb24iLCJfZW5jcnlwdGlvbiIsIl9mcmFtZVR5cGUiLCJfc2VydmljZVR5cGUiLCJfZnJhbWVJbmZvIiwiX3Nlc3Npb25JRCIsIl9kYXRhU2l6ZSIsIl9tZXNzYWdlSUQiLCJfcGF5bG9hZCIsIl9vZmZzZXQiLCJfYnl0ZXNUb1dyaXRlIiwiX2Jzb25QYXlsb2FkIiwiVWludDhBcnJheSIsInNsaWNlIiwiZ2V0VmVyc2lvbiIsImdldEVuY3J5cHRpb24iLCJnZXRTZXJ2aWNlVHlwZSIsImdldEZyYW1lSW5mbyIsImdldFNlc3Npb25JRCIsImdldE1lc3NhZ2VJRCIsImdldERhdGFTaXplIiwic2V0UGF5bG9hZCIsImdldFBheWxvYWQiLCJnZXRFbmNyeXB0aW9uQml0IiwiRU5DUllQVElPTl9NQVNLIiwiZ2V0RnJhbWVUeXBlIiwidG9VaW50OEFycmF5IiwiY29uc3RydWN0UGFja2V0IiwidG9TdHJpbmciLCJvdXRwdXQiLCJjb250cm9sRnJhbWVJbmZvIiwiZGF0YVZpZXciLCJkYXRhVmlld0luZGV4IiwiSEVBREVSX1NJWkVfVjEiLCJIRUFERVJfU0laRSIsImxlbmd0aCIsInNldCIsInB1dFRhZyIsInRhZyIsImRhdGEiLCJnZXRUYWciLCJFWFRSQV9QQVJDRUxfREFUQV9MRU5HVEgiLCJTRVJWSUNFX1RZUEVfQ09OVFJPTCIsIlNFUlZJQ0VfVFlQRV9SUEMiLCJTRVJWSUNFX1RZUEVfUENNIiwiU0VSVklDRV9UWVBFX1ZJREVPIiwiU0VSVklDRV9UWVBFX0JVTEtfREFUQSIsIkZSQU1FX0lORk9fSEVBUlRfQkVBVCIsIkZSQU1FX0lORk9fU1RBUlRfU0VSVklDRSIsIkZSQU1FX0lORk9fU1RBUlRfU0VSVklDRV9BQ0siLCJGUkFNRV9JTkZPX1NUQVJUX1NFUlZJQ0VfTkFLIiwiRlJBTUVfSU5GT19FTkRfU0VSVklDRSIsIkZSQU1FX0lORk9fRU5EX1NFUlZJQ0VfQUNLIiwiRlJBTUVfSU5GT19FTkRfU0VSVklDRV9OQUsiLCJGUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlQiLCJGUkFNRV9JTkZPX1JFR0lTVEVSX1NFQ09OREFSWV9UUkFOU1BPUlRfQUNLIiwiRlJBTUVfSU5GT19SRUdJU1RFUl9TRUNPTkRBUllfVFJBTlNQT1JUX05BSyIsIkZSQU1FX0lORk9fVFJBTlNQT1JUX0VWRU5UX1VQREFURSIsIkZSQU1FX0lORk9fU0VSVklDRV9EQVRBX0FDSyIsIkZSQU1FX0lORk9fSEVBUlRfQkVBVF9BQ0siLCJGUkFNRV9JTkZPX0ZJTkFMX0NPTk5FU0NVVElWRV9GUkFNRSIsIkZSQU1FX0lORk9fUkVTRVJWRUQiLCJScGNTdHJ1Y3QiLCJwYXJhbWV0ZXJzIiwiX2lzRm9ybWF0UmVxdWVzdGVkIiwiX3JwY1NwZWNWZXJzaW9uIiwiX3BhcmFtZXRlcnMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJnZXRQYXJhbWV0ZXJzIiwiZ2V0UGFyYW1ldGVyIiwic2V0UGFyYW1ldGVyIiwiZ2V0T2JqZWN0IiwidENsYXNzIiwiZm9ybWF0T2JqZWN0Iiwib2JqIiwiU3RyaW5nIiwiQXJyYXkiLCJvdXRBcnJheSIsIml0ZW0iLCJwdXNoIiwidGNsYXNzIiwidmFsaWRhdGVUeXBlIiwibmFtZSIsIlJwY01lc3NhZ2UiLCJzdG9yZSIsIl9pc0VuY3J5cHRlZCIsIl9ycGNUeXBlIiwicnBjVHlwZSIsIl9mdW5jdGlvbk5hbWUiLCJmdW5jdGlvbk5hbWUiLCJfY29ycmVsYXRpb25JRCIsImNvcnJlbGF0aW9uSUQiLCJfYnVsa0RhdGEiLCJzZXRCdWxrRGF0YSIsImJ1bGtEYXRhIiwiZ2V0UlBDVHlwZSIsInNldFJQQ1R5cGUiLCJ0eXBlIiwiZ2V0RnVuY3Rpb25OYW1lIiwic2V0RnVuY3Rpb25OYW1lIiwiZ2V0QnVsa0RhdGEiLCJnZXRJc0VuY3J5cHRlZCIsInNldElzRW5jcnlwdGVkIiwiYm9vbCIsIlNlcnZpY2VUeXBlIiwiUlBDIiwiQVVESU8iLCJWSURFTyIsIkhZQlJJRCIsIlNkbFByb3RvY29sTGlzdGVuZXIiLCJfb25ScGNNZXNzYWdlUmVjZWl2ZWQiLCJfb25Db250cm9sU2VydmljZU1lc3NhZ2VSZWNlaXZlZCIsInNldE9uUnBjTWVzc2FnZVJlY2VpdmVkTGlzdGVuZXIiLCJsaXN0ZW5lciIsInNldE9uQ29udHJvbFNlcnZpY2VNZXNzYWdlUmVjZWl2ZWRMaXN0ZW5lciIsInNldE9uRGVjcnlwdFJlcXVlc3RMaXN0ZW5lciIsIl9vbkRlY3J5cHRSZXF1ZXN0TGlzdGVuZXIiLCJvbkNvbnRyb2xTZXJ2aWNlTWVzc2FnZVJlY2VpdmVkIiwib25ScGNNZXNzYWdlUmVjZWl2ZWQiLCJycGNNZXNzYWdlIiwib25TdGFydFNlcnZpY2VBQ0tSZWNlaXZlZCIsIl9vblN0YXJ0U2VydmljZUFDS1JlY2VpdmVkIiwib25TdGFydFNlcnZpY2VOQUtSZWNlaXZlZCIsIl9vblN0YXJ0U2VydmljZU5BS1JlY2VpdmVkIiwib25FbmRTZXJ2aWNlQUNLUmVjZWl2ZWQiLCJfb25FbmRTZXJ2aWNlQUNLUmVjZWl2ZWQiLCJvbkVuZFNlcnZpY2VOQUtSZWNlaXZlZCIsIl9vbkVuZFNlcnZpY2VOQUtSZWNlaXZlZCIsIm9uU2VydmljZUVuY3J5cHRpb25TdGFydGVkIiwiVHJhbnNwb3J0TGlzdGVuZXIiLCJfb25UcmFuc3BvcnRDb25uZWN0ZWQiLCJfb25UcmFuc3BvcnREaXNjb25uZWN0ZWQiLCJfb25FcnJvciIsIl9vblBhY2tldFJlY2VpdmVkIiwic2V0T25UcmFuc3BvcnRDb25uZWN0ZWQiLCJmdW5jIiwic2V0T25UcmFuc3BvcnREaXNjb25uZWN0ZWQiLCJzZXRPbkVycm9yIiwic2V0T25QYWNrZXRSZWNlaXZlZCIsIm9uVHJhbnNwb3J0Q29ubmVjdGVkIiwib25UcmFuc3BvcnREaXNjb25uZWN0ZWQiLCJvbkVycm9yIiwib25QYWNrZXRSZWNlaXZlZCIsIlZlcnNpb24iLCJtYWpvciIsIm1pbm9yIiwicGF0Y2giLCJzZXRNYWpvciIsInNldE1pbm9yIiwic2V0UGF0Y2giLCJfbWFqb3IiLCJwYXJzZUludCIsImdldE1ham9yIiwiX21pbm9yIiwiZ2V0TWlub3IiLCJfcGF0Y2giLCJnZXRQYXRjaCIsImZyb21TdHJpbmciLCJ2ZXJzaW9ucyIsInNwbGl0IiwiaXNOZXdlclRoYW4iLCJTZGxQcm90b2NvbEJhc2UiLCJiYXNlVHJhbnNwb3J0Q29uZmlnIiwic2RsUHJvdG9jb2xMaXN0ZW5lciIsIl90cmFuc3BvcnRDb25maWciLCJfc2RsUHJvdG9jb2xsaXN0ZW5lciIsInJlc2V0IiwiX2NyZWF0ZVRyYW5zcG9ydExpc3RlbmVyIiwiX3RyYW5zcG9ydE1hbmFnZXIiLCJfdHJhbnNwb3J0TGlzdGVuZXIiLCJfaGFuZGxlUGFja2V0UmVjZWl2ZWQiLCJzdGFydCIsImdldE10dSIsInJldFZhbCIsIl9tdHVzIiwiZ2V0IiwiVjFfVjJfTVRVX1NJWkUiLCJpc0Nvbm5lY3RlZCIsIl9wcm90b2NvbF92ZXJzaW9uIiwiX2hlYWRlclNpemUiLCJWMV9IRUFERVJfU0laRSIsInNlcnZpY2VTdGF0dXMiLCJNYXAiLCJfaGFzaElEIiwiX21lc3NhZ2VGcmFtZUFzc2VtYmxlcnMiLCJnZXRQcm90b2NvbFZlcnNpb24iLCJfc2V0VmVyc2lvbiIsInByb3RvY29sVmVyc2lvbiIsIlYyX0hFQURFUl9TSVpFIiwibXR1cyIsIlYzX1Y0X01UVV9TSVpFIiwic2VuZFBhY2tldCIsInNlbmRScGMiLCJwYXJhbUJ5dGVzIiwic2VuZE1lc3NhZ2UiLCJwcm90b2NvbE1lc3NhZ2UiLCJwYWNrZXQiLCJtZXNzYWdlRnJhbWVBc3NlbWJsZXIiLCJfZ2V0TWVzc2FnZUZyYW1lQXNzZW1ibGVyIiwiX2hhbmRsZUNvbnRyb2xQYWNrZXQiLCJfaGFuZGxlUlBDUGFja2V0IiwiX2hhbmRsZVN0YXJ0U2VydmljZUFDSyIsIl9oYW5kbGVTdGFydFNlcnZpY2VOQUsiLCJfaGFuZGxlRW5kU2VydmljZUFDSyIsIl9oYW5kbGVFbmRTZXJ2aWNlTkFLIiwiX2hhbmRsZUNvbnRyb2xTZXJ2aWNlUGFja2V0IiwiZW5kU2Vzc2lvbiIsIk1BWF9QUk9UT0NPTF9WRVJTSU9OIiwiQ29udHJvbEZyYW1lVGFncyIsIlN0YXJ0U2VydmljZUFDS0Jhc2UiLCJNVFUiLCJOQUtCYXNlIiwiUkVKRUNURURfUEFSQU1TIiwiU3RhcnRTZXJ2aWNlUHJvdG9jb2xWZXJzaW9uIiwiUFJPVE9DT0xfVkVSU0lPTiIsIlN0YXJ0U2VydmljZUhhc2hJZCIsIkhBU0hfSUQiLCJTdGFydFNlcnZpY2VEaW1lbnNpb25zIiwiSEVJR0hUIiwiV0lEVEgiLCJTdGFydFNlcnZpY2UiLCJTdGFydFNlcnZpY2VBQ0siLCJhc3NpZ24iLCJTRUNPTkRBUllfVFJBTlNQT1JUUyIsIkFVRElPX1NFUlZJQ0VfVFJBTlNQT1JUUyIsIlZJREVPX1NFUlZJQ0VfVFJBTlNQT1JUUyIsIkFVVEhfVE9LRU4iLCJTdGFydFNlcnZpY2VOQUsiLCJFbmRTZXJ2aWNlIiwiRW5kU2VydmljZUFDSyIsIkVuZFNlcnZpY2VOQUsiLCJUcmFuc3BvcnRFdmVudFVwZGF0ZSIsIlRDUF9JUF9BRERSRVNTIiwiVENQX1BPUlQiLCJSZWdpc3RlclNlY29uZGFyeVRyYW5zcG9ydCIsIlJlZ2lzdGVyU2Vjb25kYXJ5VHJhbnNwb3J0QUNLIiwiUmVnaXN0ZXJTZWNvbmRhcnlUcmFuc3BvcnROQUsiLCJSRUFTT04iLCJBdWRpbyIsIlZpZGVvIiwiVklERU9fUFJPVE9DT0wiLCJWSURFT19DT0RFQyIsIlJwY1R5cGUiLCJOT1RJRklDQVRJT04iLCJSRVNQT05TRSIsIlJFUVVFU1QiLCJrZXlGb3JWYWx1ZSIsIlJwY05vdGlmaWNhdGlvbiIsIlJwY1JlcXVlc3QiLCJfcHJvbWlzZSIsImdldENvcnJlbGF0aW9uSUQiLCJzZXRDb3JyZWxhdGlvbklEIiwiaWQiLCJnZXRPblJQQ1Jlc3BvbnNlUHJvbWlzZSIsInNldE9uUlBDUmVzcG9uc2VQcm9taXNlIiwicHJvbWlzZSIsIlByb21pc2UiLCJSZXN1bHQiLCJTVUNDRVNTIiwiVU5TVVBQT1JURURfUkVRVUVTVCIsIlVOU1VQUE9SVEVEX1JFU09VUkNFIiwiRElTQUxMT1dFRCIsIlJFSkVDVEVEIiwiQUJPUlRFRCIsIklHTk9SRUQiLCJSRVRSWSIsIklOX1VTRSIsIlZFSElDTEVfREFUQV9OT1RfQVZBSUxBQkxFIiwiVElNRURfT1VUIiwiSU5WQUxJRF9EQVRBIiwiQ0hBUl9MSU1JVF9FWENFRURFRCIsIklOVkFMSURfSUQiLCJEVVBMSUNBVEVfTkFNRSIsIkFQUExJQ0FUSU9OX05PVF9SRUdJU1RFUkVEIiwiV1JPTkdfTEFOR1VBR0UiLCJPVVRfT0ZfTUVNT1JZIiwiVE9PX01BTllfUEVORElOR19SRVFVRVNUUyIsIlRPT19NQU5ZX0FQUExJQ0FUSU9OUyIsIkFQUExJQ0FUSU9OX1JFR0lTVEVSRURfQUxSRUFEWSIsIldBUk5JTkdTIiwiR0VORVJJQ19FUlJPUiIsIlVTRVJfRElTQUxMT1dFRCIsIlRSVU5DQVRFRF9EQVRBIiwiVU5TVVBQT1JURURfVkVSU0lPTiIsIlZFSElDTEVfREFUQV9OT1RfQUxMT1dFRCIsIkZJTEVfTk9UX0ZPVU5EIiwiQ0FOQ0VMX1JPVVRFIiwiU0FWRUQiLCJJTlZBTElEX0NFUlQiLCJFWFBJUkVEX0NFUlQiLCJSRVNVTUVfRkFJTEVEIiwiREFUQV9OT1RfQVZBSUxBQkxFIiwiUkVBRF9PTkxZIiwiQ09SUlVQVEVEX0RBVEEiLCJScGNSZXNwb25zZSIsImdldFN1Y2Nlc3MiLCJLRVlfU1VDQ0VTUyIsInNldFN1Y2Nlc3MiLCJzdWNjZXNzIiwiZ2V0SW5mbyIsIktFWV9JTkZPIiwic2V0SW5mbyIsImluZm8iLCJnZXRSZXN1bHRDb2RlIiwiS0VZX1JFU1VMVF9DT0RFIiwic2V0UmVzdWx0Q29kZSIsInJlc3VsdENvZGUiLCJGdW5jdGlvbklEIiwiQUREX0NPTU1BTkQiLCJBZGRDb21tYW5kIiwiT05fTEFOR1VBR0VfQ0hBTkdFIiwiT25MYW5ndWFnZUNoYW5nZSIsIkltYWdlVHlwZSIsIlNUQVRJQyIsIkRZTkFNSUMiLCJMYW5ndWFnZSIsIkVOX1NBIiwiSEVfSUwiLCJST19STyIsIlVLX1VBIiwiSURfSUQiLCJWSV9WTiIsIk1TX01ZIiwiSElfSU4iLCJOTF9CRSIsIkVMX0dSIiwiSFVfSFUiLCJGSV9GSSIsIlNLX1NLIiwiRU5fVVMiLCJFU19NWCIsIkZSX0NBIiwiREVfREUiLCJFU19FUyIsIkVOX0dCIiwiUlVfUlUiLCJUUl9UUiIsIlBMX1BMIiwiRlJfRlIiLCJJVF9JVCIsIlNWX1NFIiwiUFRfUFQiLCJOTF9OTCIsIkVOX0FVIiwiWkhfQ04iLCJaSF9UVyIsIkpBX0pQIiwiQVJfU0EiLCJLT19LUiIsIlBUX0JSIiwiQ1NfQ1oiLCJEQV9ESyIsIk5PX05PIiwiRU5fSU4iLCJUSF9USCIsIkltYWdlIiwic2V0VmFsdWUiLCJLRVlfVkFMVUUiLCJnZXRWYWx1ZSIsInNldEltYWdlVHlwZSIsIktFWV9JTUFHRV9UWVBFIiwiZ2V0SW1hZ2VUeXBlIiwic2V0SXNUZW1wbGF0ZSIsImlzVGVtcGxhdGUiLCJLRVlfSVNfVEVNUExBVEUiLCJnZXRJc1RlbXBsYXRlIiwiTWVudVBhcmFtcyIsInNldFBhcmVudElEIiwiS0VZX1BBUkVOVF9JRCIsImdldFBhcmVudElEIiwic2V0UG9zaXRpb24iLCJwb3NpdGlvbiIsIktFWV9QT1NJVElPTiIsImdldFBvc2l0aW9uIiwic2V0TWVudU5hbWUiLCJtZW51TmFtZSIsIktFWV9NRU5VX05BTUUiLCJnZXRNZW51TmFtZSIsInNldENtZElEIiwiS0VZX0NNRF9JRCIsImdldENtZElEIiwic2V0TWVudVBhcmFtcyIsIm1lbnVQYXJhbXMiLCJLRVlfTUVOVV9QQVJBTVMiLCJnZXRNZW51UGFyYW1zIiwic2V0VnJDb21tYW5kcyIsInZyQ29tbWFuZHMiLCJLRVlfVlJfQ09NTUFORFMiLCJnZXRWckNvbW1hbmRzIiwic2V0Q21kSWNvbiIsImljb24iLCJLRVlfQ01EX0lDT04iLCJnZXRDbWRJY29uIiwic2V0TGFuZ3VhZ2UiLCJsYW5nYXVnZSIsImxhbmd1YWdlIiwiS0VZX0xBTkdVQUdFIiwiZ2V0TGFuZ3VhZ2UiLCJzZXRITUlEaXNwbGF5TGFuZ3VhZ2UiLCJLRVlfSE1JX0RJU1BMQVlfTEFOR1VBR0UiLCJnZXRITUlEaXNwbGF5TGFuZ3VhZ2UiLCJTZGxQc20iLCJfc3RhdGUiLCJTVEFSVF9TVEFURSIsIl9jb250cm9sRnJhbWVJbmZvIiwiX2R1bXBTaXplIiwiX2RhdGFMZW5ndGgiLCJnZXRTdGF0ZSIsImdldEZvcm1lZFBhY2tldCIsIkZJTklTSEVEX1NUQVRFIiwiaGFuZGxlQnl0ZSIsIl90cmFuc2l0aW9uT25JbnB1dCIsIkVSUk9SX1NUQVRFIiwicmF3Qnl0ZSIsInN0YXRlIiwiVkVSU0lPTl9NQVNLIiwiRlJBTUVfVFlQRV9NQVNLIiwiRlJBTUVfVFlQRV9DT05UUk9MIiwiRlJBTUVfVFlQRV9DT05TRUNVVElWRSIsIlNFUlZJQ0VfVFlQRV9TVEFURSIsIkNPTlRST0xfRlJBTUVfSU5GT19TVEFURSIsIkZSQU1FX1RZUEVfU0lOR0xFIiwiRlJBTUVfVFlQRV9GSVJTVCIsIlNFU1NJT05fSURfU1RBVEUiLCJEQVRBX1NJWkVfMV9TVEFURSIsIkRBVEFfU0laRV8yX1NUQVRFIiwiREFUQV9TSVpFXzNfU1RBVEUiLCJEQVRBX1NJWkVfNF9TVEFURSIsImJ5dGUiLCJEQVRBX1BVTVBfU1RBVEUiLCJkYXRhTGVuZ3RoIiwiRklSU1RfRlJBTUVfREFUQV9TSVpFIiwiTUVTU0FHRV8xX1NUQVRFIiwiTUVTU0FHRV8yX1NUQVRFIiwiTUVTU0FHRV8zX1NUQVRFIiwiTUVTU0FHRV80X1NUQVRFIiwiZXJyb3IiLCJkdW1wU2l6ZSIsIlRyYW5zcG9ydFR5cGUiLCJXRUJTT0NLRVRfU0VSVkVSIiwiV0VCU09DS0VUX0NMSUVOVCIsIm1hbmFnZXIiLCJsaWZlY3ljbGUiLCJMaWZlY3ljbGVNYW5hZ2VyIiwicHJvdG9jb2wiLCJCaW5hcnlGcmFtZUhlYWRlciIsImZ1bmN0aW9uSWQiLCJjb3JyZWxhdGlvbklkIiwianNvblNpemUiLCJfZnVuY3Rpb25JZCIsIl9jb3JyZWxhdGlvbklkIiwiX2pzb25TaXplIiwiX2pzb25EYXRhIiwiZnJvbUJpbmFyeUhlYWRlciIsImJpbkhlYWRlciIsImFzc2VtYmxlSGVhZGVyQnl0ZXMiLCJzZXRGdW5jdGlvbklkIiwiZ2V0RnVuY3Rpb25JZCIsInNldENvcnJlbGF0aW9uSWQiLCJnZXRDb3JyZWxhdGlvbklkIiwic2V0SlNPTlNpemUiLCJzaXplIiwiZ2V0SlNPTlNpemUiLCJzZXRKU09ORGF0YSIsImdldEpTT05EYXRhIiwiZW51bXMiLCJycGMiLCJtZXNzYWdlcyIsIkFkZENvbW1hbmRSZXNwb25zZSIsInN0cnVjdHMiLCJzZXNzaW9uIiwiU2RsU2Vzc2lvbiIsInNkbFNlc3Npb25MaXN0ZW5lciIsIl9zZXJ2aWNlTGlzdGVuZXJzIiwiX3NkbFNlc3Npb25MaXN0ZW5lciIsIl9zZXR1cFNkbFByb3RvY29sTGlzdGVuZXIiLCJfc2RsUHJvdG9jb2wiLCJhZGRTZXJ2aWNlTGlzdGVuZXIiLCJzZXJ2aWNlTGlzdGVuZXIiLCJyZW1vdmVTZXJ2aWNlTGlzdGVuZXIiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJTZGxTZXNzaW9uTGlzdGVuZXIiLCJ0cmFuc3BvcnQiLCJUcmFuc3BvcnRCYXNlIiwidHJhbnNwb3J0TGlzdGVuZXIiLCJfc2RsUHNtIiwic3RvcCIsIlRyYW5zcG9ydENvbmZpZ0Jhc2UiLCJ0cmFuc3BvcnRUeXBlIiwiX3RyYW5zcG9ydFR5cGUiLCJnZXRUcmFuc3BvcnRUeXBlIiwiVHJhbnNwb3J0TWFuYWdlckJhc2UiLCJhZGRyZXNzIiwidXRpbCIsIkJpdENvbnZlcnRlciIsImFycmF5QnVmZmVyVG9IZXgiLCJieXRlcyIsImhleFRvQXJyYXlCdWZmZXIiLCJoZXhTdHJpbmciLCJhcnJheUJ1ZmZlclRvSW50MzIiLCJidWZmZXIiLCJ2aWV3IiwiRGF0YVZpZXciLCJnZXRVaW50MzIiLCJpbnQzMlRvQXJyYXlCdWZmZXIiLCJBcnJheUJ1ZmZlciIsInNldFVpbnQzMiIsIkJzb24iLCJzZXJpYWxpemUiLCJvYmplY3QiLCJvcHRpb25zIiwiY29uc29sZSIsImxvZyIsIkJTT04iLCJkZXNlcmlhbGl6ZSIsIkpzb25ScGNNYXJzaGFsbGVyIiwibWFyc2hhbGwiLCJqc29uT2JqZWN0Iiwic3RyaW5nVmVyc2lvbiIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsImV4Y2VwdGlvbiJdLCJtYXBwaW5ncyI6IjJRQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQ0E7O09BR0EsS0FBTUEsQ0FBQUEsQ0FBcUI7Ozs7VUFPdkJDLFdBQVcsQ0FBQ0MsQ0FBVSxDQUFDLENBQVosQ0FBZUMsQ0FBZixDQUF3QixDQUMvQixHQUFlLElBQVosRUFBQUEsQ0FBSCxDQUNJLEtBQU0sa0RBQU47QUFHSixL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
