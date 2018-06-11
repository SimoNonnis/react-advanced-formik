/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { theme } from '@housesimple/react-components';

import { Label, SelectWrap, SelectStyled } from './style';

describe('Test <Label />', () => {
  it('should render Label with theme props', () => {
    const wrapper = shallow(<Label theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <SelectWrap />', () => {
  it('should render SelectWrap with theme props', () => {
    const wrapper = shallow(<SelectWrap theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <SelectStyled />', () => {
  it('should render SelectStyled with theme props', () => {
    const wrapper = shallow(<SelectStyled theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
