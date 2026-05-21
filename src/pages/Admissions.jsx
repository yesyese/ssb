import React from 'react';
import Timeline from '../components/ui/Timeline.jsx';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Button from '../components/ui/Button.jsx';

export default function Admissions() {
  return (
    <div className="container py-12">
      <div className="mb-12">
        <div className="aspect-[16/6] rounded-2xl overflow-hidden glass mb-8">
          <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600" alt="Students studying together" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
      
      <SectionHeader eyebrow="Admissions" title="How to apply" />
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card">
          <Timeline
            items={[
              { title: 'Step 1: Online Form', time: 'Week 1', desc: 'Fill the application with documents.' },
              { title: 'Step 2: Aptitude + Interview', time: 'Week 2', desc: 'Appear for selection process.' },
              { title: 'Step 3: Offer', time: 'Week 3', desc: 'Receive provisional admission offer.' },
            ]}
          />
        </div>
        <div className="card">
          <div className="mb-4">
            <img src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=400" alt="Application process" className="w-full h-32 object-cover rounded-xl" loading="lazy" />
          </div>
          <h3 className="text-white font-medium">Ready?</h3>
          <p className="text-text-soft mt-2">Takes ~10 minutes to complete.</p>
          <Button as="a" href="/inquiry?type=admission" className="mt-4">Apply Now</Button>
        </div>
      </div>
    </div>
  );
}