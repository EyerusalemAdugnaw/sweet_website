"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-pink-100/90 backdrop-blur-md px-6 md:px-10 py-4">

      {/* ROW */}
      <div className="flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-serif text-rose-800 font-bold">
          Jerry's Sweet
        </h1>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex space-x-8 text-rose-800 font-medium">

          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/#about" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative group"
              onClick={() => setOpen(false)}
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-rose-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl text-rose-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col space-y-4 mt-4 text-rose-800 font-medium bg-pink-100 p-6 rounded-2xl shadow-lg animate-fadeIn">

          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>

        </div>
      )}

    </header>
  );
}