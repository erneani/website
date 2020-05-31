import styled from "styled-components";
import { colors, ranges, fonts } from "../../mainStyles";

export const Container = styled.section`
  flex-direction: row;
  display: flex;
  padding: ${ranges.large} ${ranges.overwhelmingLarge};
`;

export const TopImage = styled.img`
  position: absolute;
  z-index: -1;
  right: 0;
  margin-top: calc(-${ranges.large} - 1px);
`;

export const Content = styled.article``;

export const Title = styled.h3`
  margin-top: 0;
  color: ${colors.primary};
  font-size: ${fonts.sizes.extraLarge};
`;

export const Text = styled.p`
  font-size: ${fonts.sizes.large};
  color: ${colors.black};
`;

export const AboutImage = styled.img``;
