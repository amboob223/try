const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middlewarte
app.use(cors());
app.use(express.json());

// Define a sample route for the root path ("/")
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Define the "/hello" route with a JSON response
app.get("/hello", (req, res) => {
    const responseObject = {
        message: "Hello from the /hello route!",
        data: {
            key1: "value1",
            key2: "value2"
        }
    };
    res.json(responseObject);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
