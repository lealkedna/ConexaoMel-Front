import React from "react";
import styles from "@/styles/Floradas.module.css";
import { GiFruitTree, GiFlowerEmblem, GiTreeBranch, GiOrange, GiHerbsBundle, GiButterflyFlower } from "react-icons/gi";
// import styles from "@/styles/ProductsSection.module.css";


const Floradas = () => {
  return (
    <section className={styles.section}>
      <span className={styles.badge}>As Floradas</span>
      <h2 className={styles.title}>Conheça as principais floradas <br />que dão origem ao mel</h2>
      <div className={styles.floradas}>
        <div className={styles.elementor}>
            <div className={styles.icon}><GiFruitTree/></div>
            <div className={styles.cardFlorada}>
                <h3>Cajueiro</h3> 
                <p>Florada típica do Nordeste, proporciona um mel dourado com sabor suave e frutado.</p> 
            </div>
        </div>

        <div className={`${styles.elementor} ${styles.outraCor}`}>
            <div className={styles.icon}><GiFlowerEmblem /></div>
            <div className={styles.cardFlorada}>
                <h3>Silvestre</h3> 
                <p>Origem em múltiplas flores nativas. Sabor complexo, rico em aromas e nutrientes.</p> 
            </div>
        </div>

        <div className={styles.elementor}>
            <div className={styles.icon}>< GiTreeBranch /></div>
            <div className={styles.cardFlorada}>
                <h3>Marmeleiro</h3> 
                <p>Florada do cerrado. Mel encorpado com toque amadeirado e medicinal.</p> 
            </div>
        </div>

        <div className={`${styles.elementor} ${styles.outraCor}`}>
            <div className={styles.icon}>< GiOrange /></div>
            <div className={styles.cardFlorada}>
                <h3>Laranjeira</h3> 
                <p>Mel claro e delicado, com aroma floral. Ideal para quem busca suavidade.</p> 
            </div>
        </div>

        <div className={styles.elementor}>
            <div className={styles.icon}>< GiHerbsBundle /></div>
            <div className={styles.cardFlorada}>
                <h3>Aroeira</h3> 
                <p>Florada nobre que origina o mel da aroeira, reconhecido por seu efeito antibacteriano.</p> 
            </div>
        </div>

        <div className={`${styles.elementor} ${styles.outraCor}`}>
            <div className={styles.icon}><GiButterflyFlower /></div>
            <div className={styles.cardFlorada}>
                <h3>Eucalipto</h3> 
                <p>Com sabor marcante e propriedades balsâmicas, é ótimo para a saúde respiratória.</p> 
            </div>
        </div>
      </div> 
    </section>
  );
};

export default Floradas;
