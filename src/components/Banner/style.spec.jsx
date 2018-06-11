/* eslint-env jest */
import React from 'react';
import { theme } from '@housesimple/react-components';
import { shallow } from 'enzyme';
import { Container, AttentionIcon } from './style';

describe('Test Banner styled components', () => {
  describe('Test <Container /> component', () => {
    it('should render Container correctly with theme and type of user', () => {
      const wrapper = shallow(<Container theme={theme} type="user" />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Container correctly with theme and type of system', () => {
      const wrapper = shallow(<Container theme={theme} type="system" />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render Container correctly with theme and type of success', () => {
      const wrapper = shallow(<Container theme={theme} type="success" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Test <AttentionIcon /> component', () => {
    it('should render AttentionIcon correctly with theme and type of user', () => {
      const wrapper = shallow(<AttentionIcon theme={theme} type="user" />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render AttentionIcon correctly with theme and type of system', () => {
      const wrapper = shallow(<AttentionIcon theme={theme} type="system" />);
      expect(wrapper).toMatchSnapshot();
    });
    it('should render AttentionIcon correctly with theme and type of success', () => {
      const wrapper = shallow(<AttentionIcon theme={theme} type="success" />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
