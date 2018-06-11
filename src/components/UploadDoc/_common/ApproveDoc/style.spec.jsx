/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import noop from 'lodash/noop';

import { theme } from '@housesimple/react-components';

import {
  PreviewContainer,
  Preview,
  FileName,
  DocPlaceholder,
  FilePreview,
  ConfirmContainer,
  ConfirmLabel,
  ButtonsContainer,
  Button,
} from './style';

describe('Test <PreviewContainer />', () => {
  it('should render PreviewContainer with theme props', () => {
    const wrapper = shallow(<PreviewContainer theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Preview />', () => {
  it('should render Preview with theme props', () => {
    const wrapper = shallow(<Preview theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <FileName />', () => {
  it('should render FileName with theme props', () => {
    const wrapper = shallow(<FileName theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <DocPlaceholder />', () => {
  it('should render DocPlaceholder with theme props', () => {
    const wrapper = shallow(<DocPlaceholder theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <FilePreview />', () => {
  it('should render FilePreview with theme props', () => {
    const wrapper = shallow(<FilePreview theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <ConfirmContainer />', () => {
  it('should render ConfirmContainer with theme props', () => {
    const wrapper = shallow(<ConfirmContainer theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <ConfirmLabel />', () => {
  it('should render ConfirmLabel with theme props', () => {
    const wrapper = shallow(<ConfirmLabel theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <ButtonsContainer />', () => {
  it('should render ButtonsContainer with theme props', () => {
    const wrapper = shallow(<ButtonsContainer theme={theme} />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});

describe('Test <Button />', () => {
  it('should render Button with theme props', () => {
    const wrapper = shallow(
      <Button theme={theme} onClick={noop}>
        Test
      </Button>
    );
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
