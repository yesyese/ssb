import React from 'react';

/**
 * SectionHeader — sseptp-inspired pattern:
 *   - small uppercase orange eyebrow (subtitle)
 *   - large title in primary brand colour
 *   - 64px orange underline under the title
 *   - optional muted description below
 *
 * Props
 *   - title (required)
 *   - subtitle: short eyebrow text rendered above the title in uppercase orange
 *   - description: longer paragraph rendered below the title in muted grey
 *   - eyebrow: alias for subtitle (kept for older callsites)
 *   - center: centre everything (default true) — most pages want this
 *   - className: extra wrapper classes
 *
 * Old callsites passed { title, subtitle, description } — this signature is
 * preserved so the swap is non-breaking.
 */
export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  description,
  center = true,
  className = '',
}) {
  const eyebrowText = eyebrow || subtitle;
  const align = center ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${align} mb-10 md:mb-12 ${className}`}>
      {eyebrowText && (
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-[var(--accent)] mb-3">
          {eyebrowText}
        </span>
      )}

      <h2 className="text-[var(--brand)] font-bold text-2xl sm:text-3xl md:text-[2.25rem] leading-tight tracking-tight mb-3 max-w-3xl">
        {title}
      </h2>

      <span
        aria-hidden="true"
        className="block h-[3px] w-16 rounded-full bg-[var(--accent)] mb-5"
        style={{ width: 'clamp(48px, 15%, 64px)' }}
      />

      {description && (
        <p
          className={`text-[var(--text-soft)] text-base md:text-lg leading-relaxed max-w-2xl ${
            center ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
