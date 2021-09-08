const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

let config;
if (fs.existsSync("./config.json")) {
	config = require("./config.json");
} else {
	console.log(`Please rename the config.sample.json file to config.json`);
	process.exit(0);
}

let mood = 0;
try {
	mood = require("./mood.json");
} catch {}

const app = express();

app.use(morgan("common"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/mood", (req, res) => {
	return res.json(mood);
});

app.post("/mood/:value", (req, res) => {
	if (isNaN(req.params.value)) return res.sendStatus(400);

	mood = req.params.value;
	fs.writeFileSync(path.join(__dirname, "mood.json"), mood);

	fetch(config.WEBHOOK).then(() => {
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
