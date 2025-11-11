import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { Bot } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Bot size={26} className="logo-icon" />
        <h1 className="navbar-logo">SmartChat AI-ASSISTANT</h1>
      </div>

      <div className="navbar-right">
        <Link className={location.pathname === "/chat" ? "active" : ""} to="/chat">
          Chat
        </Link>
        <Link className={location.pathname === "/" ? "active" : ""} to="/">
          About
        </Link>
        <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact">
          Contact
        </Link>
        <Link className="login-btn" to="/login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
