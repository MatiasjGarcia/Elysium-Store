import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory } from '../../asyncMock';
import ProductCard from '../components/ProductCard';

export default function CategoryView() {
  const { catName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    getCategory(catName).then((response) => setCategoryProducts(response));
  }, [catName]);

    return(
        <>
        <h1>Categoria {catName}</h1>
      {categoryProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
        </>
    );
}