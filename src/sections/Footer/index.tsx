import React from "react";
import { Box, Container, Divider } from "@material-ui/core";
import { Colors } from "styles";

export default function Footer() {
  return (
    <Box bgcolor={Colors.primary} pt={2} pb={4}>
      <Container maxWidth="xs">
        <Divider style={{ borderBottom: `1px solid ${Colors.white}` }} />
        <Box
          color={Colors.white}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt={2}
        >
          <Box>&copy;2020 Vinícius Ernani</Box>
          <Box fontWeight="bold">Feito (com &hearts;) por mim</Box>
        </Box>
      </Container>
    </Box>
  );
}
