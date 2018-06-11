import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import UploadPoAd from 'components/UploadDoc/UploadPoAd';
import { requestDeletePoAd } from 'actions/documents';
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

class ProofOfAddress extends Component {
  static propTypes = {
    isLoading: PropTypes.instanceOf(Map).isRequired,
    propertyId: PropTypes.string.isRequired,
    vendorId: PropTypes.number.isRequired,
    proofOfAddressFiles: PropTypes.instanceOf(Map).isRequired,
    deletePoAd: PropTypes.func.isRequired,
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

  handleDeletePoAd = documentId => () => {
    const { deletePoAd, propertyId, vendorId } = this.props;

    deletePoAd({ propertyId, vendorId: vendorId.toString(), documentId });
  };

  render() {
    const { isOpen } = this.state;
    const { isLoading, propertyId, vendorId, proofOfAddressFiles } = this.props;
    const vendorProofOfAddressFiles = proofOfAddressFiles.get(vendorId.toString());
    const uploadedPoAListSize = vendorProofOfAddressFiles.size;
    const legend = uploadedPoAListSize > 0 ? 'Proof of address' : 'Provide proof of address';
    const isLoadingObj = isLoading.toJS();

    return (
      <ContainerProofOf>
        {isLoadingObj[vendorId] && (
          <LoaderWrapper>
            <Spinner fill="#0099CF" />
          </LoaderWrapper>
        )}
        <LegendProofOf>{legend}</LegendProofOf>
        {uploadedPoAListSize ? (
          vendorProofOfAddressFiles.map(uploadedFile => {
            const uploadedFileToJS = uploadedFile.toJS();

            return (
              <AcceptedDocument key={uploadedFileToJS.id}>
                <ConfirmationIcon width={33} height={33} />
                <DocumentName>{uploadedFileToJS.label} uploaded</DocumentName>
                <DeleteDocument
                  onClick={this.handleDeletePoAd(uploadedFileToJS.id)}
                  styleType="link"
                  type="button"
                >
                  <Bin width={15} height={15} />
                  <Remove>Remove</Remove>
                </DeleteDocument>
              </AcceptedDocument>
            );
          })
        ) : (
          <div>
            <Button onClick={this.handleModalClick} styleType="secondary" type="button">
              <OpenGalleryButton>
                <IconUpload width={38} height={25} /> <span>Open gallery</span>
              </OpenGalleryButton>
            </Button>

            <ModalBox
              isOpen={isOpen}
              onClose={this.handleModalClick}
              contentLabel="Upload Proof of address"
              appElement={document.querySelector('#app')}
            >
              <UploadPoAd
                propertyId={propertyId}
                vendorId={vendorId}
                handleModalClick={this.handleModalClick}
              />
            </ModalBox>
          </div>
        )}
      </ContainerProofOf>
    );
  }
}

export default connect(
  state => ({
    isLoading: state.getIn(['proofOfAddress', 'isLoading']),
    proofOfAddressFiles: state.getIn(['proofOfAddress', 'vendorsProofOfAddress']),
  }),
  {
    deletePoAd: requestDeletePoAd,
  }
)(ProofOfAddress);
