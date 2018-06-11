import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import { requestUpdateVendor, successUpdateVendor, rejectUpdateVendor } from 'actions/vendors';
import { updateVendor } from 'api';

export function* requestUpdateVendorWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };

    yield call(updateVendor, requestObject);

    yield put(clearBanners());
    yield put(successUpdateVendor());
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectUpdateVendor());
    yield put(createSystemBanner({ message: 'Error. Please call customer services.' }));
  }
}

export function* requestUpdateVendorWatcherSaga() {
  yield [takeLatest(requestUpdateVendor, requestUpdateVendorWorkerSaga)];
}
