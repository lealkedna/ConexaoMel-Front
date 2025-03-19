
'use client'
import React, { useState, useEffect } from "react";
import styles from '../principal/principal.module.css'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard';
import { api } from "@/services/api";


interface Produto {
  id: string;
  imagemName: string;
  nome: string;
  descricao: string;
  preco: number;
}


export default function Principal() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Função para buscar os produtos
  const fetchProdutos = async () => {
    try {
      const response = await api.get("/listagem");
      console.log("produtos: ", response.data)
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  };

  // Chama a função de buscar produtos quando a tela carrega
  useEffect(() => {
    fetchProdutos();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.produtosContainer}>
        <h1>Produtos</h1>
        <p className={styles.badge}>Escolha o melhor produto</p>
      </div>
      <div className={styles.productList}>
        {produtos.length > 0 ? (
          produtos.map((produto) => {
            // Definir a imagem válida antes de retornar o ProductCard
            //const imagemValida = produto.imagemName ? produto.imagemName : '/images/logo.jpeg';
  
            return (
              <ProductCard
                key={produto.id}
                //imagemName={imagemValida}
                nome={produto.nome}
                descricao={produto.descricao}
                preco={produto.preco}
              />
            );
          })
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
    </div>
  );
}




