"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="w-full text-white">
      {/* Top Promo Banner */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-700 to-blue-800 text-center text-xs sm:text-sm py-1">
        Rezervasyona özel ilk konaklama ücretinde{" "}
        <span className="font-semibold">%20 indirim</span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-blue-900 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between xl:justify-center xl:gap-20 px-4 sm:px-6 lg:px-8 h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 font-medium text-white">
            {["Home", "Services", "Portfolio", "Pricing"].map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="hover:text-indigo-600 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
            >
              Rezervasyon yap
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-40 transition-transform transform  text-white font-bold bg-blue-900 md:hidden
            ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex items-center justify-between  border-b">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={240}
                height={75}
                className="object-contain"
              />
            </Link>
            <Button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <X size={24} />
            </Button>
          </div>
          <ul className="flex flex-col mt-6 space-y-4 pl-10">
            {["Home", "Services", "Portfolio", "Pricing"].map((link) => (
              <li key={link}>
                <Link
                  href="#"
                  className="block py-2 hover:text-indigo-600 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 mt-6">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-blue-900 cursor-pointer hover:bg-gray-200 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Rezervasyon yap
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
