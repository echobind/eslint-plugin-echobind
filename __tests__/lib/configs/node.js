const nodeConfig = require('../../lib/configs/node');

describe('node config', () => {
  test('it loads', () => {
    expect(nodeConfig).not.toBeUndefined();
  });
});
