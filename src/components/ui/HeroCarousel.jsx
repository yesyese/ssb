import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home1 from '../../assets/home/20260202_121419.jpg';
import home2 from '../../assets/campus/classrooms/digital-classroom-2.jpg';
import home3 from '../../assets/campus/library/ssb-library.jpg';
import promoAdmissions from '../../assets/home/promo/admissions-open.jpg';
import promoCareers from '../../assets/home/promo/empowering-careers.jpg';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const carouselSlides = [
    {
      // Pre-designed promo banner. Image already has headline & content —
      // we just overlay a CTA button at the bottom.
      imageOnly: true,
      image: promoAdmissions,
      objectPosition: 'center',
      cta: { label: 'Start Admissions', href: '/inquiry?type=admission' },
      ctaSecondary: { label: 'Fee Structure', href: '/admissions/fee-structure' },
    },
    {
      imageOnly: true,
      image: promoCareers,
      objectPosition: 'center',
      cta: { label: 'View Placement Stories', href: '/placements/team' },
      ctaSecondary: { label: 'Start Admissions', href: '/inquiry?type=admission' },
    },
    {
      title: "Build a career that's",
      highlight: "future‑proof",
      subtitle: "Learn by doing, lead with insight. Sanskrithi School of Business blends timeless management with modern tech.",
      image: home1,
      badge: "AI-Ready Business Education",
      stats: [
        { k: "15+", v: "Years of Excellence" },
        { k: "1200+", v: "Alumni Network" },
        { k: "95%", v: "Placement Rate" },
        { k: "200+", v: "Recruiters" },
      ]
    },
    {
      title: "Shape the next generation of",
      highlight: "business leaders",
      subtitle: "Experience hands-on learning with industry partnerships, live projects, and cutting-edge technology integration.",
      image: home2,
      badge: "Industry-Connected Learning"
    },
    {
      title: "Transform your potential into",
      highlight: "measurable success",
      subtitle: "Join our network of 1200+ alumni making impact across BFSI, Consulting, Technology, and Entrepreneurship sectors.",
      image: home3,
      badge: "95% Placement Rate"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      }
    }, 8000); // Auto-advance every 8 seconds

    return () => clearInterval(interval);
  }, [carouselSlides.length, isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section
      className="hero-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
        {/* Floating decorative elements */}
        <div className="floating-elements"></div>

        {/* Carousel Slides */}
        {carouselSlides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: slide.objectPosition || 'center',
              backgroundSize: slide.imageOnly ? 'contain' : 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundColor: slide.imageOnly ? '#0F1419' : undefined,
            }}
          >
            {slide.imageOnly ? (
              /* Promo banner — pre-designed image, just overlay CTA buttons */
              <div className="carousel-content" key={`content-${currentSlide}`}>
                <div className="container mx-auto px-4 max-w-6xl h-full flex flex-col justify-end pb-12 sm:pb-14 md:pb-16">
                  <div className="flex flex-wrap gap-3">
                    {slide.cta && (
                      <Link
                        to={slide.cta.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold text-sm sm:text-base transition-colors shadow-lg"
                      >
                        {slide.cta.label}
                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                          <path fill="currentColor" d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"/>
                        </svg>
                      </Link>
                    )}
                    {slide.ctaSecondary && (
                      <Link
                        to={slide.ctaSecondary.href}
                        className="inline-flex items-center px-6 py-3 rounded-md bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold text-sm sm:text-base hover:bg-white/25 transition-colors"
                      >
                        {slide.ctaSecondary.label}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="carousel-content" key={`content-${currentSlide}`}>
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-white max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs sm:text-sm text-white/90 mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-light)]"></span>
                      {slide.badge}
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] tracking-tight mb-6 text-white">
                      {slide.title}{' '}
                      <span className="text-[var(--brand-light)]">
                        {slide.highlight}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-base sm:text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
                      {slide.subtitle}
                    </p>

                    {/* Action Buttons - All lead to unified inquiry form */}
                    <div className="flex flex-wrap gap-3 mb-10">
                      <Link
                        to="/inquiry?type=admission"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white font-semibold text-sm sm:text-base transition-colors"
                      >
                        Start Admissions
                        <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-90">
                          <path fill="currentColor" d="M5 12h12.17l-4.58-4.59L13 6l7 7-7 7-1.41-1.41L17.17 13H5z"/>
                        </svg>
                      </Link>
                      <Link
                        to="/inquiry?type=schedule-visit"
                        className="inline-flex items-center px-6 py-3 rounded-md bg-white/10 border border-white/30 text-white font-semibold text-sm sm:text-base hover:bg-white/15 transition-colors"
                      >
                        Schedule Visit
                      </Link>
                    </div>

                    {/* Stats */}
                    {slide.stats && (
                      <div className="stats-grid">
                        {slide.stats.map((stat, statIndex) => (
                          <div key={statIndex} className="stat-card">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                              {stat.k}
                            </div>
                            <div className="text-sm text-white/80">
                              {stat.v}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Carousel Controls */}
        <div className="carousel-controls">
          {/* Previous Arrow */}
          <button
            onClick={prevSlide}
            className="nav-arrow"
            aria-label="Previous slide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="nav-dots">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={nextSlide}
            className="nav-arrow"
            aria-label="Next slide"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
      </section>
  );
};

export default HeroCarousel;
