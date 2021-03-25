import React from 'react';
import CallToAction from './components/call-to-action';
import SocialLink, { ISocialLink } from './components/social-link/social-link';

export default function Showcase(): JSX.Element {
  const socialLinks: ISocialLink[] = [
    {
      link: 'https://github.com/erneani',
      alt: 'The github octocat icon in black.',
      imagePath: '/assets/github-social.svg',
    },
    {
      link:
        'https://www.linkedin.com/in/vin%C3%ADcius-ernani-de-carvalho-3ba779174/',
      alt: 'The linkedin icon (the capital I and N) in black.',
      imagePath: '/assets/linkedin-social.svg',
    },
  ];

  function handleClick() {
    console.log('I was clicked');
  }

  return (
    <div className="container mx-auto flex p-20 flex-col justify-center h-screen bg-black">
      <div className="max-w-lg">
        <h1 className="text-white font-sans font-bold md:text-4xl lg:text-6xl">
          Developer, but <span className="text-pink-500">not a regular</span>{' '}
          one.
        </h1>

        <p className="text-white font-sans mt-6 text-xl">
          Hello, I am <b>Vinícius Ernani</b>! A talented{' '}
          <b>Software Developer</b> that loves <b>User Interface Development</b>
          , <b>UX Design</b> and Coding Challenges.
        </p>

        <CallToAction
          label="Check my resume"
          onClick={handleClick}
          additionalStyles="mt-6"
        />

        <div className="absolute flex flex-row mt-10">
          {socialLinks.map((socialLink) => (
            <SocialLink key={socialLink.link} {...socialLink} />
          ))}
        </div>
      </div>
    </div>
  );
}
