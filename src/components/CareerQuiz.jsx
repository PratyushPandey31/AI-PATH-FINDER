// NextStepAI - Career Quiz Component
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

const INTERESTS = [
  { id: 'Technology', label: 'Technology', desc: 'Coding, software, networking, hardware systems.' },
  { id: 'Creative Arts', label: 'Creative Arts', desc: 'UX/UI design, graphic arts, layouts, visual storytelling.' },
  { id: 'Business & Finance', label: 'Business & Finance', desc: 'Strategy, budget management, marketing, financial markets.' },
  { id: 'Science', label: 'Science', desc: 'Genetics, physics, bio-tech, clean energy networks.' },
  { id: 'Writing & Humanities', label: 'Writing & Humanities', desc: 'Documentation, articles, research summaries, messaging.' }
];

const SKILLS = [
  { id: 'Coding', label: 'Coding & Logic', desc: 'Writing clean code, algorithms, structural system building.' },
  { id: 'Problem Solving', label: 'Critical Thinking', desc: 'Debugging errors, fixing complex bottlenecks, logic tests.' },
  { id: 'Design', label: 'Design & Visuals', desc: 'Creating neat layouts, color schemes, vector models.' },
  { id: 'Writing', label: 'Clear Writing', desc: 'Summarizing topics, writing tutorials, documentation.' },
  { id: 'Math/Analysis', label: 'Data & Analytics', desc: 'Plotting tables, statistical calculations, backtesting.' },
  { id: 'Communication', label: 'Communication', desc: 'Pitching plans, presenting metrics, user interviewing.' },
  { id: 'Leadership', label: 'Leadership', desc: 'Managing budgets, leading sites, scheduling tasks.' }
];

const PREFERENCES = [
  { id: 'Remote', label: 'Remote / Hybrid Work', desc: 'Value home office setups and flexible work hour schedules.' },
  { id: 'High Salary', label: 'High Earning Potential', desc: 'Prioritize roles with rapid financial growth and bonuses.' },
  { id: 'Creative', label: 'Creative Autonomy', desc: 'Prefer designing new templates over following fixed manuals.' },
  { id: 'Growth', label: 'High Growth Field', desc: 'Desire spaces with booming job opportunities and research.' }
];

export default function CareerQuiz({ onSubmit }) {
  const [step, setStep] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedPrefs, setSelectedPrefs] = useState([]);

  const toggleInterest = (id) => {
    setSelectedInterests(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const toggleSkill = (id) => {
    setSelectedSkills(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const togglePref = (id) => {
    setSelectedPrefs(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const nextStep = () => {
    if (step < 2) {
      setStep(prev => prev + 1);
    } else {
      // Submit
      onSubmit({
        interests: selectedInterests,
        skills: selectedSkills,
        workPrefs: selectedPrefs
      });
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(prev => prev - 1);
    }
  };

  const progressPercent = ((step + 1) / 3) * 100;

  return (
    <div className="quiz-container fade-in-up">
      {/* Step Info */}
      <div className="quiz-header">
        <div>
          <span style={{ color: 'var(--primary-light)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>
            Assessment Step {step + 1} of 3
          </span>
          <h2 style={{ fontSize: '1.75rem', marginTop: '0.25rem' }}>
            {step === 0 && "What areas excite you most?"}
            {step === 1 && "Which skills do you enjoy using?"}
            {step === 2 && "What are your career preferences?"}
          </h2>
        </div>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          {step === 0 && `${selectedInterests.length} selected`}
          {step === 1 && `${selectedSkills.length} selected`}
          {step === 2 && `${selectedPrefs.length} selected`}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="quiz-progress-bar-container">
        <div 
          className="quiz-progress-bar-fill" 
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Options Grid */}
      <div className="options-grid">
        {step === 0 && INTERESTS.map(item => {
          const isSel = selectedInterests.includes(item.id);
          return (
            <div 
              key={item.id} 
              className={`glass-card option-card ${isSel ? 'selected' : ''}`}
              onClick={() => toggleInterest(item.id)}
            >
              <div className="option-checkbox">
                {isSel && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="option-card-content">
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}

        {step === 1 && SKILLS.map(item => {
          const isSel = selectedSkills.includes(item.id);
          return (
            <div 
              key={item.id} 
              className={`glass-card option-card ${isSel ? 'selected' : ''}`}
              onClick={() => toggleSkill(item.id)}
            >
              <div className="option-checkbox">
                {isSel && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="option-card-content">
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}

        {step === 2 && PREFERENCES.map(item => {
          const isSel = selectedPrefs.includes(item.id);
          return (
            <div 
              key={item.id} 
              className={`glass-card option-card ${isSel ? 'selected' : ''}`}
              onClick={() => togglePref(item.id)}
            >
              <div className="option-checkbox">
                {isSel && <Check size={14} strokeWidth={3} />}
              </div>
              <div className="option-card-content">
                <h4>{item.label}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Navigation */}
      <div className="quiz-footer">
        <button 
          className="btn btn-secondary" 
          onClick={prevStep}
          style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
        >
          <ArrowLeft className="btn-icon" /> Back
        </button>

        <button 
          className="btn btn-primary" 
          onClick={nextStep}
          disabled={
            (step === 0 && selectedInterests.length === 0) ||
            (step === 1 && selectedSkills.length === 0)
          }
          style={{
            opacity: ((step === 0 && selectedInterests.length === 0) || (step === 1 && selectedSkills.length === 0)) ? 0.5 : 1,
            cursor: ((step === 0 && selectedInterests.length === 0) || (step === 1 && selectedSkills.length === 0)) ? 'not-allowed' : 'pointer'
          }}
        >
          {step === 2 ? 'Generate My Careers' : 'Next Step'} <ArrowRight className="btn-icon" />
        </button>
      </div>
    </div>
  );
}
