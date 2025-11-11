import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User } from "lucide-react";
import "./chatbot.css";

const ChatBotWindow = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hello! I'm SmartChat AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    const question = input;
    setInput("");

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${
          import.meta.env.VITE_CHATBOT_API_KEY
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: question }] }],
          }),
        }
      );

      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      const botReply =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "⚠️ No response received.";

      setMessages((m) => [...m, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("API Error:", error);
      setMessages((m) => [
        ...m,
        { sender: "bot", text: "🚨 Error connecting to API." },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-window">
        <header className="chat-header">
          <h2>SmartChat AI_ASSISTANT</h2>
          <p>Ask anything, anytime 💬</p>
        </header>

        <main className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
            >
              <div className="chat-avatar">
                {msg.sender === "user" ? <User size={18} /> : <Bot size={18} />}
              </div>
              <div className="chat-text">{msg.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </main>

        <footer className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button onClick={handleSend}>
            <Send size={18} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ChatBotWindow;
