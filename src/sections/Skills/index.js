import React from "react";
import { Container, Title, CardList } from "./styles";
import SkillCard from "../../components/SkillCard";
import InterfaceDevelopment from "../../assets/imgs/interface_development.svg";
import MobileDev from "../../assets/imgs/mobile_dev.svg";
import Webdesign from "../../assets/imgs/webdesign.svg";

const Skills = () => {
  const cards = [
    {
      image: InterfaceDevelopment,
      title: "Design de Interfaces",
      text:
        "Seja o Design de um sistema ou de um aplicativo, crio interfaces e protótipos que chamam atenção e cativam o usuário",
      tags: ["Figma", "UI", "UX", "Adobe XD", "Ilustrações", "Animações"],
    },
    {
      image: Webdesign,
      title: "Desenvolvimento de Aplicações WEB",
      text:
        "De páginas de divulgação à sistemas de gerência, desenvolvo aplicações WEB com foco no Usuário",
      tags: [
        "React",
        "SASS",
        "Boostrap",
        "Node.js",
        "RestAPI",
        "Django",
        "Responsividade",
      ],
    },
    {
      image: MobileDev,
      title: "Criação de Aplicativos",
      text:
        "Um aplicativo para entrar em contato com clientes ou vender online? Independente da situação, desenvolvo aplicativos que facilitam seu dia a dia",
      tags: [
        "React Native",
        "Java",
        "React Navigation",
        "Styled Components",
        "Animações",
      ],
    },
  ];

  return (
    <Container>
      <Title>Minhas habilidades</Title>
      <CardList>
        {cards.map((card) => (
          <SkillCard
            image={card.image}
            title={card.title}
            tags={card.tags}
            text={card.text}
          />
        ))}
      </CardList>
    </Container>
  );
};

export default Skills;
