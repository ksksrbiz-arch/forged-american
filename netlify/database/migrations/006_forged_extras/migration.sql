-- 006_forged_extras: complete the real-photo rollout
--
-- 1. no-apologies-hoodie  → real lifestyle photo (model wearing the hoodie)
-- 2. backwoods-built-tee  → NEW product (olive tee, IMG_6190)
--
-- Idempotent: UPDATE is naturally so; INSERT…ON CONFLICT (slug) UPDATEs in place.

UPDATE products
   SET image_url = '/img/no-apologies-hoodie.jpg',
       images    = '["/img/no-apologies-hoodie.jpg"]'::jsonb
 WHERE slug = 'no-apologies-hoodie';

-- BACKWOODS BUILT TEE — Olive cotton tee with cabin-and-pines mark
INSERT INTO products (
  slug, name, tagline, description, price, compare_at_price,
  category, image_url, images, inventory, status
)
VALUES (
  'backwoods-built-tee',
  'Backwoods Built Tee',
  'Cabin-built. Pine-bordered. Built to outlast the city.',
  E'Olive cotton tee with a stamped cabin-and-pines mark and BACKWOODS BUILT in heavyweight type. Soft-washed, pre-shrunk, double-needle stitched. Runs true to size; size up for a relaxed fit.\n\nFor the back-porch crowd. For the dirt-road regulars. For the people who measure a good day in firewood and silence.',
  29.00,
  NULL,
  'tees',
  '/img/backwoods-built-tee.jpg',
  '["/img/backwoods-built-tee.jpg"]'::jsonb,
  100,
  'active'
)
ON CONFLICT (slug) DO UPDATE SET
  name             = EXCLUDED.name,
  tagline          = EXCLUDED.tagline,
  description      = EXCLUDED.description,
  price            = EXCLUDED.price,
  category         = EXCLUDED.category,
  image_url        = EXCLUDED.image_url,
  images           = EXCLUDED.images,
  inventory        = EXCLUDED.inventory,
  status           = EXCLUDED.status,
  updated_at       = now();

-- Variants — Olive in 5 sizes
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · S',  'BWB-OLV-S',  29.00, 12, '{"color":"Olive","size":"S"}'::jsonb
  FROM products WHERE slug='backwoods-built-tee'
ON CONFLICT (sku) DO NOTHING;

INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · M',  'BWB-OLV-M',  29.00, 18, '{"color":"Olive","size":"M"}'::jsonb
  FROM products WHERE slug='backwoods-built-tee'
ON CONFLICT (sku) DO NOTHING;

INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · L',  'BWB-OLV-L',  29.00, 22, '{"color":"Olive","size":"L"}'::jsonb
  FROM products WHERE slug='backwoods-built-tee'
ON CONFLICT (sku) DO NOTHING;

INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · XL', 'BWB-OLV-XL', 29.00, 14, '{"color":"Olive","size":"XL"}'::jsonb
  FROM products WHERE slug='backwoods-built-tee'
ON CONFLICT (sku) DO NOTHING;

INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · XXL','BWB-OLV-XXL',29.00, 8, '{"color":"Olive","size":"XXL"}'::jsonb
  FROM products WHERE slug='backwoods-built-tee'
ON CONFLICT (sku) DO NOTHING;
