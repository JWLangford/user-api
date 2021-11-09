import express from "express";
import { JSONFile, Low } from "lowdb";
import { join } from "path";
import swaggerUi from "swagger-ui-express";
import { defaultData } from "./src/utils/database.js";
import { swaggerDocs } from "./src/utils/swagger.js";

const file = join("db.json");
const adapter = new JSONFile(file);
const db = new Low(adapter);

db.data = defaultData;
const { users } = db.data;

const app = express();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/users/api", (req, res) => {
  console.log("test4");
  res.send(users);
});

app.get("/ufdsfs/:id", (req, res) => {
  const id = req.params.id;
  res.send(users[0]);
});

const server = app.listen(3001, () => {
  console.log("listening on port %s...", server.address().port);
});
