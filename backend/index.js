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
    try {
      // Försök att hämta aktiviteter från databasen
      const activities = await database.all(
        "SELECT * FROM activities ORDER BY RANDOM()"
      );

      // Skicka aktiviteterna till klienten om allt gick bra
      response.status(200).send(activities);
      console.log("Aktiviteter har laddats");
    } catch (error) {
      // Om det uppstår ett fel, hantera det här
      console.error("Fel vid hämtning av aktiviteter:", error);
      response
        .status(500)
        .send("Ett fel inträffade vid hämtning av aktiviteter");
    }
  });

  //GET med adressparameter/params för att filtrera aktiviteter
  app.get("/activityView/:category", async (request, response) => {
    console.log("heej");

    const category = request.params.category;
    const result = await database.all(
      "SELECT * FROM activities WHERE category =?",
      [category]
    );
    console.log(result);
    if (!result) {
      // console.error("Fel vid filtrering av aktiviteter:", error);
      return response
        .status(500)
        .send("Ett fel inträffade vid filtrering av aktiviteter");
    }
    return response.json(result);
  });
})();

app.listen(8080, () => {
  console.log("Redo att göra anrop på http://localhost:8080/");
});
