import { z } from "zod"


export const CategoryFilterSchema = z.object({
  categories: z.array(z.string().optional())
})
