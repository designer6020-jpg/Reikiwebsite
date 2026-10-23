"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What should I wear or prepare for my first Reiki session?",
      a: "Wear comfortable, loose-fitting clothing. Avoid heavy meals or caffeine 1-2 hours prior. During Reiki you remain fully clothed while resting comfortably on a padded heated massage table with bolsters and a soft blanket.",
    },
    {
      q: "How does distance / remote energy healing work?",
      a: "In quantum energy healing and Usui Reiki traditions, energy is not bound by physical distance or time. Remote sessions are conducted via a video/audio connection or scheduled quiet time, followed by a detailed voice memo debrief of energetic findings and intuitive guidance.",
    },
    {
      q: "Are yoga sessions suitable for complete beginners with injuries?",
      a: "Absolutely. All private sessions are 100% customized to your anatomy, flexibility, and physical limitations using props, alignment modifications, and gentle somatic breathwork.",
    },
    {
      q: "What is the cancellation and rescheduling policy?",
      a: "We kindly request 24 hours advance notice to reschedule or cancel your session so we can offer the reserved time to clients on our waiting list.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ===== INNER HERO BANNER ===== */}
      <section className="inner-hero inner-hero--contact">
        <div className="inner-hero-content">
          <div className="hero-badge">Get in Touch</div>
          <h1 className="inner-hero-title">Visit Our Sanctuary</h1>
          <p className="inner-hero-desc">
            We warmly welcome you to our healing space. Reach out to us for
            address details, email contact, and phone information.
          </p>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="current">Contact Us</span>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout-grid contact-layout-grid--single">
            <div className="contact-info-column contact-info-column--single">
              <div className="contact-card contact-card--featured">
                <div className="contact-card-header">
                  <span className="badge-small">✦ Sanctuary Information</span>
                  <h2>Visit our healing space</h2>
                </div>

                <div className="contact-grid">


                  <div className="contact-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                      <h4>Email</h4>
                      <a href="mailto:contact@innerhealing.com" className="contact-link-val">
                        contact@innerhealing.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">📞</div>
                    <div>
                      <h4>Phone</h4>
                      <a href="tel:250-574-1442" className="contact-link-val">
                        250-574-1442
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-hours">
                  <h4>Opening Hours</h4>
                  <p>Monday – Friday: 8:00 AM – 7:30 PM</p>
                  <p>Saturday: 9:00 AM – 5:00 PM</p>
                  <p>Sunday: Silent Meditation Retreats Only</p>
                </div>
              </div>

              <div className="location-amenities-card">
                <h4>Sanctuary Amenities</h4>
                <div className="amenities-tags">
                  <span className="amenity-tag">Free Dedicated Parking</span>
                  <span className="amenity-tag">Private Changing Rooms</span>
                  <span className="amenity-tag">Filtered Alkaline Water</span>
                  <span className="amenity-tag">Organic Aromatherapy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Common Questions</span>
            <h2 className="section-title">Everything You Need to Know</h2>
            <p className="section-desc">
              Answers to frequently asked questions about our sessions, methods,
              and studio etiquette.
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${activeFaq === idx ? "active" : ""}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-toggle">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </div>
                {activeFaq === idx && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
