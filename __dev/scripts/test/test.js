var assert = require('assert');

describe('massachusetts.cookiepolicy', function() {
  describe('init', function() {
    it('should init the module and set a cookie', function() {
      require('../components/_massachusetts.general');
      require('../components/_massachusetts.cookiepolicy');

      massachusetts.cookiepolicy.init();
    });
  });
});
