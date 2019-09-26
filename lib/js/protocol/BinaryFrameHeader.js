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

import { BitConverter } from '../util/BitConverter';

const ab2str = require('arraybuffer-to-string');

class BinaryFrameHeader {

    /**
     * @constructor
     * @param {RpcType} rpcType - A number representing an Enum byte
     * @param {FunctionID} functionId - A number representing an Enum int
     * @param {Number} correlationID - A number representing an int
     * @param {Object} jsonData - An object of the json data
     * @param {Uint8Array} bulkData - Any bulk data included with the json RPC.
     */
    constructor(rpcType, functionId, correlationID, jsonSize) {
        this._rpcType = rpcType;
        this._functionId = functionId;
        this._correlationID = correlationID;

        this._jsonData = null;
        this._bulkData = null;

        return this;

    }

    get functionId() {
        return this._functionId;
    }

    get correlationID() {
        return this._correlationID;
    }

    static fromBinaryHeader(binHeaderData) {
        let rpcType, functionId, correlationId, jsonSize;
        const binary_frame_header = new Uint8Array(binHeaderData.slice(0, 12));

        rpcType = binary_frame_header[0] >> 4;

        //TODO use bit converter for better readability?
        functionId = (binary_frame_header[0] & 0x0F) << 24;
        functionId += (binary_frame_header[1] & 0xFF) << 16;
        functionId += (binary_frame_header[2] & 0xFF) << 8;
        functionId += binary_frame_header[3] & 0xFF;

        correlationId = (binary_frame_header[4] & 0xFF) << 24;
        correlationId += (binary_frame_header[5] & 0xFF) << 16;
        correlationId += (binary_frame_header[6] & 0xFF) << 8;
        correlationId += binary_frame_header[7] & 0xFF;

        jsonSize = (binary_frame_header[8] & 0xFF) << 24;
        jsonSize += (binary_frame_header[9] & 0xFF) << 16;
        jsonSize += (binary_frame_header[10] & 0xFF) << 8;
        jsonSize += binary_frame_header[11] & 0xFF;


        let binaryFormHeader = new BinaryFrameHeader(rpcType, functionId, correlationId, jsonSize);

        let jsonData = binHeaderData.slice(12, 12 + jsonSize);
        let jsonDataStr = ab2str(jsonData);

        binaryFormHeader._jsonData = JSON.parse(jsonDataStr);

        if (binHeaderData.length > 12 + jsonSize) {
            let bulkData = binHeaderData.slice(12 + jsonSize);
            binaryFormHeader.setBulkData(bulkData);
        }
        return binaryFormHeader;
    }

    /**
     * Uses the private members of this class to construct a byte array header
     * @return {Int8Array} - A signed byte array
     */
    assembleHeaderBytes() {
        // TODO
    }

    /**
     * @param {Int8Array} type - A number representing an Enum byte
     */
    setRPCType(type) {
        this._rpcType = type;
    }

    /**
     * @return {RpcType} - A number representing an Enum byte
     */
    getRPCType() {
        return this._rpcType;
    }

    /**
     * @param {RpcType} id - A number representing an Enum int
     */
    setFunctionId(id) {
        this._functionId = id;
    }

    /**
     * @return {FunctionID} - A number representing an Enum int
     */
    getFunctionId() {
        return this._functionId;
    }

    /**
     * @param {FunctionID} id - A number representing an int
     */
    setCorrelationID(id) {
        this._correlationID = id;
    }

    /**
     * @return {Number} - A number representing an int
     */
    getCorrelationID() {
        return this._correlationID;
    }

    /**
     * @param {Number} data - A byte array representing JSON data

     */
    set jsonData(data) {
        this._jsonData = data;
    }

    /**
     * @return {Int8Array} - A byte array representing JSON data
     */
    get jsonData() {
        return this._jsonData;
    }

    /**
     * @param {Int8Array} data - A byte array representing bulk data
     */
    set bulkData(data) {
        this._bulkData = data;
    }

    /**
     * @return {Uint8Array} - A byte array representing bulk data
     */
    get bulkData() {
        return this._bulkData;
    }

}

export { BinaryFrameHeader };
