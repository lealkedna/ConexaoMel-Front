import React from "react";
import styles from "@/styles/HowItWorksSection.module.css";
import HowItWorksCard from "./HowItWorksCard";
import { UserPlus, ClipboardList, Package} from "lucide-react"; 

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <UserPlus size={40} color="#fff" />,
      title: "Crie seu perfil",
      description: "Cadastre-se gratuitamente na plataforma",
    },
    {
      icon: <ClipboardList size={40} color="#fff" />,
      title: "Liste seus produtos",
      description: "Adicione fotos e descrições do seu mel",
    },
    {
      icon: <Package size={40} color="#fff" />,
      title: "Receba pedidos",
      description: "Gerencie suas vendas facilmente",
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Como funciona</h2>
      <p className={styles.subtitle}>
        Processo simples e transparente para conectar produtores e consumidores
      </p>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <HowItWorksCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;
