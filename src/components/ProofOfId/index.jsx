import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import UploadPoId from 'components/UploadDoc/UploadPoId';
import { requestDeletePoId } from 'actions/documents';
import rootDomNode from 'utils/rootDomNode';
import { Spinner, Button, Bin, ModalBox } from '@housesimple/react-components';

import {
  ContainerProofOf,
  LegendProofOf,
  AcceptedDocument,
  ConfirmationIcon,
  DocumentName,
  DeleteDocument,
  Remove,
  OpenGalleryButton,
  IconUpload,
  LoaderWrapper,
} from 'components/_common/Styled';

class ProofOfId extends Component {
  static propTypes = {
    isLoading: PropTypes.instanceOf(Map).isRequired,
    propertyId: PropTypes.string.isRequired,
    vendorId: PropTypes.number.isRequired,
    proofOfIdFiles: PropTypes.instanceOf(Map).isRequired,
    deletePoId: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleModalClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleDeletePoId = documentId => () => {
    const { deletePoId, propertyId, vendorId } = this.props;

    deletePoId({ propertyId, vendorId: vendorId.toString(), documentId });
  };

  render() {
    const { isOpen } = this.state;
    const { isLoading, propertyId, vendorId, proofOfIdFiles } = this.props;

    const vendorProofOfIdFiles = proofOfIdFiles.get(`${vendorId}`);
    const uploadedPoIdListASize = vendorProofOfIdFiles.filter(file => file.get('list') === 'A')
      .size;
    const uploadedPoIdListBSize = vendorProofOfIdFiles.filter(file => file.get('list') === 'B')
      .size;

    const legend =
      vendorProofOfIdFiles && (uploadedPoIdListASize === 1 || uploadedPoIdListBSize === 2)
        ? `Photo ID`
        : `Provide ${uploadedPoIdListBSize === 1 ? 'additional' : ''} photo ID`;

    return (
      <ContainerProofOf>
        {isLoading.get(`${vendorId}`) && (
          <LoaderWrapper>
            <Spinner fill="#0099CF" />
          </LoaderWrapper>
        )}
        <LegendProofOf>{legend}</LegendProofOf>
        {vendorProofOfIdFiles
          ? vendorProofOfIdFiles.map(uploadedFile => (
              <AcceptedDocument key={uploadedFile.get('id')}>
                <ConfirmationIcon width={33} height={33} />
                <DocumentName>{uploadedFile.get('label')} uploaded</DocumentName>
                <DeleteDocument
                  onClick={this.handleDeletePoId(uploadedFile.get('id'))}
                  styleType="link"
                  type="button"
                >
                  <Bin width={15} height={15} />
                  <Remove>Remove</Remove>
                </DeleteDocument>
              </AcceptedDocument>
            ))
          : null}

        {vendorProofOfIdFiles.size === 0 ||
        (uploadedPoIdListASize !== 1 && uploadedPoIdListBSize !== 2) ? (
          <div>
            <Button onClick={this.handleModalClick} styleType="secondary" type="button">
              <OpenGalleryButton>
                <IconUpload width={38} height={25} /> <span>Open gallery</span>
              </OpenGalleryButton>
            </Button>

            <ModalBox
              isOpen={isOpen}
              onClose={this.handleModalClick}
              contentLabel="Upload Photo ID"
              appElement={rootDomNode}
            >
              <UploadPoId
                propertyId={propertyId}
                vendorId={vendorId}
                handleModalClick={this.handleModalClick}
              />
            </ModalBox>
          </div>
        ) : null}
      </ContainerProofOf>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.getIn(['proofOfId', 'isLoading']),
    proofOfIdFiles: state.getIn(['proofOfId', 'vendorsProofOfId']),
  }),
  {
    deletePoId: requestDeletePoId,
  }
)(ProofOfId);
