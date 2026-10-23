"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* ===== INNER HERO BANNER ===== */}
      <section className="inner-hero inner-hero--about">
        <div className="inner-hero-content">
          <div className="hero-badge">Our Story & Purpose</div>
          <h1 className="inner-hero-title">About Darshan & Sacred Healing</h1>
          <p className="inner-hero-desc">
            Guiding you toward harmony, vitality, and deep inner peace through the timeless
            wisdom of Usui Reiki energy healing, intuitive clearing, and transformational wellness.
          </p>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT STORY SECTION ===== */}
      <section className="about-detailed-section">
        <div className="container">
          <div className="about-detailed-grid">
            <div className="about-image-column">
              <div className="about-large-image-wrapper">
                <Image
                  src="/hero-meditation1.jpg"
                  alt="Darshan in serene meditative state"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="about-experience-badge">
                <span className="exp-num">12+</span>
                <span className="exp-text">Years of Spiritual Practice & Healing Mastery</span>
              </div>
            </div>

            <div className="about-text-column">
              <span className="section-subtitle">Meet Your Guide</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                A Journey Rooted in Light, Healing, and Compassion
              </h2>
              <p className="about-lead">
                Welcome. I am Darshan Gill, I am a reiki master A certified energetic practitioner channel universal life force to heal and restore harmony to your mind, body and spirit to clear blockage, reduce stress, anxiety and promote deep relaxation and restore vitality
              </p>
              <p className="about-body mb-1">
                Shaman healer ( is a spiritual healer who act as a bridge between physical and spiritual worlds)
              </p>

              <p className="about-body">
                Clinical Hypnotherapist
                A clinical hypnotherapist combines evidenced-based psychological techniques with therapeutic hypnosis to treat behavioural, medical and emotional challenges at their root source
              </p>
              <p className="about-body">
                Or
                A licensed hypnotherapist utilizing therapeutic trance state to help you overcome anxiety, stress, break habits and heal at root source
              </p>
              <p className="about-body">
                Hypno- Reiki
                An advanced practitioner combining the subconscious rewriting of hypnotherapy with the deep energetic clearing of Reiki to break mental blocks, release trapped physical and mental tension and accelerate your healing from inside out
              </p>
              {/* <div className="about-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon">✦</div>
                  <div>
                    <h4>Usui Reiki Lineage</h4>
                    <p>Direct authentic lineage transmitting pure universal life force energy.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">🌸</div>
                  <div>
                    <h4>Somatic Alignment</h4>
                    <p>Integrative yoga therapy customized for tension release and mobility.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">✨</div>
                  <div>
                    <h4>Chakra Realignment</h4>
                    <p>Clearing energetic stagnation to restore emotional equilibrium and clarity.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-icon">🕊️</div>
                  <div>
                    <h4>Mindful Coaching</h4>
                    <p>Empowering you with practical rituals for sustainable daily well-being.</p>
                  </div>
                </div>
              </div> */}

              <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="tel:250-574-1442" className="btn-primary">
                  Call Now: 250-574-1442 📞
                </a>
                <Link href="/services" className="btn-secondary">
                  Explore Modalities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHILOSOPHY & VALUES ===== */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Core Philosophy</span>
            <h2 className="section-title">The Sacred Principles That Guide Us</h2>
            <p className="section-desc">
              Every breath, touch, and movement is held within a container of unconditional presence,
              reverence, and scientific mindfulness.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <h3>Holistic Wholeness</h3>
              <p>
                We do not view you as broken. Healing is not fixing; it is removing what obscures
                your natural brilliance and radiance.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">02</div>
              <h3>Sacred Safety</h3>
              <p>
                Our sanctuary provides a deeply grounding, confidential space where vulnerability
                is honored and deep somatic release can occur safely.
              </p>
            </div>
            <div className="value-card">
              <div className="value-number">03</div>
              <h3>Empowerment First</h3>
              <p>
                You are your own ultimate healer. We equip you with self-care rituals, breathwork,
                and energetic hygiene techniques for lifelong independence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SANCTUARY PREVIEW SECTION ===== */}
      <section className="sanctuary-section">
        <div className="container">
          <div className="sanctuary-grid">
            <div className="sanctuary-text">
              <span className="section-subtitle">Our Healing Space</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                A Peaceful Haven Designed for Stillness
              </h2>
              <p>
                Nestled away from city clamor, the Inner Healing Sanctuary features warm organic textiles,
                aromatherapeutic Himalayan salt lamps, therapeutic crystal sound bowls, and natural
                sunlight that nurtures tranquility from the second you step through our doors.
              </p>
              <ul className="sanctuary-features">
                <li>✦ Acoustic sound-dampened private treatment suites</li>
                <li>✦ Organic botanical herbal teas post-session</li>
                <li>✦ Gemstone-infused mats and crystal energy grids</li>
                <li>✦ Individualized vibrational sound tuning</li>
              </ul>
              <Link href="/contact" className="btn-primary" style={{ marginTop: "24px" }}>
                Schedule Studio Visit ✦
              </Link>
            </div>

            <div className="sanctuary-images">
              <div className="sanctuary-img-box img-1">
                <Image
                  src="/energy-healing.jpg"
                  alt="Reiki Healing in Sanctuary"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="sanctuary-img-box img-2">
                <Image
                  src="/person-conducting.jpg"
                  alt="Yoga Movement in Studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Step Into Peace & Vitality?</h2>
          <p>
            Reserve your personal 1-on-1 energy alignment or private yoga session.
            We look forward to welcoming you into our healing circle.
          </p>
          <a href="tel:250-574-1442" className="btn-white">
            Call Now: 250-574-1442 📞
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
