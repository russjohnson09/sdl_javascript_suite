const SDL = require('./../lib/js/dist/SDL.js');

const SdlMsgVersion = SDL.rpc.structs.SdlMsgVersion;


class Test {
    constructor () {
    }
}

//sdl_javascript_suite/lib/js/src/rpc/structs/SdlMsgVersion.js

const GENERAL_SDLMSGVERSION = Test.GENERAL_SDLMSGVERSION = new SdlMsgVersion();
const GENERAL_INT = Test.GENERAL_INT = 100;

GENERAL_SDLMSGVERSION.setMajorVersion(GENERAL_INT);
GENERAL_SDLMSGVERSION.setMinorVersion(GENERAL_INT);



module.exports = Test;