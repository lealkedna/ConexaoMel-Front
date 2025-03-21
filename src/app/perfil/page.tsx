"use client";

import React, { useState, useEffect } from "react";
import styles from "../perfil/Perfil.module.css";
import Header from "@/components/Header"
import { FormProduto } from '@/components/FormProduto';
import { api } from "@/services/api";
import { getVendedorId } from "@/lib/cookiesClient";


export default function Perfil() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [produtos, setProdutos] = useState<any[]>([]);

    const fetchProdutosPerfil = async () => {
        const vendedorId = getVendedorId(); // Pega o vendedorId do produtor logado
        try {
            const response = await api.get(`/produtos/${vendedorId}`); // Endpoint para listar produtos do vendedor
            setProdutos(response.data); // Atualiza o estado com os produtos
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
            <div className={styles.profileCard}>
                <h2 className={styles.profileName}>Nome do Produtor</h2>
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
                        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                            ×
                        </button>
                        <FormProduto />
                    </div>
                </div>
            )}
        </div>
    );
}




{/* <tr>
                            <td>Produto 1</td>
                            <td>Disponível</td>
                            <td>
                                <button className={styles.editBtn}>Editar</button>
                                <button className={styles.deleteBtn}>Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Produto 2</td>
                            <td>Indisponível</td>
                            <td>
                                <button className={styles.editBtn}>Editar</button>
                                <button className={styles.deleteBtn}>Excluir</button>
                            </td>
                        </tr> */}