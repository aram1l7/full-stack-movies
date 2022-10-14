const express = require("express");
const movieController = require("../controllers/movies");
const query = require("../middleware/client");
const router = express.Router();

router.get("/", query, movieController.getAll);
router.get("/:id", query, movieController.getById);
router.post("/", query, movieController.addMovie);

module.exports = router;
