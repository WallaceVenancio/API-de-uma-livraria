import express from "express";
import livros from "./livrosRoutes.js";

const routes = (app) => {
    app.routes("/").get((req, res) => res.status(200).send("Curso de node.js"));
    
    app.use(express.json(), livros);
};

export default routes