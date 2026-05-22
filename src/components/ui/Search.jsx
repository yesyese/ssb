import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';

const index = [
  { title: 'Home', href: '/' },
  { title: 'About Overview', href: '/about/overview' },
  { title: 'Mission & Vision', href: '/about/mission-vision' },
  { title: 'Chairperson', href: '/about/chairperson' },
  { title: 'Governing Body', href: '/about/governing-body' },
  { title: 'Academic Council', href: '/about/academic-council' },
  { title: 'Organisation Chart', href: '/about/organisation-chart' },
  { title: 'RISE', href: '/about/rise' },
  { title: 'MOUs', href: '/about/mous' },
  { title: 'Courses Offered', href: '/admissions/courses' },
  { title: 'Academic Calendar', href: '/admissions/calendar' },
  { title: 'Admission Procedure', href: '/admissions/admission-procedure' },
  { title: 'Fees & Payment', href: '/admissions/fees' },
  { title: 'Campus', href: '/campus-life/campus' },
  { title: 'Library', href: '/campus-life/library' },
  { title: 'Hostel', href: '/campus-life/hostel' },
  { title: 'Sports', href: '/campus-life/sports' },
  { title: 'Computer Centre', href: '/campus-life/computer-centre' },
  { title: 'Transportation', href: '/campus-life/transportation' },
  { title: 'Placements', href: '/placements' },
  { title: 'Committees', href: '/committees' },
  { title: 'IQAC', href: '/committees/iqac' },
  { title: 'NAAC', href: '/naac' },
  { title: 'Examinations', href: '/examinations' },
  { title: 'Contact', href: '/contact' },
  { title: 'Inquiry', href: '/inquiry' },
];

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        open ? onClose() : null; // caller toggles
      }
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const results = query.trim()
    ? index.filter((item) =>
        item.title.toLowerCase().includes(query.trim().toLowerCase())
      )
    : [];

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(24px) saturate(180%)',
          border: '1px solid var(--glass-border)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--border-light)]">
          <Search className="w-5 h-5 text-[var(--text-muted)]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages..."
            className="flex-1 bg-transparent outline-none text-[var(--text)] placeholder-[var(--text-muted)]"
          />
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-[var(--surface-1)] text-[var(--text-muted)]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="max-h-[50vh] overflow-y-auto">
          {results.length === 0 && query.trim() && (
            <div className="px-4 py-6 text-sm text-[var(--text-muted)] text-center">
              No results for “{query}”
            </div>
          )}
          {results.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={onClose}
              className="block px-4 py-3 hover:bg-[var(--surface-1)] transition-colors border-b border-[var(--border-light)] last:border-0"
            >
              <span className="text-sm font-medium text-[var(--text)]">{item.title}</span>
              <span className="block text-xs text-[var(--text-muted)] mt-0.5">{item.href}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
