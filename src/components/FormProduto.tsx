"use client"

import { ChangeEvent, useState } from "react";
import Image from "next/image";
import styles from "@/styles/Produto.module.css";
import { UploadCloud } from "lucide-react";
import { ButtonCreate } from "./ButtonCreate";

export function FormProduto(){
    const [image, setImage] = useState<File>();
    const [previewImage, setPreviewImage] = useState("")

    function handleFile(e: ChangeEvent<HTMLInputElement>){
        if (e.target.files && e.target.files[0]){
            const image = e.target.files[0];
            
            if (image.type !== "image/jpeg" && image.type !== "image/png"){
                console.log("Formato de Imagem inalido só aceitamos png ou jpeg");
                return;
            };
            setImage(image);
            setPreviewImage(URL.createObjectURL(image));

        }
    };
    function handleCadastrar(){

    }

    return(
        <div>
            <form className={styles.form} action={handleCadastrar}>
                <label className={styles.labelImage}>
                    <span className={styles.span}>
                        <UploadCloud size={24} color="#f4a261"/>
                    </span>

                    <input className={styles.input} type='file' accept="image/png, image/jpeg" required onChange={handleFile}/>

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
                <textarea 
                    className={`${styles.camposFormulario} ${styles.textarea}`} 
                    placeholder="Dê uma descrição do seu mel" 
                    name="description" 
                    required>
                </textarea>
                <input 
                    type="number" 
                    name="price" placeholder="Qual o preço por Litro?" 
                    required 
                    className={styles.camposFormulario}>    
                </input>
                <select className={styles.camposFormulario} name="florada">
                    <option key={1} value={1}>Aroeira</option>
                    <option>Cajueiro</option>
                    <option>Eucalipto</option>
                    <option>Laranjeira</option>
                    <option>Marmeleiro</option>
                    <option>Silvestre</option>
                </select>
                    <ButtonCreate name="Cadastar Meu Produto"/>
            </form>
        </div>
    )
}