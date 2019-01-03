var readFileData = require("../lib/read_data");
var genomeView = require("../views/genome.ejs");
var Genome = require("../models/genome-schema");

module.exports = function(app) {
	app.get("/", async function(req, res, next) {
		let groupByChromosome = [];
		// await Genome.find({}, function(err, data) {
		await readFileData().then(data => {
			for (let snp of data) {
				let chromosome = groupByChromosome.find(
					chr => chr.chromosome == snp.chromosome
				);
				if (!chromosome) {
					groupByChromosome.push({ chromosome: snp.chromosome, variants: 1 });
				} else {
					chromosome.variants += 1;
				}
			}
		// });
		});
		res.render("index", { items: groupByChromosome });
	});

	app.get("/create", async function(req, res, next) {
		let insertData = [];
		res.write("Records are creating. Please wait...")
		await readFileData()
			.then(async data => {
				await Genome.insertMany(data);
			})
		res.write("Created genome records from your text file ...!");
		res.end();
	});
};
