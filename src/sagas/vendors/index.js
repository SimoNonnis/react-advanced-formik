import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import { requestGetVendors, successGetVendors, rejectGetVendors } from 'actions/vendors';
import { getVendors } from 'api';

export function* requestVendorsWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const response = yield call(getVendors, requestObject);
    const data = yield response.data;

    yield put(clearBanners());
    yield put(successGetVendors(data));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectGetVendors());
    yield put(createSystemBanner({ message: 'There was a problem getting the contact list.' }));
  }
}

export function* requestVendorsWatcherSaga() {
  yield [takeLatest(requestGetVendors, requestVendorsWorkerSaga)];
}
