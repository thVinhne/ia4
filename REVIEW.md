# Review

## 1. Product IDs as list keys

- **Where:** commit `72f2ac9`, `src/components/ProductList.jsx` line 6.
- **Decision:** kept.
- **What decided it:** Done means row 11 requires `key={product.id}`. I inspected the product list and found that key on `ProductCard`.
- **Why:** The key identifies a product when the search changes the list.

## 2. Cart count and total

- **Where:** commit `72f2ac9`, `src/components/CartSummary.jsx` lines 2–3.
- **Decision:** kept.
- **What decided it:** Done means row 11 requires the count and total to be computed instead of stored in state. I inspected the component and found that it derives both from `cart`.
- **Why:** The displayed values are calculated from the cart contents.

## 3. Details state belongs to each card

- **Where:** commit `72f2ac9`, `src/components/ProductCard.jsx` lines 3–4 and 10–13.
- **Decision:** kept.
- **What decided it:** The structure section of `brief.md` places Details state in `ProductCard`. I inspected the component and found its own `expanded` state and toggle.
- **Why:** Each card controls the visibility of its own description.

## 4. Product list and cart order

- **Where:** commit `72f2ac9`, `src/App.jsx` lines 57–58 shows the final order.
- **Decision:** changed.
- **What decided it:** Item 1 of `brief.md` specifies the product list before the cart. The initial assistant output placed the cart first.
- **Why:** I requested that the list be rendered before the cart to match the brief. The initial order appeared in the diff shared during review, but it was not committed separately. Commit `72f2ac9` contains the corrected order.
- **Sentence sent:** [Insert the exact correction request you sent to the assistant.]
