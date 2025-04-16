"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logotype.svg"
              alt="Estatery"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-gray-500">
            <Link href="#">HELP CENTER</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">TERMS & PRIVACY</Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t border-[#f1effa]" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>©2025 Estatery. All rights reserved</p>

          <div className="flex items-center gap-5 text-gray-400">
            <Link href="#" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter size={18} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
