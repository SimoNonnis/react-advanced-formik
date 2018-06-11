/* eslint-env jest */

import {
  requestGetVendors,
  successGetVendors,
  rejectGetVendors,
  successAddVendor,
  successDeleteVendor,
} from 'actions/vendors';

import { mockedVendors, mockedVendor } from 'reducers/mocks';

import {
  mockedRequestState,
  mockedState,
  mockedStateAfterDelete,
  mockedStateAfterAdd,
} from './mocks';

import vendorsReducer, { initialState } from './';

describe('Test vendorsReducer', () => {
  it('should return the initialState when the action is null', () => {
    expect(vendorsReducer(undefined, {})).toBe(initialState);
  });
  it('should set isFetchingVendors to true', () => {
    const reducer = vendorsReducer(mockedRequestState, requestGetVendors());
    expect(reducer.get('isFetchingVendors')).toBe(true);
  });
  it('should set isFetchingVendors to false and have vendors List populated', () => {
    const reducer = vendorsReducer(mockedRequestState, successGetVendors(mockedVendors));
    expect(reducer).toMatchSnapshot();
  });
  it('should be able to add a vendor to the list', () => {
    expect(vendorsReducer(mockedState, successAddVendor(mockedVendor))).toEqual(
      mockedStateAfterAdd
    );
  });
  it('should be able to delete a vendor from the list', () => {
    expect(vendorsReducer(mockedState, successDeleteVendor(35))).toEqual(mockedStateAfterDelete);
  });
  it('should set isFetchingVendors to false', () => {
    const reducer = vendorsReducer(mockedRequestState, rejectGetVendors());
    expect(reducer.get('isFetchingVendors')).toBe(false);
  });
});
