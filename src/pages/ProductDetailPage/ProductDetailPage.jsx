import { useLocation } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';
import ProductDetailImage from '../../components/productDetailImage/productDetailImage';

const ProductDetailPage = () => {
  const location = useLocation();

  return (
    <>
      <ProductDetail locationData={location} />;
      <ProductDetailImage locationData={location} />;
    </>
  );
};

export default ProductDetailPage;
