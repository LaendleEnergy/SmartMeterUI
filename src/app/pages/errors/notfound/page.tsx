import Link from 'next/link';
import { FaSadCry } from "react-icons/fa";
import Navigation from "../../../components/navigation/NavBar";

export default function NotFound() {
  return (
    <div>
      <header><Navigation /></header>
      <div className="flex-col flex justify-center items-center space-y-8 ">
        <FaSadCry className="text-3xl md:text-4xl text-gray-400" />
        <h2 className="text-center text-lg md:text-xl font-semibold">404 Not Found</h2>
        <p className="text-center text-sm sm:text-base">Die angefragte Ressource konnte nicht gefunden werden.</p>
        <Link
          href="./energy-consumption"
          className="mt-4 rounded-md bg-primary-600 px-4 py-2 text-sm sm:text-base text-white transition-colors hover:bg-primary-700"
        >
          Zurück
        </Link>
      </div>
    </div>
  );
}