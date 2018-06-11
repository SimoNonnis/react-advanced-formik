/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';

import { AddVendorContainer } from './style';

describe('Test <AddVendorContainer /> component', () => {
  it('should render AddVendorContainer correctly with theme', () => {
    const wrapper = shallow(<AddVendorContainer theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
