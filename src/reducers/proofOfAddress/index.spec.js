import { successGetVendors, successAddVendor } from 'actions/vendors';

import {
  requestUploadPoAd,
  successUploadPoAd,
  rejectUploadPoAd,
  requestDeletePoAd,
  successDeletePoAd,
  rejectDeletePoAd,
} from 'actions/documents';

import { mockedVendors } from 'reducers/mocks';
import { mockedState, mockedPoAd } from './mocks';

import proofOfAddressReducer, { initialState } from './';

describe('Test proofOfAddressReducer', () => {
  it('should return initial state', () => {
    expect(proofOfAddressReducer(undefined, {})).toBe(initialState);
  });

  it('should build isLoading obj and vendorsProofOfAddress obj by vendor ID', () => {
    const reducer = proofOfAddressReducer(initialState, successGetVendors(mockedVendors));
    expect(reducer).toMatchSnapshot();
  });
  it('should set new POAD empty array and isLoading false by vendor ID', () => {
    const reducer = proofOfAddressReducer(initialState, successAddVendor({ id: 3 }));
    expect(reducer).toMatchSnapshot();
  });

  it('should set isLoading to true after calling requestUploadPoAd()', () => {
    const reducer = proofOfAddressReducer(mockedState, requestUploadPoAd({ vendorId: '4' }));
    expect(reducer.getIn(['isLoading', '4'])).toBe(true);
  });
  it('should add new file obj to vendorsProofOfAddress', () => {
    const reducer = proofOfAddressReducer(
      mockedState,
      successUploadPoAd({ vendorId: '34', data: mockedPoAd })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectUploadPoAd()', () => {
    const reducer = proofOfAddressReducer(mockedState, rejectUploadPoAd({ vendorId: '4' }));
    expect(reducer.getIn(['isLoading', '4'])).toBe(false);
  });

  it('should set isLoading to true after calling requestDeletePoAd()', () => {
    const reducer = proofOfAddressReducer(mockedState, requestDeletePoAd({ vendorId: '4' }));
    expect(reducer.getIn(['isLoading', '4'])).toBe(true);
  });
  it('should delete file obj from vendorsProofOfAddress', () => {
    const reducer = proofOfAddressReducer(
      mockedState,
      successDeletePoAd({ vendorId: '4', documentId: '1' })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectDeletePoAd()', () => {
    const reducer = proofOfAddressReducer(mockedState, rejectDeletePoAd({ vendorId: '4' }));
    expect(reducer.getIn(['isLoading', '4'])).toBe(false);
  });
});
