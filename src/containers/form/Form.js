import React, { useState, useEffect } from "react";
import { PropTypes } from 'prop-types';
import styled from "@emotion/styled";

import { Error, CurrencySelect, CryptoCurrencySelect } from "../../components";
import { MONEDAS } from "../../shared";
import { fetchBaseData } from "../../services";

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export const Form = ({ setMoneda, setCriptoMoneda }) => {
  //states
  const [listaCripto, setListaCripto] = useState(undefined);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState(undefined);
  const [cryptoCurrency, setCryptoCurrency] = useState(undefined);


  // Ejecutar llamdo a la API
  useEffect(() => {
    fetchBaseData().then(data => setListaCripto(data));
  }, []);

  //cuando el usuario hace submit
  const cotizarMoneda = (e) => {
    e.preventDefault();
    //pasar los datos al componente principal
    setError(currency.trim() === "" || cryptoCurrency.trim() === "");
    setMoneda(currency);
    setCriptoMoneda(cryptoCurrency);
  };

  return (
    <form onSubmit={cotizarMoneda}>
      {error ? <Error mensaje="Todos los campos son obligatorios " /> : null}
      <CurrencySelect label="Elige tu Criptomoneda" options={MONEDAS} onChange={setCurrency} />
      <CryptoCurrencySelect label="Elige tu Criptomoneda" options={listaCripto} onChange={setCryptoCurrency} />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

Form.propTypes = {
  setMoneda: PropTypes.func,
  setCriptoMoneda: PropTypes.func,
};