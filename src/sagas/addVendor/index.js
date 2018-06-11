import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
import { requestAddVendor, successAddVendor, rejectAddVendor } from 'actions/vendors';

import { addVendor } from 'api';

export function* requestAddVendorWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const response = yield call(addVendor, requestObject);
    const data = response.data;

    yield put(clearBanners());
    yield put(successAddVendor(data));
    yield put(createSuccessBanner({ message: 'Contact added successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectAddVendor());
    yield put(createSystemBanner({ message: 'There was a problem adding this contact.' }));
  }
}

export function* requestAddVendorWatcherSaga() {
  yield [takeLatest(requestAddVendor, requestAddVendorWorkerSaga)];
}
