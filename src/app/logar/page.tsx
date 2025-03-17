import React from 'react';
import styles from '@/app/logar/Logar.module.css';
import { api } from "@/services/api";
// import axios from 'axios';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default function login(){

    async function handleLogin(formData: FormData){
        "use server"

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password){
            return;
        }

        try{

            const response = await api.post("/signin", {
                email, 
                password
            })
             // @ts-ignore
            if (!response.data.token){
                return;
            }

            console.log(response.data);

            const expressTime = 60 * 60 * 24 * 30 * 1000;
             const cookieStore = await cookies();

             // @ts-ignore
            cookieStore.set("signin", response.data.token, {
                maxAge: expressTime,
                path: "/",
                httpOnly: false,
                // secure: process.env.NODE_ENV == "production",
                secure: false
            })

        }catch(err){
            console.log(err);
            return;
        }

        redirect('/produto');
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
                <p className={styles.link}>Ainda não tem Conta? <a href="/signup">Cadastre-se!</a></p>
            </div>
        </div>
    );
}





