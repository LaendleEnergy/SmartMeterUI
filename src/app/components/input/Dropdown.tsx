"use client";

import { FaChevronDown, FaCheck } from 'react-icons/fa';
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'

interface DropdownProps {
  title: string | null;
  name?: string;
  values: string[];
  handleInput?: any;
}

export default function Dropdown(props: DropdownProps) {
  const [selected, setSelected] = useState(props.title ? props.title : "");

  useEffect(() => {});

  return (
    <Listbox value={selected} onChange={arg => { props.handleInput(arg); setSelected(arg); }} name={props.name ? props.name : ""}>
      <div className="relative mt-1 p-3">
        <Listbox.Button className="z-20 text-white w-56 sm:w-72 h-14 relative cursor-default rounded bg-blue-500 hover:bg-primary-700 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-sm sm:text-base">
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
          <Listbox.Options className="absolute mt-1 w-72 sm:w-56 lg:w-72 max-h-60 overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none text-sm sm:text-base">
            {props.values.map(item => (
              <Listbox.Option
                key={item}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-600 text-white' : 'text-black'
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                        }`}
                    >
                      {item}
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
