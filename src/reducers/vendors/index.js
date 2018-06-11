import { handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

import {
  requestGetVendors,
  successGetVendors,
  rejectGetVendors,
  successAddVendor,
  successDeleteVendor,
} from 'actions/vendors';

const initialState = new Map({
  isFetchingVendors: false,
  vendors: List(),
});

const getVendorIndex = (state, id) => state.get('vendors').findIndex(vendor => id === vendor.id);

const vendorsReducer = handleActions(
  {
    [requestGetVendors]: state => state.set('isFetchingVendors', true),
    [successGetVendors]: (state, { payload }) =>
      state.merge(
        Map({
          isFetchingVendors: false,
          vendors: List(payload),
        })
      ),
    [successAddVendor]: (state, { payload }) => {
      const updatedVendorsList = state.get('vendors').push(payload);

      return state.set('vendors', updatedVendorsList);
    },
    [successDeleteVendor]: (state, { payload: vendorId }) => {
      const updatedVendorsList = state.get('vendors').delete(getVendorIndex(state, vendorId));

      return state.set('vendors', updatedVendorsList);
    },
    [rejectGetVendors]: () => initialState,
  },
  initialState
);

export default vendorsReducer;
export { initialState };
