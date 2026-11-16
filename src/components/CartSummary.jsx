import CheckoutForm from './CheckoutForm.jsx';

export default function CartSummary({ cart, onPlaceOrder }) {
  const count = cart.length;
  const total = cart.reduce((sum, product) => sum + product.price, 0);
  return (
    <aside aria-label="Cart" className="cart">
      <h2>Cart</h2>
      <p>{count} {count === 1 ? 'item' : 'items'}</p>
      <p>{total.toLocaleString('vi-VN')} đ</p>
      <CheckoutForm count={count} total={total} onPlaceOrder={onPlaceOrder} />
    </aside>
  );
}
