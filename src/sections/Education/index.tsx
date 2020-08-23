import React from "react";
import { Box, Container } from "@material-ui/core";
import { Colors } from "styles";

import EducationCard from "./EducationCard";

const educationCardContent = [
  {
    title: "Técnico em Informática",
    year: "2015 - 2019",
    institution:
      "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte",
    extraCurricularActivities: [
      "Monitor de Eletro-Eletrônica",
      "Grupo de Software Livre",
      "Grupo de Robótica",
      "Pesquisador na área de Hardware",
      "Pesquisador na área de Software",
    ],
  },
  {
    title: "Técnico em Informática para Internet",
    year: "2017 - 2021",
    institution: "Instituto Metrópole Digital",
  },
  {
    title: "Bacharelado em Tecnologia da Informação",
    year: "2019 - 2023",
    institution: "Universidade Federal do Rio Grande do Norte",
    extraCurricularActivities: [
      "Pesquisador na área de Desenvolvimento de Software",
    ],
  },
];

export default function Education() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={6}>
        <Box
          fontFamily="Raleway"
          fontSize="48px"
          fontWeight="bold"
          mb={2.5}
          color={Colors.primary}
        >
          Minha formação?
        </Box>
        {educationCardContent.map((content) => (
          <EducationCard {...content} />
        ))}
      </Box>
    </Container>
  );
}
