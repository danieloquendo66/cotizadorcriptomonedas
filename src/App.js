import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import imagen from "./assets/images/cryptomonedas.png";
import { Form } from "./containers";
import { Spiner, Cotizacion } from "./components";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px_;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

export const App = () => {
  const [moneda, setMoneda] = useState("");
  const [criptoMoneda, setCriptoMoneda] = useState("");
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCiptomoneda = async () => {
      if (moneda === "") return;

      //consultar API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

      const resultado = await axios.get(url);

      //mostrar spiner
      guardarCargando(true);

      //ocultar spiner y mostrar el resultado

      setTimeout(() => {
        //cambiar el satate de cambiando
        guardarCargando(false);

        //guardar cotizacion
        guardarResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
      }, 3000);
    };
    cotizarCiptomoneda();
  }, [moneda, criptoMoneda]);

  // Mostrar spiner o resultado

  const componente = cargando ? (
    <Spiner />
  ) : (
      <Cotizacion result={resultado} />
    );

  return (
    <Contenedor>
      <div>
        <Imagen src={imagen} alt="iamgen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas Al Instante</Heading>
        <Form
          setMoneda={setMoneda}
          setCriptoMoneda={setCriptoMoneda}
        />
        {componente}
      </div>
    </Contenedor>
  );
};
