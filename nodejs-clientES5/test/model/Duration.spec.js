/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitChrisQueen_TDA_JS);
  }
}(this, function(expect, GitChrisQueen_TDA_JS) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Duration', function() {
      beforeEach(function() {
        instance = GitChrisQueen_TDA_JS.Duration;
      });

      it('should create an instance of Duration', function() {
        // TODO: update the code to test Duration
        expect(instance).to.be.a('object');
      });

      it('should have the property DAY', function() {
        expect(instance).to.have.property('DAY');
        expect(instance.DAY).to.be("DAY");
      });

      it('should have the property GOOD_TIL_CANCEL', function() {
        expect(instance).to.have.property('GOOD_TIL_CANCEL');
        expect(instance.GOOD_TIL_CANCEL).to.be("GOOD_TIL_CANCEL");
      });

      it('should have the property FILL_OR_KILL', function() {
        expect(instance).to.have.property('FILL_OR_KILL');
        expect(instance.FILL_OR_KILL).to.be("FILL_OR_KILL");
      });

    });
  });

}));
