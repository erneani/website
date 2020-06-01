import React from "react";
import {
  Container,
  CardImage,
  Title,
  Text,
  TagsContainer,
  Tag,
} from "./styles";

const SkillCard = ({ title, text, image, tags }) => (
  <Container>
    <CardImage src={image} />
    <Title>{title}</Title>
    <Text>{text}</Text>
    <TagsContainer>
      {tags.map((tagName) => (
        <Tag>{tagName}</Tag>
      ))}
    </TagsContainer>
  </Container>
);

export default SkillCard;
