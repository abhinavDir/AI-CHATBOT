import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as ${email}`);
  };

  return (
    <section style={{ padding: "120px 20px", textAlign: "center" }}>
      <h1>Login</h1>
      <form
        onSubmit={handleLogin}
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            width: "250px",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
