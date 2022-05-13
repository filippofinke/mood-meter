const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
require("dotenv").config();

let config;
if (fs.existsSync("./config.json")) {
  config = require("./config.json");
} else {
  console.log(`Please ensure the config.json file exists in the root directory.`);
  process.exit(0);
}

if (!fs.existsSync(".env")) {
  console.log(`Please rename the .env.sample file to .env`);
  process.exit(0);
}

let mood = 0;
try {
  mood = require("./mood.json");
} catch {}

const app = express();

app.use(morgan("common"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index",{title:process.env.TITLE});
});

app.get("/mood", (req, res) => {
  return res.json(mood);
});

app.post("/mood/:value", (req, res) => {
  if (isNaN(req.params.value)) return res.sendStatus(400);

  mood = req.params.value;
  fs.writeFileSync(path.join(__dirname, "mood.json"), mood);

  fetch(process.env.WEBHOOK).then(() => {
    console.log("Notification sent!");
  });

  return res.sendStatus(200);
});

app.get("/config", (req, res) => {
  return res.json(config.CONFIG);
});

app.listen(config.PORT, () => {
  console.log(`app listening on port ${config.PORT}`);
});
