import React from "react";
import {
  Container,
  Title,
  Subtitle,
  Lettering,
  DetailList,
  DetailItem,
} from "./styles";

const EducationItem = ({ formation, school, period, details }) => (
  <Container>
    <Title>{formation}</Title>
    <Subtitle>{school}</Subtitle>
    <Lettering>({period})</Lettering>
    <DetailList>
      {details.map((detail) => (
        <DetailItem>{detail}</DetailItem>
      ))}
    </DetailList>
  </Container>
);

export default EducationItem;
