import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function SCSTCell() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="SC & ST Cell"
            subtitle="Scheduled Caste and Scheduled Tribe Cell"
            description="Promoting inclusion and supporting SC/ST students in their academic journey"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About SC & ST Cell</h2>
              <p>
                The SC & ST Cell at SSB Puttaparthi is established to ensure the welfare, 
                development, and protection of rights of students belonging to Scheduled Castes 
                and Scheduled Tribes. The cell works towards creating an inclusive environment 
                and providing necessary support for academic and personal growth.
              </p>
            </div>

            <div className="panel">
              <h2>Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Primary Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Ensure equal opportunities for SC/ST students</li>
                    <li>Provide academic and financial support</li>
                    <li>Address grievances and discrimination issues</li>
                    <li>Promote awareness about rights and schemes</li>
                    <li>Monitor admission and placement processes</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🤝 Support Services</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Counseling and mentorship programs</li>
                    <li>Scholarship and financial aid guidance</li>
                    <li>Career guidance and placement support</li>
                    <li>Academic enrichment programs</li>
                    <li>Cultural and social integration activities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Committee Composition</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Position</th>
                      <th className="text-left p-3">Name</th>
                      <th className="text-left p-3">Designation</th>
                      <th className="text-left p-3">Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Chairperson</td>
                      <td className="p-3">Dr. Bala Koteswari</td>
                      <td className="p-3">Dean Student Affairs</td>
                      <td className="p-3">+91-9100974516</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Coordinator</td>
                      <td className="p-3">Prof. Vedavyas</td>
                      <td className="p-3">Faculty Coordinator</td>
                      <td className="p-3">+91-94911 34309</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">SC Representative</td>
                      <td className="p-3">SaiDeepa</td>
                      <td className="p-3">Student Representative</td>
                      <td className="p-3">+91-8639337639</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">ST Representative</td>
                      <td className="p-3">Swapna Bai</td>
                      <td className="p-3">Student Representative</td>
                      <td className="p-3">+91-7386075128</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Services & Support</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">💰 Financial Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Government scholarship assistance</li>
                    <li>Fee concession guidance</li>
                    <li>Financial aid applications</li>
                    <li>Emergency financial support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📚 Academic Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Extra coaching classes</li>
                    <li>Study material assistance</li>
                    <li>Mentor assignment programs</li>
                    <li>Academic progress monitoring</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">💼 Career Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Placement preparation programs</li>
                    <li>Resume building workshops</li>
                    <li>Interview skills training</li>
                    <li>Job opportunity notifications</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Scholarship Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🏛️ Government Scholarships</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Post Matric Scholarship for SC/ST</li>
                    <li>National Scholarship Portal schemes</li>
                    <li>State government scholarships</li>
                    <li>Merit-cum-means scholarships</li>
                    <li>Research fellowships</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🏫 Institutional Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Fee waiver programs</li>
                    <li>Book and material allowances</li>
                    <li>Hostel fee concessions</li>
                    <li>Travel assistance</li>
                    <li>Emergency financial aid</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">85</div>
                  <p className="text-sm">SC/ST Students Enrolled</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">78</div>
                  <p className="text-sm">Scholarship Recipients</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">92%</div>
                  <p className="text-sm">Academic Success Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">88%</div>
                  <p className="text-sm">Placement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
