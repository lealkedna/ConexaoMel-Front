import React from "react";
import styles from "@/styles/ProductsSection.module.css";
import Image from "next/image";
import Button from "./Button";

const ProductsSection = () => {

  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/honey.png"
          alt="Produtos de mel"
          width={600}
          height={600}
          className={styles.image}
        />
      </div>
      <div className={styles.infoContainer}> 
        <span className={styles.badge}>Do campo pra sua casa</span>
        <h2 className={styles.title}>Uma nova forma de comercializar mel</h2>
        <p className={styles.subtitle}>
          Compre direto de quem produz, valorize o trabalho artesanal e leve mel puro, natural, saboroso para sua mesa. Ao comprar aqui, você fortalece a apicultura familiar.
        </p>
        <Button text=" Ver produtos  → " primary href="/principal" />
      </div>
    </section>
  );
};

export default ProductsSection;
