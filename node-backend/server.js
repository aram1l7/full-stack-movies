const express = require("express");
const { connectDb } = require("./db/connect");
const app = express();
const path = require("path");
const searchRoutes = require("./routes/search");
const movieRoutes = require("./routes/movies");
const bodyParser = require("body-parser");
const cors = require("cors");
connectDb();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});
app.use("/api/movies", movieRoutes);

app.use("/search", searchRoutes);

app.listen(4000, () => {
  console.log("Running on port 4000");
});
