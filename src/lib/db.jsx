import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5794333',
  password: 'jfHpbHbeCu',  // your xampp password, empty by default
  database: 'sql5794333',
  port: 3306
});


export default db;

{/** 
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',  // your xampp password, empty by default
  database: 'Noretek_Energy_db'
});

export default db;
*/}