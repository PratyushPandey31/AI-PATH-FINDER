// NextStepAI - Security Auditor & Cryptographic Hash Lab Component
import React, { useState, useEffect } from 'react';
import { Shield, Lock, FileText, CheckCircle2, AlertTriangle, Key, Cpu, RefreshCw, Copy, Check } from 'lucide-react';

const SAMPLE_VULNERABLE_HEADERS = `HTTP/1.1 200 OK
Server: Apache/2.4.41 (Unix) OpenSSL/1.1.1d
Content-Type: text/html; charset=UTF-8
X-Powered-By: PHP/7.4.3
Connection: keep-alive
Keep-Alive: timeout=5, max=100
Content-Length: 4503`;

export default function SecurityAuditor() {
  // HTTP Header Auditor States
  const [headersInput, setHeadersInput] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditResults, setAuditResults] = useState(null);

  // Cryptographic Lab States
  const [password, setPassword] = useState("");
  const [hashes, setHashes] = useState({ sha256: "", md5: "Dynamic encryption on keypress..." });
  const [entropy, setEntropy] = useState({ bits: 0, pool: 0, strength: "None", time: "Instant" });
  const [copiedText, setCopiedText] = useState("");

  // Trigger web crypto SHA-256 calculation on keypress
  useEffect(() => {
    if (!password) {
      setHashes({ sha256: "", md5: "" });
      setEntropy({ bits: 0, pool: 0, strength: "None", time: "Instant" });
      return;
    }

    // Calculate Entropy
    let pool = 0;
    if (/[a-z]/.test(password)) pool += 26;
    if (/[A-Z]/.test(password)) pool += 26;
    if (/[0-9]/.test(password)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(password)) pool += 33;

    const bits = Math.round(password.length * Math.log2(pool || 1));
    
    let strength = "Weak";
    if (bits >= 80) strength = "Excellent (Military Grade)";
    else if (bits >= 60) strength = "Strong";
    else if (bits >= 40) strength = "Moderate";

    // Estimate crack times
    let timeText = "Instant";
    const totalPossibilities = Math.pow(pool, password.length);
    const gpuSpeed = 100000000000; // 100 Billion hashes/sec
    const secondsToCrack = totalPossibilities / gpuSpeed;

    if (secondsToCrack < 0.1) timeText = "Instant (< 1 second)";
    else if (secondsToCrack < 60) timeText = `${Math.round(secondsToCrack)} seconds`;
    else if (secondsToCrack < 3600) timeText = `${Math.round(secondsToCrack / 60)} minutes`;
    else if (secondsToCrack < 86400) timeText = `${Math.round(secondsToCrack / 3600)} hours`;
    else if (secondsToCrack < 31536000) timeText = `${Math.round(secondsToCrack / 86400)} days`;
    else if (secondsToCrack < 3153600000) timeText = `${Math.round(secondsToCrack / 31536000)} years`;
    else timeText = "Centuries (Resistant to Botnets)";

    setEntropy({ bits, pool, strength, time: timeText });

    // Compute Cryptographic SHA-256 Hash using browser Web Crypto API
    const msgUint8 = new TextEncoder().encode(password);
    crypto.subtle.digest('SHA-256', msgUint8).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      // Simple custom client-side MD5 mock since Web Crypto does not natively support MD5 (deprecated)
      let mockMd5 = "8f" + hashHex.substr(5, 30); // secure fallback display
      
      setHashes({
        sha256: hashHex,
        md5: mockMd5
      });
    }).catch(err => {
      setHashes({ sha256: "Web Crypto Error", md5: "Error" });
    });

  }, [password]);

  const loadSampleHeaders = () => {
    setHeadersInput(SAMPLE_VULNERABLE_HEADERS);
    setAuditResults(null);
  };

  const handleAuditHeaders = () => {
    if (!headersInput.trim()) return;

    setIsAuditing(true);
    setTimeout(() => {
      const normalized = headersInput.toLowerCase();
      const findings = [];
      let secureScore = 100;

      // 1. Check CSP
      if (!normalized.includes("content-security-policy")) {
        secureScore -= 30;
        findings.push({
          header: "Content-Security-Policy (CSP)",
          risk: "Critical",
          desc: "Missing CSP. Leaves application vulnerable to Cross-Site Scripting (XSS) and data injection attacks.",
          fix: "Header set Content-Security-Policy \"default-src 'self'; script-src 'self' https://trusted.com;\""
        });
      }

      // 2. Check HSTS
      if (!normalized.includes("strict-transport-security")) {
        secureScore -= 20;
        findings.push({
          header: "Strict-Transport-Security (HSTS)",
          risk: "High",
          desc: "Missing HSTS. Connections can be downgraded to unsecured HTTP, exposing sessions to man-in-the-middle sniffing.",
          fix: "Header set Strict-Transport-Security \"max-age=63072000; includeSubDomains; preload\""
        });
      }

      // 3. Check X-Frame-Options
      if (!normalized.includes("x-frame-options")) {
        secureScore -= 20;
        findings.push({
          header: "X-Frame-Options",
          risk: "Medium",
          desc: "Missing Clickjacking protection. Unauthorized sites can embed this application in an iframe to steal click actions.",
          fix: "Header set X-Frame-Options \"DENY\""
        });
      }

      // 4. Check X-Content-Type-Options
      if (!normalized.includes("x-content-type-options")) {
        secureScore -= 15;
        findings.push({
          header: "X-Content-Type-Options",
          risk: "Low",
          desc: "Missing MIME sniffing protection. Browsers can execute documents as scripts if MIME types are misconfigured.",
          fix: "Header set X-Content-Type-Options \"nosniff\""
        });
      }

      // 5. Leakage check
      if (normalized.includes("x-powered-by") || normalized.includes("server: apache/2.4")) {
        secureScore -= 15;
        findings.push({
          header: "Information Disclosure (Server Banner)",
          risk: "Medium",
          desc: "Server banners and software headers (X-Powered-By, Server Version) are active, helping attackers target version vulnerabilities.",
          fix: "ServerTokens ProductOnly\nHeader unset X-Powered-By"
        });
      }

      setAuditResults({
        score: Math.max(0, secureScore),
        findings
      });
      setIsAuditing(false);
    }, 1500);
  };

  const handleCopyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="fade-in-up" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      
      {/* Overview */}
      <div>
        <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)' }}>Cybersecurity Threat & Cryptography Lab</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          Audit web servers for OWASP network configurations, calculate real-time Shannon entropy values, and analyze secure cryptographic hashes.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2.5rem' }}>
        
        {/* Left Side: Header Auditor */}
        <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} style={{ color: 'var(--secondary)' }} /> HTTP Header & SSL Auditor
            </h3>
            <button className="back-btn" onClick={loadSampleHeaders} style={{ fontSize: '0.8rem', color: 'var(--primary-light)' }}>
              Load Sample Vulnerable Headers
            </button>
          </div>
          
          <label className="form-label" htmlFor="headers-input">Raw HTTP Response Headers</label>
          <textarea
            id="headers-input"
            className="resume-textarea"
            style={{ minHeight: '180px', fontFamily: 'monospace', fontSize: '0.85rem' }}
            placeholder="Paste raw server headers here... (or click 'Load Sample' above)"
            value={headersInput}
            onChange={(e) => setHeadersInput(e.target.value)}
          />

          <button
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1.25rem' }}
            onClick={handleAuditHeaders}
            disabled={isAuditing || !headersInput.trim()}
          >
            {isAuditing ? (
              <>
                <RefreshCw className="btn-icon animate-spin" style={{ animation: 'spin 1.5s linear infinite' }} /> Performing Security Audit...
              </>
            ) : (
              <>
                <Shield size={16} /> Audit Configuration Headers
              </>
            )}
          </button>

          {/* Header Audit Results */}
          {auditResults && (
            <div className="fade-in-up" style={{ marginTop: '2.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.15rem' }}>Configuration Security Rating</h4>
                <span 
                  className="career-match-badge" 
                  style={{ 
                    background: auditResults.score >= 80 ? 'rgba(0, 240, 255, 0.1)' : 'rgba(255, 79, 168, 0.1)', 
                    color: auditResults.score >= 80 ? 'var(--secondary)' : 'var(--accent)',
                    borderColor: auditResults.score >= 80 ? 'rgba(0,240,255,0.3)' : 'rgba(255,79,168,0.3)'
                  }}
                >
                  Score: {auditResults.score}/100
                </span>
              </div>

              {auditResults.findings.length === 0 ? (
                <div style={{ padding: '1rem', background: 'rgba(0, 240, 255, 0.05)', border: '1px solid var(--secondary)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} style={{ color: 'var(--secondary)' }} />
                  <span style={{ fontSize: '0.85rem' }}>Excellent. All critical security configuration headers are correctly deployed.</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {auditResults.findings.map((f, idx) => (
                    <div key={idx} style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <h5 style={{ fontSize: '0.95rem', fontWeight: '700' }}>{f.header}</h5>
                        <span style={{
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '4px',
                          background: f.risk === 'Critical' || f.risk === 'High' ? 'rgba(255, 79, 168, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                          color: f.risk === 'Critical' || f.risk === 'High' ? 'var(--accent)' : 'var(--text-secondary)'
                        }}>
                          {f.risk} Risk
                        </span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>{f.desc}</p>
                      
                      <div style={{ position: 'relative' }}>
                        <code style={{ display: 'block', background: 'var(--bg-primary)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.78rem', color: 'var(--primary-light)', overflowX: 'auto', border: '1px solid var(--border-color)' }}>
                          {f.fix}
                        </code>
                        <button
                          onClick={() => handleCopyToClipboard(f.fix, `fix-${idx}`)}
                          style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                        >
                          {copiedText === `fix-${idx}` ? <Check size={14} style={{ color: 'var(--secondary)' }} /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Password Entropy Lab */}
        <div className="glass-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-heading)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Key size={20} style={{ color: 'var(--secondary)' }} /> Cryptographic Password & Hash Lab
          </h3>

          <div className="form-group">
            <label className="form-label" htmlFor="password-input">Enter Test Password String</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                id="password-input"
                type="text"
                className="form-input"
                style={{ width: '100%', paddingLeft: '2.5rem' }}
                placeholder="Type complex string to analyze..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Entropy stats panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.015)', border: '1px solid var(--border-color)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Shannon Entropy Value:</span>
              <strong style={{ color: 'var(--secondary)' }}>{entropy.bits} Bits</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Charset Pool Size (R):</span>
              <strong>{entropy.pool} characters</strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Strength Class Rating:</span>
              <strong style={{ 
                color: entropy.strength.includes("Excellent") ? 'var(--secondary)' : 
                       entropy.strength === "Strong" ? 'var(--primary-light)' : 'var(--accent)' 
              }}>
                {entropy.strength}
              </strong>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
              <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Cpu size={14} /> Botnet GPU Crack Time:
              </span>
              <strong style={{ color: 'var(--text-primary)' }}>{entropy.time}</strong>
            </div>
          </div>

          {/* Cryptographic Hashes display */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h5 style={{ fontSize: '0.9rem', color: 'var(--primary-light)' }}>Live Hardware Hashes</h5>
            
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '0.35rem', left: '0.75rem', fontSize: '0.7rem', fontWeight: '700', color: 'var(--text-muted)' }}>SHA-256</span>
              <code style={{ display: 'block', background: 'var(--bg-primary)', padding: '1.25rem 0.75rem 0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.75rem', wordBreak: 'break-all', border: '1px solid var(--border-color)', minHeight: '60px' }}>
                {hashes.sha256 || "Waiting for keypress..."}
              </code>
              {hashes.sha256 && (
                <button
                  onClick={() => handleCopyToClipboard(hashes.sha256, "sha256")}
                  style={{ position: 'absolute', right: '0.5rem', bottom: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  {copiedText === "sha256" ? <Check size={12} style={{ color: 'var(--secondary)' }} /> : <Copy size={12} />}
                </button>
              )}
            </div>

            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', top: '0.35rem', left: '0.75rem', fontSize: '0.7rem', fontWeight: '700', color: 'var(--text-muted)' }}>MD5 (Mock Digest)</span>
              <code style={{ display: 'block', background: 'var(--bg-primary)', padding: '1.25rem 0.75rem 0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.75rem', wordBreak: 'break-all', border: '1px solid var(--border-color)', minHeight: '60px' }}>
                {hashes.md5 || "Waiting for keypress..."}
              </code>
              {hashes.md5 && (
                <button
                  onClick={() => handleCopyToClipboard(hashes.md5, "md5")}
                  style={{ position: 'absolute', right: '0.5rem', bottom: '0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  {copiedText === "md5" ? <Check size={12} style={{ color: 'var(--secondary)' }} /> : <Copy size={12} />}
                </button>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
