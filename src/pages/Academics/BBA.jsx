import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AboutBBA() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="About BBA / BBA Honours"
            subtitle="Bachelor of Business Administration program"
            description="Comprehensive undergraduate business education"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>BBA / BBA Honours Program Overview</h2>
              <p>
                The Bachelor of Business Administration (BBA / BBA Honours) program is designed to provide
                students with a strong foundation in business principles and management practices.
                Our comprehensive curriculum covers all major areas of business including finance,
                marketing, human resources, and operations management.
              </p>
            </div>

            <div className="panel">
              <h2>Program Highlights</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>3-year undergraduate program (BBA / BBA Honours)</li>
                <li>Industry-oriented curriculum</li>
                <li>Experienced faculty with industry background</li>
                <li>Practical learning through case studies and projects</li>
                <li>Internship opportunities with leading companies</li>
                <li>Strong placement support</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Career Opportunities</h2>
              <p>
                BBA / BBA Honours graduates can pursue careers in various fields including corporate management,
                consulting, banking, marketing, human resources, and entrepreneurship. Many graduates
                also choose to pursue higher education like MBA or specialized master's programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}