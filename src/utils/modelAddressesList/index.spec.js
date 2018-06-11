/* eslint-env jest */
import modelPayload from './';

const mockPayload = [
  { Id: '52509479.00', StreetAddress: 'P C A Predict', Place: 'Waterside Basin Road Worcester' },
  { Id: '53327590.00', StreetAddress: 'Lock Keepers Cottage Basin Road', Place: 'Worcester' },
  { Id: '26772356.00', StreetAddress: 'Lock View Basin Road', Place: 'Worcester' },
];

describe('Test modelPayload()', () => {
  it('should transform payload array to new modeled array', () => {
    expect(modelPayload(mockPayload)).toMatchSnapshot();
  });
});
