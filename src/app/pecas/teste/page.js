"use client";
import { useEffect, useState } from 'react';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            const response = await fetch('/api/produtos');
            const data = await response.json();
            setProdutos(data);
        }

        fetchProdutos();
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map((produto) => (
                    <li key={produto.idProducts}>
                        {produto.nome_modelo} - {produto.tipo_produto}
                    </li>
                ))}
            </ul>
        </div>
    );
}
