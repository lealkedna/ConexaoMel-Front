import React from "react";
// import styles from "@/styles/ModalContato.module.css"


interface ModalProps {
  vendedor: { nome: string; telefone: string } | null;
  onClose: () => void;
}

const ModalVendedor: React.FC<ModalProps> = ({ vendedor, onClose }) => {
  if (!vendedor) return null;

  return (
    <div  onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <h3>Informações do Vendedor</h3>
        <p><strong>Nome:</strong> {vendedor.nome}</p>
        <p><strong>Telefone:</strong> {vendedor.telefone}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ModalVendedor;
