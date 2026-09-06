import { getAllPosts } from '@/lib/posts';
import { site } from '@/lib/site';

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map(
      (p) => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${site.url}/blog/${p.slug}</link>
      <guid>${site.url}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt}]]></description>
    </item>`
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${site.name} — Blog</title>
    <link>${site.url}/blog</link>
    <description>${site.punchline}</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
