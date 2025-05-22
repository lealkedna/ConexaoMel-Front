// components/Sidebar.tsx
import styles from '@/styles/SlideBar.module.css';

interface Props {
  onSelect: (option: 'cadastrar' | 'ver') => void;
}

export default function Sidebar({ onSelect }: Props) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.user}>Olá, Usuário</div>
      <nav>
        <ul>
          <li onClick={() => onSelect('cadastrar')}>Cadastrar Produto</li>
          <li onClick={() => onSelect('ver')}>Meus Produtos</li>
        </ul>
      </nav>
    </aside>
  );
}
