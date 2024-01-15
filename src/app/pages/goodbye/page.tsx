'use client';

import 'tailwindcss/tailwind.css';
import NavBar from '@/app/components/navigation/NavBar';
import { MdWavingHand } from 'react-icons/md';
import { useEffect } from 'react';
import { disableGoingBack } from '@/app/models/Authentication';

export default function Goodbye() {
  useEffect(() => {
    disableGoingBack('./goodbye');
  });

  return (
    <div>
      <header>
        <NavBar showTabs={false}></NavBar>
      </header>
      <div className="flex-col flex justify-center items-center space-y-8 ">
        <div className="text-lg md:text-xl font-bold">Ihr Account wurde erfolgreich gelöscht. Auf Wiedersehen!</div>
        <MdWavingHand className="text-3xl md:text-4xl text-gray-400" />
      </div>
    </div>
  );
}
