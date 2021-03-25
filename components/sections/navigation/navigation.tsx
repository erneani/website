import React from 'react';
import useNavigation from './useNavigation';

export default function Navigation() {
  const { navigationPoins } = useNavigation();

  return (
    <div className="fixed w-screen bg-black px-20 py-5 z-50 text-white">
      {navigationPoins.map((navigation) => (
        <span
          className="opacity-70 mr-5 cursor-pointer hover:opacity-100 transition transition-300"
          key={navigation.title}
        >
          {navigation.title}
        </span>
      ))}
    </div>
  );
}
