import React from "react";
import styles from "@/styles/Nav.module.css"

const Nav = () =>{
    return(
        <div className={styles.containeNav}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="./">Página inicial</a></li>
                <li className={styles.menuItem}><a href="/principal">Produtos</a></li>
                <li className={styles.menuItem}><a href="/logar">Login</a></li>
               
            </ul>
        </div>
    );
}

export default Nav;