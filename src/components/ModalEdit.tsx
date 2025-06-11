"use client"

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import style from '@/styles/ModalEdit.module.css';
import styles from "@/styles/Produto.module.css";
import { ButtonCreate } from "./ButtonCreate";
import { X } from "lucide-react";
import { UploadCloud } from "lucide-react";
import { toast } from "sonner";

export function ModalEdit(){
    const [previewImage, setPreviewImage] = useState("");
    const [image, setImage] = useState<File>();


    async function handleEdit() {
        return;
    };

     function handleFile(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const image = e.target.files[0];

            if (image.type !== "image/jpeg" && image.type !== "image/png") {
                toast.warning("Formato de Imagem invalido só aceitamos png ou jpeg");
                console.log("Formato de Imagem invalido só aceitamos png ou jpeg");
                return;
            };
            setImage(image);
            setPreviewImage(URL.createObjectURL(image));

        }
    };

    return(
        <div className={style.dialogContainer}>
            <section className={style.dialogContent}>
                <button className={style.dialogBack}>
                    <X size={40} color='#FF3f4b'/>
                </button>
                <article>
                    <h2 className={styles.subTitle}>Você está editando esse produto</h2>
                    <div>
                     <form className={styles.form} action={handleEdit}>
                        <p className={styles.descricaoCampo}>Adicione uma imagem do seu produto (JPG ou PNG)</p>
                            <label className={styles.labelImage} >
                                <span className={styles.span}>
                                    <UploadCloud size={24} color="#f4a261" />
                                </span>
                                <input className={styles.input} type='file' accept="image/png, image/jpeg" required onChange={handleFile} />

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
                                required>
                            </textarea>
                            <p className={styles.descricaoCampo}>Informe o preço (R$)</p>
                            <input
                                type="number"
                                name="preco" placeholder="Qual o preço por Litro?"
                                required
                                className={styles.camposFormulario}>
                            </input>
                            <p className={styles.descricaoCampo}>Selecione a florada do seu mel</p>

                            <label htmlFor="role">Selecione o tipo de árvore:</label>
                            <select className={styles.camposFormulario} name="role" id="role" required>
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