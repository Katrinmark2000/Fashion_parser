import type { ReactNode } from 'react';
import styles from './cardHome.module.scss'

export type TCardHome = {
    title: string;
    text: string;
    icon: ReactNode;
}

export const CardHome = ({icon, title, text}: TCardHome) => {
    return(
    <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.icon}>
            {icon}
        </div>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.text}>{text}</p>
    </div>
    </div>
    )
}