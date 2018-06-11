import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestDeleteVendor } from 'actions/vendors';
import { ModalBox } from '@housesimple/react-components';
import { ControlButton } from 'components/_common/Styled';
import {
  RemoveVendorContainer,
  ModalContent,
  Title,
  Text,
  ControlsContainer,
  Button,
} from './style';

class RemoveVendor extends PureComponent {
  static propTypes = {
    propertyId: PropTypes.string.isRequired,
    vendorId: PropTypes.number.isRequired,
    deleteVendor: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleOpenModal = e => {
    e.preventDefault();
    this.setState({ isOpen: true });
  };

  handleCloseModal = e => {
    e.preventDefault();
    this.setState({ isOpen: false });
  };

  handleRemoveVendor = e => {
    e.preventDefault();

    const { propertyId, vendorId, deleteVendor } = this.props;

    deleteVendor({ propertyId, vendorId });
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <RemoveVendorContainer>
        <ControlButton type="link" onClick={this.handleOpenModal}>
          Remove
        </ControlButton>

        <ModalBox
          isOpen={isOpen}
          onClose={this.handleCloseModal}
          noCloseLabel
          contentLabel="Remove Vendor"
          appElement={document.querySelector('#app')}
        >
          <ModalContent>
            <Title>Are you sure you want to remove this vendor?</Title>
            <Text>
              Please bear in mind that all legal owners must be registered on the account.
            </Text>
            <ControlsContainer>
              <Button onClick={this.handleCloseModal} type="secondary">
                No
              </Button>
              <Button onClick={this.handleRemoveVendor}>Yes, remove</Button>
            </ControlsContainer>
          </ModalContent>
        </ModalBox>
      </RemoveVendorContainer>
    );
  }
}

export default connect(null, {
  deleteVendor: requestDeleteVendor,
})(RemoveVendor);
