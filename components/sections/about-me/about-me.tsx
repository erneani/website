import React from 'react';
import SectionTitle from '../../generics/section-title';
import Content from './components/content';

export default function AboutMe() {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-20">
        <SectionTitle isDark={true} title="About Me" />
        <Content />
      </div>
    </div>
  );
}
