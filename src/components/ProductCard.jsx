import { useState } from 'react';
import { useWishlist } from '../WishlistContext.jsx';

export default function ProductCard({ product, onAddToCart }) {
  const [expanded, setExpanded] = useState(false);
  const { savedProducts, toggleSaved } = useWishlist();
  const isSaved = savedProducts.some((item) => item.id === product.id);
  return (
    <li className="product-card">
      <h2>{product.name}</h2>
      <p>{product.price.toLocaleString('vi-VN')} đ</p>
      <div className="product-actions">
        <button type="button" aria-expanded={expanded} onClick={() => setExpanded((open) => !open)}>Details</button>
        <button type="button" onClick={() => onAddToCart(product)}>Add to cart</button>
        <button type="button" aria-pressed={isSaved} onClick={() => toggleSaved(product)}>Save</button>
      </div>
      {expanded && <p>{product.description}</p>}
    </li>
  );
}
