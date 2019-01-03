const mongoose = require("mongoose");

var GenomeSchema = new mongoose.Schema({
	rsid: String,
	chromosome: { type: String, index: true },
	position: String,
	genotype: String
});

module.exports = mongoose.model("genome", GenomeSchema);
