import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Building2, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../../components/ui/SectionHeader';
import paymentQR from '../../assets/paymentqr.jpg';
import campusImg from '../../assets/home/20260202_121419.jpg';
import campusImg2 from '../../assets/home/20260202_121633.jpg';
import campusImg3 from '../../assets/home/20260202_122858.jpg';

export default function FeePayment() {
  const paymentMethods = [
    { icon: CreditCard, label: 'Credit / Debit Cards', color: 'text-blue-500' },
    { icon: Smartphone, label: 'UPI (GPay, PhonePe, Paytm)', color: 'text-green-500' },
    { icon: Building2, label: 'Net Banking', color: 'text-indigo-500' },
    { icon: CheckCircle2, label: 'Wallet Payments', color: 'text-amber-500' },
  ];

  return (
    <div className="main-content overflow-hidden">
      {/* Hero section with large image */}
      <section className="relative min-h-[45vh] md:min-h-[55vh] flex items-end">
        <div className="absolute inset-0">
          <img src={campusImg}
            alt="Sanskrithi Campus"
            className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--base)] via-[var(--base)]/60 to-transparent" />
          <div className="absolute inset-0 bg-[var(--brand)]/20" />
        </div>
        <div className="relative z-10 w-full pb-12 pt-32 px-4">
          <div className="container max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white/90 text-sm font-medium mb-4">
                Simple & Secure
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Fee Payment
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mt-4 max-w-xl">
                Scan the QR code or visit the admissions office. We're here to help.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="section-spacing -mt-8 relative z-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main QR Card - center of attraction */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div
                className="rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  background: 'linear-gradient(145deg, var(--surface-1) 0%, var(--surface-2) 100%)',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 25px 80px -20px rgba(0,0,0,0.4)'
                }}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Big QR area */}
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
                      <img src={paymentQR}
                        alt="Payment QR Code - Scan to pay fees"
                        className="w-44 h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 object-contain" loading="lazy" />
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mt-4">
                      Scan with your camera or UPI app
                    </p>
                  </div>
                  {/* Side image */}
                  <div className="relative min-h-[280px] md:min-h-[400px] hidden md:block">
                    <img src={campusImg2}
                      alt="Campus"
                      className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium text-white/90">Need help with payment?</p>
                      <a
                        href="/inquiry?type=fee"
                        className="inline-flex items-center gap-2 mt-2 text-white font-semibold hover:underline"
                      >
                        Submit an inquiry
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right column - payment methods & help */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Payment methods */}
              <div
                className="p-6 md:p-8 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, var(--surface-1) 0%, var(--surface-2) 100%)',
                  border: '1px solid var(--border-light)'
                }}
              >
                <h3 className="font-bold text-xl text-[var(--text)] mb-5 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[var(--brand)]" />
                  Accepted Payment Methods
                </h3>
                <ul className="space-y-4">
                  {paymentMethods.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl bg-[var(--surface-2)] flex items-center justify-center ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[var(--text)] font-medium">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need Help */}
              <div
                className="p-6 md:p-8 rounded-2xl overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(52,73,115,0.2) 0%, rgba(52,73,115,0.05) 100%)',
                  border: '1px solid rgba(52,73,115,0.3)'
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand)]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-bold text-xl text-[var(--text)] mb-4 flex items-center gap-2 relative">
                  <Building2 className="w-5 h-5 text-[var(--accent)]" />
                  Need Help?
                </h3>
                <p className="text-[var(--text-soft)] mb-6 relative">
                  For fee structure, payment issues, or receipt download, visit our admissions office or submit an inquiry.
                </p>
                <a
                  href="/inquiry?type=fee"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--accent)]/20 text-[var(--accent)] font-semibold hover:bg-[var(--accent)]/30 transition-colors relative"
                >
                  Fee Enquiry
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Safe & Secure */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-green-500/15 to-emerald-600/10 border border-green-500/25">
                <h3 className="font-bold text-xl text-[var(--text)] mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  Safe & Secure
                </h3>
                <p className="text-[var(--text-soft)]">
                  PCI-DSS compliant. Your transactions are protected with industry-standard security.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom image strip */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20"
          >
            <SectionHeader
              title="Visit Our Campus"
              subtitle="Experience our facilities and meet our team for in-person fee payment assistance"
              center
            />
            <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={campusImg} alt="Campus view" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-bold text-lg">Main Campus</h4>
                  <p className="text-white/90 text-sm">Admissions & Fee Office</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={campusImg2} alt="Campus facilities" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-bold text-lg">Modern Facilities</h4>
                  <p className="text-white/90 text-sm">World-class infrastructure</p>
                </div>
              </div>
              <div className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                <img src={campusImg3} alt="Campus life" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="font-bold text-lg">Campus Life</h4>
                  <p className="text-white/90 text-sm">Schedule a visit</p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
