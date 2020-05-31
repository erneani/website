import React from "react";
import { Container, Title, Subtitle, TopVector, BottomVector } from "./styles";
import { CallToAction, Texts } from "../../mainStyles";
import FirstVector from "../../assets/imgs/vector2.svg";
import SecondVector from "../../assets/imgs/vector1.svg";

const Showcase = () => (
  <Container>
    <TopVector src={FirstVector} />
    <Title>
      Olá, eu sou <Texts.Primary>Ernani</Texts.Primary>
    </Title>
    <Subtitle>
      Sou um <Texts.Primary>Desenvolvedor</Texts.Primary>
    </Subtitle>
    <CallToAction>Veja meu curriculum</CallToAction>
    <BottomVector src={SecondVector} />
  </Container>
);

export default Showcase;
