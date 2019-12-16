const SDL = require('./../../../../lib/js/dist/SDL.js');
const RegisterAppInterface = SDL.rpc.messages.RegisterAppInterface;
const FunctionID = SDL.rpc.enums.FunctionID;
const RpcType = SDL.rpc.enums.RpcType;


const Test = require('./../../../Test.js');
const Validator = require('./../../../Validator.js');

// sdl_java_suite/android/sdl_android/src/androidTest/java/com/smartdevicelink/test/rpc/responses/RegisterAppInterfaceResponseTest.java
const assertTrue = Validator.assertTrue.bind(Validator);
const assertEquals = Validator.assertEquals.bind(Validator);
const assertNull = Validator.assertNull.bind(Validator);
const assertNotNull = Validator.assertNotNull.bind(Validator);
const testNullBase = Validator.testNullBase.bind(Validator, 
    FunctionID.keyForValue(FunctionID.RegisterAppInterface), 
    RpcType.REQUEST);



let rpcMessage;
const expectedParameters = {};
describe('setup', function () {
    it('createMessage', function (done) {
        rpcMessage = new RegisterAppInterface();
        rpcMessage.setSdlMsgVersion(Test.GENERAL_SDLMSGVERSION);
        rpcMessage.setLanguage(Test.GENERAL_LANGUAGE);
        rpcMessage.setHmiDisplayLanguage(Test.GENERAL_LANGUAGE);
        rpcMessage.setDisplayCapabilities(Test.GENERAL_DISPLAYCAPABILITIES);
        rpcMessage.setPresetBankCapabilities(Test.GENERAL_PRESETBANKCAPABILITIES);
        rpcMessage.setVehicleType(Test.GENERAL_VEHICLETYPE);
        rpcMessage.setButtonCapabilities(Test.GENERAL_BUTTONCAPABILITIES_LIST);
        rpcMessage.setSoftButtonCapabilities(Test.GENERAL_SOFTBUTTONCAPABILITIES_LIST);
        rpcMessage.setAudioPassThruCapabilities(Test.GENERAL_AUDIOPASSTHRUCAPABILITIES_LIST);
        rpcMessage.setPcmStreamingCapabilities(Test.GENERAL_AUDIOPASSTHRUCAPABILITIES);
        rpcMessage.setHmiZoneCapabilities(Test.GENERAL_HMIZONECAPABILITIES_LIST);
        rpcMessage.setSpeechCapabilities(Test.GENERAL_SPEECHCAPABILITIES_LIST);
        rpcMessage.setVrCapabilities(Test.GENERAL_VRCAPABILITIES_LIST);
        rpcMessage.setPrerecordedSpeech(Test.GENERAL_PRERECORDEDSPEECH_LIST);
        rpcMessage.setSupportedDiagModes(Test.GENERAL_INTEGER_LIST);
        rpcMessage.setIconResumed(Test.GENERAL_BOOLEAN);
        done();
    });

    it('expectedParameters', function (done) {
        expectedParameters[RegisterAppInterface.KEY_SDL_MSG_VERSION] = Test.JSON_SDLMSGVERSION;

        // result.put(RegisterAppInterface.KEY_SDL_MSG_VERSION, Test.JSON_SDLMSGVERSION);
        // result.put(RegisterAppInterface.KEY_APP_NAME, Test.GENERAL_STRING);
        // result.put(RegisterAppInterface.KEY_NGN_MEDIA_SCREEN_APP_NAME, Test.GENERAL_STRING);
        // result.put(RegisterAppInterface.KEY_APP_ID, Test.GENERAL_APP_ID);
        // result.put(RegisterAppInterface.KEY_FULL_APP_ID, Test.GENERAL_FULL_APP_ID);
        // result.put(RegisterAppInterface.KEY_LANGUAGE_DESIRED, Test.GENERAL_LANGUAGE);
        // result.put(RegisterAppInterface.KEY_HMI_DISPLAY_LANGUAGE_DESIRED, Test.GENERAL_LANGUAGE);
        // result.put(RegisterAppInterface.KEY_HASH_ID, Test.GENERAL_STRING);
        // result.put(RegisterAppInterface.KEY_TTS_NAME, Test.JSON_TTSCHUNKS);
        // result.put(RegisterAppInterface.KEY_VR_SYNONYMS, JsonUtils.createJsonArray(Test.GENERAL_STRING_LIST));
        // result.put(RegisterAppInterface.KEY_APP_HMI_TYPE, JsonUtils.createJsonArrayOfJsonNames(Test.GENERAL_APPHMITYPE_LIST, SDL_VERSION_UNDER_TEST));
        // result.put(RegisterAppInterface.KEY_IS_MEDIA_APPLICATION, Test.GENERAL_BOOLEAN);
        // result.put(RegisterAppInterface.KEY_DEVICE_INFO, Test.JSON_DEVICEINFO);
        // result.put(RegisterAppInterface.KEY_DAY_COLOR_SCHEME, Test.JSON_DAYCOLORSCHEME);
        // result.put(RegisterAppInterface.KEY_NIGHT_COLOR_SCHEME, Test.JSON_NIGHTCOLORSCHEME);

        done();
    });
});


