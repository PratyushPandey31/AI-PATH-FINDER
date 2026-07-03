// NextStepAI - Career Dashboard and Roadmap Explorer Component
import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, Calendar, IndianRupee, BookOpen, Compass, CheckCircle2, MessageSquare } from 'lucide-react';

export default function CareerDashboard({ careers, onRetakeQuiz, onSelectChatCareer }) {
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [completedRoadmapItems, setCompletedRoadmapItems] = useState({});

  if (!careers || careers.length === 0) {
    return (
      <div className="glass-card fade-in-up" style={{ padding: '3.5rem', textAlign: 'center', maxWidth: '600px', margin: '3rem auto' }}>
        <Compass size={48} style={{ color: 'var(--primary-light)', marginBottom: '1.5rem' }} />
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>No Recommendations Yet</h2>
        <p style={{ marginBottom: '2rem' }}>
          Take our quick 3-step career quiz to let our AI analyze your skills and interests and match you with modern high-demand fields.
        </p>
        <button className="btn btn-primary" onClick={onRetakeQuiz}>
          Start Career Assessment
        </button>
      </div>
    );
  }

  // Toggle checkbox in roadmap
  const toggleRoadmapItem = (careerId, phaseIndex, itemIndex) => {
    const key = `${careerId}-${phaseIndex}-${itemIndex}`;
    setCompletedRoadmapItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Detailed View
  if (selectedCareer) {
    const career = selectedCareer;
    
    // Calculate total roadmap checklist items
    let totalItems = 0;
    let completedItems = 0;
    career.roadmap.forEach((phase, pIdx) => {
      phase.checklist.forEach((_, cIdx) => {
        totalItems++;
        if (completedRoadmapItems[`${career.id}-${pIdx}-${cIdx}`]) {
          completedItems++;
        }
      });
    });
    
    const progressPercent = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    return (
      <div className="career-detail-container fade-in-up">
        {/* Detail Hero */}
        <div className="glass-card career-detail-hero">
          <div className="career-detail-badge-row">
            <button className="back-btn" onClick={() => setSelectedCareer(null)}>
              <ArrowLeft size={16} /> Back to Recommendations
            </button>
            <span className="career-match-badge" style={{ fontSize: '0.95rem' }}>
              {career.matchScore}% AI Match Score
            </span>
          </div>
          <span className="career-category">{career.category}</span>
          <h1 className="career-detail-title">{career.title}</h1>
          <p className="career-detail-desc">{career.description}</p>
        </div>

        {/* Two Column details layout */}
        <div className="detail-section-grid">
          {/* Left Column: Timeline & Schedule */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Timeline Checklist */}
            <div className="glass-card detail-block">
              <div className="detail-block-title">
                <Compass size={20} style={{ color: 'var(--primary-light)' }} />
                <span>Step-by-Step Career Roadmap ({progressPercent}% Completed)</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                Follow this sequential path from novice to professional. Mark milestones as you complete them to track your learning journey.
              </p>
              
              <div className="timeline">
                {career.roadmap.map((phase, pIdx) => {
                  // Check if all items in this phase are completed
                  const allCompleted = phase.checklist.every((_, cIdx) => 
                    completedRoadmapItems[`${career.id}-${pIdx}-${cIdx}`]
                  );
                  const anyCompleted = phase.checklist.some((_, cIdx) => 
                    completedRoadmapItems[`${career.id}-${pIdx}-${cIdx}`]
                  );
                  
                  const phaseStatusClass = allCompleted 
                    ? 'completed' 
                    : (anyCompleted ? 'active' : '');

                  return (
                    <div key={pIdx} className={`timeline-item ${phaseStatusClass}`}>
                      <div className="timeline-dot" />
                      <div className="timeline-header">
                        <span className="timeline-phase">{phase.phase}</span>
                      </div>
                      <h4 className="timeline-title">{phase.title}</h4>
                      <p className="timeline-desc">{phase.description}</p>
                      
                      <div className="checklist-group">
                        {phase.checklist.map((item, cIdx) => {
                          const isChecked = !!completedRoadmapItems[`${career.id}-${pIdx}-${cIdx}`];
                          return (
                            <div 
                              key={cIdx} 
                              className={`checklist-item ${isChecked ? 'checked' : ''}`}
                              onClick={() => toggleRoadmapItem(career.id, pIdx, cIdx)}
                            >
                              <div className="checklist-checkbox">
                                {isChecked && <CheckCircle2 size={12} style={{ color: 'var(--bg-primary)', fill: 'var(--secondary)' }} />}
                              </div>
                              <span>{item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* A Day in the Life */}
            <div className="glass-card detail-block">
              <div className="detail-block-title">
                <Calendar size={20} style={{ color: 'var(--primary-light)' }} />
                <span>A Day in the Life of a {career.title}</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Ever wondered what a typical day looks like? Here is a common hourly breakdown for this role:
              </p>
              <div className="schedule-list">
                {career.dayInLife.map((item, idx) => (
                  <div key={idx} className="schedule-row">
                    <span className="schedule-time">{item.time}</span>
                    <span>{item.task}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Salary, Resources, AI Ask */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            {/* Custom Interactive Salary Trend */}
            <div className="glass-card detail-block">
              <div className="detail-block-title">
                <IndianRupee size={20} style={{ color: 'var(--primary-light)' }} />
                <span>Salary Progression & Demand</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span className="career-salary-label">Typical Range</span>
                  <div className="career-salary-val" style={{ fontSize: '1.4rem', color: 'var(--secondary)' }}>{career.salary}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="career-salary-label">Market Demand</span>
                  <div style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--accent)' }}>{career.demand}</div>
                </div>
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <span className="career-salary-label" style={{ marginBottom: '0.5rem', display: 'block' }}>5-Year Salary Growth Projection (LPA)</span>
                <div className="chart-container">
                  {career.salaryTrend.map((salaryVal, idx) => {
                    const pctHeight = (salaryVal / 30) * 100; // max value is 30 LPA
                    return (
                      <div key={idx} className="chart-bar-wrapper">
                        <div 
                          className="chart-bar" 
                          style={{ height: `${pctHeight}%` }}
                        >
                          <div className="chart-bar-tooltip">₹{salaryVal} LPA</div>
                        </div>
                        <span className="chart-bar-label">Yr {idx + 1}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="chart-legend">
                  Hover over bars to see projected annual salary packages.
                </div>
              </div>
            </div>

            {/* Recommended Learning Resources */}
            <div className="glass-card detail-block">
              <div className="detail-block-title">
                <BookOpen size={20} style={{ color: 'var(--primary-light)' }} />
                <span>Recommended Resources</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Vetted platforms and courses to start building skills:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {career.resources.map((res, idx) => (
                  <a 
                    key={idx} 
                    href={res.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="glass-card" 
                    style={{ 
                      padding: '1rem', 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      textDecoration: 'none',
                      borderColor: 'rgba(255,255,255,0.05)',
                      background: 'rgba(255,255,255,0.01)'
                    }}
                  >
                    <div>
                      <h5 style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{res.name}</h5>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary-light)', fontWeight: '600' }}>{res.type}</span>
                    </div>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Chat Trigger CTA */}
            <div className="glass-card detail-block" style={{ background: 'var(--grad-glow)', borderColor: 'rgba(138, 79, 255, 0.2)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem' }}>Have questions about {career.title}?</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Ask our AI counselor dynamic questions about certificates, portfolio projects, or job interviews for this track.
                </p>
                <button 
                  className="btn btn-primary" 
                  onClick={() => onSelectChatCareer(career.title)}
                  style={{ width: '100%', padding: '0.7rem' }}
                >
                  <MessageSquare size={16} /> Consult AI Counselor
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // Dashboard results list
  return (
    <div className="fade-in-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Your AI Career Matches</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Based on your skills, interests, and profile choices.</p>
        </div>
        <button className="btn btn-secondary" onClick={onRetakeQuiz}>
          Retake Quiz
        </button>
      </div>

      <div className="careers-grid">
        {careers.map((career) => (
          <div key={career.id} className="glass-card career-card">
            <div className="career-card-header">
              <div>
                <span className="career-category">{career.category}</span>
                <h3 className="career-title">{career.title}</h3>
              </div>
              <span className="career-match-badge">{career.matchScore}% Match</span>
            </div>
            
            <p className="career-desc">{career.description}</p>
            
            <div className="career-tags">
              {career.tags.map((tag, idx) => (
                <span key={idx} className="career-tag">{tag}</span>
              ))}
            </div>

            <div className="career-card-footer">
              <div className="career-salary-indicator">
                <span className="career-salary-label">Est. Salary</span>
                <span className="career-salary-val">{career.salary}</span>
              </div>
              <button 
                className="btn btn-primary" 
                style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                onClick={() => setSelectedCareer(career)}
              >
                View Roadmap <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
