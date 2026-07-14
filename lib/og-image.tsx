import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

/** Shared export values for every `opengraph-image.tsx` route. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/** Alt text for a page's share image. */
export const ogAlt = (title: string) => `${title} — ${siteConfig.name}`;

/**
 * Renders a branded 1200×630 Open Graph / Twitter share image with the page
 * title baked in. Reused by every `opengraph-image.tsx` route so each of those
 * files stays a few lines.
 *
 * NOTE: Satori renders with its built-in sans-serif and no bundled font, so
 * `title`/`subtitle` must use Latin-1 glyphs only (ASCII plus the `·`, `—`
 * etc. we already use). Non-Latin characters render as blank tofu — bundle a
 * font via ImageResponse `fonts` before adding any.
 */
export function ogImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #00156B 0%, #000B3D 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#F5B301",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "white",
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                marginTop: 28,
                color: "#C7CEE6",
                fontSize: 32,
                lineHeight: 1.35,
                maxWidth: 900,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#C7CEE6",
            fontSize: 26,
          }}
        >
          Nairobi, Kenya · {new URL(siteConfig.url).host}
        </div>
      </div>
    ),
    { ...ogSize }
  );
}
