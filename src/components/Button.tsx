"use client"; // Indica que este componente é do lado do cliente

import React from "react";
import { useRouter } from "next/navigation"; 
import styles from "@/styles/Button.module.css";


interface ButtonProps {
  text: string;
  primary?: boolean;
  href?: string;  
}

const Button: React.FC<ButtonProps> = ({ text, primary = false, href }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Redireciona com router.push
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
