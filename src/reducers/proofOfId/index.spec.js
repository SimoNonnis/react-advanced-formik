import { successGetVendors, successAddVendor } from 'actions/vendors';

import {
  requestUploadPoId,
  successUploadPoId,
  rejectUploadPoId,
  requestDeletePoId,
  successDeletePoId,
  rejectDeletePoId,
} from 'actions/documents';

import { mockedVendors } from 'reducers/mocks';
import { mockedState, mockedPoId } from './mocks';

import proofOfIdReducer, { initialState } from './';

describe('Test proofOfIdReducer', () => {
  it('should return initial state', () => {
    expect(proofOfIdReducer(undefined, {})).toBe(initialState);
  });

  it('should build isLoading obj and vendorsProofOfId obj by vendor ID', () => {
    const reducer = proofOfIdReducer(initialState, successGetVendors(mockedVendors));
    expect(reducer).toMatchSnapshot();
  });
  it('should set new PoId empty array and isLoading false by vendor ID', () => {
    const reducer = proofOfIdReducer(initialState, successAddVendor({ id: 3 }));
    expect(reducer).toMatchSnapshot();
  });

  it('should set isLoading to true after calling requestUploadPoAd()', () => {
    const reducer = proofOfIdReducer(mockedState, requestUploadPoId({ vendorId: '34' }));
    expect(reducer.getIn(['isLoading', '34'])).toBe(true);
  });
  it('should add new file obj to vendorsProofOfId', () => {
    const reducer = proofOfIdReducer(
      mockedState,
      successUploadPoId({ vendorId: '34', data: mockedPoId })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectUploadPoId()', () => {
    const reducer = proofOfIdReducer(mockedState, rejectUploadPoId({ vendorId: '34' }));
    expect(reducer.getIn(['isLoading', '34'])).toBe(false);
  });

  it('should set isLoading to true after calling requestDeletePoId()', () => {
    const reducer = proofOfIdReducer(mockedState, requestDeletePoId({ vendorId: '34' }));
    expect(reducer.getIn(['isLoading', '34'])).toBe(true);
  });
  it('should delete file obj from vendorsProofOfId after calling successDeletePoId()', () => {
    const reducer = proofOfIdReducer(
      mockedState,
      successDeletePoId({ vendorId: '4', documentId: mockedPoId })
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isLoading to false after calling rejectDeletePoId()', () => {
    const reducer = proofOfIdReducer(mockedState, rejectDeletePoId({ vendorId: '34' }));
    expect(reducer.getIn(['isLoading', '34'])).toBe(false);
  });
});
