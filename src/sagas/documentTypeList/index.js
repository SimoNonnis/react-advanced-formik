import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { createSystemBanner } from 'actions/banner';
import {
  requestGetDocumentTypeList,
  successGetDocumentTypeList,
  rejectGetDocumentTypeList,
} from 'actions/documents';
import { getDocumentTypeList } from 'api';

export function* requestDocumentTypeListWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const response = yield call(getDocumentTypeList, requestObject);
    const data = response.data;

    yield put(successGetDocumentTypeList(data));
  } catch (error) {
    yield put(rejectGetDocumentTypeList());
    yield put(createSystemBanner({ message: 'There was a problem getting document types list.' }));
  }
}

export function* requestDocumentTypeListWatcherSaga() {
  yield [takeLatest(requestGetDocumentTypeList, requestDocumentTypeListWorkerSaga)];
}
