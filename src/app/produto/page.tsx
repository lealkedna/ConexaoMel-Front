import React from 'react';
import { FormProduto } from '@/components/FormProduto';
import styles from '@/styles/Produto.module.css';
import {api} from "@/services/api";
import { getCookieClient } from '@/lib/cookiesClient';

export default function Produto(){
    const token = getCookieClient();

    return(
        <main className={styles.container}>
            <h1 className={styles.title}> Produtor  </h1>
            <h2>cadastre seu Mel</h2>

            <FormProduto/>
        </main>
    );
}