import styles from './app-header.module.scss';
import { FaHeart } from "react-icons/fa";
import { PiSparkle } from "react-icons/pi";
import {Button} from '../../shared/ui/button/button'
import clsx from 'clsx';

export const AppHeader = () => {

  return (
    <header className={clsx(styles.header, styles.blur)}>
      <div className={styles.logo}>
      <FaHeart size={25} color="#ec4899" className={styles.imageLogo}/>
      <PiSparkle size={20} color="#7c2d92"className={styles.imageLogoSparkle}/>
      <span className={styles.logoText}>FashionParser</span>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <a href="#home" className={styles.navLink}>Home</a>
          <a href="#articles" className={styles.navLink}>Articles</a>
          <a href="#developers" className={styles.navLink}>Developers</a>
        </ul>
      </nav>
    </header>
  );
};