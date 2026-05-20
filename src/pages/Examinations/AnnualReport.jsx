import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AnnualExaminationReport() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Annual Examination Report"
            subtitle="Yearly examination statistics and analysis"
            description="Comprehensive overview of examination performance and trends"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Academic Year 2023-24 Report</h2>
              <p>
                The Annual Examination Report provides a comprehensive analysis of 
                examination statistics, student performance trends, and quality 
                indicators for the academic year. This report helps in identifying 
                areas of improvement and planning for future academic sessions.
              </p>
            </div>

            <div className="panel">
              <h2>Overall Performance Statistics</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95.8%</div>
                  <p className="text-sm">Overall Pass Percentage</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">78.4%</div>
                  <p className="text-sm">First Class Percentage</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">7.8</div>
                  <p className="text-sm">Average CGPA</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">98.2%</div>
                  <p className="text-sm">Examination Attendance</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Program-wise Performance</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Program</th>
                      <th className="text-left p-3">Students</th>
                      <th className="text-left p-3">Pass %</th>
                      <th className="text-left p-3">First Class %</th>
                      <th className="text-left p-3">Average CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">MBA</td>
                      <td className="p-3">120</td>
                      <td className="p-3">96.7%</td>
                      <td className="p-3">82.5%</td>
                      <td className="p-3">8.1</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">PGDM</td>
                      <td className="p-3">80</td>
                      <td className="p-3">95.0%</td>
                      <td className="p-3">75.0%</td>
                      <td className="p-3">7.6</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3">BBA / BBA Honours</td>
                      <td className="p-3">150</td>
                      <td className="p-3">94.7%</td>
                      <td className="p-3">76.7%</td>
                      <td className="p-3">7.4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="panel">
              <h2>Semester-wise Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Odd Semester Results</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Total Students Appeared: 350</li>
                    <li>Pass Percentage: 96.2%</li>
                    <li>First Class: 79.1%</li>
                    <li>Distinction: 28.3%</li>
                    <li>Average CGPA: 7.9</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Even Semester Results</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Total Students Appeared: 345</li>
                    <li>Pass Percentage: 95.4%</li>
                    <li>First Class: 77.7%</li>
                    <li>Distinction: 26.8%</li>
                    <li>Average CGPA: 7.7</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Subject-wise Performance Analysis</h2>
              <p>
                Analysis reveals strong performance in core management subjects 
                with areas for improvement identified in quantitative subjects. 
                Remedial measures have been recommended for subjects with pass 
                percentage below 90%.
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Top Performing Subjects:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Organizational Behavior: 98.5% pass rate</li>
                  <li>Marketing Management: 97.8% pass rate</li>
                  <li>Human Resource Management: 97.2% pass rate</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Areas for Improvement:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Business Statistics: 89.5% pass rate</li>
                  <li>Financial Management: 91.2% pass rate</li>
                  <li>Operations Research: 90.8% pass rate</li>
                </ul>
              </div>
            </div>

            <div className="panel">
              <h2>Quality Indicators</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Zero cases of examination malpractice reported</li>
                <li>98.9% accuracy in result processing</li>
                <li>Average result declaration time: 12 days</li>
                <li>Re-evaluation requests: 2.3% of total students</li>
                <li>Grade changes after re-evaluation: 18% of applications</li>
                <li>Student satisfaction with examination process: 94.2%</li>
              </ul>
            </div>

            <div className="panel">
              <h2>Recommendations for Improvement</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>Enhanced faculty training for quantitative subjects</li>
                <li>Introduction of additional tutorial sessions</li>
                <li>Revision of assessment methods for difficult subjects</li>
                <li>Implementation of continuous assessment model</li>
                <li>Student feedback integration in curriculum design</li>
                <li>Technology enhancement for faster result processing</li>
              </ol>
            </div>

            <div className="panel">
              <h2>Download Reports</h2>
              <p>Detailed reports available for download:</p>
              <div className="mt-4 space-y-2">
                <p>📄 <strong>Complete Annual Report 2023-24</strong> - [Download PDF]</p>
                <p>📊 <strong>Statistical Summary</strong> - [Download Excel]</p>
                <p>📈 <strong>Trend Analysis Report</strong> - [Download PDF]</p>
                <p>📋 <strong>Department-wise Performance</strong> - [Download PDF]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}