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
  //GET för att hämta samtliga aktiviteter
  app.get("/", async (request, response) => {
    const activities = await database.all(
      "SELECT * FROM activities ORDER BY RANDOM()",
      (error, result) => {
        if (error) {
          console.error("Fel vid hämtningen av aktiviteter", error);
          response.status(500).send("Det gick inte att hämta aktiviteter");
        }
        response.status(200).send(activities);
        console.log("Nu laddar jag aktiviteter");
      }
    );
  });
  //GET med adressparameter/params för att filtrera aktiviteter
  app.get("/activities/:category", (request, response) => {
    const category = request.params.category;
    database.all(
      "SELECT * FROM activities WHERE category =?",
      [category],
      (error, result) => {
        if (error) {
          console.error("Fel vid hämtningen av aktiviteter", error);
          response.status(500).send("Det gick inte att filtrera aktiviteter");
        }
        response.json(result);
      }
    );
  });
})();

app.listen(8080, () => {
  console.log("Redo att göra anrop på http://localhost:8080/");
});
