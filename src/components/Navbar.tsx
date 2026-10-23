"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
        <Link
          href="/"
          className="nav-logo"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Inner Healing School of Reiki - Home"
        >
          <Image
            src="/inner-healing-logo.png"
            alt="Inner Healing School of Reiki"
            width={180}
            height={48}
            priority
            className="nav-logo-img"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <Link href="/" className={isActive("/") ? "active-nav-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={isActive("/about") ? "active-nav-link" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={isActive("/services") ? "active-nav-link" : ""}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={isActive("/contact") ? "active-nav-link" : ""}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`hamburger-bar ${mobileMenuOpen ? "open-1" : ""}`}
          ></span>
          <span
            className={`hamburger-bar ${mobileMenuOpen ? "open-2" : ""}`}
          ></span>
          <span
            className={`hamburger-bar ${mobileMenuOpen ? "open-3" : ""}`}
          ></span>
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown">
            <Link
              href="/"
              className={`mobile-link ${isActive("/") ? "active-nav-link" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`mobile-link ${isActive("/about") ? "active-nav-link" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`mobile-link ${isActive("/services") ? "active-nav-link" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`mobile-link ${isActive("/contact") ? "active-nav-link" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
