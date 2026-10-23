"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"all" | "sessions" | "courses">("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // ===== SESSIONS & CEREMONIES LIST =====
  const sessionList = [
    {
      id: "reiki-session",
      title: "Usui Reiki Energy Healing",
      price: "$100",
      rate: "/ hour",
      duration: "60 Minutes",
      badge: "Signature Healing",
      image: "/energy-healing.jpg",
      desc: "A deeply restorative Japanese hands-on healing therapy that channels universal life-force energy (Ki) into your 7 energy centers. This gentle practice dissolves energetic blocks, calms an overstimulated nervous system, and accelerates your body's innate self-healing capabilities.",
      benefits: [
        "Clears stagnant bio-magnetic energy & aligns primary chakras",
        "Deeply soothes the central nervous system to relieve anxiety & burnout",
        "Releases somatic tension, chronic fatigue, and emotional heaviness",
        "Includes personalized pre-session consultation and post-session energetic debrief",
      ],
      bookingParam: "reiki-session-100",
    },
    {
      id: "hypno-reiki",
      title: "Hypno-Reiki Integration",
      price: "$150",
      rate: "/ session",
      duration: "75 – 90 Minutes",
      badge: "Mind & Energy Synthesis",
      image: "/treatments-6-1.webp",
      desc: "A synergistic therapeutic integration combining guided trance hypnosis with high-vibrational Usui Reiki energy. While your conscious mind relaxes into an open theta state, healing frequencies penetrate straight to the cellular and subconscious levels to dissolve deep-seated energetic resistance.",
      benefits: [
        "Unlocks the subconscious mind while soothing the physical energy field",
        "Gently resolves self-sabotaging patterns, phobias, and emotional loops",
        "Amplifies energy reception without conscious resistance or overthinking",
        "Anchors positive subconscious post-hypnotic suggestions into the auric field",
      ],
      bookingParam: "hypno-reiki-150",
    },
    {
      id: "hypnotherapy",
      title: "Subconscious Hypnotherapy",
      price: "$200",
      rate: "/ session",
      duration: "75 – 90 Minutes",
      badge: "Subconscious Rewiring",
      image: "/treating-patient.jpg",
      desc: "A targeted, transformative hypnotherapy session dedicated to subconscious reprogramming. By communicating directly with your subconscious blueprint, we dismantle outdated narratives, resolve past emotional trauma, eliminate stress triggers, and install resilient confidence.",
      benefits: [
        "Pinpoints and resolves emotional root causes rather than surface symptoms",
        "Inner child reconciliation, emotional parts work & timeline reframing",
        "Reprograms limiting beliefs, imposter feelings, and anxiety patterns",
        "Includes a personalized audio integration anchor for daily reinforcement",
      ],
      bookingParam: "hypnotherapy-200",
    },
    {
      id: "shamanic-reiki",
      title: "Shamanic Reiki Sacred Journey",
      price: "$200",
      rate: "/ session (3 hours)",
      duration: "3 Hours Intensive",
      badge: "3-Hour Deep Immersion",
      image: "/hero-meditation1.jpg",
      desc: "An immersive 3-hour sacred healing container merging authentic Usui Reiki channeling with timeless Earth-honoring shamanic rituals. Through sacred smoke cleansing, rhythmic drumming, energetic cord-cutting, and vital soul retrieval, heavy energies are released and your spirit is profoundly renewed.",
      benefits: [
        "3 dedicated hours of deep, unhurried ceremonial healing space",
        "Energetic cord-cutting, heavy energy extraction & aura purification",
        "Vibrational sound resonance with sacred drums, rattles, and singing bowls",
        "Personalized post-ceremony energy blueprint and integration rituals",
      ],
      bookingParam: "shamanic-reiki-200-3hr",
    },
    {
      id: "distant-home-clearing",
      title: "Distant Home Clearing & Blessing Ceremony",
      price: "$200",
      rate: "/ ceremony",
      duration: "90 – 120 Minutes",
      badge: "Sacred Space Sanctification",
      image: "/treatments-4-1.webp",
      desc: "A profound remote energetic purification and space clearing ceremony for your home, apartment, workspace, or new residence. Working with quantum distance Reiki, sacred elemental clearing, and high-vibrational energetic gridwork, this ceremony clears residual psychic imprints, past conflict, or heavy stagnant energy, sealing your space with peace, protection, and harmonious abundance.",
      benefits: [
        "Comprehensive property-wide remote clearing of stagnant, heavy, or conflicting energy",
        "Dissolves lingering energetic residue from previous occupants, illness, or distress",
        "Anchors an energetic perimeter shield of peace, safety, clarity, and harmony",
        "Includes personalized written energetic debrief and ongoing home-maintenance tips",
      ],
      bookingParam: "home-clearing-ceremony-200",
    },
  ];

  // ===== REIKI COURSES (Certification Pathway) =====
  const reikiCourses = [
    {
      level: "Level 1",
      name: "The Awakening (First Degree)",
      duration: "1 Day Course",
      price: "$300",
      priceNote: "Complete 1-day training & attunement",
      badge: "Beginner Friendly",
      featured: false,
      desc: "Lay the sacred foundation for energy healing. Connect with universal life-force energy for self-treatment and healing loved ones, family, and pets.",
      prereq: "No prior experience required — open to all.",
      curriculum: [
        "Usui Reiki history, principles & spiritual lineage",
        "First Degree sacred attunement ceremony",
        "Complete hand positions for self & others",
        "Aura scanning (Byosen) & energy clearing",
        "Comprehensive printed Level 1 Manual",
        "Official Reiki Level 1 Certificate of Completion",
      ],
      bookingParam: "reiki-course-level-1",
    },
    {
      level: "Level 2",
      name: "The Transcendence (Second Degree)",
      duration: "1 Day Course",
      price: "$300",
      priceNote: "Complete 1-day intensive certification",
      badge: "Practitioner Level",
      featured: true,
      desc: "Step into professional practice. Unlock the sacred Reiki symbols to perform distance healing across time and space and heal emotional/karmic patterns.",
      prereq: "Prerequisite: Reiki Level 1 certification.",
      curriculum: [
        "3 sacred Usui symbols (Power, Mental/Emotional, Distance)",
        "Remote & distance healing across time and space",
        "Subconscious trauma & past-pattern clearing protocols",
        "Level 2 sacred attunement amplifying your frequency",
        "Professional practitioner ethics & client intake forms",
        "Official Reiki Level 2 Practitioner Certificate",
      ],
      bookingParam: "reiki-course-level-2",
    },
    {
      level: "Level 3",
      name: "Master Practitioner (Third Degree)",
      duration: "2 Days Course",
      price: "$600",
      priceNote: "Comprehensive 2-day immersion",
      badge: "Advanced Mastery",
      featured: false,
      desc: "Deepen your spiritual connection with the Usui Master symbol (Dai Ko Myo). Master psychic surgery, aura extraction, and continuous crystal healing grids.",
      prereq: "Prerequisite: Reiki Level 2 certification.",
      curriculum: [
        "Empowerment & attunement to Usui Master Symbol (Dai Ko Myo)",
        "Psychic surgery & energetic blockage extraction",
        "Creating & charging 24/7 Reiki crystal grids",
        "2 full days of hands-on experiential meditation & practice",
        "Advanced aura shielding & energetic sovereignty",
        "Official Reiki Master Practitioner Certificate & Manual",
      ],
      bookingParam: "reiki-course-level-3",
    },
    {
      level: "Level 4",
      name: "Master Teacher / Shihan (Fourth Degree)",
      duration: "3 Days Course",
      price: "$900",
      priceNote: "Complete 3-day teacher training",
      badge: "Teaching Lineage",
      featured: false,
      desc: "The pinnacle of Usui Reiki training. Learn the sacred initiation methodology to pass attunements for all levels, teach students, and lead your own academy.",
      prereq: "Prerequisite: Reiki Level 3 Master Practitioner certification.",
      curriculum: [
        "Step-by-step training to pass attunements for Levels 1–4",
        "Violet Breath, Tibetan master symbols & sacred Reiju blessings",
        "Curriculum design, teaching pedagogy & student manuals",
        "Establishing and growing an ethical Reiki teaching practice",
        "3 days of intensive initiation rituals & teaching practicum",
        "Accredited Usui Reiki Master Teacher Certificate & Mentorship",
      ],
      bookingParam: "reiki-course-level-4",
    },
  ];

  // ===== COMPARISON / ALL OFFERINGS OVERVIEW =====
  const comparisonList = [
    {
      name: "Reiki Sessions",
      category: "Healing Session",
      duration: "1 Hour",
      price: "$100",
      focus: "Gentle touch chakra balancing, deep stress relief, energy renewal",
      type: "session",
      link: "/contact?interest=reiki-session-100",
    },
    {
      name: "Hypno-Reiki",
      category: "Healing Session",
      duration: "75–90 Min",
      price: "$150",
      focus: "Trance hypnosis + Reiki energy to dissolve subconscious blocks",
      type: "session",
      link: "/contact?interest=hypno-reiki-150",
    },
    {
      name: "Hypnotherapy Session",
      category: "Healing Session",
      duration: "75–90 Min",
      price: "$200",
      focus: "Targeted subconscious reprogramming, trauma release, mindset reset",
      type: "session",
      link: "/contact?interest=hypnotherapy-200",
    },
    {
      name: "Shamanic Reiki",
      category: "Healing Session",
      duration: "3 Hours",
      price: "$200",
      focus: "Deep ceremony: cord-cutting, soul retrieval, sound bath, purification",
      type: "session",
      link: "/contact?interest=shamanic-reiki-200-3hr",
    },
    {
      name: "Distant Home Clearing & Blessing",
      category: "Space Ceremony",
      duration: "90–120 Min",
      price: "$200",
      focus: "Remote home energetic purification, clearing stagnant energy & sacred blessing",
      type: "session",
      link: "/contact?interest=home-clearing-ceremony-200",
    },
    {
      name: "Reiki Level 1 Course",
      category: "Certification Course",
      duration: "1 Day Course",
      price: "$300",
      focus: "Foundational energy healing, self-care, First Degree Attunement",
      type: "course",
      link: "/contact?interest=reiki-course-level-1",
    },
    {
      name: "Reiki Level 2 Course",
      category: "Certification Course",
      duration: "1 Day Course",
      price: "$300",
      focus: "3 sacred symbols, distance healing, practitioner certification",
      type: "course",
      link: "/contact?interest=reiki-course-level-2",
    },
    {
      name: "Reiki Level 3 Course",
      category: "Certification Course",
      duration: "2 Days Course",
      price: "$600",
      focus: "Usui Master Symbol, psychic surgery, crystal grids, Master Practitioner",
      type: "course",
      link: "/contact?interest=reiki-course-level-3",
    },
    {
      name: "Reiki Level 4 Course",
      category: "Certification Course",
      duration: "3 Days Course",
      price: "$900",
      focus: "Passing all attunements, teacher lineage, Master Teacher certification",
      type: "course",
      link: "/contact?interest=reiki-course-level-4",
    },
  ];

  // ===== FAQS =====
  const faqs = [
    {
      q: "What is the difference between standard Reiki and Shamanic Reiki?",
      a: "A standard Reiki session is a 60-minute gentle, soothing treatment focused on balancing the chakras and calming the nervous system ($100/hr). Shamanic Reiki is an intensive 3-hour ceremonial experience ($200) that integrates ancient Earth-based traditions, sacred rattling and drumming, energetic cord-cutting, aura clearing, and soul retrieval.",
    },
    {
      q: "How does the Distant Home Clearing and Blessing Ceremony work?",
      a: "Energy is not bound by physical distance or walls. During a Distant Home Clearing & Blessing Ceremony ($200), Sella connects remotely to the energetic blueprint of your home, apartment, or workspace. Using quantum distance Reiki, elemental clearing, and sacred gridding, heavy or stagnant energies from past tenants, stress, or conflicts are dissolved, and your living space is blessed with high-vibrational peace and protection.",
    },
    {
      q: "How does Hypno-Reiki combine both modalities?",
      a: "Hypno-Reiki ($150) combines the best of subconscious hypnotherapy and bio-energetic Reiki. By relaxing your conscious mental resistance through gentle hypnosis, your body enters a receptive theta state where Reiki frequencies can clear deeply buried emotional blockages at the cellular level.",
    },
    {
      q: "Can complete beginners attend the Reiki Level 1 Course?",
      a: "Yes! Level 1 requires no prior experience or special background. Everyone possesses the natural capacity to channel universal life-force energy. You will receive your First Degree attunement, complete hands-on instruction, a manual, and your certificate in a supportive 1-day course ($300).",
    },
    {
      q: "Can I take Level 1 and Level 2 together or one after the other?",
      a: "While they can be scheduled closely, we generally recommend taking Level 1 ($300, 1 day) first to allow for a 21-day energetic integration period before completing Level 2 ($300, 1 day). However, accelerated intensive schedules can be arranged upon consultation.",
    },
    {
      q: "What are the prerequisites for Level 3 and Level 4 Master Teacher?",
      a: "To enroll in Level 3 Master Practitioner ($600, 2 days), you must hold a verified Reiki Level 2 certification. To enroll in Level 4 Master Teacher ($900, 3 days), you must have completed Level 3 and feel called to initiate and mentor other students.",
    },
    {
      q: "How do I schedule a session or register for an upcoming course?",
      a: "You can click any 'Book' or 'Enroll' button to reach our contact page with your selection pre-filled, or call Sella directly at 250-574-1442 to confirm upcoming course calendar dates and private session availability.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* ===== INNER HERO BANNER ===== */}
      <section className="inner-hero">
        <div className="inner-hero-content">
          <div className="hero-badge">Sacred Therapies & Reiki Academy</div>
          <h1 className="inner-hero-title">Healing Sessions & Reiki Courses</h1>
          <p className="inner-hero-desc">
            Experience restorative 1-on-1 bio-energetic and subconscious healing, sacred space clearings, or embark on a transformative certification path with accredited Usui Reiki training from Level 1 through Master Teacher.
          </p>
          <div className="breadcrumbs">
            <Link href="/">Home</Link>
            <span>/</span>
            <span className="current">Services & Courses</span>
          </div>
        </div>
      </section>

      {/* ===== SUB-NAVIGATION BAR ===== */}
      <nav className="services-nav-wrap" aria-label="Services Page Navigation">
        <div className="services-nav-inner">
          <button
            type="button"
            className={`services-nav-link ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Offerings <span className="services-nav-pill-count">9</span>
          </button>
          <button
            type="button"
            className={`services-nav-link ${activeTab === "sessions" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("sessions");
              document.getElementById("sessions-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Healing & Ceremonies <span className="services-nav-pill-count">from $100</span>
          </button>
          <button
            type="button"
            className={`services-nav-link ${activeTab === "courses" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("courses");
              document.getElementById("courses-section")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reiki Courses <span className="services-nav-pill-count">Levels 1–4</span>
          </button>
          <a href="#comparison" className="services-nav-link">
            Investment Summary ✦
          </a>
          <a href="#faq" className="services-nav-link">
            FAQ
          </a>
        </div>
      </nav>

      {/* ===== HEALING SESSIONS & CEREMONIES DETAIL SECTION ===== */}
      {(activeTab === "all" || activeTab === "sessions") && (
        <section className="services-detail-section" id="sessions-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Individual Healing Sessions & Ceremonies</span>
              <h2 className="section-title">Holistic Energy & Mind Therapies</h2>
              <p className="section-desc">
                Each session is conducted in a tranquil, sacred space tailored to your unique bio-energetic field and mental wellbeing. Choose the modality that speaks to your intention.
              </p>
            </div>

            <div className="services-detail-list">
              {sessionList.map((svc, idx) => (
                <article
                  key={svc.id}
                  className={`service-detail-card ${idx % 2 === 1 ? "reverse" : ""}`}
                >
                  <div className="service-detail-image">
                    <div className="service-img-wrapper">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>

                  <div className="service-detail-info">
                    <div className="service-meta-row">
                      <span className="service-badge-pill">{svc.badge}</span>
                      <div className="service-price-tag-badge">
                        <span className="service-price-val">{svc.price}</span>
                        <span className="service-price-unit">{svc.rate}</span>
                      </div>
                    </div>

                    <div className="service-duration-pill">
                      ⏱ Duration: <strong>{svc.duration}</strong>
                    </div>

                    <h3>{svc.title}</h3>
                    <p className="service-text">{svc.desc}</p>

                    <div style={{ marginBottom: "12px", fontWeight: 600, fontSize: "0.86rem", color: "var(--primary-dark)" }}>
                      Key Inclusions & Outcomes:
                    </div>
                    <ul className="service-benefits-list">
                      {svc.benefits.map((b, i) => (
                        <li key={i}>✦ {b}</li>
                      ))}
                    </ul>

                    <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <a
                        href="tel:250-574-1442"
                        className="btn-primary"
                      >
                        Call Now: 250-574-1442 📞
                      </a>
                      <Link
                        href={`/contact?interest=${svc.bookingParam}`}
                        className="btn-secondary"
                      >
                        Inquire Online
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== REIKI COURSES SECTION (ACADEMY) ===== */}
      {(activeTab === "all" || activeTab === "courses") && (
        <section className="courses-section" id="courses-section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">Reiki Training Academy</span>
              <h2 className="section-title">Usui Reiki Certification Curriculum</h2>
              <p className="section-desc">
                Awaken your healing touch and step onto an accredited practitioner and master teacher lineage. All courses include authentic Japanese sacred attunements, comprehensive manuals, hands-on practicum, and recognized certificates.
              </p>
            </div>

            <div className="courses-grid-4">
              {reikiCourses.map((course) => (
                <div
                  key={course.level}
                  className={`course-card ${course.featured ? "featured-course" : ""}`}
                >
                  {course.featured && (
                    <div className="course-badge-flag">Most Popular Path</div>
                  )}

                  <div className="course-level-tag">{course.level}</div>
                  <h3 className="course-title">{course.name}</h3>

                  <div className="course-duration-badge">
                    ⏱ {course.duration}
                  </div>

                  <div className="course-price-box">
                    <span className="course-price">{course.price}</span>
                    <span className="course-price-sub">{course.duration}</span>
                  </div>

                  <p className="course-desc">{course.desc}</p>

                  <div className="course-prereq-note">
                    {course.prereq}
                  </div>

                  <div className="course-features-title">What is Included:</div>
                  <ul className="course-features-list">
                    {course.curriculum.map((item, cIdx) => (
                      <li key={cIdx}>
                        <span className="bullet">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="tel:250-574-1442"
                    className={course.featured ? "btn-primary" : "btn-secondary"}
                    style={{ width: "100%", justifyContent: "center", marginTop: "auto", textAlign: "center" }}
                  >
                    Call Now: 250-574-1442 📞
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== ACADEMY PILLARS ===== */}
      <section className="academy-pillars-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Train With Sella</span>
            <h2 className="section-title">A Sacred & Supportive Learning Environment</h2>
            <p className="section-desc">
              Whether you are discovering energy healing for personal empowerment or building a professional practice, our courses provide unbroken lineage, personal attention, and lifelong community.
            </p>
          </div>

          <div className="academy-pillars-grid">
            <div className="academy-pillar-card">
              <span className="academy-pillar-icon">🌿</span>
              <h4>Authentic Usui Lineage</h4>
              <p>
                Taught in accordance with traditional Usui Shiki Ryoho principles with direct lineage attunements honoring genuine Japanese energy cultivation.
              </p>
            </div>

            <div className="academy-pillar-card">
              <span className="academy-pillar-icon">🤲</span>
              <h4>Hands-On Practicum</h4>
              <p>
                Extensive real-time practice giving and receiving sessions, aura scanning, and crystal integration so you graduate confident in your abilities.
              </p>
            </div>

            <div className="academy-pillar-card">
              <span className="academy-pillar-icon">📜</span>
              <h4>Accredited Certification</h4>
              <p>
                Receive comprehensive printed workbooks, sacred symbol charts, and recognized certificates eligible for professional practice and insurance.
              </p>
            </div>

            <div className="academy-pillar-card">
              <span className="academy-pillar-icon">💫</span>
              <h4>Lifetime Mentorship</h4>
              <p>
                Enjoy ongoing access to student Reiki shares, continuing education circles, and personal guidance from Sella whenever questions arise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPLETE INVESTMENT & COMPARISON TABLE ===== */}
      <section className="comparison-section" id="comparison">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Complete Fee Matrix</span>
            <h2 className="section-title">All Offerings & Course Tuition</h2>
            <p className="section-desc">
              Transparent, straightforward investment details for all private therapeutic sessions, space ceremonies, and accredited Reiki academy levels.
            </p>
          </div>

          <div className="table-responsive-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Offering</th>
                  <th>Type</th>
                  <th>Duration</th>
                  <th>Investment</th>
                  <th>Key Focus & Outcome</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {comparisonList.map((item, idx) => (
                  <tr key={idx}>
                    <td>
                      <strong style={{ color: "var(--primary-dark)" }}>{item.name}</strong>
                    </td>
                    <td>
                      <span className={`pill-type ${item.type}`}>
                        {item.category}
                      </span>
                    </td>
                    <td>
                      <strong>{item.duration}</strong>
                    </td>
                    <td>
                      <span style={{
                        fontFamily: "var(--font-display, 'Playfair Display', serif)",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--primary)",
                        fontVariantNumeric: "lining-nums",
                      }}>
                        {item.price}
                      </span>
                    </td>
                    <td style={{ fontSize: "0.85rem", maxWidth: "340px" }}>
                      {item.focus}
                    </td>
                    <td>
                      <a
                        href="tel:250-574-1442"
                        className="btn-primary"
                        style={{
                          padding: "6px 14px",
                          fontSize: "0.8rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Call Now: 📞
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FREQUENTLY ASKED QUESTIONS ===== */}
      <section className="faq-section" id="faq" style={{ padding: "90px 0", background: "var(--cream)" }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Questions & Answers</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about preparing for your session or booking your Reiki certification training.
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

      {/* ===== CTA SECTION ===== */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Begin Your Healing Journey?</h2>
          <p>
            Whether you are booking a restorative $100/hr Reiki session, a distant home blessing, a 3-hour Shamanic journey, or embarking on your Level 1–4 Reiki certification path, we are honored to support your path.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "24px", alignItems: "center" }}>
            <a href="tel:250-574-1442" className="btn-white" style={{ fontSize: "1.05rem", padding: "14px 28px" }}>
              Call Now: 250-574-1442 📞
            </a>
            <Link href="/contact" className="btn-outline" style={{ borderColor: "#ffffff", color: "#ffffff" }}>
              Contact Sanctuary ✦
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
