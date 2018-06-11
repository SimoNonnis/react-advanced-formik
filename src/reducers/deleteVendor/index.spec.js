import { requestDeleteVendor, successDeleteVendor, rejectDeleteVendor } from 'actions/vendors';
import deleteVendorReducer, { initialState } from './';

describe('Test deleteVendorReducer', () => {
  it('should return the initial state', () => {
    expect(deleteVendorReducer(undefined, {})).toBe(initialState);
  });
  it('should set isDeletingVendor to true', () => {
    const reducer = deleteVendorReducer(initialState, requestDeleteVendor());
    expect(reducer.get('isDeletingVendor')).toBe(true);
  });
  it('should set isDeletingVendor to false after calling successDeleteVendor()', () => {
    const reducer = deleteVendorReducer(initialState, successDeleteVendor());
    expect(reducer.get('isDeletingVendor')).toBe(false);
  });
  it('should set isDeletingVendor to false after calling rejectDeleteVendor()', () => {
    const reducer = deleteVendorReducer(initialState, rejectDeleteVendor());
    expect(reducer.get('isDeletingVendor')).toBe(false);
  });
});
