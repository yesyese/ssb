import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function PreviousQuestionPapers() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Previous Year Question Papers"
            subtitle="Previous examination papers for reference"
            description="Access to past examination papers for study preparation"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Question Paper Repository</h2>
              <p>
                Access previous year question papers to better understand examination 
                patterns, question formats, and prepare effectively for upcoming 
                examinations. All papers are organized by program, semester, and subject 
                for easy navigation.
              </p>
            </div>

            <div className="panel">
              <h2>MBA Program Question Papers</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">First Year MBA</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Semester I (2023-24)</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>📄 Management Principles & Practices - [Download]</li>
                        <li>📄 Accounting for Managers - [Download]</li>
                        <li>📄 Business Economics - [Download]</li>
                        <li>📄 Organizational Behavior - [Download]</li>
                        <li>📄 Business Communication - [Download]</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Semester II (2023-24)</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>📄 Marketing Management - [Download]</li>
                        <li>📄 Financial Management - [Download]</li>
                        <li>📄 Human Resource Management - [Download]</li>
                        <li>📄 Operations Management - [Download]</li>
                        <li>📄 Business Statistics - [Download]</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Second Year MBA</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Semester III (2023-24)</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>📄 Strategic Management - [Download]</li>
                        <li>📄 International Business - [Download]</li>
                        <li>📄 Entrepreneurship Development - [Download]</li>
                        <li>📄 Business Research Methods - [Download]</li>
                        <li>📄 Specialization Subjects - [Download]</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Semester IV (2023-24)</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>📄 Business Ethics & Governance - [Download]</li>
                        <li>📄 Project Management - [Download]</li>
                        <li>📄 Industry Analysis - [Download]</li>
                        <li>📄 Comprehensive Viva - [Download]</li>
                        <li>📄 Dissertation Defense - [Download]</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>PGDM Program Question Papers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">First Year PGDM (2023-24)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>📄 Fundamentals of Management - [Download]</li>
                    <li>📄 Business Accounting - [Download]</li>
                    <li>📄 Marketing Fundamentals - [Download]</li>
                    <li>📄 Financial Analysis - [Download]</li>
                    <li>📄 HR Practices - [Download]</li>
                    <li>📄 Operations & Supply Chain - [Download]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Second Year PGDM (2023-24)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>📄 Advanced Marketing Strategy - [Download]</li>
                    <li>📄 Corporate Finance - [Download]</li>
                    <li>📄 Leadership & Change Management - [Download]</li>
                    <li>📄 Digital Business - [Download]</li>
                    <li>📄 Business Analytics - [Download]</li>
                    <li>📄 Industry Project - [Download]</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>BBA / BBA Honours Question Papers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">First Year BBA / BBA Honours (2023-24)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>📄 Principles of Management - [Download]</li>
                    <li>📄 Business Mathematics - [Download]</li>
                    <li>📄 Financial Accounting - [Download]</li>
                    <li>📄 Business English - [Download]</li>
                    <li>📄 Computer Applications - [Download]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Second Year BBA / BBA Honours (2023-24)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>📄 Cost Accounting - [Download]</li>
                    <li>📄 Marketing Management - [Download]</li>
                    <li>📄 Business Law - [Download]</li>
                    <li>📄 Statistics for Business - [Download]</li>
                    <li>📄 Environmental Studies - [Download]</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Third Year BBA / BBA Honours (2023-24)</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>📄 Strategic Management - [Download]</li>
                    <li>📄 International Business - [Download]</li>
                    <li>📄 Project Work - [Download]</li>
                    <li>📄 Specialization Papers - [Download]</li>
                    <li>📄 Comprehensive Exam - [Download]</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Previous Years Archive</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Academic Year 2022-23</h4>
                  <p className="text-sm mb-2">Complete question paper set</p>
                  <p className="text-xs text-[var(--text-dim)]">📁 All Programs Available</p>
                  <button className="mt-2 text-[var(--brand)] text-sm hover:underline">Browse Archive</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Academic Year 2021-22</h4>
                  <p className="text-sm mb-2">Complete question paper set</p>
                  <p className="text-xs text-[var(--text-dim)]">📁 All Programs Available</p>
                  <button className="mt-2 text-[var(--brand)] text-sm hover:underline">Browse Archive</button>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Academic Year 2020-21</h4>
                  <p className="text-sm mb-2">Complete question paper set</p>
                  <p className="text-xs text-[var(--text-dim)]">📁 All Programs Available</p>
                  <button className="mt-2 text-[var(--brand)] text-sm hover:underline">Browse Archive</button>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Usage Guidelines</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Question papers are provided for reference and practice purposes only</li>
                <li>Use these papers to understand examination patterns and difficulty levels</li>
                <li>Papers are organized chronologically with latest papers first</li>
                <li>All papers are in PDF format for easy download and printing</li>
                <li>For any missing papers or technical issues, contact examination office</li>
                <li>Regular updates with new question papers after each examination cycle</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Need Help?</h2>
              <p>For assistance with question papers or access issues:</p>
              <div className="mt-4">
                <p><strong>Academic Resources Section</strong></p>
                <p>Email: questionpapers@ssbputtaparthi.edu.in</p>
                <p>Phone: +91-XXXX-XXXXXX</p>
                <p>Library Helpdesk: Available during library hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}