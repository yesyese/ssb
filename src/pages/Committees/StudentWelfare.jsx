import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function StudentWelfare() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Student Welfare Committee"
            subtitle="Student welfare and support services"
            description="Ensuring holistic student development and well-being"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Student Welfare Committee</h2>
              <p>
                The Student Welfare Committee is dedicated to promoting the overall 
                well-being and development of students. We ensure that students have 
                access to necessary support services, facilities, and opportunities 
                for their personal, academic, and professional growth.
              </p>
            </div>

            <div className="panel">
              <h2>Welfare Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">🏥 Health & Wellness</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Medical facility management</li>
                    <li>Health insurance assistance</li>
                    <li>Mental health support</li>
                    <li>Wellness programs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">💰 Financial Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Scholarship administration</li>
                    <li>Emergency financial aid</li>
                    <li>Fee payment assistance</li>
                    <li>Work-study programs</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏠 Accommodation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Hostel facility management</li>
                    <li>Accommodation assistance</li>
                    <li>Mess and food services</li>
                    <li>Living condition monitoring</li>
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
                      <td className="p-3">Prof. Girish</td>
                      <td className="p-3">Student Welfare Officer</td>
                      <td className="p-3">+91-63630 73453</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Faculty Representative</td>
                      <td className="p-3">Prof. Aradhana</td>
                      <td className="p-3">Senior Faculty</td>
                      <td className="p-3">+91-79050 71707</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative</td>
                      <td className="p-3">Vishwanath</td>
                      <td className="p-3">Student Council President</td>
                      <td className="p-3">+91-6305808290</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Impact</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">450+</div>
                  <p className="text-sm">Students Supported</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">₹15L</div>
                  <p className="text-sm">Financial Aid Distributed</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Student Satisfaction</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">25</div>
                  <p className="text-sm">Welfare Programs</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
