import React from 'react';
import WorkCard from './components/work-card';

export default function Experiences() {
  const workExperiences = [
    {
      imagePath: 'globocom.svg',
      jobTitle: 'SmartTV Developer',
      company: 'Globo.com',
      initialDate: 'Nov 2020',
      id: 0,
    },
    {
      imagePath: 'imdufrn.svg',
      jobTitle: 'Front End Developer',
      company: 'IMD/UFRN',
      initialDate: 'Jun 2020',
      endDate: 'Dec 2020',
      id: 1,
    },
    {
      imagePath: 'sinfo.svg',
      jobTitle: 'Front End Developer',
      company: 'SINFO',
      initialDate: 'Mar 2020',
      endDate: 'Jun 2020',
      id: 2,
    },
    {
      imagePath: 'b2soft.svg',
      jobTitle: 'Interface Developer',
      company: 'B2SOFT',
      initialDate: 'Mar 2019',
      endDate: 'Mar 2020',
      id: 3,
    },
  ];

  function isOdd(num: number) {
    return num % 2 !== 0 ? true : false;
  }

  return (
    <div className="flex flex-col p-5 mt-5">
      {workExperiences.map((experience, iterator) => (
        <WorkCard
          {...experience}
          key={experience.id}
          alignToEnd={isOdd(iterator)}
        />
      ))}
    </div>
  );
}
