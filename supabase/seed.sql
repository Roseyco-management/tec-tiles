-- Tec Tiles Seed Data
-- Run this after schema.sql to populate sample data

-- Categories (based on existing tec-tiles.com categories)
INSERT INTO categories (id, name, slug, description, display_order) VALUES
  ('c1000000-0000-0000-0000-000000000001', 'Wall Tiles', 'wall-tiles', 'Premium wall tiles for kitchens, bathrooms, and living spaces', 1),
  ('c1000000-0000-0000-0000-000000000002', 'Floor Tiles', 'floor-tiles', 'Durable floor tiles for every room in your home', 2),
  ('c1000000-0000-0000-0000-000000000003', 'Outdoor Tiles', 'outdoor-tiles', 'Weather-resistant tiles for patios, gardens, and driveways', 3),
  ('c1000000-0000-0000-0000-000000000004', 'PVC Panels', 'pvc-panels', 'Easy-install PVC wall panels for bathrooms and kitchens', 4),
  ('c1000000-0000-0000-0000-000000000005', 'Acoustic Panels', 'acoustic-panels', 'Sound-absorbing panels for offices and home studios', 5),
  ('c1000000-0000-0000-0000-000000000006', 'SPC Flooring', 'spc-flooring', 'Stone Plastic Composite flooring - waterproof and durable', 6),
  ('c1000000-0000-0000-0000-000000000007', 'Accessories', 'accessories', 'Tile adhesives, grout, trims, and installation tools', 7);

