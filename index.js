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

app.post("/hello", async (req, res) => {
    try {
        const { hello } = req.body;
        const data = await pool.query(
            "INSERT INTO try(id,hello) VALUES(default, $1) RETURNING *",
            [hello]
        );
        res.json(data.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred" });
    }
});


{
    const PORT = process.env.PORT || 3000
    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
