import React, { useState } from "react";
import { PropTypes } from 'prop-types';
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  -webkit-appearance: none;
  padding: 1rem;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

export const CurrencySelect = ({ id = 'currencySelect', label, initialState, options, onChange }) => {
  const [state, setState] = useState(initialState ?? '');

  const handleChange = (e) => {
    const value = e.target.value;
    setState(value);
    onChange(value);
  };

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} onChange={handleChange} value={state}>
        <option value="">- Seleccione -</option>
        {Object.entries(options).map((option) => (
          <option key={option[0]} value={option[0]}>
            {option[1]}
          </option>
        ))}
      </Select>
    </div>
  )
};

CurrencySelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  initialState: PropTypes.any,
  options: PropTypes.any,
  onChange: PropTypes.func,
};