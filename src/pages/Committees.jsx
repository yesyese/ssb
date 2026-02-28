import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader.jsx';

export default function Committees() {
  const committees = [
    { name: 'IQAC', desc: 'Internal Quality Assurance Cell', href: '/committees/iqac' },
    { name: 'Anti Ragging', desc: 'Anti-ragging measures and reporting', href: '/committees/anti-ragging' },
    { name: 'Anti Sexual Harassment', desc: 'Anti sexual harassment measures and reporting', href: '/committees/anti-sexual-harassment' },
    { name: 'Internal Complaint', desc: 'Addressing workplace harassment and discrimination', href: '/committees/internal-complaint' },
    { name: 'Students Grievance Redressal', desc: 'Student concerns and fair resolution process', href: '/committees/grievance-redressal' },
    { name: 'NPTEL Local Chapter', desc: 'Technology enhanced learning and certifications', href: '/committees/nptel' },
    { name: 'College Academic Committee', desc: 'Academic governance and quality standards', href: '/committees/academic' },
    { name: 'IIC Committee', desc: 'Institution Innovation Council', href: '/committees/iic' },
    { name: 'R & D Cell', desc: 'Research and development initiatives', href: '/committees/rnd-cell' },
    { name: 'Women Empowerment Cell', desc: 'Gender equality and support initiatives', href: '/committees/women-empowerment' },
    { name: 'Library Committee', desc: 'Library governance and resource management', href: '/committees/library' },
    { name: 'Student Welfare Committee', desc: 'Student support and welfare services', href: '/committees/student-welfare' },
    { name: 'Games & Sports Cell', desc: 'Sports development and physical wellness', href: '/committees/games-sports' },
    { name: 'Extra Curricular Committee', desc: 'Co-curricular and extra-curricular development', href: '/committees/extra-curricular' },
    { name: 'Career Guidance Cell', desc: 'Career planning and placement readiness', href: '/committees/career-guidance' },
    { name: 'SC/ST Cell', desc: 'Support and grievance redressal for SC/ST students', href: '/committees/sc-st-cell' },
    { name: 'Finance Committee', desc: 'Financial planning and oversight', href: '/committees/finance' },
    { name: 'Alumni Cell', desc: 'Alumni engagement and networking', href: '/committees/alumni-cell' }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            eyebrow="Committees"
            title="Institutional Committees & Cells"
            description="Committee-wise pages for all institutional committees and cells"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {committees.map((c, i) => (
              <Link
                key={i}
                to={c.href}
                className="panel block hover:border-[var(--brand)]/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{c.name}</h3>
                <p className="text-sm text-[var(--text-soft)]">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
