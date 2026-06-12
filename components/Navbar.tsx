"use client";

export default function Navbar() {
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
          >
            <rect width="100%" height="100%" fill="none" />

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

        {/* Navigation */}
        <div className="flex gap-5 text-sm text-gray-300">
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
      </div>
    </nav>
  );
}
