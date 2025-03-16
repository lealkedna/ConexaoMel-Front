import React from "react";
import styles from "@/styles/Nav.module.css"

const Nav = () =>{
    return(
        <div className={styles.containeNav}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}>Página inicial</li>
                <li className={styles.menuItem}>Sobre</li>
                <li className={styles.menuItem}>Produtos</li>
            </ul>
        </div>
    );
}

export default Nav;