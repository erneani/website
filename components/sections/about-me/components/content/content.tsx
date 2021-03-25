import React from 'react';

export default function Content() {
  const involvedStuff: string[] = [
    'Computer Science degree',
    'Open Source development',
    'Functional Programming Evangelization',
    'Development communities',
    'Music',
    'Skateboarding, boxing, surfing and sports in general',
  ];

  return (
    <div className="flex flex-row items-center">
      <div className="w-1/2">
        <span className="text-xl xl:text-2xl">
          <strong>Hi, call me Ernani!</strong> I am a curious Computer Science
          student and Software Developer that believes the tecnology should be
          intuitive and acessible for everyone.
        </span>
        <div className="mt-10">
          <span className="text-xl xl:text-2xl">
            I am involved in many things, such as:
          </span>
          <ul className="list-disc list-inside">
            {involvedStuff.map((stuff) => (
              <li key={stuff} className="text-xl xl:text-2xl mt-2">
                {stuff}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}
