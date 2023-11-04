"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "./../Logo";
import { usePathname } from "next/navigation";

const Navbar = () => {

  // render navbar when the page changes
  useEffect(() => {

  });

  return (
    <div className="bg-indigo-50 fixed top-0 w-full shadow-md">
      <nav className="NavigationBar container mx-auto px-8 py-4">
        <div className="Center flex justify-between items-center">
          <div className="Logo inline-flex justify-start items-start">
            <Logo></Logo>
          </div>
          <div className="Items inline-flex space-x-12 items-end">
            <NavLink href="/pages/energy-consumption" text="Stromverbrauch" />
            <NavLink href="/pages/energy-saving" text="Stromsparen" />
            <NavLink href="/pages/rewards" text="Belohnungen" />
            <NavLink href="/pages/devices" text="Geräte" />
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
      <a className={isActive ? "PrimaryMedium w-42 px-4 py-2 bg-sky-600 rounded-full justify-center items-center flex font-['Inter']" : "text-neutral-800 text-base font-medium font-['Inter'] leading-normal"}>{text}</a>
    </Link>
  );
}

export default Navbar;

