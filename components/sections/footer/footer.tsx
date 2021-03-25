import React from 'react';

export default function Footer() {
  return (
    <div className="container mx-auto text-white p-20">
      <div className="flex flex-row justify-between items-center">
        <div className="">
          <span className="block text-xl">©2021 Vinícius Ernani</span>
          <span className="block text-xl mt-2">
            Happily made with Next.js and love.
          </span>
        </div>
        <span className="text-xl xl:text-2xl font-bold cursor-pointer">
          Back to the top
        </span>
      </div>
    </div>
  );
}
