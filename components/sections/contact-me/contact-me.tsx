import React from 'react';
import SectionTitle from '../../generics/section-title';
import Content from './components/content';

export default function ContactMe() {
  return (
    <div className="bg-white">
      <div className="container mx-auto p-20">
        <SectionTitle isDark={true} title="My Contacts" />
        <Content />
      </div>
    </div>
  );
}
