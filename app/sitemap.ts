import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { projects } from '@/lib/projects';
import { getAllPosts } from '@/lib/posts';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticRoutes = ['', '/about', '/work', '/blog', '/contact'].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const workRoutes = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
