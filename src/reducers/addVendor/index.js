import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import { requestAddVendor, successAddVendor, rejectAddVendor } from 'actions/vendors';

const initialState = new Map({
  isAddingVendor: false,
});

const addVendorReducer = handleActions(
  {
    [requestAddVendor]: state => state.set('isAddingVendor', true),
    [successAddVendor]: state => state.set('isAddingVendor', false),
    [rejectAddVendor]: state => state.set('isAddingVendor', false),
  },
  initialState
);

export default addVendorReducer;
export { initialState };
