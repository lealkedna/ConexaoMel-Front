import React from "react";
import styles from "@/styles/HowChatOmelia.module.css";
import HowItWorksCard from "./HowItWorksCard";
import { MessageCircleMore, MessageCirclePlus, FileType2 } from "lucide-react"; 
import Image from "next/image";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: < MessageCirclePlus size={40} color="#fff" />,
      title: "Inicie uma conversa",
      description: "Click na bolinha de chat no canto inferior direito",
    },
    {
      icon: <FileType2 size={40} color="#fff" />,
      title: "Digite sua dúvida",
      description: "Envie sua pergunta sobre Apicultura",
    },
    {
      icon: <MessageCircleMore size={40} color="#fff" />,
      title: "Receba respostas",
      description: "Veja as respostas geradas pela IA",
    },
  ];

  return (
    <section className={styles.section}>
        <div className={styles.header}> 
            <span className={styles.badge}>Conheça o chat Omélia</span>
      <p className={styles.subtitle}>
        Seu assistente virtual para dúvidas sobre Apicultura
      </p>
            <Image
                src="/images/chatOmélia.png"
                alt="Chat Omélia"
                width={300}
                height={300}
                className={styles.image}  
                />

        </div>
      {/* <h2 className={styles.title}>Como funciona</h2> */}
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <HowItWorksCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;

