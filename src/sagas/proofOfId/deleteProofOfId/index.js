import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
import { requestDeletePoId, successDeletePoId, rejectDeletePoId } from 'actions/documents';
import { deleteDocument } from 'api';

export function* requestDeletePoIdWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId, documentId } = requestObject;

    yield call(deleteDocument, requestObject);
    yield put(clearBanners());
    yield put(successDeletePoId({ vendorId, documentId }));
    yield put(createSuccessBanner({ message: 'The Proof of ID was removed successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectDeletePoId());
    yield put(createSystemBanner({ message: 'There was a problem deleting your file.' }));
  }
}

export function* requestDeletePoIdWatcherSaga() {
  yield [takeLatest(requestDeletePoId, requestDeletePoIdWorkerSaga)];
}
