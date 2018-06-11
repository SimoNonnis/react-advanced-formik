import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createSystemBanner } from 'actions/banner';
import {
  requestGetAddressesList,
  successGetAddressesList,
  rejectGetAddressesList,
} from 'actions/addresses';
import { getAddressesList } from 'api';

export function* requestGetAddressesListWorkerSaga(action) {
  try {
    const authToken = yield select(authTokenSelector);
    const requestObject = { ...action.payload, authToken };
    const response = yield call(getAddressesList, requestObject);
    const addressesList = yield response.data;

    yield put(clearBanners());
    yield put(successGetAddressesList({ addressesList }));
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectGetAddressesList());
    yield put(createSystemBanner({ message: 'Error. There was an error with you request.' }));
  }
}

export function* requestGetAddressesListsWatcherSaga() {
  yield [takeLatest(requestGetAddressesList, requestGetAddressesListWorkerSaga)];
}
