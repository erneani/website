import React from "react";
import {
  Container,
  EducationImage,
  Content,
  Title,
  EducationList,
} from "./styles";
import EducationSVG from "../../assets/imgs/education.svg";
import EducationItem from "../../components/EducationItem";

const Education = () => {
  const educationList = [
    {
      formation: "Técnico em Informática",
      school:
        "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
      period: "De 2015 à 2019",
      details: [
        "Monitor de Eletroeletrônica",
        "Participação no Grupo de Robótica",
      ],
    },
    {
      formation: "Técnico em Informática para WEB",
      school: "Instituto Metrópole Digital",
      period: "De 2018 à 2021",
      details: [],
    },
    {
      formation: "Graduação em Tecnologia da Informação",
      school: "Universidade Federal do Rio Grande do Norte",
      period: "De 2019 à 2022",
      details: [],
    },
  ];

  return (
    <Container>
      <EducationImage src={EducationSVG} />
      <Content>
        <Title>Formação</Title>
        <EducationList>
          {educationList.map((education) => (
            <EducationItem
              formation={education.formation}
              school={education.school}
              period={education.period}
              details={education.details}
            />
          ))}
        </EducationList>
      </Content>
    </Container>
  );
};

export default Education;
