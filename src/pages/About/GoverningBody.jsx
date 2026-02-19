import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

// --- Complete Data Objects ---
const governingBody = [
  { name: "Mr. Vijay Bhaskar Reddy", affiliation: "Chairperson", designation: "Chairperson" },
  { name: "Mr. B. Parthasarathy Reddy", affiliation: "SSB", designation: "Member" },
  { name: "Mr. S. Pavan Reddy", affiliation: "SSB", designation: "Member" },
  { name: "Ms. S. Rajitha", affiliation: "SSB", designation: "Member" },
  { name: "Ms. S. Priya", affiliation: "SSB", designation: "Member" },
  { name: "Mr. Ashok Reddy", affiliation: "Director, SSB", designation: "Member" },
  { name: "Dr. Bala Koteswari", affiliation: "Principal, SSB", designation: "Member Secretary" },
  { name: "Prof. Vaishali G Ghorpade", affiliation: "Prof. of Civil Engineering & Director, R&D, JNTUA", designation: "Member" },
  { name: "Mr. Bala Thiagarajan", affiliation: "Vice President, Capgemini", designation: "Member" },
  { name: "Mr. Kishore Kumar Beedupalli", affiliation: "Consulting Solution Director, Oracle Financial Services", designation: "Member" },
  { name: "Prof. Satish Ailawadi", affiliation: "Senior Professor & Mentor, SSB", designation: "Member" },
  { name: "Dr. Bhabani Shankar Padhy", affiliation: "Vice-Principal, SSB", designation: "Member" },
  { name: "Prof. Prashanthi", affiliation: "COE, SSB", designation: "Member" },
];

const academicCouncil = [
  { name: "Dr. Bala Koteswari", affiliation: "Principal, SSB", designation: "Chairperson" },
  { name: "Prof. T. Narayana Reddy", affiliation: "Professor, SMS, JNTUA", designation: "Member" },
  { name: "Prof. M.L.S. Deva Kumar", affiliation: "Professor, Mechanical Engineering, JNTUA", designation: "Member" },
  { name: "Prof. V. Naga Prasad Naidu", affiliation: "Director of Evaluation, JNTUA", designation: "Member" },
  { name: "Dr. Reena Mehta", affiliation: "Professor, KJ Somaiya Institute of Management, Mumbai", designation: "Member" },
  { name: "Dr. Pritee Saxena", affiliation: "Professor, ICFAI B-School, Mumbai", designation: "Member" },
  { name: "Dr. Anshul Verma", affiliation: "Professor, SP Jain Institute of Management Research, Mumbai", designation: "Member" },
  { name: "Dr. Shailesh Rastogi", affiliation: "Director, Symbiosis Institute of Management, Nagpur", designation: "Member" },
  { name: "Prof. Satish Ailawadi", affiliation: "Senior Professor & Mentor, SSB", designation: "Member" },
  { name: "Dr. Bhabani Shankar Padhy", affiliation: "Vice-Principal, SSB", designation: "Member" },
  { name: "Prof. Prashanthi", affiliation: "COE, SSB", designation: "Member" },
  { name: "Prof. Aradhana", affiliation: "HOD, SSB", designation: "Member" },
];

const bos = [
  { name: "Prof. Aradhana", affiliation: "HOD, SSB", designation: "Chairperson" },
  { name: "Dr. Madhumita Chatterji", affiliation: "Director, ABBS School of Management, Bangalore", designation: "Member - HR" },
  { name: "Dr. M. Sivagnana Sundaram", affiliation: "Professor & Chairperson, JAGSOM, Bangalore", designation: "Member - Marketing" },
  { name: "Dr. Svetlana Tatuskar", affiliation: "Director, Kohinoor B-School, Mumbai", designation: "Member - Finance" },
  { name: "Dr. Rahul Vishwanath Dandage", affiliation: "Prog. Director, RamCharan School of Leadership, MIT-WPU", designation: "Member - Operations" },
  { name: "Dr. Preeti Sharma", affiliation: "Associate Professor, Symbiosis Institute, Nagpur", designation: "Member - Analytics" },
  { name: "Prof. Ranapratap", affiliation: "Professor, Finance & Accounting, IIT-Hyderabad", designation: "University Nominee" },
  { name: "Ms. Ritu Sharma", affiliation: "Head of Operations & Univ. Relations, Brillio", designation: "Member - Industry" },
  { name: "Sohan Dutta", affiliation: "Corporate Strategist, HCLTech", designation: "Member - Industry" },
  { name: "Ashwini", affiliation: "Senior Software Engineer, Accenture", designation: "Member - Alumni" },
  { name: "Prof. Satish Ailawadi", affiliation: "Senior Professor & Mentor, SSB", designation: "Member" },
  { name: "Dr. Bhabani Shankar Padhy", affiliation: "Vice-Principal, SSB", designation: "Member" },
  { name: "Prof. Prashanthi", affiliation: "COE, SSB", designation: "Member" },
  { name: "Prof. Girish", affiliation: "Faculty, SSB", designation: "Member" },
  { name: "Prof. Vedavyas", affiliation: "Faculty, SSB", designation: "Member" },
  { name: "Mr. Shaheer", affiliation: "Faculty, SSB", designation: "Member" },
  { name: "Ms. Swapna", affiliation: "Faculty, SSB", designation: "Member" },
];

