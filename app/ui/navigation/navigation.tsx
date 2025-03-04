"use client";

import Link from "next/link";
import { NavigationDesktop } from "./navigation-desktop";
import { NavigationMobileButtons } from "./navigation-mobile-buttons";
import { NavigationMobile } from "./navigation-mobile";
import { useState } from "react";
import { DOMINIO } from "@/app/utils/constants/navigation-links";

export const NavigationApp = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href={DOMINIO} className="text-2xl font-bold">
              Logo
            </Link>
          </div>
          <NavigationDesktop darkMode={darkMode} setDarkMode={setDarkMode} />
          <NavigationMobileButtons
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        </div>
        <NavigationMobile
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      </div>
    </nav>
  );
};
