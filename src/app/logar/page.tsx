import React from 'react';
import styles from '@/app/logar/Logar.module.css';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SubmitButton } from '@/components/SubmitButton';
import MostraSenha from "@/components/MostraSenha"

export default function login() {

    async function handleLogin(formData: FormData) {
        "use server"

        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return;
        }

        try {

            const response = await api.post("/signin", {
                email,
                password
            })
            //@ts-expect-error: Explicação do erro esperado
            if (!response.data.token) {
                return;
            }

            console.log(response.data);

            const expressTime = 60 * 60 * 24 * 30 * 1000;
            const cookieStore = await cookies();

            //@ts-expect-error: Explicação do erro esperado
            cookieStore.set("signin", response.data.token, {
                maxAge: expressTime,
                path: "/",
                httpOnly: false,
                // secure: process.env.NODE_ENV == "production",
                secure: false
            })

        } catch (err) {
            console.log(err);
            return;
        }

        redirect('/perfil');
    }

    return (
        <>
            <Header />

            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Conexão Mel</h1>
                    <form action={handleLogin} className={styles.form}>

                        <input className={styles.input} name="email" placeholder="Digite o seu e-mail" />
                        <MostraSenha name="password" placeholder="Digite sua senha" />
                        <ul>
                            <li className={styles.loginRegras}>
                                O preenchimento do e-mail é obrigatório *
                            </li>

                            <li className={styles.loginRegras}>
                                O preenchimento da senha é obrigatório *
                            </li>

                        </ul>
                        <SubmitButton texto="Entrar" />
                    </form>
                    <p className={styles.link}>Ainda não tem Conta? <a href="/signup" className={styles.FazerLogin}>Cadastre-se!</a></p>
                </div>
            </div>
            <Footer />
        </>
    );
}





