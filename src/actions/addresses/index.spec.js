/* eslint-env jest */
import {
  requestDeleteAddress,
  successDeleteAddress,
  rejectDeleteAddress,
  requestAddAddress,
  successAddAddress,
  rejectAddAddress,
  addAddressToState,
  deleteAddressFromState,
  requestGetAddressesList,
  successGetAddressesList,
  rejectGetAddressesList,
  requestGetAddressInfo,
  successGetAddressInfo,
  rejectGetAddressInfo,
} from './';

describe('Test addresses actions', () => {
  it('should create actions with type of REQUEST_DELETE_ADDRESS', () => {
    const action = requestDeleteAddress();
    expect(action.type).toBe(requestDeleteAddress.toString());
  });
  it('should create actions with type of SUCCESS_DELETE_ADDRESS', () => {
    const action = successDeleteAddress();
    expect(action.type).toBe(successDeleteAddress.toString());
  });
  it('should create actions with type of REJECT_DELETE_ADDRESS', () => {
    const action = rejectDeleteAddress();
    expect(action.type).toBe(rejectDeleteAddress.toString());
  });
  it('should create actions with type of REQUEST_ADD_ADDRESS', () => {
    const action = requestAddAddress();
    expect(action.type).toBe(requestAddAddress.toString());
  });
  it('should create actions with type of SUCCESS_ADD_ADDRESS', () => {
    const action = successAddAddress();
    expect(action.type).toBe(successAddAddress.toString());
  });
  it('should create actions with type of REJECT_ADD_ADDRESS', () => {
    const action = rejectAddAddress();
    expect(action.type).toBe(rejectAddAddress.toString());
  });
  it('should create actions with type of ADD_ADDRESS_TO_STATE', () => {
    const action = addAddressToState();
    expect(action.type).toBe(addAddressToState.toString());
  });
  it('should create actions with type of DELETE_ADDRESS_FROM_STATE', () => {
    const action = deleteAddressFromState();
    expect(action.type).toBe(deleteAddressFromState.toString());
  });
  it('should create actions with type of REQUEST_GET_ADDRESSES_LIST', () => {
    const action = requestGetAddressesList();
    expect(action.type).toBe(requestGetAddressesList.toString());
  });
  it('should create actions with type of SUCCESS_GET_ADDRESSES_LIST', () => {
    const action = successGetAddressesList();
    expect(action.type).toBe(successGetAddressesList.toString());
  });
  it('should create actions with type of REJECT_GET_ADDRESSES_LIST', () => {
    const action = rejectGetAddressesList();
    expect(action.type).toBe(rejectGetAddressesList.toString());
  });
  it('should create actions with type of REQUEST_GET_ADDRESS_INFO', () => {
    const action = requestGetAddressInfo();
    expect(action.type).toBe(requestGetAddressInfo.toString());
  });
  it('should create actions with type of SUCCESS_GET_ADDRESS_INFO', () => {
    const action = successGetAddressInfo();
    expect(action.type).toBe(successGetAddressInfo.toString());
  });
  it('should create actions with type of REJECT_GET_ADDRESS_INFO', () => {
    const action = rejectGetAddressInfo();
    expect(action.type).toBe(rejectGetAddressInfo.toString());
  });
});
