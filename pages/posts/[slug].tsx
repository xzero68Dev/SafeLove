import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import ProductTable from '../../components/ProductTable';
import FAQ from '../../components/FAQ';
import Breadcrumbs from '../../components/Breadcrumbs';
import { getPostSlugs, getPostBySlug } from '../../lib/posts';

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPostSlugs();
  const paths = slugs.map((s) => ({ params: { slug: s.replace(/\.md$/, '') } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = String(params?.slug);
  const post = await getPostBySlug(slug);
  return { props: { post } };
};

export default function PostPage({ post }: { post: any }) {
  const { meta, contentHtml } = post;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "datePublished": meta.date,
    "description": meta.description
  };

  return (
    <Layout>
      <Head>
        <title>{meta.title} | SafeLove</title>
        <meta name="description" content={meta.description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Breadcrumbs items={[
        { href: '/', label: 'หน้าแรก' },
        { href: `/category/${meta.category}`, label: meta.category },
        { href: '#', label: meta.title }
      ]} />

      <article>
        <h1 className="text-3xl font-bold">{meta.title}</h1>
        <p className="text-gray-500 mt-1">{new Date(meta.date).toLocaleDateString()}</p>
        <p className="text-gray-700 mt-4">{meta.description}</p>
        <div className="prose prose-neutral max-w-none mt-6" dangerouslySetInnerHTML={{ __html: contentHtml }} />

        {meta.affiliate && meta.affiliate.length > 0 && (
          <ProductTable items={meta.affiliate} />
        )}

        {meta.faq && meta.faq.length > 0 && (
          <FAQ items={meta.faq} />
        )}
      </article>
    </Layout>
  );
}
