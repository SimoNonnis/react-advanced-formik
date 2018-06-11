import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import {
  requestGetAddressInfo,
  successGetAddressInfo,
  rejectGetAddressInfo,
  requestAddAddress,
} from 'actions/addresses';
import { getAddressInfo } from 'api';

import modelAddressInfo from 'utils/modelAddressInfo';

export function* requestGetAddressInfoWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const { vendorId } = requestObject;
    const response = yield call(getAddressInfo, requestObject);
    const addressInfo = yield response.data;
    const body = modelAddressInfo(addressInfo);

    yield put(clearBanners());
    yield put(successGetAddressInfo({ vendorId, addressInfo }));
    yield put(requestAddAddress({ vendorId, body }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectGetAddressInfo());
    yield put(createSystemBanner({ message: 'Error. There was an error with you request.' }));
  }
}

export function* requestGetAddressInfoWatcherSaga() {
  yield [takeLatest(requestGetAddressInfo, requestGetAddressInfoWorkerSaga)];
}
