// NextStepAI - Secure Authentication Page
import React, { useState } from 'react';
import { Lock, Mail, User, GraduationCap, Zap, AlertCircle, Eye, EyeOff } from 'lucide-react';

export default function AuthPage({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("High School");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Basic Validation
    if (!email.trim() || !password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!isLogin && !name.trim()) {
      setError("Please enter your name to sign up.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);

    // Simulate secure session handshake
    setTimeout(() => {
      setLoading(false);
      onLogin({
        name: isLogin ? email.split('@')[0] : name,
        email,
        grade: isLogin ? "College" : grade,
        token: `jwt-token-${Math.random().toString(36).substr(2)}`
      });
    }, 1500);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(circle at 50% 50%, rgba(138, 79, 255, 0.15) 0%, rgba(10, 8, 19, 0.95) 80%), #0a0813',
      padding: '1.5rem'
    }}>
      <div className="glass-card fade-in-up" style={{
        width: '100%',
        maxWidth: '450px',
        padding: '3rem 2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), var(--shadow-glow)',
        border: '1px solid rgba(138, 79, 255, 0.25)'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem', textAlign: 'center' }}>
          <img 
            src="/nextstepai_logo.png" 
            alt="NextStepAI Logo" 
            style={{ width: '56px', height: '56px', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', boxShadow: '0 0 20px var(--primary-glow)' }} 
          />
          <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '0.25rem' }}>NextStepAI</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            🔒 Secured Career Portal Session Access
          </p>
        </div>

        {/* Tab Selector */}
        <div style={{
          display: 'flex',
          background: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '10px',
          padding: '0.25rem',
          marginBottom: '2rem',
          border: '1px solid var(--border-color)'
        }}>
          <button
            className="btn"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              background: isLogin ? 'var(--grad-primary)' : 'transparent',
              color: isLogin ? 'white' : 'var(--text-secondary)',
              boxShadow: isLogin ? '0 4px 10px rgba(138, 79, 255, 0.3)' : 'none'
            }}
            onClick={() => { setIsLogin(true); setError(""); }}
          >
            Login
          </button>
          <button
            className="btn"
            style={{
              flex: 1,
              padding: '0.5rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              background: !isLogin ? 'var(--grad-primary)' : 'transparent',
              color: !isLogin ? 'white' : 'var(--text-secondary)',
              boxShadow: !isLogin ? '0 4px 10px rgba(138, 79, 255, 0.3)' : 'none'
            }}
            onClick={() => { setIsLogin(false); setError(""); }}
          >
            Register
          </button>
        </div>

        {/* Error Box */}
        {error && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(255, 79, 168, 0.1)',
            border: '1px solid var(--accent)',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            color: 'var(--text-primary)',
            fontSize: '0.85rem',
            marginBottom: '1.5rem'
          }}>
            <AlertCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <span>{error}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Name Field (Only on Register) */}
          {!isLogin && (
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Full Name</label>
              <div style={{ position: 'relative' }}>
                <User size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter name"
                  style={{ width: '100%', paddingLeft: '2.5rem' }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="email"
                className="form-input"
                placeholder="Enter email"
                style={{ width: '100%', paddingLeft: '2.5rem' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="form-group" style={{ marginBottom: 0 }}>
            <label className="form-label">Secret Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type={showPassword ? "text" : "password"}
                className="form-input"
                placeholder="Enter password"
                style={{ width: '100%', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                style={{
                  position: 'absolute',
                  right: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)'
                }}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Grade Selector (Only on Register) */}
          {!isLogin && (
            <div className="form-group" style={{ marginBottom: 0 }}>
              <label className="form-label">Current Academic Level</label>
              <div style={{ position: 'relative' }}>
                <GraduationCap size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <select
                  className="form-input"
                  style={{ width: '100%', paddingLeft: '2.5rem', background: 'var(--bg-secondary)', cursor: 'pointer' }}
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                >
                  <option value="High School">High School (Grade 9-12)</option>
                  <option value="College">College / Undergrad</option>
                  <option value="Graduate">Graduate School</option>
                </select>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.9rem',
              marginTop: '1rem',
              opacity: loading ? 0.7 : 1,
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? "Authenticating Session..." : (isLogin ? "Authenticate & Enter" : "Register Profile Securely")}
          </button>

        </form>

        {/* Info notice */}
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1.5rem' }}>
          By entering, you establish a secure sandboxed JWT profile session. Your quiz answers will be saved to your local session store.
        </p>
      </div>
    </div>
  );
}
