import React from "react";
import {
  Container,
  TopImage,
  Content,
  Title,
  Text,
  AboutImage,
} from "./styles";
import Vector3 from "../../assets/imgs/vector3.svg";
import CodeThinking from "../../assets/imgs/code_thinking.svg";

const About = () => {
  return (
    <Container>
      <TopImage src={Vector3} />
      <Content>
        <Title>Sobre mim</Title>
        <Text>
          Desenvolvedor de Software especialista em Interfaces, sou apaixonado
          por Frontend, UX Design e desafios.
        </Text>
      </Content>
      <AboutImage
        src={CodeThinking}
        alt="Um homem sentado no chão e encostado em um notebook gigante."
      />
    </Container>
  );
};

export default About;
