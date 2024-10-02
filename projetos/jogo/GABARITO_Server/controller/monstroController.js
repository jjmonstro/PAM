import db from "../database.js";

async function getMonstro(req,res){
    let connection;
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query("SELECT * FROM Monstro;");
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }
  
  async function getMonstroById(req,res) {
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query(`SELECT * FROM Monstro m WHERE m.id = ${req.params.id};`);
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }

export {getMonstro, getMonstroById}