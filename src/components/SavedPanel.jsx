import { useWishlist } from '../WishlistContext.jsx';

export default function SavedPanel() {
  const { savedProducts } = useWishlist();

  return (
    <section aria-label="Saved">
      <h2>Saved</h2>
      {savedProducts.length === 0 && <p>Nothing saved yet.</p>}
      <ul>
        {savedProducts.map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>
    </section>
  );
}
