"use client";
import { useFormStatus } from "react-dom";
import styles from "@/app/logar/Logar.module.css";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={styles.button}
      id="botaoEntrar"
    >
      {pending ? (
        <div className={styles.spinner}></div>
      ) : (
        "Entrar"
      )}
    </button>
  );
}
