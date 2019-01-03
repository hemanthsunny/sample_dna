var fs = require("fs");
var path = require("path");

function readData() {
	let fileName = path.join(__dirname, "../data.txt");

	return new Promise((resolve, reject) => {
		fs.readFile(fileName, "utf-8", (e, res) => {
			if (e) {
				return reject(e);
			}
			return resolve(res);
		});
	}).then(data => {
		let dataArray = data.split("\n");
		dataArray = dataArray.map(item => {
			item = item.split("\t");
			return {
				rsid: item[0],
				chromosome: item[1],
				position: item[2],
				genotype: item[3]
			};
		});
		return dataArray;
	});
}

module.exports = readData;
