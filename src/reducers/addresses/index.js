import { handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

import { successGetVendors, successAddVendor } from 'actions/vendors';
import {
  addAddressToState,
  deleteAddressFromState,
  requestDeleteAddress,
  successDeleteAddress,
  rejectDeleteAddress,
  requestGetAddressesList,
  successGetAddressesList,
  rejectGetAddressesList,
  requestGetAddressInfo,
  successGetAddressInfo,
  rejectGetAddressInfo,
  requestAddAddress,
  successAddAddress,
  rejectAddAddress,
} from 'actions/addresses';
import modelAddressesList from 'utils/modelAddressesList';
import modelAddressInfo from 'utils/modelAddressInfo';

const initialState = new Map({
  addressesList: List(),
  isLoading: false,
  isDisabled: false,
  addresses: Map(),
});

const getAddressIndex = (state, vendorId, addressId) =>
  state.getIn(['addresses', vendorId]).findIndex(address => addressId === address.get('id'));

const addressesReducer = handleActions(
  {
    [successGetVendors]: (state, { payload }) => {
      const allAddresses = {};
      function setVendorIdKey(vendor) {
        allAddresses[vendor.id] = [...vendor.addresses];
      }
      payload.map(vendor => setVendorIdKey(vendor));

      return state.set('addresses', Map(fromJS(allAddresses)));
    },
    [successAddVendor]: (state, { payload: { id } }) => {
      const vendorId = id.toString();

      return state.setIn(['addresses', vendorId], List());
    },
    [addAddressToState]: (state, { payload: { vendorId } }) => {
      const vendorAddresses = state.getIn(['addresses', vendorId]);
      const newAddressesArray = vendorAddresses.push(Map({ postcode: '' }));

      return state.setIn(['addresses', vendorId], newAddressesArray).set('isDisabled', true);
    },
    [deleteAddressFromState]: (state, { payload: { vendorId } }) => {
      const vendorAddresses = state.getIn(['addresses', vendorId]);
      const newAddressesArray = vendorAddresses.pop();

      return state
        .setIn(['addresses', vendorId], newAddressesArray)
        .set('isDisabled', false)
        .set('addressesList', List());
    },
    [requestDeleteAddress]: state => state.set('isLoading', true),
    [successDeleteAddress]: (state, { payload: { vendorId, addressId } }) => {
      const vendorAddresses = state.getIn(['addresses', vendorId]);
      const newAddressesArray = vendorAddresses.delete(getAddressIndex(state, vendorId, addressId));

      return state.setIn(['addresses', vendorId], newAddressesArray).set('isLoading', false);
    },
    [rejectDeleteAddress]: state => state.set('isLoading', false),
    [requestGetAddressesList]: (state, { payload: { vendorId, postcode } }) =>
      state.set('isLoading', true).setIn(['addresses', vendorId, -1], Map({ postcode })),
    [successGetAddressesList]: (state, { payload: { addressesList } }) =>
      state.merge(
        Map({
          addressesList: List(modelAddressesList(addressesList)),
          isLoading: false,
        })
      ),
    [rejectGetAddressesList]: state => state.set('isLoading', false),
    [requestGetAddressInfo]: state => state.set('isLoading', true),
    [successGetAddressInfo]: (state, { payload: { vendorId, addressInfo } }) =>
      state
        .set('isLoading', false)
        .setIn(['addresses', vendorId, -1], Map(modelAddressInfo(addressInfo))),
    [rejectGetAddressInfo]: state => state.set('isLoading', false),
    [requestAddAddress]: state => state.set('isLoading', true),
    [successAddAddress]: (state, { payload: { vendorId, data } }) =>
      state
        .setIn(['addresses', vendorId, -1], Map(data))
        .set('isLoading', false)
        .set('isDisabled', false)
        .set('addressesList', List()),
    [rejectAddAddress]: state => state.set('isLoading', false),
  },
  initialState
);

export default addressesReducer;
export { initialState };
