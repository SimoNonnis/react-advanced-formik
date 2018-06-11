/* eslint-env jest */
import { put, call, takeLatest } from 'redux-saga/effects';
import { updateVendor } from 'api';
import { requestUpdateVendor } from 'actions/vendors';
import { requestUpdateVendorWorkerSaga, requestUpdateVendorWatcherSaga } from './';

const action = {
  type: 'REQUEST_UPDATE_VENDOR',
  payload: {
    type: 'beneficial_owner',
    present_at_home_visit: true,
    title: 'Mr',
    first_names: 'Martin E',
    last_name: 'Eden',
  },
};

const mockSuccessUpdateData = {
  type: 'beneficial_owner',
  present_at_home_visit: true,
  title: 'Mr',
  first_names: 'Martin E',
  last_name: 'Eden',
};

describe('Test updateVendor saga', () => {
  describe('requestUpdateVendorWatcherSaga', () => {
    const saga = requestUpdateVendorWatcherSaga(action);
    let output = null;

    it('should call requestUpdateVendorWorkerSaga', () => {
      output = saga.next().value;
      const expected = [takeLatest(requestUpdateVendor, requestUpdateVendorWorkerSaga)];
      expect(output).toEqual(expected);
    });
  });

  describe('requestUpdateVendorWorkerSaga', () => {
    describe('Test API success route', () => {
      const saga = requestUpdateVendorWorkerSaga(action);
      let output = null;

      it('should call updateVendor with request object', done => {
        output = saga.next().value;
        const expected = call(updateVendor, {
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

      it('should put SUCCESS_UPDATE_VENDOR with correct data', done => {
        output = saga.next(mockSuccessUpdateData.data).value;
        const expected = [
          put({
            type: 'SUCCESS_UPDATE_VENDOR',
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
      const saga = requestUpdateVendorWorkerSaga(action);
      let output = null;

      it('should put REJECT_UPDATE_VENDOR with correct data if error is thrown', done => {
        saga.next();
        output = saga.throw(new Error()).value;
        const expected = [
          put({
            type: 'REJECT_UPDATE_VENDOR',
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
