export default function ProductCard({ product }) {
  return (
    <>
      <article style={{ border: '1px solid grey', padding: 10, color: "black", }}>
        <h3>
          {product.title} - {product.id}
        </h3>
        <img width={160} src={product.image} alt={product.title} />
        <p>${product.price}</p>
        <button>Mas detalles</button>
      </article>
    </>
  );
}
