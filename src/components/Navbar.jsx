import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-white/90 shadow-md font-bold">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl text-black font-bold">
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full object-cover" />
          AR AUTOMOTIVE TECHNOLOGY
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-black">
          <li>
            <HashLink smooth to="#home" className="hover:text-blue-600">
              Home
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#about" className="hover:text-blue-600">
              About
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#service" className="hover:text-blue-600">
              Services
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="#contact" className="hover:text-blue-600">
              Contact
            </HashLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 py-6 space-y-4">
          <ul className="flex flex-col items-start gap-4">
            <li>
              <HashLink smooth to="#home" className="hover:text-blue-400" onClick={toggleMenu}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#about" className="hover:text-blue-400" onClick={toggleMenu}>
                About
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#service" className="hover:text-blue-400" onClick={toggleMenu}>
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact" className="hover:text-blue-400" onClick={toggleMenu}>
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
