'use client';

// TODO: Pagina produtos é a page principal (excluir essa pagina)
// import React, { useState } from 'react';
import styles from '@/styles/Produto.module.css';
// import { ModalProduto } from '@/components/ModalProduto';

export default function Produto() {
  // const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
            {/* <button className={styles.closeButton} onClick={() => setModalAberto(true)}>Cadastrar produto</button> */}
            <h1 className={styles.title}>Produtor</h1>
            <h2>Cadastre seu Mel</h2>
            {/* <ModalProduto isOpen={modalAberto} onClose={() => setModalAberto(false)} /> */}
        </div>

    </div>
  );
}