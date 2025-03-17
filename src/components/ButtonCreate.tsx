"use client"

import styles from "@/styles/ButtonCreate.module.css";
import { useFormStatus } from "react-dom";

interface Props{
    name: string
}

export function ButtonCreate({name}: Props){
    const { pending } = useFormStatus();
    return(
        <button type="submit" disabled={pending} className={styles.button}>
            {pending? "Carregando" : name}
        </button>
    )
}