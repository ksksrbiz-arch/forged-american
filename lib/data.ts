import { sql, safeQuery, safeOne } from './db';
import type { Product } from './types';

const STATIC_PRODUCTS: Product[] = [
  {
    "id": "cold-beer-tee",
    "slug": "cold-beer-tee",
    "name": "COLD BEER TEE",
    "tagline": "Ice cold. Like the truth.",
    "price": 32,
    "category": "Tees",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "redneck-tee",
    "slug": "redneck-tee",
    "name": "REDNECK TEE",
    "tagline": "Worn proud. Earned harder.",
    "price": 32,
    "category": "Tees",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "american-tee",
    "slug": "american-tee",
    "name": "AMERICAN TEE",
    "tagline": "Stars, stripes, and swagger.",
    "price": 32,
    "category": "Tees",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "dirt-roads-tee",
    "slug": "dirt-roads-tee",
    "name": "DIRT ROADS TEE",
    "tagline": "Where the pavement quits.",
    "price": 32,
    "category": "Tees",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "no-apologies-hoodie",
    "slug": "no-apologies-hoodie",
    "name": "NO APOLOGIES HOODIE",
    "tagline": "Heavyweight. Unapologetic.",
    "price": 65,
    "category": "Hoodies",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "backwoods-hoodie",
    "slug": "backwoods-hoodie",
    "name": "BACKWOODS HOODIE",
    "tagline": "Raised in the trees.",
    "price": 65,
    "category": "Hoodies",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "real-america-hat",
    "slug": "real-america-hat",
    "name": "REAL AMERICA HAT",
    "tagline": "Curved brim. Straight talk.",
    "price": 28,
    "category": "Hats",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "loud-proud-hat",
    "slug": "loud-proud-hat",
    "name": "LOUD & PROUD HAT",
    "tagline": "Snapback. No filter.",
    "price": 28,
    "category": "Hats",
    "status": "active",
    "inventory": 100
  }
];

export async function getProducts(opts?: { limit?: number; category?: string }): Promise<Product[]> {
  const limit = opts?.limit ?? 100;
  const dbResults = await safeQuery<Product>(async () => {
    if (opts?.category) {
      return await sql<Product>`
        select * from products
        where status = 'active' and category = ${opts.category}
        order by created_at desc limit ${limit}
      `;
    }
    return await sql<Product>`
      select * from products
      where status = 'active'
      order by created_at desc limit ${limit}
    `;
  });
  if (dbResults.length > 0) return dbResults;

  let list = STATIC_PRODUCTS;
  if (opts?.category) list = list.filter((p) => p.category === opts.category);
  if (opts?.limit) list = list.slice(0, opts.limit);
  return list;
}

export async function getProduct(slug: string): Promise<Product | null> {
  const row = await safeOne<Product>(() => sql<Product>`select * from products where slug = ${slug}`);
  if (row) return row;
  return STATIC_PRODUCTS.find((p) => p.slug === slug) ?? null;
}
