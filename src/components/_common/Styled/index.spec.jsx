/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { theme } from '@housesimple/react-components';

import {
  FieldRow,
  FieldBox,
  Fieldset,
  FieldsetRadios,
  LegendWrapper,
  Legend,
  LegendRadios,
  ErrorRadios,
  ControlButton,
  ContainerProofOf,
  LegendProofOf,
  AcceptedDocument,
  ConfirmationIcon,
  DocumentName,
  DeleteDocument,
  Remove,
  OpenGalleryButton,
  IconUpload,
  SubmitButtonWrapper,
  LoaderWrapper,
  AdditionalInfo,
} from './';

describe('Test _common styled components', () => {
  describe('Test <FieldRow /> component', () => {
    it('should render FieldRow correctly with theme', () => {
      const wrapper = shallow(<FieldRow theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldRow correctly passing alignBottom', () => {
      const wrapper = shallow(<FieldRow theme={theme} alignBottom />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldRow correctly passing noSpaceBetween', () => {
      const wrapper = shallow(<FieldRow theme={theme} noSpaceBetween />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <FieldBox /> component', () => {
    it('should render FieldBox correctly with theme', () => {
      const wrapper = shallow(<FieldBox theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing center', () => {
      const wrapper = shallow(<FieldBox theme={theme} center />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing small', () => {
      const wrapper = shallow(<FieldBox theme={theme} small />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing medium', () => {
      const wrapper = shallow(<FieldBox theme={theme} medium />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing large', () => {
      const wrapper = shallow(<FieldBox theme={theme} large />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing xlarge', () => {
      const wrapper = shallow(<FieldBox theme={theme} xlarge />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing fullWidth', () => {
      const wrapper = shallow(<FieldBox theme={theme} fullWidth />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render FieldBox correctly passing marginLeft', () => {
      const wrapper = shallow(<FieldBox theme={theme} marginLeft />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <Fieldset /> component', () => {
    it('should render Fieldset correctly with theme', () => {
      const wrapper = shallow(<Fieldset theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <FieldsetRadios /> component', () => {
    it('should render FieldsetRadios correctly with theme', () => {
      const wrapper = shallow(<FieldsetRadios theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <LegendWrapper /> component', () => {
    it('should render LegendWrapper correctly with theme', () => {
      const wrapper = shallow(<LegendWrapper theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <Legend /> component', () => {
    it('should render Legend correctly with theme', () => {
      const wrapper = shallow(<Legend theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <LegendRadios /> component', () => {
    it('should render LegendRadios correctly with theme', () => {
      const wrapper = shallow(<LegendRadios theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render LegendRadios correctly with error', () => {
      const wrapper = shallow(<LegendRadios theme={theme} error />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <ErrorRadios /> component', () => {
    it('should render ErrorRadios correctly with theme', () => {
      const wrapper = shallow(<ErrorRadios theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <ContainerProofOf /> component', () => {
    it('should render ContainerProofOf correctly with theme', () => {
      const wrapper = shallow(<ContainerProofOf theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <LegendProofOf /> component', () => {
    it('should render LegendProofOf correctly with theme', () => {
      const wrapper = shallow(<LegendProofOf theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <AcceptedDocument /> component', () => {
    it('should render AcceptedDocument correctly with theme', () => {
      const wrapper = shallow(<AcceptedDocument theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <ConfirmationIcon /> component', () => {
    it('should render ConfirmationIcon correctly with theme', () => {
      const wrapper = shallow(<ConfirmationIcon theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <DocumentName /> component', () => {
    it('should render DocumentName correctly with theme', () => {
      const wrapper = shallow(<DocumentName theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <DeleteDocument /> component', () => {
    it('should render DeleteDocument correctly with theme', () => {
      const wrapper = shallow(
        <DeleteDocument onClick={() => {}} theme={theme}>
          Delete
        </DeleteDocument>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <Remove /> component', () => {
    it('should render Remove correctly with theme', () => {
      const wrapper = shallow(<Remove theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <OpenGalleryButton /> component', () => {
    it('should render OpenGalleryButton correctly with theme', () => {
      const wrapper = shallow(
        <OpenGalleryButton onClick={() => {}} theme={theme}>
          Open
        </OpenGalleryButton>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <IconUpload /> component', () => {
    it('should render IconUpload correctly with theme', () => {
      const wrapper = shallow(<IconUpload theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <ControlButton /> component', () => {
    it('should render ControlButton correctly with theme', () => {
      const wrapper = shallow(
        <ControlButton onClick={() => {}} theme={theme}>
          Remove
        </ControlButton>
      );
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <SubmitButtonWrapper /> component', () => {
    it('should render SubmitButtonWrapper correctly with theme', () => {
      const wrapper = shallow(<SubmitButtonWrapper theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render SubmitButtonWrapper with noPad', () => {
      const wrapper = shallow(<SubmitButtonWrapper noPad theme={theme} />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe('Test <LoaderWrapper /> component', () => {
    it('should render LoaderWrapper correctly with theme', () => {
      const wrapper = shallow(<LoaderWrapper />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('Test <AdditionalInfo /> component', () => {
    it('should render AdditionalInfo correctly', () => {
      const wrapper = shallow(<AdditionalInfo />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
