/* eslint-env jest */
import { createSystemBanner, createUserBanner, createSuccessBanner, clearBanners } from './';

describe('addressActions', () => {
  it('should create actions with type of CREATE_SYSTEM_BANNER', () => {
    const action = createSystemBanner();
    expect(action.type).toBe(createSystemBanner.toString());
  });
  it('should create actions with type of CREATE_USER_BANNER', () => {
    const action = createUserBanner();
    expect(action.type).toBe(createUserBanner.toString());
  });
  it('should create actions with type of CREATE_SUCCESS_BANNER', () => {
    const action = createSuccessBanner();
    expect(action.type).toBe(createSuccessBanner.toString());
  });
  it('should create actions with type of CLEAR_BANNERS', () => {
    const action = clearBanners();
    expect(action.type).toBe(clearBanners.toString());
  });
});
