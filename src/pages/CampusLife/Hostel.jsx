import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import hostelHero from '../../assets/campus/hostel/hostel-study-1.jpg';
import hostelGroup1 from '../../assets/campus/hostel/hostel-group-1.jpg';
import hostelGroup2 from '../../assets/campus/hostel/hostel-group-2.jpg';
import hostelGroup3 from '../../assets/campus/hostel/hostel-group-3.jpg';
import hostelRoom from '../../assets/campus/hostel/hostel-room.jpg';
import hostelStudy2 from '../../assets/campus/hostel/hostel-study-2.jpg';

export default function HostelFacility() {
  const hostelTypes = [
    {
      type: "Boys Hostel",
      icon: "🏠",
      capacity: "120 Students",
      features: [
        { name: "AC Rooms", description: "Air-conditioned rooms for comfortable stay in all seasons" },
        { name: "Study Areas", description: "Dedicated quiet zones for focused academic work" },
        { name: "Recreation Hall", description: "Common area with TV, games, and social activities" },
        { name: "Mess Facility", description: "Hygienic dining hall with nutritious vegetarian meals" }
      ]
    },
    {
      type: "Girls Hostel", 
      icon: "🏡",
      capacity: "80 Students",
      features: [
        { name: "Secure Environment", description: "Enhanced security measures with female wardens" },
        { name: "Private Bathrooms", description: "Individual attached bathrooms for privacy and convenience" },
        { name: "Common Kitchen", description: "Shared kitchen facilities for special cooking needs" },
        { name: "Laundry Services", description: "Professional washing and ironing services" }
      ]
    }
  ];

  const roomFacilities = [
    {
      category: "Room Amenities",
      icon: "🛏️",
      facilities: [
        { name: "Furnished Rooms", description: "Complete furniture including bed, study table, chair, and cupboard" },
        { name: "Individual Storage", description: "Personal lockers and wardrobes for belongings" },
        { name: "Study Space", description: "Dedicated study corner with proper lighting" },
        { name: "Ventilation", description: "Well-ventilated rooms with windows and exhaust fans" }
      ]
    },
    {
      category: "Common Facilities",
      icon: "🏢",
      facilities: [
        { name: "Wi-Fi Internet", description: "High-speed internet connectivity throughout the hostel" },
        { name: "Common Rooms", description: "Recreational spaces with TV, indoor games, and seating" },
        { name: "Reading Rooms", description: "Quiet study halls for group study and preparation" },
        { name: "Visitor Lounge", description: "Designated areas for meeting family and friends" }
      ]
    }
  ];

  const safetyMeasures = [
    {
      measure: "24/7 Security",
      description: "Round-the-clock security guards with CCTV surveillance",
      icon: "🛡️"
    },
    {
      measure: "Resident Wardens",
      description: "Experienced wardens living on-premises for student support",
      icon: "👨‍🏫"
    },
    {
      measure: "Access Control",
      description: "ID card-based entry system with visitor registration",
      icon: "🔐"
    },
    {
      measure: "Emergency Support",
      description: "First aid facilities and quick access to medical help",
      icon: "🚨"
    },
    {
      measure: "Fire Safety",
      description: "Smoke detectors, fire extinguishers, and evacuation plans",
      icon: "🔥"
    },
    {
      measure: "Anti-Ragging",
      description: "Strict anti-ragging policies with anonymous complaint system",
      icon: "⚖️"
    }
  ];

  const hostelRules = [
    "Maintain discipline and respect fellow residents",
    "Follow designated timings for entry and exit",
    "Keep rooms and common areas clean",
    "No smoking, alcohol, or prohibited substances",
    "Visitors must register at the reception",
    "Maintain silence during study hours (9 PM - 6 AM)"
  ];

  const feeStructure = [
    { facility: "AC Room (Per Semester)", fee: "₹35,000", includes: "Accommodation + Electricity" },
    { facility: "Non-AC Room (Per Semester)", fee: "₹25,000", includes: "Accommodation + Basic Utilities" },
    { facility: "Mess Charges (Monthly)", fee: "₹4,500", includes: "3 Meals + Evening Snacks" },
    { facility: "Security Deposit (Refundable)", fee: "₹5,000", includes: "One-time payment" }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Student Hostels"
            subtitle="Your Home Away From Home"
            description="Comfortable and secure residential facilities fostering academic excellence and personal growth"
          />
          
          <div className="space-y-section">
            {/* Hostel Hero Image */}
            <div className="rounded-2xl overflow-hidden border border-[var(--border-light)]">
              <img
                src={hostelHero}
                alt="Student studying at her desk inside the SSB hostel"
                className="w-full h-[260px] sm:h-[360px] md:h-[440px] object-cover"
                loading="lazy"
              />
            </div>

            {/* Hostel Introduction */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold gradient-text mb-6">Residential Living Experience</h2>
              <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                Our modern hostel facilities provide a safe, comfortable, and conducive environment for students 
                to focus on their studies while building lifelong friendships. Located within the serene campus 
                of Puttaparthi, our hostels offer the perfect blend of comfort, security, and community living.
              </p>
              
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🏠</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">200+</span>
                  <p className="text-[var(--text-soft)] text-sm">Bed Capacity</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">❄️</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">100%</span>
                  <p className="text-[var(--text-soft)] text-sm">AC Rooms</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🔒</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">24/7</span>
                  <p className="text-[var(--text-soft)] text-sm">Security</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">📶</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">100%</span>
                  <p className="text-[var(--text-soft)] text-sm">WiFi Coverage</p>
                </div>
              </div>
            </Card>

            {/* Hostel Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 justify-items-center">
              {[
                { src: hostelGroup1, alt: 'Students studying together in hostel common room' },
                { src: hostelStudy2, alt: 'Hostel study area' },
                { src: hostelRoom, alt: 'Hostel room' },
                { src: hostelGroup2, alt: 'Hostel common space' },
                { src: hostelGroup3, alt: 'Hostel residents' },
              ].map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[160px] sm:h-[200px] md:h-[220px] object-cover rounded-xl border border-[var(--border-light)]"
                  loading="lazy"
                />
              ))}
            </div>

            {/* Hostel Types */}
            <div className="space-y-12">
              {hostelTypes.map((hostel, i) => (
                <Card key={i}>
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-2xl">{hostel.icon}</span>
                    </div>
                    {hostel.type}
                    <span className="px-4 py-2 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                      {hostel.capacity}
                    </span>
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {hostel.features.map((feature, j) => (
                      <div key={j} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{feature.name}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Room Facilities */}
            <div className="space-y-12">
              {roomFacilities.map((category, i) => (
                <Card key={i}>
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                      <span className="text-2xl">{category.icon}</span>
                    </div>
                    {category.category}
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {category.facilities.map((facility, j) => (
                      <div key={j} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{facility.name}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed">{facility.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Safety & Security */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🛡️</span>
                </div>
                Safety & Security Measures
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {safetyMeasures.map((safety, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{safety.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{safety.measure}</h3>
                    <p className="text-[var(--text-soft)] leading-relaxed">{safety.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Hostel Rules */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">📋</span>
                </div>
                Hostel Guidelines
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {hostelRules.map((rule, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                      <div className="w-6 h-6 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center flex-shrink-0">
                        <span className="text-[var(--accent)] text-sm">✓</span>
                      </div>
                      <p className="text-[var(--text-soft)]">{rule}</p>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--surface-1)] to-[var(--surface-2)]">
                  <h3 className="text-xl font-semibold text-[var(--text)] mb-4">Hostel Timings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]">
                      <span className="text-[var(--text)]">Entry Time</span>
                      <span className="text-[var(--accent)] font-semibold">Until 10:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]">
                      <span className="text-[var(--text)]">Study Hours</span>
                      <span className="text-[var(--accent)] font-semibold">9:00 PM - 6:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]">
                      <span className="text-[var(--text)]">Visiting Hours</span>
                      <span className="text-[var(--accent)] font-semibold">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Fee Structure */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                Hostel Fee Structure
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {feeStructure.map((fee, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-[var(--text)]">{fee.facility}</h3>
                      <span className="text-2xl font-bold text-[var(--accent)]">{fee.fee}</span>
                    </div>
                    <p className="text-[var(--text-soft)]">{fee.includes}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)] text-center">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Ready to Apply for Hostel?</h3>
                <p className="text-[var(--text-soft)] mb-6">
                  Secure your accommodation at our comfortable and safe hostel facilities. Limited seats available.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/inquiry?type=admission"
                    className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}