# Design Principles — Soft Solutions Technologies

The single source of truth for how this site should **look and feel**. Read this before adding a color, a button, a section, or a hero.

- **Content** (copy, nav labels, service cards) lives in `lib/constants.ts`.
- **Design** (color, type, spacing, component rules) lives here.
- Keep them separate. Don't hardcode copy in components; don't invent colors in components.

These principles were derived from a **logo audit** — the visual language flows from the mark, not the other way around.

---

## 1. Logo audit

![Soft Solutions Technologies logo](public/assets/soft-solutions.svg)

The mark is a metallic silver ring enclosing a glossy blue sphere, with **two red chasing arrows forming an "S"**, beside a bold deep-indigo geometric-sans wordmark, "Soft Solutions Technologies Ltd."

**What it says.** The rotating red "S" reads as **motion, transformation, connectivity, momentum** — a company that keeps things moving. That idea is the spine of the whole design language.

**What carries forward (durable equity):**
- The **indigo wordmark** — the anchor of the brand.
- The **red rotating-"S"** idea — energy and forward motion.

**What is legacy (do not carry forward):**
- The mark is a **Web 2.0 / skeuomorphic** treatment — gloss, chrome bevel, gradients, reflections. This aesthetic is dated and must **not** propagate into the UI. The interface modernizes *around* the mark (see Principle 2).
- **Recommendation:** commission a **flat refresh** of the logo when budget allows — same indigo + red + motion idea, rebuilt as clean flat vector. Until then, use the current logo as-is.

**Colors — sampled directly from the logo pixels** (source of truth, not guesses):

| Role | Hex | Notes |
|------|-----|-------|
| Indigo (wordmark + sphere) | `#283891` | The primary brand blue. |
| Red (arrows) | `#ED1C24` | The accent. Used sparingly, like in the mark. |
| Silver-grey (ring) | `#C9CDE3`, `#939BC8` | Cool neutrals. |

> **Correction to existing code:** the shipped Tailwind token `navy` is `#00156B`, which is **darker and more purple** than the real logo blue (`#283891`). The canonical brand blue is `#283891`. See Follow-ups.

**Usage rules:**
- Prefer the **full lockup** (mark + wordmark) on **white or very light** backgrounds — this is how it's already used in the navbar and mobile drawer.
- Preserve **clear space** around the logo equal to the height of the ring; never crowd it.
- Do not stretch, recolor, add shadows to, or place the logo on a busy photo without a solid backing.

---

## 2. The palette

A **small, named** palette. Every color has a role. When in doubt, use fewer.

### Brand
| Token | Hex | Use for |
|-------|-----|---------|
| **Indigo** (primary) | `#283891` | Structure: headings, primary buttons, nav, hero grounding, key surfaces. |
| **Indigo-deep** | `#1E2B6F` | Depth: hover on indigo, gradients, footer. |
| **Red** (accent) | `#ED1C24` | The spark: primary CTAs, key highlights, active/motion cues. Small doses only. |
| **Red-deep** | `#C10E15` | Hover/pressed state on red. |

### Neutrals
| Token | Hex | Use for |
|-------|-----|---------|
| Ink | `#0F1729` | Body text, high-contrast headings on light. |
| Slate | `#5B6474` | Secondary text, captions, descriptions. |
| Silver | `#939BC8` | Muted UI, borders on indigo surfaces (from the ring). |
| Silver-light | `#C9CDE3` | Dividers, subtle fills (from the ring). |
| Mist | `#F5F7FB` | Section backgrounds, card fills. |
| Line | `#E6E9F0` | Hairline borders, dividers. |
| White | `#FFFFFF` | Base surface. |

### Semantic (kept minimal, distinct from brand red)
| Token | Hex | Use for |
|-------|-----|---------|
| Success | `#1AB759` | Confirmation, valid form state. |
| Warning | `#E89806` | Caution, pending. |
| Error | `#D92D20` | Form/validation errors. |

> Error uses its **own** red (`#D92D20`), deliberately *not* the brand red (`#ED1C24`), so "this is an action" never gets confused with "this is broken."

### Accessibility (WCAG AA)
- **Indigo `#283891` on white** — passes AA for normal text. Safe default for body-adjacent headings and links.
- **White on Indigo `#283891`** — passes AA. Safe for buttons and hero text.
- **Red `#ED1C24`** — use for **emphasis, CTAs, and icons, not long-form text.** On white it is borderline for small text; reserve it for large/bold labels and interactive elements. For red *body* text, use `#C10E15`.
- **Slate `#5B6474` on white** — passes AA for normal text; use for secondary copy.
- Never rely on color alone to convey state — pair with an icon or label.

---

## 3. The six design principles

Each principle is a rule you can act on, with a rationale from the audit and a concrete do/don't.

### 1. Indigo is the foundation, red is the spark
Indigo carries the structure — layout, headings, navigation, grounding. Red appears only where you want the eye and the click, mirroring how the mark uses just two red arrows against a mostly blue field.
- **Do:** one red CTA per view; red for the single most important action.
- **Don't:** fill panels, backgrounds, or multiple buttons with red. Red loses its meaning the moment it's everywhere.

### 2. Flat and modern, never glossy
The current logo is glossy and skeuomorphic; the interface is not. We modernize *around* the mark.
- **Do:** flat fills, crisp edges, subtle shadows for elevation only, restrained gradients (e.g. the indigo-over-photo hero overlay).
- **Don't:** bevels, chrome, inner glows, heavy multi-stop gradients, drop shadows for decoration.

