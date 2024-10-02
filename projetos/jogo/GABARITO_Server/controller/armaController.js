import db from "../database.js";

async function getArma(req,res){
    let connection;
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query("SELECT * FROM Arma;");
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }
  
  async function getArmaById(req,res) {
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query(`SELECT * FROM Arma a WHERE a.id = ${req.params.id};`);
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
    
  }

export {getArma, getArmaById}