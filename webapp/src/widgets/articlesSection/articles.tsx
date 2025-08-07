import { ArticleCard } from "../../shared/ui/articleCard/articleCard";
import { Button } from "../../shared/ui/button/button";
import { TagNewSections } from "../../shared/ui/tagNewSection/tagNewSection";
import styles from './articles.module.scss'
import { LuExternalLink } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, type RootState } from '../../store';
import { fetchArticle } from '../../slice/articleSlice';
import { formatDate } from "../../features/formatData";
import { stripHtml } from "../../features/stripHtml";

export const ArticlesSection = () => {

 const dispatch = useDispatch();
  const article = useSelector((state: RootState) => state.article.items);
  const [limit, setLimit] = useState(() => {
    // При инициализации пытаемся взять limit из localStorage
    const saved = localStorage.getItem("articlesLimit");
    return saved ? Number(saved) : 10; // если нет — 10 по умолчанию
  });
  
  useEffect(() => {
    // Сохраняем в localStorage при каждом изменении limit
    localStorage.setItem("articlesLimit", String(limit));
  }, [limit]);

 // получаем данные с сервера
 useEffect(() => {
  dispatch(fetchArticle(limit));
}, [dispatch, limit]);

const handleLoadMore = () => {
  setLimit((prev) => prev + 11); // увеличиваем лимит
};

    return (
      <section id="articles" className={styles.container}>
      <TagNewSections color={"pink"}>
      Latest Articles
      </TagNewSections>
      <div className={styles.articleText}>
      <h2 className={styles.title}>Fashion Content</h2>
      <p className={styles.text}>Our parser continuously scans top fashion magazines to bring you the most relevant and trending content.</p>
      </div>
      <div className={styles.articles}>
      {article.map((article) => (
          <ArticleCard
            id={Number(article.id)}
            articleImage={article.image}
            articleTitle={article.title}
            articleDescription={stripHtml(article.description)}
            articleLink={article.link}
            articlePublicationTime={formatDate(article.publicationTime)}
          />
        ))}
       </div>
       <div className={styles.buttonArticles}>
       <Button color={"primary"} onClick={handleLoadMore}>
    Load More Articles
      <LuExternalLink size='15px' style={{paddingLeft: 6}}/>
        </Button>
        </div>
      </section>
    );
  };