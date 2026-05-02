-- 005_real_photos: replace Unsplash placeholders with Daryl's real
-- product photography. Idempotent — UPDATE/INSERT…ON CONFLICT.

UPDATE products
   SET image_url = '/img/cold-beer-tee.jpg',
       images    = '["/img/cold-beer-tee.jpg"]'::jsonb
 WHERE slug = 'cold-beer-tee';

UPDATE products
   SET image_url = '/img/open-road-tee.jpg',
       images    = '["/img/open-road-tee.jpg", "/img/forged-flag-tee.jpg"]'::jsonb
 WHERE slug = 'open-road-flag-tee';

UPDATE products
   SET image_url = '/img/dirt-roads-tee.jpg',
       images    = '["/img/dirt-roads-tee.jpg", "/img/forged-flag-tee.jpg"]'::jsonb
 WHERE slug = 'diesel-tee';

UPDATE products
   SET image_url = '/img/forged-flag-tee.jpg',
       images    = '["/img/forged-flag-tee.jpg", "/img/open-road-tee.jpg"]'::jsonb
 WHERE slug = 'iron-eagle-tee';

UPDATE products
   SET image_url = '/img/lift-kit-cap.jpg',
       images    = '["/img/lift-kit-cap.jpg"]'::jsonb
 WHERE slug = 'lift-kit-trucker';

-- New product: REDNECK Tee (matches uploaded photos IMG_6181 + IMG_6185)
INSERT INTO products (slug, name, tagline, description, price, compare_at_price, category, image_url, images, inventory, status)
VALUES (
  'redneck-tee',
  'Redneck Tee',
  'Front porch flag. Cabin smoke. Quiet pride.',
  E'Olive cotton tee with a cabin-and-flag print and the Forged American script on the chest. Soft-washed for a worn-in feel from day one. 100% ringspun cotton, pre-shrunk, double-needle stitched at the hem and sleeves.\n\nCabin built. Flag flown. Boots laced. Wear it.',
  29.00,
  NULL,
  'tees',
  '/img/redneck-tee.jpg',
  '["/img/redneck-tee.jpg", "/img/redneck-tee-back.jpg"]'::jsonb,
  100,
  'active'
) ON CONFLICT (slug) DO UPDATE SET
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

-- Variants for redneck-tee (only created on first run; idempotent)
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · S',  'RDN-OLV-S',  29.00, 12, '{"color":"Olive","size":"S"}'::jsonb FROM products WHERE slug='redneck-tee'
ON CONFLICT (sku) DO NOTHING;
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · M',  'RDN-OLV-M',  29.00, 18, '{"color":"Olive","size":"M"}'::jsonb FROM products WHERE slug='redneck-tee'
ON CONFLICT (sku) DO NOTHING;
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · L',  'RDN-OLV-L',  29.00, 22, '{"color":"Olive","size":"L"}'::jsonb FROM products WHERE slug='redneck-tee'
ON CONFLICT (sku) DO NOTHING;
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · XL', 'RDN-OLV-XL', 29.00, 14, '{"color":"Olive","size":"XL"}'::jsonb FROM products WHERE slug='redneck-tee'
ON CONFLICT (sku) DO NOTHING;
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT id, 'Olive · XXL', 'RDN-OLV-XXL', 29.00, 8, '{"color":"Olive","size":"XXL"}'::jsonb FROM products WHERE slug='redneck-tee'
ON CONFLICT (sku) DO NOTHING;
