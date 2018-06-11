/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Map } from 'immutable';
import ConnectBanner, { Banner } from './';

const mockBlankState = Map({
  banner: Map({
    message: null,
    type: null,
  }),
});

const mockSystemMessageState = mockBlankState.merge(
  Map({
    banner: Map({
      message: 'test',
      type: 'system',
    }),
  })
);
const mockUserMessageState = mockBlankState.merge(
  Map({
    banner: Map({
      message: 'test',
      type: 'user',
    }),
  })
);
describe('Test <Banner /> component', () => {
  describe('UI', () => {
    it('should render Banner correctly with required props', () => {
      const wrapper = shallow(<Banner clearAllBanners={() => {}} />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Banner correctly with message and type of user prop', () => {
      const wrapper = shallow(
        <Banner clearAllBanners={() => {}} message="Test Message" type="user" />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Banner correctly with message and type of sysem prop', () => {
      const wrapper = shallow(
        <Banner clearAllBanners={() => {}} message="Test Message" type="system" />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Connecetd', () => {
    const mockStore = configureStore();

    it('should have correct props from initialstate', () => {
      const store = mockStore(mockBlankState);
      const wrapper = shallow(<ConnectBanner store={store} />);
      expect(wrapper.prop('message')).toEqual(null);
      expect(wrapper.prop('type')).toEqual(null);
    });

    it('should have correc props from state if list is present', () => {
      const store = mockStore(mockSystemMessageState);
      const wrapper = shallow(<ConnectBanner store={store} />);
      expect(wrapper.prop('message')).toEqual('test');
      expect(wrapper.prop('type')).toEqual('system');
    });

    it('should have correct props from state is postcode is present', () => {
      const store = mockStore(mockUserMessageState);
      const wrapper = shallow(<ConnectBanner store={store} />);
      expect(wrapper.prop('message')).toEqual('test');
      expect(wrapper.prop('type')).toEqual('user');
    });
  });
});
