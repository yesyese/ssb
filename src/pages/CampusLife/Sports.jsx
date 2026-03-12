import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';

export default function SportsFacility() {
  const sportsCategories = [
    {
      category: "Outdoor Sports",
      icon: "🏟️",
      facilities: [
        { name: "Cricket Ground", description: "Full-size cricket ground with practice nets and pavilion facilities" },
        { name: "Football Field", description: "Standard football field with proper goal posts and seating area" },
        { name: "Basketball Court", description: "Regulation basketball court with modern hoops and lighting" },
        { name: "Volleyball Court", description: "Professional volleyball court with net and boundary markers" },
        { name: "Tennis Court", description: "Hard court tennis facility with proper fencing and equipment" },
        { name: "Athletics Track", description: "400m running track with field event areas for shot put and javelin" }
      ]
    },
    {
      category: "Indoor Sports",
      icon: "🏢",
      facilities: [
        { name: "Badminton Courts", description: "Multiple courts with proper flooring and overhead lighting" },
        { name: "Table Tennis Hall", description: "Multiple tables with professional-grade equipment" },
        { name: "Chess & Carrom", description: "Dedicated area for board games and strategic sports" },
        { name: "Gymnasium", description: "Modern fitness equipment for strength training and cardio" },
        { name: "Yoga Hall", description: "Peaceful space for yoga, meditation, and wellness activities" },
        { name: "Multi-Purpose Hall", description: "Flexible indoor space for various sports and activities" }
      ]
    }
  ];

  const gymFacilities = [
    {
      equipment: "Cardio Zone",
      description: "Treadmills, elliptical machines, and stationary bikes for cardiovascular fitness",
      icon: "🏃"
    },
    {
      equipment: "Strength Training",
      description: "Free weights, dumbbells, barbells, and weight machines for muscle building",
      icon: "🏋️"
    },
    {
      equipment: "Functional Fitness",
      description: "CrossFit equipment, kettlebells, resistance bands, and flexibility tools",
      icon: "💪"
    },
    {
      equipment: "Personal Training",
      description: "Qualified fitness trainers available for personalized workout guidance",
      icon: "👨‍🏫"
    }
  ];

  const sportsPrograms = [
    {
      program: "Inter-College Competitions",
      description: "Participate in regional and state-level sports competitions",
      frequency: "Quarterly",
      type: "Competitive"
    },
    {
      program: "Annual Sports Day",
      description: "Grand sports festival with competitions across all categories",
      frequency: "Annual",
      type: "Campus Event"
    },
    {
      program: "Fitness Programs",
      description: "Regular fitness classes including aerobics and strength training",
      frequency: "Daily",
      type: "Wellness"
    },
    {
      program: "Sports Coaching",
      description: "Professional coaching for cricket, football, tennis, and other sports",
      frequency: "Regular",
      type: "Training"
    },
    {
      program: "Adventure Activities",
      description: "Outdoor adventure programs and trekking expeditions",
      frequency: "Monthly",
      type: "Recreation"
    },
    {
      program: "Wellness Workshops",
      description: "Nutrition, mental health, and lifestyle wellness sessions",
      frequency: "Bi-weekly",
      type: "Educational"
    }
  ];

  const facilityTimings = [
    { facility: "Outdoor Courts", morning: "6:00 AM - 8:00 AM", evening: "4:00 PM - 7:00 PM" },
    { facility: "Gymnasium", morning: "6:00 AM - 9:00 AM", evening: "4:00 PM - 8:00 PM" },
    { facility: "Indoor Sports", morning: "7:00 AM - 9:00 AM", evening: "5:00 PM - 7:00 PM" },
    { facility: "Yoga Hall", morning: "6:30 AM - 8:30 AM", evening: "6:00 PM - 7:30 PM" }
  ];

  return (
    <div className="main-content">
      <div className="section-spacing">
        <div className="container">
          <SectionHeader
            title="Sports Complex"
            subtitle="Excellence in Physical Education"
            description="Comprehensive sports infrastructure promoting fitness, wellness, and competitive spirit"
          />
          
          <div className="space-y-section">
            {/* Sports Introduction */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-3xl font-bold gradient-text mb-6">Holistic Development Through Sports</h2>
              <p className="text-[var(--text-soft)] text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
                At Sanskrithi, we believe in the holistic development of our students. Our comprehensive sports 
                facilities provide opportunities for physical fitness, competitive sports, recreational activities, 
                and wellness programs that complement academic excellence with physical and mental well-being.
              </p>
              
              <div className="grid sm:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🏟️</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">10+</span>
                  <p className="text-[var(--text-soft)] text-sm">Sports Facilities</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🏋️</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Modern</span>
                  <p className="text-[var(--text-soft)] text-sm">Gymnasium</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">👨‍🏫</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Expert</span>
                  <p className="text-[var(--text-soft)] text-sm">Trainers</p>
                </div>
                <div className="text-center p-4">
                  <span className="text-3xl block mb-2">🏆</span>
                  <span className="text-2xl font-bold text-[var(--text)] block mb-1">Annual</span>
                  <p className="text-[var(--text-soft)] text-sm">Sports Day</p>
                </div>
              </div>
            </Card>

            {/* Sports Facilities */}
            <div className="space-y-12">
              {sportsCategories.map((category, i) => (
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

            {/* Gymnasium Facilities */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🏋️</span>
                </div>
                Fitness & Gymnasium
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {gymFacilities.map((gym, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)] text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{gym.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-3">{gym.equipment}</h3>
                    <p className="text-[var(--text-soft)] leading-relaxed">{gym.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Sports Programs */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                Sports Programs & Activities
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {sportsPrograms.map((program, i) => (
                  <div key={i} className="p-4 sm:p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3">
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--text)] break-words">
                        {program.program}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:justify-end">
                        <span className="px-3 py-1 bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] text-[var(--accent)] rounded-full text-xs sm:text-sm font-medium">
                          {program.frequency}
                        </span>
                        <span className="px-3 py-1 bg-[var(--accent)]/10 text-[var(--accent)] rounded-full text-xs sm:text-sm">
                          {program.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-[var(--text-soft)] text-sm leading-relaxed">{program.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Facility Timings */}
            <Card>
              <h2 className="text-2xl font-bold text-[var(--text)] mb-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)] flex items-center justify-center">
                  <span className="text-2xl">⏰</span>
                </div>
                Facility Timings
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {facilityTimings.map((timing, i) => (
                  <div key={i} className="p-6 rounded-xl bg-[var(--surface-1)] border border-[var(--border-light)]">
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-4">{timing.facility}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]">
                        <span className="text-[var(--text)]">Morning Session</span>
                        <span className="text-[var(--accent)] font-semibold">{timing.morning}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]">
                        <span className="text-[var(--text)]">Evening Session</span>
                        <span className="text-[var(--accent)] font-semibold">{timing.evening}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)] text-center">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4">Weekend Schedule</h3>
                <p className="text-[var(--text-soft)] mb-4">
                  All sports facilities are available on weekends with extended hours.
                </p>
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-[var(--glass-bg)] backdrop-blur-sm border border-[var(--glass-border)]">
                    <span className="text-[var(--text)] mr-4">Saturday & Sunday:</span>
                    <span className="text-[var(--accent)] font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Sports Membership */}
            <Card className="text-center bg-gradient-to-r from-[var(--surface-1)] to-[var(--surface-2)]">
              <h2 className="text-2xl font-bold text-[var(--text)] mb-6">Join Our Sports Community</h2>
              <p className="text-[var(--text-soft)] mb-8 text-lg max-w-3xl mx-auto">
                All students have access to our sports facilities as part of their holistic education experience. 
                Participate in sports, stay fit, and be part of our vibrant sports community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/campus-life/activities"
                  className="px-8 py-4 bg-gradient-to-r from-[var(--brand)] to-[var(--brand-light)] text-white font-semibold rounded-xl hover:scale-105 transition-transform shadow-lg"
                >
                  View Activities
                </a>
                <a 
                  href="/inquiry"
                  className="px-8 py-4 bg-[var(--surface-2)] text-[var(--text)] font-semibold rounded-xl border border-[var(--border-light)] hover:bg-[var(--surface-3)] transition-colors"
                >
                  Contact Sports Coordinator
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}