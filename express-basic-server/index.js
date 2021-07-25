const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (_req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(PORT, () => console.log(`Running on https://localhost:${PORT}`));
