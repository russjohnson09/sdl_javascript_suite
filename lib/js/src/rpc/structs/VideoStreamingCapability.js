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

import { RpcStruct } from '../RpcStruct.js';

class VideoStreamingCapability extends RpcStruct {
    /**
    * @param {VideoStreamingProtocol} val
    * @return {VideoStreamingCapability}
    */
    setPreferredResolution (val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getPreferredResolution () {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }

    /**
    * @param {VideoStreamingProtocol} val
    * @return {VideoStreamingCapability}
    */
    setMaxBitrate (val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getMaxBitrate () {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }


    /**
* @param {VideoStreamingProtocol} val
* @return {VideoStreamingCapability}
*/
    setSupportedFormats (val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getSupportedFormats () {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }

    /**
* @param {VideoStreamingProtocol} val
* @return {VideoStreamingCapability}
*/
    setHapticSpatialDataSupported (val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getHapticSpatialDataSupported () {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }


    // VideoStreamingCapability.KEY_DIAGONAL_SCREEN_SIZE = 'diagonalScreenSize';
    /**
* @param {VideoStreamingProtocol} val
* @return {VideoStreamingCapability}
*/
    setDiagonalScreenSize (val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getDiagonalScreenSize() {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }



    // VideoStreamingCapability.KEY_PIXEL_PER_INCH = 'pixelPerInch';
    /**
* @param {VideoStreamingProtocol} val
* @return {VideoStreamingCapability}
*/
    setPixelPerInch(val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getPixelPerInch() {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }
    // VideoStreamingCapability.KEY_SCALE = 'scale';
    /**
* @param {VideoStreamingProtocol} val
* @return {VideoStreamingCapability}
*/
    setScale(val) {
        this.setParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION, val);
        return this;
    }

    /**
    * @return {VideoStreamingProtocol}
    */
    getScale() {
        return this.getParameter(VideoStreamingCapability.KEY_PREFERRED_RESOLUTION);
    }
}

VideoStreamingCapability.KEY_PREFERRED_RESOLUTION = 'preferredResolution';
VideoStreamingCapability.KEY_MAX_BITRATE = 'maxBitrate';
VideoStreamingCapability.KEY_SUPPORTED_FORMATS = 'supportedFormats';
VideoStreamingCapability.KEY_HAPTIC_SPATIAL_DATA_SUPPORTED = 'hapticSpatialDataSupported';
VideoStreamingCapability.KEY_DIAGONAL_SCREEN_SIZE = 'diagonalScreenSize';
VideoStreamingCapability.KEY_PIXEL_PER_INCH = 'pixelPerInch';
VideoStreamingCapability.KEY_SCALE = 'scale';

export { VideoStreamingCapability };
