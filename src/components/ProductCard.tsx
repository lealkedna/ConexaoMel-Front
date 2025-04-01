"use client"
import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";

interface ProductCardProps {
  // idProduto: string,
  nome: string;
  imagemName: string;
  descricao: string;
  preco: number;
  vendedor: {
    name: string;
    telefone: string;
  };
}


const ProductCard: React.FC<ProductCardProps> = ({ nome, imagemName, descricao, preco, vendedor }) => {

  const imagemValida = imagemName ? imagemName : '/images/logo.jpeg';

  const handleWhatsApp = () => {
    const numero = vendedor.telefone.replace(/\D/g, "");
    const mensagem = encodeURIComponent(`Olá ${vendedor.name}, tenho interesse no produto "${nome}"!`);
    const link = `https://wa.me/${numero}?text=${mensagem}`;
    window.open(link, "_blank");
  };

  return (
    <div className={styles.card}>
      <Image
        src={imagemValida}
        alt="Imagem do produto"
        width={200}
        height={200}
        className={styles.image}
      />
      <h3 className={styles.title}>{nome}</h3>
      <p className={styles.description}>{descricao}</p>
      <div className={styles.footer}>
        <span className={styles.price}>${preco}</span>
        <button onClick={handleWhatsApp}>Comprar Agora ➜</button>
      </div>
    </div>
  );
};

export default ProductCard;
