import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); //  ID dinámico
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const prod = getProduct(id);
    setProduct(prod);
  }, [id]);
    if (!product) {
    return <h2>Cargando producto...</h2>;
  }

  return (
    <>
      <h1>Vista de Detalle de producto {id}</h1>
      <p>ID: {product.id}</p>
      <h3>Nombre: {product.title}</h3>
      <img src={product.image} alt={product.title} width={300} />
      <p>Descripcion: {product.description}</p>
      <p>Categoria: {product.category}</p>
      <p>Precio ${product.price}</p>
    </>
  );
}
