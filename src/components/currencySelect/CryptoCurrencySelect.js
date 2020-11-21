import React, { useContext } from "react";
import styled from "@emotion/styled";
import { PropTypes } from 'prop-types';
import { CurrencyContext } from "../../context";

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

export const CryptoCurrencySelect = ({ id, label, onChange }) => {
  const { handleCryptoCurrencyChange, cryptoCurrency, crypoCurrencyData } = useContext(CurrencyContext);

  return (
    <div>
      <Label id={id}>{label}</Label>
      <Select id={id} onChange={handleCryptoCurrencyChange} value={cryptoCurrency}>
        <option value="">- Seleccione -</option>
        {crypoCurrencyData?.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </div>
  );


};

CryptoCurrencySelect.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  initialState: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func,
};
