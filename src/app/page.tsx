"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const reikiTabs = [
  {
    id: "reiki",
    label: "Reiki energy healing",
    icon: "cmsms-demo-icon-reiki1",
    title: "Reiki energy healing",
    text: "Our life coaching integrates Reiki energy healing to address both your mindset and energy. This unique blend helps release blocks, align your energy, and empower you to achieve lasting growth and transformation.",
    image: "/home-1-3.jpg",
    buttonText: "Find out more",
  },
  {
    id: "meditative",
    label: "Deep meditative journeys",
    icon: "cmsms-demo-icon-meditation-1",
    title: "Deep meditative journeys",
    text: "Reiki helps you gently release stored emotional tension, reconnect with your inner wisdom, and move toward deeper self-trust, clarity, and peace.",
    image: "/home-1-4.jpg",
    buttonText: "Explore sessions",
  },
  {
    id: "emotional",
    label: "Intuitive emotional healing",
    icon: "cmsms-demo-icon-meditation",
    title: "Emotional healing support",
    text: "Reiki helps you gently release stored emotional tension, reconnect with your inner wisdom, and move toward deeper self-trust, clarity, and peace.",
    image: "/home-1-5.jpg",
    buttonText: "Explore sessions",
  },
  {
    id: "mindset",
    label: "Mindset transformation",
    icon: "cmsms-demo-icon-emotional-regulation",
    title: "Mindset transformation",
    text: "Through mindful energetic alignment, you can shift limiting patterns, improve emotional resilience, and create a stronger foundation for meaningful growth.",
    image: "/home-1-6.jpg",
    buttonText: "Book a consultation",
  },
  {
    id: "spirituality",
    label: "The science of spirituality",
    icon: "cmsms-demo-icon-icon-4",
    title: "The science of spirituality",
    text: "This practice blends intuitive guidance with grounded self-awareness, helping you explore spirituality in a practical, empowering, and deeply calming way.",
    image: "/home-1-7.jpg",
    buttonText: "Learn more",
  },
  {
    id: "intimacy",
    label: "Relational intimacy building",
    icon: "cmsms-demo-icon-compassion-1",
    title: "Relational intimacy building",
    text: "By clearing emotional blocks and enhancing inner connection, Reiki supports healthier relationships, deeper presence, and more authentic intimacy in life and love.",
    image: "/home-1-8.jpg",
    buttonText: "Start your journey",
  },
];

const galleryImages = [
  {
    src: "/hero-meditation.jpg",
    alt: "Meditation in studio",
  },
  {
    src: "/energy-healing.jpg",
    alt: "Healing session",
  },
  {
    src: "/yoga-practice.jpg",
    alt: "Yoga practice",
  },
  {
    src: "/energy-healing.jpg",
    alt: "Crystal healing",
  },
  {
    src: "/yoga-practice.jpg",
    alt: "Group yoga session",
  },
];

const reikiServices = [
  {
    title: "Chakra Balancing",
    subtitle: "Energy center alignment",
    icon: "/chakra-balancing.svg",
    image: "/treatments-5-1.webp",
  },
  {
    title: "Sound Healing",
    subtitle: "Restorative sound therapy",
    icon: "/sound-healing.svg",
    image: "/treatments-6-1.webp",
  },
  {
    title: "Meditations",
    subtitle: "Mindfulness and relaxation",
    icon: "/meditations.svg",
    image: "/treatments-7-1.webp",
  },
  {
    title: "Energy Healing",
    subtitle: "Holistic life reset",
    icon: "/reiki-healing.svg",
    image: "/treatments-8-1.webp",
  },
  {
    title: "Life Coaching",
    subtitle: "Grounded inner calm",
    icon: "/life-coaching.svg",
    image: "/treatments-4-1.webp",
  },
];

