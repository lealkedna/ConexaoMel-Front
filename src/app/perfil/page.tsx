"use client";

import React, { useState } from "react";
import styles from "../perfil/Perfil.module.css";
import Header from "@/components/Header"
import { FormProduto } from '@/components/FormProduto';


export default function Perfil() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                        <tr>
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
                        </tr>
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
