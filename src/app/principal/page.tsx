import styles from '../principal/principal.module.css'
import Header from '@/components/Header'

export default function Principal(){
    return(
        <div>
            <Header/>
             <h1 className={styles.container}>Produtos aqui</h1>
             <span className={styles.badge}><a href="./">Página Inicial</a> /Produtos</span>
        </div>
    );
}