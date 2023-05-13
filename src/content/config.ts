import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    date: z.date().transform((str) => new Date(str)),
    title: z.string(),
    description: z.string(),
    technology: z.array(z.string()),
    images: z.array(z.string()).length(2),
    link: z.string().url(),
    repositories: z
      .object({
        backend: z
          .array(z.object({ title: z.string(), link: z.string().url() }))
          .optional(),
        frontend: z
          .array(z.object({ title: z.string(), link: z.string().url() }))
          .optional(),
      })
      .strict(),
  }),
});

export const collections = {
  projects: projectCollection,
};
