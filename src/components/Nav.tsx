"use client";

import React, { useState, useContext } from "react";
import styles from "@/styles/Nav.module.css"
import { AuthContext } from "@/providers/auth";
import { IoMenuOutline, IoClose } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import Link from "next/link";

const Nav = () =>{
    const [menuAberto, setMenuAberto] = useState(false);
    const { isAuthenticated } = useContext(AuthContext);

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
            <Link href="/">Página inicial</Link>
            </li>
            <li className={styles.menuItem}>
            <Link href="/principal">Produtos</Link>
            </li>
            {isAuthenticated ? (
                <li className={styles.menuItem}><Link href="/perfil"><BsFillPersonFill size={34} className={styles.perfilIcon}/></Link></li>
            ) : (
                <li className={styles.menuItem}><Link href="/logar">Login</Link></li>
            )}
        </ul>
            
        </div>
    );
}

export default Nav;