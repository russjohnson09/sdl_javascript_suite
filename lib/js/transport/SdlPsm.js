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

import { FrameType } from '../protocol/enums/FrameType.js';
import { SdlPacket } from '../protocol/SdlPacket.js';
import { SdlProtocolBase } from '../protocol/SdlProtocolBase.js';
import { BinaryFrameHeader } from '../protocol/BinaryFrameHeader';


class SdlPsm {							//TODO check to see if it's better to use '==' or '==='

    constructor() {
        this.reset();
    }

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
        this._byteCount = 0;
        this._frames = [];
    }

    /**
     * Read only data start.
     */
    get dataStart()
    {
        return this._dataStart;
    }

    get sessionID()
    {
        return this._sessionID;
    }

    /**
     *
     * @returns {Array} of BinaryFrameHeader
     */
    get frames()
    {
        return this._frames;
    }

    /**
     * Return data required.
     * @param chunk
     * @returns {SdlPsm}
     */
    static parseChunk(chunk) {
        let sdlPsm = new SdlPsm();

        //may be more data.
        sdlPsm.data = chunk;

        let byteCount = 0;
        for (let byte of chunk) {
            let success = sdlPsm.handleByte(byte);

            if (!success) {
                break;
            }
        }

        sdlPsm._initData();

        return sdlPsm;

    }

    handleByte(byte) {
        let self = this;

        self._state = self._transitionOnInput(byte, self._state);

        if (self._state === SdlPsm.ERROR_STATE) {
            return false;
        } else {
            return true;
        }
    }

    _getVersionFromByte(byte) {
        let version = (byte & SdlPsm.VERSION_MASK) >> 4;
        return version;
    }

    //TODO There are still states unaccounted for here but a basic rpc should work.
    _transitionOnInput(raw_byte, state) {
        let self = this;

        this._byteCount++;

        //1st byte
        if (state === SdlPsm.START_STATE) {
            this.version = this._getVersionFromByte(raw_byte);
            if (self.version === 0) {
                return SdlPsm.ERROR_STATE;
            }

            self.compression = (1 == ((raw_byte & SdlPsm.COMPRESSION_MASK) >> 3));

            self.frameType = raw_byte & SdlPsm.FRAME_TYPE_MASK;

            //TODO proper handling of this state.
            // # Log.trace(TAG, raw_byte + " = Frame Type: " + frameType);
            // # These are known versions supported by this library.
            // if (self.version < 1 or self.version > 5) and self.frameType != SdlPacket.SdlPacket.FRAME_TYPE_CONTROL:
            //     return self.ERROR_STATE
            // if self.frameType < SdlPacket.SdlPacket.FRAME_TYPE_CONTROL \
            // or self.frameType > SdlPacket.SdlPacket.FRAME_TYPE_CONSECUTIVE:
            // return self.ERROR_STATE
            //
            // # We made it through.
            return SdlPsm.SERVICE_TYPE_STATE;

        }
        // 2nd byte
        else if (state === SdlPsm.SERVICE_TYPE_STATE) {
            self.serviceType = (raw_byte & 0xFF);

            return SdlPsm.CONTROL_FRAME_INFO_STATE;
        }
        //3rd byte
        else if (state === SdlPsm.CONTROL_FRAME_INFO_STATE) {

            self.controlFrameInfo = raw_byte & 0xFF;
            return SdlPsm.SESSION_ID_STATE;
        }
        //4th byte
        else if (state === SdlPsm.SESSION_ID_STATE) {

            self._sessionID = (raw_byte & 0xFF);

            return SdlPsm.DATA_SIZE_1_STATE;
        }
        //5
        else if (state === SdlPsm.DATA_SIZE_1_STATE) {
            self._dataLength += (raw_byte & 0xFF) << 24;
            return SdlPsm.DATA_SIZE_2_STATE;

        }
        //6
        else if (state === SdlPsm.DATA_SIZE_2_STATE) {
            self._dataLength += (raw_byte & 0xFF) << 16; // # 2 bytes x 8 bits
            return SdlPsm.DATA_SIZE_3_STATE;
        }
        //7
        else if (state === SdlPsm.DATA_SIZE_3_STATE) {
            self._dataLength += (raw_byte & 0xFF) << 8; // #  1 byte x 8 bits
            return SdlPsm.DATA_SIZE_4_STATE;
        }
        //8
        else if (state === SdlPsm.DATA_SIZE_4_STATE) {
            self._dataLength += (raw_byte & 0xFF); // # 2 bytes x 8 bits

            self._payload = new Uint8Array(self._dataLength);
            self._dumpSize = self._dataLength;
            //Version 1 packets will not have message id's

            if (self.version === 1) {
                if (self._dataLength > 0) {
                    return SdlPsm.DATA_PUMP_STATE;

                } else {
                    return SdlPsm.FINISHED_STATE;

                }
            } else {
                return SdlPsm.MESSAGE_1_STATE;
            }

        }
        //9
        else if (state === SdlPsm.MESSAGE_1_STATE) {
            self._messageID += (raw_byte & 0xFF) << 24;
            return SdlPsm.MESSAGE_2_STATE;
        }
        //10
        else if (state === SdlPsm.MESSAGE_2_STATE) {
            self._messageID += (raw_byte & 0xFF) << 16;
            return SdlPsm.MESSAGE_3_STATE;
        }
        //11
        else if (state === SdlPsm.MESSAGE_3_STATE) {
            self._messageID += (raw_byte & 0xFF) << 8;
            return SdlPsm.MESSAGE_4_STATE;
        }
        //12
        else if (state === SdlPsm.MESSAGE_4_STATE) {
            self._messageID += (raw_byte & 0xFF);

            if (self._dataLength > 0) {
                return SdlPsm.DATA_PUMP_STATE;

            } else {
                return SdlPsm.FINISHED_STATE;

            }
        }
        else if (state === SdlPsm.DATA_PUMP_STATE) {
            if (!this._dataStart) {
                this._dataStart = this._byteCount;
            }
            self._payload[self._dataLength - self._dumpSize] = raw_byte;
            self._dumpSize -= 1;  // Do we have any more bytes to  read in?

            if (self._dumpSize > 0) {
                return SdlPsm.DATA_PUMP_STATE;
            } else {
                return SdlPsm.FINISHED_STATE;
            }
        }
    }



    /**
     * After reading each byte parse the data
     *
     */
    _initData() {
        let self = this;

        //could be a simple Uint8Array or could be a stream
        let data = self.data;

        let {
            version,
            frameType,
            dataStart,
        } = self;

        let dataStartFix = dataStart - 1;
        let dataLoad = data.slice(dataStartFix);


        //data after the meta, state, version frame type, etc.
        self.dataLoad = dataLoad;

        if (version == 1) {
            if (frameType == 0) {
                let message_size;
                const binary_frame_header = new Uint8Array(dataLoad.slice(0, 4));

                message_size = (binary_frame_header[0] & 0x0F) << 24;//  # TODO check if this is right with the mask
                message_size += (binary_frame_header[1] & 0xFF) << 16;
                message_size += (binary_frame_header[2] & 0xFF) << 8;
                message_size += binary_frame_header[3] & 0xFF;
            }
            return;
        } else {
            if (version > 1) {
                if (frameType == 1) {
                    try {

                        let frame = BinaryFrameHeader.fromBinaryHeader(dataLoad.slice());
                        self._frames.push(frame);
                    } catch (e) {
                        throw new Error(e);
                    }

                } else if (frameType === 0) { //TODO no magic numbers. is a frametype 0 no data?
                    return;
                } else {
                    throw new Error(`unsupported frame type ${frameType}`);
                }

            }
        }

    }


    getState() {
        return this._state;
    }

    getFormedPacket() {
        if (this._state == SdlPsm.FINISHED_STATE) {
            return new SdlPacket(this._version, this._encryption, this._frameType, this._serviceType, this._controlFrameInfo, this._sessionID, this._dataLength, this._messageID, this._payload);
        } else {
            return null;
        }
    }


	//FIXME
    // _transitionOnInput(rawByte, state) {
    //     switch (state) {
    //         case SdlPsm.START_STATE:
	//
    //             this._version = (rawByte & SdlPsm.VERSION_MASK)>>4;
	//
    //             if (this._version == 0) {
    //                 return SdlPsm.ERROR_STATE;
    //             }
    //             this._encryption = (1 == (rawByte & SdlPsm.ENCRYPTION_MASK)>>3);
	//
    //             this._frameType = rawByte & SdlPsm.FRAME_TYPE_MASK;
	//
    //             if ((this._version < 1 || this._version > 5)
    //                 && this._frameType != SdlPacket.FRAME_TYPE_CONTROL) {
    //                 return SdlPsm.ERROR_STATE;
    //             }
	//
    //             if (this._frameType < SdlPacket.FRAME_TYPE_CONTROL || this._frameType > SdlPacket.FRAME_TYPE_CONSECUTIVE) {
    //                 return SdlPsm.ERROR_STATE;
    //             }
	//
    //             return SdlPsm.SERVICE_TYPE_STATE;
	//
    //         case SdlPsm.SERVICE_TYPE_STATE:
	//
	// 	this._serviceType = rawByte & 0xFF;
	// 	return SdlPsm.CONTROL_FRAME_INFO_STATE;
	//
    //         case SdlPsm.CONTROL_FRAME_INFO_STATE:
	//
	// 	this._controlFrameInfo = rawByte & 0xFF;
	// 			switch(this._frameType){
	// 				case SdlPacket.FRAME_TYPE_CONTROL:
	// 					break;
	// 				case SdlPacket.FRAME_TYPE_SINGLE:
	// 				case SdlPacket.FRAME_TYPE_FIRST:
	// 					if(this._controlFrameInfo != 0x00){
	// 						return SdlPsm.ERROR_STATE;
	// 					}
	// 					break;
	// 				case SdlPacket.FRAME_TYPE_CONSECUTIVE:
	// 					//It might be a good idea to check packet sequence numbers here
	// 					break;
	// 				default:
	// 					return SdlPsm.ERROR_STATE;
	// 			}
	//
	// 			return SdlPsm.SESSION_ID_STATE;
	//
    //         case SdlPsm.SESSION_ID_STATE:
	//
	// 	this._sessionID = rawByte & 0xFF;
	// 			return SdlPsm.DATA_SIZE_1_STATE;
	//
    //         case SdlPsm.DATA_SIZE_1_STATE:
	//
	// 	this._dataLength += (rawByte & 0xFF) << 24; //Shift 3 bytes x 8 bits
	// 			return SdlPsm.DATA_SIZE_2_STATE;
	//
    //         case SdlPsm.DATA_SIZE_2_STATE:
	//
	// 	this._dataLength += (rawByte & 0xFF) << 16; //Sift 2 bytes x 8 bits
	// 			return DATA_SIZE_3_STATE;
	//
    //         case SdlPsm.DATA_SIZE_3_STATE:
	//
	// 	this._dataLength += (rawByte & 0xFF) << 8; //Sift 1 byte x 8 bits
	// 			return DATA_SIZE_4_STATE;
	//
    //         case SdlPsm.DATA_SIZE_4_STATE:
	//
	// 	this._dataLength += (rawByte & 0xFF)
	//
	// 			//We should have data length now for the pump state
	// 	switch (this._frameType) { //If all is correct we should break out of this switch statement
	// 				case SdlPacket.FRAME_TYPE_SINGLE:
	// 				case SdlPacket.FRAME_TYPE_CONSECUTIVE:
	// 					break;
	// 				case SdlPacket.FRAME_TYPE_CONTROL:
	// 					//Ok, well here's some interesting bit of knowledge. Because the start session request is from the phone with no knowledge of version it sends out
	// 					//a v1 packet. THEREFORE there is no message id field. **** Now you know and knowing is half the battle ****
	// 			if (this._version == 1 && this._controlFrameInfo == SdlPacket.FRAME_INFO_START_SERVICE) {
	//
	// 						if (this._dataLength == 0) {
	// 							return SdlPsm.FINISHED_STATE; //We are done if we don't have any payload
	// 						}
	//
	// 						if (this._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) { // sizes from protocol/SdlProtocol.js
	// 							this._payload = new byte[this._dataLength];
	// 						} else {
	// 							return SdlPsm.ERROR_STATE;
	// 						}
	//
	// 						this._dumpSize = this._dataLength;
	// 						return SdlPsm.DATA_PUMP_STATE;
	// 					}
	// 					break;
	//
	// 				case SdlPacket.FRAME_TYPE_FIRST:
	// 					if (dataLength == FIRST_FRAME_DATA_SIZE) {
	// 						break;
	// 				}
	// 				default:
	// 					return SdlPsm.ERROR_STATE;
	// 			}
	//
	// 			if (this._version == 1) { //Version 1 packets will not have message id's
	// 				if (this._dataLength == 0) {
	// 					return SdlPsm.FINISHED_STATE; //We are done if we don't have any payload
	// 				}
	// 				if (this._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) { // sizes from protocol/SdlProtocol.java
	// 					this._payload = new Uint8Array(this._dataLength);
	// 				} else {
	// 					return SdlPsm.ERROR_STATE;
	// 				}
	// 				this._dumpSize = this._dataLength;
	// 				return SdlPsm.DATA_PUMP_STATE;
	// 			} else {
	// 				return SdlPsm.MESSAGE_1_STATE;
	// 			}
	//
    //         case SdlPsm.MESSAGE_1_STATE:
	//
	// 			this._messageID += (rawByte & 0xFF) << 24; // Shift 3 bytes x 8 bits
	// 			return SdlPsm.MESSAGE_2_STATE;
	//
    //         case SdlPsm.MESSAGE_2_STATE:
	//
	// 			this._messageID += (rawByte & 0xFF) << 16; // Shift 2 bytes x 8 bits
	// 			return SdlPsm.MESSAGE_3_STATE;
	//
    //         case SdlPsm.MESSAGE_3_STATE:
	//
	// 			this._messageID += (rawByte & 0xFF) << 8; // Shift 1 byte x 8 bits
	// 			return SdlPsm.MESSAGE_4_STATE;
	//
    //         case SdlPsm.MESSAGE_4_STATE:
	//
	// 			this._messageID += (rawByte & 0xFF);
	// 			if (this._dataLength == 0) {
	// 				return SdlPsm.FINISHED_STATE; //We are done if we don't have any payload
	// 			}
	// 			try {
	// 				this._payload = new Uint8Array(this._dataLength);
	// 			} catch (error) { //Possible Out of Memory error if data length is invalid
	// 				return SdlPsm. ERROR_STATE;
	// 			}
	// 			dumpSize = dataLength;
	// 			return DATA_PUMP_STATE;
	//
    //         case SdlPsm.DATA_PUMP_STATE:
	//
	// 			this._payload[this._dataLength - this._dumpSize] = rawByte;
	// 			this._dumpSize--;
	// 			//Do we have any more bytes to read in?
	// 			if(this._dumpSize > 0){
	// 				return SdlPsm.DATA_PUMP_STATE;
	// 			}
	// 			} else if (this._dumpSize == 0) {
	// 				return SdlPsm.FINISHED_STATE;
	// 			} else {
	// 				return SdlPsm.ERROR_STATE;
	// 			}
	//
    //         case SdlPsm.FINISHED_STATE:
    //         default:
	// 			//Should not be handling any other bytes while in the finished state
    //             return SdlPsm.ERROR_STATE;
    //     }
    // }
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



//TODO remove and build or use a static string for the initial protocol request.
SdlPsm.INIT_REQUEST = new Uint8Array([
                                         16,
                                         7,
                                         1,
                                         0,
                                         0,
                                         0,
                                         0,
                                         32,
                                         32,
                                         0,
                                         0,
                                         0,
                                         2,
                                         112,
                                         114,
                                         111,
                                         116,
                                         111,
                                         99,
                                         111,
                                         108,
                                         86,
                                         101,
                                         114,
                                         115,
                                         105,
                                         111,
                                         110,
                                         0,
                                         6,
                                         0,
                                         0,
                                         0,
                                         53,
                                         46,
                                         50,
                                         46,
                                         48,
                                         0,
                                         0]);

export { SdlPsm };
