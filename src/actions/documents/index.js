import { createAction } from 'redux-actions';

// Type of document list
export const requestGetDocumentTypeList = createAction('REQUEST_GET_DOCUMENT_TYPE_LIST');
export const successGetDocumentTypeList = createAction('SUCCESS_GET_DOCUMENT_TYPE_LIST');
export const rejectGetDocumentTypeList = createAction('REJECT_GET_DOCUMENT_TYPE_LIST');

// Proof of Id
export const requestUploadPoId = createAction('REQUEST_UPLOAD_POID');
export const successUploadPoId = createAction('SUCCESS_UPLOAD_POID');
export const rejectUploadPoId = createAction('REJECT_UPLOAD_POID');

export const requestDeletePoId = createAction('REQUEST_DELETE_POID');
export const successDeletePoId = createAction('SUCCESS_DELETE_POID');
export const rejectDeletePoId = createAction('REJECT_DELETE_POID');

// Proof of address
export const requestUploadPoAd = createAction('REQUEST_UPLOAD_POAD');
export const successUploadPoAd = createAction('SUCCESS_UPLOAD_POAD');
export const rejectUploadPoAd = createAction('REJECT_UPLOAD_POAD');

export const requestDeletePoAd = createAction('REQUEST_DELETE_POAD');
export const successDeletePoAd = createAction('SUCCESS_DELETE_POAD');
export const rejectDeletePoAd = createAction('REJECT_DELETE_POAD');
