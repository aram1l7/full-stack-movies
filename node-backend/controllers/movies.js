const getAll = async (req, res) => {
  try {
    const data = await req.client.query(`SELECT * FROM movies`);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error, "error");
    return res.status(400).json(error);
  }
};

const getById = async (req, res) => {
  try {
    const data = await req.client.query(
      `SELECT * FROM movies WHERE id = ($1)`,
      [req.params.id]
    );
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const addMovie = async (req, res) => {
  const { title, year, runtime, genre, writer, username } = req.body;
  try {
    const result = await req.client.query(
      `
    INSERT INTO movies (title, year, runtime, genre, writer) 
    VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [title, year, runtime, genre, writer]
    );
    // const res2 = await req.client.query(
    //  `
    //  DO $$
    //  IF EXISTS (SELECT * FROM users WHERE name = ($1))
    //  BEGIN
    //    SELECT * FROM users WHERE name = ($1) RETURNING id
    //  END
    //  ELSE
    //  BEGIN
    //    INSERT INTO users (name)
    //    VALUES ($1)
    //  END
    //  $$
    //  `,
    //   [username]
    // );
    console.log(res2, "response")
    console.log(result.rows, "rows");
    res.json(result.rows[0]);
  } catch (err) {
    console.log(err, "err");
    return res.status(400).json(err);
  }
};

module.exports = { addMovie, getAll, getById };
