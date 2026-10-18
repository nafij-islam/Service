'use client';

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Blog from './components/Blog';
import Footer from './components/Footer';
import GoToTop from './components/GoToTop';
import QuoteModal from './components/QuoteModal';
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Web Development');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsQuoteModalOpen(true);
  };

  return (
    <>
      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-container" role="alert">
          <IoCheckmarkCircle style={{ color: 'var(--winter-sky)', fontSize: '20px' }} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Page Layout */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main>
        <article>
          <Hero onLearnMore={() => {
            const el = document.getElementById('about');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} />

          <About />

          <Services onSelectService={(service) => handleOpenQuote(service)} />

          <Features />

          <Blog onNotify={showToast} />
        </article>
      </main>

      <Footer />

      <GoToTop />

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedService}
        onSuccess={showToast}
      />
    </>
  );
}
