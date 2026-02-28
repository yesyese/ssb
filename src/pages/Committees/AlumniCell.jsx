import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function AlumniCell() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Alumni Cell"
            subtitle="Alumni relations and engagement"
            description="Building long-term alumni network and institutional collaboration"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>Alumni Cell Contact</h2>
              <div className="space-y-2 text-sm">
                <p><strong>Alumni Coordinator:</strong> Prof. Sandhya</p>
                <p><strong>Email:</strong> alumni@sanskrithibschool.com</p>
                <p><strong>Phone:</strong> +91-98855 70767</p>
                <p><strong>Office:</strong> Alumni Cell, Sanskrithi School of Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
