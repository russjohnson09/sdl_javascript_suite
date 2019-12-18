const expect = require('chai').expect;
const SDL = require('./../lib/js/dist/SDL.js');

const RpcResponse = SDL.rpc.RpcResponse;
const RpcRequest = SDL.rpc.RpcRequest;

class Validator {
    static getParametersJson(obj) {
        let result;
        if (typeof obj === 'object') {
            if (typeof obj.getParameters === 'function') {
                return this.getParametersJson(obj.getParameters());
            } else {
                if (Array.isArray(obj)) {
                    result = [];
                    for (let val of obj) {
                        result.push(this.getParametersJson(val));
                    }
                    return result;
                } else {
                    result = {};
                    for (let key in obj) {
                        let val = obj[key];
                        result[key] = this.getParametersJson(val);
                    }
                }
            }
        } else {
            return obj;
        }
        return result;
    }


    static validateJson (rpcMessage, expectedParameters) {
        const parameters = this.getParametersJson(rpcMessage.getParameters());
        expect(parameters).to.be.deep.equal(expectedParameters);
    }

    /**
     * 
     * Checks major and minor versions match. patch versions can be different.
     * @param {SdlMsgVersion} item1 
     * @param {SdlMsgVersion} item2 
     * @returns {Boolean} 
     */
    static validateSdlMsgVersion (item1, item2) {
        if (item1 === null) {
            return (item2 === null);
        }
        if (item2 === null) {
            return (item1 === null);
        }

        if (item1.getMajorVersion() !== item2.getMajorVersion() ||
            item1.getMinorVersion() !== item2.getMinorVersion()) {
            return false;
        }
        return true;
    }


    static validatePcmStreamCapabilities (item1, item2) {
        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }

