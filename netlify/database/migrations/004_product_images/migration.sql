-- 004_product_images: curated photography per product.
-- All URLs verified live before commit.
-- Re-runnable; UPDATE statements are naturally idempotent.

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'cold-beer-tee';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'open-road-flag-tee';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'diesel-tee';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'iron-eagle-tee';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1593030103066-0093718efeb9?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'no-apologies-hoodie';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1542406775-ade58c52d2e4?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1542406775-ade58c52d2e4?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'long-haul-pullover';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'lift-kit-trucker';

UPDATE products
   SET image_url = 'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=1400&q=80',
       images    = '["https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=1400&q=80", "https://images.unsplash.com/photo-1542728928-1413d1894ed1?auto=format&fit=crop&w=1400&q=80"]'::jsonb
 WHERE slug = 'raised-right-cap';
