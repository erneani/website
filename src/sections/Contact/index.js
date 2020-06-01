import React from "react";
import {
  Container,
  Title,
  Text,
  ContactImage,
  SocialMediaList,
  SocialMediaItem,
  SocialMediaLink,
  SocialMediaIcon,
} from "./styles";
import { WordBreak } from "../../mainStyles";
import ContactSVG from "../../assets/imgs/contact.svg";

const Contact = () => {
  const mediasList = [
    {
      icon: "fab fa-linkedin",
      url:
        "https://www.linkedin.com/in/vin%C3%ADcius-ernani-carvalho-3ba779174?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsz1rRqTYRLqANHNlJ0tnGg%3D%3D",
    },
    {
      icon: "fab fa-github-square",
      url: "https://github.com/erneani",
    },
  ];
  return (
    <Container>
      <Title>Contato</Title>
      <Text>
        Buscando tirar algum projeto do papel ou dialogar a respeito de algo? Só
        entrar em contato através de qualquer uma das maneiras abaixo!
        <WordBreak />
        <WordBreak />
        +55 (84) 99147-9189
        <WordBreak />
        viniciusernanicarvalho@gmail.com
      </Text>
      <SocialMediaList>
        {mediasList.map((media) => (
          <SocialMediaItem>
            <SocialMediaLink
              target="_blank"
              href={media.url}
              relation="no-openner"
            >
              <SocialMediaIcon className={media.icon} />
            </SocialMediaLink>
          </SocialMediaItem>
        ))}
      </SocialMediaList>
      <ContactImage src={ContactSVG} />
    </Container>
  );
};

export default Contact;
