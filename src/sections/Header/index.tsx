import React from "react";
import styled from "styled-components";
import { Box, Link } from "@material-ui/core";
import { Colors } from "styles";

import Logo from "assets/images/Logo.svg";

interface isActivable {
  isActive: boolean;
}

const anchors = [
  {
    title: "Início",
    url: "#showcase",
    isActive: true,
  },
  {
    title: "Sobre mim",
    url: "#about",
    isActive: false,
  },
  {
    title: "Experiências",
    url: "#experiences",
    isActive: false,
  },
  {
    title: "Projetos",
    url: "#projects",
    isActive: false,
  },
  {
    title: "Contato",
    url: "#contact",
    isActive: false,
  },
];

export default function Header() {
  return (
    <Box
      width="100%"
      position="fixed"
      display="flex"
      bgcolor={Colors.primary}
      justifyContent="space-between"
      alignItems="center"
      paddingY={1.5}
      zIndex={2000}
    >
      <Box ml={3} zIndex={-1}>
        <Image
          src={Logo}
          alt="Uma letra V e uma letra E escritas com caligrafia arredondada e sem serifas"
        />
      </Box>
      <Box component="nav" display="inline-flex" mr={3}>
        {anchors.map((anchor, index) => (
          <StyledLink key={index} isActive={anchor.isActive} href={anchor.url}>
            {anchor.title}
          </StyledLink>
        ))}
      </Box>
    </Box>
  );
}

const Image = styled.img`
  max-height: 22px;
`;

const StyledLink = styled(Link)<isActivable>`
  font-weight: bold;
  color: ${Colors.white};
  cursor: pointer;

  ${({ isActive }) =>
    isActive &&
    `
    color: ${Colors.secondary};

    &::before {
      content: "";
      position: absolute;
      width: auto;
      height: 2px;
      margin-top: 20px;
      border-radius: 5px;
      background-color: ${Colors.secondary};
    }
  `}

  & + & {
    margin-left: 15px;
  }
`;
