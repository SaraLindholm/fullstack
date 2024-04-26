const express = require("express"),
  sqlite = require("sqlite"),
  sqlite3 = require("sqlite3");

// const cors = require{"cors"},

// app.use(cors())
let database;

(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: "test.sqlite",
  });

  await database.run("PRAGMA foreign_keys = ON");

  app.use(express.json());

  app.post("/login", async (request, response) => {
    const { email, password } = request.body;

    //om email eller lösenord saknas:
    if (!email || !password) {
      response.status(400).send("Epost och/eller lösenord saknas");
      return;
    }

    //variabel letar/hämtar värden från databasen
    const account = await database.get(
      "SELECT * FROM accounts WHERE email = ? AND password = ?",
      [email, password]
    );
    //om account inte finns:
    if (!account) {
      response.status(401).send("Användaren finns inte");
    } else {
      response.status(200).send("Du är nu inloggad!");
    }
  });

  app.get("/messages", async (request, response) => {
    const messages = await database.all(
      "SELECT * FROM messages ORDER BY created"
    );
    response.send(messages);
    console.log("Nu hämtar jag meddelanden");
  });
})();

const app = express();

app.listen(8080, () => {
  console.log("Redo att göra anrop på http://localhost:8080/");
});
