// NextStepAI - Root App Component
import React, { useState } from 'react';
import { Home, Compass, MessageSquare, Cpu, Clipboard, Zap } from 'lucide-react';
import LandingPage from './components/LandingPage';
import CareerQuiz from './components/CareerQuiz';
import CareerDashboard from './components/CareerDashboard';
import AICounselor from './components/AICounselor';
import ResumeAnalyzer from './components/ResumeAnalyzer';
import { calculateMatches } from './data/careersData';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [answers, setAnswers] = useState({ interests: [], skills: [], workPrefs: [] });
  const [careers, setCareers] = useState([]);
  const [chatInitialQuestion, setChatInitialQuestion] = useState("");

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

        <div className="sidebar-footer">
          <div className="user-profile-widget">
            <div className="user-avatar">S</div>
            <div>
              <div className="user-info-name">Student Profile</div>
              <div className="user-info-status">
                {hasTakenQuiz ? "✓ Quiz Completed" : "• Assessment Pending"}
              </div>
            </div>
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
              {currentTab === 'counselor' && "AI Advisor Console"}
              {currentTab === 'analyzer' && "Resume & Skill Match Audit"}
            </h1>
            <span className="header-title-desc">
              {currentTab === 'home' && "Your personalized career path architect powered by AI."}
              {currentTab === 'quiz' && "Complete the questions below to map your key talent zones."}
              {currentTab === 'dashboard' && "Track your customized roadmaps and inspect salaries."}
              {currentTab === 'counselor' && "Consult with our AI career guide for details on skill building."}
              {currentTab === 'analyzer' && "Analyze your achievements to optimize keywords and find gaps."}
            </span>
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
