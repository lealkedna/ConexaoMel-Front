"use client";

import React, { useState, useEffect } from "react";
import styles from "../perfil/Perfil.module.css";
import Header from "@/components/Header";
import { FormProduto } from '@/components/FormProduto';
import { api } from "@/services/api";
import { IoIosCloseCircleOutline } from "react-icons/io";


type Produtor = {
    id: string,
    name: string;
    email: string;
};


export default function Perfil() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [produtos, setProdutos] = useState<any[]>([]);
    const [produtor, setProdutor] = useState<Produtor | null>(null);



    const [view, setView] = useState<'cadastrar' | 'ver'>('cadastrar');

    const fetchProdutosPerfil = async () => {
        try {
            const response = await api.get<Produtor>(`/me`);
            setProdutor(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos do produtor:", error);
        }
    };
    useEffect(() => {
        fetchProdutosPerfil();
    }, []);

    return (
        <div className={styles.perfilContainer}>
            <Header />

            {/* <div className={styles.container}>
                <Sidebar onSelect={setView} />
                <main className={styles.content}>
                    {view === 'cadastrar' ? <FormProduto /> : <FormProduto />}
                </main>
            </div>
             */}
            <div className={styles.profileCard}>
                <h2 className={styles.profileName}>{produtor ? `Olá, ${produtor.name}` : "Carregando..."}</h2>
                <p className={styles.profileDescription}>
                    Breve descrição sobre o produtor e seus produtos.
                </p>
            
            </div>


            <div className={styles.productsCard}>
                <h3>Produtos Cadastrados</h3>
                <table className={styles.productsTable}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.length > 0 ? (
                            produtos.map((produto) => (
                                <tr key={produto.id}>
                                    <td>{produto.nome}</td>
                                    <td>{produto.status}</td>
                                    <td>
                                        <button className={styles.editBtn}>Editar</button>
                                        <button className={styles.deleteBtn}>Excluir</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>Nenhum produto cadastrado.</td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.addProductBtn} onClick={() => setIsModalOpen(true)} >Cadastrar Novo Produto</button>
            </div>
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        {/* <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                        <IoIosCloseCircleOutline color="#f4a261"/>
                        </button> */}
                        <p className={styles.closeButton} onClick={() => setIsModalOpen(false)}><IoIosCloseCircleOutline color="#f4a261" size={28}/></p>

                        <FormProduto />
                    </div>
                </div>
            )}
        </div>
    );
}
