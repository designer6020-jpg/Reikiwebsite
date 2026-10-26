"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const galleryImages = [
  {
    src: "/home-1-9.webp",
    alt: "Meditation in studio",
  },
  {
    src: "/energy-healing.jpg",
    alt: "Healing session",
  },
  {
    src: "/helping-woman.jpg",
    alt: "Yoga practice",
  },
  {
    src: "/wellness-practices.jpg",
    alt: "Crystal healing",
  },
  {
    src: "/treating-patient.jpg",
    alt: "Group yoga session",
  },
];

const reikiServices = [
  {
    title: "Usui Reiki Energy Healing",
    subtitle: "Channeled Japanese bio-energy clearing & primary chakra alignment",
    price: "$100 / hr",
    icon: "/reiki-healing.svg",
    image: "/energy-healing.jpg",
    link: "/services#sessions-section",
  },
  {
    title: "Hypno-Reiki Integration",
    subtitle: "Subconscious trance relaxation paired with cellular Reiki clearing",
    price: "$150 / session",
    icon: "/mind-icon.png",
    image: "/treatments-6-1.webp",
    link: "/services#sessions-section",
  },
  {
    title: "Subconscious Hypnotherapy",
    subtitle: "Deep emotional root-cause resolution, inner child healing & confidence",
    price: "$200 / session",
    icon: "/soul-icon.png",
    image: "/treating-patient.jpg",
    link: "/services#sessions-section",
  },
  {
    title: "Shamanic Reiki Sacred Journey",
    subtitle: "3-hour intensive ceremony with sacred smoke, cord-cutting & drumming",
    price: "$200 (3 Hours)",
    icon: "/sound-healing.svg",
    image: "/hero-meditation1.jpg",
    link: "/services#sessions-section",
  },
  {
    title: "Distant Home Clearing",
    subtitle: "Remote quantum space purification, protection shield & blessing",
    price: "$200 / ceremony",
    icon: "/chakra-balancing.svg",
    image: "/treatments-4-1.webp",
    link: "/services#sessions-section",
  },
  {
    title: "Reiki Certification Courses",
    subtitle: "Accredited First Degree to Master Teacher sacred training & attunements",
    price: "Levels 1–4 from $300",
    icon: "/body-icon.png",
    image: "/home-1-10.webp",
    link: "/services#courses-section",
  },
];

