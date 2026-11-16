export function JsonLd({ graph }: { graph: object[] }) {
  const serializedGraph = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedGraph }}
    />
  );
}
