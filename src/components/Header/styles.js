import styled from "styled-components";
import { ranges, colors, Timing, borders, shadows } from "../../mainStyles";

export const Container = styled.nav`
  justify-content: flex-end;
  background-color: ${(props) => (props.onTop ? "transparent" : colors.white)};
  transition: ${Timing.small};
  position: fixed;
  display: flex;
  width: 100%;

  ${(props) =>
    !props.onTop &&
    `
      box-shadow: ${shadows.vertical};
    `}
`;

export const NavList = styled.ul`
  flex-direction: row;
  margin-right: ${ranges.overwhelmingLarge};
  display: flex;
`;

export const Navlink = styled.a`
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  transition: ${Timing.small};
  display: flex;
  color: ${(props) => (props.isSelected ? colors.primary : colors.black)};

  &:hover {
    color: ${colors.primary};
  }

  & + & {
    margin-left: ${ranges.regular};
  }

  ${(props) =>
    props.isSelected &&
    `
    &::after {
      background-color: ${colors.primary};
      content: ".";
      height: ${ranges.extraSmall};
      width: ${ranges.extraLarge};
      color: transparent;
      border-radius: ${borders.rounded};
    }
  `}
`;
