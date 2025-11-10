import express from "express";
import conectaNaDataBase from "./config/dbConnet.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
    
})

const app = express();
routes(app)
//middleware

//CRUD (CREAT, READ, UPDATE, DELETE)
export default app;

