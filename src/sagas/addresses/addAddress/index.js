import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSuccessBanner, createSystemBanner } from 'actions/banner';
import { requestAddAddress, successAddAddress, rejectAddAddress } from 'actions/addresses';
import { addAddress } from 'api';

export function* requestAddAddressWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId } = requestObject;
    const response = yield call(addAddress, requestObject);
    const data = yield response.data;

    yield put(clearBanners());
    yield put(successAddAddress({ vendorId, data }));
    yield put(createSuccessBanner({ message: 'The Address was added successfully.' }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectAddAddress());
    yield put(createSystemBanner({ message: 'There was a problem adding the address.' }));
  }
}

export function* requestAddAddressWatcherSaga() {
  yield [takeLatest(requestAddAddress, requestAddAddressWorkerSaga)];
}
