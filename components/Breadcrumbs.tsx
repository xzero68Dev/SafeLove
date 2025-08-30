import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { href: string, label: string }[] }) {
  return (
    <nav aria-label="breadcrumbs" className="text-sm text-gray-600 mb-4">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2">/</span>}
          <Link href={item.href} className="hover:underline">{item.label}</Link>
        </span>
      ))}
    </nav>
  );
}
