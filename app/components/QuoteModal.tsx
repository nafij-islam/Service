'use client';

import { useState, useEffect, useRef } from 'react';
import { IoCloseOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { gsap } from 'gsap';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccess: (message: string) => void;
}

export default function QuoteModal({
  isOpen,
  onClose,
  initialService = 'Web Development',
  onSuccess,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: initialService,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen && modalContentRef.current) {
      gsap.fromTo(
        modalContentRef.current,
        { opacity: 0, scale: 0.88, y: 25 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'back.out(1.4)' }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    if (modalContentRef.current) {
      gsap.to(modalContentRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(`Thank you ${formData.name}! Your quote request has been sent.`);
      setFormData({
        name: '',
        email: '',
        service: 'Web Development',
        message: '',
      });
      handleClose();
    }, 600);
  };

  return (
    <div className="modal-backdrop" onClick={handleClose} role="dialog" aria-modal="true">
      <div
        className="modal-content"
        ref={modalContentRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close-btn"
          onClick={handleClose}
          aria-label="Close quote modal"
          type="button"
        >
          <IoCloseOutline />
        </button>

        <h3 className="modal-title">Get A Free Quote</h3>
        <p className="modal-desc">
          Tell us about your project vision and we will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="quote-name">Your Name</label>
            <input
              id="quote-name"
              type="text"
              required
              placeholder="e.g. Alex Morgan"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-email">Email Address</label>
            <input
              id="quote-email"
              type="email"
              required
              placeholder="alex@company.com"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label htmlFor="quote-service">Selected Service</label>
            <select
              id="quote-service"
              className="form-input"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="Strategy & Research">Strategy & Research</option>
              <option value="Web Development">Web Development</option>
              <option value="Web Solution">Web Solution</option>
              <option value="App Design">App Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quote-message">Project Brief</label>
            <textarea
              id="quote-message"
              rows={3}
              required
              placeholder="Briefly describe your requirements, timeline, or budget..."
              className="form-input"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn form-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <IoCheckmarkCircle />
                <span>Submit Request</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
