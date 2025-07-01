// src/app/perfil/PerfilContent.tsx
"use client";

import React from "react";
// import styles from "../perfil/Perfil.module.css";
import styles from "./Css.module.css"
import { useSearchParams } from "next/navigation";
import { FormProduto } from "@/components/FormProduto";
import VisualizacaoProducts from "@/components/VisualizacaoProduts";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PerfilContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  const renderContent = () => {
    switch (view) {
      case "cadastrar":
        return <FormProduto />;
      default:
        return <VisualizacaoProducts />;
    }
  };

  return (
    <>    
      <Header />
     <div className={styles.perfilContainer}>
      <div className={styles.sidedisplay}>
        <div className={styles.sidecanto}>
          <SideBar />
        </div>
        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
      <Footer />
    </>
  );
}
