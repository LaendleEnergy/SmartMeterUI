'use client';

import Link from 'next/link';
import Navigation from "../../components/navigation/NavBar";
import { FaSadCry } from "react-icons/fa";

export default function Error() {

  return (
    <div>
      <header><Navigation /></header>
      <div className="flex-col flex justify-center items-center space-y-8 py-[15%]">
        <FaSadCry className="text-lg text-gray-400" />
        <h1 className="text-center text-xl">Etwas ist schiefgelaufen</h1>
        <Link
          href="./energy-consumption"
          className="mt-4 rounded-md bg-primary-600 px-4 py-2 text-sm text-white transition-colors hover:bg-primary-700"
        >
          Zurück
        </Link>
      </div>
    </div>
  );
}