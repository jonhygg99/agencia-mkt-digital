"use client";

export const NavigationMobileButtons = ({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
}: {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (value: boolean) => void;
}) => {
  return (
    <div className="md:hidden flex items-center space-x-4">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
      >
        {darkMode ? "🌞" : "🌙"}
      </button>
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {mobileMenuOpen ? closeIcon : hamburgerIcon}
        </svg>
      </button>
    </div>
  );
};

const closeIcon = <path d="M6 18L18 6M6 6l12 12" />;
const hamburgerIcon = <path d="M4 6h16M4 12h16M4 18h16" />;
