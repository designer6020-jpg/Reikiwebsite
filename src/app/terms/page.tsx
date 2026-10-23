"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />

      <section className="inner-hero">
        <div className="inner-hero-content">
          <div className="hero-badge">Studio Policies</div>
          <h1 className="inner-hero-title">Terms of Use</h1>
          <p className="inner-hero-desc">
            Please review our studio agreements, booking guidelines, and disclaimer regarding holistic healing sessions and certification courses.
          </p>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="current">Terms of Use</span>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0", background: "var(--warm-white)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{
            background: "#ffffff",
            padding: "48px 40px",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--border-soft)",
            boxShadow: "var(--shadow-soft)",
            lineHeight: 1.8,
            color: "var(--text-medium)",
          }}>
            <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginBottom: "24px" }}>
              Last Updated: October 2026
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ marginBottom: "24px" }}>
              By accessing sellayoga.com, booking private sessions, or enrolling in our Reiki courses, you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              2. Holistic Wellness Disclaimer
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Reiki energy healing, Shamanic sessions, hypnotherapy, and distant space ceremonies are gentle, complementary spiritual modalities intended to support overall vitality and energetic balance. They are not a substitute for licensed medical examination, psychological diagnosis, or clinical treatment. Always consult a qualified medical professional for health concerns.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              3. Booking & Cancellation Policy
            </h2>
            <p style={{ marginBottom: "24px" }}>
              We require at least 24 hours advance notice for rescheduling or canceling a private session. For multi-day Reiki certification courses, registration deposits secure your reserved space in the intimate cohort and course materials.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              4. Course Certification & Intellectual Property
            </h2>
            <p style={{ marginBottom: "24px" }}>
              All course manuals, sacred symbol guides, audio recordings, and curriculum materials provided during training are the intellectual property of Sella and are intended solely for personal practice and professional client delivery as accredited. Materials may not be duplicated or republished without prior written permission.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              5. Contact & Inquiries
            </h2>
            <p>
              For questions regarding our terms, agreements, or course policies, please contact us at{" "}
              <a href="mailto:contact@sellayoga.com" style={{ color: "var(--primary)", fontWeight: 600 }}>
                contact@sellayoga.com
              </a>{" "}
              or call{" "}
              <a href="tel:250-574-1442" style={{ color: "var(--primary)", fontWeight: 600 }}>
                250-574-1442
              </a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
