import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/**
 * PageHeader — banner used at the top of every inner page.
 *
 * Layout follows the sseptp pattern:
 *   - small uppercase orange eyebrow
 *   - large white headline
 *   - optional lead paragraph
 *   - breadcrumb showing Home > Section > Page
 *
 * Background is the brand brown -> orange gradient, kept dark so the
 * downstream light-theme content sections have visual separation.
 */
function humanise(segment) {
  return segment
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function useBreadcrumbs() {
  const { pathname } = useLocation();
  if (pathname === '/') return [];
  const parts = pathname.split('/').filter(Boolean);
  let cumulative = '';
  return parts.map((segment) => {
    cumulative += `/${segment}`;
    return { label: humanise(segment), href: cumulative };
  });
}

export default function PageHeader({ title, eyebrow, description, children }) {
  const crumbs = useBreadcrumbs();

  return (
    <section
      className="theme-dark relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #6F2F14 0%, #8E3D19 55%, #B85323 100%)',
      }}
    >
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(900px 400px at 80% 20%, rgba(249,132,61,0.30), transparent 60%)',
        }}
      />

      <div className="container relative py-10 md:py-14">
        {eyebrow && (
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.20em] uppercase text-[var(--brand-light)] mb-3 block">
            {eyebrow}
          </span>
        )}

        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.15] tracking-tight max-w-3xl">
          {title}
        </h1>

        {description && (
          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            {description}
          </p>
        )}

        {children && <div className="mt-6">{children}</div>}

        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center gap-1.5 text-xs sm:text-sm text-white/70"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            {crumbs.map((crumb, idx) => {
              const isLast = idx === crumbs.length - 1;
              return (
                <React.Fragment key={crumb.href}>
                  <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                  {isLast ? (
                    <span className="text-white font-medium">{crumb.label}</span>
                  ) : (
                    <Link
                      to={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}
      </div>
    </section>
  );
}
