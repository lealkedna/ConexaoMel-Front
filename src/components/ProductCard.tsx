import React from "react";
import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";
import Button from "./Button";

interface ProductCardProps {
  nome: string;
  imagemName: string;
  descricao: string;
  preco: number;
}

const ProductCard:  React.FC<ProductCardProps> = ({ nome, imagemName, descricao, preco }) => {

  const imagemValida = imagemName ? imagemName : '/images/logo.jpeg';
  
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
        <Button text="Comprar Agora ➜" primary href="/principal" />
      </div>
    </div>
  );
};

export default ProductCard;
