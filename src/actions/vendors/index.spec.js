/* eslint-env jest */
import {
  requestGetVendors,
  successGetVendors,
  rejectGetVendors,
  requestUpdateVendor,
  successUpdateVendor,
  rejectUpdateVendor,
  requestDeleteVendor,
  successDeleteVendor,
  rejectDeleteVendor,
  requestAddVendor,
  successAddVendor,
  rejectAddVendor,
} from './';

describe('Test vendor actions', () => {
  it('should create action with type of REQUEST_GET_VENDORS', () => {
    const action = requestGetVendors();
    expect(action.type).toBe(requestGetVendors.toString());
  });
  it('should create actions with type of SUCCESS_GET_VENDORS', () => {
    const action = successGetVendors();
    expect(action.type).toBe(successGetVendors.toString());
  });
  it('should create actions with type of REJECT_GET_VENDORS', () => {
    const action = rejectGetVendors();
    expect(action.type).toBe(rejectGetVendors.toString());
  });
  it('should create actions with type of REQUEST_UPDATE_VENDOR', () => {
    const action = requestUpdateVendor();
    expect(action.type).toBe(requestUpdateVendor.toString());
  });
  it('should create actions with type of SUCCESS_UPDATE_VENDOR', () => {
    const action = successUpdateVendor();
    expect(action.type).toBe(successUpdateVendor.toString());
  });
  it('should create actions with type of REJECT_UPDATE_VENDOR', () => {
    const action = rejectUpdateVendor();
    expect(action.type).toBe(rejectUpdateVendor.toString());
  });
  it('should create actions with type of REQUEST_DELETE_VENDOR', () => {
    const action = requestDeleteVendor();
    expect(action.type).toBe(requestDeleteVendor.toString());
  });
  it('should create actions with type of SUCCESS_DELETE_VENDOR', () => {
    const action = successDeleteVendor();
    expect(action.type).toBe(successDeleteVendor.toString());
  });
  it('should create actions with type of REJECT_DELETE_VENDOR', () => {
    const action = rejectDeleteVendor();
    expect(action.type).toBe(rejectDeleteVendor.toString());
  });
  it('should create actions with type of REQUEST_ADD_VENDOR', () => {
    const action = requestAddVendor();
    expect(action.type).toBe(requestAddVendor.toString());
  });
  it('should create actions with type of SUCCESS_ADD_VENDOR', () => {
    const action = successAddVendor();
    expect(action.type).toBe(successAddVendor.toString());
  });
  it('should create actions with type of REJECT_ADD_VENDOR', () => {
    const action = rejectAddVendor();
    expect(action.type).toBe(rejectAddVendor.toString());
  });
});
