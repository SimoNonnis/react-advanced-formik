import { handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

import { successGetVendors, successAddVendor } from 'actions/vendors';
import {
  requestUploadPoId,
  successUploadPoId,
  rejectUploadPoId,
  requestDeletePoId,
  successDeletePoId,
  rejectDeletePoId,
} from 'actions/documents';

const initialState = new Map({
  isLoading: Map(),
  vendorsProofOfId: Map(),
});

const getPoIdIndex = (state, vendorId, documentId) =>
  state.getIn(['vendorsProofOfId', vendorId]).findIndex(PoId => documentId === PoId.get('id'));

const proofOfIdReducer = handleActions(
  {
    [successGetVendors]: (state, { payload }) => {
      const proofOfIdFiles = {};
      const isLoading = {};

      function setVendorIdKey(vendor) {
        proofOfIdFiles[vendor.id] = [...vendor.identification_files];
      }

      function setIsLoadingKey(vendor) {
        isLoading[vendor.id] = false;
      }

      payload.map(vendor => setIsLoadingKey(vendor));
      payload.map(vendor => setVendorIdKey(vendor));

      return state
        .set('vendorsProofOfId', Map(fromJS(proofOfIdFiles)))
        .set('isLoading', Map(fromJS(isLoading)));
    },
    [successAddVendor]: (state, { payload: { id } }) => {
      const vendorId = id.toString();

      return state
        .setIn(['isLoading', vendorId], false)
        .setIn(['vendorsProofOfId', vendorId], List());
    },
    [requestUploadPoId]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], true),
    [successUploadPoId]: (state, { payload: { vendorId, data } }) => {
      const vendorPoId = state.getIn(['vendorsProofOfId', vendorId]);
      const newPoIdArray = vendorPoId.push(Map(data));

      return state
        .setIn(['vendorsProofOfId', vendorId], newPoIdArray)
        .setIn(['isLoading', vendorId], false);
    },
    [rejectUploadPoId]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], false),

    [requestDeletePoId]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], true),
    [successDeletePoId]: (state, { payload: { vendorId, documentId } }) => {
      const vendorPoId = state.getIn(['vendorsProofOfId', vendorId]);
      const newPoIdArray = vendorPoId.delete(getPoIdIndex(state, vendorId, documentId));

      return state
        .setIn(['vendorsProofOfId', vendorId], newPoIdArray)
        .setIn(['isLoading', vendorId], false);
    },
    [rejectDeletePoId]: (state, { payload: { vendorId } }) =>
      state.setIn(['isLoading', vendorId], false),
  },
  initialState
);

export default proofOfIdReducer;
export { initialState };
