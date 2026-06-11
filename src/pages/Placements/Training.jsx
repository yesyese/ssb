import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default function TrainingPrograms() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Training Programs"
            subtitle="Skill development and career preparation"
            description="Comprehensive training to make you industry-ready"
          />
          
          <div className="space-y-section">
            <div className="panel">
              <h2>Training Overview</h2>
              <p>
                Our comprehensive training programs are designed to bridge the gap 
                between academic knowledge and industry requirements. We focus on 
                developing both technical competencies and soft skills essential 
                for professional success in today's competitive job market.
              </p>
            </div>

            <div className="panel">
              <h2>Core Training Modules</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">🎯 Personality Development</h4>
                  <p className="text-sm mb-3">Building confidence and professional presence</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Self-awareness and confidence building</li>
                    <li>Professional etiquette and grooming</li>
                    <li>Body language and non-verbal communication</li>
                    <li>Time management and goal setting</li>
                    <li>Stress management techniques</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">💬 Communication Skills</h4>
                  <p className="text-sm mb-3">Effective verbal and written communication</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Business English proficiency</li>
                    <li>Public speaking and presentation skills</li>
                    <li>Email etiquette and business writing</li>
                    <li>Cross-cultural communication</li>
                    <li>Active listening techniques</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">🎤 Interview Preparation</h4>
                  <p className="text-sm mb-3">Mastering the art of interviews</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Interview techniques and strategies</li>
                    <li>Common interview questions and answers</li>
                    <li>Mock interviews and feedback sessions</li>
                    <li>Technical and behavioral interview prep</li>
                    <li>Video interview best practices</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">📝 Resume Building</h4>
                  <p className="text-sm mb-3">Creating impactful professional profiles</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Resume writing best practices</li>
                    <li>LinkedIn profile optimization</li>
                    <li>Cover letter composition</li>
                    <li>Portfolio development</li>
                    <li>Personal branding strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Technical Skills Training</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Digital Literacy</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Advanced MS Office Suite</li>
                    <li>Data analysis with Excel</li>
                    <li>Presentation design skills</li>
                    <li>Digital collaboration tools</li>
                    <li>Cloud computing basics</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Business Analytics</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Statistical analysis fundamentals</li>
                    <li>SPSS and R programming</li>
                    <li>Data visualization techniques</li>
                    <li>Business intelligence tools</li>
                    <li>Predictive analytics basics</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Industry-Specific Tools</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>CRM software training</li>
                    <li>ERP system navigation</li>
                    <li>Project management tools</li>
                    <li>Financial modeling software</li>
                    <li>Marketing automation platforms</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Specialized Training Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="card">
                  <h4 className="font-semibold mb-2">Leadership Development</h4>
                  <p className="text-sm mb-3">Building future business leaders</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Leadership styles and approaches</li>
                    <li>Team building and management</li>
                    <li>Decision-making frameworks</li>
                    <li>Conflict resolution skills</li>
                    <li>Change management strategies</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Entrepreneurship Skills</h4>
                  <p className="text-sm mb-3">Fostering innovation and business thinking</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Business idea generation</li>
                    <li>Market research techniques</li>
                    <li>Business plan development</li>
                    <li>Financial planning and budgeting</li>
                    <li>Startup ecosystem understanding</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Industry Immersion</h4>
                  <p className="text-sm mb-3">Real-world business exposure</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Live project collaboration</li>
                    <li>Industry case study analysis</li>
                    <li>Corporate mentorship programs</li>
                    <li>Business simulation exercises</li>
                    <li>Industry visit and exposure</li>
                  </ul>
                </div>
                
                <div className="card">
                  <h4 className="font-semibold mb-2">Global Readiness</h4>
                  <p className="text-sm mb-3">Preparing for international opportunities</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Cultural sensitivity training</li>
                    <li>International business etiquette</li>
                    <li>Global market understanding</li>
                    <li>Cross-border collaboration</li>
                    <li>Language enhancement programs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Training Schedule & Format</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Regular Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Weekly Sessions:</strong> Every Wednesday & Friday</li>
                    <li><strong>Duration:</strong> 2 hours per session</li>
                    <li><strong>Format:</strong> Interactive workshops</li>
                    <li><strong>Group Size:</strong> 25-30 students maximum</li>
                    <li><strong>Assessment:</strong> Continuous evaluation</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Intensive Programs</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Bootcamps:</strong> 3-5 day intensive sessions</li>
                    <li><strong>Pre-placement:</strong> Final year preparation</li>
                    <li><strong>Industry-specific:</strong> Sector-focused training</li>
                    <li><strong>One-on-one:</strong> Personalized coaching</li>
                    <li><strong>Online modules:</strong> Self-paced learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Training Outcomes</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">98%</div>
                  <p className="text-sm">Training Completion Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Interview Success Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">4.8/5</div>
                  <p className="text-sm">Student Satisfaction Score</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">85%</div>
                  <p className="text-sm">Skill Improvement Rate</p>
                </div>
              </div>
            </div>

            <div className="panel">
              <h2>Expert Trainers</h2>
              <p>
                Our training programs are conducted by experienced faculty members, 
                industry experts, and professional trainers who bring real-world 
                insights and practical knowledge to the learning process.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-4">
                <div className="text-center">
                  <div className="text-2xl mb-2">👨‍🏫</div>
                  <h4 className="font-semibold mb-2">Faculty Experts</h4>
                  <p className="text-sm">Academic excellence and pedagogical expertise</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">💼</div>
                  <h4 className="font-semibold mb-2">Industry Professionals</h4>
                  <p className="text-sm">Current market insights and practical experience</p>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl mb-2">🏆</div>
                  <h4 className="font-semibold mb-2">Certified Trainers</h4>
                  <p className="text-sm">Professional certification and training expertise</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}