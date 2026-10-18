'use client';

import { useState, useEffect, useRef } from 'react';
import {
  IoTelescopeOutline,
  IoDesktopOutline,
  IoGlobeOutline,
  IoChevronForwardOutline,
  IoCloseOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

const servicesData = [
  {
    id: 'strategy',
    title: 'Strategy & Research',
    icon: IoTelescopeOutline,
    desc: 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.',
    details: [
      'In-depth competitor and market audience analysis',
      'User journey mapping & information architecture',
      'Actionable data-driven product roadmapping',
      'Brand positioning & conversion rate optimization',
    ],
  },
  {
    id: 'development',
    title: 'Web Development',
    icon: IoDesktopOutline,
    desc: 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.',
    details: [
      'Modern Next.js & React scalable architectures',
      'Responsive, high-performance UI components',
      'Full API integrations & backend connectivity',
      'Clean code following industry best practices',
    ],
  },
  {
    id: 'solution',
    title: 'Web Solution',
    icon: IoGlobeOutline,
    desc: 'Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.',
    details: [
      'Enterprise cloud hosting & seamless deployment',
      'Search engine optimization (SEO) best practices',
      'Security hardening and automated monitoring',
      '24/7 technical support and maintenance SLA',
    ],
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  const [activeModalService, setActiveModalService] = useState<typeof servicesData[0] | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title fade in
      gsap.fromTo(
        '.service .section-title',
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

      // Staggered service cards fade in and rise
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.service-list',
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate modal appearance with GSAP spring
  useEffect(() => {
    if (activeModalService && modalContentRef.current) {
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.4)' }
      );
    }
  }, [activeModalService]);

  const handleCardBtnClick = (service: typeof servicesData[0]) => {
    setActiveModalService(service);
  };

  const closeModal = () => {
    if (modalContentRef.current) {
      gsap.to(modalContentRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setActiveModalService(null),
      });
    } else {
      setActiveModalService(null);
    }
  };

  const handleQuoteClick = (serviceName: string) => {
    closeModal();
    if (onSelectService) {
      onSelectService(serviceName);
    }
  };

  return (
    <section className="section service" id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="h2 section-title underline">Our Speciallization</h2>

        <ul className="service-list">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.id}>
                <div className="service-card">
                  <div className="card-icon">
                    <Icon aria-hidden="true" />
                  </div>

                  <h3 className="h3 title">{service.title}</h3>

                  <p className="text">{service.desc}</p>

                  <button
                    type="button"
                    className="card-btn"
                    aria-label={`Show more about ${service.title}`}
                    onClick={() => handleCardBtnClick(service)}
                  >
                    <IoChevronForwardOutline aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-content"
            ref={modalContentRef}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close details"
            >
              <IoCloseOutline />
            </button>

            <h3 className="modal-title">{activeModalService.title}</h3>
            <p className="modal-desc">{activeModalService.desc}</p>

            <div style={{ marginBottom: '24px' }}>
              <h4
                style={{
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: 'var(--st-patricks-blue)',
                  marginBottom: '12px',
                }}
              >
                What We Deliver:
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeModalService.details.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '1.4rem',
                      color: 'var(--purple-navy)',
                    }}
                  >
                    <IoCheckmarkCircleOutline
                      style={{ color: 'var(--winter-sky)', minWidth: '18px', width: '18px', height: '18px' }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="btn form-submit-btn"
              onClick={() => handleQuoteClick(activeModalService.title)}
            >
              Request Quote for {activeModalService.title}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
