"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import { MdLogout, MdOutlineMenu } from "react-icons/md";
import { AuthenticatedView } from "../AuthenticatedView/AuthenticatedView";

const NavBar = ({ showTabs = true }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // render navbar when the page changes
  useEffect(() => { });

  function logout(event: any) {
    event.preventDefault();

    router.push("./logout");

    localStorage.clear();
  }

  return (
    <div className="lg:mb-[12%] md:mb-44 mb-32">
      <div className="bg-indigo-50 fixed top-0 w-full shadow-md md:mb-10 z-20">
        <nav className="NavigationBar container mx-auto py-4">
          <div className="Center flex justify-between items-center">
            <div className="Logo inline-flex justify-start items-start">
              <Logo h={96} w={160}></Logo>
            </div>
            <div className={`${showTabs ? "md:hidden fixed right-3 inline-flex items-end justify-end" : "hidden"}`}>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-xl focus:outline-none">
                <MdOutlineMenu />
              </button>
            </div>
            <div className={`${showTabs ? "md:inline-flex lg:space-x-6 xl:space-x-12 md:items-end hidden" : "hidden"}`}>
              <NavLink href="/pages/energy-consumption" text="Stromverbrauch" />
              <AuthenticatedView role="Admin">
                <NavLink href="/pages/energy-saving" text="Stromsparen" />
              </AuthenticatedView>
              <AuthenticatedView role="Admin">
                <NavLink href="/pages/rewards" text="Belohnungen" />
              </AuthenticatedView>
              <NavLink href="/pages/devices-overview" text="Geräte" />
              <NavLink href="/pages/personal-information" text="Persönliche Daten" />
              <AuthenticatedView role="Admin">
                <NavLink href="/pages/household" text="Haushalt" />
              </AuthenticatedView>
              <div className="px-4 py-2 justify-center items-center text-sm lg:text-base">
                <button
                  onClick={logout}
                  className="inline-flex justify-center items-center space-x-2"
                >
                  <span>Logout</span>
                  <MdLogout />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className={`${isMobileMenuOpen ? "flex-wrap z-30 my-4 text-base list-none bg-indigo-50 divide-y divide-gray-300 rounded-lg shadow block fixed right-10 top-5 lg:hidden" : "hidden"}`}>
        <MobileNavLink href="/pages/energy-consumption" text="Stromverbrauch" />
        <MobileNavLink href="/pages/energy-saving" text="Stromsparen" />
        <MobileNavLink href="/pages/rewards" text="Belohnungen" />
        <MobileNavLink href="/pages/devices-overview" text="Geräte" />
        <MobileNavLink href="/pages/personal-information" text="Persönliche Daten" />
        <MobileNavLink href="/pages/household" text="Haushalt" />
        <button
          onClick={logout}
          className="inline-flex justify-center items-center space-x-2 px-4 py-2 text-sm"
        >
          <span>Logout</span>
          <MdLogout />
        </button>
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
      <a className={`${isActive ? "bg-primary-600 rounded-full text-white" : "text-neutral-800"} max-w-42 min-w-10 px-4 py-2 justify-center items-center flex text-sm lg:text-base`}>{text}</a>
    </Link>
  );
}


function MobileNavLink({ href, text }: NavLinkProps) {
  const isActive = usePathname() === href;

  return (
    <Link href={href}>
      <a className={`${isActive ? "text-white bg-primary-600" : "text-neutral-800"} block px-4 py-2 text-sm p-3 hover:bg-gray-300`}>{text}</a>
    </Link>
  );
}

export default NavBar;

