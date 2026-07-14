# Design Principles — Soft Solutions Technologies

The single source of truth for how this site should **look and feel**. Read this before adding a color, a button, a section, or a hero.

- **Content** (copy, nav labels, service cards) lives in `lib/constants.ts`.
- **Design** (color, type, spacing, component rules) lives here.
- Keep them separate. Don't hardcode copy in components; don't invent colors in components.

These principles were derived from a **logo audit**. The strategic decision: the shipped **navy + gold** design system is the deliberate, modern direction — so we **modernize the logo to match the system**, rather than bending the system back to a legacy mark.

---

## 1. Logo audit

![Soft Solutions Technologies logo](public/assets/soft-solutions.svg)

The current mark is a metallic silver ring enclosing a glossy blue sphere, with **two red chasing arrows forming an "S"**, beside a bold deep-indigo geometric-sans wordmark, "Soft Solutions Technologies Ltd."

**What it says.** The rotating "S" reads as **motion, transformation, connectivity, momentum** — a company that keeps things moving. That idea is the spine of the whole design language and **carries forward**.

**What is legacy (do not carry forward):**
- The mark is a **Web 2.0 / skeuomorphic** treatment — gloss, chrome bevel, gradients, reflections. Dated; must **not** propagate into the UI.
- The **red** accent and the **metallic silver** ring. The intentional brand system is **navy + gold** (see §2). Red retires; the metallic ring becomes a flat form.
- The indigo blue of the current wordmark (`#283891`) is **lighter/more purple** than the brand `navy` (`#00156B`). The refreshed logo adopts the brand navy.

**Decision: rebuild the logo, keep only the DNA.** Since the mark needs modernizing anyway, we redraw it flat in the brand palette and keep the one thing worth keeping — the **rotating-"S" motion idea**. See §9 for the refresh brief.

**Colors sampled from the current logo** (for reference / migration only — these are being replaced):

| Element | Hex | Fate |
|---------|-----|------|
| Indigo wordmark + sphere | `#283891` | → replaced by brand navy `#00156B` |
| Red arrows | `#ED1C24` | → retired (replaced by gold accent) |
| Metallic ring | `#C9CDE3`, `#939BC8` | → flattened, dropped from palette |

**Usage rules (current mark, until the refresh ships):**
- Use the **full lockup** (mark + wordmark) on **white or very light** backgrounds — as in the navbar and mobile drawer today.
- Preserve **clear space** equal to the height of the ring; never crowd it.
- Do not stretch, recolor, add shadows to, or place the logo on a busy photo without a solid backing.

---

## 2. The palette

A **small, named** palette. Every color has a role. When in doubt, use fewer.

### Brand
| Token | Hex | Use for |
|-------|-----|---------|
| **Navy** (primary) | `#00156B` | Structure: headings, primary buttons, nav, hero grounding, key surfaces. |
| **Navy-deep** | `#000B3D` | Depth: hover on navy, gradients, footer. |
| **Royal** | `#0423A0` | Secondary blue: links, secondary accents, iconography on light. |
| **Gold** (accent) | `#F5B301` | The spark: primary CTAs, key highlights, active states. Small doses only. |
| **Gold-soft** | `#FDE9BE` | Tints: hover halos, subtle highlight fills behind icons. |

### Neutrals
| Token | Hex | Use for |
|-------|-----|---------|
| Ink | `#0F1729` | Body text, high-contrast headings on light. |
| Slate | `#5B6474` | Secondary text, captions, descriptions. |
| Mist | `#F5F7FB` | Section backgrounds, card fills. |
| Line | `#E6E9F0` | Hairline borders, dividers. |
| White | `#FFFFFF` | Base surface. |

### Semantic (kept minimal, distinct from brand colors)
| Token | Hex | Use for |
|-------|-----|---------|
| Success | `#1AB759` | Confirmation, valid form state. |
| Warning | `#E89806` | Caution, pending. |
| Error | `#D92D20` | Form/validation errors. |

> Semantic warning (`#E89806`) is intentionally a **darker amber** than brand **gold** (`#F5B301`), so "premium accent" never gets confused with "caution."

### Accessibility (WCAG AA) — read this before using gold
- **Navy `#00156B` on white** — passes AA. Safe for headings, links, body-adjacent text.
- **White on Navy `#00156B`** — passes AA. Safe for buttons and hero text.
- **⚠️ Gold `#F5B301` is a FILL, not a text color.** It **fails AA** as text or as a thin line on white.
  - **Do:** gold background with **dark navy text on top** (`bg-gold text-navy` — the existing `gold` button is correct), or gold as a small solid icon/shape.
  - **Don't:** gold text on white/light, gold for body copy, or thin gold hairlines meant to be read.
- **Royal `#0423A0` on white** — passes AA; good for links.
- **Slate `#5B6474` on white** — passes AA for normal text; use for secondary copy.
- Never rely on color alone to convey state — pair with an icon or label.

---

## 3. The six design principles

Each principle is a rule you can act on, with a rationale from the audit and a concrete do/don't.

