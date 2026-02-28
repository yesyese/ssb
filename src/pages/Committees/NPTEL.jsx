import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function NPTEL() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="NPTEL Local Chapter"
            subtitle="National Programme on Technology Enhanced Learning"
            description="Enhancing learning through quality online courses and certifications"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About NPTEL Local Chapter</h2>
              <p>
                The NPTEL (National Programme on Technology Enhanced Learning) Local Chapter 
                at SSB Puttaparthi serves as a dedicated center for promoting quality 
                online education through NPTEL courses. We facilitate student enrollment, 
                coordinate examinations, and support the learning process for various 
                NPTEL certification programs.
              </p>
            </div>

            <div className="panel">
              <h2>Local Chapter Note</h2>
              <p>
                The NPTEL Local Chapter promotes quality online education through certification
                programs across Computer Science, Management, Mathematics, and Humanities.
              </p>
            </div>

            <div className="panel">
              <h2>What is NPTEL?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎓 About NPTEL</h4>
                  <p className="text-sm mb-3">Joint initiative by IITs and IISc</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>High-quality educational content</li>
                    <li>Free online courses from premier institutions</li>
                    <li>Industry-recognized certifications</li>
                    <li>Wide range of subjects and domains</li>
                    <li>Flexible learning schedules</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Course Categories</h4>
                  <p className="text-sm mb-3">Diverse academic and professional courses</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Computer Science & Engineering</li>
                    <li>Management & Economics</li>
                    <li>Mathematics & Statistics</li>
                    <li>Physics & Chemistry</li>
                    <li>Humanities & Social Sciences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Local Chapter Team</h2>
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
                      <td className="p-3 font-semibold">Coordinator</td>
                      <td className="p-3">Dr. [Name]</td>
                      <td className="p-3">Professor & HOD</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Assistant Coordinator</td>
                      <td className="p-3">Prof. [Name]</td>
                      <td className="p-3">Associate Professor</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Technical Support</td>
                      <td className="p-3">Mr. [Name]</td>
                      <td className="p-3">IT Administrator</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Coordinator</td>
                      <td className="p-3">[Student Name]</td>
                      <td className="p-3">Final Year Representative</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Services Provided</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📋 Registration Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Course selection guidance</li>
                    <li>Registration assistance</li>
                    <li>Account setup support</li>
                    <li>Technical troubleshooting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📚 Learning Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Study material access</li>
                    <li>Discussion forum facilitation</li>
                    <li>Peer learning groups</li>
                    <li>Progress tracking assistance</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📝 Examination Coordination</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Exam center arrangements</li>
                    <li>Schedule coordination</li>
                    <li>Technical setup</li>
                    <li>Result processing</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Popular NPTEL Courses</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">💼 Management Courses</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Introduction to Marketing Management</li>
                    <li>Organizational Behaviour</li>
                    <li>Operations Research</li>
                    <li>Financial Management</li>
                    <li>Human Resource Management</li>
                    <li>Strategic Management</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">💻 Technology Courses</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Programming in Python</li>
                    <li>Data Structures and Algorithms</li>
                    <li>Database Management Systems</li>
                    <li>Computer Networks</li>
                    <li>Machine Learning</li>
                    <li>Web Development</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📊 Analytics & Statistics</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Business Analytics</li>
                    <li>Statistics for Data Science</li>
                    <li>Operations Research</li>
                    <li>Supply Chain Management</li>
                    <li>Quality Management</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🗣️ Soft Skills Courses</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Effective Communication</li>
                    <li>Leadership and Team Management</li>
                    <li>Personality Development</li>
                    <li>English Language Skills</li>
                    <li>Technical Writing</li>
                    <li>Interview Skills</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Certification Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">🏆 Certification Criteria</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Assignment Score:</strong> Minimum 10/25 (40%)</li>
                    <li><strong>Exam Score:</strong> Minimum 30/75 (40%)</li>
                    <li><strong>Final Score:</strong> Assignment (25%) + Exam (75%)</li>
                    <li><strong>Passing Requirement:</strong> Final score ≥ 40/100</li>
                    <li><strong>Elite Certificate:</strong> Final score ≥ 60/100</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">📅 Examination Schedule</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Frequency:</strong> Twice a year (April & October)</li>
                    <li><strong>Duration:</strong> 3 hours per exam</li>
                    <li><strong>Mode:</strong> Online proctored examination</li>
                    <li><strong>Registration:</strong> Open 2 months before exam</li>
                    <li><strong>Results:</strong> Declared within 4-6 weeks</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Benefits</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎓 Academic Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Additional credits for degree programs</li>
                    <li>Enhanced subject knowledge</li>
                    <li>Access to premium educational content</li>
                    <li>Peer interaction opportunities</li>
                    <li>Self-paced learning flexibility</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">💼 Career Benefits</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Industry-recognized certificates</li>
                    <li>Enhanced resume value</li>
                    <li>Improved job prospects</li>
                    <li>Skill development opportunities</li>
                    <li>Professional network expansion</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Personal Development</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Self-discipline and time management</li>
                    <li>Digital literacy enhancement</li>
                    <li>Continuous learning mindset</li>
                    <li>Problem-solving skills</li>
                    <li>Confidence building</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Success Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">450+</div>
                  <p className="text-sm">Students Enrolled</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">280+</div>
                  <p className="text-sm">Certificates Earned</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">85%</div>
                  <p className="text-sm">Completion Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">45</div>
                  <p className="text-sm">Elite Certificates</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>How to Enroll</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Registration Steps</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Visit the NPTEL website (nptel.ac.in)</li>
                    <li>Create account using email ID</li>
                    <li>Browse and select desired courses</li>
                    <li>Enroll in courses during registration period</li>
                    <li>Contact local chapter for support</li>
                    <li>Begin learning as per schedule</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Local Chapter Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Course selection guidance sessions</li>
                    <li>Registration assistance workshops</li>
                    <li>Study group formation</li>
                    <li>Technical support for online access</li>
                    <li>Exam center arrangements</li>
                    <li>Certificate collection facilitation</li>
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
