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
    <div className="NavigationBar h-28 left-0 top-0 absolute bg-indigo-50 flex-col justify-start items-start gap-6 inline-flex">
      <div className="Center w-96 h-28 relative">
        <div className="Logo left-[35.90px] top-[-0px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
          <Logo></Logo>
        </div>
        <div className="Items w-96 h-10 left-[897.52px] top-[33px] absolute justify-end items-center gap-8 inline-flex">
          <NavLink href="/pages/energy-consumption" text="Stromverbrauch" />
          <NavLink href="/pages/energy-saving" text="Stromsparen" />
          <NavLink href="/pages/rewards" text="Belohnungen" />
          <NavLink href="/pages/devices" text="Geräte" />
          <NavLink href="/pages/personal-information" text="Persönliche Daten" />
          <NavLink href="/pages/household" text="Haushalt" />
        </div>
        <div className="Divider w-96 h-px left-0 top-[105px] absolute bg-zinc-200"></div>
      </div>
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
      <a className={isActive ? "PrimaryMedium w-28 px-5 py-2 bg-sky-600 rounded-full justify-center items-center flex font-['Inter']" : "text-neutral-800 text-base font-medium font-['Inter'] leading-normal"}>{text}</a>
    </Link>
  );
}

export default Navbar;

