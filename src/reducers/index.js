import { combineReducers } from 'redux-immutable';
import { reducers as defaultReducers } from '@housesimple/redux';

import documentTypeListReducer from 'reducers/documentTypeList';

import vendorsReducer from 'reducers/vendors';
import updateVendorReducer from 'reducers/updateVendor';
import addVendorReducer from 'reducers/addVendor';
import deleteVendorReducer from 'reducers/deleteVendor';

import addressesReducer from 'reducers/addresses';

import proofOfIdReducer from 'reducers/proofOfId';
import proofOfAddressReducer from 'reducers/proofOfAddress';

import banner from 'reducers/banner';

export default combineReducers(
  Object.assign({}, defaultReducers, {
    documentTypeList: documentTypeListReducer,
    vendors: vendorsReducer,
    updateVendor: updateVendorReducer,
    addVendor: addVendorReducer,
    deleteVendor: deleteVendorReducer,
    banner,
    addresses: addressesReducer,
    proofOfId: proofOfIdReducer,
    proofOfAddress: proofOfAddressReducer,
  })
);
