import styled from "styled-components";
import { colors, ranges, fonts } from "../../mainStyles";

export const Container = styled.section`
  padding: ${ranges.overwhelmingLarge} 0;
`;

export const Title = styled.h3`
  text-align: center;
  font-size: ${fonts.sizes.extraLarge};
  color: ${colors.primary};
  margin-bottom: calc(${ranges.overwhelmingLarge} * 2);
`;

export const CardList = styled.ul`
  background-color: ${colors.primary};
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  padding-bottom: ${ranges.overwhelmingLarge};
  display: flex;
  width: 100%;
`;
