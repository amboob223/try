const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewarte
app.use(cors());
app.use(express.json());





// Replace the HTTP server code with this:
app.get("/", (req, res) => {
    res.send("Hell World");
});


// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World");
// });

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("server is running"));
