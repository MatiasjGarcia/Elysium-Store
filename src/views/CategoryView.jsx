import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export default function CategoryView() {
  const { catName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    let q;

    // filtro por género
    if (catName === "hombre" || catName === "mujer") {
      q = query(
        productsRef,
        where("gender", "array-contains", catName)
      );
    } 
    // filtro por categoría (buzos, pantalones, etc)
    else {
      q = query(
        productsRef,
        where("category", "==", catName)
      );
    }

    getDocs(q).then((res) => {
      const items = res.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(items);
    });

  }, [catName]);

  return (
    <>
      <h1>Categoría: {catName}</h1>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
