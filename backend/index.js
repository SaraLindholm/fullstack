const express = require("express"),
  cors = require("cors"),
  sqlite = require("sqlite"),
  sqlite3 = require("sqlite3");

const app = express();

app.use(express.json());

let database;

app.use(cors());

(async () => {
  database = await sqlite.open({
    driver: sqlite3.Database,
    filename: "data.sqlite",
  });

  await database.run("PRAGMA foreign_keys = ON");

  // app.post("/login", async (request, response) => {
  //   const { email, password } = request.body;

  //   //om email eller lösenord saknas:
  //   if (!email || !password) {
  //     response.status(400).send("Epost och/eller lösenord saknas");
  //     return;
  //   }

  //   //variabel letar/hämtar värden från databasen
  //   const account = await database.get(
  //     "SELECT * FROM accounts WHERE email = ? AND password = ?",
  //     [email, password]
  //   );
  //   //om account inte finns:
  //   if (!account) {
  //     response.status(401).send("Användaren finns inte");
  //   } else {
  //     response.status(200).send("Du är nu inloggad!");
  //   }
  // });

  app.get("/", async (request, response) => {
    const activities = await database.all(
      "SELECT * FROM activities ORDER BY RANDOM()"
    );
    response.status(200).send(activities);
    console.log("Nu laddar jag aktiviteter");
  });
})();

app.listen(8080, () => {
  console.log("Redo att göra anrop på http://localhost:8080/");
});
