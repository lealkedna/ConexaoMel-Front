'use client';
import React from 'react';
import styles from './login.module.css';

export default function login(){

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>ConexãoMel</h1>
                <form className={styles.form}>
                    <input className={styles.input} name="email" placeholder="Digite o seu e-mail"  />
                    <input className={styles.input} name="password" type="password" placeholder="Digite sua senha"  />
                    <button type="submit" className={styles.button}>
                        Entrar
                    </button>
                </form>
                <p className={styles.link}>Ainda não tem Conta? <a href="/cadastro">Cadastre-se!</a></p>
            </div>
        </div>
    );
}





