import React from 'react';
import Image from 'next/image';

interface IWorkCard {
  imagePath: string;
  jobTitle: string;
  company: string;
  initialDate: string;
  endDate?: string;
  alignToEnd?: boolean;
}

export default function WorkCard({
  imagePath,
  jobTitle,
  company,
  initialDate,
  alignToEnd = false,
  endDate = 'Now',
}: IWorkCard) {
  return (
    <div
      className={`bg-white bg-opacity-10 text-white p-10 w-3/5 border-2 border-pink-500 rounded-2xl mb-5 ${
        alignToEnd ? 'self-end' : 'self-start'
      }`}
    >
      <div className="flex flex-row">
        <Image
          src={`/assets/companies/${imagePath}`}
          alt={`${company} trademark.`}
          layout="fixed"
          width={130}
          height={75}
          className=""
        />
        <div className="w-2/3 pl-10">
          <span className="text-3xl font-bold block">{jobTitle}</span>
          <span className="text-2xl block">{company}</span>
          <span className="text-normal block">
            {initialDate} - {endDate}
          </span>
        </div>
      </div>
    </div>
  );
}
