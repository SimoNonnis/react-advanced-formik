import {
  requestSaga,
  requestLogin,
  authLogoutWatcher,
  authLoginWatcher,
  redirectWatcher,
} from '@housesimple/redux';

// Type of document list
import { requestDocumentTypeListWatcherSaga } from 'sagas/documentTypeList';

// Vendors
import { requestVendorsWatcherSaga } from 'sagas/vendors';
import { requestUpdateVendorWatcherSaga } from 'sagas/updateVendor';
import { requestAddVendorWatcherSaga } from 'sagas/addVendor';
import { requestDeleteVendorWatcherSaga } from 'sagas/deleteVendor';

// Lookup address
import { requestGetAddressesListsWatcherSaga } from 'sagas/addresses/getAddressesList';
import { requestGetAddressInfoWatcherSaga } from 'sagas/addresses/getAddressInfo';

// Addresses
import { requestDeleteAddressWatcherSaga } from 'sagas/addresses/deleteAddress';
import { requestAddAddressWatcherSaga } from 'sagas/addresses/addAddress';

// Proof of Id
import { requestUploadPoIdWatcherSaga } from 'sagas/proofOfId/uploadProofOfId';
import { requestDeletePoIdWatcherSaga } from 'sagas/proofOfId/deleteProofOfId';

// Proof of Address
import { requestUploadPoAdWatcherSaga } from 'sagas/proofOfAddress/uploadProofOfAddress';
import { requestDeletePoAdWatcherSaga } from 'sagas/proofOfAddress/deleteProofOfAddress';

export default function* rootSaga() {
  yield [
    requestSaga([requestLogin.toString()]),
    authLogoutWatcher(),
    authLoginWatcher(),
    redirectWatcher(),
    requestVendorsWatcherSaga(),
    requestUpdateVendorWatcherSaga(),
    requestAddVendorWatcherSaga(),
    requestDeleteVendorWatcherSaga(),
    requestDeleteAddressWatcherSaga(),
    requestGetAddressesListsWatcherSaga(),
    requestGetAddressInfoWatcherSaga(),
    requestAddAddressWatcherSaga(),
    requestDocumentTypeListWatcherSaga(),
    requestUploadPoIdWatcherSaga(),
    requestDeletePoIdWatcherSaga(),
    requestUploadPoAdWatcherSaga(),
    requestDeletePoAdWatcherSaga(),
  ];
}
