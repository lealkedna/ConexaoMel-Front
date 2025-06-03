// import Image from 'next/image';
// import Link from 'next/link';

import styles from '@/app/signup/Signup.module.css';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
import { toast } from "sonner";
// import axios from 'axios';

export default function Signup() {

    async function handleRegister(formData: FormData) {
        "use server"
        const nome = formData.get('nome')?.toString() || "";
        const email = formData.get('email')?.toString() || "";
        const password = formData.get('password')?.toString() || "";
        const telefone = formData.get('telefone')?.toString() || "";

        if (!nome || !email || !telefone || !password) {
            console.log("Preencha todos os campos");
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
            <div className={styles.container}>
                <h1 className={styles.title}>ConexãoMel</h1>
                <div className={styles.card}>
                    <h2 className={styles.subtitle}>Cadastre-se</h2>
                    <form action={handleRegister} className={styles.form}>
                        <input className={styles.input} name="nome" placeholder="Digite o seu nome" />
                        <input className={styles.input} name="email" placeholder="Digite o seu e-mail" />
                        <input className={styles.input} name="telefone" placeholder="Digite o seu Telefone" />
                        <input className={styles.input} name="password" type="password" placeholder="Crie uma senha" />
                        <p><strong>Regras para a senha:</strong></p>
                        <ul>
                            <li>✅ Pelo menos <strong>8 caracteres</strong></li>
                            <li>✅ Pelo menos <strong>1 letra maiúscula</strong></li>
                            <li>✅ Pelo menos <strong>1 número</strong></li>
                            <li>✅ Pelo menos <strong>1 caractere especial</strong> (ex: ! @ # $ %)</li>
                        </ul>

                        <button type="submit" className={styles.button}>
                            Cadastre-se
                        </button>
                    </form>
                    <p className={styles.link}>Já tem conta? <a href="/logar" className={styles.FazerLogin}>Faça Login</a></p>
                </div>
            </div>
        </>
    )

}



