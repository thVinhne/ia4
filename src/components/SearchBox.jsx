export default function SearchBox({ value, onChange }) {
  return (
    <div className="mb-3">
      <label className="form-label" htmlFor="product-search">Search products</label>
      <input className="form-control" id="product-search" type="search" value={value} onChange={(event) => onChange(event.target.value)} />
    </div>
  );
}
