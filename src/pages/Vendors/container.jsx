import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { P, Spinner } from '@housesimple/react-components';
import ConnectedBanner from 'components/Banner';
import { requestGetVendors } from 'actions/vendors';
import { requestGetDocumentTypeList } from 'actions/documents';
import PageLayout from 'components/PageLayout';
import VendorCard from 'components/VendorCard';
import AddVendor from 'components/AddVendor';

import { Container, LoaderOuter } from './style';

class VendorsContainer extends Component {
  static propTypes = {
    allVendors: PropTypes.instanceOf(List).isRequired,
    isFetchingVendors: PropTypes.bool.isRequired,
    isUpdatingVendor: PropTypes.bool.isRequired,
    isAddingVendor: PropTypes.bool.isRequired,
    isDeletingVendor: PropTypes.bool.isRequired,
    getDocumentTypeList: PropTypes.func.isRequired,
    getVendors: PropTypes.func.isRequired,
    propertyId: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { getDocumentTypeList, getVendors, propertyId } = this.props;

    getDocumentTypeList();
    getVendors({ propertyId });
  }

  render() {
    const {
      isFetchingVendors,
      isUpdatingVendor,
      isAddingVendor,
      isDeletingVendor,
      allVendors,
      propertyId,
    } = this.props;

    return (
      <Container>
        <ConnectedBanner />
        {(isFetchingVendors || isUpdatingVendor || isAddingVendor || isDeletingVendor) && (
          <LoaderOuter>
            <Spinner fill="#0099CF" />
          </LoaderOuter>
        )}
        <PageLayout title="Vendor Details" legacy>
          <P>
            All estate agents have a legal obligation to conduct identification checks on their
            customers in accordance with the Anti-Money Laundering legislation.
          </P>
          <AddVendor propertyId={propertyId} />
          <div>
            {allVendors.map(vendor => (
              <VendorCard propertyId={propertyId} vendor={vendor} key={vendor.id} />
            ))}
          </div>
        </PageLayout>
      </Container>
    );
  }
}

export default connect(
  state => ({
    isFetchingVendors: state.getIn(['vendors', 'isFetchingVendors']),
    isUpdatingVendor: state.getIn(['updateVendor', 'isUpdatingVendor']),
    isAddingVendor: state.getIn(['addVendor', 'isAddingVendor']),
    isDeletingVendor: state.getIn(['deleteVendor', 'isDeletingVendor']),
    allVendors: state.getIn(['vendors', 'vendors']),
  }),
  {
    getDocumentTypeList: requestGetDocumentTypeList,
    getVendors: requestGetVendors,
  }
)(VendorsContainer);
