import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/blog");
  }, [router]);

  return <LoadingContainer>Carregando...</LoadingContainer>;
}

const LoadingContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  height: 100vh;
`;
