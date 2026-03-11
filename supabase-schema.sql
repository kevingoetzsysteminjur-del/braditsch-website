-- ============================================================
-- Braditsch Website – Supabase Datenbankschema
-- Ausführen in: Supabase Dashboard → SQL Editor
-- ============================================================

-- 1. PROFILES
-- Wird automatisch bei Registrierung befüllt (via Trigger)
CREATE TABLE IF NOT EXISTS profiles (
  id          UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name        TEXT,
  email       TEXT,
  role        TEXT DEFAULT 'user',
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

-- RLS aktivieren
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Nutzer sehen ihr eigenes Profil" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Nutzer können ihr Profil aktualisieren" ON profiles
  FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admin sieht alle Profile" ON profiles
  FOR ALL USING (auth.email() = 'antonia@braditsch.at');


-- 2. PRODUCTS (Audio-Shop)
CREATE TABLE IF NOT EXISTS products (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name        TEXT NOT NULL,
  slug        TEXT UNIQUE NOT NULL,
  description TEXT,
  price       NUMERIC(10,2) NOT NULL,
  category    TEXT DEFAULT 'klangmeditation',
  image_url   TEXT,
  audio_url   TEXT,
  active      BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle können aktive Produkte sehen" ON products
  FOR SELECT USING (active = true);
CREATE POLICY "Admin kann alles" ON products
  FOR ALL USING (auth.email() = 'antonia@braditsch.at');


-- 3. EVENTS (Termine)
CREATE TABLE IF NOT EXISTS events (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,
  subtitle    TEXT,
  description TEXT,
  date        DATE,
  time        TEXT,
  price       NUMERIC(10,2),
  location    TEXT DEFAULT 'VIVARIUM, Angergasse 7, 2493 Lichtenwörth',
  badge       TEXT,
  active      BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle können aktive Events sehen" ON events
  FOR SELECT USING (active = true);
CREATE POLICY "Admin kann alles" ON events
  FOR ALL USING (auth.email() = 'antonia@braditsch.at');


-- 4. GALLERY EVENTS
CREATE TABLE IF NOT EXISTS gallery_events (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title       TEXT NOT NULL,
  date        DATE,
  description TEXT,
  cover_image TEXT,
  active      BOOLEAN DEFAULT true,
  created_at  TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE gallery_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle können aktive Galerie-Events sehen" ON gallery_events
  FOR SELECT USING (active = true);
CREATE POLICY "Admin kann alles" ON gallery_events
  FOR ALL USING (auth.email() = 'antonia@braditsch.at');


-- 5. GALLERY IMAGES
CREATE TABLE IF NOT EXISTS gallery_images (
  id               UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  gallery_event_id UUID REFERENCES gallery_events ON DELETE CASCADE,
  image_url        TEXT NOT NULL,
  caption          TEXT,
  sort_order       INTEGER DEFAULT 0,
  created_at       TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Alle können Galerie-Bilder sehen" ON gallery_images
  FOR SELECT USING (true);
CREATE POLICY "Admin kann alles" ON gallery_images
  FOR ALL USING (auth.email() = 'antonia@braditsch.at');


-- 6. ORDERS (Bestellungen)
CREATE TABLE IF NOT EXISTS orders (
  id             UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id        UUID REFERENCES profiles ON DELETE SET NULL,
  customer_email TEXT NOT NULL,
  items          JSONB NOT NULL DEFAULT '[]',
  total          NUMERIC(10,2) NOT NULL DEFAULT 0,
  status         TEXT DEFAULT 'pending',
  created_at     TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Nutzer sehen ihre eigenen Bestellungen" ON orders
  FOR SELECT USING (auth.uid() = user_id OR customer_email = auth.email());
CREATE POLICY "Bestellungen erstellen" ON orders
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Admin kann alles" ON orders
  FOR ALL USING (auth.email() = 'antonia@braditsch.at');


-- ============================================================
-- TRIGGER: Profil automatisch bei Registrierung erstellen
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'name',
    NEW.email,
    'user'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ============================================================
-- STORAGE BUCKET für Galerie-Bilder
-- (Im Dashboard unter Storage erstellen oder via SQL)
-- ============================================================
-- INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);
