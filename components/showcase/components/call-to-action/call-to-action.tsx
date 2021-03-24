import React from 'react';

interface ICallToAction {
  onClick: () => void;
  label: string;
  additionalStyles?: string;
}

export default function CallToAction({
  onClick,
  label,
  additionalStyles = '',
}: ICallToAction): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`transition duration-500 text-white text-lg bg-pink-500 hover:bg-pink-700 transform hover:-translate-y-1 px-7 py-5 rounded-xl ${additionalStyles}`}
    >
      {label}
    </button>
  );
}
