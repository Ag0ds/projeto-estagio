"use client";

import "./page.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const action = "login";
    const url = "/API"; 

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: email, password, action }),
      });

      const data = await response.json();

      if (response.ok) {
        router.push("/pecas");
      } else {
        setMessage(data.message || "Erro na autenticação.");
      }
    } catch (error) {
      setMessage("Erro ao conectar ao servidor.");
    }
  };

  return (
    <div>
      <main className="login-container">
        <div className="login-box">
          <img src="logo-login.svg" alt="Logo-login" className="login-logo" />
          <h1>Bem-vindo ao Fanation</h1>
          <p>Acesse a sua conta para iniciar</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail:</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Inserir senha:</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Acessar</button>
          </form>
          {message && <p className="error-message">{message}</p>}
        </div>
      </main>
      <footer className="footer">
        Desenvolvido pela <span className="footer-logo">SeuBoné</span>
      </footer>
    </div>
  );
}
