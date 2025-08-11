import { ArticleCard } from "../../shared/ui/articleCard/articleCard";
import { Button } from "../../shared/ui/button/button";
import { TagNewSections } from "../../shared/ui/tag/tag";
import styles from './articles.module.scss'
import { LuExternalLink } from "react-icons/lu";
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector, type RootState } from '../../store';
import { fetchArticle } from '../../entities/slice/articleSlice';
import { formatDate } from "../../shared/utils/formatData";
import { stripHtml } from "../../shared/utils/stripHtml";

const INITIAL_LIMIT = 6;
const LOAD_MORE_STEP = 9;
const MIN_LIMIT = 6;


export const ArticlesSection = () => {

 const dispatch = useDispatch();
  const article = useSelector((state: RootState) => state.article.items);
  const [limit, setLimit] = useState(() => {
    // При инициализации пытаемся взять limit из localStorage
    const saved = localStorage.getItem("articlesLimit");
    return saved ? Number(saved) : INITIAL_LIMIT; // если нет — 6 по умолчанию
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
  setLimit((prev) => prev + LOAD_MORE_STEP); // увеличиваем лимит
};

const handleClose = () => {
  setLimit(MIN_LIMIT); // сброс обратно до 6 статей
  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });};

const sectionRef = useRef<HTMLElement>(null);


    return (
      <section id="articles" className={styles.container} ref={sectionRef}>
      <TagNewSections color={"pink"}>
      Статьи
      </TagNewSections>
      <div className={styles.articleText}>
      <h2 className={styles.title}>Модный контент</h2>
      <p className={styles.text}>Наш парсер постоянно сканирует ведущие модные журналы, чтобы предоставить вам самый релевантный и актуальный контент.</p>
      </div>
      <div className={styles.articles} >
      {article.slice(0, limit).map((article) => (
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
        <div className={styles.buttons}>
       <Button color={"primary"} onClick={handleLoadMore}>
    Открыть больше статей
      <LuExternalLink size='15px' style={{paddingLeft: 6}}/>
        </Button>
        {limit > 6 && (
        <Button color={"shaded"} onClick={handleClose}>
          Закрыть
        </Button>
        )}
        </div>
        </div>
      </section>
    );
  };