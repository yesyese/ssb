import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Building2, Shield, ArrowRight, CheckCircle2, Landmark } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import paymentQR from '../../assets/paymentqr.jpg';

const JUMP_LINKS = [
  { id: 'fees', label: 'Fee Components' },
  { id: 'scholarships', label: 'Scholarships' },
  { id: 'pay-online', label: 'Pay Online' },
  { id: 'bank', label: 'Bank Details' },
  { id: 'contact', label: 'Contact' },
];

const FEE_STRUCTURE = {
  bba: {
    title: 'BBA / BBA Honours — Bachelor of Business Administration',
    duration: '3 Years',
    components: [
      { component: 'College Fee (Tuition Fee)', status: 'Mandatory', frequency: 'Annual' },
      { component: 'Hostel Fee', status: 'Optional', frequency: 'Annual', note: 'Charged only if hostel accommodation is availed' },
      { component: 'Transportation Fee', status: 'Optional', frequency: 'Annual', note: 'Route: Dharmavaram, Kadiri, Gorantla. Other routes on request.' },
    ],
  },
  mba: {
    title: 'MBA — Master of Business Administration',
    duration: '2 Years',
    components: [
      { component: 'College Fee (Counselling Fee)', status: 'Mandatory', frequency: 'Annual' },
      { component: 'College Fee (Management Fee)', status: 'Mandatory', frequency: 'Annual' },
      { component: 'Hostel Fee', status: 'Optional', frequency: 'Annual', note: 'Charged only if hostel accommodation is availed' },
      { component: 'Transportation Fee', status: 'Optional', frequency: 'Annual', note: 'Route: Dharmavaram, Kadiri, Gorantla. Other routes on request.' },
    ],
  },
  pgdm: {
    title: 'PGDM — Post Graduate Diploma in Management',
    duration: '2 Years',
    components: [
      { component: 'College Fee (Tuition Fee)', status: 'Mandatory', frequency: 'Per Semester', note: 'Charged across 4 semesters' },
      { component: 'Hostel Fee', status: 'Optional', frequency: 'Annual', note: 'Charged only if hostel accommodation is availed' },
      { component: 'Transportation Fee', status: 'Optional', frequency: 'Annual', note: 'Route: Dharmavaram, Kadiri, Gorantla. Other routes on request.' },
    ],
  },
};

const SCHOLARSHIPS = [
  { name: 'Sai Prudent Scholarship', coverage: 'Up to 50%', criteria: 'Merit-based, entrance exam score' },
  { name: 'Need-based Assistance', coverage: '25-30%', criteria: 'For students from low-income families' },
  { name: 'Sports Excellence', coverage: '20%', criteria: 'State/National level sports achievements' },
  { name: 'Academic Topper', coverage: '15%', criteria: 'Above 85% in graduation' },
];

const PAYMENT_METHODS = [
  { icon: CreditCard, label: 'Credit / Debit Cards', color: 'text-blue-500' },
  { icon: Smartphone, label: 'UPI (GPay, PhonePe, Paytm)', color: 'text-green-500' },
  { icon: Building2, label: 'Net Banking', color: 'text-indigo-500' },
  { icon: CheckCircle2, label: 'Wallet Payments', color: 'text-amber-500' },
];

