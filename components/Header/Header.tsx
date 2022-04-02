import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <Wrapper>
      <Image
        src="/assets/logo.svg"
        alt="Logo com um quadrado de borda traçada contendo 2 números 1 e 2 números 0 em cada um de seus quadrantes."
        width="164px"
        height="50px"
      />
      <Image
        src="/assets/icons/menu-icon.svg"
        alt="Um ícone de menu em formato de hamburguer."
        width="30px"
        height="25px"
      />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  background-color: #fce762;
`;
