'use client';

import Image from 'next/image';

interface HeroProps {
  onLearnMore?: () => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  const handleScrollToAbout = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle">We Are Product Designer From UK</p>

          <h2 className="h2 hero-title">We Design Interfaces That Users Love</h2>

          <p className="hero-text">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac
            at purus.
          </p>

          <button
            type="button"
            className="btn"
            onClick={handleScrollToAbout}
            aria-label="Learn More About Our Agency"
          >
            Learn More
          </button>
        </div>

        <figure className="hero-banner">
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