### 1. Navy is the foundation, gold is the spark
Navy carries the structure — layout, headings, navigation, grounding. Gold appears only where you want the eye and the click. Used sparingly, it signals *premium and considered*; used everywhere, it turns cheap.
- **Do:** one gold CTA per view; gold for the single most important action, with dark navy text on it.
- **Don't:** flood panels or backgrounds with gold, or use gold as readable text.

### 2. Flat and modern, never glossy
The current logo is glossy and skeuomorphic; the interface is not — and neither will the refreshed logo be.
- **Do:** flat fills, crisp edges, subtle shadows for elevation only, restrained gradients (e.g. the navy-over-photo hero overlay).
- **Don't:** bevels, chrome, inner glows, heavy multi-stop gradients, drop shadows for decoration.

### 3. Motion with purpose
The "S" is about momentum. Motion should feel intentional and directional — never decorative jitter.
- **Do:** short, easing-based reveals and directional transitions. Always honor `prefers-reduced-motion` (already done in `components/home/lib/ui/reveal.tsx` and `stat.tsx`).
- **Don't:** looping, attention-grabbing, or gratuitous animation; anything that moves without communicating.

### 4. Editorial clarity
Enterprise/IT buyers scan. Give them hierarchy and air.
- **Do:** generous whitespace, tight tracking on large headings, one clear idea per section (matches the `h1`/`h2` rules in `app/globals.css`).
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

- **Headings:** bold, **tight tracking**, tight leading on large sizes (already set: `h1` → `font-bold tracking-tight leading-[1.05]`; `h2`/`h3` → `tracking-tight`). Color: Navy or Ink.
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
- **Primary action → Navy** (`primary` variant: navy fill, white text, navy-deep hover).
- **Accent / hero CTA → Gold** (`gold` variant: gold fill, **navy text**, gold hover). This is the "spark" — one per view.
- **Secondary → outline** on light; `heroOutline` (white border, transparent) over photos.
- Never use gold as text; always dark text *on* gold.

### Cards
- White or Mist fill, `line` hairline border, flat, minimal shadow for elevation only. No gloss (Principle 2).

### Navigation (`components/navigation/navbar.tsx`)
- Logo left, on white; sticky; adds shadow on scroll. Active/hover accents use **gold** (already the case). Keep the dropdown + mobile-drawer patterns as built.

### Hero (pattern in `home.tsx`, `about.tsx`, `our-services/lib/ui/service-hero.tsx`)
- Full-bleed photo with a **navy gradient overlay** (`from-navy … to-navy/30`) for text legibility, white heading, one clear CTA (gold). Keep this pattern consistent across all top-of-page heroes.

### Forms (`components/forms/contact-us-form.tsx`)
- `react-hook-form` + Zod. Clear labels, `line` borders, navy focus ring, **error color `#D92D20`**. Never signal errors with color alone — include text.

---

## 7. Motion & imagery

- **Motion:** subtle, directional, purposeful; always gated behind `prefers-reduced-motion` (Principle 3).
- **Photography:** real people in genuine IT/office settings — consistent, professional, warm. Apply the standard **navy overlay** when text sits on top so treatment stays uniform across pages.
- **Iconography:** `lucide-react` only, consistent stroke width and size within a context. Icons inherit Navy or Royal (or a gold fill when they mark the key action). Don't mix icon libraries or stroke weights.

---

## 8. Logo refresh brief (the new mark)

The current logo is legacy; this is the brief for its flat, on-brand replacement.

**Keep:**
- The **rotating-"S" motion idea** — two arrows / a continuous stroke forming an "S" that reads as momentum and transformation. This is the brand's core visual equity.
- The **wordmark** "Soft Solutions Technologies" (evaluate whether "Ltd." stays in the primary lockup or moves to legal contexts only).

**Change:**
- **Palette → navy + gold.** Suggested treatment: a **navy roundel with a gold "S" motion mark**, or a **navy "S" with a single gold sweep/arrowhead** carrying the accent. Gold is the spark, not the whole mark.
- **Style → flat.** Remove the chrome ring, gloss, bevels, reflections, and multi-stop gradients. Clean vector, solid fills, one optional flat tint at most.
- **Blue → brand navy `#00156B`** (not the current `#283891`).
- **Red → retired.**

**Requirements:**
- Deliver as **true vector SVG** (not a raster PNG embedded in an SVG, which is what ships today).
- Provide: full-color lockup, single-color navy, single-color white (for dark/navy backgrounds), and an **icon-only** "S" mark for favicons/avatars.
- Legible and balanced down to **24px** (favicon) and up to large hero scale.
- Maintain clear space = height of the "S" mark on all sides.
- Verify gold-on-navy and navy-on-white meet the §2 accessibility notes.

---

## 9. Follow-ups / technical debt (non-blocking)

Code changes needed to fully align the codebase with these principles (not part of this doc's task):

1. **Ship the flat logo** per §8 and replace the embedded raster in `public/assets/soft-solutions.svg`; regenerate favicons from the icon-only mark.
2. **Prune the palette:** delete the sprawling legacy one-off tokens in `tailwind.config.ts` (`active-blue`, `tundora`, `nexus-gray`, `blaze-orange`, the unused `red`/`ink`-adjacent duplicates, etc.), collapsing to the §2 set.
3. **Confirm gold usage:** audit that every gold usage places dark navy text on the gold (never gold-as-text) per the accessibility rule.
