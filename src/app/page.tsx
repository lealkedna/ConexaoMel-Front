//import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import HeroImage from "@/components/HeroImage";

export default function Home() {
  return (
    <div className={styles.page} >
      <Header />
      {/* <main className={styles.main}>
        <h1>Seja Bem Vindo ao Conexão Mel</h1>
        <a className={styles.cadastro} href="/signup">Cadastre-se! (signup) </a>
        <a className={styles.cadastro} href="/principal">Comprar</a>
      </main> */}
      <div className={styles.heroContainer}>
        <HeroSection />
        <HeroImage />
      </div>
    </div>
  );
}
