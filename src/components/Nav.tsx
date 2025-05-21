"use client";

import React, { useState } from "react";
import styles from "@/styles/Nav.module.css"
import { IoMenuOutline, IoClose } from "react-icons/io5";

const Nav = () =>{
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return(
        <div className={styles.containeNav}>
            <div className={styles.menuToggle} onClick={toggleMenu}>
            {menuAberto ? (
            <IoClose className={styles.menu_responsivo} />
            ) : (
            <IoMenuOutline className={styles.menu_responsivo} />
            )}
        </div>
            
        <ul className={`${styles.menu} ${menuAberto ? styles.menuAberto : ""}`}>
            <li className={styles.menuItem}>
            <a href="/">Página inicial</a>
            </li>
            <li className={styles.menuItem}>
            <a href="/principal">Produtos</a>
            </li>
            <li className={styles.menuItem}>
            <a href="/logar">Login</a>
            </li>
        </ul>
            
        </div>
    );
}

export default Nav;