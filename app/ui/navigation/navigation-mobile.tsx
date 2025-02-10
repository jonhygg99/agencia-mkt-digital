"use client";

import Link from "next/link";
import { navigationLinks } from "../constants/navigation-links";

export const NavigationMobile = ({
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}) => {
  return (
    <div
      className={`${
        mobileMenuOpen ? "flex" : "hidden"
      } md:hidden flex-col space-y-4 pt-4 pb-3`}
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.text}
        </Link>
      ))}
    </div>
  );
};
