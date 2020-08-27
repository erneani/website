import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import Card from "./Card";
import { Colors } from "styles";

const jobExperiences = [
  {
    title: "Desenvolvedor Front End",
    enterprise: "IMD/UFRN",
    period: "junho de 2020 até o momento",
    description:
      "Ao trabalhar no IMD, pude desenvolver aplicações para grandes empresas do mercado utilizando tecnologias de ponta como React, Material UI, Autenticação JWT, implementando permissões e outras funcionalidades.",
    tags: ["React", "CSS in JS", "JWT Auth", "Material UI"],
  },
  {
    title: "Desenvolvedor Front End",
    enterprise: "SINFO",
    period: "de março/2020 até junho/2020",
    description:
      "Na SINFO, tive oportunidade de desenvolver aplicações para a Universidade Federal do Rio Grande do Norte utilizando Vue.js, Bootstrap, Pug, JQuery.",
    tags: ["VueJS", "Bootstrap", "Webpack", "SASS", "PUG", "Jquery"],
  },
  {
    title: "Desenvolvedor Front End - UI/UX",
    enterprise: "B2SOFT",
    period: "de março/2019 até março/2020",
    description:
      "Como desenvolvedor Front End na B2SOFT, aprendi bastante sobre React, React Native, aplicações em tempo real, Padrões de Projeto e Engenharia de Software enquanto tive a oportunidade de prototipar produtos valiosos da empresa.",
    tags: [
      "React",
      "React Native",
      "Bootstrap",
      "CSS in JS",
      "Prototipação UI/UX",
    ],
  },
  {
    title: "Desenvolvedor Front End",
    enterprise: "Prefeitura Municipal de Ceará-Mirim",
    period: "de agosto/2018 até novembro/2018",
    description:
      "Com o desafio de criar um sistema que fosse leve e performático, atuei como Desenvolvedor Front End utilizando PHP, Bootstrap e diversos conhecimentos de Shell para dar vida ao sistema da Secretaria Municipal de Educação Básica de Ceará-Mirim.",
    tags: ["Bootstrap", "PHP", "Algoritmos", "Bash", "Devops", "Redes"],
  },
];

const Experiences = () => (
  <Container maxWidth="lg">
    <Box textAlign="center" mt={6} mb={3}>
      <Box
        fontFamily="Raleway"
        fontSize="48px"
        fontWeight="bold"
        mb={2.5}
        color={Colors.primary}
      >
        Atuação profissional
      </Box>
      <Box fontSize="18px" p={2}>
        Especialista em <b>interfaces</b>, atuo principalmente como{" "}
        <b>desenvolvedor Front End</b> e <b>designer UI/UX</b>. Além disso,
        tenho conhecimento em <b>desenvolvimento Backend</b>,{" "}
        <b>Banco de Dados</b> e <b>Mobile</b> para realizar qualquer projeto de
        maneira independente.
      </Box>
    </Box>
    <Box mb={6}>
      <Grid container spacing={2}>
        {jobExperiences.map((experience) => (
          <Grid item sm={12} md={6}>
            <Card
              title={experience.title}
              enterprise={experience.enterprise}
              period={experience.period}
              description={experience.description}
              tags={experience.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Experiences;
