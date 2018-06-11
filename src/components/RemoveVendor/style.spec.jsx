/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';

import {
  RemoveVendorContainer,
  ModalContent,
  Title,
  Text,
  ControlsContainer,
  Button,
} from './style';

describe('Test <RemoveVendorContainer /> component', () => {
  it('should render RemoveVendorContainer correctly with theme', () => {
    const wrapper = shallow(<RemoveVendorContainer theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <ModalContent /> component', () => {
  it('should render ModalContent correctly with theme', () => {
    const wrapper = shallow(<ModalContent theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Title /> component', () => {
  it('should render Title correctly with theme', () => {
    const wrapper = shallow(<Title theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Text /> component', () => {
  it('should render Text correctly with theme', () => {
    const wrapper = shallow(<Text theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <ControlsContainer /> component', () => {
  it('should render ControlsContainer correctly with theme', () => {
    const wrapper = shallow(<ControlsContainer theme={theme} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Button /> component', () => {
  it('should render Button correctly with theme', () => {
    const wrapper = shallow(
      <Button theme={theme} onClick={() => {}}>
        Test
      </Button>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
