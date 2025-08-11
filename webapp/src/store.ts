import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import { articleSlice } from './entities/slice/articleSlice';

const rootReducer = {
  article: articleSlice.reducer,  // ключ здесь — (новости)
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
