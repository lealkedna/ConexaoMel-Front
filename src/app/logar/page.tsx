import React from 'react';
import styles from '@/app/logar/Logar.module.css'
import { api } from "@/services/api"

export default function login(){

    async function handleLogin(formData: FormData){
        "use server"

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password){
            return;
        }

        try{

            const response = await api.post("/sigin", {
                email, 
                password
            })

            console.log(response.data);

        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>ConexãoMel</h1>
                <form action={handleLogin} className={styles.form}>
                    <input className={styles.input} name="email" placeholder="Digite o seu e-mail"  />
                    <input className={styles.input} name="password" placeholder="Digite sua senha"  />
                    <button type="submit" className={styles.button}>
                        Entrar
                    </button>
                </form>
                <p className={styles.link}>Ainda não tem Conta? <a href="/cadastro">Cadastre-se!</a></p>
            </div>
        </div>
    );
}





