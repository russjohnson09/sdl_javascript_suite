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

import { Enum } from '../../util/Enum.js';

class FunctionID extends Enum {

    /**
    * @constructor
    */
    constructor() {
        super();
    }

    /**
     * @return { Number } 
     */
    static get REGISTER_APP_INTERFACE() {
        return FunctionID.MAP.RegisterAppInterface;
    }

    /**
     * @return { Number } 
     */
    static get ADD_COMMAND() {
        return FunctionID.MAP.AddCommand;
    }

    /**
     * @return { Number } 
     */
    static get ON_LANGUAGE_CHANGE() {
        return FunctionID.MAP.OnLanguageChange;
    }

    /**
     * @return { Number } 
     */
    static get GET_VEHICLE_DATA() {
        return FunctionID.MAP.GetVehicleData;
    }

    /**
     * @return { Number } 
     */
    static get ON_HMI_STATUS() {
        return FunctionID.MAP.OnHMIStatus;
    }

    /**
     * @return { Number } 
     */
    static get ON_PERMISSION_CHANGE() {
        return FunctionID.MAP.OnPermissionsChange;
    }

    /**
     * @return { Number } 
     */
    static get ON_SYSTEM_REQUEST() {
        return FunctionID.MAP.OnSystemRequest;
    }

    /**
     * @return { Number } 
     */
    static get ON_DRIVER_DISTRACTION() {
        return FunctionID.MAP.OnDriverDistraction;
    }

    /**
     * @return { Number } 
     */
    static get ON_HASH_CHANGE() {
        return FunctionID.MAP.OnHashChange;
    }

    /**
     * @return { Number } 
     */
    static get ALERT() {
        return FunctionID.MAP.Alert;
    }

    /**
     * @return { Number } 
     */
    static get PERFORM_INTERACTION() {
        return FunctionID.MAP.PerformInteraction;
    }

    /**
     * @return { Number } 
     */
    static get CREATE_INTERACTION_CHOICE_SET() {
        return FunctionID.MAP.CreateInteractionChoiceSet;
    }

    /**
     * @param { String } name - The string to search for in the map
     * @return { Number } - The corresponding value to the name
     */
    static getIdFromName(name) {
        return FunctionID.MAP[name];
    }

    /**
     * @param { Number } id - The number to search for in the map
     * @return { String } - The corresponding String property to the id
     */
    static getNameFromId(id) {
        for (let name in FunctionID.MAP) {
            if (FunctionID.MAP[name] === id) {
                return name;
            }
        }
    }

    /**
    * Confirms whether the value passed in exists in the Enums of this class
    * @param { Number } value
    * @return { Number } - Returns null if the enum value doesn't exist
    */
    static valueForString(value) {
        return FunctionID.valueForStringInternal(value, FunctionID.MAP);
    }

    /**
    * Returns the key of the map with the corresponding value
    * @param { Number } value
    * @return { String } - Returns null if not found
    */
    static keyForValue(value) {
        return FunctionID.keyForValueInternal(value, FunctionID.MAP);
    }

    static getIsNotification(name) {
        return FunctionID.NOTIFIACTIONS[name] !== undefined;
    }
}

