import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="theme-dark"
      style={{
        background:
          'linear-gradient(180deg, rgba(255,178,120,0.72) 0%, rgba(249,132,61,0.75) 45%, rgba(214,99,38,0.82) 100%)',
        backdropFilter: 'blur(16px) saturate(180%)',
        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
        borderTop: '2px solid #8E3D19',
        borderBottom: '3px solid #8E3D19',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(110,40,10,0.20)',
      }}
    >
      <div className="container py-8 grid gap-6 md:grid-cols-4 text-white/80">
        <div>
          <div className="text-white font-semibold text-base mb-2">Sanskrithi School of Business</div>
          <p className="text-sm leading-relaxed">A modern business school in Puttaparthi focused on real-world impact.</p>
        </div>
        <div>
          <div className="text-white font-medium text-sm mb-3">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about/overview" className="hover:text-white transition-colors">About</Link></li>
            <li><Link to="/academics/mba" className="hover:text-white transition-colors">MBA Program</Link></li>
            <li><Link to="/academics/bba" className="hover:text-white transition-colors">BBA / BBA Honours</Link></li>
            <li><Link to="/admissions/courses" className="hover:text-white transition-colors">Admissions</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium text-sm mb-3">Resources</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/examinations/downloads" className="hover:text-white transition-colors">Downloads</Link></li>
            <li><Link to="/admissions/fee-payment" className="hover:text-white transition-colors">Fee Payment</Link></li>
            <li><Link to="/committees/iqac" className="hover:text-white transition-colors">IQAC</Link></li>
            <li><Link to="/naac" className="hover:text-white transition-colors">NAAC</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-medium text-sm mb-3">Contact</div>
          <div className="space-y-1 text-sm leading-relaxed">
            <p>Behind Sri Sathya Sai Super Speciality Hospital</p>
            <p>Sri Sathyasai District, Andhra Pradesh</p>
            <p className="mt-2">
              <a href="mailto:admissions.director@sanskrithibschool.com" className="hover:text-white transition-colors">
                admissions.director@sanskrithibschool.com
              </a>
            </p>
            <p>+91 9100974544</p>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
        <div className="container py-4 text-xs sm:text-sm text-white/65 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Sanskrithi School of Business, Puttaparthi</span>
          <div className="flex gap-4">
            <Link to="/about/policies-documents" className="hover:text-white transition-colors">Policies</Link>
            <Link to="/grievance-redressal" className="hover:text-white transition-colors">Grievances</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
