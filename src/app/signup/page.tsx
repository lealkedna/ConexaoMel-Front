// import Image from 'next/image';
// import Link from 'next/link';
'use client'
import styles from '@/app/signup/Signup.module.css';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValidadorSenha from '@/components/ValidadorSenha';
import { useState } from 'react';
// import axios from 'axios';

export default function Signup() {
    const [senhaValida, setSenhaValida] = useState(false);
    async function handleRegister(formData: FormData) {
        const nome = formData.get('nome')?.toString() || "";
        const email = formData.get('email')?.toString() || "";
        const password = formData.get('password')?.toString() || "";
        const telefone = formData.get('telefone')?.toString() || "";

        if (!nome || !email || !telefone || !password) {
            // console.log("Preencha todos os campos");
            toast.warning("Preencha todos os campos");

            return;
        }
        if (!senhaValida) {
            toast.warning("Sua senha não atende aos critérios de segurança.");
            return;
        }

        try {
            await api.post("/cadastro", {
                name: nome,
                email: email,
                password: password,
                telefone: telefone,
                role: "VENDEDOR"
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            toast.success("Perfil cadastrado");

        } catch (err) {
            // console.log('error');
            toast.warning("Erro ao cadastrar o perfil");
            console.log(err)

        }

        // console.log(nome);
        // console.log(email);
        // console.log(telefone);
        // console.log(senha);

        redirect("/logar")
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>ConexãoMel</h1>
                <div className={styles.card}>
                    <h2 className={styles.subtitle}>Cadastre-se</h2>
                    <form action={handleRegister} className={styles.form}>
                        <input className={styles.input} name="nome" placeholder="Digite o seu nome" />
                        <input className={styles.input} name="email" placeholder="Digite o seu e-mail" />
                        <input className={styles.input} name="telefone" placeholder="Digite o seu Telefone" />
                        {/* <input className={styles.input} name="password" type="password" placeholder="Crie uma senha" /> */}

                        {/* <div className={styles.inputWrapper}>
                            <input
                                className={styles.input}
                                name="password"
                                type="password"
                                id="senha"
                                placeholder="Digite sua senha"
                            />
                            <label className={styles.checkboxLabel}>
                                <input type="checkbox" id="mostrarSenha" defaultChecked={false}/>
                                Mostrar senha
                            </label>
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
                        <p><strong>Sua senha deve ter : </strong></p>
                        <ul id="regras-senha" className="password-rules">
                        <li id="regra1"> Pelo menos 8 caracteres</li>
                        <li id="regra2"> Pelo menos 1 letra maiúscula</li>
                        <li id="regra3"> Pelo menos 1 número</li>
                        <li id="regra4"> Pelo menos 1 caractere especial</li>
                    </ul> */}
                        <ValidadorSenha onSenhaValidaChange={setSenhaValida} />


                        <button type="submit" className={styles.button}>
                            Cadastre-se
                        </button>
                        
                    </form>
                    <p className={styles.link}>Já tem conta? <a href="/logar" className={styles.FazerLogin}>Faça Login</a></p>
                </div>
            </div>
            <Footer />
        </>
    )

}



