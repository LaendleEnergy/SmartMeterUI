"use client";

import {Dispatch, SetStateAction, useState} from 'react';
import { Switch } from '@headlessui/react';

interface ToggleProps {
    enabled: boolean;
    setEnabled: Dispatch<SetStateAction<boolean>>;
}


export default function Toggle({enabled, setEnabled}: ToggleProps) {
    return (
        <Switch
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
            className={`${enabled ? 'bg-blue-500' : 'bg-gray-400'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    );
}