import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../../assets/newlogo.png';
import { NAV } from '../../data/nav.js';

const PRIMARY_LABELS = [
  'Home',
  'About Us',
  'Admissions',
  'Academics',
  'Campus Life',
  'Examinations',
  'Placements',
  'NAAC',
];

const MORE_LABELS = [
  'Committees',
  'Community Service',
  'Mandatory Disclosure',
  'Grievance Redressal',
];

function pickNavItems() {
  const byLabel = Object.fromEntries(NAV.map((item) => [item.label, item]));
  const primary = PRIMARY_LABELS.map((l) => byLabel[l]).filter(Boolean);
  const more = MORE_LABELS.map((l) => byLabel[l]).filter(Boolean);
  return { primary, more };
}

function isPathActive(pathname, item) {
  if (item.href === '/') return pathname === '/';
  if (pathname === item.href) return true;
  if (item.children?.some((c) => pathname === c.href)) return true;
  return pathname.startsWith(item.href + '/');
}

function DesktopMenuItem({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const active = isPathActive(pathname, item);
  const hasChildren = !!item.children?.length;

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => clearTimeout(closeTimer.current);

  if (!hasChildren) {
    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          `px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isActive || active
              ? 'text-[var(--brand)]'
              : 'text-[var(--text-soft)] hover:text-[var(--text)]'
          }`
        }
        end={item.href === '/'}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
          active ? 'text-[var(--brand)]' : 'text-[var(--text-soft)] hover:text-[var(--text)]'
        }`}
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full pt-2 min-w-[260px] z-50"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <div
            className="rounded-lg overflow-hidden border border-[var(--border-light)]"
            style={{
              background: 'rgba(15,20,25,0.96)',
              backdropFilter: 'blur(14px)',
              boxShadow: '0 12px 32px -8px rgba(0,0,0,0.5)',
            }}
          >
            <ul className="py-1">
              {item.children.map((child) => (
                <li key={child.href}>
                  <Link
                    to={child.href}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      pathname === child.href
                        ? 'text-[var(--brand)] bg-white/5'
                        : 'text-[var(--text-soft)] hover:text-[var(--text)] hover:bg-white/5'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

function MobileDrawer({ open, onClose, items, pathname }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!open) setExpanded(null);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[70]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 w-full max-w-sm flex flex-col"
        style={{
          background: 'var(--base)',
          borderLeft: '1px solid var(--border-light)',
          boxShadow: '-12px 0 32px rgba(0,0,0,0.4)',
        }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--border-light)]">
          <Link to="/" onClick={onClose} className="flex items-center gap-2">
            <img src={logo} alt="SSB" className="h-9 w-auto" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-md text-[var(--text-soft)] hover:text-[var(--text)] hover:bg-white/5"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-2">
          <ul>
            {items.map((item, idx) => {
              const hasChildren = !!item.children?.length;
              const isExpanded = expanded === idx;
              const active = isPathActive(pathname, item);

              return (
                <li key={item.label} className="border-b border-white/5 last:border-b-0">
                  {hasChildren ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setExpanded(isExpanded ? null : idx)}
                        className={`w-full flex items-center justify-between px-5 py-3 text-left text-sm font-medium transition-colors ${
                          active ? 'text-[var(--brand)]' : 'text-[var(--text)]'
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isExpanded && (
                        <ul className="pb-2">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                to={child.href}
                                onClick={onClose}
                                className={`block px-8 py-2.5 text-sm transition-colors ${
                                  pathname === child.href
                                    ? 'text-[var(--brand)]'
                                    : 'text-[var(--text-soft)] hover:text-[var(--text)]'
                                }`}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className={`block px-5 py-3 text-sm font-medium transition-colors ${
                        active ? 'text-[var(--brand)]' : 'text-[var(--text)] hover:text-[var(--brand)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-[var(--border-light)]">
          <Link
            to="/inquiry"
            onClick={onClose}
            className="block w-full text-center px-4 py-3 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)] transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { primary, more } = pickNavItems();
  const moreItem = more.length
    ? { label: 'More', href: '#more', children: more }
    : null;
  const desktopItems = moreItem ? [...primary, moreItem] : primary;
  const allItems = [...primary, ...more];

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
          background: scrolled ? 'rgba(15,20,25,0.92)' : 'rgba(15,20,25,0.7)',
          backdropFilter: 'blur(14px) saturate(160%)',
          borderBottom: scrolled
            ? '1px solid var(--border-light)'
            : '1px solid transparent',
        }}
      >
        <div className="container flex items-center justify-between h-[var(--header-height)] gap-6">
          <Link to="/" className="flex items-center gap-3 min-w-0 shrink-0">
            <img src={logo} alt="SSB Logo" className="h-10 md:h-11 w-auto" />
            <div className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="text-[15px] font-semibold text-[var(--text)] tracking-tight truncate">
                Sanskrithi School of Business
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] truncate">
                Puttaparthi · Autonomous
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {desktopItems.map((item) => (
              <DesktopMenuItem key={item.label} item={item} pathname={location.pathname} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/inquiry"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-[var(--brand)] text-white text-sm font-semibold hover:bg-[var(--brand-dark)] transition-colors"
            >
              Apply Now
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-md text-[var(--text-soft)] hover:text-[var(--text)] hover:bg-white/5"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={allItems}
        pathname={location.pathname}
      />
    </>
  );
}
