import { motion } from 'framer-motion';
import PageHeader from '../components/ui/PageHeader';

const BONAFIDE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeYP_yq7Bv9hgV2ZvbXiu3yrxlHTAG7cgGT7M7uGQky3qa6gQ/viewform?embedded=true';
const BONAFIDE_FORM_DIRECT_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeYP_yq7Bv9hgV2ZvbXiu3yrxlHTAG7cgGT7M7uGQky3qa6gQ/viewform';

export default function Bonafide() {
  return (
    <div className="main-content min-h-screen">
      <PageHeader
        eyebrow="Student Services"
        title="Bonafide Certificate Request"
        description="Submit your bonafide certificate request through the form below. Our examination section will email the certificate to you once processed."
      />

      <div className="section-spacing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden"
            style={{
              background: 'var(--surface-1)',
              border: '1px solid var(--border-light)',
              boxShadow: '0 20px 60px -15px rgba(0,0,0,0.15)',
            }}
          >
            <iframe
              src={BONAFIDE_FORM_URL}
              title="Bonafide Certificate Request Form"
              loading="lazy"
              className="block w-full"
              style={{ border: 0, height: '1200px' }}
            >
              Loading…
            </iframe>
          </motion.div>

          <p className="text-center text-sm text-[var(--text-soft)] mt-6">
            Trouble loading the form?{' '}
            <a
              href={BONAFIDE_FORM_DIRECT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--brand)] hover:underline"
            >
              Open it in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
