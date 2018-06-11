import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
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
    yield put(createSuccessBanner({ message: 'The Address was removed successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectDeleteAddress());
    yield put(createSystemBanner({ message: 'There was a problem deleting the address.' }));
  }
}

export function* requestDeleteAddressWatcherSaga() {
  yield [takeLatest(requestDeleteAddress, requestDeleteAddressWorkerSaga)];
}
