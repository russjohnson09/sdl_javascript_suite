(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('ws'), require('https')) :
    typeof define === 'function' && define.amd ? define(['ws', 'https'], factory) :
    (global = global || self, global.SDL = factory(global.ws, global.https));
}(this, (function (ws, https) { 'use strict';

    ws = ws && ws.hasOwnProperty('default') ? ws['default'] : ws;
    https = https && https.hasOwnProperty('default') ? https['default'] : https;

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

    //TODO This class may or may not be included in the release. We should determine if 
    // there is a better coding pattern for this for javascript.

    class AppConfig {

        /**
        * @constructor
        */
        constructor() {
            this._transportConfig = null;
            this._appId = null;
            this._appName = null;
            this._iconName = null;
            this._iconFile = null;
            this._shortAppName = null;
            this._ttsName = null;
            this._vrSynonyms = null;
            this._isMediaApp = null;
            this._languageDesired = null;
            this._hmiDisplayLanguageDesired = null;
            this._appTypes = null;
            this._dayColorScheme = null;
            this._nightColorScheme = null;
            this._minimumRPCVersion = null;
            this._minimumProtocolVersion = null;
        }

        /**
        * @param {TransportConfigBase} transportConfig
        * @return {AppConfig}
        */
        setTransportConfig(transportConfig) {
            this._transportConfig = transportConfig;
            return this;
        }

        /**
        * @return {TransportConfigBase}
        */
        getTransportConfig() {
            return this._transportConfig;
        }

        /**
        * @param {String} appId
        * @return {AppConfig}
        */
        setAppId(appId) {
            this._appId = appId;
            return this;
        }

        /**
        * @return {String}
        */
        getAppId() {
            return this._appId;
        }

        /**
        * @param {String} appName
        * @return {AppConfig}
        */
        setAppName(appName) {
            this._appName = appName;
            return this;
        }

        /**
        * @return {String}
        */
        getAppName() {
            return this._appName;
        }

        /**
        * @param {String} iconName
        * @param {Uint8Array} fileData
        * @return {AppConfig}
        */
        setAppIcon(iconName = "icon.png", fileData) {
            //TODO create SdlArtwork
            this._iconName = iconName;
            this._iconFile = fileData;

            return this;
        }

        /**
        * @return {String}
        */
        getAppIconName() {
            return this._iconName;
        }

        /**
        * @return {Uint8Array}
        */
        getAppIconFileData() {
            return this._iconFile;
        }

        /**
        * @param {String} shortAppName
        * @return {AppConfig}
        */
        setShortAppName(shortAppName) {
            this._shortAppName = shortAppName;
            return this;
        }

        /**
        * @return {String}
        */
        getShortAppName() {
            return this._shortAppName;
        }

        /**
        * @param {Array<TTSChunk>} ttsName
        * @return {AppConfig}
        */
        setTtsName(ttsName) {
            this._ttsName = ttsName;
            return this;
        }

        /**
        * @return {Array<TTSChunk>}
        */
        getTtsName() {
            return this._ttsName;
        }

        /**
        * @param {Array<String>} vrSynonyms
        * @return {AppConfig}
        */
        setVrSynonyms(vrSynonyms) {
            this._vrSynonyms = vrSynonyms;
            return this;
        }

        /**
        * @return {Array<String>}
        */
        getVrSynonyms() {
            return this._vrSynonyms;
        }

        /**
        * @param {Boolean} isMediaApp
        * @return {AppConfig}
        */
        setIsMediaApp(isMediaApp) {
            this._isMediaApp = isMediaApp;
            return this;
        }

        /**
        * @return {Boolean}
        */
        isMediaApp() {
            return this._isMediaApp;
        }

        /**
        * @param {Language} languageDesired
        * @return {AppConfig}
        */
        setLanguageDesired(languageDesired) {
            this._languageDesired = languageDesired;
            return this;
        }

        /**
        * @return {Language}
        */
        getLanguageDesired() {
            return this._languageDesired;
        }

        /**
        * @param {Language} hmiDisplayLanguageDesired
        * @return {AppConfig}
        */
        setHmiDisplayLanguageDesired(hmiDisplayLanguageDesired) {
            this._hmiDisplayLanguageDesired = hmiDisplayLanguageDesired;
            return this;
        }

        /**
        * @return {Language}
        */
        getHmiDisplayLanguageDesired() {
            return this._hmiDisplayLanguageDesired;
        }

        /**
        * @param {Array<AppHMIType>} appTypes an array of ordered app types
        * @return {AppConfig}
        */
        setAppTypes(appTypes) {
            this._appTypes = appTypes;
            return this;
        }

        /**
        * @return {Array<AppHMIType>}
        */
        getAppTypes() {
            return this._appTypes;
        }


        /**
        * @param {TemplateColorScheme} dayColorScheme
        * @return {AppConfig}
        */
        setDayColorScheme(dayColorScheme) {
            this._dayColorScheme = dayColorScheme;
            return this;
        }

        /**
        * @return {TemplateColorScheme}
        */
        getDayColorScheme() {
            return this._dayColorScheme;
        }

        /**
        * @param {TemplateColorScheme} nightColorScheme
        * @return {AppConfig}
        */
        setNightColorScheme(nightColorScheme) {
            this._nightColorScheme = nightColorScheme;
            return this;
        }

        /**
        * @return {TemplateColorScheme}
        */
        getNightColorScheme() {
            return this._nightColorScheme;
        }

        /**
        * The minimum RPC version that will be permitted to connect.
        * If the RPC version of the head unit connected is below this version, an UnregisterAppInterface will be sent.
        *
        * @param {Version} minimumRPCVersion
        * @return {AppConfig}
        */
        setMinimumRPCVersion(minimumRPCVersion) {
            this._minimumRPCVersion = minimumRPCVersion;
            return this;
        }

        /**
         * 
        * @return {Version}
        */
        getMinimumRPCVersion() {
            return this._minimumRPCVersion;
        }


        /**
        * Sets the minimum protocol version that will be permitted to connect.
        * If the protocol version of the head unit connected is below this version,
        * the app will disconnect with an EndService protocol message and will not register.
        * @param {Version} minimumProtocolVersion
        * @return {AppConfig}
        */
        setMinimumProtocolVersion(minimumProtocolVersion) {
            this._minimumProtocolVersion = minimumProtocolVersion;
            return this;
        }

        /**
        * @return {Version}
        */
        getMinimumProtocolVersion() {
            return this._minimumProtocolVersion;
        }


    }

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

    /**
     * @typedef {Object} LifecycleListener
     */
    class LifecycleListener {
        /**
    	 * @constructor
    	 */
        constructor() {
            this._onProxyConnected = null;
            this._onProxyClosed = null;
            this._onServiceStarted = null;
            this._onServiceEnded = null;
            this._onError = null;
        }

        /**
         * @param {function} listener 
         */
        setOnProxyConnected(listener) {
            this._onProxyConnected = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnProxyClosed(listener) {
            this._onProxyClosed = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnServiceStarted(listener) {
            this._onServiceStarted = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnServiceEnded(listener) {
            this._onServiceEnded = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnError(listener) {
            this._onError = listener;
        }

        /**
         * @param {LifecycleManager} lifecycleManager 

         */
        onProxyConnected(lifecycleManager) {
            if (typeof this._onProxyConnected === 'function') {
                this._onProxyConnected(lifecycleManager);
            }
        }

        /**
         * @param {LifecycleManager} lifecycleManager 
         * @param {String} info 
         * @param {SdlDisconnectedReason} reason
         */
        onProxyClosed(lifecycleManager, info, reason) {
            if (typeof this._onProxyClosed === 'function') {
                this._onProxyClosed(lifecycleManager, info, reason);
            }
        }

        /**
         * @param {ServiceType} serviceType 
         */
        onServiceStarted(serviceType, sessionID, correlationID) {
            if (typeof this._onProtocolSessionEndedNACKed === 'function') {
                this._onServiceStarted(serviceType, sessionID, correlationID);
            }
        }

        /**
         * @param {ServiceType} serviceType 
         */
        onServiceEnded(serviceType) {
            if (typeof this._onServiceEnded === 'function') {
                this._onServiceEnded(serviceType);
            }
        }

        /**
         * @param {LifecycleManager} lifecycleManager 
         * @param {String} info 
         */
        onError(lifecycleManager, info) {
            if (typeof this._onError === 'function') {
                this._onError(lifecycleManager, info);
            }
        }
    }

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

    class Enum {

        /**
        * @constructor
        */
        constructor() {
            // intentionally empty
        }

        /**
        * Returns the key for a given value if the value is found within the key:value map
        * @param value - A primitive value to find in the map
        * @param map {Object} - An map of string properties to primitive values 
        * @return {null|String} - Returns null if not found
        */
        static keyForValueInternal(value, map) {
            for (let key in map) {
                if (map[key] === value) {
                    return key;
                }
            }

            return null;
        }

        /**
        * Returns the given value if the value is found within the key:value map
        * @param value - A primitive value to find in the map
        * @param map {Object} - An map of string properties to primitive values 
        * @return {*} - Returns a value if found, or null if not found
        */
        static valueForStringInternal(value, map) {
            return map[value] || null;
        }

        /**
        * A method for subclasses to implement that does what keyForValueInternal does
        * @param value - A primitive value to find in the map of the subclass
        * @return {*} - Returns a value if found, or null if not found
        */
        valueForString(value) {
            throw "method must be overridden";
        }
    }

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

    class RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters = {}) {
            this._isFormatRequested = false;
            this._rpcSpecVersion = null;
            this._parameters = parameters || {};
        }

        /**
        * @return {Object}
        */
        getParameters() {
            return this._parameters;
        }

        /**
        * @param {String} key
        * @return {*}
        */
        getParameter(key) {
            return this._parameters[key];
        }

        /**
        * @param {String} key
        * @param {*} value
        * @return {RpcStruct}
        */
        setParameter(key, value) {
            if (value === null) {
                delete this._parameters[key];
            } else {
                this._parameters[key] = value;
            }

            return this;
        }

        /**
        * @param {Function} tClass
        * @param {String} key
        * @return {Object}
        */
        getObject(tClass, key) {
            return this.formatObject(tClass, this.getParameter(key));
        }

        /**
        * @param {Function} tClass
        * @param {Object} obj
        * @return {null|Object}
        */
        formatObject(tClass, obj) {
            if (obj === null || obj === undefined) {
                return null;
            } else if (obj.constructor === tClass) {
                // if tClass is String and obj is a String, this should execute
                return obj;
            } else if (obj.constructor === String) { // this covers the Enum case too
                return obj;
            } else if (obj.constructor === Object) {
                if (tClass.prototype instanceof RpcStruct) {
                    return new tClass(obj);
                }
                return null;
            } else if (obj.constructor === Array) {
                if (obj.length > 0) {
                    const outArray = [];
                    for (const item of obj) {
                        outArray.push(this.formatObject(tClass, item));
                    }
                    return outArray;
                }
            }
            return null;
        }

        /**
        * @param {Function} tClass
        * @param {Object} obj
        */
        validateType(tClass, obj) {
            if (
                (tClass.prototype instanceof Enum && obj === null)
                || (tClass.prototype instanceof RpcStruct && obj !== null && obj.constructor !== tClass)
            ) {
                throw `${obj.name} must be of type ${tClass.name}`;
            }
        }

    }

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

    /**
     * @typedef {Enum} FunctionID
     * @property {Object} _MAP
     */
    class FunctionID extends Enum {
        /**
         * @constructor 
         */
        constructor () {
            super();
        }

        /**
        * @return {Number}
        */
        static get RegisterAppInterface () {
            return FunctionID._MAP.RegisterAppInterface;
        }

        /**
        * @return {Number}
        */    
        static get UnregisterAppInterface () {
            return FunctionID._MAP.UnregisterAppInterface;
        }

        /**
        * @return {Number}
        */    
        static get SetGlobalProperties () {
            return FunctionID._MAP.SetGlobalProperties;
        }

        /**
        * @return {Number}
        */    
        static get ResetGlobalProperties () {
            return FunctionID._MAP.ResetGlobalProperties;
        }

        /**
        * @return {Number}
        */    
        static get AddCommand () {
            return FunctionID._MAP.AddCommand;
        }

        /**
        * @return {Number}
        */    
        static get DeleteCommand () {
            return FunctionID._MAP.DeleteCommand;
        }

        /**
        * @return {Number}
        */    
        static get AddSubMenu () {
            return FunctionID._MAP.AddSubMenu;
        }

        /**
        * @return {Number}
        */    
        static get DeleteSubMenu () {
            return FunctionID._MAP.DeleteSubMenu;
        }

        /**
        * @return {Number}
        */    
        static get CreateInteractionChoiceSet () {
            return FunctionID._MAP.CreateInteractionChoiceSet;
        }

        /**
        * @return {Number}
        */    
        static get PerformInteraction () {
            return FunctionID._MAP.PerformInteraction;
        }

        /**
        * @return {Number}
        */    
        static get DeleteInteractionChoiceSet () {
            return FunctionID._MAP.DeleteInteractionChoiceSet;
        }

        /**
        * @return {Number}
        */    
        static get Alert () {
            return FunctionID._MAP.Alert;
        }

        /**
        * @return {Number}
        */    
        static get Show () {
            return FunctionID._MAP.Show;
        }

        /**
        * @return {Number}
        */    
        static get Speak () {
            return FunctionID._MAP.Speak;
        }

        /**
        * @return {Number}
        */    
        static get SetMediaClockTimer () {
            return FunctionID._MAP.SetMediaClockTimer;
        }

        /**
        * @return {Number}
        */    
        static get PerformAudioPassThru () {
            return FunctionID._MAP.PerformAudioPassThru;
        }

        /**
        * @return {Number}
        */    
        static get EndAudioPassThru () {
            return FunctionID._MAP.EndAudioPassThru;
        }

        /**
        * @return {Number}
        */    
        static get SubscribeButton () {
            return FunctionID._MAP.SubscribeButton;
        }

        /**
        * @return {Number}
        */    
        static get UnsubscribeButton () {
            return FunctionID._MAP.UnsubscribeButton;
        }

        /**
        * @return {Number}
        */    
        static get SubscribeVehicleData () {
            return FunctionID._MAP.SubscribeVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get UnsubscribeVehicleData () {
            return FunctionID._MAP.UnsubscribeVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get GetVehicleData () {
            return FunctionID._MAP.GetVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get ReadDID () {
            return FunctionID._MAP.ReadDID;
        }

        /**
        * @return {Number}
        */    
        static get GetDTCs () {
            return FunctionID._MAP.GetDTCs;
        }

        /**
        * @return {Number}
        */    
        static get ScrollableMessage () {
            return FunctionID._MAP.ScrollableMessage;
        }

        /**
        * @return {Number}
        */    
        static get Slider () {
            return FunctionID._MAP.Slider;
        }

        /**
        * @return {Number}
        */    
        static get ShowConstantTBT () {
            return FunctionID._MAP.ShowConstantTBT;
        }

        /**
        * @return {Number}
        */    
        static get AlertManeuver () {
            return FunctionID._MAP.AlertManeuver;
        }

        /**
        * @return {Number}
        */    
        static get UpdateTurnList () {
            return FunctionID._MAP.UpdateTurnList;
        }

        /**
        * @return {Number}
        */    
        static get ChangeRegistration () {
            return FunctionID._MAP.ChangeRegistration;
        }

        /**
        * @return {Number}
        */    
        static get GenericResponse () {
            return FunctionID._MAP.GenericResponse;
        }

        /**
        * @return {Number}
        */    
        static get PutFile () {
            return FunctionID._MAP.PutFile;
        }

        /**
        * @return {Number}
        */    
        static get DeleteFile () {
            return FunctionID._MAP.DeleteFile;
        }

        /**
        * @return {Number}
        */    
        static get ListFiles () {
            return FunctionID._MAP.ListFiles;
        }

        /**
        * @return {Number}
        */    
        static get SetAppIcon () {
            return FunctionID._MAP.SetAppIcon;
        }

        /**
        * @return {Number}
        */    
        static get SetDisplayLayout () {
            return FunctionID._MAP.SetDisplayLayout;
        }

        /**
        * @return {Number}
        */    
        static get DiagnosticMessage () {
            return FunctionID._MAP.DiagnosticMessage;
        }

        /**
        * @return {Number}
        */    
        static get SystemRequest () {
            return FunctionID._MAP.SystemRequest;
        }

        /**
        * @return {Number}
        */    
        static get SendLocation () {
            return FunctionID._MAP.SendLocation;
        }

        /**
        * @return {Number}
        */    
        static get DialNumber () {
            return FunctionID._MAP.DialNumber;
        }

        /**
        * @return {Number}
        */    
        static get ButtonPress () {
            return FunctionID._MAP.ButtonPress;
        }

        /**
        * @return {Number}
        */    
        static get GetInteriorVehicleData () {
            return FunctionID._MAP.GetInteriorVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get SetInteriorVehicleData () {
            return FunctionID._MAP.SetInteriorVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get GetWayPoints () {
            return FunctionID._MAP.GetWayPoints;
        }

        /**
        * @return {Number}
        */    
        static get SubscribeWayPoints () {
            return FunctionID._MAP.SubscribeWayPoints;
        }

        /**
        * @return {Number}
        */    
        static get UnsubscribeWayPoints () {
            return FunctionID._MAP.UnsubscribeWayPoints;
        }

        /**
        * @return {Number}
        */    
        static get GetSystemCapability () {
            return FunctionID._MAP.GetSystemCapability;
        }

        /**
        * @return {Number}
        */    
        static get SendHapticData () {
            return FunctionID._MAP.SendHapticData;
        }

        /**
        * @return {Number}
        */    
        static get SetCloudAppProperties () {
            return FunctionID._MAP.SetCloudAppProperties;
        }

        /**
        * @return {Number}
        */    
        static get GetCloudAppProperties () {
            return FunctionID._MAP.GetCloudAppProperties;
        }

        /**
        * @return {Number}
        */    
        static get PublishAppService () {
            return FunctionID._MAP.PublishAppService;
        }

        /**
        * @return {Number}
        */    
        static get GetAppServiceData () {
            return FunctionID._MAP.GetAppServiceData;
        }

        /**
        * @return {Number}
        */    
        static get GetFile () {
            return FunctionID._MAP.GetFile;
        }

        /**
        * @return {Number}
        */    
        static get PerformAppServiceInteraction () {
            return FunctionID._MAP.PerformAppServiceInteraction;
        }

        /**
        * @return {Number}
        */    
        static get UnpublishAppService () {
            return FunctionID._MAP.UnpublishAppService;
        }

        /**
        * @return {Number}
        */    
        static get CancelInteraction () {
            return FunctionID._MAP.CancelInteraction;
        }

        /**
        * @return {Number}
        */    
        static get CloseApplication () {
            return FunctionID._MAP.CloseApplication;
        }

        /**
        * @return {Number}
        */    
        static get ShowAppMenu () {
            return FunctionID._MAP.ShowAppMenu;
        }

        /**
        * @return {Number}
        */    
        static get CreateWindow () {
            return FunctionID._MAP.CreateWindow;
        }

        /**
        * @return {Number}
        */    
        static get DeleteWindow () {
            return FunctionID._MAP.DeleteWindow;
        }

        /**
        * @return {Number}
        */    
        static get GetInteriorVehicleDataConsent () {
            return FunctionID._MAP.GetInteriorVehicleDataConsent;
        }

        /**
        * @return {Number}
        */    
        static get ReleaseInteriorVehicleDataModule () {
            return FunctionID._MAP.ReleaseInteriorVehicleDataModule;
        }

        /**
        * @return {Number}
        */    
        static get OnHMIStatus () {
            return FunctionID._MAP.OnHMIStatus;
        }

        /**
        * @return {Number}
        */    
        static get OnAppInterfaceUnregistered () {
            return FunctionID._MAP.OnAppInterfaceUnregistered;
        }

        /**
        * @return {Number}
        */    
        static get OnButtonEvent () {
            return FunctionID._MAP.OnButtonEvent;
        }

        /**
        * @return {Number}
        */    
        static get OnButtonPress () {
            return FunctionID._MAP.OnButtonPress;
        }

        /**
        * @return {Number}
        */    
        static get OnVehicleData () {
            return FunctionID._MAP.OnVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get OnCommand () {
            return FunctionID._MAP.OnCommand;
        }

        /**
        * @return {Number}
        */    
        static get OnTBTClientState () {
            return FunctionID._MAP.OnTBTClientState;
        }

        /**
        * @return {Number}
        */    
        static get OnDriverDistraction () {
            return FunctionID._MAP.OnDriverDistraction;
        }

        /**
        * @return {Number}
        */    
        static get OnPermissionsChange () {
            return FunctionID._MAP.OnPermissionsChange;
        }

        /**
        * @return {Number}
        */    
        static get OnAudioPassThru () {
            return FunctionID._MAP.OnAudioPassThru;
        }

        /**
        * @return {Number}
        */    
        static get OnLanguageChange () {
            return FunctionID._MAP.OnLanguageChange;
        }

        /**
        * @return {Number}
        */    
        static get OnKeyboardInput () {
            return FunctionID._MAP.OnKeyboardInput;
        }

        /**
        * @return {Number}
        */    
        static get OnTouchEvent () {
            return FunctionID._MAP.OnTouchEvent;
        }

        /**
        * @return {Number}
        */    
        static get OnSystemRequest () {
            return FunctionID._MAP.OnSystemRequest;
        }

        /**
        * @return {Number}
        */    
        static get OnHashChange () {
            return FunctionID._MAP.OnHashChange;
        }

        /**
        * @return {Number}
        */    
        static get OnInteriorVehicleData () {
            return FunctionID._MAP.OnInteriorVehicleData;
        }

        /**
        * @return {Number}
        */    
        static get OnWayPointChange () {
            return FunctionID._MAP.OnWayPointChange;
        }

        /**
        * @return {Number}
        */    
        static get OnRCStatus () {
            return FunctionID._MAP.OnRCStatus;
        }

        /**
        * @return {Number}
        */    
        static get OnAppServiceData () {
            return FunctionID._MAP.OnAppServiceData;
        }

        /**
        * @return {Number}
        */    
        static get OnSystemCapabilityUpdated () {
            return FunctionID._MAP.OnSystemCapabilityUpdated;
        }
        
        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString (value) {
            return FunctionID.valueForStringInternal(value, FunctionID._MAP);
        }

        /**
        * Returns the key of the map with the corresponding value
        * @param {Number} value
        * @return {null|String} - Returns null if not found
        */
        static keyForValue (value) {
            return FunctionID.keyForValueInternal(value, FunctionID._MAP);
        }
    }

    FunctionID._MAP = Object.freeze({
        'RegisterAppInterface':                0x01,
        'UnregisterAppInterface':              0x02,
        'SetGlobalProperties':                 0x03,
        'ResetGlobalProperties':               0x04,
        'AddCommand':                          0x05,
        'DeleteCommand':                       0x06,
        'AddSubMenu':                          0x07,
        'DeleteSubMenu':                       0x08,
        'CreateInteractionChoiceSet':          0x09,
        'PerformInteraction':                  0x0A,
        'DeleteInteractionChoiceSet':          0x0B,
        'Alert':                               0x0C,
        'Show':                                0x0D,
        'Speak':                               0x0E,
        'SetMediaClockTimer':                  0x0F,
        'PerformAudioPassThru':                0x10,
        'EndAudioPassThru':                    0x11,
        'SubscribeButton':                     0x12,
        'UnsubscribeButton':                   0x13,
        'SubscribeVehicleData':                0x14,
        'UnsubscribeVehicleData':              0x15,
        'GetVehicleData':                      0x16,
        'ReadDID':                             0x17,
        'GetDTCs':                             0x18,
        'ScrollableMessage':                   0x19,
        'Slider':                              0x1A,
        'ShowConstantTBT':                     0x1B,
        'AlertManeuver':                       0x1C,
        'UpdateTurnList':                      0x1D,
        'ChangeRegistration':                  0x1E,
        'GenericResponse':                     0x1F,
        'PutFile':                             0x20,
        'DeleteFile':                          0x21,
        'ListFiles':                           0x22,
        'SetAppIcon':                          0x23,
        'SetDisplayLayout':                    0x24,
        'DiagnosticMessage':                   0x25,
        'SystemRequest':                       0x26,
        'SendLocation':                        0x27,
        'DialNumber':                          0x28,
        'ButtonPress':                         0x29,
        'GetInteriorVehicleData':              0x2B,
        'SetInteriorVehicleData':              0x2C,
        'GetWayPoints':                        0x2D,
        'SubscribeWayPoints':                  0x2E,
        'UnsubscribeWayPoints':                0x2F,
        'GetSystemCapability':                 0x30,
        'SendHapticData':                      0x31,
        'SetCloudAppProperties':               0x32,
        'GetCloudAppProperties':               0x33,
        'PublishAppService':                   0x34,
        'GetAppServiceData':                   0x35,
        'GetFile':                             0x36,
        'PerformAppServiceInteraction':        0x37,
        'UnpublishAppService':                 0x38,
        'CancelInteraction':                   0x39,
        'CloseApplication':                    0x3A,
        'ShowAppMenu':                         0x3B,
        'CreateWindow':                        0x3C,
        'DeleteWindow':                        0x3D,
        'GetInteriorVehicleDataConsent':       0x3E,
        'ReleaseInteriorVehicleDataModule':    0x3F, 
        'OnHMIStatus':                         0x8000,
        'OnAppInterfaceUnregistered':          0x8001,
        'OnButtonEvent':                       0x8002,
        'OnButtonPress':                       0x8003,
        'OnVehicleData':                       0x8004,
        'OnCommand':                           0x8005,
        'OnTBTClientState':                    0x8006,
        'OnDriverDistraction':                 0x8007,
        'OnPermissionsChange':                 0x8008,
        'OnAudioPassThru':                     0x8009,
        'OnLanguageChange':                    0x800A,
        'OnKeyboardInput':                     0x800B,
        'OnTouchEvent':                        0x800C,
        'OnSystemRequest':                     0x800D,
        'OnHashChange':                        0x800E,
        'OnInteriorVehicleData':               0x800F,
        'OnWayPointChange':                    0x8010,
        'OnRCStatus':                          0x8011,
        'OnAppServiceData':                    0x8012,
        'OnSystemCapabilityUpdated':           0x8013,
    });

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

    /**
     * @typedef {Object} RpcMessage
     * @property {RpcType} rpcType
     */
    class RpcMessage extends RpcStruct {

        /*
        {
            "rpcType": "Request",
            "functionName": "RegisterAppInterface",
            "coorelationID": "320948",
            "isEncrypted": false,
            "parameters": {
                "appName": "Hello"
            },
            "bulkData": "...",
        }
        */

        /**
        * @constructor
        */
        constructor(store = {}) {
            super(store.parameters);
            this._isEncrypted = false;
            this._rpcType = store.rpcType;
            this._functionName = store.functionName;
            this._correlationID = store.correlationID;
            this.setBulkData(store.bulkData);
        }

        /**
        * @return {RpcType}
        */
        getRPCType() {
            return this._rpcType;
        }

        /**
        * @param {RpcType} type
        * @return {RpcMessage}
        */
        setRPCType(type) {
            this._rpcType = type;

            return this;
        }

        /**
        * @return {FunctionID} type
        */
        getFunctionName() {
            return this._functionName;
        }

        /**
        * @param {FunctionID} name
        * @return {RpcMessage}
        */
        setFunctionName(name) {
            if (typeof name !== 'string') {
                this._functionName = FunctionID.keyForValue(name);
            } else {
                this._functionName = name;
            }

            return this;
        }

        /**
        * @return {String} type
        */
        getCorrelationId() {
            return this._correlationID;
        }

        /**
        * @param {String} name
        * @return {RpcMessage}
        */
        setCorrelationId(id) {
            this._correlationID = id;

            return this;
        }

        /**
        * @return {Uint8Array} data
        */
        getBulkData() {
            return this._bulkData;
        }

        /**
        * @param {UInt8Array} data
        * @return {RpcMessage}
        */
        setBulkData(data = null) {
            if (data !== null) {
                this._bulkData = data.slice(0);
            } else {
                this._bulkData = null;
            }

            return this;
        }

        /**
        * @return {Boolean}
        */
        getIsEncrypted() {
            return this._isEncrypted;
        }

        /**
        * @param {Boolean} bool
        * @return {RpcMessage}
        */
        setIsEncrypted(bool) {
            this._isEncrypted = bool;

            return this;
        }

    }

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

    /**
     * @typedef {Enum} RpcType
     * @property {Object} _MAP
     */
    class RpcType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
         * @return {Number} 
         */
        static get NOTIFICATION() {
            return RpcType._MAP.NOTIFICATION;
        }

        /**
         * @return {Number} 
         */
        static get RESPONSE() {
            return RpcType._MAP.RESPONSE;
        }

        /**
         * @return {Number} 
         */
        static get REQUEST() {
            return RpcType._MAP.REQUEST;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return RpcType.valueForStringInternal(value, RpcType._MAP);
        }

        /**
        * Returns the key of the map with the corresponding value
        * @param {Number} value
        * @return {null|String} - Returns null if not found
        */
        static keyForValue(value) {
            return RpcType.keyForValueInternal(value, RpcType._MAP);
        }
    }

    RpcType._MAP = Object.freeze({
        'NOTIFICATION': 0x2,
        'RESPONSE': 0x1,
        'REQUEST': 0x0,
    });

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

    class RpcRequest extends RpcMessage {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setRPCType(RpcType.REQUEST);
            this._promise = null;
        }

        /**
        * @return {Promise}
        */
        getOnRPCResponsePromise(){
            return this._promise;
        }

        /**
        * @param {Promise} promise
        * @return {RpcMessage}
        */
        setOnRPCResponsePromise(promise){
            this.validateType(Promise, promise);

            this._promise = promise;
            return this;
        }

    }

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

    class SdlMsgVersion extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Number} the major version of this object
        * @return {SdlMsgVersion}
        */
        setMajorVersion(value) {
            this.setParameter(SdlMsgVersion.KEY_MAJOR_VERSION, value);
            return this;
        }

        /**
        * @return {Number} the major version of this object
        */
        getMajorVersion() {
            return this.getParameter(SdlMsgVersion.KEY_MAJOR_VERSION);
        }

        /**
        * @param {Number} the minor version of this object
        * @return {SdlMsgVersion}
        */
        setMinorVersion(value) {
            this.setParameter(SdlMsgVersion.KEY_MINOR_VERSION, value);
            return this;
        }

        /**
        * @return {Number} the minor version of this object
        */
        getMinorVersion() {
            return this.getParameter(SdlMsgVersion.KEY_MINOR_VERSION);
        }

        /**
        * @param {Number} the patch version of this object
        * @return {SdlMsgVersion}
        */
        setPatchVersion(value) {
            this.setParameter(SdlMsgVersion.KEY_PATCH_VERSION, value);
            return this;
        }

        /**
        * @return {Number} the patch version of this objects
        */
        getPatchVersion() {
            return this.getParameter(SdlMsgVersion.KEY_PATCH_VERSION);
        }

    }

    SdlMsgVersion.KEY_MAJOR_VERSION = 'majorVersion';
    SdlMsgVersion.KEY_MINOR_VERSION = 'minorVersion';
    SdlMsgVersion.KEY_PATCH_VERSION = 'patchVersion';

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

    /**
     * @typedef {Enum} SpeechCapabilities
     * @property {Object} _MAP
     */
    class SpeechCapabilities extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get SC_TEXT() {
            return SpeechCapabilities._MAP.SC_TEXT;
        }

        /**
         * @return {String} 
         */
        static get SAPI_PHONEMES() {
            return SpeechCapabilities._MAP.SAPI_PHONEMES;
        }

        /**
         * @return {String} 
         */
        static get LHPLUS_PHONEMES() {
            return SpeechCapabilities._MAP.LHPLUS_PHONEMES;
        }

        /**
         * @return {String} 
         */
        static get PRE_RECORDED() {
            return SpeechCapabilities._MAP.PRE_RECORDED;
        }

        /**
         * @return {String} 
         */
        static get SILENCE() {
            return SpeechCapabilities._MAP.SILENCE;
        }

        /**
         * @return {String} 
         */
        static get FILE() {
            return SpeechCapabilities._MAP.FILE;
        }
        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return SpeechCapabilities.valueForStringInternal(value, SpeechCapabilities._MAP);
        }
    }

    SpeechCapabilities._MAP = Object.freeze({
        'SC_TEXT': 'TEXT',
        'SAPI_PHONEMES': 'SAPI_PHONEMES',
        'LHPLUS_PHONEMES': 'LHPLUS_PHONEMES',
        'PRE_RECORDED': 'PRE_RECORDED',
        'SILENCE': 'SILENCE',
        'FILE': 'FILE',
    });

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

    class TTSChunk extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} text
        * @return {TTSChunk}
        */
        setText(text) {
            this.setParameter(TTSChunk.KEY_TEXT, value);
            return this;
        }

        /**
        * @return {Number}
        */
        getText() {
            return this.getParameter(TTSChunk.KEY_TEXT);
        }

        /**
        * @param {SpeechCapabilities} type
        * @return {TTSChunk}
        */
        setType(type) {
            this.validateType(SpeechCapabilities, type);

            this.setParameter(TTSChunk.KEY_TYPE, type);
            return this;
        }

        /**
        * @return {SpeechCapabilities}
        */
        getType() {
            return this.getObject(SpeechCapabilities, TTSChunk.KEY_TYPE);
        }

    }

    TTSChunk.KEY_TEXT = 'text';
    TTSChunk.KEY_TYPE = 'type';

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

    class DeviceInfo extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} hardware
        * @return {DeviceInfo}
        */
        setHardware(hardware) {
            this.validateType(String, hardware);

            this.setParameter(DeviceInfo.KEY_HARDWARE, hardware);
            return this;
        }

        /**
        * @return {String}
        */
        getHardware() {
            return this.getParameter(DeviceInfo.KEY_HARDWARE);
        }


        /**
        * @param {String} firmwareRev
        * @return {DeviceInfo}
        */
        setFirmwareRev(firmwareRev) {
            this.validateType(String, firmwareRev);

            this.setParameter(DeviceInfo.KEY_FIRMWARE_REV, firmwareRev);
            return this;
        }

        /**
        * @return {String}
        */
        getFirmwareRev() {
            return this.getParameter(DeviceInfo.KEY_FIRMWARE_REV);
        }


        /**
        * @param {String} os
        * @return {DeviceInfo}
        */
        setOs(os) {
            this.validateType(String, os);

            this.setParameter(DeviceInfo.KEY_OS, os);
            return this;
        }

        /**
        * @return {String}
        */
        getOs() {
            return this.getParameter(DeviceInfo.KEY_OS);
        }

        /**
        * @param {String} osVersion
        * @return {DeviceInfo}
        */
        setOsVersion(osVersion) {
            this.validateType(String, osVersion);

            this.setParameter(DeviceInfo.KEY_OS_VERSION, osVersion);
            return this;
        }

        /**
        * @return {String}
        */
        getOsVersion() {
            return this.getParameter(DeviceInfo.KEY_OS_VERSION);
        }


        /**
        * @param {String} carrier
        * @return {DeviceInfo}
        */
        setCarrier(carrier) {
            this.validateType(String, carrier);

            this.setParameter(DeviceInfo.KEY_CARRIER, carrier);
            return this;
        }

        /**
        * @return {String}
        */
        getCarrier() {
            return this.getParameter(DeviceInfo.KEY_CARRIER);
        }


        /**
        * @param {Number} maxNumberRFCOMMPorts
        * @return {DeviceInfo}
        */
        setMaxNumberRFCOMMPorts(maxNumberRFCOMMPorts) {
            this.validateType(Number, maxNumberRFCOMMPorts);

            this.setParameter(DeviceInfo.KEY_MAX_NUMBER_RFCOMM_PORTS, maxNumberRFCOMMPorts);
            return this;
        }

        /**
        * @return {Number}
        */
        getMaxNumberRFCOMMPorts() {
            return this.getParameter(DeviceInfo.KEY_MAX_NUMBER_RFCOMM_PORTS);
        }
    }

    DeviceInfo.KEY_HARDWARE = 'hardware';
    DeviceInfo.KEY_FIRMWARE_REV = 'firmwareRev';
    DeviceInfo.KEY_OS = 'os';
    DeviceInfo.KEY_OS_VERSION = 'osVersion';
    DeviceInfo.KEY_CARRIER = 'carrier';
    DeviceInfo.KEY_MAX_NUMBER_RFCOMM_PORTS = 'maxNumberRFCOMMPorts';

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

    class AppInfo extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} appDisplayName
        * @return {AppInfo}
        */
        setAppDisplayName(appDisplayName) {
            this.setParameter(AppInfo.KEY_APP_DISPLAY_NAME, appDisplayName);
            return this;
        }

        /**
        * @return {String}
        */
        getAppDisplayName() {
            return this.getParameter(AppInfo.KEY_APP_DISPLAY_NAME);
        }


        /**
        * @param {String} appBundleID
        * @return {AppInfo}
        */
        setAppBundleID(appBundleID) {
            this.setParameter(AppInfo.KEY_APP_BUNDLE_ID, appBundleID);
            return this;
        }

        /**
        * @return {String}
        */
        getAppBundleID() {
            return this.getParameter(AppInfo.KEY_APP_BUNDLE_ID);
        }


        /**
        * @param {String} appVersion
        * @return {AppInfo}
        */
        setAppVersion(appVersion) {
            this.setParameter(AppInfo.KEY_APP_VERSION, appVersion);
            return this;
        }

        /**
        * @return {String}
        */
        getAppVersion() {
            return this.getParameter(AppInfo.KEY_APP_VERSION);
        }

        /**
        * @param {String} appIcon string of the app icon file name
        * @return {AppInfo}
        */
        setAppIcon(appIcon) {
            this.setParameter(AppInfo.KEY_APP_ICON, appIcon);
            return this;
        }

        /**
        * @return {String}
        */
        getAppIcon() {
            return this.getParameter(AppInfo.KEY_APP_ICON);
        }
    }

    AppInfo.KEY_APP_DISPLAY_NAME = 'appDisplayName';
    AppInfo.KEY_APP_BUNDLE_ID = 'appBundleID';
    AppInfo.KEY_APP_VERSION = 'appVersion';
    AppInfo.KEY_APP_ICON = 'appIcon';

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

    class RGBColor extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Number} redValue
        * @return {RGBColor}
        */
        setRedValue(redValue) {
            this.setParameter(RGBColor.KEY_RED, redValue);
            return this;
        }

        /**
        * @return {Number}
        */
        getRedValue() {
            return this.getParameter(RGBColor.KEY_RED);
        }


        /**
        * @param {Number} greenValue
        * @return {RGBColor}
        */
        setGreenValue(greenValue) {
            this.setParameter(RGBColor.KEY_GREEN, greenValue);
            return this;
        }

        /**
        * @return {Number}
        */
        getGreenValue() {
            return this.getParameter(RGBColor.KEY_GREEN);
        }


        /**
        * @param {Number} blueValue
        * @return {RGBColor}
        */
        setBlueValue(blueValue) {
            this.setParameter(RGBColor.KEY_BLUE, blueValue);
            return this;
        }

        /**
        * @return {Number}
        */
        getBlueValue() {
            return this.getParameter(RGBColor.KEY_BLUE);
        }
    }

    RGBColor.KEY_RED = 'red';
    RGBColor.KEY_GREEN = 'green';
    RGBColor.KEY_BLUE = 'blue';

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

    class TemplateColorScheme extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {RGBColor} primaryColor
        * @return {TemplateColorScheme}
        */
        setPrimaryColor(primaryColor) {
            this.validateType(RGBColor, primaryColor);

            this.setParameter(TemplateColorScheme.KEY_PRIMARY_COLOR, primaryColor);
            return this;
        }

        /**
        * @return {RGBColor}
        */
        getPrimaryColor() {
            return this.getObject(RGBColor, TemplateColorScheme.KEY_PRIMARY_COLOR);
        }

        /**
        * @param {RGBColor} secondaryColor
        * @return {TemplateColorScheme}
        */
        setSecondaryColor(secondaryColor) {
            this.validateType(RGBColor, secondaryColor);

            this.setParameter(TemplateColorScheme.KEY_SECONDARY_COLOR, secondaryColor);
            return this;
        }

        /**
        * @return {RGBColor}
        */
        getSecondaryColor() {
            return this.getObject(RGBColor, TemplateColorScheme.KEY_SECONDARY_COLOR);
        }

        /**
        * @param {RGBColor} backgroundColor
        * @return {TemplateColorScheme}
        */
        setBackgroundColor(backgroundColor) {
            this.validateType(RGBColor, backgroundColor);

            this.setParameter(TemplateColorScheme.KEY_BACKGROUND_COLOR, backgroundColor);
            return this;
        }

        /**
        * @return {RGBColor}
        */
        getBackgroundColor() {
            return this.getObject(RGBColor, TemplateColorScheme.KEY_BACKGROUND_COLOR);
        }
    }

    TemplateColorScheme.KEY_PRIMARY_COLOR = 'primaryColor';
    TemplateColorScheme.KEY_SECONDARY_COLOR = 'secondaryColor';
    TemplateColorScheme.KEY_BACKGROUND_COLOR = 'backgroundColor';

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

    /**
     * @typedef {Enum} Language
     * @property {Object} _MAP
     */
    class Language extends Enum {

        /**
         * @constructor 
         */
        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get EN_SA() {
            return Language._MAP.EN_SA;
        }

        /**
         * @return {String} 
         */
        static get HE_IL() {
            return Language._MAP.HE_IL;
        }

        /**
         * @return {String} 
         */
        static get RO_RO() {
            return Language._MAP.RO_RO;
        }

        /**
         * @return {String} 
         */
        static get UK_UA() {
            return Language._MAP.UK_UA;
        }

        /**
         * @return {String} 
         */
        static get ID_ID() {
            return Language._MAP.ID_ID;
        }

        /**
         * @return {String} 
         */
        static get VI_VN() {
            return Language._MAP.VI_VN;
        }

        /**
         * @return {String} 
         */
        static get MS_MY() {
            return Language._MAP.MS_MY;
        }

        /**
         * @return {String} 
         */
        static get HI_IN() {
            return Language._MAP.HI_IN;
        }

        /**
         * @return {String} 
         */
        static get NL_BE() {
            return Language._MAP.NL_BE;
        }

        /**
         * @return {String} 
         */
        static get EL_GR() {
            return Language._MAP.EL_GR;
        }

        /**
         * @return {String} 
         */
        static get HU_HU() {
            return Language._MAP.HU_HU;
        }

        /**
         * @return {String} 
         */
        static get FI_FI() {
            return Language._MAP.FI_FI;
        }

        /**
         * @return {String} 
         */
        static get SK_SK() {
            return Language._MAP.SK_SK;
        }

        /**
         * @return {String} 
         */
        static get EN_US() {
            return Language._MAP.EN_US;
        }

        /**
         * @return {String} 
         */
        static get ES_MX() {
            return Language._MAP.ES_MX;
        }

        /**
         * @return {String} 
         */
        static get FR_CA() {
            return Language._MAP.FR_CA;
        }

        /**
         * @return {String} 
         */
        static get DE_DE() {
            return Language._MAP.DE_DE;
        }

        /**
         * @return {String} 
         */
        static get ES_ES() {
            return Language._MAP.ES_ES;
        }

        /**
         * @return {String} 
         */
        static get EN_GB() {
            return Language._MAP.EN_GB;
        }

        /**
         * @return {String} 
         */
        static get RU_RU() {
            return Language._MAP.RU_RU;
        }

        /**
         * @return {String} 
         */
        static get TR_TR() {
            return Language._MAP.TR_TR;
        }

        /**
         * @return {String} 
         */
        static get PL_PL() {
            return Language._MAP.PL_PL;
        }

        /**
         * @return {String} 
         */
        static get FR_FR() {
            return Language._MAP.FR_FR;
        }

        /**
         * @return {String} 
         */
        static get IT_IT() {
            return Language._MAP.IT_IT;
        }

        /**
         * @return {String} 
         */
        static get SV_SE() {
            return Language._MAP.SV_SE;
        }

        /**
         * @return {String} 
         */
        static get PT_PT() {
            return Language._MAP.PT_PT;
        }

        /**
         * @return {String} 
         */
        static get NL_NL() {
            return Language._MAP.NL_NL;
        }

        /**
         * @return {String} 
         */
        static get EN_AU() {
            return Language._MAP.EN_AU;
        }

        /**
         * @return {String} 
         */
        static get ZH_CN() {
            return Language._MAP.ZH_CN;
        }

        /**
         * @return {String} 
         */
        static get ZH_TW() {
            return Language._MAP.ZH_TW;
        }

        /**
         * @return {String} 
         */
        static get JA_JP() {
            return Language._MAP.JA_JP;
        }

        /**
         * @return {String} 
         */
        static get AR_SA() {
            return Language._MAP.AR_SA;
        }

        /**
         * @return {String} 
         */
        static get KO_KR() {
            return Language._MAP.KO_KR;
        }

        /**
         * @return {String} 
         */
        static get PT_BR() {
            return Language._MAP.PT_BR;
        }

        /**
         * @return {String} 
         */
        static get CS_CZ() {
            return Language._MAP.CS_CZ;
        }

        /**
         * @return {String} 
         */
        static get DA_DK() {
            return Language._MAP.DA_DK;
        }

        /**
         * @return {String} 
         */
        static get NO_NO() {
            return Language._MAP.NO_NO;
        }

        /**
         * @return {String} 
         */
        static get EN_IN() {
            return Language._MAP.EN_IN;
        }

        /**
         * @return {String} 
         */
        static get TH_TH() {
            return Language._MAP.TH_TH;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            for (let key in Language._MAP) {
                if (Language._MAP[key] === value) {
                    return Language._MAP[key];
                }
            }

            return null;
        }
    }

    Language._MAP = Object.freeze({
        'EN_SA': 'EN-SA',
        'HE_IL': 'HE-IL',
        'RO_RO': 'RO-RO',
        'UK_UA': 'UK-UA',
        'ID_ID': 'ID-ID',
        'VI_VN': 'VI-VN',
        'MS_MY': 'MS-MY',
        'HI_IN': 'HI-IN',
        'NL_BE': 'NL-BE',
        'EL_GR': 'EL-GR',
        'HU_HU': 'HU-HU',
        'FI_FI': 'FI-FI',
        'SK_SK': 'SK-SK',
        'EN_US': 'EN-US',
        'ES_MX': 'ES-MX',
        'FR_CA': 'FR-CA',
        'DE_DE': 'DE-DE',
        'ES_ES': 'ES-ES',
        'EN_GB': 'EN-GB',
        'RU_RU': 'RU-RU',
        'TR_TR': 'TR-TR',
        'PL_PL': 'PL-PL',
        'FR_FR': 'FR-FR',
        'IT_IT': 'IT-IT',
        'SV_SE': 'SV-SE',
        'PT_PT': 'PT-PT',
        'NL_NL': 'NL-NL',
        'EN_AU': 'EN-AU',
        'ZH_CN': 'ZH-CN',
        'ZH_TW': 'ZH-TW',
        'JA_JP': 'JA-JP',
        'AR_SA': 'AR-SA',
        'KO_KR': 'KO-KR',
        'PT_BR': 'PT-BR',
        'CS_CZ': 'CS-CZ',
        'DA_DK': 'DA-DK',
        'NO_NO': 'NO-NO',
        'EN_IN': 'EN-IN',
        'TH_TH': 'TH-TH',
    });

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

    /**
     * @typedef {Enum} AppHMIType
     * @property {Object} _MAP
     */
    class AppHMIType extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get DEFAULT() {
            return AppHMIType._MAP.DEFAULT;
        }

        /**
         * @return {String} 
         */
        static get COMMUNICATION() {
            return AppHMIType._MAP.COMMUNICATION;
        }

        /**
         * @return {String} 
         */
        static get MEDIA() {
            return AppHMIType._MAP.MEDIA;
        }

        /**
         * @return {String} 
         */
        static get MESSAGING() {
            return AppHMIType._MAP.MESSAGING;
        }

        /**
         * @return {String} 
         */
        static get NAVIGATION() {
            return AppHMIType._MAP.NAVIGATION;
        }

        /**
         * @return {String} 
         */
        static get INFORMATION() {
            return AppHMIType._MAP.INFORMATION;
        }

        /**
         * @return {String} 
         */
        static get SOCIAL() {
            return AppHMIType._MAP.SOCIAL;
        }

        /**
         * @return {String} 
         */
        static get BACKGROUND_PROCESS() {
            return AppHMIType._MAP.BACKGROUND_PROCESS;
        }

        /**
         * @return {String} 
         */
        static get TESTING() {
            return AppHMIType._MAP.TESTING;
        }

        /**
         * @return {String} 
         */
        static get SYSTEM() {
            return AppHMIType._MAP.SYSTEM;
        }

        /**
         * @return {String} 
         */
        static get PROJECTION() {
            return AppHMIType._MAP.PROJECTION;
        }

        /**
         * @return {String} 
         */
        static get REMOTE_CONTROL() {
            return AppHMIType._MAP.REMOTE_CONTROL;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return AppHMIType.valueForStringInternal(value, AppHMIType._MAP);
        }
    }

    AppHMIType._MAP = Object.freeze({
        'DEFAULT': 'DEFAULT',
        'COMMUNICATION': 'COMMUNICATION',
        'MEDIA': 'MEDIA',
        'MESSAGING': 'MESSAGING',
        'NAVIGATION': 'NAVIGATION',
        'INFORMATION': 'INFORMATION',
        'SOCIAL': 'SOCIAL',
        'BACKGROUND_PROCESS': 'BACKGROUND_PROCESS',
        'TESTING': 'TESTING',
        'SYSTEM': 'SYSTEM',
        'PROJECTION': 'PROJECTION',
        'REMOTE_CONTROL': 'REMOTE_CONTROL',
    });

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

    class RegisterAppInterface extends RpcRequest {
        constructor (store) {
            super(store);
            this.setFunctionName(FunctionID.RegisterAppInterface);
        }

        /**
        * @param {SdlMsgVersion} The max RPC Spec version supported by this library
        * @return {RegisterAppInterface}
        */
        setSdlMsgVersion (sdlMsgVersion) {
            this.validateType(SdlMsgVersion, sdlMsgVersion);

            this.setParameter(RegisterAppInterface.KEY_SDL_MSG_VERSION, sdlMsgVersion);
            return this;
        }

        /**
        * @return {SdlMsgVersion}
        */
        getSdlMsgVersion () {
            return this.getObject(SdlMsgVersion, RegisterAppInterface.KEY_SDL_MSG_VERSION);
        }


        /**
        * @param {String} appName the name of the app that is registering
        * @return {RegisterAppInterface}
        */
        setAppName (appName) {
            this.validateType(String, appName);

            this.setParameter(RegisterAppInterface.KEY_APP_NAME, appName);
            return this;
        }

        /**
        * @return {String} the app name
        */
        getAppName () {
            return this.getParameter(RegisterAppInterface.KEY_APP_NAME);
        }

        /**
       * @param {Array<TTSChunk>} ttsNames TTS string for VR recognition of the mobile application name, e.g. "My S D L App".
       *                                   Meant to overcome any failing on speech engine in properly pronouncing / understanding
       *                                   app name. Needs to be unique over all applications from the same device. May not be
       *                                   empty. May not start with a new line character. Only characters from char set
       * @return {RegisterAppInterface}
       */
        setTtsName (ttsNames) {
            this.setParameter(RegisterAppInterface.KEY_TTS_NAME, ttsNames);
            return this;
        }

        /**
        * @return {Array<TTSChunk>}
        */
        getTtsName () {
            return this.getObject(TtsChunk, RegisterAppInterface.KEY_VR_COMMANDS);
        }

        /**
        * @param {String}  ngnppName Provides an abbreviated version of the app name (if needed), that will be displayed
        *                            on the NGN media screen. If not provided, the appName is used instead (and
        *                            will be truncated if too long)Only characters from char set.
        * @return {RegisterAppInterface}
        */
        setNgnMediaScreenAppName (ngnppName) {
            this.validateType(String, ngnppName);

            this.setParameter(RegisterAppInterface.KEY_NGN_MEDIA_SCREEN_APP_NAME, ngnppName);
            return this;
        }

        /**
        * @return {String} an abbreviated version of the app name
        */
        getNgnMediaScreenAppName () {
            return this.getParameter(RegisterAppInterface.KEY_NGN_MEDIA_SCREEN_APP_NAME);
        }

        /**
        * @param {Array<String>} vrSynonyms Defines an additional voice recognition command. May not
        *                                   interfere with any app name of previously registered applications
        *                                   from the same device and any predefined blacklist of words (global
        *                                   commands)Only characters from char set
        * @return {RegisterAppInterface}
        */
        setVrSynonyms (vrSynonyms) {
            this.setParameter(RegisterAppInterface.KEY_VR_SYNONYMS, vrSynonyms);
            return this;
        }

        /**
        * @return {Array<String>}
        */
        getVrSynonyms () {
            return this.getParameter(RegisterAppInterface.KEY_VR_SYNONYMS);
        }

        /**
        * @param {Boolean} isMediaApplication Indicates if the application is a media or a non-media application.
        *                                     Only media applications will be able to stream audio to the module
        *                                     that is audible outside of the BT media source.
        * @return {RegisterAppInterface}
        */
        setIsMediaApplication (isMediaApplication) {
            this.setParameter(RegisterAppInterface.KEY_IS_MEDIA_APPLICATION, isMediaApplication);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getIsMediaApplication () {
            return this.getParameter(RegisterAppInterface.KEY_IS_MEDIA_APPLICATION);
        }

        /**
        * @param {Language} languageDesired
        * @return {RegisterAppInterface}
        */
        setLanguageDesired (languageDesired) {
            this.validateType(Language, languageDesired);

            this.setParameter(RegisterAppInterface.KEY_LANGUAGE_DESIRED, languageDesired);
            return this;
        }

        /**
        * @return {Language}
        */
        getLanguageDesired () {
            return this.getObject(Language, RegisterAppInterface.KEY_LANGUAGE_DESIRED);
        }


        /**
        * @param {Language} hmiDisplayLanguageDesired
        * @return {RegisterAppInterface}
        */
        setHmiDisplayLanguageDesired (hmiDisplayLanguageDesired) {
            this.validateType(Language, hmiDisplayLanguageDesired);

            this.setParameter(RegisterAppInterface.KEY_HMI_DISPLAY_LANGUAGE_DESIRED, hmiDisplayLanguageDesired);
            return this;
        }

        /**
        * @return {Language}
        */
        getHmiDisplayLanguageDesired () {
            return this.getObject(Language, RegisterAppInterface.KEY_HMI_DISPLAY_LANGUAGE_DESIRED);
        }


        /**
        * @param {Array<AppHMIType>} appHMIType
        * @return {RegisterAppInterface}
        */
        setAppHmiType (appHMIType) {
            // TODO make validate type accept arrays
            // this.validateType(AppHMIType, appHMIType);

            this.setParameter(RegisterAppInterface.KEY_APP_HMI_TYPE, appHMIType);
            return this;
        }

        /**
        * @return {Array<AppHMIType>}
        */
        getAppHmiType () {
            return this.getObject(AppHMIType, RegisterAppInterface.KEY_APP_HMI_TYPE);
        }

        /**
        * @param {String} hashID the hash ID
        * @return {RegisterAppInterface}
        */
        setHashID (hashID) {
            this.validateType(String, hashID);

            this.setParameter(RegisterAppInterface.KEY_HASH_ID, hashID);
            return this;
        }

        /**
        * @return {String} the hash ID
        */
        getHashID () {
            return this.getParameter(RegisterAppInterface.KEY_HASH_ID);
        }

        /**
         * @param {DeviceInfo} deviceInfo
         * @return {RegisterAppInterface}
         */
        setDeviceInfo (deviceInfo) {
            this.validateType(DeviceInfo, deviceInfo);

            this.setParameter(RegisterAppInterface.KEY_DEVICE_INFO, deviceInfo);
            return this;
        }

        /**
        * @return {DeviceInfo}
        */
        getDeviceInfo () {
            return this.getObject(DeviceInfo, RegisterAppInterface.KEY_DEVICE_INFO);
        }


        /**
        * @param {String} appName This method should not be accessed directly by developers. Only set the full ID and this param will be set.
        * @return {RegisterAppInterface}
        */
        _setAppId (appId) {
            this.validateType(String, appId);

            this.setParameter(RegisterAppInterface.KEY_APP_ID, appId);
            return this;
        }

        /**
        * @return {String} the app id
        */
        getAppId () {
            return this.getParameter(RegisterAppInterface.KEY_APP_ID);
        }

        /**
        * @param {String} fullAppId
        * @return {RegisterAppInterface}
        */
        setFullAppId (fullAppId) {
            this.validateType(String, fullAppId);

            if (fullAppId !== null) {
                fullAppId = fullAppId.toLowerCase();
                this.setParameter(RegisterAppInterface.KEY_FULL_APP_ID, fullAppId);
                let appId;
                if (fullAppId.length <= RegisterAppInterface.APP_ID_MAX_LENGTH) {
                    appId = fullAppId;
                } else {
                    appId = fullAppId.replace('-', '').substring(0, RegisterAppInterface.APP_ID_MAX_LENGTH);
                }
                this._setAppId(appId);
            } else {
                this.setParameter(RegisterAppInterface.KEY_FULL_APP_ID, null);
            }

            return this;
        }

        /**
        * @return {String} the app id
        */
        getFullAppId () {
            return this.getParameter(RegisterAppInterface.KEY_FULL_APP_ID);
        }


        /**
         * @param {AppInfo} appInfo
         * @return {RegisterAppInterface}
         */
        setAppInfo (appInfo) {
            this.validateType(AppInfo, appInfo);

            this.setParameter(RegisterAppInterface.KEY_APP_INFO, appInfo);
            return this;
        }

        /**
        * @return {AppInfo}
        */
        getAppInfo () {
            return this.getObject(AppInfo, RegisterAppInterface.KEY_APP_INFO);
        }

        /**
         * @param {TemplateColorScheme} dayColorScheme
         * @return {RegisterAppInterface}
         */
        setDayColorScheme (dayColorScheme) {
            this.validateType(TemplateColorScheme, dayColorScheme);

            this.setParameter(RegisterAppInterface.KEY_DAY_COLOR_SCHEME, dayColorScheme);
            return this;
        }

        /**
        * @return {TemplateColorScheme}
        */
        getDayColorScheme () {
            return this.getObject(TemplateColorScheme, RegisterAppInterface.KEY_DAY_COLOR_SCHEME);
        }

        /**
         * @param {TemplateColorScheme} nightColorScheme
         * @return {RegisterAppInterface}
         */
        setNightColorScheme (nightColorScheme) {
            this.validateType(TemplateColorScheme, nightColorScheme);

            this.setParameter(RegisterAppInterface.KEY_NIGHT_COLOR_SCHEME, nightColorScheme);
            return this;
        }

        /**
        * @return {TemplateColorScheme}
        */
        getNightColorScheme () {
            return this.getObject(TemplateColorScheme, RegisterAppInterface.KEY_NIGHT_COLOR_SCHEME);
        }
    }

    RegisterAppInterface.KEY_SYNC_MSG_VERSION = 'syncMsgVersion';
    RegisterAppInterface.KEY_SDL_MSG_VERSION = 'syncMsgVersion';
    RegisterAppInterface.KEY_APP_NAME = 'appName';
    RegisterAppInterface.KEY_TTS_NAME = 'ttsName';
    RegisterAppInterface.KEY_NGN_MEDIA_SCREEN_APP_NAME = 'ngnMediaScreenAppName';
    RegisterAppInterface.KEY_VR_SYNONYMS = 'vrSynonyms';
    RegisterAppInterface.KEY_IS_MEDIA_APPLICATION = 'isMediaApplication';
    RegisterAppInterface.KEY_LANGUAGE_DESIRED = 'languageDesired';
    RegisterAppInterface.KEY_HMI_DISPLAY_LANGUAGE_DESIRED = 'hmiDisplayLanguageDesired';
    RegisterAppInterface.KEY_APP_HMI_TYPE = 'appHMIType';
    RegisterAppInterface.KEY_HASH_ID = 'hashID';
    RegisterAppInterface.KEY_DEVICE_INFO = 'deviceInfo';
    RegisterAppInterface.KEY_APP_ID = 'appID';
    RegisterAppInterface.KEY_FULL_APP_ID = 'fullAppID';
    RegisterAppInterface.KEY_APP_INFO = 'appInfo';
    RegisterAppInterface.KEY_DAY_COLOR_SCHEME = 'dayColorScheme';
    RegisterAppInterface.KEY_NIGHT_COLOR_SCHEME = 'nightColorScheme';
    RegisterAppInterface.APP_ID_MAX_LENGTH = 10;

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

    /**
     * @typedef {Enum} Result
     * @property {Object} _MAP
     */
    class Result extends Enum {

        /**
         * @constructor
         */
        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get SUCCESS() {
            return Result._MAP.SUCCESS;
        }

        /**
         * @return {String} 
         */
        static get UNSUPPORTED_REQUEST() {
            return Result._MAP.UNSUPPORTED_REQUEST;
        }

        /**
         * @return {String} 
         */
        static get UNSUPPORTED_RESOURCE() {
            return Result._MAP.UNSUPPORTED_REQUEST;
        }

        /**
         * @return {String} 
         */
        static get DISALLOWED() {
            return Result._MAP.DISALLOWED;
        }

        /**
         * @return {String} 
         */
        static get REJECTED() {
            return Result._MAP.REJECTED;
        }

        /**
         * @return {String} 
         */
        static get ABORTED() {
            return Result._MAP.ABORTED;
        }

        /**
         * @return {String} 
         */
        static get IGNORED() {
            return Result._MAP.IGNORED;
        }

        /**
         * @return {String} 
         */
        static get RETRY() {
            return Result._MAP.RETRY;
        }

        /**
         * @return {String} 
         */
        static get IN_USE() {
            return Result._MAP.IN_USE;
        }

        /**
         * @return {String} 
         */
        static get VEHICLE_DATA_NOT_AVAILABLE() {
            return Result._MAP.VEHICLE_DATA_NOT_AVAILABLE;
        }

        /**
         * @return {String} 
         */
        static get TIMED_OUT() {
            return Result._MAP.TIMED_OUT;
        }

        /**
         * @return {String} 
         */
        static get INVALID_DATA() {
            return Result._MAP.INVALID_DATA;
        }

        /**
         * @return {String} 
         */
        static get CHAR_LIMIT_EXCEEDED() {
            return Result._MAP.CHAR_LIMIT_EXCEEDED;
        }

        /**
         * @return {String} 
         */
        static get INVALID_ID() {
            return Result._MAP.INVALID_ID;
        }

        /**
         * @return {String} 
         */
        static get DUPLICATE_NAME() {
            return Result._MAP.DUPLICATE_NAME;
        }

        /**
         * @return {String} 
         */
        static get APPLICATION_NOT_REGISTERED() {
            return Result._MAP.APPLICATION_NOT_REGISTERED;
        }

        /**
         * @return {String} 
         */
        static get WRONG_LANGUAGE() {
            return Result._MAP.WRONG_LANGUAGE;
        }

        /**
         * @return {String} 
         */
        static get OUT_OF_MEMORY() {
            return Result._MAP.OUT_OF_MEMORY;
        }

        /**
         * @return {String} 
         */
        static get TOO_MANY_PENDING_REQUESTS() {
            return Result._MAP.TOO_MANY_PENDING_REQUESTS;
        }

        /**
         * @return {String} 
         */
        static get TOO_MANY_APPLICATIONS() {
            return Result._MAP.TOO_MANY_APPLICATIONS;
        }

        /**
         * @return {String} 
         */
        static get APPLICATION_REGISTERED_ALREADY() {
            return Result._MAP.APPLICATION_REGISTERED_ALREADY;
        }

        /**
         * @return {String} 
         */
        static get WARNINGS() {
            return Result._MAP.WARNINGS;
        }

        /**
         * @return {String} 
         */
        static get GENERIC_ERROR() {
            return Result._MAP.GENERIC_ERROR;
        }

        /**
         * @return {String} 
         */
        static get USER_DISALLOWED() {
            return Result._MAP.USER_DISALLOWED;
        }

        /**
         * @return {String} 
         */
        static get TRUNCATED_DATA() {
            return Result._MAP.TRUNCATED_DATA;
        }

        /**
         * @return {String} 
         */
        static get UNSUPPORTED_VERSION() {
            return Result._MAP.UNSUPPORTED_VERSION;
        }

        /**
         * @return {String} 
         */
        static get VEHICLE_DATA_NOT_ALLOWED() {
            return Result._MAP.VEHICLE_DATA_NOT_ALLOWED;
        }

        /**
         * @return {String} 
         */
        static get FILE_NOT_FOUND() {
            return Result._MAP.FILE_NOT_FOUND;
        }

        /**
         * @return {String} 
         */
        static get CANCEL_ROUTE() {
            return Result._MAP.CANCEL_ROUTE;
        }

        /**
         * @return {String} 
         */
        static get SAVED() {
            return Result._MAP.SAVED;
        }

        /**
         * @return {String} 
         */
        static get INVALID_CERT() {
            return Result._MAP.INVALID_CERT;
        }

        /**
         * @return {String} 
         */
        static get EXPIRED_CERT() {
            return Result._MAP.EXPIRED_CERT;
        }

        /**
         * @return {String} 
         */
        static get RESUME_FAILED() {
            return Result._MAP.RESUME_FAILED;
        }

        /**
         * @return {String} 
         */
        static get DATA_NOT_AVAILABLE() {
            return Result._MAP.DATA_NOT_AVAILABLE;
        }

        /**
         * @return {String} 
         */
        static get READ_ONLY() {
            return Result._MAP.READ_ONLY;
        }

        /**
         * @return {String} 
         */
        static get CORRUPTED_DATA() {
            return Result._MAP.CORRUPTED_DATA;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return Result.valueForStringInternal(value, Result._MAP);
        }

        /**
        * Returns the key of the map with the corresponding value
        * @param {String} value
        * @return {null|String} - Returns null if not found
        */
        static keyForValue(value) {
            return Result.keyForValueInternal(value, Result._MAP);
        }

    }

    Result._MAP = Object.freeze({
        'SUCCESS': 'SUCCESS',
        'UNSUPPORTED_REQUEST': 'UNSUPPORTED_REQUEST',
        'UNSUPPORTED_RESOURCE': 'UNSUPPORTED_RESOURCE',
        'DISALLOWED': 'DISALLOWED',
        'REJECTED': 'REJECTED',
        'ABORTED': 'ABORTED',
        'IGNORED': 'IGNORED',
        'RETRY': 'RETRY',
        'IN_USE': 'IN_USE',
        'VEHICLE_DATA_NOT_AVAILABLE': 'VEHICLE_DATA_NOT_AVAILABLE',
        'TIMED_OUT': 'TIMED_OUT',
        'INVALID_DATA': 'INVALID_DATA',
        'CHAR_LIMIT_EXCEEDED': 'CHAR_LIMIT_EXCEEDED',
        'INVALID_ID': 'INVALID_ID',
        'DUPLICATE_NAME': 'DUPLICATE_NAME',
        'APPLICATION_NOT_REGISTERED': 'APPLICATION_NOT_REGISTERED',
        'WRONG_LANGUAGE': 'WRONG_LANGUAGE',
        'OUT_OF_MEMORY': 'OUT_OF_MEMORY',
        'TOO_MANY_PENDING_REQUESTS': 'TOO_MANY_PENDING_REQUESTS',
        'TOO_MANY_APPLICATIONS': 'TOO_MANY_APPLICATIONS',
        'APPLICATION_REGISTERED_ALREADY': 'APPLICATION_REGISTERED_ALREADY',
        'WARNINGS': 'WARNINGS',
        'GENERIC_ERROR': 'GENERIC_ERROR',
        'USER_DISALLOWED': 'USER_DISALLOWED',
        'TRUNCATED_DATA': 'TRUNCATED_DATA',
        'UNSUPPORTED_VERSION': 'UNSUPPORTED_VERSION',
        'VEHICLE_DATA_NOT_ALLOWED': 'VEHICLE_DATA_NOT_ALLOWED',
        'FILE_NOT_FOUND': 'FILE_NOT_FOUND',
        'CANCEL_ROUTE': 'CANCEL_ROUTE',
        'SAVED': 'SAVED',
        'INVALID_CERT': 'INVALID_CERT',
        'EXPIRED_CERT': 'EXPIRED_CERT',
        'RESUME_FAILED': 'RESUME_FAILED',
        'DATA_NOT_AVAILABLE': 'DATA_NOT_AVAILABLE',
        'READ_ONLY': 'READ_ONLY',
        'CORRUPTED_DATA': 'CORRUPTED_DATA',
    });

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

    class RpcResponse extends RpcMessage {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setRPCType(RpcType.RESPONSE);
        }

        /**
        * @return {Boolean}
        */
        getSuccess() {
            return this.getParameter(KEY_SUCCESS);
        }

        /**
        * @return {RpcResponse}
        */
        setSuccess(success) {
            this.setParameter(KEY_SUCCESS, success);
            return this;
        }

        /**
        * @return {String}
        */
        getInfo() {
            return this.getParameter(KEY_INFO);
        }

        /**
        * @return {RpcResponse}
        */
        setInfo(info) {
            this.setParameter(KEY_INFO, info);
            return this;
        }

        /**
        * @return {Result}
        */
        getResultCode() {
            return this.getObject(Result, KEY_RESULT_CODE);
        }

        /**
        * @return {RpcResponse}
        */
        setResultCode(resultCode) {
            this.validateType(Result, resultCode);

            this.setParameter(KEY_RESULT_CODE, resultCode);
            return this;
        }
    }

    RpcResponse.KEY_SUCCESS     = 'success';
    RpcResponse.KEY_INFO        = 'info';
    RpcResponse.KEY_RESULT_CODE = 'resultCode';

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

    class RpcListener {

        /**
         * @constructor
         */
        constructor() {
            this._onRpcMessage = null;
        }

        /**
         * @param {Function} func
         * @return {RpcListener}
         */
        setOnRpcMessage(func) {
            this._onRpcMessage = func;

            return this;
        }

        /**
         * 
         * @param {RpcMessage} rpcMessage 
         */
        onRpcMessage(rpcMessage) {
            if (typeof this._onRpcMessage === 'function') {
                this._onRpcMessage(rpcMessage);
            }
        }

    }

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

    /**
     * @typedef {Object} SdlSessionListener
     */
    class SdlSessionListener {
        /**
    	 * @constructor
    	 */
        constructor () {
            this._onProtocolSessionStarted = null;
            this._onProtocolSessionEnded = null;
            this._onProtocolSessionEndedNACKed = null;
            this._onRpcMessageReceived = null;
            this._onTransportConnected = null;
        }

        /**
         * @param {function} listener 
         */
        setOnProtocolSessionStarted (listener) {
            this._onProtocolSessionStarted = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnProtocolSessionEnded (listener) {
            this._onProtocolSessionEnded = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnProtocolSessionEndedNACKed (listener) {
            this._onProtocolSessionEndedNACKed = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnRpcMessageReceived (listener) {
            this._onRpcMessageReceived = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnTransportConnected (listener) {
            this._onTransportConnected = listener;
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionID - represents a byte 
         * @param {Number} version - represents a byte 
         * @param {String} correlationID
         * @param {Number} hashID
         * @param {Boolean} isEncrypted
         */
        onProtocolSessionStarted (serviceType, sessionID, version, correlationID, hashID, isEncrypted) {
            if (typeof this._onProtocolSessionStarted === 'function') {
                this._onProtocolSessionStarted(serviceType, sessionID, version, correlationID, hashID, isEncrypted);
            }
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionID - represents a byte 
         * @param {String} correlationID
         */
        onProtocolSessionEnded (serviceType, sessionID, correlationID) {
            if (typeof this._onProtocolSessionEnded === 'function') {
                this._onProtocolSessionEnded(serviceType, sessionID, correlationID);
            }
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionID - represents a byte 
         * @param {String} correlationID
         */
        onProtocolSessionEndedNACKed (serviceType, sessionID, correlationI) {
            if (typeof this._onProtocolSessionEndedNACKed === 'function') {
                this._onProtocolSessionEndedNACKed(serviceType, sessionID, correlationI);
            }
        }

        /**
         * @param {RpcMessage} rpcMessage 
         */
        onRpcMessageReceived (rpcMessage) {
            if (typeof this._onRpcMessageReceived === 'function') {
                this._onRpcMessageReceived(rpcMessage);
            }
        }

        /**
         * Invoked when the app and core connect
         */
        onTransportConnected () {
            if (typeof this._onTransportConnected === 'function') {
                this._onTransportConnected();
            }
        }
    }

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

    /**
     * @typedef {Object} SdlProtocolListener
     * @property {function} setOnRpcMessageReceived
     * @property {function} onRpcMessageReceived
     * @property {function} setOnProtocolSessionStarted
     * @property {function} onProtocolSessionStarted
     * @property {function} setOnProtocolSessionEnded
     * @property {function} onProtocolSessionEnded
     * @property {function} setOnProtocolSessionEndedNACKed
     * @property {function} onProtocolSessionEndedNACKed
     * @property {function} setGetSessionId
     * @property {function} getSessionId
     */
    class SdlProtocolListener {
        /**
         * @constructor
         */
        constructor () {
            this._onRpcMessageReceived = null;
            this._onProtocolSessionStarted = null;
            this._onProtocolSessionEnded = null;
            this._onProtocolSessionEndedNACKed = null;
            this._getSessionId = null;
            this._onTransportConnected = null;
        }

            /**
         * @param {function} listener
         */
        setOnTransportConnected (listener) {
            this._onTransportConnected = listener;
        }

        /**
         * @param {function} listener
         */
        setOnRpcMessageReceived (listener) {
            this._onRpcMessageReceived = listener;
        }

        /**
         * @param {RpcMessage} rpcMessage
         */
        onRpcMessageReceived (rpcMessage) {
            if (typeof this._onRpcMessageReceived === 'function') {
                this._onRpcMessageReceived(rpcMessage);
            }
        }

        /**
         * @param {function} listener
         */
        setOnProtocolSessionStarted (listener) {
            this._onProtocolSessionStarted = listener;
        }


        onTransportConnected () {
            if (typeof this._onTransportConnected === 'function') {
                this._onTransportConnected();
            }
        }

        /**
         * Invoke the onProtocolSessionStarted listener with the event data
         * @param {ServiceType} serviceType
         * @param {Number} sessionId
         * @param {Number} version
         * @param {String} correlationId
         * @param {Number} hashId
         * @param {Boolean} isEncrypted
         */
        onProtocolSessionStarted (serviceType, sessionId, version, correlationId, hashId, isEncrypted) {
            if (typeof this._onProtocolSessionStarted === 'function') {
                this._onProtocolSessionStarted(serviceType, sessionId, version, correlationId, hashId, isEncrypted);
            }
        }

        /**
         * @param {function} listener
         */
        setOnProtocolSessionEnded (listener) {
            this._onProtocolSessionEnded = listener;
        }

        /**
         * Invoke the onProtocolSessionEnded listener with the event data
         * @param {ServiceType} serviceType
         * @param {Number} sessionId
         * @param {String} correlationId
         */
        onProtocolSessionEnded (serviceType, sessionId, correlationId) {
            if (typeof this._onProtocolSessionEnded === 'function') {
                this._onProtocolSessionEnded(serviceType, sessionId, correlationId);
            }
        }

        /**
         * @param {function} listener
         */
        setOnProtocolSessionEndedNACKed (listener) {
            this._onProtocolSessionEndedNACKed = listener;
        }

        /**
         * Invoke the onProtocolSessionEndedNACKed listener with the event data
         * @param {ServiceType} serviceType
         * @param {Number} sessionId
         * @param {String} correlationId
         */
        onProtocolSessionEndedNACKed (serviceType, sessionId, correlationId) {
            if (typeof this._onProtocolSessionEndedNACKed === 'function') {
                this._onProtocolSessionEndedNACKed(serviceType, sessionId, correlationId);
            }
        }

        /**
         * @param {function} getter
         */
        setGetSessionId (getter) {
            this._getSessionId = getter;
        }

        /**
         * Invoke the getSessionId getter
         * @returns {Number} sessionId
         */
        getSessionId () {
            if (typeof this._getSessionId === 'function') {
                return this._getSessionId();
            }
        }
    }

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

    /**
     * @typedef {Enum} FrameType
     * @property {Object} _MAP
     */
    class FrameType extends Enum {

        /**
        * @constructor
        */
        constructor () {
            super();
        }

        /**
        * @return {Number}
        */
        static get CONTROL () {
            return FrameType._MAP.CONTROL;
        }

        /**
        * @return {Number}
        */
        static get FIRST () {
            return FrameType._MAP.FIRST;
        }

        /**
        * @return {Number}
        */
        static get CONSECUTIVE () {
            return FrameType._MAP.CONSECUTIVE;
        }

        /**
        * @return {Number}
        */
        static get SINGLE () {
            return FrameType._MAP.SINGLE;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {Number} value
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString (value) {
            for (const key in FrameType._MAP) {
                if (FrameType._MAP[key] === value) {
                    return FrameType._MAP[key];
                }
            }

            return null;
        }
    }

    FrameType._MAP = Object.freeze({
        'CONTROL': 0x00,
        'FIRST': 0x02,
        'CONSECUTIVE': 0x03,
        'SINGLE': 0x01,
    });

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var bson_common = createCommonjsModule(function (module, exports) {
    exports["bson"] =
    /******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	var installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
    /******/
    /******/ 		// Check if module is in cache
    /******/ 		if(installedModules[moduleId]) {
    /******/ 			return installedModules[moduleId].exports;
    /******/ 		}
    /******/ 		// Create a new module (and put it into the cache)
    /******/ 		var module = installedModules[moduleId] = {
    /******/ 			i: moduleId,
    /******/ 			l: false,
    /******/ 			exports: {}
    /******/ 		};
    /******/
    /******/ 		// Execute the module function
    /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ 		// Flag the module as loaded
    /******/ 		module.l = true;
    /******/
    /******/ 		// Return the exports of the module
    /******/ 		return module.exports;
    /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
    /******/ 		if(!__webpack_require__.o(exports, name)) {
    /******/ 			Object.defineProperty(exports, name, {
    /******/ 				configurable: false,
    /******/ 				enumerable: true,
    /******/ 				get: getter
    /******/ 			});
    /******/ 		}
    /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
    /******/ 		var getter = module && module.__esModule ?
    /******/ 			function getDefault() { return module['default']; } :
    /******/ 			function getModuleExports() { return module; };
    /******/ 		__webpack_require__.d(getter, 'a', getter);
    /******/ 		return getter;
    /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = "";
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 2);
    /******/ })
    /************************************************************************/
    /******/ ([
    /* 0 */
    /***/ (function(module, exports) {

    var g;

    // This works in non-strict mode
    g = (function() {
    	return this;
    })();

    try {
    	// This works if eval is allowed (see CSP)
    	g = g || Function("return this")() || (1,eval)("this");
    } catch(e) {
    	// This works if the window reference is available
    	if(typeof window === "object")
    		g = window;
    }

    // g can still be undefined, but nothing to do about it...
    // We return undefined, instead of nothing here, so it's
    // easier to handle this case. if(!global) { ...}

    module.exports = g;


    /***/ }),
    /* 1 */
    /***/ (function(module, exports, __webpack_require__) {
    /* WEBPACK VAR INJECTION */(function(global) {/*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <http://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */



    var base64 = __webpack_require__(3);
    var ieee754 = __webpack_require__(4);
    var isArray = __webpack_require__(5);

    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
      ? global.TYPED_ARRAY_SUPPORT
      : typedArraySupport();

    /*
     * Export kMaxLength after typed array support is determined.
     */
    exports.kMaxLength = kMaxLength();

    function typedArraySupport () {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }};
        return arr.foo() === 42 && // typed array instances can be augmented
            typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
            arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
      } catch (e) {
        return false
      }
    }

    function kMaxLength () {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer (that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr
    };

    function from (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }

      return fromObject(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
      if (typeof Symbol !== 'undefined' && Symbol.species &&
          Buffer[Symbol.species] === Buffer) {
        // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
        Object.defineProperty(Buffer, Symbol.species, {
          value: null,
          configurable: true
        });
      }
    }

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc (that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    };

    function allocUnsafe (that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    };

    function fromString (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike (that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that
    }

    function fromObject (that, obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0;
      }
      return Buffer.alloc(+length)
    }

    Buffer.isBuffer = function isBuffer (b) {
      return !!(b != null && b._isBuffer)
    };

    Buffer.compare = function compare (a, b) {
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer.concat = function concat (list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength (string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };

    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };

    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };

    Buffer.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    };

    Buffer.prototype.equals = function equals (b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    };

    Buffer.prototype.inspect = function inspect () {
      var str = '';
      var max = exports.INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!Buffer.isBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset]
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, true, 23, 4)
    };

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754.read(this, offset, false, 23, 4)
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, true, 52, 8)
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754.read(this, offset, false, 52, 8)
    };

    function checkInt (buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = Buffer.isBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }

    function base64ToBytes (str) {
      return base64.toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan (val) {
      return val !== val // eslint-disable-line no-self-compare
    }

    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)));

    /***/ }),
    /* 2 */
    /***/ (function(module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function(global, Buffer) {(function (global, factory) {
    	  factory(exports, __webpack_require__(6), __webpack_require__(1)) ;
    }(this, (function (exports,long,buffer) {
    	long = long && long.hasOwnProperty('default') ? long['default'] : long;
    	buffer = buffer && buffer.hasOwnProperty('default') ? buffer['default'] : buffer;

    	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    	function createCommonjsModule(fn, module) {
    		return module = { exports: {} }, fn(module, module.exports), module.exports;
    	}

    	function getCjsExportFromNamespace (n) {
    		return n && n.default || n;
    	}

    	var map = createCommonjsModule(function (module) {

    	  if (typeof commonjsGlobal.Map !== 'undefined') {
    	    module.exports = commonjsGlobal.Map;
    	    module.exports.Map = commonjsGlobal.Map;
    	  } else {
    	    // We will return a polyfill
    	    var Map = function Map(array) {
    	      this._keys = [];
    	      this._values = {};

    	      for (var i = 0; i < array.length; i++) {
    	        if (array[i] == null) continue; // skip null and undefined

    	        var entry = array[i];
    	        var key = entry[0];
    	        var value = entry[1]; // Add the key to the list of keys in order

    	        this._keys.push(key); // Add the key and value to the values dictionary with a point
    	        // to the location in the ordered keys list


    	        this._values[key] = {
    	          v: value,
    	          i: this._keys.length - 1
    	        };
    	      }
    	    };

    	    Map.prototype.clear = function () {
    	      this._keys = [];
    	      this._values = {};
    	    };

    	    Map.prototype.delete = function (key) {
    	      var value = this._values[key];
    	      if (value == null) return false; // Delete entry

    	      delete this._values[key]; // Remove the key from the ordered keys list

    	      this._keys.splice(value.i, 1);

    	      return true;
    	    };

    	    Map.prototype.entries = function () {
    	      var self = this;
    	      var index = 0;
    	      return {
    	        next: function next() {
    	          var key = self._keys[index++];
    	          return {
    	            value: key !== undefined ? [key, self._values[key].v] : undefined,
    	            done: key !== undefined ? false : true
    	          };
    	        }
    	      };
    	    };

    	    Map.prototype.forEach = function (callback, self) {
    	      self = self || this;

    	      for (var i = 0; i < this._keys.length; i++) {
    	        var key = this._keys[i]; // Call the forEach callback

    	        callback.call(self, this._values[key].v, key, self);
    	      }
    	    };

    	    Map.prototype.get = function (key) {
    	      return this._values[key] ? this._values[key].v : undefined;
    	    };

    	    Map.prototype.has = function (key) {
    	      return this._values[key] != null;
    	    };

    	    Map.prototype.keys = function () {
    	      var self = this;
    	      var index = 0;
    	      return {
    	        next: function next() {
    	          var key = self._keys[index++];
    	          return {
    	            value: key !== undefined ? key : undefined,
    	            done: key !== undefined ? false : true
    	          };
    	        }
    	      };
    	    };

    	    Map.prototype.set = function (key, value) {
    	      if (this._values[key]) {
    	        this._values[key].v = value;
    	        return this;
    	      } // Add the key to the list of keys in order


    	      this._keys.push(key); // Add the key and value to the values dictionary with a point
    	      // to the location in the ordered keys list


    	      this._values[key] = {
    	        v: value,
    	        i: this._keys.length - 1
    	      };
    	      return this;
    	    };

    	    Map.prototype.values = function () {
    	      var self = this;
    	      var index = 0;
    	      return {
    	        next: function next() {
    	          var key = self._keys[index++];
    	          return {
    	            value: key !== undefined ? self._values[key].v : undefined,
    	            done: key !== undefined ? false : true
    	          };
    	        }
    	      };
    	    }; // Last ismaster


    	    Object.defineProperty(Map.prototype, 'size', {
    	      enumerable: true,
    	      get: function get() {
    	        return this._keys.length;
    	      }
    	    });
    	    module.exports = Map;
    	  }
    	});
    	var map_1 = map.Map;

    	/**
    	 * @ignore
    	 */


    	long.prototype.toExtendedJSON = function (options) {
    	  if (options && options.relaxed) return this.toNumber();
    	  return {
    	    $numberLong: this.toString()
    	  };
    	};
    	/**
    	 * @ignore
    	 */


    	long.fromExtendedJSON = function (doc, options) {
    	  var result = long.fromString(doc.$numberLong);
    	  return options && options.relaxed ? result.toNumber() : result;
    	};

    	Object.defineProperty(long.prototype, '_bsontype', {
    	  value: 'Long'
    	});
    	var long_1 = long;

    	/**
    	 * A class representation of the BSON Double type.
    	 */

    	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

    	var Double =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a Double type
    	   *
    	   * @param {number} value the number we want to represent as a double.
    	   * @return {Double}
    	   */
    	  function Double(value) {
    	    _classCallCheck(this, Double);

    	    this.value = value;
    	  }
    	  /**
    	   * Access the number value.
    	   *
    	   * @method
    	   * @return {number} returns the wrapped double number.
    	   */


    	  _createClass(Double, [{
    	    key: "valueOf",
    	    value: function valueOf() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON(options) {
    	      if (options && options.relaxed && isFinite(this.value)) return this.value;
    	      return {
    	        $numberDouble: this.value.toString()
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc, options) {
    	      return options && options.relaxed ? parseFloat(doc.$numberDouble) : new Double(parseFloat(doc.$numberDouble));
    	    }
    	  }]);

    	  return Double;
    	}();

    	Object.defineProperty(Double.prototype, '_bsontype', {
    	  value: 'Double'
    	});
    	var double_1 = Double;

    	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

    	function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

    	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

    	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

    	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

    	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

    	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    	/**
    	 * @class
    	 * @param {number} low  the low (signed) 32 bits of the Timestamp.
    	 * @param {number} high the high (signed) 32 bits of the Timestamp.
    	 * @return {Timestamp}
    	 */


    	var Timestamp =
    	/*#__PURE__*/
    	function (_Long) {
    	  _inherits(Timestamp, _Long);

    	  function Timestamp(low, high) {
    	    var _this;

    	    _classCallCheck$1(this, Timestamp);

    	    if (long_1.isLong(low)) {
    	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low.low, low.high));
    	    } else {
    	      _this = _possibleConstructorReturn(this, _getPrototypeOf(Timestamp).call(this, low, high));
    	    }

    	    return _possibleConstructorReturn(_this);
    	  }
    	  /**
    	   * Return the JSON value.
    	   *
    	   * @method
    	   * @return {String} the JSON representation.
    	   */


    	  _createClass$1(Timestamp, [{
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return {
    	        $timestamp: this.toString()
    	      };
    	    }
    	    /**
    	     * Returns a Timestamp represented by the given (32-bit) integer value.
    	     *
    	     * @method
    	     * @param {number} value the 32-bit integer in question.
    	     * @return {Timestamp} the timestamp.
    	     */

    	  }, {
    	    key: "toExtendedJSON",

    	    /**
    	     * @ignore
    	     */
    	    value: function toExtendedJSON() {
    	      return {
    	        $timestamp: {
    	          t: this.high,
    	          i: this.low
    	        }
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromInt",
    	    value: function fromInt(value) {
    	      return new Timestamp(long_1.fromInt(value));
    	    }
    	    /**
    	     * Returns a Timestamp representing the given number value, provided that it is a finite number. Otherwise, zero is returned.
    	     *
    	     * @method
    	     * @param {number} value the number in question.
    	     * @return {Timestamp} the timestamp.
    	     */

    	  }, {
    	    key: "fromNumber",
    	    value: function fromNumber(value) {
    	      return new Timestamp(long_1.fromNumber(value));
    	    }
    	    /**
    	     * Returns a Timestamp for the given high and low bits. Each is assumed to use 32 bits.
    	     *
    	     * @method
    	     * @param {number} lowBits the low 32-bits.
    	     * @param {number} highBits the high 32-bits.
    	     * @return {Timestamp} the timestamp.
    	     */

    	  }, {
    	    key: "fromBits",
    	    value: function fromBits(lowBits, highBits) {
    	      return new Timestamp(lowBits, highBits);
    	    }
    	    /**
    	     * Returns a Timestamp from the given string, optionally using the given radix.
    	     *
    	     * @method
    	     * @param {String} str the textual representation of the Timestamp.
    	     * @param {number} [opt_radix] the radix in which the text is written.
    	     * @return {Timestamp} the timestamp.
    	     */

    	  }, {
    	    key: "fromString",
    	    value: function fromString(str, opt_radix) {
    	      return new Timestamp(long_1.fromString(str, opt_radix));
    	    }
    	  }, {
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      return new Timestamp(doc.$timestamp.i, doc.$timestamp.t);
    	    }
    	  }]);

    	  return Timestamp;
    	}(long_1);

    	Object.defineProperty(Timestamp.prototype, '_bsontype', {
    	  value: 'Timestamp'
    	});
    	var timestamp = Timestamp;

    	var empty = {};

    	var empty$1 = /*#__PURE__*/Object.freeze({
    		default: empty
    	});

    	var require$$0 = getCjsExportFromNamespace(empty$1);

    	/* global window */

    	/**
    	 * Normalizes our expected stringified form of a function across versions of node
    	 * @param {Function} fn The function to stringify
    	 */


    	function normalizedFunctionString(fn) {
    	  return fn.toString().replace('function(', 'function (');
    	}

    	function insecureRandomBytes(size) {
    	  var result = new Uint8Array(size);

    	  for (var i = 0; i < size; ++i) {
    	    result[i] = Math.floor(Math.random() * 256);
    	  }

    	  return result;
    	}

    	var randomBytes = insecureRandomBytes;

    	if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    	  randomBytes = function randomBytes(size) {
    	    return window.crypto.getRandomValues(new Uint8Array(size));
    	  };
    	} else {
    	  try {
    	    randomBytes = require$$0.randomBytes;
    	  } catch (e) {} // keep the fallback
    	  // NOTE: in transpiled cases the above require might return null/undefined


    	  if (randomBytes == null) {
    	    randomBytes = insecureRandomBytes;
    	  }
    	}

    	var utils = {
    	  normalizedFunctionString: normalizedFunctionString,
    	  randomBytes: randomBytes
    	};

    	if (typeof global.setTimeout === 'function') ;

    	if (typeof global.clearTimeout === 'function') ;

    	var performance = global.performance || {};

    	var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    	  return new Date().getTime();
    	}; // generate timestamp or delta

    	var inherits;

    	if (typeof Object.create === 'function') {
    	  inherits = function inherits(ctor, superCtor) {
    	    // implementation from standard node.js 'util' module
    	    ctor.super_ = superCtor;
    	    ctor.prototype = Object.create(superCtor.prototype, {
    	      constructor: {
    	        value: ctor,
    	        enumerable: false,
    	        writable: true,
    	        configurable: true
    	      }
    	    });
    	  };
    	} else {
    	  inherits = function inherits(ctor, superCtor) {
    	    ctor.super_ = superCtor;

    	    var TempCtor = function TempCtor() {};

    	    TempCtor.prototype = superCtor.prototype;
    	    ctor.prototype = new TempCtor();
    	    ctor.prototype.constructor = ctor;
    	  };
    	}

    	var inherits$1 = inherits;

    	function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }
    	var formatRegExp = /%[sdj%]/g;
    	function format(f) {
    	  if (!isString(f)) {
    	    var objects = [];

    	    for (var i = 0; i < arguments.length; i++) {
    	      objects.push(inspect(arguments[i]));
    	    }

    	    return objects.join(' ');
    	  }

    	  var i = 1;
    	  var args = arguments;
    	  var len = args.length;
    	  var str = String(f).replace(formatRegExp, function (x) {
    	    if (x === '%%') return '%';
    	    if (i >= len) return x;

    	    switch (x) {
    	      case '%s':
    	        return String(args[i++]);

    	      case '%d':
    	        return Number(args[i++]);

    	      case '%j':
    	        try {
    	          return JSON.stringify(args[i++]);
    	        } catch (_) {
    	          return '[Circular]';
    	        }

    	      default:
    	        return x;
    	    }
    	  });

    	  for (var x = args[i]; i < len; x = args[++i]) {
    	    if (isNull(x) || !isObject(x)) {
    	      str += ' ' + x;
    	    } else {
    	      str += ' ' + inspect(x);
    	    }
    	  }

    	  return str;
    	}
    	// Returns a modified function which warns once by default.
    	// If --no-deprecation is set, then it is a no-op.

    	function deprecate(fn, msg) {
    	  // Allow for deprecating things in the process of starting up.
    	  if (isUndefined(global.process)) {
    	    return function () {
    	      return deprecate(fn, msg).apply(this, arguments);
    	    };
    	  }

    	  var warned = false;

    	  function deprecated() {
    	    if (!warned) {
    	      {
    	        console.error(msg);
    	      }

    	      warned = true;
    	    }

    	    return fn.apply(this, arguments);
    	  }

    	  return deprecated;
    	}
    	var debugs = {};
    	var debugEnviron;
    	function debuglog(set) {
    	  if (isUndefined(debugEnviron)) debugEnviron =  '';
    	  set = set.toUpperCase();

    	  if (!debugs[set]) {
    	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
    	      var pid = 0;

    	      debugs[set] = function () {
    	        var msg = format.apply(null, arguments);
    	        console.error('%s %d: %s', set, pid, msg);
    	      };
    	    } else {
    	      debugs[set] = function () {};
    	    }
    	  }

    	  return debugs[set];
    	}
    	/**
    	 * Echos the value of a value. Trys to print the value out
    	 * in the best way possible given the different types.
    	 *
    	 * @param {Object} obj The object to print out.
    	 * @param {Object} opts Optional options object that alters the output.
    	 */

    	/* legacy: obj, showHidden, depth, colors*/

    	function inspect(obj, opts) {
    	  // default options
    	  var ctx = {
    	    seen: [],
    	    stylize: stylizeNoColor
    	  }; // legacy...

    	  if (arguments.length >= 3) ctx.depth = arguments[2];
    	  if (arguments.length >= 4) ctx.colors = arguments[3];

    	  if (isBoolean(opts)) {
    	    // legacy...
    	    ctx.showHidden = opts;
    	  } else if (opts) {
    	    // got an "options" object
    	    _extend(ctx, opts);
    	  } // set default options


    	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
    	  if (isUndefined(ctx.depth)) ctx.depth = 2;
    	  if (isUndefined(ctx.colors)) ctx.colors = false;
    	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
    	  if (ctx.colors) ctx.stylize = stylizeWithColor;
    	  return formatValue(ctx, obj, ctx.depth);
    	} // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics

    	inspect.colors = {
    	  'bold': [1, 22],
    	  'italic': [3, 23],
    	  'underline': [4, 24],
    	  'inverse': [7, 27],
    	  'white': [37, 39],
    	  'grey': [90, 39],
    	  'black': [30, 39],
    	  'blue': [34, 39],
    	  'cyan': [36, 39],
    	  'green': [32, 39],
    	  'magenta': [35, 39],
    	  'red': [31, 39],
    	  'yellow': [33, 39]
    	}; // Don't use 'blue' not visible on cmd.exe

    	inspect.styles = {
    	  'special': 'cyan',
    	  'number': 'yellow',
    	  'boolean': 'yellow',
    	  'undefined': 'grey',
    	  'null': 'bold',
    	  'string': 'green',
    	  'date': 'magenta',
    	  // "name": intentionally not styling
    	  'regexp': 'red'
    	};

    	function stylizeWithColor(str, styleType) {
    	  var style = inspect.styles[styleType];

    	  if (style) {
    	    return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
    	  } else {
    	    return str;
    	  }
    	}

    	function stylizeNoColor(str, styleType) {
    	  return str;
    	}

    	function arrayToHash(array) {
    	  var hash = {};
    	  array.forEach(function (val, idx) {
    	    hash[val] = true;
    	  });
    	  return hash;
    	}

    	function formatValue(ctx, value, recurseTimes) {
    	  // Provide a hook for user-specified inspect functions.
    	  // Check that value is an object with an inspect function on it
    	  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
    	  value.inspect !== inspect && // Also filter out any prototype objects using the circular check.
    	  !(value.constructor && value.constructor.prototype === value)) {
    	    var ret = value.inspect(recurseTimes, ctx);

    	    if (!isString(ret)) {
    	      ret = formatValue(ctx, ret, recurseTimes);
    	    }

    	    return ret;
    	  } // Primitive types cannot have properties


    	  var primitive = formatPrimitive(ctx, value);

    	  if (primitive) {
    	    return primitive;
    	  } // Look up the keys of the object.


    	  var keys = Object.keys(value);
    	  var visibleKeys = arrayToHash(keys);

    	  if (ctx.showHidden) {
    	    keys = Object.getOwnPropertyNames(value);
    	  } // IE doesn't make error fields non-enumerable
    	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx


    	  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    	    return formatError(value);
    	  } // Some type of object without properties can be shortcutted.


    	  if (keys.length === 0) {
    	    if (isFunction(value)) {
    	      var name = value.name ? ': ' + value.name : '';
    	      return ctx.stylize('[Function' + name + ']', 'special');
    	    }

    	    if (isRegExp(value)) {
    	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    	    }

    	    if (isDate(value)) {
    	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    	    }

    	    if (isError(value)) {
    	      return formatError(value);
    	    }
    	  }

    	  var base = '',
    	      array = false,
    	      braces = ['{', '}']; // Make Array say that they are Array

    	  if (isArray(value)) {
    	    array = true;
    	    braces = ['[', ']'];
    	  } // Make functions say that they are functions


    	  if (isFunction(value)) {
    	    var n = value.name ? ': ' + value.name : '';
    	    base = ' [Function' + n + ']';
    	  } // Make RegExps say that they are RegExps


    	  if (isRegExp(value)) {
    	    base = ' ' + RegExp.prototype.toString.call(value);
    	  } // Make dates with properties first say the date


    	  if (isDate(value)) {
    	    base = ' ' + Date.prototype.toUTCString.call(value);
    	  } // Make error with message first say the error


    	  if (isError(value)) {
    	    base = ' ' + formatError(value);
    	  }

    	  if (keys.length === 0 && (!array || value.length == 0)) {
    	    return braces[0] + base + braces[1];
    	  }

    	  if (recurseTimes < 0) {
    	    if (isRegExp(value)) {
    	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    	    } else {
    	      return ctx.stylize('[Object]', 'special');
    	    }
    	  }

    	  ctx.seen.push(value);
    	  var output;

    	  if (array) {
    	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    	  } else {
    	    output = keys.map(function (key) {
    	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    	    });
    	  }

    	  ctx.seen.pop();
    	  return reduceToSingleString(output, base, braces);
    	}

    	function formatPrimitive(ctx, value) {
    	  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');

    	  if (isString(value)) {
    	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    	    return ctx.stylize(simple, 'string');
    	  }

    	  if (isNumber(value)) return ctx.stylize('' + value, 'number');
    	  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean'); // For some reason typeof null is "object", so special case here.

    	  if (isNull(value)) return ctx.stylize('null', 'null');
    	}

    	function formatError(value) {
    	  return '[' + Error.prototype.toString.call(value) + ']';
    	}

    	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    	  var output = [];

    	  for (var i = 0, l = value.length; i < l; ++i) {
    	    if (hasOwnProperty(value, String(i))) {
    	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    	    } else {
    	      output.push('');
    	    }
    	  }

    	  keys.forEach(function (key) {
    	    if (!key.match(/^\d+$/)) {
    	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    	    }
    	  });
    	  return output;
    	}

    	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    	  var name, str, desc;
    	  desc = Object.getOwnPropertyDescriptor(value, key) || {
    	    value: value[key]
    	  };

    	  if (desc.get) {
    	    if (desc.set) {
    	      str = ctx.stylize('[Getter/Setter]', 'special');
    	    } else {
    	      str = ctx.stylize('[Getter]', 'special');
    	    }
    	  } else {
    	    if (desc.set) {
    	      str = ctx.stylize('[Setter]', 'special');
    	    }
    	  }

    	  if (!hasOwnProperty(visibleKeys, key)) {
    	    name = '[' + key + ']';
    	  }

    	  if (!str) {
    	    if (ctx.seen.indexOf(desc.value) < 0) {
    	      if (isNull(recurseTimes)) {
    	        str = formatValue(ctx, desc.value, null);
    	      } else {
    	        str = formatValue(ctx, desc.value, recurseTimes - 1);
    	      }

    	      if (str.indexOf('\n') > -1) {
    	        if (array) {
    	          str = str.split('\n').map(function (line) {
    	            return '  ' + line;
    	          }).join('\n').substr(2);
    	        } else {
    	          str = '\n' + str.split('\n').map(function (line) {
    	            return '   ' + line;
    	          }).join('\n');
    	        }
    	      }
    	    } else {
    	      str = ctx.stylize('[Circular]', 'special');
    	    }
    	  }

    	  if (isUndefined(name)) {
    	    if (array && key.match(/^\d+$/)) {
    	      return str;
    	    }

    	    name = JSON.stringify('' + key);

    	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
    	      name = name.substr(1, name.length - 2);
    	      name = ctx.stylize(name, 'name');
    	    } else {
    	      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    	      name = ctx.stylize(name, 'string');
    	    }
    	  }

    	  return name + ': ' + str;
    	}

    	function reduceToSingleString(output, base, braces) {
    	  var length = output.reduce(function (prev, cur) {
    	    if (cur.indexOf('\n') >= 0) ;
    	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    	  }, 0);

    	  if (length > 60) {
    	    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
    	  }

    	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    	} // NOTE: These type checking functions intentionally don't use `instanceof`
    	// because it is fragile and can be easily faked with `Object.create()`.


    	function isArray(ar) {
    	  return Array.isArray(ar);
    	}
    	function isBoolean(arg) {
    	  return typeof arg === 'boolean';
    	}
    	function isNull(arg) {
    	  return arg === null;
    	}
    	function isNullOrUndefined(arg) {
    	  return arg == null;
    	}
    	function isNumber(arg) {
    	  return typeof arg === 'number';
    	}
    	function isString(arg) {
    	  return typeof arg === 'string';
    	}
    	function isSymbol(arg) {
    	  return _typeof$1(arg) === 'symbol';
    	}
    	function isUndefined(arg) {
    	  return arg === void 0;
    	}
    	function isRegExp(re) {
    	  return isObject(re) && objectToString(re) === '[object RegExp]';
    	}
    	function isObject(arg) {
    	  return _typeof$1(arg) === 'object' && arg !== null;
    	}
    	function isDate(d) {
    	  return isObject(d) && objectToString(d) === '[object Date]';
    	}
    	function isError(e) {
    	  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
    	}
    	function isFunction(arg) {
    	  return typeof arg === 'function';
    	}
    	function isPrimitive(arg) {
    	  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof$1(arg) === 'symbol' || // ES6 symbol
    	  typeof arg === 'undefined';
    	}
    	function isBuffer(maybeBuf) {
    	  return Buffer.isBuffer(maybeBuf);
    	}

    	function objectToString(o) {
    	  return Object.prototype.toString.call(o);
    	}

    	function pad(n) {
    	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
    	}

    	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // 26 Feb 16:19:34

    	function timestamp$1() {
    	  var d = new Date();
    	  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
    	  return [d.getDate(), months[d.getMonth()], time].join(' ');
    	} // log is just a thin wrapper to console.log that prepends a timestamp


    	function log() {
    	  console.log('%s - %s', timestamp$1(), format.apply(null, arguments));
    	}
    	function _extend(origin, add) {
    	  // Don't do anything if add isn't an object
    	  if (!add || !isObject(add)) return origin;
    	  var keys = Object.keys(add);
    	  var i = keys.length;

    	  while (i--) {
    	    origin[keys[i]] = add[keys[i]];
    	  }

    	  return origin;
    	}

    	function hasOwnProperty(obj, prop) {
    	  return Object.prototype.hasOwnProperty.call(obj, prop);
    	}

    	var util = {
    	  inherits: inherits$1,
    	  _extend: _extend,
    	  log: log,
    	  isBuffer: isBuffer,
    	  isPrimitive: isPrimitive,
    	  isFunction: isFunction,
    	  isError: isError,
    	  isDate: isDate,
    	  isObject: isObject,
    	  isRegExp: isRegExp,
    	  isUndefined: isUndefined,
    	  isSymbol: isSymbol,
    	  isString: isString,
    	  isNumber: isNumber,
    	  isNullOrUndefined: isNullOrUndefined,
    	  isNull: isNull,
    	  isBoolean: isBoolean,
    	  isArray: isArray,
    	  inspect: inspect,
    	  deprecate: deprecate,
    	  format: format,
    	  debuglog: debuglog
    	};

    	var util$1 = /*#__PURE__*/Object.freeze({
    		format: format,
    		deprecate: deprecate,
    		debuglog: debuglog,
    		inspect: inspect,
    		isArray: isArray,
    		isBoolean: isBoolean,
    		isNull: isNull,
    		isNullOrUndefined: isNullOrUndefined,
    		isNumber: isNumber,
    		isString: isString,
    		isSymbol: isSymbol,
    		isUndefined: isUndefined,
    		isRegExp: isRegExp,
    		isObject: isObject,
    		isDate: isDate,
    		isError: isError,
    		isFunction: isFunction,
    		isPrimitive: isPrimitive,
    		isBuffer: isBuffer,
    		log: log,
    		inherits: inherits$1,
    		_extend: _extend,
    		default: util
    	});

    	var util$2 = getCjsExportFromNamespace(util$1);

    	function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

    	var Buffer$1 = buffer.Buffer;
    	var randomBytes$1 = utils.randomBytes;
    	var deprecate$1 = util$2.deprecate; // constants

    	var PROCESS_UNIQUE = randomBytes$1(5); // Regular expression that checks for hex value

    	var checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
    	var hasBufferType = false; // Check if buffer exists

    	try {
    	  if (Buffer$1 && Buffer$1.from) hasBufferType = true;
    	} catch (err) {
    	  hasBufferType = false;
    	} // Precomputed hex table enables speedy hex string conversion


    	var hexTable = [];

    	for (var _i = 0; _i < 256; _i++) {
    	  hexTable[_i] = (_i <= 15 ? '0' : '') + _i.toString(16);
    	} // Lookup tables


    	var decodeLookup = [];
    	var i = 0;

    	while (i < 10) {
    	  decodeLookup[0x30 + i] = i++;
    	}

    	while (i < 16) {
    	  decodeLookup[0x41 - 10 + i] = decodeLookup[0x61 - 10 + i] = i++;
    	}

    	var _Buffer = Buffer$1;

    	function convertToHex(bytes) {
    	  return bytes.toString('hex');
    	}

    	function makeObjectIdError(invalidString, index) {
    	  var invalidCharacter = invalidString[index];
    	  return new TypeError("ObjectId string \"".concat(invalidString, "\" contains invalid character \"").concat(invalidCharacter, "\" with character code (").concat(invalidString.charCodeAt(index), "). All character codes for a non-hex string must be less than 256."));
    	}
    	/**
    	 * A class representation of the BSON ObjectId type.
    	 */


    	var ObjectId =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create an ObjectId type
    	   *
    	   * @param {(string|Buffer|number)} id Can be a 24 byte hex string, 12 byte binary Buffer, or a Number.
    	   * @property {number} generationTime The generation time of this ObjectId instance
    	   * @return {ObjectId} instance of ObjectId.
    	   */
    	  function ObjectId(id) {
    	    _classCallCheck$2(this, ObjectId);

    	    // Duck-typing to support ObjectId from different npm packages
    	    if (id instanceof ObjectId) return id; // The most common usecase (blank id, new objectId instance)

    	    if (id == null || typeof id === 'number') {
    	      // Generate a new id
    	      this.id = ObjectId.generate(id); // If we are caching the hex string

    	      if (ObjectId.cacheHexString) this.__id = this.toString('hex'); // Return the object

    	      return;
    	    } // Check if the passed in id is valid


    	    var valid = ObjectId.isValid(id); // Throw an error if it's not a valid setup

    	    if (!valid && id != null) {
    	      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    	    } else if (valid && typeof id === 'string' && id.length === 24 && hasBufferType) {
    	      return new ObjectId(Buffer$1.from(id, 'hex'));
    	    } else if (valid && typeof id === 'string' && id.length === 24) {
    	      return ObjectId.createFromHexString(id);
    	    } else if (id != null && id.length === 12) {
    	      // assume 12 byte string
    	      this.id = id;
    	    } else if (id != null && id.toHexString) {
    	      // Duck-typing to support ObjectId from different npm packages
    	      return ObjectId.createFromHexString(id.toHexString());
    	    } else {
    	      throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    	    }

    	    if (ObjectId.cacheHexString) this.__id = this.toString('hex');
    	  }
    	  /**
    	   * Return the ObjectId id as a 24 byte hex string representation
    	   *
    	   * @method
    	   * @return {string} return the 24 byte hex string representation.
    	   */


    	  _createClass$2(ObjectId, [{
    	    key: "toHexString",
    	    value: function toHexString() {
    	      if (ObjectId.cacheHexString && this.__id) return this.__id;
    	      var hexString = '';

    	      if (!this.id || !this.id.length) {
    	        throw new TypeError('invalid ObjectId, ObjectId.id must be either a string or a Buffer, but is [' + JSON.stringify(this.id) + ']');
    	      }

    	      if (this.id instanceof _Buffer) {
    	        hexString = convertToHex(this.id);
    	        if (ObjectId.cacheHexString) this.__id = hexString;
    	        return hexString;
    	      }

    	      for (var _i2 = 0; _i2 < this.id.length; _i2++) {
    	        var hexChar = hexTable[this.id.charCodeAt(_i2)];

    	        if (typeof hexChar !== 'string') {
    	          throw makeObjectIdError(this.id, _i2);
    	        }

    	        hexString += hexChar;
    	      }

    	      if (ObjectId.cacheHexString) this.__id = hexString;
    	      return hexString;
    	    }
    	    /**
    	     * Update the ObjectId index used in generating new ObjectId's on the driver
    	     *
    	     * @method
    	     * @return {number} returns next index value.
    	     * @ignore
    	     */

    	  }, {
    	    key: "toString",

    	    /**
    	     * Converts the id into a 24 byte hex string for printing
    	     *
    	     * @param {String} format The Buffer toString format parameter.
    	     * @return {String} return the 24 byte hex string representation.
    	     * @ignore
    	     */
    	    value: function toString(format) {
    	      // Is the id a buffer then use the buffer toString method to return the format
    	      if (this.id && this.id.copy) {
    	        return this.id.toString(typeof format === 'string' ? format : 'hex');
    	      }

    	      return this.toHexString();
    	    }
    	    /**
    	     * Converts to its JSON representation.
    	     *
    	     * @return {String} return the 24 byte hex string representation.
    	     * @ignore
    	     */

    	  }, {
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return this.toHexString();
    	    }
    	    /**
    	     * Compares the equality of this ObjectId with `otherID`.
    	     *
    	     * @method
    	     * @param {object} otherId ObjectId instance to compare against.
    	     * @return {boolean} the result of comparing two ObjectId's
    	     */

    	  }, {
    	    key: "equals",
    	    value: function equals(otherId) {
    	      if (otherId instanceof ObjectId) {
    	        return this.toString() === otherId.toString();
    	      }

    	      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12 && this.id instanceof _Buffer) {
    	        return otherId === this.id.toString('binary');
    	      }

    	      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 24) {
    	        return otherId.toLowerCase() === this.toHexString();
    	      }

    	      if (typeof otherId === 'string' && ObjectId.isValid(otherId) && otherId.length === 12) {
    	        return otherId === this.id;
    	      }

    	      if (otherId != null && (otherId instanceof ObjectId || otherId.toHexString)) {
    	        return otherId.toHexString() === this.toHexString();
    	      }

    	      return false;
    	    }
    	    /**
    	     * Returns the generation date (accurate up to the second) that this ID was generated.
    	     *
    	     * @method
    	     * @return {Date} the generation date
    	     */

    	  }, {
    	    key: "getTimestamp",
    	    value: function getTimestamp() {
    	      var timestamp = new Date();
    	      var time = this.id.readUInt32BE(0);
    	      timestamp.setTime(Math.floor(time) * 1000);
    	      return timestamp;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",

    	    /**
    	     * @ignore
    	     */
    	    value: function toExtendedJSON() {
    	      if (this.toHexString) return {
    	        $oid: this.toHexString()
    	      };
    	      return {
    	        $oid: this.toString('hex')
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "getInc",
    	    value: function getInc() {
    	      return ObjectId.index = (ObjectId.index + 1) % 0xffffff;
    	    }
    	    /**
    	     * Generate a 12 byte id buffer used in ObjectId's
    	     *
    	     * @method
    	     * @param {number} [time] optional parameter allowing to pass in a second based timestamp.
    	     * @return {Buffer} return the 12 byte id buffer string.
    	     */

    	  }, {
    	    key: "generate",
    	    value: function generate(time) {
    	      if ('number' !== typeof time) {
    	        time = ~~(Date.now() / 1000);
    	      }

    	      var inc = ObjectId.getInc();
    	      var buffer$$1 = Buffer$1.alloc(12); // 4-byte timestamp

    	      buffer$$1[3] = time & 0xff;
    	      buffer$$1[2] = time >> 8 & 0xff;
    	      buffer$$1[1] = time >> 16 & 0xff;
    	      buffer$$1[0] = time >> 24 & 0xff; // 5-byte process unique

    	      buffer$$1[4] = PROCESS_UNIQUE[0];
    	      buffer$$1[5] = PROCESS_UNIQUE[1];
    	      buffer$$1[6] = PROCESS_UNIQUE[2];
    	      buffer$$1[7] = PROCESS_UNIQUE[3];
    	      buffer$$1[8] = PROCESS_UNIQUE[4]; // 3-byte counter

    	      buffer$$1[11] = inc & 0xff;
    	      buffer$$1[10] = inc >> 8 & 0xff;
    	      buffer$$1[9] = inc >> 16 & 0xff;
    	      return buffer$$1;
    	    }
    	  }, {
    	    key: "createPk",
    	    value: function createPk() {
    	      return new ObjectId();
    	    }
    	    /**
    	     * Creates an ObjectId from a second based number, with the rest of the ObjectId zeroed out. Used for comparisons or sorting the ObjectId.
    	     *
    	     * @method
    	     * @param {number} time an integer number representing a number of seconds.
    	     * @return {ObjectId} return the created ObjectId
    	     */

    	  }, {
    	    key: "createFromTime",
    	    value: function createFromTime(time) {
    	      var buffer$$1 = Buffer$1.from([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // Encode time into first 4 bytes

    	      buffer$$1[3] = time & 0xff;
    	      buffer$$1[2] = time >> 8 & 0xff;
    	      buffer$$1[1] = time >> 16 & 0xff;
    	      buffer$$1[0] = time >> 24 & 0xff; // Return the new objectId

    	      return new ObjectId(buffer$$1);
    	    }
    	    /**
    	     * Creates an ObjectId from a hex string representation of an ObjectId.
    	     *
    	     * @method
    	     * @param {string} hexString create a ObjectId from a passed in 24 byte hexstring.
    	     * @return {ObjectId} return the created ObjectId
    	     */

    	  }, {
    	    key: "createFromHexString",
    	    value: function createFromHexString(string) {
    	      // Throw an error if it's not a valid setup
    	      if (typeof string === 'undefined' || string != null && string.length !== 24) {
    	        throw new TypeError('Argument passed in must be a single String of 12 bytes or a string of 24 hex characters');
    	      } // Use Buffer.from method if available


    	      if (hasBufferType) return new ObjectId(Buffer$1.from(string, 'hex')); // Calculate lengths

    	      var array = new _Buffer(12);
    	      var n = 0;
    	      var i = 0;

    	      while (i < 24) {
    	        array[n++] = decodeLookup[string.charCodeAt(i++)] << 4 | decodeLookup[string.charCodeAt(i++)];
    	      }

    	      return new ObjectId(array);
    	    }
    	    /**
    	     * Checks if a value is a valid bson ObjectId
    	     *
    	     * @method
    	     * @return {boolean} return true if the value is a valid bson ObjectId, return false otherwise.
    	     */

    	  }, {
    	    key: "isValid",
    	    value: function isValid(id) {
    	      if (id == null) return false;

    	      if (typeof id === 'number') {
    	        return true;
    	      }

    	      if (typeof id === 'string') {
    	        return id.length === 12 || id.length === 24 && checkForHexRegExp.test(id);
    	      }

    	      if (id instanceof ObjectId) {
    	        return true;
    	      }

    	      if (id instanceof _Buffer && id.length === 12) {
    	        return true;
    	      } // Duck-Typing detection of ObjectId like objects


    	      if (id.toHexString) {
    	        return id.id.length === 12 || id.id.length === 24 && checkForHexRegExp.test(id.id);
    	      }

    	      return false;
    	    }
    	  }, {
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      return new ObjectId(doc.$oid);
    	    }
    	  }]);

    	  return ObjectId;
    	}(); // Deprecated methods


    	ObjectId.get_inc = deprecate$1(function () {
    	  return ObjectId.getInc();
    	}, 'Please use the static `ObjectId.getInc()` instead');
    	ObjectId.prototype.get_inc = deprecate$1(function () {
    	  return ObjectId.getInc();
    	}, 'Please use the static `ObjectId.getInc()` instead');
    	ObjectId.prototype.getInc = deprecate$1(function () {
    	  return ObjectId.getInc();
    	}, 'Please use the static `ObjectId.getInc()` instead');
    	ObjectId.prototype.generate = deprecate$1(function (time) {
    	  return ObjectId.generate(time);
    	}, 'Please use the static `ObjectId.generate(time)` instead');
    	/**
    	 * @ignore
    	 */

    	Object.defineProperty(ObjectId.prototype, 'generationTime', {
    	  enumerable: true,
    	  get: function get() {
    	    return this.id[3] | this.id[2] << 8 | this.id[1] << 16 | this.id[0] << 24;
    	  },
    	  set: function set(value) {
    	    // Encode time into first 4 bytes
    	    this.id[3] = value & 0xff;
    	    this.id[2] = value >> 8 & 0xff;
    	    this.id[1] = value >> 16 & 0xff;
    	    this.id[0] = value >> 24 & 0xff;
    	  }
    	});
    	/**
    	 * Converts to a string representation of this Id.
    	 *
    	 * @return {String} return the 24 byte hex string representation.
    	 * @ignore
    	 */

    	ObjectId.prototype[util$2.inspect.custom || 'inspect'] = ObjectId.prototype.toString;
    	/**
    	 * @ignore
    	 */

    	ObjectId.index = ~~(Math.random() * 0xffffff); // In 4.0.0 and 4.0.1, this property name was changed to ObjectId to match the class name.
    	// This caused interoperability problems with previous versions of the library, so in
    	// later builds we changed it back to ObjectID (capital D) to match legacy implementations.

    	Object.defineProperty(ObjectId.prototype, '_bsontype', {
    	  value: 'ObjectID'
    	});
    	var objectid = ObjectId;

    	function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }

    	function alphabetize(str) {
    	  return str.split('').sort().join('');
    	}
    	/**
    	 * A class representation of the BSON RegExp type.
    	 */


    	var BSONRegExp =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a RegExp type
    	   *
    	   * @param {string} pattern The regular expression pattern to match
    	   * @param {string} options The regular expression options
    	   */
    	  function BSONRegExp(pattern, options) {
    	    _classCallCheck$3(this, BSONRegExp);

    	    // Execute
    	    this.pattern = pattern || '';
    	    this.options = options ? alphabetize(options) : ''; // Validate options

    	    for (var i = 0; i < this.options.length; i++) {
    	      if (!(this.options[i] === 'i' || this.options[i] === 'm' || this.options[i] === 'x' || this.options[i] === 'l' || this.options[i] === 's' || this.options[i] === 'u')) {
    	        throw new Error("The regular expression option [".concat(this.options[i], "] is not supported"));
    	      }
    	    }
    	  }
    	  /**
    	   * @ignore
    	   */


    	  _createClass$3(BSONRegExp, [{
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      return {
    	        $regularExpression: {
    	          pattern: this.pattern,
    	          options: this.options
    	        }
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      return new BSONRegExp(doc.$regularExpression.pattern, doc.$regularExpression.options.split('').sort().join(''));
    	    }
    	  }]);

    	  return BSONRegExp;
    	}();

    	Object.defineProperty(BSONRegExp.prototype, '_bsontype', {
    	  value: 'BSONRegExp'
    	});
    	var regexp = BSONRegExp;

    	/**
    	 * A class representation of the BSON Symbol type.
    	 */

    	function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }

    	var BSONSymbol =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a Symbol type
    	   *
    	   * @param {string} value the string representing the symbol.
    	   */
    	  function BSONSymbol(value) {
    	    _classCallCheck$4(this, BSONSymbol);

    	    this.value = value;
    	  }
    	  /**
    	   * Access the wrapped string value.
    	   *
    	   * @method
    	   * @return {String} returns the wrapped string.
    	   */


    	  _createClass$4(BSONSymbol, [{
    	    key: "valueOf",
    	    value: function valueOf() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toString",
    	    value: function toString() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "inspect",
    	    value: function inspect() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      return {
    	        $symbol: this.value
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      return new BSONSymbol(doc.$symbol);
    	    }
    	  }]);

    	  return BSONSymbol;
    	}();

    	Object.defineProperty(BSONSymbol.prototype, '_bsontype', {
    	  value: 'Symbol'
    	});
    	var symbol = BSONSymbol;

    	/**
    	 * A class representation of a BSON Int32 type.
    	 */

    	function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }

    	var Int32 =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create an Int32 type
    	   *
    	   * @param {number} value the number we want to represent as an int32.
    	   * @return {Int32}
    	   */
    	  function Int32(value) {
    	    _classCallCheck$5(this, Int32);

    	    this.value = value;
    	  }
    	  /**
    	   * Access the number value.
    	   *
    	   * @method
    	   * @return {number} returns the wrapped int32 number.
    	   */


    	  _createClass$5(Int32, [{
    	    key: "valueOf",
    	    value: function valueOf() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return this.value;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON(options) {
    	      if (options && options.relaxed) return this.value;
    	      return {
    	        $numberInt: this.value.toString()
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc, options) {
    	      return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
    	    }
    	  }]);

    	  return Int32;
    	}();

    	Object.defineProperty(Int32.prototype, '_bsontype', {
    	  value: 'Int32'
    	});
    	var int_32 = Int32;

    	/**
    	 * A class representation of the BSON Code type.
    	 */

    	function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }

    	var Code =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a Code type
    	   *
    	   * @param {(string|function)} code a string or function.
    	   * @param {Object} [scope] an optional scope for the function.
    	   * @return {Code}
    	   */
    	  function Code(code, scope) {
    	    _classCallCheck$6(this, Code);

    	    this.code = code;
    	    this.scope = scope;
    	  }
    	  /**
    	   * @ignore
    	   */


    	  _createClass$6(Code, [{
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return {
    	        scope: this.scope,
    	        code: this.code
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      if (this.scope) {
    	        return {
    	          $code: this.code,
    	          $scope: this.scope
    	        };
    	      }

    	      return {
    	        $code: this.code
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      return new Code(doc.$code, doc.$scope);
    	    }
    	  }]);

    	  return Code;
    	}();

    	Object.defineProperty(Code.prototype, '_bsontype', {
    	  value: 'Code'
    	});
    	var code = Code;

    	var Buffer$2 = buffer.Buffer;
    	var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
    	var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
    	var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
    	var EXPONENT_MAX = 6111;
    	var EXPONENT_MIN = -6176;
    	var EXPONENT_BIAS = 6176;
    	var MAX_DIGITS = 34; // Nan value bits as 32 bit values (due to lack of longs)

    	var NAN_BUFFER = [0x7c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse(); // Infinity value bits 32 bit values (due to lack of longs)

    	var INF_NEGATIVE_BUFFER = [0xf8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
    	var INF_POSITIVE_BUFFER = [0x78, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00].reverse();
    	var EXPONENT_REGEX = /^([-+])?(\d+)?$/; // Detect if the value is a digit

    	function isDigit(value) {
    	  return !isNaN(parseInt(value, 10));
    	} // Divide two uint128 values


    	function divideu128(value) {
    	  var DIVISOR = long_1.fromNumber(1000 * 1000 * 1000);

    	  var _rem = long_1.fromNumber(0);

    	  if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
    	    return {
    	      quotient: value,
    	      rem: _rem
    	    };
    	  }

    	  for (var i = 0; i <= 3; i++) {
    	    // Adjust remainder to match value of next dividend
    	    _rem = _rem.shiftLeft(32); // Add the divided to _rem

    	    _rem = _rem.add(new long_1(value.parts[i], 0));
    	    value.parts[i] = _rem.div(DIVISOR).low;
    	    _rem = _rem.modulo(DIVISOR);
    	  }

    	  return {
    	    quotient: value,
    	    rem: _rem
    	  };
    	} // Multiply two Long values and return the 128 bit value


    	function multiply64x2(left, right) {
    	  if (!left && !right) {
    	    return {
    	      high: long_1.fromNumber(0),
    	      low: long_1.fromNumber(0)
    	    };
    	  }

    	  var leftHigh = left.shiftRightUnsigned(32);
    	  var leftLow = new long_1(left.getLowBits(), 0);
    	  var rightHigh = right.shiftRightUnsigned(32);
    	  var rightLow = new long_1(right.getLowBits(), 0);
    	  var productHigh = leftHigh.multiply(rightHigh);
    	  var productMid = leftHigh.multiply(rightLow);
    	  var productMid2 = leftLow.multiply(rightHigh);
    	  var productLow = leftLow.multiply(rightLow);
    	  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    	  productMid = new long_1(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
    	  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
    	  productLow = productMid.shiftLeft(32).add(new long_1(productLow.getLowBits(), 0)); // Return the 128 bit result

    	  return {
    	    high: productHigh,
    	    low: productLow
    	  };
    	}

    	function lessThan(left, right) {
    	  // Make values unsigned
    	  var uhleft = left.high >>> 0;
    	  var uhright = right.high >>> 0; // Compare high bits first

    	  if (uhleft < uhright) {
    	    return true;
    	  } else if (uhleft === uhright) {
    	    var ulleft = left.low >>> 0;
    	    var ulright = right.low >>> 0;
    	    if (ulleft < ulright) return true;
    	  }

    	  return false;
    	}

    	function invalidErr(string, message) {
    	  throw new TypeError("\"".concat(string, "\" is not a valid Decimal128 string - ").concat(message));
    	}
    	/**
    	 * A class representation of the BSON Decimal128 type.
    	 *
    	 * @class
    	 * @param {Buffer} bytes a buffer containing the raw Decimal128 bytes.
    	 * @return {Double}
    	 */


    	function Decimal128(bytes) {
    	  this.bytes = bytes;
    	}
    	/**
    	 * Create a Decimal128 instance from a string representation
    	 *
    	 * @method
    	 * @param {string} string a numeric string representation.
    	 * @return {Decimal128} returns a Decimal128 instance.
    	 */


    	Decimal128.fromString = function (string) {
    	  // Parse state tracking
    	  var isNegative = false;
    	  var sawRadix = false;
    	  var foundNonZero = false; // Total number of significant digits (no leading or trailing zero)

    	  var significantDigits = 0; // Total number of significand digits read

    	  var nDigitsRead = 0; // Total number of digits (no leading zeros)

    	  var nDigits = 0; // The number of the digits after radix

    	  var radixPosition = 0; // The index of the first non-zero in *str*

    	  var firstNonZero = 0; // Digits Array

    	  var digits = [0]; // The number of digits in digits

    	  var nDigitsStored = 0; // Insertion pointer for digits

    	  var digitsInsert = 0; // The index of the first non-zero digit

    	  var firstDigit = 0; // The index of the last digit

    	  var lastDigit = 0; // Exponent

    	  var exponent = 0; // loop index over array

    	  var i = 0; // The high 17 digits of the significand

    	  var significandHigh = [0, 0]; // The low 17 digits of the significand

    	  var significandLow = [0, 0]; // The biased exponent

    	  var biasedExponent = 0; // Read index

    	  var index = 0; // Naively prevent against REDOS attacks.
    	  // TODO: implementing a custom parsing for this, or refactoring the regex would yield
    	  //       further gains.

    	  if (string.length >= 7000) {
    	    throw new TypeError('' + string + ' not a valid Decimal128 string');
    	  } // Results


    	  var stringMatch = string.match(PARSE_STRING_REGEXP);
    	  var infMatch = string.match(PARSE_INF_REGEXP);
    	  var nanMatch = string.match(PARSE_NAN_REGEXP); // Validate the string

    	  if (!stringMatch && !infMatch && !nanMatch || string.length === 0) {
    	    throw new TypeError('' + string + ' not a valid Decimal128 string');
    	  }

    	  if (stringMatch) {
    	    // full_match = stringMatch[0]
    	    // sign = stringMatch[1]
    	    var unsignedNumber = stringMatch[2]; // stringMatch[3] is undefined if a whole number (ex "1", 12")
    	    // but defined if a number w/ decimal in it (ex "1.0, 12.2")

    	    var e = stringMatch[4];
    	    var expSign = stringMatch[5];
    	    var expNumber = stringMatch[6]; // they provided e, but didn't give an exponent number. for ex "1e"

    	    if (e && expNumber === undefined) invalidErr(string, 'missing exponent power'); // they provided e, but didn't give a number before it. for ex "e1"

    	    if (e && unsignedNumber === undefined) invalidErr(string, 'missing exponent base');

    	    if (e === undefined && (expSign || expNumber)) {
    	      invalidErr(string, 'missing e before exponent');
    	    }
    	  } // Get the negative or positive sign


    	  if (string[index] === '+' || string[index] === '-') {
    	    isNegative = string[index++] === '-';
    	  } // Check if user passed Infinity or NaN


    	  if (!isDigit(string[index]) && string[index] !== '.') {
    	    if (string[index] === 'i' || string[index] === 'I') {
    	      return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
    	    } else if (string[index] === 'N') {
    	      return new Decimal128(Buffer$2.from(NAN_BUFFER));
    	    }
    	  } // Read all the digits


    	  while (isDigit(string[index]) || string[index] === '.') {
    	    if (string[index] === '.') {
    	      if (sawRadix) invalidErr(string, 'contains multiple periods');
    	      sawRadix = true;
    	      index = index + 1;
    	      continue;
    	    }

    	    if (nDigitsStored < 34) {
    	      if (string[index] !== '0' || foundNonZero) {
    	        if (!foundNonZero) {
    	          firstNonZero = nDigitsRead;
    	        }

    	        foundNonZero = true; // Only store 34 digits

    	        digits[digitsInsert++] = parseInt(string[index], 10);
    	        nDigitsStored = nDigitsStored + 1;
    	      }
    	    }

    	    if (foundNonZero) nDigits = nDigits + 1;
    	    if (sawRadix) radixPosition = radixPosition + 1;
    	    nDigitsRead = nDigitsRead + 1;
    	    index = index + 1;
    	  }

    	  if (sawRadix && !nDigitsRead) throw new TypeError('' + string + ' not a valid Decimal128 string'); // Read exponent if exists

    	  if (string[index] === 'e' || string[index] === 'E') {
    	    // Read exponent digits
    	    var match = string.substr(++index).match(EXPONENT_REGEX); // No digits read

    	    if (!match || !match[2]) return new Decimal128(Buffer$2.from(NAN_BUFFER)); // Get exponent

    	    exponent = parseInt(match[0], 10); // Adjust the index

    	    index = index + match[0].length;
    	  } // Return not a number


    	  if (string[index]) return new Decimal128(Buffer$2.from(NAN_BUFFER)); // Done reading input
    	  // Find first non-zero digit in digits

    	  firstDigit = 0;

    	  if (!nDigitsStored) {
    	    firstDigit = 0;
    	    lastDigit = 0;
    	    digits[0] = 0;
    	    nDigits = 1;
    	    nDigitsStored = 1;
    	    significantDigits = 0;
    	  } else {
    	    lastDigit = nDigitsStored - 1;
    	    significantDigits = nDigits;

    	    if (significantDigits !== 1) {
    	      while (string[firstNonZero + significantDigits - 1] === '0') {
    	        significantDigits = significantDigits - 1;
    	      }
    	    }
    	  } // Normalization of exponent
    	  // Correct exponent based on radix position, and shift significand as needed
    	  // to represent user input
    	  // Overflow prevention


    	  if (exponent <= radixPosition && radixPosition - exponent > 1 << 14) {
    	    exponent = EXPONENT_MIN;
    	  } else {
    	    exponent = exponent - radixPosition;
    	  } // Attempt to normalize the exponent


    	  while (exponent > EXPONENT_MAX) {
    	    // Shift exponent to significand and decrease
    	    lastDigit = lastDigit + 1;

    	    if (lastDigit - firstDigit > MAX_DIGITS) {
    	      // Check if we have a zero then just hard clamp, otherwise fail
    	      var digitsString = digits.join('');

    	      if (digitsString.match(/^0+$/)) {
    	        exponent = EXPONENT_MAX;
    	        break;
    	      }

    	      invalidErr(string, 'overflow');
    	    }

    	    exponent = exponent - 1;
    	  }

    	  while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
    	    // Shift last digit. can only do this if < significant digits than # stored.
    	    if (lastDigit === 0 && significantDigits < nDigitsStored) {
    	      exponent = EXPONENT_MIN;
    	      significantDigits = 0;
    	      break;
    	    }

    	    if (nDigitsStored < nDigits) {
    	      // adjust to match digits not stored
    	      nDigits = nDigits - 1;
    	    } else {
    	      // adjust to round
    	      lastDigit = lastDigit - 1;
    	    }

    	    if (exponent < EXPONENT_MAX) {
    	      exponent = exponent + 1;
    	    } else {
    	      // Check if we have a zero then just hard clamp, otherwise fail
    	      var _digitsString = digits.join('');

    	      if (_digitsString.match(/^0+$/)) {
    	        exponent = EXPONENT_MAX;
    	        break;
    	      }

    	      invalidErr(string, 'overflow');
    	    }
    	  } // Round
    	  // We've normalized the exponent, but might still need to round.


    	  if (lastDigit - firstDigit + 1 < significantDigits) {
    	    var endOfString = nDigitsRead; // If we have seen a radix point, 'string' is 1 longer than we have
    	    // documented with ndigits_read, so inc the position of the first nonzero
    	    // digit and the position that digits are read to.

    	    if (sawRadix) {
    	      firstNonZero = firstNonZero + 1;
    	      endOfString = endOfString + 1;
    	    } // if negative, we need to increment again to account for - sign at start.


    	    if (isNegative) {
    	      firstNonZero = firstNonZero + 1;
    	      endOfString = endOfString + 1;
    	    }

    	    var roundDigit = parseInt(string[firstNonZero + lastDigit + 1], 10);
    	    var roundBit = 0;

    	    if (roundDigit >= 5) {
    	      roundBit = 1;

    	      if (roundDigit === 5) {
    	        roundBit = digits[lastDigit] % 2 === 1;

    	        for (i = firstNonZero + lastDigit + 2; i < endOfString; i++) {
    	          if (parseInt(string[i], 10)) {
    	            roundBit = 1;
    	            break;
    	          }
    	        }
    	      }
    	    }

    	    if (roundBit) {
    	      var dIdx = lastDigit;

    	      for (; dIdx >= 0; dIdx--) {
    	        if (++digits[dIdx] > 9) {
    	          digits[dIdx] = 0; // overflowed most significant digit

    	          if (dIdx === 0) {
    	            if (exponent < EXPONENT_MAX) {
    	              exponent = exponent + 1;
    	              digits[dIdx] = 1;
    	            } else {
    	              return new Decimal128(Buffer$2.from(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER));
    	            }
    	          }
    	        }
    	      }
    	    }
    	  } // Encode significand
    	  // The high 17 digits of the significand


    	  significandHigh = long_1.fromNumber(0); // The low 17 digits of the significand

    	  significandLow = long_1.fromNumber(0); // read a zero

    	  if (significantDigits === 0) {
    	    significandHigh = long_1.fromNumber(0);
    	    significandLow = long_1.fromNumber(0);
    	  } else if (lastDigit - firstDigit < 17) {
    	    var _dIdx = firstDigit;
    	    significandLow = long_1.fromNumber(digits[_dIdx++]);
    	    significandHigh = new long_1(0, 0);

    	    for (; _dIdx <= lastDigit; _dIdx++) {
    	      significandLow = significandLow.multiply(long_1.fromNumber(10));
    	      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx]));
    	    }
    	  } else {
    	    var _dIdx2 = firstDigit;
    	    significandHigh = long_1.fromNumber(digits[_dIdx2++]);

    	    for (; _dIdx2 <= lastDigit - 17; _dIdx2++) {
    	      significandHigh = significandHigh.multiply(long_1.fromNumber(10));
    	      significandHigh = significandHigh.add(long_1.fromNumber(digits[_dIdx2]));
    	    }

    	    significandLow = long_1.fromNumber(digits[_dIdx2++]);

    	    for (; _dIdx2 <= lastDigit; _dIdx2++) {
    	      significandLow = significandLow.multiply(long_1.fromNumber(10));
    	      significandLow = significandLow.add(long_1.fromNumber(digits[_dIdx2]));
    	    }
    	  }

    	  var significand = multiply64x2(significandHigh, long_1.fromString('100000000000000000'));
    	  significand.low = significand.low.add(significandLow);

    	  if (lessThan(significand.low, significandLow)) {
    	    significand.high = significand.high.add(long_1.fromNumber(1));
    	  } // Biased exponent


    	  biasedExponent = exponent + EXPONENT_BIAS;
    	  var dec = {
    	    low: long_1.fromNumber(0),
    	    high: long_1.fromNumber(0)
    	  }; // Encode combination, exponent, and significand.

    	  if (significand.high.shiftRightUnsigned(49).and(long_1.fromNumber(1)).equals(long_1.fromNumber(1))) {
    	    // Encode '11' into bits 1 to 3
    	    dec.high = dec.high.or(long_1.fromNumber(0x3).shiftLeft(61));
    	    dec.high = dec.high.or(long_1.fromNumber(biasedExponent).and(long_1.fromNumber(0x3fff).shiftLeft(47)));
    	    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x7fffffffffff)));
    	  } else {
    	    dec.high = dec.high.or(long_1.fromNumber(biasedExponent & 0x3fff).shiftLeft(49));
    	    dec.high = dec.high.or(significand.high.and(long_1.fromNumber(0x1ffffffffffff)));
    	  }

    	  dec.low = significand.low; // Encode sign

    	  if (isNegative) {
    	    dec.high = dec.high.or(long_1.fromString('9223372036854775808'));
    	  } // Encode into a buffer


    	  var buffer$$1 = Buffer$2.alloc(16);
    	  index = 0; // Encode the low 64 bits of the decimal
    	  // Encode low bits

    	  buffer$$1[index++] = dec.low.low & 0xff;
    	  buffer$$1[index++] = dec.low.low >> 8 & 0xff;
    	  buffer$$1[index++] = dec.low.low >> 16 & 0xff;
    	  buffer$$1[index++] = dec.low.low >> 24 & 0xff; // Encode high bits

    	  buffer$$1[index++] = dec.low.high & 0xff;
    	  buffer$$1[index++] = dec.low.high >> 8 & 0xff;
    	  buffer$$1[index++] = dec.low.high >> 16 & 0xff;
    	  buffer$$1[index++] = dec.low.high >> 24 & 0xff; // Encode the high 64 bits of the decimal
    	  // Encode low bits

    	  buffer$$1[index++] = dec.high.low & 0xff;
    	  buffer$$1[index++] = dec.high.low >> 8 & 0xff;
    	  buffer$$1[index++] = dec.high.low >> 16 & 0xff;
    	  buffer$$1[index++] = dec.high.low >> 24 & 0xff; // Encode high bits

    	  buffer$$1[index++] = dec.high.high & 0xff;
    	  buffer$$1[index++] = dec.high.high >> 8 & 0xff;
    	  buffer$$1[index++] = dec.high.high >> 16 & 0xff;
    	  buffer$$1[index++] = dec.high.high >> 24 & 0xff; // Return the new Decimal128

    	  return new Decimal128(buffer$$1);
    	}; // Extract least significant 5 bits


    	var COMBINATION_MASK = 0x1f; // Extract least significant 14 bits

    	var EXPONENT_MASK = 0x3fff; // Value of combination field for Inf

    	var COMBINATION_INFINITY = 30; // Value of combination field for NaN

    	var COMBINATION_NAN = 31;
    	/**
    	 * Create a string representation of the raw Decimal128 value
    	 *
    	 * @method
    	 * @return {string} returns a Decimal128 string representation.
    	 */

    	Decimal128.prototype.toString = function () {
    	  // Note: bits in this routine are referred to starting at 0,
    	  // from the sign bit, towards the coefficient.
    	  // bits 0 - 31
    	  var high; // bits 32 - 63

    	  var midh; // bits 64 - 95

    	  var midl; // bits 96 - 127

    	  var low; // bits 1 - 5

    	  var combination; // decoded biased exponent (14 bits)

    	  var biased_exponent; // the number of significand digits

    	  var significand_digits = 0; // the base-10 digits in the significand

    	  var significand = new Array(36);

    	  for (var i = 0; i < significand.length; i++) {
    	    significand[i] = 0;
    	  } // read pointer into significand


    	  var index = 0; // unbiased exponent

    	  var exponent; // the exponent if scientific notation is used

    	  var scientific_exponent; // true if the number is zero

    	  var is_zero = false; // the most signifcant significand bits (50-46)

    	  var significand_msb; // temporary storage for significand decoding

    	  var significand128 = {
    	    parts: new Array(4)
    	  }; // indexing variables

    	  var j, k; // Output string

    	  var string = []; // Unpack index

    	  index = 0; // Buffer reference

    	  var buffer$$1 = this.bytes; // Unpack the low 64bits into a long

    	  low = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	  midl = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack the high 64bits into a long

    	  midh = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	  high = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Unpack index

    	  index = 0; // Create the state of the decimal

    	  var dec = {
    	    low: new long_1(low, midl),
    	    high: new long_1(midh, high)
    	  };

    	  if (dec.high.lessThan(long_1.ZERO)) {
    	    string.push('-');
    	  } // Decode combination field and exponent


    	  combination = high >> 26 & COMBINATION_MASK;

    	  if (combination >> 3 === 3) {
    	    // Check for 'special' values
    	    if (combination === COMBINATION_INFINITY) {
    	      return string.join('') + 'Infinity';
    	    } else if (combination === COMBINATION_NAN) {
    	      return 'NaN';
    	    } else {
    	      biased_exponent = high >> 15 & EXPONENT_MASK;
    	      significand_msb = 0x08 + (high >> 14 & 0x01);
    	    }
    	  } else {
    	    significand_msb = high >> 14 & 0x07;
    	    biased_exponent = high >> 17 & EXPONENT_MASK;
    	  }

    	  exponent = biased_exponent - EXPONENT_BIAS; // Create string of significand digits
    	  // Convert the 114-bit binary number represented by
    	  // (significand_high, significand_low) to at most 34 decimal
    	  // digits through modulo and division.

    	  significand128.parts[0] = (high & 0x3fff) + ((significand_msb & 0xf) << 14);
    	  significand128.parts[1] = midh;
    	  significand128.parts[2] = midl;
    	  significand128.parts[3] = low;

    	  if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
    	    is_zero = true;
    	  } else {
    	    for (k = 3; k >= 0; k--) {
    	      var least_digits = 0; // Peform the divide

    	      var result = divideu128(significand128);
    	      significand128 = result.quotient;
    	      least_digits = result.rem.low; // We now have the 9 least significant digits (in base 2).
    	      // Convert and output to string.

    	      if (!least_digits) continue;

    	      for (j = 8; j >= 0; j--) {
    	        // significand[k * 9 + j] = Math.round(least_digits % 10);
    	        significand[k * 9 + j] = least_digits % 10; // least_digits = Math.round(least_digits / 10);

    	        least_digits = Math.floor(least_digits / 10);
    	      }
    	    }
    	  } // Output format options:
    	  // Scientific - [-]d.dddE(+/-)dd or [-]dE(+/-)dd
    	  // Regular    - ddd.ddd


    	  if (is_zero) {
    	    significand_digits = 1;
    	    significand[index] = 0;
    	  } else {
    	    significand_digits = 36;

    	    while (!significand[index]) {
    	      significand_digits = significand_digits - 1;
    	      index = index + 1;
    	    }
    	  }

    	  scientific_exponent = significand_digits - 1 + exponent; // The scientific exponent checks are dictated by the string conversion
    	  // specification and are somewhat arbitrary cutoffs.
    	  //
    	  // We must check exponent > 0, because if this is the case, the number
    	  // has trailing zeros.  However, we *cannot* output these trailing zeros,
    	  // because doing so would change the precision of the value, and would
    	  // change stored data if the string converted number is round tripped.

    	  if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
    	    // Scientific format
    	    // if there are too many significant digits, we should just be treating numbers
    	    // as + or - 0 and using the non-scientific exponent (this is for the "invalid
    	    // representation should be treated as 0/-0" spec cases in decimal128-1.json)
    	    if (significand_digits > 34) {
    	      string.push(0);
    	      if (exponent > 0) string.push('E+' + exponent);else if (exponent < 0) string.push('E' + exponent);
    	      return string.join('');
    	    }

    	    string.push(significand[index++]);
    	    significand_digits = significand_digits - 1;

    	    if (significand_digits) {
    	      string.push('.');
    	    }

    	    for (var _i = 0; _i < significand_digits; _i++) {
    	      string.push(significand[index++]);
    	    } // Exponent


    	    string.push('E');

    	    if (scientific_exponent > 0) {
    	      string.push('+' + scientific_exponent);
    	    } else {
    	      string.push(scientific_exponent);
    	    }
    	  } else {
    	    // Regular format with no decimal place
    	    if (exponent >= 0) {
    	      for (var _i2 = 0; _i2 < significand_digits; _i2++) {
    	        string.push(significand[index++]);
    	      }
    	    } else {
    	      var radix_position = significand_digits + exponent; // non-zero digits before radix

    	      if (radix_position > 0) {
    	        for (var _i3 = 0; _i3 < radix_position; _i3++) {
    	          string.push(significand[index++]);
    	        }
    	      } else {
    	        string.push('0');
    	      }

    	      string.push('.'); // add leading zeros after radix

    	      while (radix_position++ < 0) {
    	        string.push('0');
    	      }

    	      for (var _i4 = 0; _i4 < significand_digits - Math.max(radix_position - 1, 0); _i4++) {
    	        string.push(significand[index++]);
    	      }
    	    }
    	  }

    	  return string.join('');
    	};

    	Decimal128.prototype.toJSON = function () {
    	  return {
    	    $numberDecimal: this.toString()
    	  };
    	};
    	/**
    	 * @ignore
    	 */


    	Decimal128.prototype.toExtendedJSON = function () {
    	  return {
    	    $numberDecimal: this.toString()
    	  };
    	};
    	/**
    	 * @ignore
    	 */


    	Decimal128.fromExtendedJSON = function (doc) {
    	  return Decimal128.fromString(doc.$numberDecimal);
    	};

    	Object.defineProperty(Decimal128.prototype, '_bsontype', {
    	  value: 'Decimal128'
    	});
    	var decimal128 = Decimal128;

    	/**
    	 * A class representation of the BSON MinKey type.
    	 */

    	function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }

    	var MinKey =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a MinKey type
    	   *
    	   * @return {MinKey} A MinKey instance
    	   */
    	  function MinKey() {
    	    _classCallCheck$7(this, MinKey);
    	  }
    	  /**
    	   * @ignore
    	   */


    	  _createClass$7(MinKey, [{
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      return {
    	        $minKey: 1
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON() {
    	      return new MinKey();
    	    }
    	  }]);

    	  return MinKey;
    	}();

    	Object.defineProperty(MinKey.prototype, '_bsontype', {
    	  value: 'MinKey'
    	});
    	var min_key = MinKey;

    	/**
    	 * A class representation of the BSON MaxKey type.
    	 */

    	function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

    	var MaxKey =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a MaxKey type
    	   *
    	   * @return {MaxKey} A MaxKey instance
    	   */
    	  function MaxKey() {
    	    _classCallCheck$8(this, MaxKey);
    	  }
    	  /**
    	   * @ignore
    	   */


    	  _createClass$8(MaxKey, [{
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      return {
    	        $maxKey: 1
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON() {
    	      return new MaxKey();
    	    }
    	  }]);

    	  return MaxKey;
    	}();

    	Object.defineProperty(MaxKey.prototype, '_bsontype', {
    	  value: 'MaxKey'
    	});
    	var max_key = MaxKey;

    	/**
    	 * A class representation of the BSON DBRef type.
    	 */

    	function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

    	var DBRef =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a DBRef type
    	   *
    	   * @param {string} collection the collection name.
    	   * @param {ObjectId} oid the reference ObjectId.
    	   * @param {string} [db] optional db name, if omitted the reference is local to the current db.
    	   * @return {DBRef}
    	   */
    	  function DBRef(collection, oid, db, fields) {
    	    _classCallCheck$9(this, DBRef);

    	    // check if namespace has been provided
    	    var parts = collection.split('.');

    	    if (parts.length === 2) {
    	      db = parts.shift();
    	      collection = parts.shift();
    	    }

    	    this.collection = collection;
    	    this.oid = oid;
    	    this.db = db;
    	    this.fields = fields || {};
    	  }
    	  /**
    	   * @ignore
    	   * @api private
    	   */


    	  _createClass$9(DBRef, [{
    	    key: "toJSON",
    	    value: function toJSON() {
    	      var o = Object.assign({
    	        $ref: this.collection,
    	        $id: this.oid
    	      }, this.fields);
    	      if (this.db != null) o.$db = this.db;
    	      return o;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      var o = {
    	        $ref: this.collection,
    	        $id: this.oid
    	      };
    	      if (this.db) o.$db = this.db;
    	      o = Object.assign(o, this.fields);
    	      return o;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      var copy = Object.assign({}, doc);
    	      ['$ref', '$id', '$db'].forEach(function (k) {
    	        return delete copy[k];
    	      });
    	      return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
    	    }
    	  }]);

    	  return DBRef;
    	}();

    	Object.defineProperty(DBRef.prototype, '_bsontype', {
    	  value: 'DBRef'
    	}); // the 1.x parser used a "namespace" property, while 4.x uses "collection". To ensure backwards
    	// compatibility, let's expose "namespace"

    	Object.defineProperty(DBRef.prototype, 'namespace', {
    	  get: function get() {
    	    return this.collection;
    	  },
    	  set: function set(val) {
    	    this.collection = val;
    	  },
    	  configurable: false
    	});
    	var db_ref = DBRef;

    	function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    	function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

    	function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }

    	var Buffer$3 = buffer.Buffer;
    	/**
    	 * A class representation of the BSON Binary type.
    	 */

    	var Binary =
    	/*#__PURE__*/
    	function () {
    	  /**
    	   * Create a Binary type
    	   *
    	   * Sub types
    	   *  - **BSON.BSON_BINARY_SUBTYPE_DEFAULT**, default BSON type.
    	   *  - **BSON.BSON_BINARY_SUBTYPE_FUNCTION**, BSON function type.
    	   *  - **BSON.BSON_BINARY_SUBTYPE_BYTE_ARRAY**, BSON byte array type.
    	   *  - **BSON.BSON_BINARY_SUBTYPE_UUID**, BSON uuid type.
    	   *  - **BSON.BSON_BINARY_SUBTYPE_MD5**, BSON md5 type.
    	   *  - **BSON.BSON_BINARY_SUBTYPE_USER_DEFINED**, BSON user defined type.
    	   *
    	   * @param {Buffer} buffer a buffer object containing the binary data.
    	   * @param {Number} [subType] the option binary type.
    	   * @return {Binary}
    	   */
    	  function Binary(buffer$$1, subType) {
    	    _classCallCheck$a(this, Binary);

    	    if (buffer$$1 != null && !(typeof buffer$$1 === 'string') && !Buffer$3.isBuffer(buffer$$1) && !(buffer$$1 instanceof Uint8Array) && !Array.isArray(buffer$$1)) {
    	      throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
    	    }

    	    this.sub_type = subType == null ? BSON_BINARY_SUBTYPE_DEFAULT : subType;
    	    this.position = 0;

    	    if (buffer$$1 != null && !(buffer$$1 instanceof Number)) {
    	      // Only accept Buffer, Uint8Array or Arrays
    	      if (typeof buffer$$1 === 'string') {
    	        // Different ways of writing the length of the string for the different types
    	        if (typeof Buffer$3 !== 'undefined') {
    	          this.buffer = Buffer$3.from(buffer$$1);
    	        } else if (typeof Uint8Array !== 'undefined' || Array.isArray(buffer$$1)) {
    	          this.buffer = writeStringToArray(buffer$$1);
    	        } else {
    	          throw new TypeError('only String, Buffer, Uint8Array or Array accepted');
    	        }
    	      } else {
    	        this.buffer = buffer$$1;
    	      }

    	      this.position = buffer$$1.length;
    	    } else {
    	      if (typeof Buffer$3 !== 'undefined') {
    	        this.buffer = Buffer$3.alloc(Binary.BUFFER_SIZE);
    	      } else if (typeof Uint8Array !== 'undefined') {
    	        this.buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE));
    	      } else {
    	        this.buffer = new Array(Binary.BUFFER_SIZE);
    	      }
    	    }
    	  }
    	  /**
    	   * Updates this binary with byte_value.
    	   *
    	   * @method
    	   * @param {string} byte_value a single byte we wish to write.
    	   */


    	  _createClass$a(Binary, [{
    	    key: "put",
    	    value: function put(byte_value) {
    	      // If it's a string and a has more than one character throw an error
    	      if (byte_value['length'] != null && typeof byte_value !== 'number' && byte_value.length !== 1) throw new TypeError('only accepts single character String, Uint8Array or Array');
    	      if (typeof byte_value !== 'number' && byte_value < 0 || byte_value > 255) throw new TypeError('only accepts number in a valid unsigned byte range 0-255'); // Decode the byte value once

    	      var decoded_byte = null;

    	      if (typeof byte_value === 'string') {
    	        decoded_byte = byte_value.charCodeAt(0);
    	      } else if (byte_value['length'] != null) {
    	        decoded_byte = byte_value[0];
    	      } else {
    	        decoded_byte = byte_value;
    	      }

    	      if (this.buffer.length > this.position) {
    	        this.buffer[this.position++] = decoded_byte;
    	      } else {
    	        if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
    	          // Create additional overflow buffer
    	          var buffer$$1 = Buffer$3.alloc(Binary.BUFFER_SIZE + this.buffer.length); // Combine the two buffers together

    	          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
    	          this.buffer = buffer$$1;
    	          this.buffer[this.position++] = decoded_byte;
    	        } else {
    	          var _buffer = null; // Create a new buffer (typed or normal array)

    	          if (isUint8Array(this.buffer)) {
    	            _buffer = new Uint8Array(new ArrayBuffer(Binary.BUFFER_SIZE + this.buffer.length));
    	          } else {
    	            _buffer = new Array(Binary.BUFFER_SIZE + this.buffer.length);
    	          } // We need to copy all the content to the new array


    	          for (var i = 0; i < this.buffer.length; i++) {
    	            _buffer[i] = this.buffer[i];
    	          } // Reassign the buffer


    	          this.buffer = _buffer; // Write the byte

    	          this.buffer[this.position++] = decoded_byte;
    	        }
    	      }
    	    }
    	    /**
    	     * Writes a buffer or string to the binary.
    	     *
    	     * @method
    	     * @param {(Buffer|string)} string a string or buffer to be written to the Binary BSON object.
    	     * @param {number} offset specify the binary of where to write the content.
    	     * @return {null}
    	     */

    	  }, {
    	    key: "write",
    	    value: function write(string, offset) {
    	      offset = typeof offset === 'number' ? offset : this.position; // If the buffer is to small let's extend the buffer

    	      if (this.buffer.length < offset + string.length) {
    	        var buffer$$1 = null; // If we are in node.js

    	        if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
    	          buffer$$1 = Buffer$3.alloc(this.buffer.length + string.length);
    	          this.buffer.copy(buffer$$1, 0, 0, this.buffer.length);
    	        } else if (isUint8Array(this.buffer)) {
    	          // Create a new buffer
    	          buffer$$1 = new Uint8Array(new ArrayBuffer(this.buffer.length + string.length)); // Copy the content

    	          for (var i = 0; i < this.position; i++) {
    	            buffer$$1[i] = this.buffer[i];
    	          }
    	        } // Assign the new buffer


    	        this.buffer = buffer$$1;
    	      }

    	      if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(string) && Buffer$3.isBuffer(this.buffer)) {
    	        string.copy(this.buffer, offset, 0, string.length);
    	        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length
    	      } else if (typeof Buffer$3 !== 'undefined' && typeof string === 'string' && Buffer$3.isBuffer(this.buffer)) {
    	        this.buffer.write(string, offset, 'binary');
    	        this.position = offset + string.length > this.position ? offset + string.length : this.position; // offset = string.length;
    	      } else if (isUint8Array(string) || Array.isArray(string) && typeof string !== 'string') {
    	        for (var _i = 0; _i < string.length; _i++) {
    	          this.buffer[offset++] = string[_i];
    	        }

    	        this.position = offset > this.position ? offset : this.position;
    	      } else if (typeof string === 'string') {
    	        for (var _i2 = 0; _i2 < string.length; _i2++) {
    	          this.buffer[offset++] = string.charCodeAt(_i2);
    	        }

    	        this.position = offset > this.position ? offset : this.position;
    	      }
    	    }
    	    /**
    	     * Reads **length** bytes starting at **position**.
    	     *
    	     * @method
    	     * @param {number} position read from the given position in the Binary.
    	     * @param {number} length the number of bytes to read.
    	     * @return {Buffer}
    	     */

    	  }, {
    	    key: "read",
    	    value: function read(position, length) {
    	      length = length && length > 0 ? length : this.position; // Let's return the data based on the type we have

    	      if (this.buffer['slice']) {
    	        return this.buffer.slice(position, position + length);
    	      } // Create a buffer to keep the result


    	      var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(length)) : new Array(length);

    	      for (var i = 0; i < length; i++) {
    	        buffer$$1[i] = this.buffer[position++];
    	      } // Return the buffer


    	      return buffer$$1;
    	    }
    	    /**
    	     * Returns the value of this binary as a string.
    	     *
    	     * @method
    	     * @return {string}
    	     */

    	  }, {
    	    key: "value",
    	    value: function value(asRaw) {
    	      asRaw = asRaw == null ? false : asRaw; // Optimize to serialize for the situation where the data == size of buffer

    	      if (asRaw && typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer) && this.buffer.length === this.position) return this.buffer; // If it's a node.js buffer object

    	      if (typeof Buffer$3 !== 'undefined' && Buffer$3.isBuffer(this.buffer)) {
    	        return asRaw ? this.buffer.slice(0, this.position) : this.buffer.toString('binary', 0, this.position);
    	      } else {
    	        if (asRaw) {
    	          // we support the slice command use it
    	          if (this.buffer['slice'] != null) {
    	            return this.buffer.slice(0, this.position);
    	          } else {
    	            // Create a new buffer to copy content to
    	            var newBuffer = isUint8Array(this.buffer) ? new Uint8Array(new ArrayBuffer(this.position)) : new Array(this.position); // Copy content

    	            for (var i = 0; i < this.position; i++) {
    	              newBuffer[i] = this.buffer[i];
    	            } // Return the buffer


    	            return newBuffer;
    	          }
    	        } else {
    	          return convertArraytoUtf8BinaryString(this.buffer, 0, this.position);
    	        }
    	      }
    	    }
    	    /**
    	     * Length.
    	     *
    	     * @method
    	     * @return {number} the length of the binary.
    	     */

    	  }, {
    	    key: "length",
    	    value: function length() {
    	      return this.position;
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toJSON",
    	    value: function toJSON() {
    	      return this.buffer != null ? this.buffer.toString('base64') : '';
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toString",
    	    value: function toString(format) {
    	      return this.buffer != null ? this.buffer.slice(0, this.position).toString(format) : '';
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }, {
    	    key: "toExtendedJSON",
    	    value: function toExtendedJSON() {
    	      var base64String = Buffer$3.isBuffer(this.buffer) ? this.buffer.toString('base64') : Buffer$3.from(this.buffer).toString('base64');
    	      var subType = Number(this.sub_type).toString(16);
    	      return {
    	        $binary: {
    	          base64: base64String,
    	          subType: subType.length === 1 ? '0' + subType : subType
    	        }
    	      };
    	    }
    	    /**
    	     * @ignore
    	     */

    	  }], [{
    	    key: "fromExtendedJSON",
    	    value: function fromExtendedJSON(doc) {
    	      var type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
    	      var data = Buffer$3.from(doc.$binary.base64, 'base64');
    	      return new Binary(data, type);
    	    }
    	  }]);

    	  return Binary;
    	}();
    	/**
    	 * Binary default subtype
    	 * @ignore
    	 */


    	var BSON_BINARY_SUBTYPE_DEFAULT = 0;

    	function isUint8Array(obj) {
    	  return Object.prototype.toString.call(obj) === '[object Uint8Array]';
    	}
    	/**
    	 * @ignore
    	 */


    	function writeStringToArray(data) {
    	  // Create a buffer
    	  var buffer$$1 = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(data.length)) : new Array(data.length); // Write the content to the buffer

    	  for (var i = 0; i < data.length; i++) {
    	    buffer$$1[i] = data.charCodeAt(i);
    	  } // Write the string to the buffer


    	  return buffer$$1;
    	}
    	/**
    	 * Convert Array ot Uint8Array to Binary String
    	 *
    	 * @ignore
    	 */


    	function convertArraytoUtf8BinaryString(byteArray, startIndex, endIndex) {
    	  var result = '';

    	  for (var i = startIndex; i < endIndex; i++) {
    	    result = result + String.fromCharCode(byteArray[i]);
    	  }

    	  return result;
    	}

    	Binary.BUFFER_SIZE = 256;
    	/**
    	 * Default BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_DEFAULT = 0;
    	/**
    	 * Function BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_FUNCTION = 1;
    	/**
    	 * Byte Array BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_BYTE_ARRAY = 2;
    	/**
    	 * OLD UUID BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_UUID_OLD = 3;
    	/**
    	 * UUID BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_UUID = 4;
    	/**
    	 * MD5 BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_MD5 = 5;
    	/**
    	 * User BSON type
    	 *
    	 * @classconstant SUBTYPE_DEFAULT
    	 **/

    	Binary.SUBTYPE_USER_DEFINED = 128;
    	Object.defineProperty(Binary.prototype, '_bsontype', {
    	  value: 'Binary'
    	});
    	var binary = Binary;

    	var constants = {
    	  // BSON MAX VALUES
    	  BSON_INT32_MAX: 0x7fffffff,
    	  BSON_INT32_MIN: -0x80000000,
    	  BSON_INT64_MAX: Math.pow(2, 63) - 1,
    	  BSON_INT64_MIN: -Math.pow(2, 63),
    	  // JS MAX PRECISE VALUES
    	  JS_INT_MAX: 0x20000000000000,
    	  // Any integer up to 2^53 can be precisely represented by a double.
    	  JS_INT_MIN: -0x20000000000000,
    	  // Any integer down to -2^53 can be precisely represented by a double.

    	  /**
    	   * Number BSON Type
    	   *
    	   * @classconstant BSON_DATA_NUMBER
    	   **/
    	  BSON_DATA_NUMBER: 1,

    	  /**
    	   * String BSON Type
    	   *
    	   * @classconstant BSON_DATA_STRING
    	   **/
    	  BSON_DATA_STRING: 2,

    	  /**
    	   * Object BSON Type
    	   *
    	   * @classconstant BSON_DATA_OBJECT
    	   **/
    	  BSON_DATA_OBJECT: 3,

    	  /**
    	   * Array BSON Type
    	   *
    	   * @classconstant BSON_DATA_ARRAY
    	   **/
    	  BSON_DATA_ARRAY: 4,

    	  /**
    	   * Binary BSON Type
    	   *
    	   * @classconstant BSON_DATA_BINARY
    	   **/
    	  BSON_DATA_BINARY: 5,

    	  /**
    	   * Binary BSON Type
    	   *
    	   * @classconstant BSON_DATA_UNDEFINED
    	   **/
    	  BSON_DATA_UNDEFINED: 6,

    	  /**
    	   * ObjectId BSON Type
    	   *
    	   * @classconstant BSON_DATA_OID
    	   **/
    	  BSON_DATA_OID: 7,

    	  /**
    	   * Boolean BSON Type
    	   *
    	   * @classconstant BSON_DATA_BOOLEAN
    	   **/
    	  BSON_DATA_BOOLEAN: 8,

    	  /**
    	   * Date BSON Type
    	   *
    	   * @classconstant BSON_DATA_DATE
    	   **/
    	  BSON_DATA_DATE: 9,

    	  /**
    	   * null BSON Type
    	   *
    	   * @classconstant BSON_DATA_NULL
    	   **/
    	  BSON_DATA_NULL: 10,

    	  /**
    	   * RegExp BSON Type
    	   *
    	   * @classconstant BSON_DATA_REGEXP
    	   **/
    	  BSON_DATA_REGEXP: 11,

    	  /**
    	   * Code BSON Type
    	   *
    	   * @classconstant BSON_DATA_DBPOINTER
    	   **/
    	  BSON_DATA_DBPOINTER: 12,

    	  /**
    	   * Code BSON Type
    	   *
    	   * @classconstant BSON_DATA_CODE
    	   **/
    	  BSON_DATA_CODE: 13,

    	  /**
    	   * Symbol BSON Type
    	   *
    	   * @classconstant BSON_DATA_SYMBOL
    	   **/
    	  BSON_DATA_SYMBOL: 14,

    	  /**
    	   * Code with Scope BSON Type
    	   *
    	   * @classconstant BSON_DATA_CODE_W_SCOPE
    	   **/
    	  BSON_DATA_CODE_W_SCOPE: 15,

    	  /**
    	   * 32 bit Integer BSON Type
    	   *
    	   * @classconstant BSON_DATA_INT
    	   **/
    	  BSON_DATA_INT: 16,

    	  /**
    	   * Timestamp BSON Type
    	   *
    	   * @classconstant BSON_DATA_TIMESTAMP
    	   **/
    	  BSON_DATA_TIMESTAMP: 17,

    	  /**
    	   * Long BSON Type
    	   *
    	   * @classconstant BSON_DATA_LONG
    	   **/
    	  BSON_DATA_LONG: 18,

    	  /**
    	   * Long BSON Type
    	   *
    	   * @classconstant BSON_DATA_DECIMAL128
    	   **/
    	  BSON_DATA_DECIMAL128: 19,

    	  /**
    	   * MinKey BSON Type
    	   *
    	   * @classconstant BSON_DATA_MIN_KEY
    	   **/
    	  BSON_DATA_MIN_KEY: 0xff,

    	  /**
    	   * MaxKey BSON Type
    	   *
    	   * @classconstant BSON_DATA_MAX_KEY
    	   **/
    	  BSON_DATA_MAX_KEY: 0x7f,

    	  /**
    	   * Binary Default Type
    	   *
    	   * @classconstant BSON_BINARY_SUBTYPE_DEFAULT
    	   **/
    	  BSON_BINARY_SUBTYPE_DEFAULT: 0,

    	  /**
    	   * Binary Function Type
    	   *
    	   * @classconstant BSON_BINARY_SUBTYPE_FUNCTION
    	   **/
    	  BSON_BINARY_SUBTYPE_FUNCTION: 1,

    	  /**
    	   * Binary Byte Array Type
    	   *
    	   * @classconstant BSON_BINARY_SUBTYPE_BYTE_ARRAY
    	   **/
    	  BSON_BINARY_SUBTYPE_BYTE_ARRAY: 2,

    	  /**
    	   * Binary UUID Type
    	   *
    	   * @classconstant BSON_BINARY_SUBTYPE_UUID
    	   **/
    	  BSON_BINARY_SUBTYPE_UUID: 3,

    	  /**
    	   * Binary MD5 Type
    	   *
    	   * @classconstant BSON_BINARY_SUBTYPE_MD5
    	   **/
    	  BSON_BINARY_SUBTYPE_MD5: 4,

    	  /**
    	   * Binary User Defined Type
    	   *
    	   * @classconstant BSON_BINARY_SUBTYPE_USER_DEFINED
    	   **/
    	  BSON_BINARY_SUBTYPE_USER_DEFINED: 128
    	};

    	function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
    	// const Map = require('./map');

    	/**
    	 * @namespace EJSON
    	 */
    	// all the types where we don't need to do any special processing and can just pass the EJSON
    	//straight to type.fromExtendedJSON


    	var keysToCodecs = {
    	  $oid: objectid,
    	  $binary: binary,
    	  $symbol: symbol,
    	  $numberInt: int_32,
    	  $numberDecimal: decimal128,
    	  $numberDouble: double_1,
    	  $numberLong: long_1,
    	  $minKey: min_key,
    	  $maxKey: max_key,
    	  $regularExpression: regexp,
    	  $timestamp: timestamp
    	};

    	function deserializeValue(self, key, value, options) {
    	  if (typeof value === 'number') {
    	    if (options.relaxed) {
    	      return value;
    	    } // if it's an integer, should interpret as smallest BSON integer
    	    // that can represent it exactly. (if out of range, interpret as double.)


    	    if (Math.floor(value) === value) {
    	      if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) return new int_32(value);
    	      if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) return new long_1.fromNumber(value);
    	    } // If the number is a non-integer or out of integer range, should interpret as BSON Double.


    	    return new double_1(value);
    	  } // from here on out we're looking for bson types, so bail if its not an object


    	  if (value == null || _typeof$2(value) !== 'object') return value; // upgrade deprecated undefined to null

    	  if (value.$undefined) return null;
    	  var keys = Object.keys(value).filter(function (k) {
    	    return k.startsWith('$') && value[k] != null;
    	  });

    	  for (var i = 0; i < keys.length; i++) {
    	    var c = keysToCodecs[keys[i]];
    	    if (c) return c.fromExtendedJSON(value, options);
    	  }

    	  if (value.$date != null) {
    	    var d = value.$date;
    	    var date = new Date();
    	    if (typeof d === 'string') date.setTime(Date.parse(d));else if (long_1.isLong(d)) date.setTime(d.toNumber());else if (typeof d === 'number' && options.relaxed) date.setTime(d);
    	    return date;
    	  }

    	  if (value.$code != null) {
    	    var copy = Object.assign({}, value);

    	    if (value.$scope) {
    	      copy.$scope = deserializeValue(self, null, value.$scope);
    	    }

    	    return code.fromExtendedJSON(value);
    	  }

    	  if (value.$ref != null || value.$dbPointer != null) {
    	    var v = value.$ref ? value : value.$dbPointer; // we run into this in a "degenerate EJSON" case (with $id and $ref order flipped)
    	    // because of the order JSON.parse goes through the document

    	    if (v instanceof db_ref) return v;
    	    var dollarKeys = Object.keys(v).filter(function (k) {
    	      return k.startsWith('$');
    	    });
    	    var valid = true;
    	    dollarKeys.forEach(function (k) {
    	      if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
    	    }); // only make DBRef if $ keys are all valid

    	    if (valid) return db_ref.fromExtendedJSON(v);
    	  }

    	  return value;
    	}
    	/**
    	 * Parse an Extended JSON string, constructing the JavaScript value or object described by that
    	 * string.
    	 *
    	 * @memberof EJSON
    	 * @param {string} text
    	 * @param {object} [options] Optional settings
    	 * @param {boolean} [options.relaxed=true] Attempt to return native JS types where possible, rather than BSON types (if true)
    	 * @return {object}
    	 *
    	 * @example
    	 * const { EJSON } = require('bson');
    	 * const text = '{ "int32": { "$numberInt": "10" } }';
    	 *
    	 * // prints { int32: { [String: '10'] _bsontype: 'Int32', value: '10' } }
    	 * console.log(EJSON.parse(text, { relaxed: false }));
    	 *
    	 * // prints { int32: 10 }
    	 * console.log(EJSON.parse(text));
    	 */


    	function parse(text, options) {
    	  var _this = this;

    	  options = Object.assign({}, {
    	    relaxed: true
    	  }, options); // relaxed implies not strict

    	  if (typeof options.relaxed === 'boolean') options.strict = !options.relaxed;
    	  if (typeof options.strict === 'boolean') options.relaxed = !options.strict;
    	  return JSON.parse(text, function (key, value) {
    	    return deserializeValue(_this, key, value, options);
    	  });
    	} //
    	// Serializer
    	//
    	// MAX INT32 boundaries


    	var BSON_INT32_MAX = 0x7fffffff,
    	    BSON_INT32_MIN = -0x80000000,
    	    BSON_INT64_MAX = 0x7fffffffffffffff,
    	    BSON_INT64_MIN = -0x8000000000000000;
    	/**
    	 * Converts a BSON document to an Extended JSON string, optionally replacing values if a replacer
    	 * function is specified or optionally including only the specified properties if a replacer array
    	 * is specified.
    	 *
    	 * @memberof EJSON
    	 * @param {object} value The value to convert to extended JSON
    	 * @param {function|array} [replacer] A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string
    	 * @param {string|number} [space] A String or Number object that's used to insert white space into the output JSON string for readability purposes.
    	 * @param {object} [options] Optional settings
    	 * @param {boolean} [options.relaxed=true] Enabled Extended JSON's `relaxed` mode
    	 * @returns {string}
    	 *
    	 * @example
    	 * const { EJSON } = require('bson');
    	 * const Int32 = require('mongodb').Int32;
    	 * const doc = { int32: new Int32(10) };
    	 *
    	 * // prints '{"int32":{"$numberInt":"10"}}'
    	 * console.log(EJSON.stringify(doc, { relaxed: false }));
    	 *
    	 * // prints '{"int32":10}'
    	 * console.log(EJSON.stringify(doc));
    	 */

    	function stringify(value, replacer, space, options) {
    	  if (space != null && _typeof$2(space) === 'object') {
    	    options = space;
    	    space = 0;
    	  }

    	  if (replacer != null && _typeof$2(replacer) === 'object' && !Array.isArray(replacer)) {
    	    options = replacer;
    	    replacer = null;
    	    space = 0;
    	  }

    	  options = Object.assign({}, {
    	    relaxed: true
    	  }, options);
    	  var doc = Array.isArray(value) ? serializeArray(value, options) : serializeDocument(value, options);
    	  return JSON.stringify(doc, replacer, space);
    	}
    	/**
    	 * Serializes an object to an Extended JSON string, and reparse it as a JavaScript object.
    	 *
    	 * @memberof EJSON
    	 * @param {object} bson The object to serialize
    	 * @param {object} [options] Optional settings passed to the `stringify` function
    	 * @return {object}
    	 */


    	function serialize(bson, options) {
    	  options = options || {};
    	  return JSON.parse(stringify(bson, options));
    	}
    	/**
    	 * Deserializes an Extended JSON object into a plain JavaScript object with native/BSON types
    	 *
    	 * @memberof EJSON
    	 * @param {object} ejson The Extended JSON object to deserialize
    	 * @param {object} [options] Optional settings passed to the parse method
    	 * @return {object}
    	 */


    	function deserialize(ejson, options) {
    	  options = options || {};
    	  return parse(JSON.stringify(ejson), options);
    	}

    	function serializeArray(array, options) {
    	  return array.map(function (v) {
    	    return serializeValue(v, options);
    	  });
    	}

    	function getISOString(date) {
    	  var isoStr = date.toISOString(); // we should only show milliseconds in timestamp if they're non-zero

    	  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + 'Z';
    	}

    	function serializeValue(value, options) {
    	  if (Array.isArray(value)) return serializeArray(value, options);
    	  if (value === undefined) return null;

    	  if (value instanceof Date) {
    	    var dateNum = value.getTime(),
    	        // is it in year range 1970-9999?
    	    inRange = dateNum > -1 && dateNum < 253402318800000;
    	    return options.relaxed && inRange ? {
    	      $date: getISOString(value)
    	    } : {
    	      $date: {
    	        $numberLong: value.getTime().toString()
    	      }
    	    };
    	  }

    	  if (typeof value === 'number' && !options.relaxed) {
    	    // it's an integer
    	    if (Math.floor(value) === value) {
    	      var int32Range = value >= BSON_INT32_MIN && value <= BSON_INT32_MAX,
    	          int64Range = value >= BSON_INT64_MIN && value <= BSON_INT64_MAX; // interpret as being of the smallest BSON integer type that can represent the number exactly

    	      if (int32Range) return {
    	        $numberInt: value.toString()
    	      };
    	      if (int64Range) return {
    	        $numberLong: value.toString()
    	      };
    	    }

    	    return {
    	      $numberDouble: value.toString()
    	    };
    	  }

    	  if (value instanceof RegExp) {
    	    var flags = value.flags;

    	    if (flags === undefined) {
    	      flags = value.toString().match(/[gimuy]*$/)[0];
    	    }

    	    var rx = new regexp(value.source, flags);
    	    return rx.toExtendedJSON();
    	  }

    	  if (value != null && _typeof$2(value) === 'object') return serializeDocument(value, options);
    	  return value;
    	}

    	var BSON_TYPE_MAPPINGS = {
    	  Binary: function Binary(o) {
    	    return new binary(o.value(), o.subtype);
    	  },
    	  Code: function Code(o) {
    	    return new code(o.code, o.scope);
    	  },
    	  DBRef: function DBRef(o) {
    	    return new db_ref(o.collection || o.namespace, o.oid, o.db, o.fields);
    	  },
    	  // "namespace" for 1.x library backwards compat
    	  Decimal128: function Decimal128(o) {
    	    return new decimal128(o.bytes);
    	  },
    	  Double: function Double(o) {
    	    return new double_1(o.value);
    	  },
    	  Int32: function Int32(o) {
    	    return new int_32(o.value);
    	  },
    	  Long: function Long(o) {
    	    return long_1.fromBits( // underscore variants for 1.x backwards compatibility
    	    o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_);
    	  },
    	  MaxKey: function MaxKey() {
    	    return new max_key();
    	  },
    	  MinKey: function MinKey() {
    	    return new min_key();
    	  },
    	  ObjectID: function ObjectID(o) {
    	    return new objectid(o);
    	  },
    	  ObjectId: function ObjectId(o) {
    	    return new objectid(o);
    	  },
    	  // support 4.0.0/4.0.1 before _bsontype was reverted back to ObjectID
    	  BSONRegExp: function BSONRegExp(o) {
    	    return new regexp(o.pattern, o.options);
    	  },
    	  Symbol: function Symbol(o) {
    	    return new symbol(o.value);
    	  },
    	  Timestamp: function Timestamp(o) {
    	    return timestamp.fromBits(o.low, o.high);
    	  }
    	};

    	function serializeDocument(doc, options) {
    	  if (doc == null || _typeof$2(doc) !== 'object') throw new Error('not an object instance');
    	  var bsontype = doc._bsontype;

    	  if (typeof bsontype === 'undefined') {
    	    // It's a regular object. Recursively serialize its property values.
    	    var _doc = {};

    	    for (var name in doc) {
    	      _doc[name] = serializeValue(doc[name], options);
    	    }

    	    return _doc;
    	  } else if (typeof bsontype === 'string') {
    	    // the "document" is really just a BSON type object
    	    var _doc2 = doc;

    	    if (typeof _doc2.toExtendedJSON !== 'function') {
    	      // There's no EJSON serialization function on the object. It's probably an
    	      // object created by a previous version of this library (or another library)
    	      // that's duck-typing objects to look like they were generated by this library).
    	      // Copy the object into this library's version of that type.
    	      var mapper = BSON_TYPE_MAPPINGS[bsontype];

    	      if (!mapper) {
    	        throw new TypeError('Unrecognized or invalid _bsontype: ' + bsontype);
    	      }

    	      _doc2 = mapper(_doc2);
    	    } // Two BSON types may have nested objects that may need to be serialized too


    	    if (bsontype === 'Code' && _doc2.scope) {
    	      _doc2 = new code(_doc2.code, serializeValue(_doc2.scope, options));
    	    } else if (bsontype === 'DBRef' && _doc2.oid) {
    	      _doc2 = new db_ref(_doc2.collection, serializeValue(_doc2.oid, options), _doc2.db, _doc2.fields);
    	    }

    	    return _doc2.toExtendedJSON(options);
    	  } else {
    	    throw new Error('_bsontype must be a string, but was: ' + _typeof$2(bsontype));
    	  }
    	}

    	var extended_json = {
    	  parse: parse,
    	  deserialize: deserialize,
    	  serialize: serialize,
    	  stringify: stringify
    	};

    	var FIRST_BIT = 0x80;
    	var FIRST_TWO_BITS = 0xc0;
    	var FIRST_THREE_BITS = 0xe0;
    	var FIRST_FOUR_BITS = 0xf0;
    	var FIRST_FIVE_BITS = 0xf8;
    	var TWO_BIT_CHAR = 0xc0;
    	var THREE_BIT_CHAR = 0xe0;
    	var FOUR_BIT_CHAR = 0xf0;
    	var CONTINUING_CHAR = 0x80;
    	/**
    	 * Determines if the passed in bytes are valid utf8
    	 * @param {Buffer|Uint8Array} bytes An array of 8-bit bytes. Must be indexable and have length property
    	 * @param {Number} start The index to start validating
    	 * @param {Number} end The index to end validating
    	 * @returns {boolean} True if valid utf8
    	 */

    	function validateUtf8(bytes, start, end) {
    	  var continuation = 0;

    	  for (var i = start; i < end; i += 1) {
    	    var byte = bytes[i];

    	    if (continuation) {
    	      if ((byte & FIRST_TWO_BITS) !== CONTINUING_CHAR) {
    	        return false;
    	      }

    	      continuation -= 1;
    	    } else if (byte & FIRST_BIT) {
    	      if ((byte & FIRST_THREE_BITS) === TWO_BIT_CHAR) {
    	        continuation = 1;
    	      } else if ((byte & FIRST_FOUR_BITS) === THREE_BIT_CHAR) {
    	        continuation = 2;
    	      } else if ((byte & FIRST_FIVE_BITS) === FOUR_BIT_CHAR) {
    	        continuation = 3;
    	      } else {
    	        return false;
    	      }
    	    }
    	  }

    	  return !continuation;
    	}

    	var validateUtf8_1 = validateUtf8;
    	var validate_utf8 = {
    	  validateUtf8: validateUtf8_1
    	};

    	var Buffer$4 = buffer.Buffer;
    	var validateUtf8$1 = validate_utf8.validateUtf8; // Internal long versions

    	var JS_INT_MAX_LONG = long_1.fromNumber(constants.JS_INT_MAX);
    	var JS_INT_MIN_LONG = long_1.fromNumber(constants.JS_INT_MIN);
    	var functionCache = {};

    	function deserialize$1(buffer$$1, options, isArray) {
    	  options = options == null ? {} : options;
    	  var index = options && options.index ? options.index : 0; // Read the document size

    	  var size = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

    	  if (size < 5) {
    	    throw new Error("bson size must be >= 5, is ".concat(size));
    	  }

    	  if (options.allowObjectSmallerThanBufferSize && buffer$$1.length < size) {
    	    throw new Error("buffer length ".concat(buffer$$1.length, " must be >= bson size ").concat(size));
    	  }

    	  if (!options.allowObjectSmallerThanBufferSize && buffer$$1.length !== size) {
    	    throw new Error("buffer length ".concat(buffer$$1.length, " must === bson size ").concat(size));
    	  }

    	  if (size + index > buffer$$1.length) {
    	    throw new Error("(bson size ".concat(size, " + options.index ").concat(index, " must be <= buffer length ").concat(Buffer$4.byteLength(buffer$$1), ")"));
    	  } // Illegal end value


    	  if (buffer$$1[index + size - 1] !== 0) {
    	    throw new Error("One object, sized correctly, with a spot for an EOO, but the EOO isn't 0x00");
    	  } // Start deserializtion


    	  return deserializeObject(buffer$$1, index, options, isArray);
    	}

    	function deserializeObject(buffer$$1, index, options, isArray) {
    	  var evalFunctions = options['evalFunctions'] == null ? false : options['evalFunctions'];
    	  var cacheFunctions = options['cacheFunctions'] == null ? false : options['cacheFunctions'];
    	  var cacheFunctionsCrc32 = options['cacheFunctionsCrc32'] == null ? false : options['cacheFunctionsCrc32'];
    	  if (!cacheFunctionsCrc32) var crc32 = null;
    	  var fieldsAsRaw = options['fieldsAsRaw'] == null ? null : options['fieldsAsRaw']; // Return raw bson buffer instead of parsing it

    	  var raw = options['raw'] == null ? false : options['raw']; // Return BSONRegExp objects instead of native regular expressions

    	  var bsonRegExp = typeof options['bsonRegExp'] === 'boolean' ? options['bsonRegExp'] : false; // Controls the promotion of values vs wrapper classes

    	  var promoteBuffers = options['promoteBuffers'] == null ? false : options['promoteBuffers'];
    	  var promoteLongs = options['promoteLongs'] == null ? true : options['promoteLongs'];
    	  var promoteValues = options['promoteValues'] == null ? true : options['promoteValues']; // Set the start index

    	  var startIndex = index; // Validate that we have at least 4 bytes of buffer

    	  if (buffer$$1.length < 5) throw new Error('corrupt bson message < 5 bytes long'); // Read the document size

    	  var size = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Ensure buffer is valid size

    	  if (size < 5 || size > buffer$$1.length) throw new Error('corrupt bson message'); // Create holding object

    	  var object = isArray ? [] : {}; // Used for arrays to skip having to perform utf8 decoding

    	  var arrayIndex = 0;
    	  var done = false; // While we have more left data left keep parsing

    	  while (!done) {
    	    // Read the type
    	    var elementType = buffer$$1[index++]; // If we get a zero it's the last byte, exit

    	    if (elementType === 0) break; // Get the start search index

    	    var i = index; // Locate the end of the c string

    	    while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
    	      i++;
    	    } // If are at the end of the buffer there is a problem with the document


    	    if (i >= Buffer$4.byteLength(buffer$$1)) throw new Error('Bad BSON Document: illegal CString');
    	    var name = isArray ? arrayIndex++ : buffer$$1.toString('utf8', index, i);
    	    index = i + 1;

    	    if (elementType === constants.BSON_DATA_STRING) {
    	      var stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	      if (stringSize <= 0 || stringSize > buffer$$1.length - index || buffer$$1[index + stringSize - 1] !== 0) throw new Error('bad string length in bson');

    	      if (!validateUtf8$1(buffer$$1, index, index + stringSize - 1)) {
    	        throw new Error('Invalid UTF-8 string in BSON document');
    	      }

    	      var s = buffer$$1.toString('utf8', index, index + stringSize - 1);
    	      object[name] = s;
    	      index = index + stringSize;
    	    } else if (elementType === constants.BSON_DATA_OID) {
    	      var oid = Buffer$4.alloc(12);
    	      buffer$$1.copy(oid, 0, index, index + 12);
    	      object[name] = new objectid(oid);
    	      index = index + 12;
    	    } else if (elementType === constants.BSON_DATA_INT && promoteValues === false) {
    	      object[name] = new int_32(buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24);
    	    } else if (elementType === constants.BSON_DATA_INT) {
    	      object[name] = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	    } else if (elementType === constants.BSON_DATA_NUMBER && promoteValues === false) {
    	      object[name] = new double_1(buffer$$1.readDoubleLE(index));
    	      index = index + 8;
    	    } else if (elementType === constants.BSON_DATA_NUMBER) {
    	      object[name] = buffer$$1.readDoubleLE(index);
    	      index = index + 8;
    	    } else if (elementType === constants.BSON_DATA_DATE) {
    	      var lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	      var highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	      object[name] = new Date(new long_1(lowBits, highBits).toNumber());
    	    } else if (elementType === constants.BSON_DATA_BOOLEAN) {
    	      if (buffer$$1[index] !== 0 && buffer$$1[index] !== 1) throw new Error('illegal boolean type value');
    	      object[name] = buffer$$1[index++] === 1;
    	    } else if (elementType === constants.BSON_DATA_OBJECT) {
    	      var _index = index;
    	      var objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;
    	      if (objectSize <= 0 || objectSize > buffer$$1.length - index) throw new Error('bad embedded document length in bson'); // We have a raw value

    	      if (raw) {
    	        object[name] = buffer$$1.slice(index, index + objectSize);
    	      } else {
    	        object[name] = deserializeObject(buffer$$1, _index, options, false);
    	      }

    	      index = index + objectSize;
    	    } else if (elementType === constants.BSON_DATA_ARRAY) {
    	      var _index2 = index;

    	      var _objectSize = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24;

    	      var arrayOptions = options; // Stop index

    	      var stopIndex = index + _objectSize; // All elements of array to be returned as raw bson

    	      if (fieldsAsRaw && fieldsAsRaw[name]) {
    	        arrayOptions = {};

    	        for (var n in options) {
    	          arrayOptions[n] = options[n];
    	        }

    	        arrayOptions['raw'] = true;
    	      }

    	      object[name] = deserializeObject(buffer$$1, _index2, arrayOptions, true);
    	      index = index + _objectSize;
    	      if (buffer$$1[index - 1] !== 0) throw new Error('invalid array terminator byte');
    	      if (index !== stopIndex) throw new Error('corrupted array bson');
    	    } else if (elementType === constants.BSON_DATA_UNDEFINED) {
    	      object[name] = undefined;
    	    } else if (elementType === constants.BSON_DATA_NULL) {
    	      object[name] = null;
    	    } else if (elementType === constants.BSON_DATA_LONG) {
    	      // Unpack the low and high bits
    	      var _lowBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

    	      var _highBits = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

    	      var long$$1 = new long_1(_lowBits, _highBits); // Promote the long if possible

    	      if (promoteLongs && promoteValues === true) {
    	        object[name] = long$$1.lessThanOrEqual(JS_INT_MAX_LONG) && long$$1.greaterThanOrEqual(JS_INT_MIN_LONG) ? long$$1.toNumber() : long$$1;
    	      } else {
    	        object[name] = long$$1;
    	      }
    	    } else if (elementType === constants.BSON_DATA_DECIMAL128) {
    	      // Buffer to contain the decimal bytes
    	      var bytes = Buffer$4.alloc(16); // Copy the next 16 bytes into the bytes buffer

    	      buffer$$1.copy(bytes, 0, index, index + 16); // Update index

    	      index = index + 16; // Assign the new Decimal128 value

    	      var decimal128$$1 = new decimal128(bytes); // If we have an alternative mapper use that

    	      object[name] = decimal128$$1.toObject ? decimal128$$1.toObject() : decimal128$$1;
    	    } else if (elementType === constants.BSON_DATA_BINARY) {
    	      var binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	      var totalBinarySize = binarySize;
    	      var subType = buffer$$1[index++]; // Did we have a negative binary size, throw

    	      if (binarySize < 0) throw new Error('Negative binary type element size found'); // Is the length longer than the document

    	      if (binarySize > Buffer$4.byteLength(buffer$$1)) throw new Error('Binary type size larger than document size'); // Decode as raw Buffer object if options specifies it

    	      if (buffer$$1['slice'] != null) {
    	        // If we have subtype 2 skip the 4 bytes for the size
    	        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
    	          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
    	          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
    	          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
    	        }

    	        if (promoteBuffers && promoteValues) {
    	          object[name] = buffer$$1.slice(index, index + binarySize);
    	        } else {
    	          object[name] = new binary(buffer$$1.slice(index, index + binarySize), subType);
    	        }
    	      } else {
    	        var _buffer = typeof Uint8Array !== 'undefined' ? new Uint8Array(new ArrayBuffer(binarySize)) : new Array(binarySize); // If we have subtype 2 skip the 4 bytes for the size


    	        if (subType === binary.SUBTYPE_BYTE_ARRAY) {
    	          binarySize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;
    	          if (binarySize < 0) throw new Error('Negative binary type element size found for subtype 0x02');
    	          if (binarySize > totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to long binary size');
    	          if (binarySize < totalBinarySize - 4) throw new Error('Binary type with subtype 0x02 contains to short binary size');
    	        } // Copy the data


    	        for (i = 0; i < binarySize; i++) {
    	          _buffer[i] = buffer$$1[index + i];
    	        }

    	        if (promoteBuffers && promoteValues) {
    	          object[name] = _buffer;
    	        } else {
    	          object[name] = new binary(_buffer, subType);
    	        }
    	      } // Update the index


    	      index = index + binarySize;
    	    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === false) {
    	      // Get the start search index
    	      i = index; // Locate the end of the c string

    	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
    	        i++;
    	      } // If are at the end of the buffer there is a problem with the document


    	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

    	      var source = buffer$$1.toString('utf8', index, i); // Create the regexp

    	      index = i + 1; // Get the start search index

    	      i = index; // Locate the end of the c string

    	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
    	        i++;
    	      } // If are at the end of the buffer there is a problem with the document


    	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

    	      var regExpOptions = buffer$$1.toString('utf8', index, i);
    	      index = i + 1; // For each option add the corresponding one for javascript

    	      var optionsArray = new Array(regExpOptions.length); // Parse options

    	      for (i = 0; i < regExpOptions.length; i++) {
    	        switch (regExpOptions[i]) {
    	          case 'm':
    	            optionsArray[i] = 'm';
    	            break;

    	          case 's':
    	            optionsArray[i] = 'g';
    	            break;

    	          case 'i':
    	            optionsArray[i] = 'i';
    	            break;
    	        }
    	      }

    	      object[name] = new RegExp(source, optionsArray.join(''));
    	    } else if (elementType === constants.BSON_DATA_REGEXP && bsonRegExp === true) {
    	      // Get the start search index
    	      i = index; // Locate the end of the c string

    	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
    	        i++;
    	      } // If are at the end of the buffer there is a problem with the document


    	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

    	      var _source = buffer$$1.toString('utf8', index, i);

    	      index = i + 1; // Get the start search index

    	      i = index; // Locate the end of the c string

    	      while (buffer$$1[i] !== 0x00 && i < buffer$$1.length) {
    	        i++;
    	      } // If are at the end of the buffer there is a problem with the document


    	      if (i >= buffer$$1.length) throw new Error('Bad BSON Document: illegal CString'); // Return the C string

    	      var _regExpOptions = buffer$$1.toString('utf8', index, i);

    	      index = i + 1; // Set the object

    	      object[name] = new regexp(_source, _regExpOptions);
    	    } else if (elementType === constants.BSON_DATA_SYMBOL) {
    	      var _stringSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

    	      if (_stringSize <= 0 || _stringSize > buffer$$1.length - index || buffer$$1[index + _stringSize - 1] !== 0) throw new Error('bad string length in bson'); // symbol is deprecated - upgrade to string.

    	      object[name] = buffer$$1.toString('utf8', index, index + _stringSize - 1);
    	      index = index + _stringSize;
    	    } else if (elementType === constants.BSON_DATA_TIMESTAMP) {
    	      var _lowBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

    	      var _highBits2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

    	      object[name] = new timestamp(_lowBits2, _highBits2);
    	    } else if (elementType === constants.BSON_DATA_MIN_KEY) {
    	      object[name] = new min_key();
    	    } else if (elementType === constants.BSON_DATA_MAX_KEY) {
    	      object[name] = new max_key();
    	    } else if (elementType === constants.BSON_DATA_CODE) {
    	      var _stringSize2 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24;

    	      if (_stringSize2 <= 0 || _stringSize2 > buffer$$1.length - index || buffer$$1[index + _stringSize2 - 1] !== 0) throw new Error('bad string length in bson');
    	      var functionString = buffer$$1.toString('utf8', index, index + _stringSize2 - 1); // If we are evaluating the functions

    	      if (evalFunctions) {
    	        // If we have cache enabled let's look for the md5 of the function in the cache
    	        if (cacheFunctions) {
    	          var hash = cacheFunctionsCrc32 ? crc32(functionString) : functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval

    	          object[name] = isolateEvalWithHash(functionCache, hash, functionString, object);
    	        } else {
    	          object[name] = isolateEval(functionString);
    	        }
    	      } else {
    	        object[name] = new code(functionString);
    	      } // Update parse index position


    	      index = index + _stringSize2;
    	    } else if (elementType === constants.BSON_DATA_CODE_W_SCOPE) {
    	      var totalSize = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Element cannot be shorter than totalSize + stringSize + documentSize + terminator

    	      if (totalSize < 4 + 4 + 4 + 1) {
    	        throw new Error('code_w_scope total size shorter minimum expected length');
    	      } // Get the code string size


    	      var _stringSize3 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


    	      if (_stringSize3 <= 0 || _stringSize3 > buffer$$1.length - index || buffer$$1[index + _stringSize3 - 1] !== 0) throw new Error('bad string length in bson'); // Javascript function

    	      var _functionString = buffer$$1.toString('utf8', index, index + _stringSize3 - 1); // Update parse index position


    	      index = index + _stringSize3; // Parse the element

    	      var _index3 = index; // Decode the size of the object document

    	      var _objectSize2 = buffer$$1[index] | buffer$$1[index + 1] << 8 | buffer$$1[index + 2] << 16 | buffer$$1[index + 3] << 24; // Decode the scope object


    	      var scopeObject = deserializeObject(buffer$$1, _index3, options, false); // Adjust the index

    	      index = index + _objectSize2; // Check if field length is to short

    	      if (totalSize < 4 + 4 + _objectSize2 + _stringSize3) {
    	        throw new Error('code_w_scope total size is to short, truncating scope');
    	      } // Check if totalSize field is to long


    	      if (totalSize > 4 + 4 + _objectSize2 + _stringSize3) {
    	        throw new Error('code_w_scope total size is to long, clips outer document');
    	      } // If we are evaluating the functions


    	      if (evalFunctions) {
    	        // If we have cache enabled let's look for the md5 of the function in the cache
    	        if (cacheFunctions) {
    	          var _hash = cacheFunctionsCrc32 ? crc32(_functionString) : _functionString; // Got to do this to avoid V8 deoptimizing the call due to finding eval


    	          object[name] = isolateEvalWithHash(functionCache, _hash, _functionString, object);
    	        } else {
    	          object[name] = isolateEval(_functionString);
    	        }

    	        object[name].scope = scopeObject;
    	      } else {
    	        object[name] = new code(_functionString, scopeObject);
    	      }
    	    } else if (elementType === constants.BSON_DATA_DBPOINTER) {
    	      // Get the code string size
    	      var _stringSize4 = buffer$$1[index++] | buffer$$1[index++] << 8 | buffer$$1[index++] << 16 | buffer$$1[index++] << 24; // Check if we have a valid string


    	      if (_stringSize4 <= 0 || _stringSize4 > buffer$$1.length - index || buffer$$1[index + _stringSize4 - 1] !== 0) throw new Error('bad string length in bson'); // Namespace

    	      if (!validateUtf8$1(buffer$$1, index, index + _stringSize4 - 1)) {
    	        throw new Error('Invalid UTF-8 string in BSON document');
    	      }

    	      var namespace = buffer$$1.toString('utf8', index, index + _stringSize4 - 1); // Update parse index position

    	      index = index + _stringSize4; // Read the oid

    	      var oidBuffer = Buffer$4.alloc(12);
    	      buffer$$1.copy(oidBuffer, 0, index, index + 12);

    	      var _oid = new objectid(oidBuffer); // Update the index


    	      index = index + 12; // Upgrade to DBRef type

    	      object[name] = new db_ref(namespace, _oid);
    	    } else {
    	      throw new Error('Detected unknown BSON type ' + elementType.toString(16) + ' for fieldname "' + name + '", are you using the latest BSON parser?');
    	    }
    	  } // Check if the deserialization was against a valid array/object


    	  if (size !== index - startIndex) {
    	    if (isArray) throw new Error('corrupt array bson');
    	    throw new Error('corrupt object bson');
    	  } // check if object's $ keys are those of a DBRef


    	  var dollarKeys = Object.keys(object).filter(function (k) {
    	    return k.startsWith('$');
    	  });
    	  var valid = true;
    	  dollarKeys.forEach(function (k) {
    	    if (['$ref', '$id', '$db'].indexOf(k) === -1) valid = false;
    	  }); // if a $key not in "$ref", "$id", "$db", don't make a DBRef

    	  if (!valid) return object;

    	  if (object['$id'] != null && object['$ref'] != null) {
    	    var copy = Object.assign({}, object);
    	    delete copy.$ref;
    	    delete copy.$id;
    	    delete copy.$db;
    	    return new db_ref(object.$ref, object.$id, object.$db || null, copy);
    	  }

    	  return object;
    	}
    	/**
    	 * Ensure eval is isolated.
    	 *
    	 * @ignore
    	 * @api private
    	 */


    	function isolateEvalWithHash(functionCache, hash, functionString, object) {
    	  // Contains the value we are going to set
    	  var value = null; // Check for cache hit, eval if missing and return cached function

    	  if (functionCache[hash] == null) {
    	    eval('value = ' + functionString);
    	    functionCache[hash] = value;
    	  } // Set the object


    	  return functionCache[hash].bind(object);
    	}
    	/**
    	 * Ensure eval is isolated.
    	 *
    	 * @ignore
    	 * @api private
    	 */


    	function isolateEval(functionString) {
    	  // Contains the value we are going to set
    	  var value = null; // Eval the function

    	  eval('value = ' + functionString);
    	  return value;
    	}

    	var deserializer = deserialize$1;

    	// All rights reserved.
    	//
    	// Redistribution and use in source and binary forms, with or without
    	// modification, are permitted provided that the following conditions are met:
    	//
    	//  * Redistributions of source code must retain the above copyright notice,
    	//    this list of conditions and the following disclaimer.
    	//
    	//  * Redistributions in binary form must reproduce the above copyright notice,
    	//    this list of conditions and the following disclaimer in the documentation
    	//    and/or other materials provided with the distribution.
    	//
    	//  * Neither the name of Fair Oaks Labs, Inc. nor the names of its contributors
    	//    may be used to endorse or promote products derived from this software
    	//    without specific prior written permission.
    	//
    	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    	// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
    	// ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
    	// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
    	// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
    	// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
    	// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
    	// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
    	// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
    	// POSSIBILITY OF SUCH DAMAGE.
    	//
    	//
    	// Modifications to writeIEEE754 to support negative zeroes made by Brian White

    	function readIEEE754(buffer$$1, offset, endian, mLen, nBytes) {
    	  var e,
    	      m,
    	      bBE = endian === 'big',
    	      eLen = nBytes * 8 - mLen - 1,
    	      eMax = (1 << eLen) - 1,
    	      eBias = eMax >> 1,
    	      nBits = -7,
    	      i = bBE ? 0 : nBytes - 1,
    	      d = bBE ? 1 : -1,
    	      s = buffer$$1[offset + i];
    	  i += d;
    	  e = s & (1 << -nBits) - 1;
    	  s >>= -nBits;
    	  nBits += eLen;

    	  for (; nBits > 0; e = e * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
    	  }

    	  m = e & (1 << -nBits) - 1;
    	  e >>= -nBits;
    	  nBits += mLen;

    	  for (; nBits > 0; m = m * 256 + buffer$$1[offset + i], i += d, nBits -= 8) {
    	  }

    	  if (e === 0) {
    	    e = 1 - eBias;
    	  } else if (e === eMax) {
    	    return m ? NaN : (s ? -1 : 1) * Infinity;
    	  } else {
    	    m = m + Math.pow(2, mLen);
    	    e = e - eBias;
    	  }

    	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
    	}

    	function writeIEEE754(buffer$$1, value, offset, endian, mLen, nBytes) {
    	  var e,
    	      m,
    	      c,
    	      bBE = endian === 'big',
    	      eLen = nBytes * 8 - mLen - 1,
    	      eMax = (1 << eLen) - 1,
    	      eBias = eMax >> 1,
    	      rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    	      i = bBE ? nBytes - 1 : 0,
    	      d = bBE ? -1 : 1,
    	      s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    	  value = Math.abs(value);

    	  if (isNaN(value) || value === Infinity) {
    	    m = isNaN(value) ? 1 : 0;
    	    e = eMax;
    	  } else {
    	    e = Math.floor(Math.log(value) / Math.LN2);

    	    if (value * (c = Math.pow(2, -e)) < 1) {
    	      e--;
    	      c *= 2;
    	    }

    	    if (e + eBias >= 1) {
    	      value += rt / c;
    	    } else {
    	      value += rt * Math.pow(2, 1 - eBias);
    	    }

    	    if (value * c >= 2) {
    	      e++;
    	      c /= 2;
    	    }

    	    if (e + eBias >= eMax) {
    	      m = 0;
    	      e = eMax;
    	    } else if (e + eBias >= 1) {
    	      m = (value * c - 1) * Math.pow(2, mLen);
    	      e = e + eBias;
    	    } else {
    	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
    	      e = 0;
    	    }
    	  }

    	  if (isNaN(value)) m = 0;

    	  while (mLen >= 8) {
    	    buffer$$1[offset + i] = m & 0xff;
    	    i += d;
    	    m /= 256;
    	    mLen -= 8;
    	  }

    	  e = e << mLen | m;
    	  if (isNaN(value)) e += 8;
    	  eLen += mLen;

    	  while (eLen > 0) {
    	    buffer$$1[offset + i] = e & 0xff;
    	    i += d;
    	    e /= 256;
    	    eLen -= 8;
    	  }

    	  buffer$$1[offset + i - d] |= s * 128;
    	}

    	var float_parser = {
    	  readIEEE754: readIEEE754,
    	  writeIEEE754: writeIEEE754
    	};

    	function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

    	var Buffer$5 = buffer.Buffer;
    	var writeIEEE754$1 = float_parser.writeIEEE754;
    	var normalizedFunctionString$1 = utils.normalizedFunctionString;
    	var regexp$1 = /\x00/; // eslint-disable-line no-control-regex

    	var ignoreKeys = new Set(['$db', '$ref', '$id', '$clusterTime']); // To ensure that 0.4 of node works correctly

    	var isDate$1 = function isDate(d) {
    	  return _typeof$3(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
    	};

    	var isRegExp$1 = function isRegExp(d) {
    	  return Object.prototype.toString.call(d) === '[object RegExp]';
    	};

    	function serializeString(buffer$$1, key, value, index, isArray) {
    	  // Encode String type
    	  buffer$$1[index++] = constants.BSON_DATA_STRING; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes + 1;
    	  buffer$$1[index - 1] = 0; // Write the string

    	  var size = buffer$$1.write(value, index + 4, 'utf8'); // Write the size of the string to buffer

    	  buffer$$1[index + 3] = size + 1 >> 24 & 0xff;
    	  buffer$$1[index + 2] = size + 1 >> 16 & 0xff;
    	  buffer$$1[index + 1] = size + 1 >> 8 & 0xff;
    	  buffer$$1[index] = size + 1 & 0xff; // Update index

    	  index = index + 4 + size; // Write zero

    	  buffer$$1[index++] = 0;
    	  return index;
    	}

    	function serializeNumber(buffer$$1, key, value, index, isArray) {
    	  // We have an integer value
    	  if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
    	    // If the value fits in 32 bits encode as int, if it fits in a double
    	    // encode it as a double, otherwise long
    	    if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
    	      // Set int type 32 bits or less
    	      buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

    	      var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	      index = index + numberOfWrittenBytes;
    	      buffer$$1[index++] = 0; // Write the int value

    	      buffer$$1[index++] = value & 0xff;
    	      buffer$$1[index++] = value >> 8 & 0xff;
    	      buffer$$1[index++] = value >> 16 & 0xff;
    	      buffer$$1[index++] = value >> 24 & 0xff;
    	    } else if (value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
    	      // Encode as double
    	      buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

    	      var _numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    	      index = index + _numberOfWrittenBytes;
    	      buffer$$1[index++] = 0; // Write float

    	      writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

    	      index = index + 8;
    	    } else {
    	      // Set long type
    	      buffer$$1[index++] = constants.BSON_DATA_LONG; // Number of written bytes

    	      var _numberOfWrittenBytes2 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    	      index = index + _numberOfWrittenBytes2;
    	      buffer$$1[index++] = 0;
    	      var longVal = long_1.fromNumber(value);
    	      var lowBits = longVal.getLowBits();
    	      var highBits = longVal.getHighBits(); // Encode low bits

    	      buffer$$1[index++] = lowBits & 0xff;
    	      buffer$$1[index++] = lowBits >> 8 & 0xff;
    	      buffer$$1[index++] = lowBits >> 16 & 0xff;
    	      buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

    	      buffer$$1[index++] = highBits & 0xff;
    	      buffer$$1[index++] = highBits >> 8 & 0xff;
    	      buffer$$1[index++] = highBits >> 16 & 0xff;
    	      buffer$$1[index++] = highBits >> 24 & 0xff;
    	    }
    	  } else {
    	    // Encode as double
    	    buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

    	    var _numberOfWrittenBytes3 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    	    index = index + _numberOfWrittenBytes3;
    	    buffer$$1[index++] = 0; // Write float

    	    writeIEEE754$1(buffer$$1, value, index, 'little', 52, 8); // Ajust index

    	    index = index + 8;
    	  }

    	  return index;
    	}

    	function serializeNull(buffer$$1, key, value, index, isArray) {
    	  // Set long type
    	  buffer$$1[index++] = constants.BSON_DATA_NULL; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0;
    	  return index;
    	}

    	function serializeBoolean(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_BOOLEAN; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Encode the boolean value

    	  buffer$$1[index++] = value ? 1 : 0;
    	  return index;
    	}

    	function serializeDate(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_DATE; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write the date

    	  var dateInMilis = long_1.fromNumber(value.getTime());
    	  var lowBits = dateInMilis.getLowBits();
    	  var highBits = dateInMilis.getHighBits(); // Encode low bits

    	  buffer$$1[index++] = lowBits & 0xff;
    	  buffer$$1[index++] = lowBits >> 8 & 0xff;
    	  buffer$$1[index++] = lowBits >> 16 & 0xff;
    	  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

    	  buffer$$1[index++] = highBits & 0xff;
    	  buffer$$1[index++] = highBits >> 8 & 0xff;
    	  buffer$$1[index++] = highBits >> 16 & 0xff;
    	  buffer$$1[index++] = highBits >> 24 & 0xff;
    	  return index;
    	}

    	function serializeRegExp(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0;

    	  if (value.source && value.source.match(regexp$1) != null) {
    	    throw Error('value ' + value.source + ' must not contain null bytes');
    	  } // Adjust the index


    	  index = index + buffer$$1.write(value.source, index, 'utf8'); // Write zero

    	  buffer$$1[index++] = 0x00; // Write the parameters

    	  if (value.ignoreCase) buffer$$1[index++] = 0x69; // i

    	  if (value.global) buffer$$1[index++] = 0x73; // s

    	  if (value.multiline) buffer$$1[index++] = 0x6d; // m
    	  // Add ending zero

    	  buffer$$1[index++] = 0x00;
    	  return index;
    	}

    	function serializeBSONRegExp(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_REGEXP; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Check the pattern for 0 bytes

    	  if (value.pattern.match(regexp$1) != null) {
    	    // The BSON spec doesn't allow keys with null bytes because keys are
    	    // null-terminated.
    	    throw Error('pattern ' + value.pattern + ' must not contain null bytes');
    	  } // Adjust the index


    	  index = index + buffer$$1.write(value.pattern, index, 'utf8'); // Write zero

    	  buffer$$1[index++] = 0x00; // Write the options

    	  index = index + buffer$$1.write(value.options.split('').sort().join(''), index, 'utf8'); // Add ending zero

    	  buffer$$1[index++] = 0x00;
    	  return index;
    	}

    	function serializeMinMax(buffer$$1, key, value, index, isArray) {
    	  // Write the type of either min or max key
    	  if (value === null) {
    	    buffer$$1[index++] = constants.BSON_DATA_NULL;
    	  } else if (value._bsontype === 'MinKey') {
    	    buffer$$1[index++] = constants.BSON_DATA_MIN_KEY;
    	  } else {
    	    buffer$$1[index++] = constants.BSON_DATA_MAX_KEY;
    	  } // Number of written bytes


    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0;
    	  return index;
    	}

    	function serializeObjectId(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_OID; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write the objectId into the shared buffer

    	  if (typeof value.id === 'string') {
    	    buffer$$1.write(value.id, index, 'binary');
    	  } else if (value.id && value.id.copy) {
    	    value.id.copy(buffer$$1, index, 0, 12);
    	  } else {
    	    throw new TypeError('object [' + JSON.stringify(value) + '] is not a valid ObjectId');
    	  } // Ajust index


    	  return index + 12;
    	}

    	function serializeBuffer(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Get size of the buffer (current write point)

    	  var size = value.length; // Write the size of the string to buffer

    	  buffer$$1[index++] = size & 0xff;
    	  buffer$$1[index++] = size >> 8 & 0xff;
    	  buffer$$1[index++] = size >> 16 & 0xff;
    	  buffer$$1[index++] = size >> 24 & 0xff; // Write the default subtype

    	  buffer$$1[index++] = constants.BSON_BINARY_SUBTYPE_DEFAULT; // Copy the content form the binary field to the buffer

    	  value.copy(buffer$$1, index, 0, size); // Adjust the index

    	  index = index + size;
    	  return index;
    	}

    	function serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray, path) {
    	  for (var i = 0; i < path.length; i++) {
    	    if (path[i] === value) throw new Error('cyclic dependency detected');
    	  } // Push value to stack


    	  path.push(value); // Write the type

    	  buffer$$1[index++] = Array.isArray(value) ? constants.BSON_DATA_ARRAY : constants.BSON_DATA_OBJECT; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0;
    	  var endIndex = serializeInto(buffer$$1, value, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined, path); // Pop stack

    	  path.pop();
    	  return endIndex;
    	}

    	function serializeDecimal128(buffer$$1, key, value, index, isArray) {
    	  buffer$$1[index++] = constants.BSON_DATA_DECIMAL128; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write the data from the value

    	  value.bytes.copy(buffer$$1, index, 0, 16);
    	  return index + 16;
    	}

    	function serializeLong(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = value._bsontype === 'Long' ? constants.BSON_DATA_LONG : constants.BSON_DATA_TIMESTAMP; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write the date

    	  var lowBits = value.getLowBits();
    	  var highBits = value.getHighBits(); // Encode low bits

    	  buffer$$1[index++] = lowBits & 0xff;
    	  buffer$$1[index++] = lowBits >> 8 & 0xff;
    	  buffer$$1[index++] = lowBits >> 16 & 0xff;
    	  buffer$$1[index++] = lowBits >> 24 & 0xff; // Encode high bits

    	  buffer$$1[index++] = highBits & 0xff;
    	  buffer$$1[index++] = highBits >> 8 & 0xff;
    	  buffer$$1[index++] = highBits >> 16 & 0xff;
    	  buffer$$1[index++] = highBits >> 24 & 0xff;
    	  return index;
    	}

    	function serializeInt32(buffer$$1, key, value, index, isArray) {
    	  // Set int type 32 bits or less
    	  buffer$$1[index++] = constants.BSON_DATA_INT; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write the int value

    	  buffer$$1[index++] = value & 0xff;
    	  buffer$$1[index++] = value >> 8 & 0xff;
    	  buffer$$1[index++] = value >> 16 & 0xff;
    	  buffer$$1[index++] = value >> 24 & 0xff;
    	  return index;
    	}

    	function serializeDouble(buffer$$1, key, value, index, isArray) {
    	  // Encode as double
    	  buffer$$1[index++] = constants.BSON_DATA_NUMBER; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write float

    	  writeIEEE754$1(buffer$$1, value.value, index, 'little', 52, 8); // Adjust index

    	  index = index + 8;
    	  return index;
    	}

    	function serializeFunction(buffer$$1, key, value, index, checkKeys, depth, isArray) {
    	  buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Function string

    	  var functionString = normalizedFunctionString$1(value); // Write the string

    	  var size = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    	  buffer$$1[index] = size & 0xff;
    	  buffer$$1[index + 1] = size >> 8 & 0xff;
    	  buffer$$1[index + 2] = size >> 16 & 0xff;
    	  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

    	  index = index + 4 + size - 1; // Write zero

    	  buffer$$1[index++] = 0;
    	  return index;
    	}

    	function serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, isArray) {
    	  if (value.scope && _typeof$3(value.scope) === 'object') {
    	    // Write the type
    	    buffer$$1[index++] = constants.BSON_DATA_CODE_W_SCOPE; // Number of written bytes

    	    var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	    index = index + numberOfWrittenBytes;
    	    buffer$$1[index++] = 0; // Starting index

    	    var startIndex = index; // Serialize the function
    	    // Get the function string

    	    var functionString = typeof value.code === 'string' ? value.code : value.code.toString(); // Index adjustment

    	    index = index + 4; // Write string into buffer

    	    var codeSize = buffer$$1.write(functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    	    buffer$$1[index] = codeSize & 0xff;
    	    buffer$$1[index + 1] = codeSize >> 8 & 0xff;
    	    buffer$$1[index + 2] = codeSize >> 16 & 0xff;
    	    buffer$$1[index + 3] = codeSize >> 24 & 0xff; // Write end 0

    	    buffer$$1[index + 4 + codeSize - 1] = 0; // Write the

    	    index = index + codeSize + 4; //
    	    // Serialize the scope value

    	    var endIndex = serializeInto(buffer$$1, value.scope, checkKeys, index, depth + 1, serializeFunctions, ignoreUndefined);
    	    index = endIndex - 1; // Writ the total

    	    var totalSize = endIndex - startIndex; // Write the total size of the object

    	    buffer$$1[startIndex++] = totalSize & 0xff;
    	    buffer$$1[startIndex++] = totalSize >> 8 & 0xff;
    	    buffer$$1[startIndex++] = totalSize >> 16 & 0xff;
    	    buffer$$1[startIndex++] = totalSize >> 24 & 0xff; // Write trailing zero

    	    buffer$$1[index++] = 0;
    	  } else {
    	    buffer$$1[index++] = constants.BSON_DATA_CODE; // Number of written bytes

    	    var _numberOfWrittenBytes4 = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name


    	    index = index + _numberOfWrittenBytes4;
    	    buffer$$1[index++] = 0; // Function string

    	    var _functionString = value.code.toString(); // Write the string


    	    var size = buffer$$1.write(_functionString, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    	    buffer$$1[index] = size & 0xff;
    	    buffer$$1[index + 1] = size >> 8 & 0xff;
    	    buffer$$1[index + 2] = size >> 16 & 0xff;
    	    buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

    	    index = index + 4 + size - 1; // Write zero

    	    buffer$$1[index++] = 0;
    	  }

    	  return index;
    	}

    	function serializeBinary(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_BINARY; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Extract the buffer

    	  var data = value.value(true); // Calculate size

    	  var size = value.position; // Add the deprecated 02 type 4 bytes of size to total

    	  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) size = size + 4; // Write the size of the string to buffer

    	  buffer$$1[index++] = size & 0xff;
    	  buffer$$1[index++] = size >> 8 & 0xff;
    	  buffer$$1[index++] = size >> 16 & 0xff;
    	  buffer$$1[index++] = size >> 24 & 0xff; // Write the subtype to the buffer

    	  buffer$$1[index++] = value.sub_type; // If we have binary type 2 the 4 first bytes are the size

    	  if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
    	    size = size - 4;
    	    buffer$$1[index++] = size & 0xff;
    	    buffer$$1[index++] = size >> 8 & 0xff;
    	    buffer$$1[index++] = size >> 16 & 0xff;
    	    buffer$$1[index++] = size >> 24 & 0xff;
    	  } // Write the data to the object


    	  data.copy(buffer$$1, index, 0, value.position); // Adjust the index

    	  index = index + value.position;
    	  return index;
    	}

    	function serializeSymbol(buffer$$1, key, value, index, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_SYMBOL; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0; // Write the string

    	  var size = buffer$$1.write(value.value, index + 4, 'utf8') + 1; // Write the size of the string to buffer

    	  buffer$$1[index] = size & 0xff;
    	  buffer$$1[index + 1] = size >> 8 & 0xff;
    	  buffer$$1[index + 2] = size >> 16 & 0xff;
    	  buffer$$1[index + 3] = size >> 24 & 0xff; // Update index

    	  index = index + 4 + size - 1; // Write zero

    	  buffer$$1[index++] = 0x00;
    	  return index;
    	}

    	function serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, isArray) {
    	  // Write the type
    	  buffer$$1[index++] = constants.BSON_DATA_OBJECT; // Number of written bytes

    	  var numberOfWrittenBytes = !isArray ? buffer$$1.write(key, index, 'utf8') : buffer$$1.write(key, index, 'ascii'); // Encode the name

    	  index = index + numberOfWrittenBytes;
    	  buffer$$1[index++] = 0;
    	  var startIndex = index;
    	  var endIndex;
    	  var output = {
    	    $ref: value.collection || value.namespace,
    	    // "namespace" was what library 1.x called "collection"
    	    $id: value.oid
    	  };
    	  if (value.db != null) output.$db = value.db;
    	  output = Object.assign(output, value.fields);
    	  endIndex = serializeInto(buffer$$1, output, false, index, depth + 1, serializeFunctions); // Calculate object size

    	  var size = endIndex - startIndex; // Write the size

    	  buffer$$1[startIndex++] = size & 0xff;
    	  buffer$$1[startIndex++] = size >> 8 & 0xff;
    	  buffer$$1[startIndex++] = size >> 16 & 0xff;
    	  buffer$$1[startIndex++] = size >> 24 & 0xff; // Set index

    	  return endIndex;
    	}

    	function serializeInto(buffer$$1, object, checkKeys, startingIndex, depth, serializeFunctions, ignoreUndefined, path) {
    	  startingIndex = startingIndex || 0;
    	  path = path || []; // Push the object to the path

    	  path.push(object); // Start place to serialize into

    	  var index = startingIndex + 4; // Special case isArray

    	  if (Array.isArray(object)) {
    	    // Get object keys
    	    for (var i = 0; i < object.length; i++) {
    	      var key = '' + i;
    	      var value = object[i]; // Is there an override value

    	      if (value && value.toBSON) {
    	        if (typeof value.toBSON !== 'function') throw new TypeError('toBSON is not a function');
    	        value = value.toBSON();
    	      }

    	      var type = _typeof$3(value);

    	      if (type === 'string') {
    	        index = serializeString(buffer$$1, key, value, index, true);
    	      } else if (type === 'number') {
    	        index = serializeNumber(buffer$$1, key, value, index, true);
    	      } else if (type === 'boolean') {
    	        index = serializeBoolean(buffer$$1, key, value, index, true);
    	      } else if (value instanceof Date || isDate$1(value)) {
    	        index = serializeDate(buffer$$1, key, value, index, true);
    	      } else if (value === undefined) {
    	        index = serializeNull(buffer$$1, key, value, index, true);
    	      } else if (value === null) {
    	        index = serializeNull(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
    	        index = serializeObjectId(buffer$$1, key, value, index, true);
    	      } else if (Buffer$5.isBuffer(value)) {
    	        index = serializeBuffer(buffer$$1, key, value, index, true);
    	      } else if (value instanceof RegExp || isRegExp$1(value)) {
    	        index = serializeRegExp(buffer$$1, key, value, index, true);
    	      } else if (type === 'object' && value['_bsontype'] == null) {
    	        index = serializeObject(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true, path);
    	      } else if (type === 'object' && value['_bsontype'] === 'Decimal128') {
    	        index = serializeDecimal128(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Timestamp') {
    	        index = serializeLong(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'Double') {
    	        index = serializeDouble(buffer$$1, key, value, index, true);
    	      } else if (typeof value === 'function' && serializeFunctions) {
    	        index = serializeFunction(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions);
    	      } else if (value['_bsontype'] === 'Code') {
    	        index = serializeCode(buffer$$1, key, value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, true);
    	      } else if (value['_bsontype'] === 'Binary') {
    	        index = serializeBinary(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'Symbol') {
    	        index = serializeSymbol(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'DBRef') {
    	        index = serializeDBRef(buffer$$1, key, value, index, depth, serializeFunctions, true);
    	      } else if (value['_bsontype'] === 'BSONRegExp') {
    	        index = serializeBSONRegExp(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'Int32') {
    	        index = serializeInt32(buffer$$1, key, value, index, true);
    	      } else if (value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
    	        index = serializeMinMax(buffer$$1, key, value, index, true);
    	      } else if (typeof value['_bsontype'] !== 'undefined') {
    	        throw new TypeError('Unrecognized or invalid _bsontype: ' + value['_bsontype']);
    	      }
    	    }
    	  } else if (object instanceof map) {
    	    var iterator = object.entries();
    	    var done = false;

    	    while (!done) {
    	      // Unpack the next entry
    	      var entry = iterator.next();
    	      done = entry.done; // Are we done, then skip and terminate

    	      if (done) continue; // Get the entry values

    	      var _key = entry.value[0];
    	      var _value = entry.value[1]; // Check the type of the value

    	      var _type = _typeof$3(_value); // Check the key and throw error if it's illegal


    	      if (typeof _key === 'string' && !ignoreKeys.has(_key)) {
    	        if (_key.match(regexp$1) != null) {
    	          // The BSON spec doesn't allow keys with null bytes because keys are
    	          // null-terminated.
    	          throw Error('key ' + _key + ' must not contain null bytes');
    	        }

    	        if (checkKeys) {
    	          if ('$' === _key[0]) {
    	            throw Error('key ' + _key + " must not start with '$'");
    	          } else if (~_key.indexOf('.')) {
    	            throw Error('key ' + _key + " must not contain '.'");
    	          }
    	        }
    	      }

    	      if (_type === 'string') {
    	        index = serializeString(buffer$$1, _key, _value, index);
    	      } else if (_type === 'number') {
    	        index = serializeNumber(buffer$$1, _key, _value, index);
    	      } else if (_type === 'boolean') {
    	        index = serializeBoolean(buffer$$1, _key, _value, index);
    	      } else if (_value instanceof Date || isDate$1(_value)) {
    	        index = serializeDate(buffer$$1, _key, _value, index);
    	      } else if (_value === null || _value === undefined && ignoreUndefined === false) {
    	        index = serializeNull(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'ObjectId' || _value['_bsontype'] === 'ObjectID') {
    	        index = serializeObjectId(buffer$$1, _key, _value, index);
    	      } else if (Buffer$5.isBuffer(_value)) {
    	        index = serializeBuffer(buffer$$1, _key, _value, index);
    	      } else if (_value instanceof RegExp || isRegExp$1(_value)) {
    	        index = serializeRegExp(buffer$$1, _key, _value, index);
    	      } else if (_type === 'object' && _value['_bsontype'] == null) {
    	        index = serializeObject(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
    	      } else if (_type === 'object' && _value['_bsontype'] === 'Decimal128') {
    	        index = serializeDecimal128(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'Long' || _value['_bsontype'] === 'Timestamp') {
    	        index = serializeLong(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'Double') {
    	        index = serializeDouble(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'Code') {
    	        index = serializeCode(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
    	      } else if (typeof _value === 'function' && serializeFunctions) {
    	        index = serializeFunction(buffer$$1, _key, _value, index, checkKeys, depth, serializeFunctions);
    	      } else if (_value['_bsontype'] === 'Binary') {
    	        index = serializeBinary(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'Symbol') {
    	        index = serializeSymbol(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'DBRef') {
    	        index = serializeDBRef(buffer$$1, _key, _value, index, depth, serializeFunctions);
    	      } else if (_value['_bsontype'] === 'BSONRegExp') {
    	        index = serializeBSONRegExp(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'Int32') {
    	        index = serializeInt32(buffer$$1, _key, _value, index);
    	      } else if (_value['_bsontype'] === 'MinKey' || _value['_bsontype'] === 'MaxKey') {
    	        index = serializeMinMax(buffer$$1, _key, _value, index);
    	      } else if (typeof _value['_bsontype'] !== 'undefined') {
    	        throw new TypeError('Unrecognized or invalid _bsontype: ' + _value['_bsontype']);
    	      }
    	    }
    	  } else {
    	    // Did we provide a custom serialization method
    	    if (object.toBSON) {
    	      if (typeof object.toBSON !== 'function') throw new TypeError('toBSON is not a function');
    	      object = object.toBSON();
    	      if (object != null && _typeof$3(object) !== 'object') throw new TypeError('toBSON function did not return an object');
    	    } // Iterate over all the keys


    	    for (var _key2 in object) {
    	      var _value2 = object[_key2]; // Is there an override value

    	      if (_value2 && _value2.toBSON) {
    	        if (typeof _value2.toBSON !== 'function') throw new TypeError('toBSON is not a function');
    	        _value2 = _value2.toBSON();
    	      } // Check the type of the value


    	      var _type2 = _typeof$3(_value2); // Check the key and throw error if it's illegal


    	      if (typeof _key2 === 'string' && !ignoreKeys.has(_key2)) {
    	        if (_key2.match(regexp$1) != null) {
    	          // The BSON spec doesn't allow keys with null bytes because keys are
    	          // null-terminated.
    	          throw Error('key ' + _key2 + ' must not contain null bytes');
    	        }

    	        if (checkKeys) {
    	          if ('$' === _key2[0]) {
    	            throw Error('key ' + _key2 + " must not start with '$'");
    	          } else if (~_key2.indexOf('.')) {
    	            throw Error('key ' + _key2 + " must not contain '.'");
    	          }
    	        }
    	      }

    	      if (_type2 === 'string') {
    	        index = serializeString(buffer$$1, _key2, _value2, index);
    	      } else if (_type2 === 'number') {
    	        index = serializeNumber(buffer$$1, _key2, _value2, index);
    	      } else if (_type2 === 'boolean') {
    	        index = serializeBoolean(buffer$$1, _key2, _value2, index);
    	      } else if (_value2 instanceof Date || isDate$1(_value2)) {
    	        index = serializeDate(buffer$$1, _key2, _value2, index);
    	      } else if (_value2 === undefined) {
    	        if (ignoreUndefined === false) index = serializeNull(buffer$$1, _key2, _value2, index);
    	      } else if (_value2 === null) {
    	        index = serializeNull(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'ObjectId' || _value2['_bsontype'] === 'ObjectID') {
    	        index = serializeObjectId(buffer$$1, _key2, _value2, index);
    	      } else if (Buffer$5.isBuffer(_value2)) {
    	        index = serializeBuffer(buffer$$1, _key2, _value2, index);
    	      } else if (_value2 instanceof RegExp || isRegExp$1(_value2)) {
    	        index = serializeRegExp(buffer$$1, _key2, _value2, index);
    	      } else if (_type2 === 'object' && _value2['_bsontype'] == null) {
    	        index = serializeObject(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined, false, path);
    	      } else if (_type2 === 'object' && _value2['_bsontype'] === 'Decimal128') {
    	        index = serializeDecimal128(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'Long' || _value2['_bsontype'] === 'Timestamp') {
    	        index = serializeLong(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'Double') {
    	        index = serializeDouble(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'Code') {
    	        index = serializeCode(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions, ignoreUndefined);
    	      } else if (typeof _value2 === 'function' && serializeFunctions) {
    	        index = serializeFunction(buffer$$1, _key2, _value2, index, checkKeys, depth, serializeFunctions);
    	      } else if (_value2['_bsontype'] === 'Binary') {
    	        index = serializeBinary(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'Symbol') {
    	        index = serializeSymbol(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'DBRef') {
    	        index = serializeDBRef(buffer$$1, _key2, _value2, index, depth, serializeFunctions);
    	      } else if (_value2['_bsontype'] === 'BSONRegExp') {
    	        index = serializeBSONRegExp(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'Int32') {
    	        index = serializeInt32(buffer$$1, _key2, _value2, index);
    	      } else if (_value2['_bsontype'] === 'MinKey' || _value2['_bsontype'] === 'MaxKey') {
    	        index = serializeMinMax(buffer$$1, _key2, _value2, index);
    	      } else if (typeof _value2['_bsontype'] !== 'undefined') {
    	        throw new TypeError('Unrecognized or invalid _bsontype: ' + _value2['_bsontype']);
    	      }
    	    }
    	  } // Remove the path


    	  path.pop(); // Final padding byte for object

    	  buffer$$1[index++] = 0x00; // Final size

    	  var size = index - startingIndex; // Write the size of the object

    	  buffer$$1[startingIndex++] = size & 0xff;
    	  buffer$$1[startingIndex++] = size >> 8 & 0xff;
    	  buffer$$1[startingIndex++] = size >> 16 & 0xff;
    	  buffer$$1[startingIndex++] = size >> 24 & 0xff;
    	  return index;
    	}

    	var serializer = serializeInto;

    	function _typeof$4(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$4 = function _typeof(obj) { return typeof obj; }; } else { _typeof$4 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$4(obj); }

    	var Buffer$6 = buffer.Buffer;
    	var normalizedFunctionString$2 = utils.normalizedFunctionString; // To ensure that 0.4 of node works correctly

    	function isDate$2(d) {
    	  return _typeof$4(d) === 'object' && Object.prototype.toString.call(d) === '[object Date]';
    	}

    	function calculateObjectSize(object, serializeFunctions, ignoreUndefined) {
    	  var totalLength = 4 + 1;

    	  if (Array.isArray(object)) {
    	    for (var i = 0; i < object.length; i++) {
    	      totalLength += calculateElement(i.toString(), object[i], serializeFunctions, true, ignoreUndefined);
    	    }
    	  } else {
    	    // If we have toBSON defined, override the current object
    	    if (object.toBSON) {
    	      object = object.toBSON();
    	    } // Calculate size


    	    for (var key in object) {
    	      totalLength += calculateElement(key, object[key], serializeFunctions, false, ignoreUndefined);
    	    }
    	  }

    	  return totalLength;
    	}
    	/**
    	 * @ignore
    	 * @api private
    	 */


    	function calculateElement(name, value, serializeFunctions, isArray, ignoreUndefined) {
    	  // If we have toBSON defined, override the current object
    	  if (value && value.toBSON) {
    	    value = value.toBSON();
    	  }

    	  switch (_typeof$4(value)) {
    	    case 'string':
    	      return 1 + Buffer$6.byteLength(name, 'utf8') + 1 + 4 + Buffer$6.byteLength(value, 'utf8') + 1;

    	    case 'number':
    	      if (Math.floor(value) === value && value >= constants.JS_INT_MIN && value <= constants.JS_INT_MAX) {
    	        if (value >= constants.BSON_INT32_MIN && value <= constants.BSON_INT32_MAX) {
    	          // 32 bit
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (4 + 1);
    	        } else {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
    	        }
    	      } else {
    	        // 64 bit
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
    	      }

    	    case 'undefined':
    	      if (isArray || !ignoreUndefined) return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1;
    	      return 0;

    	    case 'boolean':
    	      return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (1 + 1);

    	    case 'object':
    	      if (value == null || value['_bsontype'] === 'MinKey' || value['_bsontype'] === 'MaxKey') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1;
    	      } else if (value['_bsontype'] === 'ObjectId' || value['_bsontype'] === 'ObjectID') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (12 + 1);
    	      } else if (value instanceof Date || isDate$2(value)) {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
    	      } else if (typeof Buffer$6 !== 'undefined' && Buffer$6.isBuffer(value)) {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (1 + 4 + 1) + value.length;
    	      } else if (value['_bsontype'] === 'Long' || value['_bsontype'] === 'Double' || value['_bsontype'] === 'Timestamp') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (8 + 1);
    	      } else if (value['_bsontype'] === 'Decimal128') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (16 + 1);
    	      } else if (value['_bsontype'] === 'Code') {
    	        // Calculate size depending on the availability of a scope
    	        if (value.scope != null && Object.keys(value.scope).length > 0) {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(value.code.toString(), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
    	        } else {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$6.byteLength(value.code.toString(), 'utf8') + 1;
    	        }
    	      } else if (value['_bsontype'] === 'Binary') {
    	        // Check what kind of subtype we have
    	        if (value.sub_type === binary.SUBTYPE_BYTE_ARRAY) {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1 + 4);
    	        } else {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + (value.position + 1 + 4 + 1);
    	        }
    	      } else if (value['_bsontype'] === 'Symbol') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + Buffer$6.byteLength(value.value, 'utf8') + 4 + 1 + 1;
    	      } else if (value['_bsontype'] === 'DBRef') {
    	        // Set up correct object for serialization
    	        var ordered_values = Object.assign({
    	          $ref: value.collection,
    	          $id: value.oid
    	        }, value.fields); // Add db reference if it exists

    	        if (value.db != null) {
    	          ordered_values['$db'] = value.db;
    	        }

    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + calculateObjectSize(ordered_values, serializeFunctions, ignoreUndefined);
    	      } else if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
    	      } else if (value['_bsontype'] === 'BSONRegExp') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.pattern, 'utf8') + 1 + Buffer$6.byteLength(value.options, 'utf8') + 1;
    	      } else {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + calculateObjectSize(value, serializeFunctions, ignoreUndefined) + 1;
    	      }

    	    case 'function':
    	      // WTF for 0.4.X where typeof /someregexp/ === 'function'
    	      if (value instanceof RegExp || Object.prototype.toString.call(value) === '[object RegExp]' || String.call(value) === '[object RegExp]') {
    	        return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + Buffer$6.byteLength(value.source, 'utf8') + 1 + (value.global ? 1 : 0) + (value.ignoreCase ? 1 : 0) + (value.multiline ? 1 : 0) + 1;
    	      } else {
    	        if (serializeFunctions && value.scope != null && Object.keys(value.scope).length > 0) {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value), 'utf8') + 1 + calculateObjectSize(value.scope, serializeFunctions, ignoreUndefined);
    	        } else if (serializeFunctions) {
    	          return (name != null ? Buffer$6.byteLength(name, 'utf8') + 1 : 0) + 1 + 4 + Buffer$6.byteLength(normalizedFunctionString$2(value), 'utf8') + 1;
    	        }
    	      }

    	  }

    	  return 0;
    	}

    	var calculate_size = calculateObjectSize;

    	var Buffer$7 = buffer.Buffer;
    	/**
    	 * Makes sure that, if a Uint8Array is passed in, it is wrapped in a Buffer.
    	 *
    	 * @param {Buffer|Uint8Array} potentialBuffer The potential buffer
    	 * @returns {Buffer} the input if potentialBuffer is a buffer, or a buffer that
    	 * wraps a passed in Uint8Array
    	 * @throws {TypeError} If anything other than a Buffer or Uint8Array is passed in
    	 */

    	var ensure_buffer = function ensureBuffer(potentialBuffer) {
    	  if (potentialBuffer instanceof Buffer$7) {
    	    return potentialBuffer;
    	  }

    	  if (potentialBuffer instanceof Uint8Array) {
    	    return Buffer$7.from(potentialBuffer.buffer);
    	  }

    	  throw new TypeError('Must use either Buffer or Uint8Array');
    	};

    	var Buffer$8 = buffer.Buffer; // Parts of the parser

    	/**
    	 * @ignore
    	 */
    	// Default Max Size

    	var MAXSIZE = 1024 * 1024 * 17; // Current Internal Temporary Serialization Buffer

    	var buffer$1 = Buffer$8.alloc(MAXSIZE);
    	/**
    	 * Sets the size of the internal serialization buffer.
    	 *
    	 * @method
    	 * @param {number} size The desired size for the internal serialization buffer
    	 */

    	function setInternalBufferSize(size) {
    	  // Resize the internal serialization buffer if needed
    	  if (buffer$1.length < size) {
    	    buffer$1 = Buffer$8.alloc(size);
    	  }
    	}
    	/**
    	 * Serialize a Javascript object.
    	 *
    	 * @param {Object} object the Javascript object to serialize.
    	 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
    	 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
    	 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
    	 * @return {Buffer} returns the Buffer object containing the serialized object.
    	 */


    	function serialize$1(object, options) {
    	  options = options || {}; // Unpack the options

    	  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    	  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    	  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    	  var minInternalBufferSize = typeof options.minInternalBufferSize === 'number' ? options.minInternalBufferSize : MAXSIZE; // Resize the internal serialization buffer if needed

    	  if (buffer$1.length < minInternalBufferSize) {
    	    buffer$1 = Buffer$8.alloc(minInternalBufferSize);
    	  } // Attempt to serialize


    	  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined, []); // Create the final buffer

    	  var finishedBuffer = Buffer$8.alloc(serializationIndex); // Copy into the finished buffer

    	  buffer$1.copy(finishedBuffer, 0, 0, finishedBuffer.length); // Return the buffer

    	  return finishedBuffer;
    	}
    	/**
    	 * Serialize a Javascript object using a predefined Buffer and index into the buffer, useful when pre-allocating the space for serialization.
    	 *
    	 * @param {Object} object the Javascript object to serialize.
    	 * @param {Buffer} buffer the Buffer you pre-allocated to store the serialized BSON object.
    	 * @param {Boolean} [options.checkKeys] the serializer will check if keys are valid.
    	 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
    	 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
    	 * @param {Number} [options.index] the index in the buffer where we wish to start serializing into.
    	 * @return {Number} returns the index pointing to the last written byte in the buffer.
    	 */


    	function serializeWithBufferAndIndex(object, finalBuffer, options) {
    	  options = options || {}; // Unpack the options

    	  var checkKeys = typeof options.checkKeys === 'boolean' ? options.checkKeys : false;
    	  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    	  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    	  var startIndex = typeof options.index === 'number' ? options.index : 0; // Attempt to serialize

    	  var serializationIndex = serializer(buffer$1, object, checkKeys, 0, 0, serializeFunctions, ignoreUndefined);
    	  buffer$1.copy(finalBuffer, startIndex, 0, serializationIndex); // Return the index

    	  return startIndex + serializationIndex - 1;
    	}
    	/**
    	 * Deserialize data as BSON.
    	 *
    	 * @param {Buffer} buffer the buffer containing the serialized set of BSON documents.
    	 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
    	 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
    	 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
    	 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
    	 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
    	 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
    	 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
    	 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
    	 * @param {boolean} [options.allowObjectSmallerThanBufferSize=false] allows the buffer to be larger than the parsed BSON object
    	 * @return {Object} returns the deserialized Javascript Object.
    	 */


    	function deserialize$2(buffer$$1, options) {
    	  buffer$$1 = ensure_buffer(buffer$$1);
    	  return deserializer(buffer$$1, options);
    	}
    	/**
    	 * Calculate the bson size for a passed in Javascript object.
    	 *
    	 * @param {Object} object the Javascript object to calculate the BSON byte size for.
    	 * @param {Boolean} [options.serializeFunctions=false] serialize the javascript functions **(default:false)**.
    	 * @param {Boolean} [options.ignoreUndefined=true] ignore undefined fields **(default:true)**.
    	 * @return {Number} returns the number of bytes the BSON object will take up.
    	 */


    	function calculateObjectSize$1(object, options) {
    	  options = options || {};
    	  var serializeFunctions = typeof options.serializeFunctions === 'boolean' ? options.serializeFunctions : false;
    	  var ignoreUndefined = typeof options.ignoreUndefined === 'boolean' ? options.ignoreUndefined : true;
    	  return calculate_size(object, serializeFunctions, ignoreUndefined);
    	}
    	/**
    	 * Deserialize stream data as BSON documents.
    	 *
    	 * @param {Buffer} data the buffer containing the serialized set of BSON documents.
    	 * @param {Number} startIndex the start index in the data Buffer where the deserialization is to start.
    	 * @param {Number} numberOfDocuments number of documents to deserialize.
    	 * @param {Array} documents an array where to store the deserialized documents.
    	 * @param {Number} docStartIndex the index in the documents array from where to start inserting documents.
    	 * @param {Object} [options] additional options used for the deserialization.
    	 * @param {Object} [options.evalFunctions=false] evaluate functions in the BSON document scoped to the object deserialized.
    	 * @param {Object} [options.cacheFunctions=false] cache evaluated functions for reuse.
    	 * @param {Object} [options.cacheFunctionsCrc32=false] use a crc32 code for caching, otherwise use the string of the function.
    	 * @param {Object} [options.promoteLongs=true] when deserializing a Long will fit it into a Number if it's smaller than 53 bits
    	 * @param {Object} [options.promoteBuffers=false] when deserializing a Binary will return it as a node.js Buffer instance.
    	 * @param {Object} [options.promoteValues=false] when deserializing will promote BSON values to their Node.js closest equivalent types.
    	 * @param {Object} [options.fieldsAsRaw=null] allow to specify if there what fields we wish to return as unserialized raw buffer.
    	 * @param {Object} [options.bsonRegExp=false] return BSON regular expressions as BSONRegExp instances.
    	 * @return {Number} returns the next index in the buffer after deserialization **x** numbers of documents.
    	 */


    	function deserializeStream(data, startIndex, numberOfDocuments, documents, docStartIndex, options) {
    	  options = Object.assign({
    	    allowObjectSmallerThanBufferSize: true
    	  }, options);
    	  data = ensure_buffer(data);
    	  var index = startIndex; // Loop over all documents

    	  for (var i = 0; i < numberOfDocuments; i++) {
    	    // Find size of the document
    	    var size = data[index] | data[index + 1] << 8 | data[index + 2] << 16 | data[index + 3] << 24; // Update options with index

    	    options.index = index; // Parse the document at this point

    	    documents[docStartIndex + i] = deserializer(data, options); // Adjust index by the document size

    	    index = index + size;
    	  } // Return object containing end index of parsing and list of documents


    	  return index;
    	}

    	var bson = {
    	  // constants
    	  // NOTE: this is done this way because rollup can't resolve an `Object.assign`ed export
    	  BSON_INT32_MAX: constants.BSON_INT32_MAX,
    	  BSON_INT32_MIN: constants.BSON_INT32_MIN,
    	  BSON_INT64_MAX: constants.BSON_INT64_MAX,
    	  BSON_INT64_MIN: constants.BSON_INT64_MIN,
    	  JS_INT_MAX: constants.JS_INT_MAX,
    	  JS_INT_MIN: constants.JS_INT_MIN,
    	  BSON_DATA_NUMBER: constants.BSON_DATA_NUMBER,
    	  BSON_DATA_STRING: constants.BSON_DATA_STRING,
    	  BSON_DATA_OBJECT: constants.BSON_DATA_OBJECT,
    	  BSON_DATA_ARRAY: constants.BSON_DATA_ARRAY,
    	  BSON_DATA_BINARY: constants.BSON_DATA_BINARY,
    	  BSON_DATA_UNDEFINED: constants.BSON_DATA_UNDEFINED,
    	  BSON_DATA_OID: constants.BSON_DATA_OID,
    	  BSON_DATA_BOOLEAN: constants.BSON_DATA_BOOLEAN,
    	  BSON_DATA_DATE: constants.BSON_DATA_DATE,
    	  BSON_DATA_NULL: constants.BSON_DATA_NULL,
    	  BSON_DATA_REGEXP: constants.BSON_DATA_REGEXP,
    	  BSON_DATA_DBPOINTER: constants.BSON_DATA_DBPOINTER,
    	  BSON_DATA_CODE: constants.BSON_DATA_CODE,
    	  BSON_DATA_SYMBOL: constants.BSON_DATA_SYMBOL,
    	  BSON_DATA_CODE_W_SCOPE: constants.BSON_DATA_CODE_W_SCOPE,
    	  BSON_DATA_INT: constants.BSON_DATA_INT,
    	  BSON_DATA_TIMESTAMP: constants.BSON_DATA_TIMESTAMP,
    	  BSON_DATA_LONG: constants.BSON_DATA_LONG,
    	  BSON_DATA_DECIMAL128: constants.BSON_DATA_DECIMAL128,
    	  BSON_DATA_MIN_KEY: constants.BSON_DATA_MIN_KEY,
    	  BSON_DATA_MAX_KEY: constants.BSON_DATA_MAX_KEY,
    	  BSON_BINARY_SUBTYPE_DEFAULT: constants.BSON_BINARY_SUBTYPE_DEFAULT,
    	  BSON_BINARY_SUBTYPE_FUNCTION: constants.BSON_BINARY_SUBTYPE_FUNCTION,
    	  BSON_BINARY_SUBTYPE_BYTE_ARRAY: constants.BSON_BINARY_SUBTYPE_BYTE_ARRAY,
    	  BSON_BINARY_SUBTYPE_UUID: constants.BSON_BINARY_SUBTYPE_UUID,
    	  BSON_BINARY_SUBTYPE_MD5: constants.BSON_BINARY_SUBTYPE_MD5,
    	  BSON_BINARY_SUBTYPE_USER_DEFINED: constants.BSON_BINARY_SUBTYPE_USER_DEFINED,
    	  // wrapped types
    	  Code: code,
    	  Map: map,
    	  BSONSymbol: symbol,
    	  DBRef: db_ref,
    	  Binary: binary,
    	  ObjectId: objectid,
    	  Long: long_1,
    	  Timestamp: timestamp,
    	  Double: double_1,
    	  Int32: int_32,
    	  MinKey: min_key,
    	  MaxKey: max_key,
    	  BSONRegExp: regexp,
    	  Decimal128: decimal128,
    	  // methods
    	  serialize: serialize$1,
    	  serializeWithBufferAndIndex: serializeWithBufferAndIndex,
    	  deserialize: deserialize$2,
    	  calculateObjectSize: calculateObjectSize$1,
    	  deserializeStream: deserializeStream,
    	  setInternalBufferSize: setInternalBufferSize,
    	  // legacy support
    	  ObjectID: objectid,
    	  // Extended JSON
    	  EJSON: extended_json
    	};
    	var bson_1 = bson.BSON_INT32_MAX;
    	var bson_2 = bson.BSON_INT32_MIN;
    	var bson_3 = bson.BSON_INT64_MAX;
    	var bson_4 = bson.BSON_INT64_MIN;
    	var bson_5 = bson.JS_INT_MAX;
    	var bson_6 = bson.JS_INT_MIN;
    	var bson_7 = bson.BSON_DATA_NUMBER;
    	var bson_8 = bson.BSON_DATA_STRING;
    	var bson_9 = bson.BSON_DATA_OBJECT;
    	var bson_10 = bson.BSON_DATA_ARRAY;
    	var bson_11 = bson.BSON_DATA_BINARY;
    	var bson_12 = bson.BSON_DATA_UNDEFINED;
    	var bson_13 = bson.BSON_DATA_OID;
    	var bson_14 = bson.BSON_DATA_BOOLEAN;
    	var bson_15 = bson.BSON_DATA_DATE;
    	var bson_16 = bson.BSON_DATA_NULL;
    	var bson_17 = bson.BSON_DATA_REGEXP;
    	var bson_18 = bson.BSON_DATA_DBPOINTER;
    	var bson_19 = bson.BSON_DATA_CODE;
    	var bson_20 = bson.BSON_DATA_SYMBOL;
    	var bson_21 = bson.BSON_DATA_CODE_W_SCOPE;
    	var bson_22 = bson.BSON_DATA_INT;
    	var bson_23 = bson.BSON_DATA_TIMESTAMP;
    	var bson_24 = bson.BSON_DATA_LONG;
    	var bson_25 = bson.BSON_DATA_DECIMAL128;
    	var bson_26 = bson.BSON_DATA_MIN_KEY;
    	var bson_27 = bson.BSON_DATA_MAX_KEY;
    	var bson_28 = bson.BSON_BINARY_SUBTYPE_DEFAULT;
    	var bson_29 = bson.BSON_BINARY_SUBTYPE_FUNCTION;
    	var bson_30 = bson.BSON_BINARY_SUBTYPE_BYTE_ARRAY;
    	var bson_31 = bson.BSON_BINARY_SUBTYPE_UUID;
    	var bson_32 = bson.BSON_BINARY_SUBTYPE_MD5;
    	var bson_33 = bson.BSON_BINARY_SUBTYPE_USER_DEFINED;
    	var bson_34 = bson.Code;
    	var bson_35 = bson.BSONSymbol;
    	var bson_36 = bson.DBRef;
    	var bson_37 = bson.Binary;
    	var bson_38 = bson.ObjectId;
    	var bson_39 = bson.Long;
    	var bson_40 = bson.Timestamp;
    	var bson_41 = bson.Double;
    	var bson_42 = bson.Int32;
    	var bson_43 = bson.MinKey;
    	var bson_44 = bson.MaxKey;
    	var bson_45 = bson.BSONRegExp;
    	var bson_46 = bson.Decimal128;
    	var bson_47 = bson.serialize;
    	var bson_48 = bson.serializeWithBufferAndIndex;
    	var bson_49 = bson.deserialize;
    	var bson_50 = bson.calculateObjectSize;
    	var bson_51 = bson.deserializeStream;
    	var bson_52 = bson.setInternalBufferSize;
    	var bson_53 = bson.ObjectID;
    	var bson_54 = bson.EJSON;

    	exports.default = bson;
    	exports.BSON_INT32_MAX = bson_1;
    	exports.BSON_INT32_MIN = bson_2;
    	exports.BSON_INT64_MAX = bson_3;
    	exports.BSON_INT64_MIN = bson_4;
    	exports.JS_INT_MAX = bson_5;
    	exports.JS_INT_MIN = bson_6;
    	exports.BSON_DATA_NUMBER = bson_7;
    	exports.BSON_DATA_STRING = bson_8;
    	exports.BSON_DATA_OBJECT = bson_9;
    	exports.BSON_DATA_ARRAY = bson_10;
    	exports.BSON_DATA_BINARY = bson_11;
    	exports.BSON_DATA_UNDEFINED = bson_12;
    	exports.BSON_DATA_OID = bson_13;
    	exports.BSON_DATA_BOOLEAN = bson_14;
    	exports.BSON_DATA_DATE = bson_15;
    	exports.BSON_DATA_NULL = bson_16;
    	exports.BSON_DATA_REGEXP = bson_17;
    	exports.BSON_DATA_DBPOINTER = bson_18;
    	exports.BSON_DATA_CODE = bson_19;
    	exports.BSON_DATA_SYMBOL = bson_20;
    	exports.BSON_DATA_CODE_W_SCOPE = bson_21;
    	exports.BSON_DATA_INT = bson_22;
    	exports.BSON_DATA_TIMESTAMP = bson_23;
    	exports.BSON_DATA_LONG = bson_24;
    	exports.BSON_DATA_DECIMAL128 = bson_25;
    	exports.BSON_DATA_MIN_KEY = bson_26;
    	exports.BSON_DATA_MAX_KEY = bson_27;
    	exports.BSON_BINARY_SUBTYPE_DEFAULT = bson_28;
    	exports.BSON_BINARY_SUBTYPE_FUNCTION = bson_29;
    	exports.BSON_BINARY_SUBTYPE_BYTE_ARRAY = bson_30;
    	exports.BSON_BINARY_SUBTYPE_UUID = bson_31;
    	exports.BSON_BINARY_SUBTYPE_MD5 = bson_32;
    	exports.BSON_BINARY_SUBTYPE_USER_DEFINED = bson_33;
    	exports.Code = bson_34;
    	exports.BSONSymbol = bson_35;
    	exports.DBRef = bson_36;
    	exports.Binary = bson_37;
    	exports.ObjectId = bson_38;
    	exports.Long = bson_39;
    	exports.Timestamp = bson_40;
    	exports.Double = bson_41;
    	exports.Int32 = bson_42;
    	exports.MinKey = bson_43;
    	exports.MaxKey = bson_44;
    	exports.BSONRegExp = bson_45;
    	exports.Decimal128 = bson_46;
    	exports.serialize = bson_47;
    	exports.serializeWithBufferAndIndex = bson_48;
    	exports.deserialize = bson_49;
    	exports.calculateObjectSize = bson_50;
    	exports.deserializeStream = bson_51;
    	exports.setInternalBufferSize = bson_52;
    	exports.ObjectID = bson_53;
    	exports.EJSON = bson_54;

    	Object.defineProperty(exports, '__esModule', { value: true });

    })));

    /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(1).Buffer));

    /***/ }),
    /* 3 */
    /***/ (function(module, exports, __webpack_require__) {


    exports.byteLength = byteLength;
    exports.toByteArray = toByteArray;
    exports.fromByteArray = fromByteArray;

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;

    function getLens (b64) {
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=');
      if (validLen === -1) validLen = len;

      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4);

      return [validLen, placeHoldersLen]
    }

    // base64 is 4/3 + up to two characters of the original data
    function byteLength (b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function _byteLength (b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function toByteArray (b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];

      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

      var curByte = 0;

      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen;

      var i;
      for (i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = (tmp >> 16) & 0xFF;
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }

      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[curByte++] = tmp & 0xFF;
      }

      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(
          uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
        ));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        );
      }

      return parts.join('')
    }


    /***/ }),
    /* 4 */
    /***/ (function(module, exports) {

    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = (nBytes * 8) - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    };

    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = (nBytes * 8) - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = ((value * c) - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    };


    /***/ }),
    /* 5 */
    /***/ (function(module, exports) {

    var toString = {}.toString;

    module.exports = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };


    /***/ }),
    /* 6 */
    /***/ (function(module, exports) {

    module.exports = Long;

    /**
     * wasm optimizations, to do native i64 multiplication and divide
     */
    var wasm = null;

    try {
      wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
      ])), {}).exports;
    } catch (e) {
      // no wasm support :(
    }

    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @exports Long
     * @class A Long class for representing a 64 bit two's-complement integer value.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @constructor
     */
    function Long(low, high, unsigned) {

        /**
         * The low 32 bits as a signed value.
         * @type {number}
         */
        this.low = low | 0;

        /**
         * The high 32 bits as a signed value.
         * @type {number}
         */
        this.high = high | 0;

        /**
         * Whether unsigned or not.
         * @type {boolean}
         */
        this.unsigned = !!unsigned;
    }

    // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.

    /**
     * An indicator used to reliably determine if an object is a Long or not.
     * @type {boolean}
     * @const
     * @private
     */
    Long.prototype.__isLong__;

    Object.defineProperty(Long.prototype, "__isLong__", { value: true });

    /**
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     * @inner
     */
    function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
    }

    /**
     * Tests if the specified object is a Long.
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     */
    Long.isLong = isLong;

    /**
     * A cache of the Long representations of small integer values.
     * @type {!Object}
     * @inner
     */
    var INT_CACHE = {};

    /**
     * A cache of the Long representations of small unsigned integer values.
     * @type {!Object}
     * @inner
     */
    var UINT_CACHE = {};

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = (0 <= value && value < 256)) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache)
                UINT_CACHE[value] = obj;
            return obj;
        } else {
            value |= 0;
            if (cache = (-128 <= value && value < 128)) {
                cachedObj = INT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache)
                INT_CACHE[value] = obj;
            return obj;
        }
    }

    /**
     * Returns a Long representing the given 32 bit integer value.
     * @function
     * @param {number} value The 32 bit integer in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromInt = fromInt;

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromNumber(value, unsigned) {
        if (isNaN(value))
            return unsigned ? UZERO : ZERO;
        if (unsigned) {
            if (value < 0)
                return UZERO;
            if (value >= TWO_PWR_64_DBL)
                return MAX_UNSIGNED_VALUE;
        } else {
            if (value <= -TWO_PWR_63_DBL)
                return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL)
                return MAX_VALUE;
        }
        if (value < 0)
            return fromNumber(-value, unsigned).neg();
        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }

    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @function
     * @param {number} value The number in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromNumber = fromNumber;

    /**
     * @param {number} lowBits
     * @param {number} highBits
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }

    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
     *  assumed to use 32 bits.
     * @function
     * @param {number} lowBits The low 32 bits
     * @param {number} highBits The high 32 bits
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromBits = fromBits;

    /**
     * @function
     * @param {number} base
     * @param {number} exponent
     * @returns {number}
     * @inner
     */
    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

    /**
     * @param {string} str
     * @param {(boolean|number)=} unsigned
     * @param {number=} radix
     * @returns {!Long}
     * @inner
     */
    function fromString(str, unsigned, radix) {
        if (str.length === 0)
            throw Error('empty string');
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
            return ZERO;
        if (typeof unsigned === 'number') {
            // For goog.math.long compatibility
            radix = unsigned,
            unsigned = false;
        } else {
            unsigned = !! unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');

        var p;
        if ((p = str.indexOf('-')) > 0)
            throw Error('interior hyphen');
        else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
        }

        // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 8));

        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i),
                value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            } else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }

    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @function
     * @param {string} str The textual representation of the Long
     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
     * @returns {!Long} The corresponding Long value
     */
    Long.fromString = fromString;

    /**
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromValue(val, unsigned) {
        if (typeof val === 'number')
            return fromNumber(val, unsigned);
        if (typeof val === 'string')
            return fromString(val, unsigned);
        // Throws for non-objects, converts non-instanceof Long:
        return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
    }

    /**
     * Converts the specified value to a Long using the appropriate from* function for its type.
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long}
     */
    Long.fromValue = fromValue;

    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_16_DBL = 1 << 16;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_24_DBL = 1 << 24;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

    /**
     * @type {!Long}
     * @const
     * @inner
     */
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

    /**
     * @type {!Long}
     * @inner
     */
    var ZERO = fromInt(0);

    /**
     * Signed zero.
     * @type {!Long}
     */
    Long.ZERO = ZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var UZERO = fromInt(0, true);

    /**
     * Unsigned zero.
     * @type {!Long}
     */
    Long.UZERO = UZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var ONE = fromInt(1);

    /**
     * Signed one.
     * @type {!Long}
     */
    Long.ONE = ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var UONE = fromInt(1, true);

    /**
     * Unsigned one.
     * @type {!Long}
     */
    Long.UONE = UONE;

    /**
     * @type {!Long}
     * @inner
     */
    var NEG_ONE = fromInt(-1);

    /**
     * Signed negative one.
     * @type {!Long}
     */
    Long.NEG_ONE = NEG_ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

    /**
     * Maximum signed value.
     * @type {!Long}
     */
    Long.MAX_VALUE = MAX_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

    /**
     * Maximum unsigned value.
     * @type {!Long}
     */
    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MIN_VALUE = fromBits(0, 0x80000000|0, false);

    /**
     * Minimum signed value.
     * @type {!Long}
     */
    Long.MIN_VALUE = MIN_VALUE;

    /**
     * @alias Long.prototype
     * @inner
     */
    var LongPrototype = Long.prototype;

    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @returns {number}
     */
    LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    };

    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     * @returns {number}
     */
    LongPrototype.toNumber = function toNumber() {
        if (this.unsigned)
            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };

    /**
     * Converts the Long to a string written in the specified radix.
     * @param {number=} radix Radix (2-36), defaults to 10
     * @returns {string}
     * @override
     * @throws {RangeError} If `radix` is out of range
     */
    LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) { // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                var radixLong = fromNumber(radix),
                    div = this.div(radixLong),
                    rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else
                return '-' + this.neg().toString(radix);
        }

        // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
            rem = this;
        var result = '';
        while (true) {
            var remDiv = rem.div(radixToPower),
                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero())
                return digits + result;
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };

    /**
     * Gets the high 32 bits as a signed integer.
     * @returns {number} Signed high bits
     */
    LongPrototype.getHighBits = function getHighBits() {
        return this.high;
    };

    /**
     * Gets the high 32 bits as an unsigned integer.
     * @returns {number} Unsigned high bits
     */
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
    };

    /**
     * Gets the low 32 bits as a signed integer.
     * @returns {number} Signed low bits
     */
    LongPrototype.getLowBits = function getLowBits() {
        return this.low;
    };

    /**
     * Gets the low 32 bits as an unsigned integer.
     * @returns {number} Unsigned low bits
     */
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
    };

    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     * @returns {number}
     */
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) // Unsigned Longs are never negative
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) != 0)
                break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };

    /**
     * Tests if this Long's value equals zero.
     * @returns {boolean}
     */
    LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
    };

    /**
     * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
     * @returns {boolean}
     */
    LongPrototype.eqz = LongPrototype.isZero;

    /**
     * Tests if this Long's value is negative.
     * @returns {boolean}
     */
    LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
    };

    /**
     * Tests if this Long's value is positive.
     * @returns {boolean}
     */
    LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
    };

    /**
     * Tests if this Long's value is odd.
     * @returns {boolean}
     */
    LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
    };

    /**
     * Tests if this Long's value is even.
     * @returns {boolean}
     */
    LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
    };

    /**
     * Tests if this Long's value equals the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.equals = function equals(other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    };

    /**
     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.eq = LongPrototype.equals;

    /**
     * Tests if this Long's value differs from the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(/* validates */ other);
    };

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.neq = LongPrototype.notEquals;

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.ne = LongPrototype.notEquals;

    /**
     * Tests if this Long's value is less than the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThan = function lessThan(other) {
        return this.comp(/* validates */ other) < 0;
    };

    /**
     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lt = LongPrototype.lessThan;

    /**
     * Tests if this Long's value is less than or equal the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(/* validates */ other) <= 0;
    };

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lte = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.le = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is greater than the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(/* validates */ other) > 0;
    };

    /**
     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gt = LongPrototype.greaterThan;

    /**
     * Tests if this Long's value is greater than or equal the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(/* validates */ other) >= 0;
    };

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.ge = LongPrototype.greaterThanOrEqual;

    /**
     * Compares this Long's value with the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.compare = function compare(other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.eq(other))
            return 0;
        var thisNeg = this.isNegative(),
            otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        // At this point the sign bits are the same
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        // Both are positive if at least one is unsigned
        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
    };

    /**
     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.comp = LongPrototype.compare;

    /**
     * Negates this Long's value.
     * @returns {!Long} Negated Long
     */
    LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE))
            return MIN_VALUE;
        return this.not().add(ONE);
    };

    /**
     * Negates this Long's value. This is an alias of {@link Long#negate}.
     * @function
     * @returns {!Long} Negated Long
     */
    LongPrototype.neg = LongPrototype.negate;

    /**
     * Returns the sum of this and the specified Long.
     * @param {!Long|number|string} addend Addend
     * @returns {!Long} Sum
     */
    LongPrototype.add = function add(addend) {
        if (!isLong(addend))
            addend = fromValue(addend);

        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;

        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;

        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };

    /**
     * Returns the difference of this and the specified Long.
     * @param {!Long|number|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend))
            subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };

    /**
     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
     * @function
     * @param {!Long|number|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.sub = LongPrototype.subtract;

    /**
     * Returns the product of this and the specified Long.
     * @param {!Long|number|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero())
            return ZERO;
        if (!isLong(multiplier))
            multiplier = fromValue(multiplier);

        // use wasm support if present
        if (wasm) {
            var low = wasm.mul(this.low,
                               this.high,
                               multiplier.low,
                               multiplier.high);
            return fromBits(low, wasm.get_high(), this.unsigned);
        }

        if (multiplier.isZero())
            return ZERO;
        if (this.eq(MIN_VALUE))
            return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE))
            return this.isOdd() ? MIN_VALUE : ZERO;

        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();

        // If both longs are small, use float multiplication
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.

        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;

        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;

        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };

    /**
     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
     * @function
     * @param {!Long|number|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.mul = LongPrototype.multiply;

    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or
     *  unsigned if this Long is unsigned.
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        if (divisor.isZero())
            throw Error('division by zero');

        // use wasm support if present
        if (wasm) {
            // guard against signed division overflow: the largest
            // negative number / -1 would be 1 larger than the largest
            // positive number, due to two's complement.
            if (!this.unsigned &&
                this.high === -0x80000000 &&
                divisor.low === -1 && divisor.high === -1) {
                // be consistent with non-wasm code path
                return this;
            }
            var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
                this.low,
                this.high,
                divisor.low,
                divisor.high
            );
            return fromBits(low, wasm.get_high(), this.unsigned);
        }

        if (this.isZero())
            return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(MIN_VALUE))
                    return ONE;
                else {
                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                    var halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    } else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            } else if (divisor.eq(MIN_VALUE))
                return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return UZERO;
            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
                return UONE;
            res = UZERO;
        }

        // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while (rem.gte(divisor)) {
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

            // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
                approxRes = fromNumber(approx),
                approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }

            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero())
                approxRes = ONE;

            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };

    /**
     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.div = LongPrototype.divide;

    /**
     * Returns this Long modulo the specified.
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);

        // use wasm support if present
        if (wasm) {
            var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
                this.low,
                this.high,
                divisor.low,
                divisor.high
            );
            return fromBits(low, wasm.get_high(), this.unsigned);
        }

        return this.sub(this.div(divisor).mul(divisor));
    };

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.mod = LongPrototype.modulo;

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.rem = LongPrototype.modulo;

    /**
     * Returns the bitwise NOT of this Long.
     * @returns {!Long}
     */
    LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };

    /**
     * Returns the bitwise AND of this Long and the specified.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.and = function and(other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };

    /**
     * Returns the bitwise OR of this Long and the specified.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.or = function or(other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };

    /**
     * Returns the bitwise XOR of this Long and the given one.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.xor = function xor(other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return fromBits(0, this.low << (numBits - 32), this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shl = LongPrototype.shiftLeft;

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    };

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr = LongPrototype.shiftRight;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0)
            return this;
        else {
            var high = this.high;
            if (numBits < 32) {
                var low = this.low;
                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            } else if (numBits === 32)
                return fromBits(high, 0, this.unsigned);
            else
                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    };

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

    /**
     * Converts this Long to signed.
     * @returns {!Long} Signed long
     */
    LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned)
            return this;
        return fromBits(this.low, this.high, false);
    };

    /**
     * Converts this Long to unsigned.
     * @returns {!Long} Unsigned long
     */
    LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned)
            return this;
        return fromBits(this.low, this.high, true);
    };

    /**
     * Converts this Long to its byte representation.
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {!Array.<number>} Byte representation
     */
    LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };

    /**
     * Converts this Long to its little endian byte representation.
     * @returns {!Array.<number>} Little endian byte representation
     */
    LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high,
            lo = this.low;
        return [
            lo        & 0xff,
            lo >>>  8 & 0xff,
            lo >>> 16 & 0xff,
            lo >>> 24       ,
            hi        & 0xff,
            hi >>>  8 & 0xff,
            hi >>> 16 & 0xff,
            hi >>> 24
        ];
    };

    /**
     * Converts this Long to its big endian byte representation.
     * @returns {!Array.<number>} Big endian byte representation
     */
    LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high,
            lo = this.low;
        return [
            hi >>> 24       ,
            hi >>> 16 & 0xff,
            hi >>>  8 & 0xff,
            hi        & 0xff,
            lo >>> 24       ,
            lo >>> 16 & 0xff,
            lo >>>  8 & 0xff,
            lo        & 0xff
        ];
    };

    /**
     * Creates a Long from its byte representation.
     * @param {!Array.<number>} bytes Byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    };

    /**
     * Creates a Long from its little endian byte representation.
     * @param {!Array.<number>} bytes Little endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long(
            bytes[0]       |
            bytes[1] <<  8 |
            bytes[2] << 16 |
            bytes[3] << 24,
            bytes[4]       |
            bytes[5] <<  8 |
            bytes[6] << 16 |
            bytes[7] << 24,
            unsigned
        );
    };

    /**
     * Creates a Long from its big endian byte representation.
     * @param {!Array.<number>} bytes Big endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long(
            bytes[4] << 24 |
            bytes[5] << 16 |
            bytes[6] <<  8 |
            bytes[7],
            bytes[0] << 24 |
            bytes[1] << 16 |
            bytes[2] <<  8 |
            bytes[3],
            unsigned
        );
    };


    /***/ })
    /******/ ]);
    });

    var BSON = unwrapExports(bson_common);

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

    const bson = BSON.bson;

    class Bson {
        /**
         * Serialize a Javascript object.
         *
         * @param object The Javascript object to serialize.
         * @return The Buffer object containing the serialized object.
         */
        static serialize (object) {
            return bson.serialize(object);
        }

        /**
         * Deserialize data as BSON.
         *
         * @param buffer The buffer containing the serialized set of BSON documents.
         * @returns The deserialized Javascript Object.
         */
        static deserialize (object) {
            return bson.deserialize(object);
        }
    }

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

    /**
     * @typedef {Object} SdlPacket
     * @property {number} EXTRA_PARCEL_DATA_LENGTH
     * @property {number} HEADER_SIZE
     * @property {number} HEADER_SIZE_V1
     * @property {number} ENCRYPTION_MASK
     * @property {number} SERVICE_TYPE_CONTROL
     * @property {number} SERVICE_TYPE_RPC
     * @property {number} SERVICE_TYPE_PCM
     * @property {number} SERVICE_TYPE_VIDEO
     * @property {number} SERVICE_TYPE_BULK_DATA
     * @property {number} FRAME_INFO_HEART_BEAT
     * @property {number} FRAME_INFO_START_SERVICE
     * @property {number} FRAME_INFO_START_SERVICE_ACK
     * @property {number} FRAME_INFO_START_SERVICE_NAK
     * @property {number} FRAME_INFO_END_SERVICE
     * @property {number} FRAME_INFO_END_SERVICE_ACK
     * @property {number} FRAME_INFO_END_SERVICE_NAK
     * @property {number} FRAME_INFO_REGISTER_SECONDARY_TRANSPORT
     * @property {number} FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_ACK
     * @property {number} FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_NAK
     * @property {number} FRAME_INFO_TRANSPORT_EVENT_UPDATE
     * @property {number} FRAME_INFO_SERVICE_DATA_ACK
     * @property {number} FRAME_INFO_HEART_BEAT_ACK
     * @property {number} FRAME_INFO_FINAL_CONNESCUTIVE_FRAME
     * @property {number} FRAME_INFO_RESERVED

     * @property {function} getVersion
     * @property {function} getEncryption
     * @property {function} getServiceType
     * @property {function} getFrameInfo
     * @property {function} getSessionID
     * @property {function} getMessageID
     * @property {function} getDataSize
     * @property {function} setPayload
     * @property {function} getPayload
     * @property {function} getEncryptionBit
     * @property {function} getFrameType
     * @property {function} toUint8Array
     * @property {function} toString
     * @property {function} constructPacket
     * @property {function} putTag
     * @property {function} getTag
     */

    class SdlPacket {
        /**
        * @constructor
        * @param {Number} version - Protocol version to use
        * @param {Boolean} encryption - Whether or not the payload in this packet is encrypted
        * @param {FrameType} frameType - A number representing the packet frame type
        * @param {ServiceType} serviceType - The service that this packet is associated with
        * @param {Number} frameInfo - Specific frame info related to this packet
        * @param {Number} sessionID - ID this packet is associated with
        * @param {Number} dataSize - Size of the payload that will be added
        * @param {Number} messageID - ID of this specific packet
        * @param {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        * @param {Number} offset
        * @param {Number} bytesToWrite
        */
        constructor (version = 1, encryption = false, frameType = -1, serviceType = -1, frameInfo = -1, sessionID = 0, dataSize = 0, messageID = 0, payload = null, offset = 0, bytesToWrite = 0) {
            this._version = version;
            this._encryption = encryption;
            this._frameType = frameType;
            this._serviceType = serviceType;
            this._frameInfo = frameInfo;
            this._sessionID = sessionID;
            this._dataSize = dataSize;
            this._messageID = messageID;
            this._payload = payload;
            this._offset = offset;
            this._bytesToWrite = bytesToWrite;

            this._bsonPayload = undefined;

            if (payload !== null) {
                this._payload = new Uint8Array(payload.slice(offset, bytesToWrite + offset));
            }

            return this;

        }

        /**
        * @return {Number} - Protocol version used by this packet
        */
        getVersion () {
            return this._version;
        }

        /**
        * @return {Boolean} - Whether or not the payload in this packet is encrypted
        */
        getEncryption () {
            return this._encryption;
        }

        /**
        * @return {ServiceType} - The service that this packet is associated with
        */
        getServiceType () {
            return this._serviceType;
        }

        /**
        * @return {Number} - Specific frame info related to this packet
        */
        getFrameInfo () {
            return this._frameInfo;
        }

        /**
        * @return {Number} - ID this packet is associated with
        */
        getSessionID () {
            return this._sessionID;
        }

        /**
        * @return {Number} - ID of this specific packet
        */
        getMessageID () {
            return this._messageID;
        }

        /**
        * @return {Number} - Size of the payload that will be added
        */
        getDataSize () {
            return this._dataSize;
        }

        /**
        * @param {Uint8Array} payload
        * @return {SdlPacket}
        */
        setPayload (payload) {
            this._payload = payload;
            return this;
        }

        /**
        * @return {Uint8Array} - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
        */
        getPayload () {
            return this._payload;
        }


        /**
         *
         * @param {Boolean} encryption
         * @return {Number} - Returns a number representing a byte mask depending on the boolean value
         */
        static getEncryptionBit (encryption) {
            return encryption ? SdlPacket.ENCRYPTION_MASK : 0;

        }

        /**
        * @return {FrameType} - A number representing the packet frame type
        */
        getFrameType () {
            if (FrameType.valueForString(this._frameType) !== null) {
                return this._frameType;
            } else {
                return FrameType.SINGLE;
            }
        }

        /**
        * @return {String} - String representation of the packet
        */
        toString () {
            let output = '***** Sdl Packet *****';
            output += `\nVersion: ${this._version}`;
            output += `\nEncryption: ${this._encryption}`;
            output += `\nFrameType: ${this._frameType}`;
            output += `\nServiceType: ${this._serviceType}`;
            output += `\nFrameInfo: ${this._frameInfo}`;
            output += `\nSessionID: ${this._sessionID}`;
            output += `\nDataSize: ${this._dataSize}`;

            if (this._version > 1) {
                output += `\nMessageID: ${this._messageID}`;
            }

            output += '\n***** Sdl Packet End *****';

            return output;
        }

        /**
    	 * This method takes in the various components to the SDL packet structure and creates a new byte array that can be sent via the transport
         * @param {Number} version - Protocol version to use
         * @param {Boolean} encryption - Whether or not the payload in this packet is encrypted
         * @param {FrameType} frameType - A number representing the packet frame type
         * @param {ServiceType} serviceType - The service that this packet is associated with
         * @param {Number} controlFrameInfo - Specific frame info related to this packet
         * @param {Number} sessionID - ID this packet is associated with
         * @param {Number} dataSize - Size of the payload that will be added
         * @param {Number} messageID - ID of this specific packet
         * @param {Uint8Array} payload - Raw data that will be attached to the packet (RPC message, raw bytes, etc)
    	 * @return {Uint8Array} - A byte[] representation of an SdlPacket built using the supplied params
    	 */
        static constructPacket (version, encryption, frameType, serviceType, controlFrameInfo, sessionID, dataSize, messageID, payload) {
            let dataView = null;
            let dataViewIndex = 0;

            if (version > 1) {
                dataView = new Uint8Array(SdlPacket.HEADER_SIZE + dataSize);
            } else {
                dataView = new Uint8Array(SdlPacket.HEADER_SIZE_V1 + dataSize);
            }

            dataView[dataViewIndex++] = (version << 4) + SdlPacket.getEncryptionBit(encryption) + frameType;
            dataView[dataViewIndex++] = serviceType;
            dataView[dataViewIndex++] = controlFrameInfo;
            dataView[dataViewIndex++] = sessionID;
            dataView[dataViewIndex++] = (dataSize & 0xFF000000) >> 24;
            dataView[dataViewIndex++] = (dataSize & 0x00FF0000) >> 16;
            dataView[dataViewIndex++] = (dataSize & 0x0000FF00) >> 8;
            dataView[dataViewIndex++] = dataSize & 0x000000FF;

            if (version > 1) {
                dataView[dataViewIndex++] = (messageID & 0xFF000000) >> 24;
                dataView[dataViewIndex++] = (messageID & 0x00FF0000) >> 16;
                dataView[dataViewIndex++] = (messageID & 0x0000FF00) >> 8;
                dataView[dataViewIndex++] = messageID & 0x000000FF;
            }

            if (payload !== null && payload.length > 0) {
                dataView.set(payload, dataViewIndex);
            }

            return dataView;
        }

        /**
    	 * This method converts an SdlPacket instance to a new byte array that can be sent via the transport
    	 * @return {Uint8Array} - A byte[] representation of an SdlPacket built using the supplied params
    	 */
        toPacket () {
            if (this._bsonPayload) {
                this._payload = Bson.serialize(this._bsonPayload);
                this._dataSize = this._payload.length;
            }

            return SdlPacket.constructPacket(this._version, this._encryption, this._frameType, this._serviceType, this._frameInfo, this._sessionID, this._dataSize, this._messageID, this._payload);
        }

        /**
         * @param {String} tag - String key to add as a property to the BSON map
         * @param {Object} data - Object to add as a value to the BSON map
         */
        putTag (tag, data) {
            if (!this._bsonPayload) {
                this._bsonPayload = {};
            }
            this._bsonPayload[tag] = data;
        }

        /**
         * @param {String} tag - String key to add as a property to the BSON map
         * @return {Object} data - Object as a value found from the the BSON map
         */

        getTag (tag) {
            if (!this._bsonPayload) {
                if (!this._payload || this._payload.length === 0) {
                    return null;
                }
                this._bsonPayload = Bson.deserialize(this._payload);
                return this._bsonPayload[tag];
            } else {
                return this._bsonPayload[tag];
            }
        }
    }

    SdlPacket.EXTRA_PARCEL_DATA_LENGTH                      = 24;
    SdlPacket.HEADER_SIZE                                   = 12;
    SdlPacket.HEADER_SIZE_V1                                = 8;

    SdlPacket.ENCRYPTION_MASK                               = 0x08;

    /**
     * Service Type
     */
    SdlPacket.SERVICE_TYPE_CONTROL                          = 0x00;
    // RESERVED 0x01 - 0x06
    SdlPacket.SERVICE_TYPE_RPC                              = 0x07;
    // RESERVED 0x08 - 0x09
    SdlPacket.SERVICE_TYPE_PCM                              = 0x0A;
    SdlPacket.SERVICE_TYPE_VIDEO                            = 0x0B;
    // RESERVED 0x0C - 0x0E
    SdlPacket.SERVICE_TYPE_BULK_DATA                        = 0x0F;
    // RESERVED 0x10 - 0xFF

    /**
     * Frame Info
     */
    SdlPacket.FRAME_INFO_HEART_BEAT                         = 0x00;
    SdlPacket.FRAME_INFO_START_SERVICE                      = 0x01;
    SdlPacket.FRAME_INFO_START_SERVICE_ACK                  = 0x02;
    SdlPacket.FRAME_INFO_START_SERVICE_NAK                  = 0x03;
    SdlPacket.FRAME_INFO_END_SERVICE                        = 0x04;
    SdlPacket.FRAME_INFO_END_SERVICE_ACK                    = 0x05;
    SdlPacket.FRAME_INFO_END_SERVICE_NAK                    = 0x06;
    SdlPacket.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT       = 0x07;
    SdlPacket.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_ACK   = 0x08;
    SdlPacket.FRAME_INFO_REGISTER_SECONDARY_TRANSPORT_NAK   = 0x09;
    // 0x0A-0xFC are reserved
    SdlPacket.FRAME_INFO_TRANSPORT_EVENT_UPDATE             = 0xFD;
    SdlPacket.FRAME_INFO_SERVICE_DATA_ACK                   = 0xFE;
    SdlPacket.FRAME_INFO_HEART_BEAT_ACK                     = 0xFF;
    SdlPacket.FRAME_INFO_FINAL_CONNESCUTIVE_FRAME           = 0x00;
    SdlPacket.FRAME_INFO_RESERVED                           = 0x00;

    var global$1 = (typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                typeof window !== "undefined" ? window : {});

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited = false;
    function init () {
      inited = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }

    function toByteArray (b64) {
      if (!inited) {
        init();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      if (!inited) {
        init();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3F];
        output += lookup[(tmp << 2) & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('')
    }

    function read (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    function write (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    }

    var toString = {}.toString;

    var isArray = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };

    var INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1.TYPED_ARRAY_SUPPORT
      : true;

    function kMaxLength () {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer (that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr
    };

    function from (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }

      return fromObject(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
    }

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc (that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    };

    function allocUnsafe (that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    };

    function fromString (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike (that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that
    }

    function fromObject (that, obj) {
      if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }
    Buffer.isBuffer = isBuffer;
    function internalIsBuffer (b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer.compare = function compare (a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) return 0

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer.concat = function concat (list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength (string, encoding) {
      if (internalIsBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) return 0

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) return utf8ToBytes(string).length // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };

    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };

    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };

    Buffer.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    };

    Buffer.prototype.equals = function equals (b) {
      if (!internalIsBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    };

    Buffer.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) str += ' ... ';
      }
      return '<Buffer ' + str + '>'
    };

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray(buf)
      } else {
        return fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset]
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, true, 23, 4)
    };

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 4, this.length);
      return read(this, offset, false, 23, 4)
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, true, 52, 8)
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) checkOffset(offset, 8, this.length);
      return read(this, offset, false, 52, 8)
    };

    function checkInt (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32 (buf, value, offset, littleEndian) {
      if (value < 0) value = 0xffffffff + value + 1;
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim (str) {
      if (str.trim) return str.trim()
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }


    function base64ToBytes (str) {
      return toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan (val) {
      return val !== val // eslint-disable-line no-self-compare
    }


    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
    }

    function isFastBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
    }

    class TextEncoder {
        // https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder#Polyfill
        static encode (str) {
            const Len = str.length;
            let resPos = -1;
            // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
            //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
            //  have an auto expanding length and 1.5x should be just the right balance for most uses.
            const resArr = [];
            for (let point = 0, nextcode = 0, idx = 0; idx !== Len;) {
                point = str.charCodeAt(idx), idx += 1;
                if (point >= 0xD800 && point <= 0xDBFF) {
                    if (idx === Len) {
                        resArr[resPos += 1] = 0xef; 
                        resArr[resPos += 1] = 0xbf;
                        resArr[resPos += 1] = 0xbd; 
                        break;
                    }
                    // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                    nextcode = str.charCodeAt(idx);
                    if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                        point = ((point - 0xD800) * 0x400) + nextcode - 0xDC00 + 0x10000;
                        idx += 1;
                        if (point > 0xffff) {
                            resArr[resPos += 1] = (0x1e << 3) | (point >>> 18);
                            resArr[resPos += 1] = (0x2 << 6) | ((point >>> 12) & 0x3f);
                            resArr[resPos += 1] = (0x2 << 6) | ((point >>> 6) & 0x3f);
                            resArr[resPos += 1] = (0x2 << 6) | (point & 0x3f);
                            continue;
                        }
                    } else {
                        resArr[resPos += 1] = 0xef; resArr[resPos += 1] = 0xbf;
                        resArr[resPos += 1] = 0xbd; continue;
                    }
                }
                if (point <= 0x007f) {
                    resArr[resPos += 1] = (0x0 << 7) | point;
                } else if (point <= 0x07ff) {
                    resArr[resPos += 1] = (0x6 << 5) | (point >>> 6);
                    resArr[resPos += 1] = (0x2 << 6) | (point & 0x3f);
                } else {
                    resArr[resPos += 1] = (0xe << 4) | (point >>> 12);
                    resArr[resPos += 1] = (0x2 << 6) | ((point >>> 6) & 0x3f);
                    resArr[resPos += 1] = (0x2 << 6) | (point & 0x3f);
                }
            }
            // else // IE 6-9
            resArr.length = resPos + 1; // trim off extra weight
            return resArr;
        }
    }

    class JsonRpcMarshaller {
        /**
         * Takes an RPC message and converts it
         * into a byte array that can be added
         * as part of the SdlPacket.
         * @param {RpcStruct} rpcStruct - This param contains the json object to transform
         * based on the getParameters method. This can be an RpcStruct or something like RpcMessage
         * which extends RpcStruct.
         * @returns {null|Uint8Array} - Either the byte array or null on error.
         */
        static marshall (rpcStruct) {
            let jsonBytes = null;
            function paramify (rpcStruct) {
                const params = rpcStruct.getParameters();
                for (const key in params) {
                    if (params[key] instanceof RpcStruct) {
                        params[key] = paramify(params[key]);
                    }
                }
                return params;
            }

            try {
                const jsonObject = paramify(rpcStruct);
                const stringVersion = JSON.stringify(jsonObject);
                jsonBytes = this._encode(stringVersion);
            } catch (error) {
                console.error('Failed to encode messages to JSON.', error);
            }
            return jsonBytes;
        }

        /**
         * Takes a byte array and transforms it into a json object.
         * @param {Uint8Array} bytes - Byte array containing the json string to convert.
         * @returns {null|Object} - Either a json object or null on error in parsing.
         */
        static unmarshall (bytes) {
            let ret = null;
            try {
                const jsonString = this._decode(bytes);
                ret = JSON.parse(jsonString);
            } catch (error) {
                console.error('Failed to parse JSON', error);
            }
            return ret;
        }

        /**
         * Transform a string into a byte array.
         * @param {String} str - String to transform.
         * @returns {Uint8Array}
         * @private
         */
        static _encode (str) {
            return new Uint8Array(TextEncoder.encode(str));
        }

        /**
         * Transform a byte array into a string.
         * @param {Uint8Array} bytes - Byte array to transform.
         * @returns {String}
         * @private
         */
        static _decode (bytes) {
            return Buffer.from(bytes).toString();
        }
    }

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

    /**
     * Contains the raw json data and bulk data for an RPC request/response along with the basic header info
     * rpc type, function id, and correlation id.
     *
     * This class can parse incoming data from sdl core and assemble a binary header to send to sdl core.
     *
     *
     *  @private {number} _rpcType - Request = 0, Response = 1, Notification = 2.
     *  @private {number} _functionId - Matches a function Id in the mobile api spec https://github.com/smartdevicelink/rpc_spec/blob/master/MOBILE_API.xml
     *  @private {number} _correlationId - For a request this id is provided and the matching response will have this same id.
     *  @private {number} _jsonSize - Size of json.
     *  @private {Uint8Array} _jsonData - Raw json data. This can be parsed using the JsonRpcMarshaller.
     *  @private {Uint8Array} _bulkData - Bulk data (optional). If something cannot be expressed as a json object it will be in the bulk data (eg PutFile/GetFile has the full file in bulk data.)
     */
    class BinaryFrameHeader {
        /**
         *
         * @param {number} rpcType
         * @param {number} functionId
         * @param {number} correlationId
         * @param {number} jsonSize
         * @constructor
         */
        constructor (rpcType, functionId, correlationId, jsonSize) {
            this._rpcType = rpcType;
            this._functionId = functionId;
            this._correlationId = correlationId;
            this._jsonSize = jsonSize;
            this._bulkData = null;
            this._jsonData = null;
        }

        /**
         * Given a byte array with uint8 values, a BinaryFrameHeader instance is created.
         * @param {array} binaryFrameHeaderData - Byte array containing basic information on the frames type, length, and related ids.
         * @returns {BinaryFrameHeader}
         */
        static fromBinaryHeader (binaryFrameHeaderData) {
            const rpcType = binaryFrameHeaderData[0] >> 4;

            let functionId = (binaryFrameHeaderData[0] & 0x0F) << 24;
            functionId += (binaryFrameHeaderData[1] & 0xFF) << 16;
            functionId += (binaryFrameHeaderData[2] & 0xFF) << 8;
            functionId += binaryFrameHeaderData[3] & 0xFF;

            let correlationId = (binaryFrameHeaderData[4] & 0xFF) << 24;
            correlationId += (binaryFrameHeaderData[5] & 0xFF) << 16;
            correlationId += (binaryFrameHeaderData[6] & 0xFF) << 8;
            correlationId += binaryFrameHeaderData[7] & 0xFF;

            let jsonSize = (binaryFrameHeaderData[8] & 0xFF) << 24;
            jsonSize += (binaryFrameHeaderData[9] & 0xFF) << 16;
            jsonSize += (binaryFrameHeaderData[10] & 0xFF) << 8;
            jsonSize += binaryFrameHeaderData[11] & 0xFF;

            const binaryFrameHeader = new BinaryFrameHeader(rpcType, functionId, correlationId, jsonSize);

            const jsonDataStart = BinaryFrameHeader.HEADER_SIZE;
            const jsonDataEnd = BinaryFrameHeader.HEADER_SIZE + jsonSize;

            binaryFrameHeader.setJsonData(binaryFrameHeaderData.slice(jsonDataStart, jsonDataEnd));

            // any data after the JSON data is the bulk data (eg PutFile contains the file after the main json)
            if (binaryFrameHeaderData.length > jsonDataEnd) {
                const bulkData = binaryFrameHeaderData.slice(jsonDataEnd);
                binaryFrameHeader.setBulkData(bulkData);
            }
            return binaryFrameHeader;
        }


        /**
         * Assembles binary header data.
         * @returns {array}
         */
        assembleHeaderBytes () {
            const buffer = [];
            const functionId = this._functionId;
            const correlationId = this._correlationId;
            const rpcType = this._rpcType;

            buffer.push((functionId & 0x0F000000) >> 24) + (rpcType << 4);
            buffer.push((functionId & 0x00FF0000) >> 16);
            buffer.push((functionId & 0x0000FF00) >> 8);
            buffer.push(functionId & 0x000000FF);

            buffer.push((correlationId & 0xFF000000) >> 24);
            buffer.push((correlationId & 0x00FF0000) >> 16);
            buffer.push((correlationId & 0x0000FF00) >> 8);
            buffer.push(correlationId & 0x000000FF);

            const jsonSize = this._jsonSize;
            buffer.push((jsonSize & 0xFF000000) >> 24);
            buffer.push((jsonSize & 0x00FF0000) >> 16);
            buffer.push((jsonSize & 0x0000FF00) >> 8);
            buffer.push(jsonSize & 0x000000FF);

            return buffer;
        }

        /**
         * Sets the rpc type of the binary header.
         * @param {number} type
         * @returns {BinaryFrameHeader}
         */
        setRpcType (type) {
            this._rpcType = type;
            return this;
        }

        /**
         * Gets the rpc type of the binary header
         * @returns {number}
         */
        getRpcType () {
            return this._rpcType;
        }

        /**
         * Sets the function id of the binary header.
         * @param {number} id
         * @returns {BinaryFrameHeader}
         */
        setFunctionId (id) {
            this._functionId = id;
            return this;
        }

        /**
         * Gets the function Id of the binary header.
         * @returns {number}
         */
        getFunctionId () {
            return this._functionId;
        }

        /**
         * Sets the correlation Id of the binary header.
         * @param {number} id
         * @returns {BinaryFrameHeader}
         */
        setCorrelationId (id) {
            this._correlationId = id;
            return this;
        }

        /**
         * Gets the correlation Id of the binary header.
         */
        getCorrelationId () {
            return this._correlationId;
        }

        /**
         * Sets the json size of the binary header.
         * @param {number} size
         * @returns {BinaryFrameHeader}
         */
        setJsonSize (size) {
            this._jsonSize = size;
            return this;
        }

        /**
         * Gest the json size of the binary header.
         * @returns {number}
         */
        getJsonSize () {
            return this._jsonSize;
        }

        /**
         * Returns the json data as a byte array.
         * @returns {array} - Byte array of json data.
         */
        getJsonData () {
            return this._jsonData;
        }

        /**
         * Sets the json data of the binary header.
         * @param {array} data - Byte array of json data
         * @returns {BinaryFrameHeader}
         */
        setJsonData (data) {
            this._jsonData = data;
            return this;
        }

        /**
         * Sets the bulk data of the binary header.
         * Supported by protcol 2 and up.
         * @param {array} data - Byte array of bulk data
         */
        setBulkData (data) {
            this._bulkData = data;
            return this;
        }

        /**
         * Gets the bulk data of the binary header.
         * Supported by protcol 2 and up.
         * @returns {array} - Byte array of bulk data
         */
        getBulkData () {
            return this._bulkData;
        }
    }

    BinaryFrameHeader.HEADER_SIZE = 12;

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


    /**
     * Takes an rpc message and converts it into packets ready to send.
     */
    class MessageFrameDisassembler {
        /**
          * 
          * @param {RpcRequest} rpcRequest - RPC message that will split into smaller sdl packets.
          * @param {Number} sessionId - sessionId for packets
          * @param {Number} messageId - messageId for packets.
          * @param {Number} mtu - max transport unit, used to determine packet size to send.
          * @param {Number} version - major version
          * @param {Boolean} isEncrypted - packet is encrypted
          * @param {cb} packetCallback - This function will be called when a packet is ready to send.
          * @constructor
          */
        constructor (rpcRequest, sessionId, messageId, mtu, version, isEncrypted, packetCallback) {
            this._rpcRequest = rpcRequest;
            this._sessionId = sessionId;
            this._messageId = messageId;
            this._isEncrypted = isEncrypted;

            if (!mtu) {
                throw 'MTU must be specified.';
            }
            this._mtu = mtu;

            if (!version) {
                throw 'Version must be specified.';
            }
            this._version = version;
            this._packetCallback = packetCallback;
        }

        /**
          * Immediately build rpc and respond to packetcallback with packets to send.
          * @param {RpcRequest} rpcMessage - RPC message that will split into smaller sdl packets.
          * @param {Number} sessionId - sessionId for packets
          * @param {Number} messageId - messageId for packets.
          * @param {Number} mtu - max transport unit, used to determine packet size to send.
          * @param {Number} version - major version
          * @param {Boolean} isEncrypted - packet is encrypted
          * @param {cb} packetCallback - This function will be called when a packet is ready to send.
          */
        static buildRPC (rpcRequest, sessionId, messageId, mtu, version, isEncrypted, cb) {
            const obj = new MessageFrameDisassembler(rpcRequest, sessionId, messageId, mtu, version, isEncrypted, cb);
            obj.doRequest();
            return obj;
        }


        /**
         * Constructs the main BinaryFrameHeader buffer.
         * @returns {Unit8Array}
         */
        _buildRPCMainBuffer () {
            const rpcBulkData = this._rpcRequest.getBulkData();
            const correlationId = this._rpcRequest.getCorrelationId();
            const rpcType =  this._rpcRequest.getRPCType();

            const functionName = this._rpcRequest.getFunctionName();
            const functionId = FunctionID.valueForString(functionName);
            if (!functionId) {
                throw new Error(`Failed to find function ${functionName}`);
            }

            const jsonBuffer = JsonRpcMarshaller.marshall(this._rpcRequest);
            const jsonSize = jsonBuffer.length;

            const bfh = new BinaryFrameHeader(rpcType, functionId, correlationId);
            bfh.setJsonData(jsonBuffer);
            bfh.setJsonSize(jsonSize);
            bfh.setBulkData(rpcBulkData);
            const headerSize = 12;
            const bulkData = bfh.getBulkData();
            let bulkDataSize = 0;
            if (bulkData) {
                bulkDataSize = bulkData.length;
            }
            const totalMessageSize = headerSize + jsonSize + bulkDataSize;
            const data = new Uint8Array(totalMessageSize);
            data.set(bfh.assembleHeaderBytes(), 0);
            data.set(jsonBuffer, headerSize);
            if (bulkData) {
                data.set(bulkData, headerSize + jsonSize);
            }
            return data;
        }


        /**
         * Start the RPC request and use callback to send
         * sdl packets of the appropriate size.
         */
        doRequest () {
            const version = this._version;
            const frameInfo = 0;
            const frameType = FrameType.SINGLE;

            const serviceType = SdlPacket.SERVICE_TYPE_RPC;
            const sessionId = this._sessionId;
            const messageId = this._messageId;
        
            const isEncrypted = this._isEncrypted;
            const mainBuffer = this._buildRPCMainBuffer();
            const mtu = this._mtu;

            const frameCount = Math.ceil(mainBuffer.length / mtu);

            if (frameCount <= 1) {
                const fullPacket = this._constructPacket(
                    version,
                    serviceType,
                    frameInfo,
                    sessionId,
                    messageId,
                    frameType,
                    mainBuffer,
                    isEncrypted
                );
                this._packetCallback(fullPacket);
            } else {
                const buffer = new ArrayBuffer(8); // Int32 has 8 bytes
                const view = new DataView(buffer);
                view.setUint32(0, mainBuffer.length, false);
                view.setUint32(4, frameCount, false);            
                const payload = new Uint8Array(buffer);

                const firstHeader = this._constructPacket(version, serviceType, frameInfo, sessionId, messageId, FrameType.FIRST, payload, isEncrypted);
                this._packetCallback(firstHeader);

                this._buildConsecutiveFrames(
                    version,
                    serviceType,
                    sessionId,
                    messageId,
                    mainBuffer,
                    mtu,
                    isEncrypted
                );
            }
        }


        /**
         * Creates an sdl packet.
         * @param {Number} version 
         * @param {ServiceType} serviceType 
         * @param {Number} frameInfo 
         * @param {Number} sessionId 
         * @param {Number} messageId 
         * @param {Number} frameType 
         * @param {Unit8Array} payload 
         * @param {Boolean} isEncrypted 
         * @returns {SdlPacket}
         */
        _constructPacket (version, serviceType, frameInfo, sessionId, messageId, frameType, payload, isEncrypted) {
            const dataSize = payload.length;
            const offset = 0;
            const bytesToWrite = dataSize;
            const sdlPacket = new SdlPacket(version, isEncrypted, frameType, serviceType, frameInfo, sessionId, dataSize, messageId, payload, offset, bytesToWrite);
            return sdlPacket;
        }


        /**
         * Builds consecutive frames after the inital frame is sent for a multi-frame message.
         * @param {Number} version 
         * @param {ServiceType} serviceType 
         * @param {Number} sessionId 
         * @param {Number} messageId 
         * @param {Buffer} buffer 
         * @param {Number} length 
         * @param {Boolean} isEncrypted 
         */
        _buildConsecutiveFrames (version, serviceType, sessionId, messageId, buffer, length, isEncrypted) {
            let frameSequenceNumber;
            let count = 0;
            let offset = 0;

            while (frameSequenceNumber !== 0) {
                if (offset + length >= buffer.length) {
                    frameSequenceNumber = 0; // last frame
                } else {
                    frameSequenceNumber = (count % 255) + 1; // 1,2,3,...,255,1
                }

                const header = this._constructPacket(
                    version,
                    serviceType,
                    frameSequenceNumber,
                    sessionId,
                    messageId,
                    FrameType.CONSECUTIVE,
                    buffer.slice(offset, offset + length),
                    isEncrypted
                );
                this._packetCallback(header);
                count++;
                offset += length;
            }
        }
    }

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

    class TransportListener {
        /**
         * @constructor
         */
        constructor () {
            this._onTransportConnected = null;
            this._onTransportDisconnected = null;
            this._onError = null;
            this._onPacketReceived = null;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnTransportConnected (func) {
            this._onTransportConnected = func;

            return this;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnTransportDisconnected (func) {
            this._onTransportDisconnected = func;

            return this;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnError (func) {
            this._onError = func;

            return this;
        }

        /**
         * @param {Function} func
         * @return {TransportListener}
         */
        setOnPacketReceived (func) {
            this._onPacketReceived = func;

            return this;
        }


        onTransportConnected () {
            if (typeof this._onTransportConnected === 'function') {
                this._onTransportConnected();
            }
        }

        onTransportDisconnected () {
            if (typeof this._onTransportDisconnected === 'function') {
                this._onTransportDisconnected();
            }
        }

        onError (error = null) {
            if (typeof this._onError === 'function') {
                this._onError(error);
            }
        }

        onPacketReceived (sdlPacket) {
            if (typeof this._onPacketReceived === 'function') {
                this._onPacketReceived(sdlPacket);
            }
        }
    }

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

    class Version {

        /**
        * @constructor
        */
        constructor(major, minor, patch) {
            this.setMajor(major);
            this.setMinor(minor);
            this.setPatch(patch);
        }

        /**
        * @param {Number} major
        * @return {Version}
        */
        setMajor(major) {
            this._major = parseInt(major) || 0;

            return this;
        }

        /**
        * @return {Number}
        */
        getMajor() {
            return this._major;
        }

        /**
        * @param {Number} minor
        * @return {Version}
        */
        setMinor(minor) {
            this._minor = parseInt(minor) || 0;

            return this;
        }

        /**
        * @return {Number}
        */
        getMinor() {
            return this._minor;
        }

        /**
        * @param {Number} patch
        * @return {Version}
        */
        setPatch(patch) {
            this._patch = parseInt(patch) || 0;

            return this;
        }

        /**
        * @return {Number}
        */
        getPatch() {
            return this._patch;
        }

        /**
        * @param {String} version - Parse this string to a Version object
        * @return {Version}
        */
        fromString(version) {
            let versions = version.split(".");
            if (versions.length != 3) throw "Incorrect version string format";
            this.setMajor(versions[0]);
            this.setMinor(versions[1]);
            this.setPatch(versions[2]);

            return this;
        }

        /**
        * @return {String}
        */
        toString() {
            return `${this.getMajor()}.${this.getMinor()}.${this.getPatch()}`;
        }

        /**
        * Method to test if this instance of Version is newer than the supplied one.
        * @param version - the version to check against
        * @return {Number} - 1 if this instance is newer, -1 if supplied version is newer, and 0 if they are equal
        */
        isNewerThan(version) {
            if(this.getMajor() > version.getMajor()){
                return 1;
            }else if(this.getMajor() == version.getMajor()){
                if(this.getMinor() > version.getMinor()){
                    return 1;
                } else if(this.getMinor() == version.getMinor()){
                    if(this.getPatch() > version.getPatch()){
                        return 1;
                    }else if(this.getPatch() == version.getPatch()){
                        return 0;
                    }
                }
            }
            return -1;
        }
    }

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

    /**
     * @typedef {Enum} ServiceType
     * @property {Object} _MAP
     */
    class ServiceType extends Enum {
        /**
        * @constructor
        */
        constructor () {
            super();
        }

        /**
        * @return {Number}
        */
        static get CONTROL () {
            return ServiceType._MAP.CONTROL;
        }

        /**
        * @return {Number}
        */
        static get RPC () {
            return ServiceType._MAP.RPC;
        }

        /**
        * @return {Number}
        */
        static get AUDIO () {
            return ServiceType._MAP.AUDIO;
        }

        /**
        * @return {Number}
        */
        static get VIDEO () {
            return ServiceType._MAP.VIDEO;
        }

        /**
        * @return {Number}
        */
        static get HYBRID () {
            return ServiceType._MAP.HYBRID;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @return {null|Number} - Returns null if the enum value doesn't exist
        */
        static valueForString (value) {
            for (const key in ServiceType._MAP) {
                if (ServiceType._MAP[key] === value) {
                    return ServiceType._MAP[key];
                }
            }

            return null;
        }
    }

    ServiceType._MAP = Object.freeze({
        'CONTROL': 0x00,
        'RPC': 0x07,
        'AUDIO': 0x0A,
        'VIDEO': 0x0B,
        'HYBRID':0x0F,
    });

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

    /**
     * Callback for finished packet.
     * @callback cb
     * @param {string} error - If there is an error that cannot be recovered from it will be returned.
     * @param {SdlPacket} sdlPacket - Finished sdl packet.
     */

    /**
     * Assembles sdl packets which may come in seperate chunks if the data exceeds the
     * max transport unit allowed by sdl core.
     *
     * @private {cb} _callback - Callback for combined packet.
     * @private {number} _totalConsecutiveFrames - Total consecutive frames expected for a multiframe packet.
     * @private {number} _consecutiveFramesDataLength - Expected data length of finished multiframe packet.
     * @private {number} _consecutiveFramesHandledCount - Running total of consecutive frames received and handled.
     * @private {array} _accumulator Combines incoming bytes from consecutive frames.
     */
    class MessageFrameAssembler {
        /**
        * @constructor
        * @param {cb} callback
        */
        constructor (callback) {
            if (typeof callback !== 'function') {
                throw 'Callback not of expected type (function) for MessageFrameAssembler';
            }

            this._callback = callback;

            this._accumulator = [];
            this._totalConsecutiveFrames = 0;
            this._consecutiveFramesHandledCount = 0;
            this._consecutiveFramesDataLength = 0;
        }

        /**
         * Accepts a single frame or multiframe packet. The callback is used when the packet
         * is completely read. For a single frame this is immediately. For a multi frame packet
         * @param {SdlPacket} sdlPacket - Incoming sdl packet to be read.
        */
        handleFrame (sdlPacket) {
            const frameType = sdlPacket.getFrameType();
            // If the sdl packet is a single frame nothing needs to be assembled and this can be returned immediately.
            if (frameType !== FrameType.FIRST && frameType !== FrameType.CONSECUTIVE) {
                return this._callback(null, sdlPacket);
            }
            return this._handleMultiFrameMessage(sdlPacket);
        }

        /**
         * Handles the first data frame. Sets the expected frame count and data length.
         * @param {SdlPacket} sdlPacket
         * @private
         */
        _handleFirstDataFrame (sdlPacket) {
            /** @type {array} Array of uint8 */
            const payload = sdlPacket.getPayload();

            if (payload instanceof Uint8Array !== true || payload.length !== 8) {
                throw 'Error handling first frame. Payload is an invalid length should be length 8.';
            }
            for (const byte in payload) {
                if (byte < 0x00 || byte > 0xFF) {
                    throw 'Invlaid payload. Must be an array of unit8 bytes.';
                }
            }

            // first 4 8-bit integers contain the data length.
            let dataLength = (payload[0] & 0x0F) << 24; // 8-bit x 3
            dataLength += (payload[1] & 0xFF) << 16; // 8 x 2
            dataLength += (payload[2] & 0xFF) << 8; // 8 x 1
            dataLength += payload[3] & 0xFF; // 8 x 0

            let frameCount = (payload[4] & 0xFF) << 24;
            frameCount += (payload[5] & 0xFF) << 16;
            frameCount += (payload[6] & 0xFF) << 8;
            frameCount += payload[7] & 0xFF;

            this._totalConsecutiveFrames = frameCount;
            this._consecutiveFramesDataLength = dataLength;
        }

        /**
         * First frame should be read in before this is called. Once the last
         * frame is read, callback is used.
         * @param {SdlPacket} sdlPacket
         */
        _handleConsecutiveFrame (sdlPacket) {
            this._consecutiveFramesHandledCount++;

            const frameType = sdlPacket.getFrameType();
            /**
             * frameSequence nth frame, or 0 for last frame,
             * 8 bits are used to store this info so the count reverts to 1 after 255
             * This doesn't affect reading the packet but it is notable if frame sequence is relied on.
             */
            const frameSequence = sdlPacket.getFrameInfo();

            const payload = sdlPacket.getPayload();

            for (const byte of payload) {
                this._accumulator.push(byte);
            }

            // This is the last frame, finish things up and use callback.
            if (frameSequence === 0) {
                if (this._consecutiveFramesHandledCount !== this._totalConsecutiveFrames) {
                    console.warn(`Total frames expected ${this._totalConsecutiveFrames} does not match total frames received ${this._consecutiveFramesHandledCount}`);
                }

                if (this._consecutiveFramesDataLength !== this._accumulator.length) {
                    console.warn(`Total data expected ${this._consecutiveFramesDataLength} does not match total data received ${this._accumulator.length}`);
                }

                const finishedSdlPacket = new SdlPacket(
                    sdlPacket.getVersion(),
                    sdlPacket.getEncryption(),
                    frameType,
                    sdlPacket.getServiceType(),
                    frameSequence,
                    sdlPacket.getSessionID(),
                    this._accumulator.length,
                    sdlPacket.getMessageID(),
                    this._accumulator,
                    0, // no offset
                    this._accumulator.length // read the entire buffer
                );

                this._callback(null, finishedSdlPacket);
            }
        }

        /**
         * Handle the sdl packet based on its frame type, FIRST or CONSECUTIVE.
         * Callback is used when final packet is read.
         * @param {SdlPacket} sdlPacket - Sdl packet to be read.
         */
        _handleMultiFrameMessage (sdlPacket) {
            const frameType = sdlPacket.getFrameType();
            if (frameType === FrameType.FIRST) {
                return this._handleFirstDataFrame(sdlPacket);
            } else { // FrameType.Consecutive
                return this._handleConsecutiveFrame(sdlPacket);
            }
        }
    }

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

    class ControlFrameTags {
    }

    // hidden inner objects

    const StartServiceACKBase = {
        MTU: "mtu",
    };

    const NAKBase = {
        REJECTED_PARAMS: "rejectedParams",
    };

    const StartServiceProtocolVersion = {
        /** The negotiated version of the protocol. Must be in the format "Major.Minor.Patch"*/
        PROTOCOL_VERSION: "protocolVersion",
    };

    const StartServiceHashId = {
        /** Hash ID to identify this service and used when sending an EndService control frame*/
        HASH_ID: "hashId",
    };

    const StartServiceDimensions = {
        HEIGHT: "height",
        WIDTH: "width",
    };

    //static members 

    ControlFrameTags.RPC = Object.freeze({
        StartService: StartServiceProtocolVersion,

        StartServiceACK: Object.assign({
            /** HU allowed transport for secondary connection */
            SECONDARY_TRANSPORTS: "secondaryTransports",
            /** HU allowed transports for audio and video services (1 == Primary, 2 == Secondary) */
            AUDIO_SERVICE_TRANSPORTS: "audioServiceTransports",
            VIDEO_SERVICE_TRANSPORTS: "videoServiceTransports",
            /** Auth token to be used for log in into services **/
            AUTH_TOKEN: "authToken",
        }, StartServiceACKBase, StartServiceProtocolVersion, StartServiceHashId),

        StartServiceNAK: NAKBase,

        EndService: StartServiceHashId,

        EndServiceACK: {},

        EndServiceNAK: NAKBase,

        TransportEventUpdate: {
            TCP_IP_ADDRESS: "tcpIpAddress",
            TCP_PORT: "tcpPort",
        },

        RegisterSecondaryTransport: {},

        RegisterSecondaryTransportACK: {},

        RegisterSecondaryTransportNAK: Object.assign({
            REASON: "reason",
        }, NAKBase),
    });

    ControlFrameTags.Audio = Object.freeze({
        StartService: {},

        StartServiceACK: StartServiceACKBase,

        StartServiceNAK: NAKBase,

        EndService: {},

        EndServiceACK: {},

        EndServiceNAK: NAKBase,
    });

    ControlFrameTags.Video = Object.freeze({
        StartService: Object.assign({
            VIDEO_PROTOCOL: "videoProtocol",
            VIDEO_CODEC: "videoCodec",
        }, StartServiceDimensions),

        StartServiceACK: Object.assign({}, StartServiceACKBase, StartServiceDimensions),
    });

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

    class BitConverter {
        /**
    	 * @param {ArrayBuffer} buffer - buffer that will be converted to int
         * @param {Number} offset - int optional, the offset shift
    	 * @return {Number} int converted from buffer or -1 if buffer is null
    	 */
        static arrayBufferToInt32 (buffer, offset = 0) {
            if (!buffer) {
                return -1;
            }
            const view = new DataView(buffer);
            return view.getUint32(offset);
        }

        /**
    	 * @param {Number} value - the integer to be converted
    	 * @return {ArrayBuffer} buffer converted from input value
    	 */
        static int32ToArrayBuffer (value) {
            const buffer = new ArrayBuffer(4); // Int32 has 4 bytes
            const view = new DataView(buffer);
            view.setUint32(0, value, false);
            return buffer;
        }
    }

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

    /**
     * Creates control packets.
     * For regular RPC RPCMessage should be used.
     */
    class SdlPacketFactory {
        /**
         * Creates a heartbeat acknowlegement packet.
         * @param {ServiceType} serviceType 
         * @param {Number} sessionID 
         * @param {Number} version 
         * @returns {SdlPacket}
         */
        static createHeartbeatACK (serviceType, sessionID, version) {
            return new SdlPacket(version, false, FrameType.CONTROL,
                serviceType, SdlPacket.FRAME_INFO_HEART_BEAT_ACK, sessionID,
                0, 0, null);
        }

        /**
         * Creates an end session packet.
         * @param {ServiceType} serviceType 
         * @param {Number} sessionID 
         * @param {Number} messageID 
         * @param {Number} version 
         * @param {Number} hashID 
         */
        static createEndSession (serviceType, sessionID, messageID, version, hashID) {
            if (version < 5) {
                const payload = new Uint8Array(BitConverter.int32ToArrayBuffer(hashID));
                return new SdlPacket(version, false, FrameType.CONTROL,
                    serviceType, SdlPacket.FRAME_INFO_END_SERVICE, sessionID,
                    payload.length, messageID, payload, 0, payload.length);
            } else {
                const endSession = new SdlPacket(version, false, FrameType.CONTROL,
                    serviceType, SdlPacket.FRAME_INFO_END_SERVICE, sessionID,
                    0, messageID, null);
                endSession.putTag(ControlFrameTags.RPC.EndService.HASH_ID, hashID);
                return endSession;
            }
        }
    }

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

    /**
     * @typedef {Enum} ImageType
     * @property {Object} _MAP
     */
    class ImageType extends Enum {

        /**
        * @constructor
        */
        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get STATIC() {
            return ImageType._MAP.STATIC;
        }

        /**
         * @return {String} 
         */
        static get DYNAMIC() {
            return ImageType._MAP.DYNAMIC;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return ImageType.valueForStringInternal(value, ImageType._MAP);
        }
    }

    ImageType._MAP = Object.freeze({
        'STATIC': 'STATIC',
        'DYNAMIC': 'DYNAMIC',
    });

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

    class Image extends RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} value
        * @return {Image}
        */
        setParameter(value) {
            this.setParameter(Image.KEY_VALUE, value);
            return this;
        }

        /**
        * @return {String}
        */
        getValue() {
            return this.getParameter(Image.KEY_VALUE);
        }

        /**
        * @param {ImageType} type
        * @return {Image}
        */
        setImageType(type) {
            this.validateType(ImageType, type);

            this.setParameter(Image.KEY_IMAGE_TYPE, type);
            return this;
        }

        /**
        * @return {ImageType}
        */
        getImageType() {
            return this.getObject(ImageType, Image.KEY_IMAGE_TYPE);
        }

        /**
        * @param {Boolean} isTemplate
        * @return {Image}
        */
        setIsTemplate(isTemplate) {
            this.setParameter(Image.KEY_IS_TEMPLATE, isTemplate);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getIsTemplate() {
            return this.getParameter(Image.KEY_IS_TEMPLATE);
        }

    }

    Image.KEY_VALUE = 'value';
    Image.KEY_IMAGE_TYPE = 'imageType';
    Image.KEY_IS_TEMPLATE = 'isTemplate';

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

    class MenuParams extends RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Number} id
        * @return {MenuParams}
        */
        setParentID(id) {
            this.setParameter(MenuParams.KEY_PARENT_ID, id);
            return this;
        }

        /**
        * @return {Number}
        */
        getParentID() {
            return this.getParameter(MenuParams.KEY_PARENT_ID);
        }

        /**
        * @param {Number} position
        * @return {MenuParams}
        */
        setPosition(position) {
            this.setParameter(MenuParams.KEY_POSITION, position);
            return this;
        }

        /**
        * @return {Number}
        */
        getPosition() {
            return this.getParameter(MenuParams.KEY_POSITION);
        }

        /**
        * @param {String} menuName
        * @return {MenuParams}
        */
        setMenuName(menuName) {
            this.setParameter(MenuParams.KEY_MENU_NAME, menuName);
            return this;
        }

        /**
        * @param {String}
        */
        getMenuName() {
            return this.getParameter(MenuParams.KEY_MENU_NAME);
        }

    }

    MenuParams.KEY_PARENT_ID = 'parentID';
    MenuParams.KEY_POSITION  = 'position';
    MenuParams.KEY_MENU_NAME = 'menuName';

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

    class AddCommand extends RpcRequest {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.AddCommand);
        }


        /**
        * @param {Number} id
        * @return {AddCommand}
        */
        setCmdID(id) {
            this.setParameter(AddCommand.KEY_CMD_ID, id);
            return this;
        }

        /**
        * @return {Number}
        */
        getCmdID() {
            return this.getParameter(AddCommand.KEY_CMD_ID);
        }

        /**
        * @param {MenuParams} menuParams
        * @return {AddCommand}
        */
        setMenuParams(menuParams) {
            this.validateType(MenuParams, menuParams);

            this.setParameter(AddCommand.KEY_MENU_PARAMS, menuParams);
            return this;
        }

        /**
        * @return {MenuParams}
        */
        getMenuParams() {
            return this.getObject(MenuParams, AddCommand.KEY_MENU_PARAMS);
        }

        /**
        * @param {Array<String>} vrCommands
        * @return {AddCommand}
        */
        setVrCommands(vrCommands) {
            this.setParameter(AddCommand.KEY_VR_COMMANDS, vrCommands);
            return this;
        }

        /**
        * @return {Array<String>}
        */
        getVrCommands() {
            return this.getParameter(AddCommand.KEY_VR_COMMANDS);
        }

        /**
        * @param {Image} icon
        * @return {AddCommand}
        */
        setCmdIcon(icon) {
            this.validateType(Image, icon);

            this.setParameter(AddCommand.KEY_CMD_ICON, icon);
            return this;
        }

        /**
        * @return {Image}
        */
        getCmdIcon() {
            return this.getObject(Image, AddCommand.KEY_CMD_ICON);
        }

    }

    AddCommand.KEY_CMD_ICON = 'cmdIcon';
    AddCommand.KEY_MENU_PARAMS = 'menuParams';
    AddCommand.KEY_CMD_ID = 'cmdID';
    AddCommand.KEY_VR_COMMANDS = 'vrCommands';

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

    class AddCommandResponse extends RpcResponse {

    	/**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.AddCommand);
        }

    }

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

    class RpcNotification extends RpcMessage {

    	/**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setRPCType(RpcType.NOTIFICATION);
        }

    }

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

    /**
     * @typedef {Enum} HMILevel
     * @property {Object} _MAP
     */
    class HMILevel extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get HMI_FULL() {
            return HMILevel._MAP.HMI_FULL;
        }

        /**
         * @return {String} 
         */
        static get HMI_LIMITED() {
            return HMILevel._MAP.HMI_LIMITED;
        }

        /**
         * @return {String} 
         */
        static get HMI_BACKGROUND() {
            return HMILevel._MAP.HMI_BACKGROUND;
        }

        /**
         * @return {String} 
         */
        static get HMI_NONE() {
            return HMILevel._MAP.HMI_NONE;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return HMILevel.valueForStringInternal(value, HMILevel._MAP);
        }
    }

    HMILevel._MAP = Object.freeze({
        'HMI_FULL': 'FULL',
        'HMI_LIMITED': 'LIMITED',
        'HMI_BACKGROUND': 'BACKGROUND',
        'HMI_NONE': 'NONE',

    });

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

    /**
     * @typedef {Enum} AudioStreamingState
     * @property {Object} _MAP
     */
    class AudioStreamingState extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get AUDIBLE() {
            return AudioStreamingState._MAP.AUDIBLE;
        }

        /**
         * @return {String} 
         */
        static get ATTENUATED() {
            return AudioStreamingState._MAP.ATTENUATED;
        }

        /**
         * @return {String} 
         */
        static get NOT_AUDIBLE() {
            return AudioStreamingState._MAP.NOT_AUDIBLE;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return AudioStreamingState.valueForStringInternal(value, AudioStreamingState._MAP);
        }
    }

    AudioStreamingState._MAP = Object.freeze({
        'AUDIBLE': 'AUDIBLE',
        'ATTENUATED': 'ATTENUATED',
        'NOT_AUDIBLE': 'NOT_AUDIBLE',

    });

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

    /**
     * @typedef {Enum} VideoStreamingState
     * @property {Object} _MAP
     */
    class VideoStreamingState extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get STREAMABLE() {
            return VideoStreamingState._MAP.STREAMABLE;
        }

        /**
         * @return {String} 
         */
        static get NOT_STREAMABLE() {
            return VideoStreamingState._MAP.NOT_STREAMABLE;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return VideoStreamingState.valueForStringInternal(value, VideoStreamingState._MAP);
        }
    }

    VideoStreamingState._MAP = Object.freeze({
        'STREAMABLE': 'STREAMABLE',
        'NOT_STREAMABLE': 'NOT_STREAMABLE',

    });

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

    /**
     * @typedef {Enum} SystemContext
     * @property {Object} _MAP
     */
    class SystemContext extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get SYSCTXT_MAIN() {
            return SystemContext._MAP.SYSCTXT_MAIN;
        }

        /**
         * @return {String} 
         */
        static get SYSCTXT_VRSESSION() {
            return SystemContext._MAP.SYSCTXT_VRSESSION;
        }

        /**
         * @return {String} 
         */
        static get SYSCTXT_MENU() {
            return SystemContext._MAP.SYSCTXT_MENU;
        }

        /**
         * @return {String} 
         */
        static get SYSCTXT_HMI_OBSCURED() {
            return SystemContext._MAP.SYSCTXT_HMI_OBSCURED;
        }

        /**
         * @return {String} 
         */
        static get SYSCTXT_ALERT() {
            return SystemContext._MAP.SYSCTXT_ALERT;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return SystemContext.valueForStringInternal(value, SystemContext._MAP);
        }
    }

    SystemContext._MAP = Object.freeze({
        'SYSCTXT_MAIN': 'MAIN',
        'SYSCTXT_VRSESSION': 'VRSESSION',
        'SYSCTXT_MENU': 'MENU',
        'SYSCTXT_HMI_OBSCURED': 'HMI_OBSCURED',
        'SYSCTXT_ALERT': 'ALERT',

    });

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

    class OnHmiStatus extends RpcNotification {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.OnHMIStatus);
        }

        /**
        * @param {HMILevel} hmiLevel
        * @return {OnHmiStatus}
        */
        setHMILevel(hmiLevel) {
            this.validateType(HMILevel, hmiLevel);

            this.setParameter(OnHmiStatus.KEY_HMI_LEVEL, hmiLevel);
            return this;
        }

        /**
        * @return {HMILevel}
        */
        getHMILevel() {
            return this.getObject(HMILevel, OnHmiStatus.KEY_HMI_LEVEL);
        }

        /**
        * @param {AudioStreamingState} audioStreamingState
        * @return {OnHmiStatus}
        */
        setAudioStreamingState(audioStreamingState) {
            this.validateType(AudioStreamingState, audioStreamingState);

            this.setParameter(OnHmiStatus.KEY_AUDIO_STREAMING_STATE, audioStreamingState);
            return this;
        }

        /**
        * @return {AudioStreamingState}
        */
        getAudioStreamingState() {
            return this.getObject(AudioStreamingState, OnHmiStatus.KEY_AUDIO_STREAMING_STATE);
        }

        /**
        * @param {SystemContext} systemContext
        * @return {OnHmiStatus}
        */
        setSystemContext(systemContext) {
            this.validateType(SystemContext, systemContext);

            this.setParameter(OnHmiStatus.KEY_SYSTEM_CONTEXT, systemContext);
            return this;
        }

        /**
        * @return {SystemContext}
        */
        getSystemContext() {
            return this.getObject(SystemContext, OnHmiStatus.KEY_SYSTEM_CONTEXT);
        }

        /**
        * @param {VideoStreamingState} videoStreamingState
        * @return {OnHmiStatus}
        */
        setVideoStreamingState(videoStreamingState) {
            this.validateType(VideoStreamingState, videoStreamingState);

            this.setParameter(OnHmiStatus.KEY_VIDEO_STREAMING_STATE, videoStreamingState);
            return this;
        }

        /**
        * @return {VideoStreamingState}
        */
        getVideoStreamingState() {
            return this.getObject(VideoStreamingState, OnHmiStatus.KEY_VIDEO_STREAMING_STATE);
        }

        /**
        * @param {Number} windowID
        * @return {Show}
        */
        setWindowID(windowID) {
            this.setParameter(Show.KEY_WINDOW_ID, windowID);
            return this;
        }

        /**
        * @return {Number}
        */
        getWindowID() {
            return this.getParameter(Show.KEY_WINDOW_ID);
        }
    }

    OnHmiStatus.KEY_HMI_LEVEL = 'hmiLevel';
    OnHmiStatus.KEY_AUDIO_STREAMING_STATE = 'audioStreamingState';
    OnHmiStatus.KEY_SYSTEM_CONTEXT = 'systemContext';
    OnHmiStatus.KEY_VIDEO_STREAMING_STATE = 'videoStreamingState';
    OnHmiStatus.KEY_WINDOW_ID = 'windowID';

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

    class OnLanguageChange extends RpcNotification {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.OnLanguageChange);
        }

        /**
        * @param {Language} langauge
        * @return {OnLanguageChange}
        */
        setLanguage(langauge) {
            this.validateType(Language, language);

            this.setParameter(OnLanguageChange.KEY_LANGUAGE, language);
            return this;
        }

        /**
        * @return {Language}
        */
        getLanguage() {
            return this.getObject(Language, OnLanguageChange.KEY_LANGUAGE);
        }

        /**
        * @param {Language} langauge
        * @return {OnLanguageChange}
        */
        setHMIDisplayLanguage(language) {
            this.validateType(Language, language);

            this.setParameter(OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE, language);
            return this;
        }

        /**
        * @return {Language}
        */
        getHMIDisplayLanguage() {
            return this.getObject(Language, OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE);
        }
    }

    OnLanguageChange.KEY_LANGUAGE = 'language';
    OnLanguageChange.KEY_HMI_DISPLAY_LANGUAGE = 'hmiDisplayLanguage';

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

    /**
     * @typedef {Enum} FileType
     * @property {Object} _MAP
     */
    class FileType extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get GRAPHIC_BMP() {
            return FileType._MAP.GRAPHIC_BMP;
        }

        /**
         * @return {String} 
         */
        static get GRAPHIC_JPEG() {
            return FileType._MAP.GRAPHIC_JPEG;
        }

        /**
         * @return {String} 
         */
        static get GRAPHIC_PNG() {
            return FileType._MAP.GRAPHIC_PNG;
        }

        /**
         * @return {String} 
         */
        static get AUDIO_WAVE() {
            return FileType._MAP.AUDIO_WAVE;
        }

        /**
         * @return {String} 
         */
        static get AUDIO_AAC() {
            return FileType._MAP.AUDIO_AAC;
        }

        /**
         * @return {String} 
         */
        static get BINARY() {
            return FileType._MAP.BINARY;
        }

        /**
         * @return {String} 
         */
        static get JSON() {
            return FileType._MAP.JSON;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return FileType.valueForStringInternal(value, FileType._MAP);
        }
    }

    FileType._MAP = Object.freeze({
        'GRAPHIC_BMP': 'GRAPHIC_BMP',
        'GRAPHIC_JPEG': 'GRAPHIC_JPEG',
        'GRAPHIC_PNG': 'GRAPHIC_PNG',
        'AUDIO_WAVE': 'AUDIO_WAVE',
        'AUDIO_MP3': 'AUDIO_MP3',
        'AUDIO_AAC': 'AUDIO_AAC',
        'BINARY': 'BINARY',
        'JSON': 'JSON',

    });

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

    class PutFile extends RpcRequest {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.PutFile);
        }

        // ------ Not part of the RPC spec itself -----

        /**
        * @param {Uint8Array} fileData
        * @return {PutFile}
        */
        setFileData(fileData) {
            this.setBulkData(fileData);
            return this;
        }
        /**
        * @return {Uint8Array}
        */
        getFileData() {
            return this.getBulkData();
        }

        //----------------- END -----------------------


        /**
        * @param {String} fileName
        * @return {PutFile}
        */
        setFileName(fileName) {
            this.setParameter(PutFile.KEY_FILE_NAME, fileName);
            return this;
        }

        /**
        * @return {String}
        */
        getFileName() {
            return this.getParameter(PutFile.KEY_FILE_NAME);
        }

        /**
        * @param {FileType} fileType
        * @return {PutFile}
        */
        setFileType(fileType) {
            this.validateType(FileType, fileType);

            this.setParameter(PutFile.KEY_FILE_TYPE, fileType);
            return this;
        }

        /**
        * @return {FileType}
        */
        getFileType() {
            return this.getObject(FileType, PutFile.KEY_MENU_PARAMS);
        }

        /**
        * @param {Boolean} persistentFile
        * @return {PutFile}
        */
        setPersistentFile(persistentFile) {
            this.setParameter(PutFile.KEY_PERSISTENT_FILE, persistentFile);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getPersistentFile() {
            return this.getParameter(PutFile.KEY_PERSISTENT_FILE);
        }

        /**
        * @param {Boolean} systemFile
        * @return {PutFile}
        */
        setSystemFile(systemFile) {
            this.setParameter(PutFile.KEY_SYSTEM_FILE, systemFile);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getSystemFile() {
            return this.getParameter(PutFile.KEY_SYSTEM_FILE);
        }

        /**
        * @param {Number} offset
        * @return {PutFile}
        */
        setOffset(offset) {
            this.setParameter(PutFile.KEY_OFFSET, offset);
            return this;
        }

        /**
        * @return {Number}
        */
        getOffset() {
            return this.getParameter(PutFile.KEY_OFFSET);
        }

        /**
        * @param {Number} length
        * @return {PutFile}
        */
        setLength(length) {
            this.setParameter(PutFile.KEY_LENGTH, length);
            return this;
        }

        /**
        * @return {Number}
        */
        getLength() {
            return this.getParameter(PutFile.KEY_LENGTH);
        }

        /**
        * @param {Number} crc
        * @return {PutFile}
        */
        setCRC(crc) {
            this.setParameter(PutFile.KEY_CRC, crc);
            return this;
        }

        /**
        * @return {Number}
        */
        getCRC() {
            return this.getParameter(PutFile.KEY_CRC);
        }

    }

    PutFile.KEY_FILE_NAME = 'syncFileName';
    PutFile.KEY_FILE_TYPE = 'fileType';
    PutFile.KEY_PERSISTENT_FILE = 'persistentFile';
    PutFile.KEY_SYSTEM_FILE = 'systemFile';
    PutFile.KEY_OFFSET = 'offset';
    PutFile.KEY_LENGTH = 'length';
    PutFile.KEY_CRC = 'crc';

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

    class PutFileResponse extends RpcResponse {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.PutFile);
        }


        /**
        * @param {Number} spaceAvailable
        * @return {PutFileResponse}
        */
        setSpaceAvailable(spaceAvailable) {
            this.setParameter(PutFileResponse.KEY_SPACE_AVAILABLE, spaceAvailable);
            return this;
        }

        /**
        * @return {Number}
        */
        getSpaceAvailable() {
            return this.getParameter(PutFileResponse.KEY_SPACE_AVAILABLE);
        }


    }

    PutFileResponse.KEY_SPACE_AVAILABLE = 'spaceAvailable';

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

    /**
     * @typedef {Enum} TextFieldName
     * @property {Object} _MAP
     */
    class TextFieldName extends Enum {

        constructor() {
            super();
        }

        /**
        * @return {String} 
        */
        static get mainField1() {
            return TextFieldName._MAP.mainField1;
        }

        /**
        * @return {String} 
        */
        static get mainField2() {
            return TextFieldName._MAP.mainField2;
        }

        /**
        * @return {String} 
        */
        static get mainField3() {
            return TextFieldName._MAP.mainField3;
        }

        /**
        * @return {String} 
        */
        static get mainField4() {
            return TextFieldName._MAP.mainField4;
        }

        /**
        * @return {String} 
        */
        static get statusBar() {
            return TextFieldName._MAP.statusBar;
        }


        /**
        * @return {String} 
        */
        static get mediaClock() {
            return TextFieldName._MAP.mediaClock;
        }

        /**
        * @return {String} 
        */
        static get mediaTrack() {
            return TextFieldName._MAP.mediaTrack;
        }

        /**
        * @return {String} 
        */
        static get templateTitle() {
            return TextFieldName._MAP.templateTitle;
        }

        /**
        * @return {String} 
        */
        static get alertText1() {
            return TextFieldName._MAP.alertText1;
        }

        /**
        * @return {String} 
        */
        static get alertText2() {
            return TextFieldName._MAP.alertText2;
        }

        /**
        * @return {String} 
        */
        static get alertText3() {
            return TextFieldName._MAP.alertText3;
        }

        /**
        * @return {String} 
        */
        static get scrollableMessageBody() {
            return TextFieldName._MAP.scrollableMessageBody;
        }


        /**
        * @return {String} 
        */
        static get initialInteractionText() {
            return TextFieldName._MAP.initialInteractionText;
        }


        /**
        * @return {String} 
        */
        static get navigationText1() {
            return TextFieldName._MAP.navigationText1;
        }


        /**
        * @return {String} 
        */
        static get navigationText2() {
            return TextFieldName._MAP.navigationText2;
        }


        /**
        * @return {String} 
        */
        static get ETA() {
            return TextFieldName._MAP.ETA;
        }


        /**
        * @return {String} 
        */
        static get totalDistance() {
            return TextFieldName._MAP.totalDistance;
        }


        /**
        * @return {String} 
        */
        static get audioPassThruDisplayText1() {
            return TextFieldName._MAP.audioPassThruDisplayText1;
        }


        /**
        * @return {String} 
        */
        static get audioPassThruDisplayText2() {
            return TextFieldName._MAP.audioPassThruDisplayText2;
        }


        /**
        * @return {String} 
        */
        static get sliderHeader() {
            return TextFieldName._MAP.sliderHeader;
        }


        /**
        * @return {String} 
        */
        static get sliderFooter() {
            return TextFieldName._MAP.sliderFooter;
        }


        /**
        * @return {String} 
        */
        static get menuName() {
            return TextFieldName._MAP.menuName;
        }


        /**
        * @return {String} 
        */
        static get secondaryText() {
            return TextFieldName._MAP.secondaryText;
        }


        /**
        * @return {String} 
        */
        static get tertiaryText() {
            return TextFieldName._MAP.tertiaryText;
        }


        /**
        * @return {String} 
        */
        static get menuTitle() {
            return TextFieldName._MAP.menuTitle;
        }

        /**
        * @return {String} 
        */
        static get locationName() {
            return TextFieldName._MAP.locationName;
        }

        /**
        * @return {String} 
        */
        static get locationDescription() {
            return TextFieldName._MAP.locationDescription;
        }

        /**
        * @return {String} 
        */
        static get addressLines() {
            return TextFieldName._MAP.addressLines;
        }

        /**
        * @return {String} 
        */
        static get phoneNumber() {
            return TextFieldName._MAP.phoneNumber;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return TextFieldName.valueForStringInternal(value, TextFieldName._MAP);
        }
    }

    TextFieldName._MAP = Object.freeze({
        'mainField1': 'mainField1',
        'mainField2': 'mainField2',
        'mainField3': 'mainField3',
        'mainField4': 'mainField4',
        'statusBar': 'statusBar',
        'mediaClock': 'mediaClock',
        'mediaTrack': 'mediaTrack',
        'templateTitle': 'templateTitle',
        'alertText1': 'alertText1',
        'alertText2': 'alertText2',
        'alertText3': 'alertText3',
        'scrollableMessageBody': 'scrollableMessageBody',
        'initialInteractionText': 'initialInteractionText',
        'navigationText1': 'navigationText1',
        'navigationText2': 'navigationText2',
        'ETA': 'ETA',
        'totalDistance': 'totalDistance',
        'audioPassThruDisplayText1': 'audioPassThruDisplayText1',
        'audioPassThruDisplayText2': 'audioPassThruDisplayText2',
        'sliderHeader': 'sliderHeader',
        'sliderFooter': 'sliderFooter',
        'menuName': 'menuName',
        'secondaryText': 'secondaryText',
        'tertiaryText': 'tertiaryText',
        'menuTitle': 'menuTitle',
        'locationName': 'locationName',
        'locationDescription': 'locationDescription',
        'addressLines': 'addressLines',
        'phoneNumber': 'phoneNumber',
        'scrollableMessageBody': 'scrollableMessageBody',

    });

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

    /**
     * @typedef {Enum} CharacterSet
     * @property {Object} _MAP
     */
    class CharacterSet extends Enum {

        constructor() {
            super();
        }

        /**
        * @return {String} 
        */
        static get TYPE2SET() {
            return CharacterSet._MAP.TYPE2SET;
        }

        /**
        * @return {String} 
        */
        static get TYPE5SET() {
            return CharacterSet._MAP.TYPE5SET;
        }

        /**
        * @return {String} 
        */
        static get CID1SET() {
            return CharacterSet._MAP.CID1SET;
        }

        /**
        * @return {String} 
        */
        static get CID2SET() {
            return CharacterSet._MAP.CID2SET;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return CharacterSet.valueForStringInternal(value, CharacterSet._MAP);
        }
    }

    CharacterSet._MAP = Object.freeze({
        'TYPE2SET': 'TYPE2SET',
        'TYPE5SET': 'TYPE5SET',
        'CID1SET': 'CID1SET',
        'CID2SET': 'CID2SET',

    });

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

    class TextField extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {TextFieldName} textFieldName
        * @return {TextField}
        */
        setTextFieldName(textFieldName) {
            this.validateType(TextFieldName, textFieldName);

            this.setParameter(TextField.KEY_NAME, textFieldName);
            return this;
        }

        /**
        * @return {TextFieldName}
        */
        getTextFieldName() {
            return this.getObject(TextFieldName, TextField.KEY_NAME);
        }


        /**
        * @param {CharacterSet} textFieldName
        * @return {TextField}
        */
        setCharacterSet(characterSet) {
            this.validateType(CharacterSet, characterSet);

            this.setParameter(TextField.KEY_CHARACTER_SET, characterSet);
            return this;
        }

        /**
        * @return {CharacterSet}
        */
        getCharacterSet() {
            return this.getObject(CharacterSet, TextField.KEY_CHARACTER_SET);
        }

        /**
        * @param {Number} width
        * @return {TextField}
        */
        setWidth(width) {
            this.setParameter(TextField.KEY_WIDTH, width);
            return this;
        }

        /**
        * @return {Number}
        */
        getWidth() {
            return this.getParameter(TextField.KEY_WIDTH);
        }

        /**
        * @param {Number} rows
        * @return {TextField}
        */
        setRows(rows) {
            this.setParameter(TextField.KEY_ROWS, rows);
            return this;
        }

        /**
        * @return {Number}
        */
        getRows() {
            return this.getParameter(TextField.KEY_ROWS);
        }

    }

    TextField.KEY_NAME = 'name';
    TextField.KEY_CHARACTER_SET = 'characterSet';
    TextField.KEY_WIDTH = 'width';
    TextField.KEY_ROWS = 'rows';

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

    class ImageResolution extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Number} resolutionWidth
        * @return {ImageResolution}
        */
        setResolutionWidth(resolutionWidth) {
            this.setParameter(ImageResolution.KEY_RESOLUTION_WIDTH, resolutionWidth);
            return this;
        }

        /**
        * @return {Number}
        */
        getResolutionWidth() {
            return this.getParameter(ImageResolution.KEY_RESOLUTION_WIDTH);
        }

        /**
        * @param {Number} resolutionHeight
        * @return {ImageResolution}
        */
        setResolutionHeight(resolutionHeight) {
            this.setParameter(ImageResolution.KEY_RESOLUTION_HEIGHT, resolutionHeight);
            return this;
        }

        /**
        * @return {Number}
        */
        getResolutionHeight() {
            return this.getParameter(ImageResolution.KEY_RESOLUTION_HEIGHT);
        }

    }

    ImageResolution.KEY_RESOLUTION_WIDTH = 'resolutionWidth';
    ImageResolution.KEY_RESOLUTION_HEIGHT = 'resolutionHeight';

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

    /**
     * @typedef {Enum} ImageFieldName
     * @property {Object} _MAP
     */
    class ImageFieldName extends Enum {

        constructor() {
            super();
        }

        /**
        * @return {String} 
        */
        static get softButtonImage() {
            return ImageFieldName._MAP.softButtonImage;
        }

        /**
        * @return {String} 
        */
        static get choiceImage() {
            return ImageFieldName._MAP.choiceImage;
        }

        /**
        * @return {String} 
        */
        static get choiceSecondaryImage() {
            return ImageFieldName._MAP.choiceSecondaryImage;
        }


        /**
        * @return {String} 
        */
        static get vrHelpItem() {
            return ImageFieldName._MAP.vrHelpItem;
        }


        /**
        * @return {String} 
        */
        static get turnIcon() {
            return ImageFieldName._MAP.turnIcon;
        }


        /**
        * @return {String} 
        */
        static get menuIcon() {
            return ImageFieldName._MAP.menuIcon;
        }

        /**
        * @return {String} 
        */
        static get cmdIcon() {
            return ImageFieldName._MAP.cmdIcon;
        }

        /**
        * @return {String} 
        */
        static get appIcon() {
            return ImageFieldName._MAP.appIcon;
        }

        /**
        * @return {String} 
        */
        static get graphic() {
            return ImageFieldName._MAP.graphic;
        }

        /**
        * @return {String} 
        */
        static get secondaryGraphic() {
            return ImageFieldName._MAP.secondaryGraphic;
        }

        /**
        * @return {String} 
        */
        static get showConstantTBTIcon() {
            return ImageFieldName._MAP.showConstantTBTIcon;
        }

        /**
        * @return {String} 
        */
        static get showConstantTBTNextTurnIcon() {
            return ImageFieldName._MAP.showConstantTBTNextTurnIcon;
        }

        /**
        * @return {String} 
        */
        static get locationImage() {
            return ImageFieldName._MAP.locationImage;
        }

        /**
        * @return {String} 
        */
        static get alertIcon() {
            return ImageFieldName._MAP.alertIcon;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return ImageFieldName.valueForStringInternal(value, ImageFieldName._MAP);
        }
    }

    ImageFieldName._MAP = Object.freeze({
        'softButtonImage': 'softButtonImage',
        'choiceImage': 'choiceImage',
        'choiceSecondaryImage': 'choiceSecondaryImage',
        'vrHelpItem': 'vrHelpItem',
        'turnIcon': 'turnIcon',
        'menuIcon': 'menuIcon',
        'cmdIcon': 'cmdIcon',
        'appIcon': 'appIcon',
        'graphic': 'graphic',
        'secondaryGraphic': 'secondaryGraphic',
        'showConstantTBTIcon': 'showConstantTBTIcon',
        'showConstantTBTNextTurnIcon': 'showConstantTBTNextTurnIcon',
        'locationImage': 'locationImage',
        'alertIcon': 'alertIcon',

    });

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

    class ImageField extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {ImageFieldName} imageFieldName
        * @return {ImageField}
        */
        setImageFieldName(imageFieldName) {
            this.validateType(ImageFieldName, imageFieldName);

            this.setParameter(ImageField.KEY_NAME, imageFieldName);
            return this;
        }

        /**
        * @return {ImageFieldName}
        */
        getImageFieldName() {
            return this.getObject(ImageFieldName, ImageField.KEY_NAME);
        }

        /**
        * @param {FileType} imageTypeSupported
        * @return {ImageField}
        */
        setImageTypeSupported(imageTypeSupported) {
            this.validateType(FileType, imageTypeSupported);

            this.setParameter(ImageField.KEY_IMAGE_TYPE_SUPPORTED, imageTypeSupported);
            return this;
        }

        /**
        * @return {FileType}
        */
        getImageTypeSupported() {
            return this.getObject(FileType, ImageField.KEY_IMAGE_TYPE_SUPPORTED);
        }

        /**
        * @param {ImageResolution} imageResolution
        * @return {ImageField}
        */
        setImageResolution(imageResolution) {
            this.validateType(ImageResolution, imageResolution);

            this.setParameter(ImageField.KEY_IMAGE_RESOLUTION, imageResolution);
            return this;
        }

        /**
        * @return {ImageResolution}
        */
        getImageResolution() {
            return this.getObject(ImageResolution, ImageField.KEY_IMAGE_RESOLUTION);
        }
    }

    ImageField.KEY_NAME = 'name';
    ImageField.KEY_IMAGE_TYPE_SUPPORTED = 'imageTypeSupported';
    ImageField.KEY_IMAGE_RESOLUTION = 'imageResolution';

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

    class TouchEventCapabilities extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }


        /**
        * @param {Boolean} pressAvailable
        * @return {TouchEventCapabilities}
        */
        setPressAvailable(pressAvailable) {

            this.setParameter(TouchEventCapabilities.KEY_PRESS_AVAILABLE, pressAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getPressAvailable() {
            return this.getParameter(TouchEventCapabilities.KEY_PRESS_AVAILABLE);
        }

        /**
        * @param {Boolean} multiTouchAvailable
        * @return {TouchEventCapabilities}
        */
        setMultiTouchAvailable(multiTouchAvailable) {

            this.setParameter(TouchEventCapabilities.KEY_MULTI_TOUCH_AVAILABLE, multiTouchAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getMultiTouchAvailable() {
            return this.getParameter(TouchEventCapabilities.KEY_MULTI_TOUCH_AVAILABLE);
        }



        /**
        * @param {Boolean} doublePressAvailable
        * @return {TouchEventCapabilities}
        */
        setDoublePressAvailable(doublePressAvailable) {

            this.setParameter(TouchEventCapabilities.KEY_DOUBLE_PRESS_AVAILABLE, doublePressAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getDoublePressAvailable() {
            return this.getParameter(TouchEventCapabilities.KEY_DOUBLE_PRESS_AVAILABLE);
        }

    }

    TouchEventCapabilities.KEY_PRESS_AVAILABLE = 'pressAvailable';
    TouchEventCapabilities.KEY_MULTI_TOUCH_AVAILABLE = 'multiTouchAvailable';
    TouchEventCapabilities.KEY_DOUBLE_PRESS_AVAILABLE = 'doublePressAvailable';

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

    class ScreenParams extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }


        /**
        * @param {ImageResolution} resolution
        * @return {ScreenParams}
        */
        setResolution(resolution) {
            this.validateType(ImageResolution, resolution);

            this.setParameter(ScreenParams.KEY_RESOLUTION, resolution);
            return this;
        }

        /**
        * @return {ImageResolution}
        */
        getResolution() {
            return this.getObject(ImageResolution, ScreenParams.KEY_RESOLUTION);
        }

        /**
        * @param {TouchEventCapabilities} touchEventCapabilities
        * @return {ScreenParams}
        */
        setTouchEventAvailable(touchEventCapabilities) {
            this.validateType(TouchEventCapabilities, touchEventCapabilities);

            this.setParameter(ScreenParams.KEY_TOUCH_EVENT_AVAILABLE, touchEventCapabilities);
            return this;
        }

        /**
        * @return {TouchEventCapabilities}
        */
        getTouchEventAvailable() {
            return this.getObject(TouchEventCapabilities, ScreenParams.KEY_TOUCH_EVENT_AVAILABLE);
        }
    }

    ScreenParams.KEY_RESOLUTION = 'resolution';
    ScreenParams.KEY_TOUCH_EVENT_AVAILABLE = 'touchEventAvailable';

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

    /**
     * @typedef {Enum} DisplayType
     * @property {Object} _MAP
     */
    class DisplayType extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get CID() {
            return DisplayType._MAP.CID;
        }

        /**
         * @return {String} 
         */
        static get TYPE2() {
            return DisplayType._MAP.TYPE2;
        }

        /**
         * @return {String} 
         */
        static get TYPE5() {
            return DisplayType._MAP.TYPE5;
        }

        /**
         * @return {String} 
         */
        static get NGN() {
            return DisplayType._MAP.NGN;
        }

        /**
         * @return {String} 
         */
        static get GEN2_8_DMA() {
            return DisplayType._MAP.GEN2_8_DMA;
        }

        /**
         * @return {String} 
         */
        static get GEN2_6_DMA() {
            return DisplayType._MAP.GEN2_6_DMA;
        }

        /**
         * @return {String} 
         */
        static get MFD3() {
            return DisplayType._MAP.MFD3;
        }

        /**
         * @return {String} 
         */
        static get MFD4() {
            return DisplayType._MAP.MFD4;
        }

        /**
         * @return {String} 
         */
        static get MFD5() {
            return DisplayType._MAP.MFD5;
        }

        /**
         * @return {String} 
         */
        static get GEN3_8_INCH() {
            return DisplayType._MAP.GEN3_8_INCH;
        }

        /**
         * @return {String} 
         */
        static get SDL_GENERIC() {
            return DisplayType._MAP.SDL_GENERIC;
        }


        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return DisplayType.valueForStringInternal(value, DisplayType._MAP);
        }
    }

    DisplayType._MAP = Object.freeze({
        'CID': 'CID',
        'TYPE2': 'TYPE2',
        'TYPE5': 'TYPE5',
        'NGN': 'NGN',
        'GEN2_8_DMA': 'GEN2_8_DMA',
        'GEN2_6_DMA': 'GEN2_6_DMA',
        'MFD3': 'MFD3',
        'MFD4': 'MFD4',
        'TESTING': 'TESTING',
        'MFD5': 'MFD5',
        'GEN3_8_INCH': 'GEN3_8-INCH',
        'SDL_GENERIC': 'SDL_GENERIC',
    });

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

    /**
     * @typedef {Enum} MediaClockFormat
     * @property {Object} _MAP
     */
    class MediaClockFormat extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get CLOCK1() {
            return MediaClockFormat._MAP.CLOCK1;
        }

        /**
         * @return {String} 
         */
        static get CLOCK2() {
            return MediaClockFormat._MAP.CLOCK2;
        }

        /**
         * @return {String} 
         */
        static get CLOCK3() {
            return MediaClockFormat._MAP.CLOCK3;
        }

        /**
         * @return {String} 
         */
        static get CLOCKTEXT1() {
            return MediaClockFormat._MAP.CLOCKTEXT1;
        }

        /**
         * @return {String} 
         */
        static get CLOCKTEXT2() {
            return MediaClockFormat._MAP.CLOCKTEXT2;
        }

        /**
         * @return {String} 
         */
        static get CLOCKTEXT3() {
            return MediaClockFormat._MAP.CLOCKTEXT3;
        }

        /**
         * @return {String} 
         */
        static get CLOCKTEXT4() {
            return MediaClockFormat._MAP.CLOCKTEXT4;
        }
        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return MediaClockFormat.valueForStringInternal(value, MediaClockFormat._MAP);
        }
    }

    MediaClockFormat._MAP = Object.freeze({
        'CLOCK1': 'CLOCK1',
        'CLOCK2': 'CLOCK2',
        'CLOCK3': 'CLOCK3',
        'CLOCKTEXT1': 'CLOCKTEXT1',
        'CLOCKTEXT2': 'CLOCKTEXT2',
        'CLOCKTEXT3': 'CLOCKTEXT3',
        'CLOCKTEXT4': 'CLOCKTEXT4',
    });

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

    class DisplayCapabilities extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {DisplayType} displayType
        * @return {DisplayCapabilities}
        */
        setDisplayType(displayType) {
            this.validateType(DisplayType, displayType);

            this.setParameter(DisplayCapabilities.KEY_DISPLAY_TYPE, displayType);
            return this;
        }

        /**
        * @return {DisplayType}
        */
        getDisplayType() {
            return this.getObject(DisplayType, DisplayCapabilities.KEY_DISPLAY_TYPE);
        }


        /**
        * @param {String} displayName
        * @return {DisplayCapabilities}
        */
        setDisplayName(displayName) {

            this.setParameter(DisplayCapabilities.KEY_DISPLAY_NAME, displayName);
            return this;
        }

        /**
        * @return {String}
        */
        getDisplayType() {
            return this.getParameter(DisplayCapabilities.KEY_DISPLAY_NAME);
        }

        /**
        * @param {Array<TextField>} textFields
        * @return {DisplayCapabilities}
        */
        setTextFields(textFields) {
            //TODO make work with arrays
            //this.validateType(TextField, textFields);

            this.setParameter(DisplayCapabilities.KEY_TEXT_FIELDS, textFields);
            return this;
        }

        /**
        * @return {Array<TextField>}
        */
        getTextFields() {
            return this.getObject(TextField, DisplayCapabilities.KEY_TEXT_FIELDS);
        }


        /**
        * @param {Array<ImageField>} imageFields
        * @return {DisplayCapabilities}
        */
        setImageFields(imageFields) {
            //TODO make work with arrays
            //this.validateType(ImageField, imageFields);

            this.setParameter(DisplayCapabilities.KEY_IMAGE_FIELDS, imageFields);
            return this;
        }

        /**
        * @return {Array<ImageField>}
        */
        getImageFields() {
            return this.getObject(ImageField, DisplayCapabilities.KEY_IMAGE_FIELDS);
        }

        /**
        * @param {Array<MediaClockFormat>} mediaClockFormats
        * @return {DisplayCapabilities}
        */
        setMediaClockFormats(mediaClockFormats) {
            //TODO make work with arrays
            //this.validateType(ImageField, mediaClockFormats);

            this.setParameter(DisplayCapabilities.KEY_MEDIA_CLOCK_FORMATS, mediaClockFormats);
            return this;
        }

        /**
        * @return {Array<MediaClockFormat>}
        */
        getMediaClockFormats() {
            return this.getObject(MediaClockFormat, DisplayCapabilities.KEY_MEDIA_CLOCK_FORMATS);
        }


        /**
        * @param {Boolean} graphicSupported
        * @return {DisplayCapabilities}
        */
        setGraphicsSupported(graphicSupported) {

            this.setParameter(DisplayCapabilities.KEY_GRAPHICS_SUPPORTED, graphicSupported);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getGraphicsSupported() {
            return this.getParameter(DisplayCapabilities.KEY_GRAPHICS_SUPPORTED);
        }

        /**
        * @param {Array<String>} templatesAvailable
        * @return {DisplayCapabilities}
        */
        setTemplatesAvailable(templatesAvailable) {
            //TODO make work with arrays
            //this.validateType(String, templatesAvailable);

            this.setParameter(DisplayCapabilities.KEY_TEMPLATES_AVAILABLE, templatesAvailable);
            return this;
        }

        /**
        * @return {Array<String>}
        */
        getTemplatesAvailable() {
            return this.getParameter(DisplayCapabilities.KEY_TEMPLATES_AVAILABLE);
        }

        /**
        * @param {ScreenParams} screenParams
        * @return {DisplayCapabilities}
        */
        setScreenParams(screenParams) {
            this.validateType(ScreenParams, screenParams);

            this.setParameter(DisplayCapabilities.KEY_SCREEN_PARAMS, screenParams);
            return this;
        }

        /**
        * @return {ScreenParams}
        */
        getScreenParams() {
            return this.getObject(ScreenParams, DisplayCapabilities.KEY_SCREEN_PARAMS);
        }
        /**
        * @param {Array<Number>} numCustomPresetsAvailable
        * @return {DisplayCapabilities}
        */
        setNumCustomPresetsAvailable(numCustomPresetsAvailable) {
            //TODO make work with arrays
            //this.validateType(Number, numCustomPresetsAvailable);

            this.setParameter(DisplayCapabilities.KEY_NUM_CUSTOM_PRESETS_AVAILABLE, numCustomPresetsAvailable);
            return this;
        }

        /**
        * @return {Array<Number>}
        */
        getNumCustomPresetsAvailable() {
            return this.getParameter(DisplayCapabilities.KEY_NUM_CUSTOM_PRESETS_AVAILABLE);
        }


    }

    DisplayCapabilities.KEY_DISPLAY_TYPE = 'displayType';
    DisplayCapabilities.KEY_DISPLAY_NAME = 'displayName';
    DisplayCapabilities.KEY_TEXT_FIELDS = 'textFields';
    DisplayCapabilities.KEY_IMAGE_FIELDS = 'imageFields';
    DisplayCapabilities.KEY_MEDIA_CLOCK_FORMATS = 'mediaClockFormats';
    DisplayCapabilities.KEY_GRAPHICS_SUPPORTED = 'graphicSupported';
    DisplayCapabilities.KEY_TEMPLATES_AVAILABLE = 'templatesAvailable';
    DisplayCapabilities.KEY_SCREEN_PARAMS = 'screenParams';
    DisplayCapabilities.KEY_NUM_CUSTOM_PRESETS_AVAILABLE = 'numCustomPresetsAvailable';

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

    class Grid extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Number} column
        * @return {Grid}
        */
        setColumn(column) {
            this.setParameter(Grid.KEY_COLUMN, column);
            return this;
        }

        /**
        * @return {Number}
        */
        getColumn() {
            return this.getParameter(Grid.KEY_COLUMN);
        }

        /**
        * @param {Number} row
        * @return {Grid}
        */
        setRow(row) {
            this.setParameter(Grid.KEY_ROW, row);
            return this;
        }

        /**
        * @return {Number}
        */
        getRow() {
            return this.getParameter(Grid.KEY_ROW);
        }

        /**
        * @param {Number} level
        * @return {Grid}
        */
        setLevel(level) {
            this.setParameter(Grid.KEY_LEVEL, level);
            return this;
        }

        /**
        * @return {Number}
        */
        getLevel() {
            return this.getParameter(Grid.KEY_LEVEL);
        }

        /**
        * @param {Number} columnSpan
        * @return {Grid}
        */
        setColumnSpan(columnSpan) {
            this.setParameter(Grid.KEY_COLUMN_SPAN, columnSpan);
            return this;
        }

        /**
        * @return {Number}
        */
        getColumnSpan() {
            return this.getParameter(Grid.KEY_COLUMN_SPAN);
        }

        /**
        * @param {Number} rowSpan
        * @return {Grid}
        */
        setRowSpan(rowSpan) {
            this.setParameter(Grid.KEY_ROW_SPAN, rowSpan);
            return this;
        }

        /**
        * @return {Number}
        */
        getRowSpan() {
            return this.getParameter(Grid.KEY_ROW_SPAN);
        }

        /**
        * @param {Number} levelSpan
        * @return {Grid}
        */
        setLevelSpan(levelSpan) {
            this.setParameter(Grid.KEY_LEVEL_SPAN, levelSpan);
            return this;
        }

        /**
        * @return {Number}
        */
        getLevelSpan() {
            return this.getParameter(Grid.KEY_LEVEL_SPAN);
        }
    }

    Grid.KEY_COLUMN = 'col';
    Grid.KEY_ROW = 'row';
    Grid.KEY_LEVEL = 'level';
    Grid.KEY_COLUMN_SPAN = 'colspan';
    Grid.KEY_ROW_SPAN = 'rowspan';
    Grid.KEY_LEVEL_SPAN = 'levelspan';

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

    class ModuleInfo extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} moduleId
        * @return {ModuleInfo}
        */
        setModuleId(moduleId) {
            this.setParameter(ModuleInfo.KEY_MODULE_ID, moduleId);
            return this;
        }

        /**
        * @return {String}
        */
        getModuleId() {
            return this.getParameter(ModuleInfo.KEY_MODULE_ID);
        }


        /**
        * @param {Grid} location
        * @return {ModuleInfo}
        */
        setLocation(location) {
            this.validateType(Grid, location);

            this.setParameter(ModuleInfo.KEY_LOCATION, location);
            return this;
        }

        /**
        * @return {Grid}
        */
        getLocation() {
            return this.getObject(Grid, ModuleInfo.KEY_LOCATION);
        }

        /**
        * @param {Grid} serviceArea
        * @return {ModuleInfo}
        */
        setServiceArea(serviceArea) {
            this.validateType(Grid, serviceArea);

            this.setParameter(ModuleInfo.KEY_SERVICE_AREA, serviceArea);
            return this;
        }

        /**
        * @return {Grid}
        */
        getServiceArea() {
            return this.getObject(Grid, ModuleInfo.KEY_SERVICE_AREA);
        }

        /**
        * @param {Boolean} allowMultipleAccess
        * @return {ModuleInfo}
        */
        setAllowMultipleAccess(allowMultipleAccess) {
            this.setParameter(ModuleInfo.KEY_ALLOW_MULTIPLE_ACCESS, allowMultipleAccess);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getAllowMultipleAccess() {
            return this.getParameter(ModuleInfo.KEY_ALLOW_MULTIPLE_ACCESS);
        }

    }

    ModuleInfo.KEY_MODULE_ID = 'moduleId';
    ModuleInfo.KEY_LOCATION = 'location';
    ModuleInfo.KEY_SERVICE_AREA = 'serviceArea';
    ModuleInfo.KEY_ALLOW_MULTIPLE_ACCESS = 'allowMultipleAccess';

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

    /**
     * @typedef {Enum} ButtonName
     * @property {Object} _MAP
     */
    class ButtonName extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get OK() {
            return ButtonName._MAP.OK;
        }

        /**
         * @return {String} 
         */
        static get PLAY_PAUSE() {
            return ButtonName._MAP.PLAY_PAUSE;
        }

        /**
         * @return {String} 
         */
        static get SEEKLEFT() {
            return ButtonName._MAP.SEEKLEFT;
        }

        /**
         * @return {String} 
         */
        static get SEEKRIGHT() {
            return ButtonName._MAP.SEEKRIGHT;
        }

        /**
         * @return {String} 
         */
        static get TUNEUP() {
            return ButtonName._MAP.TUNEUP;
        }

        /**
         * @return {String} 
         */
        static get TUNEDOWN() {
            return ButtonName._MAP.TUNEDOWN;
        }

        /**
         * @return {String} 
         */
        static get PRESET_0() {
            return ButtonName._MAP.PRESET_0;
        }

        /**
         * @return {String} 
         */
        static get PRESET_1() {
            return ButtonName._MAP.PRESET_1;
        }

        /**
         * @return {String} 
         */
        static get PRESET_2() {
            return ButtonName._MAP.PRESET_2;
        }

        /**
         * @return {String} 
         */
        static get PRESET_3() {
            return ButtonName._MAP.PRESET_3;
        }

        /**
         * @return {String} 
         */
        static get PRESET_4() {
            return ButtonName._MAP.PRESET_4;
        }

        /**
         * @return {String} 
         */
        static get PRESET_5() {
            return ButtonName._MAP.PRESET_5;
        }

        /**
         * @return {String} 
         */
        static get PRESET_6() {
            return ButtonName._MAP.PRESET_6;
        }

        /**
         * @return {String} 
         */
        static get PRESET_7() {
            return ButtonName._MAP.PRESET_7;
        }

        /**
         * @return {String} 
         */
        static get PRESET_8() {
            return ButtonName._MAP.PRESET_8;
        }

        /**
         * @return {String} 
         */
        static get PRESET_9() {
            return ButtonName._MAP.PRESET_9;
        }

        /**
         * @return {String} 
         */
        static get CUSTOM_BUTTON() {
            return ButtonName._MAP.CUSTOM_BUTTON;
        }

        /**
         * @return {String} 
         */
        static get SEARCH() {
            return ButtonName._MAP.SEARCH;
        }

        /**
         * @return {String} 
         */
        static get AC_MAX() {
            return ButtonName._MAP.AC_MAX;
        }

        /**
         * @return {String} 
         */
        static get AC() {
            return ButtonName._MAP.AC;
        }

        /**
         * @return {String} 
         */
        static get RECIRCULATE() {
            return ButtonName._MAP.RECIRCULATE;
        }

        /**
         * @return {String} 
         */
        static get FAN_UP() {
            return ButtonName._MAP.FAN_UP;
        }

        /**
         * @return {String} 
         */
        static get FAN_DOWN() {
            return ButtonName._MAP.FAN_DOWN;
        }

        /**
         * @return {String} 
         */
        static get TEMP_UP() {
            return ButtonName._MAP.TEMP_UP;
        }

        /**
         * @return {String} 
         */
        static get TEMP_DOWN() {
            return ButtonName._MAP.TEMP_DOWN;
        }

        /**
         * @return {String} 
         */
        static get DEFROST_MAX() {
            return ButtonName._MAP.DEFROST_MAX;
        }

        /**
         * @return {String} 
         */
        static get DEFROST() {
            return ButtonName._MAP.DEFROST;
        }

        /**
         * @return {String} 
         */
        static get DEFROST_REAR() {
            return ButtonName._MAP.DEFROST_REAR;
        }

        /**
         * @return {String} 
         */
        static get UPPER_VENT() {
            return ButtonName._MAP.UPPER_VENT;
        }

        /**
         * @return {String} 
         */
        static get LOWER_VENT() {
            return ButtonName._MAP.LOWER_VENT;
        }

        /**
         * @return {String} 
         */
        static get VOLUME_UP() {
            return ButtonName._MAP.VOLUME_UP;
        }

        /**
         * @return {String} 
         */
        static get VOLUME_DOWN() {
            return ButtonName._MAP.VOLUME_DOWN;
        }

        /**
         * @return {String} 
         */
        static get EJECT() {
            return ButtonName._MAP.EJECT;
        }

        /**
         * @return {String} 
         */
        static get SOURCE() {
            return ButtonName._MAP.SOURCE;
        }

        /**
         * @return {String} 
         */
        static get SHUFFLE() {
            return ButtonName._MAP.SHUFFLE;
        }

        /**
         * @return {String} 
         */
        static get REPEAT() {
            return ButtonName._MAP.REPEAT;
        }

        /**
         * @return {String} 
         */
        static get NAV_CENTER_LOCATION() {
            return ButtonName._MAP.NAV_CENTER_LOCATION;
        }

        /**
         * @return {String} 
         */
        static get NAV_ZOOM_IN() {
            return ButtonName._MAP.NAV_ZOOM_IN;
        }

        /**
         * @return {String} 
         */
        static get NAV_ZOOM_OUT() {
            return ButtonName._MAP.NAV_ZOOM_OUT;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_UP() {
            return ButtonName._MAP.NAV_PAN_UP;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_UP_RIGHT() {
            return ButtonName._MAP.NAV_PAN_UP_RIGHT;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_RIGHT() {
            return ButtonName._MAP.NAV_PAN_RIGHT;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_DOWN_RIGHT() {
            return ButtonName._MAP.NAV_PAN_DOWN_RIGHT;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_DOWN() {
            return ButtonName._MAP.NAV_PAN_DOWN;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_DOWN_LEFT() {
            return ButtonName._MAP.NAV_PAN_DOWN_LEFT;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_LEFT() {
            return ButtonName._MAP.NAV_PAN_LEFT;
        }

        /**
         * @return {String} 
         */
        static get NAV_PAN_UP_LEFT() {
            return ButtonName._MAP.NAV_PAN_UP_LEFT;
        }

        /**
         * @return {String} 
         */
        static get NAV_TILT_TOGGLE() {
            return ButtonName._MAP.NAV_TILT_TOGGLE;
        }

        /**
         * @return {String} 
         */
        static get NAV_ROTATE_CLOCKWISE() {
            return ButtonName._MAP.NAV_ROTATE_CLOCKWISE;
        }

        /**
         * @return {String} 
         */
        static get NAV_ROTATE_COUNTERCLOCKWISE() {
            return ButtonName._MAP.NAV_ROTATE_COUNTERCLOCKWISE;
        }

        /**
         * @return {String} 
         */
        static get NAV_HEADING_TOGGLE() {
            return ButtonName._MAP.NAV_HEADING_TOGGLE;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return ButtonName.valueForStringInternal(value, ButtonName._MAP);
        }
    }

    ButtonName._MAP = Object.freeze({
        'OK': 'OK',
        'PLAY_PAUSE': 'PLAY_PAUSE',
        'SEEKLEFT': 'SEEKLEFT',
        'SEEKRIGHT': 'SEEKRIGHT',
        'TUNEUP': 'TUNEUP',
        'TUNEDOWN': 'TUNEDOWN',
        'PRESET_0': 'PRESET_0',
        'PRESET_1': 'PRESET_1',
        'PRESET_2': 'PRESET_2',
        'PRESET_3': 'PRESET_3',
        'PRESET_4': 'PRESET_4',
        'PRESET_5': 'PRESET_5',
        'PRESET_6': 'PRESET_6',
        'PRESET_7': 'PRESET_7',
        'PRESET_8': 'PRESET_8',
        'PRESET_9': 'PRESET_9',
        'CUSTOM_BUTTON': 'CUSTOM_BUTTON',
        'SEARCH': 'SEARCH',
        'AC_MAX': 'AC_MAX',
        'AC': 'AC',
        'RECIRCULATE': 'RECIRCULATE',
        'FAN_UP': 'FAN_UP',
        'FAN_DOWN': 'FAN_DOWN',
        'TEMP_UP': 'TEMP_UP',
        'TEMP_DOWN': 'TEMP_DOWN',
        'DEFROST_MAX': 'DEFROST_MAX',
        'DEFROST': 'DEFROST',
        'DEFROST_REAR': 'DEFROST_REAR',
        'UPPER_VENT': 'UPPER_VENT',
        'LOWER_VENT': 'LOWER_VENT',
        'VOLUME_UP': 'VOLUME_UP',
        'VOLUME_DOWN': 'VOLUME_DOWN',
        'EJECT': 'EJECT',
        'SOURCE': 'SOURCE',
        'SHUFFLE': 'SHUFFLE',
        'REPEAT': 'REPEAT',
        'NAV_CENTER_LOCATION': 'NAV_CENTER_LOCATION',
        'NAV_ZOOM_IN': 'NAV_ZOOM_IN',
        'NAV_ZOOM_OUT': 'NAV_ZOOM_OUT',
        'NAV_PAN_UP': 'NAV_PAN_UP',
        'NAV_PAN_UP_RIGHT': 'NAV_PAN_UP_RIGHT',
        'NAV_PAN_RIGHT': 'NAV_PAN_RIGHT',
        'NAV_PAN_DOWN_RIGHT': 'NAV_PAN_DOWN_RIGHT',
        'NAV_PAN_DOWN': 'NAV_PAN_DOWN',
        'NAV_PAN_DOWN_LEFT': 'NAV_PAN_DOWN_LEFT',
        'NAV_PAN_LEFT': 'NAV_PAN_LEFT',
        'NAV_PAN_UP_LEFT': 'NAV_PAN_UP_LEFT',
        'NAV_TILT_TOGGLE': 'NAV_TILT_TOGGLE',
        'NAV_ROTATE_CLOCKWISE': 'NAV_ROTATE_CLOCKWISE',
        'NAV_ROTATE_COUNTERCLOCKWISE': 'NAV_ROTATE_COUNTERCLOCKWISE',
        'NAV_HEADING_TOGGLE': 'NAV_HEADING_TOGGLE',

    });

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

    class ButtonCapabilities extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {ButtonName} name
        * @return {ButtonCapabilities}
        */
        setName(name) {
            this.validateType(ButtonName, name);

            this.setParameter(ButtonCapabilities.KEY_NAME, name);
            return this;
        }

        /**
        * @return {ButtonName}
        */
        getName() {
            return this.getObject(ButtonName, ButtonCapabilities.KEY_NAME);
        }

        /**
        * @param {ModuleInfo} moduleInfo
        * @return {ButtonCapabilities}
        */
        setModuleInfo(moduleInfo) {
            this.validateType(ModuleInfo, moduleInfo);

            this.setParameter(ButtonCapabilities.KEY_MODULE_INFO, moduleInfo);
            return this;
        }

        /**
        * @return {ModuleInfo}
        */
        getModuleInfo() {
            return this.getObject(ModuleInfo, ButtonCapabilities.KEY_MODULE_INFO);
        }

        /**
        * @param {Boolean} shortPressAvailable
        * @return {ButtonCapabilities}
        */
        setShortPressAvailable(shortPressAvailable) {

            this.setParameter(ButtonCapabilities.KEY_SHORT_PRESS_AVAILABLE, shortPressAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getShortPressAvailable() {
            return this.getParameter(ButtonCapabilities.KEY_SHORT_PRESS_AVAILABLE);
        }

        /**
        * @param {Boolean} longPressAvailable
        * @return {ButtonCapabilities}
        */
        setLongPressAvailable(longPressAvailable) {

            this.setParameter(ButtonCapabilities.KEY_LONG_PRESS_AVAILABLE, longPressAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getLongPressAvailable() {
            return this.getParameter(ButtonCapabilities.KEY_LONG_PRESS_AVAILABLE);
        }

        /**
        * @param {Boolean} upDownAvailable
        * @return {ButtonCapabilities}
        */
        setUpDownAvailable(upDownAvailable) {

            this.setParameter(ButtonCapabilities.KEY_UP_DOWN_AVAILABLE, upDownAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getUpDownAvailable() {
            return this.getParameter(ButtonCapabilities.KEY_UP_DOWN_AVAILABLE);
        }

    }

    ButtonCapabilities.KEY_NAME = 'name';
    ButtonCapabilities.KEY_MODULE_INFO = 'moduleInfo';
    ButtonCapabilities.KEY_SHORT_PRESS_AVAILABLE = 'shortPressAvailable';
    ButtonCapabilities.KEY_LONG_PRESS_AVAILABLE = 'longPressAvailable';
    ButtonCapabilities.KEY_UP_DOWN_AVAILABLE = 'upDownAvailable';

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

    class SoftButtonCapabilities extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Boolean} shortPressAvailable
        * @return {SoftButtonCapabilities}
        */
        setShortPressAvailable(shortPressAvailable) {

            this.setParameter(SoftButtonCapabilities.KEY_SHORT_PRESS_AVAILABLE, shortPressAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getShortPressAvailable() {
            return this.getParameter(SoftButtonCapabilities.KEY_SHORT_PRESS_AVAILABLE);
        }

        /**
        * @param {Boolean} longPressAvailable
        * @return {SoftButtonCapabilities}
        */
        setLongPressAvailable(longPressAvailable) {

            this.setParameter(SoftButtonCapabilities.KEY_LONG_PRESS_AVAILABLE, longPressAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getLongPressAvailable() {
            return this.getParameter(SoftButtonCapabilities.KEY_LONG_PRESS_AVAILABLE);
        }

        /**
        * @param {Boolean} upDownAvailable
        * @return {SoftButtonCapabilities}
        */
        setUpDownAvailable(upDownAvailable) {

            this.setParameter(SoftButtonCapabilities.KEY_UP_DOWN_AVAILABLE, upDownAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getUpDownAvailable() {
            return this.getParameter(SoftButtonCapabilities.KEY_UP_DOWN_AVAILABLE);
        }

        /**
        * @param {Boolean} imageSupported
        * @return {SoftButtonCapabilities}
        */
        setImageSupported(imageSupported) {

            this.setParameter(SoftButtonCapabilities.KEY_IMAGE_SUPPORTED, imageSupported);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getImageSupported() {
            return this.getParameter(SoftButtonCapabilities.KEY_IMAGE_SUPPORTED);
        }

        /**
        * @param {Boolean} textSupported
        * @return {SoftButtonCapabilities}
        */
        setTextSupported(textSupported) {

            this.setParameter(SoftButtonCapabilities.KEY_TEXT_SUPPORTED, textSupported);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getTextSupported() {
            return this.getParameter(SoftButtonCapabilities.KEY_TEXT_SUPPORTED);
        }
    }

    SoftButtonCapabilities.KEY_SHORT_PRESS_AVAILABLE = 'shortPressAvailable';
    SoftButtonCapabilities.KEY_LONG_PRESS_AVAILABLE = 'longPressAvailable';
    SoftButtonCapabilities.KEY_UP_DOWN_AVAILABLE = 'upDownAvailable';
    SoftButtonCapabilities.KEY_IMAGE_SUPPORTED = 'imageSupported';
    SoftButtonCapabilities.KEY_TEXT_SUPPORTED = 'textSupported';

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

    class PresetBankCapabilities extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Boolean} onScreenPresetsAvailable
        * @return {PresetBankCapabilities}
        */
        setOnScreenPresetsAvailable(onScreenPresetsAvailable) {

            this.setParameter(PresetBankCapabilities.KEY_ON_SCREEN_PRESETS_AVAILABLE, onScreenPresetsAvailable);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getOnScreenPresetsAvailable() {
            return this.getParameter(PresetBankCapabilities.KEY_ON_SCREEN_PRESETS_AVAILABLE);
        }

    }

    PresetBankCapabilities.KEY_ON_SCREEN_PRESETS_AVAILABLE = 'onScreenPresetsAvailable';

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

    class VehicleType extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {String} make
        * @return {VehicleType}
        */
        setMake(make) {
            this.setParameter(VehicleType.KEY_MAKE, make);
            return this;
        }

        /**
        * @return {String}
        */
        getMake() {
            return this.getParameter(VehicleType.KEY_MAKE);
        }

        /**
        * @param {String} model
        * @return {VehicleType}
        */
        setModel(model) {
            this.setParameter(VehicleType.KEY_MODEL, model);
            return this;
        }

        /**
        * @return {String}
        */
        getModel() {
            return this.getParameter(VehicleType.KEY_MODEL);
        }

        /**
        * @param {String} modelYear
        * @return {VehicleType}
        */
        setModelYear(modelYear) {
            this.setParameter(VehicleType.KEY_MODEL_YEAR, modelYear);
            return this;
        }

        /**
        * @return {String}
        */
        getModelYear() {
            return this.getParameter(VehicleType.KEY_MODEL_YEAR);
        }

    }

    VehicleType.KEY_MAKE = 'make';
    VehicleType.KEY_MODEL = 'model';
    VehicleType.KEY_MODEL_YEAR = 'modelYear';
    VehicleType.KEY_TRIM = 'trim';

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

    /**
     * @typedef {Enum} FileType
     * @property {Object} _MAP
     */
    class HmiZoneCapabilities extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get FRONT() {
            return HmiZoneCapabilities._MAP.FRONT;
        }

        /**
         * @return {String} 
         */
        static get BACK() {
            return HmiZoneCapabilities._MAP.BACK;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return HmiZoneCapabilities.valueForStringInternal(value, HmiZoneCapabilities._MAP);
        }
    }

    HmiZoneCapabilities._MAP = Object.freeze({
        'FRONT': 'FRONT',
        'BACK': 'BACK',

    });

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

    /**
     * @typedef {Enum} PrerecordedSpeech
     * @property {Object} _MAP
     */
    class PrerecordedSpeech extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get HELP_JINGLE() {
            return PrerecordedSpeech._MAP.HELP_JINGLE;
        }

        /**
         * @return {String} 
         */
        static get INITIAL_JINGLE() {
            return PrerecordedSpeech._MAP.INITIAL_JINGLE;
        }

        /**
         * @return {String} 
         */
        static get LISTEN_JINGLE() {
            return PrerecordedSpeech._MAP.LISTEN_JINGLE;
        }

        /**
         * @return {String} 
         */
        static get POSITIVE_JINGLE() {
            return PrerecordedSpeech._MAP.POSITIVE_JINGLE;
        }

        /**
         * @return {String} 
         */
        static get NEGATIVE_JINGLE() {
            return PrerecordedSpeech._MAP.NEGATIVE_JINGLE;
        }


        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return PrerecordedSpeech.valueForStringInternal(value, PrerecordedSpeech._MAP);
        }
    }

    PrerecordedSpeech._MAP = Object.freeze({
        'HELP_JINGLE': 'HELP_JINGLE',
        'INITIAL_JINGLE': 'INITIAL_JINGLE',
        'LISTEN_JINGLE': 'LISTEN_JINGLE',
        'POSITIVE_JINGLE': 'POSITIVE_JINGLE',
        'NEGATIVE_JINGLE': 'NEGATIVE_JINGLE',

    });

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

    class RegisterAppInterfaceResponse extends RpcResponse {

        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.RegisterAppInterface);
        }

        /**
        * @param {SdlMsgVersion} The max RPC Spec version supported by this library
        * @return {RegisterAppInterfaceResponse}
        */
        setSdlMsgVersion(sdlMsgVersion) {
            this.validateType(SdlMsgVersion, sdlMsgVersion);

            this.setParameter(RegisterAppInterfaceResponse.KEY_SDL_MSG_VERSION, sdlMsgVersion);
            return this;
        }

        /**
        * @return {SdlMsgVersion}
        */
        getSdlMsgVersion() {
            return this.getObject(SdlMsgVersion, RegisterAppInterfaceResponse.KEY_SDL_MSG_VERSION);
        }

        /**
        * @param {Language} language
        * @return {RegisterAppInterfaceResponse}
        */
        setLanguage(language) {
            this.validateType(Language, language);

            this.setParameter(RegisterAppInterfaceResponse.KEY_LANGUAGE, language);
            return this;
        }

        /**
        * @return {Language}
        */
        getLanguage() {
            return this.getObject(Language, RegisterAppInterfaceResponse.KEY_LANGUAGE);
        }


        /**
        * @param {Language} hmiDisplayLanguage
        * @return {RegisterAppInterfaceResponse}
        */
        setHmiDisplayLanguage(hmiDisplayLanguage) {
            this.validateType(Language, hmiDisplayLanguage);

            this.setParameter(RegisterAppInterfaceResponse.KEY_HMI_DISPLAY_LANGUAGE, hmiDisplayLanguage);
            return this;
        }

        /**
        * @return {Language}
        */
        getHmiDisplayLanguage() {
            return this.getObject(Language, RegisterAppInterfaceResponse.KEY_HMI_DISPLAY_LANGUAGE);
        }

        /**
        * @param {DisplayCapabilities} displayCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setDisplayCapabilities(displayCapabilities) {
            this.validateType(DisplayCapabilities, displayCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_DISPLAY_CAPABILITIES, displayCapabilities);
            return this;
        }

        /**
        * @return {DisplayCapabilities}
        */
        getDisplayCapabilities() {
            return this.getObject(DisplayCapabilities, RegisterAppInterfaceResponse.KEY_DISPLAY_CAPABILITIES);
        }


        /**
        * @param {Array<ButtonCapabilities>} buttonCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setButtonCapabilities(buttonCapabilities) {
            //TODO make this work with arrays
            //this.validateType(Language, buttonCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_BUTTON_CAPABILITIES, buttonCapabilities);
            return this;
        }

        /**
        * @return {Array<ButtonCapabilities>}
        */
        getButtonCapabilities() {
            return this.getObject(ButtonCapabilities, RegisterAppInterfaceResponse.KEY_BUTTON_CAPABILITIES);
        }

        /**
        * @param {Array<SoftButtonCapabilities>} softButtonCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setSoftButtonCapabilities(softButtonCapabilities) {
            //TODO make this work with arrays
            //this.validateType(SoftButtonCapabilities, softButtonCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_BUTTON_CAPABILITIES, softButtonCapabilities);
            return this;
        }

        /**
        * @return {Array<SoftButtonCapabilities>}
        */
        getSoftButtonCapabilities() {
            return this.getObject(SoftButtonCapabilities, RegisterAppInterfaceResponse.KEY_BUTTON_CAPABILITIES);
        }

        /**
        * @param {PresetBankCapabilities} presetBankCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setPresetBankCapabilities(presetBankCapabilities) {
            this.validateType(PresetBankCapabilities, presetBankCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_PRESET_BANK_CAPABILITIES, presetBankCapabilities);
            return this;
        }

        /**
        * @return {PresetBankCapabilities}
        */
        getPresetBankCapabilities() {
            return this.getObject(PresetBankCapabilities, RegisterAppInterfaceResponse.KEY_PRESET_BANK_CAPABILITIES);
        }

        /**
        * @param {Array<HmiZoneCapabilities>} hmiZoneCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setHmiZoneCapabilities(hmiZoneCapabilities) {
            //TODO make this work for arrays
            //this.validateType(HmiZoneCapabilities, hmiZoneCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_HMI_ZONE_CAPABILITIES, hmiZoneCapabilities);
            return this;
        }

        /**
        * @return {Array<HmiZoneCapabilities>}
        */
        getHmiZoneCapabilities() {
            return this.getObject(HmiZoneCapabilities, RegisterAppInterfaceResponse.KEY_HMI_ZONE_CAPABILITIES);
        }

        /**
        * @param {Array<SpeechCapabilities>} speechCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setSpeechCapabilities(speechCapabilities) {
            //TODO make this work for arrays
            //this.validateType(SpeechCapabilities, speechCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_SPEECH_CAPABILITIES, speechCapabilities);
            return this;
        }

        /**
        * @return {Array<SpeechCapabilities>}
        */
        getSpeechCapabilities() {
            return this.getObject(SpeechCapabilities, RegisterAppInterfaceResponse.KEY_SPEECH_CAPABILITIES);
        }

        /**
        * @param {Array<PrerecordedSpeech>} speechCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setPrerecordedSpeech(speechCapabilities) {
            //TODO make this work for arrays
            //this.validateType(PrerecordedSpeech, speechCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_PRERECORDED_SPEECH, speechCapabilities);
            return this;
        }

        /**
        * @return {Array<PrerecordedSpeech>}
        */
        getPrerecordedSpeech() {
            return this.getObject(PrerecordedSpeech, RegisterAppInterfaceResponse.KEY_PRERECORDED_SPEECH);
        }

        /**
        * @param {Array<VrCapabilities>} vrCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setVrCapabilities(vrCapabilities) {
            //TODO make this work for arrays
            //this.validateType(VrCapabilities, vrCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_VR_CAPABILITIES, vrCapabilities);
            return this;
        }

        /**
        * @return {Array<VrCapabilities>}
        */
        getVrCapabilities() {
            return this.getObject(VrCapabilities, RegisterAppInterfaceResponse.KEY_VR_CAPABILITIES);
        }

        /**
        * @param {Array<AudioPassThruCapabilities>} audioPassThruCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setAudioPassThruCapabilities(audioPassThruCapabilities) {
            //TODO make this work for arrays
            //this.validateType(AudioPassThruCapabilities, audioPassThruCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_AUDIO_PASS_THRU_CAPABILITIES, audioPassThruCapabilities);
            return this;
        }

        /**
        * @return {Array<AudioPassThruCapabilities>}
        */
        getAudioPassThruCapabilities() {
            return this.getObject(AudioPassThruCapabilities, RegisterAppInterfaceResponse.KEY_AUDIO_PASS_THRU_CAPABILITIES);
        }

        /**
        * @param {AudioPassThruCapabilities} pcmStreamCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setPcmStreamCapabilities(pcmStreamCapabilities) {
            this.validateType(AudioPassThruCapabilities, pcmStreamCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_PCM_STREAM_CAPABILITIES, pcmStreamCapabilities);
            return this;
        }

        /**
        * @return {AudioPassThruCapabilities}
        */
        getPcmStreamCapabilities() {
            return this.getObject(AudioPassThruCapabilities, RegisterAppInterfaceResponse.KEY_PCM_STREAM_CAPABILITIES);
        }

        /**
        * @param {VehicleType} vehicleType
        * @return {RegisterAppInterfaceResponse}
        */
        setVehicleType(vehicleType) {
            this.validateType(VehicleType, vehicleType);

            this.setParameter(RegisterAppInterfaceResponse.KEY_VEHICLE_TYPE, vehicleType);
            return this;
        }

        /**
        * @return {VehicleType}
        */
        getVehicleType() {
            return this.getObject(VehicleType, RegisterAppInterfaceResponse.KEY_VEHICLE_TYPE);
        }

        /**
        * @param {Number} supportedDiagModes
        * @return {RegisterAppInterfaceResponse}
        */
        setSupportedDiagModes(supportedDiagModes) {

            this.setParameter(RegisterAppInterfaceResponse.KEY_SUPPORTED_DIAG_MODE, supportedDiagModes);
            return this;
        }

        /**
        * @return {Number}
        */
        getSupportedDiagModes() {
            return this.getParameter(RegisterAppInterfaceResponse.KEY_SUPPORTED_DIAG_MODE);
        }

        /**
        * @param {HMICapabilities} hmiCapabilities
        * @return {RegisterAppInterfaceResponse}
        */
        setHMICapabilities(hmiCapabilities) {
            this.validateType(HMICapabilities, hmiCapabilities);

            this.setParameter(RegisterAppInterfaceResponse.KEY_HMI_CAPABILITIES, hmiCapabilities);
            return this;
        }

        /**
        * @return {HMICapabilities}
        */
        getHMICapabilities() {
            return this.getObject(HMICapabilities, RegisterAppInterfaceResponse.KEY_HMI_CAPABILITIES);
        }

        /**
        * @param {String} sdlVersion
        * @return {RegisterAppInterfaceResponse}
        */
        setSdlVersion(sdlVersion) {

            this.setParameter(RegisterAppInterfaceResponse.KEY_SDL_VERSION, sdlVersion);
            return this;
        }

        /**
        * @return {String}
        */
        getSdlVersion() {
            return this.getParameter(RegisterAppInterfaceResponse.KEY_SDL_VERSION);
        }

        /**
        * @param {String} systemSoftwareVersion
        * @return {RegisterAppInterfaceResponse}
        */
        setSystemSoftwareVersion(systemSoftwareVersion) {

            this.setParameter(RegisterAppInterfaceResponse.KEY_SYSTEM_SOFTWARE_VERSION, systemSoftwareVersion);
            return this;
        }

        /**
        * @return {String}
        */
        getSystemSoftwareVersion() {
            return this.getParameter(RegisterAppInterfaceResponse.KEY_SYSTEM_SOFTWARE_VERSION);
        }

        /**
        * @param {Boolean} iconResumed
        * @return {RegisterAppInterfaceResponse}
        */
        setIconResumed(iconResumed) {

            this.setParameter(RegisterAppInterfaceResponse.KEY_ICON_RESUMED, iconResumed);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getIconResumed() {
            return this.getParameter(RegisterAppInterfaceResponse.KEY_ICON_RESUMED);
        }


    }

    RegisterAppInterfaceResponse.KEY_SDL_MSG_VERSION = 'syncMsgVersion';
    RegisterAppInterfaceResponse.KEY_LANGUAGE = 'language';
    RegisterAppInterfaceResponse.KEY_HMI_DISPLAY_LANGUAGE = 'hmiDisplayLanguage';
    RegisterAppInterfaceResponse.KEY_DISPLAY_CAPABILITIES = 'displayCapabilities';
    RegisterAppInterfaceResponse.KEY_BUTTON_CAPABILITIES = 'buttonCapabilities';
    RegisterAppInterfaceResponse.KEY_SOFT_BUTTON_CAPABILITIES = 'softButtonCapabilities';
    RegisterAppInterfaceResponse.KEY_PRESET_BANK_CAPABILITIES = 'presetBankCapabilities';
    RegisterAppInterfaceResponse.KEY_HMI_ZONE_CAPABILITIES = 'hmiZoneCapabilities';
    RegisterAppInterfaceResponse.KEY_SPEECH_CAPABILITIES = 'speechCapabilities';
    RegisterAppInterfaceResponse.KEY_PRERECORDED_SPEECH = 'prerecordedSpeech';
    RegisterAppInterfaceResponse.KEY_VR_CAPABILITIES = 'vrCapabilities';
    RegisterAppInterfaceResponse.KEY_AUDIO_PASS_THRU_CAPABILITIES = 'audioPassThruCapabilities';
    RegisterAppInterfaceResponse.KEY_PCM_STREAM_CAPABILITIES = 'pcmStreamCapabilities';
    RegisterAppInterfaceResponse.KEY_VEHICLE_TYPE = 'vehicleType';
    RegisterAppInterfaceResponse.KEY_SUPPORTED_DIAG_MODE = 'supportedDiagModes';
    RegisterAppInterfaceResponse.KEY_HMI_CAPABILITIES = 'hmiCapabilities';
    RegisterAppInterfaceResponse.KEY_SDL_VERSION = 'sdlVersion';
    RegisterAppInterfaceResponse.KEY_SYSTEM_SOFTWARE_VERSION = 'systemSoftwareVersion';
    RegisterAppInterfaceResponse.KEY_ICON_RESUMED = 'iconResumed';

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

    class SetAppIcon extends RpcRequest {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.SetAppIcon);
        }

        /**
        * @param {String} fileName
        * @return {SetAppIcon}
        */
        setFileName(fileName) {
            this.setParameter(SetAppIcon.KEY_FILE_NAME, fileName);
            return this;
        }

        /**
        * @return {String}
        */
        getFileName() {
            return this.getParameter(SetAppIcon.KEY_FILE_NAME);
        }

    }

    SetAppIcon.KEY_FILE_NAME = 'syncFileName';

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

    class SetAppIconResponse extends RpcResponse {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.SetAppIcon);
        }

    }

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

    /**
     * @typedef {Enum} SoftButtonType
     * @property {Object} _MAP
     */
    class SoftButtonType extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get SBT_TEXT() {
            return SoftButtonType._MAP.SBT_TEXT;
        }

        /**
         * @return {String} 
         */
        static get SBT_IMAGE() {
            return SoftButtonType._MAP.SBT_IMAGE;
        }

        /**
         * @return {String} 
         */
        static get SBT_BOTH() {
            return SoftButtonType._MAP.SBT_BOTH;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return SoftButtonType.valueForStringInternal(value, SoftButtonType._MAP);
        }
    }

    SoftButtonType._MAP = Object.freeze({
        'SBT_TEXT': 'TEXT',
        'SBT_IMAGE': 'IMAGE',
        'SBT_BOTH': 'BOTH',

    });

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

    /**
     * @typedef {Enum} SystemAction
     * @property {Object} _MAP
     */
    class SystemAction extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get DEFAULT_ACTION() {
            return SystemAction._MAP.DEFAULT_ACTION;
        }

        /**
         * @return {String} 
         */
        static get STEAL_FOCUS() {
            return SystemAction._MAP.STEAL_FOCUS;
        }

        /**
         * @return {String} 
         */
        static get KEEP_CONTEXT() {
            return SystemAction._MAP.KEEP_CONTEXT;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return SystemAction.valueForStringInternal(value, SystemAction._MAP);
        }
    }

    SystemAction._MAP = Object.freeze({
        'DEFAULT_ACTION': 'DEFAULT_ACTION',
        'STEAL_FOCUS': 'STEAL_FOCUS',
        'KEEP_CONTEXT': 'KEEP_CONTEXT',

    });

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


    class SoftButton extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {SoftButtonType} type
        * @return {SoftButton}
        */
        setType(type) {
            this.validateType(SoftButtonType, type);

            this.setParameter(SoftButton.KEY_TYPE, type);
            return this;
        }

        /**
        * @return {SoftButtonType}
        */
        getType() {
            return this.getObject(SoftButtonType, SoftButton.KEY_TYPE);
        }

        /**
        * @param {String} text
        * @return {SoftButton}
        */
        setText(text) {
            this.setParameter(SoftButton.KEY_TEXT, text);
            return this;
        }

        /**
        * @return {String}
        */
        getText() {
            return this.getParameter(SoftButton.KEY_TEXT);
        }

        /**
        * @param {Image} image
        * @return {SoftButton}
        */
        setImage(image) {
            this.validateType(Image, image);

            this.setParameter(SoftButton.KEY_IMAGE, image);
            return this;
        }

        /**
        * @return {Image}
        */
        getImage() {
            return this.getObject(Image, SoftButton.KEY_IMAGE);
        }

        /**
        * @param {Boolean} isHighlighted
        * @return {SoftButton}
        */
        setIsHighlighted(isHighlighted) {
            this.setParameter(SoftButton.KEY_IS_HIGHLIGHTED, isHighlighted);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getIsHighlighted() {
            return this.getParameter(SoftButton.KEY_IS_HIGHLIGHTED);
        }

        /**
        * @param {Number} softButtonID
        * @return {SoftButton}
        */
        setSoftButtonID(softButtonID) {
            this.setParameter(SoftButton.KEY_SOFT_BUTTON_ID, softButtonID);
            return this;
        }

        /**
        * @return {Number}
        */
        getSoftButtonID() {
            return this.getParameter(SoftButton.KEY_SOFT_BUTTON_ID);
        }


        /**
        * @param {SystemAction} systemAction
        * @return {SoftButton}
        */
        setSystemAction(systemAction) {
            this.validateType(SystemAction, systemAction);

            this.setParameter(SoftButton.KEY_SYSTEM_ACTION, systemAction);
            return this;
        }

        /**
        * @return {SystemAction}
        */
        getSystemAction() {
            return this.getObject(SystemAction, SoftButton.KEY_SYSTEM_ACTION);
        }


    }

    SoftButton.KEY_TYPE = 'type';
    SoftButton.KEY_TEXT = 'text';
    SoftButton.KEY_IMAGE = 'image';
    SoftButton.KEY_IS_HIGHLIGHTED = 'isHighlighted';
    SoftButton.KEY_SOFT_BUTTON_ID = 'softButtonID';
    SoftButton.KEY_SYSTEM_ACTION = 'systemAction';

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

    /**
     * @typedef {Enum} MetadataType
     * @property {Object} _MAP
     */
    class MetadataType extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get mediaTitle() {
            return MetadataType._MAP.mediaTitle;
        }

        /**
         * @return {String} 
         */
        static get mediaArtist() {
            return MetadataType._MAP.mediaArtist;
        }

        /**
         * @return {String} 
         */
        static get mediaAlbum() {
            return MetadataType._MAP.mediaAlbum;
        }

        /**
         * @return {String} 
         */
        static get mediaYear() {
            return MetadataType._MAP.mediaYear;
        }

        /**
         * @return {String} 
         */
        static get mediaGenre() {
            return MetadataType._MAP.mediaGenre;
        }

        /**
         * @return {String} 
         */
        static get mediaStation() {
            return MetadataType._MAP.mediaStation;
        }

        /**
         * @return {String} 
         */
        static get rating() {
            return MetadataType._MAP.rating;
        }

        /**
         * @return {String} 
         */
        static get currentTemperature() {
            return MetadataType._MAP.currentTemperature;
        }

        /**
         * @return {String} 
         */
        static get maximumTemperature() {
            return MetadataType._MAP.maximumTemperature;
        }

        /**
         * @return {String} 
         */
        static get minimumTemperature() {
            return MetadataType._MAP.minimumTemperature;
        }

        /**
         * @return {String} 
         */
        static get weatherTerm() {
            return MetadataType._MAP.weatherTerm;
        }

        /**
         * @return {String} 
         */
        static get humidity() {
            return MetadataType._MAP.humidity;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return MetadataType.valueForStringInternal(value, MetadataType._MAP);
        }
    }

    MetadataType._MAP = Object.freeze({
        'mediaTitle': 'mediaTitle',
        'mediaArtist': 'mediaArtist',
        'mediaAlbum': 'mediaAlbum',
        'mediaYear': 'mediaYear',
        'mediaGenre': 'mediaGenre',
        'mediaStation': 'mediaStation',
        'rating': 'rating',
        'currentTemperature': 'currentTemperature',
        'maximumTemperature': 'maximumTemperature',
        'minimumTemperature': 'minimumTemperature',
        'weatherTerm': 'weatherTerm',
        'humidity': 'humidity',

    });

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

    class MetadataTags extends RpcStruct {

        /**
        * @constructor
        */
        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Array<MetadataType>} mainField1
        * @return {MetadataTags}
        */
        setMainField1(mainField1) {
            this.setParameter(MetadataTags.KEY_MAIN_FIELD_1, mainField1);
            return this;
        }

        /**
        * @return {Array<MetadataType>}
        */
        getMainField1() {
            return this.getObject(MetadataType, MetadataTags.KEY_MAIN_FIELD_1);
        }

        /**
        * @param {Array<MetadataType>} mainField2
        * @return {MetadataTags}
        */
        setMainField2(mainField2) {
            this.setParameter(MetadataTags.KEY_MAIN_FIELD_2, mainField2);
            return this;
        }

        /**
        * @return {Array<MetadataType>}
        */
        getMainField2() {
            return this.getObject(MetadataType, MetadataTags.KEY_MAIN_FIELD_2);
        }

        /**
        * @param {Array<MetadataType>} mainField3
        * @return {MetadataTags}
        */
        setMainField3(mainField3) {
            this.setParameter(MetadataTags.KEY_MAIN_FIELD_3, mainField3);
            return this;
        }

        /**
        * @return {Array<MetadataType>}
        */
        getMainField3() {
            return this.getObject(MetadataType, MetadataTags.KEY_MAIN_FIELD_3);
        }

        /**
        * @param {Array<MetadataType>} mainField4
        * @return {MetadataTags}
        */
        setMainField4(mainField4) {
            this.setParameter(MetadataTags.KEY_MAIN_FIELD_4, mainField4);
            return this;
        }

        /**
        * @return {Array<MetadataType>}
        */
        getMainField4() {
            return this.getObject(MetadataType, MetadataTags.KEY_MAIN_FIELD_4);
        }

    }

    MetadataTags.KEY_MAIN_FIELD_1 = 'mainField1';
    MetadataTags.KEY_MAIN_FIELD_2 = 'mainField2';
    MetadataTags.KEY_MAIN_FIELD_3 = 'mainField3';
    MetadataTags.KEY_MAIN_FIELD_4 = 'mainField4';

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

    /**
     * @typedef {Enum} TextAlignment
     * @property {Object} _MAP
     */
    class TextAlignment extends Enum {

        constructor() {
            super();
        }

        /**
        * @return {String} 
        */
        static get LEFT_ALIGNED() {
            return TextAlignment._MAP.LEFT_ALIGNED;
        }

        /**
        * @return {String} 
        */
        static get RIGHT_ALIGNED() {
            return TextAlignment._MAP.RIGHT_ALIGNED;
        }

        /**
        * @return {String} 
        */
        static get CENTERED() {
            return TextAlignment._MAP.CENTERED;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return TextAlignment.valueForStringInternal(value, TextAlignment._MAP);
        }
    }

    TextAlignment._MAP = Object.freeze({
        'LEFT_ALIGNED': 'LEFT_ALIGNED',
        'RIGHT_ALIGNED': 'RIGHT_ALIGNED',
        'CENTERED': 'CENTERED',


    });

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

    class Show$1 extends RpcRequest {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.Show);
        }


        /**
        * @param {String} mainField1
        * @return {Show}
        */
        setMainField1(mainField1) {
            this.setParameter(Show$1.KEY_MAIN_FIELD_1, mainField1);
            return this;
        }

        /**
        * @return {String}
        */
        getMainField1() {
            return this.getParameter(Show$1.KEY_MAIN_FIELD_1);
        }

        /**
        * @param {String} mainField2
        * @return {Show}
        */
        setMainField2(mainField2) {
            this.setParameter(Show$1.KEY_MAIN_FIELD_2, mainField2);
            return this;
        }

        /**
        * @return {String}
        */
        getMainField2() {
            return this.getParameter(Show$1.KEY_MAIN_FIELD_2);
        }

        /**
        * @param {String} mainField3
        * @return {Show}
        */
        setMainField3(mainField3) {
            this.setParameter(Show$1.KEY_MAIN_FIELD_3, mainField3);
            return this;
        }

        /**
        * @return {String}
        */
        getMainField3() {
            return this.getParameter(Show$1.KEY_MAIN_FIELD_3);
        }

        /**
        * @param {String} mainField4
        * @return {Show}
        */
        setMainField4(mainField4) {
            this.setParameter(Show$1.KEY_MAIN_FIELD_4, mainField4);
            return this;
        }

        /**
        * @return {String}
        */
        getMainField4() {
            return this.getParameter(Show$1.KEY_MAIN_FIELD_4);
        }

        /**
        * @param {TextAlignment} menuParams
        * @return {Show}
        */
        setAlignment(alignment) {
            this.validateType(TextAlignment, alignment);

            this.setParameter(Show$1.KEY_ALIGNMENT, alignment);
            return this;
        }

        /**
        * @return {TextAlignment}
        */
        getAlignment() {
            return this.getObject(TextAlignment, Show$1.KEY_ALIGNMENT);
        }

        /**
        * @param {String} statusBar
        * @return {Show}
        */
        setStatusBar(statusBar) {
            this.setParameter(Show$1.KEY_STATUS_BAR, statusBar);
            return this;
        }

        /**
        * @return {String}
        */
        getStatusBar() {
            return this.getParameter(Show$1.KEY_STATUS_BAR);
        }

        /**
        * @param {String} mediaClock
        * @return {Show}
        */
        setMediaClock(mediaClock) {
            this.setParameter(Show$1.KEY_MEDIA_CLOCK, mediaClock);
            return this;
        }

        /**
        * @return {String}
        */
        getMediaClock() {
            return this.getParameter(Show$1.KEY_MEDIA_CLOCK);
        }

        /**
        * @param {String} mediaTrack
        * @return {Show}
        */
        setMediaTrack(mediaTrack) {
            this.setParameter(Show$1.KEY_MEDIA_TRACK, mediaTrack);
            return this;
        }

        /**
        * @return {String}
        */
        getMediaTrack() {
            return this.getParameter(Show$1.KEY_MEDIA_TRACK);
        }

        /**
        * @param {Image} graphic
        * @return {Show}
        */
        setGraphic(graphic) {
            this.validateType(Image, graphic);

            this.setParameter(Show$1.KEY_GRAPHIC, graphic);
            return this;
        }

        /**
        * @return {Image}
        */
        getGraphic() {
            return this.getObject(Image, Show$1.KEY_GRAPHIC);
        }

        /**
        * @param {Image} secondaryGraphic
        * @return {Show}
        */
        setSecondaryGraphic(secondaryGraphic) {
            this.validateType(Image, secondaryGraphic);

            this.setParameter(Show$1.KEY_SECONDARY_GRAPHIC, secondaryGraphic);
            return this;
        }

        /**
        * @return {Image}
        */
        getSecondaryGraphic() {
            return this.getObject(Image, Show$1.KEY_SECONDARY_GRAPHIC);
        }

        /**
        * @param {Array<SoftButton>} softButtons
        * @return {Show}
        */
        setSoftButtons(softButtons) {
            //TODO make this work for arrays
            //this.validateType(SoftButton, softButtons);

            this.setParameter(Show$1.KEY_SOFT_BUTTONS, softButtons);
            return this;
        }

        /**
        * @return {Array<SoftButton>}
        */
        getSoftButtons() {
            return this.getObject(SoftButton, Show$1.KEY_SOFT_BUTTONS);
        }

        /**
        * @param {Array<String>} customPresets
        * @return {Show}
        */
        setCustomPresets(customPresets) {
            this.setParameter(Show$1.KEY_CUSTOM_PRESETS, customPresets);
            return this;
        }

        /**
        * @return {Array<String>}
        */
        getCustomPresets() {
            return this.getParameter(Show$1.KEY_CUSTOM_PRESETS);
        }

        /**
        * @param {MetadataTags} metadataTags
        * @return {Show}
        */
        setMetadataTags(metadataTags) {
            this.validateType(MetadataTags, metadataTags);

            this.setParameter(Show$1.KEY_METADATA_TAGS, metadataTags);
            return this;
        }

        /**
        * @return {MetadataTags}
        */
        getMetadataTags() {
            return this.getObject(MetadataTags, Show$1.KEY_METADATA_TAGS);
        }

        /**
        * @param {String} templateTitle
        * @return {Show}
        */
        setTemplateTitle(templateTitle) {
            this.setParameter(Show$1.KEY_TEMPLATE_TITLE, templateTitle);
            return this;
        }

        /**
        * @return {String}
        */
        getTemplateTitle() {
            return this.getParameter(Show$1.KEY_TEMPLATE_TITLE);
        }

        /**
        * @param {Number} windowID
        * @return {Show}
        */
        setWindowID(windowID) {
            this.setParameter(Show$1.KEY_WINDOW_ID, windowID);
            return this;
        }

        /**
        * @return {Number}
        */
        getWindowID() {
            return this.getParameter(Show$1.KEY_WINDOW_ID);
        }
    }

    Show$1.KEY_MAIN_FIELD_1 = 'mainField1';
    Show$1.KEY_MAIN_FIELD_2 = 'mainField2';
    Show$1.KEY_MAIN_FIELD_3 = 'mainField3';
    Show$1.KEY_MAIN_FIELD_4 = 'mainField4';
    Show$1.KEY_ALIGNMENT = 'alignment';
    Show$1.KEY_STATUS_BAR = 'statusBar';
    Show$1.KEY_MEDIA_CLOCK = 'mediaClock';
    Show$1.KEY_MEDIA_TRACK = 'mediaTrack';
    Show$1.KEY_GRAPHIC = 'graphic';
    Show$1.KEY_SECONDARY_GRAPHIC = 'secondaryGraphic';
    Show$1.KEY_SOFT_BUTTONS = 'softButtons';
    Show$1.KEY_CUSTOM_PRESETS = 'customPresets';
    Show$1.KEY_METADATA_TAGS = 'metadataTags';
    Show$1.KEY_TEMPLATE_TITLE = 'templateTitle';
    Show$1.KEY_WINDOW_ID = 'windowID';

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

    class ShowResponse extends RpcResponse {

    	/**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.Show);
        }

    }

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

    class UnregisterAppInterface extends RpcRequest {

        /**
        * @constructor
        */
        constructor(store) {
            super(store);
            this.setFunctionName(FunctionID.UnregisterAppInterface);
        }

    }

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

    class RpcCreator {

        /**
         * Converts an SdlPacket to an RpcMessage
         * @param {SdlPacket} sdlPacket
         * @return {RpcMessage}
         */
        static construct (sdlPacket) {
            const payload = sdlPacket.getPayload();
            const binaryFrameHeader = BinaryFrameHeader.fromBinaryHeader(payload);

            let message;
            const rpcType = binaryFrameHeader.getRpcType();
            const rpcName = RpcType.keyForValue(rpcType);
            const correlationId = binaryFrameHeader.getCorrelationId();
            const functionId = binaryFrameHeader.getFunctionId();
            const functionName = FunctionID.keyForValue(functionId);
            const bulkData = binaryFrameHeader.getBulkData();
            const jsonData = binaryFrameHeader.getJsonData();
            const params = {
                parameters: JsonRpcMarshaller.unmarshall(jsonData),
            };

            switch (functionId) {
                case FunctionID.AddCommand:
                    if (rpcType === RpcType.REQUEST) 
                        message = new AddCommand(params);
                    else if (rpcType === RpcType.RESPONSE) 
                        message = new AddCommandResponse(params);
                    break;
                case FunctionID.OnHMIStatus: //TODO: should OnHMIStatus be OnHmiStatus, or the class name change to OnHMIStatus? or is this fine as is?
                    if (rpcType === RpcType.NOTIFICATION) 
                        message = new OnHmiStatus(params);
                    break;
                case FunctionID.OnLanguageChange:
                    if (rpcType === RpcType.NOTIFICATION) 
                        message = new OnLanguageChange(params);
                    break;
                case FunctionID.PutFile:
                    if (rpcType === RpcType.REQUEST) 
                        message = new PutFile(params);
                    else if (rpcType === RpcType.RESPONSE) 
                        message = new PutFileResponse(params);
                    break;
                case FunctionID.RegisterAppInterface:
                    if (rpcType === RpcType.REQUEST) 
                        message = new RegisterAppInterface(params);
                    else if (rpcType === RpcType.RESPONSE) 
                        message = new RegisterAppInterfaceResponse(params);
                    break;
                case FunctionID.SetAppIcon:
                    if (rpcType === RpcType.REQUEST) 
                        message = new SetAppIcon(params);
                    else if (rpcType === RpcType.RESPONSE) 
                        message = new SetAppIconResponse(params);
                    break;
                case FunctionID.Show:
                    if (rpcType === RpcType.REQUEST) 
                        message = new Show$1(params);
                    else if (rpcType === RpcType.RESPONSE) 
                        message = new ShowResponse(params);
                    break;
                case FunctionID.UnregisterAppInterface:
                    if (rpcType === RpcType.REQUEST) 
                        message = new UnregisterAppInterface(params);
                    // else if (rpcType === RpcType.RESPONSE) TODO: make UnregisterAppInterfaceResponse
                    break;
                default:
                    message = null;
            }

            if (message === null || message === undefined) { // informs of missing classes
                console.warn(`RpcCreator couldn't construct an RPC for the ${functionName} ${rpcName}`);
                return null;
            }

            if (rpcType === RpcType.REQUEST || rpcType === RpcType.RESPONSE) {
                message.setCorrelationId(correlationId);
            }
            if (bulkData) {
                message.setBulkData(bulkData);
            }

            return message;
        }
    }

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

    /**
     * Base implementation of sdl protocol.
     * Should be able to handle basic control frames and be able to
     * send and receive packets from the transport manager.
     * Also sends key events to the sdlProtocolListener.
     */
    class SdlProtocolBase {
        /**
         * 
         * @param { TransportConfigBase } baseTransportConfig
         * @param { SdlProtocolListener } sdlProtocolListener
         * @constructor
         */
        constructor (baseTransportConfig, sdlProtocolListener) {
            this._baseTransportConfig = baseTransportConfig;
            this._transportConfig = baseTransportConfig;
            this._sdlProtocolListener = sdlProtocolListener;
            this._transportManager = null;

            this.reset();
            this._createTransportListener();
        }


        /**
         * Resets the sdl protocol to its default state.
         */
        reset () {
            this._protocolVersion = new Version(1, 0, 0);
            this._transportConfig = this._baseTransportConfig;
            this._headerSize = SdlProtocolBase.V1_HEADER_SIZE;
            this._serviceStatus = {};
            this._serviceStatus[ServiceType.CONTROL] = true;
            this._mtus = {};
            this._mtus[ServiceType.RPC] = SdlProtocolBase.V1_V2_MTU_SIZE - this._headerSize;
            this._hashID = 0;
            this._messageFrameAssemblers = {};
            this._messageID = 1;
            this._sessionID = 0;
        }


        /**
         * Sets a transport manager.
         * @param { TransportManagerBase } manager
         */
        setTransportManager (manager) {
            if( !this._serviceStatus[ServiceType.RPC]){
                //RPC service hasn't been started, lets start it
                this.startService(ServiceType.RPC, 0, false);
            }
            this._transportManager = manager;
        }


        /**
         * Creates the transport listener. This will recieve incoming requests
         * from the transport manager.
         */
        _createTransportListener () {
            const self = this;
            this._transportListener = new TransportListener();
            this._transportListener.setOnTransportConnected(function () {
                self._handleTransportConnected();
            });
            this._transportListener.setOnTransportDisconnected(function () {
            });
            this._transportListener.setOnPacketReceived(function (sdlPacket) {
                self._handlePacketReceived(sdlPacket);
            });
            this._transportListener.setOnError(function () {
            });
        }

        _handleTransportConnected () {
            this._sdlProtocolListener.onTransportConnected();
        }

        /**
         * Starts up the SDL protocol class. It will kick off the transport manager and underlying transport.
         */
        start () {
            if (!this._transportManager) {
                throw 'A transport manager must be defined, unable to start SDL Protocol';
            }
            this._transportManager.start();
        }


        /**
         * Start the service. This is the first step in communicating with sdl core.
         * @param {ServiceType} serviceType 
         * @param {Number} sessionID
         * @param {Boolean} isEncrypted
         */
        startService (serviceType, sessionID, isEncrypted) {
            const protocolVersion = this.constructor.MAX_PROTOCOL_VERSION;
            const messageID = 0;
            const header = new SdlPacket(protocolVersion.getMajor(), isEncrypted, FrameType.CONTROL,
                serviceType, SdlPacket.FRAME_INFO_START_SERVICE, sessionID,
                0, messageID, null);
            if (ServiceType.RPC === serviceType) {
                header.putTag(ControlFrameTags.RPC.StartService.PROTOCOL_VERSION, protocolVersion.toString());
            } else {
                // NAV and other services
                throw 'Service type not implemented';
            }
            this.sendPacket(header);
        }

        /**
         *  Get the max transport unit of a specific service type.
         * @param { ServiceType } serviceType
         * @return {number} max transport unit for the given service type
         */
        getMtu (serviceType) {
            const retVal = this._mtus[serviceType];
            if (retVal) {
                return retVal;
            }
            return SdlProtocolBase.V1_V2_MTU_SIZE;
        }

        /**
         * Returns true if transport manager is connected.
         * @return {Boolean} isConnected
         */
        isConnected () {
            return this._transportManager && this._transportManager.isConnected(null, null);
        }

        /**
         * Get the current protocol version in use.
         * @returns {Version} protocol version
         */
        getProtocolVersion () {
            return this._protocolVersion;
        }


        /**
         * This method will set the major protocol version that we should use. 
         * It will also set the default MTU based on version.
         * @param { number } version major version to use
         */
        _setVersion (version) {
            if (version > 5) {
                this._protocolVersion = new Version('5.1.0'); // protect for future, proxy only supports v5 or lower
                this.headerSize = this.constructor.V2_HEADER_SIZE;
                this._mtus[ServiceType.RPC] = this.constructor.V3_V4_MTU_SIZE;
            } else if (version === 5) {
                this._protocolVersion = new Version('5.0.0');
                this.headerSize = this.constructor.V2_HEADER_SIZE;
                this._mtus[ServiceType.RPC] = this.constructor.V3_V4_MTU_SIZE;
            } else if (version === 4) {
                this._protocolVersion = new Version('4.0.0');
                this.headerSize = this.constructor.V2_HEADER_SIZE;
                this._mtus[ServiceType.RPC] = this.constructor.V3_V4_MTU_SIZE; // versions 4 supports 128k MTU
            } else if (version === 3) {
                this._protocolVersion = new Version('3.0.0');
                this.headerSize = this.constructor.V2_HEADER_SIZE;
                this._mtus[ServiceType.RPC] = this.constructor.V3_V4_MTU_SIZE; // versions 3 supports 128k MTU
            } else if (version === 2) {
                this._protocolVersion = new Version('2.0.0');
                this.headerSize = this.constructor.V2_HEADER_SIZE;
                this._mtus[ServiceType.RPC] = this.constructor.V1_V2_MTU_SIZE - this.headerSize;
            } else if (version === 1) {
                this._protocolVersion = new Version('1.0.0');
                this.headerSize = this.constructor.V1_HEADER_SIZE;
                this._mtus[ServiceType.RPC] = this.constructor.V1_V2_MTU_SIZE - this.headerSize;
            }
        }

        /**
         * Sends an sdlPacket.
         * @param {SdlPacket} sdlPacket
         */
        sendPacket (sdlPacket) {
            if (this._transportManager) {
                this._transportManager.sendPacket(sdlPacket);
            }
        }

        /**
         * Returns the sessionId in use.
         * @returns {Number}
         */
        _getSessionId () {
            return this._sdlProtocolListener.getSessionId();
        }

        /**
         * Gets the next available messageID for sending requests.
         * @returns {Number}
         */
        _getNextMessageID () {
            return this._messageID++;
        }

        /**
         * Takes an rpc message and sends a single or multi frame packets.
         * @param {RpcRequest} rpcMessage 
         */
        sendRpc (rpcRequest) {
            const self = this;
            const sessionId = this._getSessionId();
            const messageID = this._getNextMessageID();
            const mtu = self._mtus[ServiceType.RPC];
            const version = self._protocolVersion.getMajor();
            const isEncrypted = rpcRequest.getIsEncrypted();

            MessageFrameDisassembler.buildRPC(rpcRequest, sessionId, messageID, mtu, version, isEncrypted, function (sdlPacket) {
                self.sendPacket(sdlPacket);
            });
        }

        /**
         * Handles incoming packets.
         * @param {SdlPacket} sdlPacket
         */
        _handlePacketReceived (sdlPacket) {
            if (this._protocolVersion === null || this._protocolVersion.getMajor() === 1) {
                this._setVersion(sdlPacket.getVersion());
            }
            const frameType = sdlPacket.getFrameType();
            if (frameType === FrameType.CONTROL) {
                return this._handleControlPacket(sdlPacket);
            } else {
                const messageFrameAssembler = this._getMessageFrameAssembler(sdlPacket);
                return messageFrameAssembler.handleFrame(sdlPacket);
            }
        }

        /**
         * Handles non-control packets after they have been assembled.
         * @param {SdlPacket} sdlPacket 
         */
        _handleOnMessageAssembled (sdlPacket) {
            const serviceType = sdlPacket.getServiceType();

            if (serviceType === ServiceType.RPC || serviceType === ServiceType.HYBRID) {
                return this._handleRPCPacket(sdlPacket);
            } else if (serviceType === ServiceType.HYBRID) {
                return this._handleRPCPacket(sdlPacket);
            } else {
                console.warn('Unhandled service type ', sdlPacket);
            }
        }

        /**
         * Get the message frame assembler for the packet.
         * @param {SdlPacket} sdlPacket
         */
        _getMessageFrameAssembler (sdlPacket) {
            const self = this;
            let messageFrameAssembler = self._messageFrameAssemblers[sdlPacket.getMessageID()];
            if (!messageFrameAssembler) {
                messageFrameAssembler = new MessageFrameAssembler(function (err, sdlPacket) {
                    if (err) {
                        throw err;
                    }
                    self._messageFrameAssemblers[sdlPacket.getMessageID()] = null; // Remove the mapping
                    self._handleOnMessageAssembled(sdlPacket);
                });
                self._messageFrameAssemblers[sdlPacket.getMessageID()] = messageFrameAssembler;
            }

            return messageFrameAssembler;
        }

        /**
         * Handles incoming control packets.
         * @param { SdlPacket } sdlPacket
         */
        _handleControlPacket (sdlPacket) {
            const frameInfo = sdlPacket.getFrameInfo();
           
            if (frameInfo === SdlPacket.FRAME_INFO_HEART_BEAT) {
                return this._handleProtocolHeartbeat(sdlPacket);
            } else if (frameInfo === SdlPacket.FRAME_INFO_HEART_BEAT_ACK) {
                return this._handleProtocolHeartbeatACK(sdlPacket);
            } else if (frameInfo === SdlPacket.FRAME_INFO_START_SERVICE_ACK) {
                return this._handleStartServiceACK(sdlPacket);
            } else if (frameInfo === SdlPacket.FRAME_INFO_START_SERVICE_NAK) {
                return this._handleStartServiceNAK(sdlPacket);
            } else if (frameInfo === SdlPacket.FRAME_INFO_END_SERVICE_ACK) {
                return this._handleEndServiceACK(sdlPacket);
            } else if (frameInfo === SdlPacket.FRAME_INFO_END_SERVICE) {
                return this._handleEndService(sdlPacket);
            } else if (frameInfo === SdlPacket.FRAME_INFO_END_SERVICE_NAK) {
                return this._handleEndServiceNAK(sdlPacket);
            } else {
                console.warn('Unhandled control packet', { frameInfo, });
            }
        }


        /**
         * Handle heartbeat (Only available in protocol version 3)
         * @param {SdlPacket} sdlPacket 
         */
        _handleProtocolHeartbeat (sdlPacket) {
            const heartbeat = SdlPacketFactory.createHeartbeatACK(
                ServiceType.CONTROL, 
                this._getSessionId(), 
                this._protocolVersion.getMajor());
            this.sendPacket(heartbeat);
        }

        /**
         * Handles heartbeat ACK.
         * @param {SdlPacket} sdlPacket 
         */
        _handleProtocolHeartbeatACK (sdlPacket) {
            console.log(`Received HeartbeatACK - ${sdlPacket.toString()}`);
        }

        /**
         * Handles start service ACK. Sets the appropriate version, MTU, and other
         * service related info.
         * @param {SdlPacket} sdlPacket
         */
        _handleStartServiceACK (sdlPacket) {  
            const version = sdlPacket.getVersion();
            const serviceType = sdlPacket.getServiceType();
            if (version >= 5) {
                let mtuTag = null;
                if (serviceType === ServiceType.RPC) {
                    mtuTag = ControlFrameTags.RPC.StartServiceACK.MTU;
                } else if (serviceType === (ServiceType.PCM)) {
                    mtuTag = ControlFrameTags.Audio.StartServiceACK.MTU;
                } else if (serviceType === (ServiceType.NAV)) {
                    mtuTag = ControlFrameTags.Video.StartServiceACK.MTU;
                }
                const mtu = sdlPacket.getTag(mtuTag);

                if (mtu !== null) {
                    this._mtus[serviceType] = mtu;
                }
                if (serviceType === ServiceType.RPC) {
                    this._sessionID = sdlPacket.getSessionID();
                    //TODO handle older versions of the protocol where this was just their payload, no BSON
                    this._hashID = sdlPacket.getTag(ControlFrameTags.RPC.StartServiceACK.HASH_ID);
                    const version = sdlPacket.getTag(ControlFrameTags.RPC.StartServiceACK.PROTOCOL_VERSION);
                    if (version) {
                        // At this point we have confirmed the negotiated version between the module and the proxy
                        this._protocolVersion = (new Version()).fromString(version);
                    } else {
                        this._protocolVersion = new Version(5, 0, 0);
                    }
                }
            } else {
                if (this._protocolVersion.getMajor() > 1) {
                    const payload = sdlPacket.getPayload();
                    if (payload !== null && payload.length === 4) { // hashid will be 4 bytes in length
                        this._hashID = BitConverter.arrayBufferToInt32(payload.buffer);
                    }
                }
            }

            this._sdlProtocolListener.onProtocolSessionStarted(serviceType,
                sdlPacket.getSessionID(), this._protocolVersion.getMajor(), '', this._hashID, sdlPacket.getEncryption());
        }

        /**
         * Handles start service rejection.
         * @param {SdlPacket} sdlPacket
         */
        _handleStartServiceNAK (sdlPacket) {
            const serviceType = sdlPacket.getServiceType();
            this._sdlProtocolListener.onProtocolSessionEndedNACKed(serviceType, sdlPacket.getSessionID(), '');
            const error = `Got StartSessionNACK for protocol sessionID ${sdlPacket.getSessionID()}`;
            throw error;
        }


        /**
         * Handles service ended by app process.
         * @param {SdlPacket} sdlPacket
         */
        _handleEndServiceACK (sdlPacket) {
            return this._handleServiceEnded(sdlPacket);
        }

        /**
         * Service ended by non app process or for some unexpected reason.
         * @param {SdlPacket} sdlPacket
         */
        _handleEndService (sdlPacket) {
            return this._handleServiceEnded(sdlPacket);
        }


        /**
         * Handles serivce ending.
         * @param {*} sdlPacket 
         */
        _handleServiceEnded (sdlPacket) {
            this._sdlProtocolListener.onProtocolSessionEnded(sdlPacket.getServiceType(), sdlPacket.getSessionID(), '');
        }

        /**
         * Handles service end rejection.
         * @param {SdlPacket} sdlPacket
         */
        _handleEndServiceNAK (sdlPacket) {
            const serviceType = sdlPacket.getServiceType();
            this._sdlProtocolListener.onProtocolSessionEndedNACKed(serviceType, sdlPacket.getSessionID(), '');
        }

        /**
         * Handles incoming assembled rpc packet.
         * Notifies sdlProtocolListener of the event after assembleing an RpcMessage
         * @param {SdlPacket} sdlPacket
         */
        _handleRPCPacket (sdlPacket) {
            const rpcMessage = RpcCreator.construct(sdlPacket);
            if (rpcMessage !== null) {
                this._sdlProtocolListener.onRpcMessageReceived(rpcMessage);
            }
        }

        /**
         * Ends a session.
         */
        endSession () {
            const sessionID = this._getSessionId();
            const hashID = this._hashID;
            const serviceType = ServiceType.RPC;
            const messageID = this._getNextMessageID();
            const version = this._protocolVersion.getMajor();
            const sdlPacket = SdlPacketFactory.createEndSession(serviceType, sessionID, messageID, version, hashID);
            this.sendPacket(sdlPacket);
        }
    }

    /**
     * Original header size based on version 1.0.0 only
     */
    SdlProtocolBase.V1_HEADER_SIZE = 8;
    /**
     * Larger header size that is used by versions 2.0.0 and up
     */
    SdlProtocolBase.V2_HEADER_SIZE = 12;

    SdlProtocolBase.V1_V2_MTU_SIZE = 1500;
    SdlProtocolBase.V3_V4_MTU_SIZE = 131072;

    /**
     * Max supported protocol version in this release of the library
    */
    SdlProtocolBase.MAX_PROTOCOL_VERSION = new Version(5, 2, 0);

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

    /**
     * @typedef {Enum} TransportType
     * @property {Object} _MAP
     */
    class TransportType extends Enum {
        /**
        * @constructor
        */
        constructor () {
            super();
        }

        /**
        * @param {String}
        */
        static get WEBSOCKET_CLIENT () {
            return TransportType._MAP.WEBSOCKET_CLIENT;
        }

        /**
        * @param {String}
        */
        static get WEBSOCKET_SERVER () {
            return TransportType._MAP.WEBSOCKET_SERVER;
        }

        /**
        * @param {String}
        */
        static get CUSTOM () {
            return TransportType._MAP.CUSTOM;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString (value) {
            return TransportType.valueForStringInternal(value, TransportType._MAP);
        }
    }

    TransportType._MAP = Object.freeze({
        'WEBSOCKET_CLIENT': 'WEBSOCKET_CLIENT',
        'WEBSOCKET_SERVER': 'WEBSOCKET_SERVER',
        'CUSTOM': 'CUSTOM',
    });

    var TransportType$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TransportType: TransportType
    });

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

    /**
     * Parses incoming bytes according to the protocol spec.
     */
    class SdlPsm {
        /**
         * @constructor
         */
        constructor () {
            this.reset();
        }

        /**
         * Changes all internal members to default
         */
        reset () {
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
        }



        /**
         * @return {Number} - State represented by a Number
         */
        getState () {
            return this._state;
        }

        /**
         * @return {SdlPacket} - Returns null if not complete
         */

        getFormedPacket () {
            if (this._state === SdlPsm.FINISHED_STATE) {
                return new SdlPacket(this._version, this._encryption, this._frameType, this._serviceType, this._controlFrameInfo, this._sessionID, this._dataLength, this._messageID, this._payload, 0, this._dataLength);
            } else {
                return null;
            }
        }

        /**
         * Handles the next byte in the stream of data.
         * @param {Number} data - Represents a byte
         * @return {Boolean} - True if successful, false otherwise
         */
        handleByte (data) {
            this._state = this._transitionOnInput(data, this._state);
            if (this._state === SdlPsm.ERROR_STATE) {
                return false;
            }
            return true;
        }

        /**
         * @param {Number} rawByte - Represents a byte
         * @param {Number} state
         * @return {Boolean}
         * @private
         */
        _transitionOnInput (rawByte, state) {
            if (state === SdlPsm.START_STATE) { // byte 1
                this._version = (rawByte & SdlPsm.VERSION_MASK) >> 4;
                if (this._version === 0) {
                    return SdlPsm.ERROR_STATE;
                }

                this._encryption = (1 === ((rawByte & SdlPsm.ENCRYPTION_MASK) >> 3));
                this._frameType = rawByte & SdlPsm.FRAME_TYPE_MASK;

                if ((this._version < 1 || this._version > 5) && this._frameType !== FrameType.CONTROL) {
                    return SdlPsm.ERROR_STATE;
                }

                if (this._frameType < FrameType.CONTROL || this._frameType > FrameType.CONSECUTIVE) {
                    return SdlPsm.ERROR_STATE;
                }
                return SdlPsm.SERVICE_TYPE_STATE;
            } else if (state === SdlPsm.SERVICE_TYPE_STATE) { // byte 2
                this._serviceType = (rawByte & 0xFF);

                return SdlPsm.CONTROL_FRAME_INFO_STATE;
            } else if (state === SdlPsm.CONTROL_FRAME_INFO_STATE) { // byte 3
                this._controlFrameInfo = rawByte & 0xFF;

                switch (this._frameType) {
                    case FrameType.CONTROL:
                        break;
                    case FrameType.SINGLE: // Fall through since they are both the same
                    case FrameType.FIRST:
                        if (this._controlFrameInfo !== 0x00) {
                            return SdlPsm.ERROR_STATE;
                        }
                        break;
                    case FrameType.CONSECUTIVE:
                        break;

                    default:
                        return SdlPsm.ERROR_STATE;
                }
                return SdlPsm.SESSION_ID_STATE;
            } else if (state === SdlPsm.SESSION_ID_STATE) { // byte 4
                this._sessionID = (rawByte & 0xFF);
                return SdlPsm.DATA_SIZE_1_STATE;
            } else if (state === SdlPsm.DATA_SIZE_1_STATE) { // byte 5
                this._dataLength += (rawByte & 0xFF) << 24;
                return SdlPsm.DATA_SIZE_2_STATE;
            } else if (state === SdlPsm.DATA_SIZE_2_STATE) { // byte 6
                this._dataLength += (rawByte & 0xFF) << 16; // # 2 bytes x 8 bits
                return SdlPsm.DATA_SIZE_3_STATE;
            } else if (state === SdlPsm.DATA_SIZE_3_STATE) { // byte 7
                this._dataLength += (rawByte & 0xFF) << 8; // #  1 byte x 8 bits
                return SdlPsm.DATA_SIZE_4_STATE;
            } else if (state === SdlPsm.DATA_SIZE_4_STATE) { // byte 8
                this._dataLength += (rawByte & 0xFF); // # 2 bytes x 8 bits

                switch (this._frameType) { // If all is correct we should break out of this switch statement
                    case FrameType.SINGLE:
                    case FrameType.CONSECUTIVE:
                        break;
                    case FrameType.CONTROL:
                    // Ok, well here's some interesting bit of knowledge. Because the start session request is from the phone with no knowledge of version it sends out
                    // a v1 packet. THEREFORE there is no message id field. **** Now you know and knowing is half the battle ****
                        if (this._version === 1 && this._controlFrameInfo === SdlPacket.FRAME_INFO_START_SERVICE) {
                            if (this._dataLength === 0) {
                                return SdlPsm.FINISHED_STATE; // We are done if we don't have any payload
                            }
                            if (this._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) {
                                this._payload = new Uint8Array(this._dataLength);
                            } else {
                                return SdlPsm.ERROR_STATE;
                            }
                            this._dumpSize = this._dataLength;
                            return SdlPsm.DATA_PUMP_STATE;
                        }
                        break;

                    case FrameType.FIRST:
                        if (this._dataLength !== SdlPsm.FIRST_FRAME_DATA_SIZE) {
                            return SdlPsm.ERROR_STATE;
                        }
                        break;
                    default:
                        return SdlPsm.ERROR_STATE;
                }

                if (this._version === 1) { // Version 1 packets will not have message id's
                    if (this._dataLength === 0) {
                        return SdlPsm.FINISHED_STATE; // We are done if we don't have any payload
                    }
                    if (this._dataLength <= SdlProtocolBase.V1_V2_MTU_SIZE - SdlProtocolBase.V1_HEADER_SIZE) {
                        this._payload = new Uint8Array(this._dataLength);
                    } else {
                        return SdlPsm.ERROR_STATE;
                    }
                    this._dumpSize = this._dataLength;
                    return SdlPsm.DATA_PUMP_STATE;
                } else {
                    return SdlPsm.MESSAGE_1_STATE;
                }
            } else if (state === SdlPsm.MESSAGE_1_STATE) { // byte 9, bytes 9-12 available in version 2+.
                this._messageID += (rawByte & 0xFF) << 24;
                return SdlPsm.MESSAGE_2_STATE;
            } else if (state === SdlPsm.MESSAGE_2_STATE) { // byte 10
                this._messageID += (rawByte & 0xFF) << 16;
                return SdlPsm.MESSAGE_3_STATE;
            } else if (state === SdlPsm.MESSAGE_3_STATE) { // byte 11
                this._messageID += (rawByte & 0xFF) << 8;
                return SdlPsm.MESSAGE_4_STATE;
            } else if (state === SdlPsm.MESSAGE_4_STATE) { // byte 12
                this._messageID += (rawByte & 0xFF);
                if (this._dataLength === 0) {
                    return SdlPsm.FINISHED_STATE;
                }
                this._dumpSize = this._dataLength;
                this._payload = new Uint8Array(this._dataLength);
                return SdlPsm.DATA_PUMP_STATE;
            } else if (state === SdlPsm.DATA_PUMP_STATE) { // byte 13
                this._payload[this._dataLength - this._dumpSize] = rawByte;
                this._dumpSize -= 1;
                // Do we have any more bytes to read in?
                if (this._dumpSize > 0) {
                    return SdlPsm.DATA_PUMP_STATE;
                } else if (this._dumpSize === 0) {
                    return SdlPsm.FINISHED_STATE;
                } else {
                    return SdlPsm.ERROR_STATE;
                }
            }
        }
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
    SdlPsm.VERSION_MASK                             = 0xF0; // 4 highest bits
    SdlPsm.ENCRYPTION_MASK                          = 0x08; // 4th lowest bit
    SdlPsm.FRAME_TYPE_MASK                          = 0x07; // 3 lowest bits

    var SdlPsm$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SdlPsm: SdlPsm
    });

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

    class TransportBase {
        /**
         * @constructor
         * @param {BaseTransportConfig} transportConfig
         * @param {TransportCallback} transportCallback
         */
        constructor (transportConfig, transportCallback) {
            this._sdlPsm = new SdlPsm();
            this._transportConfig = transportConfig;
            this._transportCallback = transportCallback;
        }

        start () {
            throw 'start method must be overridden';
        }

        stop () {
            throw 'stop method must be overridden';
        }

        /**
         * @param {SdlPacket} sdlPacket
         */
        sendPacket (sdlPacket) {
            throw 'sendPacket method must be overridden';
        }

        /**
         * @param {TransportCallback} callback
         */
        setTransportCallback (callback) {
            throw 'setTransportCallback method must be overridden';
        }
    }

    var TransportBase$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TransportBase: TransportBase
    });

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

    class WebSocketClient extends TransportBase {
        constructor (config, transportCallback) {
            super(config, transportCallback);
            this._queue = [];
            this._isRunning = false;
            this._wsUrl = `${config.getHost()}:${config.getPort()}`;
            this._ws = null;
        }

        /**
         * @param {TransportCallback} callback
         */
        setTransportCallback (callback) {
            this._transportCallback = callback;
        }

        /**
         * Opens the transport connection
         */
        start () {
            this._init();
        }

        /**
         * Initiates a websocket connection to the url passed in and listens for messages
         * @private
         */
        _init () {
            this._ws  = new WebSocket(this._wsUrl);

            this._ws.onopen = () => {
                this._transportCallback.onConnectionEstablished();
            };

            this._ws.onerror = (error) => {
                console.error('Failed to connect', error);
                this._transportCallback.onError();
            };

            this._ws.onmessage = (msg) => {
                this._handleIncoming(msg);
            };

            this._ws.onclose = () => {
                this._transportCallback.onConnectionTerminated();
            };
        }

        /**
         * Closes the transport connection
         */
        stop () {
            this._ws.close();
        }

        /**
         * The contents in the packet should be sent out through the transport
         * @param {SdlPacket} packet
         */
        sendPacket (packet) {
            const bytes = packet.toPacket();
            this._ws.send(bytes);
        }

        /**
         * This is called whenever a new message comes in
         * @param {MessageEvent} msg
         * @private
         */
        _handleIncoming (msg) {
            this._queue.push(msg.data);
            this._multiByteHandler();
        }

        /**
         * Processes received data from the internal queue
         * @private
         */
        _multiByteHandler () {
            if (this._isRunning) {
                return;
            }
            this._isRunning = true;

            while (this._queue.length > 0) {
                const msgData = this._queue.shift();
                new Response(msgData).arrayBuffer().then((arrayBuffer) => {
                    const uint8 = new Uint8Array(arrayBuffer);
                    for (const byte of uint8) {
                        this._handleByte(byte);
                    }
                });
            }

            this._isRunning = false;
        }

        /**
         * Feeds a byte through the internal PSM
         * @param {Number} byte - unsigned 8-bit integer
         * @private
         */
        _handleByte (byte) {
            const success = this._sdlPsm.handleByte(byte);
            if (!success) {
                console.error('failed', this._sdlPsm);
                this._sdlPsm.reset();
            }
            const isFinished = this._sdlPsm.getState() === SdlPsm.FINISHED_STATE;

            if (isFinished) {
                const packet = this._sdlPsm.getFormedPacket();
                this._sdlPsm.reset();
                this._transportCallback.onPacketReceived(packet);
            }
        }
    }

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

    class TransportCallback {
        constructor () {
            this._onConnectionEstablished = null;
            this._onError = null;
            this._onConnectionTerminated = null;
            this._onPacketReceived = null;
        }

        /**
         * @param {function} listener 
         */
        setOnConnectionEstablished (listener) {
            this._onConnectionEstablished = listener;
        }

        /**
         * @param {function} listener 
         */    
        setOnError (listener) {
            this._onError = listener;
        }

        /**
         * @param {function} listener 
         */    
        setOnConnectionTerminated (listener) {
            this._onConnectionTerminated = listener;
        }

        /**
         * @param {function} listener 
         */    
        setOnPacketReceived (listener) {
            this._onPacketReceived = listener;
        }

        /**
         * Handler for when a connection is successful
         */
        onConnectionEstablished () {
            if (typeof this._onConnectionEstablished === 'function') {
                this._onConnectionEstablished();
            }
        }

        /**
         * Handler for when a connection is successful
         */
        onError () {
            if (typeof this._onError === 'function') {
                this._onError();
            }
        }

        /**
         * Handler for when a connection is dropped
         * @param {String} reason 
         */
        onConnectionTerminated (reason) {
            if (typeof this._onConnectionTerminated === 'function') {
                this._onConnectionTerminated(reason);
            }
        }

        /**
         * Handler for when a packet is received
         * @param {SdlPacket} packet 
         */
        onPacketReceived (packet) {
            if (typeof this._onPacketReceived === 'function') {
                this._onPacketReceived(packet);
            }
        }
    }

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

    class TransportManagerBase {
        /**
         * @constructor
         * @param {BaseTransportConfig} baseTransportConfig
         * @param {TransportListener} transportListener
         */
        constructor (baseTransportConfig, transportListener) {
            this._transportConfig = baseTransportConfig;
            this._transportListener = transportListener;
            this._transport = null;
            this._isConnected = false;
            this._transportCallback = new TransportCallback();

            this._transportCallback.setOnConnectionEstablished(() => {
                this._isConnected = true;
                transportListener.onTransportConnected();
            });
            this._transportCallback.setOnConnectionTerminated(() => {
                this._isConnected = false;
            });
            this._transportCallback.setOnPacketReceived(this.onPacketReceived.bind(this));

            if (this._transportConfig.getTransportType() === TransportType.WEBSOCKET_CLIENT) {
                this._transport = new WebSocketClient(this._transportConfig, this._transportCallback);
            } else if (this._transportConfig.getTransportType() === TransportType.CUSTOM) {
                this._transport = this._transportConfig.getTransport();
                this._transport.setTransportCallback(this._transportCallback);
            }
        }

        onTransportConnected () {
            this._transportListener.onTransportConnected();
        }

        /**
         * @param {Function} func
         */
        onTransportDisconnected (func) {
            this._transportListener.onTransportDisconnected();
        }

        /**
         * @param {Function} func
         */
        onError (func) {
            this._transportListener.onError();
        }

        /**
         * @param {SdlPacket} sdlPacket
         */
        onPacketReceived (sdlPacket) {
            this._transportListener.onPacketReceived(sdlPacket);
        }

        /**
         * Opens the transport connection
         */
        start () {
            if (this._transport !== null && typeof this._transport.start === 'function') {
                this._transport.start();
            }
        }

        /**
         * Closes the transport connection
         */
        stop () {
            if (this._transport !== null && typeof this._transport.stop === 'function') {
                this._transport.stop();
            }
        }

        /**
         * The contents in the packet should be sent out through the transport
         * @param {SdlPacket} packet
         */
        sendPacket (packet) {
            if (this._transport !== null && typeof this._transport.sendPacket === 'function') {
                this._transport.sendPacket(packet);
            }
        }

        /**
         * @param {TransportType} transportType
         * @param {String} address
         */
        isConnected (transportType, address) {
            return this._isConnected;
        }
    }

    var TransportManagerBase$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TransportManagerBase: TransportManagerBase
    });

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

    class TransportManager extends TransportManagerBase {
        constructor (config, transportListener) {
            super(config, transportListener);
        }
    }

    class SdlProtocol extends SdlProtocolBase {
        /**
         * @param {TransportConfigBase} baseTransportConfig 
         * @param {SdlProtocolListener} sdlProtocolListener 
         */
        constructor (baseTransportConfig, sdlProtocolListener) {
            super(baseTransportConfig, sdlProtocolListener);
            this.setTransportManager(new TransportManager(this._transportConfig, this._transportListener));
        }
    }

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

    class ServiceListenerMap {
        /**
        * @constructor
        */
        constructor () {
            this._listeners = {};

            // initialize an array of listeners for each service type
            this._listeners[ServiceType.CONTROL] = [];
            this._listeners[ServiceType.RPC] = [];
            this._listeners[ServiceType.AUDIO] = [];
            this._listeners[ServiceType.VIDEO] = [];
            this._listeners[ServiceType.HYBRID] = [];
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {SdlServiceListener} serviceListener 
         */
        addListener (serviceType, serviceListener) {
            if (!serviceType) {
                return;
            }
            this._listeners[serviceType].push(serviceListener);
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {SdlServiceListener} serviceListener 
         * @return {Boolean} - whether the service got removed 
         */
        removeListener (serviceType, serviceListener) {
            if (!serviceType) {
                return;
            }
            const listenerArray = this._listeners[serviceType];
            let removed = false;
            // remove matching references to the passed in service listener
            this._listeners[serviceType] = listenerArray.filter(listener => {
                removed = true;
                return listener !== serviceListener;
            });
            return removed;
        }

        /**
         * Sends this event to all listeners belonging to a specific service type
         * @param {SdlSession} session 
         * @param {ServiceType} serviceType 
         * @param {Boolean} isEncrypted 
         */
        sendEventServiceStarted (session, serviceType, isEncrypted) {
            const listenerArray = this._listeners[serviceType];
            for (const index in listenerArray) {
                listenerArray[index].onServiceStarted(session, serviceType, isEncrypted);
            }
        }

        /**
         * Sends this event to all listeners belonging to a specific service type
         * @param {SdlSession} session 
         * @param {ServiceType} serviceType 
         */
        sendEventServiceEnded (session, serviceType) {
            const listenerArray = this._listeners[serviceType];
            for (const index in listenerArray) {
                listenerArray[index].onServiceEnded(session, serviceType);
            }
        }

        /**
         * Sends this event to all listeners belonging to a specific service type
         * @param {SdlSession} session 
         * @param {ServiceType} serviceType 
         * @param {String} reason 
         */
        sendEventServiceError (session, serviceType, reason) {
            const listenerArray = this._listeners[serviceType];
            for (const index in listenerArray) {
                listenerArray[index].onServiceError(session, serviceType, reason);
            }
        }
    }

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


    /**
     * @typedef {Object} SdlSession
     * @property {Function} start
     * @property {Function} getSessionId
     * @property {Function} onProtocolSessionStarted
     * @property {Function} onProtocolSessionEnded
     * @property {Function} onProtocolSessionEndedNACKed
     * @property {Function} onRpcMessageReceived
     * @property {Function} endSession
     * @property {Function} sendRpc
     * @property {Function} getMtu
     * @property {Function} close
     * @property {Function} startService
     * @property {Function} endService
     * @property {Function} getCurrentTransportType
     * @property {Function} getIsConnected
     * @property {Function} getProtocolVersion
     * @property {Function} getTransportConfig
     * @property {Function} getSessionHashId
     * @property {Function} addServiceListener
     * @property {Function} removeServiceListener
     * @property {Function} getServiceListeners
     */
    class SdlSession {
        /**
         * @param {TransportConfigBase} baseTransportConfig 
         * @param {SdlSessionListener} sdlSessionListener 
         */
        constructor (baseTransportConfig, sdlSessionListener) {
            this._baseTransportConfig = baseTransportConfig;
            this._sessionId = null;
            this._sessionHashId = null;
            this._sdlSessionListener = sdlSessionListener;
            this._baseTransportConfig = baseTransportConfig;

            // a hash where each key is a service type, and has an array of listeners attached
            this._serviceListeners = new ServiceListenerMap();

            this._sdlProtocolListener = this._setupSdlProtocolListener();

            this._sdlProtocol = new SdlProtocol(baseTransportConfig, this._sdlProtocolListener);
        }

        /**
         * @return {SdlProtocolListener} 
         * @private
         */
        _setupSdlProtocolListener () {
            const sdlProtocolListener = new SdlProtocolListener();
            sdlProtocolListener.setGetSessionId(this.getSessionId.bind(this));
            sdlProtocolListener.setOnProtocolSessionStarted(this.onProtocolSessionStarted.bind(this));
            sdlProtocolListener.setOnProtocolSessionEnded(this.onProtocolSessionEnded.bind(this));
            sdlProtocolListener.setOnProtocolSessionEndedNACKed(this.onProtocolSessionEndedNACKed.bind(this));
            sdlProtocolListener.setOnRpcMessageReceived(this.onRpcMessageReceived.bind(this));
            sdlProtocolListener.setOnTransportConnected(this.onTransportConnected.bind(this));

            return sdlProtocolListener;
        }

        /**
         * Starts up the SDL protocol class. It will kick off the transport manager and underlying transport.
         */
        start () {
            this._sdlProtocol.start();
        }

        /** **********************************************************************************************************************************************************************
         *                                                       BEGIN:    SdlProtocolListener implemented methods
         ************************************************************************************************************************************************************************/
        
        /**
         * @return {Number}  - represents a byte 
         */
        getSessionId () {
            return this._sessionId;
        }

        /**
         * Event fired when transport (eg tcp, ws, bluetooth) has connected.
         */
        onTransportConnected () {
            this._sdlSessionListener.onTransportConnected();
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionId - represents a byte 
         * @param {Number} version - represents a byte 
         * @param {String} correlationId
         * @param {Number} hashId
         * @param {Boolean} isEncrypted
         */
        onProtocolSessionStarted (serviceType, sessionId, version, correlationId, hashId, isEncrypted) {
            this._sessionId = sessionId;

            if (serviceType === ServiceType.RPC) {
                this._sessionHashId = hashId;
            }

            this._sdlSessionListener.onProtocolSessionStarted(serviceType, sessionId, version, correlationId, hashId, isEncrypted);
            this._serviceListeners.sendEventServiceStarted(this, serviceType, isEncrypted);
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionId - represents a byte 
         * @param {String} correlationId
         */
        onProtocolSessionEnded (serviceType, sessionId, correlationId) {
            this._sdlSessionListener.onProtocolSessionEnded(serviceType, sessionId, correlationId);
            this._serviceListeners.sendEventServiceEnded(this, serviceType);
        }
        
        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionId - represents a byte 
         * @param {String} correlationId
         */
        onProtocolSessionEndedNACKed (serviceType, sessionId, correlationId) {
            this._sdlSessionListener.onProtocolSessionEndedNACKed(serviceType, sessionId, correlationId);
            this._serviceListeners.sendEventServiceError(this, serviceType, `End ${serviceType.toString()} Service NACK'ed`);
        }

        /**
         * @param {RpcMessage} rpcMessage 
         */
        onRpcMessageReceived (rpcMessage) {
            this._sdlSessionListener.onRpcMessageReceived(rpcMessage);
        }


        /** **********************************************************************************************************************************************************************
         *                                                       END:    SdlProtocolListener implemented methods
         ************************************************************************************************************************************************************************/

        endSession () {
            this._sdlProtocol.endSession();
        }

        /**
         * @param {RpcMessage} rpcMessage 
         */
        sendRpc (rpcMessage) {
            this._sdlProtocol.sendRpc(rpcMessage);
        }

        /**
         * @param {ServiceType} serviceType 
         * @return {Number} max transport unit for the given service type
         */
        getMtu (serviceType) {
            this._sdlProtocol.getMtu(serviceType);
        }

        /**
         * Ends the current session
         */
        close () {
            this._sdlProtocol.endSession(this._sessionId, this._sessionHashId);
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionId - represents a byte 
         * @param {Boolean} isEncrypted
         */
        startService (serviceType, sessionId, isEncrypted) {
            this._sdlProtocol.startService(serviceType, sessionId, isEncrypted);
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {Number} sessionId - represents a byte 
         */
        endService (serviceType, sessionId) {
            this._sdlProtocol.endService(serviceType, sessionId);
        }

        /**
         * @return {TransportType}  
         */
        getCurrentTransportType () {
            return this._baseTransportConfig.getTransportType();
        }

        /**
         * @return {Boolean} isConnected
         */
        getIsConnected () {
            return this._sdlProtocol.isConnected();
        }

        /**
         * @return {Version}  
         */
        getProtocolVersion () {
            return this._sdlProtocol.getProtocolVersion();
        }

        /**
         * @return {TransportConfigBase}  
         */
        getTransportConfig () {
            return this._baseTransportConfig;
        }

        /**
         * @return {Number}  
         */
        getSessionHashId () {
            return this._sessionHashId;
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {SdlServiceListener} sdlServiceListener 
         */
        addServiceListener (serviceType, sdlServiceListener) {
            this._serviceListeners.addListener(serviceType, sdlServiceListener);
        }

        /**
         * @param {ServiceType} serviceType 
         * @param {SdlServiceListener} sdlServiceListener 
         * @return {Boolean} - whether the removal was successful
         */
        removeServiceListener (serviceType, sdlServiceListener) {
            return this._serviceListeners.removeListener(serviceType, sdlServiceListener);
        } 

        /**
         * @return {ServiceListenerMap}
         */
        getServiceListeners () {
            return this._serviceListeners;
        }
    }

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

    /**
     * @typedef {Object} ArrayTools
     */
    class ArrayTools {

        /**
         * Removes the item from the array.
         * This does not mutate the passed in array.
         * Only the returned array has the value removed. 
         * @param {Array} array 
         * @param {any} value 
         * @return {Array}
         */
        static arrayRemove(array, value) {
            return array.filter(function (ele) {
                return ele !== value;
            });
        }



    }

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

    /**
     * NOTE: This could all change and should only be used for testing.
     * This class should also be marked private and behind the SdlManager API
     * 
     * usage should be:
     * var lcm = new LifecycleManager(appConfig, lifecycleListener);
     * lcm.setRpcListener( ... );
     * lcm.start();
     * ....
     * 
     * lifecycleListener.OnProxyConnected(){
     *  //Possible to start sending RPCs, HMI level should be NONE to start
     * 
     * }
     * 
     */
    class LifecycleManager {

        /**
        * @param {AppConfig} sdlConfig
        * @param {LifecycleListener} lifecycleListener
        * @constructor
        */
        constructor(appConfig, lifecycleListener) {
            if (appConfig === null || lifecycleListener === null
                || appConfig === undefined || lifecycleListener === undefined
            ) {
                throw 'Params must not be null'
            }

            this._appConfig = appConfig;
            this._lifecycleListener = lifecycleListener;
            this._sdlSession = new SdlSession(this._appConfig.getTransportConfig(), this._createSessionListener());

            //This is by default until we receive the RAI Response
            this._rpcSpecVersion = new Version(1, 0, 0);

            this._currentHMIStatus = null;
            this._firstTimeFull = true;
            this._responseListeners = new Map(); 
            this._maxCorrelationId = 0; //TODO remove when correlation gen is implemented
            this._rpcListeners = new Map(); //<Number, Array<RpcListener>>

        }

        /**
         * @return {SdlSessionListener}
         */
        _createSessionListener() {
            const sessionListener = new SdlSessionListener();
            sessionListener.setOnProtocolSessionStarted((serviceType, sessionID, version, correlationID, hashID, isEncrypted) => {
                //Session has been started
                //TODO check min protocol spec version
                if (serviceType === ServiceType.RPC) {
                    if (this._appConfig !== null && this._appConfig !== undefined) {
                        //TODO call prepare on config to make sure it is satisfactory 
                        this.sendRpcMessage(this._createRegisterAppInterface());
                    }
                }
            });
            sessionListener.setOnProtocolSessionEnded((serviceType, sessionID, correlationID) => {
                //Session has been ended
            });
            sessionListener.setOnProtocolSessionEndedNACKed((serviceType, sessionID, correlationID) => {
                //TODO im not sure why we have this
            });
            sessionListener.setOnRpcMessageReceived((rpcMessage) => {
                //Message has been received 
                this._handleRpc(rpcMessage);
            });
            sessionListener.setOnTransportConnected(() => {
                //transport has been connected
                this._sdlSession.startService(ServiceType.RPC, 0, false);
            });

            return sessionListener;
        }

        /**
         * @param { RpcMessage } rpcMessage
         */
        _handleRpc(rpcMessage) {
            if (rpcMessage === null || rpcMessage === undefined || rpcMessage.getFunctionName() === null || rpcMessage.getFunctionName() === undefined) {
                return;
            }

            const functionID = FunctionID.valueForString(rpcMessage.getFunctionName()); // this is the number value
            const listenerArray = this._rpcListeners.get(functionID);
            if (listenerArray !== null && listenerArray !== undefined) {
                listenerArray.forEach(function (item, index) {
                    item.onRpcMessage(rpcMessage);
                });
            }

            //Handle individual RPC listeners for request/response pairs
            if (rpcMessage instanceof RpcResponse) {
                //null check not needed. its always defined in the constructor
                if (this._responseListeners.has(rpcMessage.getCorrelationId())) {
                    this._responseListeners.get(rpcMessage.getCorrelationId()).resolve();
                }
            }
        }

        /**
        * @return {LifecycleManager}
        */
        start() {
            this._setupInternalRpcListeners();
            this._sdlSession.start();
            return this;
        }

        stop() {
            this._sdlSession.close();
        }


        /**
         * 
         * @param {FunctionID} functionID 
         * @param {RpcListener} rpcListener 
         */
        addRpcListener(functionID, rpcListener) {
            let listenerArray = this._rpcListeners.get(functionID);
            //If no array exists yet for this function id, create one
            if (listenerArray === null || listenerArray === undefined) {
                this._rpcListeners.set(functionID, []);
                listenerArray = this._rpcListeners.get(functionID);
            }
            listenerArray.push(rpcListener);
        }

        /**
         * 
         * @param {FunctionID} functionID 
         * @param {RpcListener} rpcListener 
         */
        removeRpcListener(functionID, rpcListener) {
            if (rpcListener !== null && rpcListener !== undefined) {
                const listenerArray = this._rpcListeners.get(functionID);
                if (listenerArray !== null && listenerArray !== undefined) {
                    this._rpcListeners.set(functionID, ArrayTools.arrayRemove(listenerArray, rpcListener));
                }
            }
        }

        /**
         * 
         * @param {RpcMessage} rpcMessage 
         */
        sendRpcMessage(rpcMessage) {
            if (rpcMessage !== null && rpcMessage !== undefined && this._sdlSession.getIsConnected()) {
                //TODO we still need to make proper changes to handle specific cases for RPCs ie PLAY_PAUSE / OK

                //TODO create a correlation id generator and handle this in the RPC classes
                if (rpcMessage instanceof RpcRequest) {
                    if (rpcMessage.getFunctionName !== FunctionID.RegisterAppInterface) { //RAI has a a protected id
                        rpcMessage.setCorrelationId(++this._maxCorrelationId);
                    }

                    //TODO: can't utilize the ability of promises like this
                    if (rpcMessage.getOnRPCResponsePromise() !== null && rpcMessage.getOnRPCResponsePromise() !== undefined) {
                        //Set the individual response listener for this RPC message
                        this._responseListeners.set(rpcMessage.getCorrelationId(), rpcMessage.getOnRPCResponsePromise());
                    }
                }
                this._sdlSession.sendRpc(rpcMessage);
            }
        }



        /**
         * @return {RegisterAppInterfaceResponse}
         */
        getRegisterAppInterfaceResponse() {
            return this._registerAppInterfaceResponse;
        }



        /**
        * @return {RegisterAppInterface}
        */
        _createRegisterAppInterface() {
            const registerAppInterface = new RegisterAppInterface();
            registerAppInterface.setSdlMsgVersion(new SdlMsgVersion().setMajorVersion(LifecycleManager.MAX_RPC_VERSION.getMajor()).setMinorVersion(LifecycleManager.MAX_RPC_VERSION.getMinor()).setPatchVersion(LifecycleManager.MAX_RPC_VERSION.getPatch()))
                .setAppName(this._appConfig.getAppName())
                .setFullAppId(this._appConfig.getAppId())
                .setNgnMediaScreenAppName(this._appConfig.getShortAppName())
                .setAppHmiType(this._appConfig.getAppTypes())
                .setLanguageDesired(this._appConfig.getLanguageDesired())
                .setHmiDisplayLanguageDesired(this._appConfig.getHmiDisplayLanguageDesired())
                .setIsMediaApplication(this._appConfig.isMediaApp())
                .setDayColorScheme(this._appConfig.getDayColorScheme())
                .setNightColorScheme(this._appConfig.getNightColorScheme())
                .setCorrelationId(LifecycleManager.REGISTER_APP_INTERFACE_CORRELATION_ID);

            //TODO Add all possible items

            return registerAppInterface;
        }


        /* *******************************************************************************************************
         ********************************** INTERNAL - RPC LISTENERS !! START !! *********************************
         *********************************************************************************************************/

        _setupInternalRpcListeners() {
            this._rpcListener = new RpcListener().setOnRpcMessage(rpcMessage => {
                const functionID = FunctionID.valueForString(rpcMessage.getFunctionName()); // this is the number value


                switch (functionID) {
                    case FunctionID.RegisterAppInterface:
                        this._processRaiResponse(rpcMessage);
                        break;
                    case FunctionID.OnHMIStatus:
                        // send a single onProxyConnected, when we go from a null HMI level to a defined HMI level
                        const shouldInit = rpcMessage.getHMILevel() !== null 
                            && rpcMessage.getHMILevel() !== undefined
                            && this._currentHMIStatus === null;

                        this._currentHMIStatus = rpcMessage.getHMILevel();

                        if (this._lifecycleListener !== null && this._lifecycleListener !== undefined && shouldInit) {
                            this._lifecycleListener.onProxyConnected(this);
                        }
                        break;
                    // RPC not handled yet in LCM
                }
            });

            this.addRpcListener(FunctionID.RegisterAppInterface, this._rpcListener);
            this.addRpcListener(FunctionID.OnHMIStatus, this._rpcListener);
        }

        /**
         * 
         * @param {RegisterAppInterfaceResponse} registerAppInterfaceResponse 
         */
        _processRaiResponse(registerAppInterfaceResponse) {
            //Cache this RAI Response as it can be used later
            this._registerAppInterfaceResponse = registerAppInterfaceResponse;

            //  TODO KEY_SDL_MSG_VERSION vs KEY_SYNC_MSG_VERSION sdlVersion: '{GIT_COMMIT}', I think the key name change
            // is meant to make things clearer about this being an sdl version which is not specific to ford's sync.
            // There is a key called sdlVersion that is responding with {GIT_COMMIT} that I'm unsure what it is supposed to do.
            const msgVersion = registerAppInterfaceResponse.getSdlMsgVersion();

            if (msgVersion !== null && msgVersion !== undefined) {
                this._rpcSpecVersion = new Version(msgVersion.getMajorVersion(), msgVersion.getMajorVersion(), msgVersion.getPatchVersion());
            } else {
                this._rpcSpecVersion = LifecycleManager.MAX_RPC_VERSION;
            }


            //TODO check against min RPC spec version config

            //TODO parse RAI for system capabilities

        }



    }

    LifecycleManager.MAX_RPC_VERSION = new Version(6, 0, 0);
    LifecycleManager.REGISTER_APP_INTERFACE_CORRELATION_ID = 65529;
    LifecycleManager.UNREGISTER_APP_INTERFACE_CORRELATION_ID = 65530;

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

    /**
     * @typedef {Enum} AudioType
     * @property {Object} _MAP
     */
    class AudioType extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get PCM() {
            return AudioType._MAP.PCM;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return AudioType.valueForStringInternal(value, AudioType._MAP);
        }
    }

    AudioType._MAP = Object.freeze({
        'PCM': 'PCM',

    });

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

    /**
     * @typedef {Enum} BitsPerSample
     * @property {Object} _MAP
     */
    class BitsPerSample extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get BitsPerSample_8_BIT() {
            return BitsPerSample._MAP.BitsPerSample_8_BIT;
        }

        /**
         * @return {String} 
         */
        static get BitsPerSample_16_BIT() {
            return BitsPerSample._MAP.BitsPerSample_16_BIT;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return BitsPerSample.valueForStringInternal(value, BitsPerSample._MAP);
        }
    }


    //We have to use BitsPerSample_ prefix in the name because javascript will not 
    //allow the enum to start with a number
    BitsPerSample._MAP = Object.freeze({
        'BitsPerSample_8_BIT': '8_BIT',
        'BitsPerSample_16_BIT': '16_BIT',

    });

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

    /**
     * @typedef {Enum} SamplingRate
     * @property {Object} _MAP
     */
    class SamplingRate extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get SamplingRate_8KHZ() {
            return SamplingRate._MAP.SamplingRate_8KHZ;
        }

        /**
         * @return {String} 
         */
        static get SamplingRate_16KHZ() {
            return SamplingRate._MAP.SamplingRate_16KHZ;
        }

        /**
         * @return {String} 
         */
        static get SamplingRate_22KHZ() {
            return SamplingRate._MAP.SamplingRate_22KHZ;
        }

        /**
         * @return {String} 
         */
        static get SamplingRate_44KHZ() {
            return SamplingRate._MAP.SamplingRate_44KHZ;
        }


        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return SamplingRate.valueForStringInternal(value, SamplingRate._MAP);
        }
    }

    //We have to use SamplingRate_ prefix in the name because javascript will not 
    //allow the enum to start with a number
    SamplingRate._MAP = Object.freeze({
        'SamplingRate_8KHZ': '8KHZ',
        'SamplingRate_16KHZ': '16KHZ',
        'SamplingRate_22KHZ': '22KHZ',
        'SamplingRate_44KHZ': '44KHZ',

    });

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

    /**
     * @typedef {Enum} VrCapabilities
     * @property {Object} _MAP
     */
    class VrCapabilities$1 extends Enum {

        constructor() {
            super();
        }

        /**
         * @return {String} 
         */
        static get VR_TEXT() {
            return VrCapabilities$1._MAP.VR_TEXT;
        }

        /**
        * Confirms whether the value passed in exists in the Enums of this class
        * @param {String} value
        * @return {null|String} - Returns null if the enum value doesn't exist
        */
        static valueForString(value) {
            return VrCapabilities$1.valueForStringInternal(value, VrCapabilities$1._MAP);
        }
    }

    VrCapabilities$1._MAP = Object.freeze({
        'VR_TEXT': 'TEXT',
    });

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

    class AudioPassThruCapabilities$1 extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {SamplingRate} samplingRate
        * @return {AudioPassThruCapabilities}
        */
        setSamplingRate(samplingRate) {
            this.validateType(SamplingRate, samplingRate);

            this.setParameter(AudioPassThruCapabilities$1.KEY_SAMPLING_RATE, samplingRate);
            return this;
        }

        /**
        * @return {SamplingRate}
        */
        getSamplingRate() {
            return this.getObject(SamplingRate, AudioPassThruCapabilities$1.KEY_SAMPLING_RATE);
        }

        /**
        * @param {BitsPerSample} bitsPerSample
        * @return {AudioPassThruCapabilities}
        */
        setBitsPerSample(bitsPerSample) {
            this.validateType(BitsPerSample, bitsPerSample);

            this.setParameter(AudioPassThruCapabilities$1.KEY_BITS_PER_SAMPLE, bitsPerSample);
            return this;
        }

        /**
        * @return {BitsPerSample}
        */
        getBitsPerSample() {
            return this.getObject(BitsPerSample, AudioPassThruCapabilities$1.KEY_BITS_PER_SAMPLE);
        }

        /**
        * @param {AudioType} bitsPerSample
        * @return {AudioPassThruCapabilities}
        */
        setAudioType(audioType) {
            this.validateType(AudioType, audioType);

            this.setParameter(AudioPassThruCapabilities$1.KEY_AUDIO_TYPE, audioType);
            return this;
        }

        /**
        * @return {AudioType}
        */
        getAudioType() {
            return this.getObject(AudioType, AudioPassThruCapabilities$1.KEY_AUDIO_TYPE);
        }
    }

    AudioPassThruCapabilities$1.KEY_SAMPLING_RATE = 'samplingRate';
    AudioPassThruCapabilities$1.KEY_BITS_PER_SAMPLE = 'bitsPerSample';
    AudioPassThruCapabilities$1.KEY_AUDIO_TYPE = 'audioType';

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


    class HMICapabilities$1 extends RpcStruct {

        constructor(parameters) {
            super(parameters);
        }

        /**
        * @param {Boolean} navigation
        * @return {HMICapabilities}
        */
        setNavigation(navigation) {

            this.setParameter(HMICapabilities$1.KEY_NAVIGATION, navigation);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getNavigation() {
            return this.getParameter(HMICapabilities$1.KEY_NAVIGATION);
        }

        /**
        * @param {Boolean} phoneCall
        * @return {HMICapabilities}
        */
        setPhoneCall(phoneCall) {

            this.setParameter(HMICapabilities$1.KEY_PHONE_CALL, phoneCall);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getPhoneCall() {
            return this.getParameter(HMICapabilities$1.KEY_PHONE_CALL);
        }

        /**
        * @param {Boolean} videoStreaming
        * @return {HMICapabilities}
        */
        setVideoStreaming(videoStreaming) {

            this.setParameter(HMICapabilities$1.KEY_VIDEO_STREAMING, videoStreaming);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getVideoStreaming() {
            return this.getParameter(HMICapabilities$1.KEY_VIDEO_STREAMING);
        }

        /**
        * @param {Boolean} remoteControl
        * @return {HMICapabilities}
        */
        setRemoteControl(remoteControl) {

            this.setParameter(HMICapabilities$1.KEY_REMOTE_CONTROL, remoteControl);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getRemoteControl() {
            return this.getParameter(HMICapabilities$1.KEY_REMOTE_CONTROL);
        }

        /**
        * @param {Boolean} appServices
        * @return {HMICapabilities}
        */
        setAppService(appServices) {

            this.setParameter(HMICapabilities$1.KEY_APP_SERVICES, appServices);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getAppService() {
            return this.getParameter(HMICapabilities$1.KEY_APP_SERVICES);
        }


        /**
        * @param {Boolean} displays
        * @return {HMICapabilities}
        */
        setDisplays(displays) {

            this.setParameter(HMICapabilities$1.KEY_DISPLAYS, displays);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getDisplays() {
            return this.getParameter(HMICapabilities$1.KEY_DISPLAYS);
        }


        /**
        * @param {Boolean} seatLocation
        * @return {HMICapabilities}
        */
        setSeatLocation(seatLocation) {

            this.setParameter(HMICapabilities$1.KEY_SEAT_LOCATION, seatLocation);
            return this;
        }

        /**
        * @return {Boolean}
        */
        getSeatLocation() {
            return this.getParameter(HMICapabilities$1.KEY_SEAT_LOCATION);
        }
    }

    HMICapabilities$1.KEY_NAVIGATION = 'navigation';
    HMICapabilities$1.KEY_PHONE_CALL = 'phoneCall';
    HMICapabilities$1.KEY_VIDEO_STREAMING = 'videoStreaming';
    HMICapabilities$1.KEY_REMOTE_CONTROL = 'remoteControl';
    HMICapabilities$1.KEY_APP_SERVICES = 'appServices';
    HMICapabilities$1.KEY_DISPLAYS = 'displays';
    HMICapabilities$1.KEY_SEAT_LOCATION = 'seatLocation';

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

    /**
     * @typedef {Object} SdlServiceListener
     */
    class SdlServiceListener {
        /**
    	 * @constructor
    	 */
        constructor () {
            this._onServiceStarted = null;
            this._onServiceEnded = null;
            this._onServiceError = null;
        }

        /**
         * @param {function} listener 
         */
        setOnServiceStarted (listener) {
            this._onServiceStarted = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnServiceEnded (listener) {
            this._onServiceEnded = listener;
        }

        /**
         * @param {function} listener 
         */
        setOnServiceError (listener) {
            this._onServiceError = listener;
        }

        /**
         * @param {SdlSession} session 
         * @param {ServiceType} serviceType 
         * @param {Boolean} isEncrypted 
         */
        onServiceStarted (session, serviceType, isEncrypted) {
            if (typeof this._onServiceStarted === 'function') {
                this._onServiceStarted(session, serviceType, isEncrypted);
            }
        }

        /**
         * @param {SdlSession} session 
         * @param {ServiceType} serviceType 
         */
        onServiceEnded (session, serviceType) {
            if (typeof this._onServiceEnded === 'function') {
                this._onServiceEnded(session, serviceType);
            }
        }

        /**
         * @param {SdlSession} session 
         * @param {ServiceType} serviceType 
         * @param {String} reason 
         */
        onServiceError (session, serviceType, reason) {
            if (typeof this._onServiceError === 'function') {
                this._onServiceError(session, serviceType, reason);
            }
        }
    }

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

    class CustomTransport extends TransportBase {
        constructor (transportConfig, transportCallback = null) {
            super(transportConfig, transportCallback);
            this._queue = [];
            this._isRunning = false;
        }

        /**
         * @param {TransportCallback} callback
         */
        setTransportCallback (callback) {
            this._transportCallback = callback;
            return this;
        }

        /**
         * Triggers the transport callback for connection established
         */
        start () {
            if (this._transportCallback !== null) {
                this._transportCallback.onConnectionEstablished();
            }
        }

        /**
         * Triggers the transport callback for connection terminated
         */
        stop () {
            if (this._transportCallback !== null) {
                this._transportCallback.onConnectionTerminated('Transport told to stop');
            }
        }

        /**
         * Triggers the transport callback for an error
         */
        onError () {
            if (this._transportCallback !== null) {
                this._transportCallback.onError();
            }
        }

        /**
         * The contents in the packet should be sent out through the transport
         * @param {SdlPacket} packet
         */
        sendPacket (packet) {
            const bytes = packet.toPacket();
            this.onSendPacket(bytes, 0, bytes.length);
        }

        /**
         * The app instantiating this class needs to implement this method! sendPacket calls this method
         * @param {UInt8Array} bytes
         */
        onSendPacket (bytes) {
            throw 'onSendPacket method must be overridden';
        }

        /**
         * A byte buffer was passed here for processing
         * @param {Uint8Array} message
         */
        onByteBufferReceived (message) {
            this._queue.push(message);
            this._multiByteHandler();
        }

        /**
         * Processes received data from the internal queue
         * @private
         */
        _multiByteHandler () {
            if (this._isRunning) {
                return;
            }
            this._isRunning = true;

            while (this._queue.length > 0) {
                const uint8 = this._queue.shift();
                for (const byte of uint8) {
                    this._handleByte(byte);
                }
            }

            this._isRunning = false;
        }

        /**
         * Feeds a byte through the internal PSM
         * @param {Number} byte - unsigned 8-bit integer
         * @private
         */
        _handleByte (byte) {
            const sdlPsm = this._sdlPsm;

            const success = sdlPsm.handleByte(byte);
            if (!success) {
                console.error('failed', sdlPsm);
                sdlPsm.reset();
            }
            const isFinished = sdlPsm.getState() === SdlPsm.FINISHED_STATE;

            if (isFinished) {
                const packet = sdlPsm.getFormedPacket();
                sdlPsm.reset();
                if (this._transportCallback !== null) {
                    this._transportCallback.onPacketReceived(packet);
                }
            }
        }
    }

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

    /**
     * @typedef {Object} TransportConfigBase
     * @property {TransportType} _transportType
     * @property {Function} getTransportType
     */
    class TransportConfigBase {

    	/**
         * @constructor
         * @param {TransportType} transportType - enum
         */
        constructor(transportType) {
            this._transportType = transportType;
        }

        /**
         * @return {TransportType}
         */
        getTransportType() {
            return this._transportType;
        }
    }

    var TransportConfigBase$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        TransportConfigBase: TransportConfigBase
    });

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

    class CustomTransportConfig extends TransportConfigBase {
        /**
        * @constructor
        * @param {CustomTransport} customTransport - An instance of a custom transport
        */
        constructor (customTransport) {
            super(TransportType.CUSTOM);
            this._customTransport = customTransport;
        }

        getTransportType () {
            return TransportType.CUSTOM;
        }

        getTransport () {
            return this._customTransport;
        }
    }

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

    class SslConfig {
        constructor (pemCertificate = null, privateKey = null, password = null) {
            this._pemCertificate = pemCertificate;
            this._privateKey = privateKey;
            this._password = password;
        }

        /**
        * Returns the PEM Certificate
        * @return {string}
        */
        getPemCertificate () {
            return this._pemCertificate;
        }

        /**
        * Returns the Private Key
        * @return {string}
        */
        getPrivateKey () {
            return this._privateKey;
        }

        /**
        * Returns the password
        * @return {string}
        */
        getPassword () {
            return this._password;
        }
    }

    var SslConfig$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SslConfig: SslConfig
    });

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

    const { TransportBase: TransportBase$2 } = TransportBase$1;
    const { SslConfig: SslConfig$2 } = SslConfig$1;
    const { SdlPsm: SdlPsm$2 } = SdlPsm$1;



    class WebSocketServer extends TransportBase$2 {
        constructor (transportConfig, transportCallback = null) {
            super(transportConfig, transportCallback);
            this._ws = null;
        }

        /**
         * @param {TransportCallback} callback
         */
        setTransportCallback (callback) {
            this._transportCallback = callback;
        }

        /**
         * Start listening for connections to the WebSocket Server
         * @return {WebSocketServer}
         */
        start () {
            if (
                this._transportConfig.getSslConfig() instanceof SslConfig$2
                && this._transportConfig.getSslConfig().getPemCertificate() !== null
                && this._transportConfig.getSslConfig().getPrivateKey() !== null
            ) {
                // create a WebSocket Secure Server
                const server = https.createServer({
                    cert: this._transportConfig.getSslConfig().getPemCertificate(),
                    key: this._transportConfig.getSslConfig().getPrivateKey(),
                    passphrase: this._transportConfig.getSslConfig().getPassword(),
                });
                this._ws = new ws.Server({
                    server,
                });
                server.listen(this._transportConfig.getPort());
                console.log(`WSS started on port ${this._transportConfig.getPort()}`);
            } else {
                // create a WebSocket Server
                this._ws = new ws.Server({
                    port: this._transportConfig.getPort(),
                });
                console.log(`WS started on port ${this._transportConfig.getPort()}`);
            }

            // Event listener for incoming WebSocket connections
            this._ws.on('connection', (connection) => {
                console.log('connection established');

                // Event listener for an incoming message
                connection.on('message', (message) => {
                    this._handleMessage(message);
                });

                // Event listener for a closed connection
                connection.on('close', () => {
                    console.log('server received close event');
                    if (this._transportCallback !== null) {
                        this._transportCallback.onConnectionTerminated();
                    }
                });

                // Event listener for errors
                connection.on('error', (errorEvent) => {
                    console.log('server received error event');
                    if (this._transportCallback !== null) {
                        this._transportCallback.onError();
                    }
                });

                // Pong heartbeat listener
                connection.on('pong', () => {
                    console.log('server received pong event');
                    connection.isAlive = true;
                });

                // Trigger event for connection established
                // FIXME: pass a client context to the transport listener?
                if (this._transportCallback !== null) {
                    this._transportCallback.onConnectionEstablished();
                }
                connection.isAlive = true;
            });

            // Detect broken connections
            if (this._transportConfig.getConnectionLostTimeout() > 0) {
                setInterval(() => {
                    this._ws.clients.forEach(function each (client) {
                        if (client.isAlive === false) {
                            console.log('server deemed client dead');
                            return client.terminate();
                        }

                        // Assume the client is dead and ask it if it's alive
                        client.isAlive = false;
                        console.log('server sending ping to client');
                        client.ping(function () {});
                    });
                }, this._transportConfig.getConnectionLostTimeout());
            }

            return this;
        }

        /**
         * Stops the WebSocket Server from listening and closes existing connections
         * @return {WebSocketServer}
         */
        stop () {
            if (this._ws !== null) {
                this._ws.close();
            }

            return this;
        }

        /**
         * Sends a packet to all connected WebSocket clients
         * FIXME: Sending packets should be isolated to a client rather than targeting all clients
         * @return {WebSocketServer}
         */
        sendPacket (sdlPacket) {
            if (this._ws !== null) {
                this._ws.clients.forEach(function each (client) {
                    if (client.readyState === ws.OPEN) {
                        client.send(sdlPacket.toPacket());
                    }
                });
            }

            return this;
        }

        /**
         * This is called whenever a new message comes in
         * @param {MessageEvent} message
         * @private
         */
        _handleMessage (message) {
            // Require messages to be binary objects
            if (typeof message !== 'object' || message.constructor.name !== 'Buffer') {
                return;
            }

            // Parse the message
            let stateProgress = false;
            for (let messageIndex = 0; messageIndex < message.length; messageIndex++) {
                stateProgress = this._sdlPsm.handleByte(message[messageIndex]);

                if (!stateProgress) { // We are trying to weed through the bad packet info until we get something
                    this._sdlPsm.reset();
                } else if (this._sdlPsm.getState() === SdlPsm$2.FINISHED_STATE) {
                    const packet = this._sdlPsm.getFormedPacket();
                    if (this._transportCallback !== null && packet !== null) {
                        this._transportCallback.onPacketReceived(packet);
                    }

                    this._sdlPsm.reset();
                }
            }
        }
    }

    var WebSocketServer_1 = WebSocketServer;

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

    const { TransportManagerBase: TransportManagerBase$2 } = TransportManagerBase$1;
    const { TransportType: TransportType$2 } = TransportType$1;


    class TransportManager$1 extends TransportManagerBase$2 {
        constructor (transportConfig, transportListener) {
            super(transportConfig, transportListener);

            if (this._transportConfig.getTransportType() === TransportType$2.WEBSOCKET_SERVER) {
                this._transport = new WebSocketServer_1(this._transportConfig, this._transportCallback);
            } else if (this._transport === null) {
                throw 'Unsupported transport type';
            }
        }
    }


    var TransportManager_1 = TransportManager$1;

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


    /**
     * @typedef {Object} TransportConfigBase
     * @property {TransportType} _transportType
     * @property {Function} getTransportType
     */
    class WebSocketClientConfig extends TransportConfigBase {
        /**
         * @constructor
         * @param {TransportType} transportType - enum
         */
        constructor (host, port) {
            super(TransportType.WEBSOCKET_CLIENT);

            this._host = host;
            this._port = port;
        }

        /**
         * @return String
         */
        getHost () {
            return this._host;
        }

        /**
         * @return Number
         */
        getPort () {
            return this._port;
        }
    }

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

    class TransportRecord {
        /**
        * @constructor
        * @param {TransportType} transportType - The type of the transport
        * @param {String} address
        */
        constructor (transportType, address) {
            this._type = transportType;
            this._address = address;
        }

        getType () {
            return this._type;
        }

        getAddress () {
            return this._address;
        }

        equals (obj) {
            return (
                obj instanceof TransportRecord
                && obj.getType !== null
                && obj.getType() === this.getType()
                && obj.getAddress() === this.getAddress()
            );
        }

        toString () {
            return `Transport Type: ${this._type.name()} \n Address: ${this._address}`;
        }
    }

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

    const { TransportConfigBase: TransportConfigBase$2 } = TransportConfigBase$1;
    const { TransportType: TransportType$3 } = TransportType$1;

    class WebSocketServerConfig extends TransportConfigBase$2 {
        /**
        * @constructor
        * @param {Number} port - The port to listen for WebSocket connections on.
        * @param {Number} connectionLostTimeout - The timeout for a connection lost, represented in milliseconds. Default 60000. If a value less than 0 is used, then the websocket will wait indefinitely.
        */
        constructor (port = 3000, connectionLostTimeout = 60000, sslConfig = null) {
            super(TransportType$3.WEBSOCKET_SERVER);
            this._port = port;
            this._connectionLostTimeout = connectionLostTimeout;
            this._sslConfig = sslConfig;
        }

        /**
        * Returns the websocket listener port
        * @return {Number}
        */
        getPort () {
            return this._port;
        }

        /**
        * Returns the websocket connection lost timeout value in milliseconds
        * @return {Number}
        */
        getConnectionLostTimeout () {
            return this._connectionLostTimeout;
        }

        /**
        * Returns the SSL configuration
        * @return {SslConfig}
        */
        getSslConfig () {
            return this._sslConfig;
        }
    }

    var WebSocketServerConfig_1 = WebSocketServerConfig;

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

    const SDL = {
        manager: {
            AppConfig,
            lifecycle: {
                LifecycleListener,
                LifecycleManager
            }
        },
        protocol: {
            BinaryFrameHeader,
            MessageFrameAssembler,
            MessageFrameDisassembler,
            SdlPacket,
            SdlPacketFactory,
            SdlProtocol,
            SdlProtocolBase,
            SdlProtocolListener,
            enums: {
                ControlFrameTags,
                FrameType,
                ServiceType
            }
        },
        rpc: {
            RpcCreator,
            RpcListener,
            RpcMessage,
            RpcNotification,
            RpcRequest,
            RpcResponse,
            RpcStruct,
            enums: {
                AppHMIType,
                AudioStreamingState,
                AudioType,
                BitsPerSample,
                ButtonName,
                CharacterSet,
                DisplayType,
                FileType,
                FunctionID,
                HMILevel,
                HmiZoneCapabilities,
                ImageFieldName,
                ImageType,
                Language,
                MediaClockFormat,
                MetadataType,
                PrerecordedSpeech,
                Result,
                RpcType,
                SamplingRate,
                SoftButtonType,
                SpeechCapabilities,
                SystemAction,
                SystemContext,
                TextAlignment,
                TextFieldName,
                VideoStreamingState,
                VrCapabilities: VrCapabilities$1
            },
            messages: {
                AddCommand,
                AddCommandResponse,
                OnHmiStatus,
                OnLanguageChange,
                PutFile,
                PutFileResponse,
                RegisterAppInterface,
                RegisterAppInterfaceResponse,
                SetAppIcon,
                SetAppIconResponse,
                Show: Show$1,
                ShowResponse,
                UnregisterAppInterface
            },
            structs: {
                AppInfo,
                AudioPassThruCapabilities: AudioPassThruCapabilities$1,
                ButtonCapabilities,
                DeviceInfo,
                DisplayCapabilities,
                Grid,
                HMICapabilities: HMICapabilities$1,
                Image,
                ImageField,
                ImageResolution,
                MenuParams,
                MetadataTags,
                ModuleInfo,
                PresetBankCapabilities,
                RGBColor,
                ScreenParams,
                SdlMsgVersion,
                SoftButton,
                SoftButtonCapabilities,
                TTSChunk,
                TemplateColorScheme,
                TextField,
                TouchEventCapabilities,
                VehicleType
            }
        },
        session: {
            SdlServiceListener,
            SdlSession,
            SdlSessionListener,
            ServiceListenerMap
        },
        transport: {
            CustomTransport,
            CustomTransportConfig,
            SdlPsm,
            SslConfig,
            TransportBase,
            TransportCallback,
            TransportConfigBase,
            TransportListener,
            TransportManager: TransportManager_1,
            TransportManagerBase,
            WebSocketClient,
            WebSocketClientConfig,
            enums: {
                TransportType
            },
            util: {
                TransportRecord
            },
            WebSocketServer: WebSocketServer_1,
            WebSocketServerConfig: WebSocketServerConfig_1
        },
        util: {
            ArrayTools,
            BitConverter,
            Bson,
            Enum,
            JsonRpcMarshaller,
            TextEncoder,
            Version
        }
    };

    return SDL;

})));