const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswa.controllers");
/* GET users listing. */
router.get("/", mahasiswaController.index);
router.get("/api/getall", mahasiswaController.getAll);
router.get("/add", mahasiswaController.create);
router.post("/update", mahasiswaController.update);
router.get("/:nim/delete", mahasiswaController.delete);
router.get("/:nim/edit", mahasiswaController.edit);
router.get("/:nim", mahasiswaController.getOne);
router.post("/", mahasiswaController.insert);

module.exports = router;
