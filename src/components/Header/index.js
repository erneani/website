import React, { useState, useEffect } from "react";
import { Container, NavList, Navlink } from "./styles";

const Header = () => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }, [onTop]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setOnTop(false);
    } else {
      setOnTop(true);
    }
  };

  const links = [
    {
      text: "Sobre mim",
      url: "#aboutMe",
      // isSelected: selectedLink === "#aboutMe",
      isSelected: true,
    },
    {
      text: "Formação",
      url: "#formation",
      isSelected: selectedLink === "#formation",
    },
    {
      text: "Experiência",
      url: "#jobExperiences",
      isSelected: selectedLink === "#jobExperiences",
    },
    {
      text: "Projetos",
      url: "#projects",
      isSelected: selectedLink === "#projects",
    },
    {
      text: "Contato",
      url: "#contact",
      isSelected: selectedLink === "#contact",
    },
  ];

  return (
    <Container onTop={onTop}>
      <NavList>
        {links.map((link) => (
          <Navlink href={link.url} isSelected={link.isSelected}>
            {link.text}
          </Navlink>
        ))}
      </NavList>
    </Container>
  );
};

export default Header;
