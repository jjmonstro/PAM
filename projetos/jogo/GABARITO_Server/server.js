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

app.get("/Personagem", async (req, res) => {
    let connection;
    try {
      connection = await db.connect();
      const request = db.request();
      const results = await request.query("SELECT * FROM Personagem;");
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ err });
    } finally {
      connection.close();
    }
  });
  
 
  app.post("/Personagem", async (req, res) => {
    let connection;
    try{
      connection = await db.connect();
      const request = db.request();
      console.log(req.body);
      const results = await request.query(`INSERT INTO Personagem 
       VALUES ( 
      ${req.body.personagem_ID}, '${req.body.nome}', '${req.body.vidaMax}',
      ${req.body.vidaAtual}, ${req.body.forca}), '${req.body.agilidade}', '${req.body.mana}';`);
      
      res.status(201).json(results);
      console.log("Personagem");
    } catch (err) {
      res.status(500).json({ err });
    } finally {
      connection.close();
    }
  });

app.listen(3000);
