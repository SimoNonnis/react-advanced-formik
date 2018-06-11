import React from 'react';
import PropTypes from 'prop-types';

import { DropFile } from '@housesimple/react-components';

import { Title, Description } from './style';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  acceptText: PropTypes.string,
  errorMessage: PropTypes.string,
  onDrop: PropTypes.func.isRequired,
};

const defaultProps = {
  acceptText: null,
  errorMessage: null,
};

const ChooseDoc = ({ title, description, acceptText, errorMessage, onDrop }) => (
  <div>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <DropFile acceptText={acceptText} errorMessage={errorMessage} onDrop={onDrop} />
  </div>
);

ChooseDoc.propTypes = propTypes;
ChooseDoc.defaultProps = defaultProps;

export default ChooseDoc;
