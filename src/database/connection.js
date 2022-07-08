import sql from "mssql";
import { settings } from "../config/index.js";
export { sql };

export const dbSettings = {
  user: settings.dbUser,
  password: settings.dbPassword,
  server: settings.dbServer,
  database: settings.dbDatabase,
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error('Se ha producido un error al intentar conectar con la Base de Datos');
    console.error(error);
  }
};


