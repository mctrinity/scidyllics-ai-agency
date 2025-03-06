"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
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
    <>
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-16"></div>

      {/* Fixed Header */}
      <header
        className="fixed top-0 left-0 w-full h-16 shadow-md z-50 flex items-center"
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--text-color)",
        }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo + Brand Name */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/scidyllics-logo.png"
              alt="SciDyllics Logo"
              width={50}
              height={50}
              className="rounded-lg"
              priority
            />
            {/* <span className="text-lg font-bold whitespace-nowrap text-teal-700">SciDyllics</span> */}
            <span className="text-lg font-bold whitespace-nowrap brand-text">SciDyllics</span>

          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`transition ${
                pathname === "/" ? "text-[#497D74] font-semibold" : "text-inherit"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition ${
                pathname === "/services" ? "text-[#497D74] font-semibold" : "text-inherit"
              }`}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`transition ${pathname === "/blog" ? "text-[#497D74] font-semibold" : "text-inherit"}`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`transition ${
                pathname === "/about" ? "text-[#497D74] font-semibold" : "text-inherit"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition ${
                pathname === "/contact" ? "text-[#497D74] font-semibold" : "text-inherit"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Bars3Icon
              className="w-8 h-8 transition transform hover:scale-110"
              style={{ color: "var(--text-color)" }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`absolute top-16 left-0 w-full py-4 border-t transition-transform duration-500 ease-in-out 
          ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
          style={{
            backgroundColor: "var(--background-color)",
            borderColor: "var(--text-color-light)",
          }}
        >
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link
                href="/"
                className={`block py-3 text-lg transition ${
                  pathname === "/" ? "text-[#497D74] font-semibold" : "text-inherit"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-3 text-lg transition ${
                  pathname === "/services" ? "text-[#497D74] font-semibold" : "text-inherit"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block py-3 text-lg transition ${pathname === "/blog" ? "text-[#497D74] font-semibold" : "text-inherit"}`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-3 text-lg transition ${
                  pathname === "/about" ? "text-[#497D74] font-semibold" : "text-inherit"
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-3 text-lg transition ${
                  pathname === "/contact" ? "text-[#497D74] font-semibold" : "text-inherit"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
