import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function PlacementMOUs() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Placement MOUs & Collaborations"
            subtitle="Industry partnerships for placements"
            description="Strategic alliances that bring leading recruiters to the Sanskrithi campus"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>Strategic Partnerships Overview</h2>
              <p>
                Our Memorandums of Understanding and recruitment partnerships with leading
                organisations create a robust placement network for Sanskrithi students.
                These collaborations span banking, IT services, consulting, FMCG, finance,
                logistics, e-commerce and startups.
              </p>
              <div className="mt-4">
                <a
                  href="/placements/campus-drives"
                  className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold text-sm hover:scale-105 transition-transform"
                >
                  View All Recruiters →
                </a>
              </div>
            </div>

            <div className="panel">
              <h2>Sectors Where Our Partners Recruit</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🏢 IT Services & Consulting</h4>
                  <p className="text-sm mb-3">Technology consulting, BPS, business analysis roles</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>TCS, Wipro, Cognizant, Infosys, HCL, Tech Mahindra</li>
                    <li>Accenture, Deloitte, KPMG, EY</li>
                    <li>Genpact, Quess, Tricon Infotech</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🏦 Banking & Financial Services</h4>
                  <p className="text-sm mb-3">Retail and corporate banking, NBFCs, financial services</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>HDFC Bank, ICICI Bank, SBI, Yes Bank, IDFC First Bank</li>
                    <li>CSB Bank, City Union Bank</li>
                    <li>Bajaj Finserv, Poonawalla Fincorp, Godrej Capital, Manappuram Finance, Muthoot Finance</li>
                    <li>J.P. Morgan, PayPal, Factset</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🛍️ E-commerce, Retail & Logistics</h4>
                  <p className="text-sm mb-3">Marketplace ops, supply chain, last-mile delivery</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Amazon, Uber, Slice, NoBroker, Zepto</li>
                    <li>UltraTech Cement, KIA, Delhivery</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🚀 EdTech, Startups & Specialised Firms</h4>
                  <p className="text-sm mb-3">Emerging companies and growth-stage businesses</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>upGrad, Teachnook, Corizo</li>
                    <li>Brihaspathi, Selfeey, Wayspire</li>
                    <li>Stars Management, Movidu, InTrAinz, Rinex, MOS</li>
                    <li>Samsung, Total, Careernet, [24]7.ai</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Collaboration Benefits</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">For Students</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Direct placement opportunities</li>
                    <li>Industry-specific training programs</li>
                    <li>Mentorship from industry experts</li>
                    <li>Real-world project experience</li>
                    <li>Professional networking</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">For Institution</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Industry-aligned curriculum</li>
                    <li>Guest faculty from industry</li>
                    <li>Joint research initiatives</li>
                    <li>Infrastructure development support</li>
                    <li>Enhanced placement track record</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">For Industry Partners</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Access to quality talent pool</li>
                    <li>Reduced recruitment costs</li>
                    <li>Early talent identification</li>
                    <li>Customised skill development</li>
                    <li>Fresh perspectives and innovation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Types of Collaborations</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📋 Placement MOUs</h4>
                  <p className="text-sm mb-3">Formal agreements for regular recruitment</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Annual placement commitments</li>
                    <li>Pre-defined job profiles and packages</li>
                    <li>Streamlined selection processes</li>
                    <li>Priority access to students</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🎓 Academic Partnerships</h4>
                  <p className="text-sm mb-3">Educational collaboration and curriculum enhancement</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Guest faculty from industry</li>
                    <li>Curriculum advisory committees</li>
                    <li>Joint research projects</li>
                    <li>Certification program partnerships</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">💼 Internship Agreements</h4>
                  <p className="text-sm mb-3">Structured internship and training programs</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Summer internship opportunities</li>
                    <li>Live project assignments</li>
                    <li>Mentorship during internships</li>
                    <li>Pre-placement offers (PPOs)</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🔬 Research Collaborations</h4>
                  <p className="text-sm mb-3">Joint research and innovation initiatives</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Industry-sponsored research</li>
                    <li>Innovation labs and incubators</li>
                    <li>Startup incubation partnerships</li>
                    <li>Technology transfer programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Partnership Inquiries</h2>
              <p>For companies interested in establishing placement partnerships with Sanskrithi School of Business:</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-[var(--text-soft)] text-sm mb-1">Email</p>
                  <a
                    href="mailto:admissions.director@sanskrithibschool.com"
                    className="font-semibold hover:text-[var(--accent)] transition-colors break-words"
                  >
                    admissions.director@sanskrithibschool.com
                  </a>
                </div>
                <div>
                  <p className="text-[var(--text-soft)] text-sm mb-1">Phone</p>
                  <a
                    href="tel:+919100974544"
                    className="font-semibold hover:text-[var(--accent)] transition-colors"
                  >
                    +91 9100 974 544
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
