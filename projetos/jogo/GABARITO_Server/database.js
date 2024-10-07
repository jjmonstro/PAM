import mssql from 'mssql';

const sqlServerConfig = {
  user: 'sa',
  password: '*123456HAS*',
  database: 'Jogo',
  server: 'localhost',
  port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

//tentativa de conserto
export const connect = async () => {
  try {
      const connection = await mysql.createConnection(sqlServerConfig);
      console.log('Connected to MySQL');
      return connection; // Return the connection object
  } catch (error) {
      console.error('Error connecting to MySQL:', error);
      throw error; // Rethrow the error to be handled elsewhere
  }
};


export default mssql.connect(sqlServerConfig);