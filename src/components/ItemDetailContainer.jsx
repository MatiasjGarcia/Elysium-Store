import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ProductDetail from "./ProductDetail";



export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productRef = doc(db, "products", id);

    getDoc(productRef)
      .then((res) => {
        if (res.exists()) {
          setProduct({ id: res.id, ...res.data() });
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <h2>Cargando producto...</h2>;
  }

  return <ProductDetail product={product} />;
}
