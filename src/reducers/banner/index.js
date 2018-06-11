import { handleActions } from 'redux-actions';
import { Map } from 'immutable';

import {
  createSystemBanner,
  createUserBanner,
  createSuccessBanner,
  clearBanners,
} from 'actions/banner';

const initialState = Map({
  type: null,
  message: null,
  dismissTime: 7000,
});

const banner = handleActions(
  {
    [clearBanners]: () => initialState,
    [createSystemBanner]: (state, action) => {
      const { payload } = action;
      return state.merge(
        Map({
          type: 'system',
          ...payload,
        })
      );
    },
    [createUserBanner]: (state, action) => {
      const { payload } = action;
      return state.merge(
        Map({
          type: 'user',
          ...payload,
        })
      );
    },
    [createSuccessBanner]: (state, action) => {
      const { payload } = action;
      return state.merge(
        Map({
          type: 'success',
          ...payload,
        })
      );
    },
  },
  initialState
);

export default banner;
export { initialState };
