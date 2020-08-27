import React from "react";
import styled from "styled-components";
import { Box, Button } from "@material-ui/core";
import { Colors } from "styles";
import Illustration from "assets/images/Illustration_svg.svg";

export default function Showcase() {
  return (
    <StyledBox height="100vh">
      <Box
        position="absolute"
        height="100vh"
        width="100%"
        display="flex"
        justifyContent="center"
        overflow="hidden"
      >
        <img src={Illustration} alt="Abstract illustration" />
      </Box>
      <Box
        display="flex"
        width="100%"
        height="100%"
        justifyContent="center"
        textAlign="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box
          fontFamily="Roboto Slab"
          fontWeight="bold"
          color={Colors.white}
          fontSize="64px"
        >
          Vinícius Ernani
        </Box>
        <Box color={Colors.white} p={2} fontSize="24px">
          Desenvolvedor e Designer UI/UX
        </Box>

        <StyledButton>Veja meu curriculum</StyledButton>
      </Box>
    </StyledBox>
  );
}

const StyledBox = styled(Box)`
  background-color: ${Colors.primary};
  background-image: url("assets/images/Illustration_svg.svg");
`;

const StyledButton = styled(Button)`
  background-color: ${Colors.secondary} !important;
  box-shadow: 0px 5px 20px rgba(237, 125, 58, 0.2) !important;
  color: ${Colors.white} !important;
  padding: 10px 20px !important;
  transition: 0.3s ease-out !important;
  text-transform: none !important;
  font-family: "Poppins", Arial, Helvetica, sans-serif !important;

  &:hover {
    background-color: ${Colors.secondaryDark} !important;
  }
`;
