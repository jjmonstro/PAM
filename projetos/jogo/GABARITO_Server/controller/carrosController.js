import db from "../database.js";

async function getCarros(req, res) {
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
}

async function getCarroById(req, res) {
  let connection;
  try {
    connection = await db.connect();
    const request = db.request();
    const results = await request.query(
      `SELECT * FROM carro INNER JOIN cor ON cor.id = carro.cor_id
         WHERE carro.id = ${req.params.id} ;`
    );
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json({ err });
  } finally {
    connection.close();
  }
}

async function createCarro(req, res){
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
}


export { getCarros, getCarroById, createCarro };