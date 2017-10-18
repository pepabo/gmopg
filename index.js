"use strict";

const GMOPG = require("./lib/gmopg").default;

// Create the default instance to be exported
var gmopgInstance = GMOPG.createInstance({});

module.exports = gmopgInstance;

// Allow use of default import syntax in TypeScript
module.exports.default = gmopgInstance;
