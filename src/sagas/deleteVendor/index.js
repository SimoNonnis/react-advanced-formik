import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
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
    yield put(createSuccessBanner({ message: 'Contact removed successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectDeleteVendor());
    yield put(createSystemBanner({ message: 'There was a problem deleting this contact.' }));
  }
}

export function* requestDeleteVendorWatcherSaga() {
  yield [takeLatest(requestDeleteVendor, requestDeleteVendorWorkerSaga)];
}
