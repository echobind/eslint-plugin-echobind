const reactNativeConfig = require('../../lib/configs/react-native');

describe('react-native config', () => {
  test('it loads', () => {
    expect(reactNativeConfig).not.toBeUndefined();
  });
});
