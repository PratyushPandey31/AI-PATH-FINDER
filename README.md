# NextStepAI — AI-Powered Career Guidance & Path Planner

<p align="center">
  <img src="./public/nextstepai_logo.png" alt="NextStepAI Logo" width="100" height="100" style="border-radius: 20px; box-shadow: 0 0 20px rgba(138, 79, 255, 0.45);"/>
</p>

<h3 align="center">NextStepAI</h3>
<p align="center">
  <strong>An Enterprise-Grade Career Guidance, Technical Interview Prep & Cybersecurity Auditing Console</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-8.0-purple?style=for-the-badge&logo=vite" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/Cybersecurity-Audits-red?style=for-the-badge&logo=shield" alt="Cybersecurity Badge"/>
  <img src="https://img.shields.io/badge/JWT_Session-Secured-green?style=for-the-badge" alt="Security Badge"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License Badge"/>
</p>

<p align="center">
  <a href="https://nextstepai-pratyush.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel" alt="Deployed on Vercel"/>
  </a>
  <a href="https://pratyushpandey31.github.io/AI-PATH-FINDER/" target="_blank">
    <img src="https://img.shields.io/badge/Deployed_on-GitHub_Pages-blue?style=for-the-badge&logo=github" alt="Deployed on GitHub Pages"/>
  </a>
</p>

---

## 👤 Lead Developer
*   **Name**: **Pratyush Pandey**
*   **Specialization**: **Full-Stack Software Engineer & Cybersecurity Auditor**
*   **Target Roles**: Systems Engineer / Specialist Programmer / Digital Specialist Engineer (Infosys)

---

## 📸 Interface Preview
Below is a high-fidelity visual mockup of the NextStepAI dashboard interface showing match lists, interactive roadmap timelines, and the counselor chatbot:

<p align="center">
  <img src="./public/nextstepai_dashboard_mockup.png" alt="NextStepAI Dashboard Mockup" width="700" style="border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 20px 40px rgba(0,0,0,0.5);"/>
</p>

---

