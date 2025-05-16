import React from "react";
import styles from "@/styles/Nav.module.css"
import { IoMenuOutline } from "react-icons/io5";

const Nav = () =>{
    return(
        <div className={styles.containeNav}>
            <ul className={styles.menu}>
                <li className={styles.menuItem}><a href="./">Página inicial</a></li>
                <li className={styles.menuItem}><a href="/principal">Produtos</a></li>
                <li className={styles.menuItem}><a href="/logar">Login</a></li>
            </ul>
            <IoMenuOutline className={styles.menu_responsivo}/>
        </div>
    );
}

export default Nav;