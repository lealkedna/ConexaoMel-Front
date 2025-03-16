import React from "react";
import Image from "next/image";
import styles from "@/styles/HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={styles.imageContainer}>
      <Image
        src="/images/produtores.png" 
        alt="Imagem de produtores"
        width={900}
        height={711}
        className={styles.image}
      />
    </div>
  );
};

export default HeroImage;
