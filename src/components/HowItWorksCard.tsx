import React from "react";
import styles from "@/styles/HowItWorksCard.module.css";

interface HowItWorksCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}



const HowItWorksCard = ({ icon, title, description }: HowItWorksCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.element}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
