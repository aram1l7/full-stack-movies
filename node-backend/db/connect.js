const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "moviesapp",
});

const connectDb = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to postgres client");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = {
  client,
  connectDb,
};
