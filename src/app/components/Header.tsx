"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-neutral-900">
          Elliott Ganley
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/writings" className="text-neutral-700 hover:text-black">
            Writings
          </Link>
          <Link href="/about" className="text-neutral-700 hover:text-black">
            About
          </Link>

          {/* Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-1 text-neutral-700 hover:text-black"
              aria-haspopup="menu"
              aria-expanded={open}
            >
              More
              <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-40 rounded-md border border-neutral-200 bg-white shadow-md"
              >
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/notes"
                  className="block px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                  onClick={() => setOpen(false)}
                >
                  Notes
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Simple mobile menu: stack links */}
        <details className="sm:hidden">
          <summary className="list-none cursor-pointer text-sm text-neutral-700">
            Menu
          </summary>
          <div className="mt-2 rounded-md border border-neutral-200 bg-white">
            <Link href="/writings" className="block px-3 py-2 text-sm hover:bg-neutral-100">
              Writings
            </Link>
            <Link href="/about" className="block px-3 py-2 text-sm hover:bg-neutral-100">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-sm hover:bg-neutral-100">
              Contact
            </Link>
            <Link href="/notes" className="block px-3 py-2 text-sm hover:bg-neutral-100">
              Notes
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
