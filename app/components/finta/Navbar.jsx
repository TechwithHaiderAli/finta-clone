'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = [
    { name: 'Founders', href: '/founders' },
    { name: 'Guide', href: '/docs' },
    { name: 'Pricing', href: '/projects' },
    { name: 'Login', href: '/login' },
  ];

  return (
    <nav className='w-full px-4 py-3 flex items-center justify-between bg-white shadow-sm sticky top-0 z-50'>
      <Link className='font-bold text-xl' href="/finta">
        Finta
      </Link>

      {/* Desktop Nav */}
      <div className='hidden md:flex gap-5 items-center'>
        {navlinks.map((navlink, i) => (
          <Link
            key={i}
            href={navlink.href}
            className='font-medium text-sm hover:text-black/60'
          >
            {navlink.name}
          </Link>
        ))}
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl shadow-md text-sm'>
          Start Free Trial
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className='md:hidden text-xl'
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-white flex flex-col items-start px-4 py-4 gap-4 shadow-md md:hidden z-40'>
          {navlinks.map((navlink, i) => (
            <Link
              key={i}
              href={navlink.href}
              className='font-medium text-sm hover:text-black/60 w-full'
              onClick={() => setMenuOpen(false)}
            >
              {navlink.name}
            </Link>
          ))}
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl shadow-md text-sm w-full text-center'
            onClick={() => setMenuOpen(false)}
          >
            Start Free Trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
