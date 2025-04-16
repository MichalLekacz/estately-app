"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Rent", href: "#" },
    { name: "Buy", href: "#" },
    { name: "Sell", href: "#" },
    { name: "Manage Property", href: "#" },
    { name: "Resources", href: "#" },
  ];

  return (
    <>
      <header className="w-full px-6 py-4 border-b border-gray-100 bg-white">
        <div className="mx-auto w-full max-w-[1440px] flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logotype.svg"
              alt="Estatery logo"
              width={160}
              height={32}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-2 text-sm font-medium text-gray-800 relative">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="relative px-3 py-1 rounded-md transition duration-200 hover:bg-[var(--color-accent)]/10 hover:backdrop-blur-sm hover:text-[var(--color-accent)]"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden md:flex gap-2">
            {/* Secondary Button */}
            <Link
              href="#"
              className="px-4 py-2 rounded-md text-sm font-semibold border border-gray-300 text-black transition-all
              hover:bg-white hover:border-[var(--color-accent)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50
              active:ring-2 active:ring-[var(--color-accent)]
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </Link>

            {/* Primary Button */}
            <Link
              href="#"
              className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-[var(--color-accent)] transition-all
              hover:bg-[var(--color-accent)]/90
              focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/50
              active:bg-[var(--color-accent)] active:scale-[0.98]
              disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button onClick={() => setMenuOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay with framer motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 px-6 py-6 flex flex-col justify-between md:hidden bg-white/80 backdrop-blur-md"
          >
            {/* Close icon */}
            <div className="flex justify-end">
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex flex-col gap-6 text-[22px] font-medium text-black/85">
              {navLinks.map(({ name, href }) => (
                <Link key={name} href={href} onClick={() => setMenuOpen(false)}>
                  {name}
                </Link>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="w-full border border-gray-300 rounded-md py-2 text-sm font-semibold text-center transition
                hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
              >
                Login
              </Link>
              <Link
                href="#"
                className="w-full bg-[var(--color-accent)] text-white rounded-md py-2 text-sm font-semibold text-center transition
                hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40"
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
