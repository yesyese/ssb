import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function Internships() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Internships"
            subtitle="Hands-on industry experience programs"
            description="Bridge the gap between academics and professional life"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>Internship Program Overview</h2>
              <p>
                Sanskrithi's internship program provides students with valuable industry
                experience, practical skill development and professional networking.
                Internships are arranged with our placement partners across IT services,
                consulting, banking, financial services, e-commerce, retail and emerging
                startups.
              </p>
              <div className="mt-4">
                <a
                  href="/placements/campus-drives"
                  className="inline-block px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold text-sm hover:scale-105 transition-transform"
                >
                  See Our Recruiters →
                </a>
              </div>
            </div>

            <div className="panel">
              <h2>Types of Internships</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">☀️ Summer Internships</h4>
                  <p className="text-sm mb-3">2-3 month intensive programs during summer break</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Duration: 8-12 weeks (May-July)</li>
                    <li>Full-time commitment (40 hours/week)</li>
                    <li>Structured learning outcomes</li>
                    <li>Project-based assignments</li>
                    <li>Mentorship and guidance</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">📚 Academic Internships</h4>
                  <p className="text-sm mb-3">Curriculum-integrated practical experience</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Duration: 4-6 weeks during semester</li>
                    <li>Academic credit integration</li>
                    <li>Faculty supervision</li>
                    <li>Industry project completion</li>
                    <li>Performance evaluation</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🌍 Virtual Internships</h4>
                  <p className="text-sm mb-3">Remote work experience with global companies</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Flexible duration (4-16 weeks)</li>
                    <li>Remote collaboration tools</li>
                    <li>Cross-cultural team exposure</li>
                    <li>Digital project management</li>
                    <li>Technology skill development</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">🚀 Startup Internships</h4>
                  <p className="text-sm mb-3">Entrepreneurial experience with emerging companies</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Multi-functional role exposure</li>
                    <li>Innovation and creativity focus</li>
                    <li>Rapid learning environment</li>
                    <li>Entrepreneurship skill building</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>RISE India Office at Sanskrithi</h2>
              <p className="mb-4">
                A unique on-campus advantage — the RISE India Office is being established
                within the Sanskrithi campus, marking a significant milestone in
                academia-industry collaboration. This is a first-of-its-kind dedicated
                software development office inside an educational institution.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-2">
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Real-world software development environment on campus</li>
                  <li>Internships, research collaborations and direct placements</li>
                  <li>Mentorship programs and technical workshops</li>
                  <li>Live projects with industry professionals</li>
                </ul>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Hands-on experience in software engineering and project management</li>
                  <li>Exposure to emerging technologies</li>
                  <li>Bridging theoretical learning and practical implementation</li>
                  <li>Industry-ready graduates</li>
                </ul>
              </div>
            </div>

            <div className="panel">
              <h2>Industry Sectors for Internships</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Technology & IT</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Software development projects</li>
                    <li>Data analysis and research</li>
                    <li>Digital marketing campaigns</li>
                    <li>Business process automation</li>
                    <li>UX research and design</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Banking & Finance</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Financial analysis and modeling</li>
                    <li>Investment research</li>
                    <li>Risk assessment projects</li>
                    <li>Customer relationship management</li>
                    <li>Regulatory compliance analysis</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Consulting & Advisory</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Business strategy development</li>
                    <li>Market research and analysis</li>
                    <li>Process improvement initiatives</li>
                    <li>Client presentation preparation</li>
                    <li>Industry benchmarking studies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Internship Application Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Step-by-Step Process</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Browse available internship opportunities</li>
                    <li>Submit application with resume</li>
                    <li>Complete company-specific assessments</li>
                    <li>Participate in screening interviews</li>
                    <li>Receive offer and acceptance confirmation</li>
                    <li>Complete pre-internship orientation</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Required Documents</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Updated resume with cover letter</li>
                    <li>Academic transcripts and certificates</li>
                    <li>Faculty recommendation letters</li>
                    <li>Portfolio of relevant projects</li>
                    <li>Identity and address proof</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Learning Outcomes & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Professional Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Industry-specific technical skills</li>
                    <li>Business communication proficiency</li>
                    <li>Project management capabilities</li>
                    <li>Team collaboration experience</li>
                    <li>Problem-solving methodologies</li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="font-semibold mb-2">Career Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Enhanced resume and profile</li>
                    <li>Professional network expansion</li>
                    <li>Industry insights and knowledge</li>
                    <li>Potential pre-placement offers (PPOs)</li>
                    <li>Career direction clarity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Pre-Placement Offers (PPOs)</h2>
              <p>
                Many of our internship partners extend Pre-Placement Offers to
                exceptional performers, providing a direct pathway to full-time
                employment upon graduation.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <h4 className="font-semibold mb-2">Performance Excellence</h4>
                  <p className="text-sm">Top performers typically receive PPO considerations</p>
                </div>

                <div className="text-center">
                  <div className="text-2xl mb-2">🤝</div>
                  <h4 className="font-semibold mb-2">Mutual Benefit</h4>
                  <p className="text-sm">Companies secure proven talent, students gain job security</p>
                </div>

                <div className="text-center">
                  <div className="text-2xl mb-2">📈</div>
                  <h4 className="font-semibold mb-2">Career Acceleration</h4>
                  <p className="text-sm">PPO recipients often start with higher packages and roles</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Internship Support Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Pre-Internship Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Resume review and optimisation</li>
                    <li>Interview preparation sessions</li>
                    <li>Company research assistance</li>
                    <li>Professional attire guidance</li>
                    <li>Travel and accommodation support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">During Internship</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Regular check-ins and mentoring</li>
                    <li>Performance feedback sessions</li>
                    <li>Problem resolution assistance</li>
                    <li>Networking event organisation</li>
                    <li>Project presentation coaching</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Apply for Internships</h2>
              <p>Ready to gain valuable industry experience? Reach out to the placement team:</p>
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
              <p className="text-sm text-[var(--text-soft)] mt-3">Office Hours: Monday – Friday, 9:00 AM – 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
