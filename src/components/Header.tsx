import React from "react";
import Image from 'next/image'
import styles from "@/styles/Header.module.css"
import Nav from "@/components/Nav"

const Header = () => {
    return (
        <div className={styles.containerHeader}>
            <Image
                src="/images/logoHorizontal.png"
                alt="Logo"
                width={300}
                height={300}
                className={styles.imageLogo}
            />
            <Nav/>
        </div>
    );
}

export default Header;


