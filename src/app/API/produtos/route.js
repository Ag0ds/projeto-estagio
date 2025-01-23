import { query } from '../../lib/db';

export async function GET() {
    try {
        const produtos = await query({ query: 'SELECT * FROM produtos' });
        return new Response(JSON.stringify(produtos), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Erro ao buscar produtos.', error }),
            { status: 500 }
        );
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const { nome_modelo, ordem_exibicao, sku, tipo_recorte, posicao, tipo_produto, material, cor_material, link_cloud } = body;

        const result = await query({
            query: `
                INSERT INTO produtos (nome_modelo, ordem_exibicao, sku, tipo_recorte, posicao, tipo_produto, material, cor_material, link_cloud) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            values: [nome_modelo, ordem_exibicao, sku, tipo_recorte, posicao, tipo_produto, material, cor_material, link_cloud],
        });

        return new Response(JSON.stringify({ message: 'Produto criado!', result }), { status: 201 });
    } catch (error) {
        return new Response(
            JSON.stringify({ message: 'Erro ao criar produto.', error }),
            { status: 500 }
        );
    }
}