import { createAction } from 'redux-actions';

// Lookup
export const requestGetAddressesList = createAction('REQUEST_GET_ADDRESSES_LIST');
export const successGetAddressesList = createAction('SUCCESS_GET_ADDRESSES_LIST');
export const rejectGetAddressesList = createAction('REJECT_GET_ADDRESSES_LIST');

export const requestGetAddressInfo = createAction('REQUEST_GET_ADDRESS_INFO');
export const successGetAddressInfo = createAction('SUCCESS_GET_ADDRESS_INFO');
export const rejectGetAddressInfo = createAction('REJECT_GET_ADDRESS_INFO');

// Addresses
export const requestDeleteAddress = createAction('REQUEST_DELETE_ADDRESS');
export const successDeleteAddress = createAction('SUCCESS_DELETE_ADDRESS');
export const rejectDeleteAddress = createAction('REJECT_DELETE_ADDRESS');

export const requestAddAddress = createAction('REQUEST_ADD_ADDRESS');
export const successAddAddress = createAction('SUCCESS_ADD_ADDRESS');
export const rejectAddAddress = createAction('REJECT_ADD_ADDRESS');

export const addAddressToState = createAction('ADD_ADDRESS_TO_STATE');
export const deleteAddressFromState = createAction('DELETE_ADDRESS_FROM_STATE');
