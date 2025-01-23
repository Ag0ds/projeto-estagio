"use client";
import { useState } from "react";
import "./new.css";

export default function New() {
  const [showSidebar, setShowSidebar] = useState(true); // Estado para alternar a barra lateral

  return (
    <div className="container">
      {/* Botão de alternância para a barra lateral */}
      <button
        className="toggle-button"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        ☰
      </button>

      {/* Barra lateral */}
      {showSidebar && (
        <aside className="sidebar">
          <ul>
            <li className="active">
              <a href="#">Peças</a>
            </li>
            <li>
              <a href="#">Visualização</a>
            </li>
            <li>
              <a href="#">Clientes</a>
            </li>
          </ul>
        </aside>
      )}
      <div className="teste">
      <div className="status-bar">
        <div className="status-info">
          <i className="icon-info">ℹ️</i> Alterações não salvas
        </div>
        <div className="status-actions">
          <button className="btn-discard">Descartar</button>
          <button className="btn-save">Salvar</button>
        </div>
      </div>    
        <div className="top-bar-container">
          <div className="top-bar">
            <div className="product-info">
              <h1>Modelo Americano</h1>
              <p>1 de abr. de 2023, 00:00 de FANATION</p>
            </div>
            <div className="status-toggle">
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider round"></span>
              </label>
              <span>Ativo</span>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
