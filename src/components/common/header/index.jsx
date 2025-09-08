import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                className="w-28 h-28 object-contain rounded-full"
                src={logo}
                alt="Love Nature Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 text-lg font-serif font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-amber-600 border-b-2 border-amber-400"
                    : "text-slate-700 hover:text-amber-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="ml-6 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              GET THE GUIDE
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full text-slate-700 hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-colors duration-200"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} w-8 h-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} w-8 h-8`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white/90 backdrop-blur-sm shadow-lg`}>
        <div className="px-4 pt-4 pb-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block px-4 py-3 text-lg font-serif font-medium transition-colors duration-300 rounded-lg ${
                isActive(item.path)
                  ? "text-amber-600 bg-amber-50"
                  : "text-slate-700 hover:text-amber-500 hover:bg-slate-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-6 py-2 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            GET THE GUIDE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;