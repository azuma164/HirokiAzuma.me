import { JapanesePage } from './pages/JapanesePage';
import { EnglishPage } from './pages/EnglishPage';
import { Header } from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <JapanesePage></JapanesePage>
    </div>
  );
};
