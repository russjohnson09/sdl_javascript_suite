const Test = require('./../../../Test.js');
const Validator = require('./../../../Validator.js');

const assertTrue = Validator.assertTrue.bind(Validator);
const assertEquals = Validator.assertEquals.bind(Validator);
const assertNull = Validator.assertNull.bind(Validator);
const assertNotNull = Validator.assertNotNull.bind(Validator);

exports.tests = function () {
    // console.log(rpcMessage);
    it('testCreation', function (done) {
        assertNotNull('Object creation failed.', this.rpcMessage);
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