import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function PlacementTeam() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Team Members"
            subtitle="Placement cell team and coordinators"
            description="Dedicated professionals guiding your career journey"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Placement Cell Team</h2>
              <p>
                Our Placement Cell is staffed with experienced professionals who 
                work tirelessly to bridge the gap between students and industry. 
                The team combines academic expertise with industry insights to 
                provide comprehensive career guidance and placement support.
              </p>
            </div>

            <div className="panel">
              <h2>Leadership Team</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Director - Placements</h4>
                  <p className="text-sm mb-2">Overall strategic leadership and industry relations</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Strategic planning and policy formulation</li>
                    <li>Industry partnership development</li>
                    <li>Corporate relationship management</li>
                    <li>Placement outcome optimization</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Deputy Director - Placements</h4>
                  <p className="text-sm mb-2">Operational management and execution</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Day-to-day placement operations</li>
                    <li>Campus recruitment coordination</li>
                    <li>Student preparation oversight</li>
                    <li>Placement process monitoring</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Training & Development Manager</h4>
                  <p className="text-sm mb-2">Student skill development and preparation</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Training program design and delivery</li>
                    <li>Soft skills development</li>
                    <li>Interview preparation sessions</li>
                    <li>Industry readiness assessment</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Corporate Relations Manager</h4>
                  <p className="text-sm mb-2">Industry connect and partnership management</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Corporate outreach and engagement</li>
                    <li>Recruitment drive coordination</li>
                    <li>Company-specific requirement mapping</li>
                    <li>Alumni network leveraging</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Faculty Coordinators</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">MBA Coordinator</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>MBA student placement guidance</li>
                    <li>Specialization-specific opportunities</li>
                    <li>Academic-industry alignment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">PGDM Coordinator</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>PGDM student career support</li>
                    <li>Industry-oriented placements</li>
                    <li>Practical skill development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">BBA / BBA Honours Coordinator</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Undergraduate placement support</li>
                    <li>Entry-level opportunity mapping</li>
                    <li>Foundation skill building</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Support Staff</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Administrative Team</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Student database management</li>
                    <li>Documentation and record keeping</li>
                    <li>Communication coordination</li>
                    <li>Event logistics support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technical Support</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Placement portal management</li>
                    <li>Online assessment coordination</li>
                    <li>Video conferencing support</li>
                    <li>Digital platform maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Student Representatives</h2>
              <p>
                Each batch has elected student representatives who work closely 
                with the placement team to understand student needs, coordinate 
                activities, and facilitate communication between peers and the 
                placement cell.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="font-semibold mb-2">Placement Committee Members</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Batch coordination and communication</li>
                    <li>Peer mentoring and support</li>
                    <li>Event organization assistance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Skills & Responsibilities</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Leadership and organizational skills</li>
                    <li>Effective communication abilities</li>
                    <li>Team collaboration and coordination</li>
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