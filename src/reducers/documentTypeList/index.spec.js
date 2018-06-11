import {
  requestGetDocumentTypeList,
  successGetDocumentTypeList,
  rejectGetDocumentTypeList,
} from 'actions/documents';

import { mockedDocumentTypeList } from './mocks';
import documentTypeListReducer, { initialState } from './';

describe('Test documentTypeListReducer', () => {
  it('should return the initial state', () => {
    expect(documentTypeListReducer(undefined, {})).toBe(initialState);
  });
  it('should set isFetchingDocumentTypeList to true when calling requestGetDocumentTypeList()', () => {
    const reducer = documentTypeListReducer(initialState, requestGetDocumentTypeList());
    expect(reducer.get('isFetchingDocumentTypeList')).toBe(true);
  });
  it('should set isFetchingDocumentTypeList to false when calling successGetDocumentTypeList()', () => {
    const reducer = documentTypeListReducer(initialState, successGetDocumentTypeList());
    expect(reducer.get('isFetchingDocumentTypeList')).toBe(false);
  });
  it('should populate documentTypeList with payload when calling successGetDocumentTypeList()', () => {
    const reducer = documentTypeListReducer(
      initialState,
      successGetDocumentTypeList(mockedDocumentTypeList)
    );
    expect(reducer).toMatchSnapshot();
  });
  it('should set isFetchingDocumentTypeList to false when calling rejectGetDocumentTypeList()', () => {
    const reducer = documentTypeListReducer(initialState, rejectGetDocumentTypeList());
    expect(reducer.get('isFetchingDocumentTypeList')).toBe(false);
  });
});
