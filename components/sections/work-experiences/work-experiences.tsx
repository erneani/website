import React from 'react';
import SectionTitle from '../../generics/section-title';
import Content from './components/content';
import Experiences from './components/experiences';

export default function WorkExperiences() {
  return (
    <div className="container mx-auto p-20">
      <SectionTitle title="Work Experiences" aditionalStyles="text-center" />
      <Content />
      <Experiences />
    </div>
  );
}