const examCommittee = [
  { name: "Dr. Bala Koteswari", affiliation: "Principal, SSB", designation: "Chairperson" },
  { name: "Dr. Bhabani Shankar Padhy", affiliation: "Vice-Principal, SSB", designation: "Member" },
  { name: "Prof. Prashanthi", affiliation: "COE, SSB", designation: "Member" },
  { name: "Mr. Obulapati", affiliation: "Staff, SSB", designation: "Member" },
  { name: "Mr. Sreenu", affiliation: "Faculty Member, SSB", designation: "Member" },
];

// --- Sub-Components ---
const MemberCard = ({ member }) => (
  <div className="p-3 sm:p-4 md:p-5" style={{
    background: 'var(--glass-bg, rgba(255, 255, 255, 0.7))',
    backdropFilter: 'var(--glass-backdrop, blur(10px))',
    border: '1px solid var(--border-light, rgba(255, 255, 255, 0.3))',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxShadow: 'var(--shadow-small, 0 4px 6px rgba(0, 0, 0, 0.05))'
  }}>
    <span style={{ 
      fontSize: '0.7rem', 
      fontWeight: 'bold', 
      color: 'var(--brand, #007bff)', 
      textTransform: 'uppercase',
      marginBottom: '0.5rem'
    }}>
      {member.designation}
    </span>
    <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: 'var(--text, #111)' }}>{member.name}</h4>
    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-soft, #444)', lineHeight: '1.4' }}>{member.affiliation}</p>
  </div>
);

const CommitteeSection = ({ title, data }) => (
  <div className="mb-12 sm:mb-16">
    <h2 style={{ 
      marginBottom: '2rem', 
      paddingLeft: '1rem', 
      borderLeft: '4px solid var(--brand, #007bff)',
      color: 'var(--text, #111)'
    }} className="text-lg sm:text-xl md:text-2xl">
      {title}
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {data.map((m, idx) => <MemberCard key={idx} member={m} />)}
    </div>
  </div>
);

export default function GoverningBody() {
  const transparentPanelStyle = {
    background: 'var(--glass-bg, rgba(255, 255, 255, 0.6))',
    backdropFilter: 'var(--glass-backdrop, blur(12px))',
    border: '1px solid var(--border-light, rgba(255, 255, 255, 0.3))',
    borderRadius: '20px',
    boxShadow: 'var(--shadow-medium, 0 10px 15px rgba(0, 0, 0, 0.05))'
  };

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Institutional Governance"
            subtitle="Leadership & Academic Committees"
            description="SSB is governed by eminent academicians and industry leaders."
          />

          {/* Dean's Message (Transparent/Glass) */}
          <div className="panel p-4 sm:p-6 md:p-8 mb-12 sm:mb-20" style={transparentPanelStyle}>
  <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-12 items-center">
    {/* Left Column: Photo & Credentials */}
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      textAlign: 'center' 
    }}>
      <div style={{
        padding: '8px',
        background: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '12px',
        lineHeight: 0 // Prevents extra ghost space at bottom of image
      }}>
        <img
          src="../src/assets/dean.jpeg"
          alt="Dr. M. Balakoteswari"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-lg object-cover block"
        />
      </div>
      
      {/* Grouped text for better vertical spacing control */}
      <div style={{ marginTop: '1.5rem' }}>
        <h3 style={{ 
          color: 'var(--brand, #007bff)', 
          margin: '0 0 0.4rem 0', 
          fontSize: '1.4rem',
          fontWeight: '700'
        }}>
          Dr. M. Balakoteswari
        </h3>
        <p style={{ 
          fontWeight: '600', 
          color: 'var(--text-soft, #444)',
          margin: 0,
          fontSize: '1rem',
          letterSpacing: '0.5px'
        }}>
          Principal & Dean - Academic Affairs
        </p>
      </div>
    </div>

    {/* Right Column: Message */}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-4 md:mb-6" style={{ color: 'var(--text, #111)' }}>
        Dean's Message
      </h2>
      <blockquote className="text-base sm:text-lg pl-3 sm:pl-6" style={{
        lineHeight: '1.8',
        fontStyle: 'italic',
        color: 'var(--text, #333)',
        margin: '0 0 1.5rem 0',
        borderLeft: '4px solid var(--brand, #007bff)'
      }}>
        "At SSB Puttaparthi, we believe that academic excellence is achieved through a perfect blend of rigorous curriculum, experienced faculty, and practical learning experiences. Our commitment is to nurture students who are not only academically sound but also industry-ready."
      </blockquote>
      <p style={{ color: 'var(--text-soft, #555)', lineHeight: '1.6', margin: 0 }}>
        Together with our dedicated faculty and supportive governing body, we continue to strive for excellence in management education.
      </p>
    </div>
  </div>
</div>
          {/* Committee Sections */}
          <CommitteeSection title="Governing Body Members" data={governingBody} />
          <CommitteeSection title="Academic Council" data={academicCouncil} />
          <CommitteeSection title="Board of Studies (BOS)" data={bos} />
          <CommitteeSection title="Examination Committee" data={examCommittee} />

          {/* Governance Structure (Transparent/Glass) */}
          <div className="panel p-4 sm:p-6 md:p-8 mt-8 sm:mt-12 md:mt-16" style={transparentPanelStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text, #111)' }}>Governance Structure</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: "🏛️", title: "Strategic Oversight" },
                { icon: "📚", title: "Academic Excellence" },
                { icon: "💼", title: "Financial Stewardship" },
                { icon: "🎯", title: "Policy & Compliance" }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4 sm:p-6 rounded-2xl" style={{ 
                  background: 'rgba(255, 255, 255, 0.3)', 
                  border: '1px solid rgba(255, 255, 255, 0.2)' 
                }}>
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-4">{item.icon}</div>
                  <h4 style={{ margin: 0, color: 'var(--text, #111)' }}>{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}