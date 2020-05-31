import styled from "styled-components";
import { colors } from "../../mainStyles";

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 0px;
  font-weight: 600;
  font-size: 68px;
  color: ${colors.black};
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  margin-top: 0px;
`;

export const TopVector = styled.img`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
`;

export const BottomVector = styled.img`
  position: absolute;
  z-index: -1;
  bottom: 0;
  right: 0;
`;
