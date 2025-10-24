//import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import HeroImage from "@/components/HeroImage";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Floradas from "@/components/Floradas";
import HowChatOmelia from "@/components/HowChatOmelia";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://www.conexaomel.com.br/" />
      </Head>
      <div className={styles.page} >
        <Header />
        <div className={styles.heroContainer}>
          <HeroSection />
          <HeroImage />
        </div>
      </div>

      <div className={styles.ProductContaine}>
        <ProductsSection />
      </div>
      <div className={styles.ProductContaine}>
        <HowChatOmelia /> 
      </div>
      <div className={styles.ProductContaine}>
        <Floradas />
      </div>
      <div className={styles.HowItWorksSectionContainer}>
        <HowItWorksSection />
      </div>

      <div>
        <Footer />
      </div>

    </div>
  );
}
