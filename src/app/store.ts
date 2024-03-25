import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import quesitonsReducer from '../features/questions/questionsSlice';
import axios from 'axios';
import commentsReducer from '../features/comments/commentsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    questions: quesitonsReducer,
    comments: commentsReducer,
    categories: categoriesReducer
  },
});

export const myAxios = axios.create({
  baseURL: "http://localhost:5000"
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
