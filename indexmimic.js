import express from "express";
import cors from "cors";
import { Pool } from "pg";

const app = express();
const port = process.env.PORT || 3000;

// PostgreSQL database configuration
const pool = new Pool({
    user: "your_db_user",
    password: "your_db_password",
    host: "your_db_host",
    database: "your_db_name",
    port: 5432, // Default PostgreSQL port
});

// Middleware
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
            key2: "value2",
        },
    };
    res.json(responseObject);
});

// Define a POST route to insert data into the database
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

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
