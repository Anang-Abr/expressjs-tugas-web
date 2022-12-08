const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswa.controllers");

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Dashboard Mahasiswa" });
});

module.exports = router;
