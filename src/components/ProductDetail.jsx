import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct(getProduct(2));
  }, []);

  return (
    <>
      <h1>Vista de Detalle de producto {id}</h1>
      <p>ID: {product?.id}</p>
      <h3>Nombre: {product?.title}</h3>
      <img src={product?.image} alt="" />
      <p>Descripcion: {product?.description}</p>
      <p>Categoria: {product?.category}</p>
      <p>Precio ${product?.price}</p>
    </>
  );
}
