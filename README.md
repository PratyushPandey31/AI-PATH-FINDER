# NextStepAI — AI-Powered Career Guidance & Path Planner

NextStepAI is an advanced, interactive AI-powered career counseling platform designed to guide students and early-career professionals in discovering their optimal career trajectories. By mapping individual skills, interests, and professional preferences against an evolving market taxonomy, NextStepAI generates dynamic, step-by-step educational roadmaps, interactive salary projection visualizations, contextual AI counseling, and a comprehensive resume gap audit.

Developed with a modular React architecture, a robust client-side heuristics engine, and highly-optimized custom CSS components, NextStepAI delivers an enterprise-grade user experience (UX) featuring fluid micro-animations, glassmorphic layouts, and responsive panels.

---

## 🚀 Key Features

*   **📊 Talent & Interests Profiling Quiz**: A highly interactive, 3-step cognitive assessment mapping interests, technical capabilities, and workplace environment preferences.
*   **🎯 Adaptive Heuristic Recommendation Engine**: Evaluates user profiles against a multidimensional career taxonomy (Software Engineering, UI/UX, AI/ML, Bioinformatics, Quantitative Analysis, Green Energy, Technical Writing, etc.) with real-time similarity matching scores.
*   **🗺️ Interactive Education Roadmaps**: Generates sequential, phase-by-phase learning paths for each career, complete with completion trackers and vetted learning resources.
*   **📈 SVG Salary & Market Demand Visualizer**: Renders interactive, animated custom SVG charts displaying 5-year salary progression and market growth statistics.
*   **💬 Contextual AI Counselor Chatbot**: Simulates a dedicated career advisor. Features custom prompt recommendations, message typing indicators, and markdown formatting, with answers calibrated to the student's quiz profile.
*   **🔍 Resume Strength Auditor**: An automated review panel where students paste their achievements to receive an instant alignment score, highlight matching keywords, and pinpoint skill gaps with actionable roadmap additions.
*   **🔑 Secure Session Authentication Portal**: Integrates a glassmorphic Login/Register gate checking email/password criteria and storing sessions safely in LocalStorage (JWT-handshake mockup) with a Secure Token Active status.

---

## 🛠️ Technical Stack & Architecture

*   **Frontend Library**: React (v19)
*   **Scaffolding & Build Tool**: Vite (v8) — delivers lightning-fast hot module replacement (HMR) and optimized assets compilation.
*   **Styling Engine**: Custom CSS variables, HSL color tokens, and responsive flexbox layouts. Avoids external framework bloat to achieve fluid, hardware-accelerated animations and consistent cross-browser performance.
*   **Icons Library**: Lucide React
*   **State Management**: React Component Hooks (`useState`, `useEffect`, `useRef`) for centralized student profile coordination.

### Code Directory Structure
```
d:/New folder (7)/
├── public/                  # Static assets
├── src/
│   ├── components/
│   │   ├── AICounselor.jsx       # Chatbot counselor module
│   │   ├── CareerDashboard.jsx   # Matches & interactive roadmaps list
│   │   ├── CareerQuiz.jsx        # Multidimensional assessment wizard
│   │   ├── LandingPage.jsx       # Modern marketing home view
│   │   └── ResumeAnalyzer.jsx    # Skill keyword match and gap finder
│   ├── data/
│   │   └── careersData.js        # Career taxonomy database & matching formulas
│   ├── App.jsx                   # Central routing & state hub
│   ├── index.css                 # Design system, themes, and global layouts
│   └── main.jsx                  # React application mount script
├── index.html                    # HTML entry point and Google Fonts definitions
├── package.json                  # Dependencies configuration
└── vite.config.js                # Vite bundler configurations
```

---

## 💻 Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

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
Start the local server with hot reloading enabled:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for Production
To bundle and optimize the application files for deployment:
```bash
npm run build
```
Production assets will be built and output to the `/dist` directory.

---

## 💼 Core Design Patterns & Highlights (Industry-Level Quality)

1.  **State Synchronization**: The app maintains a centralized, single-source-of-truth state for the user's profile. When a student completes the quiz, their profiles are immediately mapped to the chat console, enabling the AI Counselor to speak to them contextually about their strengths.
2.  **Custom Data Visualization**: Renders salary graphs natively using raw SVG vectors and CSS classes, avoiding high-weight chart packages and keeping package load size small for fast page speeds.
3.  **Heuristic Keyword Scanning**: The Resume Auditor uses substring boundary matching to identify missing key technologies and dynamically creates recommended learning milestones.
4.  **Premium Glassmorphic UI**: Uses custom backdrop-blur values, semi-transparent gradients, glowing box shadows, and spring-based timing transitions.

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.
