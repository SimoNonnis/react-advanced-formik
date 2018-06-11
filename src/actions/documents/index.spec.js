/* eslint-env jest */
import {
  requestGetDocumentTypeList,
  successGetDocumentTypeList,
  rejectGetDocumentTypeList,
  requestUploadPoId,
  successUploadPoId,
  rejectUploadPoId,
  requestDeletePoId,
  successDeletePoId,
  rejectDeletePoId,
  requestUploadPoAd,
  successUploadPoAd,
  rejectUploadPoAd,
  requestDeletePoAd,
  successDeletePoAd,
  rejectDeletePoAd,
} from './';

describe('Test documents actions', () => {
  it('should create actions with type of REQUEST_GET_DOCUMENT_TYPE_LIST', () => {
    const action = requestGetDocumentTypeList();
    expect(action.type).toBe(requestGetDocumentTypeList.toString());
  });
  it('should create actions with type of SUCCESS_GET_DOCUMENT_TYPE_LIST', () => {
    const action = successGetDocumentTypeList();
    expect(action.type).toBe(successGetDocumentTypeList.toString());
  });
  it('should create actions with type of REJECT_GET_DOCUMENT_TYPE_LIST', () => {
    const action = rejectGetDocumentTypeList();
    expect(action.type).toBe(rejectGetDocumentTypeList.toString());
  });

  it('should create actions with type of REQUEST_UPLOAD_POID', () => {
    const action = requestUploadPoId();
    expect(action.type).toBe(requestUploadPoId.toString());
  });
  it('should create actions with type of SUCCESS_UPLOAD_POID', () => {
    const action = successUploadPoId();
    expect(action.type).toBe(successUploadPoId.toString());
  });
  it('should create actions with type of REJECT_UPLOAD_POID', () => {
    const action = rejectUploadPoId();
    expect(action.type).toBe(rejectUploadPoId.toString());
  });

  it('should create actions with type of REQUEST_DELETE_POID', () => {
    const action = requestDeletePoId();
    expect(action.type).toBe(requestDeletePoId.toString());
  });
  it('should create actions with type of SUCCESS_DELETE_POID', () => {
    const action = successDeletePoId();
    expect(action.type).toBe(successDeletePoId.toString());
  });
  it('should create actions with type of REJECT_DELETE_POID', () => {
    const action = rejectDeletePoId();
    expect(action.type).toBe(rejectDeletePoId.toString());
  });

  it('should create actions with type of REQUEST_UPLOAD_POAD', () => {
    const action = requestUploadPoAd();
    expect(action.type).toBe(requestUploadPoAd.toString());
  });
  it('should create actions with type of SUCCESS_UPLOAD_POAD', () => {
    const action = successUploadPoAd();
    expect(action.type).toBe(successUploadPoAd.toString());
  });
  it('should create actions with type of REJECT_UPLOAD_POAD', () => {
    const action = rejectUploadPoAd();
    expect(action.type).toBe(rejectUploadPoAd.toString());
  });

  it('should create actions with type of REQUEST_DELETE_POAD', () => {
    const action = requestDeletePoAd();
    expect(action.type).toBe(requestDeletePoAd.toString());
  });
  it('should create actions with type of SUCCESS_DELETE_POAD', () => {
    const action = successDeletePoAd();
    expect(action.type).toBe(successDeletePoAd.toString());
  });
  it('should create actions with type of REJECT_DELETE_POAD', () => {
    const action = rejectDeletePoAd();
    expect(action.type).toBe(rejectDeletePoAd.toString());
  });
});
