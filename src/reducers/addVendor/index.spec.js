import { requestAddVendor, successAddVendor, rejectAddVendor } from 'actions/vendors';
import addVendorReducer, { initialState } from './';

describe('Test addVendorReducer', () => {
  it('should return the initial state', () => {
    expect(addVendorReducer(undefined, {})).toBe(initialState);
  });
  it('should set isAddingVendor to true', () => {
    const reducer = addVendorReducer(initialState, requestAddVendor());
    expect(reducer.get('isAddingVendor')).toBe(true);
  });
  it('should set isAddingVendor to false after calling successAddVendor()', () => {
    const reducer = addVendorReducer(initialState, successAddVendor());
    expect(reducer.get('isAddingVendor')).toBe(false);
  });
  it('should set isAddingVendor to false after calling rejectAddVendor()', () => {
    const reducer = addVendorReducer(initialState, rejectAddVendor());
    expect(reducer.get('isAddingVendor')).toBe(false);
  });
});
