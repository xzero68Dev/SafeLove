import Link from 'next/link';
import Layout from '../components/Layout';
import { getAllPosts } from '../lib/posts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Home({ posts }: { posts: any[] }) {
  return (
    <Layout>
      <section className="mb-8">
        <h1 className="text-3xl font-bold">ความรู้เรื่องเพศสัมพันธ์ที่ปลอดภัย + รีวิวสินค้า</h1>
        <p className="text-gray-600 mt-2">บทความคัดสรรสำหรับผู้เริ่มต้นและคู่รัก พร้อมลิงก์ซื้อสินค้าบน Shopee</p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} href={`/posts/${p.slug}`} className="card hover:shadow-md transition">
            <div>
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-600 mt-1">{p.description}</p>
              <div className="text-xs text-gray-500 mt-2">{new Date(p.date).toLocaleDateString()}</div>
              <div className="mt-2 text-xs bg-gray-100 inline-block px-2 py-1 rounded">{p.category}</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
