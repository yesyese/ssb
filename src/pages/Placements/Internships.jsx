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
                Our comprehensive internship program provides students with valuable 
                industry experience, practical skills development, and professional 
                networking opportunities. These programs are designed to enhance 
                employability and provide real-world exposure to business environments.
              </p>
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
                    <li>Stipend and benefits included</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📚 Academic Internships</h4>
                  <p className="text-sm mb-3">Curriculum-integrated practical experience</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Duration: 4-6 weeks during semester</li>
                    <li>Part-time or intensive format</li>
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
                    <li>Digital project management</li>
                    <li>Global team interaction</li>
                    <li>Cross-cultural exposure</li>
                    <li>Technology skill development</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🚀 Startup Internships</h4>
                  <p className="text-sm mb-3">Entrepreneurial experience with emerging companies</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Duration: Variable (6-24 weeks)</li>
                    <li>Multi-functional role exposure</li>
                    <li>Innovation and creativity focus</li>
                    <li>Rapid learning environment</li>
                    <li>Potential for equity/shares</li>
                    <li>Entrepreneurship skill building</li>
                  </ul>
                </div>
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
                    <li>User experience design</li>
                    <li>Business process automation</li>
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
                    <li>Submit online application with resume</li>
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
                    <li>Medical fitness certificate</li>
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
                    <li>Time management and productivity</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Career Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Enhanced resume and profile</li>
                    <li>Professional network expansion</li>
                    <li>Industry insights and knowledge</li>
                    <li>Potential pre-placement offers</li>
                    <li>Salary negotiation advantage</li>
                    <li>Career direction clarity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Internship Statistics (2023-24)</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">92%</div>
                  <p className="text-sm">Students Secured Internships</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">₹16.5K</div>
                  <p className="text-sm">Average Monthly Stipend</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45%</div>
                  <p className="text-sm">Received PPOs</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">4.7/5</div>
                  <p className="text-sm">Employer Satisfaction</p>
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
                  <p className="text-sm">Top 20% performers typically receive PPO considerations</p>
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
              <h2>Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Priya Sharma</h4>
                  <p className="text-sm mb-2">MBA Finance, Class of 2024</p>
                  <p className="text-xs text-[var(--text-dim)]">Internship: HDFC Bank (Investment Analysis)</p>
                  <p className="text-xs text-[var(--text-dim)]">PPO: ₹12 LPA as Financial Analyst</p>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Rahul Verma</h4>
                  <p className="text-sm mb-2">MBA Marketing, Class of 2024</p>
                  <p className="text-xs text-[var(--text-dim)]">Internship: Amazon (Digital Marketing)</p>
                  <p className="text-xs text-[var(--text-dim)]">PPO: ₹15 LPA as Marketing Manager</p>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Sneha Patel</h4>
                  <p className="text-sm mb-2">BBA / BBA Honours, Class of 2024</p>
                  <p className="text-xs text-[var(--text-dim)]">Internship: TCS (Business Development)</p>
                  <p className="text-xs text-[var(--text-dim)]">PPO: ₹8 LPA as Business Analyst</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Internship Support Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Pre-Internship Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Resume review and optimization</li>
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
                    <li>Networking event organization</li>
                    <li>Project presentation coaching</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Apply for Internships</h2>
              <p>Ready to gain valuable industry experience? Start your internship journey:</p>
              <div className="mt-4">
                <p><strong>Internship Portal:</strong> <a href="#" className="text-[var(--brand)] hover:underline">internships.ssbputtaparthi.edu.in</a></p>
                <p><strong>Internship Coordinator:</strong> internships@ssbputtaparthi.edu.in</p>
                <p><strong>Phone:</strong> +91-XXXX-XXXXXX</p>
                <p><strong>Office Hours:</strong> Monday-Friday, 9:00 AM - 5:00 PM</p>
                <p><strong>Office Location:</strong> Placement Cell, Room 102</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}