import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Select, SelectOptGroup } from 'components/UploadDoc/_common/Select/index';

import {
  PreviewContainer,
  Preview,
  DocPlaceholder,
  FileName,
  FilePreview,
  TypeOfDocContainer,
  ConfirmContainer,
  ConfirmRadioBox,
  ConfirmLabel,
  ButtonsContainer,
  Button,
} from './style';

const propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
  cancelAccepted: PropTypes.func.isRequired,
  uploadApproved: PropTypes.func.isRequired,
  selectTypeOfDoc: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isConfirmed: PropTypes.string,
  optionGroupSelect: PropTypes.bool,
  proofOfIdTypeListA: PropTypes.arrayOf(
    PropTypes.shape({
      list: PropTypes.string,
      type: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  proofOfIdTypeListB: PropTypes.arrayOf(
    PropTypes.shape({
      list: PropTypes.string,
      type: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  proofOfAddressTypeList: PropTypes.arrayOf(
    PropTypes.shape({
      list: PropTypes.string,
      type: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

const defaultProps = {
  isConfirmed: '',
  optionGroupSelect: false,
};

const ApproveDoc = ({
  file,
  cancelAccepted,
  uploadApproved,
  selectTypeOfDoc,
  confirm,
  isDisabled,
  isConfirmed,
  optionGroupSelect,
  proofOfIdTypeListA,
  proofOfIdTypeListB,
  proofOfAddressTypeList,
}) => (
  <div>
    <PreviewContainer>
      <Preview>
        {file.type === 'application/pdf' ? (
          <DocPlaceholder width={180} height={180} />
        ) : (
          <FilePreview src={file.preview} alt={file.name} />
        )}
      </Preview>
      <FileName>{file.name}</FileName>
    </PreviewContainer>

    <TypeOfDocContainer>
      {optionGroupSelect ? (
        <SelectOptGroup
          label="Please specify the ID type"
          optionsListA={proofOfIdTypeListA}
          optionsListB={proofOfIdTypeListB}
          onChange={selectTypeOfDoc}
        />
      ) : (
        <Select
          label="Please specify the document type"
          options={proofOfAddressTypeList}
          onChange={selectTypeOfDoc}
        />
      )}
    </TypeOfDocContainer>

    <ConfirmContainer>
      <ConfirmRadioBox
        id="original_document"
        label={
          <ConfirmLabel>
            I confirm that I have seen the original document and appears to be genuine and it is the
            true likeness of the individual.
          </ConfirmLabel>
        }
        value="original_document"
        name="confirmation"
        checked={isConfirmed === 'original_document'}
        onChange={confirm}
      />
      <ConfirmRadioBox
        id="certified_copy"
        label={
          <ConfirmLabel>
            The customer has supplied certified copies of their documentation as I have not seen the
            original.
          </ConfirmLabel>
        }
        value="certified_copy"
        name="confirmation"
        checked={isConfirmed === 'certified_copy'}
        onChange={confirm}
      />
    </ConfirmContainer>

    <ButtonsContainer>
      <Button styleType="secondary" type="button" onClick={cancelAccepted}>
        Cancel
      </Button>
      <Button type="button" onClick={uploadApproved} disabled={isDisabled}>
        Upload
      </Button>
    </ButtonsContainer>
  </div>
);

ApproveDoc.propTypes = propTypes;
ApproveDoc.defaultProps = defaultProps;

export default connect(
  state => ({
    proofOfIdTypeListA: state.getIn([
      'documentTypeList',
      'documentTypeList',
      'identification_list_a',
    ]),
    proofOfIdTypeListB: state.getIn([
      'documentTypeList',
      'documentTypeList',
      'identification_list_b',
    ]),
    proofOfAddressTypeList: state.getIn([
      'documentTypeList',
      'documentTypeList',
      'proof_of_address_list_c',
    ]),
  }),
  null
)(ApproveDoc);
