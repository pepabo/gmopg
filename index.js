'use strict';

const GMOPG = require('./lib/gmopg').default;

// Create the default instance to be exported
var gmopgInstance = GMOPG.CREATE({});

gmopgInstance.GMOPG = GMOPG;

gmopgInstance.create = function create(config) {
  return GMOPG.CREATE(config);
}

gmopgInstance.generateMemberID = function generateMemberID(key) {
  return GMOPG.GENERATE_MEMBER_ID(key);
}

module.exports = gmopgInstance;

// Allow use of default import syntax in TypeScript
module.exports.default = gmopgInstance;