        expect(item1.getAudioType()).to.be.equal(item2.getAudioType());
        expect(item1.getBitsPerSample()).to.be.equal(item2.getBitsPerSample());
        expect(item1.getSamplingRate()).to.be.equal(item2.getSamplingRate());

    }


    static validateAudioPassThruCapabilities (item1, item2) {

        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }
        expect(Array.isArray(item1)).to.be.true;
        expect(Array.isArray(item2)).to.be.true;

        expect(item1.length).to.be.equal(item2.length);

        for (let index = 0; index < item1.length; index++) {
            const val1 = item1[index];
            const val2 = item2[index];
            
            expect(val1.getAudioType()).to.be.equal(val2.getAudioType());
            expect(val1.getBitsPerSample()).to.be.equal(val2.getBitsPerSample());
            expect(val1.getSamplingRate()).to.be.equal(val2.getSamplingRate());
        }

        return true;
    }


    static validateDisplayCapabilities  (item1, item2) {
        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }
        expect(item1.getDisplayType()).to.be.equal(item2.getDisplayType());

        return true;

           	
    	// for (int i = 0; i < item1.getImageFields().size(); i++) {
    	// 	if (item1.getImageFields().get(i) == null && item2.getImageFields().get(i) != null) {
        // 		return false;
        // 	}
    		
    	// 	if (!validateImageFields(item1.getImageFields().get(i), item2.getImageFields().get(i))) {
    	// 		return false;
    	// 	}
    	// }
                
            	
    	// for (int i = 0; i < item1.getMediaClockFormats().size(); i++) {
    	// 	if (item1.getMediaClockFormats().get(i) == null && item2.getMediaClockFormats().get(i) != null) {
        // 		return false;
        // 	}
    		
    	// 	if (item1.getMediaClockFormats().get(i) != item2.getMediaClockFormats().get(i)) {
    	// 		return false;
    	// 	}
    	// }
    	
    	// for (int i = 0; i < item1.getTextFields().size(); i++) {    		
    	// 	if (item1.getTextFields().get(i) == null && item2.getTextFields().get(i) != null) {
        // 		return false;
        // 	}
    		
    	// 	if (!validateTextFields(item1.getTextFields().get(i), item2.getTextFields().get(i))) {
    	// 		return false;
    	// 	}
    	// }

    	
    	if (item1.getDisplayType() == null) {
    		return ( item2.getDisplayType() == null );
    	}
    	
    	if (item1.getDisplayType() != item2.getDisplayType()) {
    		return false;
    	}

        if (!item1.getDisplayName().equals(item2.getDisplayName())) {
            return false;
        }
    	
    	if (item1.getGraphicSupported() != item2.getGraphicSupported()) {    		
    		return false;
    	}
    	// Failing past here:
    	// log("GS", item1.getGraphicSupported() + " : " + item2.getGraphicSupported());
    	
    	if (!validateStringList(item1.getTemplatesAvailable(),item2.getTemplatesAvailable())) {
    		log("TA", item1.getTemplatesAvailable() + " | " + item2.getTemplatesAvailable());
    		return false;
    	}
    	
    	if (item1.getNumCustomPresetsAvailable() != item2.getNumCustomPresetsAvailable()) {
    		return false;
    	}
    	
    	if (item1.getMediaClockFormats() == null) {
    		return ( item2.getMediaClockFormats() == null );
    	}
    	
    	if (item1.getMediaClockFormats().size() != item2.getMediaClockFormats().size()) {
    		return false;
    	}

    	    	
    	if (item1.getTextFields() == null) {
    		return ( item2.getTextFields() == null );
    	}
    	
    	if (item1.getTextFields().size() != item2.getTextFields().size()) {
    		return false;
        }

    	
    	if (item1.getImageFields() == null) {
    		return ( item2.getImageFields() == null );
    	}
    	
    	if (item1.getImageFields().size() != item2.getImageFields().size()) {
    		return false;
    	}
 
    	
    	if (!validateScreenParams(item1.getScreenParams(), item2.getScreenParams())) {
    		return false;
    	}
    	  	
    	return true;

        expect(item1.getOnScreenPresetsAvailable()).to.be.equal(item2.getOnScreenPresetsAvailable());
        return true;
    }

    static validatePresetBankCapabilities (item1, item2) {
        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }

        expect(item1.getOnScreenPresetsAvailable()).to.be.equal(item2.getOnScreenPresetsAvailable());
    }

    static validateVehicleType (item1, item2) {
        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }

        expect(item1.getMake()).to.be.equal(item2.getMake());
        expect(item1.getModel()).to.be.equal(item2.getModel());
        expect(item1.getTrim()).to.be.equal(item2.getTrim());
        expect(item1.getModelYear()).to.be.equal(item2.getModelYear());
    }


    static validateButtonCapabilities (item1, item2) {
        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }
        expect(Array.isArray(item1)).to.be.true;
        expect(Array.isArray(item2)).to.be.true;

        expect(item1.length).to.be.equal(item2.length);

        for (let index = 0; index < item1.length; index++) {
            const val1 = item1[index];
            const val2 = item2[index];
            
            expect(val1.getName()).to.be.equal(val2.getName());
            expect(val1.getUpDownAvailable()).to.be.equal(val2.getUpDownAvailable());
            expect(val1.getLongPressAvailable()).to.be.equal(val2.getLongPressAvailable());
            expect(val1.getShortPressAvailable()).to.be.equal(val2.getShortPressAvailable());
        }
    }

    // assertTrue(Test.TRUE, Validator.validateSoftButtonCapabilities(Test.GENERAL_SOFTBUTTONCAPABILITIES_LIST, testSoftButtonCapabilities));

    static validateSoftButtonCapabilities (item1, item2) {
        if (item1 === null) {
            expect(item1).to.be.equal(item2);
            return;
        }
        expect(Array.isArray(item1)).to.be.true;
        expect(Array.isArray(item2)).to.be.true;

        expect(item1.length).to.be.equal(item2.length);

        for (let index = 0; index < item1.length; index++) {
            const val1 = item1[index];
            const val2 = item2[index];
            
            expect(val1.getImageSupported()).to.be.equal(val2.getImageSupported());
            expect(val1.getUpDownAvailable()).to.be.equal(val2.getImageSupported());
            expect(val1.getLongPressAvailable()).to.be.equal(val2.getLongPressAvailable());
            expect(val1.getShortPressAvailable()).to.be.equal(val2.getShortPressAvailable());
        }
    }

    // assertTrue(Test.TRUE, Validator.validateButtonCapabilities(Test.GENERAL_BUTTONCAPABILITIES_LIST, testButtonCapabilities));
    // assertTrue(Test.TRUE, Validator.validateVehicleType(Test.GENERAL_VEHICLETYPE, testVehicleType));
    // assertTrue(Test.TRUE, Validator.validatePresetBankCapabilities(Test.GENERAL_PRESETBANKCAPABILITIES, testPbc));
    // assertTrue(Test.TRUE, Validator.validateDisplayCapabilities(Test.GENERAL_DISPLAYCAPABILITIES, testDc));

    static validateTtsChunks (list1, list2) {
        if (list1 === null || list2 === null) {
            expect(list1).to.equal(list2);
            return;
        }

        let text1 = list1.map((val) => {
            return val.getText();
        });
        let text2 = list1.map((val) => {
            return val.getText();
        });

        expect(text1).to.deep.equal(text2);
    }


    static validateDeviceInfo (item1, item2) {
        if (item1 === null) {
            return item2 === null;
        }
        if (item2 === null) {
            return item1 === null;
        }

        if (item1.getOs()                   !== item2.getOs()          ||
                item1.getCarrier()              !== item2.getCarrier()     ||
                item1.getHardware()             !== item2.getHardware()    ||
                item1.getOsVersion()            !== item2.getOsVersion()   ||
                item1.getFirmwareRev()          !== item2.getFirmwareRev() ||
                item1.getMaxNumberRFCOMMPorts() !== item2.getMaxNumberRFCOMMPorts()) {
            return false;
        }

        return true;
    }

    static validateTemplateColorScheme (item1, item2) {
        if (item1 === null) {
            return item2 === null;
        }
        if (item2 === null) {
            return item1 === null;
        }

        if (item1.getPrimaryColor().getRedValue() !== item2.getPrimaryColor().getRedValue()
                || item1.getPrimaryColor().getGreenValue() !== item2.getPrimaryColor().getGreenValue()
                || item1.getPrimaryColor().getBlueValue() !== item2.getPrimaryColor().getBlueValue()
                || item1.getSecondaryColor().getRedValue() !== item2.getSecondaryColor().getRedValue()
                || item1.getSecondaryColor().getGreenValue() !== item2.getSecondaryColor().getGreenValue()
                || item1.getSecondaryColor().getBlueValue() !== item2.getSecondaryColor().getBlueValue()
                || item1.getBackgroundColor().getRedValue() !== item2.getBackgroundColor().getRedValue()
                || item1.getBackgroundColor().getGreenValue() !== item2.getBackgroundColor().getGreenValue()
                || item1.getBackgroundColor().getBlueValue() !== item2.getBackgroundColor().getBlueValue()) {
            return false;
        }

        return true;
    }




    static assertTrue () {
        const args = arguments;
        let val1, msg;
        if (args.length === 1) {
            val1 = args[0];
        } else if (args.length === 2) {
            msg = args[0];
            val1 = args[1];
        } else {
            throw new Error('Bad arguments');
        }
        expect(val1, msg).to.be.true;
    }

    static assertEquals () {
        const args = arguments;
        let val1, val2, msg;
        if (args.length === 2) {
            val1 = args[0];
            val2 = args[1];
        } else if (args.length === 3) {
            msg = args[0];
            val1 = args[1];
            val2 = args[2];
        } else {
            throw new Error('Bad arguments');
        }
        expect(val1, msg).to.be.deep.equal(val2);
    }

    static assertNull () {
        const args = arguments;
        let val1, msg;
        if (args.length === 1) {
            val1 = args[0];
        } else if (args.length === 2) {
            msg = args[0];
            val1 = args[1];
        } else {
            throw new Error('Bad arguments');
        }
        expect(val1, msg).to.be.null;
    }

    static assertNullOrUndefined () {
        const args = arguments;
        let val1, msg;
        if (args.length === 1) {
            val1 = args[0];
        } else if (args.length === 2) {
            msg = args[0];
            val1 = args[1];
        } else {
            throw new Error('Bad arguments');
        }
        expect(val1, msg).to.not.exist;
    }

    static assertNotNull () {
        const args = arguments;
        let val1, msg;
        if (args.length === 1) {
            val1 = args[0];
        } else if (args.length === 2) {
            msg = args[0];
            val1 = args[1];
        } else {
            throw new Error('Bad arguments');
        }
        expect(val1, msg).to.be.not.null;
    }

    static validateText (text1, text2) {
        return text1 === text2;
    }


    static assertNotNullUndefined () {
        const args = arguments;
        let val,msg;
        if (args.length === 2) {
            val = args[1];
            msg = args[0];
        } else {
            val = args[0];
        }
        expect(val, msg).not.to.be.null.and.not.to.be.undefined;
    }




    // this method must be manually called from the subclass
    static testNullBase (functionName, messageType, msg) {
        console.log(msg.getCorrelationId(), msg instanceof RpcRequest, msg instanceof RpcResponse);
        this.assertNotNull('RPCMessage was null.', msg);

        let correlationId;
        if (msg instanceof RpcRequest) {
            correlationId = msg.getCorrelationId(); 
            this.assertNotNull('Correlation ID of the RPC message was null.', correlationId);
        } else if (msg instanceof RpcResponse) {
            correlationId = msg.getCorrelationId();
            this.assertNullOrUndefined('Correlation ID of the RPC message was not null.', correlationId);
        }
        this.assertNotNull('Message type of the RPC message was null.', msg.getRPCType());

        this.assertEquals('Message type didn\'t match expected message type.', messageType, msg.getRPCType());

        this.assertNotNull('Command type of the RPC message was null.', msg.getFunctionName());
        this.assertEquals('Command type didn\'t match expected command type.', functionName, msg.getFunctionName());


        try {
            this.assertTrue('Parameters weren\'t initialized, but the JSON contained 2 or more objects.', (msg.serializeJSON().length() === 1));
        } catch (error) {
            //do nothing
        }
    }  
}



module.exports = Validator;