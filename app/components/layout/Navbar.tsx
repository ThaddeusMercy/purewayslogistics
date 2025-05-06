"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isHomeRoute = () => {
    return pathname === '/';
  }

  const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={
          isActive 
            ? 'nav-link-active text-[#FF6600] text-base font-medium px-2' 
            : 'nav-link text-white hover:text-[#FF6600] font-medium px-2'
        }
      >
        {children}
      </Link>
    );
  };

  const MobileNavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={
          isActive 
            ? 'nav-link-active text-[#FF6600] text-xl' 
            : 'nav-link text-white hover:text-[#FF6600] text-xl'
        }
        onClick={closeMenu}
      >
        {children}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white 
        ${isScrolled ? 'bg-black bg-opacity-95 lg:py-3' : isHomeRoute() ? 'bg-black lg:py-2' : 'bg-black bg-opacity-95 py-3'}`
      }
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="z-50 mr-8" onClick={closeMenu}>
            <Logo />
          </Link>
        </div>

        {/* Desktop Navigation - Moved to the right */}
        <div className="hidden lg:flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/about">About Us</NavItem>
            <NavItem href="/services">Our Services</NavItem>
            <NavItem href="/contact">Contact Us</NavItem>
          </nav>

          <Link href="/join-us">
            <button className="bg-[#FF6B00] text-white px-6 py-2 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00]">
              Join us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="z-50 p-2 lg:hidden bg-[#FF6600] px-3 py-2 font-medium hover:bg-[#FF6600] transition text-black rounded-md cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-black z-40 flex flex-col p-8 pt-24 lg:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <nav className="flex flex-col space-y-6">
            <MobileNavItem href="/">Home</MobileNavItem>
            <MobileNavItem href="/about">About Us</MobileNavItem>
            <MobileNavItem href="/services">Our Services</MobileNavItem>
            <MobileNavItem href="/contact">Contact Us</MobileNavItem>

            <Link
              href="/join-us"
              className="bg-[#FF6B00] text-white px-6 py-3 rounded-md font-medium cursor-pointer transition hover:bg-[#E05E00]"
              onClick={closeMenu}
            >
              Join Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;