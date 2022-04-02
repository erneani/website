import styled from "styled-components";
import Image from "next/image";

export default function Footer() {
  return (
    <Wrapper>
      <Image
        src="/assets/white-logo.svg"
        alt="Logo com um quadrado de borda traçada contendo 2 números 1 e 2 números 0 em cada um de seus quadrantes."
        width="164px"
        height="50px"
      />
      <Separator />
      <Copyright>
        © 2020-2022 Vinícius Ernani. Todos os direitos reservados
      </Copyright>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  background-color: #758bfd;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Separator = styled.div`
  border-top: 2px solid rgba(255, 255, 255, 0.5);
`;

const Copyright = styled.p`
  margin: 0px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
`;
