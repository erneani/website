import styled from "styled-components";

// Fonts
export const fonts = {
  sizes: {
    small: "12px",
    regular: "16px",
    medium: "18px",
    large: "24px",
    extraLarge: "32px",
  },
};

// Colors
export const colors = {
  primary: "#8000FF",
  white: "#FFFFFF",
  black: "#2B2B2B",
};

// Dimensions
export const dimensions = {
  extraSmall: "5px",
  small: "10px",
  regular: "15px",
  large: "20px",
  extraLarge: "25px",
};

export const ranges = {
  extraSmall: "0.25rem",
  small: "0.5rem",
  smaller: "0.75rem",
  regular: "1rem",
  large: "1.5rem",
  extraLarge: "2rem",
  overwhelmingLarge: "4rem",
};

// Timings
export const Timing = {
  overwhelmingSmall: "0.1s",
  small: "0.3s",
  regular: "0.5s",
  large: "0.7s",
  veryLarge: "1s",
};

// Boundaries
export const borders = {
  thin: "1px solid rgba(78, 78, 78, 0.35)",
  rounded: "50px",
};

export const shadows = {
  vertical: `0px 0px 30px rgba(78, 78, 78, 0.2)`,
};

// Components
export const CallToAction = styled.button`
  background-color: ${colors.primary};
  border-radius: ${borders.rounded};
  transition: ${Timing.small};
  padding: ${ranges.smaller} ${ranges.overwhelmingLarge};
  border: 1px solid ${colors.primary};
  color: ${colors.white};

  &:hover {
    background-color: color: ${colors.white};
  }
`;

export const Texts = {
  Primary: styled.span`
    color: ${colors.primary};
  `,
};
