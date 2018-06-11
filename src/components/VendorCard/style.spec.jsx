/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';

import { VendorCardOuter } from './style';

describe('Test <VendorCardOuter /> component', () => {
  it('should render VendorCardOuter correctly with theme', () => {
    const wrapper = shallow(<VendorCardOuter theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
