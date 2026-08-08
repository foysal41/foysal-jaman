"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 md:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold md:text-2xl"
          onClick={() => setOpen(false)}
        >
          Foysal Jaman.
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/"
              className="cursor-pointer text-sm transition hover:text-purple-600"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#about"
              className="cursor-pointer text-sm transition hover:text-purple-600"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="#projects"
              className="cursor-pointer text-sm transition hover:text-purple-600"
            >
              Projects
            </Link>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-5 bg-black transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-black transition ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-5 bg-black transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE NAV */}
      {open && (
        <div className="border-t border-gray-100 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm hover:text-purple-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm hover:text-purple-600"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="#projects"
                onClick={() => setOpen(false)}
                className="block py-2 text-sm hover:text-purple-600"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}