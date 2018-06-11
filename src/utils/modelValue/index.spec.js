/* eslint-env jest */
import modelValue from './';

describe('Test modelValue()', () => {
  it('should return null if value is null', () => {
    expect(modelValue(null)).toMatchSnapshot();
  });
  it('should transform the value to a string', () => {
    expect(modelValue(true)).toMatchSnapshot();
  });
});
