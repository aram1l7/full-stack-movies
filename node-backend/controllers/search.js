const axios = require("axios");
require("dotenv").config();
const search = async (req, res) => {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&t=${req.query.title}`
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(error, "error");
    return res.status(400).json({ error });
  }
};

module.exports = { search };
