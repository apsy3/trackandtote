import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context: { site: URL | undefined }) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return rss({
    title: "Track & Tote",
    description: "Short essays, blogs, and notes with transparent public-data method.",
    site: context.site || new URL("https://trackandtote.com"),
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.excerpt,
        pubDate: post.data.date,
        link: `/posts/${post.slug}/`
      }))
  });
}
