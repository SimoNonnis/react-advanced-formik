import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
import { requestDeletePoAd, successDeletePoAd, rejectDeletePoAd } from 'actions/documents';
import { deleteDocument } from 'api';

export function* requestDeletePoAdWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId, documentId } = requestObject;

    yield call(deleteDocument, requestObject);
    yield put(clearBanners());
    yield put(successDeletePoAd({ vendorId, documentId }));
    yield put(createSuccessBanner({ message: 'The Proof of Address was removed successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectDeletePoAd());
    yield put(createSystemBanner({ message: 'There was a problem deleting your file.' }));
  }
}

export function* requestDeletePoAdWatcherSaga() {
  yield [takeLatest(requestDeletePoAd, requestDeletePoAdWorkerSaga)];
}
