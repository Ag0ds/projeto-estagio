import { NextResponse } from "next/server";

const produtos = [
  {
    id: 1,
    title: "Aba-frente-americano-linho-azul_marinho",
    sku: "#123",
    type: "Americano",
    order: "05",
    status: "Ativo",
  },
  {
    id: 2,
    title: "Modelo São Paulo",
    sku: "#456",
    type: "Brasileiro",
    order: "03",
    status: "Ativo",
  },
  {
    id: 3,
    title: "Modelo ",
    sku: "#555",
    type: "Brasileiro",
    order: "03",
    status: "Ativo",
  },
];

export async function GET() {
  return NextResponse.json(produtos);
}
