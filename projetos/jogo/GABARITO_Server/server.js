import express from "express";
import db from "./database.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "500kb" }));

app.get("/", async (req, res) => {
  let connection;
  try {
    const connection = await db;
    connection.query();
  } catch (err) {
    throw new Error(err);
  } finally {
    connection.close();
  }
});

app.get("/Carros", async (req, res) => {
    let connection;
    try {
      connection = await db.connect();
      const request = db.request();
      const results = await request.query("SELECT * FROM carro;");
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ err });
    } finally {
      connection.close();
    }
  });
  
 
  app.post("/Carros", async (req, res) => {
    let connection;
    try{
      connection = await db.connect();
      const request = db.request();
      console.log(req.body);
      const results = await request.query(`INSERT INTO carro 
       VALUES ( 
      ${req.body.cor_id}, '${req.body.nome}', '${req.body.marca}',
      ${req.body.ano}, ${req.body.quantidade_de_portas});`);
      
      res.status(201).json(results);
      console.log("Carro criado!");
    } catch (err) {
      res.status(500).json({ err });
    } finally {
      connection.close();
    }
  });

app.listen(3000);
