import { defineCollection, z } from "astro:content";

const services = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    whoItsFor: z.string(),
    benefits: z.array(z.string()),
    durations: z.array(
      z.object({
        label: z.string(),
        minutes: z.number(),
        studioPrice: z.number(),
        houseCallPrice: z.number(),
      }),
    ),
    expectations: z.string(),
    houseCalls: z.enum(["yes", "limited", "no"]),
    houseCallNote: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    quote: z.string(),
    serviceType: z.string().optional(),
    tags: z.array(z.string()).optional(),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const faq = defineCollection({
  type: "content",
  schema: z.object({
    question: z.string(),
    category: z.string(),
    order: z.number(),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroAlt: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { services, testimonials, faq, blog };
