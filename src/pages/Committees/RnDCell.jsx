import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function RnDCell() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="R & D Cell"
            subtitle="Research and Development Cell"
            description="Promoting research culture and scholarly activities"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About R & D Cell</h2>
              <p>
                The Research and Development Cell is dedicated to promoting and facilitating 
                research activities among faculty and students. We provide support for 
                research projects, publications, and collaborative research initiatives 
                to enhance the institution's research profile and contribute to knowledge creation.
              </p>
            </div>

            <div className="panel">
              <h2>R & D Contact</h2>
              <div className="space-y-1 text-sm">
                <p><strong>R&D Coordinator:</strong> Dr. Bhabani Shankar Padhy</p>
                <p><strong>Email:</strong> R&amp;D@sanskrithibschool.com</p>
                <p><strong>Phone:</strong> +91-94919 88398</p>
                <p><strong>Office:</strong> R&amp;D Cell, Sanskrithi School of Business</p>
              </div>
            </div>

            <div className="panel">
              <h2>Research Areas</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📊 Management Research</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Strategic Management</li>
                    <li>Human Resource Management</li>
                    <li>Marketing and Consumer Behavior</li>
                    <li>Financial Management</li>
                    <li>Operations Management</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">💼 Business Analytics</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Data Science Applications</li>
                    <li>Business Intelligence</li>
                    <li>Predictive Analytics</li>
                    <li>Digital Marketing Analytics</li>
                    <li>Supply Chain Analytics</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🌐 Emerging Technologies</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Artificial Intelligence in Business</li>
                    <li>Blockchain Applications</li>
                    <li>IoT for Business Solutions</li>
                    <li>Digital Transformation</li>
                    <li>Fintech Innovations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Research Support Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">📝 Publication Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Journal identification and selection</li>
                    <li>Manuscript preparation assistance</li>
                    <li>Peer review process guidance</li>
                    <li>Publication fee support</li>
                    <li>Research writing workshops</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">💰 Funding Assistance</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Grant proposal writing support</li>
                    <li>Funding agency identification</li>
                    <li>Budget preparation assistance</li>
                    <li>Application submission guidance</li>
                    <li>Project management support</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Research Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45</div>
                  <p className="text-sm">Research Publications</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">8</div>
                  <p className="text-sm">Ongoing Projects</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">12</div>
                  <p className="text-sm">Faculty Researchers</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">₹25L</div>
                  <p className="text-sm">Research Funding</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
