const SDL = require('./../lib/js/dist/SDL.js');

const SdlMsgVersion = SDL.rpc.structs.SdlMsgVersion;
const TTSChunk = SDL.rpc.structs.TTSChunk;

const SpeechCapabilities = SDL.rpc.enums.SpeechCapabilities;
const AppHMIType = SDL.rpc.enums.AppHMIType;




class Test {
    constructor () {
    }
}

//sdl_javascript_suite/lib/js/src/rpc/structs/SdlMsgVersion.js

const GENERAL_SDLMSGVERSION = Test.GENERAL_SDLMSGVERSION = new SdlMsgVersion();
const GENERAL_INT = Test.GENERAL_INT = 100;

GENERAL_SDLMSGVERSION.setMajorVersion(GENERAL_INT);
GENERAL_SDLMSGVERSION.setMinorVersion(GENERAL_INT);

const GENERAL_APP_ID = Test.GENERAL_APP_ID                      = "123e4567e8";
const GENERAL_FULL_APP_ID =             Test.GENERAL_FULL_APP_ID                    = "123e4567-e89b-12d3-a456-426655440000";


const GENERAL_LANGUAGE =             Test.GENERAL_LANGUAGE                    = "123e4567-e89b-12d3-a456-426655440000";
const GENERAL_STRING =             Test.GENERAL_STRING                    = "test";
const GENERAL_TTSCHUNK_LIST =             Test.GENERAL_TTSCHUNK_LIST                    = "123e4567-e89b-12d3-a456-426655440000";
const GENERAL_STRING_LIST =             Test.GENERAL_STRING_LIST                    = ['a', 'b'];
const GENERAL_APPHMITYPE_LIST =             Test.GENERAL_APPHMITYPE_LIST                    = [AppHMIType.BACKGROUND_PROCESS,AppHMIType.COMMUNICATION]
const GENERAL_BOOLEAN =             Test.GENERAL_BOOLEAN                    = true;
const GENERAL_DEVICEINFO =             Test.GENERAL_DEVICEINFO                    = "123e4567-e89b-12d3-a456-426655440000";
const GENERAL_DAYCOLORSCHEME =             Test.GENERAL_DAYCOLORSCHEME                    = "123e4567-e89b-12d3-a456-426655440000";
const GENERAL_NIGHTCOLORSCHEME =             Test.GENERAL_NIGHTCOLORSCHEME                    = "123e4567-e89b-12d3-a456-426655440000";


function createTtsChunk (type, text) {
    console.log({type,text});
    const ttsChunk = new TTSChunk();
    ttsChunk.setType(type);
    ttsChunk.setText(text);
    return ttsChunk;
}
(function () {
    new TTSChunk();
})();


GENERAL_TTSCHUNK_LIST.push(createTtsChunk(SpeechCapabilities.TEXT, "Welcome to the jungle"));
GENERAL_TTSCHUNK_LIST.push(createTtsChunk(SpeechCapabilities.TEXT, "Say a command"));

// msg.setFullAppId(Test.GENERAL_FULL_APP_ID);
// msg.setLanguageDesired(Test.GENERAL_LANGUAGE);
// msg.setHmiDisplayLanguageDesired(Test.GENERAL_LANGUAGE);
// msg.setHashID(Test.GENERAL_STRING);
// msg.setTtsName(Test.GENERAL_TTSCHUNK_LIST);
// msg.setVrSynonyms(Test.GENERAL_STRING_LIST);
// msg.setAppHMIType(Test.GENERAL_APPHMITYPE_LIST);
// msg.setIsMediaApplication(Test.GENERAL_BOOLEAN);
// msg.setDeviceInfo(Test.GENERAL_DEVICEINFO);
// msg.setDayColorScheme(Test.GENERAL_DAYCOLORSCHEME);
// msg.setNightColorScheme(Test.GENERAL_NIGHTCOLORSCHEME);

module.exports = Test;