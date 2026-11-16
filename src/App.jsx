import { useEffect, useRef, useState } from 'react';
import SearchBox from './components/SearchBox.jsx';
import ProductList from './components/ProductList.jsx';
import CartSummary from './components/CartSummary.jsx';
import SavedPanel from './components/SavedPanel.jsx';
import { WishlistProvider, useWishlist } from './WishlistContext.jsx';

export default function App() {
  return <WishlistProvider><Shop /></WishlistProvider>;
}

function Shop() {
  const { savedProducts } = useWishlist();
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState('loading');
  const [retry, setRetry] = useState(0);
  const requestVersion = useRef(0);

  function changeQuery(value) {
    if (value !== query) {
      requestVersion.current += 1;
      setStatus('loading');
      setQuery(value);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const version = ++requestVersion.current;
    async function loadProducts() {
      try {
        const response = await fetch(`/api/products?q=${encodeURIComponent(query)}`, { signal: controller.signal });
        if (!response.ok) throw new Error('Request failed');
        const result = await response.json();
        if (!controller.signal.aborted && version === requestVersion.current) {
          setProducts(result);
          setStatus(result.length === 0 ? 'empty' : 'ready');
        }
      } catch {
        if (!controller.signal.aborted && version === requestVersion.current) {
          setProducts([]);
          setStatus('error');
        }
      }
    }
    loadProducts();
    return () => controller.abort();
  }, [query, retry]);

  function retrySearch() {
    setStatus('loading');
    setRetry((count) => count + 1);
  }

  const message = { loading: 'Loading products…', empty: 'No products match.', error: 'Could not load products.', ready: '' }[status];
  return (
    <>
      <header>
        <h1>Shop</h1>
        <p>Saved: {savedProducts.length}</p>
      </header>
      <main>
      <SearchBox value={query} onChange={changeQuery} />
      <p role="status">{message}</p>
      {status === 'error' && <button type="button" onClick={retrySearch}>Retry</button>}
      <ProductList products={products} onAddToCart={(product) => setCart((items) => [...items, product])} />
      <CartSummary cart={cart} onPlaceOrder={() => setCart([])} />
      <SavedPanel />
      </main>
    </>
  );
}
