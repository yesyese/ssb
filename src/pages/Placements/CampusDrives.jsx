import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

// Recruiter logos
import logoAccenture from '../../assets/companylogos/Accenture.svg.png';
import logoAmazon from '../../assets/companylogos/amazon.png';
import logoDeloitte from '../../assets/companylogos/Deloitte_Logo.png';
import logoGenpact from '../../assets/companylogos/800px-Genpact_logo.svg.png';
import logoHDFC from '../../assets/companylogos/HDFC_Bank_Logo.svg.png';
import logoICICI from '../../assets/companylogos/icici.png';
import logoJPMorgan from '../../assets/companylogos/jp  morgam.png';
import logoNoBroker from '../../assets/companylogos/nobroker-logo.jpg';
import logoTCS from '../../assets/companylogos/Tata_Consultancy_Services_Logo.svg.png';
import logoUpgrad from '../../assets/companylogos/upgrad-logo.png';
import logoWipro from '../../assets/companylogos/Wipro-logo.png';
import logoYesBank from '../../assets/companylogos/yes bank.png';
import logo247 from '../../assets/companylogos/24.7.png';
import logoCognizant from '../../assets/companylogos/cognizant.png';
import logoInfosys from '../../assets/companylogos/infosys.png';
import logoSamsung from '../../assets/companylogos/samsung.png';
import logoKPMG from '../../assets/companylogos/kpmg.png';
import logoTechMahindra from '../../assets/companylogos/tech-mahindra.png';
import logoSBI from '../../assets/companylogos/sbi.png';
import logoIDFC from '../../assets/companylogos/idfc-first-bank.png';
import logoCSB from '../../assets/companylogos/csb-bank.png';
import logoCityUnion from '../../assets/companylogos/city-union-bank.png';
import logoBajaj from '../../assets/companylogos/bajaj-finserv.png';
import logoPoonawalla from '../../assets/companylogos/poonawalla-fincorp.png';
import logoGodrej from '../../assets/companylogos/godrej-capital.png';
import logoManappuram from '../../assets/companylogos/manappuram-finance.jpeg';
import logoMuthoot from '../../assets/companylogos/muthoot-finance.png';
import logoUber from '../../assets/companylogos/uber.png';
import logoSlice from '../../assets/companylogos/slice.png';
import logoKIA from '../../assets/companylogos/kia.png';
import logoUltraTech from '../../assets/companylogos/ultratech-cement.jpg';
import logoDelhivery from '../../assets/companylogos/delhivery.png';
import logoQuess from '../../assets/companylogos/quess.png';
import logoCareernet from '../../assets/companylogos/careernet.png';
import logoCorizo from '../../assets/companylogos/corizo.png';
import logoTeachnook from '../../assets/companylogos/teachnook.png';
import logoBrihaspathi from '../../assets/companylogos/brihaspathi.webp';
import logoSelfeey from '../../assets/companylogos/selfeey.png';
import logoTricon from '../../assets/companylogos/tricon-infotech.png';
import logoWayspire from '../../assets/companylogos/wayspire.png';
import logoStarsManagement from '../../assets/companylogos/stars-management.png';
import logoMovidu from '../../assets/companylogos/movidu.jpg';
import logoIntrainz from '../../assets/companylogos/intrainz.jpg';
import logoRinex from '../../assets/companylogos/rinex.webp';
import logoMOS from '../../assets/companylogos/mos.png';
import logoTotal from '../../assets/companylogos/total.png';
import logoHCL from '../../assets/companylogos/hcl.png';
import logoEY from '../../assets/companylogos/ey.png';
import logoPayPal from '../../assets/companylogos/paypal.png';
import logoFactset from '../../assets/companylogos/factset.png';

// Student photos
import photoSandhya from '../../assets/placements/students/j-sandhya.jpg';
import photoSwapna from '../../assets/placements/students/swapna-bai.jpg';
import photoChitambaram from '../../assets/placements/students/sai-chitambaram.jpg';
import photoGovardhan from '../../assets/placements/students/govardhan.jpg';
import photoGousiya from '../../assets/placements/students/gousiya.png';
import photoNazneen from '../../assets/placements/students/nazneen.png';
import photoYaswitha from '../../assets/placements/students/yaswitha.png';
import photoArchana from '../../assets/placements/students/archana.jpeg';
import photoSudhaRani from '../../assets/placements/students/sudha-rani.png';
import photoGowthami from '../../assets/placements/students/gowthami.png';
import photoAnusha from '../../assets/placements/students/anusha.png';
import photoSaiNath from '../../assets/placements/students/sai-nath.jpg';
import photoBaba from '../../assets/placements/students/baba-fakrudein.png';
import photoLokesh from '../../assets/placements/students/lokesh.png';
import photoYasmin from '../../assets/placements/students/yasmin.png';
import photoGeetha from '../../assets/placements/students/geetha.png';

