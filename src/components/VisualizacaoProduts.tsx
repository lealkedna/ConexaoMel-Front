"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";

type Produto = {
  id: string;
  preco: number;
  imagemName: string;
  descricao: string;
};

// TODO: Erro ao renderizar os produtos do produtor de mel

export default function VisualizacaoProducts() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [produtos, setProdutos] = useState<Produto | null>(null);

  useEffect(() => {
    const fetchMeusProdutos = async () => {
      try {
        const response = await api.get<Produto>("/me/produtos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos do produtor:", error);
      }
    };

    fetchMeusProdutos();
  }, []);

  return (
    <div>
      {/* <h2>Meus Produtos</h2> */}
      {/* <p>`${produtos?.descricao}, ${produtos?.preco}`</p> */}
      {/* <h2>Meus Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
             {produto.imagemName} — R$ {produto.preco}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
