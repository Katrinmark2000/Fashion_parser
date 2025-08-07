import { DeveloperCard } from "../../shared/ui/developerCard/developerCard";
import { TagNewSections } from "../../shared/ui/tagNewSection/tagNewSection";
import styles from './developerSection.module.scss'
import { FaCode } from "react-icons/fa6";
import photoNastya from '../../assets/images/photoNastya.jpg'
import photoCatherine from '../../assets/images/photoCatherine.jpg'



export const DeveloperSection = ({}) => {
    return (
      <section id="developers" className={styles.container}>
      <TagNewSections color={"purple"}>
        <FaCode size='15px' style={{paddingRight: 3}}/>
      Meet Our Team
      </TagNewSections>
      <div className={styles.articleText}>
      <h2 className={styles.title}>The Developers Behind FashionParser</h2>
      <p className={styles.text}>Our parser continuously scans top fashion magazines to bring you the most relevant and trending content.</p>
      </div>
      <div className={styles.cardsDeveloperContainer}>
      <DeveloperCard 
      photo={photoNastya} 
      nameDeveloper={'Анастасия Прибылова'} 
      jobTitle={'Backend Developer'} 
      description={"Разработала эффективный парсер для сбора и структурирования информации из различных источников, с акцентом на производительность и надежность."} 
      skills={[ 'Go', 'Docker', 'Postgress', 'что-то еще']} 
      linkGitHub={'https://github.com/pribylovaa'} 
      linkTg={"https://t.me/a_pribylova"}/>
      <DeveloperCard 
      photo={photoCatherine} 
      nameDeveloper={'Катрин Маркова'} 
      jobTitle={'Frontend Developer'} 
      description={"Разработала интерфейс и реализовала клиентскую логику для парсера, включая вёрстку и обработку данных на фронтенде."} 
      skills={[ 'TypeScript', 'React', 'Redux', 'SCSS module', 'Ject', 'Storybook']} 
      linkGitHub={'https://github.com/katrinmark2000'} 
      linkTg={"https://t.me/mkkkash"}/>
      </div>
      </section>
      );
    };