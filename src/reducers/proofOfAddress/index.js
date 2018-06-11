import { handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

import { successGetVendors, successAddVendor } from 'actions/vendors';
import {
  requestUploadPoAd,
  successUploadPoAd,
  rejectUploadPoAd,
  requestDeletePoAd,
  successDeletePoAd,
  rejectDeletePoAd,
} from 'actions/documents';

const initialState = new Map({
  isLoading: Map(),
  vendorsProofOfAddress: Map(),
});

const getPoAdIndex = (state, vendorId, documentId) =>
  state.getIn(['vendorsProofOfAddress', vendorId]).findIndex(PoAd => documentId === PoAd.get('id'));

const proofOfAddressReducer = handleActions(
  {
    [successGetVendors]: (state, { payload }) => {
      const proofOfAddressFiles = {};
      const isLoading = {};

      function setVendorIdKey(vendor) {
        proofOfAddressFiles[vendor.id] = [...vendor.proof_of_address_files];
      }

      function setIsLoadingKey(vendor) {
        isLoading[vendor.id] = false;
      }

      payload.map(vendor => setIsLoadingKey(vendor));
      payload.map(vendor => setVendorIdKey(vendor));

      return state
        .set('vendorsProofOfAddress', Map(fromJS(proofOfAddressFiles)))
        .set('isLoading', Map(fromJS(isLoading)));
    },
    [successAddVendor]: (state, { payload: { id } }) => {
      const vendorId = id.toString();

      return state
        .setIn(['isLoading', vendorId], false)
        .setIn(['vendorsProofOfAddress', vendorId], List());
    },
    [requestUploadPoAd]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], true),
    [successUploadPoAd]: (state, { payload: { vendorId, data } }) =>
      state
        .setIn(['vendorsProofOfAddress', vendorId, -1], Map(data))
        .setIn(['isLoading', vendorId], false),
    [rejectUploadPoAd]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], false),
    [requestDeletePoAd]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], true),
    [successDeletePoAd]: (state, { payload: { vendorId, documentId } }) => {
      const vendorPoAd = state.getIn(['vendorsProofOfAddress', vendorId]);
      const newPoAdArray = vendorPoAd.delete(getPoAdIndex(state, vendorId, documentId));

      return state
        .setIn(['vendorsProofOfAddress', vendorId], newPoAdArray)
        .setIn(['isLoading', vendorId], false);
    },
    [rejectDeletePoAd]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], false),
  },
  initialState
);

export default proofOfAddressReducer;
export { initialState };
