/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { theme } from '@housesimple/react-components';

import { Title, Description } from './style';

describe('Test <Title />', () => {
  it('should render Title with theme props', () => {
    const wrapper = shallow(<Title theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Description />', () => {
  it('should render Description with theme props', () => {
    const wrapper = shallow(<Description theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
