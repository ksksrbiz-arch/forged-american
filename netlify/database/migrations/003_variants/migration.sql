-- 003_variants: per-product size/color SKUs.
-- Idempotent — uses sku UNIQUE constraint to skip duplicates on re-apply.

-- cold-beer-tee
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT p.id, v.name, v.sku, v.price, v.inventory, v.attrs
FROM products p,
     (VALUES
  ('S', 'FA-CBT-BLA-S', 32, 18, '{"size": "S", "color": "Black"}'::jsonb),
  ('M', 'FA-CBT-BLA-M', 32, 32, '{"size": "M", "color": "Black"}'::jsonb),
  ('L', 'FA-CBT-BLA-L', 32, 28, '{"size": "L", "color": "Black"}'::jsonb),
  ('XL', 'FA-CBT-BLA-XL', 32, 22, '{"size": "XL", "color": "Black"}'::jsonb),
  ('XXL', 'FA-CBT-BLA-XXL', 32, 0, '{"size": "XXL", "color": "Black"}'::jsonb)
     ) AS v(name, sku, price, inventory, attrs)
WHERE p.slug = 'cold-beer-tee'
ON CONFLICT (sku) DO NOTHING;

-- no-apologies-hoodie
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT p.id, v.name, v.sku, v.price, v.inventory, v.attrs
FROM products p,
     (VALUES
  ('S / Black', 'FA-NAH-BLA-S', 68, 12, '{"size": "S", "color": "Black"}'::jsonb),
  ('M / Black', 'FA-NAH-BLA-M', 68, 24, '{"size": "M", "color": "Black"}'::jsonb),
  ('L / Black', 'FA-NAH-BLA-L', 68, 28, '{"size": "L", "color": "Black"}'::jsonb),
  ('XL / Black', 'FA-NAH-BLA-XL', 68, 18, '{"size": "XL", "color": "Black"}'::jsonb),
  ('XXL / Black', 'FA-NAH-BLA-XXL', 68, 8, '{"size": "XXL", "color": "Black"}'::jsonb),
  ('S / Charcoal', 'FA-NAH-CHA-S', 68, 12, '{"size": "S", "color": "Charcoal"}'::jsonb),
  ('M / Charcoal', 'FA-NAH-CHA-M', 68, 24, '{"size": "M", "color": "Charcoal"}'::jsonb),
  ('L / Charcoal', 'FA-NAH-CHA-L', 68, 28, '{"size": "L", "color": "Charcoal"}'::jsonb),
  ('XL / Charcoal', 'FA-NAH-CHA-XL', 68, 18, '{"size": "XL", "color": "Charcoal"}'::jsonb),
  ('XXL / Charcoal', 'FA-NAH-CHA-XXL', 68, 8, '{"size": "XXL", "color": "Charcoal"}'::jsonb)
     ) AS v(name, sku, price, inventory, attrs)
WHERE p.slug = 'no-apologies-hoodie'
ON CONFLICT (sku) DO NOTHING;

-- open-road-flag-tee
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT p.id, v.name, v.sku, v.price, v.inventory, v.attrs
FROM products p,
     (VALUES
  ('S', 'FA-ORFT-BLA-S', 32, 14, '{"size": "S", "color": "Black"}'::jsonb),
  ('M', 'FA-ORFT-BLA-M', 32, 24, '{"size": "M", "color": "Black"}'::jsonb),
  ('L', 'FA-ORFT-BLA-L', 32, 22, '{"size": "L", "color": "Black"}'::jsonb),
  ('XL', 'FA-ORFT-BLA-XL', 32, 16, '{"size": "XL", "color": "Black"}'::jsonb),
  ('XXL', 'FA-ORFT-BLA-XXL', 32, 6, '{"size": "XXL", "color": "Black"}'::jsonb)
     ) AS v(name, sku, price, inventory, attrs)
WHERE p.slug = 'open-road-flag-tee'
ON CONFLICT (sku) DO NOTHING;

