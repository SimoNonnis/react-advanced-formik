import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
import { requestUpdateVendor, successUpdateVendor, rejectUpdateVendor } from 'actions/vendors';
import { updateVendor } from 'api';

export function* requestUpdateVendorWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };

    yield call(updateVendor, requestObject);

    yield put(clearBanners());
    yield put(successUpdateVendor());
    yield put(createSuccessBanner({ message: 'Contact info updated successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectUpdateVendor());
    yield put(createSystemBanner({ message: 'There was a problem updating the contact info.' }));
  }
}

export function* requestUpdateVendorWatcherSaga() {
  yield [takeLatest(requestUpdateVendor, requestUpdateVendorWorkerSaga)];
}
