# AI-LOG

## 2026-11-16 — IA#4 Implementation Planning

**Tool:** OpenAI Codex.

**Request:** Create an implementation plan for Session 6, the wishlist, checkout, and CSS. Identify the files and components involved, where state lives, the relevant Done means rows, and how to check rows 7, 14, and 17 in the browser. Then review the plan against the requirements for components, state, display order, the provider, and the catalogue status.

**Kept:** The plan was provided for reference during implementation.

**Changed:** No changes to the plan were recorded.

**Rejected:** No rejections were recorded.

**Verification:** I checked the plan against the requested points. I did not run tests or browser checks during this planning request.

## 2026-11-16 — Implement the Session 6 shop

**Tool:** OpenAI Codex.

**Request:** Read both briefs, implement the Session 6 shop from `brief.md` and follow the project-wide constraints in `brief-ia4.md`. Leave the wishlist, checkout and CSS framework for later. Use the local API with encoded search queries, loading, empty and error states, Retry, preserved cards during loading, and protection against stale responses. Keep the cart across searches, use product IDs as keys, render API data as text, maintain one catalogue status element, and avoid duplicate requests for unchanged searches. Use plain CSS for a 360 px viewport, preserve the dependency list, and run the catalogue tests and lint.

**Result:** The implementation includes `src/App.jsx`, `src/index.css`, and the four required components in `src/components/`.

**Kept:** Product IDs as list keys, and cart count and total computed from the cart, based on the row 11 source review.

**Changed:** The order of the product list and cart was addressed in the following request.

**Rejected:** None recorded for this request.

**Verification:** The user reported checking the browser rows. The source was reviewed for row 11.
## 2026-11-16 — Correct the shop page order

**Tool:** OpenAI Codex.

**Request:** Change the order of the product list and cart in `src/App.jsx` to follow item 1 of `brief.md`.

**Result:** `ProductList` appears before `CartSummary` in `src/App.jsx`.

**Changed:** The product list and cart rendering order.

**Verification:** The source order was inspected. Browser checks and test results are not recorded here.

## 2026-11-16 — Implement the wishlist

**Tool:** OpenAI Codex.

**Before commit:** `f022ce4`.

**Request:** Implement W1–W5 with one wishlist context provider for the page, a Save toggle on each product card, a computed saved count in the header, and a Saved panel. Keep saved products when a search hides them. Preserve the existing Session 6 behaviour and protected files, and run the wishlist checks, catalogue checks, and lint.

**Result:** Added `src/WishlistContext.jsx` and `src/components/SavedPanel.jsx`, and updated `src/App.jsx`, `src/components/ProductCard.jsx`, and `src/index.css`.

**Kept:** The shared provider, the card's context hook, and the saved count computed from the saved products, based on source review for row 20.

**Changed:** None recorded for this request.

**Rejected:** None recorded for this request.

**Verification:** The assistant reported 3 of 3 wishlist tests passing. The user reran the catalogue tests with 11 of 11 passing and ran lint with no errors or warnings. The user reported that the manual checks passed, including the wishlist browser checks and React DevTools provider inspection. The source was inspected for row 20. The full 19-test suite was not run for this step.

## 2026-11-16 — Implement checkout

**Tool:** OpenAI Codex.

**Before commit:** `7b6a3ee`.

**Request:** Implement checkout F1–F5 with React state. Add the labeled checkout form inside the cart, derive validation errors from the current fields after the first submission, handle an empty cart and a valid order, limit the note to 200 characters, and preserve the wishlist. Run the existing tests and lint while preserving the protected files and dependencies.

**Result:** Added `src/components/CheckoutForm.jsx` and updated `src/components/CartSummary.jsx` and `src/App.jsx`.

**Kept:** Validation derived from the form values and the order confirmation using the cart count and total, based on source inspection and the reported manual checks.

**Changed:** None recorded for this request.

**Rejected:** None recorded for this request.

**Verification:** The implementing assistant reported 19 of 19 tests passing, lint without errors or warnings, and an empty protected-files diff. The user reported that the manual form, note, valid-order, keyboard, and focus checks passed. The source was inspected for row 20 and the protected-files diff was checked.
