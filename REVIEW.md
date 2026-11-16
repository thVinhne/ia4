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
- **Sentence sent:** Mục 1 của brief.md yêu cầu danh sách sản phẩm xuất hiện trước giỏ hàng, nhưng App.jsx đang render CartSummary trước ProductList. Hãy đổi thứ tự hai component và kiểm tra lại trang.
## 5. One wishlist provider for the page

- **Where:** commit `b81f396`, `src/App.jsx` line 9 and `src/WishlistContext.jsx` lines 5–6 and 16–19.
- **Decision:** kept.
- **What decided it:** Done means rows 15 and 20 require one provider for the page and wishlist state in `WishlistContext.jsx`. I inspected the source and checked the component tree in React DevTools.
- **Why:** The header, product cards, and Saved panel share the same saved-products state.

## 6. Product cards read saved state through a hook

- **Where:** commit `b81f396`, `src/components/ProductCard.jsx` lines 6–7 and 15.
- **Decision:** kept.
- **What decided it:** Done means row 20 requires `ProductCard` to read the wishlist through a hook. I inspected the code and verified that it calls `useWishlist()` and derives `aria-pressed` from the saved products.
- **Why:** The button reflects the shared wishlist when a product returns after a search.

## 7. Saved count derived from the wishlist

- **Where:** commit `b81f396`, `src/App.jsx` lines 13 and 62.
- **Decision:** kept.
- **What decided it:** Done means row 20 requires the count to be computed. I inspected the header and found it displays `savedProducts.length`.
- **Why:** The displayed count uses the same list as the Saved panel.

## 8. Checkout validation derived from field values

- **Where:** commit `b3dc864`, `src/components/CheckoutForm.jsx` lines 4–10 and 30–41.
- **Decision:** kept.
- **What decided it:** Done means rows 17 and 20 require field messages after the first submission and errors computed from current values. I inspected the code and checked the invalid and corrected fields in the browser.
- **Why:** The form derives each validation result from the input value and links the displayed message to its field.

## 9. Order confirmation before clearing the cart

- **Where:** commit `b3dc864`, `src/components/CheckoutForm.jsx` lines 12–24.
- **Decision:** kept.
- **What decided it:** Done means row 16 requires confirmation, an empty cart, and an unchanged address bar. I checked a valid order in the browser and inspected the submit handler.
- **Why:** The confirmation uses the current count and total before the cart and fields are cleared.

## 10. Bootstrap installed and imported locally

- **Where:** commit `11359ab`, `package.json` line 16 and `src/main.jsx` lines 3–4.
- **Decision:** kept.
- **What decided it:** Done means rows 13 and 19 require one npm-installed CSS framework and a styled page without external network access. I inspected the dependency and import, and checked the page with external network access blocked.
- **Why:** The project imports Bootstrap CSS from the installed package before its local styles, so the framework is available through the local development server.
