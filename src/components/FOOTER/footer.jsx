import React from "react";
import "./footer.css";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">SmartChat AI</h3>
        <p className="footer-text">
          Empowering conversations with intelligence and simplicity.
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-icon"
          >
            <Linkedin size={20} />
          </a>
          <a href="mailto:support@smartchat.ai" className="footer-icon">
            <Mail size={20} />
          </a>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} SmartChat AI — All Rights Reserved || Made By - Abhinav Pandey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
