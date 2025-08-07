import type { ReactNode } from 'react';
import styles from './tagNewSection.module.scss'
import clsx from 'clsx';

type TTagNewSections = {
    children: ReactNode;
    color: 'pink' | 'purple'
}

export const TagNewSections = ({children, color}: TTagNewSections) => {
    return(
    <div className={clsx(styles.tagSection, styles[color])} color={color}>
        <span>{children}</span>
        </div>
    )
}