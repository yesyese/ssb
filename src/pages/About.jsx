import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader.jsx';
import Stats from '../components/ui/Stats.jsx';

export default function About() {
  return (
    <div className="theme-dark bg-[var(--base)]">
      <Helmet><title>About SSB — Sanskrithi School of Business</title></Helmet>

      {/* Hero Section */}
      <section className="relative container section-spacing overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand/10 to-accent-primary/10 rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative z-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-brand/10 to-accent-primary/10 border border-brand/20 mb-6 backdrop-blur-sm">
              <span className="text-brand-light font-semibold">🏛️ About SSB</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Inspiring Excellence,
              <br />
              <span className="bg-gradient-to-r from-brand-light to-accent-primary bg-clip-text text-transparent">Delivering Impact</span>
            </h1>
            <p className="text-xl text-text-soft max-w-3xl mx-auto leading-relaxed">
              At Sanskrithi School of Business, we bridge the gap between academic rigor and industry relevance, 
              creating leaders who drive meaningful change in the business world.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="aspect-[16/7] rounded-3xl overflow-hidden glass border-2 border-border-medium relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&h=700&fit=crop" 
              alt="SSB Campus - Modern education facility" 
              className="w-full h-full object-cover" 
              loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-surface-glass backdrop-blur-xl border border-border-light rounded-2xl px-8 py-6">
                <h3 className="text-white font-bold text-2xl mb-2">Modern Campus, Timeless Values</h3>
                <p className="text-text-soft text-lg">State-of-the-art facilities designed for collaborative learning and innovation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="container section-spacing">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <SectionHeader 
              eyebrow="Our Purpose" 
              title="Mission & Vision" 
              subtitle="Shaping the future of business education through innovation and excellence"
            />
            
            <div className="space-y-8 mt-12">
              <div className="card border-l-4 border-l-accent-primary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-primary to-emerald-600 rounded-xl flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">Our Mission</h3>
                    <p className="text-text-soft leading-relaxed">
                      To provide world-class business education that combines academic excellence with practical industry exposure, 
                      developing ethical leaders who create sustainable value for society.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="card border-l-4 border-l-brand">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand to-brand-dark rounded-xl flex items-center justify-center text-2xl">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-3">Our Vision</h3>
                    <p className="text-text-soft leading-relaxed">
                      To be recognized as India's premier business school, known for innovation in pedagogy, 
                      industry partnerships, and producing graduates who lead transformational change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden glass border-2 border-border-medium">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=750&fit=crop" 
                alt="Students engaged in collaborative learning" 
                className="w-full h-full object-cover" 
                loading="lazy" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-accent-warm to-amber-600 text-white rounded-2xl px-6 py-4 shadow-elev">
              <div className="text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="container section-spacing">
        <SectionHeader 
          eyebrow="Our Values" 
          title="What drives us forward" 
          subtitle="Core principles that shape every aspect of our educational philosophy"
          center 
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              title: 'Excellence',
              description: 'Pursuing the highest standards in education, research, and student development.',
              icon: '⭐',
              color: 'from-accent-gold to-amber-600',
              image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=400&h=300&fit=crop'
            },
            {
              title: 'Innovation',
              description: 'Embracing new ideas, technologies, and methodologies to enhance learning.',
              icon: '💡',
              color: 'from-brand to-brand-dark',
              image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop'
            },
            {
              title: 'Integrity',
              description: 'Maintaining the highest ethical standards in all our actions and decisions.',
              icon: '🤝',
              color: 'from-accent-primary to-emerald-600',
              image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop'
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden rounded-t-lg opacity-70 group-hover:opacity-90 transition-opacity">
                <img 
                  src={value.image} 
                  alt={value.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base/80"></div>
              </div>
              
              <div className="relative z-10 pt-20">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${value.color} mb-6 text-2xl shadow-lg`}>
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-2xl mb-4">{value.title}</h3>
                <p className="text-text-soft leading-relaxed text-lg">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="container section-spacing">
        <Stats 
          title="Our Impact in Numbers"
          items={[
            { value: '2000+', label: 'Alumni Network', icon: '🎓' },
            { value: '50+', label: 'Faculty & Staff', icon: '👨‍🏫' },
            { value: '95%+', label: 'Placement Rate', icon: '💼' },
            { value: '200+', label: 'Industry Partners', icon: '🤝' },
          ]} 
        />
      </section>
      
      {/* Leadership Section */}
      <section className="container section-spacing">
        <SectionHeader 
          eyebrow="Leadership" 
          title="Visionary leaders, proven expertise" 
          subtitle="Our leadership team combines decades of industry experience with academic excellence"
          center 
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            {
              name: 'Dr. Suresh Reddy',
              position: 'Chairman & Founder',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
              bio: 'Visionary leader with 25+ years in business education and industry partnerships.'
            },
            {
              name: 'Prof. Anjali Sharma',
              position: 'Dean - Academic Affairs',
              image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
              bio: 'Former McKinsey consultant with expertise in strategy and organizational behavior.'
            },
            {
              name: 'Dr. Rajesh Kumar',
              position: 'Director - Industry Relations',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
              bio: 'Ex-TCS executive specializing in digital transformation and corporate partnerships.'
            }
          ].map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group text-center"
            >
              <div className="relative inline-block mb-6">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-accent-primary"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent-primary to-emerald-600 rounded-full flex items-center justify-center text-white text-sm">
                  ✓
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">{leader.name}</h3>
              <p className="text-accent-primary font-semibold mb-4">{leader.position}</p>
              <p className="text-text-soft leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}