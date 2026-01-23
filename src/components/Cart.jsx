import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

export default function Cart() {
    const { cart, removeItem, clearCart, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);

    if (cart.length === 0 && !orderId) {
        return <h2>El carrito está vacío</h2>;
    }

    const handleCheckout = () => {
        const order = {
            buyer: {
                name: "Matias",
                email: "test@test.com",
            },
            items: cart.map(item => ({
                id: item.id,
                title: item.title,
                price: item.price,
                quantity: item.quantity,
            })),
            total: totalPrice,
            date: Timestamp.fromDate(new Date()),
        };

        const ordersRef = collection(db, "orders");

        addDoc(ordersRef, order).then((docRef) => {
            setOrderId(docRef.id);
            clearCart();
        });
    };

    if (orderId) {
        return (
            <>
                <h2>Compra realizada con éxito 🎉</h2>
                <p>Tu número de orden es:</p>
                <strong>{orderId}</strong>
            </>
        );
    }

    return (
        <>
            <h1>Carrito</h1>

            {cart.map((item) => (
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 20,
                        borderBottom: "1px solid #ccc",
                        padding: 10
                    }}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: 80, objectFit: "contain" }}
                    />

                    <div>
                        <h3>{item.title}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: ${item.price * item.quantity}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <h2>Total: ${totalPrice}</h2>

            <button onClick={clearCart}>Vaciar carrito</button>
            <button onClick={handleCheckout}>Finalizar compra</button>
        </>
    );
}
