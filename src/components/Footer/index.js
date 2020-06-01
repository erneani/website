import React from "react";
import { Container, Content, Text, Vector } from "./styles";
import VectorSVG from "../../assets/imgs/vector4.svg";

const Footer = () => (
  <Container>
    <Content>
      <Text>
        &copy; 2020
        <br />
        Made with &hearts; by Ernani
      </Text>
    </Content>
    <Vector src={VectorSVG} />
  </Container>
);

export default Footer;
