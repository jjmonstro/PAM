import db from "../database.js";

async function getBau(req,res){
    let connection;
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query("SELECT * FROM Bau;");
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }
  
  async function getBauById(req,res) {
    try {
      connection = await db.connect();
      const request = await db.request();
      const results = await request.query(`SELECT * FROM Bau b WHERE b.id = ${req.params.id};`);
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message)
      res.status(500).json( err );
    } finally {
      connection.close();
    }
  }

export {getBau, getBauById}