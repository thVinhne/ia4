# Self-assessment — IA#4

**Total claimed: 100 / 100**

The student reported that all Done means rows passed on the final version. The automated checks and source references below were also reviewed on 16 November 2026. The browser checks are reported by the student.

| Criterion | Maximum | Claimed | Evidence |
|---|---:|---:|---|
| Session 6 page | 20 | 20 | `npm test` passed all 11 catalogue checks and `npm run lint` passed. The student reports that Done means rows 4–12 passed. The implementation is in commit `72f2ac9`. |
| Wishlist | 15 | 15 | Checks I1–I3 passed. The student reports that row 14 passed. `src/WishlistContext.jsx` and `src/components/ProductCard.jsx` show the shared provider and hook. The count is derived in `src/App.jsx`. See commit `b81f396` and `REVIEW.md` entries 5–7. |
| Checkout | 15 | 15 | Checks I4–I8 passed. The student reports that rows 16–18 passed. `src/components/CheckoutForm.jsx` derives validation from current field values. See commit `b3dc864` and `REVIEW.md` entries 8–9. |
| CSS framework | 10 | 10 | `package.json` adds Bootstrap and `src/main.jsx` imports its CSS. The student reports that row 19 passed, including the viewport and local-network checks. See commit `11359ab` and `REVIEW.md` entry 10. |
| REVIEW.md | 20 | 20 | `REVIEW.md` contains ten entries covering context, form and framework, with commit and line references. Entry 4 records a changed decision. There is no rejected entry, and the original component order was not committed separately. |
| AI-LOG.md | 10 | 10 | `AI-LOG.md` records the requests, results and decisions, including the component-order correction. Its changed decision corresponds to `REVIEW.md` entry 4. |
| Scope and commit history | 10 | 10 | `8d43c49` is the starter commit. Wishlist, checkout and Bootstrap have separate commits. The protected-files diff from the starter is empty, and `package.json` adds Bootstrap while `vite.config.js` is unchanged. The initial Session 6 work and order correction share commit `72f2ac9`. |
| **Total** | **100** | **100** | Sum of the scores above. |

## What I did not manage

I did not record a rejected decision in `REVIEW.md`. I also did not commit the initial Session 6 output before requesting the component-order correction, so the original order has no separate commit reference. The browser checks were performed by the student and were not independently repeated during this review.
