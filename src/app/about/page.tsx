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
          <h1 className="inner-hero-title">About Darshan & Reiki Healing</h1>
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
                  src="/about-me.jpg"
                  alt="Darshan in serene meditative state"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div className="about-experience-badge">
                <span className="exp-num">15+</span>
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
                    <h4>Subconscious Rewiring</h4>
                    <p>Reprogramming limiting beliefs and releasing subconscious blocks through clinical hypnotherapy.</p>
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

      {/* ===== WHO WE ARE & MISSION / VISION ===== */}
      <section className="who-we-are-section">
        <div className="container">
          <div className="who-we-are-grid">
            <div className="who-we-are-text">
              <span className="section-subtitle">Who We Are</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Dedicated to Inner Peace & Personal Transformation
              </h2>
              <p className="lead-text">
                ReikiHealing is a holistic wellness practice dedicated to creating a peaceful and supportive space for self-exploration, relaxation, and personal transformation.
              </p>
              <p>
                We believe that taking time to understand ourselves is an important part of living a more mindful and balanced life. Our approach brings together traditional Reiki practices, guided hypnotic techniques, subconscious exploration, and Shamanic-inspired spiritual work to offer different pathways for personal reflection.
              </p>
              <p>
                Whether you are looking for a moment of calm, a deeper connection with yourself, or a meaningful spiritual experience, we welcome you to explore the approach that resonates with you.
              </p>

              <div className="mission-vision-grid">
                <div className="mission-vision-card">
                  <div className="mv-icon">🌿</div>
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to make holistic wellness experiences accessible, compassionate, and meaningful. We aim to help individuals create space for relaxation, self-awareness, and personal growth through respectful, individualised sessions.
                  </p>
                </div>

                <div className="mission-vision-card">
                  <div className="mv-icon">✨</div>
                  <h3>Our Vision</h3>
                  <p>
                    We envision a world where people feel empowered to pause, listen to their inner selves, and approach life&apos;s challenges with greater awareness, compassion, and intention.
                  </p>
                </div>
              </div>
            </div>

            <div className="who-we-are-images">
              <div className="who-image-main">
                <Image
                  src="/energy-healing.jpg"
                  alt="Restorative energy healing and reiki practice"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="who-image-secondary">
                <Image
                  src="/treatments-6-1.webp"
                  alt="Mindful sound and meditation therapy"
                  fill
                  sizes="(max-width: 1024px) 80vw, 380px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="who-floating-badge">
                ✦ Mind, Body & Spirit In Harmony
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR CORE VALUES ===== */}
      <section className="core-values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What Guides Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-desc">
              The foundational intentions and heartfelt principles that shape every session, interaction, and healing container.
            </p>
          </div>

          <div className="core-values-cards-grid">
            <div className="core-val-card">
              <div className="core-val-num">01.</div>
              <h3>Compassion</h3>
              <p>Meeting every individual with kindness, empathy, and respect.</p>
            </div>

            <div className="core-val-card">
              <div className="core-val-num">02.</div>
              <h3>Authenticity</h3>
              <p>Creating an honest and welcoming healing experience.</p>
            </div>

            <div className="core-val-card">
              <div className="core-val-num">03.</div>
              <h3>Mindfulness</h3>
              <p>Encouraging presence, reflection, and a deeper connection with oneself.</p>
            </div>

            <div className="core-val-card">
              <div className="core-val-num">04.</div>
              <h3>Personal Growth</h3>
              <p>Supporting each person&apos;s unique process of self-discovery.</p>
            </div>

            <div className="core-val-card">
              <div className="core-val-num">05.</div>
              <h3>Respect</h3>
              <p>Honouring personal boundaries, beliefs, and individual choices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH TO HEALING ===== */}
      <section className="approach-section">
        <div className="container">
          <div className="approach-grid">
            <div className="approach-image-wrap">
              <Image
                src="/treating-patient.jpg"
                alt="Therapeutic reiki and subconscious healing session"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="approach-text">
              <span className="section-subtitle">Personalized Care</span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Our Approach to Healing
              </h2>
              <p>
                At ReikiHealing, we recognise that well-being is personal and that no single approach suits everyone. Our sessions are designed to offer a supportive environment for relaxation and reflection, with practices selected according to your preferences and intentions.
              </p>

              <div className="approach-disclaimer-box">
                <p>
                  We encourage open communication and realistic expectations throughout your experience. Our holistic services are complementary wellness practices and are not a substitute for medical or mental health diagnosis or treatment.
                </p>
              </div>

              <Link href="/services" className="btn-primary" style={{ display: "inline-block", marginTop: "10px" }}>
                Explore Services & Courses ✦
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Step Into Peace & Vitality?</h2>
          <p>
            Explore our services and discover a supportive space for relaxation, self-awareness, and personal growth. Book Your Session


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
