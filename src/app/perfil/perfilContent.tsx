// src/app/perfil/PerfilContent.tsx
"use client";

import React from "react";
import styles from "../perfil/Perfil.module.css";
import { useSearchParams } from "next/navigation";
import { FormProduto } from "@/components/FormProduto";
import VisualizacaoProducts from "@/components/VisualizacaoProduts";
import Floradas from "@/components/Floradas";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

export default function PerfilContent() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");

  const renderContent = () => {
    switch (view) {
      case "cadastrar":
        return <FormProduto />;
      case "meusprodutos":
        return <VisualizacaoProducts />;
      default:
        return <Floradas />;
    }
  };

  return (
    <div className={styles.perfilContainer}>
      <Header />
      <div className={styles.sidedisplay}>
        <div className={styles.sidecanto}>
          <SideBar />
        </div>
        <div className={styles.content}>{renderContent()}</div>
      </div>
    </div>
  );
}
