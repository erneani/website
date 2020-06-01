import styled from "styled-components";
import {
  colors,
  fonts,
  ranges,
  borders,
  dimensions,
  shadows,
} from "../../mainStyles";

export const Container = styled.li`
  background-color: ${colors.white};
  flex-direction: column;
  justify-content: flex-start;
  border-radius: ${dimensions.small};
  box-shadow: ${shadows.card};
  margin-bottom: calc(${ranges.overwhelmingLarge} + ${ranges.large});
  margin-top: -${ranges.overwhelmingLarge};
  margin-right: ${ranges.extraLarge};
  list-style: none;
  max-width: 300px;
  padding: ${ranges.small} ${ranges.regular};
  border: ${borders.thin};
  display: flex;

  &:last-child {
    margin-left: 0;
  }
`;

export const CardImage = styled.img`
  max-width: calc(300px - ${ranges.overwhelmingLarge});
  padding: 0 ${ranges.large};
  margin: 0 auto;
  width: 100%;
  height: 200px;
`;

export const Title = styled.h4`
  text-align: center;
  font-size: ${fonts.sizes.large};
  margin: 0;
  color: ${colors.black};
`;

export const Text = styled.p`
  color: ${colors.black};
`;

export const TagsContainer = styled.ul`
  flex-direction: row;
  align-self: flex-end;
  flex-wrap: wrap;
  display: flex;
  padding: 0;
`;

export const Tag = styled.li`
  background-color: ${colors.primary};
  margin-bottom: ${ranges.extraSmall};
  border-radius: ${borders.rounded};
  margin-right: ${ranges.extraSmall};
  font-weight: bold;
  list-style: none;
  font-size: ${fonts.sizes.smaller};
  padding: ${ranges.small} ${ranges.regular};
  color: ${colors.white};
`;
