import React from "react";
import Image from 'next/image'
import styles from "@/styles/Header.module.css"
import Nav from "@/components/Nav"

const Header = () => {
    return (
        <div className={styles.containerHeader}>
            <Image
                src="/images/logo.jpeg"
                alt="Logo"
                width={100}
                height={100}
                className={styles.imageLogo}
            />
            <Nav/>
        </div>
    );
}

export default Header;


