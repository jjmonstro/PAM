import mssql from 'mssql';

const sqlServerConfig = {
  user: 'sa',
  password: '123456',
  database: 'PCII_DB',
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export default mssql.connect(sqlServerConfig);