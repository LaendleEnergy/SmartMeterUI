"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

const Navbar = ({showTabs = true}) => {

  // render navbar when the page changes
  useEffect(() => {

  });

  return (
    <div className="bg-indigo-50 fixed top-0 w-full shadow-md mb-5">
      <nav className="NavigationBar container mx-auto py-4">
        <div className="Center flex justify-between items-center">
          <div className="Logo inline-flex justify-start items-start">
            <Logo h={96} w={160}></Logo>
          </div>
          <div className={showTabs ? "Items inline-flex space-x-12 items-end" : "hidden"}>
            <NavLink href="/pages/energy-consumption" text="Stromverbrauch" />
            <NavLink href="/pages/energy-saving" text="Stromsparen" />
            <NavLink href="/pages/rewards" text="Belohnungen" />
            <NavLink href="/pages/devices-overview" text="Geräte" />
            <NavLink href="/pages/personal-information" text="Persönliche Daten" />
            <NavLink href="/pages/household" text="Haushalt" />
          </div>
        </div>
      </nav>
    </div>
  )
}


interface NavLinkProps {
  href: string;
  text: string;
}

function NavLink({ href, text }: NavLinkProps) {
  const isActive = usePathname() === href;

  return (
    <Link href={href}>
      <a className={isActive ? "ActiveButton w-42 px-4 py-2 bg-primary-600 rounded-full justify-center items-center flex font-medium leading-normal text-white" : "text-neutral-800 font-medium leading-normal"}>{text}</a>
    </Link>
  );
}

export default Navbar;