export default function Fees() {
  const [selectedProgram, setSelectedProgram] = useState('bba');

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Fees & Payment"
            subtitle="Transparent Fees, Simple Payment"
            description="Fee components, scholarships, online payment and bank details — everything in one place."
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
            {/* Fee Components */}
            <section id="fees" className="scroll-mt-32 space-y-section">
              <Card>
                <div className="text-center mb-10">
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Select Program</h2>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {[
                      { id: 'bba', label: 'BBA / BBA Honours' },
                      { id: 'mba', label: 'MBA Program' },
                      { id: 'pgdm', label: 'PGDM Program' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setSelectedProgram(tab.id)}
                        className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                          selectedProgram === tab.id
                            ? 'bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white shadow-lg'
                            : 'bg-[var(--surface-2)] text-[var(--text)] border border-[var(--border-light)] hover:bg-[var(--surface-3)]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </Card>

              <Card>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-2xl">💰</span>
                    </div>
                    {FEE_STRUCTURE[selectedProgram].title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                    <span className="text-[var(--text-soft)]">
                      Duration: <span className="font-medium text-[var(--text)]">{FEE_STRUCTURE[selectedProgram].duration}</span>
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {FEE_STRUCTURE[selectedProgram].components.map((item, i) => {
                    const isOptional = item.status === 'Optional';
                    return (
                      <div key={i} className="p-5 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                        <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                          <h4 className="font-semibold text-[var(--text)] text-base">{item.component}</h4>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              isOptional
                                ? 'bg-[var(--accent)]/15 text-[var(--accent)]'
                                : 'bg-[var(--brand)]/15 text-[var(--brand)]'
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <p className="text-[var(--text-soft)] text-sm mb-1">
                          <span className="font-medium text-[var(--text)]">Frequency:</span> {item.frequency}
                        </p>
                        {item.note && (
                          <p className="text-[var(--text-soft)] text-sm italic">{item.note}</p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[var(--brand)]/10 to-[var(--brand-light)]/10 border border-[var(--brand)]/20">
                  <p className="text-[var(--text)] font-medium mb-1">📞 For current fee amounts</p>
                  <p className="text-[var(--text-soft)] text-sm">
                    Please contact the admissions office at{' '}
                    <a href="mailto:admissions.director@sanskrithibschool.com" className="text-[var(--accent)] hover:underline">
                      admissions.director@sanskrithibschool.com
                    </a>{' '}
                    or call <a href="tel:+919100974544" className="text-[var(--accent)] hover:underline">+91 9100 974 544</a> for the latest fee details applicable to your program.
                  </p>
                </div>
              </Card>

              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                  <span className="text-3xl">📅</span>
                  Payment Schedule
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Payment Options</h3>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                          <span className="text-[var(--accent)]">💳</span>
                          Annual Payment
                        </h4>
                        <p className="text-[var(--text-soft)]">Pay full year fee at once</p>
                      </div>
                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                          <span className="text-[var(--accent)]">📊</span>
                          Semester-wise Payment
                        </h4>
                        <p className="text-[var(--text-soft)]">Pay in installments across semesters</p>
                      </div>
                      <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h4 className="font-semibold text-[var(--text)] mb-2 flex items-center gap-2">
                          <span className="text-[var(--accent)]">🏦</span>
                          Education Loan Support
                        </h4>
                        <p className="text-[var(--text-soft)]">Assistance with education loan processing</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Accepted Methods</h3>
                    <div className="space-y-3">
                      {[
                        'Online Payment Gateway (Credit/Debit Cards)',
                        'Net Banking (All Major Banks)',
                        'UPI Payments (GPay, PhonePe, Paytm)',
                        'Demand Draft (In favor of Sanskrithi School of Business)',
                        'Bank Transfer (NEFT/RTGS)',
                      ].map((method, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--surface-1)]">
                          <span className="text-[var(--accent)]">✓</span>
                          <span className="text-[var(--text)]">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Scholarships */}
            <section id="scholarships" className="scroll-mt-32">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  Available Scholarships
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {SCHOLARSHIPS.map((scholarship, i) => (
                    <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-[var(--text)] text-lg">{scholarship.name}</h4>
                        <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm font-bold">
                          {scholarship.coverage}
                        </span>
                      </div>
                      <p className="text-[var(--text-soft)]">{scholarship.criteria}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-[var(--brand)]/10 to-[var(--brand-light)]/10 border border-[var(--brand)]/20">
                  <p className="text-[var(--text)] font-medium mb-2">💡 Scholarship Application Process</p>
                  <p className="text-[var(--text-soft)] text-sm">
                    Scholarship applications are processed along with regular admissions. Submit required documents during the application process.
                    Results are declared with admission offers. For full details, see the{' '}
                    <a href="/admissions/admission-procedure#scholarships" className="text-[var(--accent)] hover:underline">
                      Admission Procedure
                    </a>{' '}
                    page.
                  </p>
                </div>
              </Card>
            </section>

            {/* Pay Online */}
            <section id="pay-online" className="scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  style={{
                    background: 'linear-gradient(145deg, var(--surface-1) 0%, var(--surface-2) 100%)',
                    border: '1px solid var(--border-light)',
                    boxShadow: '0 25px 80px -20px rgba(0,0,0,0.4)',
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--brand)]/15 border border-[var(--brand)]/30 text-[var(--brand)] font-semibold text-sm mb-6">
                        <Smartphone className="w-4 h-4" />
                        Scan & Pay with UPI
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
                        Instant Fee Payment
                      </h2>
                      <p className="text-[var(--text-soft)] mb-6 max-w-sm">
                        Use GPay, PhonePe, Paytm or any UPI app to pay your fees instantly.
                      </p>
                      <div className="p-5 bg-white rounded-2xl border-2 border-[var(--border-light)] shadow-lg">
                        <img
                          src={paymentQR}
                          alt="Payment QR Code - Scan to pay fees"
                          className="w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-sm text-[var(--text-muted)] mt-4">
                        Scan with your camera or UPI app
                      </p>
                    </div>

                    <div className="p-8 md:p-10 lg:p-12 flex flex-col gap-6 bg-[var(--surface-1)] border-t md:border-t-0 md:border-l border-[var(--border-light)]">
                      <div>
                        <h3 className="font-bold text-xl text-[var(--text)] mb-5 flex items-center gap-2">
                          <CreditCard className="w-5 h-5 text-[var(--brand)]" />
                          Accepted Payment Methods
                        </h3>
                        <ul className="space-y-4">
                          {PAYMENT_METHODS.map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl bg-[var(--surface-2)] flex items-center justify-center ${item.color}`}>
                                <item.icon className="w-5 h-5" />
                              </div>
                              <span className="text-[var(--text)] font-medium">{item.label}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-600/10 border border-green-500/25">
                        <h3 className="font-bold text-[var(--text)] mb-2 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-green-500" />
                          Safe & Secure
                        </h3>
                        <p className="text-[var(--text-soft)] text-sm">
                          PCI-DSS compliant. Your transactions are protected with industry-standard security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Bank Details */}
            <section id="bank" className="scroll-mt-32">
              <Card>
                <h2 className="text-2xl font-bold text-[var(--text)] mb-6 flex items-center gap-3">
                  <Landmark className="w-7 h-7 text-[var(--brand)]" />
                  Bank Details (NEFT / RTGS)
                </h2>
                <p className="text-[var(--text-soft)] mb-6">
                  For NEFT, RTGS, IMPS or direct bank transfers, use the following account details.
                </p>
                <dl className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <dt className="text-[var(--text-soft)] text-sm mb-1">Account Name</dt>
                    <dd className="text-[var(--text)] font-medium">Sanskrithi School of Business</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <dt className="text-[var(--text-soft)] text-sm mb-1">Bank</dt>
                    <dd className="text-[var(--text)] font-medium">Canara Bank</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <dt className="text-[var(--text-soft)] text-sm mb-1">Branch</dt>
                    <dd className="text-[var(--text)] font-medium">Beedupalli Branch</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <dt className="text-[var(--text-soft)] text-sm mb-1">Account Number</dt>
                    <dd className="text-[var(--text)] font-medium font-mono tracking-wide">31633070000370</dd>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)] sm:col-span-2">
                    <dt className="text-[var(--text-soft)] text-sm mb-1">IFSC Code</dt>
                    <dd className="text-[var(--text)] font-medium font-mono tracking-wide">CNRB0013163</dd>
                  </div>
                </dl>
              </Card>
            </section>

            {/* Contact & Notes */}
            <section id="contact" className="scroll-mt-32 space-y-section">
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                <Card className="h-full flex flex-col">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                    <span className="text-2xl">📞</span>
                    Fee Enquiries
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[var(--text-soft)] text-sm mb-1">Admissions Office</p>
                      <a
                        href="mailto:admissions.director@sanskrithibschool.com"
                        className="text-[var(--text)] font-medium hover:text-[var(--accent)] transition-colors break-words"
                      >
                        admissions.director@sanskrithibschool.com
                      </a>
                    </div>
                    <div>
                      <p className="text-[var(--text-soft)] text-sm mb-1">Phone</p>
                      <a
                        href="tel:+919100974544"
                        className="text-[var(--text)] font-medium hover:text-[var(--accent)] transition-colors"
                      >
                        +91 9100 974 544
                      </a>
                    </div>
                    <div>
                      <p className="text-[var(--text-soft)] text-sm mb-1">Office Hours</p>
                      <p className="text-[var(--text)] font-medium">Monday – Friday: 9:00 AM – 5:00 PM</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="/inquiry?type=fee"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-lg hover:scale-105 transition-transform"
                    >
                      Submit a Fee Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </Card>

                <Card className="h-full flex flex-col bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
                  <h3 className="text-xl font-bold text-[var(--text)] mb-4 flex items-center gap-2">
                    <span className="text-2xl">⚠️</span>
                    Important Notes
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Fee structure is subject to annual revision and may change for subsequent academic years.',
                      'All fees must be paid before the commencement of each academic year/semester.',
                      'Late payment charges apply as per institution guidelines.',
                      'Refund policy applies as per institution guidelines. Please refer to the admission brochure for detailed terms.',
                      'GST is applicable as per government regulations and will be added to the fee structure.',
                    ].map((note, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-[var(--accent)] mt-1">•</span>
                        <p className="text-[var(--text-soft)] text-sm">{note}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
