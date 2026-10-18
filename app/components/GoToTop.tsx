'use client';

import { useState, useEffect } from 'react';
import { IoArrowUpOutline } from 'react-icons/io5';
import { scrollToTarget } from './SmoothScroll';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTarget(0);
  };

  return (
    <a
      href="#top"
      className={`go-top ${isVisible ? 'active' : ''}`}
      aria-label="Go To Top"
      onClick={scrollToTop}
    >
      <IoArrowUpOutline aria-hidden="true" />
    </a>
  );
}
