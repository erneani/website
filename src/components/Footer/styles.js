import styled from "styled-components";
import { colors, ranges } from "../../mainStyles";

export const Container = styled.footer`
  flex-direction: row;
  margin-top: ${ranges.extraLarge};
  display: flex;
`;

export const Content = styled.div`
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  align-self: flex-end;
  text-align: center;
  position: absolute;
  display: flex;
  margin: ${ranges.regular};
  width: calc(100% - ${ranges.extraLarge});
`;

export const Text = styled.p`
  color: ${colors.white};
  margin: 0;
`;

export const Vector = styled.img`
  z-index: -1;
  width: 100%;
`;
