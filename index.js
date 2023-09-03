const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewarte
app.use(cors());
app.use(express.json());





// Replace the HTTP server code with this:
app.get("/", (req, res) => {
    res.send("Help World");
});



app.get("/hello", (req, res) => {
    const { main } = req.body; // Extract data from query parameters
    
    res.json({main});
});

https://codevolution-demo-8o2k.onrender.com/hello?main=World



// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World");
// });

{
    let PORT = process.env.PORT || 3000;

    app.listen(PORT, () => console.log("server is running"));
}
