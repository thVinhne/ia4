import { useState } from 'react';

export default function CheckoutForm({ count, total, onPlaceOrder }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmation, setConfirmation] = useState('');
  const nameInvalid = name.trim().length === 0;
  const phoneInvalid = !/^0[0-9]{9}$/.test(phone);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setConfirmation('');
    if (nameInvalid || phoneInvalid || count === 0) return;

    const items = count === 1 ? 'item' : 'items';
    setConfirmation(`Order placed for ${name.trim()}: ${count} ${items}, ${total.toLocaleString('vi-VN')} đ.`);
    onPlaceOrder();
    setName('');
    setPhone('');
    setNote('');
    setSubmitted(false);
  }

  return (
    <form aria-label="Checkout" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="checkout-name">Name</label>
        <input id="checkout-name" type="text" value={name} onChange={(event) => setName(event.target.value)}
          aria-invalid={submitted && nameInvalid ? 'true' : undefined}
          aria-describedby={submitted && nameInvalid ? 'checkout-name-error' : undefined} />
        {submitted && nameInvalid && <p id="checkout-name-error">Enter your name.</p>}
      </div>
      <div>
        <label htmlFor="checkout-phone">Phone</label>
        <input id="checkout-phone" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)}
          aria-invalid={submitted && phoneInvalid ? 'true' : undefined}
          aria-describedby={submitted && phoneInvalid ? 'checkout-phone-error' : undefined} />
        {submitted && phoneInvalid && <p id="checkout-phone-error">Enter a 10-digit phone number starting with 0.</p>}
      </div>
      <div>
        <label htmlFor="checkout-note">Note (optional)</label>
        <textarea id="checkout-note" maxLength={200} value={note} onChange={(event) => setNote(event.target.value)} />
        <span>{note.length}/200</span>
      </div>
      {submitted && count === 0 && <p>Add something to the cart first.</p>}
      {confirmation && <p>{confirmation}</p>}
      <button type="submit">Place order</button>
    </form>
  );
}