// Recently-placed students with photos
const RECENT_PLACEMENTS = [
  { name: 'J. Sandhya', company: 'Deloitte', photo: photoSandhya },
  { name: 'Swapna Bai', company: 'Factset', photo: photoSwapna },
  { name: 'C. Sai Chitambaram', company: 'Genpact', photo: photoChitambaram },
  { name: 'B. Govardhan', company: 'Deloitte', photo: photoGovardhan },
  { name: 'S. Gousiya', company: 'KPMG', photo: photoGousiya },
  { name: 'S. Nazneen', company: 'PayPal', photo: photoNazneen },
  { name: 'Yaswitha', company: 'Amazon', photo: photoYaswitha },
  { name: 'Archana', company: 'HCL', photo: photoArchana },
  { name: 'Sudha Rani', company: 'J.P. Morgan', photo: photoSudhaRani },
  { name: 'C. Gowthami', company: 'Accenture', photo: photoGowthami },
  { name: 'J. Anusha', company: 'upGrad', photo: photoAnusha },
  { name: 'S. Sai Nath', company: 'EY', photo: photoSaiNath },
  { name: 'N. Baba Fakrudein', company: 'TCS', photo: photoBaba },
  { name: 'B. Lokesh', company: 'Infosys', photo: photoLokesh },
  { name: 'S. Yasmin', company: 'YES Bank', photo: photoYasmin },
  { name: 'D. Geetha', company: 'Infosys', photo: photoGeetha },
];

// Full recruiter list — every entry has a logo now (only Zepto missing from brochure)
const RECRUITERS = [
  { name: 'Accenture', logo: logoAccenture },
  { name: 'TCS', logo: logoTCS },
  { name: 'Wipro', logo: logoWipro },
  { name: 'Infosys', logo: logoInfosys },
  { name: 'Cognizant', logo: logoCognizant },
  { name: 'Genpact', logo: logoGenpact },
  { name: 'Amazon', logo: logoAmazon },
  { name: 'Samsung', logo: logoSamsung },
  { name: 'HCL', logo: logoHCL },
  { name: 'Deloitte', logo: logoDeloitte },
  { name: 'KPMG', logo: logoKPMG },
  { name: 'EY', logo: logoEY },
  { name: 'PayPal', logo: logoPayPal },
  { name: 'Factset', logo: logoFactset },
  { name: 'J.P. Morgan', logo: logoJPMorgan },
  { name: 'Tech Mahindra', logo: logoTechMahindra },
  { name: 'upGrad', logo: logoUpgrad },
  { name: 'HDFC Bank', logo: logoHDFC },
  { name: 'ICICI Bank', logo: logoICICI },
  { name: 'SBI', logo: logoSBI },
  { name: 'Yes Bank', logo: logoYesBank },
  { name: 'IDFC First Bank', logo: logoIDFC },
  { name: 'CSB Bank', logo: logoCSB },
  { name: 'City Union Bank', logo: logoCityUnion },
  { name: 'Bajaj Finserv', logo: logoBajaj },
  { name: 'Poonawalla Fincorp', logo: logoPoonawalla },
  { name: 'Godrej Capital', logo: logoGodrej },
  { name: 'Manappuram Finance', logo: logoManappuram },
  { name: 'Muthoot Finance', logo: logoMuthoot },
  { name: 'Zepto', logo: null },
  { name: 'Uber', logo: logoUber },
  { name: 'Slice', logo: logoSlice },
  { name: 'NoBroker', logo: logoNoBroker },
  { name: 'KIA', logo: logoKIA },
  { name: 'UltraTech Cement', logo: logoUltraTech },
  { name: 'Delhivery', logo: logoDelhivery },
  { name: 'Quess', logo: logoQuess },
  { name: 'Careernet', logo: logoCareernet },
  { name: '[24]7.ai', logo: logo247 },
  { name: 'Corizo', logo: logoCorizo },
  { name: 'Teachnook', logo: logoTeachnook },
  { name: 'Brihaspathi', logo: logoBrihaspathi },
  { name: 'Selfeey', logo: logoSelfeey },
  { name: 'Tricon Infotech', logo: logoTricon },
  { name: 'Wayspire', logo: logoWayspire },
  { name: 'Stars Management', logo: logoStarsManagement },
  { name: 'Movidu', logo: logoMovidu },
  { name: 'InTrAinz', logo: logoIntrainz },
  { name: 'Rinex', logo: logoRinex },
  { name: 'MOS', logo: logoMOS },
  { name: 'Total', logo: logoTotal },
];

const RECENT_DRIVES = [
  { company: 'Sutherland', profiles: 'Consultant', eligibility: 'MBA', package: '2.7 LPA' },
  { company: 'TCS', profiles: 'IT & BPS', eligibility: 'MBA', package: '—' },
  { company: 'FUNNL', profiles: 'B2B Sales', eligibility: 'MBA', package: '1.8 LPA' },
  { company: 'Middle Earth HR', profiles: 'Sales Executive', eligibility: 'MBA', package: '2.5 LPA' },
  { company: 'Learning Routes', profiles: 'Sales Associate', eligibility: 'MBA', package: '6 LPA' },
];

