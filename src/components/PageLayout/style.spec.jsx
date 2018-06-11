/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';
import { PageOuter, PageInner, BackLinkSection, BackLink, Arrow, Title } from './style';

describe('Test PageLayout styled components', () => {
  describe('Test <PageOuter /> component', () => {
    it('should render PageOuter correctly with theme', () => {
      const wrapper = shallow(<PageOuter theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render PageInner correctly with theme', () => {
      const wrapper = shallow(<PageInner theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render BackLinkSection correctly with theme', () => {
      const wrapper = shallow(<BackLinkSection theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render BackLink correctly with theme', () => {
      const wrapper = shallow(<BackLink theme={theme} to="/" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render Arrow correctly with theme', () => {
      const wrapper = shallow(<Arrow theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should render Title correctly with theme', () => {
      const wrapper = shallow(<Title theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
