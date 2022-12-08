const connection = require("../database");

module.exports = {
	getAll(cb) {
		connection.query("SELECT * FROM mahasiswa", cb);
	},
	getDataById(nim, cb) {
		connection.query("SELECT * FROM mahasiswa where nim = ?", [nim], cb);
	},
	insert(args, cb) {
		const dataArr = [args.nama, args.nim, args.jurusan];
		connection.query("INSERT INTO mahasiswa set ?", args, cb);
	},
	update(args, nim, cb) {
		const dataArr = [args.nama, args.nim, args.jurusan];
		connection.query("UPDATE mahasiswa set ? where nim = ?", [args, nim], cb);
	},
	delete(nim, cb) {
		connection.query("DELETE from mahasiswa where nim = ?", [nim], cb);
	},
};
