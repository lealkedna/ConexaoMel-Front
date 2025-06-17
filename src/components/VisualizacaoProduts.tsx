"use client";

import { useEffect, useState, use} from "react";
import { api } from "@/services/api";
import Image from "next/image";
import styles from "@/styles/VisualizacaoProduts.module.css";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { toast } from "sonner";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import { EditContext } from "@/providers/edit";

import { ModalEdit } from "./ModalEdit";
const MySwal = withReactContent(Swal);


type Produto = {
  id: string;
  preco: number;
  imagemName: string;
  descricao: string;
};

export default function VisualizacaoProducts() {
  const { isOpen, onRequestOpen, onRequestClose } = use(EditContext);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  useEffect(() => {
    async function fetchMeusProdutos() {
      try {
        const response = await api.get<Produto[]>("/me/meusprodutos");
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos do produtor:", error);
      }
    };

    fetchMeusProdutos();
  }, []);

   async function handleDelete(id: string) {
     const result = await MySwal.fire({
      title: 'Excluir Produto?',
      text: 'Você tem certeza que deseja excluir este item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    });

      if (!result.isConfirmed) return; 
      
      try {
        await api.delete(`/produto/${id}`);
        setProdutos((prev) => prev.filter((produto) => produto.id !== id));
        toast.success("Produto excluido com sucesso!");
      } catch (error) {
        console.error('Erro ao excluir:', error);
        toast.warning("Erro ao tentar excluir produto");
      }
  };

  function handleEdit() {
    onRequestOpen();  
  };

  return (
    <> 
    <div className={styles.main}>
      <div className={styles.title}>Meus produtos</div>
      <div className={styles.content} >
        {produtos.map(({ id, preco, imagemName, descricao }) => (
        <div className={styles.list} key={id} >
          <Image 
            src={imagemName} 
            className={styles.previewImage}
            alt="produto" 
            width={100}
            height={100}
            quality={100}
            priority={true}
            />
            <div className={styles.info}> 
              <h3 className={styles.descricao} >{descricao}</h3>
              <p className={styles.preco} >Preço: R${preco}</p>
            </div>
            <button onClick={() => handleDelete(id)}><MdDeleteForever size={25} color="#FFB64CAD"/></button>

            <button onClick={() => {
                  setProdutoSelecionado({ id, preco, imagemName, descricao });
                  onRequestOpen();
                }}>
                  <BiSolidEditAlt size={25} color="#FFB64CAD"/>
            </button>
        </div>
      ))}
      </div>
    </div>
      {isOpen && produtoSelecionado && (
        <ModalEdit produto={produtoSelecionado} />
      )}
   </>
  );
}
