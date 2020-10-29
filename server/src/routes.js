const routes = require("express").Router();
const yup = require("yup");
const knex = require("./database/connection");

routes
    .post("/news", async(req, res) => {
        const { title, description } = req.body;

        const bodySchema = yup.object().shape({
            title: yup.string().max(25).required(),
            description: yup.string().min(100).required(),
        });

        if (!(await bodySchema.isValid({ title, description }))) {
            return res
                .status(400)
                .json({ error: true, message: "Validation failed!" });
        }
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