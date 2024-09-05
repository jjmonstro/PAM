import express from "express";
import db from "./database.js";
import routes from "./routes/routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "500kb" }));
//app.use(routes);

app.listen(3000, ()=> {console.log(" Executando na porta 3000")});