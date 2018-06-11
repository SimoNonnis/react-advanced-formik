/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PageLayout from './';

const children = () => <div>This is test children</div>;

describe('Test <PageLayout /> component', () => {
  it('should render PageLayout correctly with required props', () => {
    const wrapper = shallow(<PageLayout>{children}</PageLayout>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render PageLayout correctly with back props', () => {
    const wrapper = shallow(<PageLayout back="/test">{children}</PageLayout>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should render PageLayout correctly with title props', () => {
    const wrapper = shallow(<PageLayout title="Title">{children}</PageLayout>);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
