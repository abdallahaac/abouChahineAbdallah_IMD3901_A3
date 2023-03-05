const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server); //our websockets library

const LISTEN_PORT = 8080;

//our routes
app.get("/", function (req, res) {
	res.sendFile("index.html", { root: __dirname + "/public/" });
});

const foo = () => {
	console.log("working");
};

//socket.io events
io.on("connection", (socket) => {
	console.log(socket.id + " is connected! HELLO!");

	socket.on("disconnect", () => {
		console.log(socket.id + " is disconnected. BYE!");
	});

	socket.on("red", (data) => {
		console.log("red event triggered");
		io.emit("color_change", { r: 255, g: 0, b: 0 });
	});

	socket.on("scoreUpdate", (data) => {
		console.log("okay it is working" + data.score);
	});
});

app.use(express.static(__dirname + "/public"));
server.listen(LISTEN_PORT);
console.log("Listening to port: " + LISTEN_PORT);
