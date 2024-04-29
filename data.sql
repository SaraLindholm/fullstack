-- CREATE TABLE activities (
--     id INTEGER PRIMARY KEY,
--     title TEXT UNIQUE NOT NULL,
--     category TEXT NOT NULL,
--     description TEXT NOT NULL,
--     outdoor INTEGER NOT NULL
-- );

-- CREATE TABLE materials (
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     activity_id INTEGER NOT NULL,
--     material_name TEXT NOT NULL,
--     FOREIGN KEY (activity_id) REFERENCES activities(id)
-- );

true false
1 och 0

CREATE TABLE activities (
    id INTEGER PRIMARY KEY,
    title TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    materials TEXT NOT NULL,
    outdoor INTEGER NOT NULL
);
INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Gör din egen fågelholk', 'pyssel', 'Bygg en fågelholk tillsammans med ditt barn för att ge fåglarna i trädgården en plats att bo och ruva sina ägg.', 'Träbrädor, Såg, Spik, Hammare', 1);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Plantera en örtträdgård', 'pyssel', 'Skapa en örtträdgård på balkongen eller i trädgården och låt ditt barn ta hand om örterna. Det är både lärorikt och kul att odla sina egna kryddor!', 'Örtplantor, Jord, Krukor', 1);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Utforska naturen med en naturvandring', 'lek', 'Gå på en naturvandring med ditt barn och utforska skogen, parken eller stranden. Letar efter olika växter, djur och stenar för att lära sig mer om naturen.', 'Bekväma skor, Vattenflaska, Ficklampa, Kikare', 1);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Gör ditt eget pappersflygplan', 'lek', 'Tillverka pappersflygplan tillsammans med ditt barn och ha sedan en tävling för att se vem som kan flyga längst. Använd olika vikningsmetoder och testa olika design för att maximera flygsträckan.', 'Papper, Pennor, Sax', 1);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Bygg en koja eller tält', 'lek', 'Skapa en koja eller tält inne i huset eller i trädgården och låt ditt barn leka och fantisera i sin egen lilla tillflyktsort.', 'Täcken, Kuddar, Klädnypor, Snöre', 1);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Gör din egen glass', 'mat', 'Blanda grädde, socker och valfria smaksättningar för att skapa din egen glass tillsammans med ditt barn. Använd glassmaskin eller frysmetod för att frysa glassen.', 'Grädde, Socker, Smaksättningar, Glassmaskin', 0);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Skapa din egen mosaik', 'pyssel', 'Låt ditt barn arrangera färgglada kakelbitar eller mosaikplattor för att skapa vackra mönster och bilder. Limma sedan kakelbitarna på en träplatta för att göra en unik mosaik.', 'Kakelbitar, Lim, Träplatta', 0);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Gör din egen biografpopcorn', 'mat', 'Poppa popcorn tillsammans med ditt barn och tillsätt smör och salt för att skapa din egen biografpopcorn. Servera popcornen i en stor skål och njut av en filmkväll tillsammans.', 'Majs, Smör, Salt', 0);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Skapa din egen fågelmatare', 'pyssel', 'Bygg en fågelmatare med återvunna material som mjölkpaket eller petflaskor och fyll den med fågelfröer för att locka till sig olika fågelarter till trädgården.', 'Återvunna material, Fågelfröer, Snöre eller tråd', 1);

INSERT INTO activities (title, category, description, materials, outdoor) VALUES ('Gör din egen trolldeg', 'pyssel', 'Blanda mjöl, salt och vatten för att skapa din egen trolldeg tillsammans med ditt barn. Forma sedan degen till olika figurer och låt dem torka eller baka i ugnen.', 'Mjöl, Salt, Vatten, Ev. hushållsfärg', 0);


-- Fortsätt på samma sätt för varje återstående aktivitet i din JSON-fil


-- Fortsätt på samma sätt för varje aktivitet i din JSON-fil


-- INSERT INTO messages (sender_id, recipient_id, text) VALUES (2, 1, 'jag älskar monstertrucks, gör du ?');

-- CREATE TABLE messages (
-- id INTEGER PRIMARY KEY,
-- sender_id INTEGER,
-- recipient_id INTEGER,
-- text TEXT NOT NULL,
-- created TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
-- CHECK(sender_id != recipient_id),
-- CHECK (LENGTH(text) >=1),
-- FOREIGN KEY (sender_id) REFERENCES accounts(id),
-- FOREIGN KEY (recipient_id) REFERENCES accounts(id)
-- )

-- INSERT INTO messages (sender_id, recipient_id, text) VALUES (2, 1, 'jag älskar monstertrucks, gör du ?');


-- CREATE TABLE accounts (
--   id INTEGER PRIMARY KEY,
--   email  TEXT UNIQUE NOT NULL,
--   password TEXT NOT NULL,
--   created TEXT NOT NULL DEFAULT CURRENT_DATE,
--   CHECK (LENGTH(password) >=6)
-- )

-- CREATE TABLE tokens (
--   account_id INTEGER,
--   token TEXT UNIQUE NOT NULL,
--   FOREIGN KEY (account_id) REFERENCES  accounts(id)
-- )
