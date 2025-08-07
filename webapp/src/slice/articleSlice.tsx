import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type Article = {
    id: number;
    image: string;
    title: string;
    description: string;
    link: string;
    publicationTime: string;
};

type ArticleState = {
  items: Article[];
  loading: boolean;
    error: string | null;
};

const initialState: ArticleState = {
  items: [],
  loading: true,
    error: null,
};

export const fetchArticle = createAsyncThunk('article/fetch', 
async (limit: number) => {
  const res = await fetch(`http://localhost:8080/news/latest?limit=${limit}`);
  const data = await res.json();

  return data.map((item: any) => ({
    id: String(item.id),
    image: item.image_url,
    title: item.title,
    description: item.description,
    link: item.link,
    publicationTime: item.pub_date,
  }));
});

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: { },
  selectors: {
    articleLoadingSelector: (state) => state.loading,
	articleErrorSelector: (state) => state.error,
  },
  extraReducers: (builder) => {
    builder
   // загрузка карточек
			.addCase(fetchArticle.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchArticle.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message ?? 'Ошибка загрузки статей';
			})
			.addCase(fetchArticle.fulfilled, (state, action) => {
				state.loading = false;
        const existingIds = new Set(state.items.map((item: Article) => item.id));
        const newItems = action.payload.filter((item: Article) => !existingIds.has(item.id));

        state.items = [...state.items, ...newItems];
			})
  },
});

export default articleSlice.reducer;
