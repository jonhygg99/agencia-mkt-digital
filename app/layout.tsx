"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import { NavigationApp } from "./ui/navigation/navigation";
import Footer from "./ui/components/footer";
import { SchemaMarkup } from "./schema";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Check localStorage on initial load
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when darkMode changes
    localStorage.setItem("darkMode", darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <html lang="es" className={darkMode ? "dark" : ""}>
      <head>
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
        {/* <SchemaMarkup /> */}
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-white`}
      >
        <NavigationApp darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
