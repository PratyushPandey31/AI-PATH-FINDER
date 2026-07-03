// NextStepAI - Technical Interview Simulator Component
import React, { useState } from 'react';
import { HelpCircle, AlertCircle, Award, Sparkles, CheckCircle2, ChevronRight, Loader2, ArrowRight } from 'lucide-react';
import { careersData } from '../data/careersData';

const INTERVIEW_QUESTIONS = {
  "full-stack-engineer": [
    {
      q: "Explain how React's Virtual DOM works and how it optimizes UI updates.",
      keywords: ["virtual dom", "reconciliation", "diffing", "dom tree", "batch"],
      ideal: "React creates an in-memory lightweight representation of the real DOM called the Virtual DOM. When state changes, React builds a new Virtual DOM tree, compares it with the previous one (using a Diffing algorithm called Reconciliation), and batches the minimal set of changes to update the real browser DOM. This avoids expensive direct DOM manipulation operations.",
      points: ["1. Virtual DOM is a lightweight JS copy of the real DOM.", "2. Reconciliation finds differences (diffing).", "3. Batching groups changes to minimize repaints."]
    },
    {
      q: "What is CORS (Cross-Origin Resource Sharing) and how do you resolve it in Express?",
      keywords: ["cors", "origin", "header", "middleware", "express"],
      ideal: "CORS is a security mechanism enforced by browsers that restricts web pages from making requests to a different domain than the one that served the web page. In Express, you resolve this by using the `cors` middleware package (`app.use(cors())`) or setting the 'Access-Control-Allow-Origin' header to allow specified client domains.",
      points: ["1. Browser security mechanism.", "2. Restricts cross-origin requests.", "3. Resolved via Express cors middleware or headers."]
    }
  ],
  "ux-ui-designer": [
    {
      q: "How do you apply Jakob's Law of User Experience in your interface layouts?",
      keywords: ["jakob", "expect", "familiar", "pattern", "usability"],
      ideal: "Jakob's Law states that users spend most of their time on other websites, meaning they expect your site to work similarly to others they already know. By using familiar design patterns (e.g. search bar at the top, cart icon in top-right), you reduce cognitive load, allowing users to focus on content rather than learning how to navigate your interface.",
      points: ["1. Users prefer familiar navigational layouts.", "2. Reduces initial learning curve / cognitive load.", "3. Encourages standard design conventions."]
    }
  ],
  "ai-ml-engineer": [
    {
      q: "Explain how gradient descent works and the role of the learning rate.",
      keywords: ["gradient", "descent", "loss", "learning rate", "weights", "minimum"],
      ideal: "Gradient Descent is an optimization algorithm used to minimize a model's loss function by iteratively updating weights. The gradient calculates the direction of steepest increase in loss; we move in the opposite direction. The learning rate controls the step size taken towards the minimum. If too large, it can overshoot; if too small, training is extremely slow.",
      points: ["1. Optimization algorithm to minimize loss.", "2. Moves opposite to the gradient slope.", "3. Learning rate dictates step step boundaries."]
    }
  ],
  "quantitative-analyst": [
    {
      q: "What is Value at Risk (VaR) and what are its main calculation methodologies?",
      keywords: ["var", "value at risk", "loss", "historical", "parametric", "monte carlo"],
      ideal: "Value at Risk (VaR) measures the maximum potential loss in a portfolio over a specific time horizon at a given confidence level (e.g., 99%). The three main methodologies are: 1. Historical Simulation (using actual past movements), 2. Parametric/Variance-Covariance (assuming normal distribution), and 3. Monte Carlo Simulation (using randomized price path algorithms).",
      points: ["1. Quantifies risk of maximum loss threshold.", "2. Time horizon and confidence levels are key inputs.", "3. Calculated via Historical, Parametric, or Monte Carlo models."]
    }
  ]
};

