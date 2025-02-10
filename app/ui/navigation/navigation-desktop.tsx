"use client";

import Link from "next/link";
import { navigationLinks } from "../constants/navigation-links";

export const NavigationDesktop = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          {link.text}
        </Link>
      ))}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
    </div>
  );
};
