"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" aria-label="Inner Healing School of Reiki - Home">
            <Image
              src="/inner-healing-logo-footer.png"
              alt="Inner Healing School of Reiki"
              width={140}
              height={123}
              className="footer-logo-img"
            />
          </Link>
          <p>
            Empowering individuals to find balance, peace, and spiritual alignment through
            sacred Usui Reiki healing, hypnotherapy, space blessings, and accredited courses.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="Facebook">
              f
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="Instagram">
              ✦
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Services & Courses</h4>
          <ul>
            <li>
              <Link href="/services#sessions-section">Reiki Sessions ($100/hr)</Link>
            </li>
            <li>
              <Link href="/services#sessions-section">Hypno-Reiki ($150)</Link>
            </li>
            <li>
              <Link href="/services#sessions-section">Hypnotherapy Session ($200)</Link>
            </li>
            <li>
              <Link href="/services#sessions-section">Shamanic Reiki (3 Hours)</Link>
            </li>
            <li>
              <Link href="/services#sessions-section">Distant Home Clearing ($200)</Link>
            </li>
            <li>
              <Link href="/services#courses-section">Reiki Courses (Levels 1–4)</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About The Inner Healing</Link>
            </li>
            <li>
              <Link href="/services">Services & Courses</Link>
            </li>
            <li>
              <Link href="/services#comparison">Investment Matrix</Link>
            </li>
            <li>
              <Link href="/contact">Contact Sanctuary</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-newsletter">
          <h4>Newsletter</h4>
          <p>
            Subscribe for wellness tips, workshop announcements, and sacred healing inspiration.
          </p>
          {subscribed ? (
            <div className="newsletter-success">
              ✦ Thank you for subscribing to our peaceful community!
            </div>
          ) : (
            <form className="footer-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Inner Healing School of Reiki. All rights reserved.</span>
        <div className="footer-bottom-right">
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