export default function InterviewPrep({ highestMatchCareer }) {
  const defaultCareerId = highestMatchCareer?.id || careersData[0]?.id || "full-stack-engineer";
  const [selectedCareerId, setSelectedCareerId] = useState(defaultCareerId);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const careerQuestions = INTERVIEW_QUESTIONS[selectedCareerId] || [
    {
      q: "Describe your experience handling complex data processing requirements and debugging logic bottlenecks.",
      keywords: ["data", "debug", "logic", "optimize", "process"],
      ideal: "Effective debugging requires isolating variables, analyzing logs, and writing regression tests. Optimization involves identifying bottlenecks (e.g., nested loops or database queries) and implementing better structures (indexing, caching, or lower time-complexity algorithms).",
      points: ["1. Isolate errors using testing/logs.", "2. Find bottlenecks in database or loops.", "3. Improve time complexity or use caching."]
    }
  ];

  const currentQuestion = careerQuestions[questionIdx] || careerQuestions[0];

  const handleCareerChange = (id) => {
    setSelectedCareerId(id);
    setQuestionIdx(0);
    setUserAnswer("");
    setFeedback(null);
  };

  const handleNextQuestion = () => {
    setQuestionIdx(prev => (prev + 1) % careerQuestions.length);
    setUserAnswer("");
    setFeedback(null);
  };

  const handleAnalyze = () => {
    if (!userAnswer.trim()) return;

    setIsAnalyzing(true);

    setTimeout(() => {
      const ans = userAnswer.toLowerCase();
      const hits = currentQuestion.keywords.filter(kw => ans.includes(kw));
      
      // Calculate grade score out of 10
      let score = 4; // base score for effort
      if (currentQuestion.keywords.length > 0) {
        score += Math.round((hits.length / currentQuestion.keywords.length) * 5);
      }
      if (userAnswer.length > 100) score += 1;
      score = Math.min(10, score);

      // Strengths & gaps
      const strengths = hits.length > 0 
        ? `You successfully incorporated key concepts like: ${hits.join(", ")}.`
        : "You structured your response well but missed some technical vocabulary.";
        
      const missingKeywords = currentQuestion.keywords.filter(kw => !ans.includes(kw));
      const improvements = missingKeywords.length > 0
        ? `To improve, try incorporating these industry terms: ${missingKeywords.join(", ")}.`
        : "Excellent keyword coverage. Your answer matches the ideal senior-engineer standard.";

      setFeedback({
        score,
        strengths,
        improvements,
        ideal: currentQuestion.ideal,
        points: currentQuestion.points
      });

      setIsAnalyzing(false);
    }, 1800);
  };

  return (
    <div className="fade-in-up">
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Infosys Prep: Technical Interview Simulator</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Practice technical interview questions calibrated for your target career paths. Receive automated scoring, keyword checks, and ideal answer sheets to crack your interviews.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem' }}>
        {/* Left Column: Active Question & Input */}
        <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label className="form-label">Practice Career Track</label>
            <select 
              className="form-input" 
              style={{ background: 'var(--bg-tertiary)', cursor: 'pointer' }}
              value={selectedCareerId}
              onChange={(e) => handleCareerChange(e.target.value)}
            >
              {careersData.map(c => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-color)', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-10px', left: '15px', background: 'var(--bg-secondary)', padding: '0 0.5rem', fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary-light)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <HelpCircle size={12} /> Question {questionIdx + 1}
            </div>
            <p style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-primary)', lineHeight: '1.5' }}>
              {currentQuestion.q}
            </p>
          </div>

          <div className="form-group" style={{ flexGrow: 1, minHeight: '200px' }}>
            <label className="form-label">Your Technical Explanation</label>
            <textarea 
              className="resume-textarea"
              style={{ margin: 0, minHeight: '180px' }}
              placeholder="Type your answer here in detail. Be technical and precise..."
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button 
              className="btn btn-secondary"
              onClick={handleNextQuestion}
              style={{ flex: 1 }}
            >
              Skip / Next Q <ChevronRight size={16} />
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleAnalyze}
              disabled={isAnalyzing || !userAnswer.trim()}
              style={{ 
                flex: 1.5,
                opacity: (!userAnswer.trim() || isAnalyzing) ? 0.6 : 1,
                cursor: (!userAnswer.trim() || isAnalyzing) ? 'not-allowed' : 'pointer'
              }}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="btn-icon animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Analyzing Response...
                </>
              ) : (
                <>
                  <Sparkles className="btn-icon" /> Evaluate My Answer
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: AI Feedback Panel */}
        <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: feedback ? 'flex-start' : 'center' }}>
          {!feedback && !isAnalyzing && (
            <div className="analyzer-empty-state">
              <Award size={48} style={{ color: 'var(--text-muted)' }} />
              <h3>Evaluation Dashboard</h3>
              <p style={{ maxWidth: '320px', fontSize: '0.9rem' }}>
                Write your technical explanation on the left and submit it to see your score, keyword hits, and feedback cards.
              </p>
            </div>
          )}

          {isAnalyzing && (
            <div className="analyzer-empty-state">
              <Loader2 size={36} className="animate-spin" style={{ color: 'var(--secondary)', animation: 'spin 1.5s linear infinite' }} />
              <h3>Calculating Concept Alignment</h3>
              <p style={{ maxWidth: '300px', fontSize: '0.9rem' }}>
                Evaluating description terms against the ideal semantic answer card...
              </p>
            </div>
          )}

          {feedback && !isAnalyzing && (
            <div className="fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              {/* Score Header */}
              <div className="score-radial-container" style={{ background: 'rgba(0, 240, 255, 0.05)', borderColor: 'rgba(0, 240, 255, 0.2)' }}>
                <div 
                  className="score-circle" 
                  style={{ 
                    '--score-angle': `${(feedback.score / 10) * 360}deg`, 
                    boxShadow: '0 0 15px rgba(0, 240, 255, 0.1)',
                    background: 'radial-gradient(circle, var(--bg-secondary) 50%, transparent 60%), conic-gradient(var(--secondary) var(--score-angle), var(--bg-tertiary) 0deg)'
                  }}
                >
                  {feedback.score}/10
                </div>
                <div className="score-description">
                  <h4 style={{ color: 'var(--text-primary)' }}>
                    {feedback.score >= 8 ? "Infosys Level: Passed!" : 
                     feedback.score >= 6 ? "Good Effort: Close!" : "Needs Study"}
                  </h4>
                  <p>Keyword match analysis for technical recruitment.</p>
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  <CheckCircle2 size={15} style={{ color: 'var(--secondary)' }} /> Conceptual Strengths
                </h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{feedback.strengths}</p>
              </div>

              {/* Improvements */}
              <div>
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  <AlertCircle size={15} style={{ color: 'var(--accent)' }} /> Gaps & Missing Terms
                </h5>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{feedback.improvements}</p>
              </div>

              {/* Ideal Answer Sheet */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', marginBottom: '0.5rem', color: 'var(--primary-light)' }}>
                  <Sparkles size={15} /> Ideal Technical Answer Card
                </h5>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)', background: 'rgba(255, 255, 255, 0.015)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '8px', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                  {feedback.ideal}
                </p>
                
                <h6 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Key Marks Required:</h6>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {feedback.points.map((pt, idx) => (
                    <span key={idx} style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'flex', gap: '0.25rem' }}>
                      <ArrowRight size={10} style={{ marginTop: '3px', color: 'var(--secondary)' }} /> {pt}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
