insert into products (slug, name, tagline, price, category, status, inventory)
values
  ('cold-beer-tee', 'COLD BEER TEE', 'Ice cold. Like the truth.', 32, 'Tees', 'active', 100),
  ('redneck-tee', 'REDNECK TEE', 'Worn proud. Earned harder.', 32, 'Tees', 'active', 100),
  ('american-tee', 'AMERICAN TEE', 'Stars, stripes, and swagger.', 32, 'Tees', 'active', 100),
  ('dirt-roads-tee', 'DIRT ROADS TEE', 'Where the pavement quits.', 32, 'Tees', 'active', 100),
  ('no-apologies-hoodie', 'NO APOLOGIES HOODIE', 'Heavyweight. Unapologetic.', 65, 'Hoodies', 'active', 100),
  ('backwoods-hoodie', 'BACKWOODS HOODIE', 'Raised in the trees.', 65, 'Hoodies', 'active', 100),
  ('real-america-hat', 'REAL AMERICA HAT', 'Curved brim. Straight talk.', 28, 'Hats', 'active', 100),
  ('loud-proud-hat', 'LOUD & PROUD HAT', 'Snapback. No filter.', 28, 'Hats', 'active', 100)
on conflict (slug) do nothing;
