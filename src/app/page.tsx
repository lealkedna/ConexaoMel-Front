//import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Seja Bem Vindo ao Conexão Mel</h1>
        <a className={styles.cadastro} href="/cadastro">Cadastre-se! </a>
        <a className={styles.cadastro} href="/signup">Cadastre-se! (signup) </a>
        <a className={styles.cadastro} href="/principal">Comprar</a>
      </main>
    </div>
  );
}
