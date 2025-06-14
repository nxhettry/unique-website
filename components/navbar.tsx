"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full gradient-primary group-hover:animate-pulse-glow transition-all duration-300">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">
              Nepal School
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex gap-8">
          <Link
            href="/"
            className="text-sm font-medium transition-all duration-300 hover:text-primary-600 hover:scale-110 relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-all duration-300 hover:text-primary-600 hover:scale-110 relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-all duration-300 hover:text-primary-600 hover:scale-110 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary-50 hover:scale-110 transition-all duration-300"
          onClick={toggleMenu}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white/95 backdrop-blur-md dark:bg-gray-950/95 md:hidden transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-full gradient-primary group-hover:animate-pulse-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gradient">
                Nepal School
              </div>
            </div>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="hover:bg-red-50 hover:text-red-600 hover:scale-110 transition-all duration-300"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="container flex flex-col gap-6 mt-8">
          <Link
            href="/"
            className="text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:scale-105 hover:translate-x-2"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:scale-105 hover:translate-x-2"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-primary-50 hover:text-primary-600 hover:scale-105 hover:translate-x-2"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
