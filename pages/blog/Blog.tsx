import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PostCall from "../../components/PostCall";

export default function Blog() {
  return (
    <div>
      <Header />
      <PostList>
        <RecentPost>Postagens recentes</RecentPost>
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
        <ThatsAll>Isso é tudo, pessoal!</ThatsAll>
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

const RecentPost = styled.h4`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: normal;
  margin: 0px;
`;

const ThatsAll = styled.h4`
  font-family: "Lobster", cursive;
  font-size: 24px;
  margin: 0px;
  font-weight: normal;
`;
