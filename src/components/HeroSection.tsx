import React from "react";
import styles from "@/styles/HeroSection.module.css";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Conexão Mel</span>
      <h1 className={styles.title}>
        Mel direto <br />  do produtor
        para sua mesa
      </h1>
      <p className={styles.description}>
        Ajude pequenos apicultores a prosperar enquanto consome mel puro e de qualidade.
      </p>
      <div className={styles.buttons}>
        <Button text="Cadastrar" primary href="/signup" />
        <Button text="Comprar Agora" href="/principal" />
      </div>
    </section>
  );
};

export default HeroSection;
