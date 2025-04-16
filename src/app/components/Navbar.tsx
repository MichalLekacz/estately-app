'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Rent', href: '#' },
    { name: 'Buy', href: '#' },
    { name: 'Sell', href: '#' },
    { name: 'Manage Property', href: '#' },
    { name: 'Resources', href: '#' },
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
    <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-800">
      {navLinks.map(({ name, href }) => (
        <Link key={name} href={href}>
          {name}
        </Link>
      ))}
    </nav>

    {/* Desktop buttons */}
    <div className="hidden md:flex gap-2">
      <Link
        href="#"
        className="px-4 py-2 border border-gray-300 rounded-md text-sm font-semibold hover:border-gray-500 transition"
      >
        Login
      </Link>
      <Link
        href="#"
        className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-[var(--color-accent)] hover:opacity-90 transition"
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

      {/* Mobile menu overlay */}

{menuOpen && (
  <div className="fixed inset-0 z-50 px-6 py-6 flex flex-col justify-between md:hidden bg-white/80 backdrop-blur-md">
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
        className="w-full border border-gray-300 rounded-md py-2 text-sm font-semibold text-center hover:bg-gray-100 transition"
      >
        Login
      </Link>
      <Link
        href="#"
        className="w-full bg-[var(--color-accent)] text-white rounded-md py-2 text-sm font-semibold text-center hover:opacity-90 transition"
      >
        Sign up
      </Link>
    </div>
  </div>
)}

    </>
  );
};
