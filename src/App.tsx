import { JapanesePage } from './pages/JapanesePage';
import { EnglishPage } from './pages/EnglishPage';
import { Header } from './components/Header';
import { Routes, Route, Navigate } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Navigate to='/HirokiAzuma.me' />} />
        <Route path='/HirokiAzuma.me' element={<JapanesePage />} />
        <Route path='/HirokiAzuma.me/english' element={<EnglishPage />} />
        <Route path='*' element={<div className='pt-16'>Not Found</div>} />
      </Routes>
    </div>
  );
};
