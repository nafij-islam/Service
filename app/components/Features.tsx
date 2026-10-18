'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  IoBulbOutline,
  IoColorPaletteOutline,
  IoCodeSlashOutline,
  IoRocketOutline,
} from 'react-icons/io5';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftListRef = useRef<HTMLUListElement>(null);
  const rightListRef = useRef<HTMLUListElement>(null);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title fade in
      gsap.fromTo(
        '.features .section-title',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      // Left cards slide in from left
      if (leftListRef.current) {
        gsap.fromTo(
          leftListRef.current.children,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: leftListRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Center banner zoom-in and continuous float
      if (bannerRef.current) {
        gsap.fromTo(
          bannerRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: bannerRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );

        gsap.to('.features-banner img', {
          y: -14,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Right cards slide in from right
      if (rightListRef.current) {
        gsap.fromTo(
          rightListRef.current.children,
          { opacity: 0, x: 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.85,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rightListRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section features" id="features" ref={sectionRef}>
      <div className="container">
        <h2 className="h2 section-title underline">Our Features</h2>

        <ul className="features-list" ref={leftListRef}>
          <li>
            <div className="features-card">
              <div className="icon">
                <IoBulbOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Idea & Analysis</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-card">
              <div className="icon">
                <IoColorPaletteOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Designing</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>

        <figure className="features-banner" ref={bannerRef}>
          <Image
            src="/images/feautres-banner.png"
            width={369}
            height={318}
            loading="lazy"
            alt="Desinic Workflow Features Banner"
            className="w-100 banner-animation"
          />
        </figure>

        <ul className="features-list" ref={rightListRef}>
          <li>
            <div className="features-card">
              <div className="icon">
                <IoCodeSlashOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Development</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="features-card">
              <div className="icon">
                <IoRocketOutline aria-hidden="true" />
              </div>

              <div className="content">
                <h3 className="h3 title">Testing & Launching</h3>
                <p className="text">
                  Praesent tincidunt congue est ut hendrerit. Pellentesque et eros sit amet ipsum venenatis.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
