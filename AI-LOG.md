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
