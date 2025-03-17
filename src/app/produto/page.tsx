import React from 'react';
import { FormProduto } from '@/components/FormProduto';
import styles from '@/styles/Produto.module.css';
import {api} from "@/services/api";
import { getCookieServer } from '@/lib/cookiesServer';

export default async function Produto(){
    // const token =  getCookieServer();

    // const response = await api.get("/produto", {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })

    return(
        <main className={styles.container}>
            <h1 className={styles.title}> Produtor  </h1>
            <h2>cadastre seu Mel</h2>

            <FormProduto/>
        </main>
    );
}