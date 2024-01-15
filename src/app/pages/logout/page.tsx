'use client';

import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import NavBar from '@/app/components/navigation/NavBar';
import { MdWavingHand } from 'react-icons/md';
import { useEffect } from 'react';
import { disableGoingBack } from '@/app/models/Authentication';

export default function Logout() {
  useEffect(() => {
    disableGoingBack('./logout');
  });

  return (
    <div>
      <header>
        <NavBar showTabs={false}></NavBar>
      </header>
      <div className="flex-col flex justify-center items-center space-y-8 ">
        <div className="text-lg md:text-xl font-bold">Logout erfolgreich. Bis bald!</div>
        <MdWavingHand className="text-3xl md:text-4xl text-gray-400" />
        <div className="text-zinc-600 font-semibold underline tracking-wider text-center">
          <Link href="..">Zurück zum Login</Link>
        </div>
      </div>
    </div>
  );
}
