import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { requestUpdateVendor, successUpdateVendor, rejectUpdateVendor } from 'actions/vendors';

const initialState = new Map({
  isUpdatingVendor: false,
});

const updateVendorReducer = handleActions(
  {
    [requestUpdateVendor]: state => state.set('isUpdatingVendor', true),
    [successUpdateVendor]: state => state.set('isUpdatingVendor', false),
    [rejectUpdateVendor]: state => state.set('isUpdatingVendor', false),
  },
  initialState
);

export default updateVendorReducer;
export { initialState };
