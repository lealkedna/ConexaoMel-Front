'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './cadastro.module.css';

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        senha: '',
        tipoConta: 'vendedor',
    });

    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/cadastro', formData);
            router.push('/login');
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>ConexãoMel</h1>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input className={styles.input} name="nome" placeholder="Digite o seu nome" value={formData.nome} onChange={handleChange} required />
                    <input className={styles.input} name="email" placeholder="Digite o seu e-mail" value={formData.email} onChange={handleChange} required />
                    <input className={styles.input} name="telefone" placeholder="Digite o seu Telefone" value={formData.telefone} onChange={handleChange} required />
                    <input className={styles.input} name="senha" type="password" placeholder="Crie uma senha" value={formData.senha} onChange={handleChange} required />
                    {/* <div className={styles.agrupamento}>
                        <p className={styles.subtitle}>Tipo de Conta* </p>
                        <label >
                            <input type="radio" name="tipoConta" value="vendedor" checked={formData.tipoConta === 'vendedor'} onChange={handleChange} />
                            Vendedor
                        </label>
                        <label style={{ marginLeft: '16px' }}>
                            <input type="radio" name="tipoConta" value="comprador" checked={formData.tipoConta === 'comprador'} onChange={handleChange} />
                            Comprador
                        </label>
                    </div> */}
                    <button type="submit" className={styles.button}>
                        Cadastre-se
                    </button>
                </form>
                <p className={styles.link}>Já tem conta? <a href="/login">Fazer Login</a></p>
            </div>
        </div>
    );
};

export default Cadastro;
