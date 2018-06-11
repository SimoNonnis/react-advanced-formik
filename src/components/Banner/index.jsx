import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Caption } from '@housesimple/react-components';
import { clearBanners } from 'actions/banner';
import { Container, AttentionIcon } from './style';

export class Banner extends PureComponent {
  static propTypes = {
    message: PropTypes.string,
    type: PropTypes.string,
    clearAllBanners: PropTypes.func.isRequired,
    dismissTime: PropTypes.number.isRequired,
  };

  static defaultProps = {
    type: null,
    message: null,
  };

  componentDidUpdate() {
    const { clearAllBanners, message, dismissTime } = this.props;
    if (message) {
      setTimeout(() => {
        clearAllBanners();
      }, dismissTime);
    }
  }

  render() {
    const { message, type } = this.props;
    if (!message) {
      return null;
    }
    return (
      <Container type={type}>
        <AttentionIcon width={15} height={15} />
        <Caption spacing="none">{message}</Caption>
      </Container>
    );
  }
}

export default connect(
  state => ({
    type: state.getIn(['banner', 'type']),
    message: state.getIn(['banner', 'message']),
    dismissTime: state.getIn(['banner', 'dismissTime']),
  }),
  {
    clearAllBanners: clearBanners,
  }
)(Banner);
