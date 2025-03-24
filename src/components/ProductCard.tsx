"use client"

import React, { useState }  from "react";
import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";
import Button from "./Button";
import ModalContato from "./ModalContato";
// import from "react";
import {api} from '@/services/api';

interface ProductCardProps {
  // idProduto: string,
  nome: string;
  imagemName: string;
  descricao: string;
  preco: number;
}

type Vendedor = {
  nome: string;
  telefone: string;
};

type RespostaVendedor = {
  vendedor: Vendedor;
};


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductCard:  React.FC<ProductCardProps> = ({  nome, imagemName, descricao, preco }) => {

  const imagemValida = imagemName ? imagemName : '/images/logo.jpeg';
  const [vendedor, setVendedor] = useState<{ nome: string; telefone: string } | null>(null);
  const [showModal, setShowModal] = useState(false);
  
  const buscarVendedor = async () => {
    try {
      // const response = await api.get(`/listagem`);
      const response = await api.get<RespostaVendedor>(`/listagem`);
      setVendedor(response.data.vendedor); 
      setShowModal(true); // Abre o modal
    } catch (error) {
      console.error("Erro ao buscar vendedor:", error);
    }
  };

  const fecharModal = () => {
    setShowModal(false);
    setVendedor(null); // Limpa os dados do vendedor quando o modal for fechado
  };

  return (
    <div className={styles.card}>
      <Image
        src={imagemName || imagemValida}
        alt="Imagem do produto"
        width={200}
        height={200}
        className={styles.image}
      />
      <h3 className={styles.title}>{nome}</h3>
      <p className={styles.description}>{descricao}</p>
      <div className={styles.footer}>
        <span className={styles.price}>${preco}</span>
        <button onClick={buscarVendedor}>Contato</button>
        <Button text="Comprar Agora ➜" primary href="/principal"  />

        {/* Modal do vendedor */}
        {showModal && <ModalContato vendedor={vendedor} onClose={fecharModal} />}
      </div>
    </div>
  );
};

export default ProductCard;