export default function CampusDrives() {
  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Campus Drives"
            subtitle="On-campus recruitment activities"
            description="Direct recruitment opportunities by leading companies that visit Sanskrithi every year"
          />

          <div className="space-y-section">
            <div className="panel">
              <h2>Campus Recruitment Overview</h2>
              <p>
                Campus drives are the cornerstone of our placement process, bringing
                leading companies directly to our campus to recruit talented students.
                These recruitment events provide students with direct access to
                prestigious organisations and exciting career opportunities.
              </p>
            </div>

            {/* Placement Track Record */}
            <div className="panel">
              <h2>Placement Track Record</h2>
              <div className="grid md:grid-cols-4 gap-6 mt-4">
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">50+</div>
                  <p className="text-sm">Recruiting Companies</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">80+</div>
                  <p className="text-sm">Job Profiles Offered</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">95%</div>
                  <p className="text-sm">Placement Rate</p>
                </div>
                <div className="text-center card">
                  <div className="text-3xl font-bold text-[var(--brand)] mb-2">1200+</div>
                  <p className="text-sm">Alumni Network</p>
                </div>
              </div>
            </div>

            {/* Recent Campus Drives */}
            <div className="panel">
              <h2>Recent Campus Drives</h2>
              <p className="text-sm text-[var(--text-soft)] mb-4">
                A snapshot of recent on-campus recruitment activity.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--border-light)]">
                      <th className="text-left p-3">Company</th>
                      <th className="text-left p-3">Profile</th>
                      <th className="text-left p-3">Eligibility</th>
                      <th className="text-left p-3">Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RECENT_DRIVES.map((drive, i) => (
                      <tr key={i} className="border-b border-[var(--border-light)]">
                        <td className="p-3 font-medium">{drive.company}</td>
                        <td className="p-3">{drive.profiles}</td>
                        <td className="p-3">{drive.eligibility}</td>
                        <td className="p-3">{drive.package}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Placements — students with photos */}
            <div className="panel">
              <h2>Recent Placements</h2>
              <p className="text-sm text-[var(--text-soft)] mb-6">
                Some of our recently placed students and their companies.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {RECENT_PLACEMENTS.map((student, i) => (
                  <div
                    key={i}
                    className="card border border-[var(--border-light)] rounded-xl p-4 hover:bg-[var(--surface-2)] transition-colors flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-[var(--surface-2)] border-2 border-[var(--brand)]/30 mb-3">
                      <img
                        src={student.photo}
                        alt={student.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-semibold text-[var(--text)] mb-1 text-sm sm:text-base leading-tight">
                      {student.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[var(--brand)] font-medium">
                      {student.company}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Recruiters — logos + text fallback */}
            <div className="panel">
              <h2>Our Recruiters</h2>
              <p className="text-sm text-[var(--text-soft)] mb-6">
                A selection of organisations that hire from Sanskrithi.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                {RECRUITERS.map((r, i) => (
                  <div
                    key={i}
                    className="aspect-[3/2] rounded-lg bg-white border border-[var(--border-light)] flex items-center justify-center p-3 hover:shadow-md transition-shadow"
                  >
                    {r.logo ? (
                      <img
                        src={r.logo}
                        alt={r.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-[11px] sm:text-xs font-semibold text-[#1A1410] text-center leading-tight">
                        {r.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Drive Process */}
            <div className="panel">
              <h2>Campus Drive Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Pre-Placement Activities</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Company registration and profile sharing</li>
                    <li>Job description and requirement analysis</li>
                    <li>Student eligibility verification</li>
                    <li>Pre-placement talk (PPT) scheduling</li>
                    <li>Online application and shortlisting</li>
                    <li>Assessment schedule finalisation</li>
                  </ol>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Recruitment Day Activities</h4>
                  <ol className="list-decimal list-inside space-y-2 text-sm">
                    <li>Company presentation and Q&A session</li>
                    <li>Written test / online assessment</li>
                    <li>Technical interview rounds</li>
                    <li>HR interview and final selection</li>
                    <li>Offer letter distribution</li>
                    <li>Acceptance and confirmation process</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Student Preparation Guidelines */}
            <div className="panel">
              <h2>Student Preparation Guidelines</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Before the Drive</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Research the company and job profile thoroughly</li>
                    <li>Update resume and LinkedIn profile</li>
                    <li>Practice common interview questions</li>
                    <li>Prepare relevant project portfolios</li>
                    <li>Plan appropriate formal attire</li>
                    <li>Gather all required documents</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">During the Drive</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Arrive early and maintain punctuality</li>
                    <li>Present yourself professionally</li>
                    <li>Listen carefully to instructions</li>
                    <li>Stay calm and confident</li>
                    <li>Ask relevant questions during Q&A</li>
                    <li>Follow up appropriately</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Register / Contact */}
            <div className="panel">
              <h2>Register for Upcoming Drives</h2>
              <p>Stay updated with campus drive schedules and register for opportunities:</p>
              <div className="mt-4 space-y-1">
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:admissions.director@sanskrithibschool.com"
                    className="text-[var(--brand)] hover:underline break-words"
                  >
                    admissions.director@sanskrithibschool.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919100974544" className="text-[var(--brand)] hover:underline">
                    +91 9100 974 544
                  </a>
                </p>
                <p><strong>Office Hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
