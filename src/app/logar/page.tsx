import React from 'react';
import styles from '@/app/logar/Logar.module.css';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SubmitButton } from '@/components/SubmitButton';

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
                    <h1 className={styles.title}>ConexãoMel</h1>
                    <form action={handleLogin} className={styles.form}>
                        <input className={styles.input} name="email" placeholder="Digite o seu e-mail" />
                        {/* <input className={styles.input} name="password"  type="password" placeholder="Digite sua senha"  /> */}

                        <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                name="password"
                                type="password"
                                id="senha"
                                placeholder="Digite sua senha"
                            />
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" id="mostrarSenha" defaultChecked={false} />
                                Mostrar senha
                            </label>

                            {/* <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    checked={mostrar}
                                    onChange={() => setMostrar(!mostrar)}
                                />
                                Mostrar senha
                            </label> */}
                        </div>

                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                        document.addEventListener('DOMContentLoaded', function () {
                            const checkbox = document.getElementById('mostrarSenha');
                            const senhaInput = document.getElementById('senha');
                            if (checkbox && senhaInput) {
                            checkbox.addEventListener('change', function () {
                                senhaInput.type = checkbox.checked ? 'text' : 'password';
                            });
                            }
                        });
                        `,
                            }}
                        ></script>
                        {/* <button type="submit" className={styles.button}  id="botaoEntrar">
                        Entrar
                    </button> */}

                        <SubmitButton />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                            document.addEventListener('DOMContentLoaded', function () {
                                const form = document.querySelector('form');
                                const botao = document.getElementById('botaoEntrar');

                                if (form && botao) {
                                form.addEventListener('submit', function () {
                                    botao.innerText = 'Entrando...';
                                    botao.disabled = true;
                                });
                                }
                            });
                            `,
                            }}
                        ></script>
                    </form>
                    <p className={styles.link}>Ainda não tem Conta? <a href="/signup" className={styles.FazerLogin}>Cadastre-se!</a></p>
                </div>
            </div>
            <Footer />
        </>
    );
}





