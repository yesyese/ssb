import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function FinanceCommittee() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Finance Committee"
            subtitle="Financial planning and oversight"
            description="Responsible for budget governance and financial transparency"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>Committee Composition</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">S. No.</th>
                      <th className="text-left p-3">Name and Affiliation</th>
                      <th className="text-left p-3">Designation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">1</td>
                      <td className="p-3">Dr. Bala Koteswari, Principal</td>
                      <td className="p-3">Chairman</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">2</td>
                      <td className="p-3">Mr. Ashok Reddy, Director</td>
                      <td className="p-3">Member</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">3</td>
                      <td className="p-3">Prof. Prashanthi, Senior Faculty Member</td>
                      <td className="p-3">Member</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">4</td>
                      <td className="p-3">Mr. Lakshmi Reddy, Finance Officer</td>
                      <td className="p-3">Member</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
