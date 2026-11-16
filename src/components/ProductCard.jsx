import { useState } from 'react';
import { useWishlist } from '../WishlistContext.jsx';

export default function ProductCard({ product, onAddToCart }) {
  const [expanded, setExpanded] = useState(false);
  const { savedProducts, toggleSaved } = useWishlist();
  const isSaved = savedProducts.some((item) => item.id === product.id);
  return (
    <li className="col product-card">
      <div className="card h-100 p-3">
      <h2>{product.name}</h2>
      <p>{product.price.toLocaleString('vi-VN')} đ</p>
      <div className="d-flex flex-wrap gap-2">
        <button className="btn btn-outline-primary" type="button" aria-expanded={expanded} onClick={() => setExpanded((open) => !open)}>Details</button>
        <button className="btn btn-primary" type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
        <button className="btn btn-outline-primary" type="button" aria-pressed={isSaved} onClick={() => toggleSaved(product)}>Save</button>
      </div>
      {expanded && <p>{product.description}</p>}
      </div>
    </li>
  );
}
