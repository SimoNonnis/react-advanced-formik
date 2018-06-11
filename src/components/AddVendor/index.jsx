import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, ModalBox } from '@housesimple/react-components';
import AddVendorForm from 'components/Forms/AddVendorForm';
import { requestAddVendor } from 'actions/vendors';
import modelPayload from 'utils/modelPayload';
import rootDomNode from 'utils/rootDomNode';

import { AddVendorContainer } from './style';

class AddVendor extends PureComponent {
  static propTypes = {
    propertyId: PropTypes.string.isRequired,
    addVendor: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleFormSubmit = values => {
    const { propertyId, addVendor } = this.props;
    const body = modelPayload(values);

    addVendor({ propertyId, body });
    this.setState({ isOpen: false });
  };

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <AddVendorContainer>
        <Button onClick={this.handleClick}>+ Add Contact</Button>

        <ModalBox
          isOpen={isOpen}
          onClose={this.handleClick}
          contentLabel="+ Add Contact"
          appElement={rootDomNode}
        >
          <AddVendorForm handleFormSubmit={this.handleFormSubmit} />
        </ModalBox>
      </AddVendorContainer>
    );
  }
}

export default connect(null, {
  addVendor: requestAddVendor,
})(AddVendor);
