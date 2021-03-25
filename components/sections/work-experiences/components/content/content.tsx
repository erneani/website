import React from 'react';

export default function Content() {
  return (
    <div className="text-white">
      <div className="w-1/2 mx-auto text-center">
        <span className="xl:text-7xl font-bold block">
          User Interface Development is my passion
        </span>
        <span className="opacity-80 block text-xl xl:text-2xl mt-5">
          But not the only one
        </span>
      </div>
      <div className="flex flex-row p-5 mt-20">
        <div className="w-1/2">
          <span className="block text-xl xl:text-2xl">
            With <strong>years of development experience</strong> and have
            worked in a lot of projects, from <strong>landing pages</strong> to{' '}
            <strong>complex management dashboards</strong>, I am open to any
            challenge, using any technology.
          </span>
          <span className="block mt-10 text-xl xl:text-2xl">
            Check my recent experiences down below.
          </span>
        </div>
        <div className="w-1/2">
          <div className="mx-auto w-max">
            <span className="text-2xl xl:text-3xl leading-loose">
              4+ years of <strong>experience</strong>
              <br />
              <strong>dozens</strong> of projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
