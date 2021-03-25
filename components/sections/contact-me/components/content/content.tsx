import React from 'react';

export default function Content() {
  const contactWays = [
    {
      info: '+55 84 99147-9189',
    },
    {
      info: 'viniciusernanicarvalho@gmail.com',
    },
    {
      info: '/in/vinicius-ernani',
      link: 'https://www.linkedin.com/in/vinicius-ernani/',
    },
  ];

  return (
    <div className="flex flex-row justify-between">
      <div className="w-1/2">
        <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-7xl font-bold">
          Let&apos;s talk about your projects?
        </span>
        <span className="block text-xl xl:text-2xl opacity-80 mt-5">
          Or about anything you like...
        </span>
      </div>
      <div className="xl:w-2/5">
        <span className="text-xl xl:text-2xl">
          Looking to create a project from the scratch or talk about an job
          oportunity? You can contact me through any of the ways below:
        </span>
        <ul className="list-disc list-inside mt-5">
          {contactWays.map((contact) => (
            <li key={contact.info} className="text-xl xl:text-2xl">
              {contact.link ? (
                <a
                  href={contact.link}
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contact.info}
                </a>
              ) : (
                contact.info
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
