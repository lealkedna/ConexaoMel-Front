import React from "react";
import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";
import Button from "./Button";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} width={300} height={200} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <span className={styles.price}>${price}</span>
      <Button text="Comprar Agora ➜" primary  href="/principal" />
      </div>
    </div>
  );
};

export default ProductCard;
