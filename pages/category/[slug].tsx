import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllPosts, getPostsByCategory } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const cats = Array.from(new Set(getAllPosts().map(p => p.category)));
  const paths = cats.map(c => ({ params: { slug: c } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);
  const posts = getPostsByCategory(slug);
  return { props: { slug, posts } };
};

export default function CategoryPage({ slug, posts }: { slug: string, posts: any[] }) {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">หมวดหมู่: {slug}</h1>
      <div className="space-y-4">
        {posts.map(p => (
          <Link key={p.slug} href={`/posts/${p.slug}`} className="block card hover:shadow-md transition">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-gray-600">{p.description}</p>
          </Link>
        ))}
      </div>
    </Layout>
  );
}
