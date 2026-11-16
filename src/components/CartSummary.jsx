export default function CartSummary({ cart }) {
  const count = cart.length;
  const total = cart.reduce((sum, product) => sum + product.price, 0);
  return (
    <aside aria-label="Cart" className="cart">
      <h2>Cart</h2>
      <p>{count} {count === 1 ? 'item' : 'items'}</p>
      <p>{total.toLocaleString('vi-VN')} đ</p>
    </aside>
  );
}
