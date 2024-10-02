import db from "../database.js";

async function getPocao(req,res){
    let connection;
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query("SELECT * FROM Pocao;");
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }
  
  async function getPocaoById(req,res) {
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query(`SELECT * FROM Pocao p WHERE p.id = ${req.params.id};`);
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }

export {getPocao, getPocaoById}