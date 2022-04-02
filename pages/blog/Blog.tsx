import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostCall from "../../components/PostCall";

export default function Blog() {
  return (
    <div>
      <Header />
      <PostList>
        <PostCall
          title="Uma palavrinha sobre arquitetura de Software"
          abstract="Nós já sabemos sobre a importância e os impactos de uma arquitetura de qualidade... né?"
          tags={["Arquitetura", "Boas práticas"]}
        />
        <PostCall
          title="Uma palavrinha sobre arquitetura de Software"
          abstract="Nós já sabemos sobre a importância e os impactos de uma arquitetura de qualidade... né?"
          tags={["Arquitetura", "Boas práticas"]}
        />
        <PostCall
          title="Uma palavrinha sobre arquitetura de Software"
          abstract="Nós já sabemos sobre a importância e os impactos de uma arquitetura de qualidade... né?"
          tags={["Arquitetura", "Boas práticas"]}
        />
        <PostCall
          title="Uma palavrinha sobre arquitetura de Software"
          abstract="Nós já sabemos sobre a importância e os impactos de uma arquitetura de qualidade... né?"
          tags={["Arquitetura", "Boas práticas"]}
        />
      </PostList>
      <Footer />
    </div>
  );
}

const PostList = styled.main`
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
