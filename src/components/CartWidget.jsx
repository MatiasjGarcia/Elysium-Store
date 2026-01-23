import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { totalQuantity } = useCart();

  if (totalQuantity === 0) return null;

  return (
    <Link to="/cart">
      🛒 {totalQuantity}
    </Link>
  );
}
