'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const stats = [
  { numericValue: 9875, label: 'Satisfied Clients' },
  { numericValue: 7894, label: 'Project Launched' },
  { numericValue: 65, label: 'Years Completed' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const bannerRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Banner slide-in and fade animation
      gsap.fromTo(
        '.about-banner',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Continuous subtle banner floating
      gsap.to('.about-banner img', {
        y: -14,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Content elements fade in and slide up
      gsap.fromTo(
        '.about-content .section-title',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 82%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.about-text',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 78%',
            once: true,
          },
        }
      );

      // Stats cards staggered pop-in
      gsap.fromTo(
        '.stats-card',
        { opacity: 0, y: 35, scale: 0.92 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.stats-list',
            start: 'top 85%',
            once: true,
            onEnter: () => {
              // Trigger number counters
              stats.forEach((stat, index) => {
                const el = statsRef.current[index];
                if (!el) return;
                const counter = { val: 0 };
                gsap.to(counter, {
                  val: stat.numericValue,
                  duration: 2,
                  ease: 'power2.out',
                  onUpdate: () => {
                    el.textContent = Math.floor(counter.val).toLocaleString();
                  },
                });
              });
            },
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <figure className="about-banner" ref={bannerRef}>
          <Image
            src="/images/about-banner.png"
            width={700}
            height={532}
            loading="lazy"
            alt="About Desinic Agency Banner"
            className="w-100 banner-animation"
          />
        </figure>

        <div className="about-content">
          <h2 className="h2 section-title underline">Why Our Agency</h2>

          <p className="about-text">
            In dictum aliquam turpis lacinia iaculis. Fusce vel malesuada magna. Nulla vel maximus risus. Donec
            volutpat metus lacinia risus accumsan, ac bibendum libero efficitur. Pellentesque nec nisi sit amet
            magna tempus hendrerit ut a odio.
          </p>

          <p className="about-text">
            Praesent rhoncus commodo tortor, id pulvinar nisl blandit at. Nulla facilisi. Quisque turpis ante,
            vehicula condimentum arcu.
          </p>

          <ul className="stats-list">
            {stats.map((stat, idx) => (
              <li key={idx} className="stats-card">
                <p
                  className="h3 stats-title"
                  ref={(el) => {
                    statsRef.current[idx] = el;
                  }}
                >
                  {stat.numericValue}
                </p>
                <p className="stats-text">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
