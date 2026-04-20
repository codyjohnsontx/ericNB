import type { CollectionEntry } from "astro:content";

export function sortServices(entries: CollectionEntry<"services">[]) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

export function sortFaq(entries: CollectionEntry<"faq">[]) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

export function sortTestimonials(entries: CollectionEntry<"testimonials">[]) {
  return [...entries]
    .filter((e) => !e.data.draft)
    .sort((a, b) => (b.data.pubDate?.getTime() ?? 0) - (a.data.pubDate?.getTime() ?? 0));
}

export function sortBlog(entries: CollectionEntry<"blog">[]) {
  return [...entries]
    .filter((e) => !e.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
