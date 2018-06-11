/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';

import { TitleContainer, Title } from './style';

describe('Test <TitleContainer /> component', () => {
  it('should render TitleContainer correctly with theme', () => {
    const wrapper = shallow(<TitleContainer theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Title /> component', () => {
  it('should render Title correctly with theme', () => {
    const wrapper = shallow(<Title theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
