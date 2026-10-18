'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IoCloseOutline, IoMenuOutline, IoChevronForwardOutline } from 'react-icons/io5';

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        {/* Overlay backdrop for mobile nav */}
        <div
          className={`overlay ${isNavOpen ? 'active' : ''}`}
          onClick={closeNav}
          aria-hidden={!isNavOpen}
        />

        <Link href="#top" onClick={closeNav}>
          <h1 className="logo">Desinic</h1>
        </Link>

        <nav className={`navbar ${isNavOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <Link href="#top" className="logo" onClick={closeNav}>
              Desinic
            </Link>

            <button
              className="nav-close-btn"
              aria-label="Close Menu"
              onClick={closeNav}
            >
              <IoCloseOutline />
            </button>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="#home" className="navbar-link" onClick={closeNav}>
                Home
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#about" className="navbar-link" onClick={closeNav}>
                About
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#services" className="navbar-link" onClick={closeNav}>
                Services
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#features" className="navbar-link" onClick={closeNav}>
                Features
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#blog" className="navbar-link" onClick={closeNav}>
                Blog
              </Link>
            </li>

            <li className="navbar-item">
              <Link href="#contact" className="navbar-link" onClick={closeNav}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="btn"
          onClick={onOpenQuote}
          aria-label="Get A Quote"
        >
          <IoChevronForwardOutline aria-hidden="true" />
          <span>Get A Quote</span>
        </button>

        <button
          className="nav-open-btn"
          aria-label="Open Menu"
          onClick={toggleNav}
        >
          <IoMenuOutline />
        </button>
      </div>
    </header>
  );
}
