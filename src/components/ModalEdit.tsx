"use client"

import { ChangeEvent, useState, useEffect ,use } from "react";
import Image from "next/image";
import style from '@/styles/ModalEdit.module.css';
import styles from "@/styles/Produto.module.css";
import { ButtonCreate } from "./ButtonCreate";
import { X } from "lucide-react";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";
import { EditContext } from "@/providers/edit";
import { api } from "@/services/api";
import { getCookieClient } from "@/lib/cookiesClient";

type Produto = {
  id: string;
  descricao: string;
  preco: number;
  imagemName?: string;
  role: string;
};

interface ModalEditProps {
  produto: Produto;
}


export function ModalEdit({ produto }: ModalEditProps){
    const { onRequestClose } = use(EditContext);
    
    
    const [descricao, setDescricao] = useState(produto.descricao);
    const [preco, setPreco] = useState(produto.preco);
    const [previewImage, setPreviewImage] = useState("");
    const [image, setImage] = useState<File>();
    const [role, setRole] = useState(produto.role);


    async function handleEditar(e: React.FormEvent) { 
        e.preventDefault();
        const token = getCookieClient();

        try {
            const formData = new FormData();
            formData.append("descricao", descricao);
            formData.append("preco", String(preco));
            formData.append("role", role);
            
            if (image) {
            formData.append("file", image); 
            }
            
            await api.put(`/produto/${produto.id}`, formData, {
            headers: {
                    Authorization: `Bearer ${token}`,
             },
            });

            toast.success("Produto editado com sucesso!");
            onRequestClose(); 

        } catch (error) {
            console.error("Erro ao editar produto:", error);
            toast.error("Erro ao editar produto");
        }
    };
        

    useEffect(() => {
    if (produto?.imagemName) {
        setPreviewImage(produto.imagemName); 
    }
    }, [produto]);

     function handleFile(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!["image/jpeg", "image/png"].includes(file.type)) {
        toast.warning("Formato de imagem inválido");
        return;
        }

        setImage(file);
        setPreviewImage(URL.createObjectURL(file));
    };

    return(
        <div className={style.dialogContainer}>
            <section className={style.dialogContent}>
                <button className={style.dialogBack} onClick={onRequestClose}>
                    <X size={40} color='#FF3f4b'/>
                </button>
                <article>
                    <h2 className={styles.subTitle}>Você está editando esse produto</h2>
                    <div>
                     <form className={styles.form} onSubmit={handleEditar}>
                        <p className={styles.descricaoCampo}>Adicione uma imagem do seu produto (JPG ou PNG)</p>
                            <label className={styles.labelImage} >
                                <span className={styles.span}>
                                    <UploadCloud size={24} color="#2A1E17" />
                                </span>
                                <input className={styles.input} name="file" type='file' accept="image/png, image/jpeg" onChange={handleFile} />

                                {previewImage && (
                                    <Image
                                        alt="Imagem de visualização"
                                        src={previewImage}
                                        className={styles.previewImage}
                                        fill={true}
                                        quality={100}
                                        priority={true}
                                    />
                                )}
                            </label>
                            <p className={styles.descricaoCampo}>Descreva as características do seu mel (sabor, cor, origem...)</p>
                            <textarea
                                className={`${styles.camposFormulario} ${styles.textarea}`}
                                placeholder="Dê uma descrição do seu mel"
                                name="descricao"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                                required>
                            </textarea>
                            <p className={styles.descricaoCampo}>Informe o preço (R$)</p>
                            <input
                                type="number"
                                name="preco" placeholder="Qual o preço por Litro?"
                                value={preco}
                                onChange={(e) => setPreco(Number(e.target.value))}
                                required
                                className={styles.camposFormulario}>
                            </input>
                            <p className={styles.descricaoCampo}>Selecione a florada do seu mel</p>

                            <label htmlFor="role">Selecione o tipo de árvore:</label>
                            <select className={styles.camposFormulario} 
                                    name="role" id="role" 
                                    required 
                                    value={role}  
                                    onChange={(e) => setRole(e.target.value)}>
                    
                                <option value="Cajueiro">Cajueiro</option>
                                <option key={1} value="Aroeira">Aroeira</option>
                                <option value="Eucalipto">Eucalipto</option>
                                <option value="Laranjeira">Laranjeira</option>
                                <option value="Marmeleiro">Marmeleiro</option>
                                <option value="Silvestre">Silvestre</option>
                            </select>

                            <ButtonCreate name="Editar produto" />
                        </form>
                
                    </div>
                </article>
            </section>
        </div>
    )
};