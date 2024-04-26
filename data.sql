CREATE TABLE activities (
    id INTEGER PRIMARY KEY,
    title TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    outdoor INTEGER NOT NULL
);

CREATE TABLE materials (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    activity_id INTEGER NOT NULL,
    material_name TEXT NOT NULL,
    FOREIGN KEY (activity_id) REFERENCES activities(id)
);



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
