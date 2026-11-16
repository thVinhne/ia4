import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, onAddToCart }) {
  return (
    <ul aria-label="Products" className="products">
      {products.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
    </ul>
  );
}
