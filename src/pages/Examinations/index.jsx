import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

/**
 * Examination Section — single landing page that consolidates:
 *   - Examination Team
 *   - Evaluation Procedure
 *   - Examination Calendar (with downloadable PDFs)
 *
 * Sections have id anchors so menu deep-links can scroll to them.
 */
export default function Examinations() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Examination Section"
            subtitle="Team · Evaluation · Calendar"
            description="Everything about how SSB conducts examinations — the people, the assessment methodology, and the schedule of activities."
          />

          {/* Section anchor nav */}
          <div className="panel mb-8">
            <div className="flex flex-wrap gap-3 items-center justify-between">
              <p className="text-sm text-[var(--text-soft)]">Jump to a section:</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href="#team"
                  className="px-4 py-2 rounded-full text-sm bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text)] transition-colors"
                >
                  Examination Team
                </a>
                <a
                  href="#evaluation"
                  className="px-4 py-2 rounded-full text-sm bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text)] transition-colors"
                >
                  Evaluation Procedure
                </a>
                <a
                  href="#calendar"
                  className="px-4 py-2 rounded-full text-sm bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text)] transition-colors"
                >
                  Examination Calendar
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-section">
            {/* =============== EXAMINATION TEAM =============== */}
            <section id="team" className="scroll-mt-32 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
                Examination Team
              </h2>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Structure</h3>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  The examination team at SSB Puttaparthi comprises dedicated faculty and
                  administrative staff responsible for conducting fair, transparent, and
                  efficient examinations. Our team ensures all examination processes follow
                  university guidelines and maintain academic integrity.
                </p>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-5">Key Personnel</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card">
                    <h4 className="font-semibold mb-2">Controller of Examinations</h4>
                    <p className="text-sm mb-2 text-[var(--text-soft)]">
                      Overall supervision of examination activities
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-soft)]">
                      <li>Examination policy implementation</li>
                      <li>Result approval and publication</li>
                      <li>Committee coordination</li>
                    </ul>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2">Deputy Controller</h4>
                    <p className="text-sm mb-2 text-[var(--text-soft)]">
                      Assistant to Controller for day-to-day operations
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-soft)]">
                      <li>Examination scheduling</li>
                      <li>Invigilation coordination</li>
                      <li>Result processing</li>
                    </ul>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2">Examination Officer</h4>
                    <p className="text-sm mb-2 text-[var(--text-soft)]">
                      Administrative coordination of examinations
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-soft)]">
                      <li>Hall ticket preparation</li>
                      <li>Question paper handling</li>
                      <li>Attendance management</li>
                    </ul>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-2">IT Support Team</h4>
                    <p className="text-sm mb-2 text-[var(--text-soft)]">
                      Technical support for examination processes
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-soft)]">
                      <li>Online examination systems</li>
                      <li>Result processing software</li>
                      <li>Database management</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Faculty Coordinators</h3>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  Each department has designated faculty coordinators who work closely with
                  the examination team to ensure subject-specific requirements are met and
                  evaluation processes are conducted according to academic standards.
                </p>
              </div>
            </section>

            {/* =============== EVALUATION PROCEDURE =============== */}
            <section id="evaluation" className="scroll-mt-32 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
                Evaluation Procedure
              </h2>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Evaluation Philosophy</h3>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  Our evaluation system is designed to assess students' understanding,
                  application skills, and analytical abilities comprehensively. We follow
                  a transparent and standardized evaluation procedure that ensures fairness
                  and consistency across all subjects and programs.
                </p>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-5">Assessment Components</h3>
                <div className="grid md:grid-cols-2 gap-6 items-stretch">
                  <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] h-full">
                    <h4 className="font-semibold mb-2">Internal Assessment (40%)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[var(--text-soft)]">
                      <li>Mid-term examinations (15%)</li>
                      <li>Assignments and projects (10%)</li>
                      <li>Class participation (5%)</li>
                      <li>Presentation and viva (5%)</li>
                      <li>Attendance (5%)</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] h-full">
                    <h4 className="font-semibold mb-2">External Assessment (60%)</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[var(--text-soft)]">
                      <li>End semester examination (60%)</li>
                      <li>Written examination format</li>
                      <li>3-hour duration per subject</li>
                      <li>External evaluation by qualified examiners</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-5">Grading System</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--border-light)]">
                        <th className="text-left p-3">Grade</th>
                        <th className="text-left p-3">Grade Points</th>
                        <th className="text-left p-3">Marks Range</th>
                        <th className="text-left p-3">Performance Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['O', '10', '90-100', 'Outstanding'],
                        ['A+', '9', '80-89', 'Excellent'],
                        ['A', '8', '70-79', 'Very Good'],
                        ['B+', '7', '60-69', 'Good'],
                        ['B', '6', '55-59', 'Above Average'],
                        ['C', '5', '50-54', 'Average'],
                        ['F', '0', 'Below 50', 'Fail'],
                      ].map((row) => (
                        <tr key={row[0]} className="border-b border-[var(--border-light)]">
                          {row.map((cell, i) => (
                            <td key={i} className="p-3">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Evaluation Process</h3>
                <ol className="list-decimal list-inside space-y-2 text-[var(--text-soft)]">
                  <li>Answer scripts are coded to ensure anonymous evaluation</li>
                  <li>External examiners are appointed for unbiased assessment</li>
                  <li>Double valuation is conducted for major examinations</li>
                  <li>Moderation committee reviews significant grade variations</li>
                  <li>Final marks are computed using weighted average method</li>
                  <li>Results are verified before publication</li>
                </ol>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  We maintain strict quality control measures including peer review of
                  question papers, standardized marking schemes, and regular training
                  for evaluators to ensure consistent and fair assessment across all
                  subjects and semesters.
                </p>
              </div>
            </section>

            {/* =============== EXAMINATION CALENDAR =============== */}
            <section id="calendar" className="scroll-mt-32 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">
                Examination Calendar
              </h2>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-2">Academic Year 2024-25</h3>
                <p className="mb-4 text-[var(--text-soft)]">
                  The academic calendar outlines all important examination dates,
                  submission deadlines, and academic activities for the current year.
                  Students are advised to refer to this calendar regularly.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      label: '2025 I & II Sem Academic Calendar MBA Autonomous Batch',
                      href: '/pdf/2025 I & II Sem Academic Calender MBA Autonomous Batch.docx',
                    },
                    {
                      label: '2025 I & II Sem Academic Calendar BBA / BBA Honours Autonomous Batch',
                      href: '/pdf/2025 I & II Sem Academic Calender BBA Autonomous Batch.docx',
                    },
                    {
                      label: '2025 Academic Calendar MBA Autonomous Batch',
                      href: '/pdf/2025 Academic Calender MBA Autonomous Batch.pdf',
                    },
                    {
                      label: '2025 Academic Calendar BBA / BBA Honours Autonomous Batch',
                      href: '/pdf/2025 Academic Calender BBA Autonomous Batch.pdf',
                    },
                  ].map((doc) => (
                    <div
                      key={doc.href}
                      className="flex items-center justify-between gap-3 border border-[var(--border-light)] p-3 rounded-lg"
                    >
                      <span className="text-sm">{doc.label}</span>
                      <a
                        href={doc.href}
                        download
                        className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white px-3 py-1.5 rounded-md text-sm transition-colors shrink-0"
                      >
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-5">Semester Examination Schedule</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card">
                    <h4 className="font-semibold mb-3">Odd Semester (July – December)</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-soft)]">
                      <li><strong className="text-[var(--text)]">Mid-term Exams:</strong> September 15-25, 2024</li>
                      <li><strong className="text-[var(--text)]">Internal Assessment:</strong> October 15-30, 2024</li>
                      <li><strong className="text-[var(--text)]">End Semester Exams:</strong> December 1-15, 2024</li>
                      <li><strong className="text-[var(--text)]">Result Declaration:</strong> December 30, 2024</li>
                    </ul>
                  </div>

                  <div className="card">
                    <h4 className="font-semibold mb-3">Even Semester (January – June)</h4>
                    <ul className="space-y-2 text-sm text-[var(--text-soft)]">
                      <li><strong className="text-[var(--text)]">Mid-term Exams:</strong> March 15-25, 2026</li>
                      <li><strong className="text-[var(--text)]">Internal Assessment:</strong> April 15-30, 2026</li>
                      <li><strong className="text-[var(--text)]">End Semester Exams:</strong> May 15-30, 2026</li>
                      <li><strong className="text-[var(--text)]">Result Declaration:</strong> June 15, 2026</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-5">Important Deadlines</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[var(--border-light)]">
                        <th className="text-left p-3">Activity</th>
                        <th className="text-left p-3">Deadline</th>
                        <th className="text-left p-3">Semester</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Examination Form Submission', '15 days before exam', 'Both'],
                        ['Hall Ticket Download', '7 days before exam', 'Both'],
                        ['Re-evaluation Application', '15 days after result', 'Both'],
                        ['Supplementary Exam Registration', '30 days after result', 'Both'],
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-[var(--border-light)]">
                          {row.map((cell, j) => (
                            <td key={j} className="p-3">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Special Examinations</h3>
                <ul className="list-disc list-inside space-y-2 text-[var(--text-soft)]">
                  <li><strong className="text-[var(--text)]">Supplementary Examinations:</strong> Conducted for failed subjects</li>
                  <li><strong className="text-[var(--text)]">Improvement Examinations:</strong> For students seeking grade enhancement</li>
                  <li><strong className="text-[var(--text)]">Backlog Examinations:</strong> For incomplete coursework</li>
                  <li><strong className="text-[var(--text)]">Special Examinations:</strong> For medical and other genuine cases</li>
                </ul>
              </div>

              <div className="panel">
                <h3 className="text-xl font-semibold mb-3">Holiday Schedule</h3>
                <p className="text-[var(--text-soft)] leading-relaxed">
                  Examinations will not be conducted on national holidays, regional festivals,
                  and declared holidays by the institution. Alternative dates will be announced
                  for any postponed examinations due to unforeseen circumstances.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
