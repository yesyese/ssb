import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

// Technical & International partners
import logoRISE from '../../assets/companylogos/rise.png';
import logoIAESTE from '../../assets/companylogos/iaeste.png';

// Affiliations & Recognitions
import logoAICTE from '../../assets/companylogos/aicte.png';
import logoAIMA from '../../assets/companylogos/aima.png';
import logoAIMS from '../../assets/companylogos/aims.jpg';
import logoJNTUA from '../../assets/companylogos/jntua.png';
import logoMOE from '../../assets/companylogos/moe.jpg';
import logoSkillIndia from '../../assets/companylogos/skill-india.png';

// Strategic Partnerships & Global Collaborations
import logoPeakmind from '../../assets/companylogos/peakmind.jpg';
import logoRubicon from '../../assets/companylogos/rubicon.jpg';
import logoNHRD from '../../assets/companylogos/nhrd.png';
import logoIndiaSpark from '../../assets/companylogos/india-spark.jpg';
import logoLondonSchool from '../../assets/companylogos/london-school-digital-business.webp';
import logoVajraSoft from '../../assets/companylogos/vajrasoft.jpg';
import logoDataWise from '../../assets/companylogos/datawise.png';
import logoAPSSDC from '../../assets/companylogos/apssdc.jpg';
import logoDELNET from '../../assets/companylogos/delnet.jpg';
import logoNPTEL from '../../assets/companylogos/nptel.png';
import logoSkyfi from '../../assets/companylogos/skyfi.jpg';
import logoGryphon from '../../assets/companylogos/gryphon-academy.png';

const TECHNICAL_PARTNERS = [
  {
    name: 'RISE',
    full: 'Research & Innovation in Systems Engineering',
    logo: logoRISE,
    description: 'International technical partner. The RISE India Office at Sanskrithi creates a technology-driven learning environment with real-world projects, internships and industry exposure.',
  },
  {
    name: 'IAESTE',
    full: 'International Association for the Exchange of Students for Technical Experience',
    logo: logoIAESTE,
    description: 'Facilitates international student internships and technical-experience exchanges between India and partner countries.',
  },
];

const AFFILIATIONS = [
  { name: 'AICTE', logo: logoAICTE },
  { name: 'AIMA', logo: logoAIMA },
  { name: 'AIMS', logo: logoAIMS },
  { name: 'JNTUA', logo: logoJNTUA },
  { name: 'Ministry of Education', logo: logoMOE },
  { name: 'Skill India', logo: logoSkillIndia },
];

const STRATEGIC_PARTNERS = [
  { name: 'NPTEL', logo: logoNPTEL },
  { name: 'DELNET', logo: logoDELNET },
  { name: 'APSSDC', logo: logoAPSSDC },
  { name: 'Peakmind', logo: logoPeakmind },
  { name: 'Rubicon', logo: logoRubicon },
  { name: 'NHRD', logo: logoNHRD },
  { name: 'India Spark', logo: logoIndiaSpark },
  { name: 'London School of Digital Business', logo: logoLondonSchool },
  { name: 'VajraSoft', logo: logoVajraSoft },
  { name: 'DataWise', logo: logoDataWise },
  { name: 'Skyfi Labs', logo: logoSkyfi },
  { name: 'Gryphon Academy', logo: logoGryphon },
];

export default function MOUs() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="MOUs & Partnerships"
            subtitle="Awards, alliances and global impact"
            description="A journey defined by excellence, innovation and impactful industry partnerships"
          />

          <div className="space-y-section">
            {/* Intro */}
            <div className="panel">
              <h2>Global Recognition & Strategic Collaborations</h2>
              <p>
                Sanskrithi School of Business continues to strengthen its global academic presence through
                prestigious recognitions, corporate achievements, and international collaborations. These
                associations empower students with world-class exposure, industry integration, and
                future-ready learning experiences.
              </p>
            </div>

            {/* Technical & International Partners */}
            <div className="panel">
              <h2>International Technical Partners</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                {TECHNICAL_PARTNERS.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-[var(--border-light)] bg-[var(--surface-1)] p-6 flex flex-col items-start gap-4 hover:bg-[var(--surface-2)] transition-colors"
                  >
                    <div className="w-full h-20 sm:h-24 rounded-lg bg-white border border-[var(--border-light)] flex items-center justify-center p-3">
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text)] mb-1">
                        {p.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-[var(--brand)] font-medium mb-3">
                        {p.full}
                      </p>
                      <p className="text-sm text-[var(--text-soft)] leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations & Recognitions */}
            <div className="panel">
              <h2>Affiliations & Recognitions</h2>
              <p className="text-sm text-[var(--text-soft)] mb-6">
                Recognised and accredited by leading national bodies.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                {AFFILIATIONS.map((a, i) => (
                  <div
                    key={i}
                    className="aspect-[3/2] rounded-lg bg-white border border-[var(--border-light)] flex items-center justify-center p-3 hover:shadow-md transition-shadow"
                    title={a.name}
                  >
                    <img
                      src={a.logo}
                      alt={a.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Strategic Partnerships & Global Collaborations */}
            <div className="panel">
              <h2>Strategic Partnerships & Global Collaborations</h2>
              <p className="text-sm text-[var(--text-soft)] mb-6">
                Academic, skill development, and industry partners that enrich the SSB learning experience.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                {STRATEGIC_PARTNERS.map((p, i) => (
                  <div
                    key={i}
                    className="aspect-[3/2] rounded-lg bg-white border border-[var(--border-light)] flex items-center justify-center p-3 hover:shadow-md transition-shadow"
                    title={p.name}
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* What partnerships bring students */}
            <div className="panel">
              <h2>What These Partnerships Enable</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-2">
                <div>
                  <h4 className="font-semibold mb-2">For Students</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Real-world software development office on campus (RISE India)</li>
                    <li>International internships and technical exchange (IAESTE)</li>
                    <li>NPTEL and DELNET access for online courses and digital library resources</li>
                    <li>Industry-aligned skill development and certifications</li>
                    <li>Mentorship and live projects with industry professionals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">For the Institution</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>National accreditation and recognition (AICTE, AIMA, AIMS, JNTUA, MOE)</li>
                    <li>Industry-aligned curriculum and faculty development</li>
                    <li>Joint research initiatives and innovation labs</li>
                    <li>Access to global academic networks</li>
                    <li>Brand recognition and credibility for placements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Inquiries CTA */}
            <div className="panel bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)] text-center">
              <h2>Partnership Inquiries</h2>
              <p className="mb-6">
                Interested in collaborating with Sanskrithi School of Business? Reach out to our admissions office.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-6 text-left">
                <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                  <p className="text-[var(--text-soft)] text-sm mb-1">Email</p>
                  <a
                    href="mailto:admissions.director@sanskrithibschool.com"
                    className="font-semibold hover:text-[var(--accent)] transition-colors break-words"
                  >
                    admissions.director@sanskrithibschool.com
                  </a>
                </div>
                <div className="p-4 rounded-lg bg-[var(--surface-1)] border border-[var(--border-light)]">
                  <p className="text-[var(--text-soft)] text-sm mb-1">Phone</p>
                  <a
                    href="tel:+919100974544"
                    className="font-semibold hover:text-[var(--accent)] transition-colors"
                  >
                    +91 9100 974 544
                  </a>
                </div>
              </div>
              <a
                href="/inquiry?type=contact"
                className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
