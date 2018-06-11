import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import { requestUploadPoAd, successUploadPoAd, rejectUploadPoAd } from 'actions/documents';
import { uploadDocument } from 'api';

export function* requestUploadPoAdWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId } = requestObject;
    const response = yield call(uploadDocument, requestObject);
    const data = response.data;

    yield put(successUploadPoAd({ vendorId, data }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectUploadPoAd());
    yield put(createSystemBanner({ message: 'Error. There was an error uploading your file.' }));
  }
}

export function* requestUploadPoAdWatcherSaga() {
  yield [takeLatest(requestUploadPoAd, requestUploadPoAdWorkerSaga)];
}
