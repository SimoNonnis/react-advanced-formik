import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import { requestUploadPoId, successUploadPoId, rejectUploadPoId } from 'actions/documents';
import { uploadDocument } from 'api';

export function* requestUploadPoIdWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId } = requestObject;
    const response = yield call(uploadDocument, requestObject);
    const data = response.data;

    yield put(successUploadPoId({ vendorId, data }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectUploadPoId());
    yield put(createSystemBanner({ message: 'Error. There was an error uploading your file.' }));
  }
}

export function* requestUploadPoIdWatcherSaga() {
  yield [takeLatest(requestUploadPoId, requestUploadPoIdWorkerSaga)];
}
