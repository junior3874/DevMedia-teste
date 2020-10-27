const routes = require("express").Router();

const knex = require("./database/connection");

routes
    .post("/news", async(req, res) => {
        const { title, description } = req.body;

        await knex("news").insert({ title, description });

        return res.send();
    })
    .get("/", (req, res) => {
        return res.sendFile("/index.html", {
            root: __dirname + "../../public",
        });
    })
    .get("/news", async(req, res) => {
        return res.sendFile("news.html", { root: __dirname + "../../public" });
    })
    .get("/all-news", async(req, res) => {
        const news = await knex("news").select("*");
        return res.json(news);
    });

module.exports = routes;