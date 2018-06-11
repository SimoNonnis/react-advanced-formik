import { requestUpdateVendor, successUpdateVendor, rejectUpdateVendor } from 'actions/vendors';
import updateVendorReducer, { initialState } from './';

describe('Test updateVendorReducer', () => {
  it('should return the initial state', () => {
    expect(updateVendorReducer(undefined, {})).toBe(initialState);
  });
  it('should set isUpdatingVendor to true', () => {
    const reducer = updateVendorReducer(initialState, requestUpdateVendor());
    expect(reducer.get('isUpdatingVendor')).toBe(true);
  });
  it('should set isUpdatingVendor to false after calling successUpdateVendor()', () => {
    const reducer = updateVendorReducer(initialState, successUpdateVendor());
    expect(reducer.get('isUpdatingVendor')).toBe(false);
  });
  it('should set isUpdatingVendor to false after calling rejectUpdateVendor()', () => {
    const reducer = updateVendorReducer(initialState, rejectUpdateVendor());
    expect(reducer.get('isUpdatingVendor')).toBe(false);
  });
});
