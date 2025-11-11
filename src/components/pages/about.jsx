import React from "react";
import "./about.css";
import { Bot, Cpu, MessageSquare, Rocket } from "lucide-react";

const About = () => {
  return (
    <section className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-title">About SmartChat AI-ASSISTANT</h1>
        <p className="about-subtitle">
          Your intelligent virtual assistant built for modern conversations
        </p>
      </div>

      {/* Info Section */}
      <div className="about-container">
        <div className="about-card">
          <p>
            <strong>SmartChat AI</strong> is a next-generation chatbot
            application powered by <b>Google Gemini API</b> and built using
            <b> React</b>. It provides human-like responses, intuitive UI, and
            seamless communication — designed to make learning and interaction
            smarter.
          </p>
          <p>
            Whether you are exploring new ideas, solving code challenges, or
            asking for daily advice, SmartChat AI responds instantly, adapting
            to your context and style.
          </p>
        </div>

        {/* Features Section */}
        <div className="feature-grid">
          <div className="feature-box">
            <Bot size={32} className="feature-icon" />
            <h3>Conversational AI</h3>
            <p>
              Powered by Gemini 2.0 for dynamic, human-like chat experiences.
            </p>
          </div>

          <div className="feature-box">
            <Cpu size={32} className="feature-icon" />
            <h3>Optimized with React</h3>
            <p>
              Built with modern frontend architecture for smooth performance.
            </p>
          </div>

          <div className="feature-box">
            <MessageSquare size={32} className="feature-icon" />
            <h3>Smart Interaction</h3>
            <p>Understands queries and adapts responses intelligently.</p>
          </div>

          <div className="feature-box">
            <Rocket size={32} className="feature-icon" />
            <h3>Future Ready</h3>
            <p>Designed to scale with evolving AI and user experience trends.</p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="vision-card">
          <h2>🚀 Our Vision</h2>
          <p>
            We aim to create a world where humans and AI collaborate effortlessly,
            enhancing productivity and creativity — one chat at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
