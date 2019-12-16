const expect = require('chai').expect;

const Test = require('./../../../Test.js');
const Validator = require('./../../../Validator.js');

const assertTrue = Validator.assertTrue.bind(Validator);
const assertEquals = Validator.assertEquals.bind(Validator);
const assertNull = Validator.assertNull.bind(Validator);
const assertNotNull = Validator.assertNotNull.bind(Validator);
const assertNotNullUndefined = Validator.assertNotNullUndefined.bind(Validator);

exports.tests = function () {
    before(function () {
        console.log('BaseRpcTests','beforeEach'); //setup
        this.msg = this.createMessage();
      });

    it('testCreation', function (done) {
        // console.log(this.msg);
        assertNotNullUndefined('Object creation failed.', this.msg);
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