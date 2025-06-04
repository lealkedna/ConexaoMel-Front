"use client";

import { useEffect, useState } from "react";
import { api } from "@/services/api";
import Image from "next/image";
import styles from "@/styles/VisualizacaoProduts.module.css";

type Produto = {
  id: string;
  preco: number;
  imagemName: string;
  descricao: string;
};

export default function VisualizacaoProducts() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function fetchMeusProdutos() {
      try {
        const response = await api.get<Produto[]>("/me/meusprodutos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos do produtor:", error);
      }
    };

    fetchMeusProdutos();
  }, []);

  //  async function handleDelete(id: string) {
  //     try {
  //       await api.delete(`/api/rota/${id}`);
  //       setProdutos((prev) => prev.filter((produto) => produto.id !== id));
  //     } catch (error) {
  //       console.error('Erro ao excluir:', error);
  //     }
  // };

  return (
    <div className={styles.main}>
      <div className={styles.title}>Meus produtos</div>
      <div className={styles.content} >
        {produtos.map(({ id, preco, imagemName, descricao }) => (
        <div className={styles.list} key={id} >
          <Image 
            src={imagemName} 
            className={styles.previewImage}
            alt="produto" 
            width={100}
            height={100}
            quality={100}
            priority={true}
            />
            <div className={styles.info}> 
              <h3 className={styles.descricao} >{descricao}</h3>
              <p className={styles.preco} >Preço: R${preco}</p>
            </div>
        </div>
      ))}
      </div>
    </div>
  );
}
