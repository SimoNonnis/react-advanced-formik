import { put, call, takeLatest, select } from 'redux-saga/effects';
import { authTokenSelector } from 'selectors/authSelector';
import { clearBanners, createUserBanner, createSystemBanner } from 'actions/banner';
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
    const addressesList = response.data;

    if (addressesList[0].Error) {
      yield put(clearBanners());
      yield put(rejectGetAddressesList());
      yield put(
        createUserBanner({
          message: `There was a problem finding your address. Please enter address manually.`,
        })
      );
    } else {
      yield put(clearBanners());
      yield put(successGetAddressesList({ addressesList }));
    }
  } catch (error) {
    yield put(clearBanners());
    yield put(rejectGetAddressesList());
    yield put(
      createSystemBanner({
        message: 'There was a problem finding your address. Please enter address manually.',
      })
    );
  }
}

export function* requestGetAddressesListsWatcherSaga() {
  yield [takeLatest(requestGetAddressesList, requestGetAddressesListWorkerSaga)];
}
