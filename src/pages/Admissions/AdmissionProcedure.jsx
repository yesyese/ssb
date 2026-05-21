import React, { useState } from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

const JUMP_LINKS = [
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'exams', label: 'Entrance Exams' },
  { id: 'ranks', label: 'Rank Analysis' },
  { id: 'selection', label: 'Selection Process' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'seats', label: 'Seats & Reservation' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'contact', label: 'Contact' },
];

export default function AdmissionProcedure() {
  const [selectedExam, setSelectedExam] = useState('icet');

  const getRankBadgeLabel = (range) => {
    if (range.startsWith('Above')) {
      return 'Above 25K';
    }
    return range.split(' - ')[0].replace(/,/g, 'K').replace('000', '');
  };

  const entranceExams = {
    icet: {
      name: 'AP ICET (Andhra Pradesh Integrated Common Entrance Test)',
      description:
        'State-level entrance examination for MBA and PGDM admissions in Andhra Pradesh',
      eligibility: "Bachelor's degree in any discipline with minimum 50% marks",
      duration: '150 minutes',
      sections: [
        { name: 'Analytical Ability', questions: 75, marks: 75 },
        { name: 'Mathematical Ability', questions: 75, marks: 75 },
        { name: 'Communication Ability', questions: 50, marks: 50 },
      ],
      totalQuestions: 200,
      totalMarks: 200,
      qualifyingMarks: 50,
      icon: '📊',
    },
    national: {
      name: 'National Level Entrance Exams',
      description: 'Accepted national entrance exams for direct admission',
      eligibility: 'Valid scores from recognized national entrance tests',
      exams: [
        { name: 'CAT', fullForm: 'Common Admission Test', conductedBy: 'IIMs' },
        { name: 'XAT', fullForm: 'Xavier Aptitude Test', conductedBy: 'XLRI' },
        { name: 'GMAT', fullForm: 'Graduate Management Admission Test', conductedBy: 'GMAC' },
        { name: 'MAT', fullForm: 'Management Aptitude Test', conductedBy: 'AIMA' },
        { name: 'CMAT', fullForm: 'Common Management Admission Test', conductedBy: 'NTA' },
      ],
      icon: '🎯',
    },
  };

  const rankAnalysis = [
    {
      range: '1 - 1,000',
      category: 'Excellent',
      prospects: 'Top-tier private MBA colleges with full fee concession',
      colleges: 'Premium business schools, high placement guarantee',
      color: 'from-green-500 to-green-600',
    },
    {
      range: '1,001 - 3,000',
      category: 'Very Good',
      prospects: 'Good private MBA colleges with partial scholarships',
      colleges: 'Well-established institutions with good placement records',
      color: 'from-blue-500 to-blue-600',
    },
    {
      range: '3,001 - 10,000',
      category: 'Good',
      prospects: 'Decent private colleges, management quota options',
      colleges: 'Mid-tier institutions with average placement support',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      range: '10,001 - 25,000',
      category: 'Moderate',
      prospects: 'Limited options in private colleges, mainly self-finance',
      colleges: 'Basic institutions with limited placement assistance',
      color: 'from-orange-500 to-orange-600',
    },
    {
      range: 'Above 25,000',
      category: 'Challenging',
      prospects: 'Very limited options, mostly management quota',
      colleges: 'Few institutions with minimal placement support',
      color: 'from-red-500 to-red-600',
    },
  ];

  const scholarshipProgram = {
    name: 'Sai Prudent Scholarship Program',
    coverage: 'Up to 50%',
    type: 'Merit-based',
    icon: '🏆',
    eligibility: [
      'Entrance exam score above 90 percentile',
      'Minimum 75% in graduation',
      'No income bar',
    ],
    benefits: [
      'Tuition fee waiver up to 50%',
      'Priority in hostel allocation',
      'Mentorship opportunities',
    ],
    applicationProcess: 'Automatic consideration during admission',
    renewal: 'Maintained with 75% academic performance',
  };

  const scholarshipSteps = [
    { step: '1', title: 'Check Eligibility', description: 'Review scholarship criteria and ensure you meet the requirements' },
    { step: '2', title: 'Prepare Documents', description: 'Gather all required certificates and supporting documents' },
    { step: '3', title: 'Apply During Admission', description: 'Submit scholarship application along with admission form' },
    { step: '4', title: 'Assessment & Selection', description: 'Committee reviews applications and selects recipients' },
    { step: '5', title: 'Award Notification', description: 'Scholarship recipients are notified with admission offers' },
  ];

  const scholarshipDocuments = [
    'Completed admission application form',
    'Academic transcripts and certificates',
    'Entrance exam score card',
    'Passport size photographs',
    'Identity proof (Aadhaar/PAN/Passport)',
  ];

  const partnerBanks = [
    'State Bank of India (SBI)',
    'HDFC Bank',
    'ICICI Bank',
    'Canara Bank',
    'Union Bank of India',
  ];

  const loanFeatures = [
    'Up to ₹10 lakhs loan amount',
    'Competitive interest rates',
    'Flexible repayment options',
    'Processing assistance provided',
    'Moratorium during study period',
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Admission Procedure"
            subtitle="Your Path to Business Excellence"
            description="Eligibility, entrance exams, selection, timeline, seats and scholarships — all in one place."
          />

          {/* Jump Nav */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {JUMP_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text-soft)] hover:bg-[var(--surface-2)] hover:text-[var(--text)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-section">
            {/* Eligibility Criteria */}
            <section id="eligibility" className="scroll-mt-32">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  Eligibility Criteria
                </h2>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-[var(--accent)]">📚</span>
                      </div>
                      MBA Program
                    </h3>
                    <div className="space-y-6">
                      <div className="p-6 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-3">Academic Qualification</h4>
                        <p className="text-[var(--text-soft)] leading-relaxed">
                          Bachelor's degree or equivalent in any discipline with minimum 50% aggregate marks (45% for SC/ST/OBC candidates) from a recognized university.
                        </p>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Entrance Exam</h4>
                        <p className="text-[var(--text-soft)]">Valid scores in ICET (Integrated Common Entrance Test) or appear for institutional entrance test.</p>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Work Experience</h4>
                        <p className="text-[var(--text-soft)]">Fresh graduates welcome. Work experience is preferred but not mandatory.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[var(--text)] mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-[var(--accent)]">🎓</span>
                      </div>
                      PGDM Program
                    </h3>
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Academic Qualification</h4>
                        <p className="text-[var(--text-soft)]">Graduation in any discipline with minimum 50% marks. Final year students can also apply.</p>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Entrance Exam</h4>
                        <p className="text-[var(--text-soft)]">Valid scores in CAT/XAT/GMAT/MAT/CMAT or appear for institutional entrance test.</p>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Age Limit</h4>
                        <p className="text-[var(--text-soft)]">No upper age limit. Candidates from all age groups are welcome.</p>
                      </div>

                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2">Specializations</h4>
                        <p className="text-[var(--text-soft)]">Available in Marketing, Finance, HR, Operations, International Business, and Business Analytics.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Entrance Exams */}
            <section id="exams" className="scroll-mt-32">
              <Card>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center justify-center gap-3">
                    <span className="text-3xl">📝</span>
                    Entrance Exams
                  </h2>
                  <p className="text-[var(--text-soft)] mb-6">Select an entrance category to view details</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                    <button
                      onClick={() => setSelectedExam('icet')}
                      className={`w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all ${
                        selectedExam === 'icet'
                          ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                          : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                      }`}
                    >
                      AP ICET
                    </button>
                    <button
                      onClick={() => setSelectedExam('national')}
                      className={`w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all ${
                        selectedExam === 'national'
                          ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                          : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                      }`}
                    >
                      National Exams
                    </button>
                  </div>
                </div>

                <div className="border-t border-[var(--border-light)] pt-8">
                  <h3 className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 text-xl sm:text-2xl font-bold text-[var(--text)] mb-6">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center shrink-0">
                      <span className="text-2xl">{entranceExams[selectedExam].icon}</span>
                    </div>
                    <span className="leading-tight">{entranceExams[selectedExam].name}</span>
                  </h3>

                  <div className="mb-8">
                    <p className="text-[var(--text-soft)] text-base sm:text-lg leading-relaxed mb-6">
                      {entranceExams[selectedExam].description}
                    </p>
                    <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <h4 className="font-semibold text-[var(--text)] mb-2">Eligibility</h4>
                      <p className="text-[var(--text-soft)]">{entranceExams[selectedExam].eligibility}</p>
                    </div>
                  </div>

                  {selectedExam === 'icet' && (
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--text)] mb-4">Exam Pattern</h4>
                        <div className="space-y-4">
                          <div className="rank-stat-row flex justify-between items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                            <span className="text-[var(--text)]">Total Questions</span>
                            <span className="font-semibold text-[var(--text)]">{entranceExams.icet.totalQuestions}</span>
                          </div>
                          <div className="rank-stat-row flex justify-between items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                            <span className="text-[var(--text)]">Total Marks</span>
                            <span className="font-semibold text-[var(--text)]">{entranceExams.icet.totalMarks}</span>
                          </div>
                          <div className="rank-stat-row flex justify-between items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                            <span className="text-[var(--text)]">Duration</span>
                            <span className="font-semibold text-[var(--text)]">{entranceExams.icet.duration}</span>
                          </div>
                          <div className="rank-stat-row flex justify-between items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                            <span className="text-[var(--text)]">Qualifying Marks</span>
                            <span className="font-semibold text-[var(--text)]">{entranceExams.icet.qualifyingMarks}/200</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-[var(--text)] mb-4">Section-wise Distribution</h4>
                        <div className="space-y-3">
                          {entranceExams.icet.sections.map((section, i) => (
                            <div key={i} className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                              <h5 className="font-semibold text-[var(--text)] mb-2">{section.name}</h5>
                              <div className="rank-stat-row flex justify-between gap-3">
                                <span className="text-[var(--text-soft)]">Questions: {section.questions}</span>
                                <span className="text-[var(--text-soft)]">Marks: {section.marks}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedExam === 'national' && (
                    <div className="grid md:grid-cols-2 gap-6">
                      {entranceExams.national.exams.map((exam, i) => (
                        <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                          <h4 className="text-lg font-semibold text-[var(--text)] mb-2">{exam.name}</h4>
                          <p className="text-[var(--text-soft)] mb-2">{exam.fullForm}</p>
                          <p className="text-sm text-[var(--text-muted)]">Conducted by: {exam.conductedBy}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </section>

            {/* Rank Analysis (ICET only) */}
            {selectedExam === 'icet' && (
              <section id="ranks" className="scroll-mt-32">
                <Card>
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-2xl">📈</span>
                    </div>
                    AP ICET Rank-wise Analysis & Prospects
                  </h2>

                  <div className="space-y-6">
                    {rankAnalysis.map((rank, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                          <div
                            className={`rank-badge w-20 h-20 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r ${rank.color} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0 text-xs sm:text-base`}
                          >
                            <span className="rank-badge-label">{getRankBadgeLabel(rank.range)}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text)] break-words">
                                Rank {rank.range}
                              </h3>
                              <span className={`inline-flex px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${rank.color} text-white`}>
                                {rank.category}
                              </span>
                            </div>
                            <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                              <div>
                                <h4 className="font-semibold text-[var(--text)] mb-1 sm:mb-2 text-sm sm:text-base">
                                  Admission Prospects
                                </h4>
                                <p className="text-[var(--text-soft)] text-xs sm:text-sm leading-relaxed">
                                  {rank.prospects}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-semibold text-[var(--text)] mb-1 sm:mb-2 text-sm sm:text-base">
                                  College Options
                                </h4>
                                <p className="text-[var(--text-soft)] text-xs sm:text-sm leading-relaxed">
                                  {rank.colleges}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </section>
            )}

            {/* Selection Process */}
            <section id="selection" className="scroll-mt-32">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  Selection Process
                </h2>

                <div className="grid gap-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        step: 'Phase 1',
                        title: 'Application Screening',
                        desc: 'Review of academic records, entrance exam scores, and application completeness',
                        weight: '40%',
                      },
                      {
                        step: 'Phase 2',
                        title: 'Written Test/Group Discussion',
                        desc: 'Aptitude test and group discussion to assess analytical and communication skills',
                        weight: '30%',
                      },
                      {
                        step: 'Phase 3',
                        title: 'Personal Interview',
                        desc: 'One-on-one interview with faculty panel to evaluate motivation and fit',
                        weight: '30%',
                      },
                    ].map((phase, i) => (
                      <div key={i} className="text-center p-8 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                        <div className="w-16 h-16 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] rounded-full flex items-center justify-center text-white font-bold mx-auto mb-6 shadow-lg">
                          {i + 1}
                        </div>
                        <h4 className="font-semibold text-[var(--text)] mb-3">{phase.step}</h4>
                        <h5 className="font-medium text-[var(--text)] mb-4">{phase.title}</h5>
                        <p className="text-[var(--text-soft)] text-sm mb-4 leading-relaxed">{phase.desc}</p>
                        <span className="inline-block px-4 py-2 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                          Weightage: {phase.weight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </section>

            {/* Admission Timeline */}
            <section id="timeline" className="scroll-mt-32">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">🗓️</span>
                  </div>
                  Admission Timeline 2026
                </h2>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand)] to-[var(--brand-light)]"></div>

                  <div className="space-y-8">
                    {[
                      {
                        month: 'Dec 2025',
                        title: 'Applications Open',
                        desc: 'Online application portal goes live; scholarship applications also accepted',
                        status: 'current',
                      },
                      {
                        month: 'Mar 2026',
                        title: 'AP ICET Registration',
                        desc: 'Register for AP ICET and finalise national entrance exam choices',
                        status: 'upcoming',
                      },
                      {
                        month: 'May 2026',
                        title: 'Entrance Exams',
                        desc: 'AP ICET conducted; national exam scores submitted',
                        status: 'upcoming',
                      },
                      {
                        month: 'Jun 2026',
                        title: 'Results & Ranks',
                        desc: 'AP ICET results declared; application review and rank allocation',
                        status: 'upcoming',
                      },
                      {
                        month: 'Jul 2026',
                        title: 'Selection & Counselling',
                        desc: 'Written tests, group discussions, personal interviews and online counselling',
                        status: 'upcoming',
                      },
                      {
                        month: 'Aug 2026',
                        title: 'Admission & Scholarship Awards',
                        desc: 'Seat allotment, admission confirmation and Sai Prudent scholarship results',
                        status: 'upcoming',
                      },
                      {
                        month: 'Sep 2026',
                        title: 'Classes Begin',
                        desc: 'Orientation programme and commencement of academic year',
                        status: 'upcoming',
                      },
                    ].map((item, i) => (
                      <div key={i} className="relative flex items-start gap-6">
                        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm z-10 ${
                          item.status === 'current' ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)]' : 'bg-[var(--surface-2)] border-2 border-[var(--border-medium)]'
                        }`}>
                          {item.status === 'current' ? '📍' : i + 1}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h4 className="font-semibold text-[var(--text)] text-lg">{item.title}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              item.status === 'current' ? 'bg-[var(--accent)]/20 text-[var(--accent)]' : 'bg-[var(--surface-2)] text-[var(--text-soft)]'
                            }`}>
                              {item.month}
                            </span>
                          </div>
                          <p className="text-[var(--text-soft)]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </section>

            {/* Seat Matrix */}
            <section id="seats" className="scroll-mt-32">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                  <span className="text-3xl">📊</span>
                  Seat Matrix & Reservation
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Available Seats</h3>
                    <div className="space-y-4">
                      {[
                        { program: 'BBA / BBA Honours', seats: '120', intake: '3 Years Full-time' },
                        { program: 'MBA Program', seats: '180', intake: '2 Years Full-time' },
                        { program: 'PGDM Program', seats: '60', intake: '2 Years Full-time' },
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-[var(--text)]">{item.program}</h4>
                              <p className="text-[var(--text-soft)] text-sm">{item.intake}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-2xl font-bold text-[var(--text)]">{item.seats}</span>
                              <p className="text-[var(--text-soft)] text-sm">seats</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Reservation Policy</h3>
                    <div className="space-y-3">
                      {[
                        { category: 'General', percentage: '50%' },
                        { category: 'OBC', percentage: '27%' },
                        { category: 'SC', percentage: '15%' },
                        { category: 'ST', percentage: '7.5%' },
                        { category: 'PWD', percentage: '3%' },
                        { category: 'Management Quota', percentage: '15%' },
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-[var(--surface-1)]">
                          <span className="text-[var(--text)]">{item.category}</span>
                          <span className="font-semibold text-[var(--text)]">{item.percentage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Scholarships */}
            <section id="scholarships" className="scroll-mt-32 space-y-section">
              <Card>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-3xl shrink-0">
                    {scholarshipProgram.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <h2 className="text-2xl font-bold text-[var(--text)]">{scholarshipProgram.name}</h2>
                      <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-bold">
                        {scholarshipProgram.coverage}
                      </span>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[var(--surface-2)] text-[var(--text-soft)] rounded-full text-xs">
                      {scholarshipProgram.type}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                      <span className="text-[var(--accent)]">✓</span>
                      Eligibility Criteria
                    </h4>
                    <ul className="text-[var(--text-soft)] text-sm space-y-1">
                      {scholarshipProgram.eligibility.map((criteria, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1">•</span>
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                      <span className="text-[var(--accent)]">🎁</span>
                      Benefits
                    </h4>
                    <ul className="text-[var(--text-soft)] text-sm space-y-1">
                      {scholarshipProgram.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-light)] grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[var(--text-soft)] mb-1">Application</p>
                    <p className="text-[var(--text)] font-medium">{scholarshipProgram.applicationProcess}</p>
                  </div>
                  <div>
                    <p className="text-[var(--text-soft)] mb-1">Renewal</p>
                    <p className="text-[var(--text)] font-medium">{scholarshipProgram.renewal}</p>
                  </div>
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                  <span className="text-2xl">📋</span>
                  Scholarship Application Process
                </h3>
                <div className="grid gap-4">
                  {scholarshipSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] flex items-center justify-center text-white font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--text)] mb-1">{step.title}</h4>
                        <p className="text-[var(--text-soft)]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    Required Documents
                  </h3>
                  <p className="text-[var(--text-soft)] mb-3 text-sm">For Sai Prudent Scholarship consideration during admission:</p>
                  <ul className="space-y-2">
                    {scholarshipDocuments.map((doc, i) => (
                      <li key={i} className="flex items-start gap-3 text-[var(--text-soft)]">
                        <span className="text-[var(--brand)] mt-1">•</span>
                        {doc}
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-3">
                    <span className="text-2xl">🏦</span>
                    Education Loan Assistance
                  </h3>
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-[var(--text)] mb-2">Partner Banks</h4>
                    <div className="flex flex-wrap gap-2">
                      {partnerBanks.map((bank, i) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-[var(--surface-1)] border border-[var(--border-light)] text-[var(--text)]">
                          {bank}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text)] mb-2">Loan Features</h4>
                    <ul className="space-y-1.5">
                      {loanFeatures.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-[var(--accent)] mt-0.5">✓</span>
                          <span className="text-[var(--text-soft)]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </section>

            {/* Contact & Support */}
            <section id="contact" className="scroll-mt-32">
              <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
                <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Need Guidance?</h2>
                <p className="text-[var(--text-soft)] mb-6">Our admission and financial aid counsellors are here to help you through every step.</p>

                <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8 text-left items-stretch">
                  <div className="p-5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] h-full flex flex-col">
                    <p className="text-[var(--text-soft)] text-sm mb-2">Admissions Office</p>
                    <a href="mailto:admissions.director@sanskrithibschool.com" className="block text-[var(--text)] font-semibold break-all hover:text-[var(--accent)] transition-colors text-[15px]">
                      admissions.director@sanskrithibschool.com
                    </a>
                    <a href="tel:+919100974544" className="block text-[var(--text)] font-semibold hover:text-[var(--accent)] transition-colors mt-1">
                      +91 9100 974 544
                    </a>
                  </div>
                  <div className="p-5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] h-full flex flex-col">
                    <p className="text-[var(--text-soft)] text-sm mb-2">Scholarships Office</p>
                    <a href="mailto:scholarships@sanskrithibschool.com" className="block text-[var(--text)] font-semibold break-all hover:text-[var(--accent)] transition-colors text-[15px]">
                      scholarships@sanskrithibschool.com
                    </a>
                    <a href="tel:+919100974544" className="block text-[var(--text)] font-semibold hover:text-[var(--accent)] transition-colors mt-1">
                      +91 9100 974 544
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="/inquiry?type=admission"
                    className="px-6 py-3 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg w-full sm:w-auto text-center"
                  >
                    Apply Now
                  </a>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
      <style>{`
        .rank-badge {
          min-width: 5rem;
          min-height: 5rem;
          padding: 0.5rem;
        }
        .rank-badge-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          line-height: 1.05;
          white-space: normal;
          overflow-wrap: anywhere;
        }
        @media (max-width: 640px) {
          .rank-stat-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .rank-badge {
            width: 5.25rem;
            height: 5.25rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}
