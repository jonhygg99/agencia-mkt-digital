"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { NavigationApp } from "./ui/navigation/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white`}
      >
        <NavigationApp darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