-- Sample Products
INSERT INTO products (name, slug, description, price, compare_at_price, category_id, images, stock_quantity, sku, is_featured) VALUES
-- Wall Tiles
('Mosaica White Marble Effect', 'mosaica-white-marble-effect', 'Elegant white marble effect wall tile. Perfect for bathrooms and kitchens. Size: 300x600mm', 24.99, 29.99, 'c1000000-0000-0000-0000-000000000001', ARRAY['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'], 150, 'WT-MOS-001', true),
('Metro Grey Gloss', 'metro-grey-gloss', 'Classic metro tile in grey gloss finish. Timeless design for any space. Size: 100x200mm', 18.99, NULL, 'c1000000-0000-0000-0000-000000000001', ARRAY['https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800'], 200, 'WT-MET-002', true),
('Terrazzo Effect Blue', 'terrazzo-effect-blue', 'Modern terrazzo effect tile with blue chips. Size: 450x450mm', 32.99, 39.99, 'c1000000-0000-0000-0000-000000000001', ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'], 80, 'WT-TER-003', false),
('Brick White Matt', 'brick-white-matt', 'Contemporary white brick effect wall tile. Size: 60x250mm', 21.99, NULL, 'c1000000-0000-0000-0000-000000000001', ARRAY['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'], 300, 'WT-BRK-004', true),

-- Floor Tiles
('Oak Wood Effect', 'oak-wood-effect', 'Natural oak wood effect floor tile. Authentic grain pattern. Size: 200x1200mm', 28.99, 34.99, 'c1000000-0000-0000-0000-000000000002', ARRAY['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'], 250, 'FT-OAK-001', true),
('Slate Grey Matt', 'slate-grey-matt', 'Natural slate effect in grey. Anti-slip R10 rating. Size: 600x600mm', 26.99, NULL, 'c1000000-0000-0000-0000-000000000002', ARRAY['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'], 180, 'FT-SLA-002', true),
('Concrete Industrial', 'concrete-industrial', 'Urban concrete effect floor tile. Size: 600x600mm', 24.99, NULL, 'c1000000-0000-0000-0000-000000000002', ARRAY['https://images.unsplash.com/photo-1600566752734-2a0cd66c42ee?w=800'], 220, 'FT-CON-003', false),
('Marble Nero', 'marble-nero', 'Luxurious black marble effect floor tile. Size: 800x800mm', 42.99, 49.99, 'c1000000-0000-0000-0000-000000000002', ARRAY['https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800'], 90, 'FT-MAR-004', true),

-- Outdoor Tiles
('Porcelain Paving Grey', 'porcelain-paving-grey', 'Premium porcelain paving slab. Frost-proof. Size: 600x600x20mm', 34.99, NULL, 'c1000000-0000-0000-0000-000000000003', ARRAY['https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800'], 400, 'OT-PAV-001', true),
('Sandstone Effect Beige', 'sandstone-effect-beige', 'Natural sandstone effect outdoor tile. Size: 600x600x20mm', 32.99, 38.99, 'c1000000-0000-0000-0000-000000000003', ARRAY['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'], 350, 'OT-SAN-002', false),
('Decking Tiles Composite', 'decking-tiles-composite', 'Easy-click composite decking tiles. Pack of 6. Size: 300x300mm each', 44.99, NULL, 'c1000000-0000-0000-0000-000000000003', ARRAY['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800'], 120, 'OT-DEC-003', true),

-- PVC Panels
('Marble Effect White Panel', 'marble-effect-white-panel', 'Waterproof PVC panel with marble effect. Size: 1000x2400mm', 49.99, 59.99, 'c1000000-0000-0000-0000-000000000004', ARRAY['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'], 75, 'PVC-MAR-001', true),
('Tile Effect Grey Panel', 'tile-effect-grey-panel', 'PVC panel with realistic tile effect. Size: 1000x2400mm', 44.99, NULL, 'c1000000-0000-0000-0000-000000000004', ARRAY['https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800'], 85, 'PVC-TIL-002', false),

-- Acoustic Panels
('Acoustic Panel Charcoal', 'acoustic-panel-charcoal', 'Sound-absorbing acoustic panel. NRC 0.85. Size: 600x1200mm', 38.99, NULL, 'c1000000-0000-0000-0000-000000000005', ARRAY['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'], 60, 'AC-CHA-001', true),
('Acoustic Panel Natural', 'acoustic-panel-natural', 'Eco-friendly acoustic panel in natural wood finish. Size: 600x2400mm', 54.99, 64.99, 'c1000000-0000-0000-0000-000000000005', ARRAY['https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800'], 45, 'AC-NAT-002', false),

-- SPC Flooring
('SPC Oak Natural', 'spc-oak-natural', 'Waterproof SPC flooring in natural oak. 5mm thick with underlay. Price per sqm', 22.99, 27.99, 'c1000000-0000-0000-0000-000000000006', ARRAY['https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800'], 500, 'SPC-OAK-001', true),
('SPC Herringbone Grey', 'spc-herringbone-grey', 'Herringbone pattern SPC flooring in grey. 6mm thick. Price per sqm', 28.99, NULL, 'c1000000-0000-0000-0000-000000000006', ARRAY['https://images.unsplash.com/photo-1600566752734-2a0cd66c42ee?w=800'], 320, 'SPC-HER-002', true),

-- Accessories
('Tile Adhesive 20kg', 'tile-adhesive-20kg', 'Premium flexible tile adhesive. Suitable for walls and floors. Coverage: 4-5sqm', 18.99, NULL, 'c1000000-0000-0000-0000-000000000007', ARRAY['https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800'], 150, 'ACC-ADH-001', false),
('Grout Anthracite 5kg', 'grout-anthracite-5kg', 'Flexible wall and floor grout in anthracite. Coverage: 8-10sqm', 12.99, NULL, 'c1000000-0000-0000-0000-000000000007', ARRAY['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800'], 200, 'ACC-GRT-002', false),
('Tile Trim Chrome 2.5m', 'tile-trim-chrome-2-5m', 'Chrome tile trim for neat edge finishing. 10mm depth', 8.99, NULL, 'c1000000-0000-0000-0000-000000000007', ARRAY['https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800'], 300, 'ACC-TRM-003', false);
