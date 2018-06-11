import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import {
  requestGetDocumentTypeList,
  successGetDocumentTypeList,
  rejectGetDocumentTypeList,
} from 'actions/documents';

const initialState = new Map({
  isFetchingDocumentTypeList: false,
  documentTypeList: Map(),
});

const documentTypeListReducer = handleActions(
  {
    [requestGetDocumentTypeList]: state => state.set('isFetchingDocumentTypeList', true),
    [successGetDocumentTypeList]: (state, { payload }) =>
      state.merge(
        Map({
          isFetchingDocumentTypeList: false,
          documentTypeList: Map(payload),
        })
      ),
    [rejectGetDocumentTypeList]: () => state => state.set('isFetchingDocumentTypeList', false),
  },
  initialState
);

export default documentTypeListReducer;
export { initialState };
