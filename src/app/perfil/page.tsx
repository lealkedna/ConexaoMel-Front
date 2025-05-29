// "use client";

// import React from "react";
// import styles from "../perfil/Perfil.module.css";
// import Header from "@/components/Header";
// import SideBar from "@/components/SideBar";
// import { FormProduto } from '@/components/FormProduto';
// import VisualizacaoProducts from "@/components/VisualizacaoProduts";
// import Floradas from "@/components/Floradas";
// import {  useSearchParams } from 'next/navigation'


// export default function Perfil() {
//     const searchParams = useSearchParams();
//     const view = searchParams.get('view');
    

//     // const [isModalOpen, setIsModalOpen] = useState(false);


//   const renderContent = () => {
//     switch (view) {
//       case 'cadastrar':
//         return <FormProduto />;
//       case 'meusprodutos':
//         return <VisualizacaoProducts />;
//       default:
//         return <Floradas/>;
//     }
//   };

//     return (
//         <div className={styles.perfilContainer}>
//             <Header />

//             {/* <div className={styles.buttonContainer}>
//                 <button className={styles.addProductBtn} onClick={() => setIsModalOpen(true)} >Cadastrar Novo Produto</button>
//             </div>
//             {isModalOpen && (
//                 <div className={styles.modalOverlay}>
//                     <div className={styles.modalContent}>
//                         <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
//                         <IoIosCloseCircleOutline color="#f4a261"/>
//                         </button>
//                         <p className={styles.closeButton} onClick={() => setIsModalOpen(false)}><IoIosCloseCircleOutline color="#f4a261" size={28}/></p>

//                         <FormProduto />
//                     </div>
//                 </div>
//             )}  */}
//             <SideBar/>
//             <div className="content">{renderContent()}</div>
//         </div>
//     );
// }

// src/app/perfil/page.tsx
import { Suspense } from "react";
import PerfilContent from "./perfilContent";

export default function PerfilPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PerfilContent />
    </Suspense>
  );
}
