# AI-LOG

## 2026-11-16 — IA#4 Implementation Planning

**Tool:** OpenAI Codex.

**Before commit:** `8d43c49`. **Result commit:** `11a1d95` (log).

**Request:** Before editing, plan Session 6, W, F and C, including files, components, state ownership and Done means rows. Explain implementation and browser checks for row 7 (out-of-order search), row 14 (saved products survive filtering), and row 17 (checkout errors update). Use React state for checkout and npm-installed Bootstrap 5. Place CartSummary before ProductList in the proposed page order.

**Kept:** The plan was provided for reference during implementation.

**Changed:** No changes to the plan were recorded.

**Rejected:** No rejections were recorded.

**Verification:** I checked the plan against the requested points. I did not run tests or browser checks during this planning request.

## 2026-11-16 — Implement the Session 6 shop

**Tool:** OpenAI Codex.

**Before commit:** `11a1d95`. **Result commit:** `72f2ac9` (includes the later order correction).

**Request:** Read both briefs, implement the Session 6 shop from `brief.md` and follow the project-wide constraints in `brief-ia4.md`. Leave the wishlist, checkout and CSS framework for later. The request specified CartSummary before ProductList. Use the local API with encoded search queries, loading, empty and error states, Retry, preserved cards during loading, and protection against stale responses. Keep the cart across searches, use product IDs as keys, render API data as text, maintain one catalogue status element, and avoid duplicate requests for unchanged searches. Use plain CSS for a 360 px viewport, preserve the dependency list, and run the catalogue tests and lint.

**Result:** The implementation includes `src/App.jsx`, `src/index.css`, and the four required components in `src/components/`.

**Kept:** Product IDs as list keys, and cart count and total computed from the cart, based on the row 11 source review.

**Changed:** The order of the product list and cart was addressed in the following request.

**Rejected:** None recorded for this request.

**Verification:** The user reported checking the browser rows. The source was reviewed for row 11.

## 2026-11-16 — Correct the shop page order

**Tool:** OpenAI Codex.

**Before commit:** No separate commit was made after the initial Session 6 output. **Result commit:** `72f2ac9`, which contains both the Session 6 implementation and this correction.

**Request:** The user noted that item 1 of `brief.md` places the product list before the cart and asked to swap `CartSummary` and `ProductList` and check the page. The earlier prompt had explicitly requested the opposite order.

**Result:** `ProductList` appears before `CartSummary` in `src/App.jsx`.

**Changed:** The product list and cart rendering order.

**Verification:** The implementing assistant reported 11/11 catalogue tests passing and lint succeeding after the correction. It reported that the browser had not yet been checked.

## 2026-11-16 — Implement the wishlist

**Tool:** OpenAI Codex.

**Before commit:** `f022ce4`. **Result commit:** `b81f396`.

**Request:** Read both briefs and Done means, then implement only W1–W5 while preserving Session 6. Use one provider in `src/WishlistContext.jsx` for the page and have `ProductCard` read it through a hook. A `Save` button toggles `aria-pressed`; a `header` contains `Shop` and the derived saved count. A `section` labeled `Saved` contains a `ul` listing names as text in save order, with the specified empty message. Saved products must survive filtering. Preserve protected files and dependencies, run wishlist and Session 6 tests and lint, report unrun checks, and leave changes uncommitted.

**Result:** Added `src/WishlistContext.jsx` and `src/components/SavedPanel.jsx`, and updated `src/App.jsx`, `src/components/ProductCard.jsx`, and `src/index.css`.

**Kept:** The shared provider, the card's context hook, and the saved count computed from the saved products, based on source review for row 20.

**Changed:** None recorded for this request.

**Rejected:** None recorded for this request.

**Verification:** The assistant reported 3 of 3 wishlist tests passing. The user reran the catalogue tests with 11 of 11 passing and ran lint with no errors or warnings. The user reported that the manual checks passed, including the wishlist browser checks and React DevTools provider inspection. The source was inspected for row 20. The full 19-test suite was not run for this step.

## 2026-11-16 — Implement checkout

**Tool:** OpenAI Codex.

**Before commit:** `7b6a3ee`. **Result commit:** `b3dc864`.

**Request:** Read both briefs and Done means, then implement only checkout F1–F5 using React state. Put the labeled form inside the cart with Name, Phone, Note and Place order. Prevent reload and URL changes. Derive field errors after the first submission and update them on input, using the specified messages, `aria-describedby` and `aria-invalid`. Show the empty-cart message alongside applicable field errors. Limit Note to 200 characters with a counter. Confirm the order using the count and total before clearing the cart and fields, and preserve the wishlist. Keep the catalogue status, protected files and dependencies unchanged. Run tests and lint, report unrun checks, and leave changes uncommitted.

**Result:** Added `src/components/CheckoutForm.jsx` and updated `src/components/CartSummary.jsx` and `src/App.jsx`.

**Kept:** Validation derived from the form values and the order confirmation using the cart count and total, based on source inspection and the reported manual checks.

**Changed:** None recorded for this request.

**Rejected:** None recorded for this request.

**Verification:** The implementing assistant reported 19 of 19 tests passing, lint without errors or warnings, and an empty protected-files diff. The user reported that the manual form, note, valid-order, keyboard, and focus checks passed. The source was inspected for row 20 and the protected-files diff was checked.

## 2026-11-16 — Apply Bootstrap CSS

**Tool:** OpenAI Codex.

**Before commit:** `65849e0`. **Result commit:** `11359ab`.

**Request:** Read both briefs and Done means, then implement only C1–C3 while preserving existing functionality. Install Bootstrap 5 with npm, keep the lockfile synchronized, and import its CSS before local CSS. Use Bootstrap classes and local CSS, preserving required elements, labels, reading order and accessible names. At 360, 768 and 1280 px avoid overflow and clipping, keep buttons at least 44 px high, use multiple product columns at 1280 px, and retain visible keyboard focus. Keep the page styled with external network access blocked. Preserve protected files and Vite configuration, add only Bootstrap, run tests and lint, report unrun checks, and leave changes uncommitted.

**Result:** Installed Bootstrap 5.3.9, updated `package.json` and `package-lock.json`, imported its CSS in `src/main.jsx`, and updated the shop components and `src/index.css` with Bootstrap classes and local styles. The initial install encountered a DNS error and the retry succeeded.

**Kept:** The npm-installed Bootstrap dependency and its local CSS import, based on inspection of `package.json`, `src/main.jsx`, and the reported manual checks.

**Changed:** None recorded for this request.

**Rejected:** None recorded for this request.

**Verification:** The implementing assistant reported 19 of 19 tests passing and lint with no errors or warnings. The user reported that all manual checks passed, including viewport sizes 360, 768, and 1280 px, button heights, keyboard focus, and loading with external network access blocked. The protected-files diff was empty, `npm ls bootstrap` reported 5.3.9, and the CSS import was inspected. No build script exists in `package.json`. The assistant reported three npm audit findings (one moderate and two critical); audit fixes were not applied.

## 2026-11-16 — Review and draft self-assessment

**Tool:** OpenAI Codex.

**Before commit:** `0e0ec8a`.

**Request:** Review the submission comprehensively and write a first Vietnamese draft of `SELF_ASSESSMENT_REPORT.md`.

**Result:** Created the draft with seven proposed scores and evidence. Noted that no rejected decision was recorded and the original component order was not separately committed.

**Verification:** Codex reran `npm test` (19/19 passed) and `npm run lint` (no errors or warnings), inspected Git history and the protected-file diff, and read the existing reports. Browser results were reported by the user in earlier checks; the complete browser table was not independently rerun for this request.




