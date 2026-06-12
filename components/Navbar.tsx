"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="220"
            height="50"
            viewBox="0 0 1200 300"
            className="w-40 sm:w-52 md:w-56 h-auto"
          >
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="90"
              fontWeight="700"
              fill="#FFFFFF"
              letterSpacing="2"
            >
              Soorajlal K G
            </text>
          </svg>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#experience" className="hover:text-white">
            Experience
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-black/90 backdrop-blur">
          <div className="flex flex-col p-4 text-gray-300">
            <a
              href="#about"
              className="py-2 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="py-2 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="py-2 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#experience"
              className="py-2 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="py-2 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
