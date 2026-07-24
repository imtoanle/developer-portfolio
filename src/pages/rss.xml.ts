import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { site } from '../lib/site';

export async function GET(context: { site?: URL }) {
  const notes = await getCollection('notes');

  return rss({
    title: `${site.name} Notes`,
    description: 'Public engineering notes from the approved source pack.',
    site: context.site ?? new URL(site.siteUrl),
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.summary,
      pubDate: note.data.date,
      link: `/notes/${note.id}`,
    })),
  });
}
