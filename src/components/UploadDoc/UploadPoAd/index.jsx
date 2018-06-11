import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import FormData from 'form-data';

import { ChooseDoc, ApproveDoc } from 'components/UploadDoc/_common/index';
import { requestUploadPoAd } from 'actions/documents';

class UploadPoAd extends Component {
  static propTypes = {
    propertyId: PropTypes.string.isRequired,
    vendorId: PropTypes.number.isRequired,
    handleModalClick: PropTypes.func.isRequired,
    uploadPoAd: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      accepted: [],
      rejected: [],
      typeOfDoc: '',
      isConfirmed: '',
    };
  }

  cancelPreview = file => window.URL.revokeObjectURL(file.preview);

  handleOnDrop = (accepted, rejected) => {
    this.setState({
      accepted,
      rejected,
    });
  };

  handleCancelAccepted = () => {
    const { accepted } = this.state;
    accepted.forEach(file => this.cancelPreview(file));

    this.setState({
      accepted: [],
      typeOfDoc: '',
      isConfirmed: '',
    });
  };

  handleSelectTypeOfDoc = ({ target }) => {
    this.setState({
      typeOfDoc: target.value,
    });
  };

  handleConfirm = ({ target }) => {
    this.setState({
      isConfirmed: target.value,
    });
  };

  handleUploadPoAd = () => {
    const { uploadPoAd, handleModalClick, propertyId, vendorId } = this.props;
    const { accepted, isConfirmed, typeOfDoc } = this.state;
    const [image] = accepted;
    const data = new FormData();

    data.append('file', image);
    data.append('type', typeOfDoc);
    data.append('confirm', isConfirmed);

    accepted.forEach(file => this.cancelPreview(file));

    uploadPoAd({ propertyId, vendorId: vendorId.toString(), body: data });
    handleModalClick();
  };

  render() {
    const { accepted, rejected, typeOfDoc, isConfirmed } = this.state;
    const isDisabled = isEmpty(accepted) || typeOfDoc === '' || isConfirmed === '';
    const [file] = accepted;
    return (
      <div>
        {accepted.length > 0 && rejected.length === 0 ? (
          <ApproveDoc
            file={file}
            cancelAccepted={this.handleCancelAccepted}
            uploadApproved={this.handleUploadPoAd}
            selectTypeOfDoc={this.handleSelectTypeOfDoc}
            confirm={this.handleConfirm}
            isDisabled={isDisabled}
            isConfirmed={isConfirmed}
          />
        ) : (
          <ChooseDoc
            title="Add proof of address"
            description="Add a close-up photo of the vendor's proof of address making sure it is in clear view and in focus."
            onDrop={this.handleOnDrop}
            errorMessage={
              rejected.length > 0 ? 'Please choose one png/jpeg/pdf at the time.' : null
            }
          />
        )}
      </div>
    );
  }
}

export default connect(null, {
  uploadPoAd: requestUploadPoAd,
})(UploadPoAd);
