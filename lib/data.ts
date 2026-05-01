import { getDb } from './db';
import type { Product } from './types';

const STATIC_PRODUCTS: Product[] = [
  {
    "id": "cold-beer-tee",
    "slug": "cold-beer-tee",
    "name": "Cold Beer Tee",
    "tagline": "Tall boy, taller standards.",
    "price": 32,
    "category": "Apparel",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "no-apologies-hoodie",
    "slug": "no-apologies-hoodie",
    "name": "No Apologies Hoodie",
    "tagline": "Heavyweight pullover. Heavy attitude.",
    "price": 68,
    "category": "Apparel",
    "status": "active",
    "inventory": 100,
    "compare_at_price": 78
  },
  {
    "id": "lift-kit-trucker",
    "slug": "lift-kit-trucker",
    "name": "Lift Kit Trucker Hat",
    "tagline": "Snapback. Mesh back. Brick-built crown.",
    "price": 28,
    "category": "Hats",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "open-road-flag-tee",
    "slug": "open-road-flag-tee",
    "name": "Open Road Flag Tee",
    "tagline": "Stars, stripes, two lanes, no map.",
    "price": 32,
    "category": "Apparel",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "diesel-tee",
    "slug": "diesel-tee",
    "name": "Diesel Tee",
    "tagline": "Smoke a little. Pull a lot.",
    "price": 32,
    "category": "Apparel",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "raised-right-cap",
    "slug": "raised-right-cap",
    "name": "Raised Right Cap",
    "tagline": "Rope detail. Curved brim. Plain talk.",
    "price": 28,
    "category": "Hats",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "iron-eagle-tee",
    "slug": "iron-eagle-tee",
    "name": "Iron Eagle Tee",
    "tagline": "Talons out. Wings up. Volume up.",
    "price": 34,
    "category": "Apparel",
    "status": "active",
    "inventory": 100
  },
  {
    "id": "long-haul-pullover",
    "slug": "long-haul-pullover",
    "name": "Long Haul Pullover",
    "tagline": "Built for the back roads.",
    "price": 64,
    "category": "Apparel",
    "status": "active",
    "inventory": 100
  }
];

export async function getProducts(opts?: { limit?: number; category?: string }): Promise<Product[]> {
  const db = getDb();
  if (db) {
    try {
      const rows = opts?.category
        ? await db.sql`SELECT * FROM products WHERE status='active' AND category=${opts.category} ORDER BY created_at DESC ${opts.limit ? db.sql`LIMIT ${opts.limit}` : db.sql``}`
        : opts?.limit
        ? await db.sql`SELECT * FROM products WHERE status='active' ORDER BY created_at DESC LIMIT ${opts.limit}`
        : await db.sql`SELECT * FROM products WHERE status='active' ORDER BY created_at DESC`;
      if (rows.length > 0) return rows.map(normalize);
    } catch { /* fall through */ }
  }
  let list = STATIC_PRODUCTS;
  if (opts?.category) list = list.filter((p) => p.category === opts.category);
  if (opts?.limit) list = list.slice(0, opts.limit);
  return list;
}

export async function getProduct(slug: string): Promise<Product | null> {
  const db = getDb();
  if (db) {
    try {
      const rows = await db.sql`SELECT * FROM products WHERE slug=${slug}`;
      if (rows.length > 0) return normalize(rows[0]);
    } catch { /* fall through */ }
  }
  return STATIC_PRODUCTS.find((p) => p.slug === slug) ?? null;
}

function normalize(row: any): Product {
  return {
    ...row,
    price: Number(row.price),
    compare_at_price: row.compare_at_price != null ? Number(row.compare_at_price) : undefined,
  };
}
