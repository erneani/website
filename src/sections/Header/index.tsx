import React from "react";
import { Box } from "@material-ui/core";
import { Colors } from "styles";

import Logo from "assets/images/Logo.svg";

const anchors = [
  {
    title: "Início",
    url: "#showcase",
    isSelected: false,
  },
  {
    title: "Sobre mim",
    url: "#about",
    isSelected: false,
  },
  {
    title: "Experiências",
    url: "#experiences",
    isSelected: false,
  },
  {
    title: "Projetos",
    url: "#projects",
    isSelected: false,
  },
  {
    title: "Contato",
    url: "#contact",
    isSelected: false,
  },
];

export default function Header() {
  return (
    <Box
      width="100vw"
      position="fixed"
      display="inline-flex"
      bgcolor={Colors.primary}
    >
      <Box>
        <img
          src={Logo}
          alt="Uma letra V e uma letra E escritas com caligrafia arredondada e sem serifas"
        />
      </Box>
      <Box component="nav">
        {anchors.map((anchor) => (
          <
          <a href={anchor.url}>{anchor.title}</a>
        ))}
      </Box>
    </Box>
  );
}
