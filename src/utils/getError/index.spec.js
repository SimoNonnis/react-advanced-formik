/* eslint-env jest */
import getError from './';

const mockTouched = {
  one: true,
  two: false,
};

const mockErrors = {
  one: 'one',
  two: 'two',
};

const mockValue = {
  one: 'one',
};

describe('Test getError()', () => {
  it('should return a function waiting for a key', () => {
    expect(getError(mockTouched, mockErrors)).toMatchSnapshot();
  });
});

describe('Test getError()', () => {
  it('should get the error', () => {
    const showError = getError(mockTouched, mockErrors);
    expect(showError(mockValue.one)).toMatchSnapshot();
  });
});
