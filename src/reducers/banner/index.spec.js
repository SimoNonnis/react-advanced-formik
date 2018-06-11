/* eslint-env jest */
import { createSystemBanner, createUserBanner, clearBanners } from 'actions/banner';
import banner from './';

describe('banner reducer', () => {
  it('returns the initialState when the action is null', () => {
    expect(banner(undefined, {})).toMatchSnapshot();
  });
  it('should set state back to initialState', () => {
    expect(banner(undefined, clearBanners())).toMatchSnapshot();
  });
  it('should set state message to payload and type to system', () => {
    expect(banner(undefined, createSystemBanner('Error message'))).toMatchSnapshot();
  });
  it('should set state message to payload and type to user', () => {
    expect(banner(undefined, createUserBanner('Error message'))).toMatchSnapshot();
  });
});
