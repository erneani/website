import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { Colors } from "styles";

type ExperiencesCardType = {
  title: string;
  enterprise: string;
  period: string;
  description: string;
  tags: string[];
};

const Card = ({
  title,
  enterprise,
  period,
  description,
  tags,
}: ExperiencesCardType) => (
  <Container>
    <Box
      fontFamily="Raleway"
      fontSize={24}
      fontWeight="bold"
      color={Colors.primary}
    >
      {enterprise}
    </Box>
    <Box fontFamily="Raleway" fontSize={24} color={Colors.secondary}>
      {title}
    </Box>
    <Box mt={0.5} mb={2} fontFamily="Raleway" fontSize={16}>
      {period}
    </Box>
    <Box mb={2} fontFamily="Raleway" fontSize={16}>
      {description}
    </Box>
    <Box display="inline-flex" flexWrap="wrap">
      {tags.map((tag) => (
        <StyledBox fontFamily="Raleway">{tag}</StyledBox>
      ))}
    </Box>
  </Container>
);

const Container = styled(Box)`
  border: 2px solid ${Colors.primary};
  border-radius: 5px;
  padding: 15px 30px;
  flex-direction: column;
`;

const StyledBox = styled(Box)`
  background-color: ${Colors.secondary};
  color: ${Colors.white};
  padding: 5px 20px;
  border-radius: 50px;
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 5px;

  &:last-child {
    margin-right: 0px;
  }
`;

export default Card;
