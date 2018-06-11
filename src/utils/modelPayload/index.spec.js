/* eslint-env jest */
import modelPayload from './';

describe('Test modelPayload()', () => {
  it('should transform string value "true" to boolean true', () => {
    expect(modelPayload({ test: 'true' })).toMatchSnapshot();
  });
  it('should transform string value "false" to boolean false', () => {
    expect(modelPayload({ test: 'false' })).toMatchSnapshot();
  });
  it('should transform empty string value to null', () => {
    expect(modelPayload({ test: '' })).toMatchSnapshot();
  });
  it('should leave the value unchanged', () => {
    expect(modelPayload({ test: 'test string' })).toMatchSnapshot();
  });
  it('should leave true unchanged', () => {
    expect(modelPayload({ test: true })).toMatchSnapshot();
  });
  it('should leave false unchanged', () => {
    expect(modelPayload({ test: false })).toMatchSnapshot();
  });
  it('should leave null unchanged', () => {
    expect(modelPayload({ test: null })).toMatchSnapshot();
  });
  it('should leave null unchanged', () => {
    expect(modelPayload({ test: null })).toMatchSnapshot();
  });
  it('should delete primary key', () => {
    expect(modelPayload({ primary: true })).toMatchSnapshot();
  });
  it('should delete living_at_the_property_you_are_selling_for_at_least_twelve_months key', () => {
    expect(
      modelPayload({ living_at_the_property_you_are_selling_for_at_least_twelve_months: true })
    ).toMatchSnapshot();
  });
});
