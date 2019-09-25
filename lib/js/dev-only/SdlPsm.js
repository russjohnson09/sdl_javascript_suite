import { SdlPsm as SdlPsm2 } from '../../js/transport/SdlPsm';
import { BinaryFrameHeader } from '../protocol/BinaryFrameHeader';
import { FrameType } from '../protocol/enums/FrameType';

class SdlPsm extends SdlPsm2 {

    constructor() {
        super();
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
            byteCount++;
            // console.log(`read byte`,byte);
            let success = sdlPsm.readByte(byte);

            if (!success) {
                break;
            }
        }

        sdlPsm._initData();

        return sdlPsm;

    }

    readByte(byte) {
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


}
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
