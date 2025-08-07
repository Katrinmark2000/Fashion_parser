import styles from './footer.module.scss';

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTextBlock}>
      <span className={styles.text}>© 2025 FashionParser. Made with Love for fashion Lovers.</span>
      </div>
    </footer>
  );
};