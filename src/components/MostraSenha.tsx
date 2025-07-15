'use client';

import { useState } from 'react';
import styles from '@/styles/MostraSenha.module.css'; // ou reusar um CSS existente via props

type Props = {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CampoSenha({ name = "password", placeholder = "Digite sua senha", value, onChange }: Props) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className={styles.inputWrapper}>
      <input
        type={mostrar ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={mostrar}
          onChange={() => setMostrar(!mostrar)}
        />
        Mostrar senha
      </label>
    </div>
  );
}
