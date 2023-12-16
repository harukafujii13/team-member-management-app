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
    const tableCheckQuery =
      "SELECT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'members')";
    const tableExistsResult = await pool.query(tableCheckQuery);
    const tableExists = tableExistsResult.rows[0].exists;

    if (!tableExists) {
      console.log(`Table 'members' does not exist`);
      await seedDB();
    } else {
      console.log(`Table 'members' exists`);
    }
  } catch (err) {
    console.error(err);
  }
};

// Function to create the Members table and seed it with initial data
const seedDB = async () => {
  try {
    await pool.query(`DROP TABLE IF EXISTS members`);

    await pool.query(
      `CREATE TABLE members (
        member_id SERIAL PRIMARY KEY,
        first_name VARCHAR(100) NOT NULL,
        last_name VARCHAR(100) NOT NULL,
        email VARCHAR(255) UNIQUE,
        phone_num VARCHAR(15),
        role VARCHAR(10) NOT NULL DEFAULT 'Regular' CHECK (role IN ('Regular', 'Admin'))
      )`
    );
    console.log("Successful creation of the 'members' table");

    await pool.query(
      `INSERT INTO members (first_name, last_name, email, phone_num, role) VALUES
      ('Haruka', 'Fujii', 'haruka.fujii@gmail.com', '1234567890', 'Regular'),
      ('Admin', 'Ito', 'admin.ito@gmail.com', '0987654321', 'Admin')`
    );
    console.log("Successful creation of initial members");
  } catch (err) {
    console.error("Error in seedDB:", err.message);
  }
};

// Call the function to check if the table exists and seed the database
checkTableExists();

// Export the pool for use in other parts of your application
module.exports = pool;
