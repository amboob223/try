const Pool = require("pg").Pool;

const POOL = new Pool({
    user: "playabook",
    password: "8896",
    database: "try",
    host: "localhost",
    port: 5432
});

module.exports = POOL