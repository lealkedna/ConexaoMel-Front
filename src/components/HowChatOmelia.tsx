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
      description: "Envie sua pergunta",
    },
    {
      icon: <MessageCircleMore size={40} color="#fff" />,
      title: "Receba respostas",
      description: "Veja as respostas geradas pela IA",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/chatBot-semfundo.png"
            alt="Chat Omélia"
            width={600}
            height={500}
            className={styles.image}
          />
        </div>

        <div className={styles.textContainer}>

          <div className={styles.header}>
            <span className={styles.badge}>Conheça o chat Omélia</span>
            <p className={styles.subtitle}>
              Seu assistente virtual para dúvidas sobre a Plataforma Conexão Mel.
            </p>

          </div>
          {/* <h2 className={styles.title}>Como funciona</h2> */}
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <HowItWorksCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

