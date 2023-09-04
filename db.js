const Pool = require("pg").Pool;

const POOL = new Pool({
    connectionString: "postgres://monk:Le4h5PJTF7wRmdV56nNI0g5RvKg8FrLT@dpg-cjq6aje1208c73824su0-a.oregon-postgres.render.com/try_kmt8"

    // user: "playabook",
    // password: "8896",
    // database: "try",
    // host: "localhost",
    // port: 5432
});

module.exports = POOL