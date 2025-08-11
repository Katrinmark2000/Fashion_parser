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
    Поговорим о моде?
    </TagNewSections>
    <div className={styles.homeText}>
    <h1 className={styles.title}>Ваш Портал Новостей о Модном Мире</h1>
    <p className={styles.text}>Откройте для себя новейшие модные тенденции, советы по красоте и идеи стиля из ведущих модных журналов со всего мира — все в одном прекрасном месте.</p>
    </div>
    <div className={styles.cards}>
        <CardHome 
        title={'Анализ в реальном времени'} 
        text={'Постоянно сканирует сайты о моде на предмет последних статей и тенденций.'}
        icon={<FaArrowTrendUp size='21px' color='#ec4899' className={styles.icon} />}/>
          <CardHome 
        title={'Красивый интерфейс'} 
        text={'Элегантный дизайн, превращающий просмотр модного контента в удовольствие'}
        icon={<PiSparkle size='21px' color='#ec4899' className={styles.icon} />}/>
          <CardHome 
        title={'Ссылка на источник'} 
        text={'Для вашего удобства мы оставляем ссылку, по которой вы можете перейти к первоисточнику.'}
        icon={<FaArrowTrendUp size='21px' color='#ec4899' className={styles.icon} />}/>
    </div>
    </section>
  );
};