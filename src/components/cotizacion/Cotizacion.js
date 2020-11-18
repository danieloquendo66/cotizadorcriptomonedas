import React from "react";
import PropTypes from 'prop-types';
import styled from "@emotion/styled";

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

export const Cotizacion = ({ result }) => {
  const pruebaResultado = Object.keys(result);

  return pruebaResultado ? (
    <ResultadoDiv>
      <Price>
        El precio es: <span>{result.span}</span>
      </Price>
      <Info>
        Precio mas alto del día: <span>{result.HIGHDAY}</span>
      </Info>
      <Info>
        Precio mas bajo del día: <span>{result.LOWDAY}</span>
      </Info>
      <Info>
        Variacion últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actualización: <span>{result.PRICE}</span>
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
