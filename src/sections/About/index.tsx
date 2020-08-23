import React from "react";
import { Box, Container } from "@material-ui/core";
import { Colors } from "styles";

export default function About() {
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
          Olá, me chamo Ernani!
        </Box>
        <Box fontSize="18px" p={2}>
          Sou estudante de <b>TI com ênfase em Ciência da Computação</b>{" "}
          apaixonado por desenvolvimento de <b>Interfaces</b> (web e mobile),
          <b>aplicações web</b> e <b>Design</b> (UI e UX). Além disso, sou
          entusiasta da área da <b>Data Science</b> e <b>pesquisador</b> nas
          horas vagas.
        </Box>
      </Box>
    </Container>
  );
}
