import React from "react";
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

const Presio = styled.p`
  font-size: 30px;

  span {
    font-weight: bold;
  }
`;

const Cotizacion = ({ resultado }) => {
  const pruevaResultado = Object.keys(resultado);
  if (pruevaResultado.length === 0) {
    return null;
  }

  return (
    <ResultadoDiv>
      <Presio>
        El precio es: <Presio>{resultado.PRICE}</Presio>
      </Presio>
      <Info>
        Precio mas alto del día: <span>{resultado.HIGHDAY}</span>
      </Info>
      <Info>
        Precio mas bajo del día: <span>{resultado.LOWDAY}</span>
      </Info>
      <Info>
        Variacion últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span>
      </Info>
      <Info>
        Última Actualización: <span>{resultado.PRICE}</span>
      </Info>
    </ResultadoDiv>
  );
};

export default Cotizacion;
