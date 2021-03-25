import React from 'react';
import Head from 'next/head';
import Showcase from '../components/sections/showcase';
import AboutMe from '../components/sections/about-me';
import WorkExperiences from '../components/sections/work-experiences';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vinícius Ernani</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Showcase />
      <AboutMe />
      <WorkExperiences />
    </div>
  );
}
