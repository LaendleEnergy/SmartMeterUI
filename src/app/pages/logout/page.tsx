"use client";

import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import NavBar from '@/app/components/navigation/NavBar';
import { MdWavingHand } from "react-icons/md";

export default function Logout() {
    return (
        <div>
            <header><NavBar showTabs={false}></NavBar></header>
            <div className="flex-col flex justify-center items-center space-y-8 ">
                <div className="text-xl font-bold">Logout erfolgreich. Bis bald!</div>
                <MdWavingHand className="text-4xl text-gray-400" />
                <div className="text-zinc-600 font-semibold underline tracking-wider text-center">
                    <Link href="..">Zurück zum Login</Link>
                </div>
            </div>
        </div>
    )
}
