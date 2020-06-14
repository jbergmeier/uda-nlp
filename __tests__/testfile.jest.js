//const handle = require('../src/client/js/handleSubmit');
const check = require('../src/client/js/checkName');

test('Check searchTerm for special names', () => {
  expect(check.checkForName('Picard')).toBe(1);
});
