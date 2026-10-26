"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)
  
  const menuItems = [
    { title: "About", href: "/#about" },
    { title: "Experience", href: "/#experience" },
    { title: "Skills", href: "/#skills" },
    { title: "Projects", href: "/projects" },
    { title: "Testimonials", href: "/#testimonials" },
    { title: "Contact", href: "/#contact" },
  ];


  return (
   <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5">
      <nav className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between rounded-full border border-gray-200 bg-white px-6 shadow-[0_3px_8px_rgba(0,0,0,0.07)] backdrop-blur-xl sm:px-8">
        {/* LOGO */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="shrink-0 text-xl font-bold tracking-tight text-neutral-900"
        >
          FJ<span className="text-emerald-500">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-7">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-[15px] font-medium text-neutral-600 transition-colors hover:text-neutral-950"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-800 transition hover:bg-neutral-100 lg:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* MOBILE NAV */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-gray-200 bg-white p-4 shadow-lg lg:hidden">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 transition hover:bg-gray-100 hover:text-neutral-950"
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