### 3. Motion with purpose
The "S" is about momentum. Motion should feel intentional and directional — never decorative jitter.
- **Do:** short, easing-based reveals and directional transitions. Always honor `prefers-reduced-motion` (the codebase already does in `components/home/lib/ui/reveal.tsx` and `stat.tsx`).
- **Don't:** looping, attention-grabbing, or gratuitous animation; anything that moves without communicating.

### 4. Editorial clarity
Enterprise/IT buyers scan. Give them hierarchy and air.
- **Do:** generous whitespace, tight tracking on large headings, one clear idea per section (matches the `h1`/`h2` rules already in `app/globals.css`).
- **Don't:** dense walls of text, competing headings, or cramped sections.

### 5. One system, few tokens
A small, role-based palette beats a sprawling one. The current token set has grown to dozens of one-off colors; this doc replaces that with the table in §2.
- **Do:** reach for a named token with a defined role.
- **Don't:** add ad-hoc hex values in components, or duplicate an existing token under a new name.

### 6. Trust through consistency
Consistency *is* the credibility signal for an IT services firm.
- **Do:** reuse the shared spacing rhythm (`.section`, `.container-x`), a single CTA treatment, and predictable component behavior across every page.
- **Don't:** re-solve layout, gutters, or button styling per page.

---

## 4. Typography

**Family:** Geist Sans (loaded in `app/layout.tsx` as `--font-geist-sans`); Geist Mono for code/technical values only.

- **Headings:** bold, **tight tracking**, tight leading on large sizes (already set: `h1` → `font-bold tracking-tight leading-[1.05]`; `h2`/`h3` → `tracking-tight`). Color: Indigo or Ink.
- **Body:** regular weight, Ink for primary, Slate for secondary. Comfortable line length (~60–75 chars) and leading (~1.6).
- **Eyebrows / labels:** small, medium weight, uppercase or tracked; used as section kickers (see `sectionHeaders` in `lib/constants.ts`).
- **Weights:** stick to Regular (400), Medium (500), Semibold (600), Bold (700). Avoid mixing more than three on a screen.
- **Mono:** reserve `--font-geist-mono` for code, IPs, config, or metrics where alignment helps — not for body copy.

---

## 5. Spacing & layout

Use the existing shared utilities in `app/globals.css` — do not re-derive gutters per page.

- **Horizontal gutter:** `.container-x` (responsive `px` chain from `sm` → `5xl`). Every full-bleed row uses it.
- **Section rhythm:** `.section` = the same gutter chain **plus** vertical padding (`py-20 md:py-28`). Use for standalone sections so spacing stays uniform.
- **Container max-width:** `1400px` at `2xl` (from `tailwind.config.ts` `container`). Content shouldn't sprawl wider than this.
- **Rhythm rule:** prefer the spacing scale already implied by these utilities; keep vertical gaps consistent between sibling sections.

---

## 6. Components — do / don't

### Buttons (`components/ui/button.tsx`)
- **Primary action → Indigo** (`primary` variant: indigo fill, white text, indigo-deep hover).
- **Accent / hero CTA → Red** (add a `red`/`accent` variant per §2; red fill, white text, red-deep hover).
- **Secondary → outline** on light; `heroOutline` (white border, transparent) over photos.
- **⚠️ Deprecated:** the **`gold`** variant. Gold is retired (§Follow-ups). Do not add new gold usages; migrate existing ones to red.
- One primary/accent button per view (Principle 1).

### Cards
- White or Mist fill, `line` hairline border, flat, minimal shadow for elevation only. No gloss (Principle 2).

### Navigation (`components/navigation/navbar.tsx`)
- Logo left, on white; sticky; adds shadow on scroll. Active/hover accents move to **red** (currently gold — see Follow-ups). Keep the dropdown + mobile-drawer patterns as built.

### Hero (pattern in `home.tsx`, `about.tsx`, `our-services/lib/ui/service-hero.tsx`)
- Full-bleed photo with an **indigo gradient overlay** (`from-navy … to-navy/30`) for text legibility, white heading, one clear CTA. Keep this pattern consistent across all top-of-page heroes.

### Forms (`components/forms/contact-us-form.tsx`)
- `react-hook-form` + Zod. Clear labels, `line` borders, indigo focus ring, **error color `#D92D20`** (not brand red). Never signal errors with color alone — include text.

---

## 7. Motion & imagery

- **Motion:** subtle, directional, purposeful; always gated behind `prefers-reduced-motion` (Principle 3).
- **Photography:** real people in genuine IT/office settings — consistent, professional, warm. Apply the standard **indigo overlay** when text sits on top so treatment stays uniform across pages.
- **Iconography:** `lucide-react` only, consistent stroke width and size within a context. Icons inherit Indigo (or Red when they mark an action). Don't mix icon libraries or stroke weights.

---

## 8. Follow-ups / technical debt (non-blocking)

These are **not** part of this document's task — they're the code changes needed to make the codebase match these principles:

1. **Fix the brand blue:** update the `navy` token in `tailwind.config.ts` to the true logo indigo `#283891` (+ `#1E2B6F` deep step), and add a **`red` accent** token (`#ED1C24` / `#C10E15`).
2. **Retire gold:** remove the `gold` button variant in `components/ui/button.tsx` and migrate all gold usages (navbar active/hover states, CTAs) to red.
3. **Prune the palette:** delete the sprawling legacy one-off tokens in `tailwind.config.ts` (`active-blue`, `tundora`, `nexus-gray`, `blaze-orange`, etc.) that no longer have a role, collapsing to the §2 set.
4. **Plan a flat logo refresh:** rebuild the mark as clean flat vector (same indigo + red + motion idea), replacing the embedded raster PNG in `public/assets/soft-solutions.svg`.
