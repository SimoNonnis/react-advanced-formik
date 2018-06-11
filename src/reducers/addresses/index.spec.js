import { successGetVendors, successAddVendor } from 'actions/vendors';
import {
  addAddressToState,
  deleteAddressFromState,
  requestDeleteAddress,
  successDeleteAddress,
  rejectDeleteAddress,
  requestGetAddressesList,
  successGetAddressesList,
  rejectGetAddressesList,
  requestGetAddressInfo,
  successGetAddressInfo,
  rejectGetAddressInfo,
  requestAddAddress,
  successAddAddress,
  rejectAddAddress,
} from 'actions/addresses';

import { mockedVendors } from 'reducers/mocks';
import { mockedState, mockedAddressesList, mockedAddressInfo, mockedAddress } from './mocks';

import addressesReducer, { initialState } from './';

describe('Test addressesReducer', () => {
  it('should return initial state', () => {
    expect(addressesReducer(undefined, {})).toBe(initialState);
  });

  it('should set addresses by vendor ID', () => {
    const reducer = addressesReducer(initialState, successGetVendors(mockedVendors));
    expect(reducer).toMatchSnapshot();
  });
  it('should create addresses array for a newly created vendor', () => {
    const reducer = addressesReducer(initialState, successAddVendor({ id: 3 }));
    expect(reducer).toMatchSnapshot();
  });

  it('should create new address object by vendorId', () => {
    const reducer = addressesReducer(mockedState, addAddressToState({ vendorId: '5' }));
    expect(reducer).toMatchSnapshot();
  });
  it('should delete newly added address object by vendorId', () => {
    const reducer = addressesReducer(mockedState, deleteAddressFromState({ vendorId: '5' }));
    expect(reducer).toMatchSnapshot();
  });

  it('should set isLoading to true after calling requestDeleteAddress()', () => {
    const reducer = addressesReducer(initialState, requestDeleteAddress());
    expect(reducer.get('isLoading')).toBe(true);
  });
  it('should set isLoading to false after calling successDeleteAddress()', () => {
    const reducer = addressesReducer(
      mockedState,
      successDeleteAddress({ vendorId: '35', addressId: 1 })
    );
    expect(reducer.get('isLoading')).toBe(false);
  });
  it('should delete address after calling successDeleteAddress()', () => {
    const reducer = addressesReducer(
      mockedState,
      successDeleteAddress({ vendorId: '35', addressId: 1 })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectDeleteAddress()', () => {
    const reducer = addressesReducer(mockedState, rejectDeleteAddress());
    expect(reducer.get('isLoading')).toBe(false);
  });

  it('should add postcode key/value object to addresses array by vendorId', () => {
    const reducer = addressesReducer(
      mockedState,
      requestGetAddressesList({ vendorId: '5', postcode: 'co10 2ed' })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should add response payload to addressesList after successGetAddressesList()', () => {
    const reducer = addressesReducer(
      initialState,
      successGetAddressesList({ addressesList: mockedAddressesList })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectGetAddressesList()', () => {
    const reducer = addressesReducer(initialState, rejectGetAddressesList());
    expect(reducer.get('isLoading')).toBe(false);
  });

  it('should set isLoading to true after calling requestGetAddressInfo()', () => {
    const reducer = addressesReducer(initialState, requestGetAddressInfo());
    expect(reducer).toMatchSnapshot();
  });
  it('should add response payload to addresses after successGetAddressInfo()', () => {
    const reducer = addressesReducer(
      initialState,
      successGetAddressInfo({ vendorId: '5', addressInfo: mockedAddressInfo })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectGetAddressInfo()', () => {
    const reducer = addressesReducer(initialState, rejectGetAddressInfo());
    expect(reducer.get('isLoading')).toBe(false);
  });

  it('should set isLoading to true after calling requestAddAddress()', () => {
    const reducer = addressesReducer(initialState, requestAddAddress());
    expect(reducer).toMatchSnapshot();
  });
  it('should add response payload to addresses after successAddAddress()', () => {
    const reducer = addressesReducer(
      initialState,
      successAddAddress({ vendorId: '5', data: mockedAddress })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectAddAddress()', () => {
    const reducer = addressesReducer(initialState, rejectAddAddress());
    expect(reducer.get('isLoading')).toBe(false);
  });
});
