import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import logoTCS from '../../assets/companylogos/Tata_Consultancy_Services_Logo.svg.png';
import logoDeloitte from '../../assets/companylogos/Deloitte_Logo.png';
import logoAccenture from '../../assets/companylogos/Accenture.svg.png';
import logoHDFC from '../../assets/companylogos/HDFC_Bank_Logo.svg.png';
import logoWipro from '../../assets/companylogos/Wipro-logo.png';
import logoIcici from '../../assets/companylogos/icici.png';
import logoAmazon from '../../assets/companylogos/amazon.png';
import logoGenpact from '../../assets/companylogos/800px-Genpact_logo.svg.png';

export default function Courses() {
  const [selectedProgram, setSelectedProgram] = useState('mba');

  const programs = {
    bba: {
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years Full-time",
      totalSeats: "120",
      description: "A comprehensive undergraduate management program building foundational business knowledge and preparing students for corporate careers or higher studies.",
      specializations: null,
      curriculum: null
    },
    mba: {
      title: "Master of Business Administration (MBA)",
      duration: "2 Years Full-time",
      totalSeats: "120",
      description: "A comprehensive management program designed to develop leadership skills and business acumen for modern corporate challenges.",
      specializations: [
        {
          name: "Marketing Management",
          description: "Digital marketing, brand management, consumer behavior, and market research.",
          careerOptions: ["Brand Manager", "Digital Marketing Manager", "Market Research Analyst", "Sales Manager"],
          icon: "📈"
        },
        {
          name: "Financial Management",
          description: "Corporate finance, investment banking, financial analysis, and risk management.",
          careerOptions: ["Financial Analyst", "Investment Banker", "Corporate Finance Manager", "Risk Analyst"],
          icon: "💰"
        },
        {
          name: "Human Resource Management",
          description: "Talent acquisition, organizational behavior, performance management, and labor relations.",
          careerOptions: ["HR Manager", "Talent Acquisition Specialist", "Training Manager", "Compensation Analyst"],
          icon: "👥"
        },
        {
          name: "Operations Management",
          description: "Supply chain management, quality control, project management, and process optimization.",
          careerOptions: ["Operations Manager", "Supply Chain Manager", "Process Improvement Specialist", "Quality Manager"],
          icon: "⚙️"
        },
        {
          name: "Business Analytics",
          description: "Data analysis, business intelligence, predictive modeling, and statistical analysis.",
          careerOptions: ["Business Analyst", "Data Scientist", "Analytics Consultant", "Business Intelligence Manager"],
          icon: "📊"
        },
        {
          name: "International Business",
          description: "Global trade, international finance, cross-cultural management, and export-import operations.",
          careerOptions: ["International Trade Manager", "Export Manager", "Global Business Consultant", "Foreign Trade Analyst"],
          icon: "🌍"
        }
      ],
      curriculum: {
        "Semester 1": [
          "Principles of Management",
          "Organizational Behavior",
          "Managerial Economics",
          "Financial Accounting",
          "Business Communication",
          "Quantitative Techniques"
        ],
        "Semester 2": [
          "Marketing Management",
          "Financial Management",
          "Human Resource Management",
          "Operations Management",
          "Business Law",
          "Research Methodology"
        ],
        "Semester 3": [
          "Specialization Core Subjects (4 papers)",
          "Strategic Management",
          "Entrepreneurship Development"
        ],
        "Semester 4": [
          "Specialization Electives (3 papers)",
          "Summer Internship Project",
          "Management Information Systems",
          "Business Ethics & Corporate Governance"
        ]
      }
    },
    pgdm: {
      title: "Post Graduate Diploma in Management (PGDM)",
      duration: "2 Years Full-time",
      totalSeats: "60",
      description: "Industry-oriented management program with emphasis on practical learning and corporate exposure.",
      specializations: [
        {
          name: "Digital Marketing",
          description: "SEO, social media marketing, content strategy, and e-commerce management.",
          careerOptions: ["Digital Marketing Executive", "Social Media Manager", "Content Strategist", "SEO Specialist"],
          icon: "💻"
        },
        {
          name: "Finance & Banking",
          description: "Banking operations, financial services, credit analysis, and investment management.",
          careerOptions: ["Bank Manager", "Credit Analyst", "Financial Advisor", "Investment Executive"],
          icon: "🏦"
        },
        {
          name: "Retail Management",
          description: "Retail operations, merchandising, customer experience, and store management.",
          careerOptions: ["Store Manager", "Retail Buyer", "Category Manager", "Customer Experience Manager"],
          icon: "🛍️"
        },
        {
          name: "Healthcare Management",
          description: "Hospital administration, healthcare operations, medical tourism, and health insurance.",
          careerOptions: ["Hospital Administrator", "Healthcare Consultant", "Medical Tourism Manager", "Health Insurance Executive"],
          icon: "🏥"
        }
      ],
      curriculum: {
        "Year 1": [
          "Foundation of Management",
          "Business Environment",
          "Marketing Fundamentals",
          "Financial Management",
          "Operations Management",
          "Human Resource Management",
          "Business Statistics",
          "Communication Skills"
        ],
        "Year 2": [
          "Specialization Core Subjects",
          "Strategic Management",
          "Business Analytics",
          "Project Management",
          "Industry Projects",
          "Internship Program",
          "Dissertation",
          "Seminar Presentations"
        ]
      }
    }
  };

  const admissionRequirements = {
    bba: [
      "10+2 or equivalent with minimum 50% marks",
      "Any stream (Science/Commerce/Arts)",
      "Age limit as per university norms",
      "Personal interview for selection"
    ],
    mba: [
      "Bachelor's degree in any discipline with minimum 50% marks",
      "Valid entrance exam scores (CAT/XAT/GMAT/MAT/CMAT)",
      "Work experience preferred but not mandatory",
      "Personal interview and group discussion"
    ],
    pgdm: [
      "Graduation in any discipline with minimum 50% marks",
      "Entrance test or valid national exam scores",
      "No age limit restrictions",
      "Industry exposure through internships"
    ]
  };

  const industryConnections = [
    { company: "TCS", type: "Placement Partner", logo: logoTCS },
    { company: "Genpact", type: "Training Partner", logo: logoGenpact },
    { company: "HDFC Bank", type: "Internship Partner", logo: logoHDFC },
    { company: "Wipro", type: "Project Partner", logo: logoWipro },
    { company: "ICICI Bank", type: "Recruitment Partner", logo: logoIcici },
    { company: "Amazon", type: "Training Partner", logo: logoAmazon },
    { company: "Deloitte", type: "Consulting Partner", logo: logoDeloitte },
    { company: "Accenture", type: "Project Partner", logo: logoAccenture }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Courses Offered"
            subtitle="Shape Your Business Future"
            description="Comprehensive management programs designed for tomorrow's business leaders"
          />
          
          <div className="space-y-section">
            {/* Program Selection */}
            <Card>
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--text)] mb-4 sm:mb-6">Choose Your Program</h2>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <button
                    onClick={() => setSelectedProgram('bba')}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                      selectedProgram === 'bba'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    BBA (120 Seats)
                  </button>
                  <button
                    onClick={() => setSelectedProgram('mba')}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                      selectedProgram === 'mba'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    MBA (180 Seats)
                  </button>
                  <button
                    onClick={() => setSelectedProgram('pgdm')}
                    className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all ${
                      selectedProgram === 'pgdm'
                        ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                        : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                    }`}
                  >
                    PGDM 
                  </button>
                </div>
              </div>
            </Card>

            {/* Program Overview */}
            <Card>
              <div className="mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text)] mb-4 flex flex-wrap items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  {programs[selectedProgram].title}
                </h2>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 ${programs[selectedProgram].specializations ? 'lg:grid-cols-3' : ''}`}>
                  <div className="text-center p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Duration</h4>
                    <p className="text-[var(--text-soft)]">{programs[selectedProgram].duration}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <h4 className="font-semibold text-[var(--text)] mb-2">Total Seats</h4>
                    <p className="text-[var(--text-soft)]">{programs[selectedProgram].totalSeats}</p>
                  </div>
                  {programs[selectedProgram].specializations && (
                    <div className="text-center p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Specializations</h4>
                      <p className="text-[var(--text-soft)]">{programs[selectedProgram].specializations.length} Options</p>
                    </div>
                  )}
                </div>
                <p className="text-[var(--text-soft)] text-base sm:text-lg leading-relaxed">{programs[selectedProgram].description}</p>
              </div>
            </Card>

            {/* Specializations - not shown for BBA */}
            {programs[selectedProgram].specializations && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                Specialization Areas
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {programs[selectedProgram].specializations.map((spec, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-2xl">{spec.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{spec.name}</h3>
                        <p className="text-[var(--text-soft)] mb-4 leading-relaxed">{spec.description}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--text)] mb-3">Career Opportunities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {spec.careerOptions.map((career, j) => (
                          <span key={j} className="text-sm px-3 py-1 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--text-soft)]">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            )}

            {/* Curriculum Structure - not shown for BBA */}
            {programs[selectedProgram].curriculum && (
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                Curriculum Structure
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {Object.entries(programs[selectedProgram].curriculum).map(([period, subjects]) => (
                  <div key={period} className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">{period}</h3>
                    <ul className="space-y-3">
                      {subjects.map((subject, i) => (
                        <li key={i} className="flex items-start gap-3 text-[var(--text-soft)]">
                          <div className="w-6 h-6 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-[var(--accent)] text-sm">•</span>
                          </div>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
            )}

            {/* Admission Requirements */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                Admission Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                <div className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Eligibility Criteria</h3>
                  <ul className="space-y-3">
                    {admissionRequirements[selectedProgram].map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-soft)]">
                        <div className="w-6 h-6 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-[var(--accent)] text-sm">✓</span>
                        </div>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                  <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Application Process</h3>
                  <div className="space-y-4">
                    {[
                      "Online Application Submission",
                      "Document Verification",
                      "Entrance Test/Score Submission",
                      "Personal Interview",
                      "Final Merit List",
                      "Admission Confirmation"
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-white font-bold text-sm">
                          {i + 1}
                        </div>
                        <span className="text-[var(--text-soft)]">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Industry Connections */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                Industry Partnerships
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {industryConnections.map((partner, i) => (
                  <div key={i} className="text-center p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 p-2 overflow-hidden">
                      <img src={partner.logo} alt={partner.company} className="w-full h-full object-contain" />
                    </div>
                    <h4 className="font-semibold text-[var(--text)] mb-2">{partner.company}</h4>
                    <p className="text-sm text-[var(--text-soft)]">{partner.type}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">Ready to Begin Your Journey?</h2>
              <p className="text-[var(--text-soft)] mb-8 text-lg">
                Join our comprehensive management programs and build the skills needed for tomorrow's business challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="/inquiry" 
                  className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Apply Now
                </a>
                <a 
                  href="/admissions/admission-procedure" 
                  className="px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  View Admission Process
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}