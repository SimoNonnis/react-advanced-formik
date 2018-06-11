/* eslint-env jest */
import { put, call, takeLatest } from 'redux-saga/effects';
import { requestGetVendors } from 'actions/vendors';
import { getVendors } from 'api';
import { requestVendorsWorkerSaga, requestVendorsWatcherSaga } from './';

const action = { type: 'REQUEST_GET_VENDORS' };

const mockSuccessGetVendors = [{ id: 1 }, { id: 2 }];

describe('Test get vendors sagas', () => {
  describe('requestVendorsWatcherSaga', () => {
    const saga = requestVendorsWatcherSaga(action);
    let output = null;

    it('should call requestVendorsWorkerSaga', () => {
      output = saga.next().value;
      const expected = [takeLatest(requestGetVendors, requestVendorsWorkerSaga)];
      expect(output).toEqual(expected);
    });
  });

  describe('requestVendorsWorkerSaga', () => {
    describe('Test API success route', () => {
      const saga = requestVendorsWorkerSaga(action);
      let output = null;

      it('should call getVendors with request object', done => {
        output = saga.next().value;
        const expected = call(getVendors, {
          id: 1,
        });
        done();
        expect(output).toEqual(expected);
      });

      it('should yield data from response', done => {
        output = saga.next(mockSuccessGetVendors).value;
        done();
        expect(output).toEqual(mockSuccessGetVendors);
      });

      it('should put SUCCESS_GET_VENDORS with correct data', done => {
        output = saga.next(mockSuccessGetVendors).value;
        const expected = [
          put({
            type: 'SUCCESS_GET_VENDORS',
            payload: mockSuccessGetVendors,
          }),
        ];
        const finished = saga.next().done;
        done();
        expect(finished).toEqual(true);
        expect(output).toEqual(expected);
      });
    });

    describe('Test catch route', () => {
      const saga = requestVendorsWorkerSaga(action);
      let output = null;

      it('should put REJECT_GET_VENDORS with correct data if error is thrown', done => {
        saga.next();
        output = saga.throw(new Error()).value;
        const expected = [
          put({
            type: 'REJECT_GET_VENDORS',
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
