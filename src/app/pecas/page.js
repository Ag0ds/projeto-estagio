import "./pecas.css";
export default function princ(){
    return(           
        <div class="container">
            <aside class="sidebar">
            <ul>
                <li class="active">
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

            
            <main class="main-content">
            <div class="page-header">
                <h1>Peças gerais</h1>
                <button class="add-button">Adicionar peça</button>
            </div>

            <div class="filters">
                <div class="filter-tabs">
                <button class="tab active">Todos (000)</button>
                <button class="tab">Ativos (0)</button>
                <button class="tab">Expirado (0)</button>
                </div>
                <div class="search-bar">
                <input type="text" placeholder="Buscar..." />
                <button class="search-button">🔍</button>
                </div>
            </div>

            <table class="data-table">
                <thead>
                <tr>
                    <th><input type="radio" disabled /></th>
                    <th>Key</th>
                    <th>Tipo</th>
                    <th>Ordem de exibição</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input type="radio" name="select-item" /></td>
                    <td>Abc-frente-americano-linho-azul_marinho</td>
                    <td>Americano</td>
                    <td>05</td>
                    <td><span class="status-active">Ativo</span></td>
                </tr>
                <tr>
                    <td><input type="radio" name="select-item" /></td>
                    <td>Abc-frente-americano-linho-azul_marinho</td>
                    <td>Americano</td>
                    <td>05</td>
                    <td><span class="status-active">Ativo</span></td>
                </tr>
                <tr>
                    <td><input type="radio" name="select-item" /></td>
                    <td>Abc-frente-americano-linho-azul_marinho</td>
                    <td>Americano</td>
                    <td>05</td>
                    <td><span class="status-active">Ativo</span></td>
                </tr>
                </tbody>
            </table>

            <div class="generate-button-container">
                <button class="generate-button">GERAR IMAGEM</button>
            </div>
            </main>
        </div>
    )
}