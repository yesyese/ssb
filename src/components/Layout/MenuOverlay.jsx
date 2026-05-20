import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, ArrowRight, Mail, Phone } from 'lucide-react';
import logo from '../../assets/newlogo.png';

/**
 * Side flyout menu (sseptp-inspired).
 * Slides in from the right. Categories are colour-coded with left borders.
 * Each category expands inline to reveal sub-items.
 */
const SECTIONS = [
  {
    label: 'About',
    color: '#8E3D19',
    href: '/about/overview',
    items: [
      { label: 'Overview', href: '/about/overview' },
      { label: 'Mission & Vision', href: '/about/mission-vision' },
      { label: 'About Chairman', href: '/about/chairperson' },
      { label: 'Governing Body', href: '/about/governing-body' },
      { label: 'Academic Council', href: '/about/academic-council' },
      { label: 'Organisation Chart', href: '/about/organisation-chart' },
      { label: 'About RISE', href: '/about/rise' },
      { label: 'MOUs', href: '/about/mous' },
    ],
  },
  {
    label: 'Academics',
    color: '#F9843D',
    href: '/academics/mba',
    items: [
      { label: 'BBA / BBA Honours', href: '/academics/bba' },
      { label: 'MBA', href: '/academics/mba' },
      { label: 'Courses Offered', href: '/admissions/courses' },
      { label: 'Academic Calendar', href: '/admissions/calendar' },
      { label: 'Examinations Team', href: '/examinations/team' },
      { label: 'Evaluation Procedure', href: '/examinations/evaluation-procedure' },
      { label: 'Examinations Calendar', href: '/examinations/calendar' },
    ],
  },
  {
    label: 'Admissions',
    color: '#C95A2A',
    href: '/admissions/admission-procedure',
    items: [
      { label: 'Admission Procedure', href: '/admissions/admission-procedure' },
      { label: 'Admissions Committee', href: '/admissions/admissions-committee' },
      { label: 'Fee Structure', href: '/admissions/fee-structure' },
      { label: 'Fee Payment', href: '/admissions/fee-payment' },
      { label: 'Scholarships', href: '/admissions/scholarships' },
      { label: 'ICET Ranks', href: '/admissions/ranks' },
    ],
  },
  {
    label: 'Campus & Career',
    color: '#2A7A4F',
    href: '/campus-life/campus',
    items: [
      { label: 'About SSB Campus', href: '/campus-life/campus' },
      { label: 'Library', href: '/campus-life/library' },
      { label: 'Hostel Facility', href: '/campus-life/hostel' },
      { label: 'Sports Facility', href: '/campus-life/sports' },
      { label: 'Computer Centre', href: '/campus-life/computer-centre' },
      { label: 'Transportation', href: '/campus-life/transportation' },
      { label: 'Activities & Events', href: '/campus-life/activities' },
      { label: 'Placements Team', href: '/placements/team' },
      { label: 'Placement Vision & Mission', href: '/placements/vision-mission' },
      { label: 'Training Programs', href: '/placements/training' },
      { label: 'Campus Drives', href: '/placements/campus-drives' },
      { label: 'Internships', href: '/placements/internships' },
      { label: 'Placement MOUs', href: '/placements/mous' },
    ],
  },
  {
    label: 'Committees',
    color: '#3B5998',
    href: '/committees/iqac',
    items: [
      { label: 'IQAC', href: '/committees/iqac' },
      { label: 'Academic Committee', href: '/committees/academic' },
      { label: 'IIC Committee', href: '/committees/iic' },
      { label: 'R&D Cell', href: '/committees/rnd-cell' },
      { label: 'Anti Ragging', href: '/committees/anti-ragging' },
      { label: 'Anti Sexual Harassment', href: '/committees/anti-sexual-harassment' },
      { label: 'Internal Complaint', href: '/committees/internal-complaint' },
      { label: 'SC/ST Cell', href: '/committees/sc-st-cell' },
      { label: 'Women Empowerment', href: '/committees/women-empowerment' },
      { label: 'Library Committee', href: '/committees/library' },
      { label: 'Student Welfare', href: '/committees/student-welfare' },
      { label: 'Games & Sports', href: '/committees/games-sports' },
      { label: 'Extra Curricular', href: '/committees/extra-curricular' },
      { label: 'Career Guidance', href: '/committees/career-guidance' },
      { label: 'Finance Committee', href: '/committees/finance' },
      { label: 'Alumni Cell', href: '/committees/alumni-cell' },
    ],
  },
  {
    label: 'Resources',
    color: '#6E4A82',
    href: '/naac',
    items: [
      { label: 'NAAC', href: '/naac' },
      { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
      { label: 'Grievance Redressal', href: '/grievance-redressal' },
      { label: 'Community Service', href: '/community-service' },
    ],
  },
];

export default function MenuOverlay({ open, onClose }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!open) {
      setActive(null);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <>
      <style>{`
        @keyframes flyoutFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes flyoutSlideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[75] bg-black/55"
          style={{ animation: 'flyoutFadeIn 200ms ease' }}
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Flyout panel */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-[80] flex flex-col w-full max-w-[420px]"
        style={{
          background: 'linear-gradient(180deg, #15110D 0%, #0A0807 100%)',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '-24px 0 48px rgba(0,0,0,0.45)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 280ms cubic-bezier(.2,.8,.2,1)',
          visibility: open ? 'visible' : 'hidden',
        }}
        aria-hidden={!open}
      >
        {/* Header bar inside flyout */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <img src={logo} alt="SSB" className="h-9 w-auto" />
            <span className="text-white text-[14px] font-semibold tracking-[0.20em] uppercase">
              Explore
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable category list */}
        <nav className="flex-1 overflow-y-auto py-3">
          <ul>
            {SECTIONS.map((section) => {
              const isActive = active === section.label;
              return (
                <li
                  key={section.label}
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? null : section.label)}
                    aria-expanded={isActive}
                    className="w-full flex items-center justify-between gap-3 px-6 py-4 text-left transition-colors hover:bg-white/[0.03]"
                  >
                    <span
                      className="text-white text-[15px] font-semibold tracking-tight"
                      style={{
                        borderLeft: `3px solid ${section.color}`,
                        paddingLeft: '14px',
                      }}
                    >
                      {section.label}
                    </span>
                    {isActive ? (
                      <Minus className="w-4 h-4 text-white/55" />
                    ) : (
                      <Plus className="w-4 h-4 text-white/55" />
                    )}
                  </button>

                  {isActive && (
                    <div className="pl-9 pr-6 pb-3" style={{ animation: 'flyoutFadeIn 200ms ease' }}>
                      <ul className="space-y-0.5">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              to={item.href}
                              onClick={onClose}
                              className="block py-1.5 text-[13.5px] text-white/70 hover:text-white transition-colors"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={section.href}
                        onClick={onClose}
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors"
                        style={{ color: section.color }}
                      >
                        Visit {section.label}
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer / Apply CTA + contact */}
        <div
          className="px-6 py-5 space-y-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link
            to="/inquiry"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-md bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white text-[13px] font-semibold tracking-wider uppercase transition-colors"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-1.5 text-[12.5px] text-white/65">
            <a
              href="mailto:admissions.director@sanskrithibschool.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="truncate">admissions.director@sanskrithibschool.com</span>
            </a>
            <a
              href="tel:+919100974544"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              +91 9100 974 544
            </a>
          </div>

          <p className="text-[11px] text-white/35">
            © {new Date().getFullYear()} Sanskrithi School of Business, Puttaparthi
          </p>
        </div>
      </aside>
    </>
  );
}
