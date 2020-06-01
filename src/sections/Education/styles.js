import styled from "styled-components";
import { colors, fonts, ranges, shadows } from "../../mainStyles";

export const Container = styled.section`
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  display: flex;
`;

export const EducationImage = styled.img`
  max-width: 600px;
  padding: ${ranges.extraLarge};
`;

export const Content = styled.div`
  padding: 0;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: ${fonts.sizes.extraLarge};
  color: ${colors.primary};
`;

export const EducationList = styled.ul`
  box-shadow: ${shadows.card};
  padding: 0;
`;
