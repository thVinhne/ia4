export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label htmlFor="product-search">Search products</label>
      <input id="product-search" type="search" value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