## 🌐 Live Deployments
*   **Vercel Production Domain**: [https://nextstepai-pratyush.vercel.app/](https://nextstepai-pratyush.vercel.app/)
*   **GitHub Pages Domain**: [https://pratyushpandey31.github.io/AI-PATH-FINDER/](https://pratyushpandey31.github.io/AI-PATH-FINDER/)

---

## 🎯 Project Overview & Mission

**NextStepAI** is a futuristic, highly responsive single-page web application designed to eliminate career choice ambiguity. It targets the core issue of millions of students selecting careers without structured, personalized guidance. 

By integrating **skill mapping, interest profiling, interactive roadmaps, dynamic salary trends (localized to INR/LPA), customized interview simulators, and real-time cybersecurity audits**, NextStepAI stands out as an elite, production-ready portfolio project showcasing end-to-end frontend expertise and domain security knowledge.

---

## 📖 Detailed Feature Walkthrough: What It Does & How It Works

NextStepAI acts as a complete digital career companion. Below is a detailed breakdown of what the application does and how it guides the student step-by-step:

### 1. 🔑 Secure Entry (Authentication Gate)
*   **What it does**: Restricts access to authenticated users to protect student profiles.
*   **How it works**: When a user visits the site, the app loads `AuthPage` first, showing a glassmorphic login/signup prompt. Once they log in or create an account, the app issues a mock secure session token and saves their session in LocalStorage. This keeps their session active even if the browser is closed or refreshed.

### 2. 📋 Talent Assessment (The Career Quiz)
*   **What it does**: Maps the user's skills, interests, and working styles.
*   **How it works**: The user answers a 3-step quiz:
    *   *Interests*: (e.g. Technology, Creative Arts, Business, Science, Writing)
    *   *Skills*: (e.g. Coding, Logic, Design, Writing, Math, Communication, Leadership)
    *   *Work Preferences*: (e.g. Remote work, High Earning roles, Creative Autonomy)
*   When they click "Generate My Careers", our weighted scoring engine calculates overlap ratios between their profile and 9+ standard career models.

### 3. 🎯 Career Recommendation Dashboard & Roadmap Explorer
*   **What it does**: Displays matched careers and provides step-by-step preparation guides.
*   **How it works**: The app displays matching careers sorted by score percentage (e.g. "94% Match"). Clicking on a career opens a comprehensive dashboard featuring:
    *   **LPA Salary Growth Charts**: An interactive, custom-drawn SVG bar graph showing projected salary increases over 5 years in Indian Rupees (INR) Lakhs Per Annum.
    *   **Sequential Learning Path Checklists**: A 4-phase sequential learning roadmap. Students can tick off completed milestones (e.g. "Learn HTML/CSS", "Build REST APIs") to track progress.
    *   **Day in the Life Schedule**: Displays a typical hourly working schedule (e.g. standup, debugging, deployment logs) to simulate real-world job expectations.
    *   **Vetted Learning Resources**: Links to high-quality tutorials and documentation platforms.

### 4. 🎓 Technical Interview Simulator (Mock Interview Board)
*   **What it does**: Simulates a live technical recruitment interview round (calibrated for Infosys Specialist Engineer/Programmer positions).
*   **How it works**:
    *   The app fetches technical questions matching the user's selected career path.
    *   The user types their technical answer and clicks "Evaluate My Answer".
    *   The client-side analysis engine parses the input text for key terms, calculates a conceptual alignment score (out of 10), lists strengths, and provides a **Senior Engineer Model Solution** to help the student learn the correct answers.

### 5. 🛡️ Cybersecurity Threat Auditor & Cryptography Lab
*   **What it does**: Audits server settings and analyzes cryptographic password strength (ideal for showing security domain expertise).
*   **How it works**:
    *   **Server Headers Auditor**: Paste raw HTTP response headers, and the scanner highlights critical configuration security issues (like missing CSP, HSTS, X-Frame-Options, or sniffing headers). It provides Express JS middleware snippets for remediation.
    *   **Password Entropy & Hash Lab**: Dynamically evaluates password strength in bits of entropy using Shannon's equation, calculates botnet brute-force cracking durations, and computes secure **SHA-256** hashes instantly on keypress.

### 🔍 Resume Strength Auditor
*   **What it does**: Compares the user's resume keywords against target career tracks.
*   **How it works**: The user pastes their resume text. The auditor highlights matching keywords, displays missing skills, and lists actionable project recommendations.

---

## 🚀 Key Features

*   **🔑 Secure Session Authentication Portal**: Protects all paths with a glassmorphic Login/Register gate. Validates credentials and mounts a secure JWT-mockup session, preserving user profiles dynamically in LocalStorage.
*   **📊 Talent & Interests Profiling Quiz**: An interactive, 3-step assessment tracking cognitive preferences, technical competencies, and workplace environments to score career matches.
*   **🎯 Adaptive Heuristic Recommendation Engine**: Matches user responses against a multidimensional career database, calculating precise similarity quotients.
*   **🗺️ Interactive Education Roadmaps**: Generates step-by-step career timelines complete with interactive check-boxes and vetted learning portals. Saves roadmap checklists persistently.
*   **📈 SVG Salary & Market Demand Visualizer**: Renders custom-coded, animated SVG graphs displaying 5-year salary growth projections **in Indian Rupees (INR) Lakhs Per Annum (LPA)**.
*   **🎓 Technical Interview Simulator (Infosys Prep)**: Calibrates challenging mock interview questions for your selected career. Scores answers out of 10, highlights keyword hits/gaps, and details senior-engineer model responses.
*   **🛡️ Cybersecurity Threat & Cryptography Lab**: A dedicated auditor dashboard containing:
    - *HTTP Header & SSL Auditor*: Scans raw response headers for missing security guards (CSP, HSTS, X-Frame-Options, X-Content-Type-Options) with risk levels and Express configurations.
    - *Password Entropy & Hash Lab*: Calculates Shannon Entropy bits, estimates Botnet crack durations, and computes client-side **SHA-256** digests via browser Web Crypto APIs.
*   **💬 Contextual AI Counselor Chatbot**: Simulates a dedicated mentor, pre-feeding quiz data to answers questions about certifications, portfolios, and transitions.

---

## 📊 Application Architecture & Flow

The following Mermaid diagram maps the layout routing and secure state-synchronization pathways inside the app:

```mermaid
graph TD
    A[User Visit] --> B(Auth Gate - JWT Mock)
    B --> C{Authenticated?}
    C -- No --> B
    C -- Yes --> D[Landing Page - Credits by Pratyush]
    D --> E[Career Quiz Assessment]
    E --> F[Heuristic Scoring Engine]
    F --> G[Matches Dashboard]
    G --> H[Interactive Roadmaps / Checklists]
    G --> I[Infosys Mock Interview Prep]
    G --> J[Cybersecurity Threat & Cryptography Lab]
    G --> K[AI Advisor Chatbot Console]
```

---

## 🛠️ Technical Stack

*   **Frontend Core**: React (v19)
*   **Build Environment**: Vite (v8) — delivers rapid HMR configurations and optimized compilations.
*   **Styling Architecture**: Custom CSS variables, responsive grids, and hardware-accelerated animations. 100% clean Vanilla CSS.
*   **Security & Encryption APIs**: Web Crypto API (SubtleCrypto)
*   **Icons Framework**: Lucide React
*   **Data Models**: Structured JSON schemas for careers data and interview sheets.

---

## 💻 Installation & Local Deployment

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher).

### 1. Clone the Repository
```bash
git clone https://github.com/PratyushPandey31/AI-PATH-FINDER.git
cd AI-PATH-FINDER
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build Production Bundle
To compile and compress the assets:
```bash
npm run build
```

---

## 💼 Core Design Patterns & highlights (Infosys Interview Ready)

1.  **State Synchronization**: React hooks propagate the profile states. For instance, completing the quiz automatically updates the counselor's knowledge base and matches the interview simulator's default focus.
2.  **Low-Weight Visualizations**: Renders salary graphs natively using raw SVG templates and responsive CSS classes, avoiding high-weight visualization packages and maximizing page loading performance.
3.  **Local Storage Persistence**: Save user logins and roadmap checks persistently to ensure that progress is preserved upon browser refreshes.
4.  **Hardware Cryptography**: Avoids external hashing packages by calling the browser's native subtle cryptographical APIs for secure, sandbox-compliant SHA-256 calculation.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
