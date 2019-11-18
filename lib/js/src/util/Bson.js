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

// import  * as BSON  from './../../../../node_modules/bson/dist/bson.bundle.js';
import  BSON from 'bson';

export default class Bson {
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
        return BSON.serialize(object, options);
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
        return BSON.deserialize(object, options);
    }
}

// 34: import  { Bson } from './../util/Bson.js';
// every class used by the app must export a version of itself with the same name as the file.
export { Bson };