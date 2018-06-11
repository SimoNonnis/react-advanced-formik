import React from 'react';
import PropTypes from 'prop-types';

import { Label, SelectWrap, SelectStyled } from '../style';

const propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      list: PropTypes.string,
      type: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

const Select = ({ label, options, onChange }) => {
  const getOptions = options.map(option => (
    <option value={option.type} key={option.type}>
      {option.label}
    </option>
  ));

  return (
    <div>
      <Label htmlFor="PoAd">{label}</Label>
      <SelectWrap>
        <SelectStyled name="PoAd" id="PoAd" autoComplete="nope" onChange={onChange}>
          <option value="">- Select Proof of Address-</option>
          {getOptions}
        </SelectStyled>
      </SelectWrap>
    </div>
  );
};

Select.propTypes = propTypes;

export default Select;
