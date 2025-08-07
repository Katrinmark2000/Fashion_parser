import type { TArticleCard } from "./type";
import styles from './articleCard.module.scss'
import {Button} from '../button/button'
import { getDomainName } from "../../../features/getDomainName/getDomainName";
import { CiCalendar } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";



export const ArticleCard = ({
    articleImage,
    articleTitle,
    articleDescription,
    articleLink,
    articlePublicationTime,
}: TArticleCard) => {
    const domain = getDomainName(articleLink)

    return (
   <div className={styles.container}>
    <div className={styles.imageWrapper}>
    <img src={articleImage} className={styles.image}/>
    </div>
    <div className={styles.textBlock}>
<div className={styles.headerArticle}>
<a href={articleLink} target="_blank" className={styles.source}>
      {domain}
    </a>
    <CiCalendar size='10px' color="#9d174d" style={{paddingRight: 6}}/>
    <div className={styles.data}>{articlePublicationTime}</div>
</div>
<h4 className={styles.title}>{articleTitle}</h4>
<p className={styles.text}>{articleDescription}</p>
<a href={articleLink} target="_blank" className={styles.source}>
<Button color={"primary"} className={styles.buttonArticle}>
    Read More
<LuExternalLink size='15px' style={{paddingLeft: 6}}/>
</Button>
</a>
</div>
   </div>
    )
    }