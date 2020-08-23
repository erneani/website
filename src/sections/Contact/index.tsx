import React from "react";
import { Box, Container, IconButton } from "@material-ui/core";
import { Colors } from "styles";

import LinkedinIcon from "assets/images/linkedin_icon.svg";
import GithubIcon from "assets/images/github_icon.svg";

export default function Contact() {
  return (
    <Box bgcolor={Colors.primary}>
      <Container maxWidth="sm">
        <Box textAlign="center" py={6} color={Colors.white}>
          <Box fontFamily="Raleway" fontSize="48px" fontWeight="bold" mb={2}>
            Entre em contato
          </Box>
          <Box fontSize="24px">Que tal falar sobre algum projeto?</Box>
          <Box fontSize="18px" p={2}>
            <Box>viniciusernanicarvalho@gmail.com</Box>
            <Box>+55 (84) 99147-9189</Box>
            <Box>@erneani</Box>
          </Box>
          <Box>
            <a
              href="https://github.com/erneani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <img
                  src={GithubIcon}
                  alt="Github brand with Octocat shadow in and white background"
                />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/vin%C3%ADcius-ernani-carvalho-3ba779174/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <img
                  src={LinkedinIcon}
                  alt="Github brand with Octocat shadow in and white background"
                />
              </IconButton>
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
