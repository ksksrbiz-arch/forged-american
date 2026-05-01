-- 002_seed: starter catalog. Idempotent (upserts on slug).

INSERT INTO products (slug, name, tagline, price, compare_at_price, category, inventory, status)
VALUES
  ('cold-beer-tee', 'Cold Beer Tee', 'Tall boy, taller standards.', 32, NULL, 'Apparel', 100, 'active'),
  ('no-apologies-hoodie', 'No Apologies Hoodie', 'Heavyweight pullover. Heavy attitude.', 68, 78, 'Apparel', 100, 'active'),
  ('lift-kit-trucker', 'Lift Kit Trucker Hat', 'Snapback. Mesh back. Brick-built crown.', 28, NULL, 'Hats', 100, 'active'),
  ('open-road-flag-tee', 'Open Road Flag Tee', 'Stars, stripes, two lanes, no map.', 32, NULL, 'Apparel', 100, 'active'),
  ('diesel-tee', 'Diesel Tee', 'Smoke a little. Pull a lot.', 32, NULL, 'Apparel', 100, 'active'),
  ('raised-right-cap', 'Raised Right Cap', 'Rope detail. Curved brim. Plain talk.', 28, NULL, 'Hats', 100, 'active'),
  ('iron-eagle-tee', 'Iron Eagle Tee', 'Talons out. Wings up. Volume up.', 34, NULL, 'Apparel', 100, 'active'),
  ('long-haul-pullover', 'Long Haul Pullover', 'Built for the back roads.', 64, NULL, 'Apparel', 100, 'active')
ON CONFLICT (slug) DO NOTHING;
