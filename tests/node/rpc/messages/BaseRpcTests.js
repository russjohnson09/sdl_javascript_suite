const SDL = require('./../../../../lib/js/dist/SDL.js');

const RpcRequest = SDL.rpc.RpcRequest;
const RpcResponse = SDL.rpc.RpcResponse;

const expect = require('chai').expect;

const Test = require('./../../../Test.js');
const Validator = require('./../../../Validator.js');

const assertTrue = Validator.assertTrue.bind(Validator);
const assertEquals = Validator.assertEquals.bind(Validator);
const assertNull = Validator.assertNull.bind(Validator);
const assertNotNull = Validator.assertNotNull.bind(Validator);
const assertNotNullUndefined = Validator.assertNotNullUndefined.bind(Validator);

const CORR_ID = 402;

exports.tests = function () {
    before(function () {
        this.CORR_ID = CORR_ID;
        const msg = this.msg = this.createMessage();
        if (msg instanceof RpcRequest) {
            msg.setCorrelationId(CORR_ID);
        } else if (msg instanceof RpcResponse) {
            msg.setCorrelationId(CORR_ID);
        }
    });

    it('testCreation', function (done) {
        assertNotNullUndefined('Object creation failed.', this.msg);
        done();
    });

    it('testCorrelationId', function (done) {
        const msg = this.msg;
        const CORR_ID = this.CORR_ID;
        console.log({RpcRequest});
        if (msg instanceof RpcRequest) {
            const correlationId = msg.getCorrelationId(); 
            console.log('RpcRequest', { correlationId });
            assertNotNullUndefined('Correlation ID should be defined.', correlationId);
            assertEquals('Correlation ID doesn\'t match expected ID.', CORR_ID, correlationId);
        } else if (msg instanceof RpcResponse) {
            const correlationId = msg.getCorrelationId();
            console.log('RpcResponse', { correlationId });
            assertNotNullUndefined('Correlation ID should be defined.', correlationId);
            assertEquals('Correlation ID doesn\'t match expected ID.', CORR_ID, correlationId);
        }
        done();
    });

    it('testMessageType' function (done) {
        
        done();
    }); 

    // it('should have .name.first', function() {
    //   this.user.name.first.should.equal('tobi');
    // });
  
    // it('should have .name.last', function() {
    //   this.user.name.last.should.equal('holowaychuk');
    // });
  
    // describe('.fullname()', function() {
    //   it('should return the full name', function() {
    //     this.user.fullname().should.equal('tobi holowaychuk');
    //   })
    // });
};