import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import { requestDeleteAddress, successDeleteAddress, rejectDeleteAddress } from 'actions/addresses';
import { deleteAddress } from 'api';

export function* requestDeleteAddressWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId, addressId } = requestObject;

    yield call(deleteAddress, requestObject);
    yield put(clearBanners());
    yield put(successDeleteAddress({ vendorId, addressId }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectDeleteAddress());
    yield put(createSystemBanner({ message: 'Error. Please try again.' }));
  }
}

export function* requestDeleteAddressWatcherSaga() {
  yield [takeLatest(requestDeleteAddress, requestDeleteAddressWorkerSaga)];
}
