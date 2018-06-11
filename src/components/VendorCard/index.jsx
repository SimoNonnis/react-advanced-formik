import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FullForm from 'components/Forms/FullForm';
import modelPayload from 'utils/modelPayload';
import { requestUpdateVendor } from 'actions/vendors';

import { VendorCardOuter } from './style';

class VendorCard extends Component {
  static propTypes = {
    propertyId: PropTypes.string.isRequired,
    vendor: PropTypes.shape({}).isRequired,
    updateVendor: PropTypes.func.isRequired,
    isUpdatingVendor: PropTypes.bool.isRequired,
  };

  handleFormSubmit = (values, actions) => {
    const { propertyId, vendor, updateVendor } = this.props;
    const vendorId = vendor.id;
    const body = modelPayload(values);

    updateVendor({ propertyId, vendorId, body });
    actions.setSubmitting(false);
  };

  render() {
    const { propertyId, vendor, isUpdatingVendor } = this.props;

    return (
      <VendorCardOuter>
        <FullForm
          propertyId={propertyId}
          vendor={vendor}
          handleFormSubmit={this.handleFormSubmit}
          isUpdatingVendor={isUpdatingVendor}
        />
      </VendorCardOuter>
    );
  }
}

export default connect(
  state => ({
    isUpdatingVendor: state.getIn(['updateVendor', 'isUpdatingVendor']),
  }),
  {
    updateVendor: requestUpdateVendor,
  }
)(VendorCard);
