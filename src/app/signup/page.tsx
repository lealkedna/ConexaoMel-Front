// import Image from 'next/image';
// import Link from 'next/link';
'use client'
import { useState } from 'react';
import styles from '@/app/signup/Signup.module.css';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ValidadorSenha from '@/components/ValidadorSenha';
import { SubmitButton } from '@/components/SubmitButton';
// import axios from 'axios';

export default function Signup() {
    const [senhaValida, setSenhaValida] = useState(false);
    const [telefone, setTelefone] = useState("");
    const [erroTelefone, setErroTelefone] = useState("");
    const [email, setEmail] = useState('');
    const [emailValido, setEmailValido] = useState(true);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const novoEmail = e.target.value;
        setEmail(novoEmail);
        const emailEhValido = novoEmail.includes('@') && novoEmail.includes('.com');
        setEmailValido(emailEhValido || novoEmail === ''); // Só mostra erro se estiver preenchido
    };


    async function handleRegister(formData: FormData) {
        const nome = formData.get('nome')?.toString() || "";
        const email = formData.get('email')?.toString() || "";
        const password = formData.get('password')?.toString() || "";
        const telefone = formData.get('telefone')?.toString() || "";

        if (!nome || !email || !telefone || !password) {
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
            toast.warning("Erro ao cadastrar o perfil");
            console.log(err)

        }

        redirect("/logar")
    }

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}>Conexão Mel</h1>
                <div className={styles.card}>
                    <h2 className={styles.subtitle}>Cadastre-se</h2>
                    <form action={handleRegister} className={styles.form}>
                        <input className={styles.input} name="nome" placeholder="Digite o seu nome" />
                        {/* <input className={styles.input} name="email" placeholder="Digite o seu e-mail" /> */}
                        <input
                            className={`${styles.input} ${!emailValido ? styles.inputErro : ''}`}
                            type="email"
                            name="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {!emailValido && (
                            <span className={styles.mensagemErro}>
                                O e-mail deve conter “@” e “.com”
                            </span>
                        )}
                        <input
                            className={styles.input}
                            name="telefone"
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            value={telefone}
                            placeholder="Digite o seu Telefone"
                            onChange={(e) => {
                                const valor = e.target.value;

                                if (/[a-zA-Z]/.test(valor)) {
                                    setErroTelefone("Apenas números são permitidos");
                                } else {
                                    setErroTelefone("");
                                }

                                setTelefone(valor.replace(/\D/g, ""));
                            }}
                        />
                        {erroTelefone && (
                            <span className={styles.mensagemErro}>{erroTelefone}</span>
                        )}

                        <ValidadorSenha onSenhaValidaChange={setSenhaValida} />
                        <SubmitButton texto="Cadastrar" />
                    </form>
                    <p className={styles.link}>Já tem conta? <a href="/logar" className={styles.FazerLogin}>Faça Login</a></p>
                </div>
            </div>
            <Footer />
        </>
    )

}