const testimonials = [
  {
    name: "Ananya Kapoor",
    role: "Reiki Client & Mindfulness Advocate",
    initials: "AK",
    quote:
      "Inner Healing completely transformed my well-being. Darshan's intuitive Reiki sessions helped me release years of accumulated anxiety and chronic tension. After just three sessions at the sanctuary, I felt a profound, grounded shift in my energy and daily mindset.",
  },
  {
    name: "Sarah Mitchell",
    role: "Reiki Level 2 Certified Graduate",
    initials: "SM",
    quote:
      "Completing my certification with Inner Healing School of Reiki was an empowering experience. Darshan creates a deeply sacred, supportive space where you truly connect with universal life energy and sacred attunements. I cannot recommend this academy enough.",
  },
  {
    name: "Rahul Patel",
    role: "Executive & Meditation Student",
    initials: "RP",
    quote:
      "The Hypno-Reiki and chakra alignment session at Inner Healing was extraordinary. Darshan has an exceptional gift for identifying and releasing energetic blocks. I walked away feeling lighter, clear-headed, and deeply centered.",
  },
  {
    name: "Maya Chen",
    role: "Creative Director",
    initials: "MC",
    quote:
      "From the moment you connect with Inner Healing Sanctuary, you feel deeply held and supported. Every private session is tailored to your emotional and energetic needs, leaving you with genuine peace and clarity.",
  },
  {
    name: "Daniel Brooks",
    role: "Distant Healing Client & Entrepreneur",
    initials: "DB",
    quote:
      "I was amazed by the power of Darshan's remote distance healing and space clearing session. The heaviness in my environment cleared immediately, and the intuitive insights provided lasting guidance for my personal and professional life.",
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);

  const scrollTestimonials = (direction: "next" | "prev") => {
    const container = testimonialsRef.current;
    if (!container) return;

    const firstCard = container.querySelector(
      ".testimonial-card",
    ) as HTMLElement | null;
    const cardWidth = firstCard
      ? firstCard.offsetWidth + 30
      : container.clientWidth * 0.8;

    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ===== NAVIGATION ===== */}
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">Reconnect With Your Inner Self</div>
            <h1 className="hero-title">
              <span className="highlight">
                Restore Balance. Embrace Peace. Begin Your Healing Journey.
              </span>
            </h1>
            <p className="hero-desc">
              Discover a deeper connection with yourself through Reiki energy healing, subconscious exploration, and sacred spiritual practices. At ReikiHealing, we offer a compassionate space to pause, release emotional tension, and reconnect with your inner balance.
            </p>

            <div className="hero-buttons">
              <Link href="/services" className="btn-primary">
                Explore Services ✦
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Happy Clients</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">15+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">15+</div>
                <div className="hero-stat-label">Healing Modalities</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <Image
                src="/home-1-1.webp"
                alt="Woman meditating in lotus pose wearing burgundy yoga outfit"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div className="hero-float-card top-card">
              <div className="float-icon">✨</div>
              <div>
                <div className="float-text">Reiki Certification</div>
                <div className="float-subtext">Levels 1 to 4 Training</div>
              </div>
            </div>
            <div className="hero-float-card bottom-card">
              <div className="float-icon">🌸</div>
              <div>
                <div className="float-text">Hypno-Reiki Healing</div>
                <div className="float-subtext">Call 250-574-1442</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      {/*<section className="services" id="services">
        <div className="section-header">
          <span className="flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle cx="60" cy="60" r="60" fill="#F5F3EF"></circle>
              <g clip-path="url(#clip0_18202_1669)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M26.0153 46.971C26.1064 46.4837 26.5769 46.1622 27.0664 46.2528C40.9604 48.8242 50.1114 53.2386 55.9845 58.4913C61.8728 63.7576 64.4088 69.8161 65.1555 75.5428C65.8995 81.2487 64.8658 86.6013 63.661 90.5073C63.0574 92.4642 62.4074 94.0689 61.9068 95.1873C61.6564 95.7468 61.4431 96.1853 61.291 96.4862C61.215 96.6367 61.1543 96.7529 61.1119 96.8326C61.0908 96.8725 61.0741 96.9032 61.0625 96.9246L61.0488 96.9497L61.0448 96.9568L61.0436 96.9591C61.0436 96.9591 61.0428 96.9605 60.2543 96.5256C59.5842 97.1259 59.5832 97.1248 59.5832 97.1248L59.582 97.1235L59.579 97.1202L59.5707 97.1108C59.5641 97.1033 59.5554 97.0933 59.5447 97.081C59.5234 97.0562 59.4942 97.0217 59.458 96.9775C59.3856 96.8889 59.2848 96.7612 59.1624 96.5942C58.9176 96.2602 58.5857 95.7686 58.2193 95.1182C57.4864 93.8169 56.6158 91.8804 56.0282 89.3C54.8501 84.1264 54.825 76.4329 59.2177 66.1683C59.3234 65.9215 59.527 65.7461 59.7642 65.668C58.5 63.6573 56.8656 61.6922 54.7795 59.8264C49.2281 54.8614 40.4209 50.5499 26.7369 48.0173C26.2474 47.9268 25.9243 47.4583 26.0153 46.971ZM60.7 67.2886C56.6227 77.0217 56.714 84.1934 57.7865 88.9032C58.3318 91.2979 59.1347 93.0734 59.792 94.2404C59.9036 94.4385 60.011 94.6191 60.1122 94.7822C60.1596 94.6793 60.209 94.5708 60.26 94.4568C60.7363 93.3925 61.3588 91.8564 61.9375 89.9804C63.0972 86.2206 64.0672 81.1396 63.3675 75.7739C63.0034 72.9812 62.1866 70.105 60.7 67.2886ZM60.2543 96.5256L59.5842 97.1259C59.7792 97.3416 60.0668 97.4501 60.3563 97.4172C60.6459 97.3844 60.9016 97.2142 61.0428 96.9605L60.2543 96.5256Z"
                  fill="#783766"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M94.0403 47.0728C94.0748 47.5673 93.7001 47.9959 93.2034 48.0303C79.9238 48.949 70.526 53.0202 65.099 59.7113C64.7862 60.097 64.2187 60.1572 63.8313 59.8458C63.4439 59.5345 63.3834 58.9694 63.6962 58.5838C69.5594 51.3549 79.531 47.1771 93.0784 46.2398C93.5751 46.2054 94.0057 46.5784 94.0403 47.0728Z"
                  fill="#783766"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M57.3037 34.5963C53.6412 36.1065 51.902 40.2864 53.4191 43.9323C54.9361 47.5783 59.135 49.3096 62.7975 47.7994C66.46 46.2892 68.1992 42.1093 66.6821 38.4633C65.165 34.8174 60.9661 33.0861 57.3037 34.5963ZM51.7533 44.6192C49.8552 40.0575 52.0312 34.8276 56.6137 32.938C61.1961 31.0485 66.4497 33.2147 68.3478 37.7764C70.246 42.3382 68.0699 47.568 63.4875 49.4576C58.905 51.3472 53.6515 49.181 51.7533 44.6192Z"
                  fill="#783766"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_18202_1669">
                  <rect
                    width="68"
                    height="74.423"
                    fill="white"
                    transform="translate(26 23)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>{" "}
          </span>
          <h2 className="section-title space-top">
            In this nurturing and safe space, you’re empowered to shape the life
            you envision, embracing healing and growth as we transform together.
            Expansion becomes lighter when you’re prepared for the challenges it
            invites.
          </h2>
        </div>
      </section>*/}

      {/* ===== ENERGY HEALING SECTION ===== */}
      <section className="energy-healing" id="healing">
        <div className="energy-content">
          <div className="energy-image">
            <Image
              src="/home-1-2.webp"
              alt="Woman receiving reiki energy healing treatment"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />
            <div className="energy-image-badge">
              <span>✦ Certified Reiki Master</span>
            </div>
          </div>
          <div className="energy-text">
            <span className="section-tag">Energy Healing</span>
            <h2 className="section-title">Honour Your Healing Journey</h2>
            <p>
              Fifteen years ago, my life was disrupted by severe, chronic migraines that conventional medicine simply could not resolve. Frustrated but determined, I turned to holistic healing—a decision that ultimately eliminated my headaches entirely. This profound personal transformation inspired me to dedicate my life to the healing arts. Today, I am deeply privileged to guide both human and animal clients on their own journeys toward restored health, balance, and vibrant well-being.
            </p>


            <Link href="/about" className="btn-primary mt-5">
              More About Me
            </Link>
          </div>
        </div>
        <div className="services bg-transparent" id="why-choose">
          <div className="section-header">
            <span className="section-tag">Why Choose Us</span>
            <h2 className="section-title-big">Why Choose ReikiHealing?</h2>
          </div>
          <div className="why-choose-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="why-choose-title">A Compassionate, Personal Approach</h3>
              <p className="why-choose-desc">
                Every individual is different. Our sessions are shaped around your intentions, comfort, and personal journey.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
                </svg>
              </div>
              <h3 className="why-choose-title">Holistic Practices</h3>
              <p className="why-choose-desc">
                Explore complementary approaches that bring together relaxation, energy work, guided introspection, and spiritual reflection.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="why-choose-title">A Safe and Respectful Space</h3>
              <p className="why-choose-desc">
                Your comfort, boundaries, and personal beliefs matter. We aim to create a welcoming environment without judgment or pressure.
              </p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon-wrap" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                </svg>
              </div>
              <h3 className="why-choose-title">Your Journey, Your Pace</h3>
              <p className="why-choose-desc">
                Take time to explore your needs, reflect on your experiences, and build practices that support your personal well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS SECTION ===== */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title-big">How It Works</h2>
        </div>
        <div className="how-it-works-grid">
          <div className="how-it-works-card">
            <div className="how-it-works-top">
              <span className="how-it-works-num">01.</span>
              <div className="how-it-works-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
            </div>
            <h3 className="how-it-works-title">Connect With Us</h3>
            <p className="how-it-works-desc">
              Share your interests, intentions, and the kind of support you are looking for.
            </p>
          </div>

          <div className="how-it-works-card">
            <div className="how-it-works-top">
              <span className="how-it-works-num">02.</span>
              <div className="how-it-works-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
            <h3 className="how-it-works-title">Choose Your Session</h3>
            <p className="how-it-works-desc">
              Explore our services and select an approach that feels right for you.
            </p>
          </div>

          <div className="how-it-works-card">
            <div className="how-it-works-top">
              <span className="how-it-works-num">03.</span>
              <div className="how-it-works-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
            </div>
            <h3 className="how-it-works-title">Begin Your Journey</h3>
            <p className="how-it-works-desc">
              Settle into your session, take time for yourself, and reflect on your experience.
            </p>
          </div>
        </div>
      </section>
      {/* ===== CHAKRA HEALING (PINK BG) SECTION ===== */}
      <section className="chakra-healing">
        <div className="chakra-healing-content">
          <div className="chakra-healing-text">
            <span className="section-tag">Reiki Level 1</span>
            <h2 className="section-title">
              Reiki Level 1*
            </h2>
            <p>
              Students will be introduced to the history of Usui Mikao's teachings. Five Reiki principles will be taught. Proper hand positions will be shown for self healing or giving a treatment to others. Students will learn how to channel the Reiki energy. We will talk about Reiki crisis. Level 1 Attunement will be given.  Manual is included in the course. Students will also receive a certificate upon complition of the course. We will also talk about CRA forms and Usui Shiki Ryoho Lineage.
            </p>


            <Link href="/services#sessions-section" className="btn-primary">
              Explore Reiki Level 1
            </Link>
          </div>
          <div className="chakra-healing-image">
            <Image
              src="/home-1-9.webp"
              alt="Chakra healing session"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="chakra-healing-content space-100">
          <div className="chakra-healing-image">
            <Image
              src="/home-1-10.webp"
              alt="Hypno-Reiki and Subconscious Healing session"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="chakra-healing-text">
            <span className="section-tag">Reiki Level 2 </span>
            <h2 className="section-title">Reiki Level 2 *</h2>
            <p>
              Student must have completed their Reiki level 1 in order to take level 2.
            </p>
            <p>
              Students will learn about the 3 Reiki sacred healing symbols and how to draw them. Their meanings and uses in person and how to send long distance healing. Hands on practicum. Reiki meditation. Chakra cleaning and cleaning your environment of negative energy. Scanning and protection. This course will explore more in depth in assisting students removal of unwanted habits and how to empower your goals with Reiki. Reiki level 2 Attunement will be given. Manual is included. Certificate will be provided upon completion of the course.
            </p>

            <Link href="/services#sessions-section" className="btn-primary">
              Explore Reiki Level 2
            </Link>
          </div>
        </div>
        <div className="chakra-healing-content space-100">
          <div className="chakra-healing-text">
            <span className="section-tag">Reiki Level 3</span>
            <h2 className="section-title">
              Reiki Level 3*
            </h2>
            <p>
              tudents must have completed level 1 and 2 in order to take level three.
            </p>
            <p>In level 3 brief review of level 1 and 2  and question are answered.
              learn Usui Master symbol, practice drawing and how to utilize it. Learn how to make and activate a Reiki crystal grid for healing and manifesting. learn how to use pendulum for healing and guidance. Understanding Aura and Aura colors, Aura cleaning and psychic surgery techniques. Also teach Reiki healing with Crystal and Gemstones. Reiki level 3 attunement done. Introduction to basic animal Reiki. 2 Reiki guided meditations are done. Discuss CRA membership criteria and paperwork. Level 3 certificate provided. </p>

            <Link href="/services#sessions-section" className="btn-primary">
              Explore Reiki Level 3
            </Link>
          </div>
          <div className="chakra-healing-image">
            <Image
              src="/treatments-8-1.webp"
              alt="Reiki Level 3 master healing session"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      {/* ===== CHAKRA CARDS SECTION ===== */}
      {/* <section className="chakra" id="chakra">
        <div className="section-header">
          <span className="section-tag">Our Practices</span>
          <h2 className="section-title">Explore Our Healing Modalities</h2>
          <p className="section-desc">
            Each healing modality offers unique benefits designed to nurture
            your body, calm your mind, and uplift your spirit.
          </p>
        </div>
        <div className="chakra-grid">
          <Link href="/services" className="chakra-card">
            <Image
              src="/hero-meditation.jpg"
              alt="Meditation practice"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              style={{ objectFit: "cover" }}
            />
            <div className="chakra-card-overlay">
              <h3>Meditation & Mindfulness</h3>
              <p>Find stillness within ✦</p>
            </div>
          </Link>
          <Link href="/services" className="chakra-card">
            <Image
              src="/energy-healing.jpg"
              alt="Reiki energy healing"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              style={{ objectFit: "cover" }}
            />
            <div className="chakra-card-overlay">
              <h3>Reiki Energy Work</h3>
              <p>Restore your vital energy ✦</p>
            </div>
          </Link>
          <Link href="/services" className="chakra-card">
            <Image
              src="/yoga-practice.jpg"
              alt="Yoga practice"
              fill
              sizes="(max-width: 768px) 100vw, 380px"
              style={{ objectFit: "cover" }}
            />
            <div className="chakra-card-overlay">
              <h3>Yoga & Movement</h3>
              <p>Unite body and spirit ✦</p>
            </div>
          </Link>
        </div>
      </section> */}

      {/* ===== GALLERY SECTION ===== */}
      <section className="gallery">
        <div className="section-header">
          <span className="section-tag">Gallery</span>
          <h2 className="section-title-big">Our Healing Space</h2>
          <p className="section-desc">
            Step into our serene sanctuary where transformation begins.
          </p>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <button
              key={image.alt}
              type="button"
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
              aria-label={`Open ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-item-overlay">
                <span>View</span>
              </div>
            </button>
          ))}
        </div>

        {selectedImage && (
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="gallery-lightbox__content"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox__close"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
              >
                ✕
              </button>
              <div className="gallery-lightbox__image">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p>{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </section>

      {/* ===== REIKI SERVICES ===== */}
      <section className="reiki-services" id="reiki-services">
        <div className="reiki-services-header">
          <div>
            <span className="section-tag">Sanctuary Offerings</span>
            <h2 className="section-title-big">
              Sacred Healing Services & Certification Courses
            </h2>
          </div>
          <Link href="/services" className="btn-primary">
            View All Services & Courses ✦
          </Link>
        </div>

        <div className="reiki-service-slider">
          <div className="reiki-service-track">
            {[...reikiServices, ...reikiServices].map((service, index) => (
              <Link
                href={service.link}
                key={`${service.title}-${index}`}
                className="reiki-service-card"
              >
                <div className="reiki-service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="reiki-service-photo"
                    fill
                    sizes="(max-width: 768px) 84vw, 320px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="reiki-service-overlay" />
                  <div className="reiki-service-symbol">
                    <Image
                      src={service.icon}
                      alt=""
                      aria-hidden="true"
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="reiki-service-price-badge">
                    {service.price}
                  </div>
                </div>
                <div className="reiki-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="testimonials" id="testimonials">
        <div className="section-header">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title-big">What Our Clients Say</h2>
          <p className="section-desc">
            Real transformations from real people who have experienced our
            healing practices.
          </p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-controls">
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Previous testimonial"
              onClick={() => scrollTestimonials("prev")}
            >
              ←
            </button>
            <button
              type="button"
              className="testimonials-arrow"
              aria-label="Next testimonial"
              onClick={() => scrollTestimonials("next")}
            >
              →
            </button>
          </div>

          <div className="testimonials-track" ref={testimonialsRef}>
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <div className="testimonial-quote">&ldquo;</div>
                <p className="testimonial-text">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="testimonial-name">{testimonial.name}</div>
                    <div className="testimonial-role">{testimonial.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* ===== CTA SECTION ===== */}
      <section className="cta" id="contact">
        <div className="cta-content">
          <h2>Begin Your Healing Journey Today</h2>
          <p>
            Explore our services and discover a supportive space for relaxation, self-awareness, and personal growth.
            Book Your Session
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>

            <a href="tel:250-574-1442" className="btn-white">
              Call 250-574-1442 📞
            </a>
          </div>
        </div>
      </section>
      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}
