import React, { useState } from 'react';
import assets from '../assets/assets';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center  border mx-1 max-md:w-full max-md:justify-between border-[#E3E3E3] px-2 py-4 rounded-full text-[#222222] text-xl relative z-50 bg-[#E3E3E3]">
      <a href="https://prebuiltui.com">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="4.706" cy="16" r="4.706" fill="#161616" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#161616" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#161616" />
          <circle cx="27.294" cy="16" r="4.706" fill="#161616" />
        </svg>
      </a>

      <div className="hidden md:flex items-center gap-6 ml-7">
        {[{label: 'About Me', href: '#about-me'}, {label: 'Portfolio', href: '#projects'}, {label: 'Experience', href: '#'}].map((item) => (
          <a key={item.label} href={item.href} className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.label}</span>
            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      <div className="hidden ml-14 md:flex items-center gap-4">
        <a
          href="mailto:singhparth427@gmail.com"
          className="border border-slate-600 hover:bg-[#F3F3F3] px-4 py-2 rounded-full text-xl font-medium transition cursor-pointer"
        >
          Contact
        </a>
        <a
          href={assets.pdf}
          download
          className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-xl font-medium hover:bg-slate-100 transition duration-300 cursor-pointer"
        >
          Resume
        </a>
      </div>

      {/* Hamburger Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-black ml-auto">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 bg-[#E3E3E3] w-full flex flex-col items-center gap-4 py-6 z-100 text-black text-base rounded-lg shadow-lg">
          {[{label: 'About Me', href: '#about-me'}, {label: 'Portfolio', href: '#projects'}, {label: 'Experience', href: '#'}].map((item) => (
            <a key={item.label} href={item.href} className="hover:text-indigo-500">
              {item.label}
            </a>
          ))}
          <a
            href="mailto:singhparth427@gmail.com"
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer"
          >
            Contact
          </a>
          <a
            href={assets.pdf}
            download
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300 cursor-pointer"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
