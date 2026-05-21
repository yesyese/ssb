import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function CampusLife() {
  const campusFacilities = [
    {
      name: "Campus Overview",
      description: "Explore our beautiful campus nestled in the spiritual heart of Puttaparthi",
      image: "🏫",
      link: "/campus-life/campus",
      features: ["Modern Architecture", "Green Spaces", "Wi-Fi Enabled", "24/7 Security"]
    },
    {
      name: "Library",
      description: "State-of-the-art library with extensive collection of books and digital resources",
      image: "📚",
      link: "/campus-life/library", 
      features: ["50,000+ Books", "Digital Library", "Research Journals", "Study Halls"]
    },
    {
      name: "Student Hostels",
      description: "Comfortable residential facilities providing a home away from home",
      image: "🏠",
      link: "/campus-life/hostel",
      features: ["AC Rooms", "Mess Facility", "24/7 Security", "Wi-Fi Access"]
    },
    {
      name: "Sports Complex",
      description: "Comprehensive sports facilities for physical fitness and recreational activities",
      image: "⚽",
      link: "/campus-life/sports",
      features: ["Indoor Games", "Outdoor Sports", "Gymnasium", "Sports Events"]
    },
    {
      name: "Computer Center",
      description: "Advanced IT infrastructure with latest technology and high-speed internet",
      image: "💻",
      link: "/campus-life/computer-centre",
      features: ["Latest PCs", "Software Lab", "Internet Access", "Technical Support"]
    },
    {
      name: "Cafeteria",
      description: "Hygienic dining facilities serving nutritious and delicious meals",
      image: "🍽️",
      link: "/campus-life/cafeteria",
      features: ["Healthy Food", "Variety Menu", "Clean Environment", "Affordable Prices"]
    },
    {
      name: "Transportation",
      description: "Safe and reliable transport services connecting to major locations",
      image: "🚌",
      link: "/campus-life/transportation",
      features: ["AC Buses", "Multiple Routes", "Safe Travel", "Affordable Rates"]
    },
    {
      name: "Student Activities",
      description: "Vibrant student life with cultural events, festivals, and extracurricular activities",
      image: "🎭",
      link: "/campus-life/activities",
      features: ["Cultural Events", "Clubs & Societies", "Festivals", "Competitions"]
    }
  ];

  const campusStats = [
    { number: "21", label: "Experienced Faculty", icon: "👨‍🏫" },
    { number: "2,600", label: "Students", icon: "🎓" },
    { number: "56", label: "Recruiting Partners", icon: "🤝" },
    { number: "17", label: "Industry MOUs", icon: "📝" }
  ];

  const campusHighlights = [
    {
      title: "Strategic Location",
      description: "Located behind Sri Sathya Sai Super Speciality Hospital in the serene town of Puttaparthi",
      icon: "📍"
    },
    {
      title: "Spiritual Environment", 
      description: "Benefit from the peaceful and spiritual atmosphere of Puttaparthi, fostering holistic development",
      icon: "🕉️"
    },
    {
      title: "Modern Infrastructure",
      description: "State-of-the-art facilities designed to support academic excellence and student well-being",
      icon: "🏢"
    },
    {
      title: "Green Campus",
      description: "Eco-friendly campus with lush greenery and sustainable practices for a healthy environment",
      icon: "🌱"
    }
  ];

  const studentLife = [
    {
      event: "Catalyst (BBA / BBA Honours Fest)",
      description: "Annual cultural and technical fest showcasing student talents and creativity",
      type: "Cultural Event",
      frequency: "Annual"
    },
    {
      event: "Women In Industry 4.0",
      description: "Empowerment program focusing on women's role in modern industry and leadership",
      type: "Workshop",
      frequency: "Annual"
    },
    {
      event: "National Conferences",
      description: "Academic conferences bringing together scholars, researchers, and industry experts",
      type: "Academic",
      frequency: "Bi-Annual"
    },
    {
      event: "Industry Connect Sessions",
      description: "Regular interaction sessions with industry leaders and corporate executives",
      type: "Professional Development", 
      frequency: "Monthly"
    }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Campus Life"
            subtitle="Where Learning Meets Living"
            description="Experience the vibrant campus life at Sanskrithi School of Business, Puttaparthi"
          />
          
          <div className="space-y-section">
            {/* Campus Overview */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold gradient-text mb-6">Welcome to Our Campus</h2>
              <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                Nestled in the spiritual heart of Puttaparthi, our campus offers a perfect blend of modern 
                educational facilities and serene learning environment. Experience holistic development through 
                academic excellence, cultural activities, and personal growth opportunities.
              </p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {campusStats.map((stat, i) => (
                  <div key={i} className="text-center p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="w-16 h-16 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{stat.icon}</span>
                    </div>
                    <span className="text-3xl font-bold text-[var(--text)] block mb-2">{stat.number}</span>
                    <p className="text-[var(--text-soft)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Campus Facilities */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🏫</span>
                </div>
                Campus Facilities
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {campusFacilities.map((facility, i) => (
                  <Link 
                    key={i} 
                    to={facility.link}
                    className="block p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-all hover:scale-[1.02] group h-full"
                  >
                    <div className="flex items-start gap-6 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-3xl">{facility.image}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--brand)] transition-colors">
                          {facility.name}
                        </h3>
                        <p className="text-[var(--text-soft)] leading-relaxed mb-4">{facility.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, j) => (
                        <span key={j} className="text-sm px-3 py-1 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--text-soft)] text-center">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Campus Highlights */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">⭐</span>
                </div>
                Why Choose Our Campus
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {campusHighlights.map((highlight, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                        <span className="text-2xl">{highlight.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{highlight.title}</h3>
                        <p className="text-[var(--text-soft)] leading-relaxed">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Student Life & Events */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🎉</span>
                </div>
                Student Life & Events
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {studentLife.map((event, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] hover:bg-[var(--surface-2)] transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-[var(--text)]">{event.event}</h3>
                      <span className="px-3 py-1 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-sm font-medium">
                        {event.frequency}
                      </span>
                    </div>
                    <p className="text-[var(--text-soft)] mb-3 leading-relaxed">{event.description}</p>
                    <span className="inline-block px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-sm">
                      {event.type}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Virtual Tour CTA */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold text-[var(--text)] mb-4">Experience Our Campus</h2>
              <p className="text-[var(--text-soft)] mb-8 text-lg">
                Discover the perfect environment for your academic and personal growth at Sanskrithi School of Business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/campus-life/campus"
                  className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  Explore Campus
                </Link>
                <Link 
                  to="/inquiry?type=schedule-visit"
                  className="px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  Schedule a Visit
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}