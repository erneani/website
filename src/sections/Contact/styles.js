import styled from "styled-components";
import { colors, fonts, ranges } from "../../mainStyles";

export const Container = styled.section`
  flex-direction: column;
  justify-content: between;
  align-items: center;
  display: flex;
`;
export const Title = styled.h3`
  font-size: ${fonts.sizes.extraLarge};
  color: ${colors.primary};
`;

export const Text = styled.p`
  text-align: center;
  font-size: ${fonts.sizes.large};
  max-width: 350px;
  color: ${colors.black};
`;

export const SocialMediaList = styled.ul`
  flex-direction: row;
  display: flex;
  padding: 0;
`;

export const SocialMediaItem = styled.li`
  list-style: none;

  & + & {
    margin-left: ${ranges.regular};
  }
`;

export const SocialMediaLink = styled.a`
  cursor: pointer;
`;

export const SocialMediaIcon = styled.i`
  font-size: ${fonts.sizes.extraLarge};
  color: ${colors.primary};
`;

export const ContactImage = styled.img`
  margin-top: calc(-${ranges.overwhelmingLarge} * 2);
  max-width: 700px;
  z-index: -1;
`;
