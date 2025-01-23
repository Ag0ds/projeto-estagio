"use client";
import "./pecas.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Princ() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/pecas/new");
  };
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/API/produtos");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="container">
      
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

      
      <main className="main-content">
        <div>
          
          <div className="page-header">
            <h1>Peças gerais</h1>
            <button className="add-button" onClick={handleRedirect}>Adicionar peça</button>
          </div>

          
          <div className="filters">
            <div className="filter-tabs">
              <button className="tab">Todos ({items.length})</button>
              <button className="tab active">
                Ativos ({items.filter((item) => item.status === "Ativo").length})
              </button>
              <button className="tab">Expirado (0)</button>
            </div>
            <div className="search-bar">
              <input type="text" placeholder="Buscar..." />
              <button className="search-button">🔍</button>
              <button className="filter-button">⚙️</button>
            </div>
          </div>

          
          <div className="table">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>SKU</th>
                  <th>Tipo</th>
                  <th>Ordem de exibição</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.nome_modelo}</td>
                  <td>{item.sku}</td>
                  <td>{item.tipo_recorte}</td>
                  <td>{item.ordem_exibicao}</td>
                  <td>
                    <span
                      className={
                        item.status === "Ativo" ? "status-active" : "status-inactive"
                      }
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <button className="page-button">←</button>
            <button className="page-button active">1</button>
            <button className="page-button">2</button>
            <button className="page-button">3</button>
            <button className="page-button">4</button>
            <button className="page-button">→</button>
          </div>
        </div>
      </main>
    </div>
  );
}
