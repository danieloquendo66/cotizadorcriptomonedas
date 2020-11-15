import React, { Fragment, useState } from "react";
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

const useCriptomoneda = (label, stateInicial, opciones) => {
  //state de nuestro custom hoock

  const [state, actualizarState] = useState(stateInicial);

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => actualizarState(e.target.value)} value={state}>
        <option value="">- Seleccione -</option>

        {opciones.map((opc) => (
          <option key={opc.CoinInfo.Id} value={opc.CoinInfo.Name}>
            {opc.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  //Retornar state, interfas y funcion que modifica el state

  return [state, SelectCripto, actualizarState];
};

export default useCriptomoneda;
