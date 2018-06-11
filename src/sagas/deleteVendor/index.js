import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import { requestDeleteVendor, successDeleteVendor, rejectDeleteVendor } from 'actions/vendors';
import { deleteVendor } from 'api';

export function* requestDeleteVendorWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId } = requestObject;

    yield call(deleteVendor, requestObject);
    yield put(clearBanners());
    yield put(successDeleteVendor(vendorId));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectDeleteVendor());
    yield put(createSystemBanner({ message: 'Error. Please call customer services.' }));
  }
}

export function* requestDeleteVendorWatcherSaga() {
  yield [takeLatest(requestDeleteVendor, requestDeleteVendorWorkerSaga)];
}
