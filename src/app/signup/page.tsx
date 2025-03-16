// import Image from 'next/image';
// import Link from 'next/link';
import styles from '@/app/signup/Signup.module.css';
import { api } from "@/services/api";
import { redirect } from 'next/navigation';
// import axios from 'axios';

export default function Signup(){

    async function handleRegister(formData: FormData){
        "use server"
        const nome = formData.get('nome')?.toString() || "";
        const email = formData.get('email')?.toString() || "";
        const password = formData.get('password')?.toString() || "";
        const telefone = formData.get('telefone')?.toString() || "";

        if (!nome  || !email  || !telefone || !password){
            console.log("Preencha todos os campos");
            return;
        }

        try{
            await api.post("/cadastro", {
                name: nome,
                email: email,
                password: password, 
                telefone: telefone,
                role: "VENDEDOR"
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
        });
            
        }catch(err){
            console.log('error');
            console.log(err)

        }

        // console.log(nome);
        // console.log(email);
        // console.log(telefone);
        // console.log(senha);

        redirect("/logar")
    }

    return(
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>ConexãoMel</h1>
            <div className={styles.card}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <form action={handleRegister} className={styles.form}>
                    <input className={styles.input} name="nome" placeholder="Digite o seu nome" />
                    <input className={styles.input} name="email" placeholder="Digite o seu e-mail"/>
                    <input className={styles.input} name="telefone" placeholder="Digite o seu Telefone" />
                    <input className={styles.input} name="password"  placeholder="Crie uma senha" />
                    <button type="submit" className={styles.button}>
                        Cadastre-se
                    </button>
                </form>
                <p className={styles.link}>Já tem conta? <a href="/logar">Fazer Login</a></p>
            </div>
        </div>
        </>
    )

}

    

