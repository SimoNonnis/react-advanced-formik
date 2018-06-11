import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import FormData from 'form-data';

import { ChooseDoc, ApproveDoc } from 'components/UploadDoc/_common/index';
import { requestUploadPoId } from 'actions/documents';

class UploadPoId extends Component {
  static propTypes = {
    propertyId: PropTypes.string.isRequired,
    vendorId: PropTypes.number.isRequired,
    handleModalClick: PropTypes.func.isRequired,
    uploadPoId: PropTypes.func.isRequired,
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

  handleUploadPoId = () => {
    const { uploadPoId, handleModalClick, propertyId, vendorId } = this.props;
    const { accepted, isConfirmed, typeOfDoc } = this.state;
    const [image] = accepted;
    const data = new FormData();

    data.append('file', image);
    data.append('type', typeOfDoc);
    data.append('confirm', isConfirmed);

    accepted.forEach(file => this.cancelPreview(file));

    uploadPoId({ propertyId, vendorId: vendorId.toString(), body: data });
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
            uploadApproved={this.handleUploadPoId}
            selectTypeOfDoc={this.handleSelectTypeOfDoc}
            confirm={this.handleConfirm}
            isDisabled={isDisabled}
            isConfirmed={isConfirmed}
            optionGroupSelect
          />
        ) : (
          <ChooseDoc
            title="Add photo ID"
            description="Add a close-up photo of the vendor's ID making sure it is in clear view and in focus."
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
  uploadPoId: requestUploadPoId,
})(UploadPoId);
