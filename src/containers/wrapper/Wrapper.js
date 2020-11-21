import React, { useContext } from "react";
import styled from "@emotion/styled";

import imagen from "../../assets/images/cryptomonedas.png";
import { Form } from "../";
import { Spiner, Cotizacion } from "../../components";
import { CurrencyContext } from "../../context/CurrencyContext";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
`;

const Image = styled.img`
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

export const Wrapper = () => {
  const { isLoading } = useContext(CurrencyContext);

  return (
    <Container>
      <div>
        <Image src={imagen} alt="iamgen cripto" />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas Al Instante</Heading>
        <Form />
        {isLoading ? <Spiner /> : <Cotizacion />}
      </div>
    </Container>
  )
};
