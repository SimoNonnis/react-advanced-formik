import { createAction } from 'redux-actions';

export const createSystemBanner = createAction('CREATE_SYSTEM_BANNER');
export const createUserBanner = createAction('CREATE_USER_BANNER');
export const createSuccessBanner = createAction('CREATE_SUCCESS_BANNER');
export const clearBanners = createAction('CLEAR_BANNERS');
