import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function IIC() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="IIC Committee"
            subtitle="Institution Innovation Council"
            description="Fostering innovation and entrepreneurship culture"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About IIC</h2>
              <p>
                The Institution Innovation Council (IIC) is established under the Ministry 
                of Education's Innovation Cell (MIC) to systematically foster innovation 
                culture in higher education institutions. Our IIC promotes innovation 
                and entrepreneurship among students, faculty, and staff.
              </p>
            </div>

            <div className="panel">
              <h2>IIC Contact</h2>
              <div className="space-y-1 text-sm">
                <p><strong>Coordinator:</strong> Prof. Vedavyas</p>
                <p><strong>Email:</strong> iic@sanskrithibschool.com</p>
                <p><strong>Phone:</strong> +91-93986 60034</p>
              </div>
            </div>

            <div className="panel">
              <h2>Vision & Mission</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Vision</h4>
                  <p className="text-sm">
                    To create a vibrant innovation ecosystem that encourages creative 
                    thinking, problem-solving, and entrepreneurial mindset among all 
                    stakeholders of the institution.
                  </p>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Mission</h4>
                  <p className="text-sm">
                    To nurture innovation and entrepreneurship through various programs, 
                    activities, and initiatives that bridge the gap between academia 
                    and industry.
                  </p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Key Activities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">💡 Innovation Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Idea generation workshops</li>
                    <li>Innovation competitions</li>
                    <li>Product development labs</li>
                    <li>Technology incubation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🚀 Entrepreneurship</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Startup mentorship programs</li>
                    <li>Business plan competitions</li>
                    <li>Investor connect sessions</li>
                    <li>Entrepreneurship bootcamps</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏭 Industry Connect</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Industry expert lectures</li>
                    <li>Corporate partnership events</li>
                    <li>Innovation challenges</li>
                    <li>Technology transfer programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Achievements</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45</div>
                  <p className="text-sm">Innovation Projects</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">12</div>
                  <p className="text-sm">Startups Incubated</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">25</div>
                  <p className="text-sm">Events Conducted</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">300+</div>
                  <p className="text-sm">Students Participated</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
