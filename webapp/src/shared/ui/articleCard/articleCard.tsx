import type { TArticleCard } from "./type";
import styles from './articleCard.module.scss'
import {Button} from '../button/button'
import { getDomainName } from "../../utils/getDomainName";
import { CiCalendar } from "react-icons/ci";
import { LuExternalLink } from "react-icons/lu";
import { useState } from "react";
import myPlaceholder from '../../../assets/images/plugPhoto.jpg'

export const ArticleCard = ({
    articleImage,
    articleTitle,
    articleDescription,
    articleLink,
    articlePublicationTime,
}: TArticleCard) => {
    const domain = getDomainName(articleLink)
    const [imgSrc, setImgSrc] = useState(articleImage);

    return (
   <div className={styles.container}>
    <div className={styles.imageWrapper}>
    <img src={imgSrc} className={styles.image} onError={() => setImgSrc(myPlaceholder)}/>
    </div>
    <div className={styles.textBlock}>
<div className={styles.headerArticle}>
    <p className={styles.magazine}>
      {domain}
    </p>
    <CiCalendar size='10px' color="#9d174d" style={{paddingRight: 6}}/>
    <div className={styles.data}>{articlePublicationTime}</div>
</div>
<h4 className={styles.title}>{articleTitle}</h4>
<p className={styles.text}>{articleDescription}</p>
</div>

<Button color={"primary"} className={styles.buttonArticle}>
<a href={articleLink} target="_blank" className={styles.source}>
    Открыть
<LuExternalLink size='15px' style={{paddingLeft: 6}}/>
</a>
</Button>
   </div>
    )
    }