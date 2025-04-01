import React from "react";
import styles from "@/styles/Footer.module.css";
import { Phone, Mail, MapPin} from "lucide-react";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
        <Image
                src="/images/logo.jpeg"
                alt="Logo"
                width={100}
                height={100}
                className={styles.imageLogo}
            />
          <h3>Conexão Mel</h3>
          <p>Fortalecendo pequenos produtores, um pote de mel por vez.</p>
        </div>

        {/* Contato */}
        <div className={styles.footerSection}>
          <h3>Contato</h3>
          <p><Phone size={16} /> (11) 99999-9999</p>
          <p><Mail size={16} /> conexaomel53@gmail.com</p>
          <p><MapPin size={16} /> Picos, PI</p>
        </div>

        
        {/* <div className={styles.footerSection}>
          <h3>Redes Sociais</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
            </a>
          </div>
        </div> */}
      </div>

      <hr className={styles.divider} />
      <p className={styles.copyright}>© 2025 Conexão Mel. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
