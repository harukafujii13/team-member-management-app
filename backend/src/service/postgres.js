const { Pool } = require("pg");

// Setup the connection pool to the PostgreSQL database
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Function to check if the Members table exists and seed the database
const checkTableExists = async () => {
  try {
    const data = await pool.query(`SELECT to_regclass('Members')`);
    if (data.rows.length === 0) {
      console.log(`Table 'Members' does not exist`);
      await seedDB();
    } else {
      console.log(`Table 'Members' exists`);
    }
  } catch (err) {
    console.error(err);
  }
};

// Function to create the Members table and seed it with initial data
const seedDB = async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS Members`);

    await pool.query(
      `CREATE TABLE Members (
        Member_ID SERIAL PRIMARY KEY,
        FirstName VARCHAR(100) NOT NULL,
        LastName VARCHAR(100) NOT NULL,
        Email VARCHAR(255) UNIQUE,
        PhoneNum VARCHAR(15),
        Role VARCHAR(10) NOT NULL DEFAULT 'Regular' CHECK (Role IN ('Regular', 'Admin'))
      )`
    );
    console.log("Successful creation of the 'Members' table");

    await pool.query(
      `INSERT INTO Members (FirstName, LastName, Email, PhoneNum, Role) VALUES
      ('Haruka', 'Fujii', 'haruka.fujii@gmail.com', '1234567890', 'Regular'),
      ('Admin', 'Ito', 'admin.ito@gmail.com', '0987654321', 'Admin')`
    );
    console.log("Successful creation of initial members");
  } catch (err) {
    console.error(err.message);
  }
};

// Call the function to check if the table exists and seed the database
checkTableExists();

// Export the pool for use in other parts of your application
module.exports = pool;
