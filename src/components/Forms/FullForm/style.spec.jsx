/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';

import { Head, VendorInfo, VendorIcon, VendorFullName, VendorLastName, Body } from './style';

describe('Test <Head /> component', () => {
  it('should render Head correctly with theme', () => {
    const wrapper = shallow(<Head theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <VendorInfo /> component', () => {
  it('should render VendorInfo correctly with theme', () => {
    const wrapper = shallow(<VendorInfo theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <VendorIcon /> component', () => {
  it('should render VendorIcon correctly with theme', () => {
    const wrapper = shallow(<VendorIcon theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <VendorFullName /> component', () => {
  it('should render VendorFullName correctly with theme', () => {
    const wrapper = shallow(<VendorFullName theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <VendorLastName /> component', () => {
  it('should render VendorLastName correctly with theme', () => {
    const wrapper = shallow(<VendorLastName theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Body /> component', () => {
  it('should render Body correctly with theme', () => {
    const wrapper = shallow(<Body theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
