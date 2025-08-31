"use client";
import Link from "next/link";
import { waLink } from "../../lib/utils";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-pink-600">
          BalloonDecor
        </Link>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex relative">
          <Link href="/" className="text-neutral-900 hover:text-pink-600">
            Home
          </Link>

          {/* Services with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Link href="/services" >
            <button className="text-neutral-900 hover:text-pink-600">
              Services ▾
            </button>
            </Link>

            {open && (
              <div className="absolute top-8 left-0 w-56 bg-white shadow-lg rounded-xl border p-3">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <Link
                      href="/services/birthday-decoration"
                      className="block px-3 py-1 rounded hover:bg-pink-50"
                    >
                    Birthday Decorations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/wedding-decor"
                      className="block px-3 py-1 rounded hover:bg-pink-50"
                    >
                       Wedding Setup
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/carboot-decoration"
                      className="block px-3 py-1 rounded hover:bg-pink-50"
                    >
                     Car-Boot decoration
                    </Link>
                  </li>
                   <li>
                    <Link
                      href="/services/baby-shower"
                      className="block px-3 py-1 rounded hover:bg-pink-50"
                    >
                     Baby Shower decoration
                    </Link>
                  </li>
                   <li>
                    <Link
                      href="/services/bride-to-bride-decor"
                      className="block px-3 py-1 rounded hover:bg-pink-50"
                    >
                     Bride-to-be decoration
                    </Link>
                  </li>
                   <li>
                    <Link
                      href="/services/first-night-decor"
                      className="block px-3 py-1 rounded hover:bg-pink-50"
                    >
                     First-Night decoration
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-neutral-900 hover:text-pink-600">
            Contact
          </Link>
          <Link href="/about" className="text-neutral-900 hover:text-pink-600">
            About
          </Link>
        </nav>

        {/* WhatsApp Button */}
        <a
          href={waLink(process.env.NEXT_PUBLIC_PHONE || "919999999999")}
          target="_blank"
          className="bg-pink-600 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-700"
        >
          Book on WhatsApp
        </a>
      </div>
    </header>
  );
}
