"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="inner-hero">
        <div className="inner-hero-content">
          <div className="hero-badge">Legal Information</div>
          <h1 className="inner-hero-title">Privacy Policy</h1>
          <p className="inner-hero-desc">
            Your privacy and energetic confidentiality are deeply sacred to us. Learn how we handle, protect, and respect your personal information.
          </p>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="current">Privacy Policy</span>
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
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: "24px" }}>
              We collect information that you voluntarily provide to us when scheduling a healing session, enrolling in a Reiki certification course, or contacting us via our website. This may include your full name, email address, phone number, and any intake notes or wellness intentions you choose to share.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              2. How We Use Your Information
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Your personal information is used exclusively to deliver personalized healing sessions, administer Reiki course certifications, communicate scheduling details, and send occasional studio announcements if you have opted in. We never sell, rent, or trade your personal data to third parties.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              3. Confidentiality of Sessions
            </h2>
            <p style={{ marginBottom: "24px" }}>
              All conversations, intuitive readings, hypnotherapy discussions, and energetic assessments conducted during 1-on-1 sessions or group training circles remain strictly confidential and protected in accordance with ethical holistic wellness standards.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              4. Cookies & Analytics
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Our website may utilize standard cookies and anonymized analytics to evaluate page traffic and enhance user navigation. You may choose to disable cookies through your personal browser settings at any time.
            </p>

            <h2 style={{ color: "var(--primary-dark)", fontSize: "1.6rem", marginBottom: "14px" }}>
              5. Contact Us Regarding Your Privacy
            </h2>
            <p>
              If you have any questions or wish to request the deletion or correction of your stored records, please reach out directly to us at{" "}
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
