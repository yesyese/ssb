import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function GamesSports() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Games & Sports Cell"
            subtitle="Promoting fitness, sportsmanship, and athletic excellence"
            description="Encouraging sports participation and physical wellness"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Games & Sports Cell</h2>
              <p>
                The Games & Sports Cell is dedicated to promoting physical fitness, 
                sportsmanship, and athletic excellence among students and faculty. 
                We organize various sports activities, competitions, and wellness 
                programs to ensure holistic development and maintain a healthy 
                campus environment.
              </p>
            </div>

            <div className="panel">
              <h2>Sports Facilities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">🏐 Indoor Sports</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Badminton courts</li>
                    <li>Table tennis tables</li>
                    <li>Chess and carrom boards</li>
                    <li>Indoor gymnasium</li>
                    <li>Fitness equipment room</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">⚽ Outdoor Sports</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Football ground</li>
                    <li>Cricket pitch</li>
                    <li>Basketball court</li>
                    <li>Volleyball court</li>
                    <li>Athletics track</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏃‍♂️ Fitness Facilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Modern gymnasium</li>
                    <li>Yoga and meditation hall</li>
                    <li>Jogging track</li>
                    <li>Outdoor fitness equipment</li>
                    <li>Health monitoring station</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Sports Committee</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Position</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Specialization</th>
                      <th className="text-left p-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Sports Coordinator</td>
                      <td className="p-3">Prof. Shaheer</td>
                      <td className="p-3">Physical Education</td>
                      <td className="p-3">+91-63040 93116</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Fitness Instructor</td>
                      <td className="p-3">Mr. Ramu</td>
                      <td className="p-3">Fitness Training</td>
                      <td className="p-3">+91-63020 70194</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Sports Captain (Male)</td>
                      <td className="p-3">Kullayappa</td>
                      <td className="p-3">Cricket / Football</td>
                      <td className="p-3">+91-9701714178</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Sports Captain (Female)</td>
                      <td className="p-3">Lavanaya Bai</td>
                      <td className="p-3">Badminton / Volleyball</td>
                      <td className="p-3">+91-7093249434</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Sports Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🏆 Major Tournaments</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li><strong>SPORTS FEST:</strong> Annual sports festival (February)</li>
                    <li><strong>INTER-COLLEGIATE:</strong> Sports competition (January)</li>
                    <li><strong>FRESHER'S LEAGUE:</strong> New student tournament (September)</li>
                    <li><strong>FACULTY vs STUDENTS:</strong> Fun matches (March)</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📅 Regular Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Weekly sports practice sessions</li>
                    <li>Monthly mini-tournaments</li>
                    <li>Daily fitness classes</li>
                    <li>Weekend sports clinics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Competitive Sports Teams</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">⚽</div>
                  <h4 className="font-semibold mb-2">Football Team</h4>
                  <p className="text-sm">University League Champions</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🏏</div>
                  <h4 className="font-semibold mb-2">Cricket Team</h4>
                  <p className="text-sm">Inter-collegiate Winners</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🏸</div>
                  <h4 className="font-semibold mb-2">Badminton Team</h4>
                  <p className="text-sm">State Level Participants</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🏀</div>
                  <h4 className="font-semibold mb-2">Basketball Team</h4>
                  <p className="text-sm">Regional Champions</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Fitness & Wellness Programs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">💪 Fitness Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Daily workout sessions</li>
                    <li>Weight training programs</li>
                    <li>Cardio fitness classes</li>
                    <li>Personal training sessions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🧘‍♀️ Wellness Activities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Yoga and meditation</li>
                    <li>Stress management workshops</li>
                    <li>Health awareness programs</li>
                    <li>Nutrition counseling</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏃‍♂️ Special Events</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Marathon and fun runs</li>
                    <li>Fitness challenges</li>
                    <li>Sports day celebrations</li>
                    <li>Health checkup camps</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Achievements & Recognition</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">25</div>
                  <p className="text-sm">Inter-collegiate Medals</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">300+</div>
                  <p className="text-sm">Active Sports Participants</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">8</div>
                  <p className="text-sm">State Level Players</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">85%</div>
                  <p className="text-sm">Students in Sports Activities</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Sports Equipment & Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">🏏 Available Equipment</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Professional sports equipment</li>
                    <li>Safety gear and protective equipment</li>
                    <li>Fitness machines and weights</li>
                    <li>Sports uniforms and accessories</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏥 Support Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Sports injury prevention</li>
                    <li>First aid and medical support</li>
                    <li>Physiotherapy assistance</li>
                    <li>Sports nutrition guidance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>How to Join Sports Activities</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Registration Process</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Visit the Sports Cell office</li>
                    <li>Fill the sports registration form</li>
                    <li>Submit medical fitness certificate</li>
                    <li>Attend trial sessions if required</li>
                    <li>Start participating in activities</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Medical fitness certificate</li>
                    <li>Sports uniform (provided)</li>
                    <li>Regular attendance commitment</li>
                    <li>Sportsmanship and team spirit</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
