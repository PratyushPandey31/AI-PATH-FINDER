// NextStepAI - Root App Component
import React, { useState } from 'react';
import { Home, Compass, MessageSquare, Cpu, Clipboard, Zap, LogOut, ShieldCheck, Award } from 'lucide-react';
import LandingPage from './components/LandingPage';
import CareerQuiz from './components/CareerQuiz';
import CareerDashboard from './components/CareerDashboard';
import AICounselor from './components/AICounselor';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import AuthPage from './components/AuthPage';
import InterviewPrep from './components/InterviewPrep';
import { calculateMatches } from './data/careersData';

export default function App() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('nextstepai_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [currentTab, setCurrentTab] = useState('home');
  const [answers, setAnswers] = useState({ interests: [], skills: [], workPrefs: [] });
  const [careers, setCareers] = useState([]);
  const [chatInitialQuestion, setChatInitialQuestion] = useState("");

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('nextstepai_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('nextstepai_user');
    // Reset other states
    setAnswers({ interests: [], skills: [], workPrefs: [] });
    setCareers([]);
    setCurrentTab('home');
  };

  const handleQuizSubmit = (quizAnswers) => {
    setAnswers(quizAnswers);
    const results = calculateMatches(quizAnswers);
    setCareers(results);
    setCurrentTab('dashboard');
  };

  const handleSelectChatCareer = (careerTitle) => {
    setChatInitialQuestion(`What are some key projects and learning resources to become a ${careerTitle}?`);
    setCurrentTab('counselor');
  };

  const clearInitialQuestion = () => {
    setChatInitialQuestion("");
  };

  const handleRetakeQuiz = () => {
    setCurrentTab('quiz');
  };

  const hasTakenQuiz = careers.length > 0;

  // Render Authentication screen if user session is not active
  if (!user) {
    return <AuthPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon">
            <Zap size={22} style={{ fill: 'white' }} />
          </div>
          <span className="sidebar-logo-text">NextStepAI</span>
        </div>

        <nav className="nav-menu">
          <li 
            className={`nav-item ${currentTab === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentTab('home')}
          >
            <Home className="nav-item-icon" /> Home
          </li>
          <li 
            className={`nav-item ${currentTab === 'quiz' ? 'active' : ''}`}
            onClick={() => setCurrentTab('quiz')}
          >
            <Clipboard className="nav-item-icon" /> Career Quiz
          </li>
          <li 
            className={`nav-item ${currentTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setCurrentTab('dashboard')}
          >
            <Compass className="nav-item-icon" /> Career Matches
          </li>
          <li 
            className={`nav-item ${currentTab === 'interview' ? 'active' : ''}`}
            onClick={() => setCurrentTab('interview')}
          >
            <Award className="nav-item-icon" /> Interview Prep
          </li>
          <li 
            className={`nav-item ${currentTab === 'counselor' ? 'active' : ''}`}
            onClick={() => setCurrentTab('counselor')}
          >
            <MessageSquare className="nav-item-icon" /> AI Counselor
          </li>
          <li 
            className={`nav-item ${currentTab === 'analyzer' ? 'active' : ''}`}
            onClick={() => setCurrentTab('analyzer')}
          >
            <Cpu className="nav-item-icon" /> Resume Strength
          </li>
        </nav>

        {/* Sidebar Footer with Logged In User Profile & Logout */}
        <div className="sidebar-footer" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="user-profile-widget" style={{ justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="user-avatar" style={{ fontSize: '0.9rem' }}>
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <div className="user-info-name" style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {user.name}
                </div>
                <div className="user-info-status">{user.grade}</div>
              </div>
            </div>
            
            <button 
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-muted)',
                padding: '0.25rem',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)'
              }}
              title="Logout Session"
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Panel Content */}
      <main className="main-content">
        
        {/* Top Navbar */}
        <header className="top-header">
          <div>
            <h1 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-heading)' }}>
              {currentTab === 'home' && "Discover Your Potential"}
              {currentTab === 'quiz' && "Career Assessment Quiz"}
              {currentTab === 'dashboard' && "Career Roadmap Dashboard"}
              {currentTab === 'interview' && "Infosys Tech Mock Prep"}
              {currentTab === 'counselor' && "AI Advisor Console"}
              {currentTab === 'analyzer' && "Resume & Skill Match Audit"}
            </h1>
            <span className="header-title-desc">
              {currentTab === 'home' && "Your personalized career path architect powered by AI."}
              {currentTab === 'quiz' && "Complete the questions below to map your key talent zones."}
              {currentTab === 'dashboard' && "Track your customized roadmaps and inspect salaries."}
              {currentTab === 'interview' && "Test your technical communication and coding concepts to crack recruitments."}
              {currentTab === 'counselor' && "Consult with our AI career guide for details on skill building."}
              {currentTab === 'analyzer' && "Analyze your achievements to optimize keywords and find gaps."}
            </span>
          </div>

          {/* Secure Session Indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(0, 240, 255, 0.05)',
            border: '1px solid rgba(0, 240, 255, 0.15)',
            padding: '0.4rem 0.8rem',
            borderRadius: '50px',
            fontSize: '0.75rem',
            color: 'var(--secondary)'
          }}>
            <ShieldCheck size={14} />
            <span>Secure JWT Token Session Active</span>
          </div>
        </header>

        {/* Dynamic Navigation Content */}
        <div style={{ flexGrow: 1 }}>
          {currentTab === 'home' && (
            <LandingPage onStartQuiz={() => setCurrentTab('quiz')} />
          )}

          {currentTab === 'quiz' && (
            <CareerQuiz onSubmit={handleQuizSubmit} />
          )}

          {currentTab === 'dashboard' && (
            <CareerDashboard 
              careers={careers} 
              onRetakeQuiz={handleRetakeQuiz} 
              onSelectChatCareer={handleSelectChatCareer}
            />
          )}

          {currentTab === 'interview' && (
            <InterviewPrep highestMatchCareer={careers[0]} />
          )}

          {currentTab === 'counselor' && (
            <AICounselor 
              userProfile={answers}
              initialQuestion={chatInitialQuestion}
              clearInitialQuestion={clearInitialQuestion}
            />
          )}

          {currentTab === 'analyzer' && (
            <ResumeAnalyzer />
          )}
        </div>

      </main>
    </div>
  );
}
