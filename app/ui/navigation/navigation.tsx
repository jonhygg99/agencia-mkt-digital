"use client";

import Image from "next/image";
import Link from "next/link";
import { NavigationDesktop } from "./navigation-desktop";
import { NavigationMobileButtons } from "./navigation-mobile-buttons";
import { NavigationMobile } from "./navigation-mobile";
import { useState } from "react";
import { DOMINIO } from "@/app/utils/constants/navigation-links";
import { NOMBRE_EMPRESA } from "@/app/utils/constants/empresa";
import { IMAGE_LOGO } from "@/app/utils/constants/image";

export const NavigationApp = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const imageTitle = `Logotipo de ${NOMBRE_EMPRESA}, de la agencia de Marketing Digital`;
  return (
    <nav className="fixed w-full top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href={DOMINIO} className="text-2xl font-bold">
              <Image
                src={IMAGE_LOGO}
                width={205}
                height={40}
                alt={imageTitle}
                title={imageTitle}
              />
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
