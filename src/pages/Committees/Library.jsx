import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function LibraryCommittee() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Library Committee"
            subtitle="Library management and policies"
            description="Ensuring optimal library services and resource management"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>About Library Committee</h2>
              <p>
                The Library Committee oversees the development, management, and policies 
                of the institutional library. It ensures that library resources and 
                services meet the academic and research needs of students, faculty, 
                and staff while maintaining high standards of library operations.
              </p>
            </div>

            <div className="panel">
              <h2>Committee Responsibilities</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📚 Collection Development</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Book and journal selection</li>
                    <li>Digital resource acquisition</li>
                    <li>Collection assessment</li>
                    <li>Budget allocation planning</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📋 Policy Formulation</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Library usage policies</li>
                    <li>Borrowing and return rules</li>
                    <li>Digital access guidelines</li>
                    <li>Research support protocols</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">🔧 Service Enhancement</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>User experience improvement</li>
                    <li>Technology integration</li>
                    <li>Staff development programs</li>
                    <li>Facility upgrades</li>
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
                      <td className="p-3 font-semibold">Librarian</td>
                      <td className="p-3">Mr. Obulapati</td>
                      <td className="p-3">Chief Librarian</td>
                      <td className="p-3">Library Services</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Faculty Representative</td>
                      <td className="p-3">Prof. Rajeshwari</td>
                      <td className="p-3">Senior Faculty</td>
                      <td className="p-3">Management</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative</td>
                      <td className="p-3">Gousia</td>
                      <td className="p-3">Student Council Member</td>
                      <td className="p-3">Final Year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Library Resources</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">25,000+</div>
                  <p className="text-sm">Books</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">150+</div>
                  <p className="text-sm">Journals</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">50+</div>
                  <p className="text-sm">Digital Databases</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">200</div>
                  <p className="text-sm">Seating Capacity</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Recent Initiatives</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">💻 Digital Transformation</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Digital library management system</li>
                    <li>Online catalog and search</li>
                    <li>E-book collection expansion</li>
                    <li>Remote access facilities</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🏗️ Infrastructure Upgrade</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Reading hall modernization</li>
                    <li>Computer lab enhancement</li>
                    <li>Wi-Fi connectivity improvement</li>
                    <li>Study space optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Meeting Schedule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">📅 Regular Meetings</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Monthly committee meetings</li>
                    <li>Quarterly review sessions</li>
                    <li>Annual budget planning</li>
                    <li>Special meetings as required</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">📋 Recent Decisions</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Extended library hours approval</li>
                    <li>New database subscription</li>
                    <li>Study space redesign</li>
                    <li>Digital literacy program launch</li>
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
