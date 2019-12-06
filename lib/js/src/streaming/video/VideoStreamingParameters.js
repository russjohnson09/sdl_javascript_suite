import { VideoStreamingFormat } from '../../rpc/structs/VideoStreamingFormat';
import { VideoStreamingCodec } from '../../rpc/enums/VideoStreamingCodec';
import { VideoStreamingProtocol } from '../../rpc/enums/VideoStreamingProtocol';
import { ImageResolution } from '../../rpc/structs/ImageResolution';

/*
 * Copyright (c) 2019 Livio, Inc.
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

const DEFAULT_PROTOCOL = VideoStreamingProtocol.RAW;
const DEFAULT_CODEC = VideoStreamingCodec.H264;
const DEFAULT_WIDTH = 1024;
const DEFAULT_HEIGHT = 576;
const DEFAULT_DENSITY = 240;
const DEFAULT_FRAMERATE = 30;
const DEFAULT_BITRATE = 512000;
const DEFAULT_INTERVAL = 5;
const DEFAULT_SCALE = 1.0;

class VideoStreamingParameters {
    constructor (displayDensity = null, frameRate = null, bitrate = null, interval = null, resolution = null, format = null) {
        this.displayDensity = displayDensity || DEFAULT_DENSITY;
        this.frameRate = frameRate || DEFAULT_FRAMERATE;
        this.bitrate = bitrate || DEFAULT_BITRATE;
        this.interval = interval || DEFAULT_INTERVAL;

        if (!resolution) {
            resolution = new ImageResolution();
            resolution.setResolutionWidth(DEFAULT_WIDTH);
            resolution.setResolutionHeight(DEFAULT_HEIGHT);
        }
        this.resolution = resolution;

        if (!format) {
            this.format = new VideoStreamingFormat();
            this.format.setProtocol(DEFAULT_PROTOCOL);
            this.format.setCodec(DEFAULT_CODEC);
        }

        this.format = format;
    }

    /**
     * Will only copy values that are not null or are greater than 0
     * @param {Object} params VideoStreamingParameters that should be copied into this new instants
     */
    updateWithParams (params) {
        if (params !== null) {
            if (params.displayDensity > 0) {
                this.displayDensity = params.displayDensity;
            }
            if (params.frameRate > 0) {
                this.frameRate = params.frameRate;
            }
            if (params.bitrate > 0) {
                this.bitrate = params.bitrate;
            }
            if (params.interval > 0) {
                this.interval = params.interval;
            }
            if (params.resolution !== null) {
                if (params.resolution.getResolutionHeight() !== null && params.resolution.getResolutionHeight() > 0) {
                    this.resolution.setResolutionHeight(params.resolution.getResolutionHeight());
                }
                if (params.resolution.getResolutionWidth() !== null && params.resolution.getResolutionWidth() > 0) {
                    this.resolution.setResolutionWidth(params.resolution.getResolutionWidth());
                }
            }
            if (params.format !== null) {
                this.format = params.format;
            }
        }
    }

    /**
     * Update the values contained in the capability that should have been returned through the SystemCapabilityManager.
     * This update will use the most preferred streaming format from the module.
     * @param {VideoStreamingCapability} capability the video streaming capability returned from the SystemCapabilityManager
     */
    updateWithCapability (capability) {
        if (capability.getMaxBitrate() !== null) { 
            this.bitrate = capability.getMaxBitrate() * 1000; // NOTE: the unit of maxBitrate in getSystemCapability is kbps.
        } 
        let scale = DEFAULT_SCALE;
        if (capability.getScale() !== null) { 
            scale = capability.getScale(); 
        }
        const resolution = capability.getPreferredResolution();
        if (resolution !== null) {
            if (resolution.getResolutionHeight() !== null && resolution.getResolutionHeight() > 0) { 
                this.resolution.setResolutionHeight(Math.floor((resolution.getResolutionHeight() / scale)));
            }
            if (resolution.getResolutionWidth() !== null && resolution.getResolutionWidth() > 0) { 
                this.resolution.setResolutionWidth(Math.floor((resolution.getResolutionWidth() / scale))); 
            }
        }
        const formats = capability.getSupportedFormats();
        if (formats !== null && formats.length > 0) {
            this.format = formats[0];
        }
    }

    setDisplayDensity (displayDensity) {
        this.displayDensity = displayDensity;
        return this;
    }

    getDisplayDensity () {
        return this.displayDensity;
    }

    setFrameRate (frameRate) {
        this.frameRate = frameRate;
    }

    getFrameRate () {
        return this.frameRate;
    }

    setBitrate (bitrate) {
        this.bitrate = bitrate;
        return this;
    }

    getBitrate () {
        return this.bitrate;
    }

    setInterval (interval) {
        this.interval = interval;
        return this;
    }

    getInterval () {
        return this.interval;
    }

    setFormat (format) {
        this.format = format;
        return this;
    }

    getFormat () {
        return this.format;
    }

    setResolution (resolution) {
        this.resolution = resolution;
        return this;
    }

    getResolution () {
        return this.resolution;
    }
}

export { VideoStreamingParameters };