# Pre-launch checklist

Outstanding items for the SEO/AEO work before going live. Each depends on real
business data or assets, so they were intentionally deferred during
implementation (PRs #57, #58, #59). Sort these out, then tick them off.

## SEO / structured data

- [x] **Contact email domain mismatch** — `contactDetails.email` in
  `lib/constants.ts` and the footer link now use `info@softsolutions.co.ke`,
  matching the site domain.

- [ ] **`LocalBusiness` completeness** — the schema in `lib/seo.ts`
  (`organizationSchema`) was upgraded to `LocalBusiness`, which raises Google's
  bar for a local rich result. Add:
  - a real street `address` (`streetAddress: "Westlands"` is a suburb, not a
    street),
  - `geo` coordinates (lat/lng),
  - a `priceRange` (e.g. `"$$"`).

- [ ] **Confirm business hours** — `openingHoursSpecification` in `lib/seo.ts`
  currently assumes **Mon–Fri 08:00–17:00**. Verify against actual hours.

- [ ] **Social profiles (`sameAs`)** — `organizationSchema` has a TODO for
  `sameAs`. Populate once the footer social links point to real accounts.

- [ ] **Verify FAQ answers** — `homeFaqs` and `serviceFaqs` in
  `lib/constants.ts` carry `TODO(client)` placeholders. Confirm the answers
  reflect the current offering.

## PWA / assets

- [ ] **PNG app icons** — `app/manifest.ts` references an SVG, which Chrome
  ignores for install/splash. Add raster PNGs: **192×192** and **512×512**,
  plus a **maskable** purpose variant, for installability.

## Deployment

- [x] **Production domain** — set to `https://softsolutions.co.ke` in
  `lib/seo.ts` (PR #59). Overridable per-deploy via `NEXT_PUBLIC_SITE_URL`.

## Out of scope (pre-existing TODOs, not part of the SEO work)

- [x] Contact form email backend — implemented via nodemailer through the
  `/api/contact` route, sending to `communications@softsolutions.co.ke`.
  Requires SMTP env vars in production (see `.env.example`).
- [ ] Placeholder metrics / phone number — verify real values.
- [ ] Truncated Networking description in `lib/constants.ts`.
