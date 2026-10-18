'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { scrollToTarget } from './SmoothScroll';

interface HeroProps {
  onLearnMore?: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance staggered fade timeline
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          '.hero-title',
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.5'
        )
        .fromTo(
          '.hero-text',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          '.hero-btn-wrap',
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
          '-=0.4'
        )
        .fromTo(
          '.hero-banner',
          { opacity: 0, scale: 0.9, y: 40 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power2.out' },
          '-=0.7'
        );

      // Continuous subtle floating levitation animation
      gsap.to('.hero-banner img', {
        y: -16,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    // Interactive mouse move parallax for hero illustration
    const handleMouseMove = (e: MouseEvent) => {
      if (!bannerRef.current || window.innerWidth < 992) return;
      const { innerWidth, innerHeight } = window;
      const xPos = (e.clientX / innerWidth - 0.5) * 25;
      const yPos = (e.clientY / innerHeight - 0.5) * 25;

      gsap.to(bannerRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleScrollToAbout = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      scrollToTarget('#about', -70);
    }
  };

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">We Are Product Designer From UK</p>

          <h2 className="h2 hero-title">We Design Interfaces That Users Love</h2>

          <p className="hero-text">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac
            at purus.
          </p>

          <div className="hero-btn-wrap" style={{ display: 'inline-block' }}>
            <button
              type="button"
              className="btn"
              onClick={handleScrollToAbout}
              aria-label="Learn More About Our Agency"
            >
              Learn More
            </button>
          </div>
        </div>

        <figure className="hero-banner" ref={bannerRef}>
          <Image
            src="/images/hero-banner.png"
            width={694}
            height={529}
            alt="Hero Banner Illustration"
            priority
            className="w-100 banner-animation"
          />
        </figure>
      </div>
    </section>
  );
}