describe('RegisterAppInterfaceTests', function () {
    it('testJson', function (done) {

        const rpcMessageJson = rpcMessage.serializeJSON();  

        console.log({rpcMessageJson});
        done();
    });

    it ('testRpcValues', function (done) {
        const testVersion = rpcMessage.getSdlMsgVersion();
        const testName = rpcMessage.getAppName();
        const testNgnName = rpcMessage.getNgnMediaScreenAppName();
        const testAppId = rpcMessage.getAppId();
        const testFullAppId = rpcMessage.getFullAppId();
        const testLang = rpcMessage.getLanguageDesired();
        const testHmiLang = rpcMessage.getHmiDisplayLanguageDesired();
        const testHashId = rpcMessage.getHashID();
        const testTts = rpcMessage.getTtsName();
        const testSynonyms = rpcMessage.getVrSynonyms();
        const testApps = rpcMessage.getAppHmiType();
        const testMedia = rpcMessage.getIsMediaApplication();
        const testDeviceInfo = rpcMessage.getDeviceInfo();
        const testDayColorScheme = rpcMessage.getDayColorScheme();
        const testNightColorScheme = rpcMessage.getNightColorScheme();
        const dayPrimary = testDayColorScheme.getPrimaryColor();

       
        // Valid Tests
        assertTrue(Test.TRUE, Validator.validateSdlMsgVersion(Test.GENERAL_SDLMSGVERSION, testVersion));
        assertEquals(Test.MATCH, Test.GENERAL_STRING, testName);
        assertEquals(Test.MATCH, Test.GENERAL_STRING, testNgnName);
        assertEquals(Test.MATCH, Test.GENERAL_APP_ID, testAppId);
        assertEquals(Test.MATCH, Test.GENERAL_FULL_APP_ID, testFullAppId);
        assertEquals(Test.MATCH, Test.GENERAL_LANGUAGE, testLang);
        assertEquals(Test.MATCH, Test.GENERAL_LANGUAGE, testHmiLang);
        assertEquals(Test.MATCH, Test.GENERAL_STRING, testHashId);
        // assertTrue(Test.TRUE, Validator.validateTtsChunks(Test.GENERAL_TTSCHUNK_LIST, testTts));

        console.log({ testTts, rpcMessage, });
        Validator.validateTtsChunks(Test.GENERAL_TTSCHUNK_LIST, testTts);

        assertEquals(Test.MATCH, Test.GENERAL_STRING_LIST, testSynonyms);
        assertEquals(Test.MATCH, Test.GENERAL_APPHMITYPE_LIST, testApps);
        assertEquals(Test.MATCH, Test.GENERAL_BOOLEAN, testMedia);
        assertTrue(Test.TRUE, Validator.validateDeviceInfo(Test.GENERAL_DEVICEINFO, testDeviceInfo));
        assertTrue(Test.TRUE, Validator.validateTemplateColorScheme(Test.GENERAL_DAYCOLORSCHEME, testDayColorScheme));
        assertTrue(Test.TRUE, Validator.validateTemplateColorScheme(Test.GENERAL_NIGHTCOLORSCHEME, testNightColorScheme));

        // Invalid/Null Tests
        rpcMessage = new RegisterAppInterface();
        assertNotNull(Test.NOT_NULL, rpcMessage);
        testNullBase(rpcMessage);

        assertNull(Test.NULL, rpcMessage.getSdlMsgVersion());
        assertNull(Test.NULL, rpcMessage.getAppName());
        assertNull(Test.NULL, rpcMessage.getNgnMediaScreenAppName());
        assertNull(Test.NULL, rpcMessage.getAppId());
        assertNull(Test.NULL, rpcMessage.getFullAppId());
        assertNull(Test.NULL, rpcMessage.getLanguageDesired());
        assertNull(Test.NULL, rpcMessage.getHmiDisplayLanguageDesired());
        assertNull(Test.NULL, rpcMessage.getHashID());
        assertNull(Test.NULL, rpcMessage.getTtsName());
        assertNull(Test.NULL, rpcMessage.getVrSynonyms());
        assertNull(Test.NULL, rpcMessage.getAppHmiType());
        assertNull(Test.NULL, rpcMessage.getIsMediaApplication());
        assertNull(Test.NULL, rpcMessage.getDeviceInfo());
        assertNull(Test.NULL, rpcMessage.getDayColorScheme());
        assertNull(Test.NULL, rpcMessage.getNightColorScheme());

        done();
    });
});