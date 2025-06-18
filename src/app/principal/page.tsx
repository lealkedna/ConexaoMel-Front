
'use client'
import React, { useState, useEffect } from "react";
import styles from '../principal/principal.module.css'
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard';
import Footer from "@/components/Footer";
import { api } from "@/services/api";
import { toast } from "sonner";


interface Produto {
  id: string;
  imagemName: string;
  descricao: string;
  preco: number;
  role: string;
  vendedor: {
    name: string;
    telefone: string;
  };
}


export default function Principal() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  // Função para buscar os produtos
  const fetchProdutos = async () => {
    try {
      const response = await api.get<Produto[]>("/listagem");
      //console.log("produtos: ", response.data)
      toast.success("Produtos listados")
      setProdutos(response.data);
    } catch (error) {
      toast.warning("Erro ao buscar pelos Produtos");
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
                idProduto={produto.id}
                imagemName={produto.imagemName}
                descricao={produto.descricao}
                preco={produto.preco}
                role={produto.role}
                vendedor={produto.vendedor} 
              />
            );
          })
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
      <Footer />
    </div>
  );
}




