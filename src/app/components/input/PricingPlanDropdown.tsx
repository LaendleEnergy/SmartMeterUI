"use client";

import { FaChevronDown, FaCheck } from 'react-icons/fa';
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { InferGetServerSidePropsType } from 'next';

interface DropdownProps {
    title: string;
    handleInput: any;
    value: string;
}

interface ElectricityPricingPlan {
    name: string;
    supplier: string;
    averagePricePerKwh: number;
}

export default function Dropdown({ title, handleInput }: DropdownProps) {
    const [selected, setSelected] = useState(title);
    const [data, setData] = useState<ElectricityPricingPlan[]>([{ name: "", supplier: "", averagePricePerKwh: 0 }]);

    useEffect(() => {
        fetch('http://localhost:8080/household/get/pricingPlans')
            .then((res) => res.json())
            .then((data) => {
                let parsedValues: ElectricityPricingPlan[] = [];
                
                data.map((value: any) => {
                    parsedValues.push(JSON.parse(value));
                })

                setData(parsedValues);
            })
    }, []);

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className="relative mt-1 p-3">
                <Listbox.Button className="z-20 text-white w-96 h-14 relative cursor-default rounded bg-blue-500 hover:bg-primary-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm">
                    <span className="block truncate">{selected}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <FaChevronDown
                            className="h-5 w-5"
                            aria-hidden="true"
                        />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-96 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none text-sm">
                        {data.map(item => (
                            <Listbox.Option
                                key={item.name}
                                className={({ active }) =>
                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-600 text-white' : 'text-black'
                                    }`
                                }
                                value={item.name}
                                onChange={handleInput}
                            >
                                {({ selected }) => (
                                    <>
                                        <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                }`}
                                        >
                                            {item.name}
                                        </span>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black">
                                                <FaCheck className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}