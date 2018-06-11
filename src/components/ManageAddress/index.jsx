import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';

import { Spinner, PostcodeLookup, Button, Bin } from '@housesimple/react-components';
import {
  addAddressToState,
  deleteAddressFromState,
  requestDeleteAddress,
  requestGetAddressesList,
  requestGetAddressInfo,
  requestAddAddress,
} from 'actions/addresses';

import { LoaderWrapper } from 'components/_common/Styled';
import { Container, AddressContainer, DeleteButton, AddAddressContainer } from './style';

const propTypes = {
  vendorId: PropTypes.number.isRequired,
  addresses: PropTypes.shape({}).isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  deleteAddress: PropTypes.func.isRequired,
  addressToState: PropTypes.func.isRequired,
  removeAddressFromState: PropTypes.func.isRequired,
  getAddressesList: PropTypes.func.isRequired,
  getAddressInfo: PropTypes.func.isRequired,
  addAddress: PropTypes.func.isRequired,
  addressesList: PropTypes.instanceOf(List).isRequired,
};

const ManageAddress = ({
  vendorId,
  addresses,
  isDisabled,
  isLoading,
  deleteAddress,
  addressToState,
  removeAddressFromState,
  getAddressesList,
  addressesList,
  getAddressInfo,
  addAddress,
}) => {
  const handleAddAddressToState = e => {
    e.preventDefault();

    addressToState({ vendorId: vendorId.toString() });
  };

  const handleAddressSelect = id => {
    getAddressInfo({ id, vendorId: vendorId.toString() });
  };

  const handleDeleteAddress = addressId => e => {
    e.preventDefault();

    if (addressId === undefined) {
      removeAddressFromState({ vendorId: vendorId.toString() });
    } else {
      deleteAddress({ vendorId: vendorId.toString(), addressId });
    }
  };

  const handleOnSearch = postcode => {
    getAddressesList({ postcode, vendorId: vendorId.toString() });
  };

  const handleAddAddress = address => {
    addAddress({ vendorId: vendorId.toString(), body: address });
  };

  const vendorAddresses = addresses.get(vendorId.toString());

  return (
    <Container>
      {isLoading && (
        <LoaderWrapper>
          <Spinner fill="#0099CF" />
        </LoaderWrapper>
      )}

      <div>
        {vendorAddresses.map(address => (
          <AddressContainer key={address.toJS().id || 'temporaryId'}>
            <PostcodeLookup
              address={address.toJS()}
              addressList={address.toJS().id ? [] : addressesList.toJS()}
              onSearch={handleOnSearch}
              onAddressSelect={handleAddressSelect}
              onConfirm={handleAddAddress}
              readOnly={!!address.toJS().id}
            />
            <DeleteButton onClick={handleDeleteAddress(address.toJS().id)} type="link">
              <Bin width={20} height={20} />
            </DeleteButton>
          </AddressContainer>
        ))}
      </div>
      <AddAddressContainer>
        <Button onClick={handleAddAddressToState} type="secondary" disabled={isDisabled}>
          + Add address
        </Button>
      </AddAddressContainer>
    </Container>
  );
};

ManageAddress.propTypes = propTypes;

export default connect(
  state => ({
    isLoading: state.getIn(['addresses', 'isLoading']),
    isDisabled: state.getIn(['addresses', 'isDisabled']),
    addresses: state.getIn(['addresses', 'addresses']),
    addressesList: state.getIn(['addresses', 'addressesList']),
  }),
  {
    deleteAddress: requestDeleteAddress,
    addressToState: addAddressToState,
    removeAddressFromState: deleteAddressFromState,
    getAddressesList: requestGetAddressesList,
    getAddressInfo: requestGetAddressInfo,
    addAddress: requestAddAddress,
  }
)(ManageAddress);
