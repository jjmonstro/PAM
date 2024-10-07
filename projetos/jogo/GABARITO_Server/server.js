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
      try {
        connection = await db.connect();
      } catch (error) {
        console.error(db);
        console.error('Error bb', error);
      }
      
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

  //------------------------------------------------------------

//--------- get e post do personagem -------------------
app.get("/Personagem", async (req, res) => {
  let connection;
  try {
    connection = await db.connect();
    const request = await db.request();
    const results = await request.query("SELECT * FROM Personagem;");
    res.status(200).json(results);
  } catch (err) {
    console.log(err.message)
    res.status(500).json( err );
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
    ${req.body.personagem_ID}, '${req.body.nome}', ${req.body.vidaMax},
    ${req.body.vidaAtual}, ${req.body.forca}, ${req.body.agilidade}, ${req.body.nivel}, ${req.body.posicao});`);
    
    res.status(201).json(results);
    console.log("Personagem");
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

//--------- get e post da arma -------------------

app.get("/Arma", async (req, res) => {
  let connection;
  try {
    connection = await db.connect();
    const request = db.request();
    const results = await request.query("SELECT * FROM Arma;");
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

// como não vair criar armas acho que o post não deveria esxistir, porém, vou deixar ai mesmo (vai que)
app.post("/Arma", async (req, res) => {
  let connection;
  try{
    connection = await db.connect();
    const request = db.request();
    console.log(req.body);
    const results = await request.query(`INSERT INTO Arma 
     VALUES ( 
    ${req.body.arma_ID}, '${req.body.nome}', ${req.body.dano},
    '${req.body.descricao}');`);
    
    res.status(201).json(results);
    console.log("Arma");
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

//--------- get e post da sala -------------------
app.get("/Sala", async (req, res) => {
  let connection;
  try {
    connection = await db.connect();
    const request = db.request();
    const results = await request.query("SELECT * FROM Sala;");
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

  // como não vair criar salas acho que o post não deveria esxistir, porém, vou deixar ai mesmo (vai que)
app.post("/Sala", async (req, res) => {
  let connection;
  try{
    connection = await db.connect();
    const request = db.request();
    console.log(req.body);
    const results = await request.query(`INSERT INTO Sala 
     VALUES ( 
    ${req.body.sala_ID}, ${req.body.monstro_ID}, ${req.body.bau_id});`);
    
    res.status(201).json(results);
    console.log("Sala");
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

//--------- get e post da Pocao -------------------
app.get("/Pocao", async (req, res) => {
  let connection;
  try {
    connection = await db.connect();
    const request = db.request();
    const results = await request.query("SELECT * FROM Pocao;");
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

    // como não vair criar poções acho que o post não deveria esxistir, porém, vou deixar ai mesmo (vai que)
app.post("/Pocao", async (req, res) => {
  let connection;
  try{
    connection = await db.connect();
    const request = db.request();
    console.log(req.body);
    const results = await request.query(`INSERT INTO Pocao 
     VALUES ( 
    ${req.body.pocao_ID}, '${req.body.nome}', ${req.body.ganho_vida}, ${req.body.ganho_nivel});`);
    
    res.status(201).json(results);
    console.log("Pocao");
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

//--------- get e post do Monstro -------------------
app.get("/Monstro", async (req, res) => {
  let connection;
  try {
    connection = await db.connect();
    const request = db.request();
    const results = await request.query("SELECT * FROM Monstro;");
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

    // como não vair criar monstros acho que o post não deveria esxistir, porém, vou deixar ai mesmo (vai que)
app.post("/Monstro", async (req, res) => {
  let connection;
  try{
    connection = await db.connect();
    const request = db.request();
    console.log(req.body);
    const results = await request.query(`INSERT INTO Monstro 
     VALUES ( 
    ${req.body.monstro_ID}, '${req.body.nome}', ${req.body.vidaMax}, ${req.body.vidaAtual},
    ${req.body.forca}, ${req.body.agilidade});`);
    
    res.status(201).json(results);
    console.log("Monstro");
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
});

  //--------- get e post do Bau -------------------
  app.get("/Bau", async (req, res) => {
    let connection;
    try {
      connection = await db.connect();
      const request = db.request();
      const results = await request.query("SELECT * FROM Bau;");
      res.status(200).json(results);
    } catch (err) {
      res.status(500).json({ err });
    } finally {
      connection.close();
    }
  });

      // como não vair criar baus acho que o post não deveria esxistir, porém, vou deixar ai mesmo (vai que)
  app.post("/Bau", async (req, res) => {
    let connection;
    try{
      connection = await db.connect();
      const request = db.request();
      console.log(req.body);
      const results = await request.query(`INSERT INTO Bau 
       VALUES ( 
      ${req.body.bau_id}, ${req.body.pocao_ID}, ${req.body.arma_ID});`);
      
      res.status(201).json(results);
      console.log("Bau");
    } catch (err) {
      res.status(500).json({ err });
    } finally {
      connection.close();
    }
  });


app.listen(3000);
