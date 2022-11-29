import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/product/:id' element={<ProductDetailPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
