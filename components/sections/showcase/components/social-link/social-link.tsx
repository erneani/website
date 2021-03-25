import React from 'react';
import Image from 'next/image';

export interface ISocialLink {
  link: string;
  imagePath: string;
  alt: string;
}

export default function SocialLink({ link, imagePath, alt }: ISocialLink) {
  return (
    <div className="pr-4">
      <a
        className="text-white w-18 h-18"
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          className="fill-current text-black"
          alt={alt}
          src={imagePath}
          width="50px"
          height="50px"
        />
      </a>
    </div>
  );
}
