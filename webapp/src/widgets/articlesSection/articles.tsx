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
import { FilterBar } from "../../shared/ui/filterBar/filterBar";
import { useArticleFilters } from '../../features/articleFilter/articleFilter';

const INITIAL_LIMIT = 6;
const LOAD_MORE_STEP = 9;


export const ArticlesSection = () => {

 const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.article.items);
  const sectionRef = useRef<HTMLElement>(null);

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

  console.log("Articles from store:", articles);
  //используем готовый хук для фильтрации
  const {
    magazines,
    selectedMagazine,
    setSelectedMagazine,
    selectedDate,
    setSelectedDate,
    filteredArticles,
  } = useArticleFilters(articles);

  

const handleLoadMore = () => {
  setLimit((prev) => prev + LOAD_MORE_STEP); // увеличиваем лимит
};

const handleClose = () => {
  setLimit(INITIAL_LIMIT); // сброс обратно до 6 статей
  sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });};


    return (
      <section id="articles" className={styles.container} ref={sectionRef}>
      <TagNewSections color={"pink"}>
      Статьи
      </TagNewSections>
      <div className={styles.articleText}>
      <h2 className={styles.title}>Модный контент</h2>
      <p className={styles.text}>Наш парсер постоянно сканирует ведущие модные журналы, чтобы предоставить вам самый релевантный и актуальный контент.</p>
      </div>
      <FilterBar
        magazines={magazines}
        selectedMagazine={selectedMagazine}
        onSelectMagazine={setSelectedMagazine}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <div className={styles.articles} >
      {filteredArticles.slice(0, limit).map((article, index) => (
          <ArticleCard
            key={`${article.id}-${index}`}
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