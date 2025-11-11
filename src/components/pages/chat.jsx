import React from "react";
import ChatBotWindow from "../chat/chatbot";

const Chat = () => {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #f9fafb 0%, #e5e7eb 100%)",
      }}
    >
      {/* ✅ Chatbot loads here */}
      <ChatBotWindow />
    </div>
  );
};

export default Chat;
