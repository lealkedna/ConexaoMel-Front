import React from "react";
import styles from "@/styles/HowItWorksCard.module.css";

const HowItWorksCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default HowItWorksCard;
