const mahasiswaModel = require("../models/mahasiswa.model");

module.exports = {
	index(req, res) {
		mahasiswaModel.getAll((err, results) => {
			if (err) return res.status(500).send("server error");
			return res.render("mahasiswa/index", { mahasiswa: results });
		});
	},
	getOne(req, res) {
		const { nim } = req.params;
		mahasiswaModel.getDataById(nim, (err, results) => {
			if (err) return res.status(500).send("server error");
			return res.render("mahasiswa/show", { mahasiswa: results[0] });
		});
	},
	insert(req, res) {
		const { nama, nim, jurusan } = req.body;
		if (!nama) return res.status(400).json({ message: "nama harus diisi" });
		if (!nim) return res.status(400).json({ message: "NIM harus diisi" });
		if (nim.length > 10)
			return res.status(400).json({ message: "NIM tidak valid" });
		if (!jurusan)
			return res.status(400).json({ message: "jurusan harus diisi" });
		const data = { nama, nim, jurusan };
		// res.json(data);
		mahasiswaModel.insert(data, (err, results) => {
			if (err) return res.status(500).send("server error");
			if (results.affectedRows == 1) res.redirect("/mahasiswa");
		});
	},
	create(req, res) {
		return res.render("mahasiswa/create");
	},
	edit(req, res) {
		const { nim } = req.params;
		console.log("masuk ke edit controller", nim);
		mahasiswaModel.getDataById(nim, function (err, data) {
			console.log(data);
			return res.render("mahasiswa/edit", { data: data[0] });
		});
	},
	update(req, res) {
		const { nim, nama, jurusan, id } = req.body;
		console.log({ nim, nama, jurusan, id });
		mahasiswaModel.update({ nama, jurusan }, nim, (err, data) => {
			if (err) return res.status(500).send("server error");
			if (data.affectedRows == 1) res.redirect("/mahasiswa");
		});
	},
	delete(req, res) {
		const { nim } = req.params;
		mahasiswaModel.delete(nim, (err, data) => {
			if (err) return res.status(500).send("server error");
			if (data.affectedRows == 1) res.redirect("/mahasiswa");
		});
	},
	getAll(req, res) {
		mahasiswaModel.getAll((err, results) => {
			if (err) return res.status(500).send("server error");
			return res.json(results);
		});
	},
};
