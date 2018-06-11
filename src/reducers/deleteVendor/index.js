import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { requestDeleteVendor, successDeleteVendor, rejectDeleteVendor } from 'actions/vendors';

const initialState = new Map({
  isDeletingVendor: false,
});

const deleteVendorReducer = handleActions(
  {
    [requestDeleteVendor]: state => state.set('isDeletingVendor', true),
    [successDeleteVendor]: state => state.set('isDeletingVendor', false),
    [rejectDeleteVendor]: state => state.set('isDeletingVendor', false),
  },
  initialState
);

export default deleteVendorReducer;
export { initialState };
