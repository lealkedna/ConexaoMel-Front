import React from "react";
import styles from "@/styles/ProductsSection.module.css";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  const products = [
    {
      image: "/images/logo.jpeg",
      title: "Mel de Laranjeira",
      description: "Produzido por Osvaldo Silva",
      price: "35.00",
      estoque: 10
    },
    {
      image: "/images/logo.jpeg",
      title: "Mel de Laranjeira",
      description: "Produzido por Osvaldo Silva.",
      price: "35.00",
      estoque: 10
    },
    {
      image: "/images/logo.jpeg",
      title: "Mel de Laranjeira",
      description: "Produzido por Osvaldo Silva",
      price: "35.00",
      estoque: 10
    },
  ];

  return (
    <section className={styles.section}>
      <span className={styles.badge}>Os Produtos</span>
      <h2 className={styles.title}>Uma nova forma de comercializar mel</h2>
      <p className={styles.subtitle}>
        Pequenos apicultores lutam contra preços baixos e a dependência de intermediários. Nós mudamos isso com uma plataforma digital que conecta diretamente produtores e consumidores.
      </p>
      <div className={styles.productsGrid}>
        {products.map((product, index) => (
          <ProductCard nome={""} imagemName={""} descricao={""} preco={0} vendedor={{
            name: "",
            telefone: ""
          }} key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
