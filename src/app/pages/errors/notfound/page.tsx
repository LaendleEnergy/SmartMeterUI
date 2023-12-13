import Link from 'next/link';
import { FaSadCry } from "react-icons/fa";
import Navigation from "../../../components/navigation/NavBar";

export default function NotFound() {
  return (
    <div>
      <header><Navigation /></header>
      <div className="flex-col flex justify-center items-center space-y-8 py-[15%]">
        <FaSadCry className="text-4xl text-gray-400" />
        <h2 className="text-xl font-semibold">404 Not Found</h2>
        <p>Die angefragte Ressource konnte nicht gefunden werden.</p>
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