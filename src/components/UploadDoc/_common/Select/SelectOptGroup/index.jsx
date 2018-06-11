import React from 'react';
import PropTypes from 'prop-types';

import { Label, SelectWrap, SelectStyled } from '../style';

const propTypes = {
  label: PropTypes.string.isRequired,
  optionsListA: PropTypes.arrayOf(
    PropTypes.shape({
      list: PropTypes.string,
      type: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  optionsListB: PropTypes.arrayOf(
    PropTypes.shape({
      list: PropTypes.string,
      type: PropTypes.string,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

const SelectOptGroup = ({ label, optionsListA, optionsListB, onChange }) => {
  const getOptions = options =>
    options.map(option => (
      <option value={option.type} key={option.type}>
        {option.label}
      </option>
    ));

  return (
    <div>
      <Label htmlFor="PoId">{label}</Label>
      <SelectWrap>
        <SelectStyled name="PoId" id="PoId" autoComplete="nope" onChange={onChange}>
          <option value="">- Select Photo ID -</option>
          <optgroup label="Provide one of the following:">{getOptions(optionsListA)}</optgroup>
          <optgroup label="Alternatively, provide two of the following:">
            {getOptions(optionsListB)}
          </optgroup>
        </SelectStyled>
      </SelectWrap>
    </div>
  );
};

SelectOptGroup.propTypes = propTypes;

export default SelectOptGroup;
