import styled from "styled-components";
import { colors, borders, dimensions, fonts, ranges } from "../../mainStyles";

export const Container = styled.li`
  border-top-left-radius: ${dimensions.small};
  border-top-right-radius: ${dimensions.small};
  list-style: none;
  padding: ${ranges.smaller} ${ranges.regular};
  border: ${borders.thin};
  color: ${colors.black};

  & + & {
    border-radius: 0;
    border-top: none;
  }

  &:last-child {
    border-bottom-left-radius: ${dimensions.small};
    border-bottom-right-radius: ${dimensions.small};
  }
`;

export const Title = styled.h4`
  font-size: ${fonts.sizes.large};
  margin: 0;
  margin-bottom: ${ranges.extraSmall};
  color: ${colors.primary};
`;

export const Subtitle = styled.h5`
  font-size: ${fonts.sizes.regular};
  font-weight: 400;
  margin: 0;
  margin-bottom: ${ranges.extraSmall};
`;

export const Lettering = styled.p`
  font-size: ${fonts.sizes.small};
  margin: 0;
  margin-bottom: ${ranges.regular};
`;

export const DetailList = styled.ul`
  padding: 0;
`;

export const DetailItem = styled.li`
  list-style: none;
  padding: ${ranges.extraSmall} 0;

  &::before {
    background-color: ${colors.primary};
    border-radius: ${dimensions.small};
    margin-right: ${ranges.small};
    content: ".";
    height: ${dimensions.regular};
    color: transparent;
  }
`;
