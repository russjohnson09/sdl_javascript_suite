const SDL = require('./../lib/js/dist/SDL.js');

const SdlMsgVersion = SDL.rpc.structs.SdlMsgVersion;
const TTSChunk = SDL.rpc.structs.TTSChunk;

const DeviceInfo = SDL.rpc.structs.DeviceInfo;
const TemplateColorScheme = SDL.rpc.structs.TemplateColorScheme;
const RGBColor = SDL.rpc.structs.RGBColor;

// enums
const SpeechCapabilities = SDL.rpc.enums.SpeechCapabilities;
const AppHMIType = SDL.rpc.enums.AppHMIType;
const Language = SDL.rpc.enums.Language;
const ImageType = SDL.rpc.enums.ImageType;





class Test {
    constructor() {
    }
}


const NULL = Test.NULL = 'Value should be null.';
const MATCH = Test.MATCH = 'Values should match.';
const ARRAY = Test.ARRAY = 'Array values should match.';
const TRUE = Test.TRUE = 'Value should be true.';
const FALSE = Test.FALSE = 'Value should be false.';
const NOT_NULL = Test.NOT_NULL = 'Value should not be null.';
const JSON_FAIL = Test.JSON_FAIL = 'Json testing failed.';

//sdl_javascript_suite/lib/js/src/rpc/structs/SdlMsgVersion.js

const GENERAL_SDLMSGVERSION = Test.GENERAL_SDLMSGVERSION = new SdlMsgVersion();


const GENERAL_INT = Test.GENERAL_INT = 100;
const GENERAL_INTEGER = Test.GENERAL_INTEGER = 100;

GENERAL_SDLMSGVERSION.setMajorVersion(GENERAL_INT);
GENERAL_SDLMSGVERSION.setMinorVersion(GENERAL_INT);
const JSON_SDLMSGVERSION = Test.JSON_SDLMSGVERSION = {
    [SdlMsgVersion.KEY_MAJOR_VERSION]: GENERAL_INT,
    [SdlMsgVersion.KEY_MINOR_VERSION]: GENERAL_INT,
};

const GENERAL_APP_ID = Test.GENERAL_APP_ID = '123e4567e8';
const GENERAL_FULL_APP_ID = Test.GENERAL_FULL_APP_ID = '123e4567-e89b-12d3-a456-426655440000';


const GENERAL_IMAGETYPE = Test.GENERAL_IMAGETYPE = ImageType.DYNAMIC;
const GENERAL_LANGUAGE = Test.GENERAL_LANGUAGE = Language.EN_US;
const GENERAL_STRING = Test.GENERAL_STRING = 'test';
const GENERAL_TTSCHUNK_LIST = Test.GENERAL_TTSCHUNK_LIST = [];
const GENERAL_STRING_LIST = Test.GENERAL_STRING_LIST = [
    'a',
    'b',
];
const GENERAL_APPHMITYPE_LIST = Test.GENERAL_APPHMITYPE_LIST = [
    AppHMIType.BACKGROUND_PROCESS,
    AppHMIType.COMMUNICATION,
];
const GENERAL_BOOLEAN = Test.GENERAL_BOOLEAN = true;
const GENERAL_DEVICEINFO = Test.GENERAL_DEVICEINFO = new DeviceInfo();
const GENERAL_DAYCOLORSCHEME = Test.GENERAL_DAYCOLORSCHEME = new TemplateColorScheme();
const GENERAL_NIGHTCOLORSCHEME = Test.GENERAL_NIGHTCOLORSCHEME = new TemplateColorScheme();
const GENERAL_RGBCOLOR = Test.GENERAL_RGBCOLOR = new RGBColor();

GENERAL_RGBCOLOR.setRedValue(GENERAL_INTEGER);
GENERAL_RGBCOLOR.setGreenValue(GENERAL_INTEGER);
GENERAL_RGBCOLOR.setBlueValue(GENERAL_INTEGER);

GENERAL_NIGHTCOLORSCHEME.setPrimaryColor(GENERAL_RGBCOLOR);
GENERAL_NIGHTCOLORSCHEME.setSecondaryColor(GENERAL_RGBCOLOR);
GENERAL_NIGHTCOLORSCHEME.setBackgroundColor(GENERAL_RGBCOLOR);

GENERAL_DAYCOLORSCHEME.setPrimaryColor(GENERAL_RGBCOLOR);
GENERAL_DAYCOLORSCHEME.setSecondaryColor(GENERAL_RGBCOLOR);
GENERAL_DAYCOLORSCHEME.setBackgroundColor(GENERAL_RGBCOLOR);

function createTtsChunk(type, text) {
    const ttsChunk = new TTSChunk();
    ttsChunk.setType(type);
    ttsChunk.setText(text);
    return ttsChunk;
}
(function () {
    new TTSChunk();
})();


GENERAL_TTSCHUNK_LIST.push(createTtsChunk(SpeechCapabilities.SC_TEXT, 'Welcome to the jungle'));
GENERAL_TTSCHUNK_LIST.push(createTtsChunk(SpeechCapabilities.SC_TEXT, 'Say a command'));

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

GENERAL_DEVICEINFO.setCarrier(GENERAL_STRING);
GENERAL_DEVICEINFO.setFirmwareRev(GENERAL_STRING);
GENERAL_DEVICEINFO.setHardware(GENERAL_STRING);
GENERAL_DEVICEINFO.setMaxNumberRFCOMMPorts(GENERAL_INT);
GENERAL_DEVICEINFO.setOs(GENERAL_STRING);
GENERAL_DEVICEINFO.setOsVersion(GENERAL_STRING);


module.exports = Test;