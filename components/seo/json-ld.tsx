/**
 * Renders a Schema.org JSON-LD block. Pass any structured-data object built by
 * the helpers in `lib/seo.ts`.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; there is no user input here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
