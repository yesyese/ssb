import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function WomenEmpowerment() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Women Empowerment Cell"
            subtitle="Empowering women through education and opportunities"
            description="Creating a supportive environment for women's growth and development"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Women Empowerment Cell</h2>
              <p>
                The Women Empowerment Cell is committed to creating an inclusive environment 
                that promotes gender equality, women's rights, and professional development. 
                We organize various programs and initiatives to empower women students and 
                faculty members to achieve their full potential.
              </p>
            </div>

            <div className="panel">
              <h2>Key Initiatives</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">👩‍💼 Leadership Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Women leadership workshops</li>
                    <li>Entrepreneurship development</li>
                    <li>Skill development programs</li>
                    <li>Mentorship initiatives</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🛡️ Safety & Security</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Campus safety measures</li>
                    <li>Self-defense training</li>
                    <li>Awareness programs</li>
                    <li>Emergency support systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🤝 Support Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Counseling services</li>
                    <li>Career guidance</li>
                    <li>Health and wellness programs</li>
                    <li>Financial assistance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Cell Contact</h2>
              <div className="space-y-1 text-sm">
                <p><strong>Co-ordinator:</strong> Prof. Aradhana</p>
                <p><strong>Email:</strong> aradhana.a@sanskrithibschool.com</p>
                <p><strong>Phone:</strong> +91-93986 60034</p>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">65%</div>
                  <p className="text-sm">Women Students</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45%</div>
                  <p className="text-sm">Women Faculty</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">20</div>
                  <p className="text-sm">Empowerment Programs</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">500+</div>
                  <p className="text-sm">Beneficiaries</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
