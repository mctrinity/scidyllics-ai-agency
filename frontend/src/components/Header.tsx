"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close menu when clicking outside (except on the hamburger button)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          SciDyllics
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <Link href="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link href="/about" className="hover:text-cyan-400 transition">About</Link>
          <Link href="/contact" className="hover:text-cyan-400 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          ref={buttonRef}
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Bars3Icon className="w-8 h-8 text-white transition transform hover:scale-110" />
        </button>
      </div>

      {/* Mobile Menu with More Noticeable Animation */}
      <div
        ref={menuRef}
        className={`fixed top-[60px] left-0 w-full bg-black py-4 border-t border-gray-700 transition-transform duration-500 ease-in-out 
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}
        `}
      >
        <ul className="flex flex-col space-y-4 text-center">
          <li>
            <Link href="/" className="block py-3 text-xl hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/services" className="block py-3 text-xl hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Services</Link>
          </li>
          <li>
            <Link href="/about" className="block py-3 text-xl hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contact" className="block py-3 text-xl hover:text-cyan-400 transition-all duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
