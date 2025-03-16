"use client"; // Indica que este componente é do lado do cliente

import React from "react";
import { useRouter } from "next/navigation"; 
import styles from "@/styles/Button.module.css";

const Button = ({ text, primary = false, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      className={primary ? styles.primary : styles.secondary}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
