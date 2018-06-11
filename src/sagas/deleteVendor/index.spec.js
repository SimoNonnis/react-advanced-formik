/* eslint-env jest */
import { put, call, takeLatest } from 'redux-saga/effects';
import { deleteVendor } from 'api';
import { requestDeleteVendor } from 'actions/vendors';
import { requestDeleteVendorWorkerSaga, requestDeleteVendorWatcherSaga } from './';

const action = {
  type: 'REQUEST_DELETE_VENDOR',
  payload: {
    propertyId: 1,
    vendorId: 35,
  },
};

const mockSuccessUpdateData = {
  vendorId: 35,
};

describe('Test deleteVendor saga', () => {
  describe('requestDeleteVendorWatcherSaga', () => {
    const saga = requestDeleteVendorWatcherSaga(action);
    let output = null;

    it('should call requestDeleteVendorWorkerSaga', () => {
      output = saga.next().value;
      const expected = [takeLatest(requestDeleteVendor, requestDeleteVendorWorkerSaga)];
      expect(output).toEqual(expected);
    });
  });

  describe('requestDeleteVendorWorkerSaga', () => {
    describe('Test API success route', () => {
      const saga = requestDeleteVendorWorkerSaga(action);
      let output = null;

      it('should call deleteVendor with request object', done => {
        output = saga.next().value;
        const expected = call(deleteVendor, {
          type: 'beneficial_owner',
          present_at_home_visit: true,
          title: 'Mr',
          first_names: 'Martin E',
          last_name: 'Eden',
        });
        done();
        expect(output).toEqual(expected);
      });

      it('should yield data from response', done => {
        output = saga.next(mockSuccessUpdateData).value;
        done();
        expect(output).toEqual(mockSuccessUpdateData.data);
      });

      it('should put SUCCESS_DELETE_VENDOR with correct data', done => {
        output = saga.next(mockSuccessUpdateData.data).value;
        const expected = [
          put({
            type: 'SUCCESS_DELETE_VENDOR',
            payload: mockSuccessUpdateData.data,
          }),
        ];
        const finished = saga.next().done;
        done();
        expect(finished).toEqual(true);
        expect(output).toEqual(expected);
      });
    });

    describe('Test catch route', () => {
      const saga = requestDeleteVendorWorkerSaga(action);
      let output = null;

      it('should put REJECT_DELETE_VENDOR with correct data if error is thrown', done => {
        saga.next();
        output = saga.throw(new Error()).value;
        const expected = [
          put({
            type: 'REJECT_DELETE_VENDOR',
          }),
        ];
        const finished = saga.next().done;
        done();
        expect(finished).toEqual(true);
        expect(output).toEqual(expected);
      });
    });
  });
});
