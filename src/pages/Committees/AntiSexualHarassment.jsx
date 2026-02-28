import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AntiSexualHarassment() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Anti Sexual Harassment Committee"
            subtitle="Ensuring a safe, respectful, and inclusive campus"
            description="The committee addresses complaints with confidentiality and fairness"
          />

          <div className="space-y-section">
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
                      <td className="p-3 font-semibold">Presiding Officer</td>
                      <td className="p-3">Prof. Prashanthi</td>
                      <td className="p-3">Senior Faculty (Woman)</td>
                      <td className="p-3">+91-9100974544</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Internal Member</td>
                      <td className="p-3">Prof. Prakash Sharma</td>
                      <td className="p-3">Faculty Representative</td>
                      <td className="p-3">+91-70937 47145</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">External Member</td>
                      <td className="p-3">SHO</td>
                      <td className="p-3">NGO Representative</td>
                      <td className="p-3">+91-XXXX-XXXXXX</td>
                    </tr>
                    <tr className="border-b border-[var(--border-light)]">
                      <td className="p-3 font-semibold">Student Representative</td>
                      <td className="p-3">Malavika</td>
                      <td className="p-3">Student Council Member</td>
                      <td className="p-3">+91-9398422270</td>
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
