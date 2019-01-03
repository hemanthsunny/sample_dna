const app = require("./app");
const port = 8080;
const server = app.listen(port);

server.on('listening', () => {
	console.log("Listening to", port)
})