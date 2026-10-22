"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const serviceList = [
    {
      id: "reiki",
      title: "Usui Reiki Energy Healing",
      badge: "Most Popular",
      desc: "An ancient Japanese gentle touch technique that balances the bio-magnetic energy field, releases emotional trauma, accelerates physical recovery, and restores deep spiritual equilibrium.",

      image: "/energy-healing.jpg",
      benefits: [
        "Clears stagnant chi and blocked chakras",
        "Deeply soothes nervous system and reduces anxiety",
        "Enhances sleep quality and mental clarity",
        "Includes personalized post-session energy reading",
      ],
    },
    {
      id: "yoga",
      title: "Integrative Somatic Yoga",
      badge: "Mind-Body Flow",
      desc: "Tailored one-on-one and small group somatic movement integrating Hatha alignment, Vinyasa breath synchronization, and restorative Yin poses to release physical tension.",

      image: "/yoga-practice.jpg",
      benefits: [
        "Restores spinal mobility and pelvic stability",
        "Cultivates mindful somatic awareness",
        "Personalized postural corrections and prop usage",
        "Combines pranayama breathwork with guided savasana",
      ],
    },
    {
      id: "chakra",
      title: "7-Chakra Realignment & Sound Bath",
      badge: "Deep Immersion",
      desc: "A multi-sensory vibrational therapy utilizing 432Hz quartz crystal singing bowls, pure essential oils, and focused energy work to tune each of your 7 primary energy centers.",

      image: "/hero-meditation.jpg",
      benefits: [
        "Harmonizes Root to Crown energy flow",
        "Vibrational sound resonance at cellular level",
        "Includes aura cleansing with sacred sage & palo santo",
        "Custom crystal prescription for home practice",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter Harmony",
      price: "$299",
      period: "3 Sessions",
      desc: "Ideal for beginners looking to experience foundational energy clearing and stress relief.",
      features: [
        "2x Usui Reiki Healing (60 min)",
        "1x Private Yoga Alignment (60 min)",
        "Comprehensive Energy Assessment",
        "Email support for integration",
      ],
      popular: false,
    },
    {
      name: "Chakra Transformation",
      price: "$540",
      period: "6 Sessions",
      desc: "Our signature 6-week progressive program for deep somatic unwinding and emotional reset.",
      features: [
        "3x Usui Reiki & Crystal Gridwork",
        "2x 7-Chakra Sound Immersion",
        "1x Holistic Life Coaching Session",
        "Customized Daily Breathwork Protocol",
        "Complimentary Aura Cleansing Mist",
      ],
      popular: true,
    },
    {
      name: "Master Illumination",
      price: "$980",
      period: "12 Sessions",
      desc: "Complete quarterly metamorphosis combining all healing modalities with ongoing mentorship.",
      features: [
        "Weekly 1-on-1 Sanctuary Sessions",
        "Full Access to Weekend Group Workshops",
        "Priority Booking & Flexible Rescheduling",
        "Direct WhatsApp Mentorship Access",
        "Quarterly Energy Blueprint & Astrological Integration",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <Navbar />

      {/* ===== INNER HERO BANNER ===== */}
      <section className="inner-hero">
        <div className="inner-hero-content">
          <div className="hero-badge">Holistic Offerings</div>
          <h1 className="inner-hero-title">Healing Modalities & Therapies</h1>
          <p className="inner-hero-desc">
            Explore our curated selection of sacred healing modalities, private yoga sessions,
            and immersive vibrational sound therapies designed to restore balance to mind, body, and spirit.
          </p>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="current">Services</span>
          </div>
        </div>
      </section>

      {/* ===== SERVICES DETAILED LIST ===== */}
      <section className="services-detail-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Individual Offerings</span>
            <h2 className="section-title">Personalized Healing Modalities</h2>
            <p className="section-desc">
              Every body is unique. Each session is customized following an initial intake assessment to address your specific energetic and physical intentions.
            </p>
          </div>

          <div className="services-detail-list">
            {serviceList.map((svc, idx) => (
              <div
                key={svc.id}
                className={`service-detail-card ${idx % 2 === 1 ? "reverse" : ""}`}
              >
                <div className="service-detail-image">
                  <div className="service-img-wrapper">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="service-detail-info">
                  <div className="service-meta-top">
                    <span className="service-badge-pill">{svc.badge}</span>

                  </div>
                  <h3>{svc.title}</h3>

                  <ul className="service-benefits-list">
                    {svc.benefits.map((b, i) => (
                      <li key={i}>✦ {b}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "24px" }}>
                    <Link href="/contact" className="btn-primary">
                      Book This Session ✦
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRICING PACKAGES ===== */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Curated Bundles</span>
            <h2 className="section-title">Healing Packages & Journeys</h2>
            <p className="section-desc">
              Commit to deep transformation with tiered package bundles that provide substantial savings and sustained energetic momentum.
            </p>
          </div>

          <div className="packages-grid">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`package-card ${pkg.popular ? "popular-card" : ""}`}
              >
                {pkg.popular && <div className="popular-ribbon">Most Recommended</div>}
                <h3>{pkg.name}</h3>
                <p className="pkg-desc">{pkg.desc}</p>
                <div className="pkg-price-row">
                  <span className="pkg-price">{pkg.price}</span>
                  <span className="pkg-period">/ {pkg.period}</span>
                </div>
                <hr className="pkg-divider" />
                <ul className="pkg-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>✓ {feat}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={pkg.popular ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center", marginTop: "auto" }}
                >
                  Select Package ✦
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta">
        <div className="cta-content">
          <h2>Need Guidance on the Best Modality?</h2>
          <p>
            Schedule a complimentary 15-minute phone consultation with Sella to discuss your personal wellness goals and receive recommendations.
          </p>
          <Link href="/contact" className="btn-white">
            Request Free Consultation ✦
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
