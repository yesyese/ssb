import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logo from '../../assets/newlogo.png';
import naacBadge from '../../assets/badges/naac-grade.png';
import autonomousBadge from '../../assets/badges/autonomous.png';
import MenuOverlay from './MenuOverlay.jsx';

/**
 * Unified header bar:
 *   - logo + institution name on the left
 *   - "Explore" button on the right (opens the side flyout menu)
 *
 * Background uses the same translucent orange glass as the footer.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className="sticky top-0 z-50 transition-shadow"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,178,120,0.55) 0%, rgba(249,132,61,0.55) 45%, rgba(214,99,38,0.65) 100%)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          borderTop: '3px solid #8E3D19',
          borderBottom: '2px solid #8E3D19',
          boxShadow: scrolled
            ? 'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(110,40,10,0.20), 0 6px 20px rgba(142,61,25,0.25)'
            : 'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(110,40,10,0.20)',
        }}
      >
        <div className="container flex items-center h-[var(--header-height)] gap-4 sm:gap-6">
          <Link
            to="/"
            className="flex items-center gap-3.5 sm:gap-4 min-w-0 shrink-0"
            aria-label="Sanskrithi School of Business — home"
          >
            <img src={logo} alt="SSB" className="h-12 sm:h-14 md:h-[56px] w-auto" />
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="text-[16px] md:text-[18px] font-semibold text-white tracking-tight truncate">
                Sanskrithi School of Business
              </span>
              <span className="text-[11px] md:text-[12px] uppercase tracking-[0.22em] text-white/80 truncate">
                Puttaparthi · Autonomous
              </span>
            </div>
          </Link>

          {/* Accreditation badges — sit right beside the name */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <img
              src={naacBadge}
              alt="NAAC Accredited with A Grade"
              title="NAAC Accredited with A Grade"
              className="h-14 sm:h-16 md:h-[72px] w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
            <img
              src={autonomousBadge}
              alt="Autonomous Institution"
              title="Autonomous Institution"
              className="h-14 sm:h-16 md:h-[72px] w-auto drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="ml-auto inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-white border border-white/30 hover:bg-white/15 transition-colors shrink-0"
            aria-label="Open navigation"
          >
            <span className="text-[12px] uppercase tracking-[0.20em] font-semibold hidden sm:inline">
              Explore
            </span>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
