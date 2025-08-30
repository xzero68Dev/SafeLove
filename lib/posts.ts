import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Product = { brand: string; feature: string; price: string; url: string };
export type QA = { q: string; a: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
  affiliate?: Product[];
  faq?: QA[];
};

export async function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug: realSlug,
    meta: data as PostMeta,
    contentHtml
  };
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const slugs = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'));
  const posts = slugs.map(slug => {
    const { data } = matter(
      fs.readFileSync(path.join(postsDirectory, slug), 'utf8')
    );
    const realSlug = slug.replace(/\.md$/, '');
    return { slug: realSlug, ...(data as any) };
  }) as PostMeta[];
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(cat: string) {
  return getAllPosts().filter(p => p.category === cat);
}
