const reactConfig = require('../../lib/configs/react');

describe('react config', () => {
  test('it loads', () => {
    expect(reactConfig).not.toBeUndefined();
  });
});
