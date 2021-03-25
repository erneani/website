import React from 'react';

interface ISectionTitle {
  title: string;
  isDark?: boolean;
  aditionalStyles?: string;
}

export default function SectionTitle({
  title,
  isDark = false,
  aditionalStyles = '',
}: ISectionTitle) {
  return (
    <div className={`mb-20 ${aditionalStyles}`}>
      <span
        className={`text-5xl font-bold ${isDark ? 'text-black' : 'text-white'}`}
      >
        {title}
      </span>
    </div>
  );
}
