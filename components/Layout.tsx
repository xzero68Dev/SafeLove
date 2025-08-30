import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="border-b bg-white">
        <div className="container py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-brand">SafeLove</Link>
          <nav className="flex gap-4 text-sm">
            <Link href="/category/condom" className="hover:underline">ถุงยางอนามัย</Link>
            <Link href="/category/lube" className="hover:underline">เจลหล่อลื่น</Link>
            <Link href="/about" className="hover:underline">About</Link>
          </nav>
        </div>
      </header>
      <main className="container py-8">{children}</main>
      <footer className="border-t">
        <div className="container py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} SafeLove · ความรู้เรื่องเพศสัมพันธ์ปลอดภัย · อาจมีลิงก์ Affiliate
        </div>
      </footer>
    </div>
  );
}
