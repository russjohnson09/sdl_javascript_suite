const expect = require('chai').expect;

class Validator {
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




    static assertTrue () {
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
        const { val, msg, } = this.getValMsgFromArguments(arguments);
        expect(val, msg).to.be.deep.equal;
    }
}



module.exports = Validator;