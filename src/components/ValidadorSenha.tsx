'use client';

import { useState, useEffect } from 'react';
import styles from '@/app/signup/Signup.module.css';

interface Props {
  onSenhaValidaChange: (valida: boolean) => void;
}

export default function ValidadorSenha({ onSenhaValidaChange }: Props) {
  const [senha, setSenha] = useState('');
  const [mostrar, setMostrar] = useState(false);

  const validaTamanho = senha.length >= 8;
  const validaMaiuscula = /[A-Z]/.test(senha);
  const validaNumero = /\d/.test(senha);
  const validaEspecial = /[^A-Za-z0-9]/.test(senha);

  const senhaValida = validaTamanho && validaMaiuscula && validaNumero && validaEspecial;

  useEffect(() => {
    onSenhaValidaChange(senhaValida);
  }, [senhaValida]);

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.input}
        name="password"
        type={mostrar ? 'text' : 'password'}
        placeholder="Digite sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={mostrar}
          onChange={() => setMostrar(!mostrar)}
        />
        Mostrar senha
      </label>

      <div className={styles.contentRegras}>
        <p><strong>Sua senha deve ter:</strong></p>
        <ul className={styles.passwordRegras}>
          <li className={validaTamanho ? styles.valida : styles.invalida}>Pelo menos 8 caracteres</li>
          <li className={validaMaiuscula ? styles.valida : styles.invalida}>Pelo menos 1 letra maiúscula</li>
          <li className={validaNumero ? styles.valida : styles.invalida}>Pelo menos 1 número</li>
          <li className={validaEspecial ? styles.valida : styles.invalida}>Pelo menos 1 caractere especial</li>
        </ul>
      </div>
    </div>
  );
}
