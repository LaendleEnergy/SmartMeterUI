"use client";

import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import NavBar from '@/app/components/navigation/NavBar';
import { MdWavingHand } from "react-icons/md";

export default function Logout() {
    return (
        <div>
            <header><NavBar showTabs={false}></NavBar></header>
            <div className="flex-col flex justify-center items-center space-y-8 py-[12%]">
                <div className="text-xl font-bold">Logout erfolgreich</div>
                <MdWavingHand className="text-4xl text-gray-400" />
                <div className="Login text-center">
                    <Link href="..">Zurück zum Login</Link>
                </div>
            </div>
        </div>
    )
}
