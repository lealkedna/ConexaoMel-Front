import React from 'react';
import { FormProduto } from '@/components/FormProduto';
import styles from '@/styles/Produto.module.css';



interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default async function Produto({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                <h1 className={styles.title}>Produtor</h1>
                <h2>Cadastre seu Mel</h2>
                <FormProduto />
            </div>
        </div>
    );

    // const token =  getCookieServer();

    // const response = await api.get("/produto", {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })

    // return(
    //     <main className={styles.container}>
    //         <h1 className={styles.title}> Produtor  </h1>
    //         <h2>cadastre seu Mel</h2>

    //         <FormProduto/>
    //     </main>
    // );
}