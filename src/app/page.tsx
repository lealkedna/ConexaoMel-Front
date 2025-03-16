//import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection";
import HeroImage from "@/components/HeroImage";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <div>
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
      <div className={styles.HowItWorksSectionContainer}>
      <HowItWorksSection />
    </div>
    </div>
  );
}
