import { useMemo, useState } from 'react';
import { getDomainName } from '../../shared/utils/getDomainName'
import { Article } from '../../entities/slice/articleSlice';
import {MAGAZINES} from '../articleFilter/consts/magazines'

export function useArticleFilters(articles: Article[]) {
  const [selectedMagazine, setSelectedMagazine] = useState('all');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  //фильтрация по журналу и дате
  const filteredArticles = useMemo(() => {
    return articles.filter((a) => {
        //получаем название из домена, соответсвующее value в MAGAZINES
      const domain = getDomainName(a.link);

      const matchesMagazine =
        selectedMagazine === 'all' || domain === selectedMagazine;

        //сравниваем даты через UTC
        const pubDate = new Date(a.publicationTime);
        const matchesDate =
        !selectedDate ||
        (pubDate.getFullYear() === selectedDate.getFullYear() &&
         pubDate.getMonth() === selectedDate.getMonth() &&
         pubDate.getDate() === selectedDate.getDate());

        console.log("Article:", a.title);
        console.log("Publication:", a.publicationTime);
        console.log("Selected date:", selectedDate);
        console.log("Matches date:", matchesDate);

      return matchesMagazine && matchesDate;
    });
  }, [articles, selectedMagazine, selectedDate]);

  return {
    magazines: MAGAZINES,
    selectedMagazine,
    setSelectedMagazine,
    selectedDate,
    setSelectedDate,
    filteredArticles,
  };
}