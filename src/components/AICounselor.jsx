// NextStepAI - AI Counselor Chat Component
import React, { useState, useEffect, useRef } from 'react';
import { Send, Cpu, User, Loader2 } from 'lucide-react';

const SUGGESTIONS = [
  "What projects should a UX Designer build?",
  "What is the demand for AI/ML engineers?",
  "Which free courses do you recommend for Web Dev?",
  "How do I transition from writing to coding?"
];

export default function AICounselor({ userProfile, initialQuestion, clearInitialQuestion }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize counselor messages
  useEffect(() => {
    let welcomeText = "";
    if (userProfile && (userProfile.interests?.length > 0 || userProfile.skills?.length > 0)) {
      const interestsStr = userProfile.interests.join(", ");
      const skillsStr = userProfile.skills.join(", ");
      welcomeText = `Hello! I'm your NextStep AI Advisor. I've analyzed your profile. You have strong skills in **${skillsStr}** and a keen interest in **${interestsStr}**.\n\nI recommend exploring **Full Stack Engineering** or **AI/ML Engineering**. What specific questions can I answer for you today?`;
    } else {
      welcomeText = "Hello! I am your NextStep AI Counselor. I help students discover their paths. \n\nTo give you the best advice, please complete the **Career Quiz** in the sidebar. Or, feel free to ask me any general career questions below!";
    }

    setMessages([
      { id: "welcome", sender: "bot", text: welcomeText }
    ]);
  }, [userProfile]);

  // Handle initial question redirect from dashboard
  useEffect(() => {
    if (initialQuestion) {
      handleSendMessage(initialQuestion);
      if (clearInitialQuestion) {
        clearInitialQuestion();
      }
    }
  }, [initialQuestion]);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      const botResponse = generateBotResponse(query);
      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botResponse
      }]);
      setIsTyping(false);
    }, 1500);
  };

  // Heuristic mock response engine based on queries
  const generateBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes("ux") || q.includes("design") || q.includes("figma") || q.includes("layout")) {
      return `For **UX/UI Design**, here is how to stand out:
      
1. **Figma Skills**: Master auto-layouts, components, and variables. Create an active visual library.
2. **Key Projects to Build**:
   - *Redesign Case Study*: Pick a popular app with usability flaws (e.g. local municipal site), research users, and build a better mockup flow.
   - *E-Commerce Flow*: Design a seamless, conversion-focused mobile checkout experience.
3. **Core Certifications**: The *Google UX Design Certificate* on Coursera is a great entry point.
4. **Portfolio**: Present your work as problem-solving stories (Research → Wireframes → Iterations → High-Fidelity Mockups).`;
    }

    if (q.includes("ai") || q.includes("machine learning") || q.includes("ml") || q.includes("data scientist")) {
      return `For **AI / Machine Learning Engineering**, demand is growing at **+40%**. Here is the roadmap:
      
1. **Math Foundations**: Focus on Linear Algebra (vectors, matrices), Calculus (gradients), and Probability.
2. **Languages & Libraries**: Learn Python thoroughly, then master Pandas, NumPy, Scikit-Learn, and PyTorch.
3. **Key Projects**:
   - *Predictive Engine*: Build a house price predictor or market trends forecast model.
   - *LLM Application*: Integrate the Gemini API to build a customized retrieval-augmented (RAG) search chatbot over a local text corpus.
4. **Courses**: Andrew Ng's *Machine Learning Specialization* on Coursera is highly recommended.`;
    }

    if (q.includes("web") || q.includes("full stack") || q.includes("coding") || q.includes("programmer") || q.includes("react")) {
      return `For **Full Stack Engineering**, the entry level market is competitive, but strong builders always succeed.
      
1. **Essential Roadmap**:
   - Web basics (HTML, CSS, modern JS).
   - Core Frontend Framework (React).
   - Backend Runtime (Node.js/Express) and Databases (MongoDB, PostgreSQL).
2. **Projects to Stand Out**:
   - *Collaborative App*: Build a real-time chat room or kanban task board using Socket.io.
   - *CRUD SaaS Product*: A dashboard with complete Stripe payment integration and user role management.
3. **Resources**: Check out *The Odin Project* (free, text-based) or Helsinki's *Full Stack Open*.`;
    }

    if (q.includes("courses") || q.includes("free") || q.includes("study") || q.includes("learn")) {
      return `Here are the top **free and high-value learning portals** I recommend:

- **Coding & Dev**: *The Odin Project* and *freeCodeCamp* for structured hands-on projects.
- **Design / UX**: Google's UX course (financial aid available) and Figma's official YouTube tutorials.
- **Data & Math**: *Kaggle Learn* and WorldQuant University for quantitative finance.
- **General Science**: DelftX (Solar energy courses) and YouTube channels like *3Blue1Brown* for deep calculus/linear algebra visuals.`;
    }

    if (q.includes("transition") || q.includes("writing") || q.includes("humanities")) {
      return `Transitioning from writing or humanities into tech is a highly viable path! 
      
Your strong communication skills make you a perfect candidate for:
1. **Technical Writing & Content Architecture**: Translating developer tools and API documentation into clear student guides. (Check out Google's free Technical Writing course).
2. **UX/UI Design**: Where understanding user needs and mapping behavioral journeys is critical.
3. **Product Management**: Leading development sprints and connecting marketing desires with engineering tickets.`;
    }

    if (q.includes("salary") || q.includes("money") || q.includes("pay")) {
      return `According to our current records, the highest paying entry tracks are:

1. **Quantitative Analyst**: Starting around $120,000/yr (requires advanced math and C++ coding).
2. **AI / ML Engineer**: Starting at $110,000/yr (requires Python, calculus, and PyTorch).
3. **Full Stack Engineer**: Starting at $85,000/yr.

To maximize your starting salary, focus on building **unusual portfolio projects** rather than generic clones.`;
    }

    // Default response
    return `That is a great question. In general, to succeed in any career track, I recommend taking these three steps:
    
1. **Build Projects**: Reading theory only gets you 10% of the way. Build actual applications, designs, or analyses.
2. **Read Code & Docs**: Get comfortable reading other developers' code repositories or style guides.
3. **Join Communities**: Participate in forums (Discord channels, local meetups, Reddit) to understand what current practitioners are talking about.

If you want advice specific to you, make sure to take our **Career Quiz** so I can analyze your skills!`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Convert double asterisks to bold tags, newlines to breaks
  const formatText = (text) => {
    return text.split('\n').map((line, i) => {
      let formattedLine = line
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return (
        <span key={i} style={{ display: 'block', minHeight: '1.2rem' }}>
          <span dangerouslySetInnerHTML={{ __html: formattedLine }} />
        </span>
      );
    });
  };

  return (
    <div className="chat-container glass-card fade-in-up">
      {/* Messages View */}
      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble ${msg.sender}`}>
            <div className="chat-bubble-avatar">
              {msg.sender === "bot" ? <Cpu size={18} /> : <User size={18} />}
            </div>
            <div className="chat-bubble-content">
              {formatText(msg.text)}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-bubble bot">
            <div className="chat-bubble-avatar">
              <Cpu size={18} />
            </div>
            <div className="chat-bubble-content" style={{ padding: '0.75rem 1rem' }}>
              <div className="typing-indicator">
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="chat-input-area">
        {/* Suggestion Chips */}
        <div className="chat-suggestions">
          {SUGGESTIONS.map((sug, idx) => (
            <div 
              key={idx} 
              className="chat-suggestion-chip"
              onClick={() => handleSendMessage(sug)}
            >
              {sug}
            </div>
          ))}
        </div>

        {/* Input Row */}
        <div className="chat-input-row">
          <input 
            type="text" 
            className="chat-input"
            placeholder="Ask anything about resources, projects, interview prep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping}
          />
          <button 
            className="btn btn-primary" 
            style={{ borderRadius: 'var(--radius-md)', padding: '0 1.25rem' }}
            onClick={() => handleSendMessage()}
            disabled={isTyping || !input.trim()}
          >
            <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
