"use client"
import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";
import { TbCurrencyReal } from "react-icons/tb";

interface ProductCardProps {
  idProduto: string,
  imagemName: string;
  descricao: string;
  preco: number;
  role: string;
  vendedor: {
    name: string;
    telefone: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ imagemName, descricao, preco, role, vendedor }) => {

  const imagemValida = imagemName;

  const handleWhatsApp = () => {
    const numero = vendedor.telefone.replace(/\D/g, "");
     // Adiciona o código do Brasil (55) se ainda não estiver presente
  const numeroComCodigo = numero.startsWith("55")
    ? numero
    : `55${numero}`;
    const mensagem = encodeURIComponent(`Olá ${vendedor.name}, tenho interesse no produto "${descricao}"!`);
    const link = `https://wa.me/${numeroComCodigo}?text=${mensagem}`;
    window.open(link, "_blank");
  };

  return (
    <div className={styles.card}>
      <Image
        src={imagemValida}
        alt="Imagem do produto"
        width={500}
        height={500}
        className={styles.image}
      />
      <button type="button" className={styles.apicultor}>Por {vendedor.name}</button>
      <h3 className={styles.title}>Mel da florada {role}</h3>
      <p className={styles.description}>{descricao}</p>
      <div className={styles.footer}>
        <div className={styles.divPreco}>
          <TbCurrencyReal size={30} color="#FFB64C"/>
          <span className={styles.price}>{preco}</span>
          <span className={styles.preco}>/litro </span>
        </div>
        
        <button onClick={handleWhatsApp} className={styles.button}>Comprar Agora ➜</button>
      </div> 
    </div>
  );
};

export default ProductCard;
