"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

const NavBar = ({ showTabs = true }) => {

  const router = useRouter();

  // render navbar when the page changes
  useEffect(() => {

  });

  function logout(event: any) {
    event.preventDefault();

    router.push("./logout");

    localStorage.clear();
  }

  return (
    <div className="bg-indigo-50 fixed top-0 w-full shadow-md mb-10 z-20">
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
            <button onClick={logout} className="inline-flex justify-center items-center space-x-2">
              <span>Logout</span>
              <MdLogout></MdLogout>
            </button>
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

export default NavBar;

