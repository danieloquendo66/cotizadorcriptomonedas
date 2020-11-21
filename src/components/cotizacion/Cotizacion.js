import React, { useContext } from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { CurrencyContext } from "../../context";

const ResultadoDiv = styled.div`
  color: #fff;
`;

const Info = styled.p`
  font-size: 18px;

  span {
    font-weight: bold;
  }
`;

const Price = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

export const Cotizacion = () => {
  const { cryptoCurrencySearch } = useContext(CurrencyContext);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR } = cryptoCurrencySearch ?? {};

  return cryptoCurrencySearch ? (
    <ResultadoDiv>
      <Price>
        El precio es: <span>{PRICE}</span>
      </Price>
      <Info>
        Precio mas alto del día: <span>{HIGHDAY}</span>
      </Info>
      <Info>
        Precio mas bajo del día: <span>{LOWDAY}</span>
      </Info>
      <Info>
        Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actualización: <span>{PRICE}</span>
      </Info>
    </ResultadoDiv>
  ) : null;
};

Cotizacion.propTypes = {
  PRICE: PropTypes.number,
  HIGHDAY: PropTypes.number,
  LOWDAY: PropTypes.number,
  CHANGEPCT24HOUR: PropTypes.number,
};
