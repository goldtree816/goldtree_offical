import { Link } from "react-router-dom";
import logo from "/goldtree.png";

const Footer = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="w-18 h-18 object-contain" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-600">
            Love Nature by
            <span className="font-medium text-gray-900">Team Nature</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Love Nature. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
