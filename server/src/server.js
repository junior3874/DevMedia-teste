const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

app
    .use(cors())
    .use(express.json())
    .use(require("./routes"))
    .use(express.urlencoded({ extended: true }))
    .use("/", express.static(path.join(__dirname, "../public")));

app.listen(3000);