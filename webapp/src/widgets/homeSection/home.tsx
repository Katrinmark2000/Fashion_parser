import styles from './home.module.scss';
import {Button} from '../../shared/ui/button/button'
import { TagNewSections } from '../../shared/ui/tagNewSection/tagNewSection';
import { PiSparkle } from "react-icons/pi";
import { BsLightningCharge } from "react-icons/bs";
import { CardHome } from '../../shared/ui/cardHome/cardHome';
import { FaArrowTrendUp } from "react-icons/fa6";



export const Home = () => {

  return (
    <section id="home" className={styles.container}>
    <TagNewSections color={'pink'}>
        <PiSparkle size='15px' style={{paddingRight: 3}}/>
    Lets talk about fashion
    </TagNewSections>
    <div className={styles.homeText}>
    <h1 className={styles.title}>Fashion Magazine
    Article Parser</h1>
    <p className={styles.text}>Discover the latest fashion trends, beauty tips, and style inspiration from top fashion magazines around the world, all in one beautiful place.</p>
    </div>
    <div className={styles.cards}>
        <CardHome 
        title={'Real-time Parsing'} 
        text={'Continuously scans fashion websites for the latest articles and trends'}
        icon={<FaArrowTrendUp size='21px' color='#ec4899' className={styles.icon} />}/>
          <CardHome 
        title={'Beautiful Interface'} 
        text={'Elegant, responsive design that makes browsing fashion content a pleasure'}
        icon={<PiSparkle size='21px' color='#ec4899' className={styles.icon} />}/>
          <CardHome 
        title={'Link to source'} 
        text={'For your convenience, we leave a link so that you can follow it to the source'}
        icon={<FaArrowTrendUp size='21px' color='#ec4899' className={styles.icon} />}/>
    </div>
    </section>
  );
};