FunctionID.MAP = Object.freeze({
                                   'RegisterAppInterface': 1,
                                   'UnregisterAppInterface': 2,
                                   'SetGlobalProperties': 3,
                                   'ResetGlobalProperties': 4,
                                   'AddCommand': 5,
                                   'DeleteCommand': 6,
                                   'AddSubMenu': 7,
                                   'DeleteSubMenu': 8,
                                   'CreateInteractionChoiceSet': 9,
                                   'PerformInteraction': 10,
                                   'DeleteInteractionChoiceSet': 11,
                                   'Alert': 12,
                                   'Show': 13,
                                   'Speak': 14,
                                   'SetMediaClockTimer': 15,
                                   'PerformAudioPassThru': 16,
                                   'EndAudioPassThru': 17,
                                   'SubscribeButton': 18,
                                   'UnsubscribeButton': 19,
                                   'SubscribeVehicleData': 20,
                                   'UnsubscribeVehicleData': 21,
    'GetVehicleData': 22,
                                   'ReadDID': 23,
                                   'GetDTCs': 24,
                                   'ScrollableMessage': 25,
                                   'Slider': 26,
                                   'ShowConstantTBT': 27,
                                   'AlertManeuver': 28,
                                   'UpdateTurnList': 29,
                                   'ChangeRegistration': 30,
                                   'GenericResponse': 31,
                                   'PutFile': 32,
                                   'DeleteFile': 33,
                                   'ListFiles': 34,
                                   'SetAppIcon': 35,
                                   'SetDisplayLayout': 36,
                                   'DiagnosticMessage': 37,
                                   'SystemRequest': 38,
                                   'SendLocation': 39,
                                   'DialNumber': 40,
                                   'ButtonPress': 41,
                                   'GetInteriorVehicleData': 43,
                                   'SetInteriorVehicleData': 44,
                                   'GetWayPoints': 45,
                                   'SubscribeWayPoints': 46,
                                   'UnsubscribeWayPoints': 47,
                                   'GetSystemCapability': 48,
                                   'SendHapticData': 49,
                                   'SetCloudAppProperties': 50,
                                   'GetCloudAppProperties': 51,
                                   'PublishAppService': 52,
                                   'GetAppServiceData': 53,
                                   'GetFile': 54,
                                   'PerformAppServiceInteraction': 55,

                                   'GetInteriorVehicleDataConsent': 62,
                                   'ReleaseInteriorVehicleDataModule': 63,
    'OnHMIStatus': 32768,
                                   'OnAppInterfaceUnregistered': 32769,
                                   'OnButtonEvent': 32770,
                                   'OnButtonPress': 32771,
                                   'OnVehicleData': 32772,
                                   'OnCommand': 32773,
                                   'OnTBTClientState': 32774,
                                   'OnDriverDistraction': 32775,
    'OnPermissionsChange': 32776,
                                   'OnAudioPassThru': 32777,
                                   'OnLanguageChange': 32778,
                                   'OnKeyboardInput': 32779,
                                   'OnTouchEvent': 32780,
    'OnSystemRequest': 32781,
    'OnHashChange': 32782,
                                   'OnInteriorVehicleData': 32783,
                                   'OnWayPointChange': 32784,
                                   'OnRCStatus': 32785,
                                   'OnAppServiceData': 32786,
                                   'OnSystemCapabilityUpdated': 32787,
                                   'EncodedSyncPData': 65536,
                                   'SyncPData': 65537,
                                   'OnEncodedSyncPData': 98304,
                                   'OnSyncPData': 98305
                               });
FunctionID.NOTIFIACTIONS = Object.freeze({
                                             'OnHMIStatus': 32768,
                                             'OnAppInterfaceUnregistered': 32769,
                                             'OnButtonEvent': 32770,
                                             'OnButtonPress': 32771,
                                             'OnVehicleData': 32772,
                                             'OnCommand': 32773,
                                             'OnTBTClientState': 32774,
                                             'OnDriverDistraction': 32775,
                                             'OnPermissionsChange': 32776,
                                             'OnAudioPassThru': 32777,
                                             'OnLanguageChange': 32778,
                                             'OnKeyboardInput': 32779,
                                             'OnTouchEvent': 32780,
                                             'OnSystemRequest': 32781,
                                             'OnHashChange': 32782,
                                             'OnInteriorVehicleData': 32783,
                                             'OnWayPointChange': 32784,
                                             'OnRCStatus': 32785,
                                             'OnAppServiceData': 32786,
                                             'OnSystemCapabilityUpdated': 32787,
                                             'EncodedSyncPData': 65536,
                                             'SyncPData': 65537,
                                             'OnEncodedSyncPData': 98304,
                                             'OnSyncPData': 98305
                                         });

export { FunctionID };
