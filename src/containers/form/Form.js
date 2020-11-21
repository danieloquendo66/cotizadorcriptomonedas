import React, { useContext } from "react";

import { Error, CurrencySelect, CryptoCurrencySelect } from "../../components";
import { CurrencyContext } from "../../context";


export const Form = () => {
  const { error } = useContext(CurrencyContext);

  return (
    <div>
      {error ? <Error mensaje="Todos los campos son obligatorios " /> : null}
      <CurrencySelect label="Elige tu Criptomoneda" />
      <CryptoCurrencySelect label="Elige tu Criptomoneda" />
    </div>
  );
};