const testimonials = [
  {
    name: "Ananya Kapoor",
    role: "Wellness Enthusiast",
    initials: "AK",
    quote:
      "Sella's reiki sessions have completely transformed my life. I came in with chronic anxiety and after just three sessions, I felt a profound shift in my energy and mindset.",
  },
  {
    name: "Sarah Mitchell",
    role: "Yoga Practitioner",
    initials: "SM",
    quote:
      "The yoga classes are incredibly nurturing. Sella creates a safe space where you can truly connect with your body and find inner peace. Highly recommended for everyone.",
  },
  {
    name: "Rahul Patel",
    role: "Business Professional",
    initials: "RP",
    quote:
      "The chakra healing session was an extraordinary experience. I left feeling lighter, more centered, and deeply connected to myself. Sella has a truly special gift.",
  },
  {
    name: "Maya Chen",
    role: "Creative Director",
    initials: "MC",
    quote:
      "Every session felt deeply personal and grounding. I left with more clarity, more calm, and a stronger sense of trust in my own path.",
  },
  {
    name: "Daniel Brooks",
    role: "Entrepreneur",
    initials: "DB",
    quote:
      "I was searching for balance and found it. The combination of Reiki and life coaching helped me rethink my habits and reconnect with what matters most.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(reikiTabs[0].id);
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[number] | null
  >(null);
  const testimonialsRef = useRef<HTMLDivElement | null>(null);
  const activeTabData =
    reikiTabs.find((tab) => tab.id === activeTab) ?? reikiTabs[0];

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
            <div className="hero-badge">Holistic Wellness</div>
            <h1 className="hero-title">
              <span className="highlight">
                Heal, grow and thrive with Reiki and Life Coaching
              </span>
            </h1>

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
                <div className="hero-stat-number">10+</div>
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
              <div className="float-icon">🧘</div>
              <div>
                <div className="float-text">Yoga Workshop</div>
                <div className="float-subtext">Next: Saturday 9AM</div>
              </div>
            </div>
            <div className="hero-float-card bottom-card">
              <div className="float-icon">✨</div>
              <div>
                <div className="float-text">Energy Healing</div>
                <div className="float-subtext">Book Now Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="services" id="services">
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
      </section>

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
              With over 15 years of experience as a Reiki Master Teacher and
              Transformational Life Coach, Celeste Ray creates a compassionate
              space for healing, supporting you as you explore new
              possibilities.
            </p>
            <p>
              Whether through life coaching, Reiki training, or healing
              sessions, Celeste guides you with compassion, helping you embrace
              your true potential.
            </p>

            <Link href="/contact" className="btn-primary mt-5">
              More About Me
            </Link>
          </div>
        </div>
        <div className="services bg-transparent" id="services">
          <div className="section-header">
            <span className="section-tag">benefits </span>
            <h2 className="section-title-big">Reiki Energy Healing</h2>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Image src="/body-icon.png" alt="Body" fill />
              </div>
              <h3 className="service-title">Body</h3>
              <p className="service-desc">Balance heart rate.</p>
              <p className="service-desc">Relieve pain and muscle tension.</p>
              <p className="service-desc">Balance blood pressure & cortisol.</p>
              <p className="service-desc">Detoxify naturally.</p>
              <p className="service-desc">Improve sleep quality.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Image src="/mind-icon.png" alt="Mind" fill />
              </div>
              <h3 className="service-title">Mind</h3>
              <p className="service-desc">Discover Inner Peace.</p>
              <p className="service-desc">Release negativity.</p>
              <p className="service-desc">Build resilience.</p>
              <p className="service-desc">Let go of habits.</p>
              <p className="service-desc">Embrace stillness.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Image src="/soul-icon.png" alt="Soul" fill />
              </div>
              <h3 className="service-title">Soul</h3>
              <p className="service-desc">Connect with your intuition.</p>
              <p className="service-desc">Listen to your soul’s call.</p>
              <p className="service-desc">Rediscover faith.</p>
              <p className="service-desc">Live with intention.</p>
              <p className="service-desc">Embrace your True Nature.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="reframing" id="reiki">
        <div className="section-header">
          <h2 className="section-title-big">
            Reframing the unknown from scary to exhilarating
          </h2>
        </div>
        <div className="reiki-showcase">
          <div
            className="reiki-showcase__list"
            role="tablist"
            aria-label="Reiki healing tabs"
          >
            {reikiTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`reiki-showcase__item ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span
                  className={`cmsmasters-tab-icon ${tab.icon} icon-align-left`}
                  aria-hidden="true"
                />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div
            className="reiki-showcase__visual"
            role="tabpanel"
            aria-live="polite"
          >
            <div className="reiki-showcase__image-frame">
              <Image
                src={activeTabData.image}
                alt={activeTabData.title}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="reiki-showcase__content">
              <h3 className="reiki-showcase__heading">{activeTabData.title}</h3>
              <p className="reiki-showcase__text">{activeTabData.text}</p>
              <Link href="/services" className="reiki-showcase__button">
                {activeTabData.buttonText.toUpperCase()} <span>•</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ===== CHAKRA HEALING (PINK BG) SECTION ===== */}
      <section className="chakra-healing">
        <div className="chakra-healing-content">
          <div className="chakra-healing-text">
            <span className="section-tag">Reiki Level 1 Course</span>
            <h2 className="section-title">
              Holistic Healing Through Reiki Energy
            </h2>
            <p>
              Discover the transformative power of Reiki in our Level 1 Course.
              Learn to harmonize mind, body, and soul while promoting emotional
              balance, physical health, and mental clarity.
            </p>
            <p>
              This course will teach you to clear energy blockages and restore
              life-force energy, empowering you to bring healing and harmony
              into your daily life.
            </p>

            <Link href="/contact" className="btn-primary">
              I Want to Learn Reiki
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
              alt="Chakra healing session"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="chakra-healing-text">
            <span className="section-tag">Life Coaching Course</span>
            <h2 className="section-title">Create a Life That Inspires You</h2>
            <p>
              Step into your fullest potential with our Transformational Life
              Coaching course. Heal, grow, and make meaningful changes to align
              with the highest vision of yourself.
            </p>
            <p>
              Let go of overwhelm, break through limiting beliefs, and overcome
              the barriers holding you back from achieving freedom, success,
              abundance, and love.
            </p>

            <Link href="/contact" className="btn-primary">
              I Want to Learn Reiki
            </Link>
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
      <section className="reiki-services" id="about">
        <div className="reiki-services-header">
          <div>
            <span className="section-tag">Reiki Services</span>
            <h2 className="section-title-big">
              Restore balance through gentle healing
            </h2>
          </div>
          <Link href="/services" className="btn-primary">
            Explore all rituals
          </Link>
        </div>

        <div className="reiki-service-slider">
          <div className="reiki-service-track">
            {[...reikiServices, ...reikiServices].map((service, index) => (
              <article
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
                </div>
                <div className="reiki-service-content">
                  <h3>{service.title}</h3>
                  <p>{service.subtitle}</p>
                </div>
              </article>
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
            Take the first step towards holistic wellness. Book a personalized
            session and discover the transformative power of yoga, reiki, and
            energy healing.
          </p>
          <Link href="/contact" className="btn-white">
            Book a Consultation ✦
          </Link>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}
