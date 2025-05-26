"use client";

import React, { useState, useEffect } from "react";
import styles from "../perfil/Perfil.module.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { FormProduto } from '@/components/FormProduto';
import { api } from "@/services/api";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";


type Produtor = {
    id: string,
    name: string;
    email: string;
};


export default function Perfil() {
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [produtos, setProdutos] = useState<any[]>([]);
    const [produtor, setProdutor] = useState<Produtor | null>(null);



    const [view, setView] = useState<'cadastrar' | 'ver'>('cadastrar');

    const fetchProdutosPerfil = async () => {
        try {
            const response = await api.get<Produtor>(`/me`);
            setProdutor(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Erro ao buscar produtos do produtor:", error);
        }
    };
    useEffect(() => {
        fetchProdutosPerfil();
    }, []);

    async function handleLougot() {
        deleteCookie("signin", {path: "/"});

        router.replace('/');
    }

    return (
        <div className={styles.perfilContainer}>
            <Header />

            <div className={styles.buttonContainer}>
                <button className={styles.addProductBtn} onClick={() => setIsModalOpen(true)} >Cadastrar Novo Produto</button>
            </div>
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalContent}>
                        {/* <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                        <IoIosCloseCircleOutline color="#f4a261"/>
                        </button> */}
                        <p className={styles.closeButton} onClick={() => setIsModalOpen(false)}><IoIosCloseCircleOutline color="#f4a261" size={28}/></p>

                        <FormProduto />
                    </div>
                </div>
            )}
            <SideBar/>
        </div>
    );
}
