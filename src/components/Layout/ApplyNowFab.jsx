import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Floating "Apply Now" button anchored to the bottom-right of every page.
// Hides itself on the Inquiry page (where applying happens) so it doesn't
// overlay the form unnecessarily.
export default function ApplyNowFab() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (location.pathname === '/inquiry') return null;

  return (
    <Link
      to="/inquiry?type=admission"
      aria-label="Apply Now"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[var(--brand)] text-white text-sm font-semibold shadow-lg hover:bg-[var(--brand-dark)] transition-all duration-200 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      style={{ boxShadow: '0 10px 24px -6px rgba(142,61,25,0.35)' }}
    >
      Apply Now
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}
