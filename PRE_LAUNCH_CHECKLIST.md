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

## Analytics & Search Console (env-driven, no code changes needed)

The code is wired; these steps supply the real IDs/tokens. Set the values as
`NEXT_PUBLIC_*` env vars in the hosting provider (see `.env.example`), then
redeploy — they are read at build time.

- [ ] **Google Analytics 4** — create a GA4 property (Admin → Data streams →
  Web), copy the Measurement ID (`G-XXXXXXXXXX`), set `NEXT_PUBLIC_GA_ID`. The
  `<GoogleAnalytics>` tag in `app/layout.tsx` activates automatically.
- [ ] **Google Search Console** — add the property, choose the "HTML tag"
  verification method, copy the token into
  `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, redeploy, then click Verify.
- [ ] **Submit the sitemap** — in Search Console, submit `/sitemap.xml`
  (already lists all pages, blog posts, and case studies).
- [ ] **Bing Webmaster Tools** (optional) — repeat with
  `NEXT_PUBLIC_BING_SITE_VERIFICATION`; submit the sitemap there too.
- [ ] **Google Business Profile** — create/claim and verify the listing
  (category e.g. "Software company / IT services"), with NAP details matching
  `contactDetails` in `lib/constants.ts`. Biggest lever for local-pack visibility
  on queries like "IT company Nairobi".

## Content engine (blog + case studies)

Infrastructure is live at `/blog` and `/case-studies`. Authoring = drop an
`.mdx` file with frontmatter into `content/blog/` or `content/case-studies/`;
it auto-appears in the listing, sitemap, and RSS feed (`/feed.xml`).

- [ ] **Review seed content** — 5 blog posts and 2 case studies were seeded as
  drafts-for-review. Confirm the claims, metrics, and client references are
  accurate (the two case studies use anonymised, representative figures — swap
  in real, approved numbers and client names, or keep them anonymised with the
  client's permission).
- [ ] **Establish a publishing cadence** — even 1–2 posts/month compounds into
  topical authority and long-tail traffic over time.
- [ ] **Named authors (E-E-A-T)** — posts currently attribute to the
  organisation. Adding a real author byline (`author:` in frontmatter) and, later,
  an author bio strengthens credibility signals.
- [ ] **Promote for backlinks** — share posts on the company LinkedIn; pursue
  guest posts and partner links. Backlinks remain a primary off-site ranking
  factor. (Depends on the `sameAs` social profiles above.)

## Out of scope (pre-existing TODOs, not part of the SEO work)

- [x] Contact form email backend — implemented via nodemailer through the
  `/api/contact` route, sending to `communications@softsolutions.co.ke`.
  Requires SMTP env vars in production (see `.env.example`).
- [ ] Placeholder metrics / phone number — verify real values.
- [ ] Truncated Networking description in `lib/constants.ts`.
