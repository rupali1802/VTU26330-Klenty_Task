import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })
  .promise();

pool
  .getConnection()
  .then((connection) => {
    console.log("✅ MySQL Connected Successfully");
    connection.release();
  })
  .catch((err) => {
    console.log("❌ Database Connection Failed");
    console.error(err);
  });

export default pool;