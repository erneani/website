import React from "react";
import {
  Container,
  TopImage,
  Content,
  Title,
  Text,
  AboutImage,
} from "./styles";
import { Texts, WordBreak } from "../../mainStyles";
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
          por <Texts.Primary>Frontend</Texts.Primary>,{" "}
          <Texts.Primary>UX Design</Texts.Primary> e desafios.
          <WordBreak />
          Atualmente utilizo <Texts.Primary>Javascript</Texts.Primary> na
          construção da maior parte de minhas aplicações, mas também tenho
          proficiência em <Texts.Primary>Python</Texts.Primary> e{" "}
          <Texts.Primary>PHP</Texts.Primary>.
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
