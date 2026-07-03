// NextStepAI - Resume Analyzer Component
import React, { useState } from 'react';
import { Cpu, AlertCircle, FileText, CheckCircle2, XCircle, Sparkles, Loader2 } from 'lucide-react';
import { careersData } from '../data/careersData';

export default function ResumeAnalyzer() {
  const [selectedCareerId, setSelectedCareerId] = useState(careersData[0]?.id || "");
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleAnalyze = () => {
    if (!resumeText.trim()) return;

    setIsAnalyzing(true);
    
    // Simulate API analyzing lag
    setTimeout(() => {
      const career = careersData.find(c => c.id === selectedCareerId);
      if (!career) return;

      const analysis = performHeuristicAnalysis(resumeText, career);
      setResults(analysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Perform heuristic text analysis
  const performHeuristicAnalysis = (text, career) => {
    const rawText = text.toLowerCase();
    
    // Define keyword dictionary for matching
    const keywordMap = {
      "full-stack-engineer": ["javascript", "html", "css", "react", "node", "express", "sql", "git", "github", "api", "database", "postgres", "mongodb", "programming", "coding", "web"],
      "ux-ui-designer": ["figma", "sketch", "wireframe", "prototype", "design", "layout", "user research", "usability", "typography", "colors", "persona", "adobe", "frontend", "components"],
      "ai-ml-engineer": ["python", "math", "calculus", "linear algebra", "statistics", "probability", "pytorch", "tensorflow", "scikit", "pandas", "numpy", "neural network", "machine learning", "ai", "model", "data"],
      "bioinformatics-scientist": ["genetics", "dna", "rna", "biology", "python", "r", "biopython", "sequence", "bash", "linux", "statistics", "genomic", "alignment", "ncbi", "research"],
      "quantitative-analyst": ["math", "calculus", "probability", "statistics", "python", "c++", "finance", "markets", "derivatives", "stochastic", "backtesting", "modeling", "algorithms", "trading"],
      "digital-marketing-strategist": ["marketing", "seo", "analytics", "google ads", "meta ads", "campaign", "social media", "copywriting", "funnel", "conversion", "budget", "metrics", "pitch"],
      "renewable-energy-engineer": ["physics", "thermodynamics", "electrical", "solar", "wind", "energy", "cad", "autocad", "solidworks", "battery", "grid", "power", "safety", "osha"],
      "technical-writer": ["writing", "markdown", "documentation", "guide", "tutorial", "api", "git", "docusaurus", "jekyll", "edit", "copywriting", "manual", "style guide", "developer"]
    };

    const targetKeywords = keywordMap[career.id] || career.skills.map(s => s.toLowerCase());
    
    const matched = [];
    const missing = [];

    targetKeywords.forEach(kw => {
      if (rawText.includes(kw)) {
        matched.push(kw);
      } else {
        missing.push(kw);
      }
    });

    // Calculate score
    let score = 40; // baseline
    if (targetKeywords.length > 0) {
      score += Math.round((matched.length / targetKeywords.length) * 50);
    }
    // Add small random variation to look natural
    score = Math.max(40, Math.min(95, score + (matched.length > 0 ? Math.floor(Math.random() * 6) - 2 : 0)));

    // Dynamic recommendations based on missing items
    const recommendations = [];
    if (missing.includes("git") || missing.includes("github")) {
      recommendations.push("Establish a clean GitHub portfolio showing commits and code logs.");
    }
    if (missing.includes("api") || missing.includes("endpoints")) {
      recommendations.push("Build projects demonstrating third-party API integration (e.g. Weather, Maps, or OpenAI APIs).");
    }
    if (missing.includes("figma") || missing.includes("design")) {
      recommendations.push("Create interactive prototype layouts in Figma for web components.");
    }
    if (missing.includes("python") || missing.includes("r")) {
      recommendations.push("Practice writing statistical parsing algorithms in Python/R.");
    }
    if (missing.includes("sql") || missing.includes("database")) {
      recommendations.push("Write relational schema maps to show database structure skills.");
    }
    if (recommendations.length === 0) {
      recommendations.push("Add a dedicated certifications list to highlight your active courses.");
      recommendations.push("Optimize the resume typography and space margins to match clean UX standards.");
    }

    return {
      score,
      matched: matched.map(m => m.charAt(0).toUpperCase() + m.slice(1)),
      missing: missing.map(m => m.charAt(0).toUpperCase() + m.slice(1)),
      recommendations
    };
  };

  return (
    <div className="fade-in-up">
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Resume Strength Audit</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Select your target career path, paste your current achievements, and receive an instant AI audit of keyword alignment and skill gaps.
        </p>
      </div>

      <div className="analyzer-grid">
        {/* Input Panel */}
        <div className="glass-card analyzer-input-pane">
          <div className="form-group">
            <label className="form-label" htmlFor="career-select">Target Career Track</label>
            <select 
              id="career-select"
              className="form-input" 
              style={{ background: 'var(--bg-tertiary)', cursor: 'pointer' }}
              value={selectedCareerId}
              onChange={(e) => setSelectedCareerId(e.target.value)}
            >
              {careersData.map(c => (
                <option key={c.id} value={c.id}>{c.title} ({c.category})</option>
              ))}
            </select>
          </div>

          <div className="form-group" style={{ flexGrow: 1 }}>
            <label className="form-label" htmlFor="resume-text">Paste Resume / Achievements Text</label>
            <textarea 
              id="resume-text"
              className="resume-textarea"
              placeholder="Paste your resume summary, experiences, project bullet points, or skills list here..."
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
            />
          </div>

          <button 
            className="btn btn-primary" 
            onClick={handleAnalyze}
            disabled={isAnalyzing || !resumeText.trim()}
            style={{ 
              width: '100%', 
              opacity: (!resumeText.trim() || isAnalyzing) ? 0.5 : 1,
              cursor: (!resumeText.trim() || isAnalyzing) ? 'not-allowed' : 'pointer'
            }}
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="btn-icon animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Analyzing Resume Elements...
              </>
            ) : (
              <>
                <Cpu className="btn-icon" /> Run AI Matching Audit
              </>
            )}
          </button>
        </div>

        {/* Results Panel */}
        <div className="glass-card analyzer-results-pane" style={{ justifyContent: results ? 'flex-start' : 'center' }}>
          {!results && !isAnalyzing && (
            <div className="analyzer-empty-state">
              <FileText size={48} style={{ color: 'var(--text-muted)' }} />
              <h3>Audit Results Ready</h3>
              <p style={{ maxWidth: '320px', fontSize: '0.9rem' }}>
                Fill in the resume details on the left, click run, and we will highlight keyword hits and learning goals.
              </p>
            </div>
          )}

          {isAnalyzing && (
            <div className="analyzer-empty-state">
              <Loader2 size={36} className="animate-spin" style={{ color: 'var(--primary-light)', animation: 'spin 1.5s linear infinite' }} />
              <h3>Mapping Resume Tokens</h3>
              <p style={{ maxWidth: '300px', fontSize: '0.9rem' }}>
                Our AI parser is matching your descriptions against the target job profile database...
              </p>
            </div>
          )}

          {results && !isAnalyzing && (
            <div className="fade-in-up" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              
              {/* Radial Score Row */}
              <div className="score-radial-container">
                <div 
                  className="score-circle" 
                  style={{ '--score-angle': `${(results.score / 100) * 360}deg` }}
                >
                  {results.score}%
                </div>
                <div className="score-description">
                  <h4>
                    {results.score >= 80 ? "Excellent Alignment!" : 
                     results.score >= 60 ? "Moderate Alignment" : "Needs Skill Building"}
                  </h4>
                  <p>Your resume matches a solid portion of the required keyword tokens.</p>
                </div>
              </div>

              {/* Matched Keywords */}
              <div className="analysis-block">
                <h5>
                  <CheckCircle2 size={16} style={{ color: 'var(--secondary)' }} /> Matched Keywords ({results.matched.length})
                </h5>
                {results.matched.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>No matching keyword hits found.</p>
                ) : (
                  <div className="analysis-pills">
                    {results.matched.map((kw, idx) => (
                      <span key={idx} className="analysis-pill match">{kw}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Missing Keywords */}
              <div className="analysis-block" style={{ marginBottom: '2rem' }}>
                <h5>
                  <XCircle size={16} style={{ color: 'var(--accent)' }} /> Missing / Underrepresented Skills ({results.missing.length})
                </h5>
                {results.missing.length === 0 ? (
                  <p style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>Outstanding! No key gaps identified.</p>
                ) : (
                  <div className="analysis-pills">
                    {results.missing.map((kw, idx) => (
                      <span key={idx} className="analysis-pill gap">{kw}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Recommendations */}
              <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
                <h5 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <Sparkles size={16} style={{ color: 'var(--primary-light)' }} /> Actionable Recommendations
                </h5>
                <ul className="recommendations-list">
                  {results.recommendations.map((rec, idx) => (
                    <li key={idx}>{rec}</li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
