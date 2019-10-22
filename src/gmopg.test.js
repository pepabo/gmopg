const { default: GMOPG, ENUMS } = require('..');
const test = require('ava');

test('new returns GMOPG instance', (t) => {
  const gmopg = new GMOPG();
  t.true(gmopg instanceof GMOPG)
})
