import { Currency } from "@/types/product";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().optional(),

  price: z.coerce.number({
    required_error: 'Price is required',
    invalid_type_error: 'Price must be a number',
  }),

  salePrice: z.coerce.number().min(0).default(0),
  rating: z.coerce.number().min(1).max(5).default(1),

  currency: z.nativeEnum(Currency).default(Currency.Usd),

  stock: z.coerce.number().min(0).default(0),

  categories: z.array(z.string()).optional(),

  featuredImage: z.string().url('Must be a valid URL').optional(),

  images: z.array(z.string().url('Must be valid image URLs')).optional(),

  enabled: z.boolean().default(true),

});