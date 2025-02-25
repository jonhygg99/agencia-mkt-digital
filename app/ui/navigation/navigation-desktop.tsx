"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "../../constants/navigation-links";
import { DropdownIcon } from "../icons/dropdown";

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
        <div key={link.href} className="relative group">
          <Link
            href={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center"
          >
            {link.text}
            {link.dropdown && <DropdownIcon />}
          </Link>

          {link.dropdown && (
            <div className="invisible group-hover:visible absolute left-0 mt-0 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
              {link.dropdown.map((dropdownItem) => (
                <Link
                  key={dropdownItem.href}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {dropdownItem.text}
                </Link>
              ))}
            </div>
          )}
        </div>
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
