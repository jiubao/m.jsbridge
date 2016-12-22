var assert = require('assert');
var createBridge = require('../src/index');

describe('bridge', function() {

	var bridge;

	beforeEach(function() {
		bridge = createBridge();
	});

  describe('t1', function() {
    it('should return name', function() {
      assert.equal(bridge.name, 'jsbridge');
    });
  });

});
