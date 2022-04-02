import styled from "styled-components";

interface IPostCall {
  title: string;
  abstract: string;
  tags: string[];
}

export default function PostCall({ title, abstract, tags }: IPostCall) {
  return (
    <Container>
      <Title>{title}</Title>
      <Abstract>{abstract}</Abstract>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  font-family: "Lora", serif;
  font-size: 20px;
  margin: 0;
`;

const Abstract = styled.p`
  margin: 0;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Tag = styled.div`
  padding: 4px 8px;
  color: #ffffff;
  background-color: rgba(117, 139, 253, 0.75);
  border-radius: 3px;
  font-size: 14px;
`;
