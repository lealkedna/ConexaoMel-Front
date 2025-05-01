// src/components/ModalProduto.tsx
import React from 'react';
import { FormProduto } from '@/components/FormProduto';
import styles from '@/styles/Produto.module.css';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalProduto({ isOpen, onClose }: ModalProps) {
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
}
