"use client";

import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-[0_2px_10px_rgba(0,0,0,0.06)] backdrop-blur-sm">
      <div className="mx-auto flex max-w-325 items-center justify-between px-4 md:px-0 py-5 ">

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
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="cursor-pointer text-lg transition hover:text-purple-600"
              >
                {item.title}
              </Link>
            </li>
          ))}
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
          <ul className="mx-auto flex max-w-325 flex-col gap-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm hover:text-purple-600"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}