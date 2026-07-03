// NextStepAI - Landing Page Component
import React from 'react';
import { Compass, Cpu, Target, Award, Rocket, CheckCircle } from 'lucide-react';

export default function LandingPage({ onStartQuiz }) {
  return (
    <div className="fade-in-up">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <Cpu className="btn-icon" /> AI-Powered Career Path Finder
        </div>
        <h1 className="hero-title">
          Stop Guessing. Discover Your <span>Dream Career</span> Today.
        </h1>
        <p className="hero-desc">
          Every year, millions of students choose careers without proper guidance. 
          NextStepAI uses advanced skill mapping and interest profiling to find your perfect job matches, complete with interactive roadmaps and professional AI coaching.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" onClick={onStartQuiz}>
            <Rocket className="btn-icon" /> Get Free Career Guidance
          </button>
        </div>
      </section>

      {/* Benefits / Stats Grid */}
      <div className="landing-grid" style={{ marginBottom: '5rem' }}>
        <div className="glass-card feat-card" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className="feat-icon-wrapper" style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
            <Target size={28} />
          </div>
          <h3>94% Accuracy</h3>
          <p style={{ fontSize: '0.9rem' }}>Profiles mapped against modern industry standards and evolving job markets.</p>
        </div>

        <div className="glass-card feat-card" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className="feat-icon-wrapper" style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
            <Award size={28} />
          </div>
          <h3>15,000+ Students</h3>
          <p style={{ fontSize: '0.9rem' }}>Successfully guided to make confident, informed choices about their college and career steps.</p>
        </div>

        <div className="glass-card feat-card" style={{ textAlign: 'center', alignItems: 'center' }}>
          <div className="feat-icon-wrapper" style={{ width: '60px', height: '60px', borderRadius: '50%' }}>
            <Compass size={28} />
          </div>
          <h3>Custom Roadmaps</h3>
          <p style={{ fontSize: '0.9rem' }}>Step-by-step educational checklists complete with vetted free learning resources.</p>
        </div>
      </div>

      {/* Deep-Dive Features */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginTop: '2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.2rem', fontFamily: 'var(--font-heading)' }}>
          How NextStepAI Guides You Forward
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>
              1. Detailed Skills & Interest Assessment
            </h3>
            <p>
              Our interactive quiz maps your cognitive strengths, technical tendencies, artistic talents, and work preferences. We don't just ask what you like; we evaluate your core skill markers to locate paths where you will naturally excel.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <CheckCircle size={16} className="btn-icon" style={{ color: 'var(--secondary)' }} />
                Comprehensive 4-dimensional profiling
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <CheckCircle size={16} className="btn-icon" style={{ color: 'var(--secondary)' }} />
                Instant weighted recommendation results
              </li>
            </ul>
          </div>
          
          <div className="glass-card" style={{ padding: '2rem', background: 'radial-gradient(circle at 100% 0%, rgba(0, 240, 255, 0.1), transparent)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
                <span style={{ fontWeight: '600' }}>Assessment Progress</span>
                <span style={{ color: 'var(--secondary)', fontWeight: '700' }}>Step 3 of 4</span>
              </div>
              <p style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>'Which work environments motivate you most?'</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(0, 240, 255, 0.08)', borderRadius: '8px', border: '1px solid var(--secondary)', fontSize: '0.85rem' }}>
                  💻 Remote / Hybrid (Flexibility focus)
                </div>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                  🏢 Corporate Office (Structure focus)
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div className="glass-card" style={{ padding: '2rem', order: window.innerWidth > 768 ? 0 : 1, background: 'radial-gradient(circle at 0% 100%, rgba(138, 79, 255, 0.12), transparent)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-light)' }}>
                <Cpu size={18} /> <strong>AI Career Counselor</strong>
              </div>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.85rem', width: '85%' }}>
                Which programming language should I learn first for Full Stack Engineering?
              </div>
              <div style={{ padding: '0.75rem', background: 'var(--bg-tertiary)', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.85rem', width: '90%', marginLeft: '10%' }}>
                I recommend starting with <strong>JavaScript</strong>. It is the language of the browser and lets you build both frontend (React) and backend (Node.js) systems!
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-heading)' }}>
              2. Interactive AI Counselor & Roadmaps
            </h3>
            <p>
              Once you find a path, NextStepAI gives you a clear road map. You can tick off milestones from basic principles up to job applications. Need details? Open the AI Counselor Chat to ask custom questions about salary trends, project suggestions, and industry prep.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <CheckCircle size={16} className="btn-icon" style={{ color: 'var(--secondary)' }} />
                Interactive step-by-step checklist roadmaps
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem' }}>
                <CheckCircle size={16} className="btn-icon" style={{ color: 'var(--secondary)' }} />
                Smart AI Chat bot trained on your student profile
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
