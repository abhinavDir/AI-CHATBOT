import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/nav";
import About from "./components/pages/about";
import Contact from "./components/pages/contac";
import Login from "./components/pages/login";
import Chat from "./components/pages/chat";
import Footer from "./components/FOOTER/footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: "170px" }}>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}
