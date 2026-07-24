import type { APIRoute } from 'astro';
import { site } from '../lib/site';

export const GET: APIRoute = ({ site: astroSite }) => {
  const origin = astroSite ?? site.siteUrl;
  const sitemap = new URL('/sitemap-index.xml', origin).href;

  return new Response(
    `User-agent: *
Allow: /
Sitemap: ${sitemap}
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
};
