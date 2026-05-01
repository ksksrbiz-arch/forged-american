import { createBrowserClient } from './supabase';
import type { Product } from './types';

const STATIC_PRODUCTS: Product[] = [
  {
    "slug": "cold-beer-tee",
    "name": "COLD BEER TEE",
    "tagline": "Ice cold. Like the truth.",
    "price": 32,
    "category": "Tees",
    "status": "active"
  },
  {
    "slug": "redneck-tee",
    "name": "REDNECK TEE",
    "tagline": "Worn proud. Earned harder.",
    "price": 32,
    "category": "Tees",
    "status": "active"
  },
  {
    "slug": "american-tee",
    "name": "AMERICAN TEE",
    "tagline": "Stars, stripes, and swagger.",
    "price": 32,
    "category": "Tees",
    "status": "active"
  },
  {
    "slug": "dirt-roads-tee",
    "name": "DIRT ROADS TEE",
    "tagline": "Where the pavement quits.",
    "price": 32,
    "category": "Tees",
    "status": "active"
  },
  {
    "slug": "no-apologies-hoodie",
    "name": "NO APOLOGIES HOODIE",
    "tagline": "Heavyweight. Unapologetic.",
    "price": 65,
    "category": "Hoodies",
    "status": "active"
  },
  {
    "slug": "backwoods-hoodie",
    "name": "BACKWOODS HOODIE",
    "tagline": "Raised in the trees.",
    "price": 65,
    "category": "Hoodies",
    "status": "active"
  },
  {
    "slug": "real-america-hat",
    "name": "REAL AMERICA HAT",
    "tagline": "Curved brim. Straight talk.",
    "price": 28,
    "category": "Hats",
    "status": "active"
  },
  {
    "slug": "loud-proud-hat",
    "name": "LOUD & PROUD HAT",
    "tagline": "Snapback. No filter.",
    "price": 28,
    "category": "Hats",
    "status": "active"
  }
];

export async function getProducts(opts?: { limit?: number; category?: string }): Promise<Product[]> {
  const supabase = createBrowserClient();
  if (supabase) {
    let q = supabase.from('products').select('*').eq('status', 'active');
    if (opts?.category) q = q.eq('category', opts.category);
    if (opts?.limit) q = q.limit(opts.limit);
    const { data, error } = await q;
    if (!error && data?.length) return data as Product[];
  }
  // Fallback to static seed data when Supabase isn't configured yet
  let list = STATIC_PRODUCTS;
  if (opts?.category) list = list.filter((p) => p.category === opts.category);
  if (opts?.limit) list = list.slice(0, opts.limit);
  return list;
}

export async function getProduct(slug: string): Promise<Product | null> {
  const supabase = createBrowserClient();
  if (supabase) {
    const { data } = await supabase.from('products').select('*').eq('slug', slug).single();
    if (data) return data as Product;
  }
  return STATIC_PRODUCTS.find((p) => p.slug === slug) ?? null;
}
