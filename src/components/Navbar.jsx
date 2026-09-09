import { useState } from "react";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen((isOpen) => !isOpen);
    setMobileMenuOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((isOpen) => !isOpen);
    setSearchOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center">
          <button
            type="button"
            className="group flex items-center gap-3"
            aria-label="Go to dashboard"
          >
            {/* Logo Icon */}
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-blue-600 shadow-md transition duration-300 group-hover:scale-105">
              
              <div className="absolute right-0 top-0 h-5 w-5 rounded-full bg-white opacity-20" />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="relative h-5 w-5 text-white transition duration-300 group-hover:rotate-6"
              >
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
              </svg>
            </div>

            {/* Logo Text */}
            <div className="hidden text-left sm:block">
              <h1 className="text-lg font-bold leading-none text-gray-900">
                Product<span className="text-blue-600">Hub</span>
              </h1>

              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
                Management
              </p>
            </div>
          </button>
        </div>

        {/* Desktop Search */}
        <div className="mx-8 hidden max-w-md flex-1 md:block">
          <div className="group relative">

            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              type="text"
              placeholder="Search products..."
              className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-16 text-sm text-gray-700 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

            {/* Keyboard Shortcut */}
            <span className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs text-gray-400 lg:block">
              Ctrl K
            </span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1 sm:gap-2">

          {/* Mobile Search */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="rounded-xl p-2.5 text-gray-500 transition duration-200 hover:bg-blue-50 hover:text-blue-600 md:hidden"
            aria-label="Search"
            aria-expanded={searchOpen}
            aria-controls="mobile-search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="group relative rounded-xl p-2.5 text-gray-500 transition duration-200 hover:bg-gray-100 hover:text-gray-900"
            aria-label="Notifications"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5 transition duration-300 group-hover:-rotate-6"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>

            {/* Notification Badge */}
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-red-500" />
          </button>

          {/* Divider */}
          <div className="mx-1 hidden h-8 w-px bg-gray-200 sm:block" />

          {/* Profile */}
          <button
            type="button"
            className="group flex items-center gap-2 rounded-xl p-1.5 pr-2 transition duration-200 hover:bg-gray-100"
            aria-label="Open profile menu"
            aria-haspopup="menu"
          >
            {/* Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white shadow-sm transition duration-300 group-hover:scale-105">
              Y
            </div>

            {/* User Information */}
            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold leading-tight text-gray-800">
                Muhammad Younas
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Administrator
              </p>
            </div>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="hidden h-4 w-4 text-gray-400 transition duration-300 group-hover:translate-y-1 lg:block"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={handleMobileMenuToggle}
            className="ml-1 rounded-xl p-2.5 text-gray-600 transition duration-200 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div
        id="mobile-search"
        className={`overflow-hidden border-t border-gray-100 bg-white transition duration-300 md:hidden ${
          searchOpen
            ? "max-h-24 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3">
          <div className="relative">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              autoFocus={searchOpen}
              type="text"
              placeholder="Search products..."
              className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-700 outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-100 bg-white transition duration-300 md:hidden ${
          mobileMenuOpen
            ? "max-h-60 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-3">

          {/* Dashboard */}
          <a
            href="#dashboard"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Dashboard
          </a>

          {/* Products */}
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Products
          </a>

          {/* Add Product */}
          <a
            href="#add-product"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
          >
            {/* Plus Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>

            Add Product
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;