-- diesel-tee
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT p.id, v.name, v.sku, v.price, v.inventory, v.attrs
FROM products p,
     (VALUES
  ('S / Black', 'FA-DT-BLA-S', 32, 16, '{"size": "S", "color": "Black"}'::jsonb),
  ('M / Black', 'FA-DT-BLA-M', 32, 30, '{"size": "M", "color": "Black"}'::jsonb),
  ('L / Black', 'FA-DT-BLA-L', 32, 26, '{"size": "L", "color": "Black"}'::jsonb),
  ('XL / Black', 'FA-DT-BLA-XL', 32, 0, '{"size": "XL", "color": "Black"}'::jsonb),
  ('XXL / Black', 'FA-DT-BLA-XXL', 32, 4, '{"size": "XXL", "color": "Black"}'::jsonb),
  ('S / Heather Gray', 'FA-DT-HEA-S', 32, 16, '{"size": "S", "color": "Heather Gray"}'::jsonb),
  ('M / Heather Gray', 'FA-DT-HEA-M', 32, 30, '{"size": "M", "color": "Heather Gray"}'::jsonb),
  ('L / Heather Gray', 'FA-DT-HEA-L', 32, 26, '{"size": "L", "color": "Heather Gray"}'::jsonb),
  ('XL / Heather Gray', 'FA-DT-HEA-XL', 32, 0, '{"size": "XL", "color": "Heather Gray"}'::jsonb),
  ('XXL / Heather Gray', 'FA-DT-HEA-XXL', 32, 4, '{"size": "XXL", "color": "Heather Gray"}'::jsonb)
     ) AS v(name, sku, price, inventory, attrs)
WHERE p.slug = 'diesel-tee'
ON CONFLICT (sku) DO NOTHING;

-- iron-eagle-tee
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT p.id, v.name, v.sku, v.price, v.inventory, v.attrs
FROM products p,
     (VALUES
  ('S', 'FA-IET-BLA-S', 34, 10, '{"size": "S", "color": "Black"}'::jsonb),
  ('M', 'FA-IET-BLA-M', 34, 22, '{"size": "M", "color": "Black"}'::jsonb),
  ('L', 'FA-IET-BLA-L', 34, 24, '{"size": "L", "color": "Black"}'::jsonb),
  ('XL', 'FA-IET-BLA-XL', 34, 18, '{"size": "XL", "color": "Black"}'::jsonb),
  ('XXL', 'FA-IET-BLA-XXL', 34, 6, '{"size": "XXL", "color": "Black"}'::jsonb)
     ) AS v(name, sku, price, inventory, attrs)
WHERE p.slug = 'iron-eagle-tee'
ON CONFLICT (sku) DO NOTHING;

-- long-haul-pullover
INSERT INTO product_variants (product_id, name, sku, price, inventory, attributes)
SELECT p.id, v.name, v.sku, v.price, v.inventory, v.attrs
FROM products p,
     (VALUES
  ('S / Black', 'FA-LHP-BLA-S', 64, 8, '{"size": "S", "color": "Black"}'::jsonb),
  ('M / Black', 'FA-LHP-BLA-M', 64, 18, '{"size": "M", "color": "Black"}'::jsonb),
  ('L / Black', 'FA-LHP-BLA-L', 64, 22, '{"size": "L", "color": "Black"}'::jsonb),
  ('XL / Black', 'FA-LHP-BLA-XL', 64, 14, '{"size": "XL", "color": "Black"}'::jsonb),
  ('XXL / Black', 'FA-LHP-BLA-XXL', 64, 4, '{"size": "XXL", "color": "Black"}'::jsonb),
  ('S / Forest Green', 'FA-LHP-FOR-S', 64, 8, '{"size": "S", "color": "Forest Green"}'::jsonb),
  ('M / Forest Green', 'FA-LHP-FOR-M', 64, 18, '{"size": "M", "color": "Forest Green"}'::jsonb),
  ('L / Forest Green', 'FA-LHP-FOR-L', 64, 22, '{"size": "L", "color": "Forest Green"}'::jsonb),
  ('XL / Forest Green', 'FA-LHP-FOR-XL', 64, 14, '{"size": "XL", "color": "Forest Green"}'::jsonb),
  ('XXL / Forest Green', 'FA-LHP-FOR-XXL', 64, 4, '{"size": "XXL", "color": "Forest Green"}'::jsonb)
     ) AS v(name, sku, price, inventory, attrs)
WHERE p.slug = 'long-haul-pullover'
ON CONFLICT (sku) DO NOTHING;
