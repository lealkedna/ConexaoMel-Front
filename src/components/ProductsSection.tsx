import React from "react";
import styles from "@/styles/ProductsSection.module.css";
import ProductCard from "@/components/ProductCard";

const ProductsSection = () => {
  // const products = [
  //   {
  //     imagemName: "/images/origem.png",
  //     nome: "A origem: o apicultor no campo"
  //   },
  //   {
  //     imagemName: "/images/produto.png",
  //     nome: "O produto: mel 100% puro",
  //   },
  //   {
  //     imagemName: "/images/impacto.png",
  //     nome: "O impacto: conexão e comunidade",
  //   }
  // ];  

  return (
    <section className={styles.section}>
      <span className={styles.badge}>Do campo pra sua casa</span>
      <h2 className={styles.title}>Uma nova forma de comercializar mel</h2>
      <p className={styles.subtitle}>
        Compre direto de quem produz, valorize o trabalho artesanal e leve mel puro, natural, saboroso para sua mesa. Ao comprar aqui, você fortalece a apicultura familiar.
      </p>
      {/* <div className={styles.productsGrid}>
        {products.map((product, index) => (
            <ProductCard idProduto={""} descricao={""} preco={0} vendedor={{
            name: "",
            telefone: ""
          }} key={index} {...product} />
      ))}
      </div> */}
    </section>
  );
};

export default ProductsSection;
