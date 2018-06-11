import { createAction } from 'redux-actions';

export const requestGetVendors = createAction('REQUEST_GET_VENDORS');
export const successGetVendors = createAction('SUCCESS_GET_VENDORS');
export const rejectGetVendors = createAction('REJECT_GET_VENDORS');

export const requestUpdateVendor = createAction('REQUEST_UPDATE_VENDOR');
export const successUpdateVendor = createAction('SUCCESS_UPDATE_VENDOR');
export const rejectUpdateVendor = createAction('REJECT_UPDATE_VENDOR');

export const requestDeleteVendor = createAction('REQUEST_DELETE_VENDOR');
export const successDeleteVendor = createAction('SUCCESS_DELETE_VENDOR');
export const rejectDeleteVendor = createAction('REJECT_DELETE_VENDOR');

export const requestAddVendor = createAction('REQUEST_ADD_VENDOR');
export const successAddVendor = createAction('SUCCESS_ADD_VENDOR');
export const rejectAddVendor = createAction('REJECT_ADD_VENDOR');
