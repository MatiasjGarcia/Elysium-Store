import { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

export default function ProductDetail({ product }) {
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const onAdd = (quantity) => {
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <>
     <img
        src={product.image}
        alt={product.title}
        style={{ width: 300, objectFit: "contain" }}
      />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      {product.stock === 0 && <p>Producto sin stock</p>}

      {!added ? (
        <ItemCount stock={product.stock} onAdd={onAdd} />
      ) : (
        <p>Producto agregado al carrito 🛒</p>
      )}
    </>
  );
}
