import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function GrievanceRedressal() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Students Grievance Redressal Committee"
            subtitle="Addressing student concerns and ensuring fair resolution"
            description="Dedicated to resolving student grievances promptly and effectively"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About the Committee</h2>
              <p>
                The Students Grievance Redressal Committee serves as a vital link between 
                students and the administration, ensuring that student concerns are addressed 
                fairly, promptly, and transparently. The committee promotes a healthy academic 
                environment by providing an effective mechanism for resolving various 
                student-related issues.
              </p>
            </div>

            <div className="panel">
              <h2>Committee Objectives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Primary Objectives</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Provide fair and timely resolution of student grievances</li>
                    <li>Maintain transparency in grievance handling process</li>
                    <li>Ensure student rights are protected and respected</li>
                    <li>Foster a supportive academic environment</li>
                    <li>Bridge communication gaps between students and administration</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🔍 Scope of Grievances</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Academic-related concerns and disputes</li>
                    <li>Administrative issues and procedures</li>
                    <li>Fee-related problems and queries</li>
                    <li>Infrastructure and facility complaints</li>
                    <li>Examination and evaluation concerns</li>
                    <li>Hostel and campus life issues</li>
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
                      <th className="text-left p-3">Department</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Chairperson</td>
                      <td className="p-3">Dr. Bala Koteswari</td>
                      <td className="p-3">Dean Academic Affairs</td>
                      <td className="p-3">Administration</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Coordinator</td>
                      <td className="p-3">Prashanthi</td>
                      <td className="p-3">Senior Faculty</td>
                      <td className="p-3">Management</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Faculty Representative</td>
                      <td className="p-3">Dr. Bhabani Shankar</td>
                      <td className="p-3">Associate Professor</td>
                      <td className="p-3">Business Administration</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative (Senior)</td>
                      <td className="p-3">Krishnaveni</td>
                      <td className="p-3">Student Council President</td>
                      <td className="p-3">MBA Final Year</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative (Junior)</td>
                      <td className="p-3">Saipriya</td>
                      <td className="p-3">Student Council Member</td>
                      <td className="p-3">BBA Second Year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Grievance Categories</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📚 Academic Grievances</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Course content and curriculum issues</li>
                    <li>Teaching methodology concerns</li>
                    <li>Assignment and project disputes</li>
                    <li>Attendance and assessment problems</li>
                    <li>Faculty behavior or discrimination</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏢 Administrative Grievances</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Admission and enrollment issues</li>
                    <li>Fee payment and refund matters</li>
                    <li>Document and certificate delays</li>
                    <li>Administrative procedure complaints</li>
                    <li>Service quality concerns</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🏫 Infrastructure Grievances</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Classroom and laboratory facilities</li>
                    <li>Library and computer lab access</li>
                    <li>Hostel accommodation problems</li>
                    <li>Transport and parking issues</li>
                    <li>Cafeteria and food services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Grievance Submission Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Online Submission</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Visit the student portal or grievance website</li>
                    <li>Fill the online grievance form</li>
                    <li>Upload supporting documents if any</li>
                    <li>Submit and note the grievance ID</li>
                    <li>Track status through online portal</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Offline Submission</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>Collect grievance form from office</li>
                    <li>Fill form with complete details</li>
                    <li>Attach relevant documents</li>
                    <li>Submit to grievance committee office</li>
                    <li>Collect acknowledgment receipt</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Resolution Timeline</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">24 Hours</div>
                  <p className="text-sm">Acknowledgment</p>
                </div>
                <div className="text-center card">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">7 Days</div>
                  <p className="text-sm">Initial Review</p>
                </div>
                <div className="text-center card">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">15 Days</div>
                  <p className="text-sm">Investigation</p>
                </div>
                <div className="text-center card">
                  <div className="text-2xl font-bold text-[var(--brand)] mb-2">30 Days</div>
                  <p className="text-sm">Final Resolution</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Annual Report Summary</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">156</div>
                  <p className="text-sm">Total Grievances Received</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-green-600 mb-2">148</div>
                  <p className="text-sm">Successfully Resolved</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Resolution Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">18 Days</div>
                  <p className="text-sm">Average Resolution Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
