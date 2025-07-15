// components/Sidebar.tsx
"use client"
import React, { useState, useEffect } from "react";
import styles from '@/styles/SideBar.module.css';
import { IoIosAddCircle, IoIosLogOut } from "react-icons/io";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { IoEye} from "react-icons/io5";
import { deleteCookie } from "cookies-next";
import { useRouter } from 'next/navigation';
import { api } from "@/services/api";
import { toast } from "sonner";

type Produtor = {
    id: string,
    name: string;
    email: string;
};

export default function Sidebar() {
  const router = useRouter();
  const [produtor, setProdutor] = useState<Produtor | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);
  
   const toggleMenu = () => {
          setMenuAberto(!menuAberto);
      };

  async function handleLougot() {
          deleteCookie("signin", {path: "/"});
          toast.success("Você saiu da plataforma. Até a próxima !")
          router.replace('/');
      }

  const fetchProdutosPerfil = async () => {
          try {
              const response = await api.get<Produtor>(`/me`);
              setProdutor(response.data);
              console.log(response.data);
          } catch (error) {
            toast.warning("Erro ao buscar dados do produtor");
              console.error("Erro ao buscar dados do produtor", error);
          }
      };
      useEffect(() => {
          fetchProdutosPerfil();
      }, []);
  

  return (
    <> 
     <button className={styles.menuToggle} onClick={toggleMenu}>
        {menuAberto ? <FaLessThan size={30} /> : <FaGreaterThan size={30} />}
      </button>

      <aside className={`${styles.sidebar} ${menuAberto ? styles.open : ''}`} >
        <div className={styles.title}>
          <h1 className={styles.sidebar_header}>{produtor ? `Olá, ${produtor.name}` : "Carregando..."}</h1>
          <form action={handleLougot}>
                <button type="submit" className={styles.bnt}>
                  <span className={styles.span}>
                      <IoIosLogOut size={30} color="red"/>
                    <span>Sair</span>
                  </span>
                </button>
          </form>
        </div>
        <nav className={styles.nav}>
          <button className={styles.bnt} 
            onClick={() => router.push('/perfil?view=meusprodutos')}
            >
            <span className={styles.spanBnt}>
              <IoEye size={30}/>
              <span>Meus produtos</span>
            </span>
          </button>
          <button className={styles.bnt} onClick={() => router.push('/perfil?view=cadastrar')}>
            <span className={styles.spanBnt}>
              <IoIosAddCircle size={30}/>
              <span >Cadastrar produto</span>
            </span>
          </button>

          </nav>
      </aside>
      </>
  );
}
