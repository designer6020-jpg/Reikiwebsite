"use client";

import Link from "next/link";
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

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            Sella<span>Yoga</span>
          </Link>
          <p>
            Empowering individuals to find balance, peace, and purpose through
            ancient healing practices and modern wellness techniques.
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
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services">Yoga Classes</Link>
            </li>
            <li>
              <Link href="/services">Reiki Healing</Link>
            </li>
            <li>
              <Link href="/services">Chakra Balancing</Link>
            </li>
            <li>
              <Link href="/services">Life Coaching</Link>
            </li>
            <li>
              <Link href="/services">Meditation Circles</Link>
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
              <Link href="/about">About Sella</Link>
            </li>
            <li>
              <Link href="/services">Our Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/contact">Book Consultation</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-newsletter">
          <h4>Newsletter</h4>
          <p>
            Subscribe for wellness tips, workshop updates, and healing
            inspiration delivered directly to your inbox.
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
        <span>© 2026 SellaYoga. All rights reserved.</span>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/about">Privacy Policy</Link>
          <Link href="/about">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
