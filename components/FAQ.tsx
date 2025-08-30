import { useMemo } from 'react';

type QA = { q: string; a: string };

export default function FAQ({ items }: { items: QA[] }) {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(qa => ({
      "@type": "Question",
      "name": qa.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.a
      }
    }))
  }), [items]);

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">คำถามที่พบบ่อย (FAQ)</h2>
      <div className="space-y-4">
        {items.map((qa, i) => (
          <details key={i} className="card">
            <summary className="font-medium cursor-pointer">{qa.q}</summary>
            <div className="mt-2 text-gray-700">{qa.a}</div>